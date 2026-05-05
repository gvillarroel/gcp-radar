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

- access (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control))
- auth (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control))
- iam (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control))
- identity (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control))
- key (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control))
- policy (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control))
- role (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control))
- token (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- [https://docs.cloud.google.com/appengine/docs/flexible/access-control](https://docs.cloud.google.com/appengine/docs/flexible/access-control)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/access-control)
