{

  // The type of resource (https://build.fhir.org/patient-definitions.html).
  "resourceType": "Patient",

  // Each resource must have a unique id. This needs to be present for the FHIR import.
  "id": "pat1",

  // The gender of the individual: male | female | other | unknown
  "gender": "female",

  // The date of birth of the individual (YYYY-MM)
  "birthDate": "1964-02",

  // Time of death, if applicable (YYYY-MM-DDThh:mm:ss)
  "deceasedDateTime": "2018-02-01T17:23:07",

  "extension": [

    // Race
    {
      "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
      "extension": [{
          "url": "ombCategory",

          // The race concepts are grouped by and pre-mapped to the 5 OMB race categories.
          // Ref: https://www.govinfo.gov/content/pkg/FR-1997-10-30/pdf/97-28653.pdf

          "valueCoding": {
            // http://terminology.hl7.org/ValueSet/v3-Race
            //
            // Values are a subset of the the CDC Race and Ethnicity code set, c.f.
            // https://phinvads.cdc.gov/vads/ViewCodeSystem.action?id=2.16.840.1.113883.6.238
            //
            // Values: 
            // - American Indian or Alaska Native (1002-5)
            // - Asian (2028-9)
            // - Black or African American (2054-5)
            // - Native Hawaiian or Other Pacific Islander (2076-8)
            // - White (2106-3)
            // - Some other race (2131-1)
            "system": "http://terminology.hl7.org/ValueSet/v3-Race",
            "code": "2028-9",
            "display": "Asian"
          }
        },
        {
          // https://www.hl7.org/fhir/us/core/ValueSet-detailed-race.html
          "url": "detailed",
          "valueCoding": {
            // http://terminology.hl7.org/ValueSet/v3-Race
            //
            // Values are a subset of the the CDC Race and Ethnicity code set, c.f.
            // https://phinvads.cdc.gov/vads/ViewCodeSystem.action?id=2.16.840.1.113883.6.238
            "system": "http://terminology.hl7.org/ValueSet/v3-Race",
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
    },
    
    // Religion
    {
      "url": "http://hl7.org/fhir/StructureDefinition/patient-religion",

      // http://terminology.hl7.org/CodeSystem/v3-ReligiousAffiliation
      // OID: 2.16.840.1.113883.5.1076
      //
      // Values: codes "1001" to "1082" representing 81 religions.
      "valueCoding": {
        "system": "http://terminology.hl7.org/CodeSystem/v3-ReligiousAffiliation",
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
