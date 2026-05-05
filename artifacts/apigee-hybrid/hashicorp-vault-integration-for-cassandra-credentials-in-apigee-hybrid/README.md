# HashiCorp Vault integration for Cassandra credentials in Apigee hybrid

Product: Apigee hybrid
Feature slug: `hashicorp-vault-integration-for-cassandra-credentials-in-apigee-hybrid`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

As of v1.11.0, Apigee hybrid supports storing Cassandra credentials in HashiCorp Vault, with this integration available as a preview feature.

## Lifecycle

- Latest feature date: 2023-11-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- armor (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide](https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide))
- credential (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide](https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide))
- token (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide](https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide](https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
