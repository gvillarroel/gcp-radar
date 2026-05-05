# Uptime check failure logs in Uptime details

Product: Cloud Monitoring
Feature slug: `uptime-check-failure-logs-in-uptime-details`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Uptime details page can display logs for uptime check failures when failure logging is enabled.

## Lifecycle

- Latest feature date: 2025-04-04
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

- access (evidence: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview), [https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring](https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control))
- iam (evidence: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview), [https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring](https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control))
- logging (evidence: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview), [https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring](https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control))
- permission (evidence: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview), [https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring](https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control))
- policy (evidence: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview), [https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring](https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control))
- role (evidence: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview), [https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring](https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control))

## Official Evidence

- [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring](https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring)
