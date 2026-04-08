---
title: "Enable node health prediction in a GKE cluster \_|\_ AI Hypercomputer \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/workloads/enable-node-health-prediction
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/workloads/enable-node-health-prediction
  title: "Enable node health prediction in a GKE cluster \_|\_ AI Hypercomputer \_\
    |\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Enable node health prediction in a GKE cluster | AI Hypercomputer | Google Cloud Documentation
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
Limitations
Understand node health prediction
Before you begin
Enable node health prediction Deploy automatic node labeling
Update your Job configuration
Verify node labeling
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Enable node health prediction in a GKE cluster
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Limitations
Understand node health prediction
Before you begin
Enable node health prediction Deploy automatic node labeling
Update your Job configuration
Verify node labeling
What's next
After you create an AI-optimized Google Kubernetes Engine (GKE) cluster, you can
enable node health prediction . If you plan to
schedule workloads by using Topology Aware Scheduling (TAS) and Kueue ,
then enabling node health prediction lets the cluster's scheduler do the
following:
Identify nodes that are likely to degrade within the next five hours.
Avoid scheduling new workloads on those nodes.
This approach helps you minimize interruptions on critical and
interruption-sensitive workloads, such as large-scale training workloads.
This document explains how to enable node health prediction in a
GKE cluster that uses A4X Max, A4X, A4, or A3 Ultra nodes. To learn how to
use the node health prediction metric in a Cloud Monitoring dashboard when,
for example, you want to troubleshoot performance issues on a Slurm cluster, see
instead
Monitor Compute Engine instances and Slurm clusters .
Limitations
Before you enable node health prediction in your GKE cluster,
consider the following limitations:
The node must use A4X Max, A4X, A4, or A3 Ultra machine types.
The node must use the
reservation-bound provisioning model .
Note: If the nodes in your cluster use an A3 Mega or A3 High machine type,
or you created the nodes by using a different provisioning model, then
contact your account team.
Understand node health prediction
When you enable node health prediction in a GKE cluster, the
CronJob applies the gke.google.com/recommended-to-run-large-training-workload
label to each node in your cluster. The CronJob sets the label values to the
likelihood that a node's GPU health will degrade, and updates these values every
10 minutes. If the label value is true , then the node is healthy. Otherwise,
if the label value is false , the node will likely degrade within the next five
hours. The label value can change over time based on the node's GPU health.
If you see that a node is likely to degrade, then you can do one or both of the
following:
Avoid scheduling workloads on the node . You can configure Kueue to avoid
scheduling workloads on nodes that show a value of false , as described in
this document.
Report the node as faulty . If the node is experiencing issues like high
GPU temperature or slow performance, then you can report the node as faulty.
This action starts a host maintenance event for the node, making it
available again for running workloads after maintenance completes. For
instructions, see
Report faulty hosts through GKE .
Before you begin
Before you start, make sure that you have performed the following tasks:
Enable
the Google Kubernetes Engine API.
Enable Google Kubernetes Engine API
If you want to use the Google Cloud CLI for this task,
install and then
initialize the
gcloud CLI. If you previously installed the gcloud CLI, get the latest
version by running the gcloud components update command. Earlier gcloud CLI versions might not support running the commands in this document.
Note: For existing gcloud CLI
installations, make sure to set the compute/region property . If you use primarily zonal clusters, set the compute/zone instead. By setting a default location,
you can avoid errors in the gcloud CLI like the following:
One of [--zone, --region] must be supplied: Please specify location . You might need to specify the location in certain commands if the location of your cluster differs from the default that you set.
To connect to your cluster, run the following command:
gcloud container clusters get-credentials CLUSTER_NAME
Replace CLUSTER_NAME with the name of your cluster.
Enable node health prediction
After you've prepared to schedule workloads on your GKE cluster
by using TAS, you can enable node health prediction by completing the following
steps:
Deploy automatic node labeling
Update your Job configuration
Verify node labeling
Deploy automatic node labeling
To deploy automatic node labeling for node health prediction in your
GKE cluster, complete the following steps:
Clone the hardware accelerators in GKE git repository:
git clone https://github.com/GoogleCloudPlatform/container-engine-accelerators.git
Go to the topology-scheduler directory:
cd container-engine-accelerators/gpudirect-tcpxo/topology-scheduler
Create the Kubernetes ConfigMap containing the Python scripts,
schedule-daemon.py and label-nodes-daemon.py , that query the health
scores:
kubectl create configmap predictor-scheduler-scripts \
--namespace = kube-system \
--from-file = schedule-daemon.py = schedule-daemon.py \
--from-file = label-nodes-daemon.py = label-nodes-daemon.py
Apply the service account configuration to grant the necessary permissions
(reading Monitoring metrics and patching Node objects) to the CronJob:
kubectl apply -f service-account.yaml
Deploy the DaemonSet that schedules the node labeling job:
kubectl apply -f label-nodes-daemon.yaml
Update your Job configuration
To enable node health prediction when using Kueue, you must update your Job
configuration to check for health prediction values and, if supported, topology
requirements before starting a workload.
To update your Job configuration and enable node health prediction, in the
spec field, add the following fields:
spec :
affinity :
nodeAffinity :
requiredDuringSchedulingIgnoredDuringExecution :
nodeSelectorTerms :
- matchExpressions :
- key : gke.google.com/recommended-to-run-large-training-workload
operator : NotIn
values :
- "False"
...
Verify node labeling
After the CronJob runs for the first time, which is approximately 10 minutes
after deployment, verify whether it has applied the
gke.google.com/recommended-to-run-large-training-workload label to your nodes.
View a list of nodes that have the
gke.google.com/recommended-to-run-large-training-workload label applied to
them:
kubectl get nodes -L gke.google.com/recommended-to-run-large-training-workload
The label value can be one of the following:
true : the node is predicted to be healthy in the next five hours.
false : the node is likely to degrade within the next five hours. If
you configured your Job configuration as described in this document, then
Kueue avoids scheduling new workloads on the node.
What's next
To learn about managing common events relevant to GKE
clusters and AI workloads, see
Manage AI-optimized GKE clusters .
To learn more about scheduling jobs on GKE with Kueue, see
Deploy a batch system using Kueue .
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
