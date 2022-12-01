const loadTemplate = require("./helpers/loadTemplate");
const JSONSchemaValidator = require("@asymmetrik/fhir-json-schema-validator");
const FHIRValidator = new JSONSchemaValidator();

describe("Patient", function () {
  const templateFileName = "./lib/templates/Patient.js";

  it("should be readable and valid JSON", function () {
    const patientJson = loadTemplate(templateFileName);
  });

  it("should validate against the FHIR schema", function () {
    const patientJson = loadTemplate(templateFileName);
    const validationWarnings = FHIRValidator.validate(patientJson);
    expect(validationWarnings.length).toBe(
      0,
      "Error(s) identified during schema validation."
    );
    if (validationWarnings.length > 0)
      console.log(`Errors in ${templateFileName}`, validationWarnings);
  });
});

describe("MedicationAdministration", function () {
  const templateFileName = "./lib/templates/MedicationAdministration.js";

  it("should be readable and valid JSON", function () {
    const patientJson = loadTemplate(templateFileName);
  });

  it("should validate against the FHIR schema", function () {
    const patientJson = loadTemplate(templateFileName);
    const validationWarnings = FHIRValidator.validate(patientJson);
    expect(validationWarnings.length).toBe(
      0,
      "Error(s) identified during schema validation."
    );
    if (validationWarnings.length > 0)
      console.log(`Errors in ${templateFileName}`, validationWarnings);
  });
});

describe("Observation-Culture", function () {
  const templateFileName = "./lib/templates/Observation-Culture.js";

  it("should be readable and valid JSON", function () {
    const patientJson = loadTemplate(templateFileName);
  });

  it("should validate against the FHIR schema", function () {
    const patientJson = loadTemplate(templateFileName);
    const validationWarnings = FHIRValidator.validate(patientJson);
    expect(validationWarnings.length).toBe(
      0,
      "Error(s) identified during schema validation."
    );
    if (validationWarnings.length > 0)
      console.log(`Errors in ${templateFileName}`, validationWarnings);
  });
});

describe("Observation-Labs", function () {
  const templateFileName = "./lib/templates/Observation-Labs.js";

  it("should be readable and valid JSON", function () {
    const patientJson = loadTemplate(templateFileName);
  });

  it("should validate against the FHIR schema", function () {
    const patientJson = loadTemplate(templateFileName);
    const validationWarnings = FHIRValidator.validate(patientJson);
    expect(validationWarnings.length).toBe(
      0,
      "Error(s) identified during schema validation."
    );
    if (validationWarnings.length > 0)
      console.log(`Errors in ${templateFileName}`, validationWarnings);
  });
});

describe("Observation-PCR", function () {
  const templateFileName = "./lib/templates/Observation-PCR.js";

  it("should be readable and valid JSON", function () {
    const patientJson = loadTemplate(templateFileName);
  });

  it("should validate against the FHIR schema", function () {
    const patientJson = loadTemplate(templateFileName);
    const validationWarnings = FHIRValidator.validate(patientJson);
    expect(validationWarnings.length).toBe(
      0,
      "Error(s) identified during schema validation."
    );
    if (validationWarnings.length > 0) console.log(validationWarnings);
  });
});

describe("Observation-Vent", function () {
  const templateFileName = "./lib/templates/Observation-Vent.js";

  it("should be readable and valid JSON", function () {
    const patientJson = loadTemplate(templateFileName);
  });

  it("should validate against the FHIR schema", function () {
    const patientJson = loadTemplate(templateFileName);
    const validationWarnings = FHIRValidator.validate(patientJson);
    expect(validationWarnings.length).toBe(
      0,
      "Error(s) identified during schema validation."
    );
    if (validationWarnings.length > 0) console.log(validationWarnings);
  });
});

describe("Observation-VitalSigns", function () {
  const templateFileName = "./lib/templates/Observation-VitalSigns.js";

  it("should be readable and valid JSON", function () {
    const patientJson = loadTemplate(templateFileName);
  });

  it("should validate against the FHIR schema", function () {
    const patientJson = loadTemplate(templateFileName);
    const validationWarnings = FHIRValidator.validate(patientJson);
    expect(validationWarnings.length).toBe(
      0,
      "Error(s) identified during schema validation."
    );
    if (validationWarnings.length > 0) console.log(validationWarnings);
  });
});

describe("Observation-Vent", function () {
  const templateFileName = "./lib/templates/Observation-Vent.js";

  it("should be readable and valid JSON", function () {
    const patientJson = loadTemplate(templateFileName);
  });

  it("should validate against the FHIR schema", function () {
    const patientJson = loadTemplate(templateFileName);
    const validationWarnings = FHIRValidator.validate(patientJson);
    expect(validationWarnings.length).toBe(
      0,
      "Error(s) identified during schema validation."
    );
    if (validationWarnings.length > 0) console.log(validationWarnings);
  });
});

