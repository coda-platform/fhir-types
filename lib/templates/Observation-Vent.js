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

  // Mark as an exam observation
  "category": [{
    "coding": [{
      "system": "https://terminology.hl7.org/CodeSystem-observation-category.html",
      "code": "exam"
    }]
  }],
    
  // Time of the observation (YYYY-MM-DDThh:mm:ss+zz:zz)
  "effectiveDateTime": "2017-02-01T17:23:07Z",

  // Patient associated with the observation
  "subject": {
    "reference": "Patient/pat123"
  },

  // Clinical episode associated with the observation
  "encounter": {
    "reference": "Encounter/encount123"
  },
  
  // Device associated with the observation (optional)
  "device": {
    "reference": "Device/dev123"
  },
  
  // LOINC code for the observation
  "code": {
    "coding": [{      
      // https://terminology.hl7.org/CodeSystem-v3-loinc.html
      // OID: 2.16.840.1.113883.6.1
      "system": "http://loinc.org",
      "code": "20075-8",
      "display": "PEEP Respiratory system"
    }],
    "text": "PEEP"
  },

  // Value and units of measure
  "valueQuantity": {
      "system": "http://unitsofmeasure.org",
      "unit": "mmHg",
      "code": "mm[Hg]",
      "value": 10
   }
}
