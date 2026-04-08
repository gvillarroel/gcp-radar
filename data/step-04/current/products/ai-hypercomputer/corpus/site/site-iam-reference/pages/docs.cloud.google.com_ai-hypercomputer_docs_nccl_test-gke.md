---
title: "Run NCCL on GKE clusters that use default configuration \_|\_ AI Hypercomputer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/nccl/test-gke
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/nccl/test-gke
  title: "Run NCCL on GKE clusters that use default configuration \_|\_ AI Hypercomputer\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Run NCCL on GKE clusters that use default configuration | AI Hypercomputer | Google Cloud Documentation
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
Run inference with vLLM on GKE
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
Troubleshoot Co MMA
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
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Run NCCL on GKE clusters that use default configuration
Stay organized with collections
Save and categorize content based on your preferences.
On this page
What's next
This page describes how to run NCCL/gIB tests on GKE clusters. Choose the steps for your machine type:
A4X A4 A3 Ultra
More
Connect to your cluster:
See more code actions.
Light code theme
Dark code theme
gcloud container clusters get-credentials CLUSTER_NAME \
--location = COMPUTE_REGION
Replace the following variables:
CLUSTER_NAME : the name of your
cluster, which, for the clusters created with Cluster Toolkit,
is based on the DEPLOYMENT_NAME .
COMPUTE_REGION : the name of the compute region.
Deploy an all-gather NCCL performance test with TAS enabled by using the
gke-a4x/nccl-jobset-example.yaml
file:
The test uses a certain number of nodes by default. If you want to
change the number of nodes, modify the YAML file to change the
following values to your required number of nodes:
numNodes
parallelism
completions
N_NODES
Create the resources to run the test:
See more code actions.
Light code theme
Dark code theme
kubectl create -f ~/cluster-toolkit/examples/gke-a4x/nccl-jobset-example.yaml
Confirm that all nccl-test Pods have reached the Completed state:
See more code actions.
Light code theme
Dark code theme
kubectl get pods
The output should be similar to the following:
nccl-all-worker-0-0-ft8jm 0/1 Completed 0 13m
nccl-all-worker-0-1-prpvw 0/1 Completed 0 13m
Find a Pod name matching the pattern nccl-all-worker-0-0-* . The logs of
this Pod contain the results of the NCCL test.
To fetch the logs for this Pod, run the following command:
kubectl logs $( kubectl get pods -o go-template = '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}' | grep nccl-all-worker-0-0 )
The output should be similar to the following:
# out-of-place in-place
# size count type redop root time algbw busbw #wrong time algbw busbw #wrong
# (B) (elements) (us) (GB/s) (GB/s) (us) (GB/s) (GB/s)
1024 32 float none -1 19.60 0.05 0.05 0 19.00 0.05 0.05 0
2048 64 float none -1 19.63 0.10 0.09 0 19.47 0.11 0.09 0
4096 128 float none -1 19.88 0.21 0.18 0 19.61 0.21 0.18 0
8192 256 float none -1 20.31 0.40 0.35 0 19.82 0.41 0.36 0
16384 512 float none -1 20.30 0.81 0.71 0 20.17 0.81 0.71 0
32768 1024 float none -1 20.70 1.58 1.39 0 20.36 1.61 1.41 0
65536 2048 float none -1 20.94 3.13 2.74 0 20.88 3.14 2.75 0
131072 4096 float none -1 21.12 6.20 5.43 0 20.96 6.25 5.47 0
262144 8192 float none -1 21.24 12.34 10.80 0 21.01 12.48 10.92 0
524288 16384 float none -1 21.28 24.63 21.55 0 21.07 24.88 21.77 0
1048576 32768 float none -1 21.95 47.77 41.80 0 21.72 48.28 42.24 0
2097152 65536 float none -1 24.15 86.85 76.00 0 23.75 88.30 77.26 0
4194304 131072 float none -1 31.50 133.13 116.49 0 30.75 136.39 119.34 0
8388608 262144 float none -1 47.42 176.88 154.77 0 46.47 180.51 157.95 0
16777216 524288 float none -1 48.72 344.39 301.34 0 47.85 350.63 306.80 0
33554432 1048576 float none -1 75.08 446.91 391.05 0 73.89 454.10 397.34 0
67108864 2097152 float none -1 178.7 375.47 328.53 0 179.1 374.67 327.84 0
134217728 4194304 float none -1 211.1 635.86 556.37 0 211.3 635.21 555.81 0
268435456 8388608 float none -1 413.2 649.68 568.47 0 414.9 646.95 566.08 0
536870912 16777216 float none -1 820.1 654.64 572.81 0 814.9 658.81 576.46 0
1073741824 33554432 float none -1 1566.5 685.43 599.76 0 1567.9 684.82 599.22 0
2147483648 67108864 float none -1 3025.3 709.83 621.10 0 3017.2 711.74 622.77 0
4294967296 134217728 float none -1 5898.8 728.11 637.10 0 5784.0 742.57 649.74 0
8589934592 268435456 float none -1 11541 744.31 651.28 0 11293 760.67 665.58 0
# Out of bounds values : 0 OK
# Avg bus bandwidth : 236.839
Connect to your cluster:
gcloud container clusters get-credentials CLUSTER_NAME \
--location = COMPUTE_REGION
Replace the following variables:
CLUSTER_NAME : the name of your
cluster, which, for the clusters created with Cluster Toolkit,
is based on the DEPLOYMENT_NAME .
COMPUTE_REGION : the name of the compute region.
Deploy an all-gather NCCL performance test with TAS enabled by using the
gke-a4/nccl-jobset-example.yaml
file:
Modify the YAML file in the following ways if you meet the conditions:
The tests use a certain number of nodes by default. If you want to
change the number of nodes, change the following values to your required
number of nodes:
parallelism
completions
N_NODES
If you want to test nodes provisioned by flex-start, in the
metadata field, do the following:
Replace the kueue.x-k8s.io/queue-name value with dws-local-queue .
Add the following annotation:
annotations :
provreq.kueue.x-k8s.io/maxRunDurationSeconds : "600"
Create the resources to run the test:
kubectl create -f ~/cluster-toolkit/examples/gke-a4/nccl-jobset-example.yaml
This command returns a JobSet name.
The output should be similar to the following:
jobset.jobset.x-k8s.io/all-gather8t7dt created
To view the results of the NCCL test, run the following command to view
all of the running Pods:
kubectl get pods
The output should be similar to the following:
NAME READY STATUS RESTARTS AGE
all-gather8t7dt-w-0-0-n9s6j 0/1 Completed 0 9m34s
all-gather8t7dt-w-0-1-rsf7r 0/1 Completed 0 9m34s
Find a Pod name matching the pattern jobset-name-w-0-0-* . The logs of this
Pod contain the results of the NCCL test.
To fetch the logs for this Pod, run the following command:
kubectl logs all-gather8t7dt-w-0-0-n9s6j
The output should be similar to the following:
# size count type redop root time algbw busbw #wrong time algbw busbw #wrong
# (B) (elements) (us) (GB/s) (GB/s) (us) (GB/s) (GB/s)
1024 16 float none -1 54.07 0.02 0.02 0 55.80 0.02 0.02 0
2048 32 float none -1 55.46 0.04 0.03 0 55.31 0.04 0.03 0
4096 64 float none -1 55.59 0.07 0.07 0 55.38 0.07 0.07 0
8192 128 float none -1 56.05 0.15 0.14 0 55.92 0.15 0.14 0
16384 256 float none -1 57.08 0.29 0.27 0 57.75 0.28 0.27 0
32768 512 float none -1 57.49 0.57 0.53 0 57.22 0.57 0.54 0
65536 1024 float none -1 59.20 1.11 1.04 0 59.20 1.11 1.04 0
131072 2048 float none -1 59.58 2.20 2.06 0 63.57 2.06 1.93 0
262144 4096 float none -1 63.87 4.10 3.85 0 63.61 4.12 3.86 0
524288 8192 float none -1 64.83 8.09 7.58 0 64.40 8.14 7.63 0
1048576 16384 float none -1 79.74 13.15 12.33 0 76.66 13.68 12.82 0
2097152 32768 float none -1 78.41 26.74 25.07 0 79.05 26.53 24.87 0
4194304 65536 float none -1 83.21 50.41 47.26 0 81.25 51.62 48.39 0
8388608 131072 float none -1 94.35 88.91 83.35 0 99.07 84.68 79.38 0
16777216 262144 float none -1 122.9 136.55 128.02 0 121.7 137.83 129.21 0
33554432 524288 float none -1 184.2 182.19 170.80 0 178.1 188.38 176.60 0
67108864 1048576 float none -1 294.7 227.75 213.51 0 277.7 241.62 226.52 0
134217728 2097152 float none -1 495.4 270.94 254.00 0 488.8 274.60 257.43 0
268435456 4194304 float none -1 877.5 305.92 286.80 0 861.3 311.65 292.17 0
536870912 8388608 float none -1 1589.8 337.71 316.60 0 1576.2 340.61 319.33 0
1073741824 16777216 float none -1 3105.7 345.74 324.13 0 3069.2 349.85 327.98 0
2147483648 33554432 float none -1 6161.7 348.52 326.74 0 6070.7 353.75 331.64 0
4294967296 67108864 float none -1 12305 349.03 327.22 0 12053 356.35 334.08 0
8589934592 134217728 float none -1 24489 350.77 328.85 0 23991 358.05 335.67 0
# Out of bounds values : 0 OK
# Avg bus bandwidth : 120.248
Connect to your cluster:
gcloud container clusters get-credentials CLUSTER_NAME \
--location = COMPUTE_REGION
Replace the following variables:
CLUSTER_NAME : the name of your
cluster, which, for the clusters created with Cluster Toolkit,
is based on the DEPLOYMENT_NAME .
COMPUTE_REGION : the name of the compute region.
Deploy an all-gather NCCL performance test with TAS enabled by using the
gke-a3-ultragpu/nccl-jobset-example.yaml
file:
Modify the YAML file in the following ways if you meet the conditions:
The tests use a certain number of nodes by default. If you want to
change the number of nodes, change the following values to your required
number of nodes:
parallelism
completions
N_NODES
If you want to test nodes provisioned by flex-start, in the
metadata field, do the following:
Replace the kueue.x-k8s.io/queue-name value with dws-local-queue .
Add the following annotation:
annotations :
provreq.kueue.x-k8s.io/maxRunDurationSeconds : "600"
Create the resources to run the test:
kubectl create -f ~/cluster-toolkit/examples/gke-a3-ultragpu/nccl-jobset-example.yaml
This command returns a JobSet name.
The output should be similar to the following:
jobset.jobset.x-k8s.io/all-gather8t7dt created
To view the results of the NCCL test, run the following command to view
all of the running Pods:
kubectl get pods
The output should be similar to the following:
NAME READY STATUS RESTARTS AGE
all-gather8t7dt-w-0-0-n9s6j 0/1 Completed 0 9m34s
all-gather8t7dt-w-0-1-rsf7r 0/1 Completed 0 9m34s
Find a Pod name matching the pattern jobset-name-w-0-0-* . The logs of this
Pod contain the results of the NCCL test.
To fetch the logs for this Pod, run the following command:
kubectl logs all-gather8t7dt-w-0-0-n9s6j
The output should be similar to the following:
# size count type redop root time algbw busbw #wrong time algbw busbw #wrong
# (B) (elements) (us) (GB/s) (GB/s) (us) (GB/s) (GB/s)
1024 16 float none -1 54.07 0.02 0.02 0 55.80 0.02 0.02 0
2048 32 float none -1 55.46 0.04 0.03 0 55.31 0.04 0.03 0
4096 64 float none -1 55.59 0.07 0.07 0 55.38 0.07 0.07 0
8192 128 float none -1 56.05 0.15 0.14 0 55.92 0.15 0.14 0
16384 256 float none -1 57.08 0.29 0.27 0 57.75 0.28 0.27 0
32768 512 float none -1 57.49 0.57 0.53 0 57.22 0.57 0.54 0
65536 1024 float none -1 59.20 1.11 1.04 0 59.20 1.11 1.04 0
131072 2048 float none -1 59.58 2.20 2.06 0 63.57 2.06 1.93 0
262144 4096 float none -1 63.87 4.10 3.85 0 63.61 4.12 3.86 0
524288 8192 float none -1 64.83 8.09 7.58 0 64.40 8.14 7.63 0
1048576 16384 float none -1 79.74 13.15 12.33 0 76.66 13.68 12.82 0
2097152 32768 float none -1 78.41 26.74 25.07 0 79.05 26.53 24.87 0
4194304 65536 float none -1 83.21 50.41 47.26 0 81.25 51.62 48.39 0
8388608 131072 float none -1 94.35 88.91 83.35 0 99.07 84.68 79.38 0
16777216 262144 float none -1 122.9 136.55 128.02 0 121.7 137.83 129.21 0
33554432 524288 float none -1 184.2 182.19 170.80 0 178.1 188.38 176.60 0
67108864 1048576 float none -1 294.7 227.75 213.51 0 277.7 241.62 226.52 0
134217728 2097152 float none -1 495.4 270.94 254.00 0 488.8 274.60 257.43 0
268435456 4194304 float none -1 877.5 305.92 286.80 0 861.3 311.65 292.17 0
536870912 8388608 float none -1 1589.8 337.71 316.60 0 1576.2 340.61 319.33 0
1073741824 16777216 float none -1 3105.7 345.74 324.13 0 3069.2 349.85 327.98 0
2147483648 33554432 float none -1 6161.7 348.52 326.74 0 6070.7 353.75 331.64 0
4294967296 67108864 float none -1 12305 349.03 327.22 0 12053 356.35 334.08 0
8589934592 134217728 float none -1 24489 350.77 328.85 0 23991 358.05 335.67 0
# Out of bounds values : 0 OK
# Avg bus bandwidth : 120.248
What's next
Collect and Understand NCCL Logs for Troubleshooting to understand the test outputs and troubleshoot issues.
Learn about troubleshooting slow performance .
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
