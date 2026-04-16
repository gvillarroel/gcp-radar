---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.681Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Gmail data store"
feature_slug: "gmail-data-store"
latest_feature_date: "2025-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/concepts"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/configure-periodic-data-alerts"
keywords:
  - "gmail"
  - "store"
  - "gemini"
  - "enterprise"
  - "supports"
  - "the"
  - "you"
  - "can"
---

# Gmail data store

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Gemini Enterprise supports the Gmail data store; You can connect a data store for Gmail data federation.

## Extended Definition

Gemini Enterprise supports the Gmail data store; You can connect a data store for Gmail data federation.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)
- [https://docs.cloud.google.com/gemini/enterprise/docs/concepts](https://docs.cloud.google.com/gemini/enterprise/docs/concepts)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/configure-periodic-data-alerts](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/configure-periodic-data-alerts)

## Supporting Pages

### About apps and data stores \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- You can provide this schema yourself or you can let Gemini Enterprise derive the schema from the ingested data.
- Note: You can't connect website data stores to your Gemini Enterprise search and assistant apps.
- Home Documentation AI and ML Gemini Enterprise Send feedback About apps and data stores Stay organized with collections Save and categorize content based on your preferences.
- You can add or remove data stores from a blended search app, but the app can't have fewer than two data stores connected to it at any time.

### Configure autocomplete \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)
- Source ID: `site-docs-root`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If there is an email address jeffersonloveshiking@gmail.com in the data store, Gemini Enterprise won't return the email address as an autocomplete suggestion if the user types jef in the search bar.
- DataStoreName ; public class SyncCompleteQuery { public static void main ( String [] args ) throws Exception { syncCompleteQuery (); } public static void syncCompleteQuery () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CompletionServiceClient completionServiceClient = CompletionServiceClient . create ()) { CompleteQueryRequest request = CompleteQueryRequest . newBuilder () . setDataStore ( DataStoreName . ofProjectLocationDataStoreName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" ) . toString ()) . setQuery ( "query107944136" ) . setQueryModel ( "queryModel-184930495" ) . setUserPseudoId ( "userPseudoId-1155274652" ) . setIncludeTailSuggestions ( true ) . build (); CompleteQueryResponse response = completionServiceClient . completeQuery ( request ); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Gemini Enterprise quickstart using client libraries .
- Example command and result curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: my-project-123" \ https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig?updateMask=numUniqueUsersThreshold \ -d '{ "name": "projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "numUniqueUsersThreshold": 6 }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "matchingOrder": "exact-prefix", "maxSuggestions": 20, "minPrefixLength": 1, "queryModel": "automatic", "enableMode": "AUTOMATIC", "numUniqueUsersThreshold": 6, "queryFrequencyThreshold": 30 } Update completable field annotations in schema To turn on autocomplete for fields in structured data schema, follow these steps: Console In the Google Cloud console, go to the Gemini Enterprise page.
- Even if set to true, if there are suggestions that match the full query, those are returned and no tail suggestions are returned. / // const includeTailSuggestions = true // Imports the Discoveryengine library const { CompletionServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1 ; // Instantiates a client const discoveryengineClient = new CompletionServiceClient (); async function callCompleteQuery () { // Construct request const request = { dataStore , query , }; // Run request const response = await discoveryengineClient . completeQuery ( request ); console . log ( response ); } callCompleteQuery (); Python Before trying this sample, follow the Python setup instructions in the Gemini Enterprise quickstart using client libraries .

### Gemini Enterprise concepts \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/concepts](https://docs.cloud.google.com/gemini/enterprise/docs/concepts)
- Source ID: `site-docs-root`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Concept Description Data sources You can connect Google and third-party data sources to Gemini Enterprise and store the data in dedicated data stores.
- Therefore, when you create a data store using the Google Cloud console, you get a collection of data stores representing these ingested data entities.To learn about Gemini Enterprise data stores, see Introduction to connectors and data stores .
- You can turn on assistant actions for the following data stores: Gmail and Google Calendar Jira Cloud Outlook email and Outlook calendar ServiceNow (Private preview) Agents Agents are applications built to accomplish specific objectives.
- In Gemini Enterprise, you can find prebuilt agents in the Agent Gallery or use Agent Designer to create your own custom agents.

### "View data store sync activity and set up alerts \_|\_ Gemini Enterprise\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/configure-periodic-data-alerts](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/configure-periodic-data-alerts)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View data store details and status After connecting your third-party data source to Gemini Enterprise by creating a data store, you can view the status of the data store by going to the Data stores page and clicking the data store name.
- Before you begin To enable alerts for a data store, you need to have the following permissions or role assigned to you: Permissions discoveryengine.googleapis.com/alertPolicies.get discoveryengine.googleapis.com/dataConnectors.update Predefined role Discovery Engine User Enable alerts for a data source To enable alerts for a specific data source: In the Google Cloud console, go to the Gemini Enterprise page.
- Set up alerts for sync events After connecting your third-party data source to Gemini Enterprise by creating a data store, you can enable alerts for predefined tasks.
- Home Documentation AI and ML Gemini Enterprise Send feedback View data store sync activity and set up alerts Stay organized with collections Save and categorize content based on your preferences.

