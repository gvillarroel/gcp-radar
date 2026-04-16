---
title: "Serve Qwen3-8B-Base with vLLM on TPUs \_|\_ AI Hypercomputer \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/tpu/serve-qwen3-8b-base
knowledge_key: corpus
source_id: site-docs-root-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/tpu/serve-qwen3-8b-base
  title: "Serve Qwen3-8B-Base with vLLM on TPUs \_|\_ AI Hypercomputer \_|\_ Google\
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
Serve Qwen3-8B-Base with vLLM on TPUs
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows you how to serve the Qwen/Qwen3-8B-Base model
using the vLLM TPU serving framework
on a v6e TPU VM.
Objectives
Set up your environment.
Run vLLM with Qwen3-8B-Base.
Send an inference request.
Run a benchmark workload.
Clean up.
Costs
This tutorial uses billable components of Google Cloud, including:
Cloud TPU
Compute Engine
To generate a cost estimate based on your projected usage, use the
pricing calculator .
Before you begin
Before going through this tutorial, follow the instructions in the
Set up the Cloud TPU environment page. The
instructions guide you through the steps needed to create a Google Cloud
project and configure it to use Cloud TPU. You may also use an existing
Google Cloud project. If you choose to do so, you can skip the create a
Google Cloud project step and start with Set up your environment to use Cloud TPU .
You need a Hugging Face access token to use this tutorial. You can sign up
for a free account at Hugging Face . Once you have
an account, generate an access token:
On the Welcome to Hugging Face page,
click your account avatar and select Access tokens .
On the Access Tokens page, click Create new token .
Select the Read token type and enter a name for your token.
Your access token is displayed. Save the token in a safe place.
Set up your environment
Create a Cloud TPU v6e VM using the queued resources API. For Qwen3-8B-Base,
we recommend using a v6e-1 TPU.
export PROJECT_ID = YOUR_PROJECT_ID
export TPU_NAME = Qwen3-8B-Base-tutorial
export ZONE = us-east5-a
export QR_ID = Qwen3-8B-Base-qr
gcloud alpha compute tpus queued-resources create $QR_ID \
--node-id $TPU_NAME \
--project $PROJECT_ID \
--zone $ZONE \
--accelerator-type v6e-1 \
--runtime-version v2-alpha-tpuv6e
Check to make sure your TPU VM is ready.
gcloud compute tpus queued-resources describe $QR_ID \
--project $PROJECT_ID \
--zone $ZONE
When your TPU VM has been created the status of the queued resource request
will be set to ACTIVE . For example:
name: projects/your-project-id/locations/your-zone/queuedResources/your-queued-resource-id
state:
state: ACTIVE
tpu:
nodeSpec:
- node:
acceleratorType: v6e-1
bootDisk: {}
networkConfig:
enableExternalIps: true
queuedResource: projects/your-project-number/locations/your-zone/queuedResources/your-queued-resource-id
runtimeVersion: v2-alpha-tpuv6e
schedulingConfig: {}
serviceAccount: {}
shieldedInstanceConfig: {}
useTpuVm: true
nodeId: your-node-id
parent: projects/your-project-number/locations/your-zone
Connect to the TPU VM.
gcloud compute tpus tpu-vm ssh $TPU_NAME \
--project $PROJECT_ID \
--zone $ZONE
Run vLLM with Qwen3-8B-Base
Inside the TPU VM, run the vLLM Docker container. This command uses a
shared memory size of 10 GB.
export DOCKER_URI = vllm/vllm-tpu:latest
sudo docker run -it --rm --name $USER -vllm --privileged --net = host \
-v /dev/shm:/dev/shm \
--shm-size 10gb \
-p 8000 :8000 \
--entrypoint /bin/bash ${ DOCKER_URI }
Inside the container, set your Hugging Face token. Replace YOUR_HF_TOKEN
with your Hugging Face token.
export HF_HOME = /dev/shm
export HF_TOKEN = YOUR_HF_TOKEN
Start the vLLM server using the vllm serve command.
export MAX_MODEL_LEN = 4096
export TP = 1 # number of chips
vllm serve Qwen/Qwen3-8B-Base \
--seed 42 \
--disable-log-requests \
--gpu-memory-utilization 0 .98 \
--max-num-batched-tokens 1024 \
--max-num-seqs 128 \
--tensor-parallel-size $TP \
--max-model-len $MAX_MODEL_LEN
When the vLLM server is running you will see output like the following:
( APIServer pid = 7 ) INFO: Started server process [ 7 ]
( APIServer pid = 7 ) INFO: Waiting for application startup.
( APIServer pid = 7 ) INFO: Application startup complete.
Send an inference request
Once the vLLM server is running, you can send requests to it from a new shell.
Open a new shell and connect to your TPU VM.
export PROJECT_ID = YOUR_PROJECT_ID
export TPU_NAME = Qwen3-8B-Base-tutorial
export ZONE = us-east5-a
gcloud compute tpus tpu-vm ssh $TPU_NAME \
--project $PROJECT_ID \
--zone = $ZONE
Open a shell into the running Docker container.
sudo docker exec -it $USER -vllm /bin/bash
Send a test request to the server using curl .
curl http://localhost:8000/v1/completions \
-H "Content-Type: application/json" \
-d '{
"model": "Qwen/Qwen3-8B-Base",
"prompt": "The future of AI is",
"max_tokens": 200,
"temperature": 0
}'
The response is returned in JSON format.
Run a benchmark workload
You can run benchmarks against the running server from your second terminal.
Inside the container, install the datasets library.
pip install datasets
Run the vllm bench serve command.
export HF_HOME = /dev/shm
cd /workspace/vllm
vllm bench serve \
--backend vllm \
--model "Qwen/Qwen3-8B-Base" \
--dataset-name random \
--num-prompts 1000 \
--seed 100
The benchmark results appear as follows:
============ Serving Benchmark Result ============
Successful requests: 1000
Failed requests: 0
Benchmark duration ( s ) : 73 .97
Total input tokens: 1024000
Total generated tokens: 128000
Request throughput ( req/s ) : 13 .52
Output token throughput ( tok/s ) : 1730 .38
Peak output token throughput ( tok/s ) : 2522 .00
Peak concurrent requests: 1000 .00
Total Token throughput ( tok/s ) : 15573 .42
---------------Time to First Token----------------
Mean TTFT ( ms ) : 34834 .97
Median TTFT ( ms ) : 34486 .19
P99 TTFT ( ms ) : 70234 .40
-----Time per Output Token ( excl. 1st token ) ------
Mean TPOT ( ms ) : 47 .30
Median TPOT ( ms ) : 48 .57
P99 TPOT ( ms ) : 48 .60
---------------Inter-token Latency----------------
Mean ITL ( ms ) : 47 .31
Median ITL ( ms ) : 53 .49
P99 ITL ( ms ) : 54 .58
==================================================
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
In the second shell, type exit to exit from the vLLM container.
In the second shell, type exit command to close the terminal.
In the first shell, type Ctrl + C to stop the vLLM server.
In the first shell, type exit to exit from the vLLM container.
In the first shell, type exit to disconnect from the TPU VM.
Delete your resources
You can delete the project which will delete all resources or you can keep the
project and delete the resources.
Delete your project
To delete your Google Cloud project and all associated resources run:
gcloud projects delete $PROJECT_ID
Delete TPU resources
Delete your Cloud TPU resources. The following command deletes both the
queued resource request and the TPU VM using the --force parameter.
gcloud alpha compute tpus queued-resources delete $QR_ID \
--project = $PROJECT_ID \
--zone = $ZONE \
--force
What's next
Learn more about vLLM on Cloud TPU .
Learn more about Cloud TPU .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
