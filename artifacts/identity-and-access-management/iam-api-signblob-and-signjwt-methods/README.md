# IAM API signBlob and signJwt methods

Product: Identity and Access Management
Feature slug: `iam-api-signblob-and-signjwt-methods`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The IAM API signBlob and signJwt methods are deprecated in favor of the Service Account Credentials API; deprecated on 2021-07-01.

## Lifecycle

- Latest feature date: 2020-06-22
- Deprecation date: 2021-07-01
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/iam/docs/reference/rest](https://docs.cloud.google.com/iam/docs/reference/rest), [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds), [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication), [https://docs.cloud.google.com/iam/docs/audit-logging](https://docs.cloud.google.com/iam/docs/audit-logging))
- allow (evidence: [https://docs.cloud.google.com/iam/docs/reference/rest](https://docs.cloud.google.com/iam/docs/reference/rest), [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds), [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication), [https://docs.cloud.google.com/iam/docs/audit-logging](https://docs.cloud.google.com/iam/docs/audit-logging))
- audit (evidence: [https://docs.cloud.google.com/iam/docs/reference/rest](https://docs.cloud.google.com/iam/docs/reference/rest), [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds), [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication), [https://docs.cloud.google.com/iam/docs/audit-logging](https://docs.cloud.google.com/iam/docs/audit-logging))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/reference/rest](https://docs.cloud.google.com/iam/docs/reference/rest), [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds), [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication), [https://docs.cloud.google.com/iam/docs/audit-logging](https://docs.cloud.google.com/iam/docs/audit-logging))
- authorization (evidence: [https://docs.cloud.google.com/iam/docs/reference/rest](https://docs.cloud.google.com/iam/docs/reference/rest), [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds), [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication), [https://docs.cloud.google.com/iam/docs/audit-logging](https://docs.cloud.google.com/iam/docs/audit-logging))
- credential (evidence: [https://docs.cloud.google.com/iam/docs/reference/rest](https://docs.cloud.google.com/iam/docs/reference/rest), [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds), [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication), [https://docs.cloud.google.com/iam/docs/audit-logging](https://docs.cloud.google.com/iam/docs/audit-logging))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/reference/rest](https://docs.cloud.google.com/iam/docs/reference/rest), [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds), [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication), [https://docs.cloud.google.com/iam/docs/audit-logging](https://docs.cloud.google.com/iam/docs/audit-logging))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/reference/rest](https://docs.cloud.google.com/iam/docs/reference/rest), [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds), [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication), [https://docs.cloud.google.com/iam/docs/audit-logging](https://docs.cloud.google.com/iam/docs/audit-logging))
- key (evidence: [https://docs.cloud.google.com/iam/docs/reference/rest](https://docs.cloud.google.com/iam/docs/reference/rest), [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds), [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication), [https://docs.cloud.google.com/iam/docs/audit-logging](https://docs.cloud.google.com/iam/docs/audit-logging))
- logging (evidence: [https://docs.cloud.google.com/iam/docs/reference/rest](https://docs.cloud.google.com/iam/docs/reference/rest), [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds), [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication), [https://docs.cloud.google.com/iam/docs/audit-logging](https://docs.cloud.google.com/iam/docs/audit-logging))
- permission (evidence: [https://docs.cloud.google.com/iam/docs/reference/rest](https://docs.cloud.google.com/iam/docs/reference/rest), [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds), [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication), [https://docs.cloud.google.com/iam/docs/audit-logging](https://docs.cloud.google.com/iam/docs/audit-logging))
- policy (evidence: [https://docs.cloud.google.com/iam/docs/reference/rest](https://docs.cloud.google.com/iam/docs/reference/rest), [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds), [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication), [https://docs.cloud.google.com/iam/docs/audit-logging](https://docs.cloud.google.com/iam/docs/audit-logging))
- private (evidence: [https://docs.cloud.google.com/iam/docs/reference/rest](https://docs.cloud.google.com/iam/docs/reference/rest), [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds), [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication), [https://docs.cloud.google.com/iam/docs/audit-logging](https://docs.cloud.google.com/iam/docs/audit-logging))
- role (evidence: [https://docs.cloud.google.com/iam/docs/reference/rest](https://docs.cloud.google.com/iam/docs/reference/rest), [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds), [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication), [https://docs.cloud.google.com/iam/docs/audit-logging](https://docs.cloud.google.com/iam/docs/audit-logging))
- token (evidence: [https://docs.cloud.google.com/iam/docs/reference/rest](https://docs.cloud.google.com/iam/docs/reference/rest), [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds), [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication), [https://docs.cloud.google.com/iam/docs/audit-logging](https://docs.cloud.google.com/iam/docs/audit-logging))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/audit-logging](https://docs.cloud.google.com/iam/docs/audit-logging)
- [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamcreds)
- [https://docs.cloud.google.com/iam/docs/authentication](https://docs.cloud.google.com/iam/docs/authentication)
- [https://docs.cloud.google.com/iam/docs/reference/rest](https://docs.cloud.google.com/iam/docs/reference/rest)
