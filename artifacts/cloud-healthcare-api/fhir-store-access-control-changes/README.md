# FHIR store access control changes

Product: Cloud Healthcare API
Feature slug: `fhir-store-access-control-changes`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

FHIR store permission rules were updated so API-level access no longer implies configuration read access and executeBundle no longer implies create, update, delete, or get permissions.

## Lifecycle

- Latest feature date: 2020-02-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- authorization
- iam
- identity
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/healthcare-api/docs/fhir-access-control](https://docs.cloud.google.com/healthcare-api/docs/fhir-access-control)
- [https://docs.cloud.google.com/healthcare-api/docs/fhir-access-control-technical](https://docs.cloud.google.com/healthcare-api/docs/fhir-access-control-technical)
- [https://docs.cloud.google.com/healthcare-api/docs/fhir-consent](https://docs.cloud.google.com/healthcare-api/docs/fhir-consent)
