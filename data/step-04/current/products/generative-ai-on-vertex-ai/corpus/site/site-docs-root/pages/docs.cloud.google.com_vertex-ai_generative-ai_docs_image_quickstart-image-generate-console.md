---
title: "Generate and edit images on Vertex AI \_|\_ Generative AI on Vertex AI \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console
  title: "Generate and edit images on Vertex AI \_|\_ Generative AI on Vertex AI \_\
    |\_ Google Cloud Documentation"
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
Generate and edit images on Vertex AI
Stay organized with collections
Save and categorize content based on your preferences.
API reference overview : To view an overview of the API options for image generation and
editing, see the
imagegeneration model API reference .
Gemini and Imagen on Vertex AI bring Google's state of the art image
generative AI capabilities to application developers. With Gemini and
Imagen on Vertex AI on Vertex AI, application developers can build
next-generation AI products that transform their user's imagination into
high-quality visual assets using AI generation, in seconds.
Try image generation (Vertex AI Studio)
Try Imagen in a Colab
With Gemini and Imagen, you can do the following:
Generate novel images using only a text prompt (text-to-image AI
generation).
Edit or expand an uploaded or generated image using a mask area you define.
Upscale existing, generated, or edited images.
Prompts for preceding images
These images are generated using the general Imagen 3
image generation model ( imagen-3.0-generate-002 ) and the
following prompts:
Claymation scene. A medium wide shot of an elderly woman. She is
wearing flowing clothing. She is standing in a lush garden watering
the plants with an orange watering can
Shot in the style of DSLR camera with the polarizing filter. A
photo of two hot air balloons over the unique rock formations in
Cappadocia, Turkey. The colors and patterns on these balloons contrast
beautifully against the earthy tones of the landscape below. This shot
captures the sense of adventure that comes with enjoying such an
experience.
A weathered, wooden mech robot covered in flowering vines stands
peacefully in a field of tall wildflowers, with a a small blue bird
resting on its outstrecteched hand. Digital Cartoon, with warm colors
and soft lines. A large cliff with a waterfall looms behind.
A view of a person's hand as they hold a little clay figurine of
a bird in their hand and sculpt it with a modeling tool in their other
hand. You can see the sculptor's scarf. Their hands are covered in
clay dust. A macro DSLR image highlighting the texture and
craftsmanship.
A large, colorful bouquet of flowers in an old blue glass vase
on the table. In front is one beautiful peony flower surrounded by
various other blossoms like roses, lilies, daisies, orchids, fruits,
berries, green leaves. The background is dark gray. Oil painting in
the style of the Dutch Golden Age.
A single comic book panel of a boy and his father on a grassy
hill, staring at the sunset. A speech bubble points from the boy's
mouth and says: The sun will rise again. Muted, late 1990s coloring
style
Quickstart: Generate images from text prompts using Imagen
You can generate novel images using only descriptive text as an input. The
following samples show a simplified case for generating images, but you can use
additional
parameters to
tailor the generated images to your needs.
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
Use the following samples to generate an image:
Python
from google import genai
from google.genai.types import GenerateImagesConfig
client = genai . Client ()
# TODO(developer): Update and un-comment below line
# output_file = "output-image.png"
image = client . models . generate_images (
model = "imagen-4.0-generate-001" ,
prompt = "A dog reading a newspaper" ,
config = GenerateImagesConfig (
image_size = "2K" ,
),
)
image . generated_images [ 0 ] . image . save ( output_file )
print ( f "Created output image using { len ( image . generated_images [ 0 ] . image . image_bytes ) } bytes" )
# Example response:
# Created output image using 1234567 bytes
REST
Set environment variables:
export GOOGLE_CLOUD_PROJECT = GOOGLE_CLOUD_PROJECT # Replace with your Google Cloud project
export GOOGLE_CLOUD_LOCATION = us-central1 # Replace with the appropriate location for your project
Run the following:
curl -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json; charset=utf-8" \
"https:// ${ GOOGLE_CLOUD_LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ GOOGLE_CLOUD_PROJECT } /locations/ ${ GOOGLE_CLOUD_LOCATION } /publishers/google/models/imagen-4.0-generate-preview-05-20:predict" -d \
$'{
"instances": [
{
"prompt": "a cat reading a book"
}
],
"parameters": {
"sampleCount": 1
}
}'
The model returns a base64 image bytes object.
For more information, see the Imagen Generate
images API .
When to use Gemini or Imagen on Vertex AI
In addition to using Gemini's built-in image generation
capabilities, you can also access
Imagen , our specialized image
generation model.
Attribute
Gemini Image
Imagen 4
Strengths
Default recommendation.
Unparalleled flexibility, contextual understanding, and mask-free
editing. Uniquely capable of multi-turn conversational editing.
Best quality/latency
Availability
Generally available
Generally available
Latency
Higher. More computation is required for its advanced capabilities.
Low. Optimized for near-real-time performance.
Cost
Token-based pricing.
Cost-effective for specialized tasks.
Recommended tasks
Interleaved text and image generation to seamlessly blend text and
images.
Combine creative elements from multiple images with a single
prompt.
Make highly specific edits to images, modify individual elements
with language commands, and iteratively work on an image.
Apply a specific design or texture from one image to another while
preserving the original subject's form and details.
Image quality, photorealism, artistic detail, or specific styles
(for example, impressionism and anime) are top priorities.
Infusing branding, style, or generating logos and product designs.
Generating advanced spelling or typography.
We recommend Gemini as a starting point for generating images.
Choose Imagen 4 Ultra for advanced use-cases or when you need
the best image quality.
Model versions
There are multiple image generation models that you can use. For more
information, see Gemini
models or
Imagen
models .
Try more examples
To learn more,
run the following notebooks in the environment of your choice:
"Gemini 3 Pro Image Generation in Vertex AI":
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
"Gemini 2.5 Flash Image Generation in Vertex AI":
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
"Imagen 4 Image Generation":
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
"Imagen 3 Image Editing":
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
For a full list of Jupyter notebook tutorials using Imagen,
see the Generative AI on Vertex AI cookbook .
What's next
Use the following links to view the feature documentation.
Prompt guide
See how to write effective prompts to generate images.
How-to: generate images
Learn how to generate images with Imagen on Vertex AI.
Reference: generate images
Learn about optional and required fields when sending an Imagen image generation request.
Image credit: All images generated using Imagen on Vertex AI.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
