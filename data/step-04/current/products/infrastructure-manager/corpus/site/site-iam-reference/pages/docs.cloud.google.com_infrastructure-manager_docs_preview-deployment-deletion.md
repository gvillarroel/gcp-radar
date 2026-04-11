---
title: "Preview a deletion of a deployment \_|\_ Infrastructure Manager \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment-deletion
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/infrastructure-manager/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/infrastructure-manager/docs/preview-deployment-deletion
  title: "Preview a deletion of a deployment \_|\_ Infrastructure Manager \_|\_ Google\
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
Preview a deletion of a deployment
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to use Infrastructure Manager to preview the deletion of an
existing deployment.
A preview describes the actions to actuate a specific Terraform configuration.
Before you delete a deployment, you can use a preview to verify the resources
that are planned to be deleted.
A preview does not delete any provisioned resources. To delete a deployment,
including deleting provisioned resources, see
Delete deployments .
A preview executes the Terraform plan command. This page assumes you are
familiar with Terraform. For details, see
Terraform and Infrastructure Manager .
Before you begin
Enable Infra Manager .
Ensure that you have the IAM permissions needed to create previews: roles/config.admin .
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
public Git repository, or stored on your
local machine.
Preview the deletion of a deployment
Before you delete a deployment, you can preview and review the deletion.
To preview the deletion of a deployment:
gcloud infra-manager previews create --preview-mode DELETE --deployment=projects/ PROJECT_ID /locations/ LOCATION /previews/ DEPLOYMENT_ID \
--service-account projects/ SERVICE_ACCOUNT_PROJECT_ID /serviceAccounts/ SERVICE_ACCOUNT \
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
DEPLOYMENT_ID is the deployment identifier of the deployment
you want to update.
Now that you have created a preview, you can
export and view the results
to review the plan for the deployment.
For more information about deleting deployments, see
Delete a deployment .
What's next
Export and view preview results
Delete a deployment .
Create a new preview .
Automate deployments .
Learn more about Terraform with Infra Manager .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
