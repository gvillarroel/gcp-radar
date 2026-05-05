# Binary Authorization PKIX attestor keys

Product: Binary Authorization
Feature slug: `binary-authorization-pkix-attestor-keys`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Binary Authorization now supports asymmetric PKIX key pairs for attestor identity verification, with PKIX-compliant keys managed in Cloud KMS.

## Lifecycle

- Latest feature date: 2019-04-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli))
- auth (evidence: [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli))
- authorization (evidence: [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli))
- iam (evidence: [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli))
- identity (evidence: [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli))
- key (evidence: [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli))
- kms (evidence: [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli))
- permission (evidence: [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli))
- policy (evidence: [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli))
- private (evidence: [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli))
- role (evidence: [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli))
- security (evidence: [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli))
- token (evidence: [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest), [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli))

## Official Evidence

- [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-cli)
- [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-console)
- [https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest](https://docs.cloud.google.com/binary-authorization/docs/creating-attestors-rest)
