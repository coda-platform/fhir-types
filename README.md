[![Schema validation](https://github.com/coda-platform/fhir-types/actions/workflows/publish.yml/badge.svg)](https://github.com/coda-platform/fhir-types/actions/workflows/publish.yml)
<br />

# FHIR Types

### Overview

- **Description:** This repository contains reference FHIR templates in JSON format for resources of interest for the CODA project. The templates contain dummy data and are tested against the FHIR schema using automated testing.
- **Primary author(s):** Jeffrey Li [[@JeffreyLi16](https://github.com/JeffreyLi16)], Louis Mullie [[@louism](https://github.com/louismullie)], Pascal St-Onge [[@stongepa](https://github.com/stongepa)].
- **Contributors:** Julien Levesque [[@JulienL3vesque](https://github.com/JulienL3vesque)], Rajeev Das [[@rajeevdas2507](https://github.com/rajeevdas2507)], Rima Bouchakri [[@Rima-B](https://github.com/Rima-B)], Kip Brown.
- **License:** The code in this repository is released under the GNU General Public License, V3.

## FHIR version

Types are currently validated against [version 4.0](http://hl7.org/fhir/R4/fhir.schema.json.zip) of the FHIR schema definition.

## Templates

- [Encounter](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/Encounter.js)
- [Condition](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/Condition.js)
- [ImagingStudy](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/ImagingStudy.js)
- Location - bed
- [Location - ward](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/Location-ward.js)
- [MedicationAdministration](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/MedicationAdministration.js)
- Observation - Culture data
- [Observation - Lab data](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/Observation-Labs.js)
- Observation - PCR data
- Observation - Ventilation data
- Observation - Vital signs
- [Patient](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/Patient.js)
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

## Tests

To execute tests manually, run:

```
npm run test
```
