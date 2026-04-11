---
title: "Deploy an HPC cluster with Slurm \_|\_ Cluster Toolkit \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-cluster-overview
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/slurm-cluster
  title: "Deploy an HPC cluster with Slurm \_|\_ Cluster Toolkit \_|\_ Google Cloud\
    \ Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Deploy an HPC cluster with Slurm
This document describes how to deploy an HPC cluster with
Slurm in the Google Cloud console.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine, Filestore, Cloud Storage, Service Usage, and Resource Manager APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine, Filestore, Cloud Storage, Service Usage, and Resource Manager APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Costs
The cost of running this tutorial varies by section such as setting up the
tutorial or running jobs. You can calculate the cost by using the
pricing calculator .
Tutorial only costs
To estimate the cost for setting up this tutorial, use the following specifications:
Filestore Basic HDD (standard) capacity per region: 1,024 GB
Standard persistent disk: 50 GB pd-standard for the Slurm
login node.
Performance (SSD) persistent disks: 50 GB pd-ssd for the Slurm
controller.
1 N2 VM instance: n2-standard-4
1 C2 VM instance: c2-standard-4
To estimate the cost for running a job on the cluster, use the following
specifications:
3 N2 VM instances: n2-standard-2 . These are created when the
srun -N 3 hostname command is run and the cluster autoscales. Each of
these VMs have 50 GB of pd-standard disk attached.
These VMs are deleted automatically after one minute of inactivity.
Costs for submitting additional jobs
The following resources are not used as a part of this tutorial but because
Slurm can autoscale compute nodes, the following resources might be created
if you submit additional jobs to the compute or debug partitions:
Jobs submitted to the default debug partition:
4 N2 VM instances: n2-standard-2 . Each of these VMs have
50 GB of pd-standard disk attached.
Jobs submitted to the compute partition:
20 C2 VM instances: c2-standard-60 . Each of these VMs have
50 GB of pd-standard disk attached.
Figure 1. Architecture diagram for an HPC cluster that uses Slurm
Launch Cloud Shell
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Important: If you use Cloud Shell
, the
Cluster Toolkit dependencies are already pre-installed. If you are
using an alternative to
Cloud Shell, such as using a workstation that is running Linux or
macOS, you must follow the instructions in Install
dependencies .
Ensure that the default Compute Engine service account is enabled
Cluster Toolkit requires that the default Compute Engine service account
is enabled in your project and that the Compute Instance Admin (v1) role
( roles/compute.instanceAdmin.v1 ) and the Service Account User role
( roles/iam.serviceAccountUser ) are granted to the service account. Granting
these roles allows the Slurm controller to perform actions such as autoscaling.
From Cloud Shell, run the following commands to ensure these settings
are enabled:
Enable the default Compute Engine service account.
gcloud iam service-accounts enable \
--project= PROJECT_ID \
PROJECT_NUMBER -compute@developer.gserviceaccount.com
Grant the Compute Instance Admin (v1) role ( roles/compute.instanceAdmin.v1 )
and the Service Account User role ( roles/iam.serviceAccountUser )
to the service account.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member=serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com \
--role=roles/compute.instanceAdmin.v1
gcloud projects add-iam-policy-binding PROJECT_ID \
--member=serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com \
--role=roles/iam.serviceAccountUser
Replace the following:
PROJECT_ID : your project ID
PROJECT_NUMBER : the automatically generated unique
identifier for your project
For more information, see
Identifying projects .
Install Cluster Toolkit
To install Cluster Toolkit, follow the instructions in the Install the
prebuilt
bundle .
Create the cluster deployment folder
A cluster blueprint is a YAML file that defines the cluster. The gcluster
command, that is built in previous step, uses the cluster blueprint to create a
deployment folder. The deployment folder can then be used to deploy the cluster.
This tutorial uses the
examples/hpc-slurm.yaml
blueprint file from the Cluster Toolkit GitHub
repository .
To create a deployment folder from the cluster blueprint,
run the following command from Cloud Shell:
./gcluster create examples/hpc-slurm.yaml \
-l ERROR --vars project_id= PROJECT_ID
Replace PROJECT_ID with your project ID.
This command creates the hpc-slurm/ deployment folder, which
contains the Terraform needed to deploy your cluster.
The -l ERROR validator flag is also specified to prevent the creation
of the deployment folder if any of the
validations
fail.
Deploy the HPC cluster using Terraform
To deploy the HPC cluster, complete the following steps:
Use the gcluster deploy command to begin automatic deployment of your cluster:
./gcluster deploy hpc-slurm
gcluster reports the changes that Terraform is proposing to make for your
cluster. Optionally, you may review them by typing d and pressing enter .
To deploy the cluster, accept the proposed changes by typing a and pressing
enter .
Summary of proposed changes: Plan: 37 to add, 0 to change, 0 to destroy.
(D)isplay full proposed changes,
(A)pply proposed changes,
(S)top and exit,
(C)ontinue without applying
Please select an option [d,a,s,c]:
After accepting the changes, gcluster executes terraform apply
automatically. This takes approximately 5 minutes while it displays
progress. If the run is successful, the output is similar to the following:
Apply complete! Resources: 37 added, 0 changed, 0 destroyed.
Run a job on the HPC cluster
After the cluster deploys, complete the following steps to
run a job:
Go to the Compute Engine > VM instances page.
Go to VM instances
Connect to the hpcslurm-login-* VM using SSH-in-browser.
From the Connect column of the VM, click SSH .
After connecting to the VM, if you see the following message on the
terminal:
Slurm is currently being
configured in the background
Wait a few minutes, disconnect and then re-connect to the VM.
From the command line of the VM, run the hostname command using Slurm.
srun -N 3 hostname
This command creates three compute nodes for your HPC cluster. This may
take a minute while Slurm auto-scales to create the three nodes.
When the job finishes you should see an output similar to:
$ srun -N 3 hostname
hpcslurm-debug-ghpc-0
hpcslurm-debug-ghpc-1
hpcslurm-debug-ghpc-2
The auto-scaled nodes are automatically destroyed by the Slurm controller if
left idle for more than 60 seconds.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, delete the Google Cloud project with the
resources.
Destroy the HPC cluster
Go to the VM instances page and check that the compute nodes are deleted.
Compute nodes use the following naming convention: hpcslurm-debug-ghpc-*
If you see any of these nodes, wait several minutes for them to be automatically
deleted. This might take up to four minutes.
After the compute nodes are removed, from the Cloud Shell terminal,
run the following command:
./gcluster destroy hpc-slurm --auto-approve
When complete you should see something like:
Destroy complete! Resources: xx destroyed.
Go to the VM instances page and check that the VMs are deleted.
Note : If the destroy command is run before Slurm shuts down the auto-scale
nodes then the destroy command might fail. In this case, you can delete the
VMs manually and rerun the destroy command.
Delete the project
The easiest way to eliminate billing is to delete the project that you
created for the tutorial.
To delete the project:
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
What's next
Learn more about cluster blueprints .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
