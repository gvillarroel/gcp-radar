---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.660Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Microsoft SharePoint data store filtering"
feature_slug: "microsoft-sharepoint-data-store-filtering"
latest_feature_date: "2026-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging"
keywords:
  - "microsoft"
  - "sharepoint"
  - "store"
  - "filtering"
  - "administrators"
  - "can"
  - "filter"
  - "stores"
---

# Microsoft SharePoint data store filtering

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Administrators can filter Microsoft SharePoint data stores to include or exclude specific sites accessible to the assistant.

## Extended Definition

Administrators can filter Microsoft SharePoint data stores to include or exclude specific sites accessible to the assistant.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider](https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls](https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls)
- [https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging](https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging)

## Supporting Pages

### About apps and data stores \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Only the following fields can be added or updated in a serving config: boostControlIds displayName filterControlIds genericConfig : contentSearchSpec name solutionType synonymsControlIds CRUD operations on the following controls are supported for blended search apps: boostAction synonymAction filterAction There is a limit of 50 data stores per search app.
- When getting search results, you can either search across all data stores, or filter for results from a single data store.
- Blended search allows the following fields in search requests : boostSpec contentSearchSpec dataStoreSpecs facetSpecs filter languageCode offset oneBoxPageSize orderBy query pageSize pageToken relevanceScoreSpec relevanceThreshold session sessionSpec spellCorrectionSpec userInfo userPseudoId Blended search allows the following fields in dataStoreSpecs : dataStore boostSpec : If there are boost specs specified for both SearchRequest and dataStoreSpecs , both boost specs are applied to search results filter : If there are filters specified for both SearchRequest and dataStoreSpecs , both filters are applied to search results Create, Read, Update, and Delete (CRUD) operations on serving configs are supported for blended apps.
- Third-party data Structured data Unstructured data Structured data for third-party data stores The following third-party data source connectors are available in Preview with allowlist: Confluence Jira Salesforce Sharepoint Online Slack Data from these third parties is considered structured data.

### Configure identity provider \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider](https://docs.cloud.google.com/gemini/enterprise/docs/configure-identity-provider)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Configure Workforce Identity Federation For details on configuring Workforce Identity Federation with your third-party identity connector, see the following resources: Identity provider Resources Entra ID Note: When using data ingestion to connect to Microsoft data sources like SharePoint, OneDrive, or Outlook, you must use Microsoft Entra ID groups to control document access.
- For example: "metadata": { "mapped attributes": { "attributes.as user identifier 1": "alex@admin.altostrat.com" "google.subject": "alex@altostrat.com" "google.groups": "[123abc-456d, efg-h789-ijk]" } }, Limitations When connecting your data sources using a connector to create data stores, the following limitations apply: 3000 readers are allowed per document.
- Impact of identity provider setting changes on ingestion connectors When you change identity settings, such as the identity provider or Workforce Identity Federation pool, existing data stores that use data ingestion are not automatically updated.
- If the identity provider settings are updated by changing the identity provider type or the workforce pool, existing data stores won't automatically update to the new settings.

### Configure serving controls \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls](https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Serving control types The following types of serving controls are available: Control Description Available for Boost control Changes the returned order of results Search apps with data stores that support a schema, such as data stores that contain structured data or unstructured data with metadata Filter control Removes entries from returned results Search apps with data stores that support a schema, such as data stores that contain structured data or unstructured data with metadata Synonyms control Associates queries with each other Search apps with structured or unstructured data stores Redirect control Redirects to a specified URI All search apps Promote control Promotes a specified link for a query Search apps with structured or unstructured data stores About conditions When creating a control, you can optionally define a condition that determines when the control is applied.
- Run the following curl commands to create your controls. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /controls?controlId= CONTROL ID " \ -d '{ "displayName": " DISPLAY NAME ", "solutionType": "SOLUTION TYPE SEARCH", "useCases": [ " USE CASE " ], "conditions": { "queryTerms": [ { "value": " VALUE ", "fullMatch": FULL MATCH } ], "activeTimeRange": [ { "startTime": " START TIMESTAMP ", "endTime": " END TIMESTAMP " } ] }, "boostAction": { "boost": BOOST VALUE , "filter": " FILTER ", "dataStore": " DATA STORE RESOURCE PATH " } }' Replace the following: PROJECT ID : the number or ID of your Google Cloud project.
- Response You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/global/collections/default collection/engines/ APP ID /controls/ PROMOTE CONTROL ID ", "displayName": " PROMOTE CONTROL NAME ", "solutionType": "SOLUTION TYPE SEARCH", "conditions": [ { "queryTerms": [ { "value": " VALUE ", "fullMatch": true } ] } ], "useCases": [ "SEARCH USE CASE SEARCH" ], "promoteAction": { "dataStore": "projects/ PROJECT NUMBER /locations/global/collections/default collection/dataStores/ DATA STORE ID ", "searchLinkPromotion": { "title": " URI TITLE ", "uri": " URI ", "description": " URI DESCRIPTION ", "enabled": ENABLED TRUE FALSE } } } The response contains promotion control IDs that you need to attach your promote control to your search app.
- The format of the full resource path is: projects/ PROJECT NUMBER /locations/ LOCATION ID /collections/default collection/dataStores/ DATA STORE ID /branches/0/documents/ DOCUMENT ID .

### "Access Gemini Enterprise connector error logs with Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging](https://docs.cloud.google.com/gemini/enterprise/docs/cloud-logging)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Enter the following into the query bar, and click Run Query : resource.type="consumed api" resource.labels.service="discoveryengine.googleapis.com" Refine your query scope by filtering on JSON metadata.
- To view the error logs of your data stores that connect to Gemini Enterprise using data federation, follow these steps: In the Google Cloud console, go to the Gemini Enterprise page.
- To view the error logs of your data stores that connect to Gemini Enterprise using data ingestion, follow these steps: In the Google Cloud console, go to the Gemini Enterprise page.
- For more information on setting up data stores, see Connect a Google data source or Connect a third-party data source .

