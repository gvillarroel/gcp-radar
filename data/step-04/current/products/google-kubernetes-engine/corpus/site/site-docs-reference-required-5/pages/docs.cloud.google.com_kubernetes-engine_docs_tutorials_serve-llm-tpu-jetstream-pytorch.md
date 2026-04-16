---
title: "Serve an LLM using TPUs on GKE with JetStream and PyTorch \_|\_ Kubernetes\
  \ Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llm-tpu-jetstream-pytorch
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llm-tpu-jetstream-pytorch
  title: "Serve an LLM using TPUs on GKE with JetStream and PyTorch \_|\_ Kubernetes\
    \ Engine \_|\_ Google Cloud Documentation"
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
Serve an LLM using TPUs on GKE with JetStream and PyTorch
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
Note: vLLM is now the recommended solution for serving LLMs on TPUs in
GKE. To get started, see
Serve an LLM using TPU Trillium on GKE with vLLM .
This guide shows you how to serve a large language model
(LLM) using Tensor Processing Units (TPUs) on Google Kubernetes Engine (GKE) with
JetStream through
PyTorch . In this guide, you download
model weights to Cloud Storage and deploy them on a GKE
Autopilot
or
Standard
cluster using a container that runs JetStream.
If you need the scalability, resilience, and
cost-effectiveness offered by Kubernetes features when deploying your model on
JetStream, this guide is a good starting point.
This guide is intended for Generative AI customers who use PyTorch, new or
existing users of GKE, ML Engineers, MLOps (DevOps) engineers, or
platform administrators who are interested in using Kubernetes container
orchestration capabilities for serving LLMs.
Background
By serving an LLM using TPUs on GKE with JetStream,
you can build a robust, production-ready serving solution with all
the benefits of managed Kubernetes , including
cost-efficiency, scalability and higher availability. This section describes the
key technologies used in this tutorial.
About TPUs
TPUs are Google's custom-developed application-specific integrated circuits
(ASICs) used to accelerate machine learning and AI models built using frameworks
such as TensorFlow ,
PyTorch , and JAX .
Before you use TPUs in GKE, we recommend that you complete the
following learning path:
Learn about current TPU version availability with the Cloud TPU system architecture .
Learn about TPUs in GKE .
This tutorial covers serving various LLM models. GKE
deploys the model on single-host TPUv5e nodes with TPU topologies configured
based on the model requirements for serving prompts with low latency.
About JetStream
JetStream is an open source inference
serving framework developed by Google. JetStream enables high-performance,
high-throughput, and memory-optimized inference on TPUs and GPUs. JetStream
provides advanced performance optimizations, including continuous batching,
KV cache optimizations, and quantization techniques, to facilitate LLM
deployment. JetStream enables PyTorch/XLA and JAX TPU serving to achieve optimal
performance.
Continuous Batching
Continuous batching is a technique that dynamically groups incoming inference
requests into batches, reducing latency and increasing throughput.
KV cache quantization
KV cache quantization involves compressing the key-value cache used in attention
mechanisms, reducing memory requirements.
Int8 weight quantization
Int8 weight quantization reduces the precision of model weights from 32-bit
floating point to 8-bit integers, leading to faster computation and reduced
memory usage.
To learn more about these optimizations, refer to the JetStream PyTorch and JetStream MaxText
project repositories.
About PyTorch
PyTorch is an open source machine learning framework developed by Meta and now
part of the Linux Foundation umbrella. PyTorch provides high-level features such
as tensor computation and deep neural networks.
Objectives
Prepare a GKE Autopilot or Standard cluster
with the recommended TPU topology based on the model characteristics.
Deploy JetStream components on GKE.
Get and publish your model.
Serve and interact with the published model.
Architecture
This section describes the GKE architecture used in this tutorial.
The architecture includes a GKE Autopilot or
Standard cluster that provisions TPUs and hosts JetStream components
to deploy and serve the models.
The following diagram shows you the components of this architecture:
This architecture includes the following components:
A GKE Autopilot or Standard regional cluster.
Two single-host TPU slice node pools that host the JetStream deployment.
The Service component spreads inbound traffic to all JetStream HTTP replicas.
JetStream HTTP is an HTTP server which accepts requests as a wrapper to
JetStream's required format and sends it to JetStream's GRPC client .
JetStream-PyTorch is a JetStream server that performs inferencing with continuous batching.
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
Check that you have sufficient quota for eight TPU v5e PodSlice Lite chips.
In this tutorial, you use on-demand instances .
Create a Hugging Face token , if you don't already have one.
Get access to the model
Get access to various models on Hugging Face for deployment to GKE
Gemma 7B-it
To get access to the Gemma model for deployment to
GKE, you must first sign the license consent agreement.
Access the Gemma model consent page on Hugging Face
Login to Hugging Face if you haven't done so already.
Review and accept the model Terms and Conditions .
Llama 3 8B
To get access to the Llama 3 model for deployment to GKE,
you must first sign the license consent agreement.
Access the Llama 3 model consent page on Hugging Face
Login to Hugging Face if you haven't done so already.
Review and accept the model Terms and Conditions .
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
export CONTROL_PLANE_LOCATION = CONTROL_PLANE_LOCATION
export NODE_LOCATION = NODE_LOCATION
export CLUSTER_VERSION = CLUSTER_VERSION
export BUCKET_NAME = BUCKET_NAME
Replace the following values:
PROJECT_ID : your Google Cloud project ID .
CLUSTER_NAME : the name of your GKE cluster.
CONTROL_PLANE_LOCATION : the Compute Engine
region of the control plane of your
cluster. The region must contain zones where TPU v5e machine types are available
(for example, us-west1 , us-west4 , us-central1 , us-east1 , us-east5 , or europe-west4 ).
For Autopilot clusters, ensure that you have sufficient
TPU v5e zonal resources for your region of choice.
(Standard cluster only) NODE_LOCATION :
the zone where the TPU resources are available
(for example, us-west4-a ). For Autopilot clusters, you don't need
to specify this value.
CLUSTER_VERSION : the GKE version, which must support the machine type that you want to use. Note that the default GKE version might not have availability for your target TPU. For a list of minimum GKE versions available by TPU machine type, see TPU availability in GKE .
BUCKET_NAME : the name of your Cloud Storage bucket, used to store JAX compilation cache.
Create and configure Google Cloud resources
Follow these instructions to create the required resources.
Note: You may need to create a capacity reservation for usage of some accelerators. To learn how to reserve and consume reserved resources, see Consuming reserved zonal resources .
Create a GKE cluster
You can serve Gemma on TPUs in a GKE Autopilot
or Standard cluster. We recommend that you use a Autopilot
cluster for a fully managed Kubernetes experience. To choose the GKE mode of operation that's the best fit for your workloads, see Choose a GKE mode of operation .
Autopilot
Create an Autopilot GKE cluster:
gcloud container clusters create-auto CLUSTER_NAME \
--project = PROJECT_ID \
--location = CONTROL_PLANE_LOCATION \
--cluster-version = CLUSTER_VERSION
Replace CLUSTER_VERSION with the appropriate cluster version . For a Autopilot GKE
cluster, use a regular release channel version.
Standard
Create a regional GKE Standard cluster that uses Workload Identity Federation for GKE :
gcloud container clusters create CLUSTER_NAME \
--enable-ip-alias \
--machine-type = e2-standard-4 \
--num-nodes = 2 \
--cluster-version = CLUSTER_VERSION \
--workload-pool = PROJECT_ID .svc.id.goog \
--location = CONTROL_PLANE_LOCATION
The cluster creation might take several minutes.
Replace CLUSTER_VERSION with the appropriate cluster version .
Create a TPU v5e node pool
with a 2x4 topology and two nodes:
gcloud container node-pools create tpu-nodepool \
--cluster = CLUSTER_NAME \
--machine-type = ct5lp-hightpu-8t \
--project = PROJECT_ID \
--num-nodes = 2 \
--location = CONTROL_PLANE_LOCATION \
--node-locations = NODE_LOCATION
Generate your Hugging Face CLI token in Cloud Shell
Generate a new Hugging Face token if you don't already have one:
Click Your Profile > Settings > Access Tokens .
Click New Token .
Specify a Name of your choice and a Role of at least Read .
Click Generate a token .
Edit permissions to your access token to have read access to your model's Hugging Face repository.
Copy the generated token to your clipboard.
Create a Kubernetes Secret for Hugging Face credentials
In Cloud Shell, do the following:
Configure kubectl to communicate with your cluster:
gcloud container clusters get-credentials CLUSTER_NAME --location = CONTROL_PLANE_LOCATION
Create a Secret to store the Hugging Face credentials:
kubectl create secret generic huggingface-secret \
--from-literal = HUGGINGFACE_TOKEN = HUGGINGFACE_TOKEN
Replace HUGGINGFACE_TOKEN with your Hugging Face token.
Configure your workloads access using Workload Identity Federation for GKE
Assign a Kubernetes ServiceAccount to the application and configure that Kubernetes ServiceAccount to act as an
IAM service account.
Create an IAM service account for your application:
gcloud iam service-accounts create wi-jetstream
Add an IAM policy binding for your IAM service account to
manage Cloud Storage:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member "serviceAccount:wi-jetstream@ PROJECT_ID .iam.gserviceaccount.com" \
--role roles/storage.objectUser
gcloud projects add-iam-policy-binding PROJECT_ID \
--member "serviceAccount:wi-jetstream@ PROJECT_ID .iam.gserviceaccount.com" \
--role roles/storage.insightsCollectorService
Allow the Kubernetes ServiceAccount to impersonate the IAM service account by adding an IAM
policy binding between the two service accounts. This binding allows the Kubernetes
ServiceAccount to act as the IAM service account:
gcloud iam service-accounts add-iam-policy-binding wi-jetstream@ PROJECT_ID .iam.gserviceaccount.com \
--role roles/iam.workloadIdentityUser \
--member "serviceAccount: PROJECT_ID .svc.id.goog[default/default]"
Annotate
the Kubernetes service account with the email address of the IAM
service account:
kubectl annotate serviceaccount default \
iam.gke.io/gcp-service-account = wi-jetstream@ PROJECT_ID .iam.gserviceaccount.com
Deploy JetStream
Deploy the JetStream container to serve your model. This tutorial uses Kubernetes Deployment manifests. A Deployment is a Kubernetes API object that lets you run multiple replicas of Pods that are distributed among the nodes in a cluster..
Save the following manifest as jetstream-pytorch-deployment.yaml :
Gemma 7B-it
apiVersion : apps/v1
kind : Deployment
metadata :
name : jetstream-pytorch-server
spec :
replicas : 2
selector :
matchLabels :
app : jetstream-pytorch-server
template :
metadata :
labels :
app : jetstream-pytorch-server
spec :
nodeSelector :
cloud.google.com/gke-tpu-topology : 2x4
cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice
containers :
- name : jetstream-pytorch-server
image : us-docker.pkg.dev/cloud-tpu-images/inference/jetstream-pytorch-server:v0.2.4
args :
- --model_id=google/gemma-7b-it
- --override_batch_size=30
- --enable_model_warmup=True
volumeMounts :
- name : huggingface-credentials
mountPath : /huggingface
readOnly : true
ports :
- containerPort : 9000
resources :
requests :
google.com/tpu : 8
limits :
google.com/tpu : 8
startupProbe :
httpGet :
path : /healthcheck
port : 8000
scheme : HTTP
periodSeconds : 60
initialDelaySeconds : 90
failureThreshold : 50
livenessProbe :
httpGet :
path : /healthcheck
port : 8000
scheme : HTTP
periodSeconds : 60
failureThreshold : 30
readinessProbe :
httpGet :
path : /healthcheck
port : 8000
scheme : HTTP
periodSeconds : 60
failureThreshold : 30
- name : jetstream-http
image : us-docker.pkg.dev/cloud-tpu-images/inference/jetstream-http:v0.2.3
ports :
- containerPort : 8000
volumes :
- name : huggingface-credentials
secret :
defaultMode : 0400
secretName : huggingface-secret
---
apiVersion : v1
kind : Service
metadata :
name : jetstream-svc
spec :
selector :
app : jetstream-pytorch-server
ports :
- protocol : TCP
name : jetstream-http
port : 8000
targetPort : 8000
Llama 3 8B
apiVersion : apps/v1
kind : Deployment
metadata :
name : jetstream-pytorch-server
spec :
replicas : 2
selector :
matchLabels :
app : jetstream-pytorch-server
template :
metadata :
labels :
app : jetstream-pytorch-server
spec :
nodeSelector :
cloud.google.com/gke-tpu-topology : 2x4
cloud.google.com/gke-tpu-accelerator : tpu-v5-lite-podslice
containers :
- name : jetstream-pytorch-server
image : us-docker.pkg.dev/cloud-tpu-images/inference/jetstream-pytorch-server:v0.2.4
args :
- --model_id=meta-llama/Meta-Llama-3-8B
- --override_batch_size=30
- --enable_model_warmup=True
volumeMounts :
- name : huggingface-credentials
mountPath : /huggingface
readOnly : true
ports :
- containerPort : 9000
resources :
requests :
google.com/tpu : 8
limits :
google.com/tpu : 8
startupProbe :
httpGet :
path : /healthcheck
port : 8000
scheme : HTTP
periodSeconds : 60
initialDelaySeconds : 90
failureThreshold : 50
livenessProbe :
httpGet :
path : /healthcheck
port : 8000
scheme : HTTP
periodSeconds : 60
failureThreshold : 30
readinessProbe :
httpGet :
path : /healthcheck
port : 8000
scheme : HTTP
periodSeconds : 60
failureThreshold : 30
- name : jetstream-http
image : us-docker.pkg.dev/cloud-tpu-images/inference/jetstream-http:v0.2.3
ports :
- containerPort : 8000
volumes :
- name : huggingface-credentials
secret :
defaultMode : 0400
secretName : huggingface-secret
---
apiVersion : v1
kind : Service
metadata :
name : jetstream-svc
spec :
selector :
app : jetstream-pytorch-server
ports :
- protocol : TCP
name : jetstream-http
port : 8000
targetPort : 8000
The manifest sets the following key properties:
model_id : the model name from Hugging Face ( google/gemma-7b-it , meta-llama/Meta-Llama-3-8B ) (see the supported models ).
override_batch_size : the decoding batch size per device, where one TPU chip equals one device. This value defaults to 30 .
enable_model_warmup : this setting enables model warmup after the model server has started. This value defaults to False .
You can optionally set these properties:
max_input_length : the maximum input sequence length. This value defaults to 1024 .
max_output_length : the maximum output decode length, this value defaults to 1024 .
quantize_weights : whether the checkpoint is quantized. This value defaults to 0 ; set it to 1 to enable int8 quantization.
internal_jax_compilation_cache : the directory for the JAX compilation cache. This value defaults to ~/jax_cache ; set it to gs:// BUCKET_NAME /jax_cache for remote caching.
In the manifest, a startup probe
is configured to ensure that the model server is labeled Ready after the
model has been loaded and warmup has completed. Liveness and readiness probes are configured to ensure the healthiness of the model server.
Apply the manifest:
kubectl apply -f jetstream-pytorch-deployment.yaml
Verify the Deployment:
kubectl get deployment
The output is similar to the following:
NAME READY UP-TO-DATE AVAILABLE AGE
jetstream-pytorch-server 0/2 2 0 ##s
For Autopilot clusters, it may take a few minutes to provision the required TPU resources.
View the JetStream-PyTorch server logs to check that the model weights have
been loaded and model warmup has completed.
It might take the server a few minutes to complete this operation.
kubectl logs deploy/jetstream-pytorch-server -f -c jetstream-pytorch-server
The output is similar to the following:
Started jetstream_server....
2024-04-12 04:33:37,128 - root - INFO - ---------Generate params 0 loaded.---------
Verify the Deployment is ready:
kubectl get deployment
The output is similar to the following:
NAME READY UP-TO-DATE AVAILABLE AGE
jetstream-pytorch-server 2/2 2 2 ##s
It might take several minutes for the healthcheck endpoint to register.
Serve the model
In this section, you interact with the model.
Set up port forwarding
You can access the JetStream Deployment through the ClusterIP Service that you
created in the preceding step. The ClusterIP Services are only reachable from within
the cluster. Therefore, to access the Service from outside the cluster, complete
the following steps:
To establish a port forwarding session, run the following command:
kubectl port-forward svc/jetstream-svc 8000 :8000
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
"response": " for data science in 2023?\n\n**1. Python:**\n- Widely used for data science due to its readability, extensive libraries (pandas, scikit-learn), and integration with other tools.\n- High demand for Python programmers in data science roles.\n\n**2. R:**\n- Popular choice for data analysis and visualization, particularly in academia and research.\n- Extensive libraries for statistical modeling and data wrangling.\n\n**3. Java:**\n- Enterprise-grade platform for data science, with strong performance and scalability.\n- Widely used in data mining and big data analytics.\n\n**4. SQL:**\n- Essential for data querying and manipulation, especially in relational databases.\n- Used for data analysis and visualization in various industries.\n\n**5. Scala:**\n- Scalable and efficient for big data processing and machine learning models.\n- Popular in data science for its parallelism and integration with Spark and Spark MLlib."
}
You've successfully done the following:
Deployed the JetStream-PyTorch model server on GKE using TPUs.
Served and interacted with the model.
Observe model performance
To observe the model performance, you can use the JetStream dashboard
integration in
Cloud Monitoring .
With this dashboard, you can view critical performance metrics like token
throughput, request latency, and error rates.
To use the JetStream dashboard, you must enable
Google Cloud Managed Service for Prometheus ,
which collects the metrics from JetStream,
in your GKE cluster.
You can then view the metrics by using the JetStream dashboard.
For information about using Google Cloud Managed Service for Prometheus to collect
metrics from your model, see the
JetStream
observability guidance in the Cloud Monitoring documentation.
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
gcloud container clusters delete CLUSTER_NAME --location = CONTROL_PLANE_LOCATION
gcloud iam service-accounts delete wi-jetstream@ PROJECT_ID .iam.gserviceaccount.com
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
