---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.081Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Disable creation of global self-managed SSL certificates"
feature_slug: "disable-creation-of-global-self-managed-ssl-certificates"
latest_feature_date: "2022-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints"
  - "https://docs.cloud.google.com/resource-manager/docs/custom-constraints"
  - "https://docs.cloud.google.com/resource-manager/docs/manage-applications"
keywords:
  - "disable"
  - "creation"
  - "global"
  - "self"
  - "managed"
  - "ssl"
  - "certificates"
  - "organization"
---

# Disable creation of global self-managed SSL certificates

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

This organization policy constraint blocks the creation of global self-managed SSL certificates.

## Extended Definition

This organization policy constraint blocks the creation of global self-managed SSL certificates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/manage-applications](https://docs.cloud.google.com/resource-manager/docs/manage-applications)

## Supporting Pages

### "Manage Google Cloud security baseline constraints \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- Source ID: `site-iam-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Organization policy name Organization policy constraint Description Impact of enforcement Disable service account key creation constraints/iam.managed.disableServiceAccountKeyCreation Prevent users from creating persistent keys for service accounts.
- Disable organization policies To disable or delete an organization policy, run the following command: gcloud org-policies delete CONSTRAINT NAME --organization = ORGANIZATION ID Replace the following: CONSTRAINT NAME : the name of the organization policy constraint that you want to delete—for example, iam.allowedPolicyMemberDomains ORGANIZATION ID : the unique identifier of your organization What's next For more information about creating and managing organization policies, see Using constraints .
- Restrict protocol forwarding based on type of IP address constraints/compute.managed.restrictProtocolForwardingCreationForTypes Restrict the configuration of protocol forwarding for internal IP addresses only.
- Note: For some organizations created after August 15, 2024, the constraints/compute.restrictProtocolForwardingCreationForTypes organization policy constraint might already be applied.

### "Manage resources with custom constraints \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Disable creation of a folder within another folder to control the depth of the resource hierarchy tree. name : organizations/ ORGANIZATION ID /customConstraints/custom.disableFolderCreation resourceTypes : - cloudresourcemanager.googleapis.com/Folder methodTypes : - CREATE condition : "resource.parent.startsWith(" folders")" actionType : DENY displayName : Disable creation of a folder inside another folder description : Do not allow creation of a folder within another folder when the resource hierarchy is set to a maximum value of 1.
- Description Constraint syntax Deny creation of new projects in folder 1234 (secure admin folder). name : organizations/ ORGANIZATION ID /customConstraints/custom.disableNewProjectInSecureAdminFolder resourceTypes : - cloudresourcemanager.googleapis.com/Project methodTypes : - CREATE condition : "resource.parent == " organizations/1234"" actionType : DENY displayName : Disable new project creation in the secure admin folder description : Do not allow creation of new projects in the secure folders.
- Organization Policy provides built-in managed constraints for various Google Cloud services.
- See the full list of managed organization policy constraints .

### "Managing applications in a folder \_|\_ Resource Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-applications](https://docs.cloud.google.com/resource-manager/docs/manage-applications)
- Source ID: `site-iam-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To get the permissions that you need to configure an app-enabled folder, ask your administrator to grant you the following IAM roles: Enable application management: Folder Admin ( roles/resourcemanager.folderAdmin ) on the parent resource for the folder Enable APIs: Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) on the target folder (to enable required and recommended APIs) Link a billing account to the management project: Project Billing Manager ( roles/billing.projectManager ) on the management project Billing Account User ( roles/billing.user ) on the target billing account Grant application-centric roles to users: Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) on the management project Configure the observability scope: Observability Editor ( roles/observability.editor ) on the management project Logs Configuration Writer ( roles/logging.configWriter ) on the management project Monitoring Admin ( roles/monitoring.admin ) on the management project and on each project that you want to add to the metrics scope Cloud Trace User ( roles/cloudtrace.user ) on the management project App Hub Viewer ( roles/apphub.viewer ) on the management project View application-level and project-level data in Cloud Hub: Cloud Hub Operator ( roles/cloudhub.operator ) on the app-enabled folder For more information about granting roles, see Manage access to projects, folders, and organizations .
- Terraform To enable application management on a folder using Terraform, use the google resource manager capability resource , for example: resource "google folder" "folder" { display name = "my-folder" parent = "organizations/123456789" deletion protection = false } resource "time sleep" "wait 60s" { depends on = [ google folder.folder ] create duration = "60s" } resource "google resource manager capability" "capability" { value = true parent = "${google folder.folder.name}" capability name = "app-management" depends on = [ time sleep.wait 60s ] } This command enables the application management capability on the specified folder and automatically provisions a new Google Cloud project within that folder to serve as the management project.
- If you no longer want a Google Cloud folder to be an app-enabled folder, follow these steps to disable application management: If a lien is protecting the management project in the app-enabled folder against project deletion, you must remove the lien.
- Disable application management Warning: Disabling application management in a folder automatically and permanently deletes the management project and disables all APIs that were enabled during application management setup.

