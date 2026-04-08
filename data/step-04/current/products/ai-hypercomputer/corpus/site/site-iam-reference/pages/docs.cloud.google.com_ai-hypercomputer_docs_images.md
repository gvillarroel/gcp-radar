---
title: "OS and Docker images \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/images
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/images
  title: "OS and Docker images \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

OS and Docker images | AI Hypercomputer | Google Cloud Documentation
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
Understand the image categories
AI and ML frameworks and libraries JAX AI images
Deep Learning Software Layer (DLSL) Docker images
Cluster deployment and orchestration GKE node images
Slurm OS images
Accelerator OS images
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
OS and Docker images
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Understand the image categories
AI and ML frameworks and libraries JAX AI images
Deep Learning Software Layer (DLSL) Docker images
Cluster deployment and orchestration GKE node images
Slurm OS images
Accelerator OS images
What's next
Google Cloud provides images that contain common operating systems,
frameworks, libraries, and drivers. Google Cloud optimizes these
pre-configured images to support your artificial intelligence (AI) and machine
learning (ML) workloads.
This document provides an overview of the images that you use to deploy, manage,
and run workloads in your AI Hypercomputer environment.
Understand the image categories
Images are grouped into the following categories:
AI and ML frameworks and libraries : Docker images that are
pre-configured with binaries for ML frameworks and libraries
to simplify the creation, training, and use of ML models. On
AI Hypercomputer, you can use
Deep Learning Software Layer (DLSL) Docker
images to run ML models such as NeMO and MaxText on a
Google Kubernetes Engine (GKE) cluster.
Cluster deployment and orchestration : operating system (OS) images
that you use to deploy and manage the
performance-optimized infrastructure on
which your AI workloads run. You can deploy your AI workloads on
GKE clusters, Slurm clusters, or Compute Engine instances.
For more information, see
VM and cluster creation overview .
The following operating system images are available for cluster or instance
deployment:
GKE node images : you can use these
images to deploy GKE clusters.
Slurm OS images : Cluster Toolkit builds and
deploys these images, which install the necessary system software for
Slurm nodes.
Accelerator OS images : you can use these images
to create individual or groups of instances.
AI and ML frameworks and libraries
Google Cloud provides Docker images that package popular AI and ML frameworks
and libraries. These images provide the software needed to simplify the
development, training, and deployment of models on your AI-optimized clusters
running on AI Hypercomputer.
JAX AI images
The JAX AI Images (JAII, formerly known as JAX Stable Stack Images) for
Google Cloud TPUs and GPUs offer ready-to-use Docker images that contain the
JAX framework, a curated collection of compatible libraries, and settings for
the Google Cloud infrastructure. JAX AI TPU images come pre-configured with JAX
libraries and TPU libraries . JAX AI GPU
images come pre-configured with JAX libraries and relevant CUDA/NVIDIA libraries .
The hardware layer
JAX AI images sit on top of the hardware layer which consists of the
accelerators (TPU or GPU) and their associated VMs. In order to use a JAX AI
image, you need to provision TPU or GPU VMs. You can do this using the TPU API,
Compute Engine API, or the GKE API.
The framework layer
The framework layer provides tools and libraries for building ML workloads. JAX
AI images provide a pre-configured base for JAX-based ML workloads, including
the core JAX library and other essential dependencies, to ensure a consistent
and high-performance development experience.
The LibTPU layer in the JAX AI image is specifically built and bundled with the
respective JAX version. Using a different JAX version may lead to unexpected
behavior or errors.
The CUDA layer in the JAX AI image includes components managed by NVIDIA, such
as the NGC CUDA Deep Learning Image, used as the base image of the GPU Training
Image. The GPU image also contains Transformer Engine, a custom NVIDIA library
for accelerating transformer models on NVIDIA GPUs.
Additional application-specific packages, beyond those provided in the
JAX AI image, may be required for your specific machine learning workload.
Libraries in JAX AI Images:
TPU images GPU images
More
Functionality
Package Name
Core Libraries or Components
ML Framework
JAX and JAX lib
LibTPU
Cloud LibTPU stable Release
Layer/Model Library
Flax
Checkpointing
Orbax
Quantization
Qwix
Optimizers
Optax
aqtp
Custom Kernels
Tokamax
Config
Fiddle
Input pipeline
tf.data
PyGrain
array-record
Profiling, debugging
Tensorboard
Utils
Common loop utils
ML goodput measurement
ML collections
Cloud-specific Tools
Google Cloud
Google Cloud SDK
Google Cloud storage
Diagnostics
Cloud Accelerator Diagnostics
Cloud TPU Diagnostics
Functionality
Package Name
Core Libraries or Components
ML Framework
JAX and JAX lib
NVIDIA CUDA Libraries
CUDA DL Image
Layer/Model Library
Flax
Checkpointing
Orbax
Optimizers
Optax
aqtp
TransformerEngine
Config
Fiddle
Input pipeline
tf.data
PyGrain
array-record
Profiling, debugging
Tensorboard
Utils
Common loop utils
ML goodput measurement
ML collections
Cloud-specific Tools
Google Cloud
Google Cloud SDK
Google Cloud storage
Diagnostics
Cloud Accelerator Diagnostics
Current JAX AI images
TPU images GPU images
More
JAX AI image
Release date
JAX 0.9.0 Revision 1
2026-02-03
JAX 0.8.2 Revision 1
2026-01-14
JAX 0.8.1 Revision 1
2025-11-21
JAX 0.8.0 Revision 1
2025-10-28
JAX 0.7.2 Revision 1
2025-09-30
JAX 0.7.0 Revision 1
2025-07-29
JAX 0.6.1 Revision 1
2025-06-05
JAX 0.5.2 Revision 2
2025-04-25
JAX 0.5.2 Revision 1
2025-03-17
JAX 0.4.37 Revision 1
2024-12-12
JAX 0.4.35 Revision 1
2024-10-30
JAX AI image
Release date
JAX 0.7.2 with CUDA DL 25.06 Revision 1
2025-09-30
JAX 0.6.1 with CUDA DL 25.03 Revision 1
2025-06-05
JAX 0.5.1 with CUDA DL 25.02 Revision 1
2025-03-17
The application layer
You implement your specific ML workloads in the application layer which sits on
top of the framework layer. The application layer contains your application
specific code, models, and logic, all built using the tools and libraries
provided by the framework layer.
While this image provides a robust and well-tested foundation for JAX-based AI
workloads, you may need to add application-specific dependencies. When doing so,
we recommended that you do so in a way that minimizes interference with the
pre-configured base layer, which includes JAX and its core dependencies.
Introducing application-level dependencies that override or conflict with the
existing dependencies can cause side-effects such as:
Unexpected Behaviors: your ML workloads may exhibit different behavior than
before you introduced additional dependencies to the JAX AI image.
Performance Regressions: overriding optimized JAX-related libraries can
negatively impact the performance benefits provided by the JAX AI image
Stability Issues: conflicts between your added dependencies and the core JAX
dependencies can introduce instability and runtime errors within your
application.
Release Cadence
Initially, JAX AI images are provided quarterly with a near-term goal of a
synchronized release schedule with every JAX release. This ensures that
you can benefit from the latest features and improvements as soon as they are
available.
Support
Each JAX AI image release adheres to a limited-time support lifecycle. Within
this timeframe, we address specific categories of requests for modifications to
existing JAX AI images:
Security vulnerabilities: we prioritize addressing security vulnerabilities
discovered in the base images or dependencies of JAX Stable Stack Docker
images. Updated images will be released to mitigate potential risks.
Breaking changes: in the event of significant breaking changes in the
underlying libraries or frameworks used by JAX AI image, Google Cloud
evaluates and implements necessary updates to maintain compatibility. This may
involve rebuilding Docker images with updated dependencies.
Note:
JAX AI images are a curated collection of packages, each with an independent
release cycle. Therefore, the concept of patched releases doesn't directly
apply to the entire stack.
When a security vulnerability or bug is discovered in a library within a JAII,
we incorporate the updated library into JAII, pinning all other library versions
to maintain overall stability. This results in a new JAII revision.
Minimal change for revisions:
If a bug is found in package "X" within JAX-0.4.30-rev1, we'll update "X" to its
next release (for example, v2.0) while trying to keep keeping all other packages
unchanged. This results in a new revision: JAX-0.4.30-rev2, which will be
released as quickly as possible.
Deep Learning Software Layer (DLSL) Docker images
These images package NVIDIA CUDA, NCCL, an ML framework, and a model. They provide
a ready-to-use environment for deep learning workloads. These prebuilt DLSL
Docker images work seamlessly with your
GKE clusters because we test and verify these images during
internal reproducibility and regression testing.
Note: If you want to use DLSL images, you must provision an AI-optimized
GKE cluster first.
DLSL Docker images provide the following benefits:
Preconfigured software : DLSL Docker images replicate the setup that
internal reproducibility and regression testing use. These images provide a
pre-configured, tested, and optimized environment, which saves significant
time and effort in installation and configuration.
Version management : DLSL Docker images are frequently updated. These version
updates provide the latest stable version of frameworks and drivers, and the
updates also address security patches.
Infrastructure compatibility : DLSL Docker images are built and tested
to work seamlessly with the GPU machine types available on AI Hypercomputer.
Quickstart instructions : some DLSL Docker images have accompanying
sample recipes that
show you how to start your workloads that use the pre-configured images.
NeMo + PyTorch + NCCL gIB plugin
These Docker images are based on the NVIDIA NeMo NGC
image . They
contain Google's NCCL gIB plugin and bundle all NCCL binaries required to run
workloads on each supported accelerator machine. These images also include Google Cloud
tools such as gcsfuse and the
gcloud CLI for deploying workloads to
Google Kubernetes Engine.
DLSL image version
Dependencies version
Machine series
Release date
End of support date
DLSL image name
nemo25.04-gib1.0.6-A4
NeMo NGC:25.04.01
NCCL giB plugin: 1.0.6
A4
July 3, 2025
July 3, 2026
us-central1-docker.pkg.dev/deeplearning-images/reproducibility/pytorch-gpu-nemo-nccl:nemo25.04-gib1.0.6-A4
nemo25.04-gib1.0.6-A3U
NeMo NGC:25.04.01
NCCL giB plugin: 1.0.6
A3 Ultra
July 3, 2025
July 3, 2026
us-central1-docker.pkg.dev/deeplearning-images/reproducibility/pytorch-gpu-nemo-nccl:nemo25.04-gib1.0.6-A3U
nemo25.02-gib1.0.5-A4
NeMo NGC:25.02
NCCL giB plugin: 1.0.5
A4
March 14, 2025
March 14, 2026
us-central1-docker.pkg.dev/deeplearning-images/reproducibility/pytorch-gpu-nemo-nccl:nemo25.02-gib1.0.5-A4
nemo24.07-gib1.0.2-A3U
NeMo NGC:24.07
NCCL giB plugin: 1.0.2
A3 Ultra
February 2, 2025
February 2, 2026
us-central1-docker.pkg.dev/deeplearning-images/reproducibility/pytorch-gpu-nemo-nccl:nemo24.07-gib1.0.2-A3U
nemo24.07-gib1.0.3-A3U
NeMo NGC:24.07
NCCL giB plugin: 1.0.3
A3 Ultra
February 2, 2025
February 2, 2026
us-central1-docker.pkg.dev/deeplearning-images/reproducibility/pytorch-gpu-nemo-nccl:nemo24.07-gib1.0.3-A3U
nemo24.12-gib1.0.3-A3U
NeMo NGC:24.12
NCCL giB plugin: 1.0.3
A3 Ultra
February 7, 2025
February 7, 2026
us-central1-docker.pkg.dev/deeplearning-images/reproducibility/pytorch-gpu-nemo-nccl:nemo24.12-gib1.0.3-A3U
nemo24.07-tcpx1.0.5-A3Mega
NeMo NGC:24.07
GPUDirect-TCPX: 1.0.5
A3 Mega
March 12, 2025
March 12, 2026
us-central1-docker.pkg.dev/deeplearning-images/reproducibility/pytorch-gpu-nemo-nccl:nemo24.07-tcpx1.0.5-A3Mega
nemo24.07-tcpx1.0.5-A3High
NeMo NGC:24.07
GPUDirect-TCPX: 1.0.5
A3 High (8 GPUs)
March 12, 2025
March 12, 2026
us-central1-docker.pkg.dev/deeplearning-images/reproducibility/pytorch-gpu-nemo-nccl:nemo24.07-tcpx1.0.5-A3High
NeMo + PyTorch
This Docker image is based on the NVIDIA NeMo NGC
image and
includes Google Cloud tools such as
gcsfuse and
gcloud CLI for deploying workloads to
Google Kubernetes Engine.
DLSL image version
Dependencies version
Machine series
Release date
End of support date
DLSL image name
nemo24.07--A3U
NeMo NGC:24.07
A3 Ultra
December 19, 2024
December 19, 2025
us-central1-docker.pkg.dev/deeplearning-images/reproducibility/pytorch-gpu-nemo:nemo24.07-A3U
nemo24.07-tcpx1.0.5-A3Mega
NeMo NGC:24.07
GPUDirect-TCPX: 1.0.5
A3 Mega
March 12, 2025
March 12, 2026
us-central1-docker.pkg.dev/deeplearning-images/reproducibility/pytorch-gpu-nemo:nemo24.07-tcpx1.0.5-A3Mega
nemo24.07-tcpx1.0.5-A3High
NeMo NGC:24.07
GPUDirect-TCPX: 1.0.5
A3 High (8 GPUs)
March 12, 2025
March 12, 2026
us-central1-docker.pkg.dev/deeplearning-images/reproducibility/pytorch-gpu-nemo:nemo24.07-tcpx1.0.5-A3High
MaxText + JAX toolbox
This Docker image is based on the NVIDIA JAX toolbox
image and includes
Google Cloud tools such as
gcsfuse and
gcloud CLI for deploying workloads to
Google Kubernetes Engine.
DLSL image version
Dependencies version
Machine series
Release date
End of support date
DLSL image name
toolbox-maxtext-2025-01-10-A3U
JAX toolbox: maxtext-2025-01-10
A3 Ultra
March 11, 2025
March 11, 2026
us-central1-docker.pkg.dev/deeplearning-images/reproducibility/jax-maxtext-gpu:toolbox-maxtext-2025-01-10-A3U
jax0.5.1-cu12-A3Mega
JAX: 0.5.1
CUDA: 12.x
MaxText: Latest
A3 Mega
March 17, 2025
March 17, 2026
us-central1-docker.pkg.dev/deeplearning-images/reproducibility/jax-gpu-maxtext:jax0.5.1-cu12-A3Mega
jax0.5.1-cu12-A3High
JAX: 0.5.1
CUDA: 12.x
MaxText: Latest
A3 High (8 GPUs)
March 17, 2025
March 17, 2026
us-central1-docker.pkg.dev/deeplearning-images/reproducibility/jax-gpu-maxtext:jax0.5.1-cu12-A3High
MaxText + JAX stable stack
This Docker image is based on the
JAX stable stack
and MaxText . This image also
includes dependencies such as dnsutils for running workloads on
Google Kubernetes Engine.
DLSL image version
Dependencies version
Machine series
Release date
End of support date
DLSL image name
jax-maxtext-gpu:jax0.5.1-cuda_dl25.02-rev1-maxtext-20150317
JAX Stable stacks:jax0.5.1-cuda_dl25.02-rev1
maxtext commit: 54e98c9e62caa426cf5902be068533ddb4fb79f5
A4
March 17, 2025
March 17, 2026
us-central1-docker.pkg.dev/deeplearning-images/reproducibility/jax-maxtext-gpu:jax0.5.1-cuda_dl25.02-rev1-maxtext-20150317
Cluster deployment and orchestration
OS images include all the necessary software components to deploy an operating
system on a compute instance or GKE node. The operating system
manages underlying hardware resources, such as accelerators and networking.
This provides the compute resources for your AI workload.
GKE node images
GKE deploys clusters using node images. These node images are
available for various operating systems such as Container-Optimized OS,
Ubuntu, and Windows Server. The
Container-Optimized OS with containerd (cos_containerd)
node images that you need to deploy GKE Autopilot
clusters include optimizations to support your AI and ML workloads.
For more information about these node images, see
Node images .
Slurm OS images
Slurm clusters deploy compute and controller nodes as compute instances
on Compute Engine.
To provision AI-optimized Slurm clusters, you must use
Cluster Toolkit .
During Slurm cluster deployment, the cluster blueprint automatically builds a
custom OS image that installs the required system software for cluster and
workload management on the Slurm nodes. You can modify the default blueprints
before you deploy them to customize some of the software that your images include.
The following section summarizes the software that the cluster blueprint
installs on your A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) Slurm nodes.
Cluster blueprints extend the
Ubuntu LTS Accelerator OS images .
A4X Max A4X A4 A3 Ultra A3 Mega A3 High
More
The A4X Max
blueprint available on GitHub includes the following software by default:
Ubuntu 24.04 LTS
Slurm: version 25.05.2
The following Slurm dependencies:
munge
mariadb
libjwt
lmod
Open MPI : version 5.0.x
NFS client and server
NVIDIA 580 series drivers
NVIDIA Enroot
NVIDIA Pyxis
The following NVIDIA tools:
Data Center GPU Manager ( dcgmi )
nvidia-container-toolkit : version 1.17.7
nvidia-imex
nvidia-fabricmanager
CUDA Toolkit: version 13.0
NCCL Plugin for A4X Max ( nccl-gib-a4x-max-arm64 )
DOCA-OFED driver
Ops Agent
Cloud Storage FUSE
The A4X
blueprint available on GitHub includes the following software by default:
Ubuntu 24.04 LTS
Slurm: version 25.05.2
The following Slurm dependencies:
munge
mariadb
libjwt
lmod
Open MPI : version 5.0.x
NFS client and server
NVIDIA 570 series drivers
NVIDIA Enroot
NVIDIA Pyxis
The following NVIDIA tools:
Data Center GPU Manager ( dcgmi )
nvidia-container-toolkit : version 1.17.7
nvidia-imex
nvidia-fabricmanager
CUDA Toolkit: version 12.8
NCCL Plugin for A4X ( nccl-plugin-gib-arm64 )
Ops Agent
Cloud Storage FUSE
The A4
blueprint available on GitHub includes the following software by default:
Ubuntu 22.04 LTS
Slurm: version 25.05.2
The following Slurm dependencies:
munge
mariadb
libjwt
lmod
Open MPI : the latest release of
4.1.x
PMIx : version 4.2.9
NFS client and server
NVIDIA 570 series drivers
NVIDIA enroot container
runtime :
version 3.5.0 with post-release bugfix
NVIDIA pyxis
The following NVIDIA tools:
Data Center GPU Manager ( dcgmi )
nvidia-utils-570
nvidia-container-toolkit
libnvidia-nscq-570
CUDA Toolkit: version 12.8
Infiniband support, including ibverbs-utils
Ops Agent
Cloud Storage FUSE
The A3 Ultra
blueprint available on GitHub includes the following software by default:
Ubuntu 22.04 LTS
Slurm: version 24.11.2
The following Slurm dependencies:
munge
mariadb
libjwt
lmod
Open MPI : the latest release of
4.1.x
PMIx : version 4.2.9
NFS client and server
NVIDIA 570 series drivers
NVIDIA enroot container
runtime :
version 3.5.0 with post-release bugfix
NVIDIA pyxis
The following NVIDIA tools:
Data Center GPU Manager ( dcgmi )
libnvidia-cfg1-570-server
libnvidia-nscq-570
nvidia-compute-utils-570-server
nsight-compute
nsight-systems
CUDA Toolkit: version 12.8
Infiniband support, including ibverbs-utils
Ops Agent
Cloud Storage FUSE
The A3 Mega
blueprint available on GitHub includes the following software by default:
Ubuntu 22.04 LTS
Slurm: version 24.11.2
The following Slurm dependencies:
munge
mariadb
libjwt
lmod
Open MPI : the latest release of
4.1.x
PMIx : version 4.2.9
NFS client and server
NVIDIA 550 series drivers
NVIDIA enroot container
runtime :
version 3.4.1
NVIDIA pyxis
The following NVIDIA tools:
Data Center GPU Manager ( dcgmi )
libnvidia-cfg1-550-server
libnvidia-nscq-550
nvidia-compute-utils-550-server
nsight-compute
nsight-systems
CUDA Toolkit: version 12.4
Infiniband support, including ibverbs-utils
TCPXO for A3 Mega: specific installer for NCCL TCPXO and the 1.6 Tbps network stack
Ops Agent
Cloud Storage FUSE
The A3 High (8 GPUs)
blueprint available on GitHub includes the following software by default:
Ubuntu 22.04 LTS
Slurm: version 24.11.2
The following Slurm dependencies:
munge
mariadb
libjwt
lmod
Open MPI : the latest release of
4.1.x
PMIx : version 4.2.9
NFS client and server
NVIDIA 535 or 550 series drivers
NVIDIA enroot container
runtime : version 3.4.1
NVIDIA pyxis
The following NVIDIA tools:
Data Center GPU Manager ( dcgmi )
libnvidia-cfg1-535/550-server
libnvidia-nscq-535/550
nvidia-compute-utils-535/550-server
nsight-compute
nsight-systems
CUDA Toolkit: version 12.2 or 12.4
Infiniband support, including ibverbs-utils
TCPX for A3 High (8 GPUs): specific installer for NCCL TCPX (GPUDirect-TCPX) and the 800 Gbps network stack (4 NICs)
Ops Agent
Cloud Storage FUSE
Accelerator OS images
AI Hypercomputer lets you provision individual compute instances or groups of compute instances.
If you want to create these instances, you must specify an OS image during
instance creation.
Google Cloud offers a suite of
OS images for
instance creation. Google Cloud also offers a specialized set of accelerator
OS images for AI-optimized instances. These OS images include core drivers for
GPU and networking functionality, such as NVIDIA drivers, Mellanox drivers, and
their dependencies.
For more information about each OS, see the
Operating system details page in the
Compute Engine documentation.
Accelerator OS images are available for the Rocky Linux and Ubuntu LTS operating
systems.
Rocky Linux accelerator
The following
Rocky Linux accelerator OS images
are available for each machine series:
OS version
Image family
Architecture
Machine series
Image project
Rocky Linux 9 accelerator
rocky-linux-9-optimized-gcp-nvidia-580-arm64
Arm
A4X Max, A4X
rocky-linux-accelerator-cloud
rocky-linux-9-optimized-gcp-nvidia-580
x86
A4, A3 Ultra, A3 Mega, A3 High (8 GPUs)
rocky-linux-accelerator-cloud
rocky-linux-9-optimized-gcp-nvidia-570-arm64
Arm
A4X
rocky-linux-accelerator-cloud
rocky-linux-9-optimized-gcp-nvidia-570
x86
A4, A3 Ultra, A3 Mega, A3 High (8 GPUs)
rocky-linux-accelerator-cloud
Rocky Linux 8 accelerator
rocky-linux-8-optimized-gcp-nvidia-580-arm64
Arm
A4X Max, A4X
rocky-linux-accelerator-cloud
rocky-linux-8-optimized-gcp-nvidia-580
x86
A4, A3 Ultra, A3 Mega, A3 High (8 GPUs)
rocky-linux-accelerator-cloud
rocky-linux-8-optimized-gcp-nvidia-570
x86
A4, A3 Ultra, A3 Mega, A3 High (8 GPUs)
rocky-linux-accelerator-cloud
Ubuntu LTS accelerator
The following
Ubuntu LTS accelerator
OS images are available for each machine series:
OS version
Image family
Architecture
Machine series
Image project
Ubuntu 24.04 LTS accelerator
ubuntu-accelerator-2404-arm64-with-nvidia-580
Arm
A4X Max, A4X
ubuntu-os-accelerator-images
ubuntu-accelerator-2404-amd64-with-nvidia-580
x86
A4, A3 Ultra, A3 Mega, A3 High (8 GPUs)
ubuntu-os-accelerator-images
ubuntu-accelerator-2404-arm64-with-nvidia-570
Arm
A4X
ubuntu-os-accelerator-images
ubuntu-accelerator-2404-amd64-with-nvidia-570
x86
A4, A3 Ultra, A3 Mega, A3 High (8 GPUs)
ubuntu-os-accelerator-images
Ubuntu 22.04 LTS accelerator
ubuntu-accelerator-2204-arm64-with-nvidia-580
Arm
A4X Max, A4X
ubuntu-os-accelerator-images
ubuntu-accelerator-2204-amd64-with-nvidia-580
x86
A4, A3 Ultra, A3 Mega, A3 High (8 GPUs)
ubuntu-os-accelerator-images
ubuntu-accelerator-2204-arm64-with-nvidia-570
Arm
A4X
ubuntu-os-accelerator-images
ubuntu-accelerator-2204-amd64-with-nvidia-570
x86
A4, A3 Ultra, A3 Mega, A3 High (8 GPUs)
ubuntu-os-accelerator-images
What's next
Review consumption options .
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
