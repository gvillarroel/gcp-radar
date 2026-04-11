---
title: "Delete a schema for structured data \_|\_ Vertex AI Search \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-schemas
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-schemas
  title: "Delete a schema for structured data \_|\_ Vertex AI Search \_|\_ Google\
    \ Cloud Documentation"
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
Delete a schema for structured data
Stay organized with collections
Save and categorize content based on your preferences.
You can only delete a schema if all of the documents associated with the schema
are deleted. Otherwise, the attempt fails. After you delete a schema, you can
call the schemas.create method to create a new one.
To delete a schema for structured data, follow these steps:
REST
Find your data store ID. If you already have your data store
ID, skip to the next step.
In the Google Cloud console, go to the AI Applications page and
in the navigation menu, click Data Stores .
Go to the Data Stores page
Click the name of your data store.
On the Data page for your data store, get the data store ID.
Delete your schema.
curl -X DELETE \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
"https://discoveryengine.googleapis.com/v1beta/projects/ PROJECT_ID /locations/global/collections/default_collection/dataStores/ DATA_STORE_ID /schemas/default_schema"
Replace the following:
PROJECT_ID : the ID of your project.
DATA_STORE_ID : the ID of your data store.
C#
For more information, see the
Vertex AI Search C# API
reference documentation .
To authenticate to Vertex AI Search, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.DiscoveryEngine.V1 ;
using Google.LongRunning ;
using Google.Protobuf.WellKnownTypes ;
public sealed partial class GeneratedSchemaServiceClientSnippets
{
/// <summary>Snippet for DeleteSchema</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void DeleteSchemaRequestObject ()
{
// Create client
SchemaServiceClient schemaServiceClient = SchemaServiceClient . Create ();
// Initialize request argument(s)
DeleteSchemaRequest request = new DeleteSchemaRequest
{
SchemaName = SchemaName . FromProjectLocationDataStoreSchema ( "[PROJECT]" , "[LOCATION]" , "[DATA_STORE]" , "[SCHEMA]" ),
};
// Make the request
Operation<Empty , DeleteSchemaMetadata > response = schemaServiceClient . DeleteSchema ( request );
// Poll until the returned long-running operation is complete
Operation<Empty , DeleteSchemaMetadata > completedResponse = response . PollUntilCompleted ();
// Retrieve the operation result
Empty result = completedResponse . Result ;
// Or get the name of the operation
string operationName = response . Name ;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty , DeleteSchemaMetadata > retrievedResponse = schemaServiceClient . PollOnceDeleteSchema ( operationName );
// Check if the retrieved long-running operation has completed
if ( retrievedResponse . IsCompleted )
{
// If it has completed, then access the result
Empty retrievedResult = retrievedResponse . Result ;
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
c , err := discoveryengine . NewSchemaClient ( ctx )
if err != nil {
// TODO: Handle error.
}
defer c . Close ()
req := & discoveryenginepb . DeleteSchemaRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/discoveryengine/apiv1/discoveryenginepb#DeleteSchemaRequest.
}
op , err := c . DeleteSchema ( ctx , req )
if err != nil {
// TODO: Handle error.
}
err = op . Wait ( ctx )
if err != nil {
// TODO: Handle error.
}
}
Java
For more information, see the
Vertex AI Search Java API
reference documentation .
To authenticate to Vertex AI Search, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.discoveryengine.v1. DeleteSchemaRequest ;
import com.google.cloud.discoveryengine.v1. SchemaName ;
import com.google.cloud.discoveryengine.v1. SchemaServiceClient ;
import com.google.protobuf. Empty ;
public class SyncDeleteSchema {
public static void main ( String [] args ) throws Exception {
syncDeleteSchema ();
}
public static void syncDeleteSchema () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
DeleteSchemaRequest request =
DeleteSchemaRequest . newBuilder ()
. setName (
SchemaName . ofProjectLocationDataStoreSchemaName (
"[PROJECT]" , "[LOCATION]" , "[DATA_STORE]" , "[SCHEMA]" )
. toString ())
. build ();
schemaServiceClient . deleteSchemaAsync ( request ). get ();
}
}
}
Python
For more information, see the
Vertex AI Search Python API
reference documentation .
To authenticate to Vertex AI Search, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import discoveryengine_v1
def sample_delete_schema ():
# Create a client
client = discoveryengine_v1 . SchemaServiceClient ()
# Initialize request argument(s)
request = discoveryengine_v1 . DeleteSchemaRequest (
name = "name_value" ,
)
# Make the request
operation = client . delete_schema ( request = request )
print ( "Waiting for operation to complete..." )
response = operation . result ()
# Handle the response
print ( response )
Ruby
For more information, see the
Vertex AI Search Ruby API
reference documentation .
To authenticate to Vertex AI Search, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/discovery_engine/v1"
##
# Snippet for the delete_schema call in the SchemaService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::DiscoveryEngine::V1::SchemaService::Client#delete_schema.
#
def delete_schema
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: DiscoveryEngine :: V1 :: SchemaService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: DiscoveryEngine :: V1 :: DeleteSchemaRequest . new
# Call the delete_schema method.
result = client . delete_schema request
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
