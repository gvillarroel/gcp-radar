# Cloud KMS PureEdDSA on Curve25519

Product: Cloud Key Management Service
Feature slug: `cloud-kms-pureeddsa-on-curve25519`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud KMS supports asymmetric signing and validation using ECDSA on Curve25519 in PureEdDSA mode.

## Lifecycle

- Latest feature date: 2024-04-15
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

- access (evidence: [https://docs.cloud.google.com/kms/docs/asymmetric-encryption](https://docs.cloud.google.com/kms/docs/asymmetric-encryption), [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms), [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles))
- encrypt (evidence: [https://docs.cloud.google.com/kms/docs/asymmetric-encryption](https://docs.cloud.google.com/kms/docs/asymmetric-encryption), [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms), [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles))
- iam (evidence: [https://docs.cloud.google.com/kms/docs/asymmetric-encryption](https://docs.cloud.google.com/kms/docs/asymmetric-encryption), [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms), [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles))
- key (evidence: [https://docs.cloud.google.com/kms/docs/asymmetric-encryption](https://docs.cloud.google.com/kms/docs/asymmetric-encryption), [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms), [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles))
- kms (evidence: [https://docs.cloud.google.com/kms/docs/asymmetric-encryption](https://docs.cloud.google.com/kms/docs/asymmetric-encryption), [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms), [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles))
- permission (evidence: [https://docs.cloud.google.com/kms/docs/asymmetric-encryption](https://docs.cloud.google.com/kms/docs/asymmetric-encryption), [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms), [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles))
- policy (evidence: [https://docs.cloud.google.com/kms/docs/asymmetric-encryption](https://docs.cloud.google.com/kms/docs/asymmetric-encryption), [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms), [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles))
- private (evidence: [https://docs.cloud.google.com/kms/docs/asymmetric-encryption](https://docs.cloud.google.com/kms/docs/asymmetric-encryption), [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms), [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles))
- role (evidence: [https://docs.cloud.google.com/kms/docs/asymmetric-encryption](https://docs.cloud.google.com/kms/docs/asymmetric-encryption), [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms), [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles))
- security (evidence: [https://docs.cloud.google.com/kms/docs/asymmetric-encryption](https://docs.cloud.google.com/kms/docs/asymmetric-encryption), [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms), [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles))

## Official Evidence

- [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms)
- [https://docs.cloud.google.com/kms/docs/asymmetric-encryption](https://docs.cloud.google.com/kms/docs/asymmetric-encryption)
- [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles)
