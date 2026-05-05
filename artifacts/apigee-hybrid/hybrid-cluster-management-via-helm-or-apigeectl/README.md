# Hybrid cluster management via Helm or apigeectl

Product: Apigee hybrid
Feature slug: `hybrid-cluster-management-via-helm-or-apigeectl`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Starting in v1.11.0, Apigee hybrid supports installing and managing clusters using either Helm or apigeectl, but not both simultaneously.

## Lifecycle

- Latest feature date: 2023-11-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- certificate (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- identity (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- permission (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- role (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- secret (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- security (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
- [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings)
- [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
