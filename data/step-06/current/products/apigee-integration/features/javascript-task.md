---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:40.074Z"
product_name: "Apigee Integration"
product_slug: "apigee-integration"
feature_name: "JavaScript task"
feature_slug: "javascript-task"
latest_feature_date: "2023-06-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
keywords:
  - "JavaScript editor"
  - "custom snippets"
  - "variable manipulation"
  - "JavaScript integration task"
  - "JavaScript task"
  - "JS task"
  - "data mapping"
---

# JavaScript task

Product: Apigee Integration
Coverage: LOW

## Step 02 Summary

The JavaScript task moved to general availability in Apigee Integration; Introduces a preview JavaScript task with a JavaScript editor so integrations can use custom snippets for complex data mapping and variable manipulation.

## Extended Definition

The JavaScript task in Apigee-integrated workflows is an integration task that runs custom JavaScript code and manipulates event parameters through `event.getParameter(...)` and `event.setParameter(...)`. In the cited tutorial, it is used for custom data enrichment logic (for example, augmenting API metadata using spec content), showing that the feature enables custom snippets for variable-level data transformation and preparation.

## Evidence Summary

The cited page provides example JavaScript task scripts that demonstrate custom script execution and parameter manipulation, but it does not include explicit statements about GA/preview status.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)

## Supporting Pages

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: The page describes creating an Application Integration flow for custom curation, so it relates to integration capabilities generally, but it does not explicitly discuss a JavaScript task.

Evidence snippets:
- JavaScript task (Enrich API metadata with spec contents) Script: / Processes and curates API metadata with spec contents. @param {object} event The event object containing API data and spec content. / function executeScript(event) { let apiMetadata = event.getParameter('apiMetadata'); let specContent = event.getParameter('specContent'); // Initialize curatedAPIMetadata directly from apiMetadata const curatedAPIMetadata = { ...apiMetadata }; // Construct the 'spec' object efficiently const spec = { displayName: "open-api-spec", specType: { enumValues: { values: [{ id: "openapi" }] } }, contents: { mimeType: "application/yaml", contents: specContent, }, }; // Create the specMetadata object const specMetadata = { // Ensure originalUpdateTime exists before assigning // provide a fallback if needed originalModifiedTime: curatedAPIMetadata.originalUpdateTime new Date().toISOString(), spec: spec, }; // Initialize or update the specs array within the first version // This assumes versions[0] always exists.
- Add checks if it might not. if (!curatedAPIMetadata.versions curatedAPIMetadata.versions.length === 0) { curatedAPIMetadata.versions = [{ specs: [] }]; } else if (!curatedAPIMetadata.versions[0].specs) { curatedAPIMetadata.versions[0].specs = []; } curatedAPIMetadata.versions[0].specs.push(specMetadata); // Set the modified apiData parameter event.setParameter('curatedAPIMetadata', curatedAPIMetadata); } The script demonstrates how the API metadata is enriched using the parsed specContent output from the Data Mapping task.
- JavaScript task (Do not enrich API metadata) Script: function executeScript(event) { // Retrieve the apiData parameter. let apiMetadata = event.getParameter('apiMetadata'); // Set the curated API metadata parameter same as API data. event.setParameter('curatedAPIMetadata', apiMetadata); } The script sets the curated API metadata parameter to be the same as the API data.
- Data mapping task (Construct GCS request payload) Input: connectorInputPayload (Fetch spec from GCS) .SET PROPERTY( apiMetadata .GET PROPERTY("api") .GET PROPERTY("displayName") .TO STRING() .CONCAT(".yaml") .TO LOWERCASE() , "ObjectFilePath" ) Output: ConnectorInputPayload (Fetch spec from GCS) Constructs the input payload for ConnectorInputPayload .

