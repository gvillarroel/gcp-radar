---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.082Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Disable enabling Identity-Aware Proxy on regional resources"
feature_slug: "disable-enabling-identity-aware-proxy-on-regional-resources"
latest_feature_date: "2022-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs"
  - "https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview"
  - "https://docs.cloud.google.com/resource-manager/docs/custom-constraints"
keywords:
  - "disable"
  - "enabling"
  - "identity"
  - "aware"
  - "proxy"
  - "regional"
  - "resources"
  - "organization"
---

# Disable enabling Identity-Aware Proxy on regional resources

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

This organization policy constraint blocks enabling Identity-Aware Proxy on regional resources.

## Extended Definition

This organization policy constraint blocks enabling Identity-Aware Proxy on regional resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs](https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs)
- [https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview](https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview)
- [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)

## Supporting Pages

### "Manage multiple organization resources \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs](https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs)
- Source ID: `site-iam-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Effects of using multiple organization resources Use multiple organization resources when you don't want users from one Google Cloud, Google Workspace, or Cloud Identity account to access resources created by users from another account.
- Operating multiple Cloud Identity organization resources therefore requires multiple Google Workspace accounts and the ability to manage identities across them.
- Console To add an Organization Administrator: Sign in to the Google Cloud console as a Google Workspace or Cloud Identity super administrator and navigate to the IAM & Admin page: Open the IAM & admin page Select the organization resource you want to edit: Click the project drop-down list at the top of the page.
- Console To add an Organization Administrator: Sign in to the Google Cloud console as a Google Workspace or Cloud Identity super administrator and navigate to the IAM & Admin page: Open the IAM & admin page Select the organization resource you want to edit: Click the project drop-down list at the top of the page.

### "Introduction to organization restrictions \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview](https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview)
- Source ID: `site-docs-reference-2`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- This proxy configuration prevents users from accessing any Google Cloud resources in non-authorized Google Cloud organizations.
- How organization restrictions works In Google Cloud, Identity and Access Management (IAM) governs access to resources.
- Common use cases Here are some common organization restrictions use cases: Restrict access to employees in your organization so that employees can access resources only in your Google Cloud organization and not other organizations.
- Google Cloud administrators who administer Google Cloud, and egress proxy administrators, who configure the egress proxy, engage together to set up organization restrictions.

### "Manage resources with custom constraints \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Disable creation of a folder within another folder to control the depth of the resource hierarchy tree. name : organizations/ ORGANIZATION ID /customConstraints/custom.disableFolderCreation resourceTypes : - cloudresourcemanager.googleapis.com/Folder methodTypes : - CREATE condition : "resource.parent.startsWith(" folders")" actionType : DENY displayName : Disable creation of a folder inside another folder description : Do not allow creation of a folder within another folder when the resource hierarchy is set to a maximum value of 1.
- Description Constraint syntax Deny creation of new projects in folder 1234 (secure admin folder). name : organizations/ ORGANIZATION ID /customConstraints/custom.disableNewProjectInSecureAdminFolder resourceTypes : - cloudresourcemanager.googleapis.com/Project methodTypes : - CREATE condition : "resource.parent == " organizations/1234"" actionType : DENY displayName : Disable new project creation in the secure admin folder description : Do not allow creation of new projects in the secure folders.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: cloudresourcemanager.googleapis.com/Project cloudresourcemanager.googleapis.com/Folder To learn more about Organization Policy, see Custom organization policies .
- As the organization policy administrator , you can define an organization policy, which is a set of restrictions called constraints that apply to Google Cloud resources and descendants of those resources in the Google Cloud resource hierarchy .

