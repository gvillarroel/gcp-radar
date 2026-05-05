# Seccomp Profiles

Product: Apigee hybrid
Feature slug: `seccomp-profiles`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Apigee Hybrid supports Seccomp Profiles for runtime components to limit container system calls to the host kernel, improving container security posture.

## Lifecycle

- Latest feature date: 2025-12-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials), [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint))
- credential (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials), [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint))
- security (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials), [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint)
- [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/options-configuring-tls)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
