---
title: "Run NCCL on custom GKE clusters that use A4 or A3 Ultra \_|\_ AI Hypercomputer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/nccl/test-gke-custom
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/nccl/test-gke-custom
  title: "Run NCCL on custom GKE clusters that use A4 or A3 Ultra \_|\_ AI Hypercomputer\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Run NCCL on custom GKE clusters that use A4 or A3 Ultra | AI Hypercomputer | Google Cloud Documentation
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
Test with Topology Aware Scheduling (TAS)
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Run NCCL on custom GKE clusters that use A4 or A3 Ultra
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Test on two nodes
Test with Topology Aware Scheduling (TAS)
What's next
This page describes how to run NCCL/gIB tests on provisioned clusters that use GPUDirect RDMA. It describes tests for the following scenarios:
If you have nodes that are provisioned with flex-start ( Preview ), use a basic test on two nodes .
If you have a larger number of nodes that are not provisioned with flex-start, use an NCCL test with Topology Aware Scheduling .
Test on two nodes
Run the two node test:
A4 A3 Ultra
More
To deploy a NCCL test workload of two test Pods that are running on two A4
nodes, apply one of the following manifests:
For an Autopilot cluster:
See more code actions.
Light code theme
Dark code theme
kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/refs/heads/master/gpudirect-rdma/nccl-test-a4-autopilot.yaml
For a Standard cluster:
See more code actions.
Light code theme
Dark code theme
kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/refs/heads/master/gpudirect-rdma/nccl-test-a4.yaml
Check if the Pods are scheduled to and running on some nodes:
See more code actions.
Light code theme
Dark code theme
kubectl get pods nccl-test-host-1 nccl-test-host-2
If the two Pods have the Running status, you can proceed to the next
step. For nodes that are provisioned by flex-start, it might take a few
minutes before the nodes are created and the Pods are scheduled on those nodes.
Trigger a NCCL all-gather test for the nodes:
kubectl exec nccl-test-host-1 -it -- /usr/local/gib/scripts/run_nccl_tests.sh -t all_gather -b 1K -e 8G nccl-host-1 nccl-host-2
The output should be similar to the following:
# size count type redop root time algbw busbw #wrong time algbw busbw #wrong
# (B) (elements) (us) (GB/s) (GB/s) (us) (GB/s) (GB/s)
1024 16 float none -1 48.17 0.02 0.02 0 47.21 0.02 0.02 0
2048 32 float none -1 47.23 0.04 0.04 0 47.17 0.04 0.04 0
4096 64 float none -1 47.43 0.09 0.08 0 47.48 0.09 0.08 0
8192 128 float none -1 47.93 0.17 0.16 0 47.98 0.17 0.16 0
16384 256 float none -1 48.90 0.34 0.31 0 48.75 0.34 0.32 0
32768 512 float none -1 50.10 0.65 0.61 0 49.59 0.66 0.62 0
65536 1024 float none -1 51.70 1.27 1.19 0 51.66 1.27 1.19 0
131072 2048 float none -1 52.23 2.51 2.35 0 55.60 2.36 2.21 0
262144 4096 float none -1 53.89 4.86 4.56 0 53.39 4.91 4.60 0
524288 8192 float none -1 56.80 9.23 8.65 0 57.66 9.09 8.52 0
1048576 16384 float none -1 87.85 11.94 11.19 0 88.47 11.85 11.11 0
2097152 32768 float none -1 92.52 22.67 21.25 0 93.22 22.50 21.09 0
4194304 65536 float none -1 97.41 43.06 40.37 0 96.15 43.62 40.90 0
8388608 131072 float none -1 110.0 76.27 71.51 0 110.9 75.66 70.93 0
16777216 262144 float none -1 141.3 118.77 111.35 0 140.7 119.27 111.81 0
33554432 524288 float none -1 203.2 165.14 154.82 0 202.3 165.90 155.53 0
67108864 1048576 float none -1 303.3 221.25 207.42 0 301.9 222.27 208.38 0
134217728 2097152 float none -1 513.2 261.56 245.21 0 509.3 263.56 247.08 0
268435456 4194304 float none -1 842.4 318.64 298.72 0 832.3 322.54 302.38 0
536870912 8388608 float none -1 1511.8 355.12 332.92 0 1502.5 357.31 334.98 0
1073741824 16777216 float none -1 2976.7 360.72 338.17 0 2923.2 367.32 344.36 0
2147483648 33554432 float none -1 5888.9 364.66 341.87 0 5766.2 372.43 349.15 0
4294967296 67108864 float none -1 11722 366.39 343.49 0 11457 374.88 351.45 0
8589934592 134217728 float none -1 23379 367.43 344.46 0 22818 376.45 352.92 0
# Out of bounds values : 0 OK
# Avg bus bandwidth : 120.845
To deploy a NCCL test workload of two test Pods that are running on two
A3 Ultra nodes, apply one of the following manifests:
For an Autopilot cluster:
kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/refs/heads/master/gpudirect-rdma/nccl-test-autopilot.yaml
For a Standard cluster:
kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/refs/heads/master/gpudirect-rdma/nccl-test.yaml
Check if the Pods are scheduled to and running on some nodes:
kubectl get pods nccl-test-host-1 nccl-test-host-2
If the two Pods have the Running status, you can proceed to the next
step. For nodes that are provisioned by flex-start, it might take a few
minutes before the nodes are created and the Pods are scheduled on those
nodes.
Trigger a NCCL all-gather test for the nodes:
kubectl exec nccl-test-host-1 -it -- /usr/local/gib/scripts/run_nccl_tests.sh -t all_gather -b 1K -e 8G nccl-host-1 nccl-host-2
The output should be similar to the following:
# size count type redop root time algbw busbw #wrong time algbw busbw #wrong
# (B) (elements) (us) (GB/s) (GB/s) (us) (GB/s) (GB/s)
1024 16 float none -1 56.00 0.02 0.02 0 55.59 0.02 0.02 0
2048 32 float none -1 55.79 0.04 0.03 0 55.57 0.04 0.03 0
4096 64 float none -1 56.29 0.07 0.07 0 57.35 0.07 0.07 0
8192 128 float none -1 56.44 0.15 0.14 0 56.32 0.15 0.14 0
16384 256 float none -1 57.57 0.28 0.27 0 57.60 0.28 0.27 0
32768 512 float none -1 57.92 0.57 0.53 0 59.35 0.55 0.52 0
65536 1024 float none -1 59.92 1.09 1.03 0 60.15 1.09 1.02 0
131072 2048 float none -1 59.21 2.21 2.08 0 61.82 2.12 1.99 0
262144 4096 float none -1 63.58 4.12 3.87 0 63.34 4.14 3.88 0
524288 8192 float none -1 64.89 8.08 7.57 0 65.09 8.06 7.55 0
1048576 16384 float none -1 80.90 12.96 12.15 0 77.49 13.53 12.69 0
2097152 32768 float none -1 80.22 26.14 24.51 0 79.88 26.25 24.61 0
4194304 65536 float none -1 82.86 50.62 47.45 0 82.47 50.86 47.68 0
8388608 131072 float none -1 95.83 87.53 82.06 0 93.27 89.94 84.32 0
16777216 262144 float none -1 122.8 136.58 128.04 0 121.7 137.86 129.24 0
33554432 524288 float none -1 180.6 185.75 174.14 0 179.2 187.19 175.49 0
67108864 1048576 float none -1 279.7 239.90 224.90 0 277.0 242.26 227.12 0
134217728 2097152 float none -1 507.5 264.46 247.93 0 485.1 276.66 259.37 0
268435456 4194304 float none -1 866.3 309.88 290.51 0 864.0 310.70 291.28 0
536870912 8388608 float none -1 1576.1 340.62 319.33 0 1558.2 344.54 323.01 0
1073741824 16777216 float none -1 3096.6 346.75 325.08 0 3047.5 352.33 330.31 0
2147483648 33554432 float none -1 6148.0 349.30 327.47 0 6034.3 355.88 333.64 0
4294967296 67108864 float none -1 12226 351.29 329.33 0 12000 357.92 335.55 0
8589934592 134217728 float none -1 24391 352.17 330.16 0 23920 359.11 336.67 0
# Out of bounds values : 0 OK
# Avg bus bandwidth : 120.94
Test with Topology Aware Scheduling (TAS)
If you have more than two nodes, we recommend using the following test, which
uses TAS. Follow the steps in the next sections to prepare and run the test on
your cluster.
Set up your cluster with Jobset and the TAS plugin
Install JobSet .
Install the TAS plugin:
Clone the container-engine-accelerators git repository:
cd ~
git clone https://github.com/GoogleCloudPlatform/container-engine-accelerators.git
Apply the TAS plugin:
cd container-engine-accelerators/gke-topology-scheduler
kubectl create configmap topology-scheduler-scripts --namespace kube-system --from-file = schedule-daemon.py = schedule-daemon.py --from-file = label-nodes-daemon.py = label-nodes-daemon.py
kubectl apply -f service-account.yaml
kubectl apply -f schedule-daemon.yaml
kubectl apply -f label-nodes-daemon.yaml
Deploy a NCCL test workload with TAS
A4 A3 Ultra
More
Create the following nccl-jobset-test.yaml manifest:
apiVersion : jobset.x-k8s.io/v1alpha2
kind : JobSet
metadata :
# The name `nccl-ag` is used for an NCCL all-gather test.
name : nccl-ag
spec :
ttlSecondsAfterFinished : 1200
suspend : False
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
networking.gke.io/default-interface : 'eth0'
networking.gke.io/interfaces : |
[
{"interfaceName":"eth0","network":"default"},
{"interfaceName":"eth2","network":"rdma-0"},
{"interfaceName":"eth3","network":"rdma-1"},
{"interfaceName":"eth4","network":"rdma-2"},
{"interfaceName":"eth5","network":"rdma-3"},
{"interfaceName":"eth6","network":"rdma-4"},
{"interfaceName":"eth7","network":"rdma-5"},
{"interfaceName":"eth8","network":"rdma-6"},
{"interfaceName":"eth9","network":"rdma-7"}
]
spec :
activeDeadlineSeconds : 3600
restartPolicy : Never
nodeSelector :
cloud.google.com/gke-accelerator : nvidia-b200
tolerations :
- key : cloud.google.com/gke-queued
effect : NoSchedule
value : "true"
- key : "nvidia.com/gpu"
operator : "Exists"
effect : "NoSchedule"
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
schedulingGates :
- name : "gke.io/topology-aware-auto-nccl-test"
containers :
- name : nccl-test
stdin : true
tty : true
image : us-docker.pkg.dev/gce-ai-infra/gpudirect-gib/nccl-plugin-gib-diagnostic:v1.0.6
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
echo ${OTHER} port=222 slots=8 | tee -a /tmp/hostfile;
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
--mca mtl ^ofi \
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
nvidia.com/gpu : 8
requests :
nvidia.com/gpu : 8
restartPolicy : Never
Replace NUM_NODES with the number of nodes in
the node pool.
Make sure that you understand the following about this manifest:
The JobSet is a headless Service with the same name as the JobSet
name, in this case, nccl-ag .
The gke.io/topology-aware-auto-nccl-test scheduling gate is used to
verify the Pods are scheduled for colocation.
The parallelism and completions fields are both set to the number
of nodes that you want to use to run the NCCL test.
Apply the manifest:
kubectl apply -f nccl-jobset-test.yaml
Confirm that the workload is admitted:
kubectl get jobsets
The output is similar to the following:
NAME RESTARTS COMPLETED AGE
nccl-ag 3s
Confirm that the workload is in the Completed state:
kubectl get pods
The output is similar to the following:
NAME READY STATUS RESTARTS AGE
nccl-ag-worker-0-0-n9s6j 0/1 Completed 0 9m34s
nccl-ag-worker-0-1-rsf7r 0/1 Completed 0 9m34s
...
The logs of the Pod with the pattern nccl-ag-worker-0-0-.* contain
the results of the test.
Fetch the logs for this Pod:
kubectl logs $( kubectl get pods -o go-template = '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}' | grep nccl-ag-worker-0-0 )
The output should be similar to the following:
# size count type redop root time algbw busbw #wrong time algbw busbw #wrong
# (B) (elements) (us) (GB/s) (GB/s) (us) ∂ç (GB/s) (GB/s)
1024 16 float none -1 54.07 0.02 0.02 0 55.80 0.02 0.02 0
2048 32 float none -1 55.46 0.04 0.03 0 55.31 0.04 0.03 0
4096 64 float none -1 55.59 0.07 0.07 0 55.38 0.07 0.07 0
8192 128 float none -1 56.05 0.15 0.14 0 55.92 0.15 0.14 0
16384 256 float none -1 57.08 0.29 0.27 0 57.75 0.28 0.27 0
32768 512 float none -1 57.49 0.57 0.53 0 57.22 0.57 0.54 0
65536 1024 float none -1 59.20 1.11 1.04 0 59.20 1.11 1.04 0
131072 2048 float none -1 59.58 2.20 2.06 0 63.57 2.06 1.93 0
262144 4096 float none -1 63.87 4.10 3.85 0 63.61 4.12 3.86 0
524288 8192 float none -1 64.83 8.09 7.58 0 64.40 8.14 7.63 0
1048576 16384 float none -1 79.74 13.15 12.33 0 76.66 13.68 12.82 0
2097152 32768 float none -1 78.41 26.74 25.07 0 79.05 26.53 24.87 0
4194304 65536 float none -1 83.21 50.41 47.26 0 81.25 51.62 48.39 0
8388608 131072 float none -1 94.35 88.91 83.35 0 99.07 84.68 79.38 0
16777216 262144 float none -1 122.9 136.55 128.02 0 121.7 137.83 129.21 0
33554432 524288 float none -1 184.2 182.19 170.80 0 178.1 188.38 176.60 0
67108864 1048576 float none -1 294.7 227.75 213.51 0 277.7 241.62 226.52 0
134217728 2097152 float none -1 495.4 270.94 254.00 0 488.8 274.60 257.43 0
268435456 4194304 float none -1 877.5 305.92 286.80 0 861.3 311.65 292.17 0
536870912 8388608 float none -1 1589.8 337.71 316.60 0 1576.2 340.61 319.33 0
1073741824 16777216 float none -1 3105.7 345.74 324.13 0 3069.2 349.85 327.98 0
2147483648 33554432 float none -1 6161.7 348.52 326.74 0 6070.7 353.75 331.64 0
4294967296 67108864 float none -1 12305 349.03 327.22 0 12053 356.35 334.08 0
8589934592 134217728 float none -1 24489 350.77 328.85 0 23991 358.05 335.67 0
# Out of bounds values : 0 OK
# Avg bus bandwidth : 120.248
Create the following nccl-jobset-test.yaml manifest:
apiVersion : jobset.x-k8s.io/v1alpha2
kind : JobSet
metadata :
# The name `nccl-ag` is used for an NCCL all-gather test.
name : nccl-ag
spec :
ttlSecondsAfterFinished : 1200
suspend : False
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
networking.gke.io/default-interface : 'eth0'
networking.gke.io/interfaces : |
[
{"interfaceName":"eth0","network":"default"},
{"interfaceName":"eth2","network":"rdma-0"},
{"interfaceName":"eth3","network":"rdma-1"},
{"interfaceName":"eth4","network":"rdma-2"},
{"interfaceName":"eth5","network":"rdma-3"},
{"interfaceName":"eth6","network":"rdma-4"},
{"interfaceName":"eth7","network":"rdma-5"},
{"interfaceName":"eth8","network":"rdma-6"},
{"interfaceName":"eth9","network":"rdma-7"}
]
spec :
activeDeadlineSeconds : 3600
restartPolicy : Never
nodeSelector :
cloud.google.com/gke-accelerator : nvidia-h200-141gb
tolerations :
- key : cloud.google.com/gke-queued
effect : NoSchedule
value : "true"
- key : "nvidia.com/gpu"
operator : "Exists"
effect : "NoSchedule"
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
schedulingGates :
- name : "gke.io/topology-aware-auto-nccl-test"
containers :
- name : nccl-test
stdin : true
tty : true
image : us-docker.pkg.dev/gce-ai-infra/gpudirect-gib/nccl-plugin-gib-diagnostic:v1.0.6
securityContext :
privileged : true
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
echo ${OTHER} port=222 slots=8 | tee -a /tmp/hostfile;
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
nvidia.com/gpu : 8
requests :
nvidia.com/gpu : 8
restartPolicy : Never
Replace NUM_NODES with the number of nodes in the
node pool.
Make sure that you understand the following about this manifest:
The JobSet is a Headless Service with the same name as the JobSet name,
in this case, nccl-ag .
The gke.io/topology-aware-auto-nccl-test scheduling gate is used to
verify the Pods are scheduled for colocation.
The parallelism and completions fields are both set to the number of
nodes that you want to use to run the NCCL test.
Apply the manifest:
kubectl apply -f nccl-jobset-test.yaml
Confirm that the workload is admitted:
kubectl get jobsets
The output is similar to the following:
NAME RESTARTS COMPLETED AGE
nccl-ag 3s
Confirm that the workload is in the Completed state:
kubectl get pods
The output is similar to the following:
NAME READY STATUS RESTARTS AGE
nccl-ag-worker-0-0-n9s6j 0/1 Completed 0 9m34s
nccl-ag-worker-0-1-rsf7r 0/1 Completed 0 9m34s
...
The logs of the Pod with the pattern nccl-ag-worker-0-0-.* contain
the results of the test.
Fetch the logs for this Pod:
kubectl logs $( kubectl get pods -o go-template = '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}' | grep nccl-ag-worker-0-0 )
The output should be similar to the following:
# size count type redop root time algbw busbw #wrong time algbw busbw #wrong
# (B) (elements) (us) (GB/s) (GB/s) (us) ∂ç (GB/s) (GB/s)
1024 16 float none -1 54.07 0.02 0.02 0 55.80 0.02 0.02 0
2048 32 float none -1 55.46 0.04 0.03 0 55.31 0.04 0.03 0
4096 64 float none -1 55.59 0.07 0.07 0 55.38 0.07 0.07 0
8192 128 float none -1 56.05 0.15 0.14 0 55.92 0.15 0.14 0
16384 256 float none -1 57.08 0.29 0.27 0 57.75 0.28 0.27 0
32768 512 float none -1 57.49 0.57 0.53 0 57.22 0.57 0.54 0
65536 1024 float none -1 59.20 1.11 1.04 0 59.20 1.11 1.04 0
131072 2048 float none -1 59.58 2.20 2.06 0 63.57 2.06 1.93 0
262144 4096 float none -1 63.87 4.10 3.85 0 63.61 4.12 3.86 0
524288 8192 float none -1 64.83 8.09 7.58 0 64.40 8.14 7.63 0
1048576 16384 float none -1 79.74 13.15 12.33 0 76.66 13.68 12.82 0
2097152 32768 float none -1 78.41 26.74 25.07 0 79.05 26.53 24.87 0
4194304 65536 float none -1 83.21 50.41 47.26 0 81.25 51.62 48.39 0
8388608 131072 float none -1 94.35 88.91 83.35 0 99.07 84.68 79.38 0
16777216 262144 float none -1 122.9 136.55 128.02 0 121.7 137.83 129.21 0
33554432 524288 float none -1 184.2 182.19 170.80 0 178.1 188.38 176.60 0
67108864 1048576 float none -1 294.7 227.75 213.51 0 277.7 241.62 226.52 0
134217728 2097152 float none -1 495.4 270.94 254.00 0 488.8 274.60 257.43 0
268435456 4194304 float none -1 877.5 305.92 286.80 0 861.3 311.65 292.17 0
536870912 8388608 float none -1 1589.8 337.71 316.60 0 1576.2 340.61 319.33 0
1073741824 16777216 float none -1 3105.7 345.74 324.13 0 3069.2 349.85 327.98 0
2147483648 33554432 float none -1 6161.7 348.52 326.74 0 6070.7 353.75 331.64 0
4294967296 67108864 float none -1 12305 349.03 327.22 0 12053 356.35 334.08 0
8589934592 134217728 float none -1 24489 350.77 328.85 0 23991 358.05 335.67 0
# Out of bounds values : 0 OK
# Avg bus bandwidth : 120.248
```
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
