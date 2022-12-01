{
  // The type of resource
  "resourceType": "ImagingStudy",

  // Each resource entry needs a unique id for the ndjson bulk upload. 
  "id": "imgstudy001",

  "subject": {
    "reference": "Patient/patientid"
  },

  "status": "available",
  "modality": [{
    "code": "DX",
    "system": "http://dicom.nema.org/resources/ontology/DCM"
  }],

  // DICOM study UID
  "identifier": [{
    "use": "official",
    "system": "urn:dicom:uid",
    "value": "2.16.124.113543.6003.1154777499.30246.19789.3503430046"
  }, ],

  // YYYY-MM-DDThh:mm:ss+zz:zz
  "started": "2017-02-01T17:23:07Z",
  "numberOfSeries": 1,
  "numberOfInstances": 1,
  "description": "Chest X-ray",

  "procedureCode": [{
    "text": "XR Chest PA and Lateral",
    // LOINC code for the imaging study
    "coding": [{
      "system": "http://loinc.org",
      "code": "42272-5,
      "display": "XR Chest PA and Lateral"
    }]
  }],

  "series": [{

      // DICOM series UID
      "uid": "2.16.124.113543.6003.1154777499.30246.19789.3503430045.1",

      // Series acquisition time
      "dateTime": "2017-02-01T17:23:07Z",

      // Series number
      "number": 1,

      // DICOM modality code
      "modality": {
        // https://terminology.hl7.org/CodeSystem-v3-DCM.html
        // OID: 1.2.840.10008.2.16.4
        "system": "http://dicom.nema.org/resources/ontology/DCM",
        "code": "CR",
        "display": "Computed Radiography"
      },

      // SNOMED body site code
      "bodySite": {
        "system": "http://snomed.info/sct",
        "code": "67734004",
        "display": "Structure of thoracic segment of trunk (body structure)"
      },

      // DICOM web URL to retrieve series
      "url": "https://dicomweb.myhospital.com/studies/[studyId]/series/[seriesId]",

      // Number of instances in series
      "numberOfInstances": 2,

      // List of instances in series
      "instance": [
        / Example of first instance {
        // Number of the instance in the series
        "number": 1,

        // DICOM instance UID
        "uid": "2.16.124.113543.6003.1154777499.30246.19789.3503430045.1.1",

        // DICOM SOP class UID: https://dicom.nema.org/dicom/2013/output/chtml/part04/sect_i.4.html
        "sopClass": {
          "system": "urn:ietf:rfc:3986",
          "code": "urn:oid:1.2.840.10008.5.1.4.1.1.1"
        },
        // Description of instance
        "title": "PA VIEW",

        // DICOM web URL to retrieve instance
        "url": "https://dicomweb.myhospital.com/studies/[studyId]/series/[seriesId]/instances/[instanceId]"
      },
      // Example of second instance
      {
        "uid": "2.16.124.113543.6003.1154777499.30246.19789.3503430045.1.2",
        "sopClass": {
          "system": "urn:ietf:rfc:3986",
          "code": "urn:oid:1.2.840.10008.5.1.4.1.1.1"
        },
        "number": 2,
        "title": "LL VIEW",
        "url": "https://dicomweb.myhospital.com/studies/[studyId]/series/[seriesId]/instances/[instanceId]"
      }
    ]

  }]

}
