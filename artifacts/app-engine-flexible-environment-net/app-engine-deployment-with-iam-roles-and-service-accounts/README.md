# App Engine deployment with IAM roles and service accounts

Product: App Engine flexible environment .NET
Feature slug: `app-engine-deployment-with-iam-roles-and-service-accounts`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Access control documentation was updated for deploying App Engine apps using predefined IAM roles and service accounts.

## Lifecycle

- Latest feature date: 2017-12-14
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
- key
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control)
