{

  // The type of resource
  "resourceType": "Location",

  // Each resource entry has a unique id. This needs to be present for the bulk import to Aidbox to work
  "id": "loc1",

  // Identify the bed number
  "identifier": [
    {
      "value": "B1-S.F2.1.00"
    }
  ],
  
  // Locations on a bed-level basis
  "physicalType": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
        "code": "bd",
        "display": "Bed"
      }
    ]
  },
    
  // Use the Airtable UnitType terminology tab to map to correct unit
  // Use coding system displayed here:
  // http://terminology.hl7.org/CodeSystem/v3-RoleCode
  "type": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
          "code": "ICU",
          "display": "Intensive care unit"
        }
      ]
    }
  ],
    
  // Add reference to the ward Location resource
  "partOf" : { 
       "reference": "Location/ward-id" 
  }
}
