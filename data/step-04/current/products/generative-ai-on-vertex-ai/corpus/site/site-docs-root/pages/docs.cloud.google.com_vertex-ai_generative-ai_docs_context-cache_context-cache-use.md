---
title: "Use a context cache \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-use
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-use
  title: "Use a context cache \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\
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
Use a context cache
Stay organized with collections
Save and categorize content based on your preferences.
You can use REST APIs or the Python SDK to reference content stored in a context
cache in a generative AI application. Before it can be used, you must first
create the context cache .
The context cache object you use in your code includes the following properties:
name - The context cache resource name. Its format is
projects/ PROJECT_NUMBER /locations/ LOCATION /cachedContents/ CACHE_ID .
When you create a context cache, you can find its resource name is in the
response. The project number is a unique identifier for your project. The
cache ID is an ID for your cache. When you specify a context cache in your
code, you must use the full context cache resource name. The following is an
example that shows how you specify a cached content resource name in a request
body:
"cached_content" : "projects/123456789012/locations/us-central1/123456789012345678"
model - The resource name for the model used to create the cache.
Its format is
projects/ PROJECT_NUMBER /locations/ LOCATION /publishers/ PUBLISHER_NAME /models/ MODEL_ID .
createTime - A Timestamp that specifies the create time of the context
cache.
updateTime - A Timestamp that specifies the most recent update time of a
context cache. After a context cache is created, and before it's updated, its
createTime and updateTime are the same.
expireTime - A Timestamp that specifies when a context cache expires. The
default expireTime is 60 minutes after the createTime . You can update the
cache with a new expiration time. For more information, see
Update the context cache .
After a cache expires, it's marked for deletion and you shouldn't assume that
it can be used or updated. If you need to use a context cache that expired,
you need to recreate it with an appropriate expiration time.
Context cache use restrictions
The following features can be specified when you create a context cache. You
shouldn't specify them again in your request:
The GenerativeModel.system_instructions property. This property is used to
specify instructions to the model before the model receives instructions from
a user. For more information, see
System instructions .
The GenerativeModel.tool_config property. The
tool_config property is
used to specify tools used by the Gemini model, such as a tool used by the
function calling feature.
The GenerativeModel.tools property. The GenerativeModel.tools property is
used to specify functions to create a function calling application. For more
information, see
Function calling .
Use a context cache sample
The following shows how to use a context cache. When you use a context cache,
you can't specify the following properties:
GenerativeModel.system_instructions
GenerativeModel.tool_config
GenerativeModel.tools
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
from google.genai.types import GenerateContentConfig , HttpOptions
client = genai . Client ( http_options = HttpOptions ( api_version = "v1" ))
# Use content cache to generate text response
# E.g cache_name = 'projects/.../locations/.../cachedContents/1111111111111111111'
response = client . models . generate_content (
model = "gemini-2.5-flash" ,
contents = "Summarize the pdfs" ,
config = GenerateContentConfig (
cached_content = cache_name ,
),
)
print ( response . text )
# Example response
# The Gemini family of multimodal models from Google DeepMind demonstrates remarkable capabilities across various
# modalities, including image, audio, video, and text....
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
// useContentCacheWithTxt shows how to use content cache to generate text content .
func useContentCacheWithTxt ( w io . Writer , cacheName string ) error {
ctx := context . Background ()
client , err := genai . NewClient ( ctx , & genai . ClientConfig {
HTTPOptions : genai . HTTPOptions { APIVersion : "v1" },
})
if err != nil {
return fmt . Errorf ( "failed to create genai client: %w" , err )
}
resp , err := client . Models . GenerateContent ( ctx ,
"gemini-2.5-flash" ,
genai . Text ( "Summarize the pdfs" ),
& genai . GenerateContentConfig {
CachedContent : cacheName ,
},
)
if err != nil {
return fmt . Errorf ( "failed to use content cache to generate content: %w" , err )
}
respText := resp . Text ()
fmt . Fprintln ( w , respText )
// Example response :
// The provided research paper introduces Gemini 1.5 Pro , a multimodal model capable of recalling
// and reasoning over information from very long contexts ( up to 10 million tokens ) . Key findings include :
//
// * ** Long Context Performance : **
// ...
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
import com.google.genai.types.GenerateContentConfig ;
import com.google.genai.types.GenerateContentResponse ;
import com.google.genai.types.HttpOptions ;
public class ContentCacheUseWithText {
public static void main ( String [] args ) {
// TODO ( developer ): Replace these variables before running the sample .
String modelId = "gemini-2.5-flash" ;
// E . g cacheName = "projects/111111111111/locations/global/cachedContents/1111111111111111111"
String cacheName = "your-cache-name" ;
contentCacheUseWithText ( modelId , cacheName );
}
// Shows how to generate text using cached content
public static String contentCacheUseWithText ( String modelId , String cacheName ) {
// Initialize client that will be used to send requests . This client only needs to be created
// once , and can be reused for multiple requests .
try ( Client client =
Client . builder ()
. location ( "global" )
. vertexAI ( true )
. httpOptions ( HttpOptions . builder () . apiVersion ( "v1" ) . build ())
. build ()) {
GenerateContentResponse response =
client . models . generateContent (
modelId ,
"Summarize the pdfs" ,
GenerateContentConfig . builder () . cachedContent ( cacheName ) . build ());
System . out . println ( response . text ());
// Example response
// The Gemini family of multimodal models from Google DeepMind demonstrates remarkable
// capabilities across various
// modalities , including image , audio , video , and text ....
return response . text ();
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
async function useContentCache (
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
const response = await client . models . generateContent ({
model : 'gemini-2.5-flash' ,
contents : 'Summarize the pdfs' ,
config : {
cachedContent : cacheName ,
},
});
console . log ( response . text );
return response . text ;
}
// Example response
// The Gemini family of multimodal models from Google DeepMind demonstrates remarkable capabilities across various
// modalities , including image , audio , video , and text ....
REST
You can use REST to use a context cache with a prompt by using the
Vertex AI API to send a POST request to the publisher model endpoint.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your project ID .
LOCATION : The region where the request to
create the context cache
was processed.
MIME_TYPE : The text prompt to submit to the model.
HTTP method and URL:
POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /publishers/google/models/gemini-2.0-flash-001:generateContent
Request JSON body:
{
"cachedContent": "projects/ PROJECT_NUMBER /locations/ LOCATION /cachedContents/ CACHE_ID ",
"contents": [
{"role":"user","parts":[{"text":" PROMPT_TEXT "}]}
],
"generationConfig": {
"maxOutputTokens": 8192,
"temperature": 1,
"topP": 0.95,
},
"safetySettings": [
{
"category": "HARM_CATEGORY_HATE_SPEECH",
"threshold": "BLOCK_MEDIUM_AND_ABOVE"
},
{
"category": "HARM_CATEGORY_DANGEROUS_CONTENT",
"threshold": "BLOCK_MEDIUM_AND_ABOVE"
},
{
"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
"threshold": "BLOCK_MEDIUM_AND_ABOVE"
},
{
"category": "HARM_CATEGORY_HARASSMENT",
"threshold": "BLOCK_MEDIUM_AND_ABOVE"
}
],
}
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
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /publishers/google/models/gemini-2.0-flash-001:generateContent"
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
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /publishers/google/models/gemini-2.0-flash-001:generateContent" | Select-Object -Expand Content
You should receive a JSON response similar to the following.
Response
{
"candidates": [
{
"content": {
"role": "model",
"parts": [
{
"text": " MODEL_RESPONSE "
}
]
},
"finishReason": "STOP",
"safetyRatings": [
{
"category": "HARM_CATEGORY_HATE_SPEECH",
"probability": "NEGLIGIBLE",
"probabilityScore": 0.21866937,
"severity": "HARM_SEVERITY_NEGLIGIBLE",
"severityScore": 0.19946389
},
{
"category": "HARM_CATEGORY_DANGEROUS_CONTENT",
"probability": "MEDIUM",
"probabilityScore": 0.6880493,
"severity": "HARM_SEVERITY_MEDIUM",
"severityScore": 0.43374163
},
{
"category": "HARM_CATEGORY_HARASSMENT",
"probability": "NEGLIGIBLE",
"probabilityScore": 0.4442634,
"severity": "HARM_SEVERITY_LOW",
"severityScore": 0.37903354
},
{
"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
"probability": "NEGLIGIBLE",
"probabilityScore": 0.10502681,
"severity": "HARM_SEVERITY_LOW",
"severityScore": 0.28170192
}
]
}
],
"usageMetadata": {
"promptTokenCount": 55927,
"candidatesTokenCount": 105,
"totalTokenCount": 56032
}
}
Example curl command
LOCATION = "us-central1"
MODEL_ID = "gemini-2.0-flash-001"
PROJECT_ID = "test-project"
curl -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
"https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT_ID } /locations/ ${ LOCATION } /publishers/google/models/ ${ MODEL_ID } :generateContent" -d \
'{
"cachedContent": "projects/${PROJECT_NUMBER}/locations/${LOCATION}/cachedContents/${CACHE_ID}",
"contents": [
{"role":"user","parts":[{"text":"What are the benefits of exercise?"}]}
],
"generationConfig": {
"maxOutputTokens": 8192,
"temperature": 1,
"topP": 0.95,
},
"safetySettings": [
{
"category": "HARM_CATEGORY_HATE_SPEECH",
"threshold": "BLOCK_MEDIUM_AND_ABOVE"
},
{
"category": "HARM_CATEGORY_DANGEROUS_CONTENT",
"threshold": "BLOCK_MEDIUM_AND_ABOVE"
},
{
"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
"threshold": "BLOCK_MEDIUM_AND_ABOVE"
},
{
"category": "HARM_CATEGORY_HARASSMENT",
"threshold": "BLOCK_MEDIUM_AND_ABOVE"
}
],
}'
Learn how to update the expiration time of a context cache .
Learn how to create a new context cache .
Learn how to get information about all context caches associated with a Google Cloud project .
Learn how to delete a context cache .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
