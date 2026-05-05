# Healthcare Browser DICOM import/export with BigQuery

Product: Cloud Healthcare API
Feature slug: `healthcare-browser-dicom-import-export-with-bigquery`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Cloud Healthcare Browser now supports importing DICOM data to BigQuery and exporting DICOM data from BigQuery.

## Lifecycle

- Latest feature date: 2020-06-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub))
- auth (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub))
- authorization (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub))
- credential (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub))
- iam (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub))
- identity (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub))
- key (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub))
- logging (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub))
- permission (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub))
- role (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub))
- token (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub))

## Official Evidence

- [https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub](https://docs.cloud.google.com/healthcare-api/docs/dicom-pubsub)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicom)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export)
