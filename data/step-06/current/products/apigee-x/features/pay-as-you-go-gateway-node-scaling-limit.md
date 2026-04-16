---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.187Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Pay-as-you-go gateway node scaling limit"
feature_slug: "pay-as-you-go-gateway-node-scaling-limit"
latest_feature_date: "2022-08-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/glossary"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference"
keywords:
  - "gateway"
  - "node"
  - "scaling"
  - "limit"
---

# Pay-as-you-go gateway node scaling limit

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The Apigee pay-as-you-go pricing model supports up to 1,000 gateway nodes across all environments in a region.

## Extended Definition

The Apigee pay-as-you-go pricing model supports up to 1,000 gateway nodes across all environments in a region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/glossary](https://docs.cloud.google.com/apigee/docs/api-platform/reference/glossary)
- [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference)

## Supporting Pages

### Glossary \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/glossary](https://docs.cloud.google.com/apigee/docs/api-platform/reference/glossary)
- Source ID: `site-api-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- An API proxy is an abstraction layer that fronts for your backend service APIs and provides value-added features such as security, rate limiting, quotas, analytics, and more. proxy endpoint A proxy endpoint defines the way your API proxy interacts with client applications.
- I image repository A group of shared container images. implicit limit A limit (such as a developer prepaid balance limit) set by monetization. individual operator/organization A company whose structure does not include subsidiaries or sub-organizations.
- The hostname is part of the URL used to call API proxies deployed to any environment in the environment group. explicit limit See custom limit . group operator/organization A company whose structure includes subsidiaries or sub-organizations.
- C Cassandra (Apigee hybrid only) The runtime data repository that stores application configurations, distributed quota counters, API keys, and OAuth tokens for applications running on the gateway.

### "Analytics metrics, dimensions, and filters reference \_|\_ Apigee \_|\_\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- For example, policy error metrics, grouped by the developer app dimension, might help you discover that an API key or OAuth token has expired for a given app; or you might find that a specific API proxy is throwing a lot of SpikeArrest policy errors, leading you to discover that the proxy's spike arrest limit doesn't account for an increase in holiday traffic.
- For example, the VerifyApiKey policy throws an error when an invalid API key is passed in the request, and a SpikeArrest policy throws an error if the number of API calls exceeds the limit defined in the policy.
- Gateway Flow ID is useful for distinguishing metrics in high-TPS situations where other dimensions such as organization, environment, and timestamp are identical across calls.
- For example: messaging.adaptors.http.flow.GatewayTimeout Flow Name on Error ax execution fault flow name Named flow in an API proxy that raised an error.

### Endpoint properties reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference)
- Source ID: `site-api-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Supported values are: gzip: always send message using gzip compression deflate: always send message using deflate compression none: always send message without any compression See also: Does Apigee support compression/de-compression with GZIP/deflate compression? api.timeout N/A Configure the timeout for individual API proxies (in milliseconds) You can configure API proxies, even those with streaming enabled, to time out after a specified time with a 504 Gateway Timeout status.
- For example: <HTTPTargetConnection> <Properties> <Property name="use.proxy.host.header.with.target.uri">true</Property> </Properties> <URL>https://mocktarget.apigee.net/my-target</URL> </HTTPTargetConnection> response.payload. parse.limit 10M By default ( 10M ).
- If the value is less than zero, then the maximum amount of time to handle the request has expired and the Message Processor returns a 504 Gateway Timeout .
- If the connection in the pool is idle beyond the specified limit, then the connection is closed. connect.timeout.millis 3000 Target connection timeout.

