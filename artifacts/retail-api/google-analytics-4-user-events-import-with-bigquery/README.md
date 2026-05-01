# Google Analytics 4 user events import with BigQuery

Product: Retail API
Feature slug: `google-analytics-4-user-events-import-with-bigquery`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

A bulk import feature for historical Google Analytics 4 user events into Retail API when GA4 is integrated with BigQuery and Enhanced Ecommerce is used.

## Lifecycle

- Latest feature date: 2022-09-15
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
- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
- [https://docs.cloud.google.com/retail/docs/reference/rest](https://docs.cloud.google.com/retail/docs/reference/rest)
- [https://docs.cloud.google.com/retail/docs/setting-up](https://docs.cloud.google.com/retail/docs/setting-up)
