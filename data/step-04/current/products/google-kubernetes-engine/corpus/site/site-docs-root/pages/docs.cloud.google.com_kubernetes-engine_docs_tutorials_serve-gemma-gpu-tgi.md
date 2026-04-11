---
title: "Serve Gemma open models using GPUs on GKE with Hugging Face TGI \_|\_ Kubernetes\
  \ Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-tgi
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-tgi
  title: "Serve Gemma open models using GPUs on GKE with Hugging Face TGI \_|\_ Kubernetes\
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
Serve Gemma open models using GPUs on GKE with Hugging Face TGI
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This tutorial shows you how to deploy and serve large language models (LLMs)
using GPUs on Google Kubernetes Engine (GKE) with the
Text Generation Inference (TGI)
serving framework from Hugging Face . This tutorial
provides a foundation for understanding and exploring practical LLM deployment
for inference in a managed Kubernetes environment. You deploy a pre-built
container that runs TGI to GKE. You also configure
GKE to load the Gemma 2B, 9B, and 27B weights from
Hugging Face.
Tip: For production deployments on GKE, we strongly recommend using Inference Quickstart to get tailored best practices and
configurations for your model inference.
This tutorial is intended for Machine learning (ML) engineers,
Platform admins and operators, and for Data and AI specialists
who are interested in using Kubernetes container orchestration capabilities for
serving LLMs on H100, A100, and L4 GPU hardware. To learn more about common
roles and example tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
If you need a unified managed AI platform to rapidly build and serve ML models
cost effectively, we recommend that you try our
Vertex AI deployment solution.
Before reading this page, ensure that you're familiar with the following:
Autopilot mode and Standard mode
Current GPU version availability
GPUs in GKE
Background
This section describes the key technologies used in this guide.
Gemma
Gemma is
a set of openly available, lightweight generative artificial intelligence
(AI) models released under an open license. These AI models are available to run
in your applications, hardware, mobile devices, or hosted services.
In this guide we introduce the following models:
Gemma for text generation, you can also tune these models to specialize in performing specific tasks.
CodeGemma is a collection of powerful, lightweight models that can perform a variety of coding tasks like fill-in-the-middle code completion, code generation, natural language understanding, mathematical reasoning, and instruction following.
To learn more, see the Gemma documentation .
GPUs
GPUs let you accelerate specific workloads running on your nodes such as machine
learning and data processing. GKE provides a range of machine
type options for node configuration, including machine types with NVIDIA H100,
L4, and A100 GPUs.
Text Generation Inference (TGI)
TGI is Hugging Face's toolkit for deploying and serving LLMs. TGI enables
high-performance text generation for popular open source LLMs, including Gemma.
TGI includes features such as:
Optimized transformer implementation with Flash Attention and PagedAttention
Continuous batching to improve the overall serving throughput
Tensor parallelism for faster inference on multiple GPUs
To learn more, refer to the TGI documentation .
Objectives
Prepare your environment with a GKE cluster in
Autopilot mode.
Deploy TGI to your cluster.
Use TGI to serve the Gemma 2 model through curl and a
web chat interface.
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
roles/container.admin, roles/iam.serviceAccountAdmin
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
Create a Hugging Face account, if you don't already have one.
Ensure your project has sufficient quota for L4 GPUs. To learn more, see About GPUs and Allocation quotas .
Get access to the model
To get access to the Gemma models for deployment to
GKE, you must first sign the license consent agreement then generate a
Hugging Face access token.
Sign the license consent agreement
You must sign the consent agreement to use Gemma. Follow these instructions:
Access the model consent page on Kaggle.com.
Verify consent using your Hugging Face account.
Accept the model terms.
Generate an access token
To access the model through Hugging Face, you'll need a Hugging Face
token .
Follow these steps to generate a new token if you don't have one already:
Click Your Profile > Settings > Access Tokens .
Select New Token .
Specify a Name of your choice and a Role of at least Read .
Select Generate a token .
Copy the generated token to your clipboard.
Prepare your environment
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
export CONTROL_PLANE_LOCATION = CONTROL_PLANE_LOCATION
export CLUSTER_NAME = CLUSTER_NAME
export HF_TOKEN = HF_TOKEN
Replace the following values:
PROJECT_ID : your Google Cloud
project ID .
CONTROL_PLANE_LOCATION : the Compute Engine
region of the control plane of your
cluster. This region must support the accelerator
type you want to use, for example, us-central1 for L4 GPU.
CLUSTER_NAME : the name of your cluster.
HF_TOKEN : the Hugging Face token
you generated earlier.
Create and configure Google Cloud resources
Follow these instructions to create the required resources.
Note: You may need to create a capacity reservation for usage of some accelerators. To learn how
to reserve and consume reserved resources, see Consuming reserved zonal resources .
Create a GKE cluster and node pool
You can serve Gemma on GPUs in a GKE Autopilot
or Standard cluster. We recommend that you use a Autopilot
cluster for a fully managed Kubernetes experience. To choose the GKE mode of operation that's the best fit for your workloads, see Choose a GKE mode of operation .
Autopilot
In Cloud Shell, run the following command:
gcloud container clusters create-auto CLUSTER_NAME \
--project = PROJECT_ID \
--location = CONTROL_PLANE_LOCATION \
--release-channel = rapid
Replace the following values:
PROJECT_ID : your Google Cloud
project ID .
CONTROL_PLANE_LOCATION : the Compute Engine
region of the control plane of your
cluster. This region must support the accelerator
type you want to use, for example, us-central1 for L4 GPU.
CLUSTER_NAME : the name of your cluster.
GKE creates an Autopilot cluster with CPU and GPU
nodes as requested by the deployed workloads.
Standard
In Cloud Shell, run the following command to create a Standard
cluster:
gcloud container clusters create CLUSTER_NAME \
--project = PROJECT_ID \
--location = CONTROL_PLANE_LOCATION \
--workload-pool = PROJECT_ID .svc.id.goog \
--release-channel = rapid \
--num-nodes = 1
Replace the following values:
PROJECT_ID : your Google Cloud
project ID .
CONTROL_PLANE_LOCATION : the Compute Engine
region of the control plane of your
cluster. This region must support the accelerator
type you want to use, for example, us-central1 for L4 GPU.
CLUSTER_NAME : the name of your cluster.
The cluster creation might take several minutes.
To create a node
pool for your cluster with
the appropriate disk size, run the following command:
Gemma 2 2B
gcloud container node-pools create gpupool \
--accelerator type = nvidia-l4,count = 1 ,gpu-driver-version = latest \
--project = PROJECT_ID \
--location = CONTROL_PLANE_LOCATION \
--node-locations = CONTROL_PLANE_LOCATION -a \
--cluster = CLUSTER_NAME \
--machine-type = g2-standard-8 \
--num-nodes = 1
GKE creates a single node pool containing a L4 GPU for
each node.
Gemma 2 9B
gcloud container node-pools create gpupool \
--accelerator type = nvidia-l4,count = 2 ,gpu-driver-version = latest \
--project = PROJECT_ID \
--location = CONTROL_PLANE_LOCATION \
--node-locations = CONTROL_PLANE_LOCATION -a \
--cluster = CLUSTER_NAME \
--machine-type = g2-standard-24 \
--num-nodes = 1
GKE creates a single node pool containing two L4 GPUs for
each node.
Gemma 2 27B
gcloud container node-pools create gpupool \
--accelerator type = nvidia-l4,count = 4 ,gpu-driver-version = latest \
--project = PROJECT_ID \
--location = CONTROL_PLANE_LOCATION \
--node-locations = CONTROL_PLANE_LOCATION -a \
--cluster = CLUSTER_NAME \
--machine-type = g2-standard-48 \
--num-nodes = 1 \
--disk-size = 180
GKE creates a single node pool containing four L4 GPUs for
each node.
Create a Kubernetes secret for Hugging Face credentials
In Cloud Shell, do the following:
Configure kubectl to communicate with your cluster:
gcloud container clusters get-credentials CLUSTER_NAME \
--location = CONTROL_PLANE_LOCATION
Create a Kubernetes Secret that contains the Hugging Face token:
kubectl create secret generic hf-secret \
--from-literal = hf_api_token = HF_TOKEN \
--dry-run = client -o yaml | kubectl apply -f -
Replace the HF_TOKEN with the Hugging Face token
you generated earlier.
Deploy TGI
In this section, you deploy the TGI container to serve the Gemma
model you want to use. To deploy the model, this tutorial uses Kubernetes Deployments. A Deployment is a Kubernetes API object that lets you run multiple replicas of Pods that are distributed among the nodes in a cluster..
Gemma 2 2B-it
Follow these instructions to deploy the Gemma 2B
instruction tuned model.
Create the following tgi-2-2b-it.yaml manifest:
apiVersion : apps/v1
kind : Deployment
metadata :
name : tgi-gemma-deployment
spec :
replicas : 1
selector :
matchLabels :
app : gemma-server
template :
metadata :
labels :
app : gemma-server
ai.gke.io/model : gemma-2-2b-it
ai.gke.io/inference-server : text-generation-inference
examples.ai.gke.io/source : user-guide
spec :
containers :
- name : inference-server
image : us-docker.pkg.dev/deeplearning-platform-release/gcr.io/huggingface-text-generation-inference-cu124.2-3.ubuntu2204.py311
resources :
requests :
cpu : "2"
memory : "10Gi"
ephemeral-storage : "10Gi"
nvidia.com/gpu : "1"
limits :
cpu : "2"
memory : "10Gi"
ephemeral-storage : "10Gi"
nvidia.com/gpu : "1"
env :
- name : AIP_HTTP_PORT
value : '8000'
- name : NUM_SHARD
value : '1'
- name : MAX_INPUT_LENGTH
value : '1562'
- name : MAX_TOTAL_TOKENS
value : '2048'
- name : MAX_BATCH_PREFILL_TOKENS
value : '2048'
- name : CUDA_MEMORY_FRACTION
value : '0.93'
- name : MODEL_ID
value : google/gemma-2-2b-it
- name : HUGGING_FACE_HUB_TOKEN
valueFrom :
secretKeyRef :
name : hf-secret
key : hf_api_token
volumeMounts :
- mountPath : /dev/shm
name : dshm
volumes :
- name : dshm
emptyDir :
medium : Memory
nodeSelector :
cloud.google.com/gke-accelerator : nvidia-l4
---
apiVersion : v1
kind : Service
metadata :
name : llm-service
spec :
selector :
app : gemma-server
type : ClusterIP
ports :
- protocol : TCP
port : 8000
targetPort : 8000
Apply the manifest:
kubectl apply -f tgi-2-2b-it.yaml
Gemma 2 9B-it
Follow these instructions to deploy the Gemma 9B
instruction tuned model.
Create the following tgi-2-9b-it.yaml manifest:
apiVersion : apps/v1
kind : Deployment
metadata :
name : tgi-gemma-deployment
spec :
replicas : 1
selector :
matchLabels :
app : gemma-server
template :
metadata :
labels :
app : gemma-server
ai.gke.io/model : gemma-2-9b-it
ai.gke.io/inference-server : text-generation-inference
examples.ai.gke.io/source : user-guide
spec :
containers :
- name : inference-server
image : us-docker.pkg.dev/deeplearning-platform-release/gcr.io/huggingface-text-generation-inference-cu124.2-3.ubuntu2204.py311
resources :
requests :
cpu : "4"
memory : "30Gi"
ephemeral-storage : "30Gi"
nvidia.com/gpu : "2"
limits :
cpu : "4"
memory : "30Gi"
ephemeral-storage : "30Gi"
nvidia.com/gpu : "2"
env :
- name : AIP_HTTP_PORT
value : '8000'
- name : NUM_SHARD
value : '2'
- name : MAX_INPUT_LENGTH
value : '1562'
- name : MAX_TOTAL_TOKENS
value : '2048'
- name : MAX_BATCH_PREFILL_TOKENS
value : '2048'
- name : CUDA_MEMORY_FRACTION
value : '0.93'
- name : MODEL_ID
value : google/gemma-2-9b-it
- name : HUGGING_FACE_HUB_TOKEN
valueFrom :
secretKeyRef :
name : hf-secret
key : hf_api_token
volumeMounts :
- mountPath : /dev/shm
name : dshm
volumes :
- name : dshm
emptyDir :
medium : Memory
nodeSelector :
cloud.google.com/gke-accelerator : nvidia-l4
---
apiVersion : v1
kind : Service
metadata :
name : llm-service
spec :
selector :
app : gemma-server
type : ClusterIP
ports :
- protocol : TCP
port : 8000
targetPort : 8000
Apply the manifest:
kubectl apply -f tgi-2-9b-it.yaml
Gemma 2 27B-it
Follow these instructions to deploy the Gemma 2 27B
instruction tuned model.
Create the following tgi-2-27b-it.yaml manifest:
apiVersion : apps/v1
kind : Deployment
metadata :
name : tgi-gemma-deployment
spec :
replicas : 1
selector :
matchLabels :
app : gemma-server
template :
metadata :
labels :
app : gemma-server
ai.gke.io/model : gemma-2-27b-it
ai.gke.io/inference-server : text-generation-inference
examples.ai.gke.io/source : user-guide
spec :
containers :
- name : inference-server
image : us-docker.pkg.dev/deeplearning-platform-release/gcr.io/huggingface-text-generation-inference-cu124.2-3.ubuntu2204.py311
resources :
requests :
cpu : "10"
memory : "80Gi"
ephemeral-storage : "80Gi"
nvidia.com/gpu : "4"
limits :
cpu : "10"
memory : "80Gi"
ephemeral-storage : "80Gi"
nvidia.com/gpu : "4"
env :
- name : AIP_HTTP_PORT
value : '8000'
- name : NUM_SHARD
value : '4'
- name : MAX_INPUT_LENGTH
value : '1562'
- name : MAX_TOTAL_TOKENS
value : '2048'
- name : MAX_BATCH_PREFILL_TOKENS
value : '2048'
- name : CUDA_MEMORY_FRACTION
value : '0.93'
- name : MODEL_ID
value : google/gemma-2-27b-it
- name : HUGGING_FACE_HUB_TOKEN
valueFrom :
secretKeyRef :
name : hf-secret
key : hf_api_token
volumeMounts :
- mountPath : /dev/shm
name : dshm
volumes :
- name : dshm
emptyDir :
medium : Memory
nodeSelector :
cloud.google.com/gke-accelerator : nvidia-l4
---
apiVersion : v1
kind : Service
metadata :
name : llm-service
spec :
selector :
app : gemma-server
type : ClusterIP
ports :
- protocol : TCP
port : 8000
targetPort : 8000
Apply the manifest:
kubectl apply -f tgi-2-27b-it.yaml
CodeGemma 7B-it
Follow these instructions to deploy the CodeGemma 7B
instruction tuned model.
Create the following tgi-codegemma-1.1-7b-it.yaml manifest:
apiVersion : apps/v1
kind : Deployment
metadata :
name : tgi-gemma-deployment
spec :
replicas : 1
selector :
matchLabels :
app : gemma-server
template :
metadata :
labels :
app : gemma-server
ai.gke.io/model : codegemma-1.1-7b-it
ai.gke.io/inference-server : text-generation-inference
examples.ai.gke.io/source : user-guide
spec :
containers :
- name : inference-server
image : us-docker.pkg.dev/deeplearning-platform-release/gcr.io/huggingface-text-generation-inference-cu124.2-3.ubuntu2204.py311
resources :
requests :
cpu : "2"
memory : "25Gi"
ephemeral-storage : "40Gi"
nvidia.com/gpu : 2
limits :
cpu : "10"
memory : "25Gi"
ephemeral-storage : "40Gi"
nvidia.com/gpu : 2
args :
- --model-id=$(MODEL_ID)
- --num-shard=2
env :
- name : MODEL_ID
value : google/codegemma-1.1-7b-it
- name : PORT
value : "8000"
- name : HUGGING_FACE_HUB_TOKEN
valueFrom :
secretKeyRef :
name : hf-secret
key : hf_api_token
volumeMounts :
- mountPath : /dev/shm
name : dshm
volumes :
- name : dshm
emptyDir :
medium : Memory
nodeSelector :
cloud.google.com/gke-accelerator : nvidia-l4
---
apiVersion : v1
kind : Service
metadata :
name : llm-service
spec :
selector :
app : gemma-server
type : ClusterIP
ports :
- protocol : TCP
port : 8000
targetPort : 8000
Apply the manifest:
kubectl apply -f tgi-codegemma-1.1-7b-it.yaml
Serve the model
In this section, you interact with the model.
Set up port forwarding
Run the following command to set up port forwarding to the model:
kubectl port-forward service/llm-service 8000 :8000
The output is similar to the following:
Forwarding from 127.0.0.1:8000 -> 8000
Interact with the model using curl
This section shows how you can perform a basic smoke test to verify your deployed
pretrained or instruction tuned models. For simplicity, this section describes
the testing approach using the Gemma 2 instruction tuned
and CodeGemma models.
Gemma 2
In a new terminal session, use curl to chat with your model:
USER_PROMPT = "I'm new to coding. If you could only recommend one programming language to start with, what would it be and why?"
curl -X POST http://localhost:8000/generate \
-H "Content-Type: application/json" \
-d @- <<EOF
{
"inputs" : "<start_of_turn>user\n ${ USER_PROMPT } < end_of_turn>\n" ,
"parameters" : {
"temperature" : 0 .90,
"top_p" : 0 .95,
"max_new_tokens" : 128
}
}
EOF
The following output shows an example of the model response:
{"generated_text":"**Python**\n\n**Reasons why Python is a great choice for beginners:**\n\n* **Simple syntax:** Python uses clear and concise syntax, making it easy for beginners to pick up.\n* **Easy to learn:** Python's syntax is based on English, making it easier to learn than other languages.\n* **Large and supportive community:** Python has a massive and active community of developers who are constantly willing to help.\n* **Numerous libraries and tools:** Python comes with a vast collection of libraries and tools that make it easy to perform various tasks, such as data manipulation, web development, and machine learning.\n* **"}
CodeGemma
In a new terminal session, use curl to chat with your model:
USER_PROMPT = "Generate a python code example of a adding two numbers from a function called addNumbers"
curl -s -X POST http://localhost:8000/generate \
-H "Content-Type: application/json" \
-d @- <<EOF | jq -r .generated_text
{
"inputs" : "<start_of_turn>user\n ${ USER_PROMPT } < end_of_turn>\n" ,
"parameters" : {
"temperature" : 0 .90,
"top_p" : 0 .95,
"max_new_tokens" : 2000
}
}
EOF
The following output shows an example of the model response:
def addNumbers(num1, num2):
sum = num1 + num2
return sum
# Get the input from the user
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
# Call the addNumbers function
sum = addNumbers(num1, num2)
# Print the result
print("The sum of", num1, "and", num2, "is", sum)
Success: You've successfully served Gemma using GPUs on
GKE with TGI. You can now interact with the model.
(Optional) Interact with the model through a Gradio chat interface
In this section, you build a web chat application that lets you interact with
your instruction tuned model. For simplicity, this section describes only the
testing approach using the 2B-it model.
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
image : us-docker.pkg.dev/google-samples/containers/gke/gradio-app:v1.0.4
resources :
requests :
cpu : "250m"
memory : "512Mi"
limits :
cpu : "500m"
memory : "512Mi"
env :
- name : CONTEXT_PATH
value : "/generate"
- name : HOST
value : "http://llm-service:8000"
- name : LLM_ENGINE
value : "tgi"
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
Observe model performance
To observe the model performance, you can use the TGI dashboard
integration in
Cloud Monitoring .
With this dashboard, you can view critical performance metrics like token
throughput, request latency, and error rates.
To use the TGI dashboard, you must enable
Google Cloud Managed Service for Prometheus ,
which collects the metrics from TGI,
in your GKE cluster.
TGI exposes metrics in Prometheus format by default;
you do not need to install an additional exporter.
You can then view the metrics by using the TGI dashboard.
For information about using Google Cloud Managed Service for Prometheus to collect
metrics from your model, see the
TGI
observability guidance in the Cloud Monitoring documentation.
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete the deployed resources
To avoid incurring charges to your Google Cloud account for the resources
that you created in this guide, run the following command:
gcloud container clusters delete CLUSTER_NAME \
--location = CONTROL_PLANE_LOCATION
What's next
Learn more about GPUs in
GKE .
Learn how to use Gemma with TGI on other accelerators,
including A100 and H100 GPUs, by viewing the sample code in GitHub .
Learn how to deploy GPU workloads in Autopilot .
Learn how to deploy GPU workloads in Standard .
Explore the TGI documentation .
Explore the Vertex AI Model Garden .
Discover how to run optimized AI/ML workloads with GKE
platform orchestration
capabilities .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
