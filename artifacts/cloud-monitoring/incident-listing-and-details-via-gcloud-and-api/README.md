# Incident listing and details via gcloud and API

Product: Cloud Monitoring
Feature slug: `incident-listing-and-details-via-gcloud-and-api`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Monitoring lets you list incidents and retrieve incident details through the Google Cloud CLI and the Cloud Monitoring API.

## Lifecycle

- Latest feature date: 2025-10-23
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

- access (evidence: [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring), [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview))
- constraint (evidence: [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring), [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview))
- iam (evidence: [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring), [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview))
- logging (evidence: [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring), [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview))
- permission (evidence: [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring), [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview))
- policy (evidence: [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring), [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview))
- role (evidence: [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring), [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview))

## Official Evidence

- [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
