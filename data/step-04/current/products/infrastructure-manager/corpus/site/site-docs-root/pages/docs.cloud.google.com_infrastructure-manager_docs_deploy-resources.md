---
title: "Deploy infrastructure using Infrastructure Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/infrastructure-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources
  title: "Deploy infrastructure using Infrastructure Manager \_|\_ Google Cloud Documentation"
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
Deploy infrastructure using Infrastructure Manager
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to use Infrastructure Manager to provision a set of
Google Cloud resources that are defined in a Terraform configuration.
To preview a deployment without provisioning resources, see
Preview a deployment .
You can deploy to multiple projects and multiple locations. The
service account needs permissions for the resources and projects where the
resources are deployed. See
Access control with IAM for the
list of permissions.
This page assumes you are familiar with Terraform. For details, see
Terraform and Infra Manager .
Before you begin
Enable Infra Manager .
Ensure that you have the IAM permissions needed to create deployments: roles/config.admin .
Ensure you have a service account with the needed permissions. For
details, see
Configure the service account .
Identify the Terraform configuration to deploy. Ensure that this Terraform
configuration complies with the constraints .
Specifically, ensure that the configuration does not contain sensitive data.
If you want to preview the deployment before configuring resources, then see
Preview a deployment .
Confirm your organization's quota for products associated with your intended
infrastructure. You may face deployment errors if your intended
infrastructure exceeds your organization's quota for the products your
deployment uses. See quotas and limits for more information.
Grant permissions specific to the configuration
To deploy Google Cloud resources that are specified in the Terraform
configuration, the service account that you use to call Infra Manager
needs the required permissions that are specific to the resources you
are deploying.
These permissions are in addition to the permissions needed to use the
Infra Manager service.
For details about granting permissions for the Google Cloud resources and
ensuring you have access to the needed projects, see
Configure the service account .
Connect your private Git repository and host to Cloud Build
If you are deploying a Terraform configuration from a private Git repository , you
need to connect your Git host and repository to Cloud Build.
GitHub
Connect to your GitHub host using Cloud Build .
Connect to your GitHub repository using Cloud Build .
GitHub Enterprise
Connect to your GitHub Enterprise host using Cloud Build .
Connect to your GitHub Enterprise repository using Cloud Build .
GitLab
Connect to your GitLab host using Cloud Build .
Connect to your GitLab repository using Cloud Build .
GitLab Enterprise
Connect to your GitLab Enterprise host using Cloud Build .
Connect to your GitLab Enterprise repository using Cloud Build .
Developer Connect
Configure and use Developer Connect Git proxy .
Create a deployment using a Terraform configuration
You can use Infra Manager to deploy a Terraform configuration in
several ways:
Recommended: Use Infra Manager in Google Cloud console to select a source, view
deployment details, preview, and deploy Terraform configurations. You can use
Infra Manager from Google Cloud console to deploy from
Cloud Storage buckets and Git repositories.
Use Infra Manager in Google Cloud CLI to deploy Terraform
configurations from:
Cloud Storage buckets
Git repositories
Local directories
See Terraform modules and blueprints for Google Cloud
for examples and template Terraform configurations you can use with Infra Manager.
Select the tab with your chosen workflow for more information about creating
a deployment.
Console
This section describes deploying a Terraform configuration using Infra Manager in Google Cloud console.
In Google Cloud console, go to the Infra Manager page.
Go to Infra Manager
Click Create to create a new deployment.
On the Deployment details page, set the initial parameters for your deployment.
Replace:
Deployment ID : In the Deployment ID field, enter a descriptive name for your deployment.
See Deployment name documentation for more details on naming constraints.
Region : Choose a supported region from the drop-down.
Terraform version : Choose a supported Terraform version from the drop-down. The list of available Terraform versions is populated automatically based on the Region you've selected.
Service account : Select an existing service account or create a new one. Infra Manager validates permissions based on the infrastructure outlined in your Terraform configuration automatically. See Configure the service account for more information about working with service accounts and Infra Manager.
Source of Terraform configuration : Click the toggle to select either Git , or Cloud Storage as a source for the Terraform configuration you want to deploy.
For Git , replace:
Git repository : Provide a public or private Git repository URL, branch, or tag. If you provide a private Git repository, ensure that you have connected your host and repository to Cloud Build .
Optional: Git directory : The directory within the Git repository that has the Terraform configuration.
Optional: Git reference : The Git reference of the configuration. If you don't specify a reference, the Git repository's default configured branch is used.
For Cloud Storage bucket , replace:
Source : The name of the storage bucket where the configuration is stored.
Click Continue .
On the Terraform details page, use the Key and Value fields to populate the list of input values in your Terraform configuration.
The values can be any input values in the Terraform configuration, including ones that are not defined by default. If all of your input values are defined by default in the Terraform configuration, then these values are optional. Click Continue.
On the Advanced details page, set optional parameters for your deployment.
Replace:
Labels : Labels and annotations are key-value pairs of free-form text. You can use them to attach
arbitrary information associated with the resource. For more information, see Annotations documentation.
Worker pool : The worker pool resource in which the Cloud Build job will execute.
The format of the worker pool is projects/{project}/locations/{location}/workerPools/{workerPoolId} .
Artifacts Cloud Storage bucket : The location of Cloud Build logs and artifacts in Cloud Storage. The format of the path is gs://{bucket}/{folder} .
Click Create deployment to initiate the deployment of your Terraform configuration. On the Deployments page, your deployment will be added to the list along with its Status .
For more details about your deployment, select your deployment to navigate to the Deployment details page.
Success! You have deployed your Terraform configuration using Infra Manager.
gcloud CLI
This section describes deploying a Terraform configuration that is stored in a Cloud Storage bucket. A storage bucket lets you control access to the configuration.
Ensure the Terraform configuration is in a Cloud Storage bucket. See Upload a configuration to a storage bucket for more details.
If the storage bucket is in a different project from the project where you are running Infra Manager, then you need to ensure that Infra Manager's service account has read permission for the bucket. See Configure the service account for more details.
If the storage bucket is in the same project as Infra Manager, read permission to the bucket is already enabled.
Deploy the Terraform configuration:
gcloud infra-manager deployments apply projects/ PROJECT_ID /locations/ LOCATION /deployments/ DEPLOYMENT_ID \
--service-account projects/ SERVICE_ACCOUNT_PROJECT_ID /serviceAccounts/ SERVICE_ACCOUNT \
--gcs-source gs:// BUCKET_NAME / OBJECT_NAME \
--quota-validation = QUOTA_VALIDATION \
--input-values = INPUT_1_NAME = VALUE , INPUT_2_NAME = VALUE \
--tf-version-constraint = TERRAFORM_VERSION \
--annotations = " ANNOTATION_KEY = ANNOTATION_VALUE "
--provider-source = SERVICE_MAINTAINED
Replace:
PROJECT_ID : the project ID where Infra Manager runs.
LOCATION : the location where Infra Manager runs. See Infra Manager locations for the list of valid locations.
DEPLOYMENT_ID : the deployment identifier that you specify. See Deployment name for details about constraints on the deployment identifier.
SERVICE_ACCOUNT_PROJECT_ID is the project ID of the service account. It's common for this to be the same project where Infra Manager runs.
SERVICE_ACCOUNT : the name of the service account you use to call Infra Manager.
BUCKET_NAME : the name of the storage bucket where the configuration is stored.
OBJECT_NAME : the object name of the configuration file. This object can be a directory or a zip file, but not a Terraform file. If you are using object versioning, you can also specify the object's generation number. For more details, see Use versioned objects .
If the storage bucket is the root path of the Terraform configuration, then OBJECT_NAME is optional.
Optional: QUOTA_VALIDATION : the value that determines whether quota validation for resources in your Terraform configuration files is enabled or enforced when you create a deployment. Possible values include:
ENABLED : Enable computing quota validation for resources in Terraform configuration files. Provides visibility on resources with insufficient quotas.
ENFORCED : Enforce quota validation so that your deployment will fail if there isn't sufficient quota available for the infrastructure defined in your Terraform configuration file.
If QUOTA_VALIDATION is not defined, quota validation on Terraform configuration files will be disabled. This is the default value. Quota validation applies on limited Google Cloud resources. For more information, see Quotas and limits .
INPUT_1_NAME and INPUT_2_NAME : any input values in the Terraform configuration, including ones that are not defined by default. For example, you could specify the project where you deploy the resources as project_id=my-project .
If all input values are defined by default in the configuration, then this flag is optional.
Optional: TERRAFORM_VERSION : the version of Terraform for Infra Manager to use to create the deployment. See supported Terraform version for the list of supported versions. If you remove this optional flag, the latest supported version of Terraform is used.
Optional: ANNOTATION_KEY and ANNOTATION_VALUE represent a key-value pair of free-form text that can be attached to your Infra Manager deployments. For more information about the use and constraints of annotations and labels, see Annotations and labels .
Optional: PROVIDER_SOURCE : Determines which Terraform provider
for Google Cloud the deployment uses. Set to SERVICE_MAINTAINED
to use the Infra Manager maintained Terraform provider. Omit this field to
use the HashiCorp-maintained Terraform provider. For more information,
see Use the Terraform provider for Google Cloud .
gcloud CLI
This section describes how to work with a Terraform configuration that is stored
in a Git repository.
Ensure that you have installed Git.
If your Terraform configuration is stored in a private Git repository , ensure your
Git host and repository are connected to Cloud Build .
Deploy the Terraform configuration:
gcloud infra-manager deployments apply projects/ PROJECT_ID /locations/ LOCATION /deployments/ DEPLOYMENT_ID \
--service-account projects/ SERVICE_ACCOUNT_PROJECT_ID /serviceAccounts/ SERVICE_ACCOUNT \
--git-source-repo = " GIT_REPO " \
--git-source-directory = " DIRECTORY " \
--git-source-ref = " REF " \
--quota-validation = QUOTA_VALIDATION \
--input-values = INPUT_1_NAME = VALUE , INPUT_2_NAME = VALUE \
--tf-version-constraint = TERRAFORM_VERSION \
--annotations = " ANNOTATION_KEY = ANNOTATION_VALUE "
--provider-source = SERVICE_MAINTAINED
Replace:
PROJECT_ID : the project ID where Infra Manager runs.
LOCATION : the location where Infra Manager runs. See Infra Manager locations for the list of valid locations.
DEPLOYMENT_ID : the deployment identifier that you specify. See Deployment name for details about constraints on the deployment identifier.
SERVICE_ACCOUNT_PROJECT_ID is the project ID of the service account. It's common for this to be the same project where Infra Manager runs.
SERVICE_ACCOUNT : the name of the service account you use to call Infra Manager.
GIT_REPO : the Git repository.
DIRECTORY : the directory that has the Terraform configuration.
Optional: REF : the Git reference of the configuration. The reference is optional. If you don't specify the reference, the Git repository's default configured branch is used.
Optional: QUOTA_VALIDATION : the value that determines whether quota validation for resources in your Terraform configuration files is enabled or enforced when you create a deployment. Possible values include:
ENABLED : Enable computing quota validation for resources in Terraform configuration files. Provides visibility on resources with insufficient quotas.
ENFORCED : Enforce quota validation so that your deployment will fail if there isn't sufficient quota available for the infrastructure defined in your Terraform configuration file.
If QUOTA_VALIDATION is not defined, quota validation on Terraform configuration files will be disabled. This is the default value. Quota validation applies on limited Google Cloud resources. For more information, see Quotas and limits .
INPUT_1_NAME and INPUT_2_NAME : any input values in the Terraform configuration, including ones that are not defined by default. For example, you could specify the project where you deploy the resources as project_id=my-project .
If all input values are defined by default in the configuration, then this flag is optional.
Optional: TERRAFORM_VERSION : the version of Terraform for Infra Manager to use to create the deployment. See supported Terraform version for the list of supported versions. If you remove this optional flag, the latest supported version of Terraform is used.
Optional: ANNOTATION_KEY and ANNOTATION_VALUE represent a key-value pair of free-form text that can be attached to your Infra Manager deployments. For more information about the use and constraints of annotations and labels, see Annotations and labels .
Optional: PROVIDER_SOURCE : Determines which Terraform provider
for Google Cloud the deployment uses. Set to SERVICE_MAINTAINED
to use the Infra Manager maintained Terraform provider. Omit this field to
use the HashiCorp-maintained Terraform provider. For more information,
see Use the Terraform provider for Google Cloud .
gcloud CLI
This section describes how to work with a Terraform configuration that is stored
on your local machine.
If you use Cloud Shell, then you need to upload the configuration to
Cloud Shell. For details, see Manage files with Cloud Shell .
Deploy the Terraform configuration:
gcloud infra-manager deployments apply projects/ PROJECT_ID /locations/ LOCATION /deployments/ DEPLOYMENT_ID \
--service-account projects/ SERVICE_ACCOUNT_PROJECT_ID /serviceAccounts/ SERVICE_ACCOUNT \
--local-source = " LOCAL_DIRECTORY " \
--quota-validation = QUOTA_VALIDATION \
--input-values = INPUT_1_NAME = VALUE , INPUT_2_NAME = VALUE \
--tf-version-constraint = TERRAFORM_VERSION \
--annotations = " ANNOTATION_KEY = ANNOTATION_VALUE "
--provider-source = SERVICE_MAINTAINED
Replace:
PROJECT_ID : the project ID where Infra Manager runs.
LOCATION : the location where Infra Manager runs. See Infra Manager locations for the list of valid locations.
DEPLOYMENT_ID : the deployment identifier that you specify. See Deployment name for details about constraints on the deployment identifier.
SERVICE_ACCOUNT_PROJECT_ID is the project ID of the service account. It's common for this to be the same project where Infra Manager runs.
SERVICE_ACCOUNT : the name of the service account you use to call Infra Manager.
LOCAL_DIRECTORY : the local directory storing the Terraform configuration. If you are using Cloud Shell, this is the directory in Cloud Shell where the configuration is stored.
Optional: QUOTA_VALIDATION : the value that determines whether quota validation for resources in your Terraform configuration files is enabled or enforced when you create a deployment. Possible values include:
ENABLED : Enable computing quota validation for resources in Terraform configuration files. Provides visibility on resources with insufficient quotas.
ENFORCED : Enforce quota validation so that your deployment will fail if there isn't sufficient quota available for the infrastructure defined in your Terraform configuration file.
If QUOTA_VALIDATION is not defined, quota validation on Terraform configuration files will be disabled. This is the default value. Quota validation applies on limited Google Cloud resources. For more information, see Quotas and limits .
INPUT_1_NAME and INPUT_2_NAME : any input values in the Terraform configuration, including ones that are not defined by default. For example, you could specify the project where you deploy the resources as project_id=my-project .
If all input values are defined by default in the configuration, then this flag is optional.
Optional: TERRAFORM_VERSION : the version of Terraform for Infra Manager to use to create the deployment. See supported Terraform version for the list of supported versions. If you remove this optional flag, the latest supported version of Terraform is used.
Optional: ANNOTATION_KEY and ANNOTATION_VALUE represent a key-value pair of free-form text that can be attached to your Infra Manager deployments. For more information about the use and constraints of annotations and labels, see Annotations and labels .
Optional: PROVIDER_SOURCE : Determines which Terraform provider
for Google Cloud the deployment uses. Set to SERVICE_MAINTAINED
to use the Infra Manager maintained Terraform provider. Omit this field to
use the HashiCorp-maintained Terraform provider. For more information,
see Use the Terraform provider for Google Cloud .
What's next
Learn more about Terraform with Google Cloud .
Automate deployments .
Update a deployment .
View the state of a deployment .
View resources deployed .
Delete a deployment .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
