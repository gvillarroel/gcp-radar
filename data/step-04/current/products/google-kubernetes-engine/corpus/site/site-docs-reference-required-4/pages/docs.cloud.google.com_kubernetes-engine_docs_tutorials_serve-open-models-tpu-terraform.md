---
title: "Serve open LLMs on GKE using TPUs with a pre-configured architecture \_|\_\
  \ GKE AI/ML \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-open-models-tpu-terraform
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-open-models-tpu-terraform
  title: "Serve open LLMs on GKE using TPUs with a pre-configured architecture \_\
    |\_ GKE AI/ML \_|\_ Google Cloud Documentation"
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
Serve open LLMs on GKE using TPUs with a pre-configured architecture
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This page shows you how to quickly deploy and serve popular open large language
models (LLMs) on GKE with TPUs for inference using a pre-configured,
production-ready GKE inference reference architecture . This approach uses Infrastructure as
Code (IaC), with Terraform wrapped in CLI scripts, to create a standardized,
secure, and scalable GKE environment designed for AI inference workloads.
In this guide, you deploy and serve LLMs using single-host TPU nodes on
GKE with the vLLM serving framework. This guide provides instructions and configurations for deploying the following open models:
Google Gemma 3 1B-it
Google Gemma 3 4B-it
Google Gemma 3 27B-it
Note: You must accept the license terms for any gated models you want to use
(such as Gemma) on their respective Hugging Face model page.
This guide is intended for Machine learning (ML) engineers and Data and AI specialists
who are interested in exploring Kubernetes container orchestration capabilities
for serving open models for inference. To learn more about common roles and example tasks
referenced in Google Cloud content, see Common GKE user roles and tasks .
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
roles/artifactregistry.admin, roles/browser, roles/compute.networkAdmin,
roles/container.clusterAdmin, roles/iam.roleAdmin, roles/iam.serviceAccountAdmin, roles/resourcemanager.projectIamAdmin, and roles/serviceusage.serviceUsageAdmin, roles/secretmanager.secretVersionManager
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
Create a Hugging Face account .
Ensure your project has sufficient
TPU quota (GKE Standard or TPU quota (GKE Autopilot) . For more
information, see Plan TPUs in GKE .
Get access to the model
Accept the license terms for any gated models you want to use
(such as Gemma) on their respective Hugging Face model page.
To access the model through Hugging Face, you need a
Hugging Face token .
Follow these steps to generate a new token if you don't have one already:
Click Your Profile > Settings > Access Tokens .
Select New Token .
Specify a Name of your choice and a Role of at least Read .
Select Generate a token .
Copy the generated token to your clipboard.
Provision the GKE inference environment
In this section, you deploy the necessary infrastructure to serve your model.
Launch Cloud Shell
This guide uses Cloud Shell to execute commands. Cloud Shell comes
preinstalled with the necessary tools, including gcloud , kubectl , and git .
In the Google Cloud console, start a Cloud Shell instance:
Open Cloud Shell
This action launches a session in the bottom pane of Google Cloud console.
Deploy the base architecture
To provision the GKE cluster and the necessary resources for
accessing models from Hugging Face, follow these steps:
In Cloud Shell, clone the following repository:
git clone https://github.com/GoogleCloudPlatform/accelerated-platforms --branch hf-model-vllm-tpu-tutorial && \
cd accelerated-platforms && \
export ACP_REPO_DIR = " $( pwd ) "
Set your environment variables:
export TF_VAR_platform_default_project_id = PROJECT_ID
export HF_TOKEN_READ = HF_TOKEN
Replace the following values:
PROJECT_ID : your Google Cloud
project ID .
HF_TOKEN : the Hugging Face token you
generated earlier.
This guide requires Terraform version 1.8.0 or later. Cloud Shell has
Terraform v1.5.7 installed by default.
To update the Terraform version in
Cloud Shell, you can run the following script. This script installs the tfswitch
tool and installs Terraform v1.8.0 in your home directory. Follow the instruction from the script to set the necessary environment variable or pass the --modify-rc-file flag to the script.
" ${ ACP_REPO_DIR } /tools/bin/install_terraform.sh" && \
export PATH = ${ HOME } /bin: ${ HOME } /.local/bin: ${ PATH }
Run the following deployment script. The deployment script enables the
required Google Cloud APIs and provisions the necessary infrastructure for
this guide. This includes a new VPC network, a
GKE cluster with private nodes,
and other supporting resources. The script can take several minutes to complete.
You can serve models using TPUs in a GKE Autopilot or Standard cluster. An
Autopilot cluster provides a fully managed Kubernetes experience.
For more information about choosing the GKE mode of operation
that's the best fit for your workloads, see
About GKE modes of operation .
Autopilot
" ${ ACP_REPO_DIR } /platforms/gke/base/tutorials/hf-tpu-model/deploy-ap.sh"
Standard
" ${ ACP_REPO_DIR } /platforms/gke/base/tutorials/hf-tpu-model/deploy-standard.sh"
After this script completes, you will have a GKE cluster ready
for inference workloads.
Run the following command to set environment variables from the shared configuration:
source " ${ ACP_REPO_DIR } /platforms/gke/base/use-cases/inference-ref-arch/terraform/_shared_config/scripts/set_environment_variables.sh"
The deployment script creates a secret in Secret Manager to store
your Hugging Face token. You must manually add your token to this secret
before deploying the cluster. In Cloud Shell, run this command to add the
token to Secret Manager.
echo ${ HF_TOKEN_READ } | gcloud secrets versions add ${ huggingface_hub_access_token_read_secret_manager_secret_name } \
--data-file = - \
--project = ${ huggingface_secret_manager_project_id }
Deploy an open model
You are now ready to download and deploy the model.
Select a model
Set the environment variables for the model you want to deploy:
Gemma 3 1B-it
export ACCELERATOR_TYPE = "v5e"
export HF_MODEL_ID = "google/gemma-3-1b-it"
Gemma 3 4B-it
export ACCELERATOR_TYPE = "v5e"
export HF_MODEL_ID = "google/gemma-3-4b-it"
Gemma 3 27B-it
export ACCELERATOR_TYPE = "v5e"
export HF_MODEL_ID = "google/gemma-3-27b-it"
For additional configurations, including other model variants and TPU types,
see the manifests available in the
accelerated-platforms GitHub repository .
Download the model
Source the environment variables from your deployment. These environment
variables contain the necessary configuration details from the infrastructure
you provisioned.
source " ${ ACP_REPO_DIR } /platforms/gke/base/use-cases/inference-ref-arch/terraform/_shared_config/scripts/set_environment_variables.sh"
Run the following script to configure the Hugging Face model download resources that downloads
the model to Cloud Storage:
" ${ ACP_REPO_DIR } /platforms/gke/base/use-cases/inference-ref-arch/kubernetes-manifests/model-download/configure_huggingface.sh"
Apply the Hugging Face model download resources:
kubectl apply --kustomize " ${ ACP_REPO_DIR } /platforms/gke/base/use-cases/inference-ref-arch/kubernetes-manifests/model-download/huggingface"
Monitor the Hugging Face model download job until it is complete.
until kubectl --namespace = ${ huggingface_hub_downloader_kubernetes_namespace_name } wait job/ ${ HF_MODEL_ID_HASH } -hf-model-to-gcs --for = condition = complete --timeout = 10s >/dev/null ; do
clear
kubectl --namespace = ${ huggingface_hub_downloader_kubernetes_namespace_name } get job/ ${ HF_MODEL_ID_HASH } -hf-model-to-gcs | GREP_COLORS = 'mt=01;92' egrep --color = always -e '^' -e 'Complete'
echo -e "\nhf-model-to-gcs logs(last 10 lines):"
kubectl --namespace = ${ huggingface_hub_downloader_kubernetes_namespace_name } logs job/ ${ HF_MODEL_ID_HASH } -hf-model-to-gcs --container = hf-model-to-gcs --tail 10
done
Verify the Hugging Face model download job is complete.
kubectl --namespace = ${ huggingface_hub_downloader_kubernetes_namespace_name } get job/ ${ HF_MODEL_ID_HASH } -hf-model-to-gcs | GREP_COLORS = 'mt=01;92' egrep --color = always -e '^' -e 'Complete'
Delete the Hugging Face model download resources.
kubectl delete --ignore-not-found --kustomize " ${ ACP_REPO_DIR } /platforms/gke/base/use-cases/inference-ref-arch/kubernetes-manifests/model-download/huggingface"
Deploy the model
Source the environment variables from your deployment.
source " ${ ACP_REPO_DIR } /platforms/gke/base/use-cases/inference-ref-arch/terraform/_shared_config/scripts/set_environment_variables.sh"
Verify the Hugging Face model name is set.
echo "HF_MODEL_NAME= ${ HF_MODEL_NAME } "
Configure the vLLM resources.
" ${ ACP_REPO_DIR } /platforms/gke/base/use-cases/inference-ref-arch/kubernetes-manifests/online-inference-tpu/vllm/configure_vllm.sh"
Deploy the inference workload to your GKE cluster.
kubectl apply --kustomize " ${ ACP_REPO_DIR } /platforms/gke/base/use-cases/inference-ref-arch/kubernetes-manifests/online-inference-tpu/vllm/ ${ ACCELERATOR_TYPE } - ${ HF_MODEL_NAME } "
Test your deployment
Monitor the inference workload deployment until it is available.
until kubectl --namespace = ${ ira_online_tpu_kubernetes_namespace_name } wait deployment/vllm- ${ ACCELERATOR_TYPE } - ${ HF_MODEL_NAME } --for = condition = available --timeout = 10s >/dev/null ; do
clear
kubectl --namespace = ${ ira_online_tpu_kubernetes_namespace_name } get deployment/vllm- ${ ACCELERATOR_TYPE } - ${ HF_MODEL_NAME } | GREP_COLORS = 'mt=01;92' egrep --color = always -e '^' -e '1/1 1 1'
echo -e "\nfetch-safetensors logs(last 10 lines):"
kubectl --namespace = ${ ira_online_tpu_kubernetes_namespace_name } logs deployment/vllm- ${ ACCELERATOR_TYPE } - ${ HF_MODEL_NAME } --container = fetch-safetensors --tail 10
echo -e "\ninference-server logs(last 10 lines):"
kubectl --namespace = ${ ira_online_tpu_kubernetes_namespace_name } logs deployment/vllm- ${ ACCELERATOR_TYPE } - ${ HF_MODEL_NAME } --container = inference-server --tail 10
done
Verify the inference workload deployment is available.
kubectl --namespace = ${ ira_online_tpu_kubernetes_namespace_name } get deployment/vllm- ${ ACCELERATOR_TYPE } - ${ HF_MODEL_NAME } | GREP_COLORS = 'mt=01;92' egrep --color = always -e '^' -e '1/1 1 1'
echo -e "\nfetch-safetensors logs(last 10 lines):"
kubectl --namespace = ${ ira_online_tpu_kubernetes_namespace_name } logs deployment/vllm- ${ ACCELERATOR_TYPE } - ${ HF_MODEL_NAME } --container = fetch-safetensors --tail 10
echo -e "\ninference-server logs(last 10 lines):"
kubectl --namespace = ${ ira_online_tpu_kubernetes_namespace_name } logs deployment/vllm- ${ ACCELERATOR_TYPE } - ${ HF_MODEL_NAME } --container = inference-server --tail 10
Run the following script to set up port forwarding and send a sample
request to the model.
kubectl --namespace = ${ ira_online_tpu_kubernetes_namespace_name } port-forward service/vllm- ${ ACCELERATOR_TYPE } - ${ HF_MODEL_NAME } 8000 :8000 >/dev/null &
PF_PID = $!
while ! echo -e '\x1dclose\x0d' | telnet localhost 8000 >/dev/null 2>&1 ; do
sleep 0 .1
done
curl http://127.0.0.1:8000/v1/chat/completions \
--data '{
"model": "/gcs/' ${ HF_MODEL_ID } '",
"messages": [ { "role": "user", "content": "What is GKE?" } ]
}' \
--header "Content-Type: application/json" \
--request POST \
--show-error \
--silent | jq
kill -9 ${ PF_PID }
You should see a JSON response from the model answering the question.
Clean up
To avoid incurring charges, delete all the resources you created.
Delete the inference workload:
kubectl delete --ignore-not-found --kustomize " ${ ACP_REPO_DIR } /platforms/gke/base/use-cases/inference-ref-arch/kubernetes-manifests/online-inference-tpu/vllm/ ${ ACCELERATOR_TYPE } - ${ HF_MODEL_NAME } "
Clean up the resources:
Autopilot
" ${ ACP_REPO_DIR } /platforms/gke/base/tutorials/hf-tpu-model/teardown-ap.sh"
Standard
" ${ ACP_REPO_DIR } /platforms/gke/base/tutorials/hf-tpu-model/teardown-standard.sh"
What's next
Learn more about
AI/ML model inference on GKE .
Analyze model inference performance and costs with the
GKE Inference Quickstart tool .
Explore the accelerated-platforms GitHub repository
used to build this architecture.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
