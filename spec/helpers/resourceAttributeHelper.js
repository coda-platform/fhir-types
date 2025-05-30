let dbtFieldMappings = {
    "Condition": [{ fhir: "onsetDateTime", database: "onset_datetime" }],
    "Observation": [
        { fhir: "effectiveDateTime", database: "effective_datetime" },
        { fhir: "valueQuantity_value", database: "value_quantity_value" },
        { fhir: "valueQuantity_unit", database: "value_quantity_unit" },
        { fhir: "id", database: "observation_id" },
    ],
    "Observation_VitalSigns": [
        { fhir: "effectiveDateTime", database: "effective_datetime" },
        { fhir: "valueQuantity_value", database: "value_quantity_value" },
        { fhir: "valueQuantity_unit", database: "value_quantity_unit" },
        { fhir: "id", database: "observation_id" },
    ],
    "Patient": [
        { fhir: "deceasedDateTime", database: "deceased_datetime" },
        { fhir: "deceasedBoolean", database: "deceased_boolean" },
        { fhir: "birthDate", database: "birth_date" },
        { fhir: "id", database: "patient_id" },
    ],
    "Procedure": [
        { fhir: "performedDateTime", database: "performed_datetime" },
        { fhir: "performedPeriod", database: "performed_period" },
        { fhir: "id", database: "procedure_id" },
    ],
    "ServiceRequest": [
        { fhir: "occurrenceDateTime", database: "occurrence_date_time" },
        { fhir: "id", database: "request_id" },
    ],
    "Encounter": [
        { fhir: "actualPeriod_start", database: "actual_period_start" },
        { fhir: "actualPeriod_end", database: "actual_period_end" },
        { fhir: "id", database: "encounter_id" },
        { fhir: "location_location_reference", database: "location_reference_identifier"}
    ],
    "MedicationAdministration": [
        { fhir: "occurrenceDateTime", database: "occurrence_datetime" },
        { fhir: "occurrencePeriod_start", database: "occurrence_period_start" },
        { fhir: "occurrencePeriod_end", database: "occurrence_period_end" },
        { fhir: "dosage_rateQuantity_system", database: "dosage_rate_quantity_system" },
        { fhir: "dosage_rateQuantity_unit", database: "dosage_rate_quantity_unit" },
        { fhir: "dosage_rateQuantity_code", database: "dosage_rate_quantity_code" },
        { fhir: "dosage_rateQuantity_value", database: "dosage_rate_quantity_value" }
    ],
    "Location": [
        { fhir: "partOf_reference", database: "part_of_reference" },
        { fhir: "id", database: "bed_id" },
    ],
};

const customAttributes = {
    Patient: [
        { name: "age", type: "integer" },
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
                // Iterate through attributes and update their names if they match the `fhir` value
                attributes.forEach((attribute) => {
                    if (attribute.name === fhir) {
                        attribute.name = database; // Update the name to the mapped database value
                    }
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
