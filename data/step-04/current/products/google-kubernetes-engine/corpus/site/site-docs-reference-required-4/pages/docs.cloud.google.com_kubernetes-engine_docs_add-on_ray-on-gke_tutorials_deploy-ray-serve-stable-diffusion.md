---
title: "Deploy a Ray Serve application with a Stable Diffusion model on Google Kubernetes\
  \ Engine (GKE) \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/tutorials/deploy-ray-serve-stable-diffusion
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/tutorials/deploy-ray-serve-stable-diffusion
  title: "Deploy a Ray Serve application with a Stable Diffusion model on Google Kubernetes\
    \ Engine (GKE) \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation"
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
Deploy a Ray Serve application with a Stable Diffusion model on Google Kubernetes Engine (GKE)
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This guide provides an example of how to deploy and serve a Stable Diffusion
model on Google Kubernetes Engine (GKE) using
Ray Serve
and the
Ray Operator add-on
as an example implementation.
About Ray and Ray Serve
Ray is an open-source scalable compute framework for AI/ML applications. Ray
Serve is a model serving library for Ray used for scaling and serving models in
a distributed environment. For more information, see
Ray Serve in the Ray
documentation.
You can use a RayCluster or RayService resource to deploy your Ray Serve
applications. You should use a RayService resource in production for the
following reasons:
In-place updates for RayService applications
Zero downtime upgrading for RayCluster resources
Highly available Ray Serve applications
Objectives
This guide is intended for Generative AI customers, new or existing users of
GKE, ML Engineers, MLOps (DevOps) engineers, or platform
administrators who are interested in using Kubernetes container orchestration
capabilities for serving models using Ray.
Create a GKE cluster with a GPU node pool.
Create a Ray cluster using the
RayCluster
custom resource.
Run a Ray Serve application.
Deploy a
RayService
custom resource.
Costs
In this document, you use the following billable components of Google Cloud:
GKE
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Before you begin
Cloud Shell is preinstalled with the software you need for this
tutorial, including kubectl ,
and the gcloud CLI . If you don't use Cloud Shell,
you must install the gcloud CLI.
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
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
Enable the GKE API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable container.googleapis.com
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
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
Enable the GKE API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable container.googleapis.com
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/container.clusterAdmin, roles/container.admin
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Prepare your environment
To prepare up your environment, follow these steps:
Launch a Cloud Shell session from the Google Cloud console, by
clicking
Activate Cloud Shell in the
Google Cloud console .
This launches a session in the bottom pane of the Google Cloud console.
Set environment variables:
export PROJECT_ID= PROJECT_ID
export CLUSTER_NAME=rayserve-cluster
export COMPUTE_REGION=us-central1
export COMPUTE_ZONE=us-central1-c
export CLUSTER_VERSION= CLUSTER_VERSION
export TUTORIAL_HOME=`pwd`
Replace the following:
PROJECT_ID : your Google Cloud
project ID .
CLUSTER_VERSION : the GKE version to
use. Must be 1.30.1 or later.
Clone the GitHub repository:
git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples
Change to the working directory:
cd kubernetes-engine-samples/ai-ml/gke-ray/rayserve/stable-diffusion
Create a Python virtual environment:
venv
python -m venv myenv && \
source myenv/bin/activate
Conda
Install Conda .
Run the following commands:
conda create -c conda-forge python = 3 .9.19 -n myenv && \
conda activate myenv
When you deploy a Serve application with serve run , Ray expects the
Python version of the local client to match the version used in the Ray
cluster. The rayproject/ray:2.37.0 image uses Python 3.9. If you're
running a different client version, select the appropriate
Ray image .
Install the required dependencies to run the Serve application:
pip install ray [ serve ]== 2 .37.0
pip install torch
pip install requests
Create a cluster with a GPU node pool
Create an
Autopilot or Standard
GKE cluster with a GPU node pool:
Autopilot
Create an Autopilot cluster:
gcloud container clusters create-auto ${ CLUSTER_NAME } \
--enable-ray-operator \
--cluster-version = ${ CLUSTER_VERSION } \
--location = ${ COMPUTE_REGION }
Standard
Create a Standard cluster:
gcloud container clusters create ${ CLUSTER_NAME } \
--addons = RayOperator \
--cluster-version = ${ CLUSTER_VERSION } \
--machine-type = c3d-standard-8 \
--location = ${ COMPUTE_ZONE } \
--num-nodes = 1
Create a GPU node pool:
gcloud container node-pools create gpu-pool \
--cluster = ${ CLUSTER_NAME } \
--machine-type = g2-standard-8 \
--location = ${ COMPUTE_ZONE } \
--num-nodes = 1 \
--accelerator type = nvidia-l4,count = 1 ,gpu-driver-version = latest
Deploy a RayCluster resource
To deploy a RayCluster resource:
Review the following manifest:
apiVersion : ray.io/v1
kind : RayCluster
metadata :
name : stable-diffusion-cluster
spec :
rayVersion : '2.37.0'
headGroupSpec :
rayStartParams :
dashboard-host : '0.0.0.0'
template :
metadata :
spec :
containers :
- name : ray-head
image : rayproject/ray:2.37.0
ports :
- containerPort : 6379
name : gcs
- containerPort : 8265
name : dashboard
- containerPort : 10001
name : client
- containerPort : 8000
name : serve
resources :
limits :
cpu : "2"
ephemeral-storage : "15Gi"
memory : "8Gi"
requests :
cpu : "2"
ephemeral-storage : "15Gi"
memory : "8Gi"
nodeSelector :
cloud.google.com/machine-family : c3d
workerGroupSpecs :
- replicas : 1
minReplicas : 1
maxReplicas : 4
groupName : gpu-group
rayStartParams : {}
template :
spec :
containers :
- name : ray-worker
image : rayproject/ray:2.37.0-gpu
resources :
limits :
cpu : 4
memory : "16Gi"
nvidia.com/gpu : 1
requests :
cpu : 3
memory : "16Gi"
nvidia.com/gpu : 1
nodeSelector :
cloud.google.com/gke-accelerator : nvidia-l4
This manifest describes a RayCluster resource.
Apply the manifest to your cluster:
kubectl apply -f ray-cluster.yaml
Verify the RayCluster resource is ready:
kubectl get raycluster
The output is similar to the following:
NAME DESIRED WORKERS AVAILABLE WORKERS CPUS MEMORY GPUS STATUS AGE
stable-diffusion-cluster 2 2 6 20Gi 0 ready 33s
In this output, ready in the STATUS column indicates the RayCluster
resource is ready.
Connect to the RayCluster resource
To connect to the RayCluster resource:
Verify that GKE created the RayCluster service:
kubectl get svc stable-diffusion-cluster-head-svc
The output is similar to the following:
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
pytorch-mnist-cluster-head-svc ClusterIP 34.118.238.247 <none> 10001/TCP,8265/TCP,6379/TCP,8080/TCP 109s
Establish port-forwarding sessions to the Ray head:
kubectl port-forward svc/stable-diffusion-cluster-head-svc 8265 :8265 2>&1 >/dev/null &
kubectl port-forward svc/stable-diffusion-cluster-head-svc 10001 :10001 2>&1 >/dev/null &
Verify that the Ray client can connect to the Ray cluster using localhost:
ray list nodes --address http://localhost:8265
The output is similar to the following:
======== List: 2024-06-19 15:15:15.707336 ========
Stats:
------------------------------
Total: 3
Table:
------------------------------
NODE_ID NODE_IP IS_HEAD_NODE STATE NODE_NAME RESOURCES_TOTAL LABELS
0 1d07447d7d124db641052a3443ed882f913510dbe866719ac36667d2 10.28.1.21 False ALIVE 10.28.1.21 CPU: 2.0 ray.io/node_id: 1d07447d7d124db641052a3443ed882f913510dbe866719ac36667d2
# Several lines of output omitted
Run a Ray Serve application
To run a Ray Serve application:
Run the Stable Diffusion Ray Serve application:
serve run stable_diffusion:entrypoint --working-dir = . --runtime-env-json = '{"pip": ["torch", "torchvision", "diffusers==0.12.1", "huggingface_hub==0.25.2", "transformers", "fastapi==0.113.0"], "excludes": ["myenv"]}' --address ray://localhost:10001
The output is similar to the following:
2024-06-19 18:20:58,444 INFO scripts.py:499 -- Running import path: 'stable_diffusion:entrypoint'.
2024-06-19 18:20:59,730 INFO packaging.py:530 -- Creating a file package for local directory '.'.
2024-06-19 18:21:04,833 INFO handle.py:126 -- Created DeploymentHandle 'hyil6u9f' for Deployment(name='StableDiffusionV2', app='default').
2024-06-19 18:21:04,834 INFO handle.py:126 -- Created DeploymentHandle 'xo25rl4k' for Deployment(name='StableDiffusionV2', app='default').
2024-06-19 18:21:04,836 INFO handle.py:126 -- Created DeploymentHandle '57x9u4fp' for Deployment(name='APIIngress', app='default').
2024-06-19 18:21:04,836 INFO handle.py:126 -- Created DeploymentHandle 'xr6kt85t' for Deployment(name='StableDiffusionV2', app='default').
2024-06-19 18:21:04,836 INFO handle.py:126 -- Created DeploymentHandle 'g54qagbz' for Deployment(name='APIIngress', app='default').
2024-06-19 18:21:19,139 INFO handle.py:126 -- Created DeploymentHandle 'iwuz00mv' for Deployment(name='APIIngress', app='default').
2024-06-19 18:21:19,139 INFO api.py:583 -- Deployed app 'default' successfully.
Establish a port-forwarding session to the Ray Serve port (8000):
kubectl port-forward svc/stable-diffusion-cluster-head-svc 8000 :8000 2>&1 >/dev/null &
Run the Python script:
python generate_image.py
The script generates an image to a file named output.png . The image is
similar to the following:
Deploy a RayService
The
RayService
custom resource manages the lifecycle of a RayCluster resource and Ray Serve
application.
For more information about RayService, see
Deploy Ray Serve Applications
and
Production Guide
in the Ray documentation.
To deploy a RayService resource, follow these steps:
Review the following manifest:
apiVersion : ray.io/v1
kind : RayService
metadata :
name : stable-diffusion
spec :
serveConfigV2 : |
applications:
- name: stable_diffusion
import_path: ai-ml.gke-ray.rayserve.stable-diffusion.stable_diffusion:entrypoint
runtime_env:
working_dir: "https://github.com/GoogleCloudPlatform/kubernetes-engine-samples/archive/main.zip"
pip: ["diffusers==0.12.1", "torch", "torchvision", "huggingface_hub==0.25.2", "transformers"]
rayClusterConfig :
rayVersion : '2.37.0'
headGroupSpec :
rayStartParams :
dashboard-host : '0.0.0.0'
template :
spec :
containers :
- name : ray-head
image : rayproject/ray:2.37.0
ports :
- containerPort : 6379
name : gcs
- containerPort : 8265
name : dashboard
- containerPort : 10001
name : client
- containerPort : 8000
name : serve
resources :
limits :
cpu : "2"
ephemeral-storage : "15Gi"
memory : "8Gi"
requests :
cpu : "2"
ephemeral-storage : "15Gi"
memory : "8Gi"
nodeSelector :
cloud.google.com/machine-family : c3d
workerGroupSpecs :
- replicas : 1
minReplicas : 1
maxReplicas : 4
groupName : gpu-group
rayStartParams : {}
template :
spec :
containers :
- name : ray-worker
image : rayproject/ray:2.37.0-gpu
resources :
limits :
cpu : 4
memory : "16Gi"
nvidia.com/gpu : 1
requests :
cpu : 3
memory : "16Gi"
nvidia.com/gpu : 1
nodeSelector :
cloud.google.com/gke-accelerator : nvidia-l4
This manifest describes a RayService custom resource.
Apply the manifest to your cluster:
kubectl apply -f ray-service.yaml
Verify that the Service is ready:
kubectl get svc stable-diffusion-serve-svc
The output is similar to the following:
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
stable-diffusion-serve-svc ClusterIP 34.118.236.0 <none> 8000/TCP 31m
Configure port-forwarding to the Ray Serve Service:
kubectl port-forward svc/stable-diffusion-serve-svc 8000 :8000 2>&1 >/dev/null &
Run the Python script from the previous section:
python generate_image . py
The script generates an image similar to the image generated in the
previous section.
Observe your Ray workloads
To view details for your RayJobs, you can navigate to the Kubernetes Engine > AI/ML > Jobs
section in Google Cloud console.
View RayJobs in Google Cloud console
Clean up
Delete the project
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
Delete individual resources
To delete the cluster, type:
gcloud container clusters delete ${ CLUSTER_NAME }
What's next
Explore reference architectures, diagrams, and best practices about Google Cloud.
Take a look at our
Cloud Architecture Center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
