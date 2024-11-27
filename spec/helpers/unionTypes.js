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
        { fhir: "valueQuantity", alt: "value.quantity" }],

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
    [{ fhir: "actualPeriod", alt: "actual.period" }],

    "MedicationAdministration":
    [{ fhir: "occurrenceDateTime", alt: "occurrence.datetime" },
    { fhir: "occurrencePeriod", alt: "occurrence.period" },
    { fhir: "rateQuantity", alt: "rate.quantity"}],

    "Location":
    [{ fhir: "partOf", alt: "part.of" }],
}

function mapToDatabaseColumn(resourceAttributeArrays) {
    var resourceNames = Object.keys(resourceAttributeArrays);
    resourceNames.forEach(resourceName => {
        var attributeArray = resourceAttributeArrays[resourceName];
        const resourceFields = dbtMapping[resourceName];
        if (resourceFields) {
            for (field of resourceFields) {
                var fhirField = field.fhir;
                var altField = field.alt
                var indexes = attributeArray.reduce((array, attribute, index) => 
                    (attribute.name.split(".")[0] === fhirField) ? array.concat(index) : array, []) //get all matching indexes
                for (i of indexes) {
                    var altNameSplit = attributeArray[i].name.split(".");
                    altNameSplit[0] = altField;
                    attributeArray[i].name = altNameSplit.join(".");
                }
            }
        }
        return attributeArray
    });
}

module.exports = mapToDatabaseColumn