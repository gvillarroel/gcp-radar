---
title: "Quickstart: Deploy a VPC with Infrastructure Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/infrastructure-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform
  title: "Quickstart: Deploy a VPC with Infrastructure Manager \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Infrastructure as code
Infrastructure Manager
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Deploy a VPC with Terraform
Learn how to use Infrastructure Manager to deploy a Virtual Private Cloud (VPC).
This quickstart uses a Terraform configuration that is stored in a public GitHub
repository. The configuration defines the VPC to provision.
Before you begin
Sign in to your Google Account. If you don't already have one,
sign up for a new account .
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
Verify that billing is enabled for your Google Cloud project .
Enable the Infrastructure Manager API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable config.googleapis.com
Set up authentication:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant roles .
Create the service account:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with a name for the service account.
Grant the roles/config.agent IAM
role to the service account:
gcloud projects add-iam-policy-binding PROJECT_ID --member = "serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com" --role = roles/config.agent
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
Note : The --role flag affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
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
Verify that billing is enabled for your Google Cloud project .
Enable the Infrastructure Manager API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable config.googleapis.com
Set up authentication:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant roles .
Create the service account:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with a name for the service account.
Grant the roles/config.agent IAM
role to the service account:
gcloud projects add-iam-policy-binding PROJECT_ID --member = "serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com" --role = roles/config.agent
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
Note : The --role flag affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Grant permissions for resources in the configuration
You have granted permissions needed to run Infra Manager, but you
also need to grant permissions that are specific to the resources described
in the configuration you are deploying.
Grant permissions for the VPC, which is the resource
defined in the Terraform configuration.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount : SERVICE_ACCOUNT_NAME @ PROJECT_ID . iam.gserviceaccount.com \
--role = roles/ compute.networkAdmin
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account.
PROJECT_ID : your project ID.
Preview the deployment
Before you create a deployment, you can create a preview of the deployment.
You can use this preview to verify the resources that are planned to be
provisioned.
The following command has four values populated that don't have a default value.
These values are: your project ID, the service account name, the location
us-central1 , and the name quickstart-vpc for the network you're creating.
To create a preview, use the following command:
gcloud infra-manager previews create projects/ PROJECT_ID /locations/us-central 1 /previews/quickstart-preview \
--service-account projects/ PROJECT_ID /serviceAccounts/ SERVICE_ACCOUNT_NAME @ PROJECT_ID . iam.gserviceaccount.com \
--git-source-repo = https : //github.com/terraform-google-modules/terraform-google-network \
--git-source-directory = modules/vpc \
--git-source-ref = main \
--input-values = project_id = PROJECT_ID , network_name = quickstart-vpc
After you create a preview, you can review the preview results.
This quickstart skips this step, but you can see
Export and view preview results
if you want more details.
Create a deployment
Use Infra Manager to create a deployment. This means that
Infra Manager provisions the resources that are defined in the
Terraform configuration.
The configuration for this quickstart has four values that don't have a default
value. The following command adds these values: your project ID, the
service account name, the location us-central1 , and the name quickstart-vpc
for the network you're creating.
gcloud infra-manager deployments apply projects/ PROJECT_ID /locations/us-central 1 /deployments/quickstart-deployment \
--service-account = projects/ PROJECT_ID /serviceAccounts/ SERVICE_ACCOUNT_NAME @ PROJECT_ID . iam.gserviceaccount.com \
--git-source-repo = https : //github.com/terraform-google-modules/terraform-google-network \
--git-source-directory = modules/vpc \
--git-source-ref = main \
--input-values = project_id = PROJECT_ID , network_name = quickstart-vpc
When the deployment is done, you see:
Creating the deployment...done
The VPC is now created and configured as described in the
configuration.
View the build results in Cloud Build
To view the Cloud Build job that Infra Manager used to
create the deployment, open the Build History page in the Google Cloud console:
Open the Build History page
View the status of the deployment
Now that the deployment is done, you can view its description to review
information about it, including the state.
View the description of the deployment:
gcloud infra-manager deployments describe projects/ PROJECT_ID /locations/us-central 1 /deployments/quickstart-deployment
The output has details about the deployment, including the timestamp of
the deployment, the name of the latest revision, and the state.
For the state, you see ACTIVE .
View details about the provisioned VPC
View details about the provisioned VPC:
gcloud infra-manager resources list --revision = projects/ PROJECT_ID /locations/us-central 1 /deployments/quickstart-deployment/revisions/ REVISION_ID
Replace REVISION_ID with the ID of the latest revision. This ID is
r-0 , unless you deployed multiple times. You can see the ID of the latest
revision in the deployment description in the previous section.
View the VPC in the console
View the VPC in the console:
Go to VPC networks
You see the VPC named quickstart-vpc . This is the
VPC that Infra Manager provisioned.
Clean up
To avoid incurring charges to your Google Cloud account for the resources
used on this page, make sure that you delete resources that you no longer need.
Delete the VPC
Delete the VPC and the metadata about the deployment:
gcloud infra-manager deployments delete projects/ PROJECT_ID /locations/us-central 1 /deployments/quickstart-deployment
Optional: Delete the project
If you deployed the solution in a new Google Cloud project, and if you no longer the
project, then delete it by completing the following steps:
Caution: If you delete a project, all the resources in the project are
permanently deleted.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you want to delete, and then
click Delete .
At the prompt, type the project ID, and then click Shut down .
What's next
To learn more about Infra Manager, see
How Infra Manager works .
Learn more about Infra Manager and Terraform .
Update a deployment .
Automate deployments .
For a set of configurations and modules ready to use with Google Cloud, see
Terraform blueprints and modules for Google Cloud .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
