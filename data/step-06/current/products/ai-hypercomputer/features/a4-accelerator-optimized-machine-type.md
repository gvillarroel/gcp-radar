---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.594Z"
product_name: "AI Hypercomputer"
product_slug: "ai-hypercomputer"
feature_name: "A4 accelerator-optimized machine type"
feature_slug: "a4-accelerator-optimized-machine-type"
latest_feature_date: "2025-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/gemma3-finetune-a4-gke-cluster"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/train-qwen2-a4-slurm-cluster"
keywords:
  - "us-central1-b availability"
  - "A4 accelerator-optimized machine type"
  - "AI and ML workload on A4"
  - "NVIDIA B200 GPU"
  - "3x performance"
  - "A4 B200"
  - "A4 machine type"
  - "A4"
---

# A4 accelerator-optimized machine type

Product: AI Hypercomputer
Coverage: MEDIUM

## Step 02 Summary

The A4 machine type is generally available with NVIDIA B200 GPUs, delivering up to 3x performance versus previous GPU machine types and is available in us-central1-b for AI and ML workloads.

## Extended Definition

The A4 accelerator-optimized machine type is a Google Cloud AI Hypercomputer VM machine type used for AI/ML workloads. In official AI Hypercomputer documentation, A4 VMs are shown in training/fine-tuning tutorials and include 8 NVIDIA B200 GPUs per VM (for example, "a4-highgpu-8g" instances in cluster examples). The A4 machine type is constrained in usage by documented platform and lifecycle rules, including restriction to the Emerald Rapids CPU platform and limits on reconfiguring instances to/from A4.

## Evidence Summary

The cited pages confirm A4’s role as an AI/ML-oriented machine type with 8×NVIDIA B200 GPU-backed instances and document key operational constraints, but do not provide the claimed GA, 3x performance, or us-central1-b availability details in the provided excerpts.

## Source Links

- [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/gemma3-finetune-a4-gke-cluster](https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/gemma3-finetune-a4-gke-cluster)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/train-qwen2-a4-slurm-cluster](https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/train-qwen2-a4-slurm-cluster)

## Supporting Pages

### "Create an AI-optimized instance with A4 or A3 Ultra \_|\_ AI Hypercomputer\

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm)
- Source ID: `site-iam-reference`
- Final score: 82
- Re-rank relevance: STRONG
- Re-rank rationale: The page is specifically about creating standalone VMs with A4 and provides detailed constraints for A4 usage, directly informing the feature definition.

Evidence snippets:
- Limitations When you create a standalone A4 or A3 Ultra VM, the following limitations apply: A4 You don't receive sustained use discounts and flexible committed use discounts for instances that use an A4 machine type.
- You can't attach Hyperdisk ML disks that were created before February 4, 2026 to A4 machine types.
- You can't change the machine type of an instance to or from A4 machine type.
- The A4 machine type is only available on the Emerald Rapids CPU platform .

### "Fine-tune Gemma 3 on an A4 GKE cluster \_|\_ AI Hypercomputer \_|\_ Google\

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/gemma3-finetune-a4-gke-cluster](https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/gemma3-finetune-a4-gke-cluster)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: The tutorial is specifically about running workloads on an A4 VM-based GKE cluster and references capacity reservation for A4, so it supports context for using the A4 machine type in AI/ML, though it does not define the GA/performance/region specifics.

Evidence snippets:
- This cluster uses an A4 virtual machine (VM) instance which has 8 NVIDIA B200 GPUs.
- Home Documentation Compute AI Hypercomputer Guides Send feedback Fine-tune Gemma 3 on an A4 GKE cluster Stay organized with collections Save and categorize content based on your preferences.
- Job duration : the job should take approximately 10 minutes to complete on the specified A4 cluster.
- Important: To complete this tutorial, you must have reserved the capacity to create an A4 VM.

### "Train Qwen2 on an A4 Slurm cluster \_|\_ AI Hypercomputer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/train-qwen2-a4-slurm-cluster](https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/train-qwen2-a4-slurm-cluster)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- The Slurm cluster uses two a4-highgpu-8g virtual machines (VMs), which each have 8 NVIDIA B200 GPUs.
- You can now submit jobs with sbatch. ---" To specify the configurations for your fine-tuning job, create the accelerate config.yaml file with the following content: Default configuration for a 2-node, 8-GPU-per-node (16 total GPUs) FSDP training job. compute environment : "LOCAL MACHINE" distributed type : "FSDP" downcast bf16 : "no" machine rank : 0 main training function : "main" mixed precision : "bf16" num machines : 2 num processes : 16 rdzv backend : "static" same network : true tpu env : [] use cpu : false To specify the tasks for the jobs to run on your Slurm cluster, create the submit.slurm file with the following content: #!/bin/bash #SBATCH --job-name=qwen2-pretrain-smollm-fineweb #SBATCH --nodes=2 #SBATCH --ntasks-per-node=8 # 8 tasks per node #SBATCH --gpus-per-task=1 # 1 GPU per task #SBATCH --partition=a4high #SBATCH --output=logs/slurm-%j.out #SBATCH --error=logs/slurm-%j.err set -e echo "--- Slurm Job Started ---" --- STAGE 1: Setup environment and pre-process data on each node's local SSD --- This command runs once per node. srun --ntasks = $SLURM NNODES --ntasks-per-node = 1 bash -c ' set -e echo "Setting up local environment on $(hostname)..." LOCAL VENV="/mnt/localssd/venv job ${SLURM JOB ID}" LOCAL CACHE="/mnt/localssd/hf cache job ${SLURM JOB ID}" PROCESSED DATA DIR="/mnt/localssd/processed data ${SLURM JOB ID}" rsync -a --info=progress2 /./.venv/ ${LOCAL VENV}/ mkdir -p ${LOCAL CACHE} ${PROCESSED DATA DIR} echo "Pre-processing data on $(hostname)..." source ${LOCAL VENV}/bin/activate export HF HOME=${LOCAL CACHE} export HF DATASETS CACHE=${LOCAL CACHE} This runs the new preprocessing script.
- Create an A4 Slurm cluster To create an A4 Slurm cluster, follow these steps: Go to the cluster-toolkit directory: cd cluster - toolkit If it's your first time using Cluster Toolkit, then build the gcluster binary: make Go to the examples/machine-learning/a4-highgpu-8g directory: cd examples/machine-learning/a4-highgpu-8g/ Open the a4high-slurm-deployment.yaml file, and then edit it as follows: terraform backend defaults : type : gcs configuration : bucket : BUCKET NAME vars : deployment name : a4-high project id : PROJECT ID region : REGION zone : ZONE a4h cluster size : 2 a4h reservation name : RESERVATION URL Replace the following: BUCKET NAME : the name of the Cloud Storage bucket that you created in the previous section.
- You can download the saved model from the login node to your local machine by using the gcloud compute scp command, as shown in the following example: From your local machine LOGIN NODE NAME="your-login-node-name" # e.g., a4high-login-001 PROJECT ID="your-gcp-project-id" ZONE="your-cluster-zone" # e.g., us-west4-a gcloud compute scp --project=" $PROJECT ID " --zone=" $ZONE " --tunnel-through-iap \ " ${ LOGIN NODE NAME } ": /qwen2-from-scratch-on-smollm-fineweb/ ./qwen2-trained-model/ --recurse After you download your model, you can do the following: Load the model for inference : Use the Hugging Face Transformers framework to load the qwen2-trained-model/ directory and perform inference with your newly trained Qwen2 model.

