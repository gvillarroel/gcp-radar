# Cloud Build resource location restrictions via Organization Policy

Product: Cloud Build
Feature slug: `cloud-build-resource-location-restrictions-via-organization-policy`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Build can restrict creation of builds, triggers, and repositories to specific locations through an Organization Policy constraint.

## Lifecycle

- Latest feature date: 2023-05-09
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
- allow
- constraint
- iam
- key
- permission
- policy
- private
- role
- secret
- token

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/connect-host-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/connect-host-github-enterprise)
