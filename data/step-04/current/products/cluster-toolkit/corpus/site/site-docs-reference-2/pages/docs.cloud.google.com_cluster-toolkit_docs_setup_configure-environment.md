---
title: "Set up Cluster Toolkit \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment
  title: "Set up Cluster Toolkit \_|\_ Google Cloud Documentation"
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
Set up Cluster Toolkit
Stay organized with collections
Save and categorize content based on your preferences.
To use Cluster Toolkit, you need a Google Cloud
project . In your project,
you need to enable APIs and permissions, as well as grant credentials to
Terraform. You also need to install the prebuilt bundle Cluster Toolkit, or
clone and build the Cluster Toolkit repository.
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
Overview
To set up Cluster Toolkit, you need to complete the following steps:
Set up your CLI
Set up your project
Install Cluster Toolkit
Set up your CLI
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Important: If you use Cloud Shell , the
Cluster Toolkit dependencies are already pre-installed. If you are
using an alternative to
Cloud Shell, such as using a workstation that is running Linux or
macOS, you must follow the instructions in Install
dependencies .
Set up your project
Before you can deploy your cluster, you need to configure your Google Cloud
project. The following sections show you how to set a default project, enable
the required service accounts and roles, grant credentials to Terraform, and
enable OS Login for virtual machine (VM) access.
Set a default project
To set a default project, run the following command:
Replace PROJECT_ID with your project ID.
gcloud config set project PROJECT_ID
Ensure that the default Compute Engine service account is enabled
Cluster Toolkit requires that the default Compute Engine service account
is enabled in your project and the Compute Instance Admin (v1) role
( roles/compute.instanceAdmin.v1 ) and the Service Account User
( roles/iam.serviceAccountUser ) role are granted to the service account.
However, if you've disabled the default Compute Engine service account and
lack the required roles in your project, complete the following steps to enable
these settings:
Enable the default Compute Engine service account.
gcloud iam service-accounts enable \
--project PROJECT_ID \
PROJECT_NUMBER -compute@developer.gserviceaccount.com
Grant the Compute Instance Admin (v1) role
( roles/compute.instanceAdmin.v1 ) and the Service Account User
( roles/iam.serviceAccountUser ) to the service
account.
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
Grant user access credentials to Terraform
Note: If you are using Cloud Shell, you can skip this step.
To generate cloud credentials associated with your Google Cloud account, run
the following command:
gcloud auth application-default login
This grants the Application Default Credentials (ADC) to Terraform.
Enable OS Login at the project-level
To be able to connect to a VM in your cluster by using ssh , you must enable
OS Login. If OS Login is already enabled at the organization level,
you don't need to enable it on your project.
gcloud compute project-info add-metadata \
--metadata enable-oslogin=TRUE
Install Cluster Toolkit
To install Cluster Toolkit, download the gcluster_bundle_linux.zip
file for Linux, or the gcluster_bundle_mac.zip file for macOS, from the
releases
pa.ge These bundles contain the gcluster binary, the
examples
directory, and the
community/examples`
directory.
Supported platforms
The prebuilt bundles support the following execution environments:
Platform
Support Status
Notes
Linux
Yes
Pre-compiled on Debian Bullseye.
Google Cloud Shell
Yes
Built-in support by using the Linux binary.
macOS
Yes
Built-in support by using the Mac binary.
Windows
No
You must build from source .
Install the prebuilt bundle
To install Cluster Toolkit, download the prebuilt binary bundle.
Find the latest release version on the Cluster Toolkit releases page .
Perform the installation steps for your platform:
Linux
Set the version tag that you want to install. Find the latest
version tag on the Cluster Toolkit releases
page
on GitHub.
export TAG= LATEST_VERSION_TAG
Replace LATEST_VERSION_TAG with the tag for the
latest release, such as v1.82.0 .
Download the bundle by using the curl command:
curl -LO https://github.com/GoogleCloudPlatform/cluster-toolkit/releases/download/${TAG}/gcluster_bundle_linux.zip
Extract the bundle files to a new directory:
unzip gcluster_bundle_linux.zip -d gcluster-bundle
Go to the new directory:
cd gcluster-bundle
Make the binary executable:
chmod +x gcluster
macOS
Set the version tag that you want to install. Find the latest
version tag on the Cluster Toolkit releases
page .
export TAG= LATEST_VERSION_TAG
Replace LATEST_VERSION_TAG with the tag for the
latest release, such as v1.82.0 .
Download the bundle by using the curl command:
curl -LO https://github.com/GoogleCloudPlatform/cluster-toolkit/releases/download/${TAG}/gcluster_bundle_mac.zip
Extract the bundle files to a new directory:
unzip gcluster_bundle_mac.zip -d gcluster-bundle
Go to the new directory:
cd gcluster-bundle
Make the binary executable:
chmod +x gcluster
Verify the installation by running the following commands:
./gcluster --version
./gcluster --help
Build from source
If you use a Windows environment, you must build the Cluster Toolkit binary from source.
Clone the Cluster Toolkit GitHub repository:
git clone https://github.com/GoogleCloudPlatform/cluster-toolkit.git
Go to the main working directory:
cd cluster-toolkit/
Build the Cluster Toolkit binary:
make
Verify that the build was successful:
./gcluster --version
What's next
Learn about Cluster blueprints .
Review best practices for running HPC workloads .
Try a quickstart tutorial, see
Deploy an HPC cluster with Slurm .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
