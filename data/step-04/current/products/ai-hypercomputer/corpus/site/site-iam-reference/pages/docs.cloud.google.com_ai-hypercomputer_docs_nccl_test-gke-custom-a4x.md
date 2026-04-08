---
title: "Run NCCL on custom GKE clusters that use A4X \_|\_ AI Hypercomputer \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/nccl/test-gke-custom-a4x
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/nccl/test-gke-custom-a4x
  title: "Run NCCL on custom GKE clusters that use A4X \_|\_ AI Hypercomputer \_|\_\
    \ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Run NCCL on custom GKE clusters that use A4X | AI Hypercomputer | Google Cloud Documentation
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
Troubleshoot Co MMA
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
Test on two nodes
Test with TAS
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Run NCCL on custom GKE clusters that use A4X
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Test on two nodes
Test with TAS
What's next
This document describes how to run NCCL/gIB tests on provisioned clusters that use GPUDirect RDMA. It describes tests for the following scenarios:
If you have nodes that are provisioned with flex-start ( Preview ), use a basic test on two nodes .
If you have a larger number of nodes that are not provisioned with flex-start, use an NCCL test with Topology Aware Scheduling .
Test on two nodes
Connect to your cluster:
See more code actions.
Light code theme
Dark code theme
gcloud container clusters get-credentials CLUSTER_NAME \
--location = COMPUTE_REGION
Replace the following variables:
CLUSTER_NAME : the name of your
cluster, which, for the clusters created with Cluster Toolkit,
is based on the DEPLOYMENT_NAME .
COMPUTE_REGION : the name of the compute region.
To deploy an NCCL test workload of two test Pods that are running on two A4X nodes, run the following:
See more code actions.
Light code theme
Dark code theme
kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/refs/heads/master/gpudirect-rdma/nccl-test-imex-a4x.yaml
Check that the Pods are both running on some nodes:
See more code actions.
Light code theme
Dark code theme
kubectl get pods nccl-test-host-1 nccl-test-host-2
If the two Pods show a Running status, you can proceed to the next step.
Trigger an all-gather test for the A4X nodes:
See more code actions.
Light code theme
Dark code theme
kubectl exec nccl-test-host-1 -it -- /usr/local/gib/scripts/run_nccl_tests.sh -t all_gather -b 1K -e 8G nccl-host-1 nccl-host-2
The output is similar to the following:
# out-of-place in-place
# size count type redop root time algbw busbw #wrong time algbw busbw #wrong
# (B) (elements) (us) (GB/s) (GB/s) (us) (GB/s) (GB/s)
1024 32 float none -1 21.20 0.05 0.04 0 20.56 0.05 0.04 0
2048 64 float none -1 21.03 0.10 0.09 0 20.82 0.10 0.09 0
4096 128 float none -1 21.11 0.19 0.17 0 20.98 0.20 0.17 0
8192 256 float none -1 21.51 0.38 0.33 0 21.15 0.39 0.34 0
16384 512 float none -1 21.85 0.75 0.66 0 21.72 0.75 0.66 0
32768 1024 float none -1 24.08 1.36 1.19 0 23.73 1.38 1.21 0
65536 2048 float none -1 24.68 2.66 2.32 0 24.02 2.73 2.39 0
131072 4096 float none -1 24.93 5.26 4.60 0 24.30 5.40 4.72 0
262144 8192 float none -1 24.86 10.55 9.23 0 24.33 10.78 9.43 0
524288 16384 float none -1 25.10 20.89 18.28 0 24.48 21.41 18.74 0
1048576 32768 float none -1 25.43 41.24 36.09 0 24.82 42.25 36.97 0
2097152 65536 float none -1 32.30 64.93 56.81 0 31.28 67.04 58.66 0
4194304 131072 float none -1 45.92 91.34 79.92 0 44.22 94.84 82.99 0
8388608 262144 float none -1 71.38 117.52 102.83 0 68.98 121.61 106.41 0
16777216 524288 float none -1 74.17 226.20 197.93 0 72.37 231.83 202.85 0
33554432 1048576 float none -1 116.6 287.84 251.86 0 112.7 297.75 260.54 0
67108864 2097152 float none -1 188.9 355.27 310.86 0 184.0 364.71 319.12 0
134217728 4194304 float none -1 309.6 433.56 379.36 0 299.7 447.83 391.85 0
268435456 8388608 float none -1 559.0 480.23 420.20 0 540.3 496.85 434.75 0
536870912 16777216 float none -1 1053.7 509.52 445.83 0 1021.4 525.64 459.93 0
1073741824 33554432 float none -1 2087.4 514.39 450.10 0 2013.8 533.19 466.54 0
2147483648 67108864 float none -1 4154.7 516.88 452.27 0 3987.4 538.57 471.25 0
4294967296 134217728 float none -1 8289.2 518.14 453.37 0 7907.4 543.16 475.26 0
8589934592 268435456 float none -1 16556 518.85 453.99 0 15726 546.24 477.96 0
# Out of bounds values : 0 OK
# Avg bus bandwidth : 175.233
#
Test with TAS
To validate the functionality of the provisioned cluster, you can run the
following NCCL test with
TAS .
Configure Kueue with TAS enabled
Install Kueue with TAS enabled .
Configure Kueue with TAS enabled by creating the following file, which you name
a4x-kueue-config.yaml :
apiVersion : kueue.x-k8s.io/v1alpha1
kind : Topology
metadata :
name : "a4x-default"
spec :
levels :
- nodeLabel : "cloud.google.com/gce-topology-block"
- nodeLabel : "cloud.google.com/gce-topology-subblock"
- nodeLabel : "cloud.google.com/gke-nodepool"
- nodeLabel : "cloud.google.com/gce-topology-host"
- nodeLabel : "kubernetes.io/hostname"
---
kind : ResourceFlavor
apiVersion : kueue.x-k8s.io/v1beta1
metadata :
name : "a4x"
spec :
nodeLabels :
cloud.google.com/gke-accelerator : nvidia-gb200
topologyName : "a4x-default"
tolerations :
- key : "nvidia.com/gpu"
operator : "Exists"
effect : NoSchedule
- key : "kubernetes.io/arch"
operator : "Exists"
effect : NoSchedule
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : ClusterQueue
metadata :
name : "a4x"
spec :
namespaceSelector : {} # match all.
resourceGroups :
- coveredResources : [ "nvidia.com/gpu" ]
flavors :
- name : "a4x"
resources :
- name : "nvidia.com/gpu"
nominalQuota : 1_000_000_000
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : LocalQueue
metadata :
namespace : "default"
name : "a4x"
spec :
clusterQueue : "a4x"
Run the test:
kubectl apply -f a4x-kueue-config.yaml
Schedule a topology-aware NCCL test with Kueue with TAS enabled
The following workload must be placed within a single NVLink Domain sub-block.
Install
JobSet ,
a Kubernetes-native API for managing of group of Kubernetes Jobs as a unit.
Ensure that your non-GPU node pools have enough resources to schedule the
JobSet controllers.
Create the following file with the name nccl-tas-test.yaml . Replace
NUM_NODES with the intended number of nodes to run
the NCCL test, up to 18 :
apiVersion : resource.nvidia.com/v1beta1
kind : ComputeDomain
metadata :
name : nccl-test-compute-domain
spec :
numNodes : NUM_NODES
channel :
resourceClaimTemplate :
name : nccl-test-compute-domain-channel
---
apiVersion : jobset.x-k8s.io/v1alpha2
kind : JobSet
metadata :
name : kueue-tas-nccl-all-gather
labels :
kueue.x-k8s.io/queue-name : a4x
spec :
ttlSecondsAfterFinished : 1200
network :
enableDNSHostnames : true
replicatedJobs :
- name : worker
template :
spec :
parallelism : NUM_NODES
completions : NUM_NODES
template :
metadata :
annotations :
kueue.x-k8s.io/podset-required-topology : "cloud.google.com/gce-topology-subblock"
networking.gke.io/default-interface : 'eth0'
networking.gke.io/interfaces : |
[
{"interfaceName":"eth0","network":"default"},
{"interfaceName":"eth2","network":"rdma-0"},
{"interfaceName":"eth3","network":"rdma-1"},
{"interfaceName":"eth4","network":"rdma-2"},
{"interfaceName":"eth5","network":"rdma-3"}
]
spec :
activeDeadlineSeconds : 3600
restartPolicy : Never
nodeSelector :
cloud.google.com/gke-accelerator : nvidia-gb200
tolerations :
- key : nvidia.com/gpu
operator : Equal
value : present
effect : NoSchedule
- key : kubernetes.io/arch
operator : Equal
value : arm64
effect : NoSchedule
setHostnameAsFQDN : true
volumes :
- name : gib
hostPath :
path : /home/kubernetes/bin/gib
- name : nvidia
hostPath :
path : /home/kubernetes/bin/nvidia
- name : lib64
hostPath :
path : /lib64
- name : shared-memory
emptyDir :
medium : "Memory"
sizeLimit : 250Gi
resourceClaims :
- name : compute-domain-channel
resourceClaimTemplateName : nccl-test-compute-domain-channel
containers :
- name : nccl-test
stdin : true
tty : true
image : us-docker.pkg.dev/gce-ai-infra/gpudirect-gib/nccl-plugin-gib-diagnostic-arm64:v1.0.4
env :
- name : MY_NODE_NAME
valueFrom :
fieldRef :
fieldPath : spec.nodeName
- name : OMPI_ALLOW_RUN_AS_ROOT
value : "1"
- name : OMPI_ALLOW_RUN_AS_ROOT_CONFIRM
value : "1"
- name : N_NODES
value : " NUM_NODES "
- name : LD_LIBRARY_PATH
value : /usr/local/nvidia/lib64
command :
- bash
- -c
- |
set -x
echo "Starting workload container on ${MY_NODE_NAME} for $N_NODES benchmark"
# Install ping
apt update -y
apt install -y iputils-ping
# Start sshd
/scripts/container_entry.sh daemon &
# Get helper variables to form all hostnames
export POSTFIX=$(hostname | cut -d . -f 2-)
export WORKERS_BASENAME=$(hostname | cut -d . -f 1 | rev | cut -d - -f 2- | rev )
export NODE_RANK=$JOB_COMPLETION_INDEX
# For every worker, wait till online and add to hostfile
for i in `seq 0 $(($N_NODES-1))`; do
OTHER=${WORKERS_BASENAME}-${i}.${POSTFIX}
until ssh -p 222 -o StrictHostKeyChecking=no $OTHER hostname; do
echo Waiting for ${OTHER}...
sleep 10
done
echo ${OTHER} port=222 slots=4 | tee -a /tmp/hostfile;
done
cat /tmp/hostfile
# Launch from head node
if [[ "${NODE_RANK}" -eq "0" ]]; then
# World Level = 0x0, Rail Aligned = 0x7
export NCCL_TESTS_SPLIT_MASK="0x0";
# Force use of libnccl-gib
export NCCL_NET=gIB
# Set all the correct libnccl-gib environment variables
source /usr/local/gib/scripts/set_nccl_env.sh
# Get all relevant NCCL / env vars to pass to all workers
ENV_VARS=$(echo ${!NCCL*} ${!OMPI*} LD_LIBRARY_PATH PATH | sed 's/ / -x /g')
mpirun --hostfile /tmp/hostfile \
-x $ENV_VARS \
-mca plm_rsh_no_tree_spawn 1 \
--mca orte_keep_fqdn_hostnames 1 \
--mca btl self,tcp \
--mca btl_tcp_if_include eth0 \
--bind-to none \
--mca plm_rsh_agent "ssh -q -o LogLevel=ERROR -o StrictHostKeyChecking=no -p 222" \
/third_party/nccl-tests/build/all_gather_perf -b 1K -e 8G -f 2 -g 1 -w 5 --iters 100 -c 1
else
while ping -c 1 ${WORKERS_BASENAME}-0.${POSTFIX}; do
sleep 5
done
fi
exit 0
volumeMounts :
- name : nvidia
mountPath : /usr/local/nvidia
- name : gib
mountPath : /usr/local/gib
- name : shared-memory
mountPath : /dev/shm
resources :
limits :
nvidia.com/gpu : 4
requests :
nvidia.com/gpu : 4
claims :
- name : compute-domain-channel
restartPolicy : Never
Run the test:
kubectl apply -f nccl-tas-test.yaml
Check the test result by reviewing the logs:
kubectl logs $( kubectl get pods -o go-template = '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}' | grep kueue-tas-nccl-all-gather-worker-0-0 )
The output is similar to the following:
# size count type redop root time algbw busbw #wrong time algbw busbw #wrong
# (B) (elements) (us) (GB/s) (GB/s) (us) (GB/s) (GB/s)
1024 8 float none -1 56.72 0.02 0.02 0 56.12 0.02 0.02 0
2048 16 float none -1 56.85 0.04 0.03 0 56.87 0.04 0.03 0
4096 32 float none -1 57.53 0.07 0.07 0 57.47 0.07 0.07 0
8192 64 float none -1 58.43 0.14 0.14 0 58.27 0.14 0.14 0
16384 128 float none -1 59.29 0.28 0.27 0 58.87 0.28 0.27 0
32768 256 float none -1 60.02 0.55 0.53 0 59.60 0.55 0.53 0
65536 512 float none -1 61.83 1.06 1.03 0 61.64 1.06 1.03 0
131072 1024 float none -1 70.99 1.85 1.79 0 70.82 1.85 1.79 0
262144 2048 float none -1 71.56 3.66 3.55 0 71.07 3.69 3.57 0
524288 4096 float none -1 72.62 7.22 6.99 0 71.90 7.29 7.06 0
1048576 8192 float none -1 72.80 14.40 13.95 0 72.31 14.50 14.05 0
2097152 16384 float none -1 73.40 28.57 27.68 0 72.96 28.74 27.85 0
4194304 32768 float none -1 73.86 56.78 55.01 0 73.44 57.12 55.33 0
8388608 65536 float none -1 102.5 81.86 79.30 0 101.4 82.69 80.11 0
16777216 131072 float none -1 158.3 105.97 102.66 0 156.8 107.02 103.68 0
33554432 262144 float none -1 158.4 211.89 205.26 0 157.5 212.99 206.33 0
67108864 524288 float none -1 250.7 267.68 259.32 0 248.7 269.81 261.38 0
134217728 1048576 float none -1 417.7 321.29 311.25 0 414.1 324.13 314.01 0
268435456 2097152 float none -1 728.8 368.32 356.81 0 721.5 372.08 360.45 0
536870912 4194304 float none -1 1226.5 437.72 424.04 0 1216.1 441.46 427.66 0
1073741824 8388608 float none -1 2268.4 473.35 458.56 0 2247.0 477.86 462.93 0
2147483648 16777216 float none -1 4330.6 495.88 480.39 0 4291.6 500.39 484.76 0
4294967296 33554432 float none -1 8640.9 497.05 481.52 0 8544.0 502.69 486.98 0
8589934592 67108864 float none -1 17258 497.75 482.19 0 17052 503.75 488.00 0
# Out of bounds values : 0 OK
# Avg bus bandwidth : 157.091
What's next
Collect and Understand NCCL Logs for Troubleshooting to understand the test outputs and troubleshoot issues.
Learn about troubleshooting slow performance .
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
