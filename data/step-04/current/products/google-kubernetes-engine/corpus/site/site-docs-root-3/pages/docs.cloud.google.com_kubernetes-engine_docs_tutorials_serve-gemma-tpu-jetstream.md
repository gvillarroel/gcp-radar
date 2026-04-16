---
title: "Serve Gemma using TPUs on GKE with JetStream \_|\_ Kubernetes Engine \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-tpu-jetstream
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/learn/get-started-with-kubernetes
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-tpu-jetstream
  title: "Serve Gemma using TPUs on GKE with JetStream \_|\_ Kubernetes Engine \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Documentation
Guides
Send feedback
Serve Gemma using TPUs on GKE with JetStream
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
Note: vLLM is now the recommended solution for serving LLMs on TPUs in
GKE. To get started, see
Serve an LLM using TPU Trillium on GKE with vLLM .
This tutorial shows you how to serve a
Gemma large language model (LLM)
using Tensor Processing Units (TPUs) on Google Kubernetes Engine (GKE). You deploy a
pre-built container with
JetStream and
MaxText to GKE. You also
configure GKE to load the Gemma 7B weights from
Cloud Storage at runtime.
This tutorial is intended for Machine learning (ML) engineers,
Platform admins and operators, and for Data and AI specialists who are interested
in using Kubernetes container orchestration capabilities for serving LLMs. To
learn more about common roles and example tasks that we reference in
Google Cloud content, see
Common GKE user roles and tasks .
Before reading this page, ensure that you're familiar with the following:
Autopilot mode and Standard mode
Current TPU version availability with the
Cloud TPU system architecture
TPUs in GKE
Background
This section describes the key technologies used in this tutorial.
Gemma
Gemma is
a set of openly available, lightweight, generative artificial intelligence (AI)
models released under an open license. These AI models are available to run
in your applications, hardware, mobile devices, or hosted services.
You can use the Gemma models for text generation, however you can also
tune these models for specialized tasks.
To learn more, see the Gemma documentation .
TPUs
TPUs are Google's custom-developed application-specific integrated circuits
(ASICs) used to accelerate machine learning and AI models built using frameworks
such as TensorFlow ,
PyTorch , and JAX .
This tutorial covers serving the Gemma 7B model. GKE
deploys the model on single-host TPUv5e nodes with TPU topologies configured
based on the model requirements for serving prompts with low latency.
JetStream
JetStream is an open source inference
serving framework developed by Google. JetStream enables high-performance,
high-throughput, and memory-optimized inference on TPUs and GPUs. It
provides advanced performance optimizations, including continuous batching and
quantization techniques, to facilitate LLM deployment. JetStream enables
PyTorch/XLA and JAX TPU serving to achieve optimal performance.
To learn more about these optimizations, refer to the JetStream PyTorch and JetStream MaxText
project repositories.
MaxText
MaxText is a performant, scalable, and
adaptable JAX LLM implementation, built on open source JAX libraries such as
Flax , Orbax ,
and Optax . MaxText's decoder-only
LLM implementation is written in Python. It leverages the XLA compiler heavily
to achieve high performance without needing to build custom kernels.
To learn more about the latest models and parameter sizes that MaxText supports,
see the MaxtText project repository .
Objectives
Prepare a GKE Autopilot or Standard cluster
with the recommended TPU topology based on the model characteristics.
Deploy JetStream components on GKE.
Get and publish the Gemma 7B instruction tuned model.
Serve and interact with the published model.
Architecture
This section describes the GKE architecture used in this tutorial.
The architecture comprises a GKE Autopilot or
Standard cluster that provisions TPUs and hosts JetStream components
to deploy and serve the models.
The following diagram shows you the components of this architecture:
This architecture includes the following components:
A GKE Autopilot or Standard regional cluster.
Two single-host TPU slice node pools that host the JetStream deployment.
The Service component spreads inbound traffic to all JetStream HTTP replicas.
JetStream HTTP is an HTTP server which accepts requests as a wrapper to
JetStream's required format and sends it to JetStream's GRPC client .
Maxengine is a JetStream server that performs inferencing with continuous batching.
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
Enable the required API.
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
Enable the required API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Make sure that you have the following role or roles on the project:
roles/container.admin, roles/iam.serviceAccountAdmin, roles/resourcemanager.projectIamAdmin
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Ensure that you have sufficient quota for eight TPU v5e PodSlice Lite chips.
In this tutorial, you use on-demand instances .
Create a Kaggle account , if you don't already have one.
Get access to the model
To get access to the Gemma model for deployment to
GKE, you must first sign the license consent agreement.
Sign the license consent agreement
You must sign the consent agreement to use Gemma.
Follow these instructions:
Access the Gemma model consent page on Kaggle.com.
Login to Kaggle if you haven't done so already.
Click Request Access .
In the Choose Account for Consent section, select Verify via Kaggle
Account to use your Kaggle account for consent.
Accept the model Terms and Conditions .
Generate an access token
To access the model through Kaggle, you need a Kaggle API token.
Follow these steps to generate a new token if you don't have one already:
In your browser, go to Kaggle settings .
Under the API section, click Create New Token .
A file named kaggle.json is downloaded.
Prepare the environment
In this tutorial, you use Cloud Shell to manage resources hosted on
Google Cloud. Cloud Shell comes preinstalled with the software you'll need
for this tutorial, including
kubectl and
gcloud CLI .
To set up your environment with Cloud Shell, follow these steps:
In the Google Cloud console, launch a Cloud Shell session by clicking
Activate Cloud Shell in the Google Cloud console . This launches a session in the
bottom pane of Google Cloud console.
Set the default environment variables:
gcloud config set project PROJECT_ID
gcloud config set billing/quota_project PROJECT_ID
export PROJECT_ID = $( gcloud config get project )
export CLUSTER_NAME = CLUSTER_NAME
export BUCKET_NAME = BUCKET_NAME
export CONTROL_PLANE_LOCATION = CONTROL_PLANE_LOCATION
export NODE_LOCATION = NODE_LOCATION
export CLUSTER_VERSION = CLUSTER_VERSION
Replace the following values:
PROJECT_ID : your Google Cloud project ID .
CLUSTER_NAME : the name of your GKE cluster.
BUCKET_NAME : the name of your Cloud Storage bucket.
You don't need to specify the gs:// prefix.
CONTROL_PLANE_LOCATION : the Compute Engine
region of the control plane of your
cluster. This region must contain zones where TPU v5e machine types are available
(for example, us-west1 , us-west4 , us-central1 , us-east1 , us-east5 , or europe-west4 ).
For Autopilot clusters, ensure that you have sufficient
TPU v5e zonal resources for your region of choice.
(Standard cluster only) NODE_LOCATION : the zone
where the TPU resources are available
(for example, us-west4-a ). For Autopilot clusters, you don't need to
specify this value.
CLUSTER_VERSION : the GKE version, which must support the machine type that you want to use. Note that the default GKE version might not have availability for your target TPU. For a list of minimum GKE versions available by TPU machine type, see TPU availability in GKE .
Create and configure Google Cloud resources
Follow these instructions to create the required resources.
Note: You may need to create a capacity reservation for usage of some accelerators. To learn how to reserve and consume reserved resources, see Consuming reserved zonal resources .
Create a GKE cluster
You can serve Gemma on TPUs in a GKE Autopilot
or Standard cluster. We recommend that you use a Autopilot
cluster for a fully managed Kubernetes experience. To choose the GKE mode of operation that's the best fit for your workloads, see Choose a GKE mode of operation .
Autopilot
In Cloud Shell, run the following command:
gcloud container clusters create-auto ${ CLUSTER_NAME } \
--project = ${ PROJECT_ID } \
--location = ${ CONTROL_PLANE_LOCATION } \
--cluster-version = ${ CLUSTER_VERSION }
Standard
Create a regional GKE Standard cluster that uses Workload Identity Federation for GKE .
gcloud container clusters create ${ CLUSTER_NAME } \
--enable-ip-alias \
--machine-type = e2-standard-4 \
--num-nodes = 2 \
--cluster-version = ${ CLUSTER_VERSION } \
--workload-pool = ${ PROJECT_ID } .svc.id.goog \
--location = ${ CONTROL_PLANE_LOCATION }
The cluster creation might take several minutes.
Run the following command to create a
node pool for your cluster:
gcloud container node-pools create gemma-7b-tpu-nodepool \
--cluster = ${ CLUSTER_NAME } \
--machine-type = ct5lp-hightpu-8t \
--project = ${ PROJECT_ID } \
--num-nodes = 2 \
--location = ${ CONTROL_PLANE_LOCATION } \
--node-locations = ${ NODE_LOCATION }
GKE creates a TPU v5e node pool with a 2x4 topology
and two nodes.
Create a Cloud Storage bucket
In Cloud Shell, run the following command:
gcloud storage buckets create gs:// ${ BUCKET_NAME } --location = ${ CONTROL_PLANE_LOCATION }
This creates a Cloud Storage bucket to store the model files you
download from Kaggle.
Upload the access token to Cloud Shell
In Cloud Shell, you can upload the Kaggle API token to your Google Cloud
project:
In Cloud Shell, click more_vert More > Upload .
Select File and click Choose Files .
Open the kaggle.json file.
Click Upload .
Create a Kubernetes Secret for Kaggle credentials
In Cloud Shell, do the following:
Configure kubectl to communicate with your cluster:
gcloud container clusters get-credentials ${ CLUSTER_NAME } --location = ${ CONTROL_PLANE_LOCATION }
Create a Secret to store the Kaggle credentials:
kubectl create secret generic kaggle-secret \
--from-file = kaggle.json
Configure your workloads access using Workload Identity Federation for GKE
Assign a Kubernetes ServiceAccount to the application and configure that Kubernetes ServiceAccount to act as an
IAM service account.
Create an IAM service account for your application:
gcloud iam service-accounts create wi-jetstream
Add an IAM policy binding for your IAM service account to
manage Cloud Storage:
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member "serviceAccount:wi-jetstream@ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role roles/storage.objectUser
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member "serviceAccount:wi-jetstream@ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role roles/storage.insightsCollectorService
Allow the Kubernetes ServiceAccount to impersonate the IAM service account by adding an IAM
policy binding between the two service accounts. This binding allows the Kubernetes
ServiceAccount to act as the IAM service account:
gcloud iam service-accounts add-iam-policy-binding wi-jetstream@ ${ PROJECT_ID } .iam.gserviceaccount.com \
--role roles/iam.workloadIdentityUser \
--member "serviceAccount: ${ PROJECT_ID } .svc.id.goog[default/default]"
Annotate
the Kubernetes service account with the email address of the IAM
service account:
kubectl annotate serviceaccount default \
iam.gke.io/gcp-service-account = wi-jetstream@ ${ PROJECT_ID } .iam.gserviceaccount.com
Convert the model checkpoints
In this section, you create a Job to do the following:
Download the base Orbax checkpoint from Kaggle.
Upload the checkpoint to a Cloud Storage bucket.
Convert the checkpoint to a MaxText compatible checkpoint.
Unscan the checkpoint to be used for serving.
Deploy the model checkpoint conversion Job
Follow these instructions to download and convert the Gemma 7B
model checkpoint files. This tutorial uses a Kubernetes Job. A Job controller in Kubernetes creates one or more
Pods and helps ensure that they successfully execute a specific
task.
Create the following manifest as job-7b.yaml .
apiVersion : batch/v1
kind : Job
metadata :
name : data-loader-7b
spec :
ttlSecondsAfterFinished : 30
template :
spec :
restartPolicy : Never
containers :
- name : inference-checkpoint
image : us-docker.pkg.dev/cloud-tpu-images/inference/inference-checkpoint:v0.2.4
args :
- -b= BUCKET_NAME
- -m=google/gemma/maxtext/7b-it/2
volumeMounts :
- mountPath : "/kaggle/"
name : kaggle-credentials
readOnly : true
resources :
requests :
google.com/tpu : 8
limits :
google.com/tpu : 8
nodeSelector :
cloud.google.com/gke-tpu-topology : 2x4
cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice
volumes :
- name : kaggle-credentials
secret :
defaultMode : 0400
secretName : kaggle-secret
Apply the manifest:
kubectl apply -f job-7b.yaml
Wait for the Pod scheduling the Job to begin running:
kubectl get pod -w
The output will be similar to the following, this may take a few minutes:
NAME READY STATUS RESTARTS AGE
data-loader-7b-abcd 0/1 ContainerCreating 0 28s
data-loader-7b-abcd 1/1 Running 0 51s
For Autopilot clusters, it may take a few minutes to provision the required TPU resources.
View the logs from the Job:
kubectl logs -f jobs/data-loader-7b
When the Job is completed, the output is similar to the following:
Successfully generated decode checkpoint at: gs:// BUCKET_NAME /final/unscanned/gemma_7b-it/0/checkpoints/0/items
+ echo -e '\nCompleted unscanning checkpoint to gs:// BUCKET_NAME /final/unscanned/gemma_7b-it/0/checkpoints/0/items'
Completed unscanning checkpoint to gs:// BUCKET_NAME /final/unscanned/gemma_7b-it/0/checkpoints/0/items
Deploy JetStream
In this section, you deploy the JetStream container to serve the Gemma
model.
Follow these instructions to deploy the Gemma 7B
instruction tuned model. This tutorial uses a Kubernetes Deployment. A Deployment is a Kubernetes API object that lets you run multiple replicas of Pods that are distributed among the nodes in a cluster..
Save the following Deployment manifest as
jetstream-gemma-deployment.yaml :
apiVersion : apps/v1
kind : Deployment
metadata :
name : maxengine-server
spec :
replicas : 1
selector :
matchLabels :
app : maxengine-server
template :
metadata :
labels :
app : maxengine-server
spec :
nodeSelector :
cloud.google.com/gke-tpu-topology : 2x4
cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice
containers :
- name : maxengine-server
image : us-docker.pkg.dev/cloud-tpu-images/inference/maxengine-server:v0.2.2
args :
- model_name=gemma-7b
- tokenizer_path=assets/tokenizer.gemma
- per_device_batch_size=4
- max_prefill_predict_length=1024
- max_target_length=2048
- async_checkpointing=false
- ici_fsdp_parallelism=1
- ici_autoregressive_parallelism=-1
- ici_tensor_parallelism=1
- scan_layers=false
- weight_dtype=bfloat16
- load_parameters_path=gs:// BUCKET_NAME /final/unscanned/gemma_7b-it/0/checkpoints/0/items
- prometheus_port= PROMETHEUS_PORT
ports :
- containerPort : 9000
resources :
requests :
google.com/tpu : 8
limits :
google.com/tpu : 8
- name : jetstream-http
image : us-docker.pkg.dev/cloud-tpu-images/inference/jetstream-http:v0.2.2
ports :
- containerPort : 8000
---
apiVersion : v1
kind : Service
metadata :
name : jetstream-svc
spec :
selector :
app : maxengine-server
ports :
- protocol : TCP
name : jetstream-http
port : 8000
targetPort : 8000
- protocol : TCP
name : jetstream-grpc
port : 9000
targetPort : 9000
The manifest sets the following key properties:
tokenizer_path : the path to your model's tokenizer.
load_parameters_path : the path in the Cloud Storage bucket where your checkpoints are stored.
per_device_batch_size : the decoding batch size per device, where one TPU chip equals one device.
max_prefill_predict_length : the maximum length for the prefill when doing autoregression.
max_target_length : the maximum sequence length.
model_name : the model name ( gemma-7b ).
ici_fsdp_parallelism : the number of shards for fully sharded data parallelism (FSDP).
ici_tensor_parallelism : the number of shards for tensor parallelism.
ici_autoregressive_parallelism : the number of shards for autoregressive parallelism.
prometheus_port : port to expose prometheus metrics. Remove this argument if metrics aren't needed.
scan_layers : scan layers boolean flag (boolean).
weight_dtype : the weight data type (bfloat16).
Apply the manifest:
kubectl apply -f jetstream-gemma-deployment.yaml
Verify the Deployment:
kubectl get deployment
The output is similar to the following:
NAME READY UP-TO-DATE AVAILABLE AGE
maxengine-server 2/2 2 2 ##s
For Autopilot clusters, it may take a few minutes to provision the required TPU resources.
View the HTTP server logs to check that the model has been loaded and compiled.
It may take the server a few minutes to complete this operation.
kubectl logs deploy/maxengine-server -f -c jetstream-http
The output is similar to the following:
kubectl logs deploy/maxengine-server -f -c jetstream-http
INFO: Started server process [1]
INFO: Waiting for application startup.
INFO: Application startup complete.
INFO: Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
View the MaxEngine logs and verify that the compilation is done.
kubectl logs deploy/maxengine-server -f -c maxengine-server
The output is similar to the following:
2024-03-29 17:09:08,047 - jax._src.dispatch - DEBUG - Finished XLA compilation of jit(initialize) in 0.26236414909362793 sec
2024-03-29 17:09:08,150 - root - INFO - ---------Generate params 0 loaded.---------
Serve the model
In this section, you interact with the model.
Set up port forwarding
You can access the JetStream Deployment through the ClusterIP Service that you
created in the preceding step. The ClusterIP Services are only reachable from within
the cluster. Therefore, to access the Service from outside the cluster, complete
the following steps:
To establish a port forwarding session, run the following command:
kubectl port-forward svc/jetstream-svc 8000 :8000
Success: You've successfully served Gemma using TPUs on
GKE with JetStream. You can now interact with the model.
Interact with the model using curl
Verify that you can access the JetStream HTTP server by opening a new terminal
and running the following command:
curl --request POST \
--header "Content-type: application/json" \
-s \
localhost:8000/generate \
--data \
'{
"prompt": "What are the top 5 programming languages",
"max_tokens": 200
}'
The initial request can take several seconds to complete due to model warmup.
The output is similar to the following:
{
"response": "\nfor data science in 2023?\n\n**1. Python:**\n- Widely used for data science due to its simplicity, readability, and extensive libraries for data wrangling, analysis, visualization, and machine learning.\n- Popular libraries include pandas, scikit-learn, and matplotlib.\n\n**2. R:**\n- Statistical programming language widely used for data analysis, visualization, and modeling.\n- Popular libraries include ggplot2, dplyr, and caret.\n\n**3. Java:**\n- Enterprise-grade language with strong performance and scalability.\n- Popular libraries include Spark, TensorFlow, and Weka.\n\n**4. C++:**\n- High-performance language often used for data analytics and machine learning models.\n- Popular libraries include TensorFlow, PyTorch, and OpenCV.\n\n**5. SQL:**\n- Relational database language essential for data wrangling and querying large datasets.\n- Popular tools"
}
(Optional) Interact with the model through a Gradio chat interface
In this section, you build a web chat application that lets you interact with
your instruction tuned model.
Gradio is a Python library that has a
ChatInterface wrapper that creates user interfaces for chatbots.
Deploy the chat interface
In Cloud Shell, save the following manifest as gradio.yaml :
apiVersion : apps/v1
kind : Deployment
metadata :
name : gradio
labels :
app : gradio
spec :
replicas : 1
selector :
matchLabels :
app : gradio
template :
metadata :
labels :
app : gradio
spec :
containers :
- name : gradio
image : us-docker.pkg.dev/google-samples/containers/gke/gradio-app:v1.0.3
resources :
requests :
cpu : "512m"
memory : "512Mi"
limits :
cpu : "1"
memory : "512Mi"
env :
- name : CONTEXT_PATH
value : "/generate"
- name : HOST
value : "http://jetstream-svc:8000"
- name : LLM_ENGINE
value : "max"
- name : MODEL_ID
value : "gemma"
- name : USER_PROMPT
value : "<start_of_turn>user\nprompt<end_of_turn>\n"
- name : SYSTEM_PROMPT
value : "<start_of_turn>model\nprompt<end_of_turn>\n"
ports :
- containerPort : 7860
---
apiVersion : v1
kind : Service
metadata :
name : gradio
spec :
selector :
app : gradio
ports :
- protocol : TCP
port : 8080
targetPort : 7860
type : ClusterIP
Apply the manifest:
kubectl apply -f gradio.yaml
Wait for the deployment to be available:
kubectl wait --for = condition = Available --timeout = 300s deployment/gradio
Use the chat interface
In Cloud Shell, run the following command:
kubectl port-forward service/gradio 8080 :8080
This creates a port forward from Cloud Shell to the Gradio service.
Click the Web Preview button which can be found on the top right of the Cloud Shell taskbar. Click Preview on Port 8080 . A new tab opens in your browser.
Interact with Gemma using the Gradio chat interface. Add a prompt and click Submit .
Troubleshoot issues
If you get the message Empty reply from server , it's possible the container has not finished downloading the model data. Check the Pod's logs again for the Connected message which indicates that the model is ready to serve.
If you see Connection refused , verify that your port forwarding is active .
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete the deployed resources
To avoid incurring charges to your Google Cloud account for the resources
that you created in this guide, run the following commands and follow the prompts:
gcloud container clusters delete ${ CLUSTER_NAME } --location = ${ CONTROL_PLANE_LOCATION }
gcloud iam service-accounts delete wi-jetstream@ PROJECT_ID .iam.gserviceaccount.com
gcloud storage rm --recursive gs:// BUCKET_NAME
What's next
Discover how you can run Gemma models on GKE and how to run optimized
AI/ML workloads with GKE platform orchestration capabilities .
Learn more about TPUs in
GKE .
Explore the JetStream GitHub repository .
Explore the Vertex AI Model Garden .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
