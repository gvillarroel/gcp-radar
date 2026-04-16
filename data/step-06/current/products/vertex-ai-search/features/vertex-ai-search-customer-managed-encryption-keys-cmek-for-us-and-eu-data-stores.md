---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.955Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search customer-managed encryption keys (CMEK) for US and EU data stores"
feature_slug: "vertex-ai-search-customer-managed-encryption-keys-cmek-for-us-and-eu-data-stores"
latest_feature_date: "2024-10-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/record-user-events"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MonitoredResourceMetadata"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "cmek"
---

# Vertex AI Search customer-managed encryption keys (CMEK) for US and EU data stores

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Vertex AI Search supports CMEK for data stored in US and EU multi-region data stores, allowing customers to use their own keys for encryption at rest.

## Extended Definition

Vertex AI Search supports CMEK for data stored in US and EU multi-region data stores, allowing customers to use their own keys for encryption at rest.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/record-user-events](https://docs.cloud.google.com/generative-ai-app-builder/docs/record-user-events)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MonitoredResourceMetadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MonitoredResourceMetadata)

## Supporting Pages

### "Use structured data for advanced website indexing \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Such tags can be used with advanced indexing when you add custom structured data attributes to the data store schema . <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Your web page title</title> <!-- Robots instructions for crawlers and for Vertex AI Search. --> <meta name="robots" content="index,follow"> <!-- Vertex AI Search can use custom datetime fields to filter, boost, and order. --> <meta name="lastModified" content="2024-09-06"> <!-- Vertex AI Search can filter by category or tags. --> <meta name="category" content="archived"> <meta name="tags" content="legacy,interesting,faq"> <!-- Vertex AI Search can index these common HTML tags. --> <meta name="description" content="A description of your web page's content."> <meta name="author" content="Your name or organization"> <meta name="keywords" content="relevant,keywords,separated,by,commas"> <link rel="canonical" href="https://www.yourwebsite.com/this-page"> <meta property="og:title" content="Your Webpage Title"> <meta property="og:description" content="A description of your webpage's content."> <meta property="og:image" content="https://www.yourwebsite.com/image.jpg"> <meta property="og:url" content="https://www.yourwebsite.com/this-page"> <meta property="og:type" content="website"> <meta name="twitter:card" content="summary large image"> <meta name="twitter:title" content="Your customized Webpage Title"> <meta name="twitter:description" content="A description of your webpage's content."> <meta name="twitter:image" content="https://www.yourwebsite.com/image.jpg"> </head> <body> ... </body> </html> Example use case for PageMaps Suppose you have several web pages that contain food recipes.
- Here's an example that shows where to add a custom datetime meta tag named lastModified on your web page. <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Your web page title</title> <!-- Vertex AI Search can use this date. --> <meta name="lastModified" content="2022-07-01"> </head> <body> </body> </html> To understand how to include such custom datetime tags in your search requests, such as in filter expressions and boost specifications, see Example use case using a custom datetime attribute .
- Home Documentation AI and ML Vertex AI Search Send feedback Use structured data for advanced website indexing Stay organized with collections Save and categorize content based on your preferences.
- Vertex AI Search doesn't support the use of any excluded meta tag names or unsupported meta tags .

### Record real-time user events \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/record-user-events](https://docs.cloud.google.com/generative-ai-app-builder/docs/record-user-events)
- Source ID: `site-iam-reference`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- WriteUserEventRequest ; public class SyncWriteUserEvent { public static void main ( String [] args ) throws Exception { syncWriteUserEvent (); } public static void syncWriteUserEvent () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( UserEventServiceClient userEventServiceClient = UserEventServiceClient . create ()) { WriteUserEventRequest request = WriteUserEventRequest . newBuilder () . setParent ( DataStoreName . ofProjectLocationDataStoreName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" ) . toString ()) . setUserEvent ( UserEvent . newBuilder (). build ()) . setWriteAsync ( true ) . build (); UserEvent response = userEventServiceClient . writeUserEvent ( request ); } } } Python For more information, see the Vertex AI Search Python API reference documentation .
- If you are recording user events at the location level, use the endpoint https://discoveryengine.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /userEvents:write . curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT NUMBER /locations/global/userEvents:write" \ -d '{ "eventType": "view-item", "userPseudoId": "visitor0", "engine": "projects/ PROJECT NUMBER /locations/global/collections/default collection/engines/ APP ID ", "eventTime": "2020-01-01T03:33:33.000001Z", "tagIds": ["321"], "attributionToken": "ABC", "attributes": { "example text attribute": { "text": ["text 1", "text 2"] }, "example number attribute": { "numbers": [3.14, 42, 1.2345] } }, "documents": [{ "id": "abc" }], "userInfo": { "userId": "abc", "userAgent": "Mozilla/5.0" }, "pageInfo": { "uri": "http://example", "referrerUri": "http://example", "pageViewId": "currentPageUri" } }' C# For more information, see the Vertex AI Search C# API reference documentation .
- WriteUserEventRequest ( parent = "parent value" , ) Make the request response = client . write user event ( request = request ) Handle the response print ( response ) Ruby For more information, see the Vertex AI Search Ruby API reference documentation .
- WriteUserEvent ( ctx , req ) if err != nil { // TODO: Handle error. } // TODO: Use resp. = resp } Java For more information, see the Vertex AI Search Java API reference documentation .

### MonitoredResourceMetadata \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MonitoredResourceMetadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/MonitoredResourceMetadata)
- Source ID: `site-docs-reference-2`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Reference Send feedback MonitoredResourceMetadata Stay organized with collections Save and categorize content based on your preferences.

