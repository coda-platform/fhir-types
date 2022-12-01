{

  // The type of resource
  "resourceType": "Encounter",

  // Identifier at the resource level. Required to bulk-upload the ndjson to Aidbox successfully. 
  "id": "some-encounter-id",

  // https://www.hl7.org/fhir/codesystem-encounter-status.html
  // 
  // Values:
  // - planned
  // - arrived
  // - triaged
  // - in-progress
  // - finished
  // - cancelled
  // - entered-in-error
  // - unknown
  "status": "finished",

  "class": {
    // http://terminology.hl7.org/CodeSystem/v3-ActCode
    //
    // Value examples:
    // - AMB: ambulatory
    // - EMER: emergency room
    // - IMP: inpatient
    "system": "urn:oid:2.16.840.1.113883.5.4",
    "code": "IMP"
  },

  "subject": {
    "reference": "Patient/24235135"
  },

  // Array of all locations (units) where the Encounter took place
  "location": [{
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
  }],

  "period": {
    // YYYY-MM-DDThh:mm:ss+zz:zz
    "start": "2017-02-01T17:23:07Z",
    "end": "2017-03-01T17:23:07Z"
  },

  "hospitalization": {
    "admitSource": {
      "coding": [{
        // http://terminology.hl7.org/CodeSystem/admit-source
        // 
        // Values:
        // - hosp-trans
        // - emd
        // - outp
        // - born
        // - gp
        // - mp
        // - nursing
        // - psych
        // - rehab
        // - other
        "system": "urn:oid:2.16.840.1.113883.4.642.1.1092",
        "code": "emd"
      }]
    }
  },

  // http://hl7.org/fhir/encounter-priority
  "priority": {
    "coding": [{
      // https://terminology.hl7.org/ValueSet-v3-ActPriority.html
      //
      // Values:
      // - EL = elective
      // - UR = urgent
      // - EM = emergent
      "system": "urn:oid:2.16.840.1.113883.1.11.16866",
      "code": "UR"
    }]
  }
}
