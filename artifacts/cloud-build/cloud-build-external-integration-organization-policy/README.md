# Cloud Build external integration organization policy

Product: Cloud Build
Feature slug: `cloud-build-external-integration-organization-policy`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Build now supports an organization policy to control builds triggered from external integrations such as GitHub.

## Lifecycle

- Latest feature date: 2022-02-18
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

- access (evidence: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers), [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))
- allow (evidence: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers), [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))
- constraint (evidence: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers), [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))
- firewall (evidence: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers), [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))
- iam (evidence: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers), [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))
- identity (evidence: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers), [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))
- permission (evidence: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers), [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))
- policy (evidence: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers), [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))
- private (evidence: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers), [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))
- role (evidence: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers), [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))
- token (evidence: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers), [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions), [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions)
