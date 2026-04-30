# BigLake integration

Product: Dataplex
Feature slug: `biglake-integration`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

BigLake integration lets Dataplex upgrade Cloud Storage buckets to managed storage and create BigLake tables with fine-grained policy controls.

## Lifecycle

- Latest feature date: 2022-12-16
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

- access
- allow
- armor
- auth
- authorization
- constraint
- iam
- identity
- key
- logging
- permission
- policy
- private
- role
- secret
- security
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints)
- [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector)
- [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles)
- [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support)
