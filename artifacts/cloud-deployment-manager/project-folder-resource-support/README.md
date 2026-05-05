# Project folder resource support

Product: Cloud Deployment Manager
Feature slug: `project-folder-resource-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Deployment Manager supports creating and acquiring project folders through the gcp-types/cloudresourcemanager-v2:folders type provider.

## Lifecycle

- Latest feature date: 2018-09-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment), [https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration](https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration))
- audit (evidence: [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment), [https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration](https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration))
- iam (evidence: [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment), [https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration](https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration))
- logging (evidence: [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment), [https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration](https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration))
- permission (evidence: [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment), [https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration](https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration))
- policy (evidence: [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment), [https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration](https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration))
- security (evidence: [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment), [https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration](https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration))

## Official Evidence

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration](https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration)
- [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment)
