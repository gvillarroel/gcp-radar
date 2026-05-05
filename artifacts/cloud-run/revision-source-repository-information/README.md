# Revision source repository information

Product: Cloud Run
Feature slug: `revision-source-repository-information`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Cloud Run revision details panel can display source repository information for containers built by a Cloud Build trigger.

## Lifecycle

- Latest feature date: 2020-03-30
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

- access (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions))
- iam (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions))
- identity (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions))
- key (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions))
- kms (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions))
- logging (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions))
- permission (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions))
- policy (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions))
- role (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions))
- security (evidence: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles), [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions))

## Official Evidence

- [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build)
- [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)
- [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles)
