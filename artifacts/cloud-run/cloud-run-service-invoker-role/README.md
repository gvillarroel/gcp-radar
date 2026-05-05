# Cloud Run Service Invoker role

Product: Cloud Run
Feature slug: `cloud-run-service-invoker-role`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Cloud Run Service Invoker predefined IAM role grants least-privilege access for invoking Cloud Run services.

## Lifecycle

- Latest feature date: 2024-12-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- auth (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- constraint (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- iam (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- identity (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- key (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- kms (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- permission (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- policy (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- private (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- role (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- security (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))

## Official Evidence

- [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles)
- [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc)
- [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services)
