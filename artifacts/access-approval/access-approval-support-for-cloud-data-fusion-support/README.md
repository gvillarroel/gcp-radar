# Access Approval support for Cloud Data Fusion support

Product: Access Approval
Feature slug: `access-approval-support-for-cloud-data-fusion-support`
Coverage: `LOW`
IAM mapping: `explicit`

## Technical Summary

Cloud Data Fusion support is supported by Access Approval.

## Lifecycle

- Latest feature date: 2024-09-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.approver`

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services))
- armor (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services))
- audit (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services))
- auth (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services))
- certificate (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services))
- iam (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services))
- identity (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services))
- key (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services))
- kms (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services))
- logging (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services))
- policy (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services))
- role (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services))
- secret (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services))
- security (evidence: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources), [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services))

## Official Evidence

- [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
- `warn:support_matrix_only_evidence` The feature is backed only by broad support-matrix style evidence, not a dedicated page for the supported target.
