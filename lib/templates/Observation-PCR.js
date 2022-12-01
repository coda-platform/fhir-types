{

  // The type of resource
  "resourceType": "Observation",

  // Each resource entry needs a unique id for the ndjson bulk upload. 
  "id": "f002",

  // Current status of the observation.
  // (c.f. http://hl7.org/fhir/ValueSet/observation-status)
  //
  // Values: registered | preliminary | final | amended +
  "status": "final",

  // Mark as a laboratory observation
  "category": [{
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/observation-category",
      "code": "laboratory"
    }]
  }],

  // Time of the observation (YYYY-MM-DDThh:mm:ss+zz:zz)
  "effectiveDateTime": "2017-02-01T17:23:07Z",

  // Time result issued (YYYY-MM-DDThh:mm:ss+zz:zz)
  "issued": "2017-02-01T20:23:07Z",

  // Patient associated with the observation
  "subject": {
    "reference": "Patient/pat123"
  },

  // Clinical episode associated with the observation (if possible)
  "encounter": {
    "reference": "Encounter/encount123"
  },

  // LOINC code for the observation
  "code": {
    // https://terminology.hl7.org/CodeSystem-v3-loinc.html
    // OID: 2.16.840.1.113883.6.1
    "coding": [{
      "system": "http://loinc.org",
      "code": "94531-1",
      "display": "SARS-CoV-2 RNA Pnl Resp NAA+probe"
    }],
    "text": "SARS-CoV-2 RNA Pnl Resp NAA+probe"
  },

  // SNOMED code for the body site used
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
    "coding": [{
        // Mandatory
        // OID 2.16.840.1.113883.5.83
        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        "code": "POS",
        "display": "Positive"
      },
      {
        // Optional
        // https://terminology.hl7.org/CodeSystem-v3-snomed-CT.html
        // OID: 2.16.840.1.113883.6.96
        "system": "http://snomed.info/sct",
        "code": "10828004",
        "display": "positive"
      }
    ]
  }]
}
