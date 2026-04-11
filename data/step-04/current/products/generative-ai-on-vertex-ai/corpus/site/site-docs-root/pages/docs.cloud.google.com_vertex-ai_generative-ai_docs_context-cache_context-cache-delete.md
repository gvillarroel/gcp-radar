---
title: "Delete a context cache \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-delete
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-delete
  title: "Delete a context cache \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Generative AI on Vertex AI
Guides
Send feedback
Delete a context cache
Stay organized with collections
Save and categorize content based on your preferences.
To delete a context cache, you need its cache ID, the Google Cloud project ID with
which the context cache is associated, and the region where the request to
create the context cache
was processed. The cache ID of a context cache is returned when you create the
context cache. You can also get the cache ID of each context cache associated
with a project using the
context cache list command .
Delete context cache example
The following example shows you how to delete a context cache.
Python
Install
pip install --upgrade google-genai
To learn more, see the
SDK reference documentation .
Set environment variables to use the Gen AI SDK with Vertex AI:
# Replace the `GOOGLE_CLOUD_PROJECT` and `GOOGLE_CLOUD_LOCATION` values
# with appropriate values for your project.
export GOOGLE_CLOUD_PROJECT = GOOGLE_CLOUD_PROJECT
export GOOGLE_CLOUD_LOCATION = global
export GOOGLE_GENAI_USE_VERTEXAI = True
from google import genai
client = genai . Client ()
# Delete content cache using name
# E.g cache_name = 'projects/111111111111/locations/.../cachedContents/1111111111111111111'
client . caches . delete ( name = cache_name )
print ( "Deleted Cache" , cache_name )
# Example response
# Deleted Cache projects/111111111111/locations/.../cachedContents/1111111111111111111
Go
Learn how to install or update the Go .
To learn more, see the
SDK reference documentation .
Set environment variables to use the Gen AI SDK with Vertex AI:
# Replace the `GOOGLE_CLOUD_PROJECT` and `GOOGLE_CLOUD_LOCATION` values
# with appropriate values for your project.
export GOOGLE_CLOUD_PROJECT = GOOGLE_CLOUD_PROJECT
export GOOGLE_CLOUD_LOCATION = global
export GOOGLE_GENAI_USE_VERTEXAI = True
import (
"context"
"fmt"
"io"
genai "google.golang.org/genai"
)
// deleteContentCache shows how to delete content cache .
func deleteContentCache ( w io . Writer , cacheName string ) error {
ctx := context . Background ()
client , err := genai . NewClient ( ctx , & genai . ClientConfig {
HTTPOptions : genai . HTTPOptions { APIVersion : "v1" },
})
if err != nil {
return fmt . Errorf ( "failed to create genai client: %w" , err )
}
_ , err = client . Caches . Delete ( ctx , cacheName , & genai . DeleteCachedContentConfig {})
if err != nil {
return fmt . Errorf ( "failed to delete content cache: %w" , err )
}
fmt . Fprintf ( w , "Deleted cache %q \n " , cacheName )
// Example response :
// Deleted cache "projects/111111111111/locations/us-central1/cachedContents/1111111111111111111"
return nil
}
Java
Learn how to install or update the Java .
To learn more, see the
SDK reference documentation .
Set environment variables to use the Gen AI SDK with Vertex AI:
# Replace the `GOOGLE_CLOUD_PROJECT` and `GOOGLE_CLOUD_LOCATION` values
# with appropriate values for your project.
export GOOGLE_CLOUD_PROJECT = GOOGLE_CLOUD_PROJECT
export GOOGLE_CLOUD_LOCATION = global
export GOOGLE_GENAI_USE_VERTEXAI = True
import com.google.genai.Client ;
import com.google.genai.types.HttpOptions ;
public class ContentCacheDelete {
public static void main ( String [] args ) {
// TODO ( developer ): Replace these variables before running the sample .
// E . g cacheName = "projects/111111111111/locations/global/cachedContents/1111111111111111111"
String cacheName = "your-cache-name" ;
contentCacheDelete ( cacheName );
}
// Deletes the cache using the specified cache name
public static void contentCacheDelete ( String cacheName ) {
// Initialize client that will be used to send requests . This client only needs to be created
// once , and can be reused for multiple requests .
try ( Client client =
Client . builder ()
. location ( "global" )
. vertexAI ( true )
. httpOptions ( HttpOptions . builder () . apiVersion ( "v1" ) . build ())
. build ()) {
client . caches . delete ( cacheName , null );
System . out . println ( "Deleted cache: " + cacheName );
// Example response
// Deleted cache : projects / 111111111111 / locations / global / cachedContents / 1111111111111111111
}
}
}
Node.js
Install
npm install @google/genai
To learn more, see the
SDK reference documentation .
Set environment variables to use the Gen AI SDK with Vertex AI:
# Replace the `GOOGLE_CLOUD_PROJECT` and `GOOGLE_CLOUD_LOCATION` values
# with appropriate values for your project.
export GOOGLE_CLOUD_PROJECT = GOOGLE_CLOUD_PROJECT
export GOOGLE_CLOUD_LOCATION = global
export GOOGLE_GENAI_USE_VERTEXAI = True
const { GoogleGenAI } = require ( '@google/genai' );
const GOOGLE_CLOUD_PROJECT = process . env . GOOGLE_CLOUD_PROJECT ;
const GOOGLE_CLOUD_LOCATION = process . env . GOOGLE_CLOUD_LOCATION || 'global' ;
async function deleteContentCache (
projectId = GOOGLE_CLOUD_PROJECT ,
location = GOOGLE_CLOUD_LOCATION ,
cacheName = 'example-cache'
) {
const client = new GoogleGenAI ({
vertexai : true ,
project : projectId ,
location : location ,
httpOptions : {
apiVersion : 'v1' ,
},
});
console . log ( 'Removing cache' );
const contentCache = await client . caches . delete ({
name : cacheName ,
});
console . log ( contentCache . text );
return contentCache ;
}
// Example response
// Deleted Cache projects / 111111111111 / locations / us - central1 / cachedContents / 1111111111111111111
REST
The following shows how to use REST to delete a context cache associated with
a Google Cloud project by sending a DELETE request to the publisher model endpoint.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your project ID .
LOCATION : The region where the request to
create the context cache
was processed and where the cached content is stored.
CACHE_ID : The ID of the context cache to delete. The context cache ID is returned when you
create the context cache. You can also find context cache IDs by listing the context caches for a Google Cloud project using. For more information, see
create a context cache and
list context caches .
HTTP method and URL:
DELETE https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /cachedContents/ CACHE_ID
To send your request, choose one of these options:
curl
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /cachedContents/ CACHE_ID "
PowerShell
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /cachedContents/ CACHE_ID " | Select-Object -Expand Content
If the delete operation succeeds, the response is empty:
Response
{ }
Example curl command
LOCATION = "us-central1"
PROJECT_ID = " PROJECT_ID "
CACHE_ID = " CACHE_ID "
curl \
-X DELETE \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT_ID } /locations/ ${ LOCATION } / ${ CACHE_ID }
What's next
Learn how to create a new context cache .
Learn how to get information about all context caches associated with a Google Cloud project .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
