---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.872Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Datetime and geolocation field detection for structured data imports"
feature_slug: "datetime-and-geolocation-field-detection-for-structured-data-imports"
latest_feature_date: "2024-08-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/DateTime"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations"
keywords:
  - "datetime"
  - "and"
  - "geolocation"
  - "field"
  - "detection"
  - "for"
  - "structured"
  - "imports"
---

# Datetime and geolocation field detection for structured data imports

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Structured data imports can automatically detect datetime and geolocation fields and assign corresponding schema types, with an option to force detected datetime fields to string and geolocation fields to object.

## Extended Definition

Structured data imports can automatically detect datetime and geolocation fields and assign corresponding schema types, with an option to force detected datetime fields to string and geolocation fields to object.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/DateTime](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/DateTime)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)

## Supporting Pages

### "Use structured data for advanced website indexing \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Such tags can be used with advanced indexing when you add custom structured data attributes to the data store schema . <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Your web page title</title> <!-- Robots instructions for crawlers and for Vertex AI Search. --> <meta name="robots" content="index,follow"> <!-- Vertex AI Search can use custom datetime fields to filter, boost, and order. --> <meta name="lastModified" content="2024-09-06"> <!-- Vertex AI Search can filter by category or tags. --> <meta name="category" content="archived"> <meta name="tags" content="legacy,interesting,faq"> <!-- Vertex AI Search can index these common HTML tags. --> <meta name="description" content="A description of your web page's content."> <meta name="author" content="Your name or organization"> <meta name="keywords" content="relevant,keywords,separated,by,commas"> <link rel="canonical" href="https://www.yourwebsite.com/this-page"> <meta property="og:title" content="Your Webpage Title"> <meta property="og:description" content="A description of your webpage's content."> <meta property="og:image" content="https://www.yourwebsite.com/image.jpg"> <meta property="og:url" content="https://www.yourwebsite.com/this-page"> <meta property="og:type" content="website"> <meta name="twitter:card" content="summary large image"> <meta name="twitter:title" content="Your customized Webpage Title"> <meta name="twitter:description" content="A description of your webpage's content."> <meta name="twitter:image" content="https://www.yourwebsite.com/image.jpg"> </head> <body> ... </body> </html> Example use case for PageMaps Suppose you have several web pages that contain food recipes.
- Add custom structured data attributes to the data store schema To add custom structured data attributes to the data store schema: Add meta tags, PageMap data, and schema.org data to the pages in your website that you want to enrich with structured data indexing: For meta tags: Each meta tag must have its name attribute set to the field you want to index and its content attribute to a string of one or more comma-separated values.
- The following is an example of a schema update for a website: { "type" : "object" , "properties" : { " CUSTOM ATTRIBUTE " : { "type" : "array" , "items" : { "type" : " DATA TYPE " , "searchable" : true , "retrievable" : true , "indexable" : true , "siteSearchMetatagName" : " METATAG NAME " , "siteSearchStructuredDataSources" : [ " STRUCTURED DATA SOURCE 1 " , " STRUCTURED DATA SOURCE 2 " ] } }, " IDENTIFIER FOR SCHEMA ORG FIELD " : { "type" : "array" , "items" : { "type" : " DATA TYPE SCHEMA ORG FIELD " , "searchable" : true , "retrievable" : true , "indexable" : true , "siteSearchSchemaOrgPaths" : [ " root.
- If advanced website indexing is enabled in your data store, you can use the following types of structured data to enrich your indexing: Predefined, Google-inferred page dates Custom structured data attributes Metadata using meta tags PageMaps Schema.org data This page introduces both these types of structured data for your web pages and describes how to add custom structured attributes to your data store schema.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- NaturalLanguageQueryUnderstandingInfo JSON representation { "extractedFilters" : string , "rewrittenQuery" : string , "classifiedIntents" : [ string ] , "structuredExtractedFilter" : { object ( StructuredExtractedFilter ) } } Fields extractedFilters string The filters that were extracted from the input query. rewrittenQuery string Rewritten input query minus the extracted filters. classifiedIntents[] string The classified intents from the input query. structuredExtractedFilter object ( StructuredExtractedFilter ) The filters that were extracted from the input query represented in a structured form.
- Expression JSON representation { // Union field expr can be only one of the following: "stringConstraint" : { object ( StringConstraint ) } , "numberConstraint" : { object ( NumberConstraint ) } , "geolocationConstraint" : { object ( GeolocationConstraint ) } , "andExpr" : { object ( AndExpression ) } , "orExpr" : { object ( OrExpression ) } // End of list of possible types for union field expr . } Fields Union field expr .
- Server behavior defaults to DISABLED . geoSearchQueryDetectionFieldNames[] string Field names used for location-based filtering, where geolocation filters are detected in natural language search queries.
- Config for natural language query understanding capabilities, such as extracting structured field filters from the query.

### DateTime \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/DateTime](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest/Shared.Types/DateTime)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Choose carefully between them, considering that time zone data may change in the future (for example, a country modifies their DST start/end dates, and future DateTimes in the affected range had already been stored).
- Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. hours integer Optional.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-29 UTC."],[],[]]
- JSON representation { "year" : integer , "month" : integer , "day" : integer , "hours" : integer , "minutes" : integer , "seconds" : integer , "nanos" : integer , // Union field time offset can be only one of the following: "utcOffset" : string , "timeZone" : { object ( TimeZone ) } // End of list of possible types for union field time offset . } Fields year integer Optional. year of date.

### "Create a custom recommendations data store \_|\_ Vertex AI Search \_|\_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- CreateDataStoreMetadata ( operation . metadata ) Handle the response print ( response ) print ( metadata ) return operation . operation . name Import documents from google.api core.client options import ClientOptions from google.cloud import discoveryengine TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR LOCATION" # Values: "global" data store id = "YOUR DATA STORE ID" Examples: - Unstructured documents - gs://bucket/directory/file.pdf - gs://bucket/directory/ .pdf - Unstructured documents with JSONL Metadata - gs://bucket/directory/file.json - Unstructured documents with CSV Metadata - gs://bucket/directory/file.csv gcs uri = "YOUR GCS PATH" For more information, refer to: https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store client options = ( ClientOptions ( api endpoint = f " { location } -discoveryengine.googleapis.com" ) if location != "global" else None ) Create a client client = discoveryengine .
- Create a data store. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores?dataStoreId= DATA STORE ID " \ -d '{ "displayName": " DATA STORE DISPLAY NAME ", "industryVertical": "GENERIC", "solutionTypes": ["SOLUTION TYPE RECOMMENDATION"] }' Note: The industry vertical GENERIC is used to create structured, unstructured, and website data stores for custom recommendations apps.

