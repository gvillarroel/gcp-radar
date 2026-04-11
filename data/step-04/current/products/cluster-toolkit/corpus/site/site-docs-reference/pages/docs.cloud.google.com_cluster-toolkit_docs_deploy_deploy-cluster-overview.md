---
title: "Cluster deployment overview \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-cluster-overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-cluster-overview
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-cluster-overview
  title: "Cluster deployment overview \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
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
Cluster deployment overview
Stay organized with collections
Save and categorize content based on your preferences.
This document provides an overview of how to use Cluster Toolkit to deploy
a cluster on Google Cloud.
Pro Tip: For a full step-by-step example
walkthrough on the setup, deployment, and submission of jobs on a cluster that
is created by using Cluster Toolkit,
see Deploy a Slurm cluster .
Before you begin
If you are using a Linux or macOS workstation to deploy your cluster,
install dependencies .
From either your workstation or Cloud Shell,
configure your environment .
Ensure that you have created a cluster blueprint or selected one from the
Cluster Toolkit blueprint catalog .
Switch to the main working directory
After you have installed the Cluster Toolkit, ensure that you switch to the
main working directory.
cd cluster-toolkit
Deploy the cluster
To deploy the cluster, complete the following steps.
If you might need to deploy the cluster multiple times for different
purposes or with different configurations, create a
deployment file .
To deploy the cluster, run the gcluster deploy command. If you are using any of
the example cluster blueprints
provided by Cluster Toolkit, you need to set the project ID by using either
the --vars flag or --deployment-file (or -d ) flag.
Using the --vars flag.
./gcluster deploy --vars project_id= PROJECT_ID PATH_TO_BLUEPRINT_FILE
Using the --deployment-file (or -d ) flag.
./gcluster deploy -d PATH_TO_DEPLOYMENT_FILE PATH_TO_BLUEPRINT_FILE
If the --deployment-file and --vars flags are used at the
same time, then the variables specified with --vars take precedence.
If the --vars flag is specified multiple times, then later invocations
take precedence.
Replace the following:
PROJECT_ID : your project ID.
PATH_TO_BLUEPRINT_FILE : the path to your cluster
blueprint file. For example, if you are in the main working directory
and want to use the
examples/hpc-slurm.yaml
blueprint file, specify examples/hpc-slurm.yaml .
PATH_TO_DEPLOYMENT_FILE : the path to your
deployment file.
The gcluster command reports proposed changes for your cluster. To continue the
deployment, accept the proposed changes by typing a and pressing
enter . Optionally, you may review the proposed changes by typing
d and pressing enter .
Summary of proposed changes: Plan: 37 to add, 0 to change, 0 to destroy.
(D)isplay full proposed changes,
(A)pply proposed changes,
(S)top and exit,
(C)ontinue without applying
Please select an option [d,a,s,c]:
After accepting the changes, gcluster runs terraform apply
automatically. This takes approximately 5 minutes while it displays
progress. If the run is successful, the output is similar to the following:
Apply complete! Resources: 37 added, 0 changed, 0 destroyed.
You are now ready to submit jobs to your cluster.
Get help at the command line
For a full list of flags that you can use, run the --help flag on
gcluster or on any of the sub-commands.
./gcluster --help
./gcluster deploy --help
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
