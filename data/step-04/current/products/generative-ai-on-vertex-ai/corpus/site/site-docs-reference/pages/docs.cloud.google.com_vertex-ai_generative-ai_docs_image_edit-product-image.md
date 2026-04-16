---
title: "Replace the background of an image \_|\_ Generative AI on Vertex AI \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/edit-product-image
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/edit-product-image
  title: "Replace the background of an image \_|\_ Generative AI on Vertex AI \_|\_\
    \ Google Cloud Documentation"
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
Replace the background of an image
Stay organized with collections
Save and categorize content based on your preferences.
This page describes replacing the background of an image. Imagen on Vertex AI
lets you use automatic object segmentation to maintain that content
while modifying other image content. With Imagen 3 you can also
provide your own mask area for more control when editing.
The following models support replacing image backgrounds:
imagen-3.0-capability-001
View Imagen for Editing and Customization model card
Product image editing example
To see an example of Imagen 3 Editing,
run the "Imagen 3 Image Editing" notebook in one of the following
environments:
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
The following use case highlights enhancing a product image by modifying an
image's background, but preserving a product's appearance within the image.
Image generated with the Imagen product image
editing feature from the prompt:
on a table in a boutique store . Original image source:
Irene Kredenets
on Unsplash .
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
Edit with an automatically detected background mask
Use the following instructions to enable and use product image editing with
automatic background detection.
Console
In the Google Cloud console, go to the Vertex AI > Vertex AI Studio
page.
Go to Vertex AI Studio
Click Generate media .
Click Image .
From the Task list, select Product-background-editing .
From the Model list, select the Imagen model to use.
In Input image click Add and select the image that you are editing
to upload.
In the Prompt box, enter a prompt that describes how to edit the image.
Select one of the following mask extraction options:
Background elements : detects the background elements and creates
a mask around them.
wallpaper Foreground elements :
detects the foreground objects and creates a mask around them.
background_replace People :
detects people and creates a mask around them.
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
reference_image = Image . from_file ( location = "test_resources/suitcase.png" ),
reference_id = 0 ,
)
mask_ref = MaskReferenceImage (
reference_id = 1 ,
reference_image = None ,
config = MaskReferenceConfig (
mask_mode = "MASK_MODE_BACKGROUND" ,
),
)
image = client . models . edit_image (
model = "imagen-3.0-capability-001" ,
prompt = "A light blue suitcase in front of a window in an airport" ,
reference_images = [ raw_ref , mask_ref ],
config = EditImageConfig (
edit_mode = "EDIT_MODE_BGSWAP" ,
),
)
image . generated_images [ 0 ] . image . save ( output_file )
print ( f "Created output image using { len ( image . generated_images [ 0 ] . image . image_bytes ) } bytes" )
# Example response:
# Created output image using 1234567 bytes
REST
For more information, see the Edit
images API
reference.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project ID .
LOCATION : Your project's region. For example,
us-central1 , europe-west2 , or asia-northeast3 . For a list
of available regions, see
Generative AI on Vertex AI locations . When a regional API endpoint is used, the region from the endpoint's URL determines where the request is processed, and this LOCATION in the resource path is ignored if it conflicts.
TEXT_PROMPT : The text prompt that guides what images the model
generates. This field is required for both generation and editing.
referenceType : A ReferenceImage is an image that provides additional
context for image editing. A normal RGB raw reference image ( REFERENCE_TYPE_RAW )
is required for editing use cases. At most one raw reference image may exist in one request.
The output image has the same height and width as raw reference image. A mask reference image
( REFERENCE_TYPE_MASK ) is required for masked editing use cases.
referenceId : The integer ID of the reference image. In this example the two
reference image objects are of different types, so they have distinct referenceId
values ( 1 and 2 ).
B64_BASE_IMAGE : The base image to edit or upscale. The
image must be specified as a base64-encoded byte
string. Size limit: 10 MB.
maskImageConfig.maskMode : The mask mode for mask editing.
MASK_MODE_BACKGROUND is used to automatically mask out background without a
user-provided mask.
MASK_DILATION - float. The percentage of image width to dilate this mask by. A
value of 0.00 is recommended to avoid extending foreground product. Minimum: 0, maximum: 1.
Default: 0.03.
EDIT_STEPS - integer. The number of sampling steps for the base model. For
product image editing, start at 75 steps.
EDIT_IMAGE_COUNT - The number of edited images. Accepted integer values: 1-4.
Default value: 4.
HTTP method and URL:
POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /publishers/google/models/imagen-3.0-capability-001:predict
Request JSON body:
{
"instances": [
{
"prompt": " TEXT_PROMPT ",
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
"maskImageConfig": {
"maskMode": "MASK_MODE_BACKGROUND",
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
"editMode": "EDIT_MODE_BGSWAP",
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
The following sample response is for a product background
editing request. The response returns four prediction objects, with
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
},
{
"bytesBase64Encoded": " BASE64_IMG_BYTES ",
"mimeType": "image/png"
},
{
"bytesBase64Encoded": " BASE64_IMG_BYTES ",
"mimeType": "image/png"
}
]
}
Edit with a defined mask area
You can choose to mask the area that is replaced, rather than letting
Imagen detect the mask automatically.
Console
In the Google Cloud console, go to the Vertex AI > Vertex AI Studio
page.
Go to Vertex AI Studio
Click Generate media .
Click Image .
From the Task list, select Product-background-editing .
From the Model list, select the Imagen model to use.
In Input image click Add and select the image that you are editing
to upload.
In the Prompt box, enter a prompt that describes how to edit the image.
Do one of the following to specify a mask:
Upload your own mask:
Create a mask on your computer.
Click upload
Import mask and select a mask to upload.
Define your mask: in the editing toolbar, use the mask tools
( check_box_outline_blank box ,
brush brush , or
masked_transitions
invert tool) to specify the area or areas to add content to.
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
reference_image = Image . from_file ( location = "test_resources/suitcase.png" ),
reference_id = 0 ,
)
mask_ref = MaskReferenceImage (
reference_id = 1 ,
reference_image = Image . from_file ( location = "test_resources/suitcase_mask.png" ),
config = MaskReferenceConfig (
mask_mode = "MASK_MODE_USER_PROVIDED" ,
mask_dilation = 0.0 ,
),
)
image = client . models . edit_image (
model = "imagen-3.0-capability-001" ,
prompt = "A light blue suitcase in an airport" ,
reference_images = [ raw_ref , mask_ref ],
config = EditImageConfig (
edit_mode = "EDIT_MODE_BGSWAP" ,
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
TEXT_PROMPT : The text prompt that guides what images the model
generates. This field is required for both generation and editing.
referenceId : The integer ID of the reference image. In this example the two
reference image objects are of different types, so they have distinct referenceId
values ( 1 and 2 ).
B64_BASE_IMAGE : The base image to edit or upscale. The
image must be specified as a base64-encoded byte
string. Size limit: 10 MB.
B64_MASK_IMAGE : The black and white
image you want to use as a mask layer to edit the original image. The image
must be specified as a base64-encoded
byte string. Size limit: 10 MB.
MASK_DILATION - float. The percentage of image width to dilate this mask by. A
value of 0.00 is recommended to avoid extending foreground product. Minimum: 0, maximum: 1.
Default: 0.03.
EDIT_STEPS - integer. The number of sampling steps for the base model. For
product image editing, start at 75 steps.
EDIT_IMAGE_COUNT - The number of edited images. Accepted integer values: 1-4.
Default value: 4.
HTTP method and URL:
POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /publishers/google/models/imagen-3.0-capability-001:predict
Request JSON body:
{
"instances": [
{
"prompt": " TEXT_PROMPT ": [
{
"referenceType": "REFERENCE_TYPE_RAW",
"referenceId": 1 ,
"referenceImage": {
"bytesBase64Encoded": " B64_BASE_IMAGE "
}
},
{
"referenceType": "REFERENCE_TYPE_MASK",
"referenceId": 2 ,
"referenceImage": {
"bytesBase64Encoded": " B64_MASK_IMAGE "
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
"editMode": "EDIT_MODE_BGSWAP",
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
The following sample response is for a product background
editing request.
{
"predictions": [
{
"bytesBase64Encoded": " BASE64_IMG_BYTES ",
"mimeType": "image/png"
},
{
"mimeType": "image/png",
"bytesBase64Encoded": " BASE64_IMG_BYTES "
},
{
"bytesBase64Encoded": " BASE64_IMG_BYTES ",
"mimeType": "image/png"
},
{
"bytesBase64Encoded": " BASE64_IMG_BYTES ",
"mimeType": "image/png"
}
]
}
Limitations
Because masks are sometimes incomplete, the model may try to complete the
foreground object when extremely small bits are missing at the boundary. As a
rare side effect, when the foreground object is already complete, the model may
create slight extensions.
A workaround is to segment the model output and then blend. The following is
an example python snippet demonstrating a workaround:
blended = Image . composite ( out_images [ 0 ] . resize ( image_expanded . size ), image_expanded , mask_expanded )
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
