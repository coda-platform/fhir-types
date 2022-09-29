{
  // The type of resource
  "resourceType": "ServiceRequest",

  // Each resource entry needs a unique id for the ndjson bulk upload. 
  "id": "f002",

  "subject": {
    "reference": "Patient/pat1"
  },
  
  // One of: draft | active | on-hold | revoked | completed | entered-in-error | unknown  
  "status":"completed",
    
  // One of: proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option  
  "intent":"plan",  
    
  // date of the request (YYYY-MM-DDThh:mm:ss+zz:zz)
  "authoredOn": "2021-02-26T00:00:00",  
    
  // date when the request is scheduled to be performed or is performed (YYYY-MM-DDThh:mm:ss+zz:zz)
  "occurrenceDateTime": "2021-03-11T00:00:00",
    
  // One of: routine | urgent | asap | stat
  "priority":"routine"  
    
}
