---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.243Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Large message payload support"
feature_slug: "large-message-payload-support"
latest_feature_date: "2025-06-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/release-notes"
keywords:
  - "message payload limit"
  - "max payload size"
  - "30 MB payload"
  - "30MB limit"
  - "API payload size"
  - "environment payload configuration"
  - "runtime resource settings"
  - "large payloads"
---

# Large message payload support

Product: Apigee hybrid
Coverage: LOW

## Step 02 Summary

Apigee Hybrid supports API message payloads up to 30 MB and allows configuration per environment or for the entire installation; Apigee Hybrid supports API message payloads up to 30 MB, configurable via runtime resource settings.

## Extended Definition

Apigee Hybrid supports API message payloads up to 30 MB and allows configuration per environment or for the entire installation; Apigee Hybrid supports API message payloads up to 30 MB, configurable via runtime resource settings.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)
- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)

## Supporting Pages

### "Best practices for API proxy design and development with Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Consider the following recommended strategies for handling large message sizes in Apigee: We highly recommend isolating API proxies that frequently handle large payloads in a dedicated environment to avoid a potential "noisy neighbor" scenario.
- System CPU and memory resources are consumed in greater quantities by proxies that manage large payloads, especially when used in conjunction with policies that interact with large payloads.
- If your organization uses Pay-as-you-go billing , we recommend using configurable limits for large payloads only for API proxies deployed in Comprehensive environment.
- We also recommend limiting the use of policies to interact with large payloads.

### Configuration property reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

### Apigee hybrid release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

