---
title: "Generate multimodal embeddings \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/alloydb/docs/ai/generate-multimodal-embeddings
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/ai/generate-multimodal-embeddings
  title: "Generate multimodal embeddings \_|\_ AlloyDB for PostgreSQL \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
Generate multimodal embeddings
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Note: This experimental launch is a Pre-GA offering.
You can generate multimodal embeddings in AlloyDB for PostgreSQL using the supported
Vertex AI multimodal model, multimodalembedding@001 .
You can use the Vertex AI multimodal embedding models referred to
in Supported models .
This page assumes that you're familiar with AlloyDB for PostgreSQL and
generative AI concepts . For more information, see
What are embeddings .
Before you begin
Before you use multimodal embeddings, do the following:
Verify that the google_ml_integration extension is installed .
Verify that the google_ml_integration.enable_model_support flag is set to on .
Integrate with Vertex AI .
Access data in Cloud Storage to generate multimodal embeddings .
Integrate with Vertex AI and install the extension
Configure user access to Vertex AI models .
Verify that the latest version of google_ml_integration is installed.
To check the installed version, run the following
command:
SELECT extversion FROM pg_extension WHERE extname = 'google_ml_integration' ;
extversion
------------
1 . 5 . 2
( 1 row )
If the extension isn't installed or if the installed version is
earlier than 1.5.2, update the extension.
CREATE EXTENSION IF NOT EXISTS google_ml_integration ;
ALTER EXTENSION google_ml_integration UPDATE ;
If you experience issues when you run the preceding commands, or if the
extension isn't updated to version 1.5.2 after you run the preceding
commands, contact Google Cloud support .
To use the AlloyDB AI query engine functionality, set the
google_ml_integration.enable_ai_query_engine flag to on .
SQL
Enable the AI query engine for the current session.
SET google_ml_integration . enable_ai_query_engine = on ;
Enable features for a specific database across sessions.
ALTER DATABASE DATABASE_NAME SET google_ml_integration . enable_ai_query_engine = 'on' ;
Enable the AI query engine for a specific user across sessions and databases.
ALTER ROLE postgres SET google_ml_integration . enable_ai_query_engine = 'on' ;
Console
To modify the value of the google_ml_integration.enable_ai_query_engine flag, follow the steps
in Configure an instance's database flags .
gcloud
To use the gcloud CLI, you can
install and initialize the Google Cloud CLI, or you
can use Cloud Shell .
You can modify the value of the google_ml_integration.enable_ai_query_engine flag.
For more information, see Configure an instance's database flags .
gcloud alloydb instances update INSTANCE_ID \
--database-flags google_ml_integration.enable_ai_query_engine=on \
--region= REGION_ID \
--cluster= CLUSTER_ID \
--project= PROJECT_ID
Access data in Cloud Storage to generate multimodal embeddings
To generate multimodal embeddings, refer to content in Cloud Storage using
a gs:// URI.
Access Cloud Storage content through your current project's
Vertex AI service agent. By default, the Vertex AI
service agent already has permission to access the bucket in the same project.
For more information, see IAM roles and permissions index .
To access data in a Cloud Storage bucket in another Google Cloud project,
run the following gcloud CLI command to grant the Storage Object Viewer role ( roles/storage.objectViewer ) to the Vertex AI service agent of your
AlloyDB project.
gcloud projects add-iam-policy-binding <ANOTHER_PROJECT_ID> \
--member = "serviceAccount:service-<PROJECT_ID>@gcp-sa-aiplatform.iam.gserviceaccount.com" \
--role = "roles/storage.objectViewer"
For more information, see Set and manage IAM policies on buckets .
To generate multimodal embeddings, select one of the following schemas.
ai schema
google_ml schema
Generate multimodal embeddings
To generate text embeddings for a multimodalembedding@001 model endpoint, run the following statement:
SELECT
ai . text_embedding (
model_id = > 'multimodalembedding@001' ,
content = > ' TEXT ' );
Replace TEXT with the text to generate the embedding for.
To generate image embeddings for a registered multimodalembedding@001 model endpoint where the image mimetype is default image/jpeg , run the following statement:
SELECT
ai . image_embedding (
model_id = > 'multimodalembedding@001' ,
image = > ' IMAGE_PATH_OR_TEXT ' ,
mimetype = > MIMETYPE ' );
Replace the following:
IMAGE_PATH_OR_TEXT with the Cloud Storage URI of the image, for example, gs://my-bucket/embeddings/flowers.jpeg , or the base64 string of the image.
MIMETYPE with the mimetype of the image, for example, image/jpeg . For the full list of supported mimetypes, see the
Multimodal embeddings API .
To generate video embeddings for a registered multimodalembedding@001 model endpoint, run the following statement:
SELECT
ai . video_embedding (
model_id = > 'multimodalembedding@001' ,
video = > ' VIDEO_URI ' );
Replace VIDEO_URI with the Cloud Storage URI of the target video, for example, gs://my-bucket/embeddings/supermarket-video.mp4 , or the base64 string of the video.
These are two-dimensional arrays that can be accessed as my_array[0][5] like syntax.
For more information, see Arrays .
What's next
Register a model endpoint with model endpoint management .
Query using AI powered SQL operators .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
