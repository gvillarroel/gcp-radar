---
title: "Get text embeddings \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-text-embeddings
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-text-embeddings
  title: "Get text embeddings \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\
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
Get text embeddings
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to create a text embedding using the
Vertex AI Text embeddings
API .
Vertex AI text embeddings API uses dense vector representations:
gemini-embedding-001 , for example, uses 3072-dimensional
vectors. Dense vector embedding models use deep-learning methods similar to the
ones used by large language models. Unlike sparse vectors, which tend to
directly map words to numbers, dense vectors are designed to better represent
the meaning of a piece of text. The benefit of using dense vector embeddings in
generative AI is that instead of searching for direct word or syntax matches,
you can better search for passages that align to the meaning of the query, even
if the passages don't use the same language.
The vectors are normalized, so you can use cosine similarity, dot product, or
Euclidean distance to provide the same similarity rankings.
To learn more about embeddings, see the embeddings APIs overview .
To learn about text embedding models, see Text embeddings .
For information about which languages each embeddings model supports, see
Supported text
languages .
To see an example of getting text embeddings,
run the "Getting Started with Text Embeddings + Vertex AI Vector Search" notebook in one of the following
environments:
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
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
Enable the Vertex AI API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
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
Enable the Vertex AI API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Choose a task type for your embeddings job.
API limits
For each request, you're limited to 250 input texts. The API has a maximum input
token limit of 20,000. Inputs exceeding this limit result in a 400 error. Each
individual input text is further limited to 2048 tokens; any excess is silently
truncated. You can also disable silent truncation by setting autoTruncate to
false .
For more information, see Text embedding
limits .
Get text embeddings for a snippet of text
You can get text embeddings for a snippet of text by using the Vertex AI API or
the Vertex AI SDK for Python.
Choose an embedding dimension
All models produce a full-length embedding vector by default. For
gemini-embedding-001 , this vector has 3072 dimensions, and other
models produce 768-dimensional vectors. However, by using the
output_dimensionality parameter, users can control the size of the output
embedding vector. Selecting a smaller output dimensionality can save storage
space and increase computational efficiency for downstream applications, while
sacrificing little in terms of quality.
The following examples use the gemini-embedding-001 model.
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
from google.genai.types import EmbedContentConfig
client = genai . Client ()
response = client . models . embed_content (
model = "gemini-embedding-001" ,
contents = [
"How do I get a driver's license/learner's permit?" ,
"How long is my driver's license valid for?" ,
"Driver's knowledge test study guide" ,
],
config = EmbedContentConfig (
task_type = "RETRIEVAL_DOCUMENT" , # Optional
output_dimensionality = 3072 , # Optional
title = "Driver's License" , # Optional
),
)
print ( response )
# Example response:
# embeddings=[ContentEmbedding(values=[-0.06302902102470398, 0.00928034819662571, 0.014716853387653828, -0.028747491538524628, ... ],
# statistics=ContentEmbeddingStatistics(truncated=False, token_count=13.0))]
# metadata=EmbedContentMetadata(billable_character_count=112)
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
"google.golang.org/genai"
)
// generateEmbedContentWithText shows how to embed content with text .
func generateEmbedContentWithText ( w io . Writer ) error {
ctx := context . Background ()
client , err := genai . NewClient ( ctx , & genai . ClientConfig {
HTTPOptions : genai . HTTPOptions { APIVersion : "v1" },
})
if err != nil {
return fmt . Errorf ( "failed to create genai client: %w" , err )
}
outputDimensionality := int32 ( 3072 )
config := & genai . EmbedContentConfig {
TaskType : "RETRIEVAL_DOCUMENT" , // optional
Title : "Driver's License" , // optional
OutputDimensionality : & outputDimensionality , // optional
}
contents := [] * genai . Content {
{
Parts : [] * genai . Part {
{
Text : "How do I get a driver's license/learner's permit?" ,
},
{
Text : "How long is my driver's license valid for?" ,
},
{
Text : "Driver's knowledge test study guide" ,
},
},
Role : genai . RoleUser ,
},
}
modelName := "gemini-embedding-001"
resp , err := client . Models . EmbedContent ( ctx , modelName , contents , config )
if err != nil {
return fmt . Errorf ( "failed to generate content: %w" , err )
}
fmt . Fprintln ( w , resp )
// Example response :
// embeddings = [ ContentEmbedding ( values = [ - 0.06302902102470398 , 0.00928034819662571 , 0.014716853387653828 , - 0.028747491538524628 , ... ],
// statistics = ContentEmbeddingStatistics ( truncated = False , token_count = 13.0 ))]
// metadata = EmbedContentMetadata ( billable_character_count = 112 )
return nil
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
async function generateEmbeddingsForRetrieval (
projectId = GOOGLE_CLOUD_PROJECT
) {
const client = new GoogleGenAI ({
vertexai : true ,
project : projectId ,
});
const prompt = [
"How do I get a driver's license/learner's permit?" ,
"How long is my driver's license valid for?" ,
"Driver's knowledge test study guide" ,
];
const response = await client . models . embedContent ({
model : 'gemini-embedding-001' ,
contents : prompt ,
config : {
taskType : 'RETRIEVAL_DOCUMENT' , // Optional
outputDimensionality : 3072 , // Optional
title : "Driver's License" , // Optional
},
});
console . log ( response );
// Example response :
// embeddings = [ ContentEmbedding ( values = [ - 0.06302902102470398 , 0.00928034819662571 , 0.014716853387653828 , - 0.028747491538524628 , ... ],
// statistics = ContentEmbeddingStatistics ( truncated = False , token_count = 13.0 ))]
// metadata = EmbedContentMetadata ( billable_character_count = 112 )
return response ;
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
import com.google.genai.types.EmbedContentConfig ;
import com.google.genai.types.EmbedContentResponse ;
import java.util.List ;
public class EmbeddingsDocRetrievalWithTxt {
public static void main ( String [] args ) {
// TODO ( developer ): Replace these variables before running the sample .
String modelId = "gemini-embedding-001" ;
embedContent ( modelId );
}
// Shows how to embed content with text .
public static EmbedContentResponse embedContent ( String modelId ) {
// Client Initialization . Once created , it can be reused for multiple requests .
try ( Client client = Client . builder () . location ( "global" ) . vertexAI ( true ) . build ()) {
EmbedContentResponse response =
client . models . embedContent (
modelId ,
List . of (
"How do I get a driver's license/learner's permit?" ,
"How long is my driver's license valid for?" ,
"Driver's knowledge test study guide" ),
EmbedContentConfig . builder ()
. taskType ( "RETRIEVAL_DOCUMENT" )
. outputDimensionality ( 3072 )
. title ( "Driver's License" )
. build ());
System . out . println ( response );
// Example response :
// embeddings = Optional [[ ContentEmbedding { values = Optional [[ - 0.035855383 , 0.008127963 , ... ]]
// statistics = Optional [ ContentEmbeddingStatistics { truncated = Optional [ false ],
// tokenCount = Optional [ 11.0 ]}]}]],
// metadata = Optional [ EmbedContentMetadata { billableCharacterCount = Optional [ 153 ]}]}
return response ;
}
}
}
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your project ID .
TEXT : The text that you want to generate embeddings
for. Limit: five texts of up to 2,048 tokens per text for all models except textembedding-gecko@001 . The max input token length for textembedding-gecko@001 is 3072. For gemini-embedding-001 , each request can only include a single input text. For more information, see Text embedding limits .
AUTO_TRUNCATE : If set to
false , text that exceeds the token limit causes the request to fail. The default
value is true .
HTTP method and URL:
POST https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/us-central1/publishers/google/models/gemini-embedding-001:predict
Request JSON body:
{
"instances": [
{ "content": " TEXT "}
],
"parameters": {
"autoTruncate": AUTO_TRUNCATE
}
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/us-central1/publishers/google/models/gemini-embedding-001:predict"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/us-central1/publishers/google/models/gemini-embedding-001:predict" | Select-Object -Expand Content
You should receive a JSON response similar to the following. Note that values
has been truncated to save space.
Response
{
"predictions": [
{
"embeddings": {
"statistics": {
"truncated": false,
"token_count": 6
},
"values": [ ... ]
}
}
]
}
Example curl command
MODEL_ID= "gemini-embedding-001"
PROJECT_ID= PROJECT_ID
curl \
- X POST \
- H "Authorization: Bearer $(gcloud auth print-access-token)" \
- H "Content-Type: application/json" \
h tt ps : //us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/us-central1/publishers/google/models/${MODEL_ID}:predict -d \
$' {
"instances" : [
{ "content" : "What is life?" }
],
} '
Supported models
The following tables show the available Google and open text embedding models.
Google models
You can get text embeddings by using the following models:
Model name
Description
Output Dimensions
Max sequence length
Supported text languages
gemini-embedding-001
State-of-the-art performance across English, multilingual and code tasks. It unifies the previously specialized models like text-embedding-005 and text-multilingual-embedding-002 and achieves better performance in their respective domains. Read our Tech Report for more detail.
up to 3072
2048 tokens
Supported text languages
text-embedding-005
Specialized in English and code tasks.
up to 768
2048 tokens
English
text-multilingual-embedding-002
Specialized in multilingual tasks.
up to 768
2048 tokens
Supported text languages
For superior embedding quality, gemini-embedding-001 is our large
model designed to provide the highest performance.
Open models
You can get text embeddings by using the following models:
Model name
Description
Output dimensions
Max sequence length
Supported text languages
multilingual-e5-small
Part of the E5 family of text embedding models. Small variant contains 12 layers.
Up to 384
512 tokens
Supported languages
multilingual-e5-large
Part of the E5 family of text embedding models. Large variant contains 24 layers.
Up to 1024
512 tokens
Supported languages
To get started, see the E5 family model
card .
For more information on open models, see Open models for MaaS
Add an embedding to a vector database
After you've generated your embedding you can add embeddings to a vector
database, like Vector Search. This enables low-latency retrieval,
and is critical as the size of your data increases.
To learn more about Vector Search, see Overview of
Vector Search .
What's next
To learn more about rate limits, see Generative AI on Vertex AI
rate limits .
To get batch predictions for embeddings, see Get batch text embeddings
predictions
To learn more about multimodal embeddings, see Get multimodal
embeddings
To tune an embedding, see Tune text embeddings
To learn more about the research behind text-embedding-005 and
text-multilingual-embedding-002 , see the research paper Gecko: Versatile
Text Embeddings Distilled from Large Language
Models .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
