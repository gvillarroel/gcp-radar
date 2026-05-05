# Logs Viewer field expansion

Product: Cloud Logging
Feature slug: `logs-viewer-field-expansion`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Logs Viewer lets users expand all fields in a log entry more easily.

## Lifecycle

- Latest feature date: 2017-06-05
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

- access (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- audit (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- iam (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- identity (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- key (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- logging (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- permission (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- policy (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- private (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- role (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
