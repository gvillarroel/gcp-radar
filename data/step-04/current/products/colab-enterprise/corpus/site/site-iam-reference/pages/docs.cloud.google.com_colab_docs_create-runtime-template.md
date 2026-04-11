---
title: "Create a runtime template in Colab Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/colab/docs/create-runtime-template
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/colab/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/colab/docs/create-runtime-template
  title: "Create a runtime template in Colab Enterprise \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Colab Enterprise
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create a runtime template
This page shows you how to create a runtime template in Colab Enterprise.
To run code in your notebook, you use a compute resource called a runtime .
You can use the default runtime or a runtime created from a runtime template.
By creating a runtime template, you can configure the template to optimize
a runtime's performance, cost, and other characteristics based on your needs.
Learn more about runtimes and runtime templates .
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
Enable the Vertex AI, Dataform, and Compute Engine APIs.
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
Enable the Vertex AI, Dataform, and Compute Engine APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Required roles
To get the permissions that
you need to create a runtime template in Colab Enterprise,
ask your administrator to grant you the
Colab Enterprise Admin ( roles/aiplatform.colabEnterpriseAdmin )
IAM role on the project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
One or more of the required roles includes the dataform.repositories.list
permission. Users who are granted the dataform.repositories.list permission or the
Code Creator
( roles/dataform.codeCreator ) role in a project can list the
names of code assets in that project by using the Dataform API or the
Dataform command-line interface (CLI). Non-administrators using
BigQuery Studio can only see code assets that they created or that were
shared with them.
Create the runtime template
To create a runtime template, you can use the Google Cloud console,
the Google Cloud CLI, the REST API, or Terraform.
Console
To create a runtime template:
In the Google Cloud console, go to
the Colab Enterprise Runtime templates page.
Go to Runtime templates
Click add_box New
template .
The Create new runtime template dialog appears.
Runtime basics
In the Runtime basics section, enter
a Display name .
In the Region menu, select the region where you want
your runtime template.
Optional: Add a Description of
your runtime template.
Optional: To add a label, click
add Add label ,
and then enter a Key and Value pair.
To add more labels, repeat this step.
Click Continue .
Configure compute
In the Configure compute section,
in the Machine type menu, select a machine type.
For information on machine types, see the
Machine families resource and
comparison guide .
If you select a machine type that has GPUs, select the
Accelerator type and Accelerator count .
If you're unable to select the number of GPUs that you want, you
might need to increase your quota. See
Request a quota adjustment .
In the Data disk type menu, select a disk type.
In the Data disk size field, enter a size in GB.
In the Idle shutdown section:
To turn off idle shutdown, clear
Enable idle shutdown .
To change the inactivity time period, in
Time of inactivity before shutdown (Minutes) ,
change the number to the number of minutes of inactivity that
you want. In the Google Cloud console, this setting can be set
to any integer value from 10 to 1440.
Click Continue .
Environment
In the Environment section, select an Environment .
The default is Latest (currently Python 3.12).
Optional: In the Post-startup script field, enter the URI for a
post-startup script. For more information about using a post-startup script, see
Use a post-startup script .
Optional: Under the post-startup script URL, select your post-startup script's behavior. The
default behavior is Run once . For more information, see
Post-startup script behavior .
Optional: To add an environment variable, click
add Add env variable ,
and then enter a Key and Value pair.
To add more environment variables, repeat this step.
Click Continue .
Networking and security
In the Networking and security section,
in the Network menu, select a network. If you don't
select a network, your default network is selected.
In the Subnetwork menu, select a subnetwork.
To turn off public internet access,
clear Enable public internet access .
To turn off end-user credential access,
clear Enable end-user credentials .
Finish creating the runtime template
Click Create to finish creating the runtime template.
Your runtime template appears in the list on
the Runtime templates tab.
gcloud
Before using any of the command data below,
make the following replacements:
DISPLAY_NAME : the display name of your runtime template.
PROJECT_ID : your project ID.
REGION : the region where you want your runtime template.
MACHINE_TYPE : the
machine type to use for your runtime.
ACCELERATOR_TYPE : the type of hardware accelerator to use for
your runtime.
ACCELERATOR_COUNT : the number of accelerators to use for
your runtime.
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
gcloud colab runtime-templates create --display-name = " DISPLAY_NAME " \
--project = PROJECT_ID \
--region = REGION \
--machine-type = MACHINE_TYPE \
--accelerator-type = ACCELERATOR_TYPE \
--accelerator-count = ACCELERATOR_COUNT
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud colab runtime-templates create --display-name = " DISPLAY_NAME " `
--project = PROJECT_ID `
--region = REGION `
--machine-type = MACHINE_TYPE `
--accelerator-type = ACCELERATOR_TYPE `
--accelerator-count = ACCELERATOR_COUNT
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud colab runtime-templates create --display-name = " DISPLAY_NAME " ^
--project = PROJECT_ID ^
--region = REGION ^
--machine-type = MACHINE_TYPE ^
--accelerator-type = ACCELERATOR_TYPE ^
--accelerator-count = ACCELERATOR_COUNT
For more information about the command for creating a
runtime template from the command line, see the gcloud CLI
documentation .
REST
Before using any of the request data,
make the following replacements:
REGION : the region where you want your runtime template.
PROJECT_ID : your project ID.
DISPLAY_NAME : the display name of your runtime template.
MACHINE_TYPE : the
machine type to use for your runtime.
ACCELERATOR_TYPE : the type of hardware accelerator to use for
your runtime.
ACCELERATOR_COUNT : the number of accelerators to use for
your runtime.
HTTP method and URL:
POST https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /notebookRuntimeTemplates
Request JSON body:
{
"displayName": " DISPLAY_NAME ",
"machineSpec": {
{
"machineType": MACHINE_TYPE
"acceleratorType": ACCELERATOR_TYPE ,
"acceleratorCount": ACCELERATOR_COUNT ,
}
},
}
To send your request, choose one of these options:
curl
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /notebookRuntimeTemplates"
PowerShell
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /notebookRuntimeTemplates" | Select-Object -Expand Content
If successful, the response body contains an instance of
Operation .
For more information, see the notebookRuntimeTemplates.create REST API
documentation .
Terraform
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
For more information, see the
Terraform provider reference documentation .
The following sample uses the
google_colab_runtime_template
Terraform resource to create a Colab Enterprise
runtime template.
resource "google_compute_network" "my_network" {
name = "{{index $.Vars "network_name"}}"
auto_create_subnetworks = false
}
resource "google_compute_subnetwork" "my_subnetwork" {
name = "{{index $.Vars "network_name"}}"
network = google_compute_network.my_network.id
region = "us-central1"
ip_cidr_range = "10.0.1.0/24"
}
resource "google_colab_runtime_template" "{{$.PrimaryResourceId}}" {
name = "{{index $.Vars "runtime_template_name"}}"
display_name = "Runtime template full"
location = "us-central1"
description = "Full runtime template"
machine_spec {
machine_type = "n1-standard-2"
accelerator_type = "NVIDIA_TESLA_T4"
accelerator_count = "1"
}
data_persistent_disk_spec {
disk_type = "pd-standard"
disk_size_gb = 200
}
network_spec {
enable_internet_access = true
network = google_compute_network.my_network.id
subnetwork = google_compute_subnetwork.my_subnetwork.id
}
labels = {
k = "val"
}
idle_shutdown_config {
idle_timeout = "3600s"
}
euc_config {
euc_disabled = false
}
shielded_vm_config {
enable_secure_boot = false
}
network_tags = [ "abc", "def" ]
encryption_spec {
kms_key_name = "{{index $.Vars "key_name"}}"
}
software_config {
env {
name = "TEST"
value = 1
}
post_startup_script_config {
post_startup_script = "echo 'hello world'"
post_startup_script_url = "gs://colab-enterprise-pss-secure/secure_pss.sh"
post_startup_script_behavior = "RUN_ONCE"
}
colab_image {
release_name = "py312"
}
}
}
Granting access to the runtime template
After you create a runtime template, you must grant access to it
for a principal to be able to use it. A principal can
create a runtime
from a runtime template only when they have the following:
Access to the runtime template.
The required permissions for creating runtimes.
See Manage access to a runtime
template .
Use Colab Enterprise in a Shared VPC network
When you create a runtime template or runtime in a service project of a
Shared VPC network, you must grant the Vertex AI service agent
( service- SERVICE_PROJECT_NUMBER @gcp-sa-aiplatform.iam.gserviceaccount.com )
specific permissions on the host project. These permissions are used to
do the following:
Validate the existence and accessibility of your network and subnetwork
when you create the runtime template.
Provision the underlying Compute Engine VM instance within
the Shared VPC network when you create a runtime.
To ensure that the Vertex AI service agent has the necessary
permissions to enable the use of a runtime template and runtime within a
Shared VPC network,
ask your administrator to grant the
Compute Network User ( roles/compute.networkUser )
IAM role to the Vertex AI service agent on the host project.
Important: You must grant this role
to the Vertex AI service agent, not to your user account. Failure to grant the role to the correct principal might result in permission errors.
For more information about granting roles, see Manage access to projects, folders, and organizations .
Your administrator might also be able to give the Vertex AI service agent
the required permissions through custom
roles or other predefined
roles .
Schedule notebook runs in a Shared VPC network
If you want to use the notebook scheduler with a runtime template or runtime
in a service project of a Shared VPC network, you must grant the
Colab Enterprise service agent
( service- SERVICE_PROJECT_NUMBER @gcp-sa-vertex-nb.iam.gserviceaccount.com )
specific permissions on the host project. These permissions are used to create
the underlying Compute Engine VM.
To ensure that the Colab Enterprise service agent has the necessary
permissions to use scheduled notebooks within a Shared VPC network,
ask your administrator to grant the
Compute Network User ( roles/compute.networkUser )
IAM role to the Colab Enterprise service agent on the host project.
Important: You must grant this role
to the Colab Enterprise service agent, not to your user account. Failure to grant the role to the correct principal might result in permission errors.
For more information about granting roles, see Manage access to projects, folders, and organizations .
Your administrator might also be able to give the Colab Enterprise service agent
the required permissions through custom
roles or other predefined
roles .
Delete a runtime template
To delete a runtime template:
In the Google Cloud console, go to
the Colab Enterprise Runtime templates page.
Go to Runtime templates
In the Region menu, select the region that contains
your runtime template.
Select the runtime template that you want to delete.
Click delete Delete .
Click Confirm .
Troubleshoot
This section shows you how to resolve issues with creating runtime templates
in Colab Enterprise.
Unable to select enough GPUs
While creating a runtime template, you can't select the number of GPUs that you want.
This might be because you don't have enough quota.
Colab Enterprise uses Compute Engine quota for GPUs. For more information,
see the Compute Engine quota and limits overview .
To resolve this issue, Request a quota adjustment .
What's next
Learn more about runtimes and runtime templates .
Learn how to create a runtime based on
a runtime template.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
