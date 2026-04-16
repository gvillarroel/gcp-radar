---
title: "Quickstart: Create a workflow by using Terraform \_|\_ Workflows \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/create-workflow-terraform
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/authentication
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/create-workflow-terraform
  title: "Quickstart: Create a workflow by using Terraform \_|\_ Workflows \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create a workflow by using Terraform
This quickstart shows you how to create, deploy, and execute your first workflow
using Terraform. Terraform is an infrastructure-as-code tool that lets you
predictably create, change, and improve your cloud infrastructure by using code.
Learn how to use Terraform
to provision infrastructure on Google Cloud.
In this quickstart, the sample workflow sends a request to a public API and then
returns the API's response.
You will complete the following:
Enable the Workflows API using Terraform.
Create a service account for the workflow using Terraform.
Define and deploy a workflow using Terraform.
Execute the workflow using the Google Cloud CLI.
Before you begin
Security constraints defined by your organization might prevent you from completing the
following steps. For troubleshooting information, see
Develop applications in a constrained Google Cloud environment .
Note that Cloud Shell has Terraform already integrated. If you need to
install Terraform, see the
HashiCorp Terraform documentation .
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
If you're using an existing project for this guide,
verify that you have the
permissions required to complete this guide . If you created a new project,
then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Resource Manager, Identity and Access Management (IAM), and Service Usage APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable cloudresourcemanager.googleapis.com iam.googleapis.com serviceusage.googleapis.com
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
If you're using an existing project for this guide,
verify that you have the
permissions required to complete this guide . If you created a new project,
then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Resource Manager, Identity and Access Management (IAM), and Service Usage APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable cloudresourcemanager.googleapis.com iam.googleapis.com serviceusage.googleapis.com
Required roles
To get the permissions that
you need to complete this quickstart,
ask your administrator to grant you the
following IAM roles on your project:
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
Service Account Admin ( roles/iam.serviceAccountAdmin )
Service Account User ( roles/iam.serviceAccountUser )
Workflows Admin ( roles/workflows.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create a Terraform configuration file
Create a Terraform configuration file called main.tf and include the
Google provider for Terraform resources used in
this quickstart.
Note that you can use
interpolation for substitutions
such as reference variables, attributes of resources, and call functions.
Create a directory:
mkdir terraform
Go to the terraform directory:
cd terraform
Add a new file, main.tf , to the directory:
nano main.tf
Add the following resources to the main.tf file:
Assign the ID of the project:
provider "google" {
project = " PROJECT_ID "
}
Replace PROJECT_ID with your project's ID.
Enable the Workflows API:
# Enable Workflows API
resource "google_project_service" "default" {
service = "workflows.googleapis.com"
disable_on_destroy = false
}
Create a service account for the workflow:
# Create a dedicated service account
resource "google_service_account" "default" {
account_id = "sample-workflows-sa"
display_name = "Sample Workflows Service Account"
}
Define the workflow using the
google_workflows_workflow resource :
Important: When you define workflows in Terraform, variables must be
escaped with $${...} and not ${...} .
# Create a workflow
resource "google_workflows_workflow" "default" {
name = "sample-workflow"
region = "us-central1"
description = "A sample workflow"
service_account = google_service_account.default.id
deletion_protection = false # set to "true" in production
labels = {
env = "test"
}
user_env_vars = {
url = "https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam"
}
source_contents = << -EOF
# This is a sample workflow that you can replace with your source code
#
# The workflow does the following:
# - Retrieves the current date from a public API and stores the
# response in `currentDate`
# - Retrieves a list of Wikipedia articles from a public API related
# to the day of the week stored in `currentDate`
# - Returns the list of articles in the workflow output
#
# Note that when you define workflows in Terraform, variables must be
# escaped with two dollar signs ($$) and not a single sign ($)
- getCurrentDate :
call : http.get
args :
url : $$ { sys.get_env ( "url" )}
result : currentDate
- readWikipedia :
call : http.get
args :
url : https : //en.wikipedia.org/w/api.php
query :
action : opensearch
search : $$ { currentDate.body.dayOfWeek }
result : wikiResult
- returnOutput :
return : $$ { wikiResult.body[1 ]}
EOF
depends_on = [ google_project_service.default ]
}
The following arguments are used in the sample workflow:
name : the name of your workflow.
region : the
location
of your workflow.
description : a description of your workflow.
service_account : the email address or unique ID of the service account
associated with the latest workflow version. This service account
represents the identity of the workflow and determines what permissions
the workflow has. If you don't specify a service account during the
workflow's creation, the workflow uses the default Compute Engine
service account for its identity. For more information, see
Grant a workflow permission to access Google Cloud resources .
labels : a list of key-value label pairs to assign to this workflow
that helps you organize your Google Cloud instances. For more
information, see
What are labels?
user_env_vars : user-defined environment variables associated with this
workflow revision. For more information, see
Use environment variables .
source_contents : the Workflows code to execute. For the
file size limit, see
Resource limits .
Other optional arguments include the following:
crypto_key_name : the resource ID for a Cloud Key Management Service key in the
following format:
projects/ PROJECT_NAME /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME
For more information, see
Use customer-managed encryption keys .
call_log_level : the level of logging to apply to calls and call
responses during executions of this workflow. Possible values are:
CALL_LOG_LEVEL_UNSPECIFIED
LOG_ALL_CALLS
LOG_ERRORS_ONLY
LOG_NONE
For more information, see Call logging .
project : the ID of the project in which the resource belongs. If it is
not provided, the provider project is used.
name_prefix : creates a unique name beginning with the specified prefix.
If this and name are unspecified, a random value is chosen for the name.
Create and execute the workflow
Deploy your Terraform resources to create the workflow and then execute the
workflow.
Initialize Terraform in the directory:
terraform init
Check that the changes you propose with Terraform match the expected plan:
terraform plan
You can ignore the note regarding not using the -out option.
Create the workflow:
terraform apply
At the Enter a value prompt, type yes to proceed with the creation of
resources.
Confirm that a workflow is created:
gcloud workflows list --location us-central1
The output should be similar to the following:
NAME STATE REVISION_ID UPDATE_TIME
projects/project-name/locations/us-central1/workflows/sample-workflow ACTIVE 000001 -f9a 2024 -02-24T13:38:58.353765906Z
Optionally, you can execute the workflow:
gcloud workflows execute sample-workflow
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, delete the Google Cloud project with the
resources.
Delete all the resources you created with Terraform:
terraform destroy
Delete the workflow you created:
gcloud workflows delete sample-workflow
When asked if you want to continue, enter y .
Alternatively, you can delete your Google Cloud project to avoid incurring
charges. Deleting your Google Cloud project stops billing for all the
resources used within that project.
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
What's next
Control the order of execution in a workflow .
Update an existing workflow .
Explore sample workflows .
Learn more about the Workflows syntax .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
