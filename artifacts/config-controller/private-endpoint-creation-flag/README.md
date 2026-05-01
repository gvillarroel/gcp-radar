# Private endpoint creation flag

Product: Config Controller
Feature slug: `private-endpoint-creation-flag`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The --use-private-endpoint flag lets users create a Config Controller instance with access restricted to the master's private endpoint IP.

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
- allow
- audit
- auth
- certificate
- constraint
- credential
- iam
- key
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
