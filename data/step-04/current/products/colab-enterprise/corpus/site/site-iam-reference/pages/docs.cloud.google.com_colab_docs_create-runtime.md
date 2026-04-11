---
title: "Create a runtime in Colab Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/colab/docs/create-runtime
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/colab/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/colab/docs/create-runtime
  title: "Create a runtime in Colab Enterprise \_|\_ Google Cloud Documentation"
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
Create a runtime
This page shows you how to create, start, and delete a runtime
in Colab Enterprise.
You can create a runtime to run code on a runtime that has a
different configuration than the default. Runtimes are created based on a
runtime template, which includes specifications like machine type
and disk size.
To learn more about runtimes, see
Runtimes and runtime templates .
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
you need to create a runtime in Colab Enterprise,
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
Create a runtime
To create a runtime, you can use the Google Cloud console, the Google Cloud CLI,
or Terraform.
Console
To create a runtime:
In the Google Cloud console, go to
the Colab Enterprise Runtimes page.
Go to Runtimes
In the Region menu, select the region where you want
your runtime. It must be in the same region as the notebook that
uses it.
Click add_box Create .
The Create Vertex AI runtime dialog appears.
In the Runtime template menu,
select a runtime template. If there aren't any runtime templates listed,
create
a runtime template .
In the Runtime name field, enter a name for your runtime.
Click Create .
By default, when you create a runtime, you automatically have the
required permissions to start and delete that runtime.
gcloud
Before using any of the command data below,
make the following replacements:
DISPLAY_NAME : the display name for your runtime.
RUNTIME_TEMPLATE_ID : the ID of the runtime template. The
runtime template specifies your runtime's compute configuration.
PROJECT_ID : your project ID.
REGION : the region where you want your runtime.
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
gcloud colab runtimes create --display-name = " DISPLAY_NAME " \
--runtime-template = RUNTIME_TEMPLATE_ID \
--project = PROJECT_ID \
--region = REGION
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud colab runtimes create --display-name = " DISPLAY_NAME " `
--runtime-template = RUNTIME_TEMPLATE_ID `
--project = PROJECT_ID `
--region = REGION
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud colab runtimes create --display-name = " DISPLAY_NAME " ^
--runtime-template = RUNTIME_TEMPLATE_ID ^
--project = PROJECT_ID ^
--region = REGION
By default, when you create a runtime, you automatically have the
required permissions to start and delete that runtime.
For more information about the command for creating a
runtime template from the command line, see the gcloud CLI
documentation .
Terraform
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
For more information, see the
Terraform provider reference documentation .
The following sample uses the
google_colab_runtime
Terraform resource to create a Colab Enterprise
runtime.
resource "google_colab_runtime_template" "my_template" {
name = "{{index $.Vars "runtime_name"}}"
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
}
labels = {
k = "val"
}
idle_shutdown_config {
idle_timeout = "3600s"
}
euc_config {
euc_disabled = true
}
shielded_vm_config {
enable_secure_boot = true
}
network_tags = [ "abc", "def" ]
encryption_spec {
kms_key_name = "{{index $.Vars "key_name"}}"
}
}
resource "google_colab_runtime" "{{$.PrimaryResourceId}}" {
name = "{{index $.Vars "runtime_name"}}"
location = "us-central1"
notebook_runtime_template_ref {
notebook_runtime_template = google_colab_runtime_template.my_template.id
}
display_name = "Runtime full"
runtime_user = "gterraformtestuser@gmail.com"
description = "Full runtime"
desired_state = "ACTIVE"
auto_upgrade = true
depends_on = [
google_colab_runtime_template.my_template
]
}
Troubleshoot
This section shows you how to resolve issues with creating runtimes
in Colab Enterprise.
Unable to create a runtime
This issue occurs when you're unable to create a runtime. See also
Unable to create a default
runtime .
The most common causes are:
Insufficient quota
If you are unable to create a runtime, you might have exceeded your
Compute Engine runtime quota.
Colab Enterprise uses Compute Engine quota for runtimes. For more
information, see the Compute Engine quota and limits
overview .
To resolve this issue, Request a quota adjustment .
Unavailable resources
The following error occurs when you try to create a runtime.
No available zone found for runtime RUNTIME_ID
for machine type MACHINE_TYPE
with accelerator type: ACCELERATOR . Please try again later.
This error occurs if there are no resources available for
your machine type configuration within your notebook's region.
To resolve this issue, try any of the following:
Create a runtime in a different region.
Create a runtime template with a different machine type configuration, and then create
a runtime based on the new runtime template.
Default runtime already exists
The following error occurs when you try to create a runtime from the default runtime template
when the default runtime already exists.
Failed to create runtime
One click runtime already exists.
If you try to create a runtime from a default runtime template, Colab Enterprise
tries to create a default runtime. There can only be one default runtime per user, project, and
region. If the default runtime already exists, Colab Enterprise is unable to
create another default runtime.
To resolve this issue, connect to the existing default runtime or create a runtime from
a non-default runtime template.
Unable to create a default runtime
When Colab Enterprise creates a default runtime, it first creates a default
runtime template that it uses to generate the default runtime. If you try to create
a default runtime without the permissions required to create a runtime template, then
Colab Enterprise can't create the default runtime.
To resolve this issue, ask your administrator to grant you a role that includes the
aiplatform.notebookRuntimeTemplates.create permission.
What's next
To manage your runtime, see Manage runtimes .
Learn more about runtimes and runtime templates .
Connect to your runtime .
Learn how to
create a runtime template .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
