# FHIR _content search requires resource type

Product: Cloud Healthcare API
Feature slug: `fhir-content-search-requires-resource-type`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

FHIR searches using the _content parameter without an explicit FHIR resource type are being deprecated; deprecated on 2022-05-23.

## Lifecycle

- Latest feature date: 2022-04-22
- Deprecation date: 2022-05-23
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search), [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- allow (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search), [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- auth (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search), [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- authorization (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search), [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- credential (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search), [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- permission (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search), [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- policy (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search), [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- role (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search), [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- security (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search), [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))
- token (evidence: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search), [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent), [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources))

## Official Evidence

- [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-resources)
- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search](https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search)
