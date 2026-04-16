---
title: "Hello custom training: Clean up your project \_|\_ Vertex AI \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/cleanup
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/cleanup
  title: "Hello custom training: Clean up your project \_|\_ Vertex AI \_|\_ Google\
    \ Cloud Documentation"
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
Hello custom training: Clean up your project
Stay organized with collections
Save and categorize content based on your preferences.
This page guides you through cleaning up the Google Cloud resources that you
created to train your image classification model and serve predictions from it.
This tutorial has several pages:
Setting up your project and environment.
Training a custom image classification
model.
Serving predictions from a custom image classification
model.
Cleaning up your project.
Each page assumes that you have already performed the instructions from the
previous pages of the tutorial.
The rest of this document assumes that you are using the same Cloud Shell
environment that you created when following the first page of this
tutorial . If your original Cloud Shell session is no
longer open, you can return to the environment by doing the following:
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
In the Cloud Shell session, run the following command:
cd hello-custom-sample
Delete Vertex AI resources
This section describes how to delete all of the Vertex AI resources
that you created for this tutorial.
Undeploy your model from your endpoint
This section describes how to undeploy your model from your endpoint. You can
think about this action as a way of disconnecting your model from your endpoint.
You must follow this section before you can delete your
endpoint or delete your model .
In the Google Cloud console, in the Vertex AI section, go to
the Endpoints page.
Go to Endpoints
Click hello_custom to go to the endpoint details page.
On the row for your model, hello_custom , click Undeploy model
delete .
In the Undeploy model from endpoint dialog, click Undeploy .
Delete your endpoint
Before you delete an endpoint, you must undeploy your model from your
endpoint . After you've deleted your endpoint, you won't
be able to re-use that endpoint name for up to 7 days.
After you've undeployed your model from the endpoint, do the following
to delete your endpoint:
In the Google Cloud console, in the Vertex AI section, go to
the Endpoints page.
Go to Endpoints
Find your the row of your endpoint, hello_custom , again. On that row, click
View more more_vert . Then click Remove endpoint .
In the Remove endpoint dialog, click Confirm .
Delete your model
Before you follow this section, you must undeploy your model from your
endpoint . Afterward, do the following to delete your model:
In the Google Cloud console, in the Vertex AI section, go to
the Models page.
Go to Models
Find your the row of your model, hello_custom . On that row, click View
more more_vert . Then
click Delete model .
In the Delete model dialog, click Delete .
Delete your custom training pipeline and job
Your training pipeline and custom job are just records of the training that
happened earlier. If you want to delete your custom job, do the following:
In the Google Cloud console, in the Vertex AI section, go to
the Training pipelines page.
Go to Training pipelines
Find your the row of your training pipeline, hello_custom . On that row,
click View more more_vert . Then click Delete training
pipeline .
In the Delete training job dialog, click Delete .
To go to the Custom jobs page, click Custom job in the
Google Cloud console, or click the following link:
Go to Custom jobs
Find your the row of your custom job, hello_custom-custom-job . On that row,
click View more more_vert . Then click Delete custom job .
In the Delete training job dialog, click Delete .
Clean up your Cloud Shell session
Cloud Shell incurs no charges, and it automatically deletes your home
disk after a period of inactivity . However, if you
plan to use Cloud Shell for other purposes in the near future, you
might want to manually remove the files that you created for this tutorial.
In your Cloud Shell session, run the following commands:
cd ..
rm -rf hello-custom-sample
Delete your Cloud Storage bucket
In your Cloud Shell session, run the following command:
gcloud storage rm gs:// BUCKET_NAME --recursive --continue-on-error
Replace BUCKET_NAME with the name of the Cloud Storage
bucket that you created when reading the first page of this
tutorial .
Delete your Cloud Run function
In your Cloud Shell session, run the following command:
gcloud functions delete classify_flower --region = us-central1 --quiet
What's next
To learn about additional ways to train ML models on Vertex AI,
try one of the other Vertex AI tutorials .
Read an overview of how Vertex AI
works .
Previous
arrow_back
Serve predictions from a custom image classification model
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
