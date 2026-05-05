# Intel TDX support on C3 machines

Product: Confidential Space
Feature slug: `intel-tdx-support-on-c3-machines`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Confidential Space supports Intel CPUs in the C3 machine family with Intel TDX.

## Lifecycle

- Latest feature date: 2025-03-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims), [https://docs.cloud.google.com/confidential-computing/confidential-space/docs](https://docs.cloud.google.com/confidential-computing/confidential-space/docs), [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview))
- auth (evidence: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims), [https://docs.cloud.google.com/confidential-computing/confidential-space/docs](https://docs.cloud.google.com/confidential-computing/confidential-space/docs), [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview))
- confidential (evidence: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims), [https://docs.cloud.google.com/confidential-computing/confidential-space/docs](https://docs.cloud.google.com/confidential-computing/confidential-space/docs), [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview))
- encrypt (evidence: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims), [https://docs.cloud.google.com/confidential-computing/confidential-space/docs](https://docs.cloud.google.com/confidential-computing/confidential-space/docs), [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview))
- policy (evidence: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims), [https://docs.cloud.google.com/confidential-computing/confidential-space/docs](https://docs.cloud.google.com/confidential-computing/confidential-space/docs), [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview))
- role (evidence: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims), [https://docs.cloud.google.com/confidential-computing/confidential-space/docs](https://docs.cloud.google.com/confidential-computing/confidential-space/docs), [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview))
- security (evidence: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims), [https://docs.cloud.google.com/confidential-computing/confidential-space/docs](https://docs.cloud.google.com/confidential-computing/confidential-space/docs), [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview))
- token (evidence: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims), [https://docs.cloud.google.com/confidential-computing/confidential-space/docs](https://docs.cloud.google.com/confidential-computing/confidential-space/docs), [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview))

## Official Evidence

- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs](https://docs.cloud.google.com/confidential-computing/confidential-space/docs)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
