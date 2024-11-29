let aidboxUnionTypes = {
    "Condition":
        [{ fhir: "onsetDateTime", alt: "onset.dateTime" }],

    "Observation":
        [{ fhir: "effectiveDateTime", alt: "effective.dateTime" },
        { fhir: "valueQuantity", alt: "value.Quantity" }],

    "Patient":
        [{ fhir: "deceasedDateTime", alt: "deceased.dateTime" }],

    "Procedure":
        [{ fhir: "performedDateTime", alt: "performed.dateTime" },
        { fhir: "performedPeriod", alt: "performed.Period" }],

    "ServiceRequest":
        [{ fhir: "occurrenceDateTime", alt: "occurrence.dateTime" }],
}

let dbtMapping = {
    "Condition":
        [{ fhir: "onsetDateTime", alt: "onset.datetime" }],

    "Observation":
        [{ fhir: "effectiveDateTime", alt: "effective.datetime" },
        { fhir: "valueQuantity", alt: "value.quantity" },
        { fhir: "id", alt: "observation_id"}],

    "Patient":
        [{ fhir: "deceasedDateTime", alt: "deceased.datetime" },
        { fhir: "birthDate", alt: "birth.date" },
        { fhir: "id", alt: "patient_id"}],

    "Procedure":
        [{ fhir: "performedDateTime", alt: "performed.datetime" },
        { fhir: "performedPeriod", alt: "performed.period" }],

    "ServiceRequest":
        [{ fhir: "occurrenceDateTime", alt: "occurrence.datetime" }],

    "Encounter":
        [{ fhir: "actualPeriod", alt: "actual.period" },
        { fhir: "id", alt: "encounter_id" }],

    "MedicationAdministration":
        [{ fhir: "occurrenceDateTime", alt: "occurrence.datetime" },
        { fhir: "occurrencePeriod", alt: "occurrence.period" },
        { fhir: "rateQuantity", alt: "rate.quantity"}],

    "Location":
        [{ fhir: "partOf", alt: "part.of" },
        { fhir: "id", alt: "bed_id" }],
}

function mapToDatabaseColumn(resourceAttributeArrays) {
    var resourceNames = Object.keys(resourceAttributeArrays);
    resourceNames.forEach(resourceName => {
        var attributeArray = resourceAttributeArrays[resourceName];
        const resourceFields = dbtMapping[resourceName];
        if (resourceFields) {
            for (let field of resourceFields) {
                var fhirField = field.fhir;
                var altField = field.alt;

                // Get all matching indexes where the specific segment matches fhirField
                var indexes = attributeArray.reduce((array, attribute, index) => {
                    const fieldParts = attribute.name.split(".");
                    if (fieldParts.includes(fhirField)) {
                        return array.concat(index);
                    }
                    return array;
                }, []);

                // Replace only the matched segment with altField
                for (let i of indexes) {
                    const fieldParts = attributeArray[i].name.split(".");
                    for (let j = 0; j < fieldParts.length; j++) {
                        if (fieldParts[j] === fhirField) {
                            fieldParts[j] = altField; // Replace the matching part
                        }
                    }
                    attributeArray[i].name = fieldParts.join(".");
                }
            }
        }
        return attributeArray;
    });
}


module.exports = mapToDatabaseColumn