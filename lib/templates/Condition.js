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
    
  // dateTime format YYYY-MM-DD or YYYY-MM-DDThh:mm:ss+zz:zz
  "onsetDateTime": "2021-01-01T01:01:01+06:00",

  "code": {
    "coding": [
      // ICD-10 code for the diagnosis
      {
        "system": "http://hl7.org/fhir/sid/icd-10",
        "code": "I63.9",
        "display": "Cerebral infarction, unspecified"
      }
    ],
    "text": "Stroke"
  }
  
}
