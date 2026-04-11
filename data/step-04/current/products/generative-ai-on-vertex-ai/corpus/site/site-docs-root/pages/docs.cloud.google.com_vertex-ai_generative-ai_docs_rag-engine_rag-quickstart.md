---
title: "RAG quickstart \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/rag-engine/rag-quickstart
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/rag-engine/rag-quickstart
  title: "RAG quickstart \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
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
RAG quickstart
Stay organized with collections
Save and categorize content based on your preferences.
The VPC-SC security controls and
CMEK are supported by Vertex AI RAG Engine. Data residency and AXT security controls aren't
supported.
To see an example of using RAG Engine,
run the "Intro to RAG Engine in Vertex AI" notebook in one of the following
environments:
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
Important: By default, a RAG corpus uses RagManagedDb . For more information,
see Understanding
RagManagedDb .
This page shows you how to use the Vertex AI SDK to run
Vertex AI RAG Engine tasks.
You can also follow along using this notebook Intro to Vertex AI RAG Engine .
Required roles
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/aiplatform.user
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Prepare your Google Cloud console
To use Vertex AI RAG Engine, do the following:
Install the Vertex AI SDK for Python .
Run this command in the Google Cloud console to set up your project.
gcloud config set project {project}
Run this command to authorize your login.
gcloud auth application-default login
Run Vertex AI RAG Engine
Copy and paste this sample code into the Google Cloud console to run Vertex AI RAG Engine.
Python
To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .
For more information, see the
Python API reference documentation .
from vertexai import rag
from vertexai.generative_models import GenerativeModel , Tool
import vertexai
# Create a RAG Corpus, Import Files, and Generate a response
# TODO(developer): Update and un-comment below lines
# PROJECT_ID = "your-project-id"
# display_name = "test_corpus"
# paths = ["https://drive.google.com/file/d/123", "gs://my_bucket/my_files_dir"] # Supports Google Cloud Storage and Google Drive Links
# Initialize Vertex AI API once per session
vertexai . init ( project = PROJECT_ID , location = "us-east4" )
# Create RagCorpus
# Configure embedding model, for example "text-embedding-005".
embedding_model_config = rag . RagEmbeddingModelConfig (
vertex_prediction_endpoint = rag . VertexPredictionEndpoint (
publisher_model = "publishers/google/models/text-embedding-005"
)
)
rag_corpus = rag . create_corpus (
display_name = display_name ,
backend_config = rag . RagVectorDbConfig (
rag_embedding_model_config = embedding_model_config
),
)
# Import Files to the RagCorpus
rag . import_files (
rag_corpus . name ,
paths ,
# Optional
transformation_config = rag . TransformationConfig (
chunking_config = rag . ChunkingConfig (
chunk_size = 512 ,
chunk_overlap = 100 ,
),
),
max_embedding_requests_per_min = 1000 , # Optional
)
# Direct context retrieval
rag_retrieval_config = rag . RagRetrievalConfig (
top_k = 3 , # Optional
filter = rag . Filter ( vector_distance_threshold = 0.5 ), # Optional
)
response = rag . retrieval_query (
rag_resources = [
rag . RagResource (
rag_corpus = rag_corpus . name ,
# Optional: supply IDs from `rag.list_files()`.
# rag_file_ids=["rag-file-1", "rag-file-2", ...],
)
],
text = "What is RAG and why it is helpful?" ,
rag_retrieval_config = rag_retrieval_config ,
)
print ( response )
# Enhance generation
# Create a RAG retrieval tool
rag_retrieval_tool = Tool . from_retrieval (
retrieval = rag . Retrieval (
source = rag . VertexRagStore (
rag_resources = [
rag . RagResource (
rag_corpus = rag_corpus . name , # Currently only 1 corpus is allowed.
# Optional: supply IDs from `rag.list_files()`.
# rag_file_ids=["rag-file-1", "rag-file-2", ...],
)
],
rag_retrieval_config = rag_retrieval_config ,
),
)
)
# Create a Gemini model instance
rag_model = GenerativeModel (
model_name = "gemini-2.0-flash-001" , tools = [ rag_retrieval_tool ]
)
# Generate response
response = rag_model . generate_content ( "What is RAG and why it is helpful?" )
print ( response . text )
# Example response:
# RAG stands for Retrieval-Augmented Generation.
# It's a technique used in AI to enhance the quality of responses
# ...
curl
Create a RAG corpus.
export LOCATION= LOCATION
export PROJECT_ID= PROJECT_ID
export CORPUS_DISPLAY_NAME= CORPUS_DISPLAY_NAME
// CreateRagCorpus
// Output: CreateRagCorpusOperationMetadata
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /ragCorpora \
-d '{
"display_name" : "'" CORPUS_DISPLAY_NAME "'"
}'
For more information, see Create a RAG corpus
example .
Import a RAG file.
// ImportRagFiles
// Import a single Cloud Storage file or all files in a Cloud Storage bucket.
// Input: LOCATION, PROJECT_ID, RAG_CORPUS_ID, GCS_URIS
export RAG_CORPUS_ID= RAG_CORPUS_ID
export GCS_URIS= GCS_URIS
export CHUNK_SIZE= CHUNK_SIZE
export CHUNK_OVERLAP= CHUNK_OVERLAP
export EMBEDDING_MODEL_QPM_RATE= EMBEDDING_MODEL_QPM_RATE
// Output: ImportRagFilesOperationMetadataNumber
// Use ListRagFiles, or import_result_sink to get the correct rag_file_id.
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /ragCorpora/ RAG_CORPUS_ID /ragFiles:import \
-d '{
"import_rag_files_config": {
"gcs_source": {
"uris": " GCS_URIS "
},
"rag_file_chunking_config": {
"chunk_size": CHUNK_SIZE ,
"chunk_overlap": CHUNK_OVERLAP
},
"max_embedding_requests_per_min": EMBEDDING_MODEL_QPM_RATE
}
}'
For more information, see Import RAG files
example .
Run a RAG retrieval query.
export RAG_CORPUS_RESOURCE= RAG_CORPUS_RESOURCE
export VECTOR_DISTANCE_THRESHOLD= VECTOR_DISTANCE_THRESHOLD
export SIMILARITY_TOP_K= SIMILARITY_TOP_K
{
"vertex_rag_store": {
"rag_resources": {
"rag_corpus": " RAG_CORPUS_RESOURCE "
},
"vector_distance_threshold": VECTOR_DISTANCE_THRESHOLD
},
"query": {
"text": TEXT
"similarity_top_k": SIMILARITY_TOP_K
}
}
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json; charset=utf-8" \
-d @request.json \
"https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION :retrieveContexts"
For more information, see RAG Engine
API .
Generate content.
{
"contents": {
"role": "USER",
"parts": {
"text": " INPUT_PROMPT "
}
},
"tools": {
"retrieval": {
"disable_attribution": false,
"vertex_rag_store": {
"rag_resources": {
"rag_corpus": " RAG_CORPUS_RESOURCE "
},
"similarity_top_k": " SIMILARITY_TOP_K ",
"vector_distance_threshold": VECTOR_DISTANCE_THRESHOLD
}
}
}
}
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json; charset=utf-8" \
-d @request.json \
"https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /publishers/google/models/MODEL_ID:GENERATION_METHOD"
For more information, see RAG Engine
API .
What's next
To learn more about the RAG API, see Vertex AI RAG Engine
API .
To learn more about the responses from RAG, see Retrieval and Generation Output of Vertex AI RAG Engine .
To learn about the Vertex AI RAG Engine, see the
Vertex AI RAG Engine overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