describe("Condition", function () {
  const templateFileName = "./lib/templates/Condition.js";

  it("should be readable and valid JSON", function () {
    const patientJson = loadTemplate(templateFileName);
  });

  it("should validate against the FHIR schema", function () {
    const patientJson = loadTemplate(templateFileName);
    const validationWarnings = FHIRValidator.validate(patientJson);
    expect(validationWarnings.length).toBe(
      0,
      "Error(s) identified during schema validation."
    );
    if (validationWarnings.length > 0) console.log(validationWarnings);
  });
});

describe("Encounter", function () {
  const templateFileName = "./lib/templates/Encounter.js";

  it("should be readable and valid JSON", function () {
    const patientJson = loadTemplate(templateFileName);
  });

  it("should validate against the FHIR schema", function () {
    const patientJson = loadTemplate(templateFileName);
    const validationWarnings = FHIRValidator.validate(patientJson);
    expect(validationWarnings.length).toBe(
      0,
      "Error(s) identified during schema validation."
    );
    if (validationWarnings.length > 0) console.log(validationWarnings);
  });
});

describe("Procedure", function () {
  const templateFileName = "./lib/templates/Procedure.js";

  it("should be readable and valid JSON", function () {
    const patientJson = loadTemplate(templateFileName);
  });

  it("should validate against the FHIR schema", function () {
    const patientJson = loadTemplate(templateFileName);
    const validationWarnings = FHIRValidator.validate(patientJson);
    expect(validationWarnings.length).toBe(
      0,
      "Error(s) identified during schema validation."
    );
    if (validationWarnings.length > 0) console.log(validationWarnings);
  });
});

describe("ImagingStudy", function () {
  const templateFileName = "./lib/templates/ImagingStudy.js";

  it("should be readable and valid JSON", function () {
    const patientJson = loadTemplate(templateFileName);
  });

  it("should validate against the FHIR schema", function () {
    const patientJson = loadTemplate(templateFileName);
    const validationWarnings = FHIRValidator.validate(patientJson);
    expect(validationWarnings.length).toBe(
      0,
      "Error(s) identified during schema validation."
    );
    if (validationWarnings.length > 0) console.log(validationWarnings);
  });
});

describe("Location-Bed", function () {
  const templateFileName = "./lib/templates/Location-bed.js";

  it("should be readable and valid JSON", function () {
    const locationJson = loadTemplate(templateFileName);
  });

  it("should validate against the FHIR schema", function () {
    const locationJson = loadTemplate(templateFileName);
    const validationWarnings = FHIRValidator.validate(locationJson);
    expect(validationWarnings.length).toBe(
      0,
      "Error(s) identified during schema validation."
    );
    if (validationWarnings.length > 0) console.log(validationWarnings);
  });
});

describe("Location-Ward", function () {
  const templateFileName = "./lib/templates/Location-ward.js";

  it("should be readable and valid JSON", function () {
    const locationJson = loadTemplate(templateFileName);
  });

  it("should validate against the FHIR schema", function () {
    const locationJson = loadTemplate(templateFileName);
    const validationWarnings = FHIRValidator.validate(locationJson);
    expect(validationWarnings.length).toBe(
      0,
      "Error(s) identified during schema validation."
    );
    if (validationWarnings.length > 0) console.log(validationWarnings);
  });
});

describe("MedicationAdministration", function () {
  const templateFileName = "./lib/templates/MedicationAdministration.js";

  it("should be readable and valid JSON", function () {
    const medAdmJson = loadTemplate(templateFileName);
  });

  it("should validate against the FHIR schema", function () {
    const medAdmJson = loadTemplate(templateFileName);
    const validationWarnings = FHIRValidator.validate(medAdmJson);
    expect(validationWarnings.length).toBe(
      0,
      "Error(s) identified during schema validation."
    );
    if (validationWarnings.length > 0) console.log(validationWarnings);
  });
});

describe("ServiceRequest", function () {
  const templateFileName = "./lib/templates/ServiceRequest.js";

  it("should be readable and valid JSON", function () {
    const servReqJson = loadTemplate(templateFileName);
  });

  it("should validate against the FHIR schema", function () {
    const servReqJson = loadTemplate(templateFileName);
    const validationWarnings = FHIRValidator.validate(servReqJson);
    expect(validationWarnings.length).toBe(
      0,
      "Error(s) identified during schema validation."
    );
    if (validationWarnings.length > 0) console.log(validationWarnings);
  });
});
