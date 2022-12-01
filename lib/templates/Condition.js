{
  // The type of resource
  "resourceType": "Condition",

  // Each resource entry needs a unique id for the ndjson bulk upload. 
  "id": "f002",

  // Patient associated with the observation
  "subject": {
    "reference": "Patient/3294843"
  },

  // Clinical episode associated with the observation (if possible)
  "encounter": {
    "reference": "Encounter/2314234"
  },

  // Type of diagnosis
  "category": [{
    "coding": [{
      // OID: 2.16.840.1.113883.4.642.3.162
      // Values: "problem-list-item" or "encounter-diagnosis"
      "system": "https://terminology.hl7.org/CodeSystem-condition-category.html",
      "code": "encounter-diagnosis"
    }]
  }],

  // dateTime format YYYY-MM-DD or YYYY-MM-DDThh:mm:ss+zz:zz
  "onsetDateTime": "2021-01-01T01:01:01+06:00",

  "code": {
    "coding": [
      // ICD-10 code for the diagnosis
      {
        // https://terminology.hl7.org/CodeSystem-icd10.html
        // OID: 2.16.840.1.113883.6.3
        "system": "http://hl7.org/fhir/sid/icd-10",
        "code": "I63.9",
        "display": "Cerebral infarction, unspecified"
      }
    ],
    "text": "Stroke"
  }

}
