---
title: "Serve Llama models using GPUs on GKE with vLLM \_|\_ Kubernetes Engine \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/learn/get-started-with-kubernetes
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm
  title: "Serve Llama models using GPUs on GKE with vLLM \_|\_ Kubernetes Engine \_\
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
Serve Llama models using GPUs on GKE with vLLM
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This tutorial shows you how to deploy and serve
Llama models 4
large language model (LLM) using GPUs on Google Kubernetes Engine (GKE) with the
vLLM serving framework. This provides a foundation for understanding and exploring practical LLM deployment for
inference in a managed Kubernetes environment. You deploy a pre-built container
that runs vLLM to GKE. You also configure GKE
to load the Llama from Hugging Face.
Tip: For production deployments on GKE, we strongly recommend using Inference Quickstart to get tailored best practices and
configurations for your model inference.
This tutorial is intended for Machine learning (ML) engineers,
Platform admins and operators, and for Data and AI specialists
who are interested in using Kubernetes container orchestration capabilities
for serving AI/ML workloads on H200, H100, A100, and L4 GPU hardware. To learn more
about common roles and example tasks that we reference in Google Cloud content,
see
Common GKE user roles and tasks .
If you need a unified managed AI platform that's designed to rapidly build and serve ML models
cost effectively, we recommend that you try our
Vertex AI deployment solution.
Before reading this page, ensure that you're familiar with the following:
Autopilot mode and Standard mode
Current GPU version availability
GPUs in GKE
Background
This section describes the key technologies used in this guide.
Llama
Llama is a large language model by Meta that's designed for a
range of natural language processing tasks, including text generation,
translation, and question answering.
GKE offers the infrastructure required to
support the distributed training and serving needs of models of this scale.
For more information, see the Llama documentation .
GPUs
GPUs let you accelerate specific workloads running on your nodes, such as machine
learning and data processing. GKE provides a range of machine
type options for node configuration, including machine types with NVIDIA H200,
H100, L4, and A100 GPUs.
vLLM
vLLM is a highly optimized open source LLM serving framework that can increase
serving throughput on GPUs, with features such as the following:
Optimized transformer implementation with PagedAttention
Continuous batching to improve the overall serving throughput
Tensor parallelism and distributed serving on multiple GPUs
For more information, refer to the vLLM documentation .
Objectives
Prepare your environment with a GKE cluster in
Autopilot or Standard mode.
Deploy a vLLM container to your cluster.
Use vLLM to serve Llama 4 models through curl and a
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
Ensure your project has sufficient quota for H100 and H200 GPUs. To learn
more, see Plan GPU quota and
GPU quota .
Get access to the model
Note: You must sign the consent agreement to use Llama in the
Hugging Face repository .
To access the model through Hugging Face, you need a Hugging Face
token .
Follow these steps to generate a new token if you don't have one already:
Click Your Profile > Settings > Access Tokens .
Select New Token .
Specify a Name of your choice and a Role of at least Read .
Select Generate a token .
Copy the generated token to your clipboard.
Prepare your environment
In this tutorial, you use Cloud Shell to manage resources hosted on
Google Cloud. Cloud Shell comes preinstalled with the software you need
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
export REGION = REGION
export CLUSTER_NAME = CLUSTER_NAME
export HF_TOKEN = HF_TOKEN
Replace the following values:
PROJECT_ID : your Google Cloud
project ID .
REGION : a region that supports the accelerator
type you want to use, for example, us-central1 for L4 GPU.
CLUSTER_NAME : the name of your cluster.
HF_TOKEN : the Hugging Face token
you generated earlier.
Create and configure Google Cloud resources
Follow these instructions to create the required resources.
Note: You might need to create a capacity reservation to use of some accelerators. To learn how
to reserve and consume reserved resources, see Consuming reserved zonal resources .
Create a GKE cluster and node pool
You can serve Llama 4 models on GPUs in a GKE Autopilot
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
cluster. Provide a region that supports the accelerator
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
cluster. Provide a region that supports the accelerator
type you want to use, for example, us-central1 for H100 GPU.
CLUSTER_NAME : the name of your cluster.
The cluster creation might take several minutes.
To create a node pool for your cluster with
the appropriate disk size, run the following command:
gcloud container node-pools create gpupool \
--accelerator type = nvidia-h100-80gb,count = 1 ,gpu-driver-version = latest \
--project = PROJECT_ID \
--location = REGION \
--node-locations = REGION -a \
--cluster = CLUSTER_NAME \
--machine-type = a3-highgpu-8g \
--disk-type = pd-ssd \
--num-nodes = 1 \
--disk-size = 256
GKE creates a single node pool containing eight H100 80GB GPUs.
Create a Kubernetes secret for Hugging Face credentials
In Cloud Shell, do the following:
Configure kubectl so it can communicate with your cluster:
gcloud container clusters get-credentials CLUSTER_NAME \
--location = REGION
Replace the following values:
REGION : a region that supports the accelerator
type you want to use, for example, us-central1 for L4 GPU.
CLUSTER_NAME : the name of your cluster.
Create a Kubernetes Secret that contains the Hugging Face token:
kubectl create secret generic hf-secret \
--from-literal = hf_api_token = ${ HF_TOKEN } \
--dry-run = client -o yaml | kubectl apply -f -
Replace HF_TOKEN with the Hugging Face token
you generated earlier.
Deploy vLLM
In this section, you deploy the vLLM container to serve the Llama 4
models you want to use:
Llama 4 Maverick 17B-128E
Llama 4 Scout 17B-16E
Note: We don't recommend using base models like Llama 3 8B for production chatbots
due to safety concerns. For more information about best practices, see System instructions for safety .
To deploy the model, this tutorial uses Kubernetes Deployments. A Deployment is a Kubernetes API object that lets you run multiple replicas of Pods that are distributed among the nodes in a cluster..
Llama 4 Maverick 17B-128e
To deploy the Llama 4 Maverick 17B-128E model, follow these instructions:
Create the following vllm-llama4-maverick-17b-128e.yaml manifest:
apiVersion : apps/v1
kind : Deployment
metadata :
name : llama-deployment
spec :
replicas : 1
selector :
matchLabels :
app : llama-server
template :
metadata :
labels :
app : llama-server
ai.gke.io/model : Llama-4-Maverick-17B-128E
ai.gke.io/inference-server : vllm
spec :
containers :
- name : inference-server
image : docker.io/vllm/vllm-openai:v0.10.0
resources :
requests :
cpu : 157
memory : 2067Gi
ephemeral-storage : 850Gi
nvidia.com/gpu : 8
limits :
cpu : 157
memory : 2067Gi
ephemeral-storage : 850Gi
nvidia.com/gpu : 8
command : [ "python3" , "-m" , "vllm.entrypoints.openai.api_server" ]
args :
- --host=0.0.0.0
- --port=7080
- --swap-space=16
- --max-model-len=131072
- --gpu-memory-utilization=0.95
- --disable-log-stats
- --dtype=auto
- --kv-cache-dtype=auto
- --max-num-seqs=64
- --model=meta-llama/Llama-4-Maverick-17B-128E
- --tensor-parallel-size=8
env :
- name : LD_LIBRARY_PATH
value : ${LD_LIBRARY_PATH}:/usr/local/nvidia/lib64
- name : MODEL_ID
value : 'meta-llama/Llama-4-Maverick-17B-128E'
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
cloud.google.com/gke-accelerator : nvidia-h200-141gb
---
apiVersion : v1
kind : Service
metadata :
name : llama-service
spec :
selector :
app : llama-server
type : ClusterIP
ports :
- protocol : TCP
port : 8000
targetPort : 7080
---
apiVersion : v1
kind : Secret
metadata :
name : hf-secret
type : Opaque
stringData :
hf_api_token : {{HF_TOKEN} }
Apply the manifest:
kubectl apply -f vllm-llama4-maverick-17b-128e.yaml
In our example, we limit the context window by 128 K by using the --max-model-len=131072 vLLM option.
Llama 4 Maverick 17B-128e-it
To deploy the Llama 4 Maverick 17B-128e instruction tuned model, follow these instructions:
Create the following vllm-llama4-maverick-17b-128e-instruct.yaml manifest:
apiVersion : apps/v1
kind : Deployment
metadata :
name : llama-deployment
spec :
replicas : 1
selector :
matchLabels :
app : llama-server
template :
metadata :
labels :
app : llama-server
ai.gke.io/model : Llama-4-Maverick-17B-128E-Instruct
ai.gke.io/inference-server : vllm
spec :
containers :
- name : inference-server
image : docker.io/vllm/vllm-openai:v0.10.0
resources :
requests :
cpu : 157
memory : 2067Gi
ephemeral-storage : 850Gi
nvidia.com/gpu : 8
limits :
cpu : 157
memory : 2067Gi
ephemeral-storage : 850Gi
nvidia.com/gpu : 8
command : [ "python3" , "-m" , "vllm.entrypoints.openai.api_server" ]
args :
- --host=0.0.0.0
- --port=7080
- --swap-space=16
- --max-model-len=131072
- --gpu-memory-utilization=0.95
- --disable-log-stats
- --dtype=auto
- --kv-cache-dtype=auto
- --max-num-seqs=64
- --model=meta-llama/Llama-4-Maverick-17B-128E-Instruct
- --tensor-parallel-size=8
env :
- name : LD_LIBRARY_PATH
value : ${LD_LIBRARY_PATH}:/usr/local/nvidia/lib64
- name : MODEL_ID
value : 'meta-llama/Llama-4-Maverick-17B-128E-Instruct'
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
cloud.google.com/gke-accelerator : nvidia-h200-141gb
---
apiVersion : v1
kind : Service
metadata :
name : llama-service
spec :
selector :
app : llama-server
type : ClusterIP
ports :
- protocol : TCP
port : 8000
targetPort : 7080
---
apiVersion : v1
kind : Secret
metadata :
name : hf-secret
type : Opaque
stringData :
hf_api_token : {{HF_TOKEN} }
Apply the manifest:
kubectl apply -f vllm-llama4-maverick-17b-128e-instruct.yaml
In our example, we limit the context window by 128 K by using the --max-model-len=131072 vLLM option.
Llama 4 Maverick 17B-128e-it-fp8
To deploy the Llama 4 Maverick 17B-128e-Instruct-FP8 model, follow these instructions:
Create the following vllm-llama4-maverick-17b-128e-instruct-fp8.yaml manifest:
apiVersion : apps/v1
kind : Deployment
metadata :
name : llama-deployment
spec :
replicas : 1
selector :
matchLabels :
app : llama-server
template :
metadata :
labels :
app : llama-server
ai.gke.io/model : Llama-4-Maverick-17B-128E-Instruct-FP8
ai.gke.io/inference-server : vllm
spec :
containers :
- name : inference-server
image : docker.io/vllm/vllm-openai:v0.10.0
resources :
requests :
cpu : 146
memory : 1311Gi
ephemeral-storage : 600Gi
nvidia.com/gpu : 8
limits :
cpu : 146
memory : 1311Gi
ephemeral-storage : 600Gi
nvidia.com/gpu : 8
command : [ "python3" , "-m" , "vllm.entrypoints.openai.api_server" ]
args :
- --host=0.0.0.0
- --port=7080
- --swap-space=16
- --max-model-len=524288
- --gpu-memory-utilization=0.90
- --disable-log-stats
- --model=meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8
- --tensor-parallel-size=8
env :
- name : LD_LIBRARY_PATH
value : ${LD_LIBRARY_PATH}:/usr/local/nvidia/lib64
- name : MODEL_ID
value : 'meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8'
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
cloud.google.com/gke-accelerator : nvidia-h100-80gb
---
apiVersion : v1
kind : Service
metadata :
name : llama-service
spec :
selector :
app : llama-server
type : ClusterIP
ports :
- protocol : TCP
port : 8000
targetPort : 7080
---
apiVersion : v1
kind : Secret
metadata :
name : hf-secret
type : Opaque
stringData :
hf_api_token : {{HF_TOKEN} }
Apply the manifest:
kubectl apply -f vllm-llama4-maverick-17b-128e-instruct-fp8.yaml
In our example, we limit the context window by 512 K by using the --max-model-len=524288 vLLM option.
Llama 4 Scout 17B-16e
To deploy the Llama 4 Scout 17B-16E model, follow these instructions:
Create the following vllm-llama4-scout-17b-16e.yaml manifest:
apiVersion : apps/v1
kind : Deployment
metadata :
name : llama-deployment
spec :
replicas : 1
selector :
matchLabels :
app : llama-server
template :
metadata :
labels :
app : llama-server
ai.gke.io/model : Llama-4-Scout-17B-16E
ai.gke.io/inference-server : vllm
spec :
containers :
- name : inference-server
image : docker.io/vllm/vllm-openai:v0.10.0
resources :
requests :
cpu : 146
memory : 1311Gi
ephemeral-storage : 600Gi
nvidia.com/gpu : 8
limits :
cpu : 146
memory : 1311Gi
ephemeral-storage : 600Gi
nvidia.com/gpu : 8
command : [ "python3" , "-m" , "vllm.entrypoints.openai.api_server" ]
args :
- --host=0.0.0.0
- --port=7080
- --swap-space=16
- --max-model-len=262144
- --limit_mm_per_prompt
- '{"image": 5}'
- --disable-log-stats
- --model=meta-llama/Llama-4-Scout-17B-16E
- --tensor-parallel-size=8
env :
- name : LD_LIBRARY_PATH
value : ${LD_LIBRARY_PATH}:/usr/local/nvidia/lib64
- name : MODEL_ID
value : 'meta-llama/Llama-4-Scout-17B-16E'
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
cloud.google.com/gke-accelerator : nvidia-h100-80gb
---
apiVersion : v1
kind : Service
metadata :
name : llama-service
spec :
selector :
app : llama-server
type : ClusterIP
ports :
- protocol : TCP
port : 8000
targetPort : 7080
---
apiVersion : v1
kind : Secret
metadata :
name : hf-secret
type : Opaque
stringData :
hf_api_token : {{HF_TOKEN} }
Apply the manifest:
kubectl apply -f vllm-llama4-scout-17b-16e.yaml
In our example, we limit the context window by 256 K by using the --max-model-len=262144 vLLM option.
Llama 4 Scout 17B-16e-it
To deploy the Llama 4 Scout 17B-16e Instruct
instruction tuned model, follow these instructions:
Create the following vllm-llama4-scout-17b-16e-instruct.yaml manifest:
apiVersion : apps/v1
kind : Deployment
metadata :
name : llama-deployment
spec :
replicas : 1
selector :
matchLabels :
app : llama-server
template :
metadata :
labels :
app : llama-server
ai.gke.io/model : Llama-4-Scout-17B-16E-Instruct
ai.gke.io/inference-server : vllm
spec :
containers :
- name : inference-server
image : docker.io/vllm/vllm-openai:v0.10.0
resources :
requests :
cpu : 146
memory : 1311Gi
ephemeral-storage : 600Gi
nvidia.com/gpu : 8
limits :
cpu : 146
memory : 1311Gi
ephemeral-storage : 600Gi
nvidia.com/gpu : 8
command : [ "python3" , "-m" , "vllm.entrypoints.openai.api_server" ]
args :
- --host=0.0.0.0
- --port=7080
- --swap-space=16
- --max-model-len=1310720
- --limit_mm_per_prompt
- '{"image": 5}'
- --disable-log-stats
- --model=meta-llama/Llama-4-Scout-17B-16E-Instruct
- --tensor-parallel-size=8
env :
- name : LD_LIBRARY_PATH
value : ${LD_LIBRARY_PATH}:/usr/local/nvidia/lib64
- name : MODEL_ID
value : 'meta-llama/Llama-4-Scout-17B-16E-Instruct'
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
cloud.google.com/gke-accelerator : nvidia-h100-80gb
---
apiVersion : v1
kind : Service
metadata :
name : llama-service
spec :
selector :
app : llama-server
type : ClusterIP
ports :
- protocol : TCP
port : 8000
targetPort : 7080
---
apiVersion : v1
kind : Secret
metadata :
name : hf-secret
type : Opaque
stringData :
hf_api_token : {{HF_TOKEN} }
Apply the manifest:
kubectl apply -f vllm-llama4-scout-17b-16e-instruct.yaml
In our example, we limit the context window by 1280 K by using the --max-model-len=1310720 vLLM option.
Wait for the Deployment to be available:
kubectl wait --for = condition = Available --timeout = 1800s deployment/llama-deployment
View the logs from the running Deployment:
kubectl logs -f -l app = llama-server
The Deployment resource downloads the model data. This process can take a
few minutes. The output is similar to the following:
INFO: Started server process [145]
INFO: Waiting for application startup.
INFO: Application startup complete.
...
INFO 04-07 13:36:29 [async_llm.py:228] Added request chatcmpl-4149ea4cf35e48559f9f819dcdbbb23e.
INFO: 127.0.0.1:44018 - "POST /v1/chat/completions HTTP/1.1" 200 OK
Make sure the model is fully downloaded before you proceed to the next section.
Serve the model
In this section, you interact with the model.
Set up port forwarding
To set up port forwarding to the model, run the following command:
kubectl port-forward service/llama-service 8080 :8000
The output is similar to the following:
Forwarding from 127.0.0.1:8080 -> 7080
Interact with the model using curl
This section shows how you can perform a basic smoke test to verify your deployed
Llama instruction-tuned model.
For other models, replace meta-llama/Llama-4-Maverick-17B-128E with the name of the respective model.
This example shows how to test the Llama 4 Scout 17B-16E model with text-only input.
In a new terminal session, use curl to chat with your model:
curl http://localhost:8080/v1/chat/completions \
-H "Content-Type: application/json" \
-d '{
"model": "meta-llama/Llama-4-Maverick-17B-128E",
"messages": [{"role": "user", "content": "San Francisco is a"}],
"max_tokens": 7,
"temperature": 0
}'
The output is similar to the following:
"message":{"role":"assistant","reasoning_content":null,"content":"San Francisco is a city","tool_calls":[]}
Success: You successfully served Llama using GPUs on
GKE with vLLM. You can now interact with the model.
Troubleshoot issues
If you get the Empty reply from server message, the container might not be finished downloading the model data. Check the Pod's logs again for the Connected message, which indicates that the model is ready to serve.
If you see the Connection refused message, verify that your port forwarding is active .
Observe model performance
To view the dashboards for observability metrics of
a model, follow these steps:
In the Google Cloud console, go to the Deployed Models page.
Go to Deployed Models
To view details about the specific deployment, including its metrics, logs,
and dashboards, click the model name in the list.
In the model details page, click the Observability tab to view the
following dashboards. If prompted, click Enable to enable metrics
collection for the cluster.
The Infrastructure usage dashboard displays utilization metrics.
The DCGM dashboard displays DCGM metrics.
If you are using vLLM, then the Model performance dashboard is
available and displays metrics for the vLLM model performance.
You can also view metrics in the vLLM dashboard integration in
Cloud Monitoring .
These metrics are aggregated for all vLLM deployments with no pre-set filters
To use the dashboard in Cloud Monitoring, you must enable
Google Cloud Managed Service for Prometheus ,
which collects the metrics from vLLM,
in your GKE cluster.
vLLM exposes metrics in Prometheus format by default;
you do not need to install an additional exporter.
For information about using Google Cloud Managed Service for Prometheus to collect
metrics from your model, see the
vLLM
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
Replace the following values:
CONTROL_PLANE_LOCATION : the Compute Engine
region of the control plane of your
cluster.
CLUSTER_NAME : the name of your cluster.
What's next
Learn more about GPUs in
GKE .
Learn how to use Llama with vLLM on other accelerators,
including A100 and H100 GPUs, by viewing the sample code in GitHub .
Learn how to deploy GPU workloads in Autopilot .
Learn how to deploy GPU workloads in Standard .
Explore the vLLM GitHub repository
and documentation .
Explore the Vertex AI Model Garden .
Discover how to run optimized AI/ML workloads with GKE
platform orchestration capabilities .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
