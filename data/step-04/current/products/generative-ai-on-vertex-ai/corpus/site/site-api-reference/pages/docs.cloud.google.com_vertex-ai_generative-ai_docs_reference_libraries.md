---
title: "Vertex AI client libraries \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/libraries
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/libraries
  title: "Vertex AI client libraries \_|\_ Generative AI on Vertex AI \_|\_ Google\
    \ Cloud Documentation"
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
API reference
Send feedback
Vertex AI client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Vertex AI API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Install the client library
C#
Install-Package Google.Cloud.AIPlatform.V1 -Pre
For more information, see Setting Up a C# Development Environment .
Go
go get cloud.google.com/go/vertexai/genai
For more information, see Setting Up a Go Development Environment .
Java
If you are using Maven with BOM, add the following in your pom.xml:
<dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>libraries-bom</artifactId>
<version>26.34.0</version>
<type>pom</type>
<scope>import</scope>
</dependency>
</dependencies>
</dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-vertexai</artifactId>
</dependency>
</dependencies>
If you are using Maven without BOM, add the following to your pom.xml:
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-vertexai</artifactId>
<version>1.1.0</version>
</dependency>
If you are using Gradle without BOM, add the following to your build.gradle:
implementation 'com.google.cloud:google-cloud-vertexai:1.1.0'
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/vertexai
For more information, see Setting Up a Node.js Development Environment .
Python
pip install google-cloud-aiplatform
For more information, see Setting Up a Python Development Environment .
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
using Google.Api.Gax.Grpc ;
using Google.Cloud.AIPlatform.V1 ;
using System.Text ;
using System.Threading.Tasks ;
public class GeminiQuickstart
{
public async Task<string> GenerateContent (
string projectId = "your-project-id" ,
string location = "us-central1" ,
string publisher = "google" ,
string model = "gemini-2.0-flash-001"
)
{
// Create client
var predictionServiceClient = new PredictionServiceClientBuilder
{
Endpoint = $"{location}-aiplatform.googleapis.com"
}. Build ();
// Initialize content request
var generateContentRequest = new GenerateContentRequest
{
Model = $"projects/{projectId}/locations/{location}/publishers/{publisher}/models/{model}" ,
GenerationConfig = new GenerationConfig
{
Temperature = 0.4f ,
TopP = 1 ,
TopK = 32 ,
MaxOutputTokens = 2048
},
Contents =
{
new Content
{
Role = "USER" ,
Parts =
{
new Part { Text = "What's in this photo?" },
new Part { FileData = new () { MimeType = "image/png" , FileUri = "gs://generativeai-downloads/images/scones.jpg" } }
}
}
}
};
// Make the request, returning a streaming response
using PredictionServiceClient.StreamGenerateContentStream response = predictionServiceClient . StreamGenerateContent ( generateContentRequest );
StringBuilder fullText = new ();
// Read streaming responses from server until complete
AsyncResponseStream<GenerateContentResponse> responseStream = response . GetResponseStream ();
await foreach ( GenerateContentResponse responseItem in responseStream )
{
fullText . Append ( responseItem . Candidates [ 0 ]. Content . Parts [ 0 ]. Text );
}
return fullText . ToString ();
}
}
Go
import (
"context"
"encoding/json"
"fmt"
"io"
"cloud.google.com/go/vertexai/genai"
)
func tryGemini ( w io . Writer , projectID string , location string , modelName string ) error {
// location := "us-central1"
// modelName := "gemini-2.0-flash-001"
ctx := context . Background ()
client , err := genai . NewClient ( ctx , projectID , location )
if err != nil {
return fmt . Errorf ( "error creating client: %w" , err )
}
gemini := client . GenerativeModel ( modelName )
img := genai . FileData {
MIMEType : "image/jpeg" ,
FileURI : "gs://generativeai-downloads/images/scones.jpg" ,
}
prompt := genai . Text ( "What is in this image?" )
resp , err := gemini . GenerateContent ( ctx , img , prompt )
if err != nil {
return fmt . Errorf ( "error generating content: %w" , err )
}
rb , err := json . MarshalIndent ( resp , "" , " " )
if err != nil {
return fmt . Errorf ( "json.MarshalIndent: %w" , err )
}
fmt . Fprintln ( w , string ( rb ))
return nil
}
Java
import com.google.cloud.vertexai. VertexAI ;
import com.google.cloud.vertexai.api. GenerateContentResponse ;
import com.google.cloud.vertexai.generativeai. ContentMaker ;
import com.google.cloud.vertexai.generativeai. GenerativeModel ;
import com.google.cloud.vertexai.generativeai. PartMaker ;
import java.io.IOException ;
public class Quickstart {
public static void main ( String [] args ) throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-google-cloud-project-id" ;
String location = "us-central1" ;
String modelName = "gemini-2.5-flash" ;
String output = quickstart ( projectId , location , modelName );
System . out . println ( output );
}
// Analyzes the provided Multimodal input.
public static String quickstart ( String projectId , String location , String modelName )
throws IOException {
// Initialize client that will be used to send requests. This client only needs
// to be created once, and can be reused for multiple requests.
try ( VertexAI vertexAI = new VertexAI ( projectId , location )) {
String imageUri = "gs://generativeai-downloads/images/scones.jpg" ;
GenerativeModel model = new GenerativeModel ( modelName , vertexAI );
GenerateContentResponse response = model . generateContent ( ContentMaker . fromMultiModalData (
PartMaker . fromMimeTypeAndData ( "image/png" , imageUri ),
"What's in this photo"
));
return response . toString ();
}
}
}
Node.js
const { VertexAI } = require ( ' @google-cloud/vertexai ' );
/**
* TODO(developer): Update these variables before running the sample.
*/
async function createNonStreamingMultipartContent (
projectId = 'PROJECT_ID' ,
location = 'us-central1' ,
model = 'gemini-2.0-flash-001' ,
image = 'gs://generativeai-downloads/images/scones.jpg' ,
mimeType = 'image/jpeg'
) {
// Initialize Vertex with your Cloud project and location
const vertexAI = new VertexAI ({ project : projectId , location : location });
// Instantiate the model
const generativeVisionModel = vertexAI . getGenerativeModel ({
model : model ,
});
// For images, the SDK supports both Google Cloud Storage URI and base64 strings
const filePart = {
fileData : {
fileUri : image ,
mimeType : mimeType ,
},
};
const textPart = {
text : 'what is shown in this image?' ,
};
const request = {
contents : [{ role : 'user' , parts : [ filePart , textPart ]}],
};
console . log ( 'Prompt Text:' );
console . log ( request . contents [ 0 ]. parts [ 1 ]. text );
console . log ( 'Non-Streaming Response Text:' );
// Generate a response
const response = await generativeVisionModel . generateContent ( request );
// Select the text from the response
const fullTextResponse =
response . response . candidates [ 0 ]. content . parts [ 0 ]. text ;
console . log ( fullTextResponse );
}
Python
import vertexai
from vertexai.preview.prompts import Prompt
# Initialize vertexai
vertexai . init ( project = PROJECT_ID , location = "us-central1" )
variables = [
{ "animal" : "Eagles" , "activity" : "eat berries" },
{ "animal" : "Coyotes" , "activity" : "jump" },
{ "animal" : "Squirrels" , "activity" : "fly" }
]
# define prompt template
prompt = Prompt (
prompt_data = "Do {animal} {activity} ?" ,
model_name = "gemini-2.0-flash-001" ,
variables = variables ,
system_instruction = "You are a helpful zoologist"
# generation_config=generation_config, # Optional
# safety_settings=safety_settings, # Optional
)
# Generates content using the assembled prompt.
responses = []
for variable_set in prompt . variables :
response = prompt . generate_content (
contents = prompt . assemble_contents ( ** variable_set )
)
responses . append ( response )
for response in responses :
print ( response . text , end = "" )
# Example response
# Assembled prompt replacing: 1 instances of variable animal, 1 instances of variable activity
# Eagles are primarily carnivorous. While they might *accidentally* ingest a berry......
Additional resources
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
google-cloud-vertex-ai on Stack Overflow
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
google-cloud-vertex-ai on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-cloud-vertex-ai on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
google-cloud-vertex-ai on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
google-cloud-vertex-ai on Stack Overflow
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
