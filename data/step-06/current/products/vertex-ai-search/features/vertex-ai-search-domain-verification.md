---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.879Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search Domain Verification"
feature_slug: "vertex-ai-search-domain-verification"
latest_feature_date: "2024-07-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "domain"
  - "verification"
  - "for"
  - "advanced"
  - "website"
---

# Vertex AI Search Domain Verification

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Domain verification for advanced website indexing enables associating a Vertex AI Search data store with a domain, including domains you do not own or cannot verify in Google Search Console.

## Extended Definition

Domain verification for advanced website indexing enables associating a Vertex AI Search data store with a domain, including domains you do not own or cannot verify in Google Search Console.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search)

## Supporting Pages

### "Use structured data for advanced website indexing \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata)
- Source ID: `site-api-reference`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Such tags can be used with advanced indexing when you add custom structured data attributes to the data store schema . <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Your web page title</title> <!-- Robots instructions for crawlers and for Vertex AI Search. --> <meta name="robots" content="index,follow"> <!-- Vertex AI Search can use custom datetime fields to filter, boost, and order. --> <meta name="lastModified" content="2024-09-06"> <!-- Vertex AI Search can filter by category or tags. --> <meta name="category" content="archived"> <meta name="tags" content="legacy,interesting,faq"> <!-- Vertex AI Search can index these common HTML tags. --> <meta name="description" content="A description of your web page's content."> <meta name="author" content="Your name or organization"> <meta name="keywords" content="relevant,keywords,separated,by,commas"> <link rel="canonical" href="https://www.yourwebsite.com/this-page"> <meta property="og:title" content="Your Webpage Title"> <meta property="og:description" content="A description of your webpage's content."> <meta property="og:image" content="https://www.yourwebsite.com/image.jpg"> <meta property="og:url" content="https://www.yourwebsite.com/this-page"> <meta property="og:type" content="website"> <meta name="twitter:card" content="summary large image"> <meta name="twitter:title" content="Your customized Webpage Title"> <meta name="twitter:description" content="A description of your webpage's content."> <meta name="twitter:image" content="https://www.yourwebsite.com/image.jpg"> </head> <body> ... </body> </html> Example use case for PageMaps Suppose you have several web pages that contain food recipes.
- Home Documentation AI and ML Vertex AI Search Send feedback Use structured data for advanced website indexing Stay organized with collections Save and categorize content based on your preferences.
- The following is an example of a schema update for a website: { "type" : "object" , "properties" : { " CUSTOM ATTRIBUTE " : { "type" : "array" , "items" : { "type" : " DATA TYPE " , "searchable" : true , "retrievable" : true , "indexable" : true , "siteSearchMetatagName" : " METATAG NAME " , "siteSearchStructuredDataSources" : [ " STRUCTURED DATA SOURCE 1 " , " STRUCTURED DATA SOURCE 2 " ] } }, " IDENTIFIER FOR SCHEMA ORG FIELD " : { "type" : "array" , "items" : { "type" : " DATA TYPE SCHEMA ORG FIELD " , "searchable" : true , "retrievable" : true , "indexable" : true , "siteSearchSchemaOrgPaths" : [ " root.
- Here's an example that shows where to add a custom datetime meta tag named lastModified on your web page. <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Your web page title</title> <!-- Vertex AI Search can use this date. --> <meta name="lastModified" content="2022-07-01"> </head> <body> </body> </html> To understand how to include such custom datetime tags in your search requests, such as in filter expressions and boost specifications, see Example use case using a custom datetime attribute .

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- This page describes how to create a data store and ingest data for custom search apps in Vertex AI Search. go to the section for the source you plan to use: Create a data store using website content Import from BigQuery Import from Cloud Storage Sync from Google Drive Sync from Gmail (Public preview) Sync from Google Sites (Public preview) Sync from Google Calendar (Public preview) Sync from Google Groups (Public preview) Import from Cloud SQL Import from Spanner (Public preview) Import from Firestore Import from Bigtable (Public Preview) Import from AlloyDB for PostgreSQL (Public Preview) Upload structured JSON data with the API Create a data store using Terraform To sync data from a third-party data source instead, see Connect a third-party data source .
- Advanced website indexing incurs additional cost, and requires that you verify domain ownership for any website that you index.
- CreateDataStoreMetadata ( operation . metadata ) Handle the response print ( response ) print ( metadata ) return operation . operation . name Import websites from google.api core.client options import ClientOptions from google.cloud import discoveryengine v1 as discoveryengine # TODO(developer): Uncomment these variables before running the sample. # project id = "YOUR PROJECT ID" # location = "YOUR LOCATION" # Values: "global" # data store id = "YOUR DATA STORE ID" # NOTE: Do not include http or https protocol in the URI pattern # uri pattern = "cloud.google.com/generative-ai-app-builder/docs/ " # For more information, refer to: # https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store client options = ( ClientOptions(api endpoint=f"{location}-discoveryengine.googleapis.com") if location != "global" else None ) # Create a client client = discoveryengine.SiteSearchEngineServiceClient( client options=client options ) # The full resource name of the data store # e.g. projects/{project}/locations/{location}/dataStores/{data store id} site search engine = client.site search engine path( project=project id, location=location, data store=data store id ) # Target Site to index target site = discoveryengine.TargetSite( provided uri pattern=uri pattern, # Options: INCLUDE, EXCLUDE type =discoveryengine.TargetSite.Type.INCLUDE, exact match=False, ) # Make the request operation = client.create target site( parent=site search engine, target site=target site, ) print(f"Waiting for operation to complete: {operation.operation.name}") response = operation.result() # After the operation is complete, # get information from operation metadata metadata = discoveryengine.CreateTargetSiteMetadata(operation.metadata) # Handle the response print(response) print(metadata) Next steps To attach your website data store to an app, create an app with Enterprise features enabled and select your data store following the steps in Create a search app .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .

### "Configure serving controls for search \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls)
- Source ID: `site-api-reference`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Serving control types The following types of serving controls are available: Control Description Available for Boost control Changes the returned order of results Search apps with data stores that support a schema, such as data stores that contain structured data, websites with structured data (advanced website indexing), unstructured data with metadata, or media data Filter control Removes entries from returned results Search apps with data stores that support a schema, such as data stores that contain structured data, websites (advanced website indexing), unstructured data with metadata, or media data Synonyms control Associates queries with each other Search apps with website (advanced website indexing), structured, unstructured, or media data stores Redirect control Redirects to a specified URI All search apps Promote control Promotes a specified link for a query All search apps About conditions When creating a control, you can optionally define a condition that determines when the control is applied.
- For example, suppose that you create a promote control with the following configuration in a data store with basic website search: { "conditions": [ { "queryTerms": [ { "value": "artificial intelligence", "fullMatch": true } ] } ]" ... promoteAction": { "dataStore": "https://discoveryengine.googleapis.com/v1alpha/projects/123456/locations/us/collections/default collection/dataStores/basic-website-data-store" \ "searchLinkPromotion": { "title": "What is AI?", "uri": "https://cloud.google.com/learn/what-is-artificial-intelligence", "description": "Explain what is AI" "enabled": true } } } Then, you send the following search request: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1alpha/projects/123456/locations/us/collections/default collection/engines/basic-website-app/servingConfigs/default search:search" \ -d '{ "query": "artificial intelligence" }' You should receive a JSON response similar to the following truncated response.
- Create and attach promote serving controls A promote serving control lets you display a link as a promoted result and is available for the following types of search data stores: Website data stores with basic website search: For these data stores, you don't need to attach a promote control to the serving config of the app.
- Data stores with structured and unstructured data, website data with advanced website indexing, and blended search apps: For these data stores, you need to attach the promote control to the serving config.

### "Introduction to custom search \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search)
- Source ID: `site-api-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Data ingestion : Vertex AI Search offers different types of ingestion for data from different sources, such as: Crawling for website data Ingesting structured and unstructured data from Cloud Storage and BigQuery or through the REST API Search and browse configuration : Field settings : Control how fields are configured for search and answer generation, such as searchable, retrievable, or indexable.
- Vertex AI Search for custom apps is a powerful, Google-quality search and content discovery engine that you can integrate into your applications that contain website data and other structured or unstructured data.
- Retrieval and ranking: There are several sub-components to retrieval and ranking of results: Query understanding for search: Vertex AI Search analyzes a search query using the following: Natural language processing: To understand the intent.
- Different components of custom search The components of Vertex AI Search for custom search can be explained as follows: Data store : Your content from different data sources is stored in a Vertex AI Search data store.

