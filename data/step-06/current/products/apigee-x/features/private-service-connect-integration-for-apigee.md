---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.770Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Private Service Connect integration for Apigee"
feature_slug: "private-service-connect-integration-for-apigee"
latest_feature_date: "2022-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-agent-registry-integration"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation"
keywords:
  - "receive"
  - "integration"
  - "connect"
  - "private"
---

# Private Service Connect integration for Apigee

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee can now use Private Service Connect to receive traffic without requiring managed instance groups behind a global load balancer.

## Extended Definition

Apigee can now use Private Service Connect to receive traffic without requiring managed instance groups behind a global load balancer.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-agent-registry-integration](https://docs.cloud.google.com/apigee/docs/apihub/manage-agent-registry-integration)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation)

## Supporting Pages

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Objectives In this tutorial, you will complete the following steps: Step 1: Create an integration for custom curation Step 2: Set up custom curation in API hub Step 3: Edit existing plugin instance Step 4: Verify enriched API data Costs In this document, you use the following billable components of Google Cloud: Application Integration Integration Connectors Cloud Storage Secret Manager To generate a cost estimate based on your projected usage, use the pricing calculator .
- It also collates the response of each run in curatedAPIMetadataList , where each element of the array has the response from one particular run. /application-integration/docs/configure-private-trigger">Private Trigger (Enrich each API with spec) Trigger ID: private trigger/test-curate-1 Private 1 Invokes the sub-integration for each element in apiMetaData .
- A new version of the integration is created as shown in the following image: Configure connector task in the integration After uploading the integration, the next step is to configure the Connectors task to connect to your Cloud Storage bucket: Click the Connectors task named Fetch spec from GCS to view the connector configuration pane.
- The following table provides details about each element to help you understand how the curation logic works: Component Configuration Description API trigger API Trigger ID: api trigger/test-custom-curation API 1 Receives data from the API hub plugin instance to invoke the integration for custom curation.

### Manage Agent Registry integration \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-agent-registry-integration](https://docs.cloud.google.com/apigee/docs/apihub/manage-agent-registry-integration)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Disable Agent Registry integration Warning: Disabling this sync stops the injection of new MCP tools and server metadata and removes all previously synced API hub-sourced content from Agent Registry.
- Home Documentation Application development Apigee Guides Send feedback Manage Agent Registry integration Stay organized with collections Save and categorize content based on your preferences.
- This integration enables AI agents to discover and utilize the MCP-styled APIs registered in your hub.
- Enable Agent Registry integration Console In the Google Cloud console, click API hub > Settings .

### Secure an API by requiring API keys \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation)
- Source ID: `site-docs-reference-2`
- Final score: 54
- Re-rank relevance: N/A

