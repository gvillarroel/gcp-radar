# BigQuery partitioning and clustering recommender

Product: Recommender
Feature slug: `bigquery-partitioning-and-clustering-recommender`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Analyzes BigQuery tables to find partitioning or clustering opportunities for cost savings.

## Lifecycle

- Latest feature date: 2023-05-25
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
- [https://docs.cloud.google.com/iam/docs/roles-permissions/recommender](https://docs.cloud.google.com/iam/docs/roles-permissions/recommender)
- [https://docs.cloud.google.com/recommender/docs/bq-export/export-recommendations-to-bq](https://docs.cloud.google.com/recommender/docs/bq-export/export-recommendations-to-bq)
- [https://docs.cloud.google.com/recommender/docs/recommenders](https://docs.cloud.google.com/recommender/docs/recommenders)
