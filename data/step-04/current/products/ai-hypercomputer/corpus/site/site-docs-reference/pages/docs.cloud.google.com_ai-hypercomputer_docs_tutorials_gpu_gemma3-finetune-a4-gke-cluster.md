---
title: "Fine-tune Gemma 3 on an A4 GKE cluster \_|\_ AI Hypercomputer \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/gemma3-finetune-a4-gke-cluster
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/cluster-capabilities
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/gemma3-finetune-a4-gke-cluster
  title: "Fine-tune Gemma 3 on an A4 GKE cluster \_|\_ AI Hypercomputer \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
AI Hypercomputer
Guides
Send feedback
Fine-tune Gemma 3 on an A4 GKE cluster
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows you how to fine-tune a
Gemma 3
large language model (LLM) on a multi-node, multi-GPU GKE cluster on Google Cloud.
This cluster uses an A4 virtual machine (VM) instance which has 8 NVIDIA B200 GPUs.
The two main processes described in this tutorial are as follows:
Deploy a high-performance GKE cluster by using
GKE Autopilot. As part of this deployment,
you create a custom VM image with the necessary software pre-installed.
After the cluster is deployed, you run a distributed fine-tuning job by
using the set of scripts that accompany this tutorial. The job leverages
the
Hugging Face Accelerate library .
Important: To complete this tutorial, you must have reserved the capacity to
create an A4 VM. To
learn more about your options for reserving capacity in
AI Hypercomputer for a future date and time, see
Choose a consumption option .
This tutorial is intended for machine learning (ML) engineers, researchers,
platform administrators and operators, and for data and AI specialists who are
interested in deploying GKE clusters on Google Cloud to train LLMs.
Objectives
Access the Gemma 3 model by using Hugging Face.
Prepare your environment.
Create and deploy an A4 GKE cluster.
Fine-tune the Gemma 3 model by using the Hugging Face
Accelerate library with fully sharded data parallel (FSDP).
Monitor your job.
Clean up.
Costs
In this document, you use the following billable components of Google Cloud:
Compute Engine
Google Kubernetes Engine (GKE)
Filestore
Cloud Storage
Cloud Logging
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
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
Enable the required API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable gcloud services enable compute.googleapis.com container.googleapis.com
file.googleapis.com logging.googleapis.com cloudresourcemanager.googleapis.com servicenetworking.googleapis.com
Install the Google Cloud CLI.
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
Enable the required API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable gcloud services enable compute.googleapis.com container.googleapis.com
file.googleapis.com logging.googleapis.com cloudresourcemanager.googleapis.com servicenetworking.googleapis.com
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/compute.admin, roles/iam.serviceAccountUser, roles/cloudbuild.builds.editor, roles/artifactregistry.admin, roles/storage.admin,
roles/serviceusage.serviceUsageAdmin
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Enable the default service account for your Google Cloud project:
gcloud iam service-accounts enable PROJECT_NUMBER -compute@developer.gserviceaccount.com \
--project = PROJECT_ID
Replace PROJECT_NUMBER with your project number. To review your
project number, see
Get an existing project .
Grant the Editor role ( roles/editor ) to the default service
account:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = "serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com" \
--role = roles/editor
Create local authentication credentials for your user account:
gcloud auth application-default login
Note : If you use a local shell and an external identity provider
(IdP), and you encounter an authentication error after running the preceding
command, then
sign in to the
gcloud CLI with your federated identity .
Enable OS Login for your project:
gcloud compute project-info add-metadata --metadata = enable-oslogin = TRUE
Sign in to or create a Hugging Face
account .
Access Gemma 3 by using Hugging Face
To use Hugging Face to access Gemma 3, do the following:
Sign in to Hugging Face
Create a Hugging Face read access token .
Click Your Profile > Settings > Access tokens > +Create new token
Copy and save the read access token value. You use it later in
this tutorial.
Prepare your environment
To prepare your environment, set the following:
gcloud config set project PROJECT_NAME
gcloud config set billing/quota_project PROJECT_NAME
export RESERVATION= YOUR_RESERVATION_ID
export PROJECT_ID=$(gcloud config get project)
export REGION= CLUSTER_REGION
export CLUSTER_NAME= CLUSTER_NAME
export HF_TOKEN= YOUR_TOKEN
export NETWORK=default
Replace the following:
PROJECT_NAME : the name of the Google Cloud project
where you want to create the GKE cluster.
YOUR_RESERVATION_ID : the identifier for your reserved capacity.
CLUSTER_REGION : the region where you want to create your
GKE cluster. You can only create the cluster in the region
where you reservation exists.
CLUSTER_NAME : the name of the GKE cluster
to create.
HF_TOKEN : the Hugging Face access token that
you created in the previous section.
Create a GKE cluster in Autopilot mode
To create a GKE cluster in Autopilot mode, run the
following command:
gcloud container clusters create-auto ${CLUSTER_NAME} \
--project=${PROJECT_ID} \
--location=${REGION} \
--release-channel=rapid
Creating the GKE cluster might take some time to complete. To
verify that Google Cloud has finished creating your cluster, go to
Kubernetes clusters
on the Google Cloud console.
Create a Kubernetes secret for Hugging Face credentials
To create a Kubernetes secret for Hugging Face credentials, follow these steps:
Configure kubectl to communicate with your GKE cluster:
gcloud container clusters get-credentials $CLUSTER_NAME \
--location=$REGION
Create a Kubernetes secret to store your Hugging Face token:
gcloud container clusters get-credentials ${CLUSTER_NAME} \
--location=${REGION}
kubectl create secret generic hf-secret \
--from-literal=hf_api_token=${HF_TOKEN} \
--dry-run=client -o yaml | kubectl apply -f -
Prepare your workload
To prepare your workload, you do the following:
Create workload scripts .
Use Docker and Cloud Build to create a fine-tuning container .
Create workload scripts
To create the scripts that your fine-tuning workload uses, do the following:
Create a directory for the workload scripts. Use this directory as your working
directory.
mkdir llm-finetuning-gemma
cd llm-finetuning-gemma
Create the cloudbuild.yaml file to use Google Cloud Build. This
file creates your workload container and stores it in Artifact Registry:
steps:
- name: 'gcr.io/cloud-builders/docker'
args: [ 'build' , '-t' , 'us-docker.pkg.dev/$PROJECT_ID/gemma/finetune-gemma-gpu:1.0.0' , '.' ]
images:
- 'us-docker.pkg.dev/$PROJECT_ID/gemma/finetune-gemma-gpu:1.0.0'
Create a Dockerfile file to execute the fine-tuning job:
FROM nvidia/cuda:12.8.1-cudnn-devel-ubuntu24.04
RUN apt-get update && \
apt-get -y install python3 python3-dev gcc python3-pip python3-venv git curl vim
RUN python3 -m venv /opt/venv
ENV PATH = "/opt/venv/bin:/usr/local/nvidia/bin: $PATH "
ENV LD_LIBRARY_PATH = "/usr/local/nvidia/lib64: $LD_LIBRARY_PATH "
RUN pip3 install setuptools wheel packaging ninja
RUN pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu128
RUN pip3 install \
transformers == 4 .53.3 \
datasets == 4 .0.0 \
accelerate == 1 .9.0 \
evaluate == 0 .4.5 \
bitsandbytes == 0 .46.1 \
trl == 0 .19.1 \
peft == 0 .16.0 \
tensorboard == 2 .20.0 \
protobuf == 6 .31.1 \
sentencepiece == 0 .2.0
COPY finetune.py /finetune.py
COPY accel_fsdp_gemma3_config.yaml /accel_fsdp_gemma3_config.yaml
CMD accelerate launch --config_file accel_fsdp_gemma3_config.yaml finetune.py
Note: This tutorial doesn't use the latest versions of NVIDIA and Pytorch
dependencies. If you need newer dependencies, then see the
NVIDIA documentation and the
Pytorch documentation .
Create the accel_fsdp_gemma3_config.yaml file. This configuration file
directs Hugging Face Accelerate to split the tuning job across multiple GPUs.
compute_environment: LOCAL_MACHINE
debug: false
distributed_type: FSDP
downcast_bf16: 'no'
enable_cpu_affinity: false
fsdp_config:
fsdp_activation_checkpointing: false
fsdp_auto_wrap_policy: TRANSFORMER_BASED_WRAP
fsdp_cpu_ram_efficient_loading: true
fsdp_offload_params: false
fsdp_reshard_after_forward: true
fsdp_state_dict_type: FULL_STATE_DICT
fsdp_transformer_layer_cls_to_wrap: Gemma3DecoderLayer
fsdp_version: 2
machine_rank: 0
main_training_function: main
mixed_precision: bf16
num_machines: 1
num_processes: 8
rdzv_backend: static
same_network: true
tpu_env: []
tpu_use_cluster: false
tpu_use_sudo: false
use_cpu: false
Create the finetune.yaml file:
apiVersion: batch/v1
kind: Job
metadata:
name: finetune-job
namespace: default
spec:
backoffLimit: 2
template:
metadata:
annotations:
kubectl.kubernetes.io/default-container: finetuner
spec:
terminationGracePeriodSeconds: 600
containers:
- name: finetuner
image: $IMAGE_URL
command: ["accelerate","launch"]
args:
- "--config_file"
- "accel_fsdp_gemma3_config.yaml"
- "finetune.py"
- "--model_id"
- "google/gemma-3-12b-pt"
- "--output_dir"
- "gemma-12b-text-to-sql"
- "--per_device_train_batch_size"
- "8"
- "--gradient_accumulation_steps"
- "8"
- "--num_train_epochs"
- "3"
- "--learning_rate"
- "1e-5"
- "--save_strategy"
- "steps"
- "--save_steps"
- "100"
resources:
limits:
nvidia.com/gpu: "8"
env:
- name: HF_TOKEN
valueFrom:
secretKeyRef:
name: hf-secret
key: hf_api_token
volumeMounts:
- mountPath: /dev/shm
name: dshm
volumes:
- name: dshm
emptyDir:
medium: Memory
nodeSelector:
cloud.google.com/gke-accelerator: nvidia-b200
cloud.google.com/reservation-name: $RESERVATION
cloud.google.com/reservation-affinity: "specific"
cloud.google.com/gke-gpu-driver-version: latest
restartPolicy: OnFailure
Create the finetune.py file:
import torch
import argparse
import subprocess
from datasets import load_dataset
from transformers import AutoTokenizer , AutoModelForCausalLM , BitsAndBytesConfig , AutoConfig
from peft import LoraConfig , prepare_model_for_kbit_training , get_peft_model
from trl import SFTTrainer , SFTConfig
from huggingface_hub import login
def get_args ():
parser = argparse . ArgumentParser ()
parser . add_argument ( "--model_id" , type = str , default = "google/gemma-3-12b-pt" , help = "Hugging Face model ID" )
parser . add_argument ( "--hf_token" , type = str , default = None , help = "Hugging Face token for private models" )
parser . add_argument ( "--trust_remote" , type = bool , default = "False" , help = "Trust remote code when loading tokenizer" )
parser . add_argument ( "--use_fast" , type = bool , default = "True" , help = "Determines if a fast Rust-based tokenizer should be used" )
parser . add_argument ( "--dataset_name" , type = str , default = "philschmid/gretel-synthetic-text-to-sql" , help = "Hugging Face dataset name" )
parser . add_argument ( "--output_dir" , type = str , default = "gemma-12b-text-to-sql" , help = "Directory to save model checkpoints" )
# LoRA arguments
parser . add_argument ( "--lora_r" , type = int , default = 16 , help = "LoRA attention dimension" )
parser . add_argument ( "--lora_alpha" , type = int , default = 16 , help = "LoRA alpha scaling factor" )
parser . add_argument ( "--lora_dropout" , type = float , default = 0.05 , help = "LoRA dropout probability" )
# SFTConfig arguments
parser . add_argument ( "--max_seq_length" , type = int , default = 512 , help = "Maximum sequence length" )
parser . add_argument ( "--num_train_epochs" , type = int , default = 3 , help = "Number of training epochs" )
parser . add_argument ( "--per_device_train_batch_size" , type = int , default = 8 , help = "Batch size per device during training" )
parser . add_argument ( "--gradient_accumulation_steps" , type = int , default = 1 , help = "Gradient accumulation steps" )
parser . add_argument ( "--learning_rate" , type = float , default = 1e-5 , help = "Learning rate" )
parser . add_argument ( "--logging_steps" , type = int , default = 10 , help = "Log every X steps" )
parser . add_argument ( "--save_strategy" , type = str , default = "steps" , help = "Checkpoint save strategy" )
parser . add_argument ( "--save_steps" , type = int , default = 100 , help = "Save checkpoint every X steps" )
parser . add_argument ( "--push_to_hub" , action = 'store_true' , help = "Push model back up to HF" )
parser . add_argument ( "--hub_private_repo" , type = bool , default = "True" , help = "Push to a private repo" )
return parser . parse_args ()
def main ():
args = get_args ()
# --- 1. Setup and Login ---
if args . hf_token :
login ( args . hf_token )
# --- 2. Create and prepare the fine-tuning dataset ---
# The `create_conversation` function is no longer needed.
# The SFTTrainer will use the `formatting_func` to apply the chat template.
dataset = load_dataset ( args . dataset_name , split = "train" )
dataset = dataset . shuffle () . select ( range ( 12500 ))
dataset = dataset . train_test_split ( test_size = 2500 / 12500 )
# --- 3. Configure Model and Tokenizer ---
if torch . cuda . is_available () and torch . cuda . get_device_capability ()[ 0 ] > = 8 :
torch_dtype_obj = torch . bfloat16
torch_dtype_str = "bfloat16"
else :
torch_dtype_obj = torch . float16
torch_dtype_str = "float16"
tokenizer = AutoTokenizer . from_pretrained ( args . model_id , trust_remote_code = args . trust_remote , use_fast = args . use_fast )
tokenizer . pad_token = tokenizer . eos_token
gemma_chat_template = (
""
""
)
tokenizer . chat_template = gemma_chat_template
# --- 4. Define the Formatting Function ---
# This function will be used by the SFTTrainer to format each sample
# from the dataset into the correct chat template format.
def formatting_func ( example ):
# The create_conversation logic is now implicitly handled by this.
# We need to construct the messages list here.
system_message = "You are a text to SQL query translator. Users will ask you questions in English and you will generate a SQL query based on the provided SCHEMA."
user_prompt = "Given the <USER_QUERY> and the <SCHEMA>, generate the corresponding SQL command to retrieve the desired data, considering the query's syntax, semantics, and schema constraints. \n\n < SCHEMA > \n {context} \n < /SCHEMA > \n\n < USER_QUERY > \n {question} \n < /USER_QUERY > \n "
messages = [
{ "role" : "user" , "content" : user_prompt . format ( question = example [ "sql_prompt" ][ 0 ], context = example [ "sql_context" ][ 0 ])},
{ "role" : "assistant" , "content" : example [ "sql" ][ 0 ]}
]
return tokenizer . apply_chat_template ( messages , tokenize = False )
# --- 5. Load Model and Apply PEFT ---
config = AutoConfig . from_pretrained ( args . model_id )
config . use_cache = False
# We'll be loading this model full precision because we're planning to do FSDP
# Load the base model with quantization
print ( "Loading base model..." )
model = AutoModelForCausalLM . from_pretrained (
args . model_id ,
config = config ,
attn_implementation = "eager" ,
torch_dtype = torch_dtype_obj ,
)
# Prepare the model for k-bit training
model = prepare_model_for_kbit_training ( model )
# Configure LoRA.
peft_config = LoraConfig (
lora_alpha = args . lora_alpha ,
lora_dropout = args . lora_dropout ,
r = args . lora_r ,
bias = "none" ,
target_modules = [ "q_proj" , "k_proj" , "v_proj" , "o_proj" , "gate_proj" , "up_proj" , "down_proj" ],
task_type = "CAUSAL_LM" ,
)
# Apply the PEFT config to the model
print ( "Applying PEFT configuration..." )
model = get_peft_model ( model , peft_config )
model . print_trainable_parameters ()
# --- 6. Configure Training Arguments ---
training_args = SFTConfig (
output_dir = args . output_dir ,
max_seq_length = args . max_seq_length ,
num_train_epochs = args . num_train_epochs ,
per_device_train_batch_size = args . per_device_train_batch_size ,
gradient_accumulation_steps = args . gradient_accumulation_steps ,
learning_rate = args . learning_rate ,
logging_steps = args . logging_steps ,
save_strategy = args . save_strategy ,
save_steps = args . save_steps ,
packing = False ,
label_names = [ "domain" ],
gradient_checkpointing = True ,
gradient_checkpointing_kwargs = { "use_reentrant" : False },
optim = "adamw_torch" ,
fp16 = True if torch_dtype_obj == torch . float16 else False ,
bf16 = True if torch_dtype_obj == torch . bfloat16 else False ,
max_grad_norm = 0.3 ,
warmup_ratio = 0.03 ,
lr_scheduler_type = "constant" ,
push_to_hub = True ,
report_to = "tensorboard" ,
dataset_kwargs = {
"add_special_tokens" : False ,
"append_concat_token" : True ,
}
)
# --- 7. Create Trainer and Start Training ---
trainer = SFTTrainer (
model = model ,
args = training_args ,
train_dataset = dataset [ "train" ],
eval_dataset = dataset [ "test" ],
formatting_func = formatting_func ,
)
print ( "Starting training..." )
trainer . train ()
print ( "Training finished." )
# --- 8. Save the final model ---
print ( f "Saving final model to { args . output_dir } " )
model . cpu ()
trainer . save_model ( args . output_dir )
torch . distributed . destroy_process_group ()
if __name__ == "__main__" :
main ()
Use Docker and Cloud Build to create a fine-tuning container
Create an Artifact Registry Docker Repository:
gcloud artifacts repositories create gemma \
--project = ${ PROJECT_ID } \
--repository-format = docker \
--location = us \
--description = "Gemma Repo"
In the llm-finetuning-gemma directory that you created in an earlier step,
run the following command to create the fine-tuning container and push it to
Artifact Registry.
gcloud builds submit .
Export the image URL. You use it at a later step in this tutorial:
export IMAGE_URL=us-docker.pkg.dev/${PROJECT_ID}/gemma/finetune-gemma-gpu:1.0.0
Start your fine-tuning workload
To start your fine-tuning workload, do the following:
Apply the finetune manifest to create the fine-tuning job:
envsubst < finetune.yaml | kubectl apply -f -
Because you're using clusters in GKE Autopilot
mode, it might take a few minutes to start your GPU enabled node.
Monitor the job by running the following command:
ewatch kubectl get pods
Check the logs of the job by running the following command:
kubectl logs job.batch/finetune-job -f
The job resource downloads the model data then fine-tunes the model across
all eight of the GPUs. The download takes around five minutes to complete.
After the download is complete, the fine-tuning process takes approximately
two hours and 30 minutes to complete.
Monitor your workload
You can monitor the use of the GPUs in your GKE cluster to verify that your
fine-tuning job is efficiently running. To do so, open the following link in
your browser:
https://console.cloud.google.com/kubernetes/clusters/details/us-central1/[CLUSTER_NAME]/observability?mods=monitoring_api_prod&project=[YOUR_PROJECT_ID]]&pageState=("timeRange":("duration":"PT1H"),"nav":("section":"gpu"),"groupBy":("groupByType":"namespacesTop5"))
When you monitor your workload, you can see the following:
GPUs usage : for a healthy fine-tuning job, you can expect to see
the usage of all of your 8 GPUs rise and stabilize to a high level
throughout your training.
Job duration : the job should take approximately 10 minutes to
complete on the specified A4 cluster.
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete your project
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
Delete your resources
To delete your fine-tuning job, run the following command:
kubectl delete job finetune-job
To delete your GKE cluster, run the following command:
gcloud container clusters delete $CLUSTER_NAME \
--region=$REGION
What's next
Manage AI-optimized GKE clusters
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
