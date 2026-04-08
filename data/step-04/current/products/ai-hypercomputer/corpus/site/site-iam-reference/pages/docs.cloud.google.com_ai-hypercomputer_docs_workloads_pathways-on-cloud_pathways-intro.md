---
title: "Introduction to Pathways on Cloud \_|\_ AI Hypercomputer \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/workloads/pathways-on-cloud/pathways-intro
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/workloads/pathways-on-cloud/pathways-intro
  title: "Introduction to Pathways on Cloud \_|\_ AI Hypercomputer \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Introduction to Pathways on Cloud | AI Hypercomputer | Google Cloud Documentation
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
Single controller and multi-controller
Pathways components Pathways resource manager
Pathways client
Pathways worker
IFRT proxy client
IFRT proxy server
Sidecar server
PathwaysJob API
Pathways components on GKE Pathways resource manager
IFRT proxy server
Pathways worker
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Introduction to Pathways on Cloud
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Single controller and multi-controller
Pathways components Pathways resource manager
Pathways client
Pathways worker
IFRT proxy client
IFRT proxy server
Sidecar server
PathwaysJob API
Pathways components on GKE Pathways resource manager
IFRT proxy server
Pathways worker
What's next
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Pathways is a system designed to enable the creation of large-scale, multi-task,
and sparsely activated machine learning systems. It allows for the use of
thousands or tens of thousands of accelerators, with the ability to dynamically
allocate varying amounts of compute for different tasks based on their
processing requirements.
Pathways simplifies large-scale machine learning computations by enabling a
single JAX client to orchestrate workloads across multiple large TPU slices,
potentially spanning thousands of TPU chips.
Pathways is used internally at Google to train large models like Gemini.
Pathways on Cloud brings the same benefits to Google Cloud customers.
Before you begin
Make sure you have:
Installed Kubernetes tools
Installed the gcloud CLI
Enabled the TPU API
Enabled the Google Kubernetes Engine API
This document provides an overview of how to use Pathways managed TPUs on Google Kubernetes Engine (GKE)
for batch, real-time and interactive workloads. It assumes you are already
familiar with using TPUs with GKE
including both single and multi-slice TPUs on Google Kubernetes Engine ,
as well as general experience with multi-slice TPUs
Single controller and multi-controller
There are primarily two different ways to manage and orchestrate computations
across multiple devices:
Feature
Single-controller (Pathways)
Multi-controller (JAX Default)
Control
Single point of control: A single client program acts as the central controller.
Distributed control: Multiple processes participate, each with its own Python interpreter instance.
View
Unified view: Client sees all devices as a single, unified system.
Localized view: Each Python process sees only devices connected to it.
Programming
Simplified programming: Users interact with a single client, making
the system appear as a single large machine with many local
accelerators.
SPMD: Primarily uses the SPMD paradigm, requiring all devices to run
the same program.
Flexibility
Supports more complex computation patterns beyond SPMD, including
asymmetrical pipeline parallelism and computational sparsity.
Can be less flexible in resource management, especially across
different TPU slices.
Pathways components
The following section outlines the main components of the Pathways architecture.
Pathways resource manager
This is the central control plane of the Pathways system. It manages all the
accelerator resources and is responsible for coordinating the allocation of
accelerators for user jobs. It monitors the health of workers and handles job
scheduling, pausing, and resuming. It serves as a single point of contact for
errors and system status. This component only requires CPU resources.
Pathways client
This is an implementation of the Interim Framework Runtime
(IFRT) that serves as the entry point into the Pathways system. It receives
High-Level Operations (HLOs) from your program. The Pathways client is responsible
for coordinating with the Pathways resource manager to determine where to place compiled
programs for execution based on the user code. It presents a unified view of the
system to a given JAX client. This component only requires CPU resources.
Pathways worker
These are the processes that run on the accelerator machines (TPU VMs). They
receive compiled executables of your program from the IFRT proxy server and they
perform the computations on the TPUs. Pathways workers send data back to your
program over the IFRT proxy server. This component requires accelerator resources.
IFRT proxy client
This is an OSS implementation of the Interim Framework Runtime (IFRT)
API which decouples user code from the underlying runtime, and enhances code
portability and transparency. JAX uses this implementation as an alternative to
its default multi-controller runtime. The IFRT proxy client acts as a
communication bridge between your program and the Pathways components. It sends
requests to the IFRT proxy server and receives results from it. It is an OSS
implementation of the IFRT API. This component only requires CPU resources.
IFRT proxy server
This gRPC server receives requests from the IFRT proxy client
and forwards them to the Pathways client, which handles the actual distribution
of work. This component only requires CPU resources.
Sidecar server
This gRPC server is co-located with the Pathways worker on the accelerator VM to run user-specified Python code on the accelerator VM directly to reduce data transfer latency from controller to accelerators. The sidecar server interacts with the Pathways worker over a custom versioned protocol on the gRPC transport.
Pathways components
PathwaysJob API
The PathwaysJob API is an OSS
Kubernetes-native API, you use to deploy ML training and batch inference
workloads. The controller for the PathwaysJob leverages the JobSet API to manage
the lifecycle and coordination of all the Pathways components. This Custom
Resource Definition (CRD) gives you a high-level interface to define your
Pathways workloads, abstracting away the need to directly manage individual Pod
specifications for common scenarios. For a comprehensive list of all parameters
and their specific meanings, see PathwaysJob API documentation on GitHub .
apiVersion : pathways-job.pathways.domain/v1
kind : PathwaysJob
metadata :
name : pathways- USER
spec :
maxRestarts : MAX_RESTARTS
pathwaysVersion : jax- JAX_VERSION
workers :
- type : $(TPU_MACHINE_TYPE)
topology : $(TOPOLOGY)
numSlices : $(WORKLOAD_NODEPOOL_COUNT)
maxSliceRestarts : # Optional
customComponents : # This section is completely optional
- componentType : proxy_server
image : CUSTOM_PROXY_SERVER
customFlags :
- --flag_name_1=value_1
customEnv :
- name : key_1
value : value_1
- componentType : pathways_server
image : CUSTOM_PATHWAYS_SERVER
customFlags :
- --flag_name_1=value_1
customEnv :
- name : key_1
value : value_1
- componentType : worker
image : CUSTOM_WORKER
customFlags :
- --flag_name_1=value_1
customEnv :
- name : key_1
value : value_1
- componentType : colocated_python_sidecar
image : CUSTOM_SIDECAR_IMAGE
customFlags :
- --flag_name_1=value_1
customEnv :
- name : key_1
value : value_1
pathwaysDir : "gs:// BUCKET_NAME " # Pre-create this bucket.
controller :
deploymentMode : default # Default mode deploys pathways cpu resources (resource
# manager and proxy server) on a dedicated CPU node, recommended for training
elasticSlices : ELASTIC_SLICES
template :
spec :
containers :
- name : main
image : python:3.11
command :
- bash
- -c
- |
pip install pathwaysutils
python3 -c 'import pathwaysutils; import jax; pathwaysutils.initialize(); print(jax.devices())'
The following table describes the settings for the PathwaysJob API:
Attribute
Description
apiVersion
Specifies the API version for the PathwaysJob Custom Resource Definition (CRD): pathways-job.pathways.domain/v1.
kind
Identifies the Kubernetes object as a PathwaysJob .
metadata.name
The name of the PathwaysJob object in Kubernetes, typically following the pattern pathways- .
spec
Defines the desired state and configuration for the PathwaysJob .
spec.maxRestarts
The maximum number of times the PathwaysJob can be automatically restarted by the system if it encounters failures.
spec.pathwaysVersion
(Optional) Specifies the desired version of the JAX framework to be used within the Pathways environment for this job (for example, jax-0.5.3).
spec.workers
An array defining the configuration for the worker pool of the PathwaysJob , typically utilizing TPU resources.
spec.workers[].type
The type of TPU machine to use for the worker nodes (for example, $TPU_MACHINE_TYPE could be ct6e-standard-4t)
spec.workers[].topology
The topology of the TPU slices allocated to the workers (for example, $TOPOLOGY could be 2x2, 4x4, 2x2x2).
spec.workers[].numSlices
The number of TPU slices to provision for the worker pool (for example, $WORKLOAD_NODEPOOL_COUNT could be 2).
spec.workers[].maxSliceRestarts
(Optional) The maximum number of times an individual worker within a slice can be restarted if it fails.
spec.customComponents
(Optional) An array that allows you to define and deploy custom components (like proxy servers, Pathways servers, or additional workers) alongside the main job.
spec.customComponents[].componentType
Specifies the type of the custom component being defined (for example, proxy_server, pathways_server, worker, colocated_python_sidecar).
spec.customComponents[].image
The Docker image to be used for the container of this custom component.
spec.customComponents[].customFlags
An array of custom command-line flags that will be passed to the container when it starts.
spec.customComponents[].customEnv
An array of custom environment variables to be set within the container. Each element has a name and a value.
spec.pathwaysDir
The Cloud Storage bucket that is used by the PathwaysJob for
storing compilation artifacts and other temporary data.
This bucket needs to be created before running your workload.
spec.controller
Pathways controller configuration settings, which manages the overall
job execution.
spec.controller.deploymentMode
Specifies how the Pathways controller's CPU resources (Pathways resource manager
and Proxy Server) are deployed. Default mode deploys them on a dedicated
CPU node while colocate_head_with_workers deploys them alongside a TPU
worker.
spec.controller.elasticSlices
(Optional) The maximum number of TPU slices that can become unavailable
during the job's execution before it's considered unhealthy.
spec.controller.template
(Optional) Defines the Pod template for the user job. This is required
for batch workloads but not for interactive workloads.
spec.controller.template.spec
The specification of the Pod for the user job.
spec.controller.template.spec.containers
An array defining the containers that will run within the user job
spec.controller.template.spec.containers[].name
The name of the container within the user job (in this sample, it's main).
spec.controller.template.spec.containers[].image
The Docker image to use for the container in the main container (in this sample, it's python:3.11).
spec.controller.template.spec.containers[].command
The command to be run when the main container starts. In this sample,
it installs `pathwaysutils`, initializes Pathways, and prints JAX devices.
Pathways components on GKE
This section maps Pathways components to Google Kubernetes Engine components like containers
and pods.
Note: The container specifications outlined in this section are examples and used for demonstrative purposes only. The underlying containers are abstracted and managed
through the PathwaysJob Custom Resource Definition (CRD) API. Refer to the
PathwaysJob API for configuring and
managing these containers. Manipulation of individual container flags, environment variables and image locations is supported through the customComponents spec.
You can find Pathways container images at the following locations.
Container Type
Location
IFRT proxy server
us-docker.pkg.dev/cloud-tpu-v2-images/pathways/proxy_server:jax-<jax-version>
Pathways resource manager/worker
us-docker.pkg.dev/cloud-tpu-v2-images/pathways/server:jax-<jax-version>
Pathways resource manager
After you create a GKE cluster , you can use the following containerSpec to deploy the pathways resource manager:
- name : pathways-rm
image : us-docker.pkg.dev/cloud-tpu-v2-images/pathways/server:latest
imagePullPolicy : Always
env :
- name : HOST_ADDRESS
valueFrom :
fieldRef :
fieldPath : "metadata.labels['jobset.sigs.k8s.io/coordinator']"
- name : TPU_SKIP_MDS_QUERY
value : "true"
args :
- --server_port=29001
- --node_type=resource_manager
- --instance_count= WORKLOAD_NODEPOOL_COUNT
- --instance_type= SLICE_TOPOLOGY
- --gcs_scratch_location=gs:// BUCKET_NAME
Argument descriptions:
--server_port : the Pathways resource manager uses this port to communicate
with other pathways components.
--node_type : the node type. This should be set to "resource_manager" for the
Pathways resource manager and is not needed for the other containers.
--instance_count : the number of TPU slices.
--instance_type : the TPU type and topology of the slice. In the format of
tpu{TPU type}:{TPU topology} for example, tpuv5e:4x4 .
--gcs_scratch_location : a Cloud Storage bucket used for temporary files.
IFRT proxy server
You can use the following containerSpec to deploy an IFRT proxy server:
- name : pathways-proxy
image : us-docker.pkg.dev/cloud-tpu-v2-images/pathways/proxy_server:latest
imagePullPolicy : Always
env :
- name : PATHWAYS_HEAD
valueFrom :
fieldRef :
fieldPath : "metadata.labels['jobset.sigs.k8s.io/coordinator']"
args :
- --resource_manager_address=$(PATHWAYS_HEAD):29001
- --server_port=29000
- --gcs_scratch_location=gs:// BUCKET_NAME
ports :
- containerPort : 29000
Argument descriptions:
--resource_manager_address : the hostname and port that the proxy server uses
to communicate with the Pathways resource manager. The port should be the same
as the --server_port value used for the Pathways resource manager container.
--server_port : the IFRT proxy server uses this port to communicate with the
IFRT proxy client.
--gcs_scratch_location : a Cloud Storage bucket used for temporary files.
Pathways worker
You can use the following containerSpec to deploy Pathways workers:
- name : worker
image : us-docker.pkg.dev/cloud-tpu-v2-images/pathways/server:latest
imagePullPolicy : Always
env :
- name : PATHWAYS_HEAD
valueFrom :
fieldRef :
fieldPath : "metadata.labels['jobset.sigs.k8s.io/coordinator']"
- name : MEGASCALE_NUM_SLICES
valueFrom :
fieldRef :
fieldPath : "metadata.labels['jobset.sigs.k8s.io/replicatedjob-replicas']"
- name : MEGASCALE_SLICE_ID
valueFrom :
fieldRef :
fieldPath : "metadata.labels['jobset.sigs.k8s.io/job-index']"
- name : MEGASCALE_COORDINATOR_ADDRESS
value : "$(PATHWAYS_HEAD)"
args :
- --server_port=29001
- --resource_manager_address=$(PATHWAYS_HEAD):29001
- --gcs_scratch_location=gs:// BUCKET_NAME
ports :
- containerPort : 29001
resources :
limits :
google.com/tpu : "4"
Argument descriptions:
--resource_manager_address : the hostname and port that the TPU workers use to
communicate with the Pathways resource manager. The port should be the same as
the --server_port value used for the Pathways resource manager container
--server_port : the workers use this port to communicate with the proxy
server and Pathways resource manager.
--gcs_scratch_location : a Cloud Storage bucket used for temporary files.
The Pathways resource manager, IFRT proxy server, and Pathways workers can all
have different ports but in this example, the Pathways resource manager and the
Pathways worker share the same port.
What's next
Create a GKE cluster with Pathways
Run a batch workload with Pathways
Perform multihost inference using Pathways
Run an interactive workload with Pathways
Resilient training with Pathways
Port JAX workloads to Pathways
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
