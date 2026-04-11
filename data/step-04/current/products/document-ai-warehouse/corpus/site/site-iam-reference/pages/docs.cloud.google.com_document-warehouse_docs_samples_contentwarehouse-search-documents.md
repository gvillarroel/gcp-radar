---
title: "Search documents \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-fetch-acl
source_metadata:
  url: https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-search-documents
  title: "Search documents \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI Warehouse
Samples
Search documents
Stay organized with collections
Save and categorize content based on your preferences.
Search documents in Document AI Warehouse
Explore further
For detailed documentation that includes this code sample, see the following:
Search documents
Code sample
Java
For more information, see the
Document AI Warehouse Java API
reference documentation .
To authenticate to Document AI Warehouse, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.contentwarehouse.v1. DocumentQuery ;
import com.google.cloud.contentwarehouse.v1. DocumentServiceClient ;
import com.google.cloud.contentwarehouse.v1. DocumentServiceClient . SearchDocumentsPagedResponse ;
import com.google.cloud.contentwarehouse.v1. DocumentServiceSettings ;
import com.google.cloud.contentwarehouse.v1. FileTypeFilter ;
import com.google.cloud.contentwarehouse.v1. FileTypeFilter . FileType ;
import com.google.cloud.contentwarehouse.v1. LocationName ;
import com.google.cloud.contentwarehouse.v1. RequestMetadata ;
import com.google.cloud.contentwarehouse.v1. SearchDocumentsRequest ;
import com.google.cloud.contentwarehouse.v1. SearchDocumentsResponse . MatchingDocument ;
import com.google.cloud.contentwarehouse.v1. UserInfo ;
import com.google.cloud.resourcemanager.v3. Project ;
import com.google.cloud.resourcemanager.v3. ProjectName ;
import com.google.cloud.resourcemanager.v3. ProjectsClient ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeoutException ;
public class SearchDocuments {
public static void main ( String [] args ) throws IOException ,
InterruptedException , ExecutionException , TimeoutException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String location = "your-region" ; // Format is "us" or "eu".
String documentQuery = "your-document-query" ;
String userId = "your-user-id" ; // Format is user:<user-id>
searchDocuments ( projectId , location , documentQuery , userId );
}
// Searches all documents for a given Document Query
public static void searchDocuments ( String projectId , String location ,
String documentQuery , String userId ) throws IOException , InterruptedException ,
ExecutionException , TimeoutException {
String projectNumber = getProjectNumber ( projectId );
String endpoint = "contentwarehouse.googleapis.com:443" ;
if ( ! "us" . equals ( location )) {
endpoint = String . format ( "%s-%s" , location , endpoint );
}
DocumentServiceSettings documentServiceSettings =
DocumentServiceSettings . newBuilder (). setEndpoint ( endpoint )
. build ();
/*
* Create the Document Service Client
* Initialize client that will be used to send requests.
* This client only needs to be created once, and can be reused for multiple requests.
*/
try ( DocumentServiceClient documentServiceClient =
DocumentServiceClient . create ( documentServiceSettings )) {
/*
* The full resource name of the location, e.g.:
* projects/{project_number}/locations/{location}
*/
String parent = LocationName . format ( projectNumber , location );
// Define RequestMetadata object for context of the user making the API call
RequestMetadata requestMetadata = RequestMetadata . newBuilder ()
. setUserInfo (
UserInfo . newBuilder ()
. setId ( userId )
. build ())
. build ();
// Set file type for filter to 'DOCUMENT'
FileType documentFileType = FileType . DOCUMENT ;
// Create a file type filter for documents
FileTypeFilter fileTypeFilter = FileTypeFilter . newBuilder ()
. setFileType ( documentFileType )
. build ();
// Create document query to search all documents for text given at input
DocumentQuery query = DocumentQuery . newBuilder ()
. setQuery ( documentQuery )
. setFileTypeFilter ( fileTypeFilter )
. build ();
/*
* Create the request to search all documents for specified query.
* Please note the offset in this request is to only return the specified number of results
* to avoid hitting the API quota.
*/
SearchDocumentsRequest searchDocumentsRequest = SearchDocumentsRequest . newBuilder ()
. setParent ( parent )
. setRequestMetadata ( requestMetadata )
. setOffset ( 5 )
. setDocumentQuery ( query )
. build ();
// Make the call to search documents with document service client and store the response
SearchDocumentsPagedResponse searchDocumentsPagedResponse =
documentServiceClient . searchDocuments ( searchDocumentsRequest );
// Iterate through response and print search results for documents matching the search query
for ( MatchingDocument matchingDocument :
searchDocumentsPagedResponse . iterateAll ()) {
System . out . println (
"Display Name: " + matchingDocument . getDocument (). getDisplayName ()
+ "Document Name: " + matchingDocument . getDocument (). getName ()
+ "Document Creation Time: " + matchingDocument . getDocument (). getCreateTime (). toString ()
+ "Search Text Snippet: " + matchingDocument . getSearchTextSnippet ());
}
}
}
private static String getProjectNumber ( String projectId ) throws IOException {
/*
* Initialize client that will be used to send requests.
* This client only needs to be created once, and can be reused for multiple requests.
*/
try ( ProjectsClient projectsClient = ProjectsClient . create ()) {
ProjectName projectName = ProjectName . of ( projectId );
Project project = projectsClient . getProject ( projectName );
String projectNumber = project . getName (); // Format returned is projects/xxxxxx
return projectNumber . substring ( projectNumber . lastIndexOf ( "/" ) + 1 );
}
}
}
Node.js
For more information, see the
Document AI Warehouse Node.js API
reference documentation .
To authenticate to Document AI Warehouse, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* TODO(developer): Uncomment these variables before running the sample.
* const projectNumber = 'YOUR_PROJECT_NUMBER';
* const location = 'YOUR_PROJECT_LOCATION'; // Format is 'us' or 'eu'
* const userId = 'user:xxx@example.com'; // Format is "user:xxx@example.com"
* const documentQueryText = 'YOUR_DOCUMENT_QUERY'
*/
// Import from google cloud
const { DocumentServiceClient } = require ( ' @google-cloud/contentwarehouse ' ). v1 ;
const apiEndpoint =
location === 'us'
? 'contentwarehouse.googleapis.com'
: ` ${ location } -contentwarehouse.googleapis.com` ;
// Create service client
const serviceClient = new DocumentServiceClient ({ apiEndpoint : apiEndpoint });
// Get Document Schema
async function searchDocuments () {
// Initialize request argument(s)
const searchRequest = {
// The full resource name of the location, e.g.:
// projects/{project_number}/locations/{location}
parent : `projects/ ${ projectNumber } /locations/ ${ location } ` ,
// Document Text Query
documentQuery : {
query : documentQueryText ,
// File Type Filter
fileTypeFilter : {
fileType : ' DOCUMENT ' ,
},
},
// Histogram Query
histogramQueries : [
{
histogramQuery : 'count("DocumentSchemaId")' ,
},
],
requestMetadata : { userInfo : { id : userId }},
};
// Make Request
const response = serviceClient . searchDocuments ( searchRequest );
// Print out response
response . then (
result = > console . log ( `Document Found: ${ JSON . stringify ( result ) } ` ),
error = > console . log ( ` ${ error } ` )
);
}
Python
For more information, see the
Document AI Warehouse Python API
reference documentation .
To authenticate to Document AI Warehouse, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud import contentwarehouse
# TODO(developer): Uncomment these variables before running the sample.
# project_number = 'YOUR_PROJECT_NUMBER'
# location = 'YOUR_PROJECT_LOCATION' # Format is 'us' or 'eu'
# document_query_text = 'YOUR_DOCUMENT_QUERY'
# user_id = 'user:YOUR_SERVICE_ACCOUNT_ID' # Format is "user:xxxx@example.com"
def search_documents_sample (
project_number : str , location : str , document_query_text : str , user_id : str
) - > None :
# Create a client
client = contentwarehouse . DocumentServiceClient ()
# The full resource name of the location, e.g.:
# projects/{project_number}/locations/{location}
parent = client . common_location_path ( project = project_number , location = location )
# File Type Filter
# Options: DOCUMENT, FOLDER
file_type_filter = contentwarehouse . FileTypeFilter (
file_type = contentwarehouse . FileTypeFilter . FileType . DOCUMENT
)
# Document Text Query
document_query = contentwarehouse . DocumentQuery (
query = document_query_text ,
file_type_filter = file_type_filter ,
)
# Histogram Query
histogram_query = contentwarehouse . HistogramQuery (
histogram_query = 'count("DocumentSchemaId")'
)
request_metadata = contentwarehouse . RequestMetadata (
user_info = contentwarehouse . UserInfo ( id = user_id )
)
# Define request
request = contentwarehouse . SearchDocumentsRequest (
parent = parent ,
request_metadata = request_metadata ,
document_query = document_query ,
histogram_queries = [ histogram_query ],
)
# Make the request
response = client . search_documents ( request = request )
# Print search results
for matching_document in response . matching_documents :
document = matching_document . document
# Display name - schema display name.
# Name.
# Create date.
# Snippet - keywords are highlighted with <b> & </b>.
print (
f " { document . display_name } - { document . document_schema_name } \n "
f " { document . name } \n "
f " { document . create_time } \n "
f " { matching_document . search_text_snippet } \n "
)
# Print histogram
for histogram_query_result in response . histogram_query_results :
print (
f "Histogram Query: { histogram_query_result . histogram_query } \n "
f "| { 'Schema' : < 70 } | { 'Count' : < 15 } |"
)
for key , value in histogram_query_result . histogram . items ():
print ( f "| { key : < 70 } | { value : < 15 } |" )
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
