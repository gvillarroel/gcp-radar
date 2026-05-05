# Uptime checks regex negation content matching

Product: Cloud Monitoring
Feature slug: `uptime-checks-regex-negation-content-matching`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Uptime checks support regex negation for content matching.

## Lifecycle

- Latest feature date: 2019-08-08
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

- access (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control))
- allow (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control))
- auth (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control))
- certificate (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control))
- constraint (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control))
- credential (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control))
- iam (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control))
- key (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control))
- logging (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control))
- permission (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control))
- policy (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control))
- role (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control))
- token (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control))

## Official Evidence

- [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog)
