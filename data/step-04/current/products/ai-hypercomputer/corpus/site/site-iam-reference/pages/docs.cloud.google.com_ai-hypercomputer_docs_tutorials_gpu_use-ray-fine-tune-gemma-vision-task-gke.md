---
title: "Use Ray to fine-tune Gemma 3 for vision tasks on GKE \_|\_ AI Hypercomputer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/use-ray-fine-tune-gemma-vision-task-gke
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/use-ray-fine-tune-gemma-vision-task-gke
  title: "Use Ray to fine-tune Gemma 3 for vision tasks on GKE \_|\_ AI Hypercomputer\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Use Ray to fine-tune Gemma 3 for vision tasks on GKE | AI Hypercomputer | Google Cloud Documentation
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
Create a GKE cluster in Autopilot mode
Create a Kubernetes secret for Hugging Face credentials
Create the Google Cloud Storage bucket
Save your training code as a ConfigMap
Configure Ray Cluster
Schedule a training job
Monitor your workload
Clean up Delete your project
Delete your resources
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Use Ray to fine-tune Gemma 3 for vision tasks on GKE
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Objectives
Costs
Before you begin
Access Gemma 3 by using Hugging Face
Prepare your environment
Create a GKE cluster in Autopilot mode
Create a Kubernetes secret for Hugging Face credentials
Create the Google Cloud Storage bucket
Save your training code as a ConfigMap
Configure Ray Cluster
Schedule a training job
Monitor your workload
Clean up Delete your project
Delete your resources
What's next
This tutorial shows you how to fine-tune a Gemma 3 model by using
the Ray framework on a multi-node GKE cluster. The cluster uses two A4
virtual machine (VM) instances, each with eight NVIDIA B200 GPUs attached.
Important: To complete this tutorial, you must have reserved the capacity to
create two A4 VMs. To
learn more about your options for reserving capacity in
AI Hypercomputer for a future date and time, see
Choose a consumption option .
The content of this tutorial is divided into two parts:
Preparing the Ray Cluster on top of a GKE
Autopilot cluster.
Running distributed training job, utilizing 2 A4 instances, with 8 B200
GPUs each.
This tutorial is intended for machine learning (ML) engineers, researchers,
platform administrators and operators, and for data and AI specialists who are
interested in distributing an AI workload across multiple nodes and GPUs.
Objectives
Access a Gemma 3 model by using Hugging Face.
Prepare your environment.
Create a GKE Autopilot cluster with the Ray
Operator installed on it.
Configure the Ray Cluster on the GKE cluster to accept Ray Jobs.
Configure and run a Ray Job that tunes the Gemma 3 model
based on visual input.
Monitor your workload.
Clean up.
Costs
In this document, you use the following billable components of Google Cloud:
Compute Engine
GKE Enterprise
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
gcloud services enable gcloud services enable compute.googleapis.com logging.googleapis.com cloudresourcemanager.googleapis.com servicenetworking.googleapis.com container.googleapis.com
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
gcloud services enable gcloud services enable compute.googleapis.com logging.googleapis.com cloudresourcemanager.googleapis.com servicenetworking.googleapis.com container.googleapis.com
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/compute.admin, roles/iam.serviceAccountUser, roles/file.editor, roles/storage.admin,
roles/container.clusterAdmin, roles/serviceusage.serviceUsageAdmin
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
Sign in to or create a Hugging Face
account .
Access Gemma 3 by using Hugging Face
To use Hugging Face to access Gemma 3, do the following:
Sign the consent agreement to use Gemma 3 .
Create a Hugging Face read access token .
Copy and save the read access token value. You use it later in
this tutorial.
Prepare your environment
Prepare your environment by configuring the necessary settings and setting the
environment variables.
Run the following:
gcloud config set billing/quota_project $PROJECT_ID
export RESERVATION = RESERVATION_URL
export REGION = REGION
export CLUSTER_NAME = CLUSTER_NAME
export HF_TOKEN = HF_TOKEN
export NETWORK = default
export GCS_BUCKET = GCS_BUCKET
Replace the following:
RESERVATION_URL : the URL of the reservation that you want to use
to create your cluster. Based on the project in which the reservation exists,
specify one of the following values:
The reservation exists in your project: RESERVATION_NAME
The reservation exists in a different project, and your project can use the
reservation: projects/ RESERVATION_PROJECT_ID /reservations/ RESERVATION_NAME .
Both full and partial URLs are accepted. For example, you can use
projects/ RESERVATION_PROJECT_ID /reservations/ RESERVATION_NAME .
REGION : the region where you want to create your GKE cluster.
You can only create the cluster in the region where your reservation exists.
CLUSTER_NAME : the name of the GKE cluster to create.
HF_TOKEN : the Hugging Face token that you created in an
earlier step.
GCS_BUCKET : the name of the bucket where you store the results
from the training checkpoint.
Create a GKE cluster in Autopilot mode
To create a GKE cluster in Autopilot mode, run the following:
gcloud container clusters create-auto $CLUSTER_NAME \
--enable-ray-operator \
--enable-ray-cluster-monitoring \
--enable-ray-cluster-logging \
--location = $REGION
It might take some time to complete the creation of the GKE cluster. To verify
if Google Cloud has finished creating your cluster, go to
Kubernetes clusters
on the Google Cloud console.
Create a Kubernetes secret for Hugging Face credentials
In Cloud Shell, to create a Kubernetes secret for Hugging Face credentials,
do the following:
Configure kubectl to connect to your cluster:
gcloud container clusters get-credentials $CLUSTER_NAME \
--region = $REGION
Create a Kubernetes secret to store your Hugging Face token:
kubectl create secret generic hf-secret \
--from-literal = hf_api_token = ${ HF_TOKEN } \
--dry-run = client -o yaml | kubectl apply -f -
Create the Google Cloud Storage bucket
If you want to use a new bucket to store your training artifacts, run the
following:
gcloud storage buckets create gs:// $GCS_BUCKET --location = $REGION
If you want to use an existing bucket, you can skip this step. However, you
must ensure that your bucket is in the same region as your cluster.
Save your training code as a ConfigMap
To avoid the need to embed your training script into a container image, you
store it as a ConfigMap in your cluster. This ConfigMap is mounted onto the
Pod file systems, which lets you update the training script without having to
recreate the entire Ray cluster.
Navigate to the code folder and create a new file.
Copy the following code/vision_train.py code into this new file:
import argparse
import datetime
import ray
import ray.train.huggingface.transformers
import torch
from PIL import Image
from datasets import load_dataset
from peft import LoraConfig
from ray.train import ScalingConfig , RunConfig
from ray.train.torch import TorchTrainer
from transformers import AutoProcessor , AutoModelForImageTextToText , BitsAndBytesConfig
from trl import SFTConfig
from trl import SFTTrainer
# System message for the assistant
system_message = "You are an expert product description writer for Amazon."
# User prompt that combines the user query and the schema
user_prompt = """Create a Short Product description based on the provided <PRODUCT> and <CATEGORY> and image.
Only return description. The description should be SEO optimized and for a better mobile search experience.
< PRODUCT >
{product}
< /PRODUCT >
< CATEGORY >
{category}
< /CATEGORY >
"""
def get_args ():
parser = argparse . ArgumentParser ()
parser . add_argument ( "--model_id" , type = str , default = "google/gemma-3-4b-it" , help = "Hugging Face model ID" )
# parser.add_argument("--hf_token", type=str, default=None, help="Hugging Face token for private models")
parser . add_argument ( "--dataset_name" , type = str , default = "philschmid/amazon-product-descriptions-vlm" , help = "Hugging Face dataset name" )
parser . add_argument ( "--output_dir" , type = str , default = "gemma-3-4b-seo-optimized" , help = "Directory to save model checkpoints" )
parser . add_argument ( "--gcs_bucket" , type = str , required = True , help = "storage bucket name used to synchronize tasks and save checkpoints" )
parser . add_argument ( "--push_to_hub" , help = "Push model to Hugging Face hub" , action = "store_true" )
# LoRA arguments
parser . add_argument ( "--lora_r" , type = int , default = 16 , help = "LoRA attention dimension" )
parser . add_argument ( "--lora_alpha" , type = int , default = 16 , help = "LoRA alpha scaling factor" )
parser . add_argument ( "--lora_dropout" , type = float , default = 0.05 , help = "LoRA dropout probability" )
# SFTConfig arguments
parser . add_argument ( "--max_seq_length" , type = int , default = 512 , help = "Maximum sequence length" )
parser . add_argument ( "--num_train_epochs" , type = int , default = 3 , help = "Number of training epochs" )
parser . add_argument ( "--per_device_train_batch_size" , type = int , default = 1 , help = "Batch size per device during training" )
parser . add_argument ( "--gradient_accumulation_steps" , type = int , default = 4 , help = "Gradient accumulation steps" )
parser . add_argument ( "--learning_rate" , type = float , default = 2e-4 , help = "Learning rate" )
parser . add_argument ( "--logging_steps" , type = int , default = 10 , help = "Log every X steps" )
parser . add_argument ( "--save_strategy" , type = str , default = "epoch" , help = "Checkpoint save strategy" )
parser . add_argument ( "--save_steps" , type = int , default = 100 , help = "Save checkpoint every X steps" )
return parser . parse_args ()
# Convert dataset to OAI messages
def format_data ( sample ):
return {
"messages" : [
{
"role" : "system" ,
"content" : [{ "type" : "text" , "text" : system_message }],
},
{
"role" : "user" ,
"content" : [
{
"type" : "text" ,
"text" : user_prompt . format (
product = sample [ "Product Name" ],
category = sample [ "Category" ],
),
},
{
"type" : "image" ,
"image" : sample [ "image" ],
},
],
},
{
"role" : "assistant" ,
"content" : [{ "type" : "text" , "text" : sample [ "description" ]}],
},
],
}
def process_vision_info ( messages : list [ dict ]) - > list [ Image . Image ]:
image_inputs = []
# Iterate through each conversation
for msg in messages :
# Get content (ensure it's a list)
content = msg . get ( "content" , [])
if not isinstance ( content , list ):
content = [ content ]
# Check each content element for images
for element in content :
if isinstance ( element , dict ) and ( "image" in element or element . get ( "type" ) == "image" ):
# Get the image and convert to RGB
if "image" in element :
image = element [ "image" ]
else :
image = element
image_inputs . append ( image . convert ( "RGB" ))
return image_inputs
def train ( args ):
# Load dataset from the hub
dataset = load_dataset ( args . dataset_name , split = "train" , streaming = True )
# Convert dataset to OAI messages
# need to use list comprehension to keep Pil.Image type, .mape convert image to bytes
dataset = [ format_data ( sample ) for sample in dataset ]
# Hugging Face model id
model_id = args . model_id
# Check if GPU benefits from bfloat16
if torch . cuda . get_device_capability ()[ 0 ] < 8 :
raise ValueError ( "GPU does not support bfloat16, please use a GPU that supports bfloat16." )
# Define model init arguments
model_kwargs = dict (
attn_implementation = "eager" , # Use "flash_attention_2" when running on Ampere or newer GPU
torch_dtype = torch . bfloat16 , # What torch dtype to use, defaults to auto
# device_map="auto", # Let torch decide how to load the model
)
# BitsAndBytesConfig int-4 config
model_kwargs [ "quantization_config" ] = BitsAndBytesConfig (
load_in_4bit = True ,
bnb_4bit_use_double_quant = True ,
bnb_4bit_quant_type = "nf4" ,
bnb_4bit_compute_dtype = model_kwargs [ "torch_dtype" ],
bnb_4bit_quant_storage = model_kwargs [ "torch_dtype" ],
)
# Load model and tokenizer
model = AutoModelForImageTextToText . from_pretrained ( model_id , ** model_kwargs )
processor = AutoProcessor . from_pretrained ( model_id , use_fast = True )
peft_config = LoraConfig (
lora_alpha = args . lora_alpha ,
lora_dropout = args . lora_dropout ,
r = args . lora_r ,
bias = "none" ,
target_modules = "all-linear" ,
task_type = "CAUSAL_LM" ,
modules_to_save = [
"lm_head" ,
"embed_tokens" ,
],
)
args = SFTConfig (
output_dir = args . output_dir , # directory to save and repository id
num_train_epochs = args . num_train_epochs , # number of training epochs
per_device_train_batch_size = args . per_device_train_batch_size , # batch size per device during training
gradient_accumulation_steps = args . gradient_accumulation_steps , # number of steps before performing a backward/update pass
gradient_checkpointing = True , # use gradient checkpointing to save memory
optim = "adamw_torch_fused" , # use fused adamw optimizer
logging_steps = args . logging_steps , # log every N steps
save_strategy = args . save_strategy , # save checkpoint every epoch
learning_rate = args . learning_rate , # learning rate, based on QLoRA paper
bf16 = True , # use bfloat16 precision
max_grad_norm = 0.3 , # max gradient norm based on QLoRA paper
warmup_ratio = 0.03 , # warmup ratio based on QLoRA paper
lr_scheduler_type = "constant" , # use constant learning rate scheduler
push_to_hub = args . push_to_hub , # push model to hub
report_to = "tensorboard" , # report metrics to tensorboard
gradient_checkpointing_kwargs = {
"use_reentrant" : False
}, # use reentrant checkpointing
dataset_text_field = "" , # need a dummy field for collator
dataset_kwargs = { "skip_prepare_dataset" : True }, # important for collator
)
args . remove_unused_columns = False # important for collator
# Create a data collator to encode text and image pairs
def collate_fn ( examples ):
texts = []
images = []
for example in examples :
image_inputs = process_vision_info ( example [ "messages" ])
text = processor . apply_chat_template (
example [ "messages" ], add_generation_prompt = False , tokenize = False
)
texts . append ( text . strip ())
images . append ( image_inputs )
# Tokenize the texts and process the images
batch = processor ( text = texts , images = images , return_tensors = "pt" , padding = True )
# The labels are the input_ids, and we mask the padding tokens and image tokens in the loss computation
labels = batch [ "input_ids" ] . clone ()
# Mask image tokens
image_token_id = [
processor . tokenizer . convert_tokens_to_ids (
processor . tokenizer . special_tokens_map [ "boi_token" ]
)
]
# Mask tokens for not being used in the loss computation
labels [ labels == processor . tokenizer . pad_token_id ] = - 100
labels [ labels == image_token_id ] = - 100
labels [ labels == 262144 ] = - 100
batch [ "labels" ] = labels
return batch
trainer = SFTTrainer (
model = model ,
args = args ,
train_dataset = dataset ,
peft_config = peft_config ,
processing_class = processor ,
data_collator = collate_fn ,
)
callback = ray . train . huggingface . transformers . RayTrainReportCallback ()
trainer . add_callback ( callback )
trainer = ray . train . huggingface . transformers . prepare_trainer ( trainer )
# Start training, the model will be automatically saved to the Hub and the output directory
trainer . train ()
# Save the final model again to the Hugging Face Hub
trainer . save_model ()
if __name__ == "__main__" :
args = get_args ()
print ( "Starting training task!" )
training_name = f "gemma_vision_train_ { datetime . datetime . now () . strftime ( '%Y_%m_ %d _%H_%M_%S' ) } "
gcs_bucket = args . gcs_bucket
if not gcs_bucket . startswith ( "gs://" ):
gcs_bucket = "gs://" + gcs_bucket
run_config = RunConfig (
storage_path = gcs_bucket ,
name = training_name ,
)
scaling_config = ScalingConfig ( num_workers = 16 , use_gpu = True , accelerator_type = "B200" )
ray_trainer = TorchTrainer ( train , train_loop_config = args , scaling_config = scaling_config , run_config = run_config )
print ( "Commencing training!" )
result = ray_trainer . fit ()
Save the file.
Create a ConfigMap object in your cluster:
kubectl create cm ray-job-cm --from-file = code -o yaml --dry-run = client | kubectl apply -f -
To update the training script, you rerun the preceding command. It might take a
minute before any changes propagate to all the pods.
Configure Ray Cluster
To create a Ray Cluster in your GKE cluster, save the following
YAML as ray_cluster.yaml file.
apiVersion : ray.io/v1
kind : RayCluster
metadata :
name : gemma3-tuning
spec :
rayVersion : '2.48.0'
headGroupSpec :
rayStartParams :
dashboard-host : '0.0.0.0'
template :
metadata :
spec :
containers :
- name : ray-head
image : rayproject/ray:2.48.0
ports :
- containerPort : 6379
name : gcs
- containerPort : 8265
name : dashboard
- containerPort : 10001
name : client
resources :
limits :
cpu : "24"
ephemeral-storage : "9Gi"
memory : "64Gi"
requests :
cpu : "24"
ephemeral-storage : "9Gi"
memory : "64Gi"
env :
- name : HF_TOKEN
valueFrom :
secretKeyRef :
name : hf-secret
key : hf_api_token
volumeMounts :
- name : job-code
mountPath : /code/
- mountPath : /mnt/local-ssd/
name : local-storage
volumes :
- name : job-code
configMap :
name : ray-job-cm
- name : local-storage
emptyDir : { }
workerGroupSpecs :
- replicas : 2
minReplicas : 1
maxReplicas : 5
groupName : gpu-group
rayStartParams : {}
template :
spec :
containers :
- name : ray-worker
image : rayproject/ray:2.48.0-gpu
resources :
limits :
nvidia.com/gpu : "8"
requests :
nvidia.com/gpu : "8"
env :
- name : HF_TOKEN
valueFrom :
secretKeyRef :
name : hf-secret
key : hf_api_token
volumeMounts :
- name : job-code
mountPath : /code/
- mountPath : /mnt/local-ssd/
name : local-storage
volumes :
- name : job-code
configMap :
name : ray-job-cm
- name : local-storage
emptyDir : { }
nodeSelector :
cloud.google.com/gke-accelerator : nvidia-b200
cloud.google.com/reservation-name : $RESERVATION
cloud.google.com/reservation-affinity : "specific"
cloud.google.com/gke-gpu-driver-version : latest
Apply this YAML definition to your cluster using the following command:
envsubst < ray_cluster.yaml | kubectl apply -f -
The $RESERVATION flag is automatically replaced with the name you
configured as environment variable.
Ray Operator creates the raylet pods, which in turn triggers autoscaling of
the cluster to provide those pods with the appropriate nodes. Three pods are
created in your cluster: one head node, and two worker nodes. The worker
nodes are equipped with the B200 GPUs.
To verify that all three of the pods are ready, run the following:
kubectl get pods
The pod list of a ready Ray Cluster is similar to the following:
NAME READY STATUS RESTARTS AGE
gemma3-tuning-gpu-group-worker-s4h8f 2/2 Running 0 16m
gemma3-tuning-gpu-group-worker-stg5f 2/2 Running 0 5m34s
gemma3-tuning-head-zbdvp 2/2 Running 0 16m
Schedule a training job
Save the following as a ray_job.yaml file:
apiVersion : ray.io/v1
kind : RayJob
metadata :
name : test-ray-job
spec :
entrypoint : python /code/vision_train.py --gcs_bucket $GCS_BUCKET
runtimeEnvYAML : |
pip:
- torch==2.8.0
- torchvision==0.23.0
- ray==2.48.0
- transformers==4.55.2
- datasets==4.0.0
- evaluate==0.4.5
- accelerate==1.10.0
- pillow==11.3.0
- bitsandbytes==0.47.0
- trl==0.21.0
- peft==0.17.0
clusterSelector :
ray.io/cluster : gemma3-tuning
Submit the RayJob definition to your RayCluster:
envsubst < ray_job.yaml | kubectl apply -f -
Check that a new Pod is in your cluster:
kubectl get pods
Make a note of the full name of the test-ray-job- Pod that you
see in the output. This name is unique to your job.
Inspect the progress of your training. Replace gemma-training-ray-job-UNIQUE_ID
with the unique Pod name that you noted in the previous step.
kubectl logs -f <gemma-training-ray-job-UNIQUE_ID>
The output that you see is similar to the following:
2025-08-20 08:29:34,966 INFO cli.py:41 -- Job submission server address: http://gemma3-tuning-head-svc.default.svc.cluster.local:8265
2025-08-20 08:29:34,991 SUCC cli.py:65 -- -----------------------------------------------
2025-08-20 08:29:34,991 SUCC cli.py:66 -- Job 'test-ray-job-82mm7' submitted successfully
2025-08-20 08:29:34,991 SUCC cli.py:67 -- -----------------------------------------------
2025-08-20 08:29:34,992 INFO cli.py:291 -- Next steps
2025-08-20 08:29:34,992 INFO cli.py:292 -- Query the logs of the job:
2025-08-20 08:29:34,992 INFO cli.py:294 -- ray job logs test-ray-job-82mm7
2025-08-20 08:29:34,992 INFO cli.py:296 -- Query the status of the job:
2025-08-20 08:29:34,992 INFO cli.py:298 -- ray job status test-ray-job-82mm7
2025-08-20 08:29:34,992 INFO cli.py:300 -- Request the job to be stopped:
2025-08-20 08:29:34,992 INFO cli.py:302 -- ray job stop test-ray-job-82mm7
2025-08-20 08:29:35,003 INFO cli.py:312 -- Tailing logs until the job exits (disable with --no-wait):
2025-08-20 08:29:34,982 INFO job_manager.py:531 -- Runtime env is setting up.
Starting training task!
Commencing training!
2025-08-20 08:30:08,498 INFO worker.py:1606 -- Using address 10.76.0.17:6379 set in the environment variable RAY_ADDRESS
2025-08-20 08:30:08,506 INFO worker.py:1747 -- Connecting to existing Ray cluster at address: 10.76.0.17:6379...
2025-08-20 08:30:08,527 INFO worker.py:1918 -- Connected to Ray cluster. View the dashboard at 10.76.0.17:8265
2025-08-20 08:30:08,701 INFO tune.py:253 -- Initializing Ray automatically. For cluster usage or custom Ray initialization, call `ray.init(...)` before `<FrameworkTrainer>(...)`.
2025-08-20 08:30:08,951 WARNING tune_controller.py:2132 -- The maximum number of pending trials has been automatically set to the number of available cluster CPUs, which is high (519 CPUs/pending trials). If you're running an experiment with a large number of trials, this could lead to scheduling overhead. In this case, consider setting the `TUNE_MAX_PENDING_TRIALS_PG` environment variable to the desired maximum number of concurrent pending trials.
2025-08-20 08:30:08,953 WARNING tune_controller.py:2132 -- The maximum number of pending trials has been automatically set to the number of available cluster CPUs, which is high (519 CPUs/pending trials). If you're running an experiment with a large number of trials, this could lead to scheduling overhead. In this case, consider setting the `TUNE_MAX_PENDING_TRIALS_PG` environment variable to the desired maximum number of concurrent pending trials.
View detailed results here: YOUR_GCS_BUCKET/gemma_vision_train_2025_08_20_08_30_07
To visualize your results with TensorBoard, run: `tensorboard --logdir /tmp/ray/session_2025-08-20_04-43-14_215096_1/artifacts/2025-08-20_08-30-08/gemma_vision_train_2025_08_20_08_30_07/driver_artifacts`
Training started with configuration:
╭──────────────────────────────────────────────────────────────────────╮
│ Training config │
├──────────────────────────────────────────────────────────────────────┤
│ train_loop_config/dataset_name ...-descriptions-vlm │
│ train_loop_config/gcs_bucket ...-bucket-yooo-west │
│ train_loop_config/gradient_accumulation_steps 4 │
│ train_loop_config/learning_rate 0.0002 │
│ train_loop_config/logging_steps 10 │
│ train_loop_config/lora_alpha 16 │
│ train_loop_config/lora_dropout 0.05 │
│ train_loop_config/lora_r 16 │
│ train_loop_config/max_seq_length 512 │
│ train_loop_config/model_id google/gemma-3-4b-it │
│ train_loop_config/num_train_epochs 3 │
│ train_loop_config/output_dir ...-4b-seo-optimized │
│ train_loop_config/per_device_train_batch_size 1 │
│ train_loop_config/push_to_hub False │
│ train_loop_config/save_steps 100 │
│ train_loop_config/save_strategy epoch │
╰──────────────────────────────────────────────────────────────────────╯
(RayTrainWorker pid=45455, ip=10.76.0.71) Setting up process group for: env:// [rank=0, world_size=16]
(TorchTrainer pid=45197, ip=10.76.0.71) Started distributed worker processes:
(TorchTrainer pid=45197, ip=10.76.0.71) - (node_id=4c934ab2f646a578b03cc335586f30b943e811b645526a74c50bfca1, ip=10.76.0.71, pid=45455) world_rank=0, local_rank=0, node_rank=0
(TorchTrainer pid=45197, ip=10.76.0.71) - (node_id=4c934ab2f646a578b03cc335586f30b943e811b645526a74c50bfca1, ip=10.76.0.71, pid=45450) world_rank=1, local_rank=1, node_rank=0
(TorchTrainer pid=45197, ip=10.76.0.71) - (node_id=4c934ab2f646a578b03cc335586f30b943e811b645526a74c50bfca1, ip=10.76.0.71, pid=45454) world_rank=2, local_rank=2, node_rank=0
(TorchTrainer pid=45197, ip=10.76.0.71) - (node_id=4c934ab2f646a578b03cc335586f30b943e811b645526a74c50bfca1, ip=10.76.0.71, pid=45448) world_rank=3, local_rank=3, node_rank=0
(TorchTrainer pid=45197, ip=10.76.0.71) - (node_id=4c934ab2f646a578b03cc335586f30b943e811b645526a74c50bfca1, ip=10.76.0.71, pid=45453) world_rank=4, local_rank=4, node_rank=0
(TorchTrainer pid=45197, ip=10.76.0.71) - (node_id=4c934ab2f646a578b03cc335586f30b943e811b645526a74c50bfca1, ip=10.76.0.71, pid=45452) world_rank=5, local_rank=5, node_rank=0
(TorchTrainer pid=45197, ip=10.76.0.71) - (node_id=4c934ab2f646a578b03cc335586f30b943e811b645526a74c50bfca1, ip=10.76.0.71, pid=45451) world_rank=6, local_rank=6, node_rank=0
(TorchTrainer pid=45197, ip=10.76.0.71) - (node_id=4c934ab2f646a578b03cc335586f30b943e811b645526a74c50bfca1, ip=10.76.0.71, pid=45449) world_rank=7, local_rank=7, node_rank=0
(TorchTrainer pid=45197, ip=10.76.0.71) - (node_id=c0db52b44f891f3d6a1cedcbea4c6beb2c8434c66ef414dc15e65743, ip=10.76.0.135, pid=45729) world_rank=8, local_rank=0, node_rank=1
(TorchTrainer pid=45197, ip=10.76.0.71) - (node_id=c0db52b44f891f3d6a1cedcbea4c6beb2c8434c66ef414dc15e65743, ip=10.76.0.135, pid=45726) world_rank=9, local_rank=1, node_rank=1
(TorchTrainer pid=45197, ip=10.76.0.71) - (node_id=c0db52b44f891f3d6a1cedcbea4c6beb2c8434c66ef414dc15e65743, ip=10.76.0.135, pid=45728) world_rank=10, local_rank=2, node_rank=1
(TorchTrainer pid=45197, ip=10.76.0.71) - (node_id=c0db52b44f891f3d6a1cedcbea4c6beb2c8434c66ef414dc15e65743, ip=10.76.0.135, pid=45727) world_rank=11, local_rank=3, node_rank=1
(TorchTrainer pid=45197, ip=10.76.0.71) - (node_id=c0db52b44f891f3d6a1cedcbea4c6beb2c8434c66ef414dc15e65743, ip=10.76.0.135, pid=45725) world_rank=12, local_rank=4, node_rank=1
(TorchTrainer pid=45197, ip=10.76.0.71) - (node_id=c0db52b44f891f3d6a1cedcbea4c6beb2c8434c66ef414dc15e65743, ip=10.76.0.135, pid=45724) world_rank=13, local_rank=5, node_rank=1
(TorchTrainer pid=45197, ip=10.76.0.71) - (node_id=c0db52b44f891f3d6a1cedcbea4c6beb2c8434c66ef414dc15e65743, ip=10.76.0.135, pid=45723) world_rank=14, local_rank=6, node_rank=1
(TorchTrainer pid=45197, ip=10.76.0.71) - (node_id=c0db52b44f891f3d6a1cedcbea4c6beb2c8434c66ef414dc15e65743, ip=10.76.0.135, pid=45722) world_rank=15, local_rank=7, node_rank=1
...
Training finished iteration 3 at 2025-08-20 08:40:43. Total running time: 10min 34s
╭─────────────────────────────────────────╮
│ Training result │
├─────────────────────────────────────────┤
│ checkpoint_dir_name checkpoint_000002 │
│ time_this_iter_s 152.6374 │
│ time_total_s 525.88585 │
│ training_iteration 3 │
│ epoch 2.75294 │
│ grad_norm 47.27161 │
│ learning_rate 0.0002 │
│ loss 22.5275 │
│ mean_token_accuracy 0.90325 │
│ num_tokens 1583017. │
│ step 60 │
╰─────────────────────────────────────────╯
...
Training completed after 3 iterations at 2025-08-20 08:40:52. Total running time: 10min 43s
2025-08-20 08:40:53,113 INFO tune.py:1009 -- Wrote the latest version of all result files and experiment state to 'YOUR_GCS_BUCKET/gemma_vision_train_2025_08_20_08_30_07' in 0.1663s.
2025-08-20 08:40:58,304 SUCC cli.py:65 -- ----------------------------------
2025-08-20 08:40:58,305 SUCC cli.py:66 -- Job 'test-ray-job-82mm7' succeeded
2025-08-20 08:40:58,305 SUCC cli.py:67 -- ----------------------------------
Monitor your workload
You can use the dashboard in Ray to monitor the workloads that are scheduled in
your cluster.
To access this dashboard, you need to set up port-forwarding to your cluster by
running the following command in a new terminal window:
kubectl port-forward service/gemma3-tuning-head-svc 8265 :8265 > fwd.log 2>&1 &
Open the following link in your browser: [http://localhost:8265](http://localhost:8265) .
Optionally, if you're using Cloud Shell, after you run the command
in the previous step, you can click the Web Preview button, as shown in
the following image:
Select the Change port option, enter 8265 , and then click Change and Preview .
The Ray Dashboard opens in a new tab.
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
To delete the Ray Cluster and release the GPU-powered node, run the following:
kubectl delete -f ray_cluster.yaml
GKE automatically scales down your cluster and releases
the A4 machines used by Ray.
To delete the entire GKE cluster, run the following:
gcloud container clusters delete $CLUSTER_NAME \
--region = $REGION
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
