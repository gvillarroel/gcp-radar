---
title: "About GPUs in Google Kubernetes Engine (GKE) \_|\_ GKE AI/ML \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/gpus
  title: "About GPUs in Google Kubernetes Engine (GKE) \_|\_ GKE AI/ML \_|\_ Google\
    \ Cloud Documentation"
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
About GPUs in Google Kubernetes Engine (GKE)
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This page describes GPUs in Google Kubernetes Engine (GKE) to help you to select
the optimal GPU configuration for your workloads. If you want to deploy GPU
workloads that use Slurm, see
Create an AI-optimized Slurm cluster
instead.
You can use GPUs to accelerate resource intensive tasks, such as machine
learning and data processing. The information on this page can help you to do
the following:
Ensure GPU availability when needed.
Decide whether to use GPUs in GKE Autopilot mode or
GKE Standard mode clusters.
Choose GPU-related features to efficiently use your GPU capacity.
Monitor GPU node metrics.
Improve GPU workload reliability by handling disruptions more effectively.
This page is intended for
Platform admins and operators
and
Machine learning (ML) engineers
who want to ensure that accelerator infrastructure is optimized for your
workloads.
Before reading this page, ensure that you're familiar with the following:
Autopilot mode and Standard mode
Quotas in Google Cloud
GPU selection in GKE
In GKE, the way you request GPU hardware depends on whether you
are using Autopilot or Standard mode. In Autopilot,
you request GPU hardware by specifying GPU resources in your workloads. In
GKE Standard mode, you can attach GPU hardware to nodes
in your clusters, and then allocate GPU resources to containerized workloads
running on those nodes. For detailed instructions on how to attach and use GPUs
in your workloads, refer to Deploy GPU workloads on
Autopilot or Run GPUs
on Standard node pools .
GKE offers some GPU-specific features to
improve efficient GPU resource utilization of workloads running on your nodes, including
time-sharing,
multi-instance GPUs, and multi-instance GPUs with NVIDIA MPS.
This page helps you to consider choices for requesting GPUs
in GKE, including the following:
Choosing your GPU quota , the maximum number of GPUs that can run in your project
Deciding between Autopilot and Standard modes
Manage the GPU stack through GKE or NVIDIA GPU Operator on GKE
Choosing features to reduce the amount of underutilized GPU resources
Accessing NVIDIA CUDA-X libraries for CUDA applications
Monitoring GPU node metrics
Handling disruption due to node maintenance
Use GKE Sandbox to secure GPU workloads
Available GPU models
The GPU hardware that's available for use in GKE is a subset of
the GPU models available on Compute Engine .
The specific hardware that's available depends on the Compute Engine region or
zone of your cluster. For more information about specific availability, see
GPU regions and zones .
Google Cloud's most performant machine types—such as A4X, A4, and A3
Ultra—require specific configuration to maximize the performance of the underlying
hardware. Details about how to configure GKE clusters to use these
GPU machine types reside in the AI Hypercomputer documentation, which
illustrates the capabilities of Google Cloud's integrated supercomputing
system.
For information about how to create AI-optimized GKE clusters
with these machine types, see the following:
To quickly deploy production-ready GKE clusters, create an AI-optimized GKE cluster with default configuration
For precise customization or expansion of existing production GKE
environments, use the Google Cloud CLI to create a GKE cluster. Choose
one of the following instructions based on which machine type and GPU you want to use:
GB200 : Create a custom AI-optimized GKE cluster which uses A4X
B200 or H200 : Create a custom AI-optimized GKE cluster which uses A4 or A3 Ultra
For information about GPU pricing, see the
Google Cloud SKUs and the
GPU pricing page .
Plan GPU quota
Your GPU quota is the maximum number of GPUs that can run in your
Google Cloud project. To use GPUs in your GKE clusters,
your project must have enough GPU quota. Check the Quotas page to ensure that you have enough GPUs available in your project.
Your GPU quota should be at least equal to the total number of GPUs you intend
to run in your cluster. If you enable
cluster autoscaling , you
should request GPU quota at least equivalent to your cluster's maximum number of
nodes multiplied by the number of GPUs per node.
For example, if you expect to utilize three nodes with two GPUs each, then six is the GPU quota required for your project.
To request additional GPU quota, follow the instructions to
request a quota adjustment , using
gpus as the metric.
Choose GPU support using Autopilot or Standard
GPUs are available in Autopilot and Standard
clusters.
Best practice :
Use Autopilot clusters for a fully managed Kubernetes
experience. In Autopilot, GKE manages driver installation, node
scaling, Pod isolation, and node provisioning.
The following table provides an overview of the differences
between Autopilot and Standard GPU support:
Description
Autopilot
Standard
Requesting GPU hardware
Specify GPU resources in your workloads.
Attach GPU hardware to nodes in your clusters, and then allocate GPU resources to
containerized workloads running on those nodes.
GPU hardware availability
NVIDIA GB300
NVIDIA GB200
NVIDIA B200
NVIDIA H200 141GB
NVIDIA H100 80GB
NVIDIA A100 80GB
NVIDIA A100 40GB
NVIDIA RTX PRO 6000 (except for G4 machine types that have less than
one GPU, see the limitations )
NVIDIA L4
NVIDIA T4
All GPU types that are supported by Compute Engine
Selecting a GPU
You request a GPU quantity and type in your workload specification.
By default, Autopilot installs the default driver for that
GKE version and manages your nodes. To select a specific
driver version in Autopilot, see
NVIDIA drivers selection for Autopilot GPU Pods .
You perform the steps described on Run GPUs on Standard
node pools :
Create a node pool with the specific GPU type and corresponding
Compute Engine machine type and choose a driver to install.
Manually install GPU drivers on the nodes if you didn't use automatic
installation.
Request GPU quantities in Pod specification.
Improve GPU utilization
Multi-instance GPUs
Time-sharing GPUs
Multi-instance GPUs
Time-sharing GPUs
NVIDIA MPS
Security
GPUs with GKE Sandbox
GPUs with Confidential GKE Nodes
GPUs with GKE Sandbox
GPUs with Confidential GKE Nodes
Pricing
Autopilot GPU Pod pricing
Compute Engine GPU pricing
To choose the GKE mode of operation that's the best fit for
your workloads, see Choose a GKE mode of operation .
Consume GPUs
GKE offers GPU consumption options that vary based on
your workload requirements. Use the
About accelerator consumption options for AI/ML workloads in GKE page to
choose the best option for your use case.
Manage the GPU stack through GKE or the NVIDIA GPU Operator on GKE
By default, GKE manages the entire lifecycle of the GPU nodes, including
automatic GPU driver installation, monitoring GPU workloads on GKE with
NVIDIA Data Center GPU Manager (DCGM) ,
and GPU sharing strategies.
Best practice :
Use GKE to manage your GPU nodes, since
GKE fully manages the GPU node lifecycle.
Get started with
GKE for GPU node management by choosing one of the following:
Deploy GPU workloads in Autopilot
Run GPUs in Standard node pools
Deploy clusters with NVIDIA B200 or NVIDIA H200 141GB GPUs
The NVIDIA GPU Operator may be used as an alternative to fully managed GPU support on GKE
on both Container-Optimized OS (COS) and Ubuntu node images. Select this option if
you are looking for a consistent experience across multiple cloud service
providers, you are already using the NVIDIA GPU Operator, or if you are using
software that depends on the NVIDIA GPU operator. To learn more, see
Manage the GPU stack with the NVIDIA GPU Operator .
To select the best option for your use case, refer to the following table
comparing the two methods of managing GPU nodes on GKE.
Description
Use GKE to manage GPU nodes
Use NVIDIA GPU Operator on GKE
Management of GPU node lifecycle (installation, upgrade)
Fully managed by GKE.
Managed by the user.
Driver installation
Automatic and manual installation of GPU drivers.
Manual installation of GPU drivers.
Node selectors
cloud.google.com/gke-gpu=true
nvidia.com/gpu=true
GPU sharing strategies
Multi-instance GPUs:
Configure using the GKE API.
Time sharing:
Configure using the GKE API.
Multi-Process Service:
Configure using the GKE API.
Multi-instance GPUs: Configure using
node label and ConfigMap . Supports in-place re-configuration.
Time sharing: Configure using node label and ConfigMap.
Multi-process Service: Not supported.
Health checking of GPU nodes
Monitor XID 48 error codes; you can also
opt-in to monitor other error codes.
Trigger
node repair in 15 min if GPU allocatable count is not equal to capacity and
auto-repair is enabled.
Monitor all error codes by default.
Trigger
node repair in 15 mins if GPU allocatable count is not equal to capacity and
auto-repair is enabled.
Metrics and observability
GKE Managed DCGM available
With
system metrics enabled, the following GPU metrics are available in
Cloud Monitoring: duty cycle, memory usage, and memory capacity.
Self-managed DCGM provided by GPU operator.
Even when GKE GPU system metrics are enabled, GPU-related system metrics are not collected, including duty
cycle, memory usage, and memory capacity.
Optimize resource usage using GPU features in GKE
By default, Kubernetes only supports assigning GPUs as whole
units to containers but GKE provides additional features that you can use to optimize the resource usage of your GPU workloads.
The following features are available in GKE to reduce the amount
of underutilized GPU resources:
GPU features
Multi-instance GPUs
Available on: Autopilot and Standard
Split a single GPU into up to seven hardware-separated instances that
can be assigned as individual GPUs to containers on a node. Each
assigned container gets the resources available to that instance.
Time-sharing GPUs
Available on: Autopilot and Standard
Present a single GPU as multiple units to multiple containers on a
node. The GPU driver context-switches and allocates the full GPU
resources to each assigned container as needed over time.
NVIDIA MPS
Available on: Standard
Share a single physical NVIDIA GPU across multiple containers. NVIDIA MPS is an alternative, binary-compatible implementation of the CUDA API designed to transparently enable co-operative multi-process CUDA applications to run concurrently on a single GPU device.
Access the NVIDIA CUDA-X libraries for CUDA applications
CUDA
is NVIDIA's parallel computing platform and programming model for GPUs. To
use CUDA applications, the image that you use must have the libraries. To add the NVIDIA CUDA-X libraries, you can build and use your own image by including the following values in the LD_LIBRARY_PATH environment variable in your container specification:
/usr/local/nvidia/lib64 : the location of the
NVIDIA device drivers.
/usr/local/cuda- CUDA_VERSION /lib64 : the
location of the NVIDIA CUDA-X libraries on the node.
Replace CUDA_VERSION with the CUDA-X image version that
you used. Some versions also contain debug utilities in
/usr/local/nvidia/bin . For details, see
the NVIDIA CUDA image on DockerHub .
To check the minimum GPU driver version required for your version of CUDA,
see
CUDA Toolkit and Compatible Driver Versions .
Ensure that the GKE patch version running on your nodes
includes a GPU driver version that's compatible with your chosen CUDA
version. For more information about mapping the GPU driver version to GKE
version, see Map the GKE version and Container-Optimized OS node image version to the GPU driver version .
In Autopilot clusters, GKE manages the driver version
selection and installation.
Monitor your GPU node workload performance
If your GKE cluster has
system metrics
enabled, then the following metrics are available in
Cloud Monitoring to monitor your GPU workload performance:
Duty Cycle ( container/accelerator/duty_cycle ): Percentage of time
over the past sample period (10 seconds) during which the accelerator was actively processing.
Between 1 and 100.
Memory Usage ( container/accelerator/memory_used ): Amount of
accelerator memory allocated in bytes.
Memory Capacity ( container/accelerator/memory_total ): Total
accelerator memory in bytes.
These metrics apply at the container level ( container/accelerator ) and are not
collected for containers scheduled on a GPU that uses GPU time-sharing or NVIDIA MPS.
You can use predefined dashboards to monitor your clusters with GPU nodes. For more information,
see
View observability metrics .
For general information about monitoring your clusters and their resources, refer to
Observability for GKE .
View usage metrics for workloads
You view your workload GPU usage metrics from the
Workloads
dashboard in the Google Cloud console.
To view your workload GPU usage, perform the following steps:
Go to the Workloads page in the Google Cloud console.
Go to Workloads
Select a workload.
The Workloads dashboard displays charts for GPU memory usage and capacity, and GPU duty cycle.
View NVIDIA Data Center GPU Manager (DCGM) metrics
You can collect and visualize NVIDIA DCGM metrics by using
Google Cloud Managed Service for Prometheus . For
Autopilot clusters, GKE installs the drivers. For Standard
clusters, you must install the NVIDIA drivers.
For instructions on how to deploy the GKE-managed DCGM package, see
Collect and view NVIDIA Data Center GPU Manager (DCGM) metrics .
JobSet and node health metrics for GPU workloads
In addition to DCGM metrics, you can use the following metrics to monitor the health and
performance of your GPU workloads, especially when running them as JobSets.
JobSet metrics
The following metrics apply to both GPU and TPU JobSets that have a single replicated
Job:
kubernetes.io/jobset/times_between_interruptions
kubernetes.io/jobset/times_to_recover
kubernetes.io/jobset/uptime
For more information about these system metrics, see
Kubernetes metrics .
You can also use the JobSet dashboard in the Google Cloud console to visualize
and monitor your GPU workloads:
Go to Deployments
Node health metrics
The following node-level metrics apply to all nodes, including those with GPUs:
kubernetes.io/node/status_condition : This metric requires GKE version
1.32.1-gke.1357001 or later.
Node interruption and node pool interruption metrics also apply to non-TPU nodes.
Kube-state-metrics for JobSets
The kube-state-metrics for JobSets can be used with GPUs. Collection of these metrics requires GKE
version 1.32.1-gke.1357001 or later. For more information, see the
JobSet metrics documentation .
Handle disruption due to node maintenance
The GKE nodes that host the GPUs are subject to maintenance
events or other disruptions that might cause node shutdown. In GKE clusters with the control
plane running version 1.29.1-gke.1425000 and later, you can reduce
disruption to workloads by configuring GKE to terminate your workloads gracefully.
To understand, configure, and monitor disruption events that might occur on GKE nodes running AI/ML workloads, see Manage GKE node disruption for GPUs and TPUs .
What's next
Learn how to run GPUs in Standard node pools .
Learn how to train a model with GPUs in Standard .
Learn how to deploy GPU workloads in Autopilot .
Learn how to use Multi-instance GPUs .
Learn more about Time-sharing GPUs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
