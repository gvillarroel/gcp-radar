# Enterprise Search data location configuration

Product: Vertex AI Search
Feature slug: `enterprise-search-data-location-configuration`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Vertex AI Search supports configuring data location settings for Enterprise Search to align with data residency requirements.

## Lifecycle

- Latest feature date: 2023-09-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/before-you-begin](https://docs.cloud.google.com/generative-ai-app-builder/docs/before-you-begin), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MonitoredResourceMetadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MonitoredResourceMetadata))
- auth (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/before-you-begin](https://docs.cloud.google.com/generative-ai-app-builder/docs/before-you-begin), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MonitoredResourceMetadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MonitoredResourceMetadata))
- encrypt (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/before-you-begin](https://docs.cloud.google.com/generative-ai-app-builder/docs/before-you-begin), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MonitoredResourceMetadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MonitoredResourceMetadata))
- iam (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/before-you-begin](https://docs.cloud.google.com/generative-ai-app-builder/docs/before-you-begin), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MonitoredResourceMetadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MonitoredResourceMetadata))
- key (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/before-you-begin](https://docs.cloud.google.com/generative-ai-app-builder/docs/before-you-begin), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MonitoredResourceMetadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MonitoredResourceMetadata))
- role (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/before-you-begin](https://docs.cloud.google.com/generative-ai-app-builder/docs/before-you-begin), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MonitoredResourceMetadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MonitoredResourceMetadata))

## Official Evidence

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/before-you-begin](https://docs.cloud.google.com/generative-ai-app-builder/docs/before-you-begin)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MonitoredResourceMetadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MonitoredResourceMetadata)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
