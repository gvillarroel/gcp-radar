---
title: "Compute Engine API \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/ansys-fluent
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/ansys-fluent
  title: "Compute Engine API \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
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
Compute Engine API
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows you how to deploy an HPC cluster and run an Ansys Fluent
workload. The HPC cluster deployment is done by using Cluster Toolkit
and this tutorial assumes that you've already
set up Cluster Toolkit
in your environment.
Cluster Toolkit is open-source software offered by Google Cloud which makes
it easy for you to deploy high performance computing (HPC) environments.
Ansys Fluent
is simulation software that is used to create advanced physics models.
Objectives
In this tutorial, you will learn how to complete the following task:
Use Cluster Toolkit to create a 4 node cluster that's suitable for running
Ansys Fluent
Install Ansys Fluent
Run Ansys Fluent on the 4 node cluster
Costs
Important:
In this document, you use the following billable components of Google Cloud:
Compute Engine
Filestore
Cloud Storage
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
Before you begin
Important: If you use Cloud Shell
, the
Cluster Toolkit dependencies are already pre-installed. If you are
using an alternative to
Cloud Shell, such as using a workstation that is running Linux or
macOS, you must follow the instructions in Install
dependencies .
Set up Cluster Toolkit .
During the setup ensure that you enable all the required APIs, and permissions,
and grant credentials to Terraform. Also ensure that you clone and build the
Cluster Toolkit repository in your local environment.
Get an installation file and input file for Ansys Fluent. These
files must be obtained directly from Ansys.
For the installation file, Version 20.2 or later is recommended .
If using the version 17.02 install package it will have the following
package name: FLUIDS_2022R2_LINX64.tgz ,
For the input file, we recommend the aircraft simulation workload: aircraft_wing_14m.tar.gz .
Review the best practices .
Open your CLI
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Upload the files to Cloud Storage
From the CLI, upload both the installation file for Ansys Fluent and the
input file, that you got from Ansys, to Cloud Storage. After you upload the
files, the files are then available to be copied to the VMs in your cluster in a
later step.
From the CLI, complete the following steps. Replace
BUCKET_NAME with the name of your Cloud Storage
bucket.
Create a Cloud Storage bucket
by using the Google Cloud CLI.
gcloud storage buckets create gs:// BUCKET_NAME
Copy the FLUIDS_2022R2_LINX64.tgz and aircraft_wing_14m.tar.gz to
your bucket.
gcloud storage cp FLUIDS_2022R2_LINX64.tgz aircraft_wing_14m.tar.gz gs:// BUCKET_NAME
Deploy the HPC cluster
From the CLI, complete the following steps:
Set a default region and zone in which to deploy your compute nodes.
gcloud config set compute/region REGION
gcloud config set compute/zone ZONE
Replace the following:
REGION : your preferred region
ZONE : a zone within your preferred zone
Define environment variables. Replace DEPLOYMENT_NAME
with a name for your deployment.
export DEPLOYMENT_NAME= DEPLOYMENT_NAME
export GOOGLE_CLOUD_PROJECT=`gcloud config list --format 'value(core.project)'`
export REGION=`gcloud config list --format 'value(compute.region)'`
export ZONE=`gcloud config list --format 'value(compute.zone)'`
Create the cluster deployment folder.
This tutorial uses the
community/examples/tutorial-fluent.yaml
cluster blueprint that is located in the Cluster Toolkit GitHub repository
that you cloned during the set up of
Cluster Toolkit . To
create a deployment folder from the cluster blueprint, run the following
command from the CLI:
./gcluster create community/examples/tutorial-fluent.yaml --vars "deployment_name=${DEPLOYMENT_NAME}" \
--vars "project_id=${GOOGLE_CLOUD_PROJECT}" \
--vars "region=${REGION}" \
--vars "zone=${ZONE}"
This command creates the DEPLOYMENT_NAME deployment
folder, which contains the Terraform needed to deploy your cluster.
Use the gcluster deploy command to begin automatic deployment of your cluster:
./gcluster deploy fluent-wl
gcluster reports the changes that Terraform is proposing to make for your
cluster. Optionally, you may review them by typing d and pressing enter .
To deploy the cluster, accept the proposed changes by typing a and pressing
enter .
Display full proposed changes, Apply proposed changes, Stop and exit, Continue without applying? [d,a,s,c]:
After accepting the changes, gcluster runs terraform apply
automatically. This takes approximately 5 minutes while it displays
progress. If the run is successful, the output is similar to the following:
Apply complete! Resources: 39 added, 0 changed, 0 destroyed.
To view the created VMs, run the gcloud compute instances list command:
gcloud compute instances list | grep fluent
You are now ready to submit jobs to your HPC cluster.
Configure the HPC cluster
To run Ansys Fluent on your cluster, the cluster must be configured. This
includes enabling passwordless SSH and installing Ansys Fluent.
From the CLI, connect to the login VM. This login VM is named fluent-login-0 .
To connect to the login VM, use the
gcloud compute ssh command .
gcloud compute ssh fluent-login-0
From the login VM, run the following command to setup passwordless SSH. This
allows Intel MPI to run on all the hosts in your cluster. There is a hosts
file that was automatically created by the cluster blueprint.
mkdir .ssh
chmod 700 .ssh
cd .ssh
ssh-keygen -q -t rsa -f id_rsa -C `whoami` -b 2048 -N ''
cat id_rsa.pub >> authorized_keys
chmod 600 authorized_keys
cd ~
while read -r line ; do ssh-keyscan -H $line >> ~/.ssh/known_hosts ; done
Install Ansys Fluent
From the login VM, install Ansys Fluent by running the following commands.
Replace BUCKET_NAME with the name of your
Cloud Storage bucket.
mkdir /tmp/fluent
cd /tmp/fluent
gcloud storage cp gs:/// BUCKET_NAME /FLUIDS_2022R2_LINX64.tgz .
tar xvf FLUIDS_2022R2_LINX64.tgz
chmod a+w /share/apps
./INSTALL -silent -install_dir /shared/apps/fluent
These commands install Ansys Fluent in the /shared/apps/fluent directory,
which is shared using NFS mount to all compute VMs in your cluster
Prepare to run Ansys Fluent
From the login VM, complete the following steps.
Set environment variables for the Ansys Fluent license
configurations. The license configuration is dependent on your
installation and is provided by Ansys.
Replace YOUR_LICENSE_SERV with your license server IP.
LICENSE_FILE=1055@ YOUR_LICENSE_SERV
export ANSYSLMD_LICENSE_FILE="${LICENSE_FILE}"
export LSTC_LICENSE="ANSYS"
Configure the job parameters. The NPROCS value determines how many CPUs are
engaged in the simulation.
Replace BUCKET_NAME with the name of your
Cloud Storage bucket.
WORKLOAD=aircraft_wing_14m
NPROCS=30
basedir="/shared/apps/fluent/v222/fluent"
workdir="${HOME}/fluent/$(date "+%d-%m-%Y-%H-%M")-${NPROCS}"
mkdir -p "${workdir}"
cd "${workdir}"
gcloud storage cp gs:// BUCKET_NAME /aircraft_wing_14m.tar.gz .
tar xzvf ${WORKLOAD}.tar.gz
cd bench/fluent/v6/${WORKLOAD}/cas_dat
Run Ansys Fluent on the HPC cluster
From the login VM, run Ansys Fluent as follows:
${basedir}/bin/fluentbench.pl ${WORKLOAD} -path=${basedir} -t${NPROCS} -cnf=/home/hosts.txt -ncheck -nosyslog -noloadchk -profile -platform=intel -mpi=intel -mpiopt="-genv I_MPI_ADJUST_BCAST 8 -genv I_MPI_ADJUST_ALLREDUCE 10"
This generates an output listing to indicate simulation progress and indicates
completion.
-------------------------------------------------------------
This is the standard ANSYS FLUENT benchmarks suite.
For permission to use or publish please contact ANSYS Inc..
Running FLUENT benchmarks...
Host: fluent-login-0
Date: Thu Jan 5 21:39:50 2023
Creating benchmarks archive fluent_benchmarks.zip
On successful completion, please send this file to ANSYS Inc.
-------------------------------------------------------------
Parallel aircraft_wing_14m benchmarking in progress on 30 CPU(s)...
Writing results in file aircraft_wing_14m-30.out
Done (30).
Post processing results file...
Writing collective results in file aircraft_wing_14m.res
Done!
When the job is complete the first few lines of output in
aircraft_wing_14m.res are as follows:
Collective Benchmark Results
Benchmark: aircraft_wing_14m
Code: Parallel Fluent 22.2.0
Version: 3d, pbns, rke
Size: 14387712 cells
aircraft_wing_14m/Serial: N/A
aircraft_wing_14m/Par-1: N/A (Ncpu=N/A, Efficiency=N/A
aircraft_wing_14m/Par-RedZone: N/A (Ncpu=N/A, Efficiency=N/A)
aircraft_wing_14m/Par-Peak: 868.3 (Ncpu=30 , Efficiency=N/A)
Max. CPUs: 30
There are several files containing more information in this directory.
These files can be copied to your Cloud Storage bucket.
Replace BUCKET_NAME with the name of your
Cloud Storage bucket.
gcloud storage cp * gs:// BUCKET_NAME
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Destroy the HPC cluster
To delete the terraform cluster, from the CLI, run the following command:
terraform -chdir=${DEPLOYMENT_NAME}/primary destroy -auto-approve
When complete you should see output similar to:
Destroy complete! Resources: xx destroyed.
Delete the Cloud Storage bucket
To delete the bucket, use gcloud storage rm
with the --recursive flag. Replace BUCKET_NAME with
the name of your Cloud Storage bucket.
gcloud storage rm gs:// BUCKET_NAME --recursive
If successful, the response looks like the following example:
Removing gs://my-bucket/...
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
