---
title: "GKE Sandbox \_|\_ GKE security \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods
  title: "GKE Sandbox \_|\_ GKE security \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE security
Send feedback
GKE Sandbox
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This document describes how GKE Sandbox protects the host kernel on your
nodes when containers in the Pod execute unknown or untrusted code. This
document assumes that you know about the following:
gVisor ,
the open source project that GKE Sandbox uses.
This document is for Security specialists to learn about the benefits of
GKE Sandbox. To learn more about common roles and example tasks that we
reference in Google Cloud content, see
Common GKE user roles and tasks .
You can use GKE Sandbox when you run
multi-tenant clusters
because software-as-a-service (SaaS) providers often execute unknown code
submitted by their users. GKE Sandbox is also a useful defense-in-depth
measure for running high-value containers.
To learn how to enable and use GKE Sandbox, see
Configure GKE Sandbox .
Overview
GKE Sandbox provides an extra layer of security to prevent untrusted code
from affecting the host kernel on your cluster nodes. Before discussing how
GKE Sandbox works, it's useful to understand the nature of the potential
risks it helps mitigate.
A container runtime such as containerd provides some degree of
isolation between the container's processes and the kernel running on the node.
However, the container runtime often runs as a privileged user on the node and
has access to most system calls into the host kernel.
Potential threats
Multi-tenant clusters and clusters whose containers run untrusted workloads are
more exposed to security vulnerabilities than other clusters. Examples include
SaaS providers, web-hosting providers, or other organizations that allow their
users to upload and run code. A flaw in the container runtime or in the host
kernel could allow a process running within a container to "escape" the
container and affect the node's kernel, potentially bringing down the node.
The potential also exists for a malicious tenant to gain access to and
exfiltrate another tenant's data in memory or on disk, by exploiting such a
defect.
Finally, an untrusted workload could potentially access other Google Cloud
services or cluster metadata.
How GKE Sandbox mitigates potential threats
gVisor is a userspace re-implementation of the Linux kernel API that does not
need elevated privileges. In conjunction with a container runtime such as
containerd , the userspace kernel re-implements the majority of system calls
and services them on behalf of the host kernel. Direct access to the host kernel
is limited. See the
gVisor architecture guide
for detailed information about how this works. From the container's point of
view, gVisor is nearly transparent, and does not require any changes to the
containerized application.
When you request GKE Sandbox in a Pod in Autopilot clusters,
GKE runs that Pod in a sandbox. In GKE
Standard, if you enable GKE Sandbox on nodes, all Pods that run on
those nodes run in sandboxes.
Note: Pods that don't run in a sandbox are called
regular Pods .
Each sandbox uses its own user space kernel. With this in mind, you can make
decisions about how to group your containers into Pods, based on the level of
isolation you require and the characteristics of your applications.
GKE Sandbox is an especially good fit for the following types of
applications. See Limitations for more information to help you
decide which applications to sandbox.
Untrusted or third-party applications using runtimes such as Rust, Java,
Python, PHP, Node.js, or Golang
Web server front-ends, caches, or proxies
Applications processing external media or data using CPUs
Machine-learning workloads using CPUs
CPU-intensive or memory-intensive applications
AI/ML workloads or services often demand faster deployment to production. gVisor
is designed to protect against entire classes of common linux vulnerabilities.
With GKE Sandbox, you can raise your security posture on GPU and TPU
intensive workloads without major changes to you code. Key usecases where
GKE Sandbox fits well are common to AI/ML workloads:
GPU & TPU intensive workloads.
Services that accept and run untrusted user code.
Services that process arbitrary user inputs.
Workloads that process large third-party datasets and models.
Applications that use third-party libraries.
Learn more about the design and security of accelerator access, see gVisor's
GPU and TPU guides.
Additional security recommendations
When using GKE Sandbox, we recommend that you also follow these
recommendations:
Specify
resource limits
on all containers running in a sandbox. This protects against the risk of
a defective or malicious application starving the node of resources and
negatively impacting other applications or system processes running on the node.
If you are using Workload Identity Federation for GKE ,
block cluster metadata access using
Network Policy to block
access to 169.254.169.254 . This protects against the risk of a malicious
application accessing information to potentially private data like project ID,
node name and zone. Workload Identity Federation for GKE is always enabled in
GKE Autopilot clusters.
Limitations
GKE Sandbox works well with many applications, but not all. This section
provides more information about the current limitations of GKE Sandbox.
Note: GKE Sandbox protects your cluster from untrusted or third-party
workloads. There is generally no advantage to running your trusted first-party
workloads in a sandbox.
GPUs in GKE Sandbox
In GKE version 1.29.2-gke.1108000 and later, GKE Sandbox
supports the use of NVIDIA GPUs.
GKE Sandbox doesn't mitigate all NVIDIA driver vulnerabilities, but
retains protection against Linux kernel vulnerabilities. When using GKE Sandbox,
we don't recommend using GPU time-sharing because the GPU is not fully isolated
between Pods. For details about how the gVisor project protects GPU workloads,
see GPU Support Guide .
The following limitations apply to GPU workloads within GKE Sandbox:
Only CUDA workloads are supported.
A subset of GPUs supported on GKE are supported on GKE Sandbox. For more information, see the support table for details.
gVisor only supports select NVIDIA driver versions. GKE Sandbox ensures
that both the latest and the default driver for each supported GPU for
each GKE version are compatible. Other drivers are not guaranteed
to work.
Not all GPU features will work natively (e.g. RDMA or IMEX). GPU features will
be supported on a case-by-case basis based on customer need. File a support case
or file a bug on gVisor's GitHub Issues .
You can use GKE Sandbox with GPU workloads at no additional cost.
GKE Sandbox GPU model support
The following table describes support for different GPU models on GKE Sandbox:
Model
Preview
GA Support
Notes
NVIDIA RTX PRO 6000
Machine types that have one or more GPUs: 1.34.1-gke.2037001 and later
Machine types that have less than one GPU ( Preview ):
1.34 : 1.34.5-gke.1153000 and later
1.35 or later : 1.35.2-gke.1485000 and later
-
-
NVIDIA GB200
NVIDIA B200
NVIDIA H200 141GB
1.34.0-gke.1713000 and later
-
-
NVIDIA H100 80GB
NVIDIA A100 80GB
NVIDIA A100 40GB
NVIDIA L4
NVIDIA T4
-
1.29.15-gke.1134000 and later
1.30.11-gke.1093000 and later
1.31.7-gke.1149000 and later
1.32.2-gke.1182003 and later
Supported since initial launch.
NVIDIA V100
NVIDIA P100
not supported
not supported
The V100 and P100 use proprietary drivers and won't be supported.
NVIDIA T4 VWS
NVIDIA L4 VWS
-
-
GKE Sandbox does not support Windows or Ubuntu node types, which are required for Virtual Workstation Nodes.
TPUs in GKE Sandbox
In GKE version 1.31.3-gke.1111001 and later, GKE Sandbox
supports the use of TPUs.
GKE Sandbox doesn't mitigate all TPU driver vulnerabilities, but
retains protection against Linux kernel vulnerabilities. For details about
how the gVisor project protects TPU workloads, see
TPU Support Guide .
The following TPU hardware versions are supported: V4pod, V4lite, V5litepod,
V5pod, and V6e.
You can use GKE Sandbox with TPU workloads at no additional cost.
Node pool configuration
Applies to Standard clusters
You cannot use GKE Sandbox on Windows Server node pools.
You cannot enable GKE Sandbox on the default node pool to separate system
services running in the default node pool from untrusted workloads using
GKE Sandbox.
When using GKE Sandbox, your cluster must have at least two node pools.
You must always have at least one node pool where GKE Sandbox is disabled.
This node pool must contain at least one node, even if all your workloads are
sandboxed.
GKE versions earlier than 1.24.2-gke.300 don't support the
e2-micro, e2-small, and e2-medium machine types. GKE version
1.24.2-gke.300 and later support these machine types.
Nodes must use the Container-Optimized OS with containerd ( cos_containerd ) node image.
Access to cluster metadata
Applies to Autopilot and Standard clusters
Nodes running sandboxed Pods are prevented from accessing cluster metadata at
the level of the operating system on the node.
In GKE Standard, you can run regular Pods
on a node with GKE Sandbox enabled. However, by default those regular Pods
cannot access Google Cloud services or cluster metadata.
Use Workload Identity Federation for GKE to
grant Pods access to Google Cloud services.
SMT may be disabled
Applies to Autopilot and Standard clusters
Simultaneous multithreading (SMT) settings are used to mitigate side channel
vulnerabilities that take advantage of threads sharing core state, such as
Microarchitectural Data Sampling (MDS) vulnerabilities .
Note: Hyper-Threading is the proprietary name for SMT on Intel CPUs.
In GKE versions 1.25.5-gke.2500 or later and 1.26.0-gke.2500 or
later, gVisor is configured to use Linux Core Scheduling
to mitigate side channel attacks. SMT settings are unchanged from default. Core
Scheduling is used only for workloads running with gVisor.
Starting in GKE version 1.24.2-gke.300, SMT is configured by
machine type based on how vulnerable the machine is to MDS, as follows:
Autopilot Pods running on the
Scale-Out compute class :
SMT disabled.
Machine types with Intel processors :
SMT disabled by default.
Machine types without Intel processors: SMT enabled by default.
Machine types with only one thread per core: no SMT support. All requested
vCPUs visible.
Prior to version 1.24.2-gke.300, SMT is disabled on all machine types.
Enable SMT
Applies to Standard clusters
In GKE Standard clusters, you can enable SMT if it's
disabled on your selected machine type. You're charged for every vCPU,
regardless of whether you turn SMT on or keep it turned off. For pricing
information, refer to the
Compute Engine pricing .
Warning: Enabling SMT on machine types vulnerable to MDS will put your nodes at
risk to MDS side-channel attacks. To check which vulnerabilities
exist on your system, run cat /proc/cpuinfo and check the "bugs" section or
look in the /sys/devices/system/cpu/vulnerabilities directory.
GKE version 1.24.2-gke.300 and later
Set the --threads-per-core flag when
creating a GKE Sandbox node pool:
gcloud container node-pools create smt-enabled \
--cluster = CLUSTER_NAME \
--location = LOCATION \
--machine-type = MACHINE_TYPE \
--threads-per-core = 2 \
--sandbox type = gvisor
CLUSTER_NAME : the name of an existing cluster where you want to create the new node pool.
LOCATION : the Compute Engine region or zone of the cluster.
MACHINE_TYPE : the machine type .
For more information about --threads-per-core , refer to
Set the number of threads per core .
Note: The --threads-per-core flag can only be used on newly created
node pools. If you are upgrading a node pool, add the label
cloud.google.com/gke-smt-disabled=false and install the DaemonSet as
specified in the following steps:
GKE versions before 1.24.2-gke.300
Create a new node pool in your cluster with the node label
cloud.google.com/gke-smt-disabled=false :
gcloud container node-pools create smt-enabled \
--cluster = CLUSTER_NAME \
--location = LOCATION \
--machine-type = MACHINE_TYPE \
--node-labels = cloud.google.com/gke-smt-disabled = false \
--image-type = cos_containerd \
--sandbox type = gvisor
Replace the following:
CLUSTER_NAME : the name of an existing cluster where you want to create the new node pool.
LOCATION : the Compute Engine region or zone of the cluster.
MACHINE_TYPE : the machine type .
Deploy the DaemonSet to the node pool. The DaemonSet will only run on nodes with
the cloud.google.com/gke-smt-disabled=false label.
kubectl create -f \
https://raw.githubusercontent.com/GoogleCloudPlatform/k8s-node-tools/master/disable-smt/gke/enable-smt.yaml
Ensure that the DaemonSet pods are in the running state.
kubectl get pods --selector = name = enable-smt -n kube-system
The output is similar to the following:
NAME READY STATUS RESTARTS AGE
enable-smt-2xnnc 1/1 Running 0 6m
Check that SMT has been enabled appears in the logs of the pods.
kubectl logs enable-smt-2xnnc enable-smt -n kube-system
Capabilities
Applies to Standard clusters
By default, the container is prevented from opening raw sockets, to reduce the
potential for malicious attacks. Certain network-related tools such as ping
and tcpdump create raw sockets as part of their core operation. To enable
raw sockets, you must explicitly add the NET_RAW capability to the
container's security context:
spec :
containers :
- name : my-container
securityContext :
capabilities :
add : [ "NET_RAW" ]
If you use GKE Autopilot, Google Cloud prevents you from
adding the NET_RAW permission to containers because of the security
implications of this capability.
External dependencies
Applies to Autopilot and Standard clusters
Untrusted code running inside the sandbox may be allowed to reach external
services such as database servers, APIs, other containers, and CSI
drivers .
These services are running outside the sandbox boundary and need to be
individually protected. An attacker can try to exploit vulnerabilities in these
services to break out of the sandbox. You must consider the risk and impact of
these services being reachable by the code running inside the sandbox, and apply
the necessary measures to secure them.
This includes file system implementations for container volumes such as ext4 and
CSI drivers. CSI drivers run outside the sandbox isolation and may have
privileged access to the host and services. An exploit in these drivers can
affect the host kernel and compromise the entire node. We recommend that you run
the CSI driver inside a container with the least amount of permissions required,
to reduce the exposure in case of an exploit. GKE Sandbox supports using the
Compute Engine Persistent Disk CSI driver .
Incompatible features
You can't use GKE Sandbox with the following Kubernetes features:
Memory usage metrics at the container level. However, Pod memory usage is
supported.
Hostpath storage
CPU and memory limits are only applied for Guaranteed Pods and Burstable Pods,
and only when CPU and memory limits are specified for all containers running
in the Pod.
Containers running in privileged mode
VolumeDevices
Portforward
Linux kernel security modules such as Seccomp, Apparmor, or Selinux,
Sysctl , NoNewPrivileges , bidirectional MountPropagation ,
or ProcMount .
Traffic Director
FSGroup
is supported in GKE version 1.22 and later.
Cloud Service Mesh is not supported for GKE Sandbox
Pods in Autopilot clusters.
Workload characteristics
Applies to Autopilot and Standard clusters
Imposing an additional layer of indirection for accessing the node's kernel
comes with performance trade-offs. GKE Sandbox provides the most tangible
benefit on large multi-tenant clusters where isolation is important. Keep the
following guidelines in mind when testing your workloads with GKE Sandbox.
System calls
Applies to Autopilot and Standard clusters
Workloads that generate a large volume of low-overhead system calls, such as a
large number of small I/O operations, may require more system resources when
running in a sandbox, so you may need to use more powerful nodes or add
additional nodes to your cluster.
Direct access to hardware or virtualization
Applies to Autopilot and Standard clusters
If your workload needs any of the following, GKE Sandbox might not be a
good fit because it prevents direct access to the host kernel on the node:
Direct access to the node's hardware
Kernel-level virtualization features
Privileged containers
What's next
Configure GKE Sandbox .
Read the Security overview .
Learn about the Pod lifecycle .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
