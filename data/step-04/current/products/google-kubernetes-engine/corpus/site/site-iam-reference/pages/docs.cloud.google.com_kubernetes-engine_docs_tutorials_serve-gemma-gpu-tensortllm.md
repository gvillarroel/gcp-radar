---
title: "Serve Gemma open models using GPUs on GKE with Triton and TensorRT-LLM \_\
  |\_ Kubernetes Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-tensortllm
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/learn
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-tensortllm
  title: "Serve Gemma open models using GPUs on GKE with Triton and TensorRT-LLM \_\
    |\_ Kubernetes Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Documentation
Guides
Send feedback
Serve Gemma open models using GPUs on GKE with Triton and TensorRT-LLM
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This tutorial demonstrates how to deploy and serve a
Gemma
large language model (LLM) using GPUs on Google Kubernetes Engine (GKE) with the
NVIDIA Triton and
TensorRT-LLM
serving stack. This provides a foundation for understanding and exploring
practical LLM deployment for inference in a managed Kubernetes environment. You
deploy a pre-built container with Triton and TensorRT-LLM to GKE.
You also configure GKE to load the Gemma 2B and
7B weights.
Tip: For production deployments on GKE, we strongly recommend using Inference Quickstart to get tailored best practices and
configurations for your model inference.
This tutorial is intended for Machine learning (ML) engineers,
Platform admins and operators, and for Data and AI specialists who are interested
in using Kubernetes container orchestration capabilities for serving LLMs on
H100, A100, and L4 GPU hardware. To learn more about common roles and example
tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
If you need a unified managed AI platform to rapidly build and serve ML models
cost effectively, we recommend that you try our
Vertex AI deployment solution.
Before reading this page, ensure that you're familiar with the following:
Autopilot mode and Standard mode
Current GPU version availability
GPUs in GKE
Background
This section describes the key technologies used in this guide.
Gemma
Gemma is
a set of openly available, lightweight, generative artificial intelligence (AI)
models released under an open license. These AI models are available to run
in your applications, hardware, mobile devices, or hosted services.
You can use the Gemma models for text generation, however you can also
tune these models for specialized tasks.
To learn more, see the Gemma documentation .
GPUs
GPUs let you accelerate specific workloads running on your nodes such as machine
learning and data processing. GKE provides a range of machine
type options for node configuration, including machine types with NVIDIA H100,
L4, and A100 GPUs.
TensorRT-LLM
NVIDIA TensorRT-LLM (TRT-LLM) is a toolkit with a Python API for assembling
optimized solutions to define LLMs and build TensorRT engines that perform
inference efficiently on NVIDIA GPUs. TensorRT-LLM includes features such as:
Optimized transformer implementation with layer fusions, activation caching,
memory buffer reuse, and PagedAttention
In-flight or continuous batching to improve the overall serving throughput
Tensor parallelism and pipeline parallelism for distributed serving on multiple GPUs
Quantization (FP16, FP8, INT8)
To learn more, refer to the TensorRT-LLM documentation .
Triton
NVIDIA Triton Inference Server is a open source inference server for AI/ML
applications. Triton supports high-performance inference on both NVIDIA GPUs and
CPUs with optimized backends, including TensorRT and TensorRT-LLM. Triton includes
features such as:
Multi-GPU, multi-node inference
Concurrent multiple model execution
Model ensembling or chaining
Static, dynamic, and continuous or in-flight batching of prediction requests
To learn more, refer to the Triton documentation .
Objectives
Prepare your environment with a GKE cluster in
Autopilot mode.
Deploy a container with Triton and TritonRT-LLM to your cluster.
Use Triton and TensorRT-LLM to serve the Gemma 2B or 7B model through curl.
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
Enable the required API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
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
Enable the required API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Make sure that you have the following role or roles on the project:
roles/container.admin, roles/iam.serviceAccountAdmin
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
Create a Kaggle account, if you don't already have one.
Ensure your project has sufficient quota for L4 GPUs. To learn more, see About GPUs and Allocation quotas .
Prepare your environment
In this tutorial, you use Cloud Shell to manage resources hosted on
Google Cloud. Cloud Shell comes preinstalled with the software you'll need
for this tutorial, including
kubectl and
gcloud CLI .
To set up your environment with Cloud Shell, follow these steps:
In the Google Cloud console, launch a Cloud Shell session by clicking
Activate Cloud Shell in the Google Cloud console . This launches a session in the
bottom pane of Google Cloud console.
Set the default environment variables:
gcloud config set project PROJECT_ID
gcloud config set billing/quota_project PROJECT_ID
export PROJECT_ID = $( gcloud config get project )
export CONTROL_PLANE_LOCATION = CONTROL_PLANE_LOCATION
export CLUSTER_NAME = CLUSTER_NAME
Replace the following values:
PROJECT_ID : your Google Cloud
project ID .
CONTROL_PLANE_LOCATION : the Compute Engine
region of the control plane of your
cluster. This region must support the accelerator
type you want to use, for example, us-central1 for L4 GPU.
CLUSTER_NAME : the name of your cluster.
Get access to the model
To get access to the Gemma models, you must sign in to the Kaggle platform, and
get a Kaggle API token.
Sign the license consent agreement
You must sign the consent agreement to use Gemma. Follow these instructions:
Access the model consent page
on Kaggle.com.
Login to Kaggle if you haven't done so already.
Click Request Access .
In the Choose Account for Consent section, select Verify via Kaggle Account
to use your Kaggle account for consent.
Accept the model Terms and Conditions .
Generate an access token
To access the model through Kaggle, you need a Kaggle API token. Follow these
steps to generate a new token if you don't have one already:
In your browser, go to Kaggle settings .
Under the API section, click Create New Token .
A file named kaggle.json file is downloaded.
Upload the access token to Cloud Shell
In Cloud Shell, upload the Kaggle API token to your Google Cloud
project:
In Cloud Shell, click more_vert More >
Upload .
Select File and click Choose Files .
Open the kaggle.json file.
Click Upload .
Create and configure Google Cloud resources
Follow these instructions to create the required resources.
Note: You may need to create a capacity reservation for usage of some accelerators. To learn how
to reserve and consume reserved resources, see Consuming reserved zonal resources .
Create a GKE cluster and node pool
You can serve Gemma on GPUs in a GKE Autopilot
or Standard cluster. We recommend that you use a Autopilot
cluster for a fully managed Kubernetes experience. To choose the GKE mode of operation that's the best fit for your workloads, see Choose a GKE mode of operation .
Autopilot
In Cloud Shell, run the following command:
gcloud container clusters create-auto CLUSTER_NAME \
--project = PROJECT_ID \
--location = CONTROL_PLANE_LOCATION \
--release-channel = rapid \
--cluster-version = 1 .28
Replace the following values:
PROJECT_ID : your Google Cloud
project ID .
CONTROL_PLANE_LOCATION : the Compute Engine
region of the control plane of your
cluster. This region must support the accelerator
type you want to use, for example, us-central1 for L4 GPU.
CLUSTER_NAME : the name of your cluster.
GKE creates an Autopilot cluster with CPU and GPU
nodes as requested by the deployed workloads.
Standard
In Cloud Shell, run the following command to create a Standard
cluster:
gcloud container clusters create CLUSTER_NAME \
--project = PROJECT_ID \
--location = CONTROL_PLANE_LOCATION \
--workload-pool = PROJECT_ID .svc.id.goog \
--release-channel = rapid \
--machine-type = e2-standard-4 \
--num-nodes = 1
Replace the following values:
PROJECT_ID : your Google Cloud
project ID .
CONTROL_PLANE_LOCATION : the Compute Engine
region of the control plane of your
cluster. This region must support the accelerator
type you want to use, for example, us-central1 for L4 GPU.
CLUSTER_NAME : the name of your cluster.
The cluster creation might take several minutes.
Run the following command to create a
node pool for your cluster:
gcloud container node-pools create gpupool \
--accelerator type = nvidia-l4,count = 1 ,gpu-driver-version = latest \
--project = PROJECT_ID \
--location = CONTROL_PLANE_LOCATION \
--cluster = CLUSTER_NAME \
--machine-type = g2-standard-12 \
--num-nodes = 1
GKE creates a single node pool containing one L4 GPU node.
Create Kubernetes Secret for Kaggle credentials
In this tutorial, you use a Kubernetes Secret for the Kaggle credentials.
In Cloud Shell, do the following:
Configure kubectl to communicate with your cluster:
gcloud container clusters get-credentials CLUSTER_NAME \
--location = CONTROL_PLANE_LOCATION
Replace the following values:
CONTROL_PLANE_LOCATION : the Compute Engine
region of the control plane of your
cluster. This region must support the accelerator
type you want to use, for example, us-central1 for L4 GPU.
CLUSTER_NAME : the name of your cluster.
Create a Secret to store the Kaggle credentials:
kubectl create secret generic kaggle-secret \
--from-file = kaggle.json \
--dry-run = client -o yaml | kubectl apply -f -
Create a PersistentVolume resource to store checkpoints
In this section, you create a PersistentVolume backed by a persistent disk to store the model checkpoints.
Create the following trtllm_checkpoint_pv.yaml manifest:
apiVersion : v1
kind : PersistentVolumeClaim
metadata :
name : model-data
spec :
accessModes :
- ReadWriteOnce
resources :
requests :
storage : 100G
Apply the manifest:
kubectl apply -f trtllm_checkpoint_pv.yaml
Download the TensorRT-LLM engine files for Gemma
In this section, you run a Kubernetes Job to complete the following tasks:
Download the TensorRT-LLM engine files and store the files in the
PersistentVolume you created earlier.
Prepare configuration files
for deploying the model on the Triton server.
A Job controller in Kubernetes creates one or more
Pods and helps ensure that they successfully execute a specific
task.
The following process can take a few minutes.
Gemma 2B-it
The TensorRT-LLM engine is built from the Gemma 2B-it (instruction tuned)
PyTorch checkpoint of Gemma using bfloat16 activation, input sequence length=2048,
and output sequence length=1024 targeted L4 GPUs. You can deploy the model on a
single L4 GPU.
Create the following job-download-gemma-2b.yaml manifest:
apiVersion : v1
kind : ConfigMap
metadata :
name : fetch-model-scripts
data :
fetch_model.sh : |-
#!/usr/bin/bash -x
pip install kaggle --break-system-packages && \
MODEL_NAME=$(echo ${MODEL_PATH} | awk -F'/' '{print $2}') && \
VARIATION_NAME=$(echo ${MODEL_PATH} | awk -F'/' '{print $4}') && \
ACTIVATION_DTYPE=bfloat16 && \
TOKENIZER_DIR=/data/trt_engine/${MODEL_NAME}/${VARIATION_NAME}/${ACTIVATION_DTYPE}/${WORLD_SIZE}-gpu/tokenizer.model && \
ENGINE_PATH=/data/trt_engine/${MODEL_NAME}/${VARIATION_NAME}/${ACTIVATION_DTYPE}/${WORLD_SIZE}-gpu/ && \
TRITON_MODEL_REPO=/data/triton/model_repository && \
mkdir -p /data/${MODEL_NAME}_${VARIATION_NAME} && \
mkdir -p ${ENGINE_PATH} && \
mkdir -p ${TRITON_MODEL_REPO} && \
kaggle models instances versions download ${MODEL_PATH} --untar -p /data/${MODEL_NAME}_${VARIATION_NAME} && \
rm -f /data/${MODEL_NAME}_${VARIATION_NAME}/*.tar.gz && \
find /data/${MODEL_NAME}_${VARIATION_NAME} -type f && \
find /data/${MODEL_NAME}_${VARIATION_NAME} -type f | xargs -I '{}' mv '{}' ${ENGINE_PATH} && \
# copying configuration files
echo -e "\nCreating configuration files" && \
cp -r /tensorrtllm_backend/all_models/inflight_batcher_llm/* ${TRITON_MODEL_REPO} && \
# updating configuration files
python3 /tensorrtllm_backend/tools/fill_template.py -i ${TRITON_MODEL_REPO}/preprocessing/config.pbtxt tokenizer_dir:${TOKENIZER_DIR},tokenizer_type:sp,triton_max_batch_size:64,preprocessing_instance_count:1 && \
python3 /tensorrtllm_backend/tools/fill_template.py -i ${TRITON_MODEL_REPO}/postprocessing/config.pbtxt tokenizer_dir:${TOKENIZER_DIR},tokenizer_type:sp,triton_max_batch_size:64,postprocessing_instance_count:1 && \
python3 /tensorrtllm_backend/tools/fill_template.py -i ${TRITON_MODEL_REPO}/tensorrt_llm_bls/config.pbtxt triton_max_batch_size:64,decoupled_mode:False,bls_instance_count:1,accumulate_tokens:False && \
python3 /tensorrtllm_backend/tools/fill_template.py -i ${TRITON_MODEL_REPO}/ensemble/config.pbtxt triton_max_batch_size:64 && \
python3 /tensorrtllm_backend/tools/fill_template.py -i ${TRITON_MODEL_REPO}/tensorrt_llm/config.pbtxt triton_max_batch_size:64,decoupled_mode:False,max_beam_width:1,engine_dir:${ENGINE_PATH},max_tokens_in_paged_kv_cache:2560,max_attention_window_size:2560,kv_cache_free_gpu_mem_fraction:0.5,exclude_input_in_output:True,enable_kv_cache_reuse:False,batching_strategy:inflight_batching,max_queue_delay_microseconds:600,batch_scheduler_policy:guaranteed_no_evict,enable_trt_overlap:False && \
echo -e "\nCompleted extraction to ${ENGINE_PATH}"
---
apiVersion : batch/v1
kind : Job
metadata :
name : data-loader-gemma-2b
labels :
app : data-loader-gemma-2b
spec :
ttlSecondsAfterFinished : 120
template :
metadata :
labels :
app : data-loader-gemma-2b
spec :
restartPolicy : OnFailure
containers :
- name : gcloud
image : us-docker.pkg.dev/google-samples/containers/gke/tritonserver:2.42.0
command :
- /scripts/fetch_model.sh
env :
- name : KAGGLE_CONFIG_DIR
value : /kaggle
- name : MODEL_PATH
value : "google/gemma/tensorrtllm/2b-it/2"
- name : WORLD_SIZE
value : "1"
volumeMounts :
- mountPath : "/kaggle/"
name : kaggle-credentials
readOnly : true
- mountPath : "/scripts/"
name : scripts-volume
readOnly : true
- mountPath : "/data"
name : data
volumes :
- name : kaggle-credentials
secret :
defaultMode : 0400
secretName : kaggle-secret
- name : scripts-volume
configMap :
defaultMode : 0700
name : fetch-model-scripts
- name : data
persistentVolumeClaim :
claimName : model-data
tolerations :
- key : "key"
operator : "Exists"
effect : "NoSchedule"
Apply the manifest:
kubectl apply -f job-download-gemma-2b.yaml
View the logs for the Job:
kubectl logs -f job/data-loader-gemma-2b
The output from the logs is similar to the following:
...
Creating configuration files
+ echo -e '\n02-16-2024 04:07:45 Completed building TensortRT-LLM engine at /data/trt_engine/gemma/2b/bfloat16/1-gpu/'
+ echo -e '\nCreating configuration files'
...
Wait for the Job to complete:
kubectl wait --for = condition = complete --timeout = 900s job/data-loader-gemma-2b
The output is similar to the following:
job.batch/data-loader-gemma-2b condition met
Verify the Job completed successfully (this may take a few minutes):
kubectl get job/data-loader-gemma-2b
The output is similar to the following:
NAME COMPLETIONS DURATION AGE
data-loader-gemma-2b 1/1 ##s #m##s
Gemma 7B-it
The TensorRT-LLM engine is built from the Gemma 7B-it (instruction tuned)
PyTorch checkpoint of Gemma using bfloat16 activation, input sequence length=1024,
and output sequence length=512 targeted L4 GPUs. You can deploy the model on a
single L4 GPU.
Create the following job-download-gemma-7b.yaml manifest:
apiVersion : v1
kind : ConfigMap
metadata :
name : fetch-model-scripts
data :
fetch_model.sh : |-
#!/usr/bin/bash -x
pip install kaggle --break-system-packages && \
MODEL_NAME=$(echo ${MODEL_PATH} | awk -F'/' '{print $2}') && \
VARIATION_NAME=$(echo ${MODEL_PATH} | awk -F'/' '{print $4}') && \
ACTIVATION_DTYPE=bfloat16 && \
TOKENIZER_DIR=/data/trt_engine/${MODEL_NAME}/${VARIATION_NAME}/${ACTIVATION_DTYPE}/${WORLD_SIZE}-gpu/tokenizer.model && \
ENGINE_PATH=/data/trt_engine/${MODEL_NAME}/${VARIATION_NAME}/${ACTIVATION_DTYPE}/${WORLD_SIZE}-gpu/ && \
TRITON_MODEL_REPO=/data/triton/model_repository && \
mkdir -p ${ENGINE_PATH} && \
mkdir -p ${TRITON_MODEL_REPO} && \
kaggle models instances versions download ${MODEL_PATH} --untar -p /data/${MODEL_NAME}_${VARIATION_NAME} && \
rm -f /data/${MODEL_NAME}_${VARIATION_NAME}/*.tar.gz && \
find /data/${MODEL_NAME}_${VARIATION_NAME} -type f && \
find /data/${MODEL_NAME}_${VARIATION_NAME} -type f | xargs -I '{}' mv '{}' ${ENGINE_PATH} && \
# copying configuration files
echo -e "\nCreating configuration files" && \
cp -r /tensorrtllm_backend/all_models/inflight_batcher_llm/* ${TRITON_MODEL_REPO} && \
# updating configuration files
python3 /tensorrtllm_backend/tools/fill_template.py -i ${TRITON_MODEL_REPO}/preprocessing/config.pbtxt tokenizer_dir:${TOKENIZER_DIR},tokenizer_type:sp,triton_max_batch_size:64,preprocessing_instance_count:1 && \
python3 /tensorrtllm_backend/tools/fill_template.py -i ${TRITON_MODEL_REPO}/postprocessing/config.pbtxt tokenizer_dir:${TOKENIZER_DIR},tokenizer_type:sp,triton_max_batch_size:64,postprocessing_instance_count:1 && \
python3 /tensorrtllm_backend/tools/fill_template.py -i ${TRITON_MODEL_REPO}/tensorrt_llm_bls/config.pbtxt triton_max_batch_size:64,decoupled_mode:False,bls_instance_count:1,accumulate_tokens:False && \
python3 /tensorrtllm_backend/tools/fill_template.py -i ${TRITON_MODEL_REPO}/ensemble/config.pbtxt triton_max_batch_size:64 && \
python3 /tensorrtllm_backend/tools/fill_template.py -i ${TRITON_MODEL_REPO}/tensorrt_llm/config.pbtxt triton_max_batch_size:64,decoupled_mode:False,max_beam_width:1,engine_dir:${ENGINE_PATH},max_tokens_in_paged_kv_cache:2560,max_attention_window_size:2560,kv_cache_free_gpu_mem_fraction:0.5,exclude_input_in_output:True,enable_kv_cache_reuse:False,batching_strategy:inflight_batching,max_queue_delay_microseconds:600,batch_scheduler_policy:guaranteed_no_evict,enable_trt_overlap:False && \
echo -e "\nCompleted extraction to ${ENGINE_PATH}"
---
apiVersion : batch/v1
kind : Job
metadata :
name : data-loader-gemma-7b
labels :
app : data-loader-gemma-7b
spec :
ttlSecondsAfterFinished : 120
template :
metadata :
labels :
app : data-loader-gemma-7b
spec :
restartPolicy : OnFailure
containers :
- name : gcloud
image : us-docker.pkg.dev/google-samples/containers/gke/tritonserver:2.42.0
command :
- /scripts/fetch_model.sh
env :
- name : KAGGLE_CONFIG_DIR
value : /kaggle
- name : MODEL_PATH
value : "google/gemma/tensorrtllm/7b-it/2"
- name : WORLD_SIZE
value : "1"
volumeMounts :
- mountPath : "/kaggle/"
name : kaggle-credentials
readOnly : true
- mountPath : "/scripts/"
name : scripts-volume
readOnly : true
- mountPath : "/data"
name : data
volumes :
- name : kaggle-credentials
secret :
defaultMode : 0400
secretName : kaggle-secret
- name : scripts-volume
configMap :
defaultMode : 0700
name : fetch-model-scripts
- name : data
persistentVolumeClaim :
claimName : model-data
tolerations :
- key : "key"
operator : "Exists"
effect : "NoSchedule"
Apply the manifest:
kubectl apply -f job-download-gemma-7b.yaml
View the logs for the Job:
kubectl logs -f job/data-loader-gemma-7b
The output from the logs is similar to the following:
...
Creating configuration files
+ echo -e '\n02-16-2024 04:07:45 Completed building TensortRT-LLM engine at /data/trt_engine/gemma/7b/bfloat16/1-gpu/'
+ echo -e '\nCreating configuration files'
...
Wait for the Job to complete:
kubectl wait --for = condition = complete --timeout = 900s job/data-loader-gemma-7b
The output is similar to the following:
job.batch/data-loader-gemma-7b condition met
Verify the Job completed successfully (this may take a few minutes):
kubectl get job/data-loader-gemma-7b
The output is similar to the following:
NAME COMPLETIONS DURATION AGE
data-loader-gemma-7b 1/1 ##s #m##s
Make sure the Job is completed successfully before proceeding to the next section.
Deploy Triton
In this section, you deploy a container that uses Triton with the TensorRT-LLM
backend to serve the Gemma model you want to use.
Create the following deploy-triton-server.yaml manifest:
apiVersion : v1
kind : ConfigMap
metadata :
name : launch-tritonserver
data :
entrypoint.sh : |-
#!/usr/bin/bash -x
# Launch Triton Inference server
WORLD_SIZE=1
TRITON_MODEL_REPO=/data/triton/model_repository
python3 /tensorrtllm_backend/scripts/launch_triton_server.py \
--world_size ${WORLD_SIZE} \
--model_repo ${TRITON_MODEL_REPO}
tail -f /dev/null
---
apiVersion : apps/v1
kind : Deployment
metadata :
name : triton-gemma-deployment
labels :
app : gemma-server
version : v1
spec :
replicas : 1
selector :
matchLabels :
app : gemma-server
version : v1
template :
metadata :
labels :
app : gemma-server
ai.gke.io/model : gemma
ai.gke.io/inference-server : triton
examples.ai.gke.io/source : user-guide
version : v1
spec :
containers :
- name : inference-server
image : us-docker.pkg.dev/google-samples/containers/gke/tritonserver:2.42.0
imagePullPolicy : IfNotPresent
resources :
requests :
ephemeral-storage : "40Gi"
memory : "40Gi"
nvidia.com/gpu : 1
limits :
ephemeral-storage : "40Gi"
memory : "40Gi"
nvidia.com/gpu : 1
command :
- /scripts/entrypoint.sh
volumeMounts :
- mountPath : "/scripts/"
name : scripts-volume
readOnly : true
- mountPath : "/data"
name : data
ports :
- containerPort : 8000
name : http
- containerPort : 8001
name : grpc
- containerPort : 8002
name : metrics
livenessProbe :
failureThreshold : 60
initialDelaySeconds : 600
periodSeconds : 5
httpGet :
path : /v2/health/live
port : http
readinessProbe :
failureThreshold : 60
initialDelaySeconds : 600
periodSeconds : 5
httpGet :
path : /v2/health/ready
port : http
securityContext :
runAsUser : 1000
fsGroup : 1000
volumes :
- name : scripts-volume
configMap :
defaultMode : 0700
name : launch-tritonserver
- name : data
persistentVolumeClaim :
claimName : model-data
nodeSelector :
cloud.google.com/gke-accelerator : nvidia-l4
tolerations :
- key : "key"
operator : "Exists"
effect : "NoSchedule"
---
apiVersion : v1
kind : Service
metadata :
name : triton-server
labels :
app : gemma-server
spec :
type : ClusterIP
ports :
- port : 8000
targetPort : http
name : http-inference-server
- port : 8001
targetPort : grpc
name : grpc-inference-server
- port : 8002
targetPort : metrics
name : http-metrics
selector :
app : gemma-server
Apply the manifest:
kubectl apply -f deploy-triton-server.yaml
Wait for the deployment to be available:
kubectl wait --for = condition = Available --timeout = 900s deployment/triton-gemma-deployment
View the logs from manifest:
kubectl logs -f -l app = gemma-server
The deployment resource launches the Triton server and loads the model data.
This process can take a few minutes (up to 20 minutes or longer). The output
is similar to the following:
I0216 03:24:57.387420 29 server.cc:676]
+------------------+---------+--------+
| Model | Version | Status |
+------------------+---------+--------+
| ensemble | 1 | READY |
| postprocessing | 1 | READY |
| preprocessing | 1 | READY |
| tensorrt_llm | 1 | READY |
| tensorrt_llm_bls | 1 | READY |
+------------------+---------+--------+
....
....
....
I0216 03:24:57.425104 29 grpc_server.cc:2519] Started GRPCInferenceService at 0.0.0.0:8001
I0216 03:24:57.425418 29 http_server.cc:4623] Started HTTPService at 0.0.0.0:8000
I0216 03:24:57.466646 29 http_server.cc:315] Started Metrics Service at 0.0.0.0:8002
Serve the model
In this section, you interact with the model.
Set up port forwarding
Run the following command to set up port forwarding to the model:
kubectl port-forward service/triton-server 8000 :8000
The output is similar to the following:
Forwarding from 127.0.0.1:8000 -> 8000
Forwarding from [::1]:8000 -> 8000
Handling connection for 8000
Interact with the model using curl
This section shows how you can perform a basic smoke test to verify your deployed
instruction tuned model. For simplicity, this section describes
the testing approach only using the 2B instruction tuned model.
In a new terminal session, use curl to chat with your model:
USER_PROMPT = "I'm new to coding. If you could only recommend one programming language to start with, what would it be and why?"
curl -X POST localhost:8000/v2/models/ensemble/generate \
-H "Content-Type: application/json" \
-d @- <<EOF
{
"text_input" : "<start_of_turn>user\n ${ USER_PROMPT } < end_of_turn>\n" ,
"temperature" : 0 .9,
"max_tokens" : 128
}
EOF
The following output shows an example of the model response:
{
"context_logits": 0,
"cum_log_probs": 0,
"generation_logits": 0,
"model_name": "ensemble",
"model_version": "1",
"output_log_probs": [0.0,0.0,...],
"sequence_end": false,
"sequence_id": 0,
"sequence_start": false,
"text_output":"Python.\n\nPython is an excellent choice for beginners due to its simplicity, readability, and extensive documentation. Its syntax is close to natural language, making it easier for beginners to understand and write code. Python also has a vast collection of libraries and tools that make it versatile for various projects. Additionally, Python's dynamic nature allows for easier learning and experimentation, making it a perfect choice for newcomers to get started.Here are some specific reasons why Python is a good choice for beginners:\n\n- Simple and Easy to Read: Python's syntax is designed to be close to natural language, making it easier for"
}
Success: You've successfully served Gemma using GPUs on
GKE with Triton and TensorRT-LLM.
Troubleshoot issues
If you get the message Empty reply from server , it's possible the container has not finished downloading the model data. Check the Pod's logs again for the Connected message which indicates that the model is ready to serve.
If you see Connection refused , verify that your port forwarding is active .
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete the deployed resources
To avoid incurring charges to your Google Cloud account for the resources
that you created in this guide, run the following command:
gcloud container clusters delete CLUSTER_NAME \
--location = CONTROL_PLANE_LOCATION
What's next
Learn more about GPUs in
GKE .
Learn how to deploy GPU workloads in Autopilot .
Learn how to deploy GPU workloads in Standard .
Explore the TensorRT-LLM GitHub repository
and documentation .
Explore the Vertex AI Model Garden .
Discover how to run optimized AI/ML workloads with GKE
platform orchestration
capabilities .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
