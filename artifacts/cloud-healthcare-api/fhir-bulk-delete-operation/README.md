# FHIR bulk-delete operation

Product: Cloud Healthcare API
Feature slug: `fhir-bulk-delete-operation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The FHIR bulk-delete operation is generally available in Cloud Healthcare API, enabling deletion or purging of multiple FHIR resources in one long-running operation using filters such as resource type and last updated time; The FHIR bulk-delete operation is generally available in Cloud Healthcare API, enabling deletion or purging of multiple FHIR resources in one long-running operation using filters such as resource type and last updated time.

## Lifecycle

- Latest feature date: 2026-02-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir-import](https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir-import), [https://docs.cloud.google.com/healthcare-api/docs/cmek](https://docs.cloud.google.com/healthcare-api/docs/cmek), [https://docs.cloud.google.com/healthcare-api/docs/best-practices-lros](https://docs.cloud.google.com/healthcare-api/docs/best-practices-lros))
- encrypt (evidence: [https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir-import](https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir-import), [https://docs.cloud.google.com/healthcare-api/docs/cmek](https://docs.cloud.google.com/healthcare-api/docs/cmek), [https://docs.cloud.google.com/healthcare-api/docs/best-practices-lros](https://docs.cloud.google.com/healthcare-api/docs/best-practices-lros))
- key (evidence: [https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir-import](https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir-import), [https://docs.cloud.google.com/healthcare-api/docs/cmek](https://docs.cloud.google.com/healthcare-api/docs/cmek), [https://docs.cloud.google.com/healthcare-api/docs/best-practices-lros](https://docs.cloud.google.com/healthcare-api/docs/best-practices-lros))
- kms (evidence: [https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir-import](https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir-import), [https://docs.cloud.google.com/healthcare-api/docs/cmek](https://docs.cloud.google.com/healthcare-api/docs/cmek), [https://docs.cloud.google.com/healthcare-api/docs/best-practices-lros](https://docs.cloud.google.com/healthcare-api/docs/best-practices-lros))

## Official Evidence

- [https://docs.cloud.google.com/healthcare-api/docs/best-practices-lros](https://docs.cloud.google.com/healthcare-api/docs/best-practices-lros)
- [https://docs.cloud.google.com/healthcare-api/docs/cmek](https://docs.cloud.google.com/healthcare-api/docs/cmek)
- [https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir-import](https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir-import)
