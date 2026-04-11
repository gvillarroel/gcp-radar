---
title: "Cluster Toolkit \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/overview
  title: "Cluster Toolkit \_|\_ Google Cloud Documentation"
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
Cluster Toolkit
Stay organized with collections
Save and categorize content based on your preferences.
Cluster Toolkit, formerly known as Cloud HPC Toolkit ,
is open-source software offered by Google Cloud which
simplifies the process for you to deploy high performance computing (HPC),
artificial intelligence (AI), and machine learning (ML) workloads on
Google Cloud. It is designed to be highly customizable and extensible, and
intends to address the deployment needs of a broad range of use cases.
If you want to run AI and ML workloads, the AI Hypercomputer
documentation provides detailed guidance on deploying and configuring clusters.
For more information, see the Cluster creation
overview .
Benefits
Cluster Toolkit provides you with the following benefits:
Fast creation and deployment of turnkey HPC, AI, and ML clusters that
follow Google Cloud best practices
An open source solution that is configurable and extensible
Seamless integration with various partners such as Intel DAOS, DDN EXAscaler, and Slurm
Monitoring and performance visibility through integration with Cloud Monitoring
Components
Cluster Toolkit has the following main components:
Cluster blueprint : a YAML file that defines which modules to use
and how to customize them.
Modules : the building blocks of a deployment folder.
Modules are composed of Terraform or Packer configuration files.
gcluster engine : a Google Open Source tool that uses the information in the
cluster blueprint to combine different modules and produce a
deployment folder.
Deployment folder : a self-contained folder that can be
used to deploy a cluster onto Google Cloud. With Cluster Toolkit, you
have the added flexibility to configure a cluster to your specifications by
editing the deployment folder before you deploy.
How it works
Figure 1. Cluster Toolkit architecture overview
You can use Cluster Toolkit to deploy clusters on Google Cloud as follows:
Set up your working environment. Your working environment is the
command line from which you will run your commands. This can either be a
Linux or macOS command line or you can use Cloud Shell. If using a Linux or
macOS command line, you need to install a
few dependencies .
From the command line, complete the following:
Clone the Cluster Toolkit GitHub repository.
This repository contains the gcluster binary, modules, cluster blueprint
examples, and other resources needed for the configuration of your
cluster.
Build the gcluster binary.
For detailed instructions, see
Configure your environment .
Use an editor to create your cluster blueprint file.
Example blueprints
are also available in the Cluster Toolkit GitHub repository. These
blueprints can be used either directly or as a template or starting point
for your custom cluster blueprint.
From the command line, complete the following:
Run the gcluster create command and specify your cluster blueprint. When
you run this command, gcluster engine then completes the following steps:
Builds a deployment folder that is based on the specified cluster
blueprint. This deployment folder contains all the specifications
and resources needed to deploy the cluster.
Prints instructions to the command-line on how to deploy the cluster.
This will provide you with the commands that you must run to deploy
the cluster. These will either be Terraform or Packer commands.
Run the commands provided by the gcluster engine. When you run these
commands, Terraform or Packer then deploys the cluster on Google Cloud.
For detailed instructions, see
Deploy a cluster .
After your cluster is deployed, you can submit jobs to your HPC
cluster. You can also use Cloud Monitoring to analyze and monitor
Google Cloud resources that are used by your cluster.
Limitations
Cluster Toolkit only supports creating and deleting a cluster. If you want to
modify the hardware or software configuration of an active cluster, Google
recommends the following steps:
Delete the cluster
Update the cluster blueprint
Create the cluster deployment folder
Deploy the cluster
What's next
Try a quickstart tutorial, see
Deploy an HPC cluster with Slurm .
Review the Cluster Toolkit GitHub repository .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
