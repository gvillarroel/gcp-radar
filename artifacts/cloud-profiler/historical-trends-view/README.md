# Historical trends view

Product: Cloud Profiler
Feature slug: `historical-trends-view`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The historical trends view lets users review Cloud Profiler profiling data over time.

## Lifecycle

- Latest feature date: 2020-09-29
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

- access (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- allow (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- armor (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- audit (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- auth (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- authorization (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- certificate (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- confidential (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- constraint (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- credential (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- encrypt (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- firewall (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- iam (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- identity (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- key (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- kms (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- logging (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- permission (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- policy (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- private (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- role (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- secret (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- security (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- threat (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))
- token (evidence: [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/profiler/docs/about-profiler](https://docs.cloud.google.com/profiler/docs/about-profiler)
- [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles)
- [https://docs.cloud.google.com/profiler/docs/history-view](https://docs.cloud.google.com/profiler/docs/history-view)
