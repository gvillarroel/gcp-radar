# FHIR store BigQuery change export via streamConfigs

Product: Cloud Healthcare API
Feature slug: `fhir-store-bigquery-change-export-via-streamconfigs`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

FHIR stores can now export resource changes to BigQuery on create, update, patch, and delete events using a new streamConfigs field.

## Lifecycle

- Latest feature date: 2020-04-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial](https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export))
- auth (evidence: [https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial](https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export))
- authorization (evidence: [https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial](https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export))
- credential (evidence: [https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial](https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export))
- key (evidence: [https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial](https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export))
- token (evidence: [https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial](https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export))

## Official Evidence

- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export)
- [https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial](https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial)
