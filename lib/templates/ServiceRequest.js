{

  // The type of resource
  "resourceType": "ServiceRequest",

  // Unique identifier for the resource.
  "id": "f002",

  // Reference to the patient for whom a service request is entered.
  "subject": {
    "reference": "Patient/pat1"
  },

  // Descriptor for the status of the service request.
  // Values: http://hl7.org/fhir/ValueSet/request-status
  // One of: draft | active | on-hold | revoked | completed | 
  // entered-in-error | unknown  
  "status": "completed",

  // Values: http://hl7.org/fhir/ValueSet/request-intent
  // One of: proposal | plan | directive | order | original-order | 
  // reflex-order | filler-order | instance-order | option  
  "intent": "plan",

  // Values: 	http://hl7.org/fhir/ValueSet/request-priority
  // One of: routine | urgent | asap | stat
  "priority": "routine"

  // Date of the request (YYYY-MM-DDThh:mm:ss+zz:zz)
  "authoredOn": "2021-02-26T00:00:00",

  // Date when the request is scheduled to be performed or 
  // date on which it has been performed (YYYY-MM-DDThh:mm:ss+zz:zz)
  "occurrenceDateTime": "2021-03-11T00:00:00"

}
