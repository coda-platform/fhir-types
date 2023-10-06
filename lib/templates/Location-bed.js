{

  // The type of resource
  "resourceType": "Location",

  // The resource's unique identifier
  "id": "loc1",

  // Link to the ward that contains the bed
  "partOf": {
    "reference": "Location/ward123"
  },

  // Unique common identifier
  "identifier": [{
    "value": "B1-S.F2.1.00"
  }],

  // Status of this location.
  // Code system: http://hl7.org/fhir/location-status
  "status": "active",

  // Locations on a ward-level basis
  "physicalType": {
    "coding": [{
      // OID: 2.16.840.1.113883.4.642.1.1108
      "system": "https://terminology.hl7.org/CodeSystem-location-physical-type",
      "code": "bd",
      "display": "Bed"
    }]
  },

  "type": [{
    "coding": [{
      // OID: 2.16.840.1.113883.5.111
      "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
      "code": "ICU",
      "display": "Intensive care unit"
    }]
  }]
  
}
