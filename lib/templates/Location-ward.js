{

  // The type of resource
  "resourceType": "Location",

  // Unique identifier to link different resources.
  "id": "loc1",

  // Textual ward name
  "name": "Wing, second floor",

  // Unique common identifier
  "identifier": [{
    "value": "B1-S.F2"
  }],

  // Status of this location.
  // Code system: http://hl7.org/fhir/location-status
  "status": "active",

  // Locations on a ward-level basis
  "physicalType": {
    "coding": [{
      // OID: 2.16.840.1.113883.4.642.1.1108
      "system": "https://terminology.hl7.org/CodeSystem-location-physical-type.html",
      "code": "wa",
      "display": "Ward"
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
