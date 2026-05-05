# runtime-config gcloud command group

Product: Cloud Deployment Manager
Feature slug: `runtime-config-gcloud-command-group`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Runtime Configurator gcloud commands are grouped under the runtime-config command namespace.

## Lifecycle

- Latest feature date: 2017-02-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment), [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file](https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file))
- audit (evidence: [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment), [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file](https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file))
- auth (evidence: [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment), [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file](https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file))
- authorization (evidence: [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment), [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file](https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file))
- certificate (evidence: [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment), [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file](https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file))
- firewall (evidence: [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment), [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file](https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file))
- iam (evidence: [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment), [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file](https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file))
- key (evidence: [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment), [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file](https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file))
- logging (evidence: [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment), [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file](https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file))
- permission (evidence: [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment), [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file](https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file))
- policy (evidence: [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment), [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file](https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file))
- security (evidence: [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment), [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file](https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file))

## Official Evidence

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file](https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types)
- [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment)
