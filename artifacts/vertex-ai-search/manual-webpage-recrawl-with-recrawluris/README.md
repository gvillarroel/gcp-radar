# Manual webpage recrawl with recrawlUris

Product: Vertex AI Search
Feature slug: `manual-webpage-recrawl-with-recrawluris`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Vertex AI Search allows manual refreshing of specific web pages in a data store using the recrawlUris method when Advanced website indexing is enabled.

## Lifecycle

- Latest feature date: 2023-09-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media))
- allow (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media))
- audit (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media))
- auth (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media))
- authorization (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media))
- iam (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media))
- identity (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media))
- logging (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media))
- permission (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media))
- policy (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media))
- secret (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media))
- token (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media))

## Official Evidence

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest)
