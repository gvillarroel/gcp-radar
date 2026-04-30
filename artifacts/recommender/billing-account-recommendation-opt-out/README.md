# Billing account recommendation opt-out

Product: Recommender
Feature slug: `billing-account-recommendation-opt-out`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Billing account recommendation opt-out lets you disable recommendations for a specific billing account.

## Lifecycle

- Latest feature date: 2020-07-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `accessapproval.requests.approve`
- `accessapproval.requests.dismiss`
- `accessapproval.requests.get`
- `accessapproval.requests.invalidate`
- `accessapproval.requests.list`
- `accessapproval.serviceAccounts.get`
- `accessapproval.settings.delete`
- `accessapproval.settings.get`
- `accessapproval.settings.update`
- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
- armor
- audit
- auth
- authorization
- certificate
- confidential
- constraint
- credential
- encrypt
- firewall
- iam
- identity
- key
- kms
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

- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- [https://docs.cloud.google.com/recommender/docs/bq-export/export-recommendations-to-bq](https://docs.cloud.google.com/recommender/docs/bq-export/export-recommendations-to-bq)
- [https://docs.cloud.google.com/recommender/docs/change-risk-recommendations](https://docs.cloud.google.com/recommender/docs/change-risk-recommendations)
