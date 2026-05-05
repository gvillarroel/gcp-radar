# FHIR store export filtering with _type and _since

Product: Cloud Healthcare API
Feature slug: `fhir-store-export-filtering-with-type-and-since`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The fhirStores.export method now accepts _type and _since parameters to filter exported resources.

## Lifecycle

- Latest feature date: 2022-03-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir), [https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial](https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial))
- auth (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir), [https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial](https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial))
- authorization (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir), [https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial](https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial))
- key (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir), [https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial](https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial))
- logging (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir), [https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial](https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial))
- token (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir), [https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial](https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial))

## Official Evidence

- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-import-export)
- [https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial](https://docs.cloud.google.com/healthcare-api/docs/tutorials/fhir-bigquery-streaming-tutorial)
