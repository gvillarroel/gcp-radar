# Compute Engine idle resource recommendations

Product: Recommender
Feature slug: `compute-engine-idle-resource-recommendations`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Compute Engine recommendations help you view and apply recommendations for idle resources such as disk images and IP addresses.

## Lifecycle

- Latest feature date: 2020-11-08
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
- [https://docs.cloud.google.com/recommender/docs/unattended-project-recommender](https://docs.cloud.google.com/recommender/docs/unattended-project-recommender)
- [https://docs.cloud.google.com/recommender/docs/using-api](https://docs.cloud.google.com/recommender/docs/using-api)
