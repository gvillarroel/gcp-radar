---
title: "Enable Cloud Profiler for debugging model training performance debugging \_\
  |\_ Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-profiler
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/core-release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-profiler
  title: "Enable Cloud Profiler for debugging model training performance debugging\
    \ \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
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
Enable Cloud Profiler for debugging model training performance debugging
Stay organized with collections
Save and categorize content based on your preferences.
To see an example of how to profile model training performance,
run the "Profile model training performance using Cloud Profiler in custom training with prebuilt container" notebook in one of the following
environments:
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
This page shows you how to enable
Cloud Profiler
so you can debug model training performance for your serverless training jobs.
Training models can be computationally expensive. Profiler
lets you monitor and optimize your model training performance by
helping you understand the resource consumption of training operations. With
this information, you can pinpoint and fix performance bottlenecks to train
models faster and cheaper.
Before you begin
Ensure that you're using TensorFlow 2.4 or a later version.
Install the Vertex AI SDK
with the cloud_profiler plugin. From your local Docker container, run:
pip install google-cloud-aiplatform[cloud_profiler]
You must have a Vertex AI TensorBoard instance. See
Create a Vertex AI TensorBoard instance
for instructions.
You must have a service account with roles/storage.admin and
roles/aiplatform.user roles. See
Create a service account with required permissions
for instructions.
You must have a Cloud Storage bucket to store Vertex AI TensorBoard
logs. See
Create a Cloud Storage bucket to store Vertex AI TensorBoard logs
for instructions.
Enable Profiler
To enable Profiler for your training job, add the
following to your training script:
Add the cloud_profiler import at your top level imports:
from google.cloud.aiplatform.training_utils import cloud_profiler
Initialize the cloud_profiler plugin by adding:
cloud_profiler . init ()
Example
Here's a sample training script:
#!/usr/bin/env python
import tensorflow as tf
import argparse
import os
from google.cloud.aiplatform.training_utils import cloud_profiler
import time
"""Train an mnist model and use cloud_profiler for profiling."""
def _create_model ():
model = tf . keras . models . Sequential (
[
tf . keras . layers . Flatten ( input_shape = ( 28 , 28 )),
tf . keras . layers . Dense ( 128 , activation = "relu" ),
tf . keras . layers . Dropout ( 0.2 ),
tf . keras . layers . Dense ( 10 ),
]
)
return model
def main ( args ):
strategy = None
if args . distributed :
strategy = tf . distribute . MultiWorkerMirroredStrategy ()
mnist = tf . keras . datasets . mnist
( x_train , y_train ), ( x_test , y_test ) = mnist . load_data ()
x_train , x_test = x_train / 255.0 , x_test / 255.0
if args . distributed :
strategy = tf . distribute . MultiWorkerMirroredStrategy ()
with strategy . scope ():
model = _create_model ()
model . compile (
optimizer = "adam" ,
loss = tf . keras . losses . sparse_categorical_crossentropy ,
metrics = [ "accuracy" ],
)
else :
model = _create_model ()
model . compile (
optimizer = "adam" ,
loss = tf . keras . losses . sparse_categorical_crossentropy ,
metrics = [ "accuracy" ],
)
# Initialize the profiler.
cloud_profiler . init ()
# Use AIP_TENSORBOARD_LOG_DIR to update where logs are written to.
tensorboard_callback = tf . keras . callbacks . TensorBoard (
log_dir = os . environ [ "AIP_TENSORBOARD_LOG_DIR" ], histogram_freq = 1
)
model . fit (
x_train ,
y_train ,
epochs = args . epochs ,
verbose = 0 ,
callbacks = [ tensorboard_callback ],
)
if __name__ == "__main__" :
parser = argparse . ArgumentParser ()
parser . add_argument (
"--epochs" , type = int , default = 100 , help = "Number of epochs to run model."
)
parser . add_argument (
"--distributed" , action = "store_true" , help = "Use MultiWorkerMirroredStrategy"
)
args = parser . parse_args ()
main ( args )
Access the Profiler dashboard
Once you have configured your training script to enable
Profiler,
run the training script with a Vertex AI TensorBoard instance .
In your training script, ensure the following configurations:
Set BASE_OUTPUT_DIR: to the Cloud Storage bucket where you want to store
the Vertex AI TensorBoard logs that's generated by your training script.
Set 'serviceAccount': to the service account that you created with
roles/storage.admin and roles/aiplatform.user roles.
Set 'tensorboard': to the fully qualified name of the
Vertex AI TensorBoard instance that you want to use with this training
job. The fully qualified name has the following format:
projects/PROJECT_NUMBER_OR_ID/locations/REGION/tensorboards/TENSORBOARD_INSTANCE_ID
There are two ways to access the Profiler dashboard
from the Google Cloud console:
From the Custom jobs page.
From the Experiments page.
Access the Profiler dashboard through the Custom jobs page
You can use this method to access the Profiler
dashboard even if the training job is in the Finished state.
In the Google Cloud console, go to the Custom jobs tab on the Training
page.
Go to Custom jobs
Click the name of the training job you just created to go to the job details
page.
Click Open TensorBoard .
Click the Profile tab.
Access the Profiler dashboard through the Experiments page
You can use this method to access the Profiler
dashboard only when the training job is in the Running state.
In the Google Cloud console, go to the Vertex AI Experiments page.
Go to Vertex AI Experiments
Select the region of the training job that you just created.
Click Open TensorBoard next to the name of the training job.
Click the Profile tab.
Capture a profiling session
To capture a profiling session, your training job must be in the Running
state. From the Profile tab in the Vertex AI TensorBoard instance,
perform the following steps:
Click Capture profile .
In the Profile Service URL(s) or TPU name field, enter:
workerpool0-0
For Address type , select IP address .
Click Capture .
Notebook
To see examples of how to profile model training performance,
run the following notebooks in the environment of your choice:
"Profile model training performance using Cloud Profiler":
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
"Profile model training performance using Cloud Profiler in custom training with prebuilt container":
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
What's next
See the
Tensorflow Profiler documentation
to learn about the profiler tools and how to use them to optimize model
performance.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
