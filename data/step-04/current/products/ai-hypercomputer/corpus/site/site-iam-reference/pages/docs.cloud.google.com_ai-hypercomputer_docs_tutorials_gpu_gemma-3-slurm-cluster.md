---
title: "Fine-tune Gemma 3 on an A4 Slurm cluster \_|\_ AI Hypercomputer \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/gemma-3-slurm-cluster
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/gemma-3-slurm-cluster
  title: "Fine-tune Gemma 3 on an A4 Slurm cluster \_|\_ AI Hypercomputer \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Fine-tune Gemma 3 on an A4 Slurm cluster | AI Hypercomputer | Google Cloud Documentation
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
Run inference with v LLM on GKE
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
Objectives
Costs
Before you begin
Access Gemma 3 by using Hugging Face
Prepare your environment
Create an A4 Slurm cluster
Prepare your workload Create workload scripts
Upload scripts to the Slurm cluster
Connect to the Slurm cluster
Install frameworks and tools
Start your fine-tuning workload
Monitor your workload
Clean up Delete your project
Delete your Slurm cluster
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Fine-tune Gemma 3 on an A4 Slurm cluster
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Objectives
Costs
Before you begin
Access Gemma 3 by using Hugging Face
Prepare your environment
Create an A4 Slurm cluster
Prepare your workload Create workload scripts
Upload scripts to the Slurm cluster
Connect to the Slurm cluster
Install frameworks and tools
Start your fine-tuning workload
Monitor your workload
Clean up Delete your project
Delete your Slurm cluster
What's next
This tutorial shows you how to fine-tune the
Gemma 3 large language model (LLM) on a
multi-node Slurm cluster that uses two A4 virtual machine (VM) instances. As
part of this tutorial, you do the following:
Create a custom image.
Configure an RDMA network.
Run a distributed fine-tuning job. For efficient multi-node training, you use
the Hugging Face Accelerate library with Fully Sharded Data Parallel (FSDP) .
Important: To complete this tutorial, you must have reserved the capacity to
create two A4 VMs. To
learn more about your options for reserving capacity in
AI Hypercomputer for a future date and time, see
Choose a consumption option .
This tutorial is intended for machine learning (ML) engineers, platform
administrators and operators, and for data and AI specialists who are interested
in using Slurm job scheduling capabilities to handle fine-tuning workloads.
Objectives
Access Gemma 3 by using Hugging Face.
Prepare your environment.
Create an A4 Slurm cluster.
Prepare your workload.
Run a fine-tuning job.
Monitor your job.
Clean up.
Costs
In this document, you use the following billable components of Google Cloud:
Compute Engine
GKE Enterprise
Filestore
Cloud Storage
Cloud Logging
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
Before you begin
Start by creating a Google Cloud account. With this account, you get $300 in free credits,
plus free usage of over 20 products, up to monthly limits.
Create an account
To run the commands on this page, set up the gcloud CLI in one of the following
development environments:
Cloud Shell Local shell
More
To use an online terminal with the gcloud CLI already set up, activate
Cloud Shell:
Activate Cloud Shell on this page
At the bottom of this page, a Cloud Shell session starts and displays a
command-line prompt. It can take a few seconds for the session to initialize.
To use a local development environment, follow these steps:
Install the gcloud CLI.
If you're using an external identity provider (IdP), sign in to the
gcloud CLI with your federated identity. For more information, see
Sign in to the gcloud CLI with your federated identity .
Initialize the gcloud CLI .
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
gcloud services enable compute.googleapis.com file.googleapis.com logging.googleapis.com cloudresourcemanager.googleapis.com servicenetworking.googleapis.com
To run the commands on this page, set up the gcloud CLI in one of the following
development environments:
Cloud Shell Local shell
More
To use an online terminal with the gcloud CLI already set up, activate
Cloud Shell:
Activate Cloud Shell on this page
At the bottom of this page, a Cloud Shell session starts and displays a
command-line prompt. It can take a few seconds for the session to initialize.
To use a local development environment, follow these steps:
Install the gcloud CLI.
If you're using an external identity provider (IdP), sign in to the
gcloud CLI with your federated identity. For more information, see
Sign in to the gcloud CLI with your federated identity .
Initialize the gcloud CLI .
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
gcloud services enable compute.googleapis.com file.googleapis.com logging.googleapis.com cloudresourcemanager.googleapis.com servicenetworking.googleapis.com
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/compute.admin, roles/iam.serviceAccountUser, roles/file.editor, roles/storage.admin, roles/serviceusage.serviceUsageAdmin
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
To use Hugging Face to access Gemma 3, follow these steps:
Sign the consent agreement to use Gemma 3 12B .
Create a Hugging Face read access token .
Click Your Profile > Settings > Access tokens > +Create new token
Copy and save the read access token value. You use it later in
this tutorial.
Prepare your environment
To prepare your environment, follow these steps:
Clone the Cluster Toolkit GitHub repository:
git clone https://github.com/GoogleCloudPlatform/cluster-toolkit.git
Create a Cloud Storage bucket:
gcloud storage buckets create gs:// BUCKET_NAME \
--project = PROJECT_ID
Replace the following:
BUCKET_NAME : a name for your
Cloud Storage bucket that follows
bucket naming requirements .
PROJECT_ID : the ID of the
Google Cloud project where you want to create your
Cloud Storage bucket.
Create an A4 Slurm cluster
To create an A4 Slurm cluster, follow these steps:
Go to the cluster-toolkit directory:
cd cluster-toolkit
If it's your first time using Cluster Toolkit, then build the
gcluster binary:
make
Go to the examples/machine-learning/a4-highgpu-8g directory:
cd examples/machine-learning/a4-highgpu-8g/
Open the a4high-slurm-deployment.yaml file, and then edit it as follows:
terraform_backend_defaults :
type : gcs
configuration :
bucket : BUCKET_NAME
vars :
deployment_name : a4-high
project_id : PROJECT_ID
region : REGION
zone : ZONE
a4h_cluster_size : 2
a4h_reservation_name : RESERVATION_URL
Replace the following:
BUCKET_NAME : the name of the
Cloud Storage bucket that you created in the previous section.
PROJECT_ID : the ID of the
Google Cloud project where your Cloud Storage exists and
where you want to create your Slurm cluster.
REGION : the region where your
reservation exists.
ZONE : the zone where your reservation
exists.
RESERVATION_URL : the URL of
the reservation that you want to use to create your Slurm cluster. Based
on the project in which the reservation exists, specify one of the
following values:
The reservation exists in your project:
RESERVATION_NAME
The reservation exists in a different project, and your project can
use the reservation:
projects/ RESERVATION_PROJECT_ID /reservations/ RESERVATION_NAME
Deploy the cluster:
./gcluster deploy -d examples/machine-learning/a4-highgpu-8g/a4high-slurm-deployment.yaml examples/machine-learning/a4-highgpu-8g/a4high-slurm-blueprint.yaml --auto-approve
The ./gcluster deploy command is a two-phase process, which is as follows:
The first phase builds a custom image with all software pre-installed,
which can take up to 35 minutes to complete.
The second phase deploys the cluster by using that custom image. This
process should complete more quickly than the first phase.
If the first phase succeeds but the second phase fails, then you can try to
deploy the Slurm cluster again by skipping the first phase:
./gcluster deploy -d examples/machine-learning/a4-highgpu-8g/a4high-slurm-deployment.yaml examples/machine-learning/a4-highgpu-8g/a4high-slurm-blueprint.yaml --auto-approve --skip "image" -w
Prepare your workload
To prepare your workload, follow these steps:
Create workload scripts .
Upload scripts to the Slurm cluster .
Connect to the Slurm cluster .
Install frameworks and tools .
Create workload scripts
To create the scripts that your fine-tuning workload will use, follow these
steps:
To set up the Python virtual environment, create the
install_environment.sh file with the following content:
#!/bin/bash
# This script should be run ONCE on the login node to set up the
# shared Python virtual environment.
set -e
echo "--- Creating Python virtual environment in /home ---"
python3 -m venv ~/.venv
echo "--- Activating virtual environment ---"
source ~/.venv/bin/activate
echo "--- Installing build dependencies ---"
pip install --upgrade pip wheel packaging
echo "--- Installing PyTorch for CUDA 12.8 ---"
pip install torch --index-url https://download.pytorch.org/whl/cu128
echo "--- Installing application requirements ---"
pip install -r requirements.txt
echo "--- Environment setup complete. You can now submit jobs with sbatch. ---"
To specify the configurations for your fine-tuning job, create the
accelerate_config.yaml file with the following content:
# Default configuration for a 2-node, 8-GPU-per-node (16 total GPUs) FSDP training job.
compute_environment : "LOCAL_MACHINE"
distributed_type : "FSDP"
downcast_bf16 : "no"
fsdp_config :
fsdp_auto_wrap_policy : "TRANSFORMER_BASED_WRAP"
fsdp_backward_prefetch : "BACKWARD_PRE"
fsdp_cpu_ram_efficient_loading : true
fsdp_forward_prefetch : false
fsdp_offload_params : false
fsdp_sharding_strategy : "FULL_SHARD"
fsdp_state_dict_type : "FULL_STATE_DICT"
fsdp_transformer_layer_cls_to_wrap : "Gemma3DecoderLayer"
fsdp_use_orig_params : true
machine_rank : 0
main_training_function : "main"
mixed_precision : "bf16"
num_machines : 2
num_processes : 16
rdzv_backend : "static"
same_network : true
tpu_env : []
use_cpu : false
To specify the tasks for the jobs to run on your Slurm cluster, create the
submit.slurm file with the following content:
#!/bin/bash
#SBATCH --job-name=gemma3-finetune
#SBATCH --nodes=2
#SBATCH --ntasks-per-node=8 # 8 tasks per node
#SBATCH --gpus-per-task=1 # 1 GPU per task
#SBATCH --partition=a4high
#SBATCH --output=slurm-%j.out
#SBATCH --error=slurm-%j.err
set -e
echo "--- Slurm Job Started ---"
# --- STAGE 1: Copy Environment to Local SSD on all nodes ---
srun --ntasks = $SLURM_NNODES --ntasks-per-node = 1 bash -c '
echo "Setting up local environment on $(hostname)..."
LOCAL_VENV="/mnt/localssd/venv_job_${SLURM_JOB_ID}"
LOCAL_CACHE="/mnt/localssd/hf_cache_job_${SLURM_JOB_ID}"
rsync -a --info=progress2 ~/./.venv/ ${LOCAL_VENV}/
mkdir -p ${LOCAL_CACHE}
echo "Setup on $(hostname) complete."
'
# --- STAGE 2: Run the Training Job using the Local Environment ---
echo "--- Starting Training ---"
LOCAL_VENV = "/mnt/localssd/venv_job_ ${ SLURM_JOB_ID } "
LOCAL_CACHE = "/mnt/localssd/hf_cache_job_ ${ SLURM_JOB_ID } "
LOCAL_OUTPUT_DIR = "/mnt/localssd/outputs_ ${ SLURM_JOB_ID } "
mkdir -p ${ LOCAL_OUTPUT_DIR }
# This is the main training command.
srun --ntasks = $(( SLURM_NNODES * 8 )) --gpus-per-task = 1 bash -c "
source ${ LOCAL_VENV } /bin/activate
export HF_HOME= ${ LOCAL_CACHE }
export HF_DATASETS_CACHE= ${ LOCAL_CACHE }
# Run the Python script directly.
# Accelerate will divide the work
python ~/train.py \
--model_id google/gemma-3-12b-pt \
--output_dir ${ LOCAL_OUTPUT_DIR } \
--per_device_train_batch_size 1 \
--gradient_accumulation_steps 8 \
--num_train_epochs 3 \
--learning_rate 1e-5 \
--save_strategy steps \
--save_steps 100
"
# --- STAGE 3: Copy Final Model from Local SSD to Home Directory ---
echo "--- Copying final model from local SSD to /home ---"
# This command runs only on the first node of the job allocation
# and copies the final model back to the persistent shared directory.
srun --nodes = 1 --ntasks = 1 --ntasks-per-node = 1 bash -c "
rsync -a --info=progress2 ${ LOCAL_OUTPUT_DIR } / ~/gemma-12b-text-to-sql-finetuned/
"
echo "--- Slurm Job Finished ---"
To specify the dependencies for your fine-tuning job, create the
requirements.txt file with the following content:
# Hugging Face Libraries (Pinned to recent, stable versions for reproducibility)
transformers==4.53.3
datasets==4.0.0
accelerate==1.9.0
evaluate==0.4.5
bitsandbytes==0.46.1
trl==0.19.1
peft==0.16.0
# Other dependencies
tensorboard==2.20.0
protobuf==6.31.1
sentencepiece==0.2.0
Note: This tutorial doesn't use the latest versions of NVIDIA and Pytorch
dependencies. If you need newer dependencies, then see the
NVIDIA documentation and the
Pytorch documentation .
To specify the instructions for your job, create the train.py file with
the following content:
import torch
import argparse
from datasets import load_dataset
from transformers import AutoTokenizer , AutoModelForCausalLM , BitsAndBytesConfig , AutoConfig
from peft import LoraConfig , prepare_model_for_kbit_training , get_peft_model
from trl import SFTTrainer , SFTConfig
from huggingface_hub import login
def get_args ():
parser = argparse . ArgumentParser ()
parser . add_argument ( "--model_id" , type = str , default = "google/gemma-3-12b-pt" , help = "Hugging Face model ID" )
parser . add_argument ( "--hf_token" , type = str , default = None , help = "Hugging Face token for private models" )
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
return parser . parse_args ()
def main ():
args = get_args ()
# --- 1. Setup and Login ---
if args . hf_token :
login ( args . hf_token )
# --- 2. Create and prepare the fine-tuning dataset ---
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
tokenizer = AutoTokenizer . from_pretrained ( args . model_id )
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
# --- 5. Load Quantized Model and Apply PEFT ---
# Define the quantization configuration
quantization_config = BitsAndBytesConfig (
load_in_4bit = True ,
bnb_4bit_quant_type = 'nf4' ,
bnb_4bit_compute_dtype = torch_dtype_obj ,
bnb_4bit_use_double_quant = True ,
)
config = AutoConfig . from_pretrained ( args . model_id )
config . use_cache = False
# Load the base model with quantization
print ( "Loading base model..." )
model = AutoModelForCausalLM . from_pretrained (
args . model_id ,
config = config ,
quantization_config = quantization_config ,
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
packing = True ,
gradient_checkpointing = True ,
gradient_checkpointing_kwargs = { "use_reentrant" : False },
optim = "adamw_torch" ,
fp16 = True if torch_dtype_obj == torch . float16 else False ,
bf16 = True if torch_dtype_obj == torch . bfloat16 else False ,
max_grad_norm = 0.3 ,
warmup_ratio = 0.03 ,
lr_scheduler_type = "constant" ,
push_to_hub = False ,
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
trainer . save_model ()
if __name__ == "__main__" :
main ()
Upload scripts to the Slurm cluster
To upload the scripts that you created in the previous section to the Slurm
cluster, follow these steps:
To identify your login node, list all A4 VMs in your project:
gcloud compute instances list --filter = "machineType:a4-highgpu-8g"
The name of the login node is similar to a4-high-login-001 .
Upload your scripts to the login node's home directory:
gcloud compute scp \
--project = PROJECT_ID \
--zone = ZONE \
--tunnel-through-iap \
./train.py \
./requirements.txt \
./submit.slurm \
./install_environment.sh \
./accelerate_config.yaml \
" LOGIN_NODE_NAME " :~/
Replace LOGIN_NODE_NAME with the
name of the login node.
Connect to the Slurm cluster
Connect to the Slurm cluster by connecting to the login node through SSH:
gcloud compute ssh LOGIN_NODE_NAME \
--project = PROJECT_ID \
--tunnel-through-iap \
--zone = ZONE
Install frameworks and tools
After you connect to the login node, install frameworks and tools by following
these steps:
Create an environment variable for your Hugging Face access token:
export HUGGING_FACE_TOKEN = " HUGGING_FACE_TOKEN "
Set up a Python virtual environment with all the required dependencies:
chmod +x install_environment.sh
./install_environment.sh
Start your fine-tuning workload
To start your fine-tuning workload, follow these steps:
Submit the job to the Slurm scheduler:
sbatch submit.slurm
On the login node in your Slurm cluster, you can monitor the job's progress
by checking the output files created in your home directory:
tail -f slurm-gemma3-finetune.err
If your job successfully starts, then the .err file shows a progress bar
that updates as your job progresses.
Monitor your workload
You can monitor the use of the GPUs in your Slurm cluster to verify that your
fine-tuning job is efficiently running. To do so, open the following link in
your browser:
https://console.cloud.google.com/monitoring/metrics-explorer?project= PROJECT_ID &pageState=%7B%22xyChart%22%3A%7B%22dataSets%22%3A%5B%7B%22timeSeriesFilter%22%3A%7B%22filter%22%3A%22metric.type%3D%5C%22agent.googleapis.com%2Fgpu%2Futilization%5C%22%20resource.type%3D%5C%22gce_instance%5C%22%22%2C%22perSeriesAligner%22%3A%22ALIGN_MEAN%22%7D%2C%22plotType%22%3A%22LINE%22%7D%5D%7D%7D
When you monitor your workload, you can see the following:
GPUs usage : for a healthy fine-tuning job, you can expect to see the
usage of all your 16 GPUs (eight GPUs for each VM in the cluster) rise and
stabilize to a specific level throughout your training.
Job duration : the job should take approximately one hour to complete.
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
Delete your Slurm cluster
To delete your Slurm cluster, follow these steps:
Go to the cluster-toolkit directory.
Destroy the Terraform file and all created resources:
./gcluster destroy a4-high --auto-approve
What's next
Redeploy a Slurm cluster
Test network performance on a Slurm cluster
Monitor VMs in a Slurm cluster
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
