{

  // The type of resource
  "resourceType": "Observation",

  // Each resource entry needs a unique id for the ndjson bulk upload. 
  "id": "f002",

  // The status of the observation: registered | preliminary | final | amended +
  "status": "final",

  // Time of the observation (YYYY-MM-DDThh:mm:ss+zz:zz)
  "effectiveDateTime": "2017-02-01T17:23:07Z",

  // Time result issued (YYYY-MM-DDThh:mm:ss+zz:zz)
  "issued": "2017-02-01T20:23:07Z",

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
      "code": "94531-1",
      "display": "SARS-CoV-2 RNA Pnl Resp NAA+probe"
    }],
    "text": "SARS-CoV-2 RNA Pnl Resp NAA+probe"
  },

  // SNOMED code for the body site used (SNOMED "code" field to be omitted until coding/categorization completed) 
  "bodySite": {
    "coding": [{
      "system": "http://snomed.info/sct",
      "code": "258500001",
      "display": "Nasopharyngeal swab"
    }]
  },

  // Value and units of measure
  // Codes from the CodeSystem http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation are mandatory
  "interpretation": [{
    "coding": [
      {
      "system": "http://snomed.info/sct",
      "code": "10828004",
      "display": "positive"
      },
      {
        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation", 
        "code":"POS", 
        "display":"Positive"
      }
    ]
  }]
}
