{

  // The type of resource
  "resourceType": "MedicationAdministration",

  // Unique identifier for this resource.
  "id": "medadm123",

  // Link to the patient who is the subject of medication administration.
  "subject": {
    "reference": "Patient/pat123"
  },

  // Link to the encounter during which the medication is administered.
  "context": {
    "reference": "Encounter/encount123"
  },

  // Link to the medication request associated with this resource (optional).
  "request": {
    "reference": "MedicationRequest/medreq123"
  },

  // Link to the medication that was given.
  "medicationReference": {
    "reference": "Medication/med123"
  },

  // Embedded information on the medication that is given.
  // Alternative to the use of medicationReference.
  "contained": [{
    "resourceType": "Medication",
    "id": "med123",

    // American Society of Health-System Pharmacists drug code
    "code": {
      "coding": [{
        "system": "http://terminology.hl7.org/CodeSystem/ahfs",
        "code": "382751",
        "display": "Vancomycin"
      }]
    }
  }],

  // Status of the medication administration.
  // Values: http://hl7.org/fhir/ValueSet/medication-admin-status
  // One of: in-progress, not-done, on-hold, completed,
  // entered-in-error, stopped, unknown.
  "status": "completed",

  // Period during which the administration will occur.
  "effectivePeriod": {
    // YYYY-MM-DDThh:mm:ss+zz:zz
    "start": "2017-02-01T17:23:07Z",
    "end": "2017-03-01T17:23:07Z"
  },

  // Alternative to "effectivePeriod" for single doses.
  "effectiveDateTime": "2146-10-09T20:50:00-04:00",

  // Information on dosage and administration.
  "dosage": {
    "text": "1 in D5W 250 mL IV over 1h, every 12 hours.",

    // Route of administration.
    "route": {
      "coding": [{
        "system": "http://snomed.info/sct",
        "code": "47625008",
        "display": "Intravenous route (qualifier value)"
      }]
    },

    // Dose of the medication to be administered.
    "dose": {
      "system": "http://unitsofmeasure.org",
      "unit": "mg",
      "code": "mg",
      "value": 500
    },

    // Speed with which the medication was or will be introduced into the patient
    "rateQuantity": {
      "system": "http://unitsofmeasure.org",
      "unit": "ml/h",
      "code": "ml/h",
      "value": 250
    }

  }

}
