---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T16:01:25.234Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "IAM SCIM Service"
feature_slug: "iam-scim-service"
latest_feature_date: "2025-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform"
  - "https://docs.cloud.google.com/app-hub/docs/register-resources"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys"
  - "https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project"
keywords:
  - "iam"
  - "scim"
  - "the"
  - "is"
  - "available"
  - "for"
  - "use"
  - "in"
---

# IAM SCIM Service

Product: Access Approval
Coverage: MEDIUM

## Step 02 Summary

The IAM SCIM Service is available for use in Access Approval; The IAM SCIM Service is available for use in Access Approval.

## Extended Definition

The IAM SCIM Service is available for use in Access Approval; The IAM SCIM Service is available for use in Access Approval.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform)
- [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys)
- [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project)

## Supporting Pages

### Enabling Access Approval using Terraform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- Copy the following resource, and paste it in your main.tf file. main.tf variable "parent value" { type = string } variable "email 1" { type = string } variable "email 2" { type = string } resource "google folder" "my folder" { display name = "my-folder" parent = var.parent value parent = "organizations/123456789" } resource "google folder access approval settings" "folder access approval" { folder id = google folder.my folder.folder id notification emails = [ var.email 1 , var.email 2 ] enrolled services { cloud product = "all" } } Enter values for the following variables: email 1 and email 2 : provide the email addresses of users who you want to set as reviewers for the access requests for this project.
- To enable a user or service account to approve access requests for a project, grant them the Access Approval Approver ( roles/accessapproval.approver ) IAM role. parent value : name of the folder in which you want to create the my folder folder.
- To ensure these users have sufficient permissions, follow these steps: Go to the IAM page in the Google Cloud console.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

### "Register existing resources to an application \_|\_ App Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- Source ID: `site-docs-reference-2`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- List the registered services in your application: gcloud apphub applications services list \ --application = APPLICATION NAME --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following for each registered service: ID DISPLAY NAME SERVICE REFERENCE CREATE TIME SERVICE NAME SERVICE DISPLAY NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /forwardingRules/forwarding-rule' } 2023 -11-01T21:38:08 Register workloads List the available workloads that you can register to an application: gcloud apphub discovered-workloads list \ --project = PROJECT ID \ --location = REGION \ --filter = FILTER EXPRESSION For required and optional flags, replace the following: Required: PROJECT ID : the ID of the management project.
- List the registered workloads in your application: gcloud apphub applications workloads list \ --application = APPLICATION NAME --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following for each registered workload: ID DISPLAY NAME WORKLOAD REFERENCE CREATE TIME WORKLOAD NAME WORKLOAD DISPLAY NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /instanceGroups/mig-name' } 2023 -11-01T21:38:08 Terraform To use Terraform to register Google Cloud resources within your application management boundary as services or workloads in an application, use the google apphub discovered service and google apphub discovered workload data sources to dynamically retrieve information about the resources you want to register.
- Commands are slightly different for services and workloads: Register services List the available services that you can register to an application: gcloud apphub discovered-services list \ --project = PROJECT ID \ --location = REGION \ --filter = FILTER EXPRESSION For required and optional flags, replace the following: Required: PROJECT ID : the ID of the management project.
- List the applications in your project: gcloud apphub applications list \ --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following: ID DISPLAY NAME CREATE TIME APPLICATION NAME DISPLAY NAME 2023 -10-31T18:33:48 Terraform To create an application with Terraform, use the google apphub application resource .

### "Review and approve access requests using the Google-managed signing key\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to set up Access Approval and approve access requests, ask your administrator to grant you the following IAM roles on your project: View and update Access Approval configuration and approve access requests: Access Approval Config Editor ( roles/accessapproval.configEditor ) View Access Approval configuration and approve access requests: Access Approval Approver ( roles/accessapproval.approver ) View Access Approval configuration and access requests and download log reports: Access Approval Viewer ( roles/accessapproval.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Example Defaults: Disabled: product.googleapis.com/project/12345/ Enabled: product.googleapis.com/project/12345/instances/abcde Approval Request Default Expiration Days : Set the default expiration for Access Approval requests.
- In Identity and Access Management (IAM), grant the Pub/Sub Publisher role ( roles/pubsub.publisher ) to the customer-approval-jobs@system.gserviceaccount.com principal to allow Access Approval to create notifications.

### Set up a single project \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project)
- Source ID: `site-docs-reference-2`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optionally, delete all the applications in the project and then disable the App Hub API if you won't use application features in this project anymore: gcloud services disable apphub.googleapis.com \ --project = PROJECT ID What's next Quickstart: Create an application from existing resources Register resources to an application Set up application monitoring App Hub IAM roles and permissions App Hub overview Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Required roles To get the permissions that you need to configure a single project for application management, ask your administrator to grant you the following IAM roles on the project that you want to configure as the standalone management project: Manage resources, permissions, and billing on the project: Project Owner ( roles/owner ) Manage all application components on the project: App Hub Admin ( roles/apphub.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- In the Grant access tab, choose the appropriate IAM roles and permissions for administrators in the project.
- This information identifies the management project and you'll use these values to grant access.

