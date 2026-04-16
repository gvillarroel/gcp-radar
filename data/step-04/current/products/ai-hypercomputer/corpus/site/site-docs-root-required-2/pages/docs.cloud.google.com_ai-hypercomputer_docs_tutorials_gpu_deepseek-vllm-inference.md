---
title: "Use vLLM on GKE to run inference with DeepSeek-V3.1-Base \_|\_ AI Hypercomputer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/deepseek-vllm-inference
knowledge_key: corpus
source_id: site-docs-root-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/deepseek-vllm-inference
  title: "Use vLLM on GKE to run inference with DeepSeek-V3.1-Base \_|\_ AI Hypercomputer\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
AI Hypercomputer
Guides
Send feedback
Use vLLM on GKE to run inference with DeepSeek-V3.1-Base
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows you how to deploy and serve a
DeepSeek-V3.1-Base
language model by using the
vLLM framework .
You deploy this model on a Google Kubernetes Engine (GKE) Enterprise edition autopilot cluster and
consume a single
A4 virtual machine
(VM) that has 8 B200 GPUs.
Important: To complete this tutorial, you must have reserved the capacity to
create an A4 VM. To
learn more about your options for reserving capacity in
AI Hypercomputer for a future date and time, see
Choose a consumption option .
This tutorial is intended for machine learning (ML) engineers, platform
administrators and operators, and for data and AI specialists who are interested
in using Kubernetes container orchestration capabilities to handle inference
workloads.
Objectives
Access DeepSeek-V3.1-Base by using Hugging Face.
Prepare your environment.
Create a GKE cluster in Autopilot mode.
Create a Kubernetes secret for Hugging Face credentials.
Deploy a vLLM container to your GKE cluster.
Interact with DeepSeek-V3.1-Base by using curl.
Clean up.
Costs
This tutorial uses billable components of Google Cloud, including:
GKE pricing
Cloud GPUs pricing
To generate a cost estimate based on your projected usage, use the
Pricing Calculator .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
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
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
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
Access DeepSeek by using Hugging Face
To use Hugging Face to access DeepSeek, do the following:
Sign in to Hugging Face and explore the DeepSeek-V3.1-Base model .
Create a Hugging Face read access token .
Copy and save the read access token value. You use it later in
this tutorial.
Prepare your environment
To prepare your environment, set the default environment variables:
gcloud config set project PROJECT_ID
gcloud config set billing/quota_project PROJECT_ID
export PROJECT_ID = $( gcloud config get project )
export RESERVATION_URL = RESERVATION_URL
export REGION = REGION
export CLUSTER_NAME = CLUSTER_NAME
export HUGGING_FACE_TOKEN = HUGGING_FACE_TOKEN
export NETWORK = NETWORK_NAME
export SUBNETWORK = SUBNETWORK_NAME
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
where your reservation exists.
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
Create a GKE cluster in Autopilot mode
To create a GKE cluster in Autopilot mode, run the
following command:
gcloud container clusters create-auto $CLUSTER_NAME \
--project = $PROJECT_ID \
--region = $REGION \
--release-channel = rapid \
--network = $NETWORK \
--subnetwork = $SUBNETWORK
Creating the GKE cluster might take some time to complete. To
verify that Google Cloud has finished creating your cluster, go to
Kubernetes clusters
on the Google Cloud console.
Create a Kubernetes secret for Hugging Face credentials
To create a Kubernetes secret for Hugging Face credentials, do the following:
Configure kubectl to communicate with your GKE cluster:
gcloud container clusters get-credentials $CLUSTER_NAME \
--location = $REGION
Create a Kubernetes secret to store your Hugging Face token:
kubectl create secret generic hf-secret \
--from-literal = hf_token = ${ HUGGING_FACE_TOKEN } \
--dry-run = client -o yaml | kubectl apply -f -
Deploy a vLLM container to your GKE cluster
Create a vllm-deepseek3-1-base.yaml file with your chosen vLLM deployment:
apiVersion: apps/v1
kind: Deployment
metadata:
name: deepseek3-1-deploy
spec:
replicas: 1
selector:
matchLabels:
app: deepseek
template:
metadata:
labels:
app: deepseek
ai.gke.io/model: deepseek-v3-1-base
ai.gke.io/inference-server: vllm
examples.ai.gke.io/source: user-guide
spec:
containers:
- name: vllm-inference
image: us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:20250819_0916_RC01
resources:
requests:
cpu: "10"
memory: "1000Gi"
ephemeral-storage: "1Ti"
nvidia.com/gpu: "8"
limits:
cpu: "10"
memory: "1000Gi"
ephemeral-storage: "1Ti"
nvidia.com/gpu: "8"
command: ["python3", "-m", "vllm.entrypoints.openai.api_server"]
args:
- --model=$(MODEL_ID)
- --tensor-parallel-size=8
- --host=0.0.0.0
- --port=8000
- --max-model-len=8192
- --max-num-seqs=4
env:
- name: MODEL_ID
value: deepseek-ai/DeepSeek-V3.1-Base
- name: HUGGING_FACE_HUB_TOKEN
valueFrom:
secretKeyRef:
name: hf-secret
key: hf_token
volumeMounts:
- mountPath: /dev/shm
name: dshm
livenessProbe:
httpGet:
path: /health
port: 8000
initialDelaySeconds: 1800
periodSeconds: 10
readinessProbe:
httpGet:
path: /health
port: 8000
initialDelaySeconds: 1800
periodSeconds: 5
volumes:
- name: dshm
emptyDir:
medium: Memory
nodeSelector:
cloud.google.com/gke-accelerator: nvidia-b200
cloud.google.com/reservation-name: RESERVATION_URL
cloud.google.com/reservation-affinity: "specific"
cloud.google.com/gke-gpu-driver-version: latest
---
apiVersion: v1
kind: Service
metadata:
name: deepseek-service
spec:
selector:
app: deepseek
type: ClusterIP
ports:
- protocol: TCP
port: 8000
targetPort: 8000
---
apiVersion: monitoring.googleapis.com/v1
kind: PodMonitoring
metadata:
name: deepseek-monitoring
spec:
selector:
matchLabels:
app: deepseek
endpoints:
- port: 8000
path: /metrics
interval: 30s
Apply the vllm-deepseek3-1-base.yaml file to your GKE cluster:
kubectl apply -f vllm-deepseek3-1-base.yaml
During the deployment process, the container must download the
deepseek-ai/DeepSeek-V3.1-Base model from Hugging Face. For this reason,
deployment of the container might take up to 30 minutes to complete.
To see the completion status, run the following command:
kubectl wait \
--for=condition=Available \
--timeout=1800s deployment/deepseek3-1-deploy
The --timeout=1800s flag allows the command to monitor the deployment for
up to 30 minutes.
Interact with DeepSeek V3.1 by using curl
To verify the DeepSeek-V3.1-Base model that you deployed, do the following:
Set up port forwarding to DeepSeek-V3.1-Base:
kubectl port-forward service/deepseek-service 8000:8000
Open a new terminal window. You can then chat with your model by using curl :
curl http://127.0.0.1:8000/v1/chat/completions \
-X POST \
-H "Content-Type: application/json" \
-d '{
"model": "deepseek-ai/DeepSeek-V3.1-Base",
"messages": [
{
"role": "user",
"content": "Describe how generative AI works in one short and easy to understand sentence"
}
],
"stream":false
}'
The output that you see is similar to the following:
{
"id": "chatcmpl-1a47172070544a5d83199ed5548befca",
"object": "chat.completion",
"created": 1755891024,
"model": "deepseek-ai/DeepSeek-V3.1-Base",
"choices": [
{
"index": 0,
"message": {
"role": "assistant",
"content": "\nGenerative AI uses patterns from existing data to create new, similar content, like text, images, or music.\n",
"refusal": null,
"annotations": null,
"audio": null,
"function_call": null,
"tool_calls": [],
"reasoning_content": null
},
"logprobs": null,
"finish_reason": "stop",
"stop_reason": null
}
],
"service_tier": null,
"system_fingerprint": null,
"usage": {
"prompt_tokens": 17,
"total_tokens": 42,
"completion_tokens": 25,
"prompt_tokens_details": null
},
"prompt_logprobs": null,
"kv_transfer_params": null
}
Observe the performance of the model
If you want to observe your model's performance, then you can use the vLLM
dashboard integration in Cloud Monitoring .
This dashboard helps you view critical performance metrics for your model like
token throughput, network latency, and error rates. For information, see
vLLM in the
Monitoring documentation.
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
To delete the deployment and service in the vllm-deepseek3-1-base.yaml file
and the Kubernetes secret from the GKE cluster, run the following:
kubectl delete -f vllm-deepseek3-1-base.yaml
kubectl delete secret hf-secret
To delete your GKE cluster, do the following:
gcloud container clusters delete $CLUSTER_NAME \
--region=$REGION
What's next
Manage AI-optimized GKE clusters
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
