{

  // The type of resource
  "resourceType": "Observation",

  // Unique identifier for inter-resource linking.
  "id": "f002",

  // Current status of the observation.
  // (c.f. http://hl7.org/fhir/ValueSet/observation-status)
  //
  // Values: registered | preliminary | final | amended +
  "status": "final",

  // Mark as a laboratory observation
  "category": [{
    "coding": [{
      "system": "https://terminology.hl7.org/CodeSystem-observation-category.html",
      "code": "laboratory"
    }]
  }],

  // Time of the observation (YYYY-MM-DDThh:mm:ss+zz:zz)
  "effectiveDateTime": "2017-02-01T17:23:07Z",

  // Time result issued (YYYY-MM-DDThh:mm:ss+zz:zz)
  "issued": "2017-02-01T20:23:07Z",

  // Patient associated with the observation
  "subject": {
    "reference": "Patient/3294843"
  },

  // Clinical episode associated with the observation
  "encounter": {
    "reference": "Encounter/2314234"
  },

  // LOINC code for the observation
  "code": {
    // https://terminology.hl7.org/CodeSystem-v3-loinc.html
    // OID: 2.16.840.1.113883.6.1
    "coding": [{
      "system": "http://loinc.org",
      "code": "600-7",
      "display": "Bacteria identified in Blood by Culture"
    }],
    "text": "Bacterial Culture - Blood"
  },

  // SNOMED code for the method used
  "method": {
    "coding": [{
      // https://terminology.hl7.org/CodeSystem-v3-snomed-CT.html
      // OID: 2.16.840.1.113883.6.96
      "system": "http://snomed.info/sct",
      "code": "104177005",
      "display": "Blood culture for bacteria, including anaerobic screen"
    }]
  },

  // Interpretation of the culture
  "interpretation": [{
    "coding": [{
      // OID 2.16.840.1.113883.5.83
      "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
      "code": "POS",
      "display": "Positive"
    }]
  }]

}
