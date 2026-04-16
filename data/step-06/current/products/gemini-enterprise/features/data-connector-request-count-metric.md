---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.655Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Data connector request count metric"
feature_slug: "data-connector-request-count-metric"
latest_feature_date: "2026-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/access-metrics"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/cmek"
keywords:
  - "connector"
  - "request"
  - "count"
  - "metric"
  - "gemini"
  - "enterprise"
  - "exposes"
  - "for"
---

# Data connector request count metric

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Gemini Enterprise exposes a metric for monitoring total requests to data connectors and data stores.

## Extended Definition

Gemini Enterprise exposes a metric for monitoring total requests to data connectors and data stores.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/access-metrics](https://docs.cloud.google.com/gemini/enterprise/docs/access-metrics)
- [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config)
- [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek)

## Supporting Pages

### "Access metrics in Metrics Explorer \_|\_ Gemini Enterprise \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/access-metrics](https://docs.cloud.google.com/gemini/enterprise/docs/access-metrics)
- Source ID: `site-docs-root`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Gemini Enterprise DataConnector - Gemini Enterprise DataConnector Request Count The total count of requests made to the Gemini Enterprise data connectors (also referred to as data stores in the Google Cloud console).
- Metric Name Description Gemini Enterprise Agent - Gemini Enterprise Agent Session Count The number of sessions handled by the Gemini Enterprise Agent.
- Home Documentation AI and ML Gemini Enterprise Send feedback Access metrics in Metrics Explorer Stay organized with collections Save and categorize content based on your preferences.
- Gemini Enterprise Agent - Gemini Enterprise Agent Turn Count The number of conversational turns within Gemini Enterprise Agent sessions.

### Discovery Engine API \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1alpha.projects.locations.licenseConfigs Methods create POST /v1alpha/{parent=projects/ /locations/ }/licenseConfigs Creates a LicenseConfig This method should only be used for creating NotebookLm licenses or Gemini Enterprise free trial licenses. get GET /v1alpha/{name=projects/ /locations/ /licenseConfigs/ } Gets a LicenseConfig . patch PATCH /v1alpha/{licenseConfig.name=projects/ /locations/ /licenseConfigs/ } Updates the LicenseConfig REST Resource: v1alpha.projects.locations.notebooks Methods batchDelete POST /v1alpha/{parent=projects/ /locations/ }/notebooks:batchDelete Batch deletes Notebooks. create POST /v1alpha/{parent=projects/ /locations/ }/notebooks Creates a notebook. get GET /v1alpha/{name=projects/ /locations/ /notebooks/ } Gets a notebook. listRecentlyViewed GET /v1alpha/{parent=projects/ /locations/ }/notebooks:listRecentlyViewed Lists the notebooks ordered by last view time. share POST /v1alpha/{name=projects/ /locations/ /notebooks/ }:share Shares a notebook to other accounts.
- REST Resource: v1beta.projects.locations.licenseConfigs Methods create POST /v1beta/{parent=projects/ /locations/ }/licenseConfigs Creates a LicenseConfig This method should only be used for creating NotebookLm licenses or Gemini Enterprise free trial licenses. get GET /v1beta/{name=projects/ /locations/ /licenseConfigs/ } Gets a LicenseConfig . patch PATCH /v1beta/{licenseConfig.name=projects/ /locations/ /licenseConfigs/ } Updates the LicenseConfig REST Resource: v1beta.projects.locations.operations Methods get GET /v1beta/{name=projects/ /locations/ /operations/ } Gets the latest state of a long-running operation. list GET /v1beta/{name=projects/ /locations/ }/operations Lists operations that match the specified filter in the request.
- REST Resource: v1.projects.locations.licenseConfigs Methods create POST /v1/{parent=projects/ /locations/ }/licenseConfigs Creates a LicenseConfig This method should only be used for creating NotebookLm licenses or Gemini Enterprise free trial licenses. get GET /v1/{name=projects/ /locations/ /licenseConfigs/ } Gets a LicenseConfig . patch PATCH /v1/{licenseConfig.name=projects/ /locations/ /licenseConfigs/ } Updates the LicenseConfig REST Resource: v1.projects.locations.operations Methods get GET /v1/{name=projects/ /locations/ /operations/ } Gets the latest state of a long-running operation. list GET /v1/{name=projects/ /locations/ }/operations Lists operations that match the specified filter in the request.
- For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .

### "Confluence Cloud configuration \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example curl command This example demonstrates calling the User Identity Accessor for Confluence Cloud webtrigger, which accepts an array of account IDs and returns the email addresses. curl --location --request POST 'https:// YOUR INSTANCE ID .hello.atlassian-dev.net/x1/ ENDPOINT PATH ' \ --header 'X-Api-Key: YOUR-API-KEY ' \ --header 'Content-Type: application/json' \ --data-raw '{ "accountIds": [ " ACCOUNT ID 1 ", " ACCOUNT ID 2 " ] }' Replace: YOUR INSTANCE ID with your Confluence Cloud instance ID ENDPOINT PATH with the API endpoint path YOUR API KEY with the API key you set or generated in the Set up the API key section ACCOUNT ID with Atlassian account IDs you want to target Expected response [{ "accountId" : " ACCOUNT ID 1 " , "emailAddress" : " EMAIL ADDRESS 1 " }, { "accountId" : " ACCOUNT ID 2 " , "emailAddress" : " EMAIL ADDRESS 2 " }] Replace: ACCOUNT ID X with actual Atlassian account IDs USER EMAIL X with user email addresses returned from your API call Implement security best practices To confirm the security of your API key, follow these recommendations: Store the API key securely within your Confluence Cloud data store's configuration.
- For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .
- Test the app configuration Verify that the User Identity Accessor for Confluence Cloud app is configured correctly by sending a request from your external system and confirming that user email addresses are returned successfully.
- Configure minimum application scopes To configure OAuth 2.0 and retrieve the required credentials for your Confluence connector setup, do the following: To configure scopes, do the following: Click Permissions .

### "Customer-managed encryption keys \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Register single-region Cloud KMS keys for third-party connectors REST To register your own key for Gemini Enterprise, follow these steps: Call the UpdateCmekConfig method with the key that you want to register. curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d '{"kmsKey":"projects/ KMS PROJECT ID /locations/ KMS LOCATION /keyRings/ KEY RING /cryptoKeys/ KEY NAME "}' \ "https:// LOCATION -discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cmekConfigs/ CMEK CONFIG ID ?set default= SET DEFAULT " Replace the following: KMS PROJECT ID : the ID of your project that contains the key.
- An example response looks like this: { "name": "projects/969795412903/locations/us/collections/default collection/dataStores/my-data-store-1", "displayName": "my-data-store-1", "industryVertical": "GENERIC", "createTime": "2023-09-05T21:20:21.520552Z", "solutionTypes": [ "SOLUTION TYPE SEARCH" ], "defaultSchemaId": "default schema", "cmekConfig": { "name": "projects/969795412903/locations/us/collections/default collection/dataStores/my-data-store-1/cmekConfigs/default cmek config", "kmsKey": "projects/my-ai-app-project-123/locations/us/keyRings/my-key-ring/cryptoKeys/my-key" } } Other data protected by the Cloud KMS key In addition to data in the data stores, your keys can protect other types of app-owned core information held by Gemini Enterprise, such as the session data generated during search with follow-ups .
- Procedure REST To register your own key for Gemini Enterprise, follow these steps: Call the UpdateCmekConfig method with the key that you want to register. curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d '{"kmsKey":"projects/ KMS PROJECT ID /locations/ KMS LOCATION /keyRings/ KEY RING /cryptoKeys/ KEY NAME "}' \ "https:// LOCATION -discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cmekConfigs/ CMEK CONFIG ID ?set default= SET DEFAULT " Replace the following: KMS PROJECT ID : the ID of your project that contains the key.
- View Cloud KMS keys To view a registered key for Gemini Enterprise, do one of the following: If you have the CmekConfig resource name, call the GetCmekConfig method: curl -X GET \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ "https:// LOCATION -discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cmekConfigs/ CMEK CONFIG ID " Replace the following: LOCATION : the multi-region of your data store: us or eu .

