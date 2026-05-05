# IP allowlist exceptions for essential Google Cloud services

Product: Looker
Feature slug: `ip-allowlist-exceptions-for-essential-google-cloud-services`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Looker admins can allow essential Google Cloud services to access an instance even when an IP allowlist is active.

## Lifecycle

- Latest feature date: 2026-02-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-server-ip-allowlist](https://docs.cloud.google.com/looker/docs/admin-panel-server-ip-allowlist), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/add_support_access_allowlist_entries](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/add_support_access_allowlist_entries), [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings))
- allow (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-server-ip-allowlist](https://docs.cloud.google.com/looker/docs/admin-panel-server-ip-allowlist), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/add_support_access_allowlist_entries](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/add_support_access_allowlist_entries), [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings))
- auth (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-server-ip-allowlist](https://docs.cloud.google.com/looker/docs/admin-panel-server-ip-allowlist), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/add_support_access_allowlist_entries](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/add_support_access_allowlist_entries), [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings))
- permission (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-server-ip-allowlist](https://docs.cloud.google.com/looker/docs/admin-panel-server-ip-allowlist), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/add_support_access_allowlist_entries](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/add_support_access_allowlist_entries), [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings))
- role (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-server-ip-allowlist](https://docs.cloud.google.com/looker/docs/admin-panel-server-ip-allowlist), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/add_support_access_allowlist_entries](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/add_support_access_allowlist_entries), [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings))

## Official Evidence

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-server-ip-allowlist](https://docs.cloud.google.com/looker/docs/admin-panel-server-ip-allowlist)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/add_support_access_allowlist_entries](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/add_support_access_allowlist_entries)
