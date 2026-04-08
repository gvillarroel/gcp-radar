---
title: "Use FSDP to fine-tune Mixtral-8x7B on an A4 Slurm cluster \_|\_ AI Hypercomputer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/fsdp-mixtral-8x7b
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/fsdp-mixtral-8x7b
  title: "Use FSDP to fine-tune Mixtral-8x7B on an A4 Slurm cluster \_|\_ AI Hypercomputer\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Use FSDP to fine-tune Mixtral-8x7B on an A4 Slurm cluster | AI Hypercomputer | Google Cloud Documentation
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
Access Mixtral by using Hugging Face
Prepare your environment
Create an A4 Slurm cluster
Prepare your workload
Create workload scripts Upload Scripts to the Slurm cluster
Connect to the Slurm cluster
Install frameworks and tools
Start your fine-tuning workload
Clean up Delete your Slurm cluster
Delete your project
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Use FSDP to fine-tune Mixtral-8x7B on an A4 Slurm cluster
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Objectives
Costs
Before you begin
Access Mixtral by using Hugging Face
Prepare your environment
Create an A4 Slurm cluster
Prepare your workload
Create workload scripts Upload Scripts to the Slurm cluster
Connect to the Slurm cluster
Install frameworks and tools
Start your fine-tuning workload
Clean up Delete your Slurm cluster
Delete your project
What's next
This tutorial shows you how to fine-tune a mistralai/Mixtral-8x7B-v0.1
model on a multi-node, multi-GPU Slurm cluster Google Cloud. The cluster uses two
a4-highgpu-8g virtual machine (VM) instances, which each have 8 NVIDIA B200
GPUs.
The two main processes described in this tutorial are as follows:
Deploy a production-grade, high-performance Slurm cluster by using the
Google Cloud Cluster Toolkit. As part of this deployment,
you create a custom VM image with the necessary software pre-installed. You
also set up a shared Lustre file system and configure high-speed networking.
After the cluster is deployed, you run a distributed fine-tuning job by
using the set of scripts that accompany this tutorial. The job leverages
PyTorch Fully Sharded Data Parallel (FSDP), which you access through the
Hugging Face
Transformer Reinforcement Learning
(TRL)
library.
Important: To complete this tutorial, you must have reserved the capacity to
create two A4 VMs. To
learn more about your options for reserving capacity in
AI Hypercomputer for a future date and time, see
Choose a consumption option .
This tutorial is intended for machine learning (ML) engineers, researchers,
platform administrators and operators, and for data and AI specialists who are
interested in distributing an AI workload across multiple nodes and GPUs.
Objectives
Access Mixtral by using Hugging Face
Prepare your environment
Create and deploy a production-grade A4 High-GPU Slurm cluster.
Configure a multi-node environment for distributed training with FSDP.
Fine-tune the Mixtral model by using the Hugging Face trl.SFTTrainer class.
Stage data to local SSDs.
Monitor your job.
Clean up.
Costs
In this document, you use the following billable components of Google Cloud:
Compute Engine
Cloud Storage
Cloud Logging
Google Cloud Managed Lustre
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
gcloud services enable compute.googleapis.com file.googleapis.com logging.googleapis.com cloudresourcemanager.googleapis.com servicenetworking.googleapis.com lustre.googleapis.com
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
gcloud services enable compute.googleapis.com file.googleapis.com logging.googleapis.com cloudresourcemanager.googleapis.com servicenetworking.googleapis.com lustre.googleapis.com
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
Install the dependencies that you need to use the Cluster Toolkit .
Access Mixtral by using Hugging Face
To use Hugging Face to access Mixtral, do the following:
Create a Hugging Face read access token .
Copy and save the read access token value. You use it later in this
tutorial.
Prepare your environment
You do the following steps on your local machine to prepare for deployment of
the cluster.
Clone the Google Cloud Cluster Toolkit repository:
git clone https://github.com/GoogleCloudPlatform/cluster-toolkit.git
Create a Cloud Storage bucket:
export BUCKET_NAME = "your-unique-bucket-name"
gcloud storage buckets create gs:// ${ BUCKET_NAME }
Create an A4 Slurm cluster
To create an A4 Slurm cluster, do the following:
Go to the cloned cluster-toolkit directory:
cd cluster-toolkit
If it's your first time using Cluster Toolkit, then
build the gcluster binary:
make
Go to the examples/machine-learning/a4-highgpu-8g directory.
Open the a4high-slurm-deployment.yaml file and edit it as follows:
terraform_backend_defaults :
type : gcs
configuration :
bucket : BUCKET_NAME
vars :
deployment_name : DEPLOYMENT_NAME
project_id : PROJECT_ID
region : REGION
zone : ZONE
a4h_cluster_size : 2
a4h_reservation_name : RESERVATION_NAME
Replace the following:
BUCKET_NAME : : the name of the
Cloud Storage bucket that you created in the previous section.
PROJECT_ID : the ID of the Google Cloud project where your
Cloud Storage exists and where you want to create your Slurm cluster.
REGION : the region where your reservation exists.
ZONE : the zone where your reservation exists.
A4h_reservation_name : use the name of your A4 reservation.
Open the a4high-slurm-blueprint.yaml file and edit it as follows:
Remove the filestore_homefs module.
Enable the lustrefs and private-service-access modules.
In the vars block, configure the following:
Find slurm_vars and set install_managed_lustre to true .
Set the per_unit_storage_throughput parameter to 500 .
Set the size_gib parameter to 36000 .
Deploy the cluster:
./gcluster deploy -d examples/machine-learning/a4-highgpu-8g/a4high-slurm-deployment.yaml \
examples/machine-learning/a4-highgpu-8g/a4high-slurm-blueprint.yaml \
--auto-approve
The ./gcluster deploy command starts a two-phase process, which is as follows:
The first phase builds a custom image with all software pre-installed,
which can take up to 35 minutes to complete.
The second phase deploys the cluster by using that custom image. This
process should complete more quickly than the first phase.
Prepare your workload
To prepare your workload, follow these steps:
Create workload scripts .
Upload scripts to the Slurm cluster .
Connect to the Slurm cluster
.
Install frameworks and tools .
Create workload scripts
To create the scripts that your fine-tuning workload will use, follow these
steps:
To set up the Python virtual environment, create the
install_environment.sh file with the following content:
#!/bin/bash
# This script sets a reliable environment for FSDP training.
# It is meant to be run on a compute node.
set -e
# --- 1. Create the Python virtual environment ---
VENV_PATH = " $HOME /.venv/venv-fsdp"
if [ ! -d " $VENV_PATH " ] ; then
echo "--- Creating Python virtual environment at $VENV_PATH ---"
python3 -m venv $VENV_PATH
else
echo "--- Virtual environment already exists at $VENV_PATH ---"
fi
source $VENV_PATH /bin/activate
# --- 2. Install Dependencies ---
echo "--- [STEP 2.1] Upgrading build toolchain ---"
pip install --upgrade pip wheel packaging
echo "--- [STEP 2.2] Installing PyTorch Nightly ---"
pip install --force-reinstall --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cu128
echo "--- [STEP 2.3] Installing application dependencies ---"
if [ -f "requirements-fsdp.txt" ] ; then
pip install -r requirements-fsdp.txt
else
echo "ERROR: requirements-fsdp.txt not found!"
exit 1
fi
# --- [STEP 2.4] Build Flash Attention from Source ---
echo "--- Building flash-attn from source... This will take a while. ---"
# Use all available CPU cores to speed up the build
MAX_JOBS = $( nproc ) pip install flash-attn --no-build-isolation
# --- 3. Download the Model ---
echo "--- [STEP 2.5] Downloading Mixtral model ---"
if [ -z " $HF_TOKEN " ] ; then
echo "ERROR: The HF_TOKEN environment variable is not set." ; exit 1 ;
fi
pip install huggingface_hub [ cli ]
# Execute the CLI using its full, explicit path
$VENV_PATH /bin/huggingface-cli download mistralai/Mixtral-8x7B-v0.1 --local-dir ~/Mixtral-8x7B-v0.1 --token $HF_TOKEN
echo "--- Environment setup complete. ---"
Note: This tutorial doesn't use the latest versions of NVIDIA and Pytorch dependencies.
If you need newer dependencies, then see the NVIDIA documentation
and the Pytorch documentation .
To specify the Python dependencies for the training script, create a
requirements-fsdp.txt file with the following content:
transformers==4.55.0
datasets==4.0.0
peft==0.16.0
accelerate==1.9.0
trl==0.21.0
# Other dependencies
sentencepiece==0.2.0
protobuf==6.31.1
Specify train-mixtral.py as the main training script:
import torch
from torch.distributed.fsdp import MixedPrecision
from datasets import load_dataset
import shutil
import os
import torch.distributed as dist
from peft import LoraConfig , PeftModel , get_peft_model
from transformers import (
AutoModelForCausalLM ,
AutoTokenizer ,
TrainingArguments ,
HfArgumentParser ,
)
from torch.distributed import get_rank , get_world_size
from transformers.models.mixtral.modeling_mixtral import MixtralDecoderLayer
from trl import SFTTrainer
from dataclasses import dataclass , field
from typing import Optional
@dataclass
class ScriptArguments :
model_id : str = field ( default = "mistralai/Mixtral-8x7B-v0.1" , metadata = { "help" : "Hugging Face model ID from the Hub" })
dataset_name : str = field ( default = "philschmid/gretel-synthetic-text-to-sql" , metadata = { "help" : "Dataset from the Hub" })
run_inference_after_training : bool = field ( default = False , metadata = { "help" : "Run sample inference on rank 0 after training" })
dataset_subset_size : Optional [ int ] = field ( default = None , metadata = { "help" : "Number of samples to use from the dataset for training. If None, uses the full dataset." })
@dataclass
class PeftArguments :
lora_r : int = field ( default = 16 , metadata = { "help" : "LoRA attention dimension" })
lora_alpha : int = field ( default = 32 , metadata = { "help" : "LoRA alpha scaling factor" })
lora_dropout : float = field ( default = 0.05 , metadata = { "help" : "LoRA dropout probability" })
@dataclass
class SftTrainingArguments ( TrainingArguments ):
max_length : Optional [ int ] = field ( default = 2048 , metadata = { "help" : "The maximum sequence length for SFTTrainer" })
packing : Optional [ bool ] = field ( default = False , metadata = { "help" : "Enable packing for SFTTrainer" })
ddp_find_unused_parameters : Optional [ bool ] = field ( default = False , metadata = { "help" : "When using FSDP activation checkpointing, this must be set to False for Mixtral" })
def formatting_prompts_func ( example ):
system_message = "You are a text to SQL query translator. Users will ask you questions in English and you will generate a SQL query based on the provided SCHEMA."
user_prompt = f "### SCHEMA: \n { example [ 'sql_context' ] } \n\n ### USER QUERY: \n { example [ 'sql_prompt' ] } "
response = f " \n\n ### SQL QUERY: \n { example [ 'sql' ] } "
return f " { system_message } \n\n { user_prompt }{ response } "
def main ():
parser = HfArgumentParser (( ScriptArguments , PeftArguments , SftTrainingArguments ))
script_args , peft_args , training_args = parser . parse_args_into_dataclasses ()
training_args . gradient_checkpointing = True
training_args . gradient_checkpointing_kwargs = { "use_reentrant" : True }
training_args . optim = "adamw_torch_fused"
bf16_policy = MixedPrecision (
param_dtype = torch . bfloat16 ,
reduce_dtype = torch . bfloat16 ,
buffer_dtype = torch . bfloat16 ,
)
training_args . fsdp = "full_shard"
training_args . fsdp_config = {
"fsdp_auto_wrap_policy" : "TRANSFORMER_BASED_WRAP" ,
"fsdp_transformer_layer_cls_to_wrap" : [ MixtralDecoderLayer ],
"fsdp_state_dict_type" : "SHARDED_STATE_DICT" ,
"fsdp_offload_params" : False ,
"fsdp_forward_prefetch" : True ,
"fsdp_mixed_precision_policy" : bf16_policy
}
tokenizer = AutoTokenizer . from_pretrained ( script_args . model_id , trust_remote_code = True )
tokenizer . pad_token = tokenizer . eos_token
tokenizer . padding_side = "right"
model = AutoModelForCausalLM . from_pretrained (
script_args . model_id ,
torch_dtype = torch . bfloat16 ,
trust_remote_code = True ,
attn_implementation = "flash_attention_2" ,
)
peft_config = LoraConfig (
r = peft_args . lora_r ,
lora_alpha = peft_args . lora_alpha ,
lora_dropout = peft_args . lora_dropout ,
bias = "none" ,
task_type = "CAUSAL_LM" ,
target_modules = [ "q_proj" , "v_proj" , "k_proj" , "o_proj" , "gate_proj" , "up_proj" , "down_proj" ],
)
model = get_peft_model ( model , peft_config )
data_splits = load_dataset ( script_args . dataset_name )
dataset = data_splits [ "train" ]
eval_dataset = data_splits [ "test" ]
if script_args . dataset_subset_size is not None :
dataset = dataset . select ( range ( script_args . dataset_subset_size ))
dataset = dataset . shuffle ( seed = training_args . seed )
trainer = SFTTrainer (
model = model ,
args = training_args ,
train_dataset = dataset ,
eval_dataset = eval_dataset ,
formatting_func = formatting_prompts_func ,
processing_class = tokenizer ,
)
trainer . train ()
dist . barrier ()
if trainer . is_world_process_zero ():
best_model_path = trainer . state . best_model_checkpoint
final_model_dir = os . path . join ( training_args . output_dir , "final_best_model" )
print ( f "Copying best model to: { final_model_dir } " )
if os . path . exists ( final_model_dir ):
shutil . rmtree ( final_model_dir )
shutil . copytree ( best_model_path , final_model_dir )
if script_args . run_inference_after_training :
del model , trainer
torch . cuda . empty_cache ()
run_post_training_inference ( script_args , final_model_dir , tokenizer )
def run_post_training_inference ( script_args , best_model_path , tokenizer ):
print ( " \n " + "=" * 50 )
print ( "=== RUNNING POST-TRAINING INFERENCE TEST ===" )
print ( "=" * 50 + " \n " )
base_model = AutoModelForCausalLM . from_pretrained (
script_args . model_id ,
torch_dtype = torch . bfloat16 ,
trust_remote_code = True ,
device_map = "auto"
)
model = PeftModel . from_pretrained ( base_model , best_model_path )
model = model . merge_and_unload ()
model . eval ()
# Define the test case
schema = "CREATE TABLE artists (Name TEXT, Country TEXT, Genre TEXT)"
system_message = "You are a text to SQL query translator. Users will ask you questions in English and you will generate a SQL query based on the provided SCHEMA."
question = "Show me all artists from the Country just north of the USA."
prompt = f " { system_message } \n\n ### SCHEMA: \n { schema } \n\n ### USER QUERY: \n { question } \n\n ### SQL QUERY: \n "
print ( f "Test Prompt: \n { prompt } " )
inputs = tokenizer ( prompt , return_tensors = "pt" ) . to ( "cuda" )
print ( " \n --- Generating SQL... ---" )
outputs = model . generate (
** inputs ,
max_new_tokens = 100 ,
pad_token_id = tokenizer . eos_token_id ,
do_sample = False ,
temperature = None ,
top_p = None ,
)
generated_sql = tokenizer . decode ( outputs [ 0 ], skip_special_tokens = True )[ len ( prompt ):] . strip ()
print ( f " \n --- Generated SQL Query ---" )
print ( generated_sql )
print ( " \n " + "=" * 50 )
print ( "=== INFERENCE TEST COMPLETE ===" )
print ( "=" * 50 + " \n " )
if __name__ == "__main__" :
main ()
To specify the tasks for the jobs to run on your Slurm cluster, create
the train-mixtral.sh file with the following content:
#!/bin/bash
#SBATCH --job-name=mixtral-fsdp
#SBATCH --nodes=2
#SBATCH --ntasks-per-node=8
#SBATCH --gpus-per-node=8
#SBATCH --partition=a4high
#SBATCH --output=mixtral-%j.out
#SBATCH --error=mixtral-%j.err
set -e
set -x
echo "--- Slurm Job Started ---"
# --- Define Paths ---
LOCAL_SSD_PATH = "/mnt/localssd/job_ ${ SLURM_JOB_ID } "
VENV_PATH = " ${ HOME } /.venv/venv-fsdp"
MODEL_PATH = " ${ HOME } /Mixtral-8x7B-v0.1"
# --- STAGE 1: Stage Data to Local SSD on Each Node ---
srun --ntasks = $SLURM_NNODES --ntasks-per-node = 1 bash -c "
echo '--- Staging on node: $( hostname ) ---'
mkdir -p ${ LOCAL_SSD_PATH }
echo 'Copying virtual environment...'
rsync -a -q ${ VENV_PATH } / ${ LOCAL_SSD_PATH } /venv/
echo 'Copying model weights...'
rsync -a ${ MODEL_PATH } / ${ LOCAL_SSD_PATH } /model/
mkdir -p ${ LOCAL_SSD_PATH } /hf_cache
echo '--- Staging on $( hostname ) complete ---'
"
echo "--- Staging complete on all nodes ---"
# --- STAGE 2: Run the Training Job ---
echo "--- Launching Distributed Training with GIB NCCL Plugin ---"
nodes =( $( scontrol show hostnames " $SLURM_JOB_NODELIST " ) )
head_node = ${ nodes [0] }
head_node_ip = $( srun --nodes = 1 --ntasks = 1 -w " $head_node " hostname --ip-address )
export MASTER_ADDR = $head_node_ip
export MASTER_PORT = 29500
export NCCL_SOCKET_IFNAME = enp0s19
export NCCL_NET = gIB
# export NCCL_DEBUG=INFO # Un-comment to diagnose NCCL issues if needed
srun --cpu-bind = none --accel-bind = g bash -c '
# Activate the environment from the local copy
source ' ${ LOCAL_SSD_PATH } '/venv/bin/activate
# Point Hugging Face cache to the local SSD
export HF_HOME=' ${ LOCAL_SSD_PATH } '/hf_cache
export RANK=$SLURM_PROCID
export WORLD_SIZE=$SLURM_NTASKS
export LOCAL_RANK=$SLURM_LOCALID
export LD_LIBRARY_PATH=/usr/local/gib/lib64:$LD_LIBRARY_PATH
source /usr/local/gib/scripts/set_nccl_env.sh
# --- Launch the training ---
python \
' ${ SLURM_SUBMIT_DIR } '/train-mixtral.py \
--model_id="' ${ LOCAL_SSD_PATH } '/model/" \
--output_dir="${HOME}/outputs/mixtral_job_${SLURM_JOB_ID}" \
--dataset_name="philschmid/gretel-synthetic-text-to-sql" \
--seed=900913 \
--bf16=True \
--num_train_epochs=3 \
--per_device_train_batch_size=32 \
--gradient_accumulation_steps=4 \
--learning_rate=4e-5 \
--logging_steps=3 \
--lora_r=32 \
--lora_alpha=32 \
--lora_dropout=0.05 \
--eval_strategy=steps \
--eval_steps=10 \
--save_strategy=steps \
--save_steps=10 \
--load_best_model_at_end=False \
--metric_for_best_model=eval_loss \
--run_inference_after_training \
--dataset_subset_size=67000
'
# --- STAGE 3: Cleanup ---
echo "--- Cleaning up local SSD on all nodes ---"
srun --ntasks = $SLURM_NNODES --ntasks-per-node = 1 bash -c "rm -rf ${ LOCAL_SSD_PATH } "
echo "--- Slurm Job Finished ---"
Upload Scripts to the Slurm cluster
To upload the scripts that you created in the previous section to the Slurm
cluster, do the following:
To identify your login node, list all of the VMs in your project:
gcloud compute instances list
The name of the login node is similar to a4-high-login-001 .
Upload your scripts to the login node's home directory:
# Run this from your local machine where you created the files
LOGIN_NODE_NAME = "your-login-node-name" # e.g., a4high-login-001
PROJECT_ID = "your-gcp-project-id"
ZONE = "your-cluster-zone" # e.g., us-west4-a
gcloud compute scp --project = " $PROJECT_ID " --zone = " $ZONE " --tunnel-through-iap \
./install_environment.sh \
./requirements-fsdp.txt \
./train-mixtral.py \
./train-mixtral.sh \
" ${ LOGIN_NODE_NAME } " :~/
Connect to the Slurm cluster
Connect to the Slurm cluster by connecting to the login node through SSH:
gcloud compute ssh $LOGIN_NODE_NAME \
--project = $PROJECT_ID \
--tunnel-through-iap \
--zone = $ZONE
Install frameworks and tools
After you connect to the login node, install frameworks and tools.
Export your Hugging Face token:
# On the login node
export HF_TOKEN = "hf_..." # Replace with your token
Run the installation script on a compute node.
# On the login node
srun \
--job-name = env-setup \
--nodes = 1 \
--ntasks = 1 \
--gpus-per-node = 1 \
--partition = a4high \
bash ./install_environment.sh
This command sets up the virtual environment, installs all dependencies, and
downloads the Mixtral model weights into ~/Mixtral-8x7B-v0.1 . This process can
take over 30 minutes to complete.
Start your fine-tuning workload
To start your training your workload, do the following:
Submit the job to the Slurm scheduler:
# On the login node
sbatch train-mixtral.sh
On the login node in your Slurm cluster, you can monitor the job's
progress by checking the output files created in your home directory:
# On the login node
tail -f mixtral-*.out
If your job successfully starts, then the .err file shows a progress bar
that updates as your job progresses.
The job has two main phases:
Copying the large base model to the local SSD of each compute node.
The training job, which begins once the copying of the model is complete.
The whole job takes about 40 minutes to run.
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete your Slurm cluster
To delete your Slurm cluster, follow these steps:
Go to the cluster-toolkit directory.
Destroy the Terraform file and all created resources:
./gcluster destroy DEPLOYMENT_NAME --auto-approve
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
What's next
Redeploy a Slurm cluster
Test network performance on a Slurm cluster
Monitor VMs in a Slurm cluster
Create a serving endpoint :
Once you have your fine-tuned model, you can deploy it to a serving
endpoint using GKE or Vertex AI to make it
accessible for inference.
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
