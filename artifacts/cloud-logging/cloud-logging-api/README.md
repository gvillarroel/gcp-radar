# Cloud Logging API

Product: Cloud Logging
Feature slug: `cloud-logging-api`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Google Cloud Logging API lets users write logs, create logs, and control log export through client libraries and API methods.

## Lifecycle

- Latest feature date: 2015-03-19
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

- access (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit))
- audit (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit))
- iam (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit))
- identity (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit))
- key (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit))
- logging (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit))
- permission (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit))
- policy (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit))
- private (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit))
- role (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit))

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
