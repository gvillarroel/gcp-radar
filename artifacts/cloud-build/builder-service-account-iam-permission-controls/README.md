# Builder service account IAM permission controls

Product: Cloud Build
Feature slug: `builder-service-account-iam-permission-controls`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Builder service account permissions were expanded to support end-user and IAM-based control when invoking permissioned APIs during builds.

## Lifecycle

- Latest feature date: 2017-06-07
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

- access (evidence: [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions), [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts), [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run))
- iam (evidence: [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions), [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts), [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run))
- identity (evidence: [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions), [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts), [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run))
- key (evidence: [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions), [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts), [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run))
- permission (evidence: [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions), [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts), [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run))
- role (evidence: [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions), [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts), [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run))

## Official Evidence

- [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts)
- [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run)
- [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions)
