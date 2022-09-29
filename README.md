[![Build Status](https://travis-ci.com/CODA-19/fhir-templates.svg?branch=master)](https://travis-ci.com/github/CODA-19/fhir-templates)
<br />

# CODA-19: FHIR templates

This repository contains FHIR templates in JSON format for resources of interest for the CODA project. The templates contain dummy data and are tested against the FHIR schema.

## Templates

- Encounter
- ImagingStudy
- Location - bed
- Location - ward
- MedicationAdministration
- Observation - Culture data
- Observation - Lab data
- Observation - PCR data
- Observation - Ventilation data
- Observation - Vital signs
- Patient
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
