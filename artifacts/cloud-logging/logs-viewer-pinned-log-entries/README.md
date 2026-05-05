# Logs Viewer pinned log entries

Product: Cloud Logging
Feature slug: `logs-viewer-pinned-log-entries`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Logs Viewer lets users pin log entries within the query results and histogram panes; Logs Viewer lets users pin a log entry while changing the surrounding display context.

## Lifecycle

- Latest feature date: 2020-09-17
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

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- audit (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- iam (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- identity (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- logging (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- permission (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- policy (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- private (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- role (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
