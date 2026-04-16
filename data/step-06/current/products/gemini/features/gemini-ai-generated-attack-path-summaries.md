---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.654Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Gemini AI-generated attack path summaries"
feature_slug: "gemini-ai-generated-attack-path-summaries"
latest_feature_date: "2024-12-13"
deprecation_date: "2024-12-13"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta"
  - "https://docs.cloud.google.com/gemini/docs/bigquery/security-privacy-compliance"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/libraries"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics"
keywords:
  - "gemini"
  - "ai"
  - "generated"
  - "attack"
  - "path"
  - "summaries"
  - "of"
  - "security"
---

# Gemini AI-generated attack path summaries

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Gemini AI-generated summaries of Security Command Center attack paths are no longer available in the console; deprecated on 2024-12-13.

## Extended Definition

Gemini AI-generated summaries of Security Command Center attack paths are no longer available in the console; deprecated on 2024-12-13.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta](https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta)
- [https://docs.cloud.google.com/gemini/docs/bigquery/security-privacy-compliance](https://docs.cloud.google.com/gemini/docs/bigquery/security-privacy-compliance)
- [https://docs.cloud.google.com/gemini/enterprise/docs/libraries](https://docs.cloud.google.com/gemini/enterprise/docs/libraries)
- [https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics](https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics)

## Supporting Pages

### "Package com.google.cloud.geminidataanalytics.v1beta (0.16.0) \_|\_ Java\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta](https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta)
- Source ID: `site-java-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Query Data Response Response containing the generated query and related information. com. google. cloud. geminidataanalytics. v1beta.
- Schema Paths Represents an ordered set of paths within the table schema. com. google. cloud. geminidataanalytics. v1beta.
- Builder Response containing the generated query and related information. com. google. cloud. geminidataanalytics. v1beta.
- Builder Represents an ordered set of paths within the table schema. com. google. cloud. geminidataanalytics. v1beta.

### "Security, privacy, and compliance for Gemini in BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/docs/bigquery/security-privacy-compliance](https://docs.cloud.google.com/gemini/docs/bigquery/security-privacy-compliance)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Certifications and capabilities Generally available (GA) Gemini in BigQuery features are covered by the certifications and security statements of Gemini for Google Cloud with exception of the following limitations: Gemini in BigQuery doesn't provide data residency for individual locations.
- Security, privacy, and compliance for Gemini in BigQuery This document describes the controls that support the security of Gemini in BigQuery.
- Security controls Gemini in BigQuery uses the security controls of Google Cloud to help protect your data and resources.
- Gemini in BigQuery is covered by Google security and compliance offerings.

### Gemini Enterprise client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/libraries](https://docs.cloud.google.com/gemini/enterprise/docs/libraries)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SearchResult element : response . getResultsList ()) { System . out . println ( "Response content: " + element ); } } } } Node.js / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR LOCATION'; // Options: 'global', 'us', 'eu' // const collectionId = 'default collection'; // Options: 'default collection' // const dataStoreId = 'YOUR DATA STORE ID' // Create in Cloud Console // const servingConfigId = 'default config'; // Options: 'default config' // const searchQuery = 'Google'; const { SearchServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1beta ; // For more information, refer to: // https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store const apiEndpoint = location === 'global' ? 'discoveryengine.googleapis.com' : ${ location } -discoveryengine.googleapis.com ; // Instantiates a client const client = new SearchServiceClient ({ apiEndpoint : apiEndpoint }); async function search () { // The full resource name of the search engine serving configuration. // Example: projects/{projectId}/locations/{location}/collections/{collectionId}/dataStores/{dataStoreId}/servingConfigs/{servingConfigId} // You must create a search engine in the Cloud Console first. const name = client . projectLocationCollectionDataStoreServingConfigPath ( projectId , location , collectionId , dataStoreId , servingConfigId ); const request = { pageSize : 10 , query : searchQuery , servingConfig : name , }; const IResponseParams = { ISearchResult : 0 , ISearchRequest : 1 , ISearchResponse : 2 , }; // Perform search request const response = await client . search ( request , { // Warning: Should always disable autoPaginate to avoid iterate through all pages. // // By default NodeJS SDK returns an iterable where you can iterate through all // search results instead of only the limited number of results requested on // pageSize, by sending multiple sequential search requests page-by-page while // iterating, until it exhausts all the search results.
- You can iterate over elements, and API calls will be issued to fetch pages as needed. result . each do item Each element is of type ::Google::Cloud::DiscoveryEngine::V1beta::SearchResponse::SearchResult. p item end end Additional resources C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker Gemini Enterprise on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker Gemini Enterprise on Stack Overflow Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker Gemini Enterprise on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker Gemini Enterprise on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker Gemini Enterprise on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker Gemini Enterprise on Stack Overflow Source code Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- After completing all of your requests, call // the searchServiceClient.close() method on the client to safely // clean up any remaining background resources. try ( SearchServiceClient searchServiceClient = SearchServiceClient . create ( settings )) { SearchRequest request = SearchRequest . newBuilder () . setServingConfig ( ServingConfigName . formatProjectLocationCollectionDataStoreServingConfigName ( projectId , location , collectionId , dataStoreId , servingConfigId )) . setQuery ( searchQuery ) . setPageSize ( 10 ) . build (); SearchResponse response = searchServiceClient . search ( request ). getPage (). getResponse (); for ( SearchResponse .
- ServingConfigName ; import java.io.IOException ; import java.util.concurrent.ExecutionException ; public class Search { public static void main () throws IOException , ExecutionException { // TODO(developer): Replace these variables before running the sample. // Project ID or project number of the Cloud project you want to use.

### "Generate Gemini Code Assist metrics \_|\_ Gemini for Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics](https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- List the number of unique users The following instructions describe how to use the gcloud CLI to list the number of unique users of Gemini Code Assist in the most recent 28-day period: In a shell environment, ensure that you have updated all installed components of the gcloud CLI to the latest version: gcloud components update Read the log entries for Gemini Code Assist users and usage: gcloud logging read 'resource.type=cloudaicompanion.googleapis.com/Instance labels.product= "code assist"' \ --freshness 28d \ --project PROJECT ID \ --format "csv(timestamp.date('%Y-%m-%d'),labels.user id)" Replace PROJECT ID with your Google Cloud project ID.
- The output is similar to the following: 2024-10-30,user1@company.com 2024-10-29,user2@company.com 2024-10-29,user2@company.com 2024-10-29,user2@company.com 2024-10-29,user1@company.com 2024-10-28,user1@company.com Create a chart that displays daily usage The following steps show how to use Monitoring to create daily use graphs that show the aggregate total of daily active Gemini Code Assist users and the number of their requests per day.
- List individual users by day SELECT DISTINCT labels . user id as user , DATE ( timestamp ) as use date FROM GENERATED BIGQUERY TABLE ORDER BY use date Replace GENERATED BIGQUERY TABLE with the fully qualified path of the BigQuery response table you noted in the previous steps for creating a sink .
- List aggregate users by day SELECT COUNT ( DISTINCT labels . user id ) as total users , DATE ( timestamp ) as use date FROM GENERATED BIGQUERY TABLE GROUP BY use date ORDER BY use date List individual requests per day by user SELECT COUNT ( ), DATE ( timestamp ) as use date , labels . user id as user FROM GENERATED BIGQUERY TABLE GROUP BY use date , user ORDER BY use date List aggregate requests per day by date SELECT COUNT ( ), DATE ( timestamp ) as use date FROM GENERATED BIGQUERY TABLE GROUP BY use date ORDER BY use date What's next Learn more about Gemini for Google Cloud logging .

