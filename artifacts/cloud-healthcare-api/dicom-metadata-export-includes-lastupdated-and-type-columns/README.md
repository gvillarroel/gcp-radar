# DICOM metadata export includes LastUpdated and Type columns

Product: Cloud Healthcare API
Feature slug: `dicom-metadata-export-includes-lastupdated-and-type-columns`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

When exporting DICOM metadata to BigQuery, generated tables now include LastUpdated and Type columns that capture instance-deleted metadata; When exporting DICOM metadata to BigQuery, generated tables now include LastUpdated and Type columns that capture instance-deleted metadata.

## Lifecycle

- Latest feature date: 2022-09-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class](https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class), [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export))
- auth (evidence: [https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class](https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class), [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export))
- authorization (evidence: [https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class](https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class), [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export))
- logging (evidence: [https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class](https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class), [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export))
- token (evidence: [https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class](https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class), [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export))

## Official Evidence

- [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- [https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class](https://docs.cloud.google.com/healthcare-api/docs/dicom-storage-class)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export)
