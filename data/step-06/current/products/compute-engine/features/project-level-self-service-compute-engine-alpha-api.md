---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.117Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Project-level self-service Compute Engine alpha API"
feature_slug: "project-level-self-service-compute-engine-alpha-api"
latest_feature_date: "2025-10-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members"
  - "https://docs.cloud.google.com/compute/docs/access/service-accounts"
  - "https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources"
keywords:
  - "project"
  - "level"
  - "self"
  - "compute"
  - "engine"
  - "alpha"
  - "projects"
  - "can"
---

# Project-level self-service Compute Engine alpha API

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Projects can self-service enable the Compute Engine alpha API to access and manage preview features through supported tools; Projects can self-service enable the Compute Engine alpha API to access and manage preview features through supported tools.

## Extended Definition

Projects can self-service enable the Compute Engine alpha API to access and manage preview features through supported tools; Projects can self-service enable the Compute Engine alpha API to access and manage preview features through supported tools.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members](https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members)
- [https://docs.cloud.google.com/compute/docs/access/service-accounts](https://docs.cloud.google.com/compute/docs/access/service-accounts)
- [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources)

## Supporting Pages

### "Manage access to projects, folders, and organizations \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members](https://docs.cloud.google.com/compute/docs/access/add-remove-change-permissions-for-team-members)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IDENTIFIER Project-level custom roles: projects/ PROJECT ID /roles/ IDENTIFIER Organization-level custom roles: organizations/ ORG ID /roles/ IDENTIFIER For a list of predefined roles, see Understanding roles .
- IDENTIFIER Project-level custom roles: projects/ PROJECT ID /roles/ IDENTIFIER Organization-level custom roles: organizations/ ORG ID /roles/ IDENTIFIER For a list of predefined roles, see Understanding roles .
- IDENTIFIER Project-level custom roles: projects/ PROJECT ID /roles/ IDENTIFIER Organization-level custom roles: organizations/ ORG ID /roles/ IDENTIFIER For a list of predefined roles, see Understanding roles .
- Required roles To get the permissions that you need to manage access to a project, folder, or organization, ask your administrator to grant you the following IAM roles on the resource that you want to manage access for (project, folder, or organization): To manage access to a project: Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) To manage access to a folder: Folder Admin ( roles/resourcemanager.folderAdmin ) To manage access to projects, folders, and organizations: Organization Admin ( roles/resourcemanager.organizationAdmin ) To manage access to almost all Google Cloud resources: Security Admin ( roles/iam.securityAdmin ) These predefined roles contain the permissions required to manage access to a project, folder, or organization.

### Service accounts \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access/service-accounts](https://docs.cloud.google.com/compute/docs/access/service-accounts)
- Source ID: `site-docs-reference-required-6`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Default scopes When you create a new Compute Engine instance, it is automatically configured with the following access scopes: Read-only access to Cloud Storage: https://www.googleapis.com/auth/devstorage.read only Write access to write Compute Engine logs: https://www.googleapis.com/auth/logging.write Write access to publish metric data to your Google Cloud projects: https://www.googleapis.com/auth/monitoring.write Read-only access to Service Management features required for Google Cloud Endpoints (Alpha) : https://www.googleapis.com/auth/service.management.readonly Read or write access to Service Control features required for Google Cloud Endpoints (Alpha) : https://www.googleapis.com/auth/servicecontrol Write access to Cloud Trace allows an application running on a VM to write trace data to a project. https://www.googleapis.com/auth/trace.append Scopes best practice There are many access scopes available to choose from, but a best practice is to set the cloud-platform access scope, which is an OAuth scope for Google Cloud services, and then control the service account's access by granting it IAM roles. https://www.googleapis.com/auth/cloud-platform Scopes examples Following the scopes best practice, if you enabled the cloud-platform access scope on an instance and then granted the following predefined IAM roles : roles/compute.instanceAdmin.v1 roles/storage.objectViewer roles/compute.networkAdmin Then the service account has only the permissions included in those three roles.
- Compute Engine default service account New projects that have enabled the Compute Engine API have a Compute Engine default service account, which has the following email: PROJECT NUMBER -compute@developer.gserviceaccount.com The Compute Engine default service account has the following attributes: Automatically created, with an autogenerated name and email address, and added to your project when you enable the Compute Engine API.
- Compute Engine Service Agent All projects that have enabled the Compute Engine API have a Compute Engine Service Agent , which has the following email: service- PROJECT NUMBER @compute-system.iam.gserviceaccount.com This service agent is designed specifically for Compute Engine to perform its service duties on your project.
- Google APIs Service Agent Apart from the default service account, all projects enabled with Compute Engine come with a Google APIs Service Agent , identifiable using the email: PROJECT NUMBER @cloudservices.gserviceaccount.com This service agent is designed specifically to run internal Google processes on your behalf.

### Managing access to Compute Engine resources \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources)
- Source ID: `site-docs-reference-required-6`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances/ VM NAME /testIamPermissions { "permissions": [ "compute.instances.start", "compute.instances.stop", "compute.instances.delete" ] } The request returns the permissions that are enabled for the caller. { "permissions": [ "compute.instances.start", "compute.instances.stop" ] } Modifying resource access for multiple members If you want to modify access to Compute Engine resources for multiple members simultaneously, review recommendations on how to modify an IAM policy programmatically .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage access to Compute Engine resources: To grant or revoke access to resources: compute.projects.get on the project compute.
- For other Compute Engine resources that don't support resource-level access control, you must manage access to those resources at the project, folder, or organization levels.
- For example, to grant the compute.admin role to email@example.com, add the following new binding to policy: { "members": [ "user:email@example.com" ], "role":"roles/compute.admin" } Write the updated policy with setIamPolicy() : POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances/ VM NAME :setIamPolicy Replace the following: PROJECT ID : the project ID of the project this VM belongs to.

