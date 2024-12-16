let dbtFieldMappings = {
    "Condition": [{ fhir: "onsetDateTime", database: "onset_datetime" }],
    "Observation": [
        { fhir: "effectiveDateTime", database: "effective_datetime" },
        { fhir: "valueQuantity", database: "value_quantity" },
        { fhir: "id", database: "observation_id" },
    ],
    "Patient": [
        { fhir: "deceasedDateTime", database: "deceased_datetime" },
        { fhir: "birthDate", database: "birth_date" },
        { fhir: "id", database: "patient_id" },
    ],
    "Procedure": [
        { fhir: "performedDateTime", database: "performed_datetime" },
        { fhir: "performedPeriod", database: "performed_period" },
    ],
    "ServiceRequest": [
        { fhir: "occurrenceDateTime", database: "occurrence_datetime" },
    ],
    "Encounter": [
        { fhir: "actualPeriod", database: "actual_period" },
        { fhir: "id", database: "encounter_id" },
        { fhir: "location_location_reference", database: "location_reference_identifier"}
    ],
    "MedicationAdministration": [
        { fhir: "occurrenceDateTime", database: "occurrence_datetime" },
        { fhir: "occurrencePeriod", database: "occurrence_period" },
        { fhir: "rateQuantity", database: "rate_quantity" },
    ],
    "Location": [
        { fhir: "partOf", database: "part_of" },
        { fhir: "id", database: "bed_id" },
    ],
};

const customAttributes = {
    Patient: [
        { name: "age", type: "integer" },
        { name: "is_deceased", type: "boolean" },
    ],
    Encounter: [{ name: "service_type", type: "string" }],
};

function mapAttributesToDatabaseColumns(resourceAttributesByResource) {
    const resourceTypes = Object.keys(resourceAttributesByResource);

    resourceTypes.forEach((resourceType) => {
        const attributes = resourceAttributesByResource[resourceType];
        const fieldMappings = dbtFieldMappings[resourceType];

        if (fieldMappings) {
            fieldMappings.forEach(({ fhir, database }) => {
                // Find all matching attribute indexes
                const matchingIndexes = attributes.reduce(
                    (indexes, attribute, index) => {
                        const attributeParts = attribute.name.split("_");
                        if (attributeParts.includes(fhir)) {
                            indexes.push(index);
                        }
                        return indexes;
                    },
                    []
                );

                // Replace the matched segment in each attribute name
                matchingIndexes.forEach((index) => {
                    const attributeParts = attributes[index].name.split("_");
                    attributes[index].name = attributeParts
                        .map((part) => (part === fhir ? database : part))
                        .join("_");
                });
            });
        }

        addResourceSpecificAttributes(attributes, resourceType);
        return attributes;
    });
}

function addResourceSpecificAttributes(attributes, resourceType) {
    const additionalAttributes = customAttributes[resourceType];

    if (additionalAttributes) {
        additionalAttributes.forEach((customAttribute) => {
            const exists = attributes.some(
                (attr) => attr.name === customAttribute.name
            );

            if (!exists) {
                attributes.push(customAttribute);
            }
        });
    }
}

module.exports = mapAttributesToDatabaseColumns;
