---
title: "Train Qwen2 on an A4 Slurm cluster \_|\_ AI Hypercomputer \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/train-qwen2-a4-slurm-cluster
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4x
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/train-qwen2-a4-slurm-cluster
  title: "Train Qwen2 on an A4 Slurm cluster \_|\_ AI Hypercomputer \_|\_ Google Cloud\
    \ Documentation"
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
Train Qwen2 on an A4 Slurm cluster
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows you how to train a large language model (LLM) on a
multi-node, multi-GPU Slurm cluster on Google Cloud. The model that you use in
this tutorial is based on a Qwen2 1.5 billion parameter model. The Slurm
cluster uses two a4-highgpu-8g virtual machines (VMs), which each have 8 NVIDIA
B200 GPUs.
The two main processes described in this tutorial are as follows:
Deploy a production-grade, high-performance Slurm cluster using the
Google Cloud Cluster Toolkit. As part of this deployment,
you create a custom VM image with the necessary software pre-installed. You
also set up a shared Filestore instance, and configure high-speed
RDMA networking.
After the cluster is deployed, you run a distributed pre-training job by
using the set of scripts that accompany this tutorial. The job leverages
the
Hugging Face Accelerate library.
Important: To complete this tutorial, you must have reserved the capacity to
create two A4 VMs. To
learn more about your options for reserving capacity in
AI Hypercomputer for a future date and time, see
Choose a consumption option .
This tutorial is intended for machine learning (ML) engineers, researchers,
platform administrators and operators, and for data and AI specialists who are
interested in deploying high-performance Slurm clusters on Google Cloud to train
LLMs.
Objectives
Access the Qwen2 model by using Hugging Face.
Prepare your environment.
Create and deploy a production-grade A4 Slurm cluster.
Train the Qwen2 model by using the
Accelerate
library .
Monitor your job.
Clean up.
Costs
In this document, you use the following billable components of Google Cloud:
Compute Engine
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
gcloud services enable gcloud services enable compute.googleapis.com file.googleapis.com logging.googleapis.com cloudresourcemanager.googleapis.com servicenetworking.googleapis.com
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
gcloud services enable gcloud services enable compute.googleapis.com file.googleapis.com logging.googleapis.com cloudresourcemanager.googleapis.com servicenetworking.googleapis.com
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
Access Qwen2 by using Hugging Face
To use Hugging Face to access Qwen2, do the following:
Sign the consent agreement to use Qwen 2 1.5B .
Create a read access token .
Prepare your environment
To prepare your environment, follow these steps:
Clone the Cluster Toolkit GitHub repository:
git clone https : // github . com / GoogleCloudPlatform / cluster - toolkit . git
Create a Cloud Storage bucket:
gcloud storage buckets create gs:// BUCKET_NAME \
--project= PROJECT_ID
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
cd cluster - toolkit
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
To create the scripts that your training workload will use, follow these
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
#SBATCH --job-name=qwen2-pretrain-smollm-fineweb
#SBATCH --nodes=2
#SBATCH --ntasks-per-node=8 # 8 tasks per node
#SBATCH --gpus-per-task=1 # 1 GPU per task
#SBATCH --partition=a4high
#SBATCH --output=logs/slurm-%j.out
#SBATCH --error=logs/slurm-%j.err
set -e
echo "--- Slurm Job Started ---"
# --- STAGE 1: Setup environment and pre-process data on each node's local SSD ---
# This command runs once per node.
srun --ntasks = $SLURM_NNODES --ntasks-per-node = 1 bash -c '
set -e
echo "Setting up local environment on $(hostname)..."
LOCAL_VENV="/mnt/localssd/venv_job_${SLURM_JOB_ID}"
LOCAL_CACHE="/mnt/localssd/hf_cache_job_${SLURM_JOB_ID}"
PROCESSED_DATA_DIR="/mnt/localssd/processed_data_${SLURM_JOB_ID}"
rsync -a --info=progress2 ~/./.venv/ ${LOCAL_VENV}/
mkdir -p ${LOCAL_CACHE} ${PROCESSED_DATA_DIR}
echo "Pre-processing data on $(hostname)..."
source ${LOCAL_VENV}/bin/activate
export HF_HOME=${LOCAL_CACHE}
export HF_DATASETS_CACHE=${LOCAL_CACHE}
# This runs the new preprocessing script. It ensures only ONE process per node
# downloads and processes the data, avoiding rate limiting and redundant work.
python preprocess_data.py \
--dataset_name "HuggingFaceFW/fineweb-edu" \
--dataset_config "CC-MAIN-2024-10" \
--tokenizer_id "Qwen/Qwen2-1.5B" \
--max_seq_length 1024 \
--output_path ${PROCESSED_DATA_DIR}
echo "Setup on $(hostname) complete."
'
# --- STAGE 2: Run the Training Job using the Local Environment ---
echo "--- Starting Training ---"
LOCAL_VENV = "/mnt/localssd/venv_job_ ${ SLURM_JOB_ID } "
PROCESSED_DATA_DIR = "/mnt/localssd/processed_data_ ${ SLURM_JOB_ID } "
LOCAL_OUTPUT_DIR = "/mnt/localssd/outputs_ ${ SLURM_JOB_ID } "
mkdir -p ${ LOCAL_OUTPUT_DIR }
# This is the main training command. It launches one Python process per GPU.
srun --ntasks = $(( SLURM_NNODES * 8 )) --gpus-per-task = 1 bash -c "
source ${ LOCAL_VENV } /bin/activate
# The training script now loads the pre-processed data from the local SSD.
python train.py \
--model_config_id " Qwen/Qwen2-1.5B " \
--preprocessed_data_path ${ PROCESSED_DATA_DIR } \
--output_dir ${ LOCAL_OUTPUT_DIR } \
--per_device_train_batch_size 4 \
--gradient_accumulation_steps 4 \
--max_steps 10000 \
--learning_rate 5e-5 \
--save_strategy steps \
--save_steps 500
"
# --- STAGE 3: Copy Final Model from Local SSD to Home Directory ---
echo "--- Copying final model from local SSD to /home ---"
# This command runs only on the first node of the job allocation
# and copies the final model back to the persistent shared directory.
srun --nodes = 1 --ntasks = 1 --ntasks-per-node = 1 bash -c "
rsync -a --info=progress2 ${ LOCAL_OUTPUT_DIR } / ~/qwen2-from-scratch-on-smollm-fineweb/
"
echo "--- Slurm Job Finished ---"
To specify the dependencies for your fine-tuning job, create a requirements.txt
file with the following content:
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
To download, tokenize, and preprocess the dataset into a format that's ready
for training, create a preprocess_data.py file with the following content:
import argparse
from datasets import load_dataset
from transformers import AutoTokenizer
import os
from itertools import chain
def get_args ():
parser = argparse . ArgumentParser ( description = "Download and preprocess a dataset." )
parser . add_argument ( "--dataset_name" , type = str , required = True )
parser . add_argument ( "--dataset_config" , type = str , required = True )
parser . add_argument ( "--tokenizer_id" , type = str , required = True )
parser . add_argument ( "--max_seq_length" , type = int , required = True )
parser . add_argument ( "--output_path" , type = str , required = True , help = "Path to save the processed dataset." )
return parser . parse_args ()
def main ():
args = get_args ()
if os . path . exists ( args . output_path ) and os . listdir ( args . output_path ):
print ( f "Processed dataset already exists at { args . output_path } . Skipping." )
return
# 1. Load tokenizer
tokenizer = AutoTokenizer . from_pretrained ( args . tokenizer_id )
# 2. Load raw dataset
print ( f "Loading raw dataset { args . dataset_name } ..." )
raw_dataset = load_dataset ( args . dataset_name , name = args . dataset_config , split = "train" )
# 3. Tokenize
def tokenize_function ( examples ):
return tokenizer ( examples [ "text" ])
num_proc = os . cpu_count ()
print ( f "Tokenizing dataset using { num_proc } processes..." )
print ( "Tokenizing dataset..." )
tokenized_dataset = raw_dataset . map (
tokenize_function ,
batched = True ,
remove_columns = raw_dataset . column_names ,
desc = "Running tokenizer on dataset" ,
num_proc = num_proc ,
)
# 4. Group texts
def group_texts ( examples ):
concatenated_examples = { k : list ( chain . from_iterable ( examples [ k ])) for k in examples . keys ()}
total_length = len ( concatenated_examples [ list ( examples . keys ())[ 0 ]])
if total_length > = args . max_seq_length :
total_length = ( total_length // args . max_seq_length ) * args . max_seq_length
result = {
k : [ t [ i : i + args . max_seq_length ] for i in range ( 0 , total_length , args . max_seq_length )]
for k , t in concatenated_examples . items ()
}
result [ "labels" ] = result [ "input_ids" ] . copy ()
return result
print ( "Grouping texts..." )
lm_dataset = tokenized_dataset . map (
group_texts ,
batched = True ,
desc = f "Grouping texts in chunks of { args . max_seq_length } " ,
num_proc = num_proc ,
)
# 5. Save to disk
print ( f "Saving processed dataset to { args . output_path } ..." )
lm_dataset . save_to_disk ( args . output_path )
print ( "Preprocessing complete." )
if __name__ == "__main__" :
main ()
To specify the instructions for your job, create a train.py file with the
following content:
import torch
import argparse
from datasets import load_dataset , load_from_disk
import os
from transformers import (
AutoConfig ,
AutoTokenizer ,
AutoModelForCausalLM ,
Trainer ,
TrainingArguments ,
DataCollatorForLanguageModeling ,
)
from huggingface_hub import login
def get_args ():
parser = argparse . ArgumentParser ()
parser . add_argument ( "--model_config_id" , type = str , default = "Qwen/Qwen2-1.5B" , help = "Hugging Face model config to use for architecture." )
# Data arguments - used if preprocessed data is not available
parser . add_argument ( "--dataset_name" , type = str , default = "HuggingFaceFW/fineweb-edu" , help = "Hugging Face dataset for pre-training." )
parser . add_argument ( "--dataset_config" , type = str , default = "CC-MAIN-2024-10" , help = "Config for the smollm-corpus dataset, e.g., 'fineweb-edu-dedup'." )
parser . add_argument ( "--preprocessed_data_path" , type = str , default = None , help = "Path to a preprocessed dataset on disk. If provided, skips download and processing." )
# General arguments
parser . add_argument ( "--hf_token" , type = str , default = None , help = "Hugging Face token for private models/tokenizers" )
parser . add_argument ( "--output_dir" , type = str , default = "qwen2-from-scratch-on-olmo" , help = "Directory to save model checkpoints" )
# TrainingArguments
parser . add_argument ( "--max_seq_length" , type = int , default = 1024 , help = "Maximum sequence length" )
parser . add_argument ( "--num_train_epochs" , type = int , default = 1 , help = "Number of training epochs" )
parser . add_argument ( "--max_steps" , type = int , default =- 1 , help = "If set to a positive number, it overrides num_train_epochs." )
parser . add_argument ( "--per_device_train_batch_size" , type = int , default = 4 , help = "Batch size per device during training" )
parser . add_argument ( "--gradient_accumulation_steps" , type = int , default = 4 , help = "Gradient accumulation steps" )
parser . add_argument ( "--learning_rate" , type = float , default = 5e-5 , help = "Learning rate" )
parser . add_argument ( "--logging_steps" , type = int , default = 10 , help = "Log every X steps" )
parser . add_argument ( "--save_strategy" , type = str , default = "steps" , help = "Checkpoint save strategy" )
parser . add_argument ( "--save_steps" , type = int , default = 500 , help = "Save checkpoint every X steps" )
return parser . parse_args ()
def main ():
args = get_args ()
# --- 1. Setup and Login ---
if args . hf_token :
login ( args . hf_token )
# --- 2. Load Tokenizer ---
# We load the tokenizer from the specified config ID to ensure compatibility
# with the model architecture (e.g., special tokens).
tokenizer = AutoTokenizer . from_pretrained ( args . model_config_id )
# --- 4. Initialize Model from Scratch ---
print ( f "Initializing a new model from { args . model_config_id } configuration..." )
config = AutoConfig . from_pretrained ( args . model_config_id )
model = AutoModelForCausalLM . from_config ( config )
print ( f "Model has { model . num_parameters () : , } parameters." )
# --- 3. Load or Create and prepare the training dataset ---
if args . preprocessed_data_path and os . path . exists ( args . preprocessed_data_path ):
print ( f "Loading preprocessed dataset from { args . preprocessed_data_path } ..." )
lm_dataset = load_from_disk ( args . preprocessed_data_path )
else :
print ( "No preprocessed dataset found, starting from raw data..." )
raw_dataset = load_dataset ( args . dataset_name , name = args . dataset_config , split = "train" )
# Tokenization function
def tokenize_function ( examples ):
return tokenizer ( examples [ "text" ])
tokenized_dataset = raw_dataset . map (
tokenize_function ,
batched = True ,
remove_columns = raw_dataset . column_names ,
desc = "Running tokenizer on dataset" ,
)
# Main data processing function that will concatenate all texts from our dataset
# and generate chunks of max_seq_length.
def group_texts ( examples ):
# Concatenate all texts.
concatenated_examples = { k : sum ( examples [ k ], []) for k in examples . keys ()}
total_length = len ( concatenated_examples [ list ( examples . keys ())[ 0 ]])
# We drop the small remainder.
if total_length > = args . max_seq_length :
total_length = ( total_length // args . max_seq_length ) * args . max_seq_length
# Split by chunks of max_len.
result = {
k : [ t [ i : i + args . max_seq_length ] for i in range ( 0 , total_length , args . max_seq_length )]
for k , t in concatenated_examples . items ()
}
result [ "labels" ] = result [ "input_ids" ] . copy ()
return result
lm_dataset = tokenized_dataset . map (
group_texts ,
batched = True ,
desc = f "Grouping texts in chunks of { args . max_seq_length } " ,
)
# --- 5. Configure Training Arguments ---
# Check for bfloat16 support
use_bf16 = torch . cuda . is_available () and torch . cuda . is_bf16_supported ()
training_args = TrainingArguments (
output_dir = args . output_dir ,
num_train_epochs = args . num_train_epochs ,
max_steps = args . max_steps ,
per_device_train_batch_size = args . per_device_train_batch_size ,
gradient_accumulation_steps = args . gradient_accumulation_steps ,
learning_rate = args . learning_rate ,
logging_steps = args . logging_steps ,
save_strategy = args . save_strategy ,
save_steps = args . save_steps ,
save_total_limit = 2 , # Optional: Limit the number of checkpoints
bf16 = use_bf16 ,
fp16 = not use_bf16 ,
optim = "adamw_torch" ,
lr_scheduler_type = "cosine" ,
warmup_ratio = 0.03 ,
report_to = "tensorboard" ,
gradient_checkpointing = True ,
# Required for gradient checkpointing with some parallelization strategies
gradient_checkpointing_kwargs = { "use_reentrant" : False },
)
# --- 6. Create Trainer and Start Training ---
# Data collator will take care of creating batches for causal language modeling
data_collator = DataCollatorForLanguageModeling ( tokenizer = tokenizer , mlm = False )
trainer = Trainer (
model = model ,
args = training_args ,
train_dataset = lm_dataset ,
# eval_dataset=... # Optional: if you have a validation set
tokenizer = tokenizer ,
data_collator = data_collator ,
)
print ( "Starting training from scratch..." )
trainer . train ()
print ( "Training finished." )
# --- 7. Save the final model ---
print ( f "Saving final model to { args . output_dir } " )
trainer . save_model ()
if __name__ == "__main__" :
main ()
Upload scripts to the Slurm cluster
To upload the scripts that you created in the previous section to the Slurm
cluster, follow these steps:
To identify your login node, list all of the A4 VMs in your project:
gcloud compute instances list --filter="machineType:a4-highgpu-8g"
The name of the login node is similar to a4-high-login-001 .
Upload your scripts to the login node's home directory:
gcloud compute scp \
--project= PROJECT_ID \
--zone= ZONE \
--tunnel-through-iap \
./train.py \
./requirements.txt \
./submit.slurm \
./install_environment.sh \
./accelerate_config.yaml \
" LOGIN_NODE_NAME ":~/
Replace LOGIN_NODE_NAME with the
name of the login node.
Connect to the Slurm cluster
Connect to the Slurm cluster by connecting to the login node through SSH:
gcloud compute ssh LOGIN_NODE_NAME \
--project= PROJECT_ID \
--tunnel-through-iap \
--zone= ZONE
Install frameworks and tools
After you connect to the login node, install frameworks and tools by doing the
following:
Create an environment variable for your Hugging Face access token:
export HUGGING_FACE_TOKEN = " HUGGING_FACE_TOKEN "
Set up a Python virtual environment with all the required dependencies:
chmod +x install_environment.sh
./install_environment.sh
Start your pre-training your workload
To start your training your workload, do the following:
Submit the job to the Slurm scheduler:
sbatch submit.slurm
On the login node in your Slurm cluster, you can monitor the job's progress
by checking the output files created in your home directory:
tail -f logs/slurm-qwen2-pretrain-smollm-fineweb.err
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
Download your model
After you have successfully run your job, your trained model is saved in the
~/qwen2-from-scratch-on-smollm-fineweb/ directory on the login node. Because this
persistent shared directory is mounted across all of the nodes in your cluster,
your model checkpoints remain available even after the job completes or the
compute nodes are deallocated.
You can download the saved model from the login node to your local machine by
using the gcloud compute scp command, as shown in the following example:
# From your local machine
LOGIN_NODE_NAME="your-login-node-name" # e.g., a4high-login-001
PROJECT_ID="your-gcp-project-id"
ZONE="your-cluster-zone" # e.g., us-west4-a
gcloud compute scp --project=" $PROJECT_ID " --zone=" $ZONE " --tunnel-through-iap \
" ${ LOGIN_NODE_NAME } ":~/qwen2-from-scratch-on-smollm-fineweb/ ./qwen2-trained-model/ --recurse
After you download your model, you can do the following:
Load the model for inference : Use the Hugging Face Transformers framework
to load the qwen2-trained-model/ directory and perform inference with your
newly trained Qwen2 model.
Additional fine-tuning : Use the saved checkpoint as a starting point
for additional fine-tuning on a more specific dataset.
Push the model to the Hugging Face Hub : Share your trained model by pushing
it to the Hugging Face Hub.
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
