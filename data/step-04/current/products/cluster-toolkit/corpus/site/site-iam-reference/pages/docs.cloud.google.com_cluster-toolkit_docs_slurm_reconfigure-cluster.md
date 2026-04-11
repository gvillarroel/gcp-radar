---
title: "Reconfigure a running cluster \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/slurm/reconfigure-cluster
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/slurm/reconfigure-cluster
  title: "Reconfigure a running cluster \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
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
Reconfigure a running cluster
Stay organized with collections
Save and categorize content based on your preferences.
To make basic configuration changes to a running cluster, it is recommended to
edit and redeploy the blueprint. This method of reconfiguring a live cluster
must only be used for the following cases:
To add or remove a partition from the cluster
To resize an existing partition
Set up environment to allow for reconfiguration
To setup the environment to allow for reconfiguration, complete the following steps:
Set top level variables to allow for cluster reconfiguration. Placing
these settings in the vars block ensures that they are applied to any
module that accepts them as inputs.
# Slurm v6
vars:
...
enable_cleanup_compute: true
To use the settings in the previous step, install local python dependencies.
Python dependencies must be installed on the deployment machine where the
gcluster command is run from. For installation instructions, review the Slurm v6
schedmd-slurm-gcp-v6-controller
documentation .
Reconfigure partitions on running cluster
To reconfigure a running cluster, complete the following steps:
Warning: Take caution when performing this task, as manual changes to the
cluster might be overwritten by redeploying the blueprint.
To enable cluster reconfiguration, ensure that you
Set up environment to allow for reconfiguration .
Ensure that redeployment happens with the same version of gcluster as the
original deployment. Graceful redeployment across versions of the
Cluster Toolkit isn't assured.
You can check the version of gcluster by using the gcluster --version command.
Also, gcluster prints a warning if you are using a different version on the
redeploy.
Redeploy the blueprint as follows:
Edit the blueprint file. For example, you can increase
the node_count_static on a node set.
Recreate the deployment by running the following command. The -w
flag is required for the previous deployment to be overwritten.
gcluster create BLUEPRINT_NAME -w
Redeploy the deployment by running the following command:
gcluster deploy DEPLOYMENT_FOLDER_NAME
Carefully evaluate the terraform plan to make sure that no
unexpected resources are replaced or deleted.
What's next
Learn how to Manage static compute node .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
