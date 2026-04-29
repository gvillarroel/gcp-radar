# Project-owned Apps

Product: Earth Engine Code Editor
Feature slug: `project-owned-apps`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Project-owned Apps lets collaborators work on Earth Engine apps under a project ID namespace.

## Lifecycle

- Latest feature date: 2023-08-09
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
- auth
- iam
- permission
- policy
- role
- secret
- security
- token

## Official Evidence

- [https://developers.google.com/earth-engine/guides/access](https://developers.google.com/earth-engine/guides/access)
- [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
- [https://developers.google.com/earth-engine/guides/apps](https://developers.google.com/earth-engine/guides/apps)
