// This file is automatically generated; do not edit manually.
export const FiltersByDataType = {
  "string": [
    "equal",
    "not equal",
    "is null",
    "is not null"
  ],
  "array": [
    "is empty",
    "is not empty",
    "contains any element where",
    "contains no element where",
    "contains only elements where"
  ]
}
export const ResourceTypes = [
  "Condition",
  "Encounter",
  "Location",
  "MedicationAdministration",
  "Observation",
  "Observation_VitalSigns",
  "Patient",
  "Procedure",
  "ServiceRequest"
]
export const AttributesByResourceType = {
  "Condition": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "id",
      "type": "string"
    },
    {
      "name": "clinicalStatus_coding",
      "type": "array",
      "subpaths": [
        {
          "name": "system",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "display",
          "type": "string"
        }
      ]
    },
    {
      "name": "subject_reference",
      "type": "string"
    },
    {
      "name": "encounter_reference",
      "type": "string"
    },
    {
      "name": "onset_datetime",
      "type": "dateTime"
    },
    {
      "name": "code_coding",
      "type": "array",
      "subpaths": [
        {
          "name": "system",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "display",
          "type": "string"
        }
      ]
    },
    {
      "name": "code_text",
      "type": "string"
    }
  ],
  "Encounter": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "encounter_id",
      "type": "string"
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "class",
      "type": "array",
      "subpaths": [
        {
          "name": "system",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "display",
          "type": "string"
        }
      ]
    },
    {
      "name": "subject_reference",
      "type": "string"
    },
    {
      "name": "location",
      "type": "array",
      "subpaths": [
        {
          "name": "location_reference",
          "type": "string"
        },
        {
          "name": "location_display",
          "type": "string"
        },
        {
          "name": "status",
          "type": "string"
        },
        {
          "name": "period_start",
          "type": "dateTime"
        },
        {
          "name": "period_end",
          "type": "dateTime"
        }
      ]
    },
    {
      "name": "actual_period_start",
      "type": "dateTime"
    },
    {
      "name": "actual_period_end",
      "type": "dateTime"
    },
    {
      "name": "service_type",
      "type": "string"
    }
  ],
  "Location": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "bed_id",
      "type": "string"
    },
    {
      "name": "identifier",
      "type": "array",
      "subpaths": [
        {
          "name": "value",
          "type": "string"
        }
      ]
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "form_coding",
      "type": "array",
      "subpaths": [
        {
          "name": "system",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "display",
          "type": "string"
        }
      ]
    },
    {
      "name": "type",
      "type": "array",
      "subpaths": [
        {
          "name": "coding",
          "type": "array",
          "subpaths": [
            {
              "name": "system",
              "type": "string"
            },
            {
              "name": "code",
              "type": "string"
            },
            {
              "name": "display",
              "type": "string"
            }
          ]
        }
      ]
    },
    {
      "name": "part_of_reference",
      "type": "string"
    }
  ],
  "MedicationAdministration": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "id",
      "type": "string"
    },
    {
      "name": "identifier",
      "type": "array",
      "subpaths": [
        {
          "name": "value",
          "type": "string"
        }
      ]
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "subject_reference",
      "type": "string"
    },
    {
      "name": "encounter_reference",
      "type": "string"
    },
    {
      "name": "request_reference",
      "type": "string"
    },
    {
      "name": "medication_concept_coding",
      "type": "array",
      "subpaths": [
        {
          "name": "system",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "display",
          "type": "string"
        }
      ]
    },
    {
      "name": "medication_concept_text",
      "type": "string"
    },
    {
      "name": "occurrence_period_start",
      "type": "dateTime"
    },
    {
      "name": "occurrence_period_end",
      "type": "dateTime"
    },
    {
      "name": "dosage_text",
      "type": "string"
    },
    {
      "name": "dosage_route_coding",
      "type": "array",
      "subpaths": [
        {
          "name": "system",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "display",
          "type": "string"
        }
      ]
    },
    {
      "name": "dosage_route_text",
      "type": "string"
    },
    {
      "name": "dosage_dose_system",
      "type": "string"
    },
    {
      "name": "dosage_dose_unit",
      "type": "string"
    },
    {
      "name": "dosage_dose_code",
      "type": "string"
    },
    {
      "name": "dosage_dose_value",
      "type": "integer"
    },
    {
      "name": "dosage_rate_quantity_system",
      "type": "string"
    },
    {
      "name": "dosage_rate_quantity_unit",
      "type": "string"
    },
    {
      "name": "dosage_rate_quantity_code",
      "type": "string"
    },
    {
      "name": "dosage_rate_quantity_value",
      "type": "integer"
    }
  ],
  "Observation": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "observation_id",
      "type": "string"
    },
    {
      "name": "identifier",
      "type": "array",
      "subpaths": [
        {
          "name": "value",
          "type": "string"
        }
      ]
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "category",
      "type": "array",
      "subpaths": [
        {
          "name": "coding",
          "type": "array",
          "subpaths": [
            {
              "name": "system",
              "type": "string"
            },
            {
              "name": "code",
              "type": "string"
            },
            {
              "name": "display",
              "type": "string"
            }
          ]
        }
      ]
    },
    {
      "name": "effective_datetime",
      "type": "dateTime"
    },
    {
      "name": "issued",
      "type": "dateTime"
    },
    {
      "name": "subject_reference",
      "type": "string"
    },
    {
      "name": "encounter_reference",
      "type": "string"
    },
    {
      "name": "code_coding",
      "type": "array",
      "subpaths": [
        {
          "name": "system",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "display",
          "type": "string"
        }
      ]
    },
    {
      "name": "code_text",
      "type": "string"
    },
    {
      "name": "value_quantity_value",
      "type": "integer"
    },
    {
      "name": "value_quantity_unit",
      "type": "string"
    },
    {
      "name": "interpretation",
      "type": "array",
      "subpaths": [
        {
          "name": "coding",
          "type": "array",
          "subpaths": [
            {
              "name": "code",
              "type": "string"
            },
            {
              "name": "system",
              "type": "string"
            },
            {
              "name": "display",
              "type": "string"
            }
          ]
        },
        {
          "name": "text",
          "type": "string"
        }
      ]
    },
    {
      "name": "referenceRange",
      "type": "array",
      "subpaths": [
        {
          "name": "text",
          "type": "string"
        }
      ]
    },
    {
      "name": "note",
      "type": "array",
      "subpaths": [
        {
          "name": "text",
          "type": "string"
        }
      ]
    }
  ],
  "Observation_VitalSigns": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "observation_id",
      "type": "string"
    },
    {
      "name": "identifier",
      "type": "array",
      "subpaths": [
        {
          "name": "value",
          "type": "string"
        }
      ]
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "category",
      "type": "array",
      "subpaths": [
        {
          "name": "coding",
          "type": "array",
          "subpaths": [
            {
              "name": "system",
              "type": "string"
            },
            {
              "name": "code",
              "type": "string"
            },
            {
              "name": "display",
              "type": "string"
            }
          ]
        }
      ]
    },
    {
      "name": "effective_datetime",
      "type": "dateTime"
    },
    {
      "name": "subject_reference",
      "type": "string"
    },
    {
      "name": "code_coding",
      "type": "array",
      "subpaths": [
        {
          "name": "system",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "display",
          "type": "string"
        }
      ]
    },
    {
      "name": "code_text",
      "type": "string"
    },
    {
      "name": "value_quantity_value",
      "type": "decimal"
    },
    {
      "name": "value_quantity_unit",
      "type": "string"
    }
  ],
  "Patient": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "patient_id",
      "type": "string"
    },
    {
      "name": "gender",
      "type": "string"
    },
    {
      "name": "birth_date",
      "type": "date"
    },
    {
      "name": "deceased_datetime",
      "type": "dateTime"
    },
    {
      "name": "deceased_boolean",
      "type": "boolean"
    },
    {
      "name": "age",
      "type": "integer"
    }
  ],
  "Procedure": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "procedure_id",
      "type": "string"
    },
    {
      "name": "subject_reference",
      "type": "string"
    },
    {
      "name": "encounter_reference",
      "type": "string"
    },
    {
      "name": "basedOn",
      "type": "array",
      "subpaths": [
        {
          "name": "reference",
          "type": "string"
        }
      ]
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "code_coding",
      "type": "array",
      "subpaths": [
        {
          "name": "system",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        },
        {
          "name": "display",
          "type": "string"
        }
      ]
    },
    {
      "name": "code_text",
      "type": "string"
    },
    {
      "name": "occurrencePeriod_start",
      "type": "dateTime"
    },
    {
      "name": "occurrencePeriod_end",
      "type": "dateTime"
    }
  ],
  "ServiceRequest": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "request_id",
      "type": "string"
    },
    {
      "name": "subject_reference",
      "type": "string"
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "intent",
      "type": "string"
    },
    {
      "name": "category",
      "type": "array",
      "subpaths": [
        {
          "name": "coding",
          "type": "array",
          "subpaths": [
            {
              "name": "system",
              "type": "string"
            },
            {
              "name": "code",
              "type": "string"
            },
            {
              "name": "display",
              "type": "string"
            }
          ]
        }
      ]
    },
    {
      "name": "authoredOn",
      "type": "dateTime"
    },
    {
      "name": "occurrence_date_time",
      "type": "dateTime"
    },
    {
      "name": "code",
      "type": "array",
      "subpaths": [
        {
          "name": "concept_coding",
          "type": "array",
          "subpaths": [
            {
              "name": "system",
              "type": "string"
            },
            {
              "name": "code",
              "type": "string"
            },
            {
              "name": "display",
              "type": "string"
            }
          ]
        }
      ]
    }
  ]
};
export const FlatAttributesByResourceType = {
  "Condition": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "id",
      "type": "string"
    },
    {
      "name": "clinicalStatus_coding_system",
      "type": "string"
    },
    {
      "name": "clinicalStatus_coding_code",
      "type": "string"
    },
    {
      "name": "clinicalStatus_coding_display",
      "type": "string"
    },
    {
      "name": "subject_reference",
      "type": "string"
    },
    {
      "name": "encounter_reference",
      "type": "string"
    },
    {
      "name": "onset_datetime",
      "type": "dateTime"
    },
    {
      "name": "code_coding_system",
      "type": "string"
    },
    {
      "name": "code_coding_code",
      "type": "string"
    },
    {
      "name": "code_coding_display",
      "type": "string"
    },
    {
      "name": "code_text",
      "type": "string"
    }
  ],
  "Encounter": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "encounter_id",
      "type": "string"
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "class_system",
      "type": "string"
    },
    {
      "name": "class_code",
      "type": "string"
    },
    {
      "name": "class_display",
      "type": "string"
    },
    {
      "name": "subject_reference",
      "type": "string"
    },
    {
      "name": "location_reference_identifier",
      "type": "string"
    },
    {
      "name": "location_location_display",
      "type": "string"
    },
    {
      "name": "location_status",
      "type": "string"
    },
    {
      "name": "location_period_start",
      "type": "dateTime"
    },
    {
      "name": "location_period_end",
      "type": "dateTime"
    },
    {
      "name": "actual_period_start",
      "type": "dateTime"
    },
    {
      "name": "actual_period_end",
      "type": "dateTime"
    },
    {
      "name": "service_type",
      "type": "string"
    }
  ],
  "Location": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "bed_id",
      "type": "string"
    },
    {
      "name": "identifier_value",
      "type": "string"
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "form_coding_system",
      "type": "string"
    },
    {
      "name": "form_coding_code",
      "type": "string"
    },
    {
      "name": "form_coding_display",
      "type": "string"
    },
    {
      "name": "type_coding_system",
      "type": "string"
    },
    {
      "name": "type_coding_code",
      "type": "string"
    },
    {
      "name": "type_coding_display",
      "type": "string"
    },
    {
      "name": "part_of_reference",
      "type": "string"
    }
  ],
  "MedicationAdministration": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "id",
      "type": "string"
    },
    {
      "name": "identifier_value",
      "type": "string"
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "subject_reference",
      "type": "string"
    },
    {
      "name": "encounter_reference",
      "type": "string"
    },
    {
      "name": "request_reference",
      "type": "string"
    },
    {
      "name": "medication_concept_coding_system",
      "type": "string"
    },
    {
      "name": "medication_concept_coding_code",
      "type": "string"
    },
    {
      "name": "medication_concept_coding_display",
      "type": "string"
    },
    {
      "name": "medication_concept_text",
      "type": "string"
    },
    {
      "name": "occurrence_period_start",
      "type": "dateTime"
    },
    {
      "name": "occurrence_period_end",
      "type": "dateTime"
    },
    {
      "name": "dosage_text",
      "type": "string"
    },
    {
      "name": "dosage_route_coding_system",
      "type": "string"
    },
    {
      "name": "dosage_route_coding_code",
      "type": "string"
    },
    {
      "name": "dosage_route_coding_display",
      "type": "string"
    },
    {
      "name": "dosage_route_text",
      "type": "string"
    },
    {
      "name": "dosage_dose_system",
      "type": "string"
    },
    {
      "name": "dosage_dose_unit",
      "type": "string"
    },
    {
      "name": "dosage_dose_code",
      "type": "string"
    },
    {
      "name": "dosage_dose_value",
      "type": "integer"
    },
    {
      "name": "dosage_rate_quantity_system",
      "type": "string"
    },
    {
      "name": "dosage_rate_quantity_unit",
      "type": "string"
    },
    {
      "name": "dosage_rate_quantity_code",
      "type": "string"
    },
    {
      "name": "dosage_rate_quantity_value",
      "type": "integer"
    }
  ],
  "Observation": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "observation_id",
      "type": "string"
    },
    {
      "name": "identifier_value",
      "type": "string"
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "category_coding_system",
      "type": "string"
    },
    {
      "name": "category_coding_code",
      "type": "string"
    },
    {
      "name": "category_coding_display",
      "type": "string"
    },
    {
      "name": "effective_datetime",
      "type": "dateTime"
    },
    {
      "name": "issued",
      "type": "dateTime"
    },
    {
      "name": "subject_reference",
      "type": "string"
    },
    {
      "name": "encounter_reference",
      "type": "string"
    },
    {
      "name": "code_coding_system",
      "type": "string"
    },
    {
      "name": "code_coding_code",
      "type": "string"
    },
    {
      "name": "code_coding_display",
      "type": "string"
    },
    {
      "name": "code_text",
      "type": "string"
    },
    {
      "name": "value_quantity_value",
      "type": "integer"
    },
    {
      "name": "value_quantity_unit",
      "type": "string"
    },
    {
      "name": "interpretation_coding_code",
      "type": "string"
    },
    {
      "name": "interpretation_coding_system",
      "type": "string"
    },
    {
      "name": "interpretation_coding_display",
      "type": "string"
    },
    {
      "name": "interpretation_text",
      "type": "string"
    },
    {
      "name": "referenceRange_text",
      "type": "string"
    },
    {
      "name": "note_text",
      "type": "string"
    }
  ],
  "Observation_VitalSigns": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "observation_id",
      "type": "string"
    },
    {
      "name": "identifier_value",
      "type": "string"
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "category_coding_system",
      "type": "string"
    },
    {
      "name": "category_coding_code",
      "type": "string"
    },
    {
      "name": "category_coding_display",
      "type": "string"
    },
    {
      "name": "effective_datetime",
      "type": "dateTime"
    },
    {
      "name": "subject_reference",
      "type": "string"
    },
    {
      "name": "code_coding_system",
      "type": "string"
    },
    {
      "name": "code_coding_code",
      "type": "string"
    },
    {
      "name": "code_coding_display",
      "type": "string"
    },
    {
      "name": "code_text",
      "type": "string"
    },
    {
      "name": "value_quantity_value",
      "type": "decimal"
    },
    {
      "name": "value_quantity_unit",
      "type": "string"
    }
  ],
  "Patient": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "patient_id",
      "type": "string"
    },
    {
      "name": "gender",
      "type": "string"
    },
    {
      "name": "birth_date",
      "type": "date"
    },
    {
      "name": "deceased_datetime",
      "type": "dateTime"
    },
    {
      "name": "deceased_boolean",
      "type": "boolean"
    },
    {
      "name": "age",
      "type": "integer"
    }
  ],
  "Procedure": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "procedure_id",
      "type": "string"
    },
    {
      "name": "subject_reference",
      "type": "string"
    },
    {
      "name": "encounter_reference",
      "type": "string"
    },
    {
      "name": "basedOn_reference",
      "type": "string"
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "code_coding_system",
      "type": "string"
    },
    {
      "name": "code_coding_code",
      "type": "string"
    },
    {
      "name": "code_coding_display",
      "type": "string"
    },
    {
      "name": "code_text",
      "type": "string"
    },
    {
      "name": "occurrencePeriod_start",
      "type": "dateTime"
    },
    {
      "name": "occurrencePeriod_end",
      "type": "dateTime"
    }
  ],
  "ServiceRequest": [
    {
      "name": "resourceType",
      "type": "string"
    },
    {
      "name": "request_id",
      "type": "string"
    },
    {
      "name": "subject_reference",
      "type": "string"
    },
    {
      "name": "status",
      "type": "string"
    },
    {
      "name": "intent",
      "type": "string"
    },
    {
      "name": "category_coding_system",
      "type": "string"
    },
    {
      "name": "category_coding_code",
      "type": "string"
    },
    {
      "name": "category_coding_display",
      "type": "string"
    },
    {
      "name": "authoredOn",
      "type": "dateTime"
    },
    {
      "name": "occurrence_date_time",
      "type": "dateTime"
    },
    {
      "name": "code_concept_coding_system",
      "type": "string"
    },
    {
      "name": "code_concept_coding_code",
      "type": "string"
    },
    {
      "name": "code_concept_coding_display",
      "type": "string"
    }
  ]
};
