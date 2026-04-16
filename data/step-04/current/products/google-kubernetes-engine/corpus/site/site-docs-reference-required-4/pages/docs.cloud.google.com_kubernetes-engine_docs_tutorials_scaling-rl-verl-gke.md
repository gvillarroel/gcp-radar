---
title: "Fine-tune and scale reinforcement learning with verl on GKE \_|\_ GKE AI/ML\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke
  title: "Fine-tune and scale reinforcement learning with verl on GKE \_|\_ GKE AI/ML\
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
Fine-tune and scale reinforcement learning with verl on GKE
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This tutorial shows you how to orchestrate a distributed training environment
for reinforcement learning on Google Kubernetes Engine (GKE). You use Ray and the
verl (Volcano Engine Reinforcement Learning) framework to set up a distributed training environment to fine-tune a
Qwen2.5-32B-Instruct model.
This tutorial focuses on the Group Relative Policy Optimization (GRPO) training
pipeline on GKE with Ray and verl . GRPO is a reinforcement learning
algorithm designed to improve a model's reasoning ability. This
memory-efficient algorithm simplifies the reinforcement learning (RL) process by
eliminating the Critic, or value model , and using a relative group-based
calculation instead.
This tutorial is a good starting point if you need to set up a distributed training
environment where data, model weights, and the training engine are decoupled
for efficiency.
Background
The following sections provide a brief overview of the concepts used in this
tutorial.
Reinforcement learning (RL)
RL teaches models through experience, exploration, and feedback rather than
static imitation. Although pre-training teaches a model what to say,
reinforcement learning from human feedback (RLHF) teaches it how to be helpful,
safe, and logical. RL serves as the bridge between a base model and a fine-tuned
model for a specialized use case.
For more information, see
What is reinforcement learning?
Group Relative Policy Optimization (GRPO)
GRPO , an algorithm popularized by DeepSeek, offers a memory-efficient
alternative to Proximal Policy Optimization (PPO) for LLM alignment by removing
the Critic model. Instead of a Critic network, GRPO generates a group of
responses for the same prompt and uses the average reward of that group as the
baseline.
For more information, see GRPO .
Volcano Engine Reinforcement Learning (verl)
verl is a high-performance framework designed to handle the complex memory
and compute patterns of LLM-based RL.
For more information, see verl .
Objectives
This tutorial shows you how set up reinforcement learning on GKE with verl, by completing the following steps:
Set up a GKE cluster with B200 or H200 GPUs.
Configure KubeRay to manage a distributed Ray cluster.
Use Cloud Storage FUSE to mount a Cloud Storage bucket across all nodes.
Run a GRPO training job using verl to align the Qwen2.5-32B-Instruct
model with the GSM8K dataset.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the required APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable container.googleapis.com storage.googleapis.com compute.googleapis.com
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the required APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable container.googleapis.com storage.googleapis.com compute.googleapis.com
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/container.admin, roles/iam.serviceAccountAdmin, roles/storage.admin
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Create a Hugging Face account, if you don't already
have one.
Ensure that you have a
Hugging Face token .
Ensure your project has sufficient quota for B200 and H200 GPUs. To learn
more, see Plan GPU quota and
GPU quota .
Prepare your environment
In this tutorial, you use Cloud Shell .
Go to the Google Cloud console .
At the top of the Google Cloud console window, click the Activate
Cloud Shell button.
Set the following environment variables:
export PROJECT_ID = $( gcloud config get project )
export PROJECT_NUMBER = $( gcloud projects describe ${ PROJECT_ID } --format = "value(projectNumber)" )
export GPU_TYPE = GPU_TYPE
export CONTROL_PLANE_LOCATION = CONTROL_PLANE_LOCATION
export NODE_LOCATION = NODE_LOCATION
export CLUSTER_NAME = CLUSTER_NAME
export KSA_NAME = CLUSTER_NAME
export GS_BUCKET = BUCKET_NAME - ${ PROJECT_ID }
export NAMESPACE = default
export HF_TOKEN = YOUR_HUGGING_FACE_TOKEN
export MACHINE_TYPE = MACHINE_TYPE
export GKE_VERSION = GKE_VERSION
Replace the following values:
CONTROL_PLANE_LOCATION : the
Compute Engine region for the GKE cluster control plane.
GPU_TYPE : the accelerator that you
reserved in the Compute Engine capacity reservation. Must be
one of the following values:
nvidia-b200 : NVIDIA B200 (180GB)
nvidia-h200-141gb : NVIDIA H200 (141GB)
NODE_LOCATION : the zone for the
GKE nodes. Select a
zone where NVIDIA B200 or H200 GPUs are available .
CLUSTER_NAME : the name of your
GKE cluster.
BUCKET_NAME : the base name for your
Cloud Storage bucket. You don't need to specify the gs://
prefix.
YOUR_HUGGING_FACE_TOKEN : your Hugging
Face token for model access.
MACHINE_TYPE : the type of machine to
use:
For NVIDIA B200 (180 GB) GPUs, use a4-highgpu-8g or later.
For NVIDIA H200 (141 GB) GPUs, use a3-ultragpu-8g or later.
GKE_VERSION : the version of
GKE to use:
For NVIDIA B200 (180 GB) GPUs, use 1.32.2-gke.1422000 or later.
For NVIDIA H200 (141GB) GPUs, use 1.31.4-gke.1183000 or later.
Create the following environment variables for the network:
export GVNIC_NETWORK_PREFIX = " GVNIC-NAME "
export RDMA_NETWORK_PREFIX = " RDMA-NAME "
Replace the following values:
GVNIC-NAME : the prefix for the gVNIC network
name. You can use any prefix you want.
RDMA-NAME : the prefix for the remote direct
memory access (RDMA) network. You can use any prefix you want.
Set up infrastructure
In this section, you create a RDMA network and a GKE cluster.
Create RDMA network and subnets
Create a VPC network for the gVNIC interface:
gcloud compute networks create ${ GVNIC_NETWORK_PREFIX } -net \
--subnet-mode = custom \
--project = ${ PROJECT }
gcloud compute networks subnets create ${ GVNIC_NETWORK_PREFIX } -sub \
--network = ${ GVNIC_NETWORK_PREFIX } -net \
--location = ${ CONTROL_PLANE_LOCATION } \
--range = 192 .168.0.0/24
gcloud compute firewall-rules create ${ GVNIC_NETWORK_PREFIX } -internal \
--network = ${ GVNIC_NETWORK_PREFIX } -net \
--action = ALLOW \
--rules = tcp:0-65535,udp:0-65535,icmp \
--source-ranges = 192 .168.0.0/16
Create a VPC network and subnets for RDMA with 8 subnets for 8 GPUs:
gcloud beta compute networks create ${ RDMA_NETWORK_PREFIX } -net \
--network-profile = ${ CONTROL_PLANE_LOCATION } -vpc-roce \
--subnet-mode = custom
for N in $( seq 0 7 ) ; do
gcloud compute networks subnets create ${ RDMA_NETWORK_PREFIX } -sub- $N \
--network = ${ RDMA_NETWORK_PREFIX } -net \
--location = ${ CONTROL_PLANE_LOCATION } \
--range = 192 .168. $(( N + 1 )) .0/24 &
done
wait
Clone the sample repository:
git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples.git
cd kubernetes-engine-samples
Navigate to the working directory:
cd ai-ml/verl-on-gke
Create the GKE cluster
You can set verl in a GKE Autopilot
or Standard cluster. We recommend that you use a Autopilot
cluster for a fully managed Kubernetes experience. To choose the
GKE mode of operation that's the best fit for your workloads,
see Choose a GKE mode of operation .
Autopilot
Create an Autopilot cluster:
gcloud container clusters create-auto ${ CLUSTER_NAME } \
--location = ${ CONTROL_PLANE_LOCATION } \
--enable-multi-networking \
--enable-ray-operator
Get credentials for your cluster:
gcloud container clusters get-credentials ${ CLUSTER_NAME } \
--location = ${ CONTROL_PLANE_LOCATION }
Install the NCCL RDMA installer for Autopilot:
kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/refs/heads/master/gpudirect-rdma/nccl-rdma-installer-autopilot.yaml
Standard
Create a Standard cluster:
gcloud container clusters create ${ CLUSTER_NAME } \
--location = ${ CONTROL_PLANE_LOCATION } \
--enable-dataplane-v2 \
--enable-ip-alias \
--enable-multi-networking \
--addons = RayOperator,GcsFuseCsiDriver \
--machine-type = c2standard8 \
--num-nodes = 1 \
--min-nodes = 1 \
--max-nodes = 5 \
--enable-autoscaling
Get credentials for your cluster:
gcloud container clusters get-credentials ${ CLUSTER_NAME } --location = ${ ZONE }
Create the GPU node pool. These node pools use Spot VMs
instances for cost efficiency:
gcloud container node-pools create gpu-pool \
--cluster = ${ CLUSTER_NAME } \
--location = ${ NODE_LOCATION } \
--machine-type = ${ MACHINE_TYPE } \
--accelerator = type = ${ GPU_TYPE } ,count = 8 ,gpu-driver-version = DEFAULT \
--spot \
--enable-autoscaling \
--num-nodes = 0 \
--total-max-nodes = 10 \
--additional-node-network = network = ${ GVNIC_NETWORK_PREFIX } -net,subnetwork = ${ GVNIC_NETWORK_PREFIX } -sub \
--additional-node-network = network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-0 \
--additional-node-network = network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-1 \
--additional-node-network = network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-2 \
--additional-node-network = network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-3 \
--additional-node-network = network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-4 \
--additional-node-network = network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-5 \
--additional-node-network = network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-6 \
--additional-node-network = network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-7
Install the NCCL RDMA installer used for Standard clusters:
kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/refs/heads/master/gpudirect-rdma/nccl-rdma-installer.yaml
Configure network mappings
Inspect the network-mapping.yaml manifest:
# Copyright 2026 Google LLC. All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : networking.gke.io/v1
kind : GKENetworkParamSet
metadata :
name : gvnic-1
spec :
vpc : ${GVNIC_NETWORK_PREFIX}-net
vpcSubnet : ${GVNIC_NETWORK_PREFIX}-sub
deviceMode : NetDevice
---
apiVersion : networking.gke.io/v1
kind : Network
metadata :
name : gvnic-1
spec :
type : "Device"
parametersRef :
group : networking.gke.io
kind : GKENetworkParamSet
name : gvnic-1
---
apiVersion : networking.gke.io/v1
kind : GKENetworkParamSet
metadata :
name : rdma-0
spec :
vpc : ${RDMA_NETWORK_PREFIX}-net
vpcSubnet : ${RDMA_NETWORK_PREFIX}-sub-0
deviceMode : RDMA
---
apiVersion : networking.gke.io/v1
kind : Network
metadata :
name : rdma-0
spec :
type : "Device"
parametersRef :
group : networking.gke.io
kind : GKENetworkParamSet
name : rdma-0
---
apiVersion : networking.gke.io/v1
kind : GKENetworkParamSet
metadata :
name : rdma-1
spec :
vpc : ${RDMA_NETWORK_PREFIX}-net
vpcSubnet : ${RDMA_NETWORK_PREFIX}-sub-1
deviceMode : RDMA
---
apiVersion : networking.gke.io/v1
kind : Network
metadata :
name : rdma-1
spec :
type : "Device"
parametersRef :
group : networking.gke.io
kind : GKENetworkParamSet
name : rdma-1
---
apiVersion : networking.gke.io/v1
kind : GKENetworkParamSet
metadata :
name : rdma-2
spec :
vpc : ${RDMA_NETWORK_PREFIX}-net
vpcSubnet : ${RDMA_NETWORK_PREFIX}-sub-2
deviceMode : RDMA
---
apiVersion : networking.gke.io/v1
kind : Network
metadata :
name : rdma-2
spec :
type : "Device"
parametersRef :
group : networking.gke.io
kind : GKENetworkParamSet
name : rdma-2
---
apiVersion : networking.gke.io/v1
kind : GKENetworkParamSet
metadata :
name : rdma-3
spec :
vpc : ${RDMA_NETWORK_PREFIX}-net
vpcSubnet : ${RDMA_NETWORK_PREFIX}-sub-3
deviceMode : RDMA
---
apiVersion : networking.gke.io/v1
kind : Network
metadata :
name : rdma-3
spec :
type : "Device"
parametersRef :
group : networking.gke.io
kind : GKENetworkParamSet
name : rdma-3
---
apiVersion : networking.gke.io/v1
kind : GKENetworkParamSet
metadata :
name : rdma-4
spec :
vpc : ${RDMA_NETWORK_PREFIX}-net
vpcSubnet : ${RDMA_NETWORK_PREFIX}-sub-4
deviceMode : RDMA
---
apiVersion : networking.gke.io/v1
kind : Network
metadata :
name : rdma-4
spec :
type : "Device"
parametersRef :
group : networking.gke.io
kind : GKENetworkParamSet
name : rdma-4
---
apiVersion : networking.gke.io/v1
kind : GKENetworkParamSet
metadata :
name : rdma-5
spec :
vpc : ${RDMA_NETWORK_PREFIX}-net
vpcSubnet : ${RDMA_NETWORK_PREFIX}-sub-5
deviceMode : RDMA
---
apiVersion : networking.gke.io/v1
kind : Network
metadata :
name : rdma-5
spec :
type : "Device"
parametersRef :
group : networking.gke.io
kind : GKENetworkParamSet
name : rdma-5
---
apiVersion : networking.gke.io/v1
kind : GKENetworkParamSet
metadata :
name : rdma-6
spec :
vpc : ${RDMA_NETWORK_PREFIX}-net
vpcSubnet : ${RDMA_NETWORK_PREFIX}-sub-6
deviceMode : RDMA
---
apiVersion : networking.gke.io/v1
kind : Network
metadata :
name : rdma-6
spec :
type : "Device"
parametersRef :
group : networking.gke.io
kind : GKENetworkParamSet
name : rdma-6
---
apiVersion : networking.gke.io/v1
kind : GKENetworkParamSet
metadata :
name : rdma-7
spec :
vpc : ${RDMA_NETWORK_PREFIX}-net
vpcSubnet : ${RDMA_NETWORK_PREFIX}-sub-7
deviceMode : RDMA
---
apiVersion : networking.gke.io/v1
kind : Network
metadata :
name : rdma-7
spec :
type : "Device"
parametersRef :
group : networking.gke.io
kind : GKENetworkParamSet
name : rdma-7
Apply the manifest:
kubectl apply -f network-mapping.yaml
Prepare data and storage
Create a Cloud Storage bucket:
gcloud storage buckets create gs:// ${ GS_BUCKET } --location = ${ REGION } --enable-hierarchical-namespace --uniform-bucket-level-access
Create a Kubernetes Service Account (KSA) and bind it to the bucket:
kubectl create serviceaccount ${ KSA_NAME } --namespace ${ NAMESPACE }
gcloud storage buckets add-iam-policy-binding gs:// ${ GS_BUCKET } \
--member "principal://iam.googleapis.com/projects/ ${ PROJECT_NUMBER } /locations/global/workloadIdentityPools/ ${ PROJECT_ID } .svc.id.goog/subject/ns/ ${ NAMESPACE } /sa/ ${ KSA_NAME } " \
--role "roles/storage.objectUser"
Create the Secret for Hugging Face:
kubectl create secret generic hf-secret --from-literal = hf_api_token = ${ HF_TOKEN }
Inspect the gcsfuse-storage.yaml manifest:
# Copyright 2026 Google LLC. All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : v1
kind : PersistentVolume
metadata :
name : training-bucket-pv
spec :
accessModes :
- ReadWriteMany
capacity :
storage : 768Gi
persistentVolumeReclaimPolicy : Delete
storageClassName : gcsfuse-sc
mountOptions :
- implicit-dirs
- metadata-cache:negative-ttl-secs:0
- metadata-cache:ttl-secs:0
- metadata-cache:stat-cache-max-size-mb:-1
- metadata-cache:type-cache-max-size-mb:-1
- file-cache:max-size-mb:-1
- file-cache:cache-file-for-range-read:true
- file-cache:enable-parallel-downloads:true
- read_ahead_kb=1024
- write:enable-streaming-writes:true
- write:global-max-blocks:200000
csi :
driver : gcsfuse.csi.storage.gke.io
volumeHandle : ${GS_BUCKET}
volumeAttributes :
skipCSIBucketAccessCheck : "true"
gcsfuseMetadataPrefetchOnMount : "true"
---
apiVersion : v1
kind : PersistentVolumeClaim
metadata :
name : training-bucket-pvc
spec :
accessModes :
- ReadWriteMany
resources :
requests :
storage : 768Gi
storageClassName : gcsfuse-sc
Apply the manifest:
kubectl apply -f gcsfuse-storage.yaml
Prepare model and data
You can run these commands locally or on a GKE Pod to populate the bucket.
Clone the verl repository:
git clone https://github.com/volcengine/verl.git
Download the Qwen2.5-32B-Instruct model using the Hugging Face CLI:
huggingface-cli download Qwen/Qwen2.5-32B-Instruct --local-dir Qwen2.5-32B-Instruct
Preprocess the GSM8K dataset:
python examples/data_preprocess/gsm8k.py --local_save_dir ~/data/gsm8k
Upload the model, data, and the verl code to your Cloud Storage bucket:
gcloud storage cp --recursive verl gs:// ${ GS_BUCKET } /verl
gcloud storage cp --recursive Qwen2.5-32B-Instruct gs:// ${ GS_BUCKET } /Qwen2.5-32B-Instruct
gcloud storage cp --recursive ~/data/gsm8k/* ${ GS_BUCKET }
Deploy RayCluster custom resource
Deploy a RayCluster custom resource, which typically consists of one system Pod and multiple worker Pods.
Autopilot
Deploy the RayCluster. Save the following to ray-cluster-auto.yaml :
# Copyright 2026 Google LLC. All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : ray.io/v1
kind : RayCluster
metadata :
name : b200-ray-cluster
annotations :
spec :
rayVersion : '2.47.0'
headGroupSpec :
rayStartParams :
dashboard-host : '0.0.0.0'
template :
metadata :
annotations :
gke-gcsfuse/volumes : "true"
spec :
serviceAccountName : ${KSA_NAME}
nodeSelector :
cloud.google.com/gke-spot : "true"
cloud.google.com/machine-family : "c2"
cloud.google.com/compute-class : Performance
containers :
- name : ray-head
image : verlai/verl:vllm011.latest
ports :
- containerPort : 6379
name : gcs-server
- containerPort : 8265
name : dashboard
- containerPort : 10001
name : client
resources :
limits :
cpu : "12"
memory : "32G"
ephemeral-storage : "9Gi"
requests :
cpu : "12"
memory : "32G"
ephemeral-storage : "9Gi"
volumeMounts :
- mountPath : /tmp/ray
name : ray-logs
- name : training-bucket-vol
mountPath : /data
volumes :
- name : ray-logs
emptyDir : {}
- name : training-bucket-vol
persistentVolumeClaim :
claimName : training-bucket-pvc
workerGroupSpecs :
- replicas : 2
minReplicas : 2
maxReplicas : 2
groupName : gpu-group
rayStartParams :
num-cpus : "220"
template :
metadata :
annotations :
gke-gcsfuse/volumes : "true"
networking.gke.io/default-interface : 'eth0'
networking.gke.io/interfaces : |
[
{"interfaceName":"eth0","network":"default"},
{"interfaceName":"eth1","network":"gvnic-1"},
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
initContainers :
- name : verl-setup
image : verlai/verl:vllm011.latest
command : [ "/bin/bash" , "-c" ]
args :
- |
echo "Performing local editable install..."
cd /data/verl && pip3 install --no-deps -e .
volumeMounts :
- name : training-bucket-vol
mountPath : /data
serviceAccountName : ${KSA_NAME}
nodeSelector :
cloud.google.com/gke-accelerator : ${GPU_TYPE}
cloud.google.com/gke-accelerator-count : 8
cloud.google.com/gke-spot : "true"
cloud.google.com/compute-class : Performance
tolerations :
- key : "nvidia.com/gpu"
operator : "Exists"
effect : "NoSchedule"
containers :
- name : ray-worker
image : verlai/verl:vllm011.latest
env :
- name : LD_LIBRARY_PATH
value : /usr/local/nvidia/lib64
resources :
limits :
cpu : "220"
memory : "2800Gi"
nvidia.com/gpu : "8"
ephemeral-storage : "1000Gi"
requests :
cpu : "220"
memory : "2800Gi"
nvidia.com/gpu : "8"
ephemeral-storage : "1000Gi"
volumeMounts :
- name : nvidia
mountPath : /usr/local/nvidia
readOnly : true
- name : gib
mountPath : /usr/local/gib
readOnly : true
- name : shared-memory
mountPath : /dev/shm
- name : ray-tmp-storage
mountPath : /tmp
- name : training-bucket-vol
mountPath : /data
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
- name : sys
hostPath :
path : /sys
- name : proc-sys
hostPath :
path : /proc/sys
- name : ray-tmp-storage
emptyDir : {}
- name : training-bucket-vol
persistentVolumeClaim :
claimName : training-bucket-pvc
Apply the RayCluster:
kubectl apply -f ray-cluster.yaml
Standard
Deploy the RayCluster. Save the following to ray-cluster.yaml :
# Copyright 2026 Google LLC. All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : ray.io/v1
kind : RayCluster
metadata :
name : b200-ray-cluster
annotations :
spec :
rayVersion : '2.47.0'
headGroupSpec :
rayStartParams :
dashboard-host : '0.0.0.0'
template :
metadata :
annotations :
gke-gcsfuse/volumes : "true"
spec :
serviceAccountName : ${KSA_NAME}
nodeSelector :
cloud.google.com/gke-nodepool : "default-pool"
containers :
- name : ray-head
image : verlai/verl:vllm011.latest
ports :
- containerPort : 6379
name : gcs-server
- containerPort : 8265
name : dashboard
- containerPort : 10001
name : client
resources :
limits :
cpu : "12"
memory : "32G"
ephemeral-storage : "9Gi"
requests :
cpu : "12"
memory : "32G"
ephemeral-storage : "9Gi"
volumeMounts :
- mountPath : /tmp/ray
name : ray-logs
- name : training-bucket-vol
mountPath : /data
volumes :
- name : ray-logs
emptyDir : {}
- name : training-bucket-vol
persistentVolumeClaim :
claimName : training-bucket-pvc
workerGroupSpecs :
- replicas : 2
minReplicas : 2
maxReplicas : 2
groupName : gpu-group
rayStartParams :
num-cpus : "220"
template :
metadata :
annotations :
gke-gcsfuse/volumes : "true"
networking.gke.io/default-interface : 'eth0'
networking.gke.io/interfaces : |
[
{"interfaceName":"eth0","network":"default"},
{"interfaceName":"eth1","network":"gvnic-1"},
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
initContainers :
- name : verl-setup
image : verlai/verl:vllm011.latest
command : [ "/bin/bash" , "-c" ]
args :
- |
echo "Performing local editable install..."
cd /data/verl && pip3 install --no-deps -e .
volumeMounts :
- name : training-bucket-vol
mountPath : /data
serviceAccountName : ${KSA_NAME}
nodeSelector :
cloud.google.com/gke-accelerator : ${GPU_TYPE}
tolerations :
- key : "nvidia.com/gpu"
operator : "Exists"
effect : "NoSchedule"
containers :
- name : ray-worker
image : verlai/verl:vllm011.latest
env :
- name : LD_LIBRARY_PATH
value : /usr/local/nvidia/lib64
resources :
limits :
cpu : "220"
memory : "2800Gi"
nvidia.com/gpu : "8"
ephemeral-storage : "1000Gi"
requests :
cpu : "220"
memory : "2800Gi"
nvidia.com/gpu : "8"
ephemeral-storage : "1000Gi"
volumeMounts :
- name : nvidia
mountPath : /usr/local/nvidia
- name : gib
mountPath : /usr/local/gib
- name : shared-memory
mountPath : /dev/shm
- name : ray-tmp-storage
mountPath : /tmp
- name : training-bucket-vol
mountPath : /data
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
- name : sys
hostPath :
path : /sys
- name : proc-sys
hostPath :
path : /proc/sys
- name : ray-tmp-storage
emptyDir : {}
- name : training-bucket-vol
persistentVolumeClaim :
claimName : training-bucket-pvc
Apply the RayCluster:
kubectl apply -f ray-cluster.yaml
Launch the GRPO Job
Set up port forwarding to the Ray dashboard node:
kubectl port-forward svc/b200-ray-cluster-head-svc 8265 :8265
Inspect the runtime-env.yaml manifest:
# Copyright 2026 Google LLC. All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
py_modules : [ "." ]
working_dir" : "."
py_executable" : "uv run"
setup_hook : runtime_env.uv_runtime_env_hook.hook
env_vars :
PYTHONPATH : "/data/verl"
LD_LIBRARY_PATH : "/usr/local/nvidia/lib64"
NCCL_DEBUG : "INFO"
NUM_WORKERS : "2"
CPUS_PER_WORKER : "192"
GPUS_PER_WORKER : "8"
NCCL_NET_PLUGIN : "/usr/local/gib/lib64/libnccl-net_internal.so"
NCCL_CROSS_NIC : "0"
NCCL_NET_GDR_LEVEL : "PIX"
NCCL_P2P_NET_CHUNKSIZE : "131072"
NCCL_NVLS_CHUNKSIZE : "524288"
NCCL_IB_ADAPTIVE_ROUTING : "1"
NCCL_IB_QPS_PER_CONNECTION : "4"
NCCL_IB_TC : "52"
NCCL_IB_FIFO_TC : "84"
NCCL_TUNER_CONFIG_PATH : "/usr/local/gib/configs/tuner_config_a4.txtpb"
HF_HOME : "/data/huggingface_cache"
GLOO_SOCKET_IFNAME : "eth0"
pip :
packages :
- torch
- torchvision
If you use H200 GPUs, change NCCL_TUNER_CONFIG_PATH to
/usr/local/gib/configs/tuner_config_a3u.txtpb .
This file is used by the Ray client. You don't need to apply this manifest to the
cluster.
Submit the Job using ray job submit :
ray -- job submit \
--address "http://localhost:8265" \
--runtime-env runtime-env.yaml \
-- \
bash -c "
cd /data/verl && PYTHONUNBUFFERED=1 python3 -m verl.trainer.main_ppo \
data.train_files=/data/gsm8k/train.parquet \
data.val_files=/data/gsm8k/test.parquet \
data.train_batch_size=256 \
data.max_prompt_length=512 \
data.max_response_length=512 \
actor_rollout_ref.model.path=Qwen/Qwen2.5-32B-Instruct \
actor_rollout_ref.actor.optim.lr=1e-5 \
actor_rollout_ref.actor.ppo_mini_batch_size=256 \
actor_rollout_ref.actor.ppo_micro_batch_size_per_gpu=64 \
actor_rollout_ref.rollout.name=vllm \
actor_rollout_ref.rollout.log_prob_micro_batch_size_per_gpu=8 \
actor_rollout_ref.rollout.tensor_model_parallel_size=8 \
actor_rollout_ref.rollout.gpu_memory_utilization=0.6 \
actor_rollout_ref.ref.log_prob_micro_batch_size_per_gpu=4 \
actor_rollout_ref.actor.strategy=fsdp2 \
algorithm.kl_ctrl.kl_coef=0.001 \
trainer.logger=console \
trainer.val_before_train=False \
trainer.n_gpus_per_node=8 \
trainer.nnodes=2 \
trainer.save_freq=10 \
trainer.test_freq=10 \
algorithm.adv_estimator=grpo \
actor_rollout_ref.rollout.n=8 \
trainer.total_epochs=2" 2>&1 | tee verl_demo.log
Monitor the logs in the Ray Dashboard or output. Look for
critic/score/mean to increase, indicating learning.
Clean up
To avoid incurring charges, delete the resources:
kubectl delete raycluster b200-ray-cluster # change to variables
gcloud container clusters delete ${ CLUSTER_NAME } --location = ${ CONTROL_PLANE_LOCATION }
gcloud storage rm -r gs:// ${ GS_BUCKET }
What's next
Learn about Ray on GKE
Explore verl documentation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
