---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:40.082Z"
product_name: "Apigee Integration"
product_slug: "apigee-integration"
feature_name: "Data Mapping array transformation functions"
feature_slug: "data-mapping-array-transformation-functions"
latest_feature_date: "2022-07-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
keywords:
  - "array-type variable functions"
  - "array transformation function"
  - "array map function"
  - "Data Mapping FOR_EACH"
  - "FOR_EACH function"
  - "Data Mapping FILTER"
  - "FOR_EACH"
  - "FILTER function"
---

# Data Mapping array transformation functions

Product: Apigee Integration
Coverage: LOW

## Step 02 Summary

Adds new array transformation functions, including FILTER and FOR_EACH, for processing array-type variables in Data Mapping.

## Extended Definition

Available evidence shows Apigee integration supports a **For Each**-style list-processing step that iterates through an array/list field (for example, `apiMetadataList.apiMetadata`) and executes a sub-integration for each element. This demonstrates per-element array processing behavior consistent with a FOR_EACH-style transformation pattern, but the provided excerpt does not explicitly document a Data Mapping `FOR_EACH` or `FILTER` function implementation.

## Evidence Summary

The cited Google Cloud Apigee API Hub page documents list iteration in a tutorial (for-each loop task), but it only partially overlaps with the claimed Data Mapping array transformation functions and provides no explicit mention of `FILTER`.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)

## Supporting Pages

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: WEAK
- Re-rank rationale: The page appears focused on end-to-end curation and enrichment setup rather than Data Mapping internals or new array transformation function capabilities like FILTER/FOR_EACH.

Evidence snippets:
- It also collates the response of each run in curatedAPIMetadataList , where each element of the array has the response from one particular run. /application-integration/docs/configure-private-trigger">Private Trigger (Enrich each API with spec) Trigger ID: private trigger/test-curate-1 Private 1 Invokes the sub-integration for each element in apiMetaData .
- For Each Loop Task (For Each API) List to iterate: apiData.apiMetadataList.apiMetadata Sub-integration details: Integration name: enrich-with-spec-yaml Trigger ID: private trigger/test-curate-1 Private 1 Iterates over the apiMetadata list and calls the sub-integration for each API resource.

