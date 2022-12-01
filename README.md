[![Schema validation](https://github.com/coda-platform/fhir-types/actions/workflows/publish.yml/badge.svg)](https://github.com/coda-platform/fhir-types/actions/workflows/publish.yml)
<br />

# FHIR Types

### Overview

- **Description:** This repository contains reference FHIR templates in JSON format for resources of interest for the CODA project. The templates contain dummy data and are validated against the FHIR schema. The repository exports type information that can be accessed by uing `fhir-types` as a git submodule.
- **Primary author(s):** Jeffrey Li [[@JeffreyLi16](https://github.com/JeffreyLi16)], Louis Mullie [[@louism](https://github.com/louismullie)], Pascal St-Onge [[@stongepa](https://github.com/stongepa)].
- **Contributors:** Julien Levesque [[@JulienL3vesque](https://github.com/JulienL3vesque)], Rajeev Das [[@rajeevdas2507](https://github.com/rajeevdas2507)], Rima Bouchakri [[@Rima-B](https://github.com/Rima-B)], Kip Brown.
- **License:** The code in this repository is released under the GNU General Public License, V3.

## FHIR version

Types are currently validated against [version 4.0](http://hl7.org/fhir/R4/fhir.schema.json.zip) of the FHIR schema definition. Tests are run automatically every time the repository is modified.

## Templates

- [Patient](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/Patient.js)
- [Encounter](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/Encounter.js)
- [Location - Bed](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/Location-bed.js)
- [Location - Ward](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/Location-ward.js)
- [Observation - Culture data](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/Observation-Culture.js)
- [Observation - Lab data](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/Observation-Labs.js)
- [Observation - PCR data](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/Observation-PCR.js)
- [Observation - Ventilation data](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/Observation-Vent.js)
- [Observation - Vital signs](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/Observation-VitalSigns.js)
- [ImagingStudy](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/ImagingStudy.js)
- [Condition](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/Condition.js)
- [MedicationAdministration](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/MedicationAdministration.js)
- [Procedure](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/Procedure.js)
- [ServiceRequest](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/ServiceRequest.js)

## Requirements

- NodeJS version 16+
- Node package manager (NPM)

## Install

To install, clone the repository and install the dependencies:

```
git clone https://github.com/coda-platform/fhir-types
cd fhir-types
npm install
```

## Generate export types

To generate the terminology dictionary and update the auto-generated `index.js`, execute:

```
npm run generate
```

The export types are used in the [dashboard app](https://github.com/coda-platform/dashboard-app).

## Tests

To execute tests manually, run:

```
npm run test
```
