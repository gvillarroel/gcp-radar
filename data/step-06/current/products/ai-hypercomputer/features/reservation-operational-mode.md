---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:52:40.543Z"
product_name: "AI Hypercomputer"
product_slug: "ai-hypercomputer"
feature_name: "Reservation operational mode"
feature_slug: "reservation-operational-mode"
latest_feature_date: "2025-09-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4x"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/cluster-capabilities"
  - "https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-a4xmax-mig"
keywords:
  - "operational"
  - "behavior"
  - "define"
  - "configuration"
  - "reservation"
  - "mode"
  - "adds"
---

# Reservation operational mode

Product: AI Hypercomputer
Coverage: MEDIUM

## Step 02 Summary

Adds configuration of reservation operational mode to define VM behavior and control following host errors or faulty host reports.

## Extended Definition

Adds configuration of reservation operational mode to define VM behavior and control following host errors or faulty host reports.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4x](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4x)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/cluster-capabilities](https://docs.cloud.google.com/ai-hypercomputer/docs/cluster-capabilities)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-a4xmax-mig](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-a4xmax-mig)

## Supporting Pages

### "Create an AI-optimized MIG with A4X \_|\_ AI Hypercomputer \_|\_ Google\

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4x](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a4x)
- Source ID: `site-docs-root-required-2`
- Final score: 139
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This mode is the only supported reservation operational mode for A4X Max or A4X machine types.
- For more information about all capacity mode, see Reservation operational mode .
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /instanceTemplates { "name":" INSTANCE TEMPLATE NAME ", "properties":{ "machineType":"a4x-highgpu-4g", "disks":[ { "boot":true, "initializeParams":{ "diskSizeGb":" DISK SIZE ", "diskType":"hyperdisk-balanced", "sourceImage":"projects/ IMAGE PROJECT /global/images/family/ IMAGE FAMILY " }, "mode":"READ WRITE", "type":"PERSISTENT" } ], "serviceAccounts": [ { "email": "default", "scopes": [ "https://www.googleapis.com/auth/cloud-platform" ] } ], "networkInterfaces": [ { "accessConfigs": [ { "name": "external-nat", "type": "ONE TO ONE NAT" } ], "network": "projects/ NETWORK PROJECT ID /global/networks/ GVNIC NAME PREFIX -net-0", "nicType": "GVNIC", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ GVNIC NAME PREFIX -sub-0" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ GVNIC NAME PREFIX -net-1", "nicType": "GVNIC", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ GVNIC NAME PREFIX -sub-1" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ RDMA NAME PREFIX -mrdma", "nicType": "MRDMA", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ RDMA NAME PREFIX -mrdma-sub-0" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ RDMA NAME PREFIX -mrdma", "nicType": "MRDMA", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ RDMA NAME PREFIX -mrdma-sub-1" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ RDMA NAME PREFIX -mrdma", "nicType": "MRDMA", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ RDMA NAME PREFIX -mrdma-sub-2" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ RDMA NAME PREFIX -mrdma", "nicType": "MRDMA", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ RDMA NAME PREFIX -mrdma-sub-3" } ], "reservationAffinity":{ "consumeReservationType":"SPECIFIC RESERVATION", "key":"compute.googleapis.com/reservation-name", "values":[ " RESERVATION " ] }, "scheduling":{ "provisioningModel":"RESERVATION BOUND", "instanceTerminationAction":"DELETE", "onHostMaintenance": "TERMINATE", "automaticRestart":true } } } Replace the following: INSTANCE TEMPLATE NAME : the name of the instance template.
- If you're creating only a single A4X sub-block and you only created the gVNIC network in the Create VPC networks step, then remove the four RDMA subnets indicated by the MRDMA NIC type from the example. gcloud compute instance-templates create INSTANCE TEMPLATE NAME \ --machine-type=a4x-highgpu-4g \ --image-family= IMAGE FAMILY \ --image-project= IMAGE PROJECT \ --instance-template-region= REGION \ --boot-disk-type=hyperdisk-balanced \ --boot-disk-size= DISK SIZE \ --scopes=cloud-platform \ --network-interface=nic-type=GVNIC,network= GVNIC NAME PREFIX -net-0,subnet= GVNIC NAME PREFIX -sub-0 \ --network-interface=nic-type=GVNIC,network= GVNIC NAME PREFIX -net-1,subnet= GVNIC NAME PREFIX -sub-1,no-address --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-0,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-1,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-2,no-address \ --network-interface=nic-type=MRDMA,network= RDMA NAME PREFIX -mrdma,subnet= RDMA NAME PREFIX -mrdma-sub-3,no-address \ --reservation-affinity=specific \ --reservation= RESERVATION \ --provisioning-model=RESERVATION BOUND \ --instance-termination-action=DELETE \ --maintenance-policy=TERMINATE \ --restart-on-failure Replace the following: INSTANCE TEMPLATE NAME : the name of the instance template.

### Cluster management capabilities | AI Hypercomputer | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/cluster-capabilities](https://docs.cloud.google.com/ai-hypercomputer/docs/cluster-capabilities)
- Source ID: `feature-recovery-direct-http`
- Final score: 135
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Reservation operational mode .
- Cluster management capabilities | AI Hypercomputer | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Indonesia Italiano Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in AI Hypercomputer Start free Overview Guides Resources Technology areas More Overview Guides Resources Cross-product tools More Console Discover Overview Performance-optimized infrastructure GPU machines Networking services GPU networking overview Network services for deployments Networking best practices Storage services Open software OS and Docker images Choose a consumption option Cluster management Overview Configurations Terminology Get started Cluster creation overview Recommended configurations Obtain capacity and quota Overview Reserve capacity View reserved capacity Quickstart: Create a Slurm cluster with A4 machine type Deploy infrastructure Deployment options overview Compact placement policy and workload policy overview Deploy AI-optimized VMs and clusters Create GKE clusters Create an AI-optimized GKE cluster with default configuration Create a custom AI-optimized GKE cluster which uses A4X Max Create a custom AI-optimized GKE cluster which uses A4X Create a custom AI-optimized GKE cluster which uses A4 or A3 Ultra Create Slurm clusters Create an instance Create A4X Max Create A4X Create A4 or A3 Ultra Create A3 High or A3 Mega Create instances in bulk Create A4X Max Create A4X Create A4 or A3 Ultra Create A3 High or A3 Mega Create a managed instance group (MIG) Create A4X Max Create A4X Create A4 or A3 Ultra Create A3 High or A3 Mega Run workloads Run workloads with Pathways on Cloud Introduction to Pathways on Cloud Create a GKE cluster with Pathways Run a batch workload with Pathways Run an interactive workload with Pathways Perform multihost inference using Pathways Resilient training with Pathways Port JAX workloads to Pathways Troubleshoot Pathways on Cloud Schedule GKE workloads Schedule workloads with Topology Aware Scheduling (TAS) Enable node health prediction AI workload tutorials Overview GPU Run inference with vLLM on GKE DeepSeek V3.1 DeepSeek V3.2-Speciale Gemma 3 GPT-OSS Llama 4 Qwen3 Run fine-tuning Gemma 3 on a GKE cluster Gemma 3 on a Slurm cluster Gemma 3 for vision tasks on GKE Llama 4 on a Slurm cluster Mixtral-8x7b on a Slurm cluster Run training Qwen2 on a Slurm cluster TPU Serve Qwen2-7B with vLLM on TPUs Serve Qwen2-7B-Instruct with vLLM on TPUs Serve Qwen3-8B-Base with vLLM on TPUs Serve Llama-3.1-8B with vLLM on TPUs Manage infrastructure Manage GKE clusters Manage instances and Slurm clusters View topology of an instance Manage host events Host events in instances Host events in reservations Report faulty host Test and optimize Optimize cluster networking by using NCCL/gIB Run NCCL tests Run NCCL on Compute Engine instances Run NCCL on GKE clusters that use default configuration Run NCCL on custom GKE clusters that use A4X Max Run NCCL on custom GKE clusters that use A4X Run NCCL on custom GKE clusters that use A4 or A3 Ultra Run NCCL on Slurm clusters Collect and understand NCCL logs for troubleshooting Test workloads with recipes Benchmarking recipes Goodput optimization recipes Test clusters Monitor Monitor VMs and Slurm clusters Manage how CoMMA collects NCCL telemetry Collective Communication Analyzer (CoMMA) Enable, disable, and configure CoMMA Troubleshoot Known issues Troubleshoot slow performance Troubleshoot reporting a faulty host Troubleshoot CoMMA AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Compute AI Hypercomputer Guides Send feedback Cluster management capabilities Stay organized with collections Save and categorize content based on your preferences.
- The A4X Max , A4X , A4 , A3 Ultra , A3 Mega , and A3 High (8 GPUs) machine series are designed to enable you to run large-scale artificial intelligence (AI) and machine learning (ML) clusters and provide the following cluster management capabilities: AI infrastructure resources colocation Cluster topology-aware placement Cluster operational mode Cluster maintenance scheduling and controls Cluster monitoring and diagnostic tooling Note: Cluster management capabilities aren't supported for A3 Mega or A3 High VMs that you created before October 1, 2025.
- Cluster operational mode When you reserve capacity to create compute instances or clusters by using A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) machine types, the machine type that you reserve determines the cluster operational mode for the instances.

### "Create an AI-optimized MIG with A4X Max \_|\_ AI Hypercomputer \_|\_ Google\

- URL: [https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-a4xmax-mig](https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-a4xmax-mig)
- Source ID: `site-docs-root-required-2`
- Final score: 131
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This mode is the only supported reservation operational mode for A4X Max or A4X machine types.
- For more information about all capacity mode, see Reservation operational mode .
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /instanceTemplates { "name":" INSTANCE TEMPLATE NAME ", "properties":{ "machineType":"a4x-maxgpu-4g-metal", "disks":[ { "boot":true, "initializeParams":{ "diskSizeGb":" DISK SIZE ", "diskType":"hyperdisk-balanced", "sourceImage":"projects/ IMAGE PROJECT /global/images/family/ IMAGE FAMILY " }, "mode":"READ WRITE", "type":"PERSISTENT" } ], "serviceAccounts": [ { "email": "default", "scopes": [ "https://www.googleapis.com/auth/cloud-platform" ] } ], "networkInterfaces": [ { "accessConfigs": [ { "name": "external-nat", "type": "ONE TO ONE NAT" } ], "network": "projects/ NETWORK PROJECT ID /global/networks/ IDPF NETWORK PREFIX -net", "nicType": "IDPF", "stackType": "IPV6 ONLY", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ IDPF NETWORK PREFIX -sub-0" }, { "network": "projects/ NETWORK PROJECT ID /global/networks/ IDPF NETWORK PREFIX -net", "nicType": "IDPF", "stackType": "IPV6 ONLY", "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/ IDPF NETWORK PREFIX -sub-1" }, { "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/default-subnet-1- RDMA NAME PREFIX -net", "nicType": "MRDMA", "stackType": "IPV6 ONLY" }, { "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/default-subnet-1- RDMA NAME PREFIX -net", "nicType": "MRDMA", "stackType": "IPV6 ONLY" }, { "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/default-subnet-1- RDMA NAME PREFIX -net", "nicType": "MRDMA", "stackType": "IPV6 ONLY" }, { "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/default-subnet-1- RDMA NAME PREFIX -net", "nicType": "MRDMA", "stackType": "IPV6 ONLY" }, { "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/default-subnet-1- RDMA NAME PREFIX -net", "nicType": "MRDMA", "stackType": "IPV6 ONLY" }, { "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/default-subnet-1- RDMA NAME PREFIX -net", "nicType": "MRDMA", "stackType": "IPV6 ONLY" }, { "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/default-subnet-1- RDMA NAME PREFIX -net", "nicType": "MRDMA", "stackType": "IPV6 ONLY" }, { "subnetwork": "projects/ NETWORK PROJECT ID /region/ REGION /subnetworks/default-subnet-1- RDMA NAME PREFIX -net", "nicType": "MRDMA", "stackType": "IPV6 ONLY" } ], "reservationAffinity":{ "consumeReservationType":"SPECIFIC RESERVATION", "key":"compute.googleapis.com/reservation-name", "values":[ " RESERVATION " ] }, "scheduling":{ "provisioningModel":"RESERVATION BOUND", "instanceTerminationAction":"DELETE", "onHostMaintenance": "TERMINATE", "automaticRestart":true } } } Replace the following: INSTANCE TEMPLATE NAME : the name of the instance template.
- If you're creating only a single A4X Max sub-block and you only created the IDPF network in the Create VPC networks step, then remove the eight RDMA subnets indicated by the MRDMA NIC type from the example. gcloud compute instance-templates create INSTANCE TEMPLATE NAME \ --machine-type=a4x-maxgpu-4g-metal \ --image-family= IMAGE FAMILY \ --image-project= IMAGE PROJECT \ --instance-template-region= REGION \ --boot-disk-type=hyperdisk-balanced \ --boot-disk-size= DISK SIZE \ --scopes=cloud-platform \ --network-interface=nic-type=IDPF,network= IDPF NETWORK PREFIX -net,stack-type=IPV6 ONLY,subnet= IDPF NETWORK PREFIX -sub-0 \ --network-interface=nic-type=IDPF,network= IDPF NETWORK PREFIX -net,stack-type=IPV6 ONLY,subnet= IDPF NETWORK PREFIX -sub-1,no-address \ --network-interface=subnet=default-subnet-1- RDMA NAME PREFIX -net,stack-type=IPV6 ONLY,nic-type=mrdma \ --network-interface=subnet=default-subnet-1- RDMA NAME PREFIX -net,stack-type=IPV6 ONLY,nic-type=mrdma \ --network-interface=subnet=default-subnet-1- RDMA NAME PREFIX -net,stack-type=IPV6 ONLY,nic-type=mrdma \ --network-interface=subnet=default-subnet-1- RDMA NAME PREFIX -net,stack-type=IPV6 ONLY,nic-type=mrdma \ --network-interface=subnet=default-subnet-1- RDMA NAME PREFIX -net,stack-type=IPV6 ONLY,nic-type=mrdma \ --network-interface=subnet=default-subnet-1- RDMA NAME PREFIX -net,stack-type=IPV6 ONLY,nic-type=mrdma \ --network-interface=subnet=default-subnet-1- RDMA NAME PREFIX -net,stack-type=IPV6 ONLY,nic-type=mrdma \ --network-interface=subnet=default-subnet-1- RDMA NAME PREFIX -net,stack-type=IPV6 ONLY,nic-type=mrdma \ --reservation-affinity=specific \ --reservation= RESERVATION \ --provisioning-model=RESERVATION BOUND \ --instance-termination-action=DELETE \ --maintenance-policy=TERMINATE \ --restart-on-failure Replace the following: INSTANCE TEMPLATE NAME : the name of the instance template.

