---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:41.790Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Debug view state persistence"
feature_slug: "debug-view-state-persistence"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace"
keywords:
  - "state persists between transactions"
  - "search filter settings"
  - "expand-all state"
  - "debug state persistence"
  - "view state retention"
  - "viewport position"
  - "zoom state"
  - "Debug view"
---

# Debug view state persistence

Product: Apigee UI
Coverage: LOW

## Step 02 Summary

The Apigee Debug view now preserves zoom, expand-all state, viewport position, and search filter settings when switching between transactions.

## Extended Definition

The available Google Cloud documentation confirms that the Apigee UI Debug view is used to inspect message data (such as headers, variables, objects, and timing) for API proxy request/response flows. It does not contain evidence that this Debug view retains zoom, expand/collapse state, viewport position, or search/filter settings when switching between transactions, so state persistence for that view is not verified by the provided excerpt.

## Evidence Summary

The cited page documents how to access and use Apigee's Debug view for tracing proxy traffic, but it does not mention any cross-transaction UI state retention behavior.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)

## Supporting Pages

### View message data with the Debug view \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application development Apigee Guides Send feedback View message data with the Debug view Stay organized with collections Save and categorize content based on your preferences.
- View message data The Debug view in the Apigee Proxy Editor lets you view headers, variables, objects, and other details such as response time in the API proxy request and response flow.
- To use the Debug view in the Apigee UI to see what happens when the SpikeArrest policy rate is exceeded: In the Google Cloud console, go to the Proxy development > API Proxies page.
- This page describes how to use the Debug view to see what happens when the SpikeArrest policy rate is exceeded.

