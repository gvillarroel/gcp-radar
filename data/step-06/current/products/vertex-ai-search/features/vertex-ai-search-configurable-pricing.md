---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.832Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search configurable pricing"
feature_slug: "vertex-ai-search-configurable-pricing"
latest_feature_date: "2025-12-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "configurable"
  - "pricing"
  - "introduces"
  - "subscription"
  - "based"
---

# Vertex AI Search configurable pricing

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Configurable pricing introduces subscription-based billing options for custom search apps and data stores, including storage and query subscriptions with optional add-on features instead of default pay-as-you-go pricing.

## Extended Definition

Configurable pricing introduces subscription-based billing options for custom search apps and data stores, including storage and query subscriptions with optional add-on features instead of default pay-as-you-go pricing.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)

## Supporting Pages

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Send feedback Create a search data store Stay organized with collections Save and categorize content based on your preferences.
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- Import data from Bigtable. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "bigtableSource ": { "projectId": " BIGTABLE PROJECT ID ", "instanceId": " INSTANCE ID ", "tableId": " TABLE ID ", "bigtableOptions": { "keyFieldName": " KEY FIELD NAME ", "families": { "key": " KEY ", "value": { "fieldName": " FIELD NAME ", "encoding": " ENCODING ", "type": " TYPE ", "columns": [ { "qualifier": " QUALIFIER ", "fieldName": " FIELD NAME ", "encoding": " COLUMN ENCODING ", "type": " COLUMN VALUES TYPE " } ] } } ... } }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.

### "Vertex AI APIs for building search and RAG experiences \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- Source ID: `site-api-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Send feedback Vertex AI APIs for building search and RAG experiences Stay organized with collections Save and categorize content based on your preferences.
- Vertex AI Search works as an out-of-the-box semantic & keyword search engine for RAG with the ability to process a variety of document types and with connectors to a variety of source systems including BigQuery and many third party systems.
- Retrieval Choose the best retrieval method for your needs: Vertex AI Search: Vertex AI Search is a Google Search-quality information retrieval engine that can be a component of any generative AI application that uses your enterprise data.
- Vertex AI Vector Search is a retrieval engine that can search from billions of semantically similar or semantically related items at scale, with high queries per second (QPS), high recall, low latency, and cost efficiency.

