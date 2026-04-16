---
title: "Hello custom training: Train a custom image classification model \_|\_ Vertex\
  \ AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training
  title: "Hello custom training: Train a custom image classification model \_|\_ Vertex\
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
Send feedback
Hello custom training: Train a custom image classification model
Stay organized with collections
Save and categorize content based on your preferences.
To learn more,
run the following notebooks in the environment of your choice:
"Use the Vertex AI SDK for Python to train and deploy a custom image classification model for batch prediction.":
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
"Use the Vertex AI SDK for Python to train and deploy a custom image classification model for online prediction.":
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
This page shows you how to run a TensorFlow Keras training application on
Vertex AI. This particular model trains an image classification
model that can classify flowers by type.
This tutorial has several pages:
Setting up your project and environment.
Training a custom image classification model.
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
Run a custom training pipeline
This section describes using the training package that you uploaded to
Cloud Storage to run a Vertex AI custom training
pipeline.
In the Google Cloud console, in the Vertex AI section, go to
the Training pipelines page.
Go to Training pipelines
Click add_box
Create to open the Train new model pane.
On the Choose training method step, do the following:
In the Dataset drop-down list, select No managed dataset . This
particular training application loads data from the TensorFlow
Datasets library rather than a managed Vertex AI
dataset.
Ensure that Custom training (advanced) is selected.
Click Continue .
On the Model details step, in the Name field, enter
hello_custom . Click Continue .
On the Training container step, provide Vertex AI with
information it needs to use the training package that you uploaded to
Cloud Storage:
Select Prebuilt container .
In the Model framework drop-down list, select TensorFlow .
In the Model framework version drop-down list, select 2.3 .
In the Package location field, enter
cloud-samples-data/ai-platform/hello-custom/hello-custom-sample-v1.tar.gz .
In the Python module field, enter trainer.task . trainer is the
name of the Python package in your tarball, and task.py contains your
training code. Therefore, trainer.task is the name of the module that
you want Vertex AI to run.
In the Model output directory field, click Browse . Do the
following in the Select folder pane:
Navigate to your Cloud Storage bucket.
Click Create new folder create_new_folder .
Name the new folder output . Then click Create .
Click Select .
Confirm that field has the value
gs:// BUCKET_NAME /output , where BUCKET_NAME
is the name of your Cloud Storage bucket.
This value gets passed to Vertex AI in the
baseOutputDirectory API
field , which sets
several environment variables that your training application can access
when it runs.
For example, when you set this field to
gs:// BUCKET_NAME /output , Vertex AI sets
the AIP_MODEL_DIR environment variable to
gs:// BUCKET_NAME /output/model . At the end of training,
Vertex AI uses any artifacts in the AIP_MODEL_DIR directory
to create a model resource.
Learn more about the environment variables set by this
field .
Click Continue .
On the optional Hyperparameters step, make sure that the Enable
hyperparameter tuning checkbox is cleared. This tutorial does not use
hyperparameter tuning. Click Continue .
On the Compute and pricing step, allocate resources for the custom
training job:
In the Region drop-down list, select us-central1 (Iowa) .
In the Machine type drop-down list, select n1-standard-4 from the
Standard section.
Do not add any accelerators or worker pools for this tutorial. Click
Continue .
On the Prediction container step, provide Vertex AI with
information it needs to serve predictions:
Select Prebuilt container .
In the Prebuilt container settings section, do the following:
In the Model framework drop-down list, select TensorFlow .
In the Model framework version drop-down list, select 2.3 .
In the Accelerator type drop-down list, select None .
Confirm that Model directory field has the value
gs:// BUCKET_NAME /output , where
BUCKET_NAME is the name of your Cloud Storage
bucket. This matches the Model output directory value that you
provided in a previous step.
Leave the fields in the Predict schemata section blank.
Click Start training to start the custom training pipeline.
You can now view your new training pipeline , which is named hello_custom , on
the Training page. (You might need to refresh the page.) The training
pipeline does two main things:
The training pipeline creates a custom job resource named
hello_custom-custom-job . After a few moments, you can view this resource
on the Custom jobs page of the Training section:
Go to Custom jobs
The custom job runs the training application using the computing resources
that you specified in this section.
After the custom job completes, the training pipeline finds the artifacts
that your training application creates in the output/model/ directory of
your Cloud Storage bucket. It uses these artifacts to create
a model resource.
Monitor training
To view training logs, do the following:
In the Google Cloud console, in the Vertex AI section, go to
the Custom jobs page.
Go to Custom jobs
To view details for the CustomJob that you just created, click
hello_custom-custom-job in the list.
On the job details page, click View logs .
View your trained model
When the custom training pipeline completes, you can find the trained model in
the Google Cloud console, in the Vertex AI section, on the
Models page.
Go to Models
The model has the name hello_custom .
What's next
Follow the next page of this tutorial to serve
predictions from your trained ML model.
Previous
arrow_back
Set up your project and environment
Next
Serve predictions from a custom image classification model
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
