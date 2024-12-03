let dbtFieldMappings = {
    "Condition": [{ fhir: "onsetDateTime", database: "onset.datetime" }],
    "Observation": [
        { fhir: "effectiveDateTime", database: "effective.datetime" },
        { fhir: "valueQuantity", database: "value.quantity" },
        { fhir: "id", database: "observation_id" },
    ],
    "Patient": [
        { fhir: "deceasedDateTime", database: "deceased.datetime" },
        { fhir: "birthDate", database: "birth.date" },
        { fhir: "id", database: "patient_id" },
    ],
    "Procedure": [
        { fhir: "performedDateTime", database: "performed.datetime" },
        { fhir: "performedPeriod", database: "performed.period" },
    ],
    "ServiceRequest": [
        { fhir: "occurrenceDateTime", database: "occurrence.datetime" },
    ],
    "Encounter": [
        { fhir: "actualPeriod", database: "actual.period" },
        { fhir: "id", database: "encounter_id" },
    ],
    "MedicationAdministration": [
        { fhir: "occurrenceDateTime", database: "occurrence.datetime" },
        { fhir: "occurrencePeriod", database: "occurrence.period" },
        { fhir: "rateQuantity", database: "rate.quantity" },
    ],
    "Location": [
        { fhir: "partOf", database: "part.of" },
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
                        const attributeParts = attribute.name.split(".");
                        if (attributeParts.includes(fhir)) {
                            indexes.push(index);
                        }
                        return indexes;
                    },
                    []
                );

                // Replace the matched segment in each attribute name
                matchingIndexes.forEach((index) => {
                    const attributeParts = attributes[index].name.split(".");
                    attributes[index].name = attributeParts
                        .map((part) => (part === fhir ? database : part))
                        .join(".");
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
