---
title: "Tutorial: Perform evaluation using the Python SDK \_|\_ Generative AI on Vertex\
  \ AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/evaluation-quickstart
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/evaluation-quickstart
  title: "Tutorial: Perform evaluation using the Python SDK \_|\_ Generative AI on\
    \ Vertex AI \_|\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Tutorial: Perform evaluation using the Python SDK
To see an example of Getting started with the Vertex AI Python SDK for Gen AI evaluation service,
run the "Getting Started with the Vertex AI Python SDK for Gen AI evaluation service" notebook in one of the following
environments:
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
This page shows you how to perform a model-based evaluation with Gen AI evaluation service using the Vertex AI SDK for Python.
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
Install the Vertex AI SDK for Python with Gen AI evaluation service dependency:
!pip install google-cloud-aiplatform [ evaluation ]
Set up your credentials. If you are running this quickstart in Colaboratory, run the following:
from google.colab import auth
auth . authenticate_user ()
For other environments, refer to Authenticate to Vertex AI .
Import libraries
Import your libraries and set up your project and location.
import pandas as pd
import vertexai
from vertexai.evaluation import EvalTask , PointwiseMetric , PointwiseMetricPromptTemplate
from google.cloud import aiplatform
PROJECT_ID = " PROJECT_ID "
LOCATION = " LOCATION "
EXPERIMENT_NAME = " EXPERIMENT_NAME "
vertexai . init (
project = PROJECT_ID ,
location = LOCATION ,
)
Note that EXPERIMENT_NAME can only contain lowercase alphanumeric characters and hyphens, up to a maximum of 127 characters.
Set up evaluation metrics based on your criteria
The following metric definition evaluates the text quality generated from a large language model based on two criteria: Fluency and Entertaining . The code defines a metric called custom_text_quality using those two criteria:
custom_text_quality = PointwiseMetric (
metric = "custom_text_quality" ,
metric_prompt_template = PointwiseMetricPromptTemplate (
criteria = {
"fluency" : (
"Sentences flow smoothly and are easy to read, avoiding awkward"
" phrasing or run-on sentences. Ideas and sentences connect"
" logically, using transitions effectively where needed."
),
"entertaining" : (
"Short, amusing text that incorporates emojis, exclamations and"
" questions to convey quick and spontaneous communication and"
" diversion."
),
},
rating_rubric = {
"1" : "The response performs well on both criteria." ,
"0" : "The response is somewhat aligned with both criteria" ,
"-1" : "The response falls short on both criteria" ,
},
),
)
Prepare your dataset
Add the following code to prepare your dataset:
responses = [
# An example of good custom_text_quality
"Life is a rollercoaster, full of ups and downs, but it's the thrill that keeps us coming back for more!" ,
# An example of medium custom_text_quality
"The weather is nice today, not too hot, not too cold." ,
# An example of poor custom_text_quality
"The weather is, you know, whatever." ,
]
eval_dataset = pd . DataFrame ({
"response" : responses ,
})
Run evaluation with your dataset
Run the evaluation:
eval_task = EvalTask (
dataset = eval_dataset ,
metrics = [ custom_text_quality ],
experiment = EXPERIMENT_NAME
)
pointwise_result = eval_task . evaluate ()
View the evaluation results for each response in the metrics_table Pandas DataFrame:
pointwise_result . metrics_table
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Delete the ExperimentRun created by the evaluation:
aiplatform . ExperimentRun (
run_name = pointwise_result . metadata [ "experiment_run" ],
experiment = pointwise_result . metadata [ "experiment" ],
) . delete ()
What's next
Define your evaluation metrics .
Prepare your evaluation dataset .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
