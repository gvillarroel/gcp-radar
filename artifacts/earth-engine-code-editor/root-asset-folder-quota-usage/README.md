# Root asset folder quota usage

Product: Earth Engine Code Editor
Feature slug: `root-asset-folder-quota-usage`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Users can view quota usage for a root asset folder.

## Lifecycle

- Latest feature date: 2016-06-02
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
- key
- permission
- policy
- private
- role
- secret

## Official Evidence

- [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
