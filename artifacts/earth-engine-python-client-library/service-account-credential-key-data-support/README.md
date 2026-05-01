# Service account credential key data support

Product: Earth Engine Python Client Library
Feature slug: `service-account-credential-key-data-support`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Added support for passing key data directly to ee.ServiceAccountCredentials() in addition to key filenames.

## Lifecycle

- Latest feature date: 2013-07-24
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
- audit
- auth
- credential
- iam
- key
- permission
- policy
- private
- role
- secret
- token

## Official Evidence

- [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
- [https://developers.google.com/earth-engine/guides/app_engine_intro](https://developers.google.com/earth-engine/guides/app_engine_intro)
- [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)
