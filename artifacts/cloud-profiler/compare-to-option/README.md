# Compare To option

Product: Cloud Profiler
Feature slug: `compare-to-option`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Compare To option lets users compare profiles by end time, zone, or service version.

## Lifecycle

- Latest feature date: 2018-07-24
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

- access (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- allow (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- armor (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- audit (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- auth (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- authorization (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- certificate (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- confidential (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- constraint (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- credential (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- encrypt (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- firewall (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- iam (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- identity (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- key (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- kms (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- logging (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- permission (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- policy (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- private (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- role (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- secret (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- security (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- threat (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))
- token (evidence: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles), [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles)
- [https://docs.cloud.google.com/profiler/docs/profiling-go](https://docs.cloud.google.com/profiler/docs/profiling-go)
- [https://docs.cloud.google.com/profiler/docs/profiling-java](https://docs.cloud.google.com/profiler/docs/profiling-java)
