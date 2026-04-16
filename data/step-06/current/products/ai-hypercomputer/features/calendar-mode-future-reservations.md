---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:52:40.544Z"
product_name: "AI Hypercomputer"
product_slug: "ai-hypercomputer"
feature_name: "Calendar mode future reservations"
feature_slug: "calendar-mode-future-reservations"
latest_feature_date: "2025-07-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/fsdp-llama4"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models"
keywords:
  - "calendar"
  - "reservations"
  - "preview"
  - "future"
  - "supports"
  - "mode"
---

# Calendar mode future reservations

Product: AI Hypercomputer
Coverage: LOW

## Step 02 Summary

In preview, AI Hypercomputer supports creating future reservations in calendar mode up to 90 days ahead to reserve up to 80 GPU VMs and use that capacity for model training, fine-tuning, simulations, or inference.

## Extended Definition

In preview, AI Hypercomputer supports creating future reservations in calendar mode up to 90 days ahead to reserve up to 80 GPU VMs and use that capacity for model training, fine-tuning, simulations, or inference.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy](https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/fsdp-llama4](https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/fsdp-llama4)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models](https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models)

## Supporting Pages

### "Use FSDP to fine-tune Llama 4 on an A4 Slurm cluster \_|\_ AI Hypercomputer\

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/fsdp-llama4](https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/fsdp-llama4)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- To specify the tasks for the jobs to run on your Slurm cluster, create the submit.slurm file with the following content: #!/bin/bash #SBATCH --job-name=llama4-fsdp-fixed #SBATCH --nodes=2 #SBATCH --ntasks-per-node=8 #SBATCH --gpus-per-node=8 #SBATCH --partition=a4high #SBATCH --output=llama4-%j.out #SBATCH --error=llama4-%j.err set -e set -x echo "--- Slurm Job Started ---" echo "Job ID: $SLURM JOB ID " echo "Node List: $SLURM JOB NODELIST " --- Define Paths --- LOCAL SSD PATH = "/mnt/localssd/job ${ SLURM JOB ID } " VENV PATH = " ${ HOME } /.venv/venv-fsdp" MODEL PATH = " ${ HOME } /Llama-4-Scout-17B-16E-Instruct" --- STAGE 1: Stage Data to Local SSD on Each Node --- srun --ntasks = $SLURM NNODES --ntasks-per-node = 1 bash -c " echo '--- Staging on node: $( hostname ) ---' mkdir -p ${ LOCAL SSD PATH } echo 'Copying virtual environment...' rsync -a -q ${ VENV PATH } / ${ LOCAL SSD PATH } /venv/ echo 'Copying model weights...' rsync -a --info=progress2 ${ MODEL PATH } / ${ LOCAL SSD PATH } /model/ mkdir -p ${ LOCAL SSD PATH } /hf cache echo '--- Staging on $( hostname ) complete ---' " echo "--- Staging complete on all nodes ---" --- STAGE 2: Run the Training Job --- echo "--- Launching Distributed Training with GIB NCCL Plugin ---" nodes =( $( scontrol show hostnames " $SLURM JOB NODELIST " ) ) head node = ${ nodes [0] } head node ip = $( srun --nodes = 1 --ntasks = 1 -w " $head node " hostname --ip-address ) export MASTER ADDR = $head node ip export MASTER PORT = 29500 export NCCL SOCKET IFNAME = enp0s19 export NCCL NET = gIB export NCCL DEBUG=INFO # Un-comment to diagnose NCCL issues if needed srun --cpu-bind = none --accel-bind = g bash -c ' Activate the environment from the local copy source ' ${ LOCAL SSD PATH } '/venv/bin/activate Point Hugging Face cache to the local SSD export HF HOME=' ${ LOCAL SSD PATH } '/hf cache export RANK=$SLURM PROCID export WORLD SIZE=$SLURM NTASKS export LOCAL RANK=$SLURM LOCALID export LD LIBRARY PATH=/usr/local/gib/lib64:$LD LIBRARY PATH source /usr/local/gib/scripts/set nccl env.sh --- Launch the training --- python \ ' ${ SLURM SUBMIT DIR } '/llama4-train-distributed.py \ --model id="' ${ LOCAL SSD PATH } '/model/" \ --output dir="' ${ LOCAL SSD PATH } '/outputs/" \ --dataset name="philschmid/gretel-synthetic-text-to-sql" \ --seed=900913 \ --bf16=True \ --num train epochs=1 \ --per device train batch size=2 \ --gradient accumulation steps=4 \ --learning rate=2e-5 \ --logging steps=10 \ --lora r=16 \ --lora alpha=32 \ --lora dropout=0.05 \ --run inference after training ' --- STAGE 3: Copy Final Results Back to Persistent Storage --- echo "--- Copying final results from local SSD to shared storage ---" PERSISTENT OUTPUT DIR = " ${ HOME } /outputs/llama4 job ${ SLURM JOB ID } " mkdir -p " $PERSISTENT OUTPUT DIR " Only copy from the head node where trl has combined the results srun --nodes = 1 --ntasks = 1 -w " $head node " \ rsync -a --info = progress2 " ${ LOCAL SSD PATH } /outputs/" " ${ PERSISTENT OUTPUT DIR } /" --- STAGE 4: Cleanup --- echo "--- Cleaning up local SSD on all nodes ---" srun --ntasks = $SLURM NNODES --ntasks-per-node = 1 bash -c "rm -rf ${ LOCAL SSD PATH } " echo "--- Slurm Job Finished ---" Upload scripts to the Slurm cluster To upload the scripts that you created in the previous section to the Slurm cluster, follow these steps: To identify your login node, list all A4 VMs in your project: gcloud compute instances list --filter = "machineType:a4-highgpu-8g" The name of the login node is similar to a4-high-login-001 .
- Users will ask you questions in English and you will generate a SQL query based on the provided SCHEMA." user prompt = f "### SCHEMA: \n { example [ 'sql context' ] } \n\n ### USER QUERY: \n { example [ 'sql prompt' ] } " response = f " \n\n ### SQL QUERY: \n { example [ 'sql' ] } " return f " { system message } \n\n { user prompt }{ response } " def main (): parser = HfArgumentParser (( ScriptArguments , PeftArguments , SftTrainingArguments )) script args , peft args , training args = parser . parse args into dataclasses () training args . gradient checkpointing = True training args . gradient checkpointing kwargs = { "use reentrant" : False } training args . optim = "adamw torch fused" training args . fsdp = "full shard" training args . fsdp config = { "fsdp auto wrap policy" : "TRANSFORMER BASED WRAP" , "fsdp transformer layer cls to wrap" : [ Llama4TextDecoderLayer ], "fsdp state dict type" : "FULL STATE DICT" , "fsdp offload params" : False , "fsdp forward prefetch" : True , } tokenizer = AutoTokenizer . from pretrained ( script args . model id , trust remote code = True ) model = AutoModelForCausalLM . from pretrained ( script args . model id , torch dtype = torch . bfloat16 , trust remote code = True , attn implementation = "sdpa" , ) peft config = LoraConfig ( r = peft args . lora r , lora alpha = peft args . lora alpha , lora dropout = peft args . lora dropout , bias = "none" , task type = "CAUSAL LM" , target modules = [ "q proj" , "v proj" , "k proj" , "o proj" , "gate proj" , "up proj" , "down proj" ], ) rank = get rank () world size = get world size () dataset = load dataset ( script args . dataset name , split = "train" ) if script args . dataset subset size is not None : dataset = dataset . select ( range ( script args . dataset subset size )) else : print ( f "Using the full dataset with { len ( dataset ) } samples." ) dataset = dataset . shuffle ( seed = training args . seed ) print ( f "Dataset shuffled with seed: { training args . seed } ." ) if world size > 1 : print ( f "Sharding dataset for Rank { rank } of { world size } ." ) dataset = dataset . shard ( num shards = world size , index = rank ) print ( "Initializing SFTTrainer..." ) trainer = SFTTrainer ( model = model , args = training args , train dataset = dataset , peft config = peft config , formatting func = formatting prompts func , processing class = tokenizer , ) trainer . train () trainer . save model ( training args . output dir ) if script args . run inference after training and trainer . is world process zero (): del model del trainer torch . cuda . empty cache () run post training inference ( script args , training args , tokenizer ) def run post training inference ( script args , training args , tokenizer ): """ Loads the fine-tuned PEFT adapter from the local output directory and runs inference.
- To specify the Python dependencies for the training script, create a requirements-fsdp.txt file with the following content: transformers==4.55.0 datasets==4.0.0 peft==0.16.0 accelerate==1.9.0 trl==0.21.0 Other dependencies sentencepiece==0.2.0 Specify llama4-train-distributed.py as the main training script: import torch from datasets import load dataset from peft import LoraConfig , PeftModel from transformers import ( AutoModelForCausalLM , AutoTokenizer , TrainingArguments , HfArgumentParser , ) from torch.distributed import get rank , get world size from transformers.models.llama4.modeling llama4 import Llama4TextDecoderLayer from trl import SFTTrainer from dataclasses import dataclass , field from typing import Optional @dataclass class ScriptArguments : model id : str = field ( metadata = { "help" : "Hugging Face model ID from the Hub" }) dataset name : str = field ( default = "philschmid/gretel-synthetic-text-to-sql" , metadata = { "help" : "Dataset from the Hub" }) run inference after training : bool = field ( default = False , metadata = { "help" : "Run sample inference on rank 0 after training" }) dataset subset size : Optional [ int ] = field ( default = None , metadata = { "help" : "Number of samples to use from the dataset for training.
- Users will ask you questions in English and you will generate a SQL query based on the provided SCHEMA." question = "Show me all artists from the Country just north of the USA." This must match the formatting func exactly prompt = f " { system message } \n\n ### SCHEMA: \n { schema } \n\n ### USER QUERY: \n { question } \n\n ### SQL QUERY: \n " print ( f "Test Prompt: \n { prompt } " ) inputs = tokenizer ( prompt , return tensors = "pt" ) . to ( "cuda" ) print ( " \n --- Generating SQL... ---" ) outputs = model . generate ( inputs , max new tokens = 100 , pad token id = tokenizer . eos token id , do sample = False , temperature = None , top p = None , ) generated sql = tokenizer . decode ( outputs [ 0 ], skip special tokens = True )[ len ( prompt ):] . strip () print ( f " \n --- Generated SQL Query ---" ) print ( generated sql ) print ( " \n " + "=" 50 ) print ( "=== INFERENCE TEST COMPLETE ===" ) print ( "=" 50 + " \n " ) if name == " main " : main () This script utilizes the TRL Supervised Fine-Tuning (SFT) Trainer to manage FSDP training loops, Low-Rank Adaptation (LoRA) configuration, and data formatting.

### Choose a consumption option \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models](https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models)
- Source ID: `site-docs-root-required-2`
- Final score: 28
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Comparison of consumption options The following table summarizes the key differences between the consumption options: Consumption option Future reservations in AI Hypercomputer Future reservations for up to 90 days (in calendar mode) Flex-start Spot Supported machines A4X Max, A4X, A4, A3 Ultra, A3 Mega, or A3 High A4, A3 Ultra, A3 Mega, or A3 High with 8 GPUs Any GPU machine except A4X Max and A4X Any GPU machine except A4X Max and A4X Lifespan Unlimited Up to 90 days Up to 7 days Unlimited (but subject to preemption ) Preemptible Capacity assurance Very high .
- Ideal workloads for future reservations in calendar mode Future reservations in calendar mode are ideal for the following workloads: Model pre-training Model fine-tuning Simulations Inference Key characteristics of future reservations in calendar mode Future reservations in calendar mode have the following characteristics: You can reserve A4, A3 Ultra, A3 Mega, or A3 High (8 GPUs) machine types.
- How to use future reservations in calendar mode To use future reservations in calendar mode to create VMs or clusters, you must complete the following steps: View resources availability .
- Use future reservations in calendar mode To run short-running distributed workloads that require densely allocated resources, you can request compute resources for up to 90 days.

### Recommended configurations \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy](https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Workloads Recommendations Cluster deployment guide Machine type Orchestrator Fine-tuning large models A4X Max A4X A4 GKE Create an AI-optimized GKE cluster with default configuration Slurm Create an AI-optimized cluster based on a template Create an AI-optimized Slurm cluster Fine-tuning large models A3 Mega GKE Maximize GPU network bandwidth in Standard mode clusters Slurm Create an AI-optimized cluster based on a template Deploy an A3 Mega Slurm cluster for ML training Fine-tuning large models A3 High GKE Maximize GPU network bandwidth in Standard mode clusters Slurm Deploy an A3 High Slurm cluster Recommended consumption type For fine-tuning workloads we recommend using future reservation in calendar mode to provision resources.
- Workloads Recommendations VM deployment guide Machine type Orchestrator Single-host frontier inference A4 A3 Ultra N/A Create an AI-optimized instance Single-host frontier inference A3 High N/A Create an A3 VM with GPUDirect-TCPX enabled Recommended consumption type For inferencing we recommend using either a long running reservation or future reservation in calendar mode.
- Resource Recommendation Model pre-training Machine family Use one of the following accelerator-optimized machine types: A4X Max, A4X, A4, A3 Ultra, A3 Mega, or A3 High Consumption type Use reservations Storage Use a Google Cloud managed service such as Google Cloud Managed Lustre or Cloud Storage FUSE Model fine-tuning Machine family Use A4X Max, A4X, A4, or A3 accelerator-optimized machine types Consumption type Use reservations Storage Use a Google Cloud managed service such as Google Cloud Managed Lustre or Cloud Storage FUSE Inference Machine family Use one of the following accelerator-optimized machine types: A4X Max, A4X, A4, A3 Ultra, A3 Mega, or A3 High Consumption type Use reservations Storage Use a Google Cloud managed service such as Google Cloud Managed Lustre or Cloud Storage FUSE HPC See the summary section of the best practices for running HPC workloads Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Workloads overview AI Hypercomputer architecture supports the following use cases: Workloads Description Recommendation Pre-training foundation models This involves building a language model using a large dataset.

