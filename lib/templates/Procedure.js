{
  // The type of resource
  "resourceType": "Procedure",

  // Unique identifier for this resource. 
  "id": "f002",

  // Link to the patient on whom the procedure is performed.
  "subject": {
    "reference": "Patient/pat123"
  },

  // Link to the encounter as part of which the procedure is performed.
  "encounter": {
    "reference": "Encounter/encount123"
  },

  // Link to the order or plan for the procedure to be performed (optional).
  "basedOn": [{
    "reference": "ServiceRequest/servreq123"
  }],

  // Descriptor for the status of the procedure.
  // Values: http://hl7.org/fhir/ValueSet/event-status
  "status": "completed",

  "code": {
    // SNOMED code for the procedure.
    "coding": [{
      // https://terminology.hl7.org/CodeSystem-v3-snomed-CT.html
      // OID: 2.16.840.1.113883.6.96
      "system": "http://snomed.info/sct",
      "code": "40617009",
      "display": "Artificial respiration (procedure)"
    }],
    "text": "Mechanical ventilation"
  },

  // Time at which the procedure is performed.
  // N.B. This field will change in FHIR 5.0.
  "performedDateTime": "2017-02-01T17:23:07Z",

  // Alternative for procedures spanning multiple days.
  // N.B. This field will change in FHIR 5.0.
  "performedPeriod": {
    // YYYY-MM-DDThh:mm:ss+zz:zz
    "start": "2017-02-01T17:23:07Z",
    "end": "2017-03-01T17:23:07Z"
  }

}
