# Task Manager

Product: Earth Engine Code Editor
Feature slug: `task-manager`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

A standalone Task Manager and a new Tasks tab interface were launched for Earth Engine task management.

## Lifecycle

- Latest feature date: 2021-09-15
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

## Official Evidence

- [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://developers.google.com/earth-engine/guides/python_install](https://developers.google.com/earth-engine/guides/python_install)
