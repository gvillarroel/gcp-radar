# Get Config Connector identity command

Product: Config Controller
Feature slug: `get-config-connector-identity-command`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The gcloud anthos config controller get-config-connector-identity command prints the default Config Connector identity for easier permission setup.

## Lifecycle

- Latest feature date: 2022-05-02
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
- audit
- certificate
- constraint
- credential
- iam
- identity
- logging
- permission
- policy
- private
- role
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/manage-resources](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/manage-resources)
- [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions)
- [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/setup](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/setup)
- [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/troubleshoot](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/troubleshoot)
