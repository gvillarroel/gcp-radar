# ImageCollection asset management

Product: Earth Engine Code Editor
Feature slug: `imagecollection-asset-management`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Users can create and share ImageCollection assets and add or remove Image assets from them.

## Lifecycle

- Latest feature date: 2015-11-19
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
- identity
- permission
- policy
- role
- secret

## Official Evidence

- [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- [https://developers.google.com/earth-engine/guides/access_control](https://developers.google.com/earth-engine/guides/access_control)
- [https://developers.google.com/earth-engine/guides/apps](https://developers.google.com/earth-engine/guides/apps)
