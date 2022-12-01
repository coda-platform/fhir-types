[![Build Status](https://travis-ci.com/CODA-19/fhir-templates.svg?branch=master)](https://travis-ci.com/github/CODA-19/fhir-templates)
<br />

# FHIR Types

### Overview

- **Description:** This repository contains reference FHIR templates in JSON format for resources of interest for the CODA project. The templates contain dummy data and are tested against the FHIR schema using automated testing.
- **Primary author(s):** Jeffrey Li [[@JeffreyLi16](https://github.com/JeffreyLi16)], Louis Mullie [[@louism](https://github.com/louismullie)], Pascal St-Onge [[@stongepa](https://github.com/stongepa)].
- **Contributors:** Julien Levesque [[@JulienL3vesque](https://github.com/JulienL3vesque)], Rajeev Das [[@rajeevdas2507](https://github.com/rajeevdas2507)], Rima Bouchakri [[@Rima-B](https://github.com/Rima-B)].
- **License:** The code in this repository is released under the GNU General Public License, V3.

## Templates

- [Encounter](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/Encounter.js)
- [Condition](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/Condition.js)
- ImagingStudy
- Location - bed
- Location - ward
- MedicationAdministration
- Observation - Culture data
- [Observation - Lab data](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/Observation-Labs.js)
- Observation - PCR data
- Observation - Ventilation data
- Observation - Vital signs
- [Patient](https://github.com/coda-platform/fhir-types/blob/main/lib/templates/Patient.js)
- Procedure
- ServiceRequest

## Requirements

- NodeJS version 12+
- Node package manager (NPM)

## Install

In order to install, clone the repository and install the dependencies:

```
git clone https://github.com/CODA-19/fhir-templates
cd fhir-templates
npm install
```

## Tests

Tests are automatically run on Travis. In order to run tests manually, run:

```
jasmine
```

## Authors

Kip Brown, Rajeev Das, Louis Mullie, Pascal St-Onge
