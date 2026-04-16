---
title: "Create a Vertex AI Workbench instance \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/start/install-sdk-ref
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create
  title: "Create a Vertex AI Workbench instance \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Vertex AI Workbench
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create a Vertex AI Workbench instance
This page shows you how to create a Vertex AI Workbench instance by using
the Google Cloud console or the Google Cloud CLI. While creating your instance,
you can configure your instance's hardware, encryption type, network,
and other details.
Before you begin
Before you create a Vertex AI Workbench instance, you must complete
the following steps:
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
Enable the Notebooks API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
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
Enable the Notebooks API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Note: The Notebooks API lets you
manage Vertex AI Workbench resources. For managing
Vertex AI resources, see the
Vertex AI API .
Required roles
To get the permissions that
you need to create and manage a Vertex AI Workbench instance,
ask your administrator to grant you the
Notebooks Admin ( roles/notebooks.admin )
IAM role on the project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create an instance
You can create a Vertex AI Workbench instance
by using the Google Cloud console, the gcloud CLI,
or Terraform:
Console
In the Google Cloud console, go to the Instances page.
Go to Instances
Click add_box Create new .
In the New instance dialog, click Advanced options .
In the Create instance dialog,
in the Details section,
provide the following information for your new instance:
Name : Provide a name for your new instance. The name
must start with a letter followed by up to 62 lowercase letters,
numbers, or hyphens (-), and cannot end with a hyphen.
Region and Zone : Select a region and zone for
the new instance. For best network performance,
select the region that is geographically closest to you.
See the available Vertex AI Workbench
locations .
Labels : Optional. Provide custom key-value labels for the
instance.
Network tags : Optional. Provide network tags
for the instance.
In the Environment section, provide the following:
JupyterLab version : Select a JupyterLab version.
Version : Use the latest version or a previous version
of Vertex AI Workbench instances.
Post-startup script : Optional. Click Browse to
select a script to run one time, after the instance is created.
The path must be a URL or Cloud Storage path,
for example: gs:// PATH_TO_FILE / FILE_NAME .
Metadata : Optional. Provide custom metadata keys for the
instance.
In the Machine type section, provide the following:
Machine type : Select the number of CPUs and amount of RAM for your
new instance. Vertex AI Workbench provides monthly cost
estimates for each machine type that you select.
GPU : Optional. If you want GPUs, select the GPU type
and Number of GPUs for your new instance. The accelerator type
that you want must be available in your instance's
zone. To learn about accelerator availability by zone, see
GPU regions and zones
availability .
For information about the different GPUs, see
GPUs on Compute Engine .
Note: You can modify the machine type and GPU configuration for
your instance after it is created.
For more information, see
Change machine type and configure GPUs of
a Vertex AI Workbench instance .
Shielded VM : Optional. Select or clear the following checkboxes:
Secure Boot
Virtual Trusted Platform Module (vTPM)
Integrity monitoring
Idle shutdown : Optional.
To change the number of minutes before shutdown,
in the Time of inactivity before shutdown (Minutes) field,
change the value to an integer from 10 through 1440.
To turn off idle shutdown, clear Enable Idle Shutdown .
In the Disks section, provide the following:
Disks : Optional. To change the default data disk settings,
select a Data disk type and Data disk size in GB .
For more information about disk types, see
Storage options .
Delete to trash : Optional. Select this checkbox to use
the operating system's default trash behavior, If you use
the default trash behavior, files deleted by using the JupyterLab
user interface are recoverable but these deleted files
do use disk space.
Encryption : Select Google-managed encryption key or
Customer-managed encryption key (CMEK) .
To use CMEK, see
Customer-managed encryption keys .
In the Networking section, provide the following:
Networking : Adjust the network options to use a network in
your current project or a
Shared VPC network from
a host project, if one is configured. If you are using a
Shared VPC
in the host project, you must also grant the
Compute Network User role
( roles/compute.networkUser ) to the Notebooks Service
Agent
from the service project.
In the Network field, select the network that you want. You
can select a VPC network, as long as the network
has Private Google Access
enabled or can access the internet. For more information,
see network configuration options .
In the Subnetwork field, select the subnetwork that you want.
To turn off the external IP address,
clear the Assign external IP address checkbox.
Note: If you disable Assign external IP address , make sure
to add DNS entries from the Network configuration options
section.
To turn off proxy access, clear the
Allow proxy access checkbox.
Note: If you turn off proxy access, you must use SSH to connect
to your instance's JupyterLab interface .
In the IAM and security section, provide the following:
IAM and security : To grant access to the instance's
JupyterLab interface, complete one of the following steps:
To grant access to JupyterLab through a service account,
select Service account .
Caution: After you create the instance, you can't change
the specified service account, either directly or by
modifying the underlying Compute Engine VM. To use
a different service account, you must create a
new instance specifying the service account that
you want.
To use the default Compute Engine service account,
select Use default Compute Engine service account .
To use a custom service account, clear Use
default Compute Engine service account , and then,
in the Service account email field, enter
your custom service account email address.
To grant a single user access to the JupyterLab interface,
do the following:
Select Single user , and then,
in the User email field,
enter the user account that you want to grant access. If the
specified user is not the creator of the instance, you must grant
the specified user the Service Account User
role
( roles/iam.serviceAccountUser ) on the
instance's service account.
Your instance uses a service account to interact with
Google Cloud services and APIs.
To use the
default Compute Engine service account,
select Use default Compute Engine service account .
To use a custom service account, clear Use
default Compute Engine service account , and then,
in the Service account email field, enter
your custom service account email address.
Note: To grant access to the instance through the service account
or single user option, you must use an individual's
user account email address. Group access is not supported.
To learn more about granting access,
see Manage access .
Security options : Select or clear the following checkboxes:
Root access to the instance
nbconvert
File downloading
Terminal access
In the System health section, provide the following:
Environment upgrade and system health :
To automatically upgrade to newly released environment versions,
select Environment auto-upgrade and complete the
Upgrade schedule .
In Reporting , select or clear the following checkboxes:
Report system health
Report custom metrics to Cloud Monitoring
Install Cloud Monitoring
Report DNS status for required Google domains
Click Create .
Vertex AI Workbench creates an instance and automatically starts it.
When the instance is ready to use, Vertex AI Workbench
activates an Open JupyterLab link.
gcloud
Before using any of the command data below,
make the following replacements:
INSTANCE_NAME : the name of your Vertex AI Workbench instance;
must start with a letter followed by up to 62 lowercase letters,
numbers, or hyphens (-), and cannot end with a hyphen
PROJECT_ID : your project ID
LOCATION : the zone where you want your instance to be located
VM_IMAGE_PROJECT : the ID of the Google Cloud project that
VM image belongs to; the default Google Cloud project ID for supported images
is cloud-notebooks-managed
VM_IMAGE_NAME : the image name; to find the image name of a
specific version, see Find
the specific version
MACHINE_TYPE : the
machine type of your instance's VM
METADATA : custom metadata to apply to this instance;
for example, to specify a post-startup-script,
you can use the post-startup-script metadata tag, in the format:
--metadata=post-startup-script=gs:// BUCKET_NAME /hello.sh
To enable the JupyterLab 4 preview, use
--metadata=enable-jupyterlab4-preview=true . For more information, see
JupyterLab 4 preview .
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud workbench instances create INSTANCE_NAME \
--project = PROJECT_ID \
--location = LOCATION \
--vm-image-project = VM_IMAGE_PROJECT \
--vm-image-name = VM_IMAGE_NAME \
--machine-type = MACHINE_TYPE \
--metadata = METADATA
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud workbench instances create INSTANCE_NAME `
--project = PROJECT_ID `
--location = LOCATION `
--vm-image-project = VM_IMAGE_PROJECT `
--vm-image-name = VM_IMAGE_NAME `
--machine-type = MACHINE_TYPE `
--metadata = METADATA
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud workbench instances create INSTANCE_NAME ^
--project = PROJECT_ID ^
--location = LOCATION ^
--vm-image-project = VM_IMAGE_PROJECT ^
--vm-image-name = VM_IMAGE_NAME ^
--machine-type = MACHINE_TYPE ^
--metadata = METADATA
For more information about the command for creating an
instance from the command line, see the gcloud CLI
documentation .
Vertex AI Workbench creates an instance and automatically starts it.
When the instance is ready to use, Vertex AI Workbench
activates an Open JupyterLab link in the Google Cloud console.
Terraform
The following sample uses the
google_workbench_instance
Terraform resource to create
a Vertex AI Workbench instance
named workbench-instance-example .
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
resource "google_workbench_instance" "default" {
name = "workbench-instance-example"
location = "us-central1-a"
gce_setup {
machine_type = "n1-standard-1"
accelerator_configs {
type = "NVIDIA_TESLA_T4"
core_count = 1
}
vm_image {
project = "cloud-notebooks-managed"
family = "workbench-instances"
}
}
}
Change the version of JupyterLab on an existing instance
This section describes how to change the JupyterLab version on your instance by
using the Google Cloud console or the gcloud CLI.
Console
To change the JupyterLab version on an existing instance,
do the following:
In the Google Cloud console, go to the Instances page.
Go to Instances
Shut down your instance .
Click the name of your instance to open the Instance details page.
On the System tab, do one of the following:
To enable JupyterLab 3, clear the Enable JupyterLab 4 checkbox.
To enable JupyterLab 4, leave the Enable JupyterLab 4 checkbox selected.
Click Submit .
To restart your instance, select the instance and click arrow_right Start .
gcloud
You can change the JupyterLab version on an existing instance by using
the following command:
gcloud workbench instances update INSTANCE_NAME \
--project = " PROJECT_ID " \
--location = " LOCATION " \
--metadata = enable-jupyterlab4 = ENABLEMENT_BOOLEAN
Replace the following:
PROJECT_ID : your project ID
LOCATION : the zone where you want
your instance to be located
INSTANCE_NAME : the name of your
Vertex AI Workbench instance
ENABLEMENT_BOOLEAN : use one of the following:
false : changes to JupyterLab 3.
true : changes to JupyterLab 4. JupyterLab 4 is enabled, by default.
Limitation of JupyterLab 4
When scheduling a notebook run in JupyterLab 4, Vertex AI Workbench stores
a copy of the notebook in its current state in Cloud Storage, and then runs
this copy of the notebook according to the schedule. If you edit the original
notebook, you must create a new schedule to run the updated version of the
notebook.
Network configuration options
A Vertex AI Workbench instance must access service endpoints
that are outside your VPC network.
You can provide this access in one of the following ways:
Assign an external IP address to
the instance. This is done by default when you create
a new instance. Make sure your
environment meets the requirements for accessing Google APIs and
services .
Connect the instance to a subnet where
Private Google Access
is enabled.
Make sure your environment meets the requirements for
Private Google Access .
If you use the private.googleapis.com or restricted.googleapis.com VIP to
provide access to the service endpoints,
add DNS entries for each of the required service
endpoints :
notebooks.cloud.google.com
notebooks.googleapis.com
*.notebooks.byoid.googleusercontent.com
*.notebooks.cloud.google.com
*.notebooks.googleusercontent.com
*.kernels.googleusercontent.com
If you use
third party credentials ,
you must use restricted.googleapis.com and add the following DNS entry:
*.byoid.googleusercontent.com
Note: When using Vertex AI with Private Google Access to access Google Cloud APIs, the instances must be configured to bypass any web proxies or other network traffic inspection or filtering devices (for example next generation firewalls) for any hostnames in the domains listed in the Private Google Access documentation.
Network tags
Your new Vertex AI Workbench instance automatically has the
deeplearning-vm and notebook-instance network tags
assigned.
These tags let you manage network access to and from
your Vertex AI Workbench instance by referencing the tags in your
VPC networking firewall rules. For more information about
network tags, see
Add network tags .
To view the network tags for a Vertex AI Workbench instance,
do the following:
In the Google Cloud console, go to the VM instances page.
Go to VM instances
Click the name of the instance.
In the Networking section, find Network tags .
Troubleshooting
If you encounter a problem when you create an instance, see Troubleshooting
Vertex AI Workbench
for help with common issues.
What's next
To use a notebook to help you get started using Vertex AI and
other Google Cloud services, see
Vertex AI
notebook tutorials .
Create an
instance with Confidential Computing enabled .
To check on the health status of your Vertex AI Workbench instance,
see Monitor health status .
For a Terraform solution for simplified Vertex AI networking setup, see
Simplified Cloud Networking Configuration Solutions .
You can create a Vertex AI Workbench instance using a private IP. For a Terraform solution, see Workbench .
To learn more about granting access,
see Manage access .
To use CMEK, see
Customer-managed encryption keys .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
