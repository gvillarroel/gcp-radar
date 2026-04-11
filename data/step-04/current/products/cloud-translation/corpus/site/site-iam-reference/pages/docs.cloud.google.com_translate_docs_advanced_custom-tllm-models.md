---
title: "Create and manage models \_|\_ Cloud Translation \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/translate/docs/intro-to-v3
source_metadata:
  url: https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models
  title: "Create and manage models \_|\_ Cloud Translation \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Translation
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create and manage models
This document describes how to tune and use a custom Translation LLM model.
Before you begin
Before you begin, you must prepare a supervised fine-tuning dataset.
Depending on your use case, there are different requirements.
Prepare a text dataset for tuning: Text tuning
Enable Vertex AI API
To tune a custom TLLM model, you need to do the following:
Enable the Vertex AI API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Supported models
translation-llm-002 (Supports text tuning. In preview .)
Create a tuning job
You can create a supervised fine-tuning job by using the REST API or
the Vertex AI SDK for Python.
REST
To create a model tuning job, send a POST request by using the
tuningJobs.create
method. Some of the parameters are not supported by all of the models. Ensure
that you include only the applicable parameters for the model that you're
tuning.
Before using any of the request data,
make the following replacements:
PROJECT_ID : PROJECT_ID.
TUNING_JOB_REGION : The region where the tuning job runs. This is also the default region for where the tuned model is uploaded. Supported region: us-central1 .
BASE_MODEL : Name of the
translation model to tune. Supported values: translation-llm-002 .
TRAINING_DATASET_URI : Cloud Storage URI of your training dataset. The dataset must be formatted as a JSONL file. For best results, provide at least 100 to 500 examples. For more information, see About supervised tuning dataset .
VALIDATION_DATASET_URI Optional: The Cloud Storage URI of your validation dataset file.
TUNED_MODEL_DISPLAYNAME Optional: A display
name for the tuned model. If not set, a random name is generated.
HTTP method and URL:
POST https:// TUNING_JOB_REGION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ TUNING_JOB_REGION /tuningJobs
Request JSON body:
{
"baseModel": " BASE_MODEL ",
"supervisedTuningSpec" : {
"trainingDatasetUri": " TRAINING_DATASET_URI ",
"validationDatasetUri": " VALIDATION_DATASET_URI ",
},
"tunedModelDisplayName": " TUNED_MODEL_DISPLAYNAME "
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// TUNING_JOB_REGION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ TUNING_JOB_REGION /tuningJobs"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// TUNING_JOB_REGION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ TUNING_JOB_REGION /tuningJobs" | Select-Object -Expand Content
You should receive a JSON response similar to the following.
Response
{
"name": "projects/ PROJECT_ID /locations/ TUNING_JOB_REGION /tuningJobs/ TUNING_JOB_ID ",
"createTime": CREATE_TIME ,
"updateTime": UPDATE_TIME ,
"status": " STATUS ",
"supervisedTuningSpec": {
"trainingDatasetUri": " TRAINING_DATASET_URI ",
"validationDatasetUri": " VALIDATION_DATASET_URI ",
},
"tunedModelDisplayName": " TUNED_MODEL_DISPLAYNAME "
}
Python
from vertexai.generative_models import GenerativeModel
sft_tuning_job = sft . SupervisedTuningJob ( "projects/<PROJECT_ID>/locations/<TUNING_JOB_REGION>/tuningJobs/<TUNING_JOB_ID>" )
tuned_model = GenerativeModel ( sft_tuning_job . tuned_model_endpoint_name )
print ( tuned_model . generate_content ( content ))
import time
import vertexai
from vertexai.tuning import sft
# TODO(developer): Update and un-comment below line.
# PROJECT_ID = os.environ["GOOGLE_CLOUD_PROJECT"]
vertexai . init ( project = PROJECT_ID , location = "us-central1" )
sft_tuning_job = sft . train (
source_model = "translation-llm-002" ,
train_dataset = "gs://cloud-samples-data/ai-platform/generative_ai/gemini-2_0/text/sft_train_data.jsonl" ,
# The following parameters are optional
validation_dataset = "gs://cloud-samples-data/ai-platform/generative_ai/gemini-2_0/text/sft_validation_data.jsonl" ,
tuned_model_display_name = "tuned_translation_llm_002" ,
)
# Polling for job completion
while not sft_tuning_job . has_ended :
time . sleep ( 60 )
sft_tuning_job . refresh ()
print ( sft_tuning_job . tuned_model_name )
print ( sft_tuning_job . tuned_model_endpoint_name )
print ( sft_tuning_job . experiment )
# Example response:
# projects/123456789012/locations/us-central1/models/1234567890@1
# projects/123456789012/locations/us-central1/endpoints/123456789012345
# <google.cloud.aiplatform.metadata.experiment_resources.Experiment object at 0x7b5b4ae07af0>
View a list of tuning jobs
You can view a list of tuning jobs in your current project by using the Google Cloud console,
the Vertex AI SDK for Python, or by sending a GET request by using the tuningJobs method.
REST
To view a list of model tuning jobs, send a GET request by using the
tuningJobs.list
method.
Before using any of the request data,
make the following replacements:
PROJECT_ID : PROJECT_ID.
TUNING_JOB_REGION : The region where the tuning job runs. This is also the default region for where the tuned model is uploaded.
HTTP method and URL:
GET https:// TUNING_JOB_REGION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ TUNING_JOB_REGION /tuningJobs
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
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https:// TUNING_JOB_REGION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ TUNING_JOB_REGION /tuningJobs"
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https:// TUNING_JOB_REGION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ TUNING_JOB_REGION /tuningJobs" | Select-Object -Expand Content
You should receive a JSON response similar to the following.
Response
{
"tuning_jobs": [
TUNING_JOB_1 , TUNING_JOB_2 , ...
]
}
Python
import vertexai
from vertexai.tuning import sft
# TODO(developer): Update and un-comment below line
# PROJECT_ID = "your-project-id"
vertexai . init ( project = PROJECT_ID , location = "us-central1" )
responses = sft . SupervisedTuningJob . list ()
for response in responses :
print ( response )
# Example response:
# <vertexai.tuning._supervised_tuning.SupervisedTuningJob object at 0x7c85287b2680>
# resource name: projects/12345678/locations/us-central1/tuningJobs/123456789012345
Console
To view your tuning jobs in the Google Cloud console, go to the
Vertex AI Studio page.
Go to Vertex AI Studio
See your Translation LLM tuning jobs listed in the table under the Translation LLM tuned models
section.
Get details of a tuning job
You can get the details of a tuning job in your current project
by using the Google Cloud console, the Vertex AI SDK for Python, or by sending a GET
request by using the tuningJobs method.
REST
To view a list of model tuning jobs, send a GET request by using the
tuningJobs.get
method and specify the TuningJob_ID .
Before using any of the request data,
make the following replacements:
PROJECT_ID : PROJECT_ID.
TUNING_JOB_REGION : The region where the tuning job runs. This is also the default region for where the tuned model is uploaded.
TUNING_JOB_ID : The ID of the tuning job.
HTTP method and URL:
GET https:// TUNING_JOB_REGION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ TUNING_JOB_REGION /tuningJobs/ TUNING_JOB_ID
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
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https:// TUNING_JOB_REGION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ TUNING_JOB_REGION /tuningJobs/ TUNING_JOB_ID "
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https:// TUNING_JOB_REGION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ TUNING_JOB_REGION /tuningJobs/ TUNING_JOB_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following.
Response
{
"name": "projects/ PROJECT_ID /locations/ TUNING_JOB_REGION /tuningJobs/ TUNING_JOB_ID ",
"tunedModelDisplayName": " TUNED_MODEL_DISPLAYNAME ",
"createTime": CREATE_TIME ,
"endTime": END_TIME ,
"tunedModel": {
"model": "projects/ PROJECT_ID /locations/ TUNING_JOB_REGION /models/ MODEL_ID ",
"endpoint": "projects/ PROJECT_ID /locations/ TUNING_JOB_REGION /endpoints/ ENDPOINT_ID "
},
"experiment": "projects/ PROJECT_ID /locations/ TUNING_JOB_REGION /metadataStores/default/contexts/ EXPERIMENT_ID ",
"tuning_data_statistics": {
"supervisedTuningDataStats": {
"tuninDatasetExampleCount": " TUNING_DATASET_EXAMPLE_COUNT ",
"totalBillableTokenCount": " TOTAL_BILLABLE_TOKEN_COUNT ",
"tuningStepCount": " TUNING_STEP_COUNT "
}
},
"status": " STATUS ",
"supervisedTuningSpec" : {
"trainingDatasetUri": " TRAINING_DATASET_URI ",
"validationDataset_uri": " VALIDATION_DATASET_URI ",
"hyperParameters": {
"epochCount": EPOCH_COUNT ,
"learningRateMultiplier": LEARNING_RATE_MULTIPLIER
}
}
}
Python
import vertexai
from vertexai.tuning import sft
# TODO(developer): Update and un-comment below lines
# PROJECT_ID = "your-project-id"
# LOCATION = "us-central1"
vertexai . init ( project = PROJECT_ID , location = LOCATION )
tuning_job_id = "4982013113894174720"
response = sft . SupervisedTuningJob (
f "projects/ { PROJECT_ID } /locations/ { LOCATION } /tuningJobs/ { tuning_job_id } "
)
print ( response )
# Example response:
# <vertexai.tuning._supervised_tuning.SupervisedTuningJob object at 0x7cc4bb20baf0>
# resource name: projects/1234567890/locations/us-central1/tuningJobs/4982013113894174720
Console
To view details of a tuned model in the Google Cloud console, go to the
Vertex AI Studio page.
Go to Vertex AI Studio
In the Translation LLM tuned models table, find your model and click
Details .
The details of your model are shown.
Cancel a tuning job
You can cancel a tuning job in your current project by using the Google Cloud console,
the Vertex AI SDK for Python, or by sending a POST request using the tuningJobs method.
REST
To view a list of model tuning jobs, send a GET request by using the
tuningJobs.cancel
method and specify the TuningJob_ID .
Before using any of the request data,
make the following replacements:
PROJECT_ID : PROJECT_ID.
TUNING_JOB_REGION : The region where the tuning job runs. This is also the default region for where the tuned model is uploaded.
TUNING_JOB_ID : The ID of the tuning job.
HTTP method and URL:
POST https:// TUNING_JOB_REGION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ TUNING_JOB_REGION /tuningJobs/ TUNING_JOB_ID :cancel
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
Execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https:// TUNING_JOB_REGION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ TUNING_JOB_REGION /tuningJobs/ TUNING_JOB_ID :cancel"
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -Uri "https:// TUNING_JOB_REGION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ TUNING_JOB_REGION /tuningJobs/ TUNING_JOB_ID :cancel" | Select-Object -Expand Content
You should receive a JSON response similar to the following.
Response
{}
Python
import vertexai
from vertexai.tuning import sft
# TODO(developer): Update and un-comment below lines
# PROJECT_ID = "your-project-id"
# LOCATION = "us-central1"
vertexai . init ( project = PROJECT_ID , location = LOCATION )
tuning_job_id = "4982013113894174720"
job = sft . SupervisedTuningJob (
f "projects/ { PROJECT_ID } /locations/ { LOCATION } /tuningJobs/ { tuning_job_id } "
)
job . cancel ()
Console
To cancel a tuning job in the Google Cloud console, go to the
Vertex AI Studio page.
Go to Vertex AI Studio
In the Translation tuned models table, click more_vert Manage run .
Click Cancel .
Get information about a model
After training is complete, you can get information about the model such as the
model ID.
To see a list of the available models, go to the Vertex AI Endpoints page.
Go to the
Vertex AI Endpoints page
Use the tuned model
The following example translates text by using a custom model with a model ID of
1395675701985363739 . To use the custom Translation LLM, specify
models/translation-llm-custom/{model-id}
as the model ID.
You can specify the model to use for translation by using the
model
query parameter.
REST
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project ID.
LOCATION : The region where the custom model is located, such as
us-central1 .
HTTP method and URL:
POST https://translation.googleapis.com/v3/projects/ PROJECT_ID /locations/ LOCATION :translateText
Request JSON body:
{
"model": "projects/ PROJECT_ID /locations/ LOCATION /model/translation-llm-custom/1395675701985363739",
"sourceLanguageCode": "en",
"targetLanguageCode": "ru",
"contents": ["Dr. Watson, please discard your trash. You've shared unsolicited email with me.
Let's talk about spam and importance ranking in a confidential mode."]
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT_ID " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://translation.googleapis.com/v3/projects/ PROJECT_ID /locations/ LOCATION :translateText"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT_ID " } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://translation.googleapis.com/v3/projects/ PROJECT_ID /locations/ LOCATION :translateText" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"translation": {
"translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора.
Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о
спаме и важности рейтинга в конфиденциальном режиме.",
"model": "projects/ PROJECT_NUMBER /locations/ LOCATION /model/translation-llm-custom/1395675701985363739"
}
}
Python
from google.cloud import translate
def translate_text_with_model (
text : str = "YOUR_TEXT_TO_TRANSLATE" ,
project_id : str = "YOUR_PROJECT_ID" ,
model_id : str = "YOUR_MODEL_ID" ,
) - > translate . TranslationServiceClient :
"""Translates a given text using Translation custom model."""
client = translate . TranslationServiceClient ()
location = "us-central1"
parent = f "projects/ { project_id } /locations/ { location } "
model_path = f " { parent } /models/translation-llm-custom/ { model_id } "
# Supported language codes: https://cloud.google.com/translate/docs/languages
response = client . translate_text (
request = {
"contents" : [ text ],
"target_language_code" : "ja" ,
"model" : model_path ,
"source_language_code" : "en" ,
"parent" : parent ,
"mime_type" : "text/plain" , # mime types: text/plain, text/html
}
)
# Display the translation for each input text provided
for translation in response . translations :
print ( f "Translated text: { translation . translated_text } " )
return response
Tuning and validation metrics
You can configure a model tuning job to collect and report model tuning and
model evaluation metrics, which can then be visualized in
Vertex AI Studio .
To view details of a tuned model in the Google Cloud console, go to the
Vertex AI Studio page.
Go to Vertex AI Studio
In the Tune and Distill table, click the name of the tuned model
that you want to view metrics for.
The tuning metrics appear under the Monitor tab.
Model tuning metrics
The model tuning job automatically collects the following tuning metrics
for translation-llm-002 .
/train_total_loss : Loss for the tuning dataset at a training step.
/train_fraction_of_correct_next_step_preds : The token accuracy at a training
step. A single inference consists of a sequence of predicted tokens. This metric
measures the accuracy of the predicted tokens when compared to the ground
truth in the tuning dataset.
/train_num_predictions: Number of predicted tokens at a training step.
Model validation metrics:
You can configure a model tuning job to collect the following validation metrics
for translation-llm-002 .
/eval_total_loss : Loss for the validation dataset at a validation step.
/eval_fraction_of_correct_next_step_preds : The token accuracy at an
validation step. A single inference consists of a sequence of predicted tokens. This
metric measures the accuracy of the predicted tokens when compared to the
ground truth in the validation dataset.
/eval_num_predictions : Number of predicted tokens at a validation step.
The metrics visualizations are available after the tuning job starts running.
It will be updated in real time while tuning progresses.
If you don't specify a validation dataset when you create the tuning job, only
the visualizations for the tuning metrics are available.
What's next
To learn how supervised fine-tuning can be used in a solution that builds a
generative AI knowledge base, see Jump Start Solution: Generative AI
knowledge base .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
