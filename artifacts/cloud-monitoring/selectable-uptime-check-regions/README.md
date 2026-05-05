# Selectable Uptime Check Regions

Product: Cloud Monitoring
Feature slug: `selectable-uptime-check-regions`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Users can choose the geographic regions that perform uptime checks.

## Lifecycle

- Latest feature date: 2017-02-06
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

- access (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus))
- allow (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus))
- auth (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus))
- certificate (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus))
- credential (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus))
- iam (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus))
- key (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus))
- logging (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus))
- policy (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus))
- role (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus))
- token (evidence: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus))

## Official Evidence

- [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog)
