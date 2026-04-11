---
title: "Vertex AI quickstart \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal
  title: "Vertex AI quickstart \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\
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
Vertex AI quickstart
Stay organized with collections
Save and categorize content based on your preferences.
This quickstart shows you how to install the Google Gen AI SDK for your
language of choice and then make your first API request.
Requirements
The requirements for getting started with Vertex AI depend on your
Google Cloud workflow. You need to:
New Google Cloud users and express mode users :
Have a valid @gmail.com Google Account
Sign up for express mode
Have an express mode API key
Enable the Vertex AI API in the console
Existing users:
Have a valid @gmail.com Google Account and Google Cloud project
Enable billing
Enable the Vertex AI API in the console
Have set up a method of authentication, either:
Application default
credentials (ADC), or
An API key that's
bound to a service account
Note: AI Studio API keys are not supported in Vertex AI.
Choose your authentication method:
ADC
API key
Before you begin
If you don't already have an API key , you need to obtain one before
continuing. If you already have an API key, skip to the next step .
Google Cloud offers two types of API keys: express mode API keys,
and API keys that are bound to your service account. Which API key you should
obtain for this quickstart depends on whether or not you have an existing
Google Cloud project:
If you're new to Google Cloud or you use express mode : Create an
express mode API key .
If you're new to express mode, you need to
sign up first.
If you already have a Google Cloud project : Create a standard
Google Cloud API key
that's bound to a service account. Binding an API key to a service account
is possible only if it's enabled in the organization policy settings. If you
can't enable this setting, use ADC
instead.
If you have already configured ADC , skip to the next step .
To configure ADC, do the following:
Configure your project
Select a project, enable billing, enable the Vertex AI API, and install the
gcloud CLI:
Sign in to your Google Account. If you don't already have one,
sign up for a new account .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Vertex AI API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Vertex AI API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create local authentication credentials
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Set up required roles
If you're using a standard API key or ADC, your project also needs to be granted
the appropriate Identity and Access Management permissions for Vertex AI. If you're using
an express mode API key, you can skip to the next step .
To get the permissions that
you need to use Vertex AI,
ask your administrator to grant you the
Vertex AI User ( roles/aiplatform.user )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Install the SDK and set up your environment
On your local machine, click one of the following tabs to install the SDK for
your programming language.
Python
Install and update the Gen AI SDK for Python by running this command.
pip install --upgrade google-genai
Set environment variables:
# Replace the `GOOGLE_CLOUD_PROJECT_ID` and `GOOGLE_CLOUD_LOCATION` values
# with appropriate values for your project.
export GOOGLE_CLOUD_PROJECT = GOOGLE_CLOUD_PROJECT_ID
export GOOGLE_CLOUD_LOCATION = global
export GOOGLE_GENAI_USE_VERTEXAI = True
Go
Install and update the Gen AI SDK for Go by running this command.
go get google.golang.org/genai
Set environment variables:
# Replace the `GOOGLE_CLOUD_PROJECT_ID` and `GOOGLE_CLOUD_LOCATION` values
# with appropriate values for your project.
export GOOGLE_CLOUD_PROJECT = GOOGLE_CLOUD_PROJECT_ID
export GOOGLE_CLOUD_LOCATION = global
export GOOGLE_GENAI_USE_VERTEXAI = True
Node.js
Install and update the Gen AI SDK for Node.js by running this command.
npm install @google/genai
Set environment variables:
# Replace the `GOOGLE_CLOUD_PROJECT_ID` and `GOOGLE_CLOUD_LOCATION` values
# with appropriate values for your project.
export GOOGLE_CLOUD_PROJECT = GOOGLE_CLOUD_PROJECT_ID
export GOOGLE_CLOUD_LOCATION = global
export GOOGLE_GENAI_USE_VERTEXAI = True
Java
Install and update the Gen AI SDK for Java by running this command.
Maven
Add the following to your pom.xml :
<dependencies>
<dependency>
<groupId>com.google.genai</groupId>
<artifactId>google-genai</artifactId>
<version>0.7.0</version>
</dependency>
</dependencies>
Set environment variables:
# Replace the `GOOGLE_CLOUD_PROJECT_ID` and `GOOGLE_CLOUD_LOCATION` values
# with appropriate values for your project.
export GOOGLE_CLOUD_PROJECT = GOOGLE_CLOUD_PROJECT_ID
export GOOGLE_CLOUD_LOCATION = global
export GOOGLE_GENAI_USE_VERTEXAI = True
REST
Set environment variables:
GOOGLE_CLOUD_PROJECT = GOOGLE_CLOUD_PROJECT_ID
GOOGLE_CLOUD_LOCATION = "global"
API_ENDPOINT = "https://aiplatform.googleapis.com"
MODEL_ID = "gemini-2.5-flash"
GENERATE_CONTENT_API = "generateContent"
Replace GOOGLE_CLOUD_PROJECT_ID with your Google Cloud project ID.
Make your first request
Use the
generateContent
method to send a request to the Gemini API in Vertex AI:
Python
from google import genai
from google.genai.types import HttpOptions
client = genai . Client ( http_options = HttpOptions ( api_version = "v1" ))
response = client . models . generate_content (
model = "gemini-2.5-flash" ,
contents = "How does AI work?" ,
)
print ( response . text )
# Example response:
# Okay, let's break down how AI works. It's a broad field, so I'll focus on the ...
#
# Here's a simplified overview:
# ...
Go
import (
"context"
"fmt"
"io"
"google.golang.org/genai"
)
// generateWithText shows how to generate text using a text prompt .
func generateWithText ( w io . Writer ) error {
ctx := context . Background ()
client , err := genai . NewClient ( ctx , & genai . ClientConfig {
HTTPOptions : genai . HTTPOptions { APIVersion : "v1" },
})
if err != nil {
return fmt . Errorf ( "failed to create genai client: %w" , err )
}
resp , err := client . Models . GenerateContent ( ctx ,
"gemini-2.5-flash" ,
genai . Text ( "How does AI work?" ),
nil ,
)
if err != nil {
return fmt . Errorf ( "failed to generate content: %w" , err )
}
respText := resp . Text ()
fmt . Fprintln ( w , respText )
// Example response :
// That 's a great question! Understanding how AI works can feel like ...
// ...
// ** 1. The Foundation : Data and Algorithms **
// ...
return nil
}
Node.js
const { GoogleGenAI } = require ( '@google/genai' );
const GOOGLE_CLOUD_PROJECT = process . env . GOOGLE_CLOUD_PROJECT ;
const GOOGLE_CLOUD_LOCATION = process . env . GOOGLE_CLOUD_LOCATION || 'global' ;
async function generateContent (
projectId = GOOGLE_CLOUD_PROJECT ,
location = GOOGLE_CLOUD_LOCATION
) {
const client = new GoogleGenAI ({
vertexai : true ,
project : projectId ,
location : location ,
});
const response = await client . models . generateContent ({
model : 'gemini-3-flash-preview' ,
contents : 'How does AI work?' ,
});
console . log ( response . text );
return response . text ;
}
Java
import com.google.genai.Client ;
import com.google.genai.types.GenerateContentResponse ;
import com.google.genai.types.HttpOptions ;
public class TextGenerationWithText {
public static void main ( String [] args ) {
// TODO ( developer ): Replace these variables before running the sample .
String modelId = "gemini-2.5-flash" ;
generateContent ( modelId );
}
// Generates text with text input
public static String generateContent ( String modelId ) {
// Initialize client that will be used to send requests . This client only needs to be created
// once , and can be reused for multiple requests .
try ( Client client =
Client . builder ()
. location ( "global" )
. vertexAI ( true )
. httpOptions ( HttpOptions . builder () . apiVersion ( "v1" ) . build ())
. build ()) {
GenerateContentResponse response =
client . models . generateContent ( modelId , "How does AI work?" , null );
System . out . print ( response . text ());
// Example response :
// Okay , let 's break down how AI works. It' s a broad field , so I 'll focus on the ...
//
// Here 's a simplified overview:
// ...
return response . text ();
}
}
}
C#
using Google . GenAI ;
using Google . GenAI . Types ;
using System ;
using System . Threading . Tasks ;
public class TextGenWithTxt
{
public async Task<string> GenerateContent (
string projectId = "your-project-id" ,
string location = "global" ,
string model = "gemini-2.5-flash" )
{
await using var client = new Client (
project : projectId ,
location : location ,
vertexAI : true ,
httpOptions : new HttpOptions { ApiVersion = "v1" });
GenerateContentResponse response = await client . Models . GenerateContentAsync ( model : model , contents : "How does AI work?" );
string responseText = response . Candidates [ 0 ] . Content . Parts [ 0 ] . Text ;
Console . WriteLine ( responseText );
// Example response :
// AI , or Artificial Intelligence , at its core , is about creating machines that can perform ...
// Here 's a breakdown of how it generally works...
return responseText ;
}
}
REST
To send this prompt request, run the curl command from the command line or
include the REST call in your application.
curl \
-X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
" ${ API_ENDPOINT } /v1/projects/ ${ GOOGLE_CLOUD_PROJECT } /locations/ ${ GOOGLE_CLOUD_LOCATION } /publishers/google/models/ ${ MODEL_ID } : ${ GENERATE_CONTENT_API } " -d \
$'{
"contents": {
"role": "user",
"parts": {
"text": "Explain how AI works in a few words"
}
}
}'
The model returns a response. Note that the response is generated in sections
with each section separately evaluated for safety.
When you use a regional API endpoint (for example,
us-central1 ), the region from the endpoint URL determines where
the request is processed. Any conflicting location in the resource path is
ignored.
Generate images
Note: Image generation with Gemini is in preview.
If you require production-ready image generation features, use Imagen.
For more information, see the Imagen on Vertex AI quickstart .
Gemini can generate and process images conversationally. You can prompt
Gemini with text, images, or a combination of both to achieve various
image-related tasks, such as image generation and editing. The following code
demonstrates how to generate an image based on a descriptive prompt:
You must include responseModalities: ["TEXT", "IMAGE"] in your
configuration. Image-only output is not supported with these models.
Python
import os
from io import BytesIO
from google import genai
from google.genai.types import GenerateContentConfig , Modality
from PIL import Image
client = genai . Client ()
response = client . models . generate_content (
model = "gemini-3-pro-image-preview" ,
contents = ( "Generate an image of the Eiffel tower with fireworks in the background." ),
config = GenerateContentConfig (
response_modalities = [ Modality . TEXT , Modality . IMAGE ],
),
)
for part in response . candidates [ 0 ] . content . parts :
if part . text :
print ( part . text )
elif part . inline_data :
image = Image . open ( BytesIO (( part . inline_data . data )))
# Ensure the output directory exists
output_dir = "output_folder"
os . makedirs ( output_dir , exist_ok = True )
image . save ( os . path . join ( output_dir , "example-image-eiffel-tower.png" ))
Go
import (
"context"
"fmt"
"io"
"os"
"google.golang.org/genai"
)
// generateMMFlashWithText demonstrates how to generate both text and image outputs .
func generateMMFlashWithText ( w io . Writer ) error {
ctx := context . Background ()
client , err := genai . NewClient ( ctx , & genai . ClientConfig {
HTTPOptions : genai . HTTPOptions { APIVersion : "v1" },
})
if err != nil {
return fmt . Errorf ( "failed to create genai client: %w" , err )
}
modelName := "gemini-2.5-flash-image"
contents := [] * genai . Content {
{
Parts : [] * genai . Part {
{ Text : "Generate an image of the Eiffel tower with fireworks in the background." },
},
Role : genai . RoleUser ,
},
}
resp , err := client . Models . GenerateContent ( ctx ,
modelName ,
contents ,
& genai . GenerateContentConfig {
ResponseModalities : [] string {
string ( genai . ModalityText ),
string ( genai . ModalityImage ),
},
CandidateCount : int32 ( 1 ),
SafetySettings : [] * genai . SafetySetting {
{ Method : genai . HarmBlockMethodProbability },
{ Category : genai . HarmCategoryDangerousContent },
{ Threshold : genai . HarmBlockThresholdBlockMediumAndAbove },
},
},
)
if err != nil {
return fmt . Errorf ( "failed to generate content: %w" , err )
}
if len ( resp . Candidates ) == 0 || resp . Candidates [ 0 ] . Content == nil {
return fmt . Errorf ( "no candidates returned" )
}
var fileName string
for _ , part := range resp . Candidates [ 0 ] . Content . Parts {
if part . Text != "" {
fmt . Fprintln ( w , part . Text )
} else if part . InlineData != nil {
fileName = "example-image-eiffel-tower.png"
if err := os . WriteFile ( fileName , part . InlineData . Data , 0o644 ); err != nil {
return fmt . Errorf ( "failed to save image: %w" , err )
}
}
}
fmt . Fprintln ( w , fileName )
// Example response :
// I will generate an image of the Eiffel Tower at night , with a vibrant display of
// colorful fireworks exploding in the dark sky behind it .
// ....
return nil
}
Node.js
const fs = require ( 'fs' );
const { GoogleGenAI , Modality } = require ( '@google/genai' );
const GOOGLE_CLOUD_PROJECT = process . env . GOOGLE_CLOUD_PROJECT ;
const GOOGLE_CLOUD_LOCATION =
process . env . GOOGLE_CLOUD_LOCATION || 'us-central1' ;
async function generateImage (
projectId = GOOGLE_CLOUD_PROJECT ,
location = GOOGLE_CLOUD_LOCATION
) {
const client = new GoogleGenAI ({
vertexai : true ,
project : projectId ,
location : location ,
});
const response = await client . models . generateContentStream ({
model : 'gemini-2.5-flash-image' ,
contents :
'Generate an image of the Eiffel tower with fireworks in the background.' ,
config : {
responseModalities : [ Modality . TEXT , Modality . IMAGE ],
},
});
const generatedFileNames = [];
let imageIndex = 0 ;
for await ( const chunk of response ) {
const text = chunk . text ;
const data = chunk . data ;
if ( text ) {
console . debug ( text );
} else if ( data ) {
const outputDir = 'output-folder' ;
if ( ! fs . existsSync ( outputDir )) {
fs . mkdirSync ( outputDir , { recursive : true });
}
const fileName = ` $ { outputDir } / generate_content_streaming_image_ $ { imageIndex ++ } . png ` ;
console . debug ( ` Writing response image to file : $ { fileName } . ` );
try {
fs . writeFileSync ( fileName , data );
generatedFileNames . push ( fileName );
} catch ( error ) {
console . error ( ` Failed to write image file $ { fileName }: ` , error );
}
}
}
// Example response :
// I will generate an image of the Eiffel Tower at night , with a vibrant display of
// colorful fireworks exploding in the dark sky behind it . The tower will be
// illuminated , standing tall as the focal point of the scene , with the bursts of
// light from the fireworks creating a festive atmosphere .
return generatedFileNames ;
}
Java
import com.google.genai.Client ;
import com.google.genai.types.Blob ;
import com.google.genai.types.Candidate ;
import com.google.genai.types.Content ;
import com.google.genai.types.GenerateContentConfig ;
import com.google.genai.types.GenerateContentResponse ;
import com.google.genai.types.Part ;
import com.google.genai.types.SafetySetting ;
import java.awt.image.BufferedImage ;
import java.io.ByteArrayInputStream ;
import java.io.File ;
import java.io.IOException ;
import java.util.ArrayList ;
import java.util.List ;
import javax.imageio.ImageIO ;
public class ImageGenMmFlashWithText {
public static void main ( String [] args ) throws IOException {
// TODO ( developer ): Replace these variables before running the sample .
String modelId = "gemini-2.5-flash-image" ;
String outputFile = "resources/output/example-image-eiffel-tower.png" ;
generateContent ( modelId , outputFile );
}
// Generates an image with text input
public static void generateContent ( String modelId , String outputFile ) throws IOException {
// Client Initialization . Once created , it can be reused for multiple requests .
try ( Client client = Client . builder () . location ( "global" ) . vertexAI ( true ) . build ()) {
GenerateContentConfig contentConfig =
GenerateContentConfig . builder ()
. responseModalities ( "TEXT" , "IMAGE" )
. candidateCount ( 1 )
. safetySettings (
SafetySetting . builder ()
. method ( "PROBABILITY" )
. category ( "HARM_CATEGORY_DANGEROUS_CONTENT" )
. threshold ( "BLOCK_MEDIUM_AND_ABOVE" )
. build ())
. build ();
GenerateContentResponse response =
client . models . generateContent (
modelId ,
"Generate an image of the Eiffel tower with fireworks in the background." ,
contentConfig );
// Get parts of the response
List<Part> parts =
response
. candidates ()
. flatMap ( candidates - > candidates . stream () . findFirst ())
. flatMap ( Candidate :: content )
. flatMap ( Content :: parts )
. orElse ( new ArrayList <> ());
// For each part print text if present , otherwise read image data if present and
// write it to the output file
for ( Part part : parts ) {
if ( part . text () . isPresent ()) {
System . out . println ( part . text () . get ());
} else if ( part . inlineData () . flatMap ( Blob :: data ) . isPresent ()) {
BufferedImage image =
ImageIO . read ( new ByteArrayInputStream ( part . inlineData () . flatMap ( Blob :: data ) . get ()));
ImageIO . write ( image , "png" , new File ( outputFile ));
}
}
System . out . println ( "Content written to: " + outputFile );
// Example response :
// Here is the Eiffel Tower with fireworks in the background ...
//
// Content written to : resources / output / example - image - eiffel - tower . png
}
}
}
Image understanding
Gemini can understand images as well. The following code uses the image
generated in the previous section and uses a different model to infer
information about the image:
Python
from google import genai
from google.genai.types import HttpOptions , Part
client = genai . Client ( http_options = HttpOptions ( api_version = "v1" ))
response = client . models . generate_content (
model = "gemini-2.5-flash" ,
contents = [
"What is shown in this image?" ,
Part . from_uri (
file_uri = "gs://cloud-samples-data/generative-ai/image/scones.jpg" ,
mime_type = "image/jpeg" ,
),
],
)
print ( response . text )
# Example response:
# The image shows a flat lay of blueberry scones arranged on parchment paper. There are ...
Go
import (
"context"
"fmt"
"io"
genai "google.golang.org/genai"
)
// generateWithTextImage shows how to generate text using both text and image input
func generateWithTextImage ( w io . Writer ) error {
ctx := context . Background ()
client , err := genai . NewClient ( ctx , & genai . ClientConfig {
HTTPOptions : genai . HTTPOptions { APIVersion : "v1" },
})
if err != nil {
return fmt . Errorf ( "failed to create genai client: %w" , err )
}
modelName := "gemini-2.5-flash"
contents := [] * genai . Content {
{ Parts : [] * genai . Part {
{ Text : "What is shown in this image?" },
{ FileData : & genai . FileData {
// Image source : https : // storage . googleapis . com / cloud - samples - data / generative - ai / image / scones . jpg
FileURI : "gs://cloud-samples-data/generative-ai/image/scones.jpg" ,
MIMEType : "image/jpeg" ,
}},
},
Role : genai . RoleUser },
}
resp , err := client . Models . GenerateContent ( ctx , modelName , contents , nil )
if err != nil {
return fmt . Errorf ( "failed to generate content: %w" , err )
}
respText := resp . Text ()
fmt . Fprintln ( w , respText )
// Example response :
// The image shows an overhead shot of a rustic , artistic arrangement on a surface that ...
return nil
}
Node.js
const { GoogleGenAI } = require ( '@google/genai' );
const GOOGLE_CLOUD_PROJECT = process . env . GOOGLE_CLOUD_PROJECT ;
const GOOGLE_CLOUD_LOCATION = process . env . GOOGLE_CLOUD_LOCATION || 'global' ;
async function generateContent (
projectId = GOOGLE_CLOUD_PROJECT ,
location = GOOGLE_CLOUD_LOCATION
) {
const client = new GoogleGenAI ({
vertexai : true ,
project : projectId ,
location : location ,
});
const image = {
fileData : {
fileUri : 'gs://cloud-samples-data/generative-ai/image/scones.jpg' ,
mimeType : 'image/jpeg' ,
},
};
const response = await client . models . generateContent ({
model : 'gemini-2.5-flash' ,
contents : [ image , 'What is shown in this image?' ],
});
console . log ( response . text );
return response . text ;
}
Java
import com.google.genai.Client ;
import com.google.genai.types.Content ;
import com.google.genai.types.GenerateContentResponse ;
import com.google.genai.types.HttpOptions ;
import com.google.genai.types.Part ;
public class TextGenerationWithTextAndImage {
public static void main ( String [] args ) {
// TODO ( developer ): Replace these variables before running the sample .
String modelId = "gemini-2.5-flash" ;
generateContent ( modelId );
}
// Generates text with text and image input
public static String generateContent ( String modelId ) {
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
Content . fromParts (
Part . fromText ( "What is shown in this image?" ),
Part . fromUri (
"gs://cloud-samples-data/generative-ai/image/scones.jpg" , "image/jpeg" )),
null );
System . out . print ( response . text ());
// Example response :
// The image shows a flat lay of blueberry scones arranged on parchment paper . There are ...
return response . text ();
}
}
}
Code execution
The Gemini API in Vertex AI code execution feature enables the model to generate and
run Python code and learn iteratively from the results until it arrives at a
final output. Vertex AI provides code execution as a tool, similar to
function calling. You can use this code execution capability to build
applications that benefit from code-based reasoning and that produce text
output. For example:
Python
from google import genai
from google.genai.types import (
HttpOptions ,
Tool ,
ToolCodeExecution ,
GenerateContentConfig ,
)
client = genai . Client ( http_options = HttpOptions ( api_version = "v1" ))
model_id = "gemini-2.5-flash"
code_execution_tool = Tool ( code_execution = ToolCodeExecution ())
response = client . models . generate_content (
model = model_id ,
contents = "Calculate 20th fibonacci number. Then find the nearest palindrome to it." ,
config = GenerateContentConfig (
tools = [ code_execution_tool ],
temperature = 0 ,
),
)
print ( "# Code:" )
print ( response . executable_code )
print ( "# Outcome:" )
print ( response . code_execution_result )
# Example response:
# # Code:
# def fibonacci(n):
# if n <= 0:
# return 0
# elif n == 1:
# return 1
# else:
# a, b = 0, 1
# for _ in range(2, n + 1):
# a, b = b, a + b
# return b
#
# fib_20 = fibonacci(20)
# print(f'{fib_20=}')
#
# # Outcome:
# fib_20=6765
Go
import (
"context"
"fmt"
"io"
genai "google.golang.org/genai"
)
// generateWithCodeExec shows how to generate text using the code execution tool .
func generateWithCodeExec ( w io . Writer ) error {
ctx := context . Background ()
client , err := genai . NewClient ( ctx , & genai . ClientConfig {
HTTPOptions : genai . HTTPOptions { APIVersion : "v1" },
})
if err != nil {
return fmt . Errorf ( "failed to create genai client: %w" , err )
}
prompt := "Calculate 20th fibonacci number. Then find the nearest palindrome to it."
contents := [] * genai . Content {
{ Parts : [] * genai . Part {
{ Text : prompt },
},
Role : genai . RoleUser },
}
config := & genai . GenerateContentConfig {
Tools : [] * genai . Tool {
{ CodeExecution : & genai . ToolCodeExecution {}},
},
Temperature : genai . Ptr ( float32 ( 0.0 )),
}
modelName := "gemini-2.5-flash"
resp , err := client . Models . GenerateContent ( ctx , modelName , contents , config )
if err != nil {
return fmt . Errorf ( "failed to generate content: %w" , err )
}
for _ , p := range resp . Candidates [ 0 ] . Content . Parts {
if p . Text != "" {
fmt . Fprintf ( w , "Gemini: %s " , p . Text )
}
if p . ExecutableCode != nil {
fmt . Fprintf ( w , "Language: %s \n %s \n " , p . ExecutableCode . Language , p . ExecutableCode . Code )
}
if p . CodeExecutionResult != nil {
fmt . Fprintf ( w , "Outcome: %s \n %s \n " , p . CodeExecutionResult . Outcome , p . CodeExecutionResult . Output )
}
}
// Example response :
// Gemini : Okay , I can do that . First , I 'll calculate the 20th Fibonacci number. Then, I need ...
//
// Language : PYTHON
//
// def fibonacci ( n ):
// ...
//
// fib_20 = fibonacci ( 20 )
// print ( f ' { fib_20 =} ' )
//
// Outcome : OUTCOME_OK
// fib_20 = 6765
//
// Now that I have the 20 th Fibonacci number ( 6765 ), I need to find the nearest palindrome . ...
// ...
return nil
}
Node.js
const { GoogleGenAI } = require ( '@google/genai' );
const GOOGLE_CLOUD_PROJECT = process . env . GOOGLE_CLOUD_PROJECT ;
const GOOGLE_CLOUD_LOCATION = process . env . GOOGLE_CLOUD_LOCATION || 'global' ;
async function generateAndExecuteCode (
projectId = GOOGLE_CLOUD_PROJECT ,
location = GOOGLE_CLOUD_LOCATION
) {
const client = new GoogleGenAI ({
vertexai : true ,
project : projectId ,
location : location ,
});
const response = await client . models . generateContent ({
model : 'gemini-2.5-flash' ,
contents :
'Calculate 20th fibonacci number. Then find the nearest palindrome to it.' ,
config : {
tools : [{ codeExecution : {}}],
temperature : 0 ,
},
});
console . debug ( response . executableCode );
// Example response :
// Code :
// function fibonacci ( n ) {
// if ( n < = 0 ) {
// return 0 ;
// } else if ( n === 1 ) {
// return 1 ;
// } else {
// let a = 0 , b = 1 ;
// for ( let i = 2 ; i < = n ; i ++ ) {
// [ a , b ] = [ b , a + b ];
// }
// return b ;
// }
// }
//
// const fib20 = fibonacci ( 20 );
// console . log ( ` fib20 =$ { fib20 } ` );
console . debug ( response . codeExecutionResult );
// Outcome :
// fib20 = 6765
return response . codeExecutionResult ;
}
Java
import com.google.genai.Client ;
import com.google.genai.types.GenerateContentConfig ;
import com.google.genai.types.GenerateContentResponse ;
import com.google.genai.types.HttpOptions ;
import com.google.genai.types.Tool ;
import com.google.genai.types.ToolCodeExecution ;
public class ToolsCodeExecWithText {
public static void main ( String [] args ) {
// TODO ( developer ): Replace these variables before running the sample .
String modelId = "gemini-2.5-flash" ;
generateContent ( modelId );
}
// Generates text using the Code Execution tool
public static String generateContent ( String modelId ) {
// Initialize client that will be used to send requests . This client only needs to be created
// once , and can be reused for multiple requests .
try ( Client client =
Client . builder ()
. location ( "global" )
. vertexAI ( true )
. httpOptions ( HttpOptions . builder () . apiVersion ( "v1" ) . build ())
. build ()) {
// Create a GenerateContentConfig and set codeExecution tool
GenerateContentConfig contentConfig =
GenerateContentConfig . builder ()
. tools ( Tool . builder () . codeExecution ( ToolCodeExecution . builder () . build ()) . build ())
. temperature ( 0.0 F )
. build ();
GenerateContentResponse response =
client . models . generateContent (
modelId ,
"Calculate 20th fibonacci number. Then find the nearest palindrome to it." ,
contentConfig );
System . out . println ( "Code: \n " + response . executableCode ());
System . out . println ( "Outcome: \n " + response . codeExecutionResult ());
// Example response
// Code :
// def fibonacci ( n ):
// if n < = 0 :
// return 0
// elif n == 1 :
// return 1
// else :
// a , b = 1 , 1
// for _ in range ( 2 , n ):
// a , b = b , a + b
// return b
//
// fib_20 = fibonacci ( 20 )
// print ( f ' { fib_20 =} ' )
//
// Outcome :
// fib_20 = 6765
return response . executableCode ();
}
}
}
For more examples of code execution, check out the code execution
documentation .
What's next
Now that you made your first API request, you might want to explore the
following guides that show how to set up more advanced Vertex AI
features for production code:
Guide
Google Gen AI libraries
Download and install the latest libraries for the Gemini API.
Guide
Access Gemini models using OpenAI libraries
Learn how to use OpenAI libraries to implement and call Gemini models in Vertex AI.
Guide
Get started with Gemini 3
Learn about Gemini 3, our most intelligent model family to date, built on a foundation of state-of-the-art reasoning.
Overview
Explore Google models
Explore the latest Google models supported in Vertex AI, including Gemini, Imagen, Veo, and Gemma.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
