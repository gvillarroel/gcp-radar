---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.770Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Private Service Connect integration for non-peered VPC backends"
feature_slug: "private-service-connect-integration-for-non-peered-vpc-backends"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace"
keywords:
  - "backends"
  - "integration"
  - "peered"
  - "connect"
  - "private"
---

# Private Service Connect integration for non-peered VPC backends

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect support now allows Apigee to connect to backend target services in VPCs other than the one peered with the Apigee organization.

## Extended Definition

Private Service Connect support now allows Apigee to connect to backend target services in VPCs other than the one peered with the Apigee organization.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)

## Supporting Pages

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Objectives In this tutorial, you will complete the following steps: Step 1: Create an integration for custom curation Step 2: Set up custom curation in API hub Step 3: Edit existing plugin instance Step 4: Verify enriched API data Costs In this document, you use the following billable components of Google Cloud: Application Integration Integration Connectors Cloud Storage Secret Manager To generate a cost estimate based on your projected usage, use the pricing calculator .
- It also collates the response of each run in curatedAPIMetadataList , where each element of the array has the response from one particular run. /application-integration/docs/configure-private-trigger">Private Trigger (Enrich each API with spec) Trigger ID: private trigger/test-curate-1 Private 1 Invokes the sub-integration for each element in apiMetaData .
- A new version of the integration is created as shown in the following image: Configure connector task in the integration After uploading the integration, the next step is to configure the Connectors task to connect to your Cloud Storage bucket: Click the Connectors task named Fetch spec from GCS to view the connector configuration pane.
- For Each Loop Task (For Each API) List to iterate: apiData.apiMetadataList.apiMetadata Sub-integration details: Integration name: enrich-with-spec-yaml Trigger ID: private trigger/test-curate-1 Private 1 Iterates over the apiMetadata list and calls the sub-integration for each API resource.

### View message data with the Debug view \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- Source ID: `site-docs-reference-2`
- Final score: 68
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### Understanding organizations \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure)
- Source ID: `site-docs-reference-2`
- Final score: 66
- Re-rank relevance: N/A

