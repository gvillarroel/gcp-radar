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

- access (evidence: [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector), [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support))
- allow (evidence: [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector), [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support))
- armor (evidence: [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector), [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support))
- auth (evidence: [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector), [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support))
- authorization (evidence: [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector), [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support))
- constraint (evidence: [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector), [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support))
- iam (evidence: [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector), [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support))
- identity (evidence: [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector), [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support))
- key (evidence: [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector), [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support))
- logging (evidence: [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector), [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support))
- permission (evidence: [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector), [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support))
- policy (evidence: [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector), [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support))
- private (evidence: [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector), [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support))
- role (evidence: [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector), [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support))
- secret (evidence: [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector), [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support))
- security (evidence: [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector), [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support))
- threat (evidence: [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector), [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support))
- token (evidence: [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector), [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support))

## Official Evidence

- [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints)
- [https://docs.cloud.google.com/dataplex/docs/develop-custom-connector](https://docs.cloud.google.com/dataplex/docs/develop-custom-connector)
- [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles)
- [https://docs.cloud.google.com/dataplex/docs/support/getting-support](https://docs.cloud.google.com/dataplex/docs/support/getting-support)
