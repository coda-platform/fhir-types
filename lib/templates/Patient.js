{

  // The type of resource (https://build.fhir.org/patient-definitions.html).
  "resourceType": "Patient",

  // Each resource must have a unique id. This needs to be present for the FHIR import.
  "id": "pat1",

  // The gender of the individual: male | female | other | unknown
  "gender": "female",

  // The date of birth of the individual (YYYY-MM)
  "birthDate": "1964-02",

  // Time of death, if applicable (YYYY-MM-DDThh:mm:ss+zz:zz)
  "deceasedDateTime": "2018-02-01T17:23:07Z",

  "extension": [

    // Race
    {
      "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
      "extension": [{
          "url": "ombCategory",

          // The race concepts are grouped by and pre-mapped to the 5 OMB race categories.
          // Ref: https://www.govinfo.gov/content/pkg/FR-1997-10-30/pdf/97-28653.pdf

          // Values: 
          // - American Indian or Alaska Native
          // - Asian
          // - Black or African American
          // - Native Hawaiian or Other Pacific Islander
          // - White
          // - Some other race

          "valueCoding": {
            // Uses the CDC Race and Ethnicity code set
            // https://phinvads.cdc.gov/vads/ViewCodeSystem.action?id=2.16.840.1.113883.6.238
            "system": "urn:oid:2.16.840.1.113883.6.238",
            "code": "2028-9",
            "display": "Asian"
          }
        },
        {
          // https://www.hl7.org/fhir/us/core/ValueSet-detailed-race.html
          "url": "detailed",
          "valueCoding": {
            // Uses the CDC Race and Ethnicity code set
            // https://phinvads.cdc.gov/vads/ViewCodeSystem.action?id=2.16.840.1.113883.6.238
            "system": "urn:oid:2.16.840.1.113883.6.238",
            "code": "2036-2",
            "display": "Filipino"
          }
        }
      ]
    },

    // Birth sex
    {
      "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",

      // http://hl7.org/fhir/us/core/STU5.0.1/ValueSet-birthsex.html
      //
      // Values:
      // - F: female
      // - M: male
      // - ASKU: information was sought but not found
      // - OTH: other
      // - UNK: unknown
      
      "valueCode": "F"
    }
    
    // Religion
    {
      "url": "http://hl7.org/fhir/StructureDefinition/patient-religion",

      // https://terminology.hl7.org/ValueSet-v3-ReligiousAffiliation.html
      //
      // Values: codes 1001 to 1082
      "valueCoding": {
        "system": "2.16.840.1.113883.5.1076",
        "code": "1021",
        "display": "Humanism"
      }
    }

  ],

  // Marital status
  "maritalStatus": {
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
      
      // https://terminology.hl7.org/ValueSet-v3-MaritalStatus.html
      //
      // Values:
      // - A: annulled
      // - D: divorced
      // - L: separated
      // - M: married
      // - U: unmarried
      // - W: widowed
      "code": "W"
      
    }]
  }

}
