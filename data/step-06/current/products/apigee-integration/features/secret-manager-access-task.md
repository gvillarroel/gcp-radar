---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:03:12.351Z"
product_name: "Apigee Integration"
product_slug: "apigee-integration"
feature_name: "Secret Manager - Access task"
feature_slug: "secret-manager-access-task"
latest_feature_date: "2023-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order"
  - "https://docs.cloud.google.com/application-integration/docs/api-fulfilment"
keywords:
  - "retrieve"
  - "manager"
  - "secret"
  - "versions"
  - "access"
  - "introduces"
  - "preview"
  - "task"
---

# Secret Manager - Access task

Product: Apigee Integration
Coverage: MEDIUM

## Step 02 Summary

Introduces a Secret Manager Access task (preview) to retrieve secret versions from Secret Manager.

## Extended Definition

Introduces a Secret Manager Access task (preview) to retrieve secret versions from Secret Manager.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- [https://docs.cloud.google.com/application-integration/docs/api-fulfilment](https://docs.cloud.google.com/application-integration/docs/api-fulfilment)

## Supporting Pages

### "Automate Salesforce opportunity to BigQuery order \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- Source ID: `site-docs-reference-required-2`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Grant the following roles to the service account: BigQuery Data Editor ( roles/bigquery.dataEditor ), BigQuery Read Session User ( roles/bigquery.readSessionUser ), Secret Manager Viewer ( roles/secretmanager.viewer ), Secret Manager Secret Accessor ( roles/secretmanager ) .
- Grant the following roles to the service account: BigQuery Data Editor ( roles/bigquery.dataEditor ), BigQuery Read Session User ( roles/bigquery.readSessionUser ), Secret Manager Viewer ( roles/secretmanager.viewer ), Secret Manager Secret Accessor ( roles/secretmanager ) .
- Costs In this tutorial, you use the following billable components of Google Cloud: Application Integration Integration Connectors BigQuery Secret Manager The instructions in this tutorial are designed to keep your resource usage within the limits of Google Cloud's Always Free tier .
- Connect to the Salesforce account Perform the following steps to add and configure a Connectors task to retrieve the opportunity details using the Salesforce connection: In the integration editor, click Tasks to display a list of available tasks.

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin Before you begin this tutorial, ensure you have completed the following: Grant the following IAM roles to the service account that you want to use to create the connection: roles/secretmanager.viewer, roles/secretmanager.secretAccessor roles/storage.admin For information on granting roles, see Granting, changing, and revoking access .
- JavaScript task (Enrich API metadata with spec contents) Script: / Processes and curates API metadata with spec contents. @param {object} event The event object containing API data and spec content. / function executeScript(event) { let apiMetadata = event.getParameter('apiMetadata'); let specContent = event.getParameter('specContent'); // Initialize curatedAPIMetadata directly from apiMetadata const curatedAPIMetadata = { ...apiMetadata }; // Construct the 'spec' object efficiently const spec = { displayName: "open-api-spec", specType: { enumValues: { values: [{ id: "openapi" }] } }, contents: { mimeType: "application/yaml", contents: specContent, }, }; // Create the specMetadata object const specMetadata = { // Ensure originalUpdateTime exists before assigning // provide a fallback if needed originalModifiedTime: curatedAPIMetadata.originalUpdateTime new Date().toISOString(), spec: spec, }; // Initialize or update the specs array within the first version // This assumes versions[0] always exists.
- Add checks if it might not. if (!curatedAPIMetadata.versions curatedAPIMetadata.versions.length === 0) { curatedAPIMetadata.versions = [{ specs: [] }]; } else if (!curatedAPIMetadata.versions[0].specs) { curatedAPIMetadata.versions[0].specs = []; } curatedAPIMetadata.versions[0].specs.push(specMetadata); // Set the modified apiData parameter event.setParameter('curatedAPIMetadata', curatedAPIMetadata); } The script demonstrates how the API metadata is enriched using the parsed specContent output from the Data Mapping task.
- Objectives In this tutorial, you will complete the following steps: Step 1: Create an integration for custom curation Step 2: Set up custom curation in API hub Step 3: Edit existing plugin instance Step 4: Verify enriched API data Costs In this document, you use the following billable components of Google Cloud: Application Integration Integration Connectors Cloud Storage Secret Manager To generate a cost estimate based on your projected usage, use the pricing calculator .

### "API request fulfilment \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/api-fulfilment](https://docs.cloud.google.com/application-integration/docs/api-fulfilment)
- Source ID: `site-docs-reference-required-2`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Grant the following roles to the service account: Secret Manager Viewer ( roles/secretmanager.viewer ), Secret Manager Secret Accessor ( roles/secretmanager ) .
- Grant the following roles to the service account: Secret Manager Viewer ( roles/secretmanager.viewer ), Secret Manager Secret Accessor ( roles/secretmanager ) .
- Costs In this tutorial, you use the following billable components of Google Cloud: Application Integration Integration Connectors Secret Manager The instructions in this tutorial are designed to keep your resource usage within the limits of Google Cloud's Always Free tier .
- Connect to the Oracle database Perform the following steps to add and configure a Connectors task to retrieve the customers details from the Oracle Customers table: In the integration editor, click Tasks to display a list of available tasks.

