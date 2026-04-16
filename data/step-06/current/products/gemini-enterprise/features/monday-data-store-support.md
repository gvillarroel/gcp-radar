---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.665Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Monday data store support"
feature_slug: "monday-data-store-support"
latest_feature_date: "2026-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete"
keywords:
  - "monday"
  - "store"
  - "gemini"
  - "enterprise"
  - "supports"
  - "stores"
  - "in"
  - "public"
---

# Monday data store support

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Gemini Enterprise supports Monday data stores in Public Preview.

## Extended Definition

Gemini Enterprise supports Monday data stores in Public Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)

## Supporting Pages

### About apps and data stores \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- Source ID: `site-docs-root`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Gemini Enterprise Send feedback About apps and data stores Stay organized with collections Save and categorize content based on your preferences.
- Note: You can't connect website data stores to your Gemini Enterprise search and assistant apps.
- Data stores and apps In Gemini Enterprise, there are various kinds of data stores.
- This page describes Gemini Enterprise apps and data stores.

### "Set up a Confluence Data Center data store \_|\_ Gemini Enterprise \_|\_\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 263
- Re-rank relevance: N/A

Evidence snippets:
- Gemini Enterprise creates your data store and displays your data stores on the Data stores page.
- Home Documentation AI and ML Gemini Enterprise Send feedback Set up a Confluence Data Center data store Stay organized with collections Save and categorize content based on your preferences.
- Create the Confluence Data Center data store To create the Confluence Data Center data store, perform the following steps: In the Google Cloud console, go to the Gemini Enterprise page.
- Data handling and query execution This section describes how Gemini Enterprise manages your query and the privacy implications of using the federated data store.

### Set up a Box data store \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Gemini Enterprise creates your data store and displays your data stores on the Data Stores page.
- Home Documentation AI and ML Gemini Enterprise Send feedback Set up a Box data store Stay organized with collections Save and categorize content based on your preferences.
- Data handling and query execution This section describes how Gemini Enterprise manages your query and the privacy implications of using the federated data store.
- Create the Box data store To create the Box data store, perform the following steps: In the Google Cloud console, go to the Gemini Enterprise page.

### Configure autocomplete \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)
- Source ID: `site-docs-root`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DataStoreName ; public class SyncCompleteQuery { public static void main ( String [] args ) throws Exception { syncCompleteQuery (); } public static void syncCompleteQuery () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CompletionServiceClient completionServiceClient = CompletionServiceClient . create ()) { CompleteQueryRequest request = CompleteQueryRequest . newBuilder () . setDataStore ( DataStoreName . ofProjectLocationDataStoreName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" ) . toString ()) . setQuery ( "query107944136" ) . setQueryModel ( "queryModel-184930495" ) . setUserPseudoId ( "userPseudoId-1155274652" ) . setIncludeTailSuggestions ( true ) . build (); CompleteQueryResponse response = completionServiceClient . completeQuery ( request ); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the Gemini Enterprise quickstart using client libraries .
- Example command and result curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: my-project-123" \ https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig?updateMask=numUniqueUsersThreshold \ -d '{ "name": "projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "numUniqueUsersThreshold": 6 }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "matchingOrder": "exact-prefix", "maxSuggestions": 20, "minPrefixLength": 1, "queryModel": "automatic", "enableMode": "AUTOMATIC", "numUniqueUsersThreshold": 6, "queryFrequencyThreshold": 30 } Update completable field annotations in schema To turn on autocomplete for fields in structured data schema, follow these steps: Console In the Google Cloud console, go to the Gemini Enterprise page.
- In the Google Cloud console, go to the Gemini Enterprise page and in the navigation menu, click Data Stores .
- In the Google Cloud console, go to the Gemini Enterprise page and in the navigation menu, click Data Stores .

