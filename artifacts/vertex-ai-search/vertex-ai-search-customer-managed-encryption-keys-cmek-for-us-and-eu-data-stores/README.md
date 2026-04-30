# Vertex AI Search customer-managed encryption keys (CMEK) for US and EU data stores

Product: Vertex AI Search
Feature slug: `vertex-ai-search-customer-managed-encryption-keys-cmek-for-us-and-eu-data-stores`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Vertex AI Search supports CMEK for data stored in US and EU multi-region data stores, allowing customers to use their own keys for encryption at rest.

## Lifecycle

- Latest feature date: 2024-10-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- encrypt
- key
- token

## Official Evidence

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/record-user-events](https://docs.cloud.google.com/generative-ai-app-builder/docs/record-user-events)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MonitoredResourceMetadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MonitoredResourceMetadata)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
