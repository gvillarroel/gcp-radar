---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:36.638Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "Configurable Vertex Search data location"
feature_slug: "configurable-vertex-search-data-location"
latest_feature_date: "2024-09-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/locations"
keywords:
  - "configure Vertex Search location"
  - "Vertex Search location setting"
  - "Vertex Search data location"
  - "provisioning data location"
  - "Vertex Search region"
  - "vertex search region"
  - "search data location"
  - "data residency"
---

# Configurable Vertex Search data location

Product: Apigee API hub
Coverage: LOW

## Step 02 Summary

API hub provisioning now allows configuring Vertex Search data to be hosted in a different location.

## Extended Definition

API hub documentation states that API hub supports data residency, meaning you can control where API hub data is stored at rest so it remains within a chosen geographical region or location. The locations page is provided to help meet residency requirements by describing where API hub is available and how that storage-location control works. Evidence for this specific feature is indirect for Vertex Search specifically, because the provided excerpt confirms configurable data location at the API hub level but does not explicitly mention Vertex Search by name.

## Evidence Summary

The cited page contributes definitions of API hub data residency and confirms configurable at-rest storage locations, but does not directly document a Vertex Search-specific location setting in the excerpt.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/locations](https://docs.cloud.google.com/apigee/docs/apihub/locations)

## Supporting Pages

### API hub locations \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/locations](https://docs.cloud.google.com/apigee/docs/apihub/locations)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly states that semantic search data has a configurable multi-region location and that Vertex AI is provisioned within that selected region scope.

Evidence snippets:
- API hub and data residency Apigee API hub provides data residency to keep your data-at-rest physically within a specified geographical region or location.
- To help comply with data residency requirements, Google Cloud gives you the ability to control where that data is stored.
- This page provides information about data residency and the locations where API hub is available.
- Data residency describes where your data is stored at rest.

