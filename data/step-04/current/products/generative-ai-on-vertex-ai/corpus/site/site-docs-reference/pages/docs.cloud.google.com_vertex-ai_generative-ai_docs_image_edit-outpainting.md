---
title: "Expand the content of an image using outpaint \_|\_ Generative AI on Vertex\
  \ AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/edit-outpainting
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/edit-outpainting
  title: "Expand the content of an image using outpaint \_|\_ Generative AI on Vertex\
    \ AI \_|\_ Google Cloud Documentation"
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
Expand the content of an image using outpaint
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to use outpainting to expand the content of an image
to a larger area or an area with different dimensions.
The following models support outpainting:
imagen-3.0-capability-001
Outpainting example
Outpainting is a mask-based editing method that expands the content
of a base image to fit a larger or differently sized mask canvas.
Original image with image padding to match mask image (target) size.
Image source: Kari Shea
on Unsplash .
Mask image the dimensions of the target output, with the original
image pixel dimensions and location marked.
Outpainting output image (no prompt).
View Imagen for Editing and Customization model card
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
Verify that billing is enabled for your Google Cloud project .
Enable the Vertex AI API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Set up authentication for your environment.
Select the tab for how you plan to use the samples on this page:
Console
When you use the Google Cloud console to access Google Cloud services and
APIs, you don't need to set up authentication.
Python
To use the Python samples on this page in a local development environment, install and
initialize the gcloud CLI, and then set up Application Default Credentials with
your user credentials.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
For more information, see
Set up ADC for a local development environment
in the Google Cloud authentication documentation.
REST
To use the REST API samples on this page in a local development environment, you use the
credentials you provide to the gcloud CLI.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
For more information, see
Authenticate for using REST
in the Google Cloud authentication documentation.
Expand the content of an image
Use the following code samples to expand the content of an existing image.
Console
In the Google Cloud console, go to the Vertex AI > Vertex AI Studio
page.
Go to Vertex AI Studio
Click Generate media .
Click Image .
From the Task list, select Outpaint .
From the Model list, select the Imagen model to use.
In Input image click Add and select the image that you are editing
to upload.
In the Prompt box, enter a prompt that describes how to edit the image.
In the aspect ratio menu, select an aspect ratio:
crop_square Square
crop_16_9 16:9
crop_9_16 9:16
crop_landscape 4:3
crop_portrait 3:4
fullscreen Custom
In the editing toolbar, select the placement of your image:
Left align : align_horizontal_left
Horizontal center align : align_horizontal_center
Right align : align_horizontal_right
Top align :
align_vertical_top
Vertical center align :
align_vertical_center
Bottom align :
align_vertical_bottom
Click Run .
Python
Install
pip install --upgrade google-genai
To learn more, see the
SDK reference documentation .
Set environment variables to use the Gen AI SDK with Vertex AI:
# Replace the `GOOGLE_CLOUD_PROJECT` and `GOOGLE_CLOUD_LOCATION` values
# with appropriate values for your project.
export GOOGLE_CLOUD_PROJECT = GOOGLE_CLOUD_PROJECT
export GOOGLE_CLOUD_LOCATION = us-central1
export GOOGLE_GENAI_USE_VERTEXAI = True
from google import genai
from google.genai.types import (
RawReferenceImage ,
MaskReferenceImage ,
MaskReferenceConfig ,
EditImageConfig ,
)
client = genai . Client ()
# TODO(developer): Update and un-comment below line
# output_file = "output-image.png"
raw_ref = RawReferenceImage (
reference_image = Image . from_file ( location = "test_resources/living_room.png" ),
reference_id = 0 ,
)
mask_ref = MaskReferenceImage (
reference_id = 1 ,
reference_image = Image . from_file ( location = "test_resources/living_room_mask.png" ),
config = MaskReferenceConfig (
mask_mode = "MASK_MODE_USER_PROVIDED" ,
mask_dilation = 0.03 ,
),
)
image = client . models . edit_image (
model = "imagen-3.0-capability-001" ,
prompt = "A chandelier hanging from the ceiling" ,
reference_images = [ raw_ref , mask_ref ],
config = EditImageConfig (
edit_mode = "EDIT_MODE_OUTPAINT" ,
),
)
image . generated_images [ 0 ] . image . save ( output_file )
print ( f "Created output image using { len ( image . generated_images [ 0 ] . image . image_bytes ) } bytes" )
# Example response:
# Created output image using 1234567 bytes
REST
For more information about the Imagen API, see the following:
Method:
endpoints.predict
VisionGenerativeModelInstance
VisionGenerativeModelParams
VisionGenerativeModelResult
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project ID .
LOCATION : Your project's region. For example,
us-central1 , europe-west2 , or asia-northeast3 . For a list
of available regions, see
Generative AI on Vertex AI locations . When a regional API endpoint is used, the region from the endpoint's URL determines where the request is processed, and this LOCATION in the resource path is ignored if it conflicts.
prompt : For image outpainting you can provide an empty string to create the
edited images. If you choose to provide a prompt, use a description of the masked area for best
results. For example, " a blue sky " instead of " insert a blue sky ".
referenceType : A ReferenceImage is an image that provides additional
context for image editing. A normal RGB raw reference image ( REFERENCE_TYPE_RAW )
is required for editing use cases. At most one raw reference image may exist in one request.
The output image has the same height and width as raw reference image. A mask reference image
( REFERENCE_TYPE_MASK ) is required for masked editing use cases. If a raw reference
image is present, the mask image has to be the same height and width as the raw reference image. If the
mask reference image is empty and maskMode is not set to
MASK_MODE_USER_PROVIDED , the mask is computed based on the raw reference image.
B64_BASE_IMAGE : The base image to edit or upscale. The
image must be specified as a base64-encoded byte
string. Size limit: 10 MB.
B64_OUTPAINTING_MASK : The
black and white image you want to use as a mask layer to edit the original
image. The mask should be same resolution as
input image. The output image will be the same resolution as the input image.
This mask image must be specified as a
base64-encoded byte string. Size
limit: 10 MB.
MASK_DILATION - float. The percentage of image width to dilate this mask by. A
value of 0.03 is recommended for outpainting. Setting "dilation": 0.0 might result in
obvious borders at the extension point, or might cause a white border effect.
EDIT_STEPS - integer. The number of sampling steps for the base model. For
outpainting, start at 35 steps. Increase steps if the quality doesn't meet your
requirements.
EDIT_IMAGE_COUNT - The number of edited images. Accepted integer values: 1-4.
Default value: 4.
HTTP method and URL:
POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /publishers/google/models/imagen-3.0-capability-001:predict
Request JSON body:
{
"instances": [
{
"prompt": "",
"referenceImages": [
{
"referenceType": "REFERENCE_TYPE_RAW",
"referenceId": 1,
"referenceImage": {
"bytesBase64Encoded": " B64_BASE_IMAGE "
}
},
{
"referenceType": "REFERENCE_TYPE_MASK",
"referenceId": 2,
"referenceImage": {
"bytesBase64Encoded": " B64_OUTPAINTING_MASK "
},
"maskImageConfig": {
"maskMode": "MASK_MODE_USER_PROVIDED",
"dilation": MASK_DILATION
}
}
]
}
],
"parameters": {
"editConfig": {
"baseSteps": EDIT_STEPS
},
"editMode": "EDIT_MODE_OUTPAINT",
"sampleCount": EDIT_IMAGE_COUNT
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /publishers/google/models/imagen-3.0-capability-001:predict"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /publishers/google/models/imagen-3.0-capability-001:predict" | Select-Object -Expand Content
The following sample response is for a request with
"sampleCount": 2 . The response returns two prediction objects, with
the generated image bytes base64-encoded.
{
"predictions": [
{
"bytesBase64Encoded": " BASE64_IMG_BYTES ",
"mimeType": "image/png"
},
{
"mimeType": "image/png",
"bytesBase64Encoded": " BASE64_IMG_BYTES "
}
]
}
Limitations
If the outpainted image is expanded to 200% or more of the original image
size, the model might produce distorted details. As a best practice, we
recommend adding a post-processing step to run alpha blending on outpainted
images.
The following code is an example of post-processing:
parameters = {
"editConfig" : {
"outpaintingConfig" : {
"blendingMode" : "alpha-blending" ,
"blendingFactor" : 0.01 ,
},
},
}
What's next
Read articles about Imagen and other Generative AI on Vertex AI
products:
A developer's guide to getting started with Imagen 3 on
Vertex AI
New generative media models and tools, built with and for creators
New in Gemini: Custom Gems and improved image generation with
Imagen 3
Google DeepMind: Imagen 3 - Our highest quality
text-to-image model
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
