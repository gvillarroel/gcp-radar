# Drive resource key security update controls

Product: Apps Script
Feature slug: `drive-resource-key-security-update-controls`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Drive resource key security update controls let scripts check and set whether shared files and folders require a resource key.

## Lifecycle

- Latest feature date: 2021-08-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
- key
- permission
- security

## Official Evidence

- [https://developers.google.com/apps-script/guides/cloud-platform-projects](https://developers.google.com/apps-script/guides/cloud-platform-projects)
- [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
