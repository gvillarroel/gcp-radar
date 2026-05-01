# Automatic task categorization

Product: Earth Engine Code Editor
Feature slug: `automatic-task-categorization`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Tasks older than one day are automatically categorized.

## Lifecycle

- Latest feature date: 2015-04-23
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

## Security Capabilities

- access
- auth
- iam
- key
- permission
- role

## Official Evidence

- [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
