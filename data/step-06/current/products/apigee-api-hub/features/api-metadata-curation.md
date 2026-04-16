---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.541Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "API metadata curation"
feature_slug: "api-metadata-curation"
latest_feature_date: "2025-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/curations"
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub"
keywords:
  - "transform"
  - "curation"
  - "ingested"
  - "process"
  - "enrich"
  - "introduces"
  - "metadata"
---

# API metadata curation

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

API hub introduces a metadata curation process to transform and enrich ingested API metadata for consistent governance, discovery, and management.

## Extended Definition

API hub introduces a metadata curation process to transform and enrich ingested API metadata for consistent governance, discovery, and management.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/curations](https://docs.cloud.google.com/apigee/docs/apihub/curations)
- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub)

## Supporting Pages

### Curations overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/curations](https://docs.cloud.google.com/apigee/docs/apihub/curations)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Curation is the process of transforming and enriching the API metadata ingested by plugins .
- Curation types API hub offers two types of curation to cater to different levels of data transformation and enrichment needs: default curation for basic data transformation and custom curation for more tailored data transformation and enrichment.
- Implement custom data transformation and enrichment : fully utilize Application Integration's capabilities to build integration flows that transform and map API metadata according to your specific needs.
- This integration will use the Collect API endpoint to retrieve the API metadata and then use the extensive range of data mapping and transformation tasks available in Application Integration to implement your desired logic.

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Step 1: Create an integration for custom curation With the environment ready, you can now define the custom curation logic using Application Integration, which will handle the process of identifying, enriching, and transforming the API metadata.
- JavaScript task (Enrich API metadata with spec contents) Script: / Processes and curates API metadata with spec contents. @param {object} event The event object containing API data and spec content. / function executeScript(event) { let apiMetadata = event.getParameter('apiMetadata'); let specContent = event.getParameter('specContent'); // Initialize curatedAPIMetadata directly from apiMetadata const curatedAPIMetadata = { ...apiMetadata }; // Construct the 'spec' object efficiently const spec = { displayName: "open-api-spec", specType: { enumValues: { values: [{ id: "openapi" }] } }, contents: { mimeType: "application/yaml", contents: specContent, }, }; // Create the specMetadata object const specMetadata = { // Ensure originalUpdateTime exists before assigning // provide a fallback if needed originalModifiedTime: curatedAPIMetadata.originalUpdateTime new Date().toISOString(), spec: spec, }; // Initialize or update the specs array within the first version // This assumes versions[0] always exists.
- Finally, the enriched curatedAPIMetadata is returned through the event object for subsequent steps in the custom curation workflow.
- Add checks if it might not. if (!curatedAPIMetadata.versions curatedAPIMetadata.versions.length === 0) { curatedAPIMetadata.versions = [{ specs: [] }]; } else if (!curatedAPIMetadata.versions[0].specs) { curatedAPIMetadata.versions[0].specs = []; } curatedAPIMetadata.versions[0].specs.push(specMetadata); // Set the modified apiData parameter event.setParameter('curatedAPIMetadata', curatedAPIMetadata); } The script demonstrates how the API metadata is enriched using the parsed specContent output from the Data Mapping task.

### "Ingest Microsoft Azure API data into API hub \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub)
- Source ID: `site-docs-reference-2`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Call REST Endpoint taskId: 37 Sends the transformed API data (including specification and metadata) to the API hub collectApiData endpoint using a POST request.
- The following diagram illustrates the workflow you'll be setting up: Objectives In this tutorial, you will complete the following steps: Step 1: Create an Azure App Step 2: Configure Google Cloud resources Step 3: Create and publish an integration in Application Integration Step 4: Execute the integration to ingest API data from Azure APIM to API hub Step 5: Verify and view the ingested API data in API hub Costs In this document, you use the following billable components of Google Cloud: Application Integration To generate a cost estimate based on your projected usage, use the pricing calculator .
- For Each Parallel Task taskId: 19 For each API ID in $api id-list$ , runs a sub-integration ( api trigger/INTEGRATION NAME API 5 ) in parallel to gather detailed metadata for that API, including operations, revisions, specifications, and deployments.
- The following table describes the key components of the integration: Component Configuration or task ID Description API Trigger api trigger/azure apim sync trigger Starts the integration process when triggered by the execute integration.sh script.

