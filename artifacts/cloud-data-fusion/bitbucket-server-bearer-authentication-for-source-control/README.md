# Bitbucket Server Bearer authentication for source control

Product: Cloud Data Fusion
Feature slug: `bitbucket-server-bearer-authentication-for-source-control`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Data Fusion added support for HTTP access token (Bearer) authentication when connecting Cloud Data Fusion to Bitbucket Server for source control.

## Lifecycle

- Latest feature date: 2025-08-27
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
- armor
- auth
- iam
- identity
- key
- logging
- private
- role
- security
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/data-fusion/docs/access-control](https://docs.cloud.google.com/data-fusion/docs/access-control)
- [https://docs.cloud.google.com/data-fusion/docs/authentication](https://docs.cloud.google.com/data-fusion/docs/authentication)
- [https://docs.cloud.google.com/data-fusion/docs/support/billing-questions](https://docs.cloud.google.com/data-fusion/docs/support/billing-questions)
