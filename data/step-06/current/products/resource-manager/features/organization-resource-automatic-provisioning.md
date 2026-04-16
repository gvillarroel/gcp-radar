---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.097Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Organization resource automatic provisioning"
feature_slug: "organization-resource-automatic-provisioning"
latest_feature_date: "2017-01-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization"
  - "https://docs.cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy"
  - "https://docs.cloud.google.com/resource-manager/docs/manage-google-cloud-resources"
keywords:
  - "organization"
  - "resource"
  - "automatic"
  - "provisioning"
  - "automatically"
  - "provisioned"
  - "workspace"
  - "identity"
---

# Organization resource automatic provisioning

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

The Organization resource is automatically provisioned for Google Workspace and Cloud Identity customers when they create a project with a domain email account.

## Extended Definition

The Organization resource is automatically provisioned for Google Workspace and Cloud Identity customers when they create a project with a domain email account.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization)
- [https://docs.cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy](https://docs.cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy)
- [https://docs.cloud.google.com/resource-manager/docs/manage-google-cloud-resources](https://docs.cloud.google.com/resource-manager/docs/manage-google-cloud-resources)

## Supporting Pages

### "Set up a Google Cloud organization resource \_|\_ Resource Manager \_|\_\

- URL: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Once you have created your Google Workspace or Cloud Identity account and associated it with a domain, your organization resource will be automatically created for you.
- Set up your organization resource If you're a Google Workspace or Cloud Identity customer, an organization resource is provided to you automatically.
- Google Workspace or Cloud Identity super administrator responsibilities, in the context of Google Cloud organization resource setup are: Assigning the Organization Administrator role to some users Being a point of contact in case of recovery issues Controlling the lifecycle of the Google Workspace or Cloud Identity account and organization resource as explained under Delete an organization The Organization Administrator , once assigned, can assign Identity and Access Management roles to other users.
- To actively use the organization resource, follow these steps to add an Organization Administrator : Add an Organization Administrator Console To add an Organization Administrator: Sign in to the Google Cloud console as a Google Workspace or Cloud Identity super administrator and navigate to the IAM & Admin page: Open the IAM & admin page Select the organization resource you want to edit: Click the project drop-down list at the top of the page.

### About resource hierarchy \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy](https://docs.cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy)
- Source ID: `site-docs-reference-2`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When a user with a Google Workspace or Cloud Identity account creates a Google Cloud project resource, an organization resource is automatically provisioned for them.
- Association with Google Workspace or Cloud Identity accounts A Google Workspace or Cloud Identity account is a prerequisite to have access to the organization resource.
- Google Workspace and Cloud Identity customers have access to additional features of the Google Cloud resource hierarchy, such as organization and folder resources.
- A Google Workspace or Cloud Identity account can be associated with exactly one organization resource.

### "Quickstart: Create your Google Cloud resource hierarchy \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-google-cloud-resources](https://docs.cloud.google.com/resource-manager/docs/manage-google-cloud-resources)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Once you have created your Google Workspace or Cloud Identity account and associated it with a domain, your organization resource will be automatically created for you.
- Once you have created your first Project, your organization resource will be provisioned automatically.
- The organization resource is bound to your Google Workspace or Cloud Identity account, and deleting it is potentially a very damaging action that might be impossible to fully reverse.
- The organization resource that is created will be linked to your Google Workspace or Cloud Identity account with the project or billing account you created set as a child resource.

