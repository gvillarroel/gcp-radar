# Log scope management with Google Cloud CLI

Product: Cloud Logging
Feature slug: `log-scope-management-with-google-cloud-cli`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Google Cloud CLI can create and manage log scopes.

## Lifecycle

- Latest feature date: 2024-10-29
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

- access (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse))
- iam (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse))
- key (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse))
- logging (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse))
- permission (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse))
- policy (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse))
- private (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse))
- role (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse))
- token (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse))

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
