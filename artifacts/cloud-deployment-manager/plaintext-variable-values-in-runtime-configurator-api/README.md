# Plaintext variable values in Runtime Configurator API

Product: Cloud Deployment Manager
Feature slug: `plaintext-variable-values-in-runtime-configurator-api`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Runtime Configurator API supports plaintext variable values when creating a variable.

## Lifecycle

- Latest feature date: 2016-11-01
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

- access (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates](https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates))
- allow (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates](https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates))
- auth (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates](https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates))
- certificate (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates](https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates))
- credential (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates](https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates))
- firewall (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates](https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates))
- iam (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates](https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates))
- key (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates](https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates))
- logging (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates](https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates))
- permission (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates](https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates))
- policy (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates](https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates))
- private (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates](https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates))
- role (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates](https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates))
- secret (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates](https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates))
- security (evidence: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates](https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates))

## Official Evidence

- [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control)
- [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates](https://docs.cloud.google.com/deployment-manager/docs/configuration/adding-templates)
