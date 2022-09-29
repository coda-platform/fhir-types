{

  // The type of resource
  "resourceType": "Encounter",

  // Identifier at the resource level. Required to bulk-upload the ndjson to Aidbox successfully. 
  "id": "some-encounter-id",
    
  // One of https://www.hl7.org/fhir/valueset-encounter-status.html
  // planned, arrived, triaged, in-progress, cancelled, unknown
  "status": "finished",

  // The type of the encounter: IMP (inpatient) or EMER (emergency)
  // Cf: https://www.hl7.org/fhir/v3/ActEncounterCode/vs.html
  // Other encounter types are not tracked as part of CODA-19
  "class": {
    "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    "code": "IMP",
    "display": "inpatient encounter"
  },

  "subject": {
    "reference": "Patient/24235135"
  },

  // Array of all locations (units) where the Encounter took place
  "location": [
    {
      "location": {
        "reference": "Location/1",
        "display": "Emergency"
      },
      "status": "completed",
      // YYYY-MM-DDThh:mm:ss+zz:zz
      "period": {
        "start": "2017-02-01T17:23:07Z",
        "end": "2017-03-01T02:45:07Z"
      }
    }
  ],

  "period": {
    // YYYY-MM-DDThh:mm:ss+zz:zz
    "start": "2017-02-01T17:23:07Z",
    "end": "2017-03-01T17:23:07Z"
  }
}
