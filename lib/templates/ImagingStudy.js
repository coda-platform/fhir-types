{
  // The type of resource
  "resourceType": "ImagingStudy",

  // Each resource entry needs a unique id for the ndjson bulk upload. 
  "id": "imgstudy001",
 
  "subject": {
    "reference": "Patient/patientid"
  },  
      
  "status": "available",
  "modality": [
         {
            "code": "DX",
            "system": "http://dicom.nema.org/resources/ontology/DCM"
         }
  ],
  
  "identifier": [
            {
              "system": "urn:dicom:uid",
              "value": "urn:oid:"
            },

            {
              "use": "usual",
              "type": {
              "coding": [
                          {
                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                            "code": "ACSN"
                          } 
                        ]
                },
              "value": "A01"
          }
  ],      
    
  // YYYY-MM-DDThh:mm:ss+zz:zz
  "started": "2017-02-01T17:23:07Z",  
  "numberOfSeries": 1,
  "numberOfInstances": 1,
  "description": "RX POUMONS",
  "procedureCode": [{
    
    "text": "RX POUMONS",
    // LOINC code for the imaging study
    "coding": [{
      "system": "http://loinc.org",
      "code": "29252-4",
      "display": "CT Chest WO contrast"
    }]
  }],

  "series": [{
    
    "uid": "12asdf515kljasdflkaja35asdaasdkj155",
    "number": 1,

    // DICOM modality code
    "modality": {
      "system": "http://dicom.nema.org/resources/ontology/DCM",
      "code": "CT"
    },

    // SNOMED body site code
    "bodySite": {
      "system": "http://snomed.info/sct",
      "code": "67734004",
      "display": "Structure of thoracic segment of trunk (body structure)"
    },

    "description": "CT Surview 180",
    "numberOfInstances": 1
    
    
  }]
  
}
