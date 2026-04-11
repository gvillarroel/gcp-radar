---
title: "Update Cluster Toolkit version \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/setup/update-cluster-toolkit
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/setup/update-cluster-toolkit
  title: "Update Cluster Toolkit version \_|\_ Google Cloud Documentation"
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
Update Cluster Toolkit version
Stay organized with collections
Save and categorize content based on your preferences.
Cluster Toolkit is open-source and managed through a GitHub
repository, which you can clone to your local environment. Regularly check the
Cluster Toolkit release notes
for new versions and updates.
You can download a newer version of the Cluster Toolkit software to get
access to new features and bug fixes.
Overview
To update Cluster Toolkit, you must upgrade the gcluster
command-line tool. If software or hardware configurations need to be changed,
then you also need to re-deploy your cluster.
Before you update the software, consider the following important points:
Immutable fields : Many aspects of your cluster configuration are
immutable after creation. You can't change these fields without re-deploying
the cluster.
Backup : Before making any significant changes or re-deployments, ensure
you have proper backups of your data and configurations.
Update the gcluster command-line tool
To update Cluster Toolkit, install the latest version of the command-line tool.
Cloud Shell or Linux
To update Cluster Toolkit on Cloud Shell or Linux, download the latest prebuilt binary bundle. For instructions, see Install the prebuilt bundle .
macOS
To update on macOS, download the latest prebuilt binary bundle. For instructions, see Install the prebuilt bundle .
Windows
To update on Windows, pull the latest changes from the GitHub repository and rebuild the binary as follows:
Go to the toolkit directory where you originally cloned the repository:
cd cluster-toolkit
Pull the updates from the upstream repository:
git pull
Note: If you have made local changes that conflict with the latest
updates, then a prompt with a request to resolve them appears.
Rebuild the gcluster command-line tool:
make
This command compiles and replaces the previous executable with the updated
version. This step is necessary to incorporate new features and bug fixes.
Redeploy the cluster
For basic changes to a running cluster, like adding or removing a partition or
resizing an existing one, you can edit and redeploy the cluster blueprint.
For instructions, see the documentation for your environment:
For Compute Engine and Slurm: Reconfigure a running cluster
For Google Kubernetes Engine: Reconfigure a GKE cluster
To modify the hardware infrastructure, change immutable properties of the
cluster, or if Cluster Toolkit software has a major change, then
follow these steps:
Delete the existing cluster.
Remove all compute nodes in the cluster. The process for removing
compute nodes depends on your environment:
Compute Engine and Slurm
For Compute Engine and Slurm environments:
See Manage static compute nodes .
You can use the following command to gracefully drain and
power down nodes:
scontrol update NodeName= NODES_TO_UPDATE State=POWER_DOWN_ASAP
Alternatively, you can configure the
cleanup_compute_nodes setting on the Slurm
controller to automatically destroy static compute nodes
when the cluster is destroyed.
Google Kubernetes Engine
For Google Kubernetes Engine environments:
See
Reconfigure
a GKE cluster for instructions on
managing nodes within a GKE cluster.
Use the destroy command to tear down the old deployment:
Warning : The destroy command is irreversible. Make sure you can
recreate the cluster before running this command.
./gcluster destroy DEPLOYMENT_FOLDER_NAME --auto-approve
Update the cluster blueprint with any needed changes.
Create a new cluster deployment folder based on the updated blueprint, using
the -w flag to overwrite the previous deployment.
./gcluster create BLUEPRINT_NAME -w
Deploy the new cluster.
./gcluster deploy DEPLOYMENT_FOLDER_NAME
What's next
Learn about Cluster blueprints .
Review best practices for running HPC workloads .
Try a quickstart tutorial, see
Deploy an HPC cluster with Slurm .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
