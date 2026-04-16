---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.158Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apps per developer limit increase"
feature_slug: "apps-per-developer-limit-increase"
latest_feature_date: "2024-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference"
  - "https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apps/list"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/develop/rate-limiting"
keywords:
  - "increased"
  - "developer"
  - "increase"
  - "maximum"
  - "apps"
  - "limit"
---

# Apps per developer limit increase

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee increased the maximum number of apps per developer from 10 to 100.

## Extended Definition

Apigee increased the maximum number of apps per developer from 10 to 100.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)
- [https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apps/list](https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apps/list)
- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/rate-limiting](https://docs.cloud.google.com/apigee/docs/api-platform/develop/rate-limiting)

## Supporting Pages

### "Analytics metrics, dimensions, and filters reference \_|\_ Apigee \_|\_\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, policy error metrics, grouped by the developer app dimension, might help you discover that an API key or OAuth token has expired for a given app; or you might find that a specific API proxy is throwing a lot of SpikeArrest policy errors, leading you to discover that the proxy's spike arrest limit doesn't account for an increase in holiday traffic.
- In order to get this dimension, app developers or AppGroups must have apps associated with one or more API products that contain the API proxies being called, and the proxies must check for an API key or OAuth token sent with the API call.
- In order to get this dimension, app developers and AppGroups must have apps associated with one or more API products containing the API proxies being called, and the proxies must check for an API key or OAuth token sent with the API calls.
- In order to get this dimension, developer apps making the calls must be associated with one or more API products that contain the API proxies, and the proxies being called must check for an API key or OAuth token sent with the API call.

### Method: organizations.apps.list \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apps/list](https://docs.cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.apps/list)
- Source ID: `site-api-reference`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The filter expression to be used to get the list of apps, where filtering can be done on developerEmail, apiProduct, consumerKey, status, appId, appName, appType and appGroup.
- Lists IDs of apps within an organization that have the specified app status (approved or revoked) or are of the specified app type (developer or company).
- Resource path of the parent in the following format: organizations/{org} Authorization requires the following IAM permission on the specified resource parent : apigee.apps.list Query parameters Parameters status string Optional.
- Home Documentation Application development Apigee Reference Send feedback Method: organizations.apps.list Stay organized with collections Save and categorize content based on your preferences.

### Rate-limiting \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/develop/rate-limiting](https://docs.cloud.google.com/apigee/docs/api-platform/develop/rate-limiting)
- Source ID: `site-docs-reference-required-3`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To maintain performance and availability across a diverse base of client apps, it's critical to maintain app traffic within the limits of the capacity of your APIs and backend services.
- Quota policy This policy enforces consumption limits on client apps by maintaining a distributed 'counter' that tallies incoming requests.
- The counter can tally API calls for any identifiable entity, including apps, developers, API keys, access tokens, and so on.
- See: LLMTokenQuota policy PromptTokenLimit policy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

