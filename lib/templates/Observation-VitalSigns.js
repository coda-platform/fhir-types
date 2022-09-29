{

  // The type of resource
  "resourceType": "Observation",

  // Each resource entry needs a unique id for the ndjson bulk upload. 
  "id": "f002",

  // The status of the observation
  "status": "final",

  // Time of the observation (YYYY-MM-DDThh:mm:ss+zz:zz)
  "effectiveDateTime": "2017-02-01T20:23:07Z",

  // Patient associated with the observation
  "subject": {
    "reference": "Patient/3294843"
  },

  // Clinical episode associated with the observation (if possible) 
  "encounter": {
    "reference": "Encounter/2314234"
  },

  // LOINC code for the observation that was made (LOINC "code" field to be omitted until coding/categorization completed)
  "code": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "8480-6",
      "display": "Systolic blood pressure"
    }],
    "text": "Systolic blood pressure"
  },

  // SNOMED code for the body site used (SNOMED "code" field to be omitted until coding/categorization completed)
  "bodySite": {
    "coding": [{
      "system": "http://snomed.info/sct",
      "code": "368209003",
      "display": "Right arm"
    }]
  },

  // Value and units of measure
  "valueQuantity": {
      "value": 96,
      "unit": "g/L",
      "system": "http://unitsofmeasure.org",
      "code": "m-3.g"
   }
}
