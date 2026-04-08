---
title: "Use vLLM on GKE to run inference with DeepSeek-V3.2-Speciale \_|\_ AI Hypercomputer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/vllm-gke-deepseek-speciale
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/vllm-gke-deepseek-speciale
  title: "Use vLLM on GKE to run inference with DeepSeek-V3.2-Speciale \_|\_ AI Hypercomputer\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Use vLLM on GKE to run inference with DeepSeek-V3.2-Speciale | AI Hypercomputer | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
AI Hypercomputer
Start free
Overview
Guides
Resources
More
Technology areas
More
Overview
Guides
Resources
Cross-product tools
More
Console
Discover
Overview
Performance-optimized infrastructure
GPU machines
Networking services
GPU networking overview
Network services for deployments
Networking best practices
Storage services
Open software
OS and Docker images
Choose a consumption option
Cluster management
Overview
Configurations
Terminology
Get started
Cluster creation overview
Recommended configurations
Obtain capacity and quota
Overview
Reserve capacity
View reserved capacity
Quickstart: Create a Slurm cluster with A4 machine type
Deploy infrastructure
Deployment options overview
Compact placement policy and workload policy overview
Deploy AI-optimized VMs and clusters
Create GKE clusters
Create an AI-optimized GKE cluster with default configuration
Create a custom AI-optimized GKE cluster which uses A4X Max
Create a custom AI-optimized GKE cluster which uses A4X
Create a custom AI-optimized GKE cluster which uses A4 or A3 Ultra
Create Slurm clusters
Create an instance
Create A4X Max
Create A4X
Create A4 or A3 Ultra
Create A3 High or A3 Mega
Create instances in bulk
Create A4X Max
Create A4X
Create A4 or A3 Ultra
Create A3 High or A3 Mega
Create a managed instance group (MIG)
Create A4X Max
Create A4X
Create A4 or A3 Ultra
Create A3 High or A3 Mega
Run workloads
Run workloads with Pathways on Cloud
Introduction to Pathways on Cloud
Create a GKE cluster with Pathways
Run a batch workload with Pathways
Run an interactive workload with Pathways
Perform multihost inference using Pathways
Resilient training with Pathways
Port JAX workloads to Pathways
Troubleshoot Pathways on Cloud
Schedule GKE workloads
Schedule workloads with Topology Aware Scheduling (TAS)
Enable node health prediction
AI workload tutorials
Overview
GPU
Run inference with v LLM on GKE
Deep Seek V3. 1
Deep Seek V3. 2-Speciale
Gemma 3
GPT-OSS
Llama 4
Qwen3
Run fine-tuning
Gemma 3 on a GKE cluster
Gemma 3 on a Slurm cluster
Gemma 3 for vision tasks on GKE
Llama 4 on a Slurm cluster
Mixtral-8x7b on a Slurm cluster
Run training
Qwen2 on a Slurm cluster
TPU
Serve Qwen2-7B with vLLM on TPUs
Serve Qwen2-7B-Instruct with vLLM on TPUs
Serve Qwen3-8B-Base with vLLM on TPUs
Serve Llama-3.1-8B with vLLM on TPUs
Manage infrastructure
Manage GKE clusters
Manage instances and Slurm clusters
View topology of an instance
Manage host events
Host events in instances
Host events in reservations
Report faulty host
Test and optimize
Optimize cluster networking by using NCCL/ g IB
Run NCCL tests
Run NCCL on Compute Engine instances
Run NCCL on GKE clusters that use default configuration
Run NCCL on custom GKE clusters that use A4X Max
Run NCCL on custom GKE clusters that use A4X
Run NCCL on custom GKE clusters that use A4 or A3 Ultra
Run NCCL on Slurm clusters
Collect and understand NCCL logs for troubleshooting
Test workloads with recipes
Benchmarking recipes
Goodput optimization recipes
Test clusters
Monitor
Monitor VMs and Slurm clusters
Manage how Co MMA collects NCCL telemetry
Collective Communication Analyzer (CoMMA)
Enable, disable, and configure CoMMA
Troubleshoot
Known issues
Troubleshoot slow performance
Troubleshoot reporting a faulty host
Troubleshoot CoMMA
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Objectives
Costs
Before you begin
Access DeepSeek-V3.2-Speciale by using Hugging Face
Prepare your environment
Create and configure Google Cloud resources Create a GKE cluster in Autopilot mode
Create a Kubernetes secret to store your Hugging Face credentials
Deploy a vLLM container to your GKE cluster
Interact with DeepSeek-V3.2-Speciale by using curl
Observe model performance
Clean up Delete your project
Delete the resources
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Use v LLM on GKE to run inference with Deep Seek-V3. 2-Speciale
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Objectives
Costs
Before you begin
Access DeepSeek-V3.2-Speciale by using Hugging Face
Prepare your environment
Create and configure Google Cloud resources Create a GKE cluster in Autopilot mode
Create a Kubernetes secret to store your Hugging Face credentials
Deploy a vLLM container to your GKE cluster
Interact with DeepSeek-V3.2-Speciale by using curl
Observe model performance
Clean up Delete your project
Delete the resources
What's next
This tutorial shows you how to deploy and serve a
DeepSeek-V3.2-Speciale
language model by using the vLLM framework .
You deploy this model on a Google Kubernetes Engine (GKE) Autopilot cluster and consume a single A4
virtual machine (VM) that
has eight B200 GPUs.
This tutorial assumes that you have reviewed the DeepSeek-V3.2-Speciale language
model and checked that its capabilities meet the requirements of your use case.
Important: To complete this tutorial, you must have reserved the capacity to
create an A4 VM. To
learn more about your options for reserving capacity in
AI Hypercomputer for a future date and time, see
Choose a consumption option .
This tutorial is intended for machine learning (ML) engineers, platform
administrators and operators, and for data and AI specialists who are interested
in using Kubernetes container orchestration capabilities to handle inference workloads.
Objectives
Access DeepSeek-V3.2-Speciale by using Hugging Face.
Prepare your environment.
Create a GKE cluster in Autopilot mode.
Create a Kubernetes secret for Hugging Face credentials.
Deploy a vLLM container to your GKE cluster.
Interact with DeepSeek-V3.2-Speciale by using curl.
Clean up.
Costs
This tutorial uses billable components of Google Cloud, including:
Google Kubernetes Engine pricing
GPU pricing
To generate a cost estimate based on your projected usage, use the
Pricing Calculator .
Before you begin
Start by creating a Google Cloud account. With this account, you get $300 in free credits,
plus free usage of over 20 products, up to monthly limits.
Create an account
To run the commands on this page, set up the gcloud CLI in one of the following
development environments:
Cloud Shell Local shell
More
To use an online terminal with the gcloud CLI already set up, activate
Cloud Shell:
Activate Cloud Shell on this page
At the bottom of this page, a Cloud Shell session starts and displays a
command-line prompt. It can take a few seconds for the session to initialize.
To use a local development environment, follow these steps:
Install the gcloud CLI.
If you're using an external identity provider (IdP), sign in to the
gcloud CLI with your federated identity. For more information, see
Sign in to the gcloud CLI with your federated identity .
Initialize the gcloud CLI .
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the required API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable container.googleapis.com
To run the commands on this page, set up the gcloud CLI in one of the following
development environments:
Cloud Shell Local shell
More
To use an online terminal with the gcloud CLI already set up, activate
Cloud Shell:
Activate Cloud Shell on this page
At the bottom of this page, a Cloud Shell session starts and displays a
command-line prompt. It can take a few seconds for the session to initialize.
To use a local development environment, follow these steps:
Install the gcloud CLI.
If you're using an external identity provider (IdP), sign in to the
gcloud CLI with your federated identity. For more information, see
Sign in to the gcloud CLI with your federated identity .
Initialize the gcloud CLI .
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the required API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable container.googleapis.com
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/container.admin
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Sign in to or create a Hugging Face
account .
Access Deep Seek-V3. 2-Speciale by using Hugging Face
To use Hugging Face to access the DeepSeek-V3.2-Speciale model, do the
following:
Sign in to Hugging face .
Create a Hugging Face read access token .
Copy and save the read access token value. You use it later in this
tutorial.
Prepare your environment
To prepare your environment, set the following variables:
gcloud config set project PROJECT_ID
gcloud config set billing/quota_project PROJECT_ID
export PROJECT_ID=$(gcloud config get project)
export RESERVATION_URL= RESERVATION_URL
export REGION= REGION
export CLUSTER_NAME= CLUSTER_NAME
export HUGGING_FACE_TOKEN= HUGGING_FACE_TOKEN
export NETWORK= NETWORK_NAME
export SUBNETWORK= SUBNETWORK_NAME
Replace the following:
PROJECT_ID : the ID of the Google Cloud project
where you want to create the GKE cluster.
RESERVATION_URL : the URL of the reservation that you want
to use to create your GKE cluster. Based on the project in
which the reservation exists, specify one of the following values:
The reservation exists in your project:
RESERVATION_NAME
The reservation exists in a different project, and your project can
use the reservation:
projects/ RESERVATION_PROJECT_ID /reservations/ RESERVATION_NAME
REGION : the region where you want to create your
GKE cluster. You can only create the cluster in the region
where you reservation exists.
CLUSTER_NAME : the name of the GKE cluster
to create.
HUGGING_FACE_TOKEN : the Hugging Face access token that
you created in the previous section.
NETWORK_NAME : the network that the GKE
cluster uses. Specify one of the following values:
If you created a custom network, then specify the name of your network.
Otherwise, specify default .
SUBNETWORK_NAME : the subnetwork that the
GKE cluster uses. Specify one of the following values:
If you created a custom subnetwork, then specify the name of your
subnetwork. You can only specify a subnetwork that exists in the same
region as the reservation.
Otherwise, specify default .
Create and configure Google Cloud resources
Follow these instructions in this section to create the required resources.
Note: You might need to create a capacity reservation to make use of some
accelerators. To learn how to reserve and consume reserved resources, see
Consuming reserved zonal resources .
Create a GKE cluster in Autopilot mode
To create a GKE cluster in Autopilot mode, run the
following command:
gcloud container clusters create-auto $CLUSTER_NAME \
--project=$PROJECT_ID \
--region=$REGION \
--release-channel=rapid \
--network=$NETWORK \
--subnetwork=$SUBNETWORK
The creation of the GKE cluster might take some time to complete.
To verify that Google Cloud has finished creating your cluster, go to
Kubernetes clusters on the Google Cloud console.
Create a Kubernetes secret to store your Hugging Face credentials
To create a Kubernetes secret to store your Hugging Face credentials, do the
following:
Configure kubectl to communicate with your GKE cluster:
gcloud container clusters get-credentials $CLUSTER_NAME \
--location=$REGION
Create a Kubernetes secret that contains the Hugging Face read access
token that you created in an earlier step:
kubectl create secret generic hf-secret \
--from-literal=hf_token=${HUGGING_FACE_TOKEN} \
--dry-run=client -o yaml | kubectl apply -f -
Deploy a vLLM container to your GKE cluster
To deploy the vLLM container to serve the deepseek-ai/DeepSeek-V3.2-Speciale model,
do the following:
Create a vllm-deepseek3-2.yaml file with your chosen vLLM deployment:
apiVersion : apps/v1
kind : Deployment
metadata :
name : deepseek3-2-deploy
spec :
replicas : 1
selector :
matchLabels :
app : deepseek
template :
metadata :
labels :
app : deepseek
ai.gke.io/model : deepseek-v3-2
ai.gke.io/inference-server : vllm
examples.ai.gke.io/source : user-guide
spec :
containers :
- name : vllm-inference
image : us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:model-garden.pytorch-vllm-serve-release_20251126.00_p0
resources :
requests :
cpu : "10"
memory : "1000Gi"
ephemeral-storage : "1Ti"
nvidia.com/gpu : "8"
limits :
cpu : "10"
memory : "1000Gi"
ephemeral-storage : "1Ti"
nvidia.com/gpu : "8"
command : [ "python3" , "-m" , "vllm.entrypoints.openai.api_server" ]
args :
- --model=$(MODEL_ID)
- --tensor-parallel-size=8
- --host=0.0.0.0
- --port=8000
- --max-model-len=131072
- --max-num-seqs=16
- --enable-chunked-prefill
- --gpu-memory-utilization=0.90
- --enforce-eager
- --trust-remote-code
env :
- name : MODEL_ID
value : deepseek-ai/DeepSeek-V3.2-Speciale
- name : HUGGING_FACE_HUB_TOKEN
valueFrom :
secretKeyRef :
name : hf-secret
key : hf_token
volumeMounts :
- mountPath : /dev/shm
name : dshm
livenessProbe :
httpGet :
path : /health
port : 8000
initialDelaySeconds : 1800
periodSeconds : 10
readinessProbe :
httpGet :
path : /health
port : 8000
initialDelaySeconds : 1800
periodSeconds : 5
volumes :
- name : dshm
emptyDir :
medium : Memory
nodeSelector :
cloud.google.com/gke-accelerator : nvidia-b200
cloud.google.com/reservation-name : $RESERVATION_URL
cloud.google.com/reservation-affinity : "specific"
cloud.google.com/gke-gpu-driver-version : latest
---
apiVersion : v1
kind : Service
metadata :
name : deepseek-service
spec :
selector :
app : deepseek
type : ClusterIP
ports :
- protocol : TCP
port : 8000
targetPort : 8000
---
apiVersion : monitoring.googleapis.com/v1
kind : PodMonitoring
metadata :
name : deepseek-monitoring
spec :
selector :
matchLabels :
app : deepseek
endpoints :
- port : 8000
path : /metrics
interval : 30s
Apply the vllm-deepseek3-2.yaml file to your GKE cluster:
envsubst < vllm-deepseek3-2.yaml | kubectl apply -f -
During the deployment process, the container must download the
deepseek-ai/DeepSeek-V3.2-Speciale model from Hugging Face. For this reason,
deployment of the container might take up to 30 minutes to complete.
To see the completion status, run the following command:
kubectl wait \
--for=condition=Available \
--timeout=1800s deployment/deepseek3-2-deploy
The --timeout=1800s flag allows the command to monitor the deployment
for up to 30 minutes.
Interact with DeepSeek-V3.2-Speciale by using curl
To verify the DeepSeek-V3.2-Speciale model that you deployed, do the following:
Set up port forwarding to DeepSeek-V3.2-Speciale:
kubectl port-forward service/deepseek-service 8000:8000
Open a new terminal window. You can then chat with your model by using curl :
time curl http://127.0.0.1:8000/v1/completions \
-X POST \
-H "Content-Type: application/json" \
-d '{
"model": "deepseek-ai/DeepSeek-V3.2-Speciale",
"prompt": "<|im_start|>user\nExplain the ReAct (Reasoning + Acting) pattern in Agentic AI. Provide a concise Python pseudocode example showing the loop. Keep the explanation under 300 words.<|im_end|>\n<|im_start|>assistant\n",
"max_tokens": 1024,
"temperature": 0.7,
"stream": false,
"stop": ["<|im_end|>"]
}'
The output that you see is similar to the following:
{
"id" : "cmpl-be345f0499e949ed8500e533be2cfe3f" ,
"object" : "text_completion" ,
"created" : 1764803171 ,
"model" : "deepseek-ai/DeepSeek-V3.2-Speciale" ,
"choices" : [
{
"index" : 0 ,
"text" : "The ReAct pattern integrates reasoning (thoughts) and actions (tool calls) within an agentic loop... [TRUNCATED FOR BREVITY] ...ReAct improves transparency and reliability by explicit reasoning steps." ,
"logprobs" : null ,
"finish_reason" : "stop" ,
"stop_reason" : "<|im_end|>" ,
"token_ids" : null ,
"prompt_logprobs" : null ,
"prompt_token_ids" : null
}
],
"service_tier" : null ,
"system_fingerprint" : null ,
"usage" : {
"prompt_tokens" : 57 ,
"total_tokens" : 317 ,
"completion_tokens" : 260 ,
"prompt_tokens_details" : null
},
"kv_transfer_params" : null
}
Observe model performance
To observe the performance of your model, you can use the vLLM dashboard
integration in
Cloud Monitoring . You can use this dashboard to view critical
performance metrics like token throughput, request latency, and error rates.
For information about using Google Cloud Managed Service for Prometheus
to collect metrics from your model, see the
vLLM
observability guidance in the Cloud Monitoring documentation.
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete your project
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
Delete the resources
To delete the deployment and service in the vllm-deepseek3-2.yaml file
and the Kubernetes secret from the GKE cluster, run the following command:
kubectl delete -f vllm-deepseek3-2.yaml
kubectl delete secret hf-secret
To delete your GKE cluster, run the following command:
gcloud container clusters delete $CLUSTER_NAME \
--region=$REGION
What's next
Manage AI-optimized GKE clusters
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-06 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
