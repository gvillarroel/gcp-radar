---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.092Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "VPC Service Controls organization policies"
feature_slug: "vpc-service-controls-organization-policies"
latest_feature_date: "2020-01-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders"
  - "https://docs.cloud.google.com/resource-manager/docs/access-control-proj"
  - "https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview"
keywords:
  - "vpc"
  - "controls"
  - "organization"
  - "policies"
  - "provides"
  - "help"
  - "create"
  - "secure"
---

# VPC Service Controls organization policies

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Provides organization policies for VPC Service Controls to help create secure perimeters against data exfiltration.

## Extended Definition

Provides organization policies for VPC Service Controls to help create secure perimeters against data exfiltration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders](https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders)
- [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj)
- [https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview](https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview)

## Supporting Pages

### Create folders \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders](https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders)
- Source ID: `site-docs-reference-2`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Refer to following sample command: gcloud resource-manager folders create \ --display-name="Test Async Folder" \ --organization=2518 \ --async The output provides an operation name (e.g., fc.8572) and shows done: false .
- This provides them with a high degree of flexibility in assigning allow, deny, or organization policies at the right level of granularity.
- The Create Folder response: { "name" : "operations/fc.123456789" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.resourcemanager.v3.FolderOperation" , "displayName" : " DISPLAY NAME " , "operationType" : "CREATE" } } The Get Operation curl request: curl -H "Authorization: Bearer ${bearer token}" \ https://cloudresourcemanager.googleapis.com/v3/operations/fc.123456789 The Get Operation response: { "name" : "operations/fc.123456789" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.resourcemanager.v3.FolderOperation" , "displayName" : " DISPLAY NAME " , "operationType" : "CREATE" }, "done" : true , "response" : { "@type" : "type.googleapis.com/google.cloud.resourcemanager.v3.Folder" , "name" : "folders/12345" , "parent" : "organizations/123" , "displayName" : " DISPLAY NAME " , "lifecycleState" : "ACTIVE" , "createTime" : "2017-07-19T23:29:26.018Z" , "updateTime" : "2017-07-19T23:29:26.046Z" } } Add tags during folder creation Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- The request JSON: reques t jso n = ' { display na me : DISPLAY NAME , pare nt : ORGANIZATION NAME } ' The Create Folder curl request: curl -X POST -H "Content-Type: application/json" \ -H "Authorization: Bearer ${bearer token}" \ -d "$request json" \ https://cloudresourcemanager.googleapis.com/v3/folders Where: DISPLAY NAME : the new folder's display name, for example "My Awesome Folder." ORGANIZATION NAME : the name of the organization resource under which you're creating the folder, for example organizations/123 .

### "Access control for projects with IAM \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj)
- Source ID: `site-iam-reference`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Lowest-level resources where you can grant this role: Folder resourcemanager. organizations. get resourcemanager. projects. create Project Deleter ( roles/ resourcemanager.projectDeleter ) Provides access to delete Google Cloud projects.
- The role is granted on the organization resource or folder that contains the projects: Method Required permission(s) resourcemanager.projects.create resourcemanager.projects.create resourcemanager.projects.delete resourcemanager.projects.delete resourcemanager.projects.get resourcemanager.projects.get Granting this permission will also grant access to get the name of the billing account associated with the project through the Billing API method billing.projects.getBillingInfo . resourcemanager.projects.getIamPolicy resourcemanager.projects.getIamPolicy resourcemanager.projects.list resourcemanager.projects.list resourcemanager.projects.search resourcemanager.projects.get resourcemanager.projects.setIamPolicy resourcemanager.projects.setIamPolicy resourcemanager.projects.testIamPermissions Does not require any permission. resourcemanager.projects.undelete resourcemanager.projects.undelete resourcemanager.projects.patch To update a project's metadata, requires resourcemanager.projects.update permission.
- Lowest-level resources where you can grant this role: Project iam.policybindings. iam.policybindings.get iam.policybindings.list resourcemanager. projects. createPolicyBinding resourcemanager. projects. deletePolicyBinding resourcemanager.projects.get resourcemanager. projects. getIamPolicy resourcemanager. projects. searchPolicyBindings resourcemanager. projects. setIamPolicy resourcemanager. projects. updatePolicyBinding Browser ( roles/ browser ) Read access to browse the hierarchy for a project, including the folder, organization, and allow policy.
- To update a project's parent and move the project into an organization resource, requires resourcemanager.projects.create permission on the organization resource. projects.move projects.move Using predefined roles IAM predefined roles let you manage the permissions available to users.

### Resource Manager overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview](https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview)
- Source ID: `site-docs-reference-2`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key capabilities for managing Google Cloud resources Resource Manager provides the following capabilities to help you govern your cloud environment: Centralized control with the organization resource : The organization resource represents your organization (for example, your company).
- Integration with other Google Cloud services for resource management Resource Manager is central to managing your Google Cloud resources, and provides the structure and foundational capabilities that let you effectively use and govern other critical services, such as Organization Policy, Tags, and Essential Contacts: Tags : Resource Manager works with Tags, which lets you attach arbitrary key-value pairs to resources.
- For example, moving a project into an organization resource updates its allow and deny policies to inherit from the policies of the organization resource.
- Resource Manager provides the hierarchical structure (organization, folders, and projects) that the Organization Policy relies on to enforce rules.

