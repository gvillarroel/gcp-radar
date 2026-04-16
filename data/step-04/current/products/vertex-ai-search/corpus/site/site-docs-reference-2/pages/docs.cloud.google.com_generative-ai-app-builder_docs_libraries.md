---
title: "Vertex AI Search client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/libraries
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/libraries
  title: "Vertex AI Search client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Search
Reference
Send feedback
Vertex AI Search client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Discovery Engine API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Important: Vertex AI Search uses the Discovery Engine API and client libraries.
Install the client library
C#
Install-Package Google.Cloud.DiscoveryEngine.V1Beta -Pre
For more information, see Setting Up a C# Development Environment .
Java
If you are using Maven , add
the following to your pom.xml file. For more information about
BOMs, see The Google Cloud Platform Libraries BOM .
< dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>libraries - bom < / artifactId >
< version>26 .79.0 < / version >
< type>pom < / type >
< scope>import < / scope >
< / dependency >
< / dependencies >
< / dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - discoveryengine < / artifactId >
< / dependency >
< / dependencies >
If you are using Gradle ,
add the following to your dependencies:
implementation ' com . google . cloud : google - cloud - discoveryengine : 0.86.0 '
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-discoveryengine" % "0.86.0"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
Note: Cloud Java client libraries do not currently support Android.
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/discoveryengine
For more information, see Setting Up a Node.js Development Environment .
PHP
composer require google/cloud-discoveryengine
For more information, see Using PHP on Google Cloud .
Python
pip install --upgrade google-cloud-discoveryengine
For more information, see Setting Up a Python Development Environment .
Ruby
gem install google-cloud-discovery_engine-v1beta
For more information, see Setting Up a Ruby Development Environment .
Set up authentication
To authenticate calls to Google Cloud APIs, client libraries support
Application Default Credentials (ADC) ;
the libraries look for credentials in a set of defined locations and use those credentials
to authenticate requests to the API. With ADC, you can make
credentials available to your application in a variety of environments, such as local
development or production, without needing to modify your application code.
For production environments, the way you set up ADC depends on the service
and context. For more information, see Set up Application Default Credentials .
For a local development environment, you can set up ADC with the credentials
that are associated with your Google Account:
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
A sign-in screen appears. After you sign in, your credentials are stored in the
local credential file used by ADC .
Use the client library
The following example shows how to use the client library.
C#
using Google.Api.Gax ;
using Google.Cloud.DiscoveryEngine.V1Beta ;
using Google.Protobuf.WellKnownTypes ;
using System ;
public sealed partial class GeneratedSearchServiceClientSnippets
{
/// <summary>Snippet for Search</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void SearchRequestObject ()
{
// Create client
SearchServiceClient searchServiceClient = SearchServiceClient . Create ();
// Initialize request argument(s)
SearchRequest request = new SearchRequest
{
ServingConfigAsServingConfigName = ServingConfigName . FromProjectLocationDataStoreServingConfig ( "[PROJECT]" , "[LOCATION]" , "[DATA_STORE]" , "[SERVING_CONFIG]" ),
BranchAsBranchName = BranchName . FromProjectLocationDataStoreBranch ( "[PROJECT]" , "[LOCATION]" , "[DATA_STORE]" , "[BRANCH]" ),
Query = "" ,
Offset = 0 ,
Filter = "" ,
OrderBy = "" ,
FacetSpecs =
{
new SearchRequest . Types . FacetSpec (),
},
BoostSpec = new SearchRequest . Types . BoostSpec (),
Params = { { "" , new Value () }, },
QueryExpansionSpec = new SearchRequest . Types . QueryExpansionSpec (),
SpellCorrectionSpec = new SearchRequest . Types . SpellCorrectionSpec (),
UserPseudoId = "" ,
ImageQuery = new SearchRequest . Types . ImageQuery (),
SafeSearch = false ,
UserInfo = new UserInfo (),
UserLabels = { { "" , "" }, },
EmbeddingSpec = new SearchRequest . Types . EmbeddingSpec (),
ContentSearchSpec = new SearchRequest . Types . ContentSearchSpec (),
RankingExpression = "" ,
NaturalLanguageQueryUnderstandingSpec = new SearchRequest . Types . NaturalLanguageQueryUnderstandingSpec (),
CanonicalFilter = "" ,
SearchAsYouTypeSpec = new SearchRequest . Types . SearchAsYouTypeSpec (),
DataStoreSpecs =
{
new SearchRequest . Types . DataStoreSpec (),
},
LanguageCode = "" ,
RegionCode = "" ,
SessionAsSessionName = SessionName . FromProjectLocationDataStoreSession ( "[PROJECT]" , "[LOCATION]" , "[DATA_STORE]" , "[SESSION]" ),
SessionSpec = new SearchRequest . Types . SessionSpec (),
RelevanceThreshold = SearchRequest . Types . RelevanceThreshold . Unspecified ,
PersonalizationSpec = new SearchRequest . Types . PersonalizationSpec (),
OneBoxPageSize = 0 ,
RankingExpressionBackend = SearchRequest . Types . RankingExpressionBackend . Unspecified ,
};
// Make the request
PagedEnumerable<SearchResponse , SearchResponse . Types . SearchResult > response = searchServiceClient . Search ( request );
// Iterate over all response items, lazily performing RPCs as required
foreach ( SearchResponse . Types . SearchResult item in response )
{
// Do something with each item
Console . WriteLine ( item );
}
// Or iterate over pages (of server-defined size), performing one RPC per page
foreach ( SearchResponse page in response . AsRawResponses ())
{
// Do something with each page of items
Console . WriteLine ( "A page of results:" );
foreach ( SearchResponse . Types . SearchResult item in page )
{
// Do something with each item
Console . WriteLine ( item );
}
}
// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10 ;
Page<SearchResponse . Types . SearchResult > singlePage = response . ReadPage ( pageSize );
// Do something with the page of items
Console . WriteLine ( $"A page of {pageSize} results (unless it's the final page):" );
foreach ( SearchResponse . Types . SearchResult item in singlePage )
{
// Do something with each item
Console . WriteLine ( item );
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage . NextPageToken ;
}
}
Java
import com.google.cloud.discoveryengine.v1. SearchRequest ;
import com.google.cloud.discoveryengine.v1. SearchResponse ;
import com.google.cloud.discoveryengine.v1. SearchServiceClient ;
import com.google.cloud.discoveryengine.v1. SearchServiceSettings ;
import com.google.cloud.discoveryengine.v1. ServingConfigName ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
public class Search {
public static void main () throws IOException , ExecutionException {
// TODO(developer): Replace these variables before running the sample.
// Project ID or project number of the Cloud project you want to use.
String projectId = "PROJECT_ID" ;
// Location of the data store. Options: "global", "us", "eu"
String location = "global" ;
// Collection containing the data store.
String collectionId = "default_collection" ;
// Data store ID.
String dataStoreId = "DATA_STORE_ID" ;
// Serving configuration. Options: "default_search"
String servingConfigId = "default_search" ;
// Search Query for the data store.
String searchQuery = "Google" ;
search ( projectId , location , collectionId , dataStoreId , servingConfigId , searchQuery );
}
/** Performs a search on a given datastore. */
public static void search (
String projectId ,
String location ,
String collectionId ,
String dataStoreId ,
String servingConfigId ,
String searchQuery )
throws IOException , ExecutionException {
// For more information, refer to:
// https://cloud.google.com/generative-ai-app-builder/docs/locations#specify_a_multi-region_for_your_data_store
String endpoint = ( location . equals ( "global" ))
? String . format ( "discoveryengine.googleapis.com:443" , location )
: String . format ( "%s-discoveryengine.googleapis.com:443" , location );
SearchServiceSettings settings =
SearchServiceSettings . newBuilder (). setEndpoint ( endpoint ). build ();
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the `searchServiceClient.close()` method on the client to safely
// clean up any remaining background resources.
try ( SearchServiceClient searchServiceClient = SearchServiceClient . create ( settings )) {
SearchRequest request =
SearchRequest . newBuilder ()
. setServingConfig (
ServingConfigName . formatProjectLocationCollectionDataStoreServingConfigName (
projectId , location , collectionId , dataStoreId , servingConfigId ))
. setQuery ( searchQuery )
. setPageSize ( 10 )
. build ();
SearchResponse response = searchServiceClient . search ( request ). getPage (). getResponse ();
for ( SearchResponse . SearchResult element : response . getResultsList ()) {
System . out . println ( "Response content: " + element );
}
}
}
}
Node.js
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// const projectId = 'YOUR_PROJECT_ID';
// const location = 'YOUR_LOCATION'; // Options: 'global', 'us', 'eu'
// const collectionId = 'default_collection'; // Options: 'default_collection'
// const dataStoreId = 'YOUR_DATA_STORE_ID' // Create in Cloud Console
// const servingConfigId = 'default_config'; // Options: 'default_config'
// const searchQuery = 'Google';
const { SearchServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1beta ;
// For more information, refer to:
// https://cloud.google.com/generative-ai-app-builder/docs/locations#specify_a_multi-region_for_your_data_store
const apiEndpoint =
location === 'global'
? 'discoveryengine.googleapis.com'
: ` ${ location } -discoveryengine.googleapis.com` ;
// Instantiates a client
const client = new SearchServiceClient ({ apiEndpoint : apiEndpoint });
async function search () {
// The full resource name of the search engine serving configuration.
// Example: projects/{projectId}/locations/{location}/collections/{collectionId}/dataStores/{dataStoreId}/servingConfigs/{servingConfigId}
// You must create a search engine in the Cloud Console first.
const name = client . projectLocationCollectionDataStoreServingConfigPath (
projectId ,
location ,
collectionId ,
dataStoreId ,
servingConfigId
);
const request = {
pageSize : 10 ,
query : searchQuery ,
servingConfig : name ,
};
const IResponseParams = {
ISearchResult : 0 ,
ISearchRequest : 1 ,
ISearchResponse : 2 ,
};
// Perform search request
const response = await client . search ( request , {
// Warning: Should always disable autoPaginate to avoid iterate through all pages.
//
// By default NodeJS SDK returns an iterable where you can iterate through all
// search results instead of only the limited number of results requested on
// pageSize, by sending multiple sequential search requests page-by-page while
// iterating, until it exhausts all the search results. This will be unexpected and
// may cause high Search API usage and long wait time, especially when the matched
// document numbers are huge.
autoPaginate : false ,
});
const results = response [ IResponseParams . ISearchResponse ]. results ;
for ( const result of results ) {
console . log ( result );
}
}
PHP
use Google\ApiCore\ApiException;
use Google\ApiCore\PagedListResponse;
use Google\Cloud\DiscoveryEngine\V1beta\Client\SearchServiceClient;
use Google\Cloud\DiscoveryEngine\V1beta\SearchRequest;
use Google\Cloud\DiscoveryEngine\V1beta\SearchResponse\SearchResult;
/**
* Performs a search.
*
* @param string $formattedServingConfig The resource name of the Search serving config, such as
* `projects/&#42;/locations/global/collections/default_collection/engines/&#42;/servingConfigs/default_serving_config`,
* or
* `projects/&#42;/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`.
* This field is used to identify the serving configuration name, set
* of models used to make the search. Please see
* {@see SearchServiceClient::servingConfigName()} for help formatting this field.
*/
function search_sample(string $formattedServingConfig): void
{
// Create a client.
$searchServiceClient = new SearchServiceClient();
// Prepare the request message.
$request = (new SearchRequest())
->setServingConfig($formattedServingConfig);
// Call the API and handle any network failures.
try {
/** @var PagedListResponse $response */
$response = $searchServiceClient->search($request);
/** @var SearchResult $element */
foreach ($response as $element) {
printf('Element data: %s' . PHP_EOL, $element->serializeToJsonString());
}
} catch (ApiException $ex) {
printf('Call failed with message: %s' . PHP_EOL, $ex->getMessage());
}
}
/**
* Helper to execute the sample.
*
* This sample has been automatically generated and should be regarded as a code
* template only. It will require modifications to work:
* - It may require correct/in-range values for request initialization.
* - It may require specifying regional endpoints when creating the service client,
* please see the apiEndpoint client configuration option for more details.
*/
function callSample(): void
{
$formattedServingConfig = SearchServiceClient::servingConfigName(
'[PROJECT]',
'[LOCATION]',
'[DATA_STORE]',
'[SERVING_CONFIG]'
);
search_sample($formattedServingConfig);
}
Python
from google.api_core.client_options import ClientOptions
from google.cloud import discoveryengine_v1 as discoveryengine
# TODO(developer): Uncomment these variables before running the sample.
# project_id = "YOUR_PROJECT_ID"
# location = "YOUR_LOCATION" # Values: "global", "us", "eu"
# engine_id = "YOUR_APP_ID"
# search_query = "YOUR_SEARCH_QUERY"
def search_sample (
project_id : str ,
location : str ,
engine_id : str ,
search_query : str ,
) - > discoveryengine . services . search_service . pagers . SearchPager :
# For more information, refer to:
# https://cloud.google.com/generative-ai-app-builder/docs/locations#specify_a_multi-region_for_your_data_store
client_options = (
ClientOptions ( api_endpoint = f " { location } -discoveryengine.googleapis.com" )
if location != "global"
else None
)
# Create a client
client = discoveryengine . SearchServiceClient ( client_options = client_options )
# The full resource name of the search app serving config
serving_config = f "projects/ { project_id } /locations/ { location } /collections/default_collection/engines/ { engine_id } /servingConfigs/default_config"
# Optional - only supported for unstructured data: Configuration options for search.
# Refer to the `ContentSearchSpec` reference for all supported fields:
# https://cloud.google.com/python/docs/reference/discoveryengine/latest/google.cloud.discoveryengine_v1.types.SearchRequest.ContentSearchSpec
content_search_spec = discoveryengine . SearchRequest . ContentSearchSpec (
# For information about snippets, refer to:
# https://cloud.google.com/generative-ai-app-builder/docs/snippets
snippet_spec = discoveryengine . SearchRequest . ContentSearchSpec . SnippetSpec (
return_snippet = True
),
# For information about search summaries, refer to:
# https://cloud.google.com/generative-ai-app-builder/docs/get-search-summaries
summary_spec = discoveryengine . SearchRequest . ContentSearchSpec . SummarySpec (
summary_result_count = 5 ,
include_citations = True ,
ignore_adversarial_query = True ,
ignore_non_summary_seeking_query = True ,
model_prompt_spec = discoveryengine . SearchRequest . ContentSearchSpec . SummarySpec . ModelPromptSpec (
preamble = "YOUR_CUSTOM_PROMPT"
),
model_spec = discoveryengine . SearchRequest . ContentSearchSpec . SummarySpec . ModelSpec (
version = "stable" ,
),
),
)
# Refer to the `SearchRequest` reference for all supported fields:
# https://cloud.google.com/python/docs/reference/discoveryengine/latest/google.cloud.discoveryengine_v1.types.SearchRequest
request = discoveryengine . SearchRequest (
serving_config = serving_config ,
query = search_query ,
page_size = 10 ,
content_search_spec = content_search_spec ,
query_expansion_spec = discoveryengine . SearchRequest . QueryExpansionSpec (
condition = discoveryengine . SearchRequest . QueryExpansionSpec . Condition . AUTO ,
),
spell_correction_spec = discoveryengine . SearchRequest . SpellCorrectionSpec (
mode = discoveryengine . SearchRequest . SpellCorrectionSpec . Mode . AUTO
),
# Optional: Use fine-tuned model for this request
# custom_fine_tuning_spec=discoveryengine.CustomFineTuningSpec(
# enable_search_adaptor=True
# ),
)
page_result = client . search ( request )
# Handle the response
for response in page_result :
print ( response )
return page_result
Ruby
require "google/cloud/discovery_engine/v1beta"
##
# Snippet for the search call in the SearchService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::DiscoveryEngine::V1beta::SearchService::Client#search.
#
def search
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: DiscoveryEngine :: V1beta :: SearchService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: DiscoveryEngine :: V1beta :: SearchRequest . new
# Call the search method.
result = client . search request
# The returned object is of type Gapic::PagedEnumerable. You can iterate
# over elements, and API calls will be issued to fetch pages as needed.
result . each do | item |
# Each element is of type ::Google::Cloud::DiscoveryEngine::V1beta::SearchResponse::SearchResult.
p item
end
end
Additional resources
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
vertex-ai-search on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
vertex-ai-search on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
vertex-ai-search on Stack Overflow
Source code
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
vertex-ai-search on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
vertex-ai-search on Stack Overflow
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
vertex-ai-search on Stack Overflow
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
