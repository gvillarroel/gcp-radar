---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.126Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Project-level Compute Engine alpha API access"
feature_slug: "project-level-compute-engine-alpha-api-access"
latest_feature_date: "2025-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members"
  - "https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources"
  - "https://docs.cloud.google.com/compute/docs/access"
keywords:
  - "project"
  - "level"
  - "compute"
  - "engine"
  - "alpha"
  - "access"
  - "projects"
  - "can"
---

# Project-level Compute Engine alpha API access

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Projects can self-enable the Compute Engine alpha API to view and manage Preview features through supported tools.

## Extended Definition

Projects can self-enable the Compute Engine alpha API to view and manage Preview features through supported tools.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members](https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members)
- [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources)
- [https://docs.cloud.google.com/compute/docs/access](https://docs.cloud.google.com/compute/docs/access)

## Supporting Pages

### "Manage access to projects, folders, and organizations \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members](https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members)
- Source ID: `site-iam-reference`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to manage access to a project, folder, or organization, ask your administrator to grant you the following IAM roles on the resource that you want to manage access for (project, folder, or organization): To manage access to a project: Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) To manage access to a folder: Folder Admin ( roles/resourcemanager.folderAdmin ) To manage access to projects, folders, and organizations: Organization Admin ( roles/resourcemanager.organizationAdmin ) To manage access to almost all Google Cloud resources: Security Admin ( roles/iam.securityAdmin ) These predefined roles contain the permissions required to manage access to a project, folder, or organization.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage access to a project, folder, or organization: To manage access to projects: resourcemanager.projects.getIamPolicy resourcemanager.projects.setIamPolicy To manage access to folders: resourcemanager.folders.getIamPolicy resourcemanager.folders.setIamPolicy To manage access to organizations: resourcemanager.organizations.getIamPolicy resourcemanager.organizations.setIamPolicy You might also be able to get these permissions with custom roles or other predefined roles .
- To learn how to manage access to other resources, see the following guides: Manage access to service accounts Manage access to other resources Note: Granting access to projects, folders, and organizations is considered a sensitive action; in some cases, you might need to reauthenticate before you can initiate the action.
- GetIamPolicyRequest () request . resource = f "projects/ { project id } " policy = client . get iam policy ( request ) print ( f "Policy retrieved: { policy } " ) return policy REST To see who has access to your project, folder, or organization, get the allow policy for the resource.

### Managing access to Compute Engine resources \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources)
- Source ID: `site-docs-reference-required-6`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances/ VM NAME /testIamPermissions { "permissions": [ "compute.instances.start", "compute.instances.stop", "compute.instances.delete" ] } The request returns the permissions that are enabled for the caller. { "permissions": [ "compute.instances.start", "compute.instances.stop" ] } Modifying resource access for multiple members If you want to modify access to Compute Engine resources for multiple members simultaneously, review recommendations on how to modify an IAM policy programmatically .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage access to Compute Engine resources: To grant or revoke access to resources: compute.projects.get on the project compute.
- For other Compute Engine resources that don't support resource-level access control, you must manage access to those resources at the project, folder, or organization levels.
- For general information about how to grant, change, and revoke access to resources unrelated to Compute Engine, for example, to grant access to a Google Cloud project, see the IAM documentation for Granting, changing, and revoking access to resources .

### Access control overview \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access](https://docs.cloud.google.com/compute/docs/access)
- Source ID: `site-docs-reference-required-6`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Granting users SSH access to VM instances To give a user the ability to connect to a VM instance using SSH without granting them the ability to manage Compute Engine resources, add the user's public key to the project, or add a user's public key to a specific instance.
- Access control options for users To give users the ability to create and manage your Compute Engine resources, you can add users as team members to your project or to specific resources and grant them permissions using IAM roles .
- Systems administrators Developers Compute Engine shared VPC admin Permissions to administer shared VPC host projects, specifically enabling the host projects and associating service projects to the host project's network.
- This page describes the ways you can add new users to your project and how to set access control for your Compute Engine resources using Identity and Access Management (IAM).

