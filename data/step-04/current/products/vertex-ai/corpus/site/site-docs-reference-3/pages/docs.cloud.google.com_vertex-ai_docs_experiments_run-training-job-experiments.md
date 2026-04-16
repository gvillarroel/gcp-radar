---
title: "Run training job with experiment tracking \_|\_ Vertex AI \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/experiments/run-training-job-experiments
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/core-release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/experiments/run-training-job-experiments
  title: "Run training job with experiment tracking \_|\_ Vertex AI \_|\_ Google Cloud\
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
Run training job with experiment tracking
Stay organized with collections
Save and categorize content based on your preferences.
Vertex AI provides a managed training service
that lets you
operationalize large scale model training. You can enable experiment tracking
using Vertex AI SDK for Python to capture parameters and performance metrics when
submitting the custom training job.
This feature isn't available when you:
submit a training job through Google Cloud console or Google Cloud CLI,
use TPU in the training job,
use distributed training in the training job.
Both prebuilt training containers
and custom containers are supported
are supported.
Required: A version of the Vertex AI SDK for Python higher than 1.24.1 for
google-cloud-aiplatform is installed. If you are training with TensorFlow,
ensure the protobuf version less than 4.0 is installed to avoid conflicts.
There are two options for logging data to Vertex AI Experiments,
autologging and manual logging.
Autologging is recommended if you are using one of these supported frameworks:
Fastai, Gluon, Keras, LightGBM, Pytorch Lightning, Scikit-learn, Spark,
Statsmodels, XGBoost. If your framework isn't supported, or there are
custom metrics you want to log to your experiment run, you can manually adapt
your training script to log parameters, metrics and artifacts.
AutoLog data
To enable autologging, just set enable_autolog=True ,
see from_local_script .
You have the option to
create an experiment run, or not. If an experiment name isn't specified, one
is created for you.
The Vertex AI SDK for Python handles creating ExperimentRun
resources for you.
Python
def create_custom_job_with_experiment_autologging_sample (
project : str ,
location : str ,
staging_bucket : str ,
display_name : str ,
script_path : str ,
container_uri : str ,
service_account : str ,
experiment : str ,
experiment_run : Optional [ str ] = None ,
) - > None :
aiplatform . init ( project = project , location = location , staging_bucket = staging_bucket , experiment = experiment )
job = aiplatform . CustomJob . from_local_script (
display_name = display_name ,
script_path = script_path ,
container_uri = container_uri ,
enable_autolog = True ,
)
job . run (
service_account = service_account ,
experiment = experiment ,
experiment_run = experiment_run ,
)
project : . You can find these Project IDs in the
Google Cloud console
welcome page.
location : See List of available locations.
staging_bucket : The name you gave your bucket, for example, my_bucket .
display_name : The user-defined name of the CustomJob .
script_path : The path, relative to the working directory on your local
file system, to the script that is the entry point for your training code.
container_uri : The URI of the training container image can be a
Vertex AI
prebuilt training container
or a custom container
service_account :
See Create a service account with required permissions .
experiment : Provide a name for your experiment. The experiment must have a
TensorBoard instance .
You can find your list of experiments in the Google Cloud console by
selecting Experiments in the section nav.
experiment_run : (Optional) Specify a run name. If not specified, a run is
auto-created.
Manually log data
Use the manually log data option to incorporate your training script.
Here's how to change the training script:
import os
import pickle
import pandas as pd
from sklearn.linear_model import LinearRegression
# To use manual logging APIs, import aiplatform
from google.cloud import aiplatform
# Create Dataset
data = { 'A' : [ 1.1 , 2.2 , 4.1 , 5.2 ],
'B' : [ 200 , 212.12 , 22 , 123 ],
'Y' : [ 1 , 0 , 1 , 0 ]}
df = pd . DataFrame ( data )
X = df [[ 'A' , 'B' ]]
Y = df [ 'Y' ]
# Train model
model = LinearRegression () . fit ( X , Y )
# Save the model to gcs
model_dir = os . getenv ( 'AIP_MODEL_DIR' )
model_gcs = model_dir . replace ( 'gs://' , '/gcs/' )
model_name = 'model.joblib'
os . mkdir ( model_gcs )
f = open ( os . path . join ( model_gcs , model_name ), 'wb' )
pickle . dump ( model , f )
f = open ( os . path . join ( model_gcs , model_name ), 'wb' )
pickle . dump ( model , f )
# Call aiplatform's logging APIs to save data to Vertex AI Experiments.
params = model . get_params ()
aiplatform . log_params ( params )
metrics = { "training_accuracy" : model . score ( X , Y )}
aiplatform . log_metrics ( metrics )
You have the option to create an experiment run, or not. If an experiment name
isn't specified, one is created for you.
Learn more, see
Manually log data to an experiment run .
Python
def create_custom_job_with_experiment_sample (
project : str ,
location : str ,
staging_bucket : str ,
display_name : str ,
script_path : str ,
container_uri : str ,
service_account : str ,
experiment : str ,
experiment_run : Optional [ str ] = None ,
) - > None :
aiplatform . init (
project = project ,
location = location ,
staging_bucket = staging_bucket ,
experiment = experiment
)
job = aiplatform . CustomJob . from_local_script (
display_name = display_name ,
script_path = script_path ,
container_uri = container_uri ,
)
job . run (
service_account = service_account ,
experiment = experiment ,
experiment_run = experiment_run ,
)
project : . You can find these Project IDs in the
Google Cloud console
welcome page.
location : See List of available locations
staging_bucket : The name you gave your bucket, for example, my_bucket .
display_name : The user-defined name of the CustomJob .
script_path : The path, relative to the working directory on your local
file system, to the script that is the entry point for your training code.
container_uri : The URI of the training container image can be a
Vertex AI prebuilt training container ,
or a custom container . If you are using
a custom container, be sure
google-cloud-aiplatform>=1.24.0
is installed.
service_account :
See Create a service account with required permissions .
experiment : Provide a name for your experiment. You can find your
list of experiments in the Google Cloud console by selecting Experiments in the section nav.
experiment_run : Specify a run name. If not specified, a run is
be auto-created.
View autologged parameters and metrics
Use the Vertex AI SDK for Python
to compare runs and
get runs data.
The Google Cloud console
provides an easy way to compare these runs.
What's next
Log data to an experiment run
Relevant notebook sample
Custom training autologging
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
