---
title: "Train Llama2 with Megatron-LM on A3 Mega virtual machines \_|\_ GKE AI/ML\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/training-megatron-llama-workload
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/training-megatron-llama-workload
  title: "Train Llama2 with Megatron-LM on A3 Mega virtual machines \_|\_ GKE AI/ML\
    \ \_|\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Train Llama2 with Megatron-LM on A3 Mega virtual machines
Standard
Overview
In this quickstart, you learn how to run a container-based, Megatron-LM
PyTorch workload on A3 Mega .
The code is available on this GitHub repository: megatron-gke .
Before you begin
Take the following steps to enable the Google Kubernetes Engine (GKE) API:
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
Enable the GKE API.
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
Enable the GKE API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Make sure that you have the following role or roles on the project:
roles/container.admin, roles/compute.networkAdmin, roles/iam.serviceAccountUser
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
Create an A3 Mega cluster
Create a A3 Mega GKE cluster with GPUDirect-TCPXO and multi-networking. For more information,
see Maximize GPU network bandwidth with GPUDirect and multi-networking .
Set up your environment
Create environment variables for some common parameters
export CLUSTER_NAME= CLUSTER_NAME
export CONTROL_PLANE_LOCATION= CONTROL_PLANE_LOCATION
export PROJECT_ID= PROJECT_ID
Replace the following:
CLUSTER_NAME : the name of your A3 Mega GKE cluster
that has GPUDirect-TCPXO and multi-networking enabled.
CONTROL_PLANE_LOCATION : the Compute Engine
location of the control plane of your
cluster. Provide a region for regional clusters, or a zone for zonal clusters.
PROJECT_ID : your Google Cloud project ID.
Configure the Google Cloud CLI to use your Google Cloud credentials for
authentication:
gcloud auth login
For more information, see Authenticate for using the Google Cloud CLI .
Install kubectl and the GKE gcloud CLI plugin:
sudo apt-get install kubectl
sudo apt-get install google-cloud-sdk-gke-gcloud-auth-plugin
Fetch credentials for your GKE cluster:
gcloud container clusters get-credentials ${CLUSTER_NAME} \
--location=${CONTROL_PLANE_LOCATION} \
--project=${PROJECT_ID}
If not already installed, install Helm :
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
chmod 700 get_helm.sh
./get_helm.sh && rm get_helm.sh
sudo chmod +x /usr/local/bin/helm
Use topology-aware scheduler to deploy your Pods
You can use the topology-aware scheduler to deploy your GKE Pods
to nodes that have a specified GPU topology.
In the following kubectl commands, you will use the files directly from a
repository. Alternatively, you can clone the repository locally and the kubectl
commands can reference the local files instead.
For more information, see Topology scheduler .
Set up the service account:
kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/master/gpudirect-tcpxo/topology-scheduler/service-account.yaml
Install the topology scheduler scripts in a configmap:
curl -OL https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/master/gpudirect-tcpxo/topology-scheduler/schedule-daemon.py
curl -OL https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/master/gpudirect-tcpxo/topology-scheduler/label-nodes-daemon.py
kubectl -n kube-system create configmap topology-scheduler-scripts \
--from-file=schedule-daemon.py=schedule-daemon.py \
--from-file=label-nodes-daemon.py=label-nodes-daemon.py
Install the topology label daemonset and topology scheduler Pod:
kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/master/gpudirect-tcpxo/topology-scheduler/label-nodes-daemon.yaml
$ kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/master/gpudirect-tcpxo/topology-scheduler/schedule-daemon.yaml
Observe the actions of the topology scheduler:
kubectl -n kube-system logs topology-scheduler-pod
Run the workload
Build the Dockerfile and push to the Google Cloud Artifact Registry
Create a Cloud Storage bucket and a Docker repository .
In the scripts/setup-and-configure-resources.sh script , replace the bucket
and repository names with the ones you created, and then run the script:
bash scripts/setup-and-configure-resources.sh
Build and push the pytorch-megatron:23.11-py3 image to your repository.
Ensure the Docker repository name in the scripts/build-and-push-docker-image.sh
file matches the repository name you used in the scripts/setup-and-configure-resources.sh
script. You can also edit the Docker image tag name before pushing.
bash scripts/build-and-push-docker-image.sh
Note: This image is based off of nvcr.io/nvidia/pytorch:23.11-py3 with minimal
changes.
Launch Megatron-LM Llama2 benchmark
Edit the helm/values.yaml file to specify your Cloud Storage bucket and
Docker image created in previous sections. For some example configurations,
see sample-configurations .
Optional: You can also edit the selected-configuration.sh file to specify
any changes you made to the default Helm configuration.
helm install HELM_EXPERIMENT_NAME helm/ --values helm/values.yaml
Replace HELM_EXPERIMENT_NAME with an arbitrary name for your experiment.
Note: If you want to run the Helm experiment multiple times, you can either erase
the existing experiment using the helm uninstall command or you can create a new
experiment with a different name.
The experiment writes metrics from the Nsight Systems profiling tool to the Cloud Storage bucket
specified in the megatron-experiments directory.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Delete the GKE cluster:
Go to the Clusters page:
Go to Clusters
Select the checkbox for CLUSTER_NAME .
Click delete Delete .
To confirm deletion, type CLUSTER_NAME and click Delete .
Delete the Cloud Storage bucket
Go to the Buckets page:
Go to Buckets
Select the checkbox for the Cloud Storage bucket you created for this
quickstart.
Click delete Delete .
To confirm deletion, type DELETE and click Delete .
What's next
Learn more about using GPUs in GKE
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
