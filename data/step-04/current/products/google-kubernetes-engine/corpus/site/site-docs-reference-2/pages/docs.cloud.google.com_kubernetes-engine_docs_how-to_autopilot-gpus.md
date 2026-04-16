---
title: "Deploy GPU workloads in Autopilot \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus
  title: "Deploy GPU workloads in Autopilot \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation"
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
Deploy GPU workloads in Autopilot
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
This page shows you how to request GPUs to accelerate tasks in your
Google Kubernetes Engine (GKE) Autopilot workloads. This page also
describes how Autopilot runs GPUs, how your pricing model changes
depending on your GKE version, how to set Pod resource requests
and limits, and how to monitor GPU workloads.
This page is for Platform admins and operators and for Data and AI specialists who
want to request GPUs for workloads that run tasks like machine learning (ML)
training or inference. To learn more about the common roles, responsibilities,
and example tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
Before you proceed, ensure that you're familiar with the following concepts:
About GPUs in GKE
Kubernetes node selectors
Select accelerators in Pods
Autopilot uses the specialized Accelerator compute class to run
GPU Pods. With this compute class, GKE places Pods on GPU nodes,
providing the Pods with access to advanced capabilities on the
virtual machine (VM). To use this class in a GPU workload, take one of the
following actions depending on your GKE version:
Version 1.29.4-gke.1427000 and later : Request GPUs in your workload
manifest. You can also use GPU sharing capabilities, like time-sharing.
GKE doesn't modify your workload
manifests to add a node selector or annotation for the Accelerator class.
Version 1.29 up to, but not including, version 1.29.4-gke.142700 : Specify
the cloud.google.com/compute-class: Accelerator node selector in your Pod
manifest and request GPUs. If you specify this node selector, you can also
use GPU sharing capabilities, like time-sharing.
Version 1.28.9-gke.1069000 up to, but not including, version 1.29 : Specify
the cloud.google.com/compute-class: Accelerator node selector in your Pod
manifest alongside the GPU selectors. If you specify this node selector, you
can also use GPU sharing capabilities, like time-sharing.
The Accelerator compute class isn't supported in versions earlier than
1.28.9-gke.1069000. Instead, GKE treats GPU Pods on those
versions similarly to other Autopilot Pods, and you're billed for the
resource requests. For details, see Pricing .
Accelerator compatibility with GKE capabilities
The following table shows the compatible GKE capabilities for
each method of selecting accelerators in GKE Autopilot:
Accelerator compute class selected
Compatibility with GKE capabilities
Spot Pods
Compute flexible committed use discounts (CUDs) for the Autopilot premium
Compute Engine CUDs for the node hardware
Compute Engine capacity reservations
GKE Sandbox
Spot Pods
Autopilot committed use discounts (CUDs) for regular Pods
Caution: Autopilot
committed use discounts (CUDs) are no longer available for purchase.
You can purchase only compute flexible commitments for your spend on
GKE. Google Cloud will continue to support your
existing, active Autopilot commitments until the end of their
term. Information in this document about Autopilot CUDs applies
only to any active commitments that you already purchased.
If you want to purchase new commitments to cover your Autopilot
usage, then purchase compute flexible commitments instead.
Pricing
The following table describes how the billing model that GKE uses
depends on the GKE version of your cluster. For a description
of the GKE Autopilot billing models, see
Autopilot pricing .
GKE version
Pricing
1.29.4-gke.1427000 and later
Node-based billing model . All GPU Pods use the Accelerator
compute class. You're billed for the
Compute Engine hardware that runs your GPU workloads, plus an
Autopilot premium for node management and scalability.
For details, see
Autopilot mode pricing .
From version 1.29 up to, but not including, version 1.29.4-gke.1427000
The billing model depends on the node selectors that you specify, as
follows:
cloud.google.com/compute-class: Accelerator : Uses the
node-based billing model and the Accelerator compute class.
No compute class selector: Uses the Pod-based billing model .
You can only use features like multi-instance GPUs or time-sharing if
you explicitly specify the
cloud.google.com/compute-class: Accelerator node selector.
For details, see the "Pods that have specific hardware requirements" section in
Kubernetes Engine pricing .
From version 1.28.6-gke.1095000 up to, but not including, version 1.29
Node-based billing model , regardless of whether you specify
the Accelerator compute class in your Pod manifests.
You can only use features like multi-instance GPUs or time-sharing if
you explicitly specify the
cloud.google.com/compute-class: Accelerator node selector.
For details, see the "Pods that have specific hardware requirements" section in
Kubernetes Engine pricing .
Versions earlier than 1.28.6-gke.1095000
Pod-based billing model . You're billed based on the GPU Pod
resource requests. For details, see the "Pods that have specific hardware requirements" section in
Kubernetes Engine pricing .
Note the following pricing considerations for Autopilot GPUs:
All A100 (80GB) GPU nodes use local SSDs for node boot disks at fixed
sizes based on the number of GPUs. You're billed separately for the attached
Local SSDs. This pricing doesn't apply to A100 (40GB) GPUs.
GKE Sandbox pricing is the same as default Autopilot pricing.
To learn more about sandboxing your accelerator workloads, see
GKE Sandbox and
getting started with GKE Sandbox .
Before you begin
Before you start, make sure that you have performed the following tasks:
Enable
the Google Kubernetes Engine API.
Enable Google Kubernetes Engine API
If you want to use the Google Cloud CLI for this task,
install and then
initialize the
gcloud CLI. If you previously installed the gcloud CLI, get the latest
version by running the gcloud components update command. Earlier gcloud CLI versions might not support running the commands in this document.
Note: For existing gcloud CLI
installations, make sure to set the compute/region property . If you use primarily zonal clusters, set the compute/zone instead. By setting a default location,
you can avoid errors in the gcloud CLI like the following:
One of [--zone, --region] must be supplied: Please specify location . You might need to specify the location in certain commands if the location of your cluster differs from the default that you set.
Ensure that you have a GKE Autopilot
cluster
running one of the following versions to use the following GPUs or features:
NVIDIA B200 (180 GB) GPUs: 1.32.2-gke.1422000 or later
NVIDIA H200 (141GB) GPUs: 1.31.4-gke.1183000 or later
NVIDIA H100 Mega (80GB) GPUs: 1.28.9-gke.1250000 or later, and
1.29.4-gke.1542000 or later
NVIDIA H100 (80GB) GPUs: 1.28.6-gke.1369000 or later, and
1.29.1-gke.1575000 or later
NVIDIA RTX PRO 6000 GPUs: 1.34.1-gke.1829001 or later (except for G4
machine types that have less than one GPU, see the
limitations )
Multiple GPU Pods per VM: 1.29.2-gke.1355000 or later
Other GPUs: all supported versions
Note: For GKE Sandbox GPU clusters, see GPU model
support for
gVisor compatibility.
Ensure that you have enough GPU quotas
available in your project. You must have enough
Compute Engine GPU quota
for the GPU models that you want to create
in each region. If you require additional GPU quota,
request a quota adjustment .
Limitations
Time-sharing GPUs and
multi-instance GPUs are available
with Autopilot on GKE version 1.29.3-gke.1093000 and
later.
GPU availability depends on the Google Cloud region of your Autopilot
cluster, and your GPU quota. To find a GPU model by region or zone, see
GPU regions and zones availability .
For NVIDIA A100 (80GB) GPUs, you're charged a fixed price for the Local SSDs
attached to the nodes, regardless of whether your Pods use that capacity .
For GKE versions prior to 1.29.2-gke.1355000, if you explicitly request a
specific existing GPU node for your Pod, the Pod must consume all the GPU
resources on the node. For example, if the existing node has 8 GPUs and your
Pod's containers request a total of 4 GPUs, Autopilot rejects the Pod.
For GKE version 1.29.2-gke.1355000 or later, if you want multiple GPU pods
to fit into a single node, the sum of GPU requests for those pods must be less than or equal to the number of GPU resources attached to that node. For example, a node with a gke-accelerator-count of 4 could accommodate up to four Pods that request one GPU each.
Placing multiple Pods on a single GPU node is useful in situations like the following:
You have capacity reservations for large Accelerator machine types and you run single-GPU workloads, so deploying one Pod per node would waste the other GPUs on that machine
You have GPU workloads that must run on the same host
In these situations, we recommend that you use all of the GPUs on the node by ensuring that the sum of Pod GPU resource requests on the node is equal to the number of GPUs attached to the node.
Request GPUs in your containers
To request GPU resources for your containers, add the following fields to your
Pod specification.
Depending on your workload requirements, you can optionally omit the
cloud.google.com/gke-accelerator-count selector.
apiVersion : v1
kind : Pod
metadata :
name : my-gpu-pod
spec :
# Optional: Use GKE Sandbox
# runtimeClassName: gvisor
nodeSelector :
cloud.google.com/gke-accelerator : GPU_TYPE
cloud.google.com/gke-accelerator-count : " GPU_COUNT "
containers :
- name : my-gpu-container
image : nvidia/cuda:11.0.3-runtime-ubuntu20.04
command : [ "/bin/bash" , "-c" , "--" ]
args : [ "while true; do sleep 600; done;" ]
resources :
limits :
nvidia.com/gpu : GPU_QUANTITY
Replace the following:
GPU_TYPE : the type of GPU hardware. Allowed values
are the following:
nvidia-gb200 : NVIDIA GB200 (Preview)
nvidia-b200 : NVIDIA B200 (180GB)
nvidia-h200-141gb : NVIDIA H200 (141GB)
nvidia-h100-mega-80gb : NVIDIA H100 Mega (80GB)
nvidia-h100-80gb : NVIDIA H100 (80GB)
nvidia-a100-80gb : NVIDIA A100 (80GB)
nvidia-tesla-a100 : NVIDIA A100 (40GB)
nvidia-rtx-pro-6000 : NVIDIA RTX PRO 6000 (except for G4 machine types that have less than one GPU, see the limitations )
nvidia-l4 : NVIDIA L4
nvidia-tesla-t4 : NVIDIA T4
or if you use GKE Sandbox, one of the following:
nvidia-gb200 : NVIDIA GB200 (Preview)
nvidia-b200 : NVIDIA B200 (180GB) (Preview)
nvidia-h200-141gb : NVIDIA H200 (141GB) (Preview)
nvidia-h100-mega-80gb : NVIDIA H100 Mega (80GB)
nvidia-h100-80gb : NVIDIA H100 (80GB)
nvidia-a100-80gb : NVIDIA A100 (80GB)
nvidia-tesla-a100 : NVIDIA A100 (40GB)
nvidia-rtx-pro-6000 : NVIDIA RTX PRO 6000 (Preview) (except for G4 machine types that have less than one GPU, see the limitations )
nvidia-l4 : NVIDIA L4
nvidia-tesla-t4 : NVIDIA T4
For more information, see GPU model support .
GPU_COUNT : the total number of GPUs available to attach
to the node. Must be greater than or equal to GPU_QUANTITY and a
supported GPU quantity for the GPU type you selected.
If you omit this nodeSelector, Autopilot places one Pod on each GPU
node.
GPU_QUANTITY : the number of GPUs to
allocate to the container. Must be less than or equal to GPU_COUNT and a
supported GPU quantity for the GPU type you selected.
Optional runtimeClassname: gvisor : the setting that lets your run
this Pod in GKE Sandbox. To use, uncomment this line. To learn more,
see GKE Sandbox .
For details about how you're billed for accelerator usage in Autopilot
mode, see the Pricing section.
You must specify both the GPU type and the GPU quantity in your Pod
specification. If you omit either of these values, Autopilot rejects
your Pod.
When you deploy this manifest, Autopilot automatically installs the
default NVIDIA drivers for the node GKE version. In version 1.29.2-gke.1108000 and later,
you can optionally choose to install the latest driver version for that
GKE version by adding the following node selector to your manifest:
spec :
nodeSelector :
cloud.google.com/gke-gpu-driver-version : " DRIVER_VERSION "
Replace DRIVER_VERSION with one of the following values:
default - the default, stable driver for your node GKE version.
If you omit the nodeSelector in your manifest, this is the default option.
latest - the latest available driver version for your node GKE version.
Request CPU and memory for Autopilot GPU Pods
When defining your GPU Pods, you should also request CPU and memory resources so
that your containers perform as expected. Autopilot enforces specific
CPU and memory minimums, maximums, and defaults based on the GPU type and
quantity. If you run multiple GPU Pods on a single node, specify the CPU
and memory, otherwise it defaults to the node's entire capacity. For details, refer to
Resource requests in Autopilot .
Your Pod specification should look similar to the following example, which
requests four T4 GPUs:
apiVersion : v1
kind : Pod
metadata :
name : t4-pod
spec :
# Optional: Use GKE Sandbox
# runtimeClassName: gvisor
nodeSelector :
cloud.google.com/gke-accelerator : "nvidia-tesla-t4"
containers :
- name : t4-container-1
image : nvidia/cuda:11.0.3-runtime-ubuntu20.04
command : [ "/bin/bash" , "-c" , "--" ]
args : [ "while true; do sleep 600; done;" ]
resources :
limits :
nvidia.com/gpu : 3
cpu : "54"
memory : "54Gi"
requests :
cpu : "54"
memory : "54Gi"
- name : t4-container-2
image : nvidia/cuda:11.0.3-runtime-ubuntu20.04
command : [ "/bin/bash" , "-c" , "--" ]
args : [ "while true; do sleep 600; done;" ]
resources :
limits :
nvidia.com/gpu : 1
cpu : "18"
memory : "18Gi"
requests :
cpu : "18"
memory : "18Gi"
Optional runtimeClassname: gvisor : the setting that lets your run
this Pod in GKE Sandbox. To use, uncomment this line. To learn more,
see GKE Sandbox .
This manifest specifies limits for CPU and memory resources. If you omit the
limits for CPU or memory in GKE version 1.29.2-gke.1060000 and
later, GKE gives your Pods the Burstable QoS class and lets
your Pods burst into unused resources from the sum of resource requests on the
node. For more information, see
Configure Pod bursting in GKE .
Request ephemeral storage for Autopilot GPU Pods
You can also request ephemeral storage in Pods that need short-lived storage.
The maximum available ephemeral storage and the type of storage hardware used
depends on the type and quantity of GPUs the Pod requests. You can use Local SSD
for ephemeral storage with the following configurations:
Use NVIDIA RTX PRO 6000 GPUs and the Accelerator compute class, and run
GKE patch version 1.34.1-gke.1829001 or later.
Use NVIDIA L4 GPUs and the Accelerator compute class, and run
GKE patch version 1.28.6-gke.1369000 or later, or
1.29.1-gke.1575000 or later.
To use Local SSD for ephemeral storage, add the
cloud.google.com/gke-ephemeral-storage-local-ssd: "true" nodeSelector to your
workload manifest. See the example manifest in Use Local SSD-backed ephemeral
storage with Autopilot
clusters .
The NVIDIA H100 (80GB) GPUs and NVIDIA A100 (80GB) GPUs always use Local SSDs
for ephemeral storage, and you can't specify this node selector for those GPUs.
Request specific machine types using custom ComputeClasses
In some cases, you might need to run your GPU workload on a specific machine type,
for example if the machine type that you want is not a default machine type for
Autopilot clusters. You can explicitly request a specific machine by using custom ComputeClasses,
which let you define a node configuration profile that specifies the machine type and GPU.
For general information about ComputeClasses, see About custom ComputeClasses .
To request a specific machine type for your GPU workload, complete the following steps:
Create a manifest for a custom ComputeClass. For this example, save the following as a3-computeclass.yaml :
apiVersion : cloud.google.com/v1
kind : ComputeClass
metadata :
name : a3-edge-gpu
spec :
priorities :
- machineType : a3-edgegpu-8g-nolssd
gpu :
count : 8
type : nvidia-h100-80gb
nodePoolAutoCreation :
enabled : true
In this manifest:
The metadata.name is the name of your custom ComputeClass, which you will reference in your Pod specification.
The machineType is the specific machine to provision.
The gpu fields specify the type and number of GPUs attached to that machine. The values of these fields must match the capabilities of the specified machineType .
Apply the manifest by running the following command:
kubectl apply -f a3-computeclass.yaml
In your Pod manifest, request the ComputeClass by using the cloud.google.com/compute-class node selector:
apiVersion : v1
kind : Pod
metadata :
name : gpu-cc-pod
spec :
nodeSelector :
cloud.google.com/compute-class : a3-edge-gpu
containers :
- name : my-gpu-container
image : nvidia/cuda:latest
command : [ "/bin/bash" , "-c" , "--" ]
args : [ "while true; do sleep 600; done;" ]
resources :
limits :
nvidia.com/gpu : 1
GKE provisions a new node that matches the definition in the a3-edge-gpu ComputeClass to run your Pod.
Verify the allocation of deployed GPUs
To check that a deployed GPU workload has the requested GPUs, run the following
command:
kubectl describe node NODE_NAME
Replace NODE_NAME with the name of the node on which the
Pod was scheduled.
The output is similar to the following:
apiVersion: v1
kind: Node
metadata:
...
labels:
...
cloud.google.com/gke-accelerator: nvidia-tesla-t4
cloud.google.com/gke-accelerator-count: "1"
cloud.google.com/machine-family: custom-48
...
...
Check GPU driver version
In Autopilot clusters, GKE automatically installs NVIDIA
device drivers on all GPU nodes. To find the driver version that
GKE installed in your cluster, run the following command:
kubectl logs --selector = k8s-app = nvidia-gpu-device-plugin \
--container = "nvidia-gpu-device-plugin" \
--tail = -1 \
--namespace = kube-system | grep Driver
The output is similar to the following:
I1206 18:37:08.251742 5851 metrics.go:144] nvml initialized successfully. Driver version: 535.104.12
How GPU allocation works in Autopilot
After you request a GPU type and a quantity for the containers in a Pod and
deploy the Pod, the following happens:
If no allocatable GPU node exists, Autopilot provisions a new GPU
node to schedule the Pod. Autopilot automatically installs NVIDIA's
drivers to facilitate the hardware.
Autopilot adds
node taints
to the GPU node and adds the corresponding tolerations to the Pod. This prevents
GKE from scheduling other Pods on the GPU node.
Autopilot places exactly one GPU Pod on each GPU node, as well as any
GKE-managed workloads that run on all nodes, and any DaemonSets
that you configure to tolerate all node taints.
Run DaemonSets on every node
You might want to run DaemonSets on every node, even nodes with applied taints.
For example, some logging and monitoring agents must run on every node in the
cluster. You can configure those DaemonSets to ignore node taints so that
GKE places those workloads on every node.
To run DaemonSets on every node in your cluster, including your GPU nodes, add
the following toleration to your specification:
apiVersion : apps/v1
kind : DaemonSet
metadata :
name : logging-agent
spec :
tolerations :
- key : ""
operator : "Exists"
effect : " "
containers :
- name : logging-agent-v1
image : IMAGE_PATH
Replace IMAGE_PATH with the path to the container image.
To run DaemonSets on specific GPU nodes in your cluster, add
the following to your specification:
apiVersion : apps/v1
kind : DaemonSet
metadata :
name : logging-agent
spec :
nodeSelector :
cloud.google.com/gke-accelerator : " GPU_TYPE "
tolerations :
- key : ""
operator : "Exists"
effect : " "
containers :
- name : logging-agent-v1
image : IMAGE_PATH
Replace GPU_TYPE with the type of GPU in your target
nodes. This can be one of the following:
nvidia-gb200 : NVIDIA GB200 (Preview)
nvidia-b200 : NVIDIA B200 (180GB)
nvidia-h200-141gb : NVIDIA H200 (141GB)
nvidia-h100-mega-80gb : NVIDIA H100 Mega (80GB)
nvidia-h100-80gb : NVIDIA H100 (80GB)
nvidia-a100-80gb : NVIDIA A100 (80GB)
nvidia-tesla-a100 : NVIDIA A100 (40GB)
nvidia-rtx-pro-6000 : NVIDIA RTX PRO 6000 (except for G4 machine types that have less than one GPU, see the limitations )
nvidia-l4 : NVIDIA L4
nvidia-tesla-t4 : NVIDIA T4
or if you use GKE Sandbox, one of the following:
nvidia-gb200 : NVIDIA GB200 (Preview)
nvidia-b200 : NVIDIA B200 (180GB) (Preview)
nvidia-h200-141gb : NVIDIA H200 (141GB) (Preview)
nvidia-h100-mega-80gb : NVIDIA H100 Mega (80GB)
nvidia-h100-80gb : NVIDIA H100 (80GB)
nvidia-a100-80gb : NVIDIA A100 (80GB)
nvidia-tesla-a100 : NVIDIA A100 (40GB)
nvidia-rtx-pro-6000 : NVIDIA RTX PRO 6000 (Preview) (except for G4 machine types that have less than one GPU, see the limitations )
nvidia-l4 : NVIDIA L4
nvidia-tesla-t4 : NVIDIA T4
For more information, see GPU model support .
GPU use cases in Autopilot
You can allocate GPUs to containers in Autopilot Pods to facilitate
workloads such as the following:
Machine learning (ML) inference
ML training
Rendering
Supported GPU quantities
When you request GPUs in your Pod specification, you must use the following
quantities based on the GPU type:
GPU quantities
NVIDIA B200 (180GB) nvidia-b200
8
NVIDIA H200 (141GB) nvidia-h200-141gb
8
NVIDIA H100 Mega (80GB) nvidia-h100-mega-80gb
8
NVIDIA H100 (80GB) nvidia-h100-80gb
1, 2, 4, 8
NVIDIA A100 (80GB) nvidia-a100-80gb
1, 2, 4, 8
NVIDIA A100 (40GB) nvidia-tesla-a100
1, 2, 4, 8, 16
NVIDIA RTX PRO 6000 nvidia-rtx-pro-6000
1, 2, 4, 8
NVIDIA L4 nvidia-l4
1, 2, 4, 8
NVIDIA T4 nvidia-tesla-t4
1, 2, 4
Note: Autopilot supports the smaller machine shapes of 1, 2, and 4 GPUs for NVIDIA H100 (80GB) GPUs on version 1.31.4-gke.1072000 or later. If you request a GPU quantity that isn't supported for that type,
Autopilot rejects your Pod.
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
What's next
Learn more about GPU support in GKE .
Read about how Autopilot compute classes are optimized for specialized use cases .
Read about deploying GPUs for batch workloads with Dynamic Workload Scheduler .
Learn about sandboxing GPU workloads with GKE Sandbox
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
