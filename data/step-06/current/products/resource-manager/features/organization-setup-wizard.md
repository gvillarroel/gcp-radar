---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.094Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Organization setup wizard"
feature_slug: "organization-setup-wizard"
latest_feature_date: "2018-08-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization"
  - "https://docs.cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy"
  - "https://docs.cloud.google.com/resource-manager/docs/manage-applications"
keywords:
  - "organization"
  - "setup"
  - "wizard"
  - "helps"
  - "delegate"
  - "management"
  - "assign"
  - "iam"
---

# Organization setup wizard

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Helps delegate organization setup and management, assign IAM roles, and import existing projects and billing accounts.

## Extended Definition

Helps delegate organization setup and management, assign IAM roles, and import existing projects and billing accounts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization)
- [https://docs.cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy](https://docs.cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy)
- [https://docs.cloud.google.com/resource-manager/docs/manage-applications](https://docs.cloud.google.com/resource-manager/docs/manage-applications)

## Supporting Pages

### "Set up a Google Cloud organization resource \_|\_ Resource Manager \_|\_\

- URL: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Google Workspace or Cloud Identity super administrator responsibilities, in the context of Google Cloud organization resource setup are: Assigning the Organization Administrator role to some users Being a point of contact in case of recovery issues Controlling the lifecycle of the Google Workspace or Cloud Identity account and organization resource as explained under Delete an organization The Organization Administrator , once assigned, can assign Identity and Access Management roles to other users.
- To actively adopt the organization resource, the Google Workspace or Cloud Identity super admins need to assign the Organization Administrator ( roles/resourcemanager.organizationAdmin ) Identity and Access Management (IAM) role to a user or group.
- Note that, because allow and deny policies are inherited down the hierarchy, having the Project Creator role assigned to the entire domain ( domain:mycompany.com ) at the organization resource level implies that every user in the domain can create projects anywhere in the hierarchy.
- The Google Workspace or Cloud Identity super administrators and the Google Cloud Organization Administrator are key roles during the setup process and for lifecycle control for the organization resource.

### "Managing applications in a folder \_|\_ Resource Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-applications](https://docs.cloud.google.com/resource-manager/docs/manage-applications)
- Source ID: `site-iam-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To get the permissions that you need to configure an app-enabled folder, ask your administrator to grant you the following IAM roles: Enable application management: Folder Admin ( roles/resourcemanager.folderAdmin ) on the parent resource for the folder Enable APIs: Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) on the target folder (to enable required and recommended APIs) Link a billing account to the management project: Project Billing Manager ( roles/billing.projectManager ) on the management project Billing Account User ( roles/billing.user ) on the target billing account Grant application-centric roles to users: Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) on the management project Configure the observability scope: Observability Editor ( roles/observability.editor ) on the management project Logs Configuration Writer ( roles/logging.configWriter ) on the management project Monitoring Admin ( roles/monitoring.admin ) on the management project and on each project that you want to add to the metrics scope Cloud Trace User ( roles/cloudtrace.user ) on the management project App Hub Viewer ( roles/apphub.viewer ) on the management project View application-level and project-level data in Cloud Hub: Cloud Hub Operator ( roles/cloudhub.operator ) on the app-enabled folder For more information about granting roles, see Manage access to projects, folders, and organizations .
- Terraform To enable application management on a folder using Terraform, use the google resource manager capability resource , for example: resource "google folder" "folder" { display name = "my-folder" parent = "organizations/123456789" deletion protection = false } resource "time sleep" "wait 60s" { depends on = [ google folder.folder ] create duration = "60s" } resource "google resource manager capability" "capability" { value = true parent = "${google folder.folder.name}" capability name = "app-management" depends on = [ time sleep.wait 60s ] } This command enables the application management capability on the specified folder and automatically provisions a new Google Cloud project within that folder to serve as the management project.
- Disable application management Warning: Disabling application management in a folder automatically and permanently deletes the management project and disables all APIs that were enabled during application management setup.
- For more information about folder-level boundaries and a comparison between projects and folders for your application management boundary, see Choose your application setup model .

### About resource hierarchy \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy](https://docs.cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy)
- Source ID: `site-docs-reference-2`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access control policies (such as Identity and Access Management (IAM) roles) and organization policies applied at this level are inherited by every resource in the organization.
- The Google Workspace super admin's main duty with respect to Google Cloud is to assign the Organization Administrator IAM role to appropriate users in their domain.
- The following code snippet shows the structure of an organization resource: { "creationTime": "2020-01-07T21:59:43.314Z", "displayName": "my-organization", "lifecycleState": "ACTIVE", "name": "organizations/34739118321", "owner": { "directoryCustomerId": "C012ba234" } } The initial allow policy for a new organization resource grants the Project Creator and Billing Account Creator roles to the entire Google Workspace domain.
- The following code snippet shows the structure of a folder resource: { "createTime": "2030-01-07T21:59:43.314Z", "displayName": "Engineering", "lifecycleState": "ACTIVE", "name": "folders/634792535758", "parent": "organizations/34739118321" } Like organization and project resources, folder resources act as a policy inheritance point for allow, deny, and organization policies.

