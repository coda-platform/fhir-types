{
  // The type of resource
  "resourceType": "Procedure",

  // Each resource entry needs a unique id for the ndjson bulk upload. 
  "id": "f002",

  "subject": {
    "reference": "Patient/pat1"
  },

  // Link to the ServiceRequest resources used for surgical procedure 
  "basedOn":[
    {
      "reference":"ServiceRequest/id-service-request"
    }
  ],  
    
  "code": {
    // SNOMED code to be assigned. Omit if not present
    "coding": [{
      "system": "http://snomed.info/sct",
      "code": "40617009",
      "display": "Artificial respiration (procedure)"
    }],
    "text": "Mechanical Ventilation"
  },

  "performedPeriod": {
    // YYYY-MM-DDThh:mm:ss+zz:zz
    "start": "2017-02-01T17:23:07Z",
    "end": "2017-03-01T17:23:07Z"
  },

  "status": "completed"

}
