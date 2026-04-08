---
title: "Run a batch workload with Pathways \_|\_ AI Hypercomputer \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/workloads/pathways-on-cloud/batch-workload
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/workloads/pathways-on-cloud/batch-workload
  title: "Run a batch workload with Pathways \_|\_ AI Hypercomputer \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Run a batch workload with Pathways | AI Hypercomputer | Google Cloud Documentation
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
Run inference with vLLM on GKE
DeepSeek V3.1
DeepSeek V3.2-Speciale
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
Manage how CoMMA collects NCCL telemetry
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
Before you begin
Build a training image using Maxtext
Run a batch workload using the PathwaysJob API
Run a batch workload using XPK
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Run a batch workload with Pathways
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Build a training image using Maxtext
Run a batch workload using the PathwaysJob API
Run a batch workload using XPK
What's next
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
For the purpose of this document, batch workloads are defined as JAX workloads
that execute to completion and are deployed within the same GKE
cluster as the Pathways cluster, specifically alongside the Pathways controller
components (IFRT proxy server and Pathways resource manager).
Completion of the JAX workload terminates the Pathways cluster components.
This guide uses a JAX training workload to demonstrate this.
Before you begin
Make sure you have:
Created a GKE cluster .
Installed XPK
Installed Kubernetes tools
Enabled the TPU API
Enabled the Google Kubernetes Engine API
Build a training image using Maxtext
MaxText is an open-source, large
language model (LLM) project developed by Google.
It's written in JAX and designed to be highly performant and scalable, running
efficiently on Google Cloud TPUs and GPUs.
To build a MaxText Docker image by using the latest version of stable JAX from
the OSS GitHub repository, run the following command:
See more code actions.
Light code theme
Dark code theme
git clone https://github.com/AI-Hypercomputer/maxtext
cd maxtext/dependencies/scripts
gcloud config set project PROJECT
bash ./docker_build_dependency_image.sh MODE = stable
gcloud auth configure-docker
bash ./docker_upload_runner.sh CLOUD_IMAGE_NAME = USER _runner # This script needs bash version >= 4.2 to execute.
This command pushes the MaxText Kubernetes image to gcr.io/$PROJECT/${USER}_runner .
You can use this Docker image to run training on TPUs using Pathways backend.
Run a batch workload using the Pathways Job API
The following manifest deploys the Pathways components and runs a MaxText
workload using the PathwaysJob API .
The workload is encapsulated in the main container and exercises train.py .
Copy the following YAML into a file named pathways-job-batch-training.yaml and
update the editable values.
apiVersion : pathways-job.pathways.domain/v1
kind : PathwaysJob
metadata :
name : pathways- USER
spec :
maxRestarts : MAX_RESTARTS
workers :
- type : TPU_MACHINE_TYPE
topology : TOPOLOGY
numSlices : WORKLOAD_NODEPOOL_COUNT
pathwaysDir : gs:// BUCKET_NAME
controller :
deploymentMode : default
template :
spec :
containers :
- name : main
image : gcr.io/ PROJECT / USER _runner
command :
- bash
- -c
- |
python3 -m MaxText.train /deps/src/MaxText/configs/base.yml \
base_output_directory=gs:// BUCKET_NAME \
run_name= RUN_NAME \
per_device_batch_size=1 \
enable_checkpointing=false \
remat_policy=full \
global_parameter_scale=1 \
steps=20 \
max_target_length=2048 \
use_iota_embed=true \
reuse_example_batch=1 \
dataset_type=synthetic \
attention=flash \
gcs_metrics=True \
enable_single_controller=True
Replace the following:
USER : your Google Cloud user ID
MAX_RESTARTS : the maximum number of times the Job can be restarted
TPU_MACHINE_TYPE : the TPU machine type
TOPOLOGY : the TPU v4 or later topology. For more information about TPU
versions and supported topologies, see TPU versions
WORKLOAD_NODEPOOL_COUNT : the number of node pools used by a Pathways workload
BUCKET_NAME : a Cloud Storage bucket for storing temporary files
PROJECT : your Google Cloud project ID
RUN_NAME : a user-assigned name to identify the workflow run
You can deploy the PathwaysJob YAML as follows:
kubectl apply -f pathways-job-batch-training.yaml
To view the PathwaysJob instance created by the previous command use:
kubectl get pathwaysjob
The output should look like this:
NAME AGE
pathways-trial 9s
To modify an attribute of the PathwaysJob instance, delete the PathwaysJob
instance, modify the YAML and apply it to create a new PathwaysJob instance.
You can follow the progress of your workload by navigating to the Logs Explorer for
your JAX container by choosing main under the Container Name filter.
You should see logs like the following which indicates training is progressing.
The workload will complete after 30 steps.
completed step: 1, seconds: 0.484, TFLOP/s/device: 87.349, Tokens/s/device: 2117.382, total_weights: 2945, loss: 10.888
completed step: 2, seconds: 0.407, TFLOP/s/device: 103.699, Tokens/s/device: 2513.735, total_weights: 3253, loss: 9.697
completed step: 3, seconds: 0.248, TFLOP/s/device: 170.300, Tokens/s/device: 4128.167, total_weights: 3154, loss: 9.641
completed step: 4, seconds: 0.216, TFLOP/s/device: 195.122, Tokens/s/device: 4729.880, total_weights: 3119, loss: 9.547
completed step: 5, seconds: 0.272, TFLOP/s/device: 155.298, Tokens/s/device: 3764.512, total_weights: 2837, loss: 10.179
completed step: 6, seconds: 0.472, TFLOP/s/device: 89.489, Tokens/s/device: 2169.266, total_weights: 3069, loss: 9.776
To delete the PathwaysJob instance, you can use the following command:
kubectl delete -f pathways-job-batch-training.yaml
Run a batch workload using XPK
Now you can submit the prebuilt Maxtext docker image using XPK with the same
command you used previously.
xpk workload create-pathways \
--workload = WORKLOAD \
--cluster = CLUSTER \
--num-slices = WORKLOAD_NODEPOOL_COUNT \
--tpu-type = TPU_TYPE \
--project = PROJECT \
--zone = ZONE \
--docker-image = 'gcr.io/ PROJECT / USER _runner' \
--command = "python3 -m MaxText.train /deps/src/MaxText/configs/base.yml base_output_directory=gs:// BUCKET_NAME per_device_batch_size=1 enable_checkpointing=false remat_policy=full global_parameter_scale=1 steps=20 max_target_length=2048 use_iota_embed=true reuse_example_batch=1 dataset_type=synthetic attention=flash gcs_metrics=True enable_single_controller=True run_name= RUN_NAME -pathways-job"
Replace the following:
WORKLOAD : a unique name to identify your workload
CLUSTER : the name of your GKE cluster
WORKLOAD_NODEPOOL_COUNT : the maximum number of times the job can be restarted
TPU_TYPE : the TPU type specifies the version and size of the Cloud TPU you
want to create. For more information about supported TPU types for
each TPU version, see TPU versions
PROJECT : you Google Cloud project ID
ZONE : the zone where you plan to run your workload
USER : your Google Cloud user ID
RUN_NAME : a user-assigned name to identify the workflow run
You should see output like the following:
[XPK] Follow your Pathways workload and other resources here : https://console.cloud.google.com/logs/query;query=resource.type%3D"k8s_container"%0Aresource.labels.project_id%3D"<project-name>"%0Aresource.labels.location%3D"<your-zone>"%0Aresource.labels.cluster_name%3D"<your-cluster-name>"%0Aresource.labels.pod_name:"<your-pod-name>"%0Aseverity>%3DDEFAULT
Use the link in the output from the previous XPK command to follow the progress
of your workload. You can filter the logs for your JAX container by choosing
jax-tpu under the Container Name filter.
completed step: 1, seconds: 0.484, TFLOP/s/device: 87.349, Tokens/s/device: 2117.382, total_weights: 2945, loss: 10.888
completed step: 2, seconds: 0.407, TFLOP/s/device: 103.699, Tokens/s/device: 2513.735, total_weights: 3253, loss: 9.697
completed step: 3, seconds: 0.248, TFLOP/s/device: 170.300, Tokens/s/device: 4128.167, total_weights: 3154, loss: 9.641
completed step: 4, seconds: 0.216, TFLOP/s/device: 195.122, Tokens/s/device: 4729.880, total_weights: 3119, loss: 9.547
completed step: 5, seconds: 0.272, TFLOP/s/device: 155.298, Tokens/s/device: 3764.512, total_weights: 2837, loss: 10.179
completed step: 6, seconds: 0.472, TFLOP/s/device: 89.489, Tokens/s/device: 2169.266, total_weights: 3069, loss: 9.776
The workload completes after the specified number of steps.
If you want to terminate it prematurely, use the following command:
xpk workload delete --workload = WORKLOAD --cluster = CLUSTER --project = PROJECT --zone = ZONE
What's next
Perform multihost inference using Pathways
Run an interactive workload with Pathways
Port JAX workloads to Pathways
Resilient training with Pathways
Troubleshoot Pathways on cloud
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
