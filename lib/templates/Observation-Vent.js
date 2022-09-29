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
  "issued": "2017-02-01T21:23:07Z",

  // Patient associated with the observation
  "subject": {
    "reference": "Patient/3294843"
  },

  // Clinical episode associated with the observation (if possible)
  "encounter": {
    "reference": "Encounter/2314234"
  },
  
  // Device associated with the observation
  "device": {
    "reference": "Device/2323422"
  },
  
  // LOINC code for the observation that was made
  "code": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "20075-8",
      "display": "PEEP Respiratory system"
    }],
    "text": "PEEP"
  },

  // Value and units of measure
  "valueQuantity": {
      "value": 96,
      "unit": "g/L",
      "system": "http://unitsofmeasure.org",
      "code": "m-3.g"
   }
}
