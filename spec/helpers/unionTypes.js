let unionTypes = {
    "Condition":
        [{ fhir: "onsetDateTime", aidbox: "onset.dateTime" }],

    "Observation":
        [{ fhir: "effectiveDateTime", aidbox: "effective.dateTime" },
        { fhir: "valueQuantity", aidbox: "value.Quantity" }],

    "Patient":
        [{ fhir: "deceasedDateTime", aidbox: "deceased.dateTime" }],

    "Procedure":
        [{ fhir: "performedDateTime", aidbox: "performed.dateTime" },
        { fhir: "performedPeriod", aidbox: "performed.Period" }],

    "ServiceRequest":
        [{ fhir: "occurrenceDateTime", aidbox: "occurrence.dateTime" }],
}

function fixAidboxUnionTypes(resourceAttributeArrays) {
    var resourceNames = Object.keys(resourceAttributeArrays);
    resourceNames.forEach(resourceName => {
        var attributeArray = resourceAttributeArrays[resourceName];
        const resourceFields = unionTypes[resourceName];
        if (resourceFields) {
            for (field of resourceFields) {
                var fhirField = field.fhir;
                var aidboxField = field.aidbox
                var indexes = attributeArray.reduce((array, attribute, index) => 
                    (attribute.name.split(".")[0] === fhirField) ? array.concat(index) : array, []) //get all matching indexes
                for (i of indexes) {
                    var aidboxNameSplit = attributeArray[i].name.split(".");
                    aidboxNameSplit[0] = aidboxField;
                    attributeArray[i].name = aidboxNameSplit.join(".");
                }
            }
        }
        return attributeArray
    });
}

module.exports = fixAidboxUnionTypes