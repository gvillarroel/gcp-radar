---
title: "Configure the service account \_|\_ Infrastructure Manager \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/infrastructure-manager/docs/configure-service-account
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/infrastructure-manager/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/infrastructure-manager/docs/configure-service-account
  title: "Configure the service account \_|\_ Infrastructure Manager \_|\_ Google\
    \ Cloud Documentation"
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
Configure the service account
Stay organized with collections
Save and categorize content based on your preferences.
To use Infrastructure Manager to create, update, or delete a deployment, you must use
a service account. Infra Manager executes Terraform using the identity
of this service account.
You do not need a service account to view information about
Infra Manager deployments.
This page explains how to configure a service account so that you can deploy
resources with Infrastructure Manager.
Before you begin
Enable the Infra Manager
service.
Create a service account or
identify an existing service account to use with Infra Manager.
Grant access to the service account
To use Infrastructure Manager to create, update, or delete a deployment, an
individual user needs access to the service account.
Grant the user the
Service Account User ( roles/iam.serviceAccountUser )
IAM role for the service account.
Grant permissions for Infra Manager
To work with Infra Manager, the service account needs the
Infra Manager Agent ( roles/config.agent ) role .
This grants permissions for Infra Manager to create, update, and
delete resources:
gcloud projects add-iam-policy-binding INFRA_MANAGER_PROJECT_ID \
--member = "serviceAccount: SERVICE_ACCOUNT_EMAIL " \
--role = "roles/config.agent"
Replace:
INFRA_MANAGER_PROJECT_ID : The project ID of the project where
you're creating deployments.
SERVICE_ACCOUNT_EMAIL : The email of the service account.
For details about how to grant permissions to service accounts, see
Manage access to service accounts .
Grant read permission for the storage bucket
You can use a storage bucket to store the Terraform configurations that are
deployed by Infra Manager.
If you use a storage bucket for the configurations, and this storage bucket
is in a different project from the project where you are running
Infra Manager, then you need to ensure that the
service account that you use to call Infra Manager has read permission
for the bucket. For details about Cloud Storage permissions, see
IAM permissions for Cloud Storage .
If the storage bucket is in the same project as Infra Manager, and you
have granted roles/config.agent to the service account, then read permission
to the bucket is already enabled.
For details about uploading a configuration to a storage bucket, see
Upload a Terraform configuration .
Grant permissions for resources defined in the configuration
To create and manage Google Cloud resources that are defined in the
Terraform configuration, the service account needs permissions specific to these
resources.
Permissions specific to the Google Cloud resources that are
defined in the Terraform configuration you are deploying.
For example, the permission for creating a Compute Engine VM
instance is compute.instances.create .
Permissions specific to the Google Cloud resources that are
defined in the Terraform configuration of the deployment that
you are updating.
For example, let's say your deployment provisions a Compute Engine VM
and then you update the deployment using a configuration that does not include
a Compute Engine VM. In this case, when you update the revision, the
service account needs:
Permissions for the resources defined in the new
configuration.
Permissions for the resources being
deleted, such as the Compute Engine VM in this example.
For help identifying the permissions needed for the resources in the
Terraform configurations, see
Choose predefined roles .
For details about how to grant permissions to service accounts, see
Manage access to service accounts .
Grant access across multiple projects
Additional permissions are required if the given service account is in a
different project than the project where the Infra Manager service is
run.
To grant these additional permissions:
Ensure that the service account has the Infra Manager Agent ( roles/config.agent ) role
in the project running Infra Manager. See Grant permissions for Infra Manager for
instructions on granting permissions.
Optional: If you are using Developer Connect to deploy
a Terraform configuration, grant the roles/iam.serviceAccountTokenCreator role
to the service account.
In the project that has the service account, ensure that the
iam.disableCrossProjectServiceAccountUsage organization policy constraint
is not enforced. This constraint is enforced by default.
To disable this organization policy constraint, run:
gcloud resource-manager org-policies disable-enforce iam.disableCrossProjectServiceAccountUsage
--project= SERVICE_ACCOUNT_PROJECT_ID
Replace SERVICE_ACCOUNT_PROJECT_ID with the ID of the project that
contains the service account.
In the project that has the service account, grant the
roles/iam.serviceAccountUser role for the
Infra Manager service agent of the project where you're creating
deployments:
gcloud projects add-iam-policy-binding SERVICE_ACCOUNT_PROJECT_ID \
--member = "serviceAccount:service- INFRA_MANAGER_PROJECT_NUMBER @gcp-sa-config.iam.gserviceaccount.com" \
--role = "roles/iam.serviceAccountUser"
Replace:
SERVICE_ACCOUNT_PROJECT_ID : The project ID of the
project that contains the service account.
INFRA_MANAGER_PROJECT_NUMBER : The project
number of the project where you're creating deployments. This forms the email ID of the service agent:
service- INFRA_MANAGER_PROJECT_NUMBER @gcp-sa-config.iam.gserviceaccount.com
Grant the Service Account Token Creator ( roles/iam.serviceAccountTokenCreator )
role to the Cloud Build service agent in the project where you're
creating deployments. To allow Infra Manager to execute Terraform
using Cloud Build, the Cloud Build service agent in the project
containing the service account needs additional permissions as part of the
cross-project set up :
gcloud projects add-iam-policy-binding SERVICE_ACCOUNT_PROJECT_ID \
--member = "serviceAccount:service- INFRA_MANAGER_PROJECT_NUMBER @gcp-sa-cloudbuild.iam.gserviceaccount.com" \
--role = "roles/iam.serviceAccountTokenCreator"
What's next
Learn about IAM .
Learn more about Terraform with Google Cloud .
Deploy infrastructure using Infra Manager .
Update a deployment .
View the state of a deployment .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
