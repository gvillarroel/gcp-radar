---
title: "Layout parser Quickstart \_|\_ Document AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-ai/docs/layout-parse-quickstart
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/document-ai/docs
source_metadata:
  url: https://docs.cloud.google.com/document-ai/docs/layout-parse-quickstart
  title: "Layout parser Quickstart \_|\_ Document AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Layout parser Quickstart
Use layout parser to extract elements from a document, such as text, tables, and
lists.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
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
Verify that billing is enabled for your Google Cloud project .
Enable the Document AI, Cloud Storage APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
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
Enable the Document AI, Cloud Storage APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create a processor
In the Google Cloud console, in the Document AI section, and select
Processor Gallery .
Processor
Gallery
In the Processor Gallery ,
search for
Layout parser and select Create .
In the side window, enter a Processor name , such as quickstart-layout-processor .
Select the region closest to you.
Click Create .
You're taken to the Processor Details page of your new form parser processor.
Optional: Select a default processor by clicking Manage versions ,
and selecting a processor from the Versions table. Then click
Mark as default
and confirm by entering the processor name.
Test processor
After creating your processor, you can send annotation requests to it.
Download the sample document .
Click the
Upload Test Document
button and select the document you just downloaded.
You should now be on the layout parser analysis page. You can view the
blocks or chunks parsed from the document, organized by detected types.
Note: The document view is only available for PDF file type.
Optional: Select Edit Layout Config to enable image or table annotation data.
Note: There's bounding box support only for version pretrained-layout-parser-v1.0-2024-06-03 .
Process a document
REST
This example shows how to send a document stored in Cloud Storage to the layout
parser for processing. This process enables image and table annotation by default.
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project ID.
LOCATION : your processor's location , for example:
us - United States
eu - European Union
PROCESSOR_ID : the ID of your custom processor.
MIME_TYPE : Layout parser supports application/pdf and text/html .
GCS_FILE_PATH : The file path for the Cloud Storage bucket with your document.
CHUNK_SIZE : Optional. The chunk size, in tokens, to use when splitting documents.
INCLUDE_ANCESTOR_HEADINGS : Optional. Boolean. Whether or not to include ancestor headings when splitting documents.
HTTP method and URL:
POST https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT_ID /locations/ LOCATION /processors/ PROCESSOR_ID /processorVersions/ pretrained-layout-parser-v1.5-2025-08-25 :process
Request JSON body:
{
"gcsDocument": {
"gcsUri": " GCS_FILE_PATH ",
"mimeType": " MIME_TYPE "
},
"processOptions": {
"layoutConfig": {
"enableTableAnnotation": "true",
"enableImageAnnotation": "true",
"chunkingConfig": {
"chunkSize": " CHUNK_SIZE ",
"includeAncestorHeadings": " INCLUDE_ANCESTOR_HEADINGS ",
}
}
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT_ID /locations/ LOCATION /processors/ PROCESSOR_ID /processorVersions/ pretrained-layout-parser-v1.5-2025-08-25 :process"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// LOCATION -documentai.googleapis.com/v1beta3/projects/ PROJECT_ID /locations/ LOCATION /processors/ PROCESSOR_ID /processorVersions/ pretrained-layout-parser-v1.5-2025-08-25 :process" | Select-Object -Expand Content
You should receive a successful status code (2xx) and an empty response.
Review the output
A successful request returns a document object in JSON. The most important fields
for Retrieval Augmented Generation (RAG) is document.chunked_document.chunks .
The following is the output form parsing the third page of "Winnie the Pooh" by
A.A. Milne.
{
"document" : {
docume nt _layou t {
blocks {
block_id : "1"
te x t _block {
te x t : "WE ARE INTRODUCED 3"
t ype_ : "header"
}
page_spa n {
page_s tart : 1
page_e n d : 1
}
}
blocks {
block_id : "2"
page_spa n {
page_s tart : 1
page_e n d : 1
}
image_block {
mime_ t ype : "image/png"
a nn o tat io ns {
descrip t io n : "This is an ink drawing depicting Winnie-the-Pooh sitting outside his house.\n\nHere are the facts and conclusions that can be derived from the image:\n\n* **Character:** The central figure is a bear, identifiable as Winnie-the-Pooh, sitting on a log.\n* **Location:** He is positioned outside what appears to be a small, rustic shelter or house.\n* **Signage:** Above the doorway of the shelter, there is a sign that reads \"MR SANDERZ\". Below this sign, there is another partial sign visible, where the letters \"RNIG\" and \"ALSO\" can be seen.\n* **Doorbell:** To the left of the doorway, a bell is hanging, indicating a doorbell mechanism.\n* **Setting:** The dwelling is surrounded by what looks like brush, trees, and general wilderness, suggested by the lines representing foliage and twigs.\n* **Log:** Pooh is seated on a cut log or tree trunk. To the left of this log, there are other smaller logs or branches piled up.\n* **Style:** The image is a black and white line drawing, characteristic of classic book illustrations."
}
blob_asse t _id : "blob_1"
}
}
blocks {
block_id : "3"
te x t _block {
te x t : "" Wi nn ie - t he - Pooh was n ' t qui te sure , " said Christopher Robin. " Now I am , " said a growly voice. " The n I will go o n , "said I.) One day when he was out walking, he came to an open place in the middle of the forest, and in the middle of this place was a large oak-tree, and, from the top of the tree, there came a loud buzzing-noise. Winnie-the-Pooh sat down at the foot of the tree,put his head between his paws and began to think."
t ype_ : "paragraph"
}
page_spa n {
page_s tart : 1
page_e n d : 1
}
}
blocks {
block_id : "4"
te x t _block {
te x t : "Digitized by Google"
t ype_ : "footer"
}
page_spa n {
page_s tart : 1
page_e n d : 1
}
}
}
chu n ked_docume nt {
chu n ks {
chu n k_id : "c1"
source_block_ids : "2"
source_block_ids : "3"
co ntent : "__START_OF_ANNOTATION__This is an ink drawing depicting Winnie-the-Pooh sitting outside his house.\n\nHere are the facts and conclusions that can be derived from the image:\n\n* **Character:** The central figure is a bear, identifiable as Winnie-the-Pooh, sitting on a log.\n* **Location:** He is positioned outside what appears to be a small, rustic shelter or house.\n* **Signage:** Above the doorway of the shelter, there is a sign that reads \"MR SANDERZ\". Below this sign, there is another partial sign visible, where the letters \"RNIG\" and \"ALSO\" can be seen.\n* **Doorbell:** To the left of the doorway, a bell is hanging, indicating a doorbell mechanism.\n* **Setting:** The dwelling is surrounded by what looks like brush, trees, and general wilderness, suggested by the lines representing foliage and twigs.\n* **Log:** Pooh is seated on a cut log or tree trunk. To the left of this log, there are other smaller logs or branches piled up.\n* **Style:** The image is a black and white line drawing, characteristic of classic book illustrations.__END_OF_ANNOTATION__" Wi nn ie - t he - Pooh was n ' t qui te sure , " said Christopher Robin. " Now I am , " said a growly voice. " The n I will go o n , " said I.) One day when he was out walking, he came to an open place in the middle of the forest, and in the middle of this place was a large oak-tree, and, from the top of the tree, there came a loud buzzing-noise. Winnie-the-Pooh sat down at the foot of the tree,put his head between his paws and began to think."
page_spa n {
page_s tart : 1
page_e n d : 1
}
page_headers {
te x t : "WE ARE INTRODUCED 3"
page_spa n {
page_s tart : 1
page_e n d : 1
}
}
page_ f oo ters {
te x t : "Digitized by Google"
page_spa n {
page_s tart : 1
page_e n d : 1
}
}
chu n k_ f ields {
image_chu n k_ f ield {
blob_asse t _id : "blob_1"
a nn o tat io ns {
descrip t io n : "This is an ink drawing depicting Winnie-the-Pooh sitting outside his house.\n\nHere are the facts and conclusions that can be derived from the image:\n\n* **Character:** The central figure is a bear, identifiable as Winnie-the-Pooh, sitting on a log.\n* **Location:** He is positioned outside what appears to be a small, rustic shelter or house.\n* **Signage:** Above the doorway of the shelter, there is a sign that reads \"MR SANDERZ\". Below this sign, there is another partial sign visible, where the letters \"RNIG\" and \"ALSO\" can be seen.\n* **Doorbell:** To the left of the doorway, a bell is hanging, indicating a doorbell mechanism.\n* **Setting:** The dwelling is surrounded by what looks like brush, trees, and general wilderness, suggested by the lines representing foliage and twigs.\n* **Log:** Pooh is seated on a cut log or tree trunk. To the left of this log, there are other smaller logs or branches piled up.\n* **Style:** The image is a black and white line drawing, characteristic of classic book illustrations."
}
}
}
}
}
blob_asse ts {
asse t _id : "blob_1"
co ntent : "image_bytes"
mime_ t ype : "image/png"
}
}
Python
This guide shows how to use the Python client library to process a document.
Using this code enables image and table annotation by default.
Install the client library.
! pip install --upgrade --quiet google-cloud-documentai
Run the processor.
def process_layout_parser (
project_id : str , location : str , processor_id : str , gcs_uri : str , mime_type : str
):
"""
Processes a document with the layout parser and prints chunk text.
"""
client = documentai . DocumentProcessorServiceClient ()
# The full resource name of the processor
processor_version_id = 'pretrained-layout-parser-v1.5-2025-08-25'
name = client . processor_path ( project_id , location , processor_id , processor_version_id )
# Configure the Cloud Storage document
gcs_document = documentai . GcsDocument ( gcs_uri = gcs_uri , mime_type = mime_type )
# Configure processing options for RAG
# This enables annotation and context-aware chunking.
process_options = documentai . ProcessOptions (
# Process only specific pages
layout_config = documentai . ProcessOptions . LayoutConfig (
enable_table_annotation = True ,
enable_image_annotation = True ,
chunking_config = documentai . ProcessOptions . LayoutConfig . ChunkingConfig (
chunk_size = 1024 ,
include_ancestor_headings = True ,
),
),
)
# Build the request
request = documentai . ProcessRequest (
name = name ,
gcs_document = gcs_document ,
process_options = process_options ,
)
# Process the document
result = client . process_document ( request = request )
document = result . document
print ( f "Document processing complete. \n " )
print ( "--- RAG-Ready Chunks (with context) ---" )
for i , chunk in enumerate ( document . chunked_document . chunks ):
print ( f " \n --- Chunk {i} ---" )
# Print the chunk's content
print ( f "Text: {chunk.content}" )
return result
Batch process documents with layout parser
Use the following procedure to parse and chunk multiple documents in a single
request.
Input documents to layout parser to parse and chunk.
Follow the
instructions for batch processing requests in Send a processing
request .
Configure fields in
ProcessOptions.layoutConfig when making a
batchProcess request.
Input
The following example JSON configures ProcessOptions.layoutConfig .
"processOptions" : {
"layoutConfig" : {
"enableTableAnnotation" : "true" ,
"enableImageAnnotation" : "true" ,
"chunkingConfig" : {
"chunkSize" : " CHUNK_SIZE " ,
"includeAncestorHeadings" : " INCLUDE_ANCESTOR_HEADINGS_BOOLEAN "
}
}
}
Replace the following:
CHUNK_SIZE : The maximum chunk size, in number of
tokens, to use when splitting documents.
INCLUDE_ANCESTOR_HEADINGS_BOOLEAN : Whether to
include ancestor headings when splitting documents. Ancestor headings
are the parents of subheadings in the original document. They can
provide a chunk with additional context about its position in the
original document. Up to two levels of headings can be included with a
chunk.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
To avoid unnecessary Google Cloud charges, use the
Google Cloud console to delete your processor and project if you don't need
them.
If you created a new project to learn about Document AI and you no
longer need the project, [delete the project][delete-project].
If you used an existing Google Cloud project, delete the resources you
created to avoid incurring charges to your account:
In the Google Cloud console navigation menu, select Document AI and
select My Processors .
Select More actions
in the same row as the processor you want to delete.
Select Delete processor , enter the processor name, then select Delete
again to confirm.
What's next
For details, see Guides .
Previous
arrow_back
Gemini layout parser
Next
Enterprise Document OCR
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
