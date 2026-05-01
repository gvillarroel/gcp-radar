# Cloud External Key Manager

Product: Cloud Key Management Service
Feature slug: `cloud-external-key-manager`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud External Key Manager is generally available; Cloud External Key Manager lets Google Cloud services use keys stored in supported external key management systems.

## Lifecycle

- Latest feature date: 2020-04-15
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

## Security Capabilities

- encrypt
- iam
- key
- kms
- logging
- permission
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/kms/docs/autokey-overview](https://docs.cloud.google.com/kms/docs/autokey-overview)
- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- [https://docs.cloud.google.com/kms/docs/create-external-key](https://docs.cloud.google.com/kms/docs/create-external-key)
- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
