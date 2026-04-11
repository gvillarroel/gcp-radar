---
title: "Purge data from a data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores
  title: "Purge data from a data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Search
Send feedback
Purge data from a data store
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to purge all of the data in a structured or unstructured
data store.
You purge the data in a data store if you want to completely delete the
contents of the data store before re-importing fresh data. Purging a
data store deletes only the data in the data store, leaving your app, schema,
and configurations intact.
For how to delete a data store, see Delete a datastore .
Website data stores
Purging is not an option for website data stores because you can remove websites from
website data stores as needed.
Note: It can take from 6 to 24 hours to remove websites from website
data stores with advanced website indexing .
Purge data
To purge data from a data store, do the following:
Console
To use the Google Cloud console to purge the data from a branch of a structured, unstructured,
or healthcare data store, follow these steps:
In the Google Cloud console, go to the AI Applications page.
AI Applications
In the navigation menu, click Data Stores .
In the Name column, click the data store that you want to purge.
In the Documents tab, click delete Purge data .
Read the warning in the Confirm purge data dialog. If you want to
continue, enter the name of your data store, and then click Confirm .
Purging data is a long-running operation. For more information, see Monitor
long-running operations .
Click the Activity tab to monitor the progress of the purge operation.
REST
To use the command line to purge the data from a branch of a structured or
unstructured data store, follow these steps:
Find your data store ID. If you already have your data store
ID, skip to the next step.
In the Google Cloud console, go to the AI Applications page and
in the navigation menu, click Data Stores .
Go to the Data Stores page
Click the name of your data store.
On the Data page for your data store, get the data store ID.
Call the documents.purge method.
curl -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
"https://discoveryengine.googleapis.com/v1/projects/ PROJECT_ID /locations/global/collections/default_collection/dataStores/ DATA_STORE_ID /branches/0/documents:purge" \
-d '{
"filter": "*",
"force": FORCE
}'
Replace the following:
PROJECT_ID : Google Cloud project.
DATA_STORE_ID : the ID of the Vertex AI Search data store..
FORCE : a boolean value that specifies whether to
delete data from the branch of the data store.
If true , deletes all data from the branch
If false , deletes no data and returns a list of documents in the branch.
If force is omitted, the default is false .
Optional: Make note of the name value returned by the
documents.purge method and follow the instructions in Get details
about a long-running operation to
see when the purge operation is complete.
C#
For more information, see the
Vertex AI Search C# API
reference documentation .
To authenticate to Vertex AI Search, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.DiscoveryEngine.V1 ;
using Google.LongRunning ;
public sealed partial class GeneratedDocumentServiceClientSnippets
{
/// <summary>Snippet for PurgeDocuments</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void PurgeDocumentsRequestObject ()
{
// Create client
DocumentServiceClient documentServiceClient = DocumentServiceClient . Create ();
// Initialize request argument(s)
PurgeDocumentsRequest request = new PurgeDocumentsRequest
{
ParentAsBranchName = BranchName . FromProjectLocationDataStoreBranch ( "[PROJECT]" , "[LOCATION]" , "[DATA_STORE]" , "[BRANCH]" ),
Filter = "" ,
Force = false ,
GcsSource = new GcsSource (),
ErrorConfig = new PurgeErrorConfig (),
};
// Make the request
Operation<PurgeDocumentsResponse , PurgeDocumentsMetadata > response = documentServiceClient . PurgeDocuments ( request );
// Poll until the returned long-running operation is complete
Operation<PurgeDocumentsResponse , PurgeDocumentsMetadata > completedResponse = response . PollUntilCompleted ();
// Retrieve the operation result
PurgeDocumentsResponse result = completedResponse . Result ;
// Or get the name of the operation
string operationName = response . Name ;
// This name can be stored, then the long-running operation retrieved later by name
Operation<PurgeDocumentsResponse , PurgeDocumentsMetadata > retrievedResponse = documentServiceClient . PollOncePurgeDocuments ( operationName );
// Check if the retrieved long-running operation has completed
if ( retrievedResponse . IsCompleted )
{
// If it has completed, then access the result
PurgeDocumentsResponse retrievedResult = retrievedResponse . Result ;
}
}
}
Go
For more information, see the
Vertex AI Search Go API
reference documentation .
To authenticate to Vertex AI Search, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
package main
import (
"context"
discoveryengine "cloud.google.com/go/discoveryengine/apiv1"
discoveryenginepb "cloud.google.com/go/discoveryengine/apiv1/discoveryenginepb"
)
func main () {
ctx := context . Background ()
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in:
// https://pkg.go.dev/cloud.google.com/go#hdr-Client_Options
c , err := discoveryengine . NewDocumentClient ( ctx )
if err != nil {
// TODO: Handle error.
}
defer c . Close ()
req := & discoveryenginepb . PurgeDocumentsRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/discoveryengine/apiv1/discoveryenginepb#PurgeDocumentsRequest.
}
op , err := c . PurgeDocuments ( ctx , req )
if err != nil {
// TODO: Handle error.
}
resp , err := op . Wait ( ctx )
if err != nil {
// TODO: Handle error.
}
// TODO: Use resp.
_ = resp
}
Java
For more information, see the
Vertex AI Search Java API
reference documentation .
To authenticate to Vertex AI Search, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.discoveryengine.v1. BranchName ;
import com.google.cloud.discoveryengine.v1. DocumentServiceClient ;
import com.google.cloud.discoveryengine.v1. PurgeDocumentsRequest ;
import com.google.cloud.discoveryengine.v1. PurgeDocumentsResponse ;
import com.google.cloud.discoveryengine.v1. PurgeErrorConfig ;
public class SyncPurgeDocuments {
public static void main ( String [] args ) throws Exception {
syncPurgeDocuments ();
}
public static void syncPurgeDocuments () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) {
PurgeDocumentsRequest request =
PurgeDocumentsRequest . newBuilder ()
. setParent (
BranchName . ofProjectLocationDataStoreBranchName (
"[PROJECT]" , "[LOCATION]" , "[DATA_STORE]" , "[BRANCH]" )
. toString ())
. setFilter ( "filter-1274492040" )
. setErrorConfig ( PurgeErrorConfig . newBuilder (). build ())
. setForce ( true )
. build ();
PurgeDocumentsResponse response = documentServiceClient . purgeDocumentsAsync ( request ). get ();
}
}
}
Node.js
For more information, see the
Vertex AI Search Node.js API
reference documentation .
To authenticate to Vertex AI Search, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/**
* This snippet has been automatically generated and should be regarded as a code template only.
* It will require modifications to work.
* It may require correct/in-range values for request initialization.
* TODO(developer): Uncomment these variables before running the sample.
*/
/**
* Cloud Storage location for the input content.
* Supported `data_schema`:
* * `document_id`: One valid
* Document.id google.cloud.discoveryengine.v1.Document.id per line.
*/
// const gcsSource = {}
/**
* Inline source for the input content for purge.
*/
// const inlineSource = {}
/**
* Required. The parent resource name, such as
* `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`.
*/
// const parent = 'abc123'
/**
* Required. Filter matching documents to purge. Only currently supported
* value is
* `*` (all items).
*/
// const filter = 'abc123'
/**
* The desired location of errors incurred during the purge.
*/
// const errorConfig = {}
/**
* Actually performs the purge. If `force` is set to false, return the
* expected purge count without deleting any documents.
*/
// const force = true
// Imports the Discoveryengine library
const { DocumentServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1 ;
// Instantiates a client
const discoveryengineClient = new DocumentServiceClient ();
async function callPurgeDocuments () {
// Construct request
const request = {
parent ,
filter ,
};
// Run request
const [ operation ] = await discoveryengineClient . purgeDocuments ( request );
const [ response ] = await operation . promise ();
console . log ( response );
}
callPurgeDocuments ();
Python
For more information, see the
Vertex AI Search Python API
reference documentation .
To authenticate to Vertex AI Search, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.api_core.client_options import ClientOptions
from google.cloud import discoveryengine
# TODO(developer): Uncomment these variables before running the sample.
# project_id = "YOUR_PROJECT_ID"
# location = "YOUR_LOCATION" # Values: "global", "us", "eu"
# data_store_id = "YOUR_DATA_STORE_ID"
def purge_documents_sample (
project_id : str , location : str , data_store_id : str
) - > discoveryengine . PurgeDocumentsMetadata :
# For more information, refer to:
# https://cloud.google.com/generative-ai-app-builder/docs/locations#specify_a_multi-region_for_your_data_store
client_options = (
ClientOptions ( api_endpoint = f " { location } -discoveryengine.googleapis.com" )
if location != "global"
else None
)
# Create a client
client = discoveryengine . DocumentServiceClient ( client_options = client_options )
operation = client . purge_documents (
request = discoveryengine . PurgeDocumentsRequest (
# The full resource name of the search engine branch.
# e.g. projects/{project}/locations/{location}/dataStores/{data_store_id}/branches/{branch}
parent = client . branch_path (
project = project_id ,
location = location ,
data_store = data_store_id ,
branch = "default_branch" ,
),
filter = "*" ,
# If force is set to `False`, return the expected purge count without deleting any documents.
force = True ,
)
)
print ( f "Waiting for operation to complete: { operation . operation . name } " )
response = operation . result ()
# After the operation is complete,
# get information from operation metadata
metadata = discoveryengine . PurgeDocumentsMetadata ( operation . metadata )
# Handle the response
print ( response )
print ( metadata )
return metadata
Ruby
For more information, see the
Vertex AI Search Ruby API
reference documentation .
To authenticate to Vertex AI Search, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/discovery_engine/v1"
##
# Snippet for the purge_documents call in the DocumentService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::DiscoveryEngine::V1::DocumentService::Client#purge_documents.
#
def purge_documents
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: DiscoveryEngine :: V1 :: DocumentService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: DiscoveryEngine :: V1 :: PurgeDocumentsRequest . new
# Call the purge_documents method.
result = client . purge_documents request
# The returned object is of type Gapic::Operation. You can use it to
# check the status of an operation, cancel it, or wait for results.
# Here is how to wait for a response.
result . wait_until_done! timeout : 60
if result . response?
p result . response
else
puts "No response received."
end
end
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