### "Introduction to custom search \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search)
- Source ID: `site-api-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Send feedback Introduction to custom search Stay organized with collections Save and categorize content based on your preferences.
- Retrieval: Vertex AI Search finds the most relevant documents or chunks based on the following methods: Keyword matching for search: Conventional search based on terms.
- Ranking: Vertex AI Search ranks the results based on the following factors: Relevance: A combination of keyword and semantic matching during search.
- This page introduces and lists the capabilities of Vertex AI Search for custom apps.

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Send feedback Get answers and follow-ups Stay organized with collections Save and categorize content based on your preferences.
- This page introduces search with answer and follow-ups for Vertex AI Search and shows you how to implement it for custom search apps using method calls.
- Additional information about the methodology used to aggregate the data is available upon request.\n\n## Contributors\n\nDavid Michael Tinsley Senior Economist, Bank of America Institute Joe Wadford Economist, Bank of America Institute Taylor Bowley Economist, Bank of America Institute Liz Everett Krisberg Head of Bank of America Institute\n\n## Sources\n\nLi Wei Director, Global Risk Analytics Kimberly Warren Director, Global Risk Analytics Ana Maxim Senior Vice President, Consumer and Small Business Mel Roasa Vice President, Digital and MarketingBANK OF AMERICA INSTITUTE11 March 2024 7", "relevanceScore": 0.3, "documentMetadata": { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/719bfb7c1c0cde3888debd43542aabfe", "uri": "gs://yipeiw multimodal 0827/rzilleruelo multimodal datasets/20240806/Document Understanding Evaluation Dataset/Bank of America/1odEo6QRllsURLZRDwHNruCXK9bsWmhtR.pdf", "title": "1odEo6QRllsURLZRDwHNruCXK9bsWmhtR", "pageIdentifier": "6" } } } ], "steps": [ { "state": "SUCCEEDED", "description": "Rephrase the query and search.", "actions": [ { "searchAction": { "query": "Rank generations from highest to lowest based on their spending on holiday items using cards." }, "observation": { "searchResults": [ { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/935c4e1f18ccff2b5fa51d6d00e40dc4", "uri": "gs://yipeiw multimodal 0827/rzilleruelo multimodal datasets/20240806/Document Understanding Evaluation Dataset/Bank of America/1baMNJuizoK7u3P2-gYRwpVz 46-uOhn4.pdf", "title": "1baMNJuizoK7u3P2-gYRwpVz 46-uOhn4", "snippetInfo": [ { "snippet": "## Exhibit 6: Credit and debit \u003cb\u003ecard spending\u003c/b\u003e per household on \u003cb\u003eholiday items\u003c/b\u003e by \u003cb\u003egeneration\u003c/b\u003e (index, Aug-Sep average=100 for each year, 7- day moving average) ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/0b4c8cfb6f5ed9ef0df70ffcd79fe2c0", "uri": "gs://yipeiw multimodal 0827/rzilleruelo multimodal datasets/20240806/Document Understanding Evaluation Dataset/Bank of America/1pVkzcMDNAy-p7AlrE0LRlhpbbDzCNndJ.pdf", "title": "1pVkzcMDNAy-p7AlrE0LRlhpbbDzCNndJ", "snippetInfo": [ { "snippet": "Consumer \u003cb\u003espending\u003c/b\u003e finished solidly in 2023, \u003cb\u003ewith\u003c/b\u003e total \u003cb\u003ecard spending\u003c/b\u003e per household increasing by 0.2% year-over-year (YoY) in December, according to Bank of ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f8d7887862167c5daf6c7a30e1d464e0", "uri": "gs://yipeiw multimodal 0827/rzilleruelo multimodal datasets/20240806/Document Understanding Evaluation Dataset/Bank of America/1WkoquhDpqHphSnqIVKX45iers7kvmGjZ.pdf", "title": "1WkoquhDpqHphSnqIVKX45iers7kvmGjZ", "snippetInfo": [ { "snippet": "This could be due to an increasing customer \u003cb\u003ebase\u003c/b\u003e or inactive customers \u003cb\u003eusing their cards\u003c/b\u003e more frequently.
- When ...", "snippetStatus": "SUCCESS" } ] } ] } }, { "searchAction": { "query": " What is the performance of Spanner? " }, "observation": { "searchResults": [ { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f3d036b60379873acf7c73081c5e5b5c", "uri": "https://cloud.google.com/spanner/docs/performance", "title": "Performance overview Spanner Google Cloud", "snippetInfo": [ { "snippet": "These \u003cb\u003eperformance\u003c/b\u003e improvements should result in higher throughput and better latency in \u003cb\u003eSpanner\u003c/b\u003e nodes in both regional and multi-region instance configurations.", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/422496248ade354c73b4c906b8eb9b5f", "uri": "https://cloud.google.com/blog/products/databases/announcing-cloud-spanner-price-performance-updates", "title": "Announcing Cloud Spanner price-performance updates Google Cloud Blog", "snippetInfo": [ { "snippet": "Alongside lower costs, Cloud \u003cb\u003eSpanner\u003c/b\u003e provides single-digit ms latencies and strong consistency across multiple availability zones in the same region.", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/53c2a1a6990480ba4aa05cc6b4404562", "uri": "https://cloud.google.com/blog/topics/developers-practitioners/understanding-cloud-spanner-performance-metrics-scale-key-visualizer", "title": "Understanding Cloud Spanner performance metrics at scale with Key Visualizer Google Cloud Blog", "snippetInfo": [ { "snippet": "Designed for \u003cb\u003eperformance\u003c/b\u003e tuning and instance sizing, you can use Key Visualizer today in the web-based Cloud Console for all \u003cb\u003eSpanner\u003c/b\u003e databases at no additional ...", "snippetStatus": "SUCCESS" } ] }, ... { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/a6501ecd5d6391e3ade49097bab0ad3a", "uri": "https://cloud.google.com/blog/products/databases/a-technical-overview-of-cloud-spanners-query-optimizer", "title": "A technical overview of Cloud Spanner's query optimizer Google Cloud Blog", "snippetInfo": [ { "snippet": "... performance.

