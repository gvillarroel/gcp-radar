---
title: "Insert objects into an image using inpaint \_|\_ Generative AI on Vertex AI\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/edit-inpainting
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/edit-inpainting
  title: "Insert objects into an image using inpaint \_|\_ Generative AI on Vertex\
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
Insert objects into an image using inpaint
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to insert objects into an image, a process also
known as inpainting . Imagen on Vertex AI lets you specify a mask area to
insert objects into an image. You can bring your own mask, or you can let
Imagen generate a mask for you.
The following models support inserting objects into an image:
imagen-3.0-capability-001
Content insertion example
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
With inpainting, you can use a base image, an image mask, and a text prompt
to add content to an existing image.
Inputs
Base image * to edit
Mask area specified using tools in the Google Cloud console
Text prompt
strawberries
* Image credit: Alex Lvrs
on Unsplash .
Output after specifying a mask area in the Google Cloud console
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
Insert with a defined mask area
Use the following samples to send an inpainting request using the
Imagen 3 model.
Console
In the Google Cloud console, go to the Vertex AI > Vertex AI Studio
page.
Go to Vertex AI Studio
Click Generate media .
Click Image .
From the Task list, select Inpaint-add .
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
reference_image = Image . from_file ( location = "test_resources/fruit.png" ),
reference_id = 0 ,
)
mask_ref = MaskReferenceImage (
reference_id = 1 ,
reference_image = Image . from_file ( location = "test_resources/fruit_mask.png" ),
config = MaskReferenceConfig (
mask_mode = "MASK_MODE_USER_PROVIDED" ,
mask_dilation = 0.01 ,
),
)
image = client . models . edit_image (
model = "imagen-3.0-capability-001" ,
prompt = "A plate of cookies" ,
reference_images = [ raw_ref , mask_ref ],
config = EditImageConfig (
edit_mode = "EDIT_MODE_INPAINT_INSERTION" ,
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
REGION : The region that your
project is located in. For more information about supported regions, see
Generative AI on
Vertex AI locations .
PROJECT_ID : Your
Google Cloud project ID.
TEXT_PROMPT :
Optional. A text prompt to guide the images that the model generates. For
best results, use a description of the masked area and avoid single-word
prompts. For example, use "a cute corgi" instead of "corgi".
B64_BASE_IMAGE :
A base64-encoded image of the image being edited that is 10MB or less in
size. For more information about base64-encoding, see Base64 encode and decode files .
B64_MASK_IMAGE :
A base64-encoded black and white mask image that is 10MB or less in size.
MASK_DILATION :
Optional. A float value between 0 and 1, inclusive, that represents the
percentage of the image width to grow the mask by. Using
dilation helps compensate for imprecise masks. We recommend a
value of 0.01 .
EDIT_STEPS :
Optional. An integer that represents the number of sampling steps. A
higher value offers better image quality, a lower value offers better
latency.
We recommend that you try 35 steps to start. If the quality
doesn't meet your requirements, then we recomment increasing the value
towards an upper limit of 75 .
SAMPLE_COUNT :
Optional. An integer that describes the number of images to generate. The
accepted range of values is 1 - 4 . The default value
is 4 .
HTTP method and URL:
POST https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /publishers/google/models/imagen-3.0-capability-001:predict
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
"editMode": "EDIT_MODE_INPAINT_INSERTION",
"sampleCount": SAMPLE_COUNT
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /publishers/google/models/imagen-3.0-capability-001:predict"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /publishers/google/models/imagen-3.0-capability-001:predict" | Select-Object -Expand Content
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
Insert with automatic mask detection
Use the following samples to specify inpainting to insert content. In these
samples you specify a base image and a text prompt. Imagen
automatically detects and creates a mask area to modify the base image.
Console
In the Google Cloud console, go to the Vertex AI > Vertex AI Studio
page.
Go to Vertex AI Studio
Click Generate media .
Click Image .
From the Task list, select Inpaint-add .
From the Model list, select the Imagen model to use.
In Input image click Add and select the image that you are editing
to upload.
In the Prompt box, enter a prompt that describes how to edit the image.
In the editing toolbar, click background_replace Extract mask .
Select one of the mask extraction options:
Background elements : detects the background elements and creates a
mask around them.
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
reference_image = Image . from_file ( location = "test_resources/fruit.png" ),
reference_id = 0 ,
)
mask_ref = MaskReferenceImage (
reference_id = 1 ,
reference_image = None ,
config = MaskReferenceConfig (
mask_mode = "MASK_MODE_FOREGROUND" ,
mask_dilation = 0.1 ,
),
)
image = client . models . edit_image (
model = "imagen-3.0-capability-001" ,
prompt = "A small white ceramic bowl with lemons and limes" ,
reference_images = [ raw_ref , mask_ref ],
config = EditImageConfig (
edit_mode = "EDIT_MODE_INPAINT_INSERTION" ,
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
TEXT_PROMPT : The text prompt guides what images the model
generates. When you use a prompt for inpainting insertion, use a description of the masked area
for best results. Avoid single-word prompts. For example, use " a cute corgi " instead of
" corgi ".
B64_BASE_IMAGE : The base image to edit or upscale. The
image must be specified as a base64-encoded byte
string. Size limit: 10 MB.
MASK_MODE - A string that sets the type of automatic mask creation the model uses.
Available values:
MASK_MODE_BACKGROUND : Automatically generates a mask using background
segmentation.
MASK_MODE_FOREGROUND : Automatically generates a mask using foreground
segmentation.
MASK_MODE_SEMANTIC : Automatically generates a mask using semantic
segmentation based on the
segmentation
classes you specify in the maskImageConfig.maskClasses array. For
example:
"maskImageConfig": {
"maskMode": "MASK_MODE_SEMANTIC",
"maskClasses": [175, 176], // bicycle, car
"dilation": 0.01
}
MASK_DILATION - float. The percentage of image width to dilate this mask by. A
value of 0.01 is recommended to compensate for imperfect input masks.
EDIT_STEPS - integer. The number of sampling steps for the base model. For
inpainting insertion, start at 35 steps. Increase steps to upper limit of 75 if
the quality doesn't meet your requirements. Increasing steps also increases request latency.
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
"maskMode": " MASK_MODE ",
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
"editMode": "EDIT_MODE_INPAINT_INSERTION",
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
The following sections explain limitations of Imagen's remove
objects feature.
Modified pixels
The model generates pixels at its own resolution (for example,
1024x1024), which might differ from the input image's resolution. This means
the generated image might have small changes that weren't in the original
image.
To perfectly preserve the image, we recommend blending the generated image
with the input image using the mask. Typically, if the input image
resolution is 2K or higher, blending the generated image and input image is
required.
Insert limitation
While the inserted object usually matches the style of the base image,
some keywords might produce cartoon-like results instead of a photorealistic
output.
For example, prompting for a "yellow giraffe" might result in a cartoonish
image because giraffes are naturally brown and tan. Generating photorealistic
images with unnatural colors can be difficult.
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
