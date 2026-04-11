---
title: "Preview a deployment \_|\_ Infrastructure Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/infrastructure-manager/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment
  title: "Preview a deployment \_|\_ Infrastructure Manager \_|\_ Google Cloud Documentation"
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
Preview a deployment
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to use Infrastructure Manager to preview the deployment of
resources defined in a Terraform configuration.
A preview describes the actions to actuate a specific Terraform configuration.
Before you create a new deployment or update a deployment, you can preview the
deployment to verify the resources that are planned to be provisioned.
A preview executes the Terraform plan command. This page assumes you are
familiar with Terraform. For details, see
Terraform and Infrastructure Manager .
To create a preview, the Terraform configuration needs to be compatible with one
of the supported Terraform versions .
Before you begin
Enable Infra Manager .
Ensure that you have the Identity and Access Management permissions needed to create previews: roles/config.admin .
Ensure you have a service account with the needed permissions. For
details, see
Configure the service account .
Identify the Terraform configuration to preview. Ensure this Terraform
configuration complies with the constraints ,
including that the configuration does not contain sensitive data.
If you want to store the Terraform configuration in a storage bucket, ensure
the Terraform configuration is uploaded to a Cloud Storage bucket. See
Upload a configuration to a storage bucket
for more details.
A storage bucket lets you control access to the configuration. You
can also deploy a Terraform configuration that is stored in a
Git repository, or stored on your
local machine.
Preview a new deployment
The Terraform configuration that you preview can be in a storage bucket or in a
Git repository.
Preview using a Terraform configuration stored in a Cloud Storage bucket
Ensure that the Terraform configuration is uploaded to a
Cloud Storage bucket. See
Upload a configuration to a storage bucket
for more details.
A storage bucket lets you control access to the configuration. You
can also deploy a Terraform configuration that is stored in a
Git repository, or stored on your
local machine.
To preview the update:
gcloud infra - manager previews create projects / PROJECT_ID / locations / LOCATION / previews / PREVIEW_ID \
-- service - account projects / SERVICE_ACCOUNT_PROJECT_ID / serviceAccounts / SERVICE_ACCOUNT \
-- gcs - source gs : // BUCKET_NAME / OBJECT_NAME \
-- input - values = INPUT_1_NAME = VALUE , INPUT_2_NAME = VALUE \
-- tf - version - constraint = TERRAFORM_VERSION \
-- annotations = " ANNOTATION_KEY = ANNOTATION_VALUE "
-- provider - source = SERVICE_MAINTAINED
Replace:
PROJECT_ID is the project ID where Infrastructure Manager runs.
LOCATION is the location where Infra Manager
runs. See Infrastructure Manager locations
for the list of valid locations.
PREVIEW_ID is the preview identifier that you specify. See
Preview name
for details about constraints on the preview identifier.
SERVICE_ACCOUNT is the name of the service account you
use to call Infra Manager.
SERVICE_ACCOUNT_PROJECT_ID is the project ID of the service
account. It's common for this to be the same project where
Infra Manager runs.
BUCKET_NAME is the name of the storage bucket where the
configuration is stored.
OBJECT_NAME is the object name of configuration file. This
object can be a directory or a zip file, but not a Terraform file. If
you are using object versioning, you can also specify the
object's generation number. For more details, see
Use versioned objects .
If the storage bucket is the root path of the Terraform configuration,
then OBJECT_NAME is optional.
INPUT_1_NAME=VALUE and INPUT_2_NAME=VALUE : any
input values in the Terraform configuration, including ones that are
not defined by default. For example, you could specify the project
where you deploy the resources as project_id=my-project .
If all input values are defined by default in the configuration, then
this flag is optional.
Optional: TERRAFORM_VERSION : the version of Terraform for
Infra Manager to use to create the deployment. See
supported Terraform version
for the list of supported versions. If you remove this optional flag,
the latest supported version of Terraform is used.
Optional: ANNOTATION_KEY and ANNOTATION_VALUE
represent a key-value pair of free-form text that can be attached to your
Infra Manager deployments. For more information about the use and
constraints of annotations and labels, see Annotations and labels .
Optional: PROVIDER_SOURCE : Determines which Terraform provider
for Google Cloud the deployment uses. Set to SERVICE_MAINTAINED
to use the Infra Manager maintained Terraform provider. Omit this field to
use the HashiCorp-maintained Terraform provider. For more information,
see Use the Terraform provider for Google Cloud .
Fields from the deployment like the Terraform configuration, variables, and
service account are automatically merged into preview unless you specify
new values in the preview command.
Now that you have created a preview, you can
export and view the results
to review the plan for the deployment.
Preview using a Terraform configuration stored in a Git repository
When you update a deployment, some of the existing resources might not
change. Previewing an update shows you what resources are planned to be
provisioned or deleted and what resources are not planned to be modified.
To update a deployment stored in a Git repository:
If you are using a private Git repository, ensure that you
have connected to your GitHub host
and GitHub repository using Cloud Build to provide Infra Manager access to your repository.
To preview the deployment:
gcloud infra - manager previews create projects / PROJECT_ID / locations / LOCATION / previews / PREVIEW_ID \
-- service - account projects / SERVICE_ACCOUNT_PROJECT_ID / serviceAccounts / SERVICE_ACCOUNT \
-- git - source - repo = " GIT_REPO " \
-- git - source - directory = " DIRECTORY " \
-- git - source - ref = " REF " \
-- input - values = INPUT_1_NAME = VALUE , INPUT_2_NAME = VALUE \
-- tf - version - constraint = TERRAFORM_VERSION \
-- annotations = " ANNOTATION_KEY = ANNOTATION_VALUE "
-- provider - source = SERVICE_MAINTAINED
Replace:
PROJECT_ID is the project ID where Infrastructure Manager runs.
LOCATION is the location where Infra Manager
runs. See Infrastructure Manager locations
for the list of valid locations.
PREVIEW_ID is the preview identifier that you specify. See
Preview name
for details about constraints on the preview identifier.
SERVICE_ACCOUNT is the name of the service account you
use to call Infra Manager.
SERVICE_ACCOUNT_PROJECT_ID is the project ID of the service
account. It's common for this to be the same project where
Infra Manager runs.
GIT_REPO : the Git repository.
DIRECTORY : the directory that has the Terraform
configuration.
REF : the Git reference of the configuration. The reference is
optional. If you don't specify the reference, the Git
repository's default configured branch is used.
INPUT_1_NAME=VALUE and INPUT_2_NAME=VALUE : any
input values in the Terraform configuration, including ones that are
not defined by default. For example, you could specify the project
where you deploy the resources as project_id=my-project .
If all input values are defined by default in the configuration, then
this flag is optional.
Optional: TERRAFORM_VERSION : the version of Terraform for
Infra Manager to use to create the deployment. See
supported Terraform version
for the list of supported versions. If you remove this optional flag,
the latest supported version of Terraform is used.
Optional: ANNOTATION_KEY and ANNOTATION_VALUE
represent a key-value pair of free-form text that can be attached to your
Infra Manager deployments. For more information about the use and
constraints of annotations and labels, see Annotations and labels .
Optional: PROVIDER_SOURCE : Determines which Terraform provider
for Google Cloud the deployment uses. Set to SERVICE_MAINTAINED
to use the Infra Manager maintained Terraform provider. Omit this field to
use the HashiCorp-maintained Terraform provider. For more information,
see Use the Terraform provider for Google Cloud .
Fields from the deployment like the Terraform configuration, variables, and
service account are automatically merged into preview unless you specify
new values in the preview command.
Now that you have created a preview, you can
export and view the results
to review the plan for the deployment.
After preview a deployment, you can create the deployment to provision the resources. For details, see deploy resources .
What's next
Export and view preview results
Use Infra Manager to deploy resources .
Automate deployments .
Learn more about Terraform with Infra Manager .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
