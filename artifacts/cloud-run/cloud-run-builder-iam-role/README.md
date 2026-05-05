# Cloud Run Builder IAM role

Product: Cloud Run
Feature slug: `cloud-run-builder-iam-role`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Cloud Run Builder IAM role grants build permissions for deploying services or functions from source.

## Lifecycle

- Latest feature date: 2025-01-22
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

- access (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service))
- auth (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service))
- authorization (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service))
- iam (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service))
- identity (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service))
- logging (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service))
- permission (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service))
- policy (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service))
- role (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service))
- security (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service))
- token (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service))

## Official Evidence

- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/c-sharp)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service)
- [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles)
