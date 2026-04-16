---
title: "Hello image data: Clean up your project \_|\_ Vertex AI \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/cleanup
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/general/access-control
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/cleanup
  title: "Hello image data: Clean up your project \_|\_ Vertex AI \_|\_ Google Cloud\
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
Send feedback
Hello image data: Clean up your project
Stay organized with collections
Save and categorize content based on your preferences.
Clean up the Google Cloud resources that you created to train your image
classification model and get predictions from it. Follow these steps to avoid
incurring unexpected charges from some of the resources.
This tutorial has several pages:
Set up your project and environment.
Create an image classification dataset, and
import images.
Train an AutoML image classification
model.
Evaluate and analyze model performance.
Deploy a model to an endpoint, and send a
prediction.
Clean up your project.
Each page assumes that you have already performed the instructions from the
previous pages of the tutorial.
Delete Vertex AI resources
This section describes how to undeploy your model, and then delete the following
project resources: endpoint, model, dataset, and Cloud Storage bucket.
Undeploy your model
Before you can delete your model and endpoint, you must undeploy the model.
In the Google Cloud console, in the Vertex AI section, go to
the Training page.
Go to the Training page
Select your trained AutoML model. This takes you to the Evaluate tab.
Click the Deploy & test tab.
Find your model. On your model's row, click the three vertical dots more_vert , then click
Undeploy model .
In Undeploy model , click Confirm .
Delete your endpoint
In the Google Cloud console, in the Vertex AI section, go to
the Endpoints page.
Go to the Endpoints page
Find your endpoint, hello_automl_image . On that row, click the three
vertical dots more_vert ,
then click Remove endpoint .
In Remove endpoint , click Confirm .
Delete your model
In the Google Cloud console, in the Vertex AI section, go to
the Models page.
Go to the Models page
Find your model. On that row, click the three vertical dots more_vert , then click Delete
model .
In Delete model and all of its associated versions , click Delete .
Delete your dataset
In the Google Cloud console, in the Vertex AI section, go to
the Datasets page.
Go to the Datasets page
Find your dataset. On that row, click the three vertical dots more_vert , then click Delete
dataset .
In Delete dataset , click Delete .
Clean up your Cloud Shell session
Cloud Shell incurs no charges, and it automatically deletes your home
disk after a period of inactivity .
Delete your Cloud Storage bucket
In the Google Cloud console, go to the Cloud Storage
Buckets page.
Go to Buckets
Click the checkbox for the bucket that you want to delete.
To delete the bucket,
click delete Delete , and then follow the
instructions.
What's next
To learn about additional ways to train ML models on Vertex AI,
try one of the other Vertex AI tutorials .
Read an overview of how Vertex AI
works .
Previous
arrow_back
Deploy a model to an endpoint and make an inference
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
