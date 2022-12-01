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
  "issued": "2017-02-01T21:23:07Z",

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
    "coding": [{
      // https://terminology.hl7.org/CodeSystem-v3-loinc.html
      // OID: 2.16.840.1.113883.6.1
      "system": "http://loinc.org",
      "code": "718-7",
      "display": "Hemoglobin [Mass/volume] in Blood"
    }],
    "text": "Hemoglobin"
  },

  // SNOMED CT code for the body site used
  "bodySite": {
    "coding": [{
      // https://terminology.hl7.org/CodeSystem-v3-snomed-CT.html
      // OID: 2.16.840.1.113883.6.96
      "system": "http://snomed.info/sct",
      "code": "122555007",
      "display": "Venous blood specimen (specimen)"
    }]
  },

  // Value and units of measure
  "valueQuantity": {
    "value": 96,
    "unit": "g/L",
    // https://terminology.hl7.org/CodeSystem-v3-ucum.html
    // OID: 2.16.840.1.113883.6.8
    "system": "http://unitsofmeasure.org",
    "code": "m-3.g"
  },

  // For test results like "detected"
  "valueCodeableConcept": {
    "coding": [{
      "system": "http://snomed.info/sct",
      "code": "260415000",
      "display": "Not detected (qualifier value)"
    }],
    "text": "Not detected (qualifier value)"
  },

  // Reference range of laboratory test
  "referenceRange": [{
    "low": {
      "value": 0,
      "unit": "g/L",
      "system": "http://unitsofmeasure.org",
      "code": "m-3.g",
    },
    "high": {
      "value": 200,
      "unit": "g/L",
      "system": "http://unitsofmeasure.org",
      "code": "m-3.g",
    }
  }]
}
