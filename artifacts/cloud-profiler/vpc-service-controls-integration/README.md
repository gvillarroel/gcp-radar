# VPC Service Controls integration

Product: Cloud Profiler
Feature slug: `vpc-service-controls-integration`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Profiler integrates with VPC Service Controls to help protect service boundaries.

## Lifecycle

- Latest feature date: 2019-12-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `accessapproval.requests.approve`
- `accessapproval.requests.dismiss`
- `accessapproval.requests.get`
- `accessapproval.requests.invalidate`
- `accessapproval.requests.list`
- `accessapproval.serviceAccounts.get`
- `accessapproval.settings.delete`
- `accessapproval.settings.get`
- `accessapproval.settings.update`
- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
- armor
- audit
- auth
- authorization
- certificate
- confidential
- constraint
- credential
- encrypt
- firewall
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- role
- secret
- security
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.CreateOfflineProfileRequestOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.CreateOfflineProfileRequestOrBuilder)
- [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler)
