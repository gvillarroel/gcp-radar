---
title: "Supported modules \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/support-matrix
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-cluster-overview
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/support-matrix
  title: "Supported modules \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Cluster Toolkit
Guides
Send feedback
Supported modules
Stay organized with collections
Save and categorize content based on your preferences.
Cluster Toolkit uses a cluster blueprint
to define a deployment. For each blueprint, you can use the deployment_groups
setting to define a set of modules that customize your
deployment. These modules specify options such as your compute
resources, networking, schedulers, monitoring applications, and file systems.
This document outlines the core supported module options for Cluster Toolkit
v1.3.0
or higher. For a complete list of supported modules including the experimental
options, see the
modules
page on the Cluster Toolkit GitHub repository documentation.
Supported file systems
The following file systems are supported:
Cloud Storage
Managed Lustre
Filestore
Network File Sharing (NFS)
You can also specify that Cluster Toolkit integrates a
pre-existing file system
into your deployment.
Cluster Toolkit also supports the use of
Kubernetes Persistent Volumes and Persistent Volume Claims
as a connector to cloud-based file systems.
Supported schedulers
The following schedulers are supported:
Batch
Google Kubernetes Engine (GKE)
HTCondor
PBS Professional
Slurm
Supported Compute Engine resources
The following features are supported for Compute Engine resources :
VM creation - many of the core VM customization options are supported
including, but not limited to, the following:
Machine type options: all machine types
VM instance placement policy options: both compact and spread placement
policies
GPU integration: all GPU types
Advanced networking: all options including gVNIC support and Tier
1 higher bandwidths
Service account setup
Disabling simultaneous multithreading (SMT)
Startup scripts
Spot VMs
Supported monitoring options
The following tools are supported for collecting measurements of your service
and Google Cloud resources:
Cloud Monitoring
Supported networking resources
The following features are supported for Virtual Private Cloud (VPC) resources :
Create a
new VPC network
Integrate with
existing VPC networks
Supported software installation and system setup
Cluster Toolkit can be used for the following use cases:
Automation of application installations by using Spack
Ansible installation
GPU accelerated Chrome Remote Desktop
Google Cloud Observability Ops Agent
installation and setup
Network File System (NFS) client installation and automatic mounting
Custom image building
automation with Packer
What's next
Review how to prepare your cluster blueprint .
Try a quickstart tutorial, see
Deploy an HPC cluster with Slurm .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
