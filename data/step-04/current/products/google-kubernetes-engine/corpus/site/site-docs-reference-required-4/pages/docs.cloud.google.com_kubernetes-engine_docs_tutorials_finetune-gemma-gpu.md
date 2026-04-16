---
title: "Fine-tune Gemma open models using multiple GPUs on GKE \_|\_ GKE AI/ML \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/finetune-gemma-gpu
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/finetune-gemma-gpu
  title: "Fine-tune Gemma open models using multiple GPUs on GKE \_|\_ GKE AI/ML \_\
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
GKE AI/ML
Guides
Send feedback
Fine-tune Gemma open models using multiple GPUs on GKE
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This tutorial shows you how to fine-tune
Gemma
large language model (LLM), family of open models, using graphical processing
units (GPUs) on Google Kubernetes Engine (GKE) with the Transformers
library from Hugging Face . Fine-tuning is a supervised
learning process that improves a pre-trained model's ability to perform specific
tasks by updating its parameters with a new dataset. In this tutorial, you
download the 2B-parameter pretrained Gemma family models from
Hugging Face and fine-tune them on a GKE
Autopilot
or Standard
cluster.
This guide is a good starting point if you need the granular control, scalability,
resilience, portability, and cost-effectiveness of managed Kubernetes when
fine-tuning an LLM.
Best practice :
Try our Vertex AI solution if you need a unified managed AI platform to rapidly build and serve ML models cost effectively.
Background
By serving Gemma using GPUs on GKE with the transformers library, you
can implement a robust, production-ready inference serving solution with all the
benefits of managed Kubernetes , including efficient scalability and higher
availability. This section describes the key technologies used in this guide.
Gemma
Gemma is
a set of openly available, lightweight generative artificial intelligence
(AI) models released under an open license. These AI models are available to run
in your applications, hardware, mobile devices, or hosted services.
In this guide we introduce Gemma for text generation. You can also tune these models to specialize in performing specific tasks.
The dataset you use in this document is b-mc2/sql-create-context .
To learn more, see the Gemma documentation .
GPUs
GPUs let you accelerate specific workloads running on your nodes such as machine
learning and data processing. GKE provides a range of machine
type options for node configuration, including machine types with NVIDIA H100,
L4, and A100 GPUs.
Before you use GPUs in GKE, consider completing the following learning path:
Learn about current GPU version availability
Learn about GPUs in GKE
Hugging Face Transformers
With the Transformers library from Hugging Face, you can access cutting-edge pretrained models. The Transformers library lets you reduce time, resources, and computational costs associated with the complete model training.
In this tutorial, you use the Hugging Face APIs and tools to download and fine-tune these pretrained models.
Objectives
This guide is intended for new or existing users of GKE, ML
Engineers, MLOps (DevOps) engineers, or platform administrators who are
interested in using Kubernetes container orchestration capabilities to
fine-tune LLMs on H100, A100, and L4 GPU hardware.
By the end of this guide, you should be able to perform the following steps:
Prepare your environment with a GKE cluster in
Autopilot mode.
Create a fine-tune container.
Use GPUs to fine-tune the Gemma 2B model and upload the
model to Hugging Face.
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
Enable the required APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
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
Enable the required APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Make sure that you have the following role or roles on the project:
roles/container.admin, roles/iam.serviceAccountAdmin, roles/cloudbuild.builds.editor
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
Specify a Name of your choice and a Role of at least Write .
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
export PROJECT_ID = $( gcloud config get project )
export CONTROL_PLANE_LOCATION = CONTROL_PLANE_LOCATION
export CLUSTER_NAME = CLUSTER_NAME
export HF_TOKEN = HF_TOKEN
export HF_PROFILE = HF_PROFILE
Replace the following values:
PROJECT_ID : your Google Cloud
project ID .
CONTROL_PLANE_LOCATION : the Compute Engine
region of the control plane of your
cluster. Provide a region that supports the accelerator
type you want to use, for example, us-central1 for L4 GPUs.
CLUSTER_NAME : the name of your cluster.
HF_TOKEN : the Hugging Face token
you generated earlier.
HF_PROFILE : the Hugging Face Profile ID that you
created earlier.
Clone the sample code repository from GitHub:
git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples
cd kubernetes-engine-samples/ai-ml/llm-finetuning-gemma
Create and configure Google Cloud resources
Follow these instructions to create the required resources.
Create a GKE cluster and node pool
You can serve Gemma on GPUs in a GKE Autopilot
or Standard cluster. To choose the GKE mode of operation that's the best fit for your workloads, see Choose a GKE mode of operation .
Best practice :
Use Autopilot for a fully managed Kubernetes experience.
Autopilot
In Cloud Shell, run the following command:
gcloud container clusters create-auto CLUSTER_NAME \
--project = PROJECT_ID \
--location = CONTROL_PLANE_LOCATION \
--release-channel = rapid \
--cluster-version = CLUSTER_VERSION
Replace the following values:
PROJECT_ID : your Google Cloud
project ID .
CONTROL_PLANE_LOCATION : the Compute Engine
region of the control plane of your
cluster. Provide a region that supports the accelerator
type you want to use, for example, us-central1 for L4 GPUs.
CLUSTER_NAME : the name of your cluster.
CLUSTER_VERSION : the GKE version,
which must support the Rapid release channel. For more information, see
Checking available and default versions .
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
type you want to use, for example, us-central1 for L4 GPUs.
CLUSTER_NAME : the name of your cluster.
The cluster creation might take several minutes.
Run the following command to create a
node pool for your cluster:
gcloud container node-pools create gpupool \
--accelerator type = nvidia-l4,count = 8 ,gpu-driver-version = latest \
--project = PROJECT_ID \
--location = CONTROL_PLANE_LOCATION \
--node-locations = CONTROL_PLANE_LOCATION -a \
--cluster = CLUSTER_NAME \
--machine-type = g2-standard-96 \
--num-nodes = 1
GKE creates a single node pool containing two L4 GPUs for
each node.
Create a Kubernetes secret for Hugging Face credentials
In Cloud Shell, do the following:
Configure kubectl to communicate with your cluster:
gcloud container clusters get-credentials CLUSTER_NAME \
--location = CONTROL_PLANE_LOCATION
Replace the following values:
CONTROL_PLANE_LOCATION : the Compute Engine
region of the control
plane of your cluster.
CLUSTER_NAME : the name of your cluster.
Create a Kubernetes Secret that contains the Hugging Face token:
kubectl create secret generic hf-secret \
--from-literal = hf_api_token = $HF_TOKEN \
--dry-run = client -o yaml | kubectl apply -f -
Replace $HF_TOKEN with the Hugging Face token
you generated earlier, or use the environment variable if you set it.
Create a fine-tuning container with Docker and Cloud Build
This container uses the PyTorch and Hugging Face Transformers code to fine-
tune the existing pre-trained Gemma model.
Create a Artifact Registry Docker Repository:
gcloud artifacts repositories create gemma \
--project = PROJECT_ID \
--repository-format = docker \
--location = us \
--description = "Gemma Repo"
Replace PROJECT_ID with your Google Cloud
project ID.
Build and push the image:
gcloud builds submit .
Export the IMAGE_URL for later use in this tutorial.
export IMAGE_URL = us-docker.pkg.dev/ PROJECT_ID /gemma/finetune-gemma-gpu:1.0.0
Run a fine-tuning Job on GKE
In this section, you deploy the Gemma fine-tuning Job. A Job controller in Kubernetes creates one or more
Pods and helps ensure that they successfully execute a specific
task.
Open the finetune.yaml file.
apiVersion : batch/v1
kind : Job
metadata :
name : finetune-job
namespace : default
spec :
backoffLimit : 2
template :
metadata :
annotations :
kubectl.kubernetes.io/default-container : finetuner
spec :
terminationGracePeriodSeconds : 600
containers :
- name : finetuner
image : $IMAGE_URL
resources :
limits :
nvidia.com/gpu : "8"
env :
- name : MODEL_NAME
value : "google/gemma-2b"
- name : NEW_MODEL
value : "gemma-2b-sql-finetuned"
- name : LORA_R
value : "8"
- name : LORA_ALPHA
value : "16"
- name : TRAIN_BATCH_SIZE
value : "1"
- name : EVAL_BATCH_SIZE
value : "2"
- name : GRADIENT_ACCUMULATION_STEPS
value : "2"
- name : DATASET_LIMIT
value : "1000"
- name : MAX_SEQ_LENGTH
value : "512"
- name : LOGGING_STEPS
value : "5"
- name : HF_TOKEN
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
restartPolicy : OnFailure
Apply the manifest to create the fine-tuning job:
envsubst < finetune.yaml | kubectl apply -f -
This instruction replaces the IMAGE_URL with the variable in the manifest.
Monitor the Job by running the following command:
watch kubectl get pods
Check the logs of the job by running the following command:
kubectl logs job.batch/finetune-job -f
The Job resource downloads the model data then fine-tunes the model across all
eight GPUs. This process can take up to 20 minutes.
After the Job is complete, go to your Hugging Face account. A new model named
HF_PROFILE /gemma-2b-sql-finetuned appears in your Hugging Face profile.
Serve the fine-tuned model on GKE
In this section, you deploy the vLLM container to serve the Gemma
model. This tutorial uses a Kubernetes Deployment to deploy the vLLM container. A Deployment is a Kubernetes API object that lets you run multiple replicas of Pods that are distributed among the nodes in a cluster..
Create the following serve-gemma.yaml manifest:
apiVersion : apps/v1
kind : Deployment
metadata :
name : vllm-gemma-deployment
spec :
replicas : 1
selector :
matchLabels :
app : gemma-server
template :
metadata :
labels :
app : gemma-server
ai.gke.io/model : gemma-2b
ai.gke.io/inference-server : vllm
examples.ai.gke.io/source : user-guide
spec :
containers :
- name : inference-server
image : docker.io/vllm/vllm-openai:v0.10.0
resources :
requests :
cpu : "2"
memory : "7Gi"
ephemeral-storage : "10Gi"
nvidia.com/gpu : 1
limits :
cpu : "2"
memory : "7Gi"
ephemeral-storage : "10Gi"
nvidia.com/gpu : 1
command : [ "python3" , "-m" , "vllm.entrypoints.openai.api_server" ]
args :
- --model=$(MODEL_ID)
- --tensor-parallel-size=1
env :
- name : LD_LIBRARY_PATH
value : ${LD_LIBRARY_PATH}:/usr/local/nvidia/lib64
- name : MODEL_ID
value : google/gemma-2b
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
Create the environment variable for new MODEL_ID :
export MODEL_ID = HF_PROFILE /gemma-2b-sql-finetuned
Replace HF_PROFILE with the Hugging Face Profile ID that you
created earlier.
Replace MODEL_ID in the manifest:
sed -i "s|google/gemma-2b| $MODEL_ID |g" serve-gemma.yaml
Apply the manifest:
kubectl apply -f serve-gemma.yaml
A Pod in the cluster downloads the model weights from Hugging Face and starts
the serving engine.
Wait for the Deployment to be available:
kubectl wait --for = condition = Available --timeout = 700s deployment/vllm-gemma-deployment
View the logs from the running Deployment:
kubectl logs -f -l app = gemma-server
The Deployment resource downloads the model data. This process can take a
few minutes. The output is similar to the following:
INFO 01-26 19:02:54 model_runner.py:689] Graph capturing finished in 4 secs.
INFO: Started server process [1]
INFO: Waiting for application startup.
INFO: Application startup complete.
INFO: Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
Make sure the model is fully downloaded before proceeding to the next section.
Serve the model
In this section, you interact with the model.
Set up port forwarding
Once the model is deployed, run the following command to set up port forwarding
to the model:
kubectl port-forward service/llm-service 8000 :8000
The output is similar to the following:
Forwarding from 127.0.0.1:8000 -> 8000
Interact with the model using curl
In a new terminal session, use curl to chat with your model:
The following example command is for TGI:
USER_PROMPT = "Question: What is the total number of attendees with age over 30 at kubecon eu? Context: CREATE TABLE attendees (name VARCHAR, age INTEGER, kubecon VARCHAR)"
curl -X POST http://localhost:8000/generate \
-H "Content-Type: application/json" \
-d @- <<EOF
{
"prompt" : " ${ USER_PROMPT } " ,
"temperature" : 0 .1,
"top_p" : 1 .0,
"max_tokens" : 24
}
EOF
The following output shows an example of the model response:
{"generated_text":" Answer: SELECT COUNT(age) FROM attendees WHERE age > 30 AND kubecon = 'eu'\n"}
Depending on your query, you might have to change the max_token to get a better result. You can also use the instruction tunded model for better chat experience.
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
cluster. Provide a region that supports the accelerator
type you want to use, for example, us-central1 for L4 GPUs.
CLUSTER_NAME : the name of your cluster.
What's next
Learn more about GPUs in
GKE .
Learn how to use Gemma with TGI on other accelerators,
including A100 and H100 GPUs, by viewing the sample code in GitHub .
Learn how to deploy GPU workloads in Autopilot .
Learn how to deploy GPU workloads in Standard .
Explore the Vertex AI Model Garden .
Discover how to run optimized AI/ML workloads with GKE
platform orchestration
capabilities .
Learn how to use Assured Workloads to apply controls to a folder in Google Cloud
to meet regulatory requirements.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
