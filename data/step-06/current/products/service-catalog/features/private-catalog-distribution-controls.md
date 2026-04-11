---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:22:50.096Z"
product_name: "Service Catalog"
product_slug: "service-catalog"
feature_name: "Private Catalog distribution controls"
feature_slug: "private-catalog-distribution-controls"
latest_feature_date: "2019-02-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/service-catalog/docs/access-control"
  - "https://docs.cloud.google.com/service-catalog/docs/assign-solutions"
  - "https://docs.cloud.google.com/service-catalog/docs/overview"
keywords:
  - "private"
  - "catalog"
  - "distribution"
  - "controls"
  - "allows"
  - "admins"
  - "to"
  - "control"
---

# Private Catalog distribution controls

Product: Service Catalog
Coverage: LOW

## Step 02 Summary

Private Catalog allows cloud admins to control distribution of solutions within an enterprise.

## Extended Definition

Private Catalog allows cloud admins to control distribution of solutions within an enterprise.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/service-catalog/docs/access-control](https://docs.cloud.google.com/service-catalog/docs/access-control)
- [https://docs.cloud.google.com/service-catalog/docs/assign-solutions](https://docs.cloud.google.com/service-catalog/docs/assign-solutions)
- [https://docs.cloud.google.com/service-catalog/docs/overview](https://docs.cloud.google.com/service-catalog/docs/overview)

## Supporting Pages

### Access control with IAM \_|\_ Service Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-catalog/docs/access-control](https://docs.cloud.google.com/service-catalog/docs/access-control)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Operates under a target Google Cloud resource, such as an organization, project, or folder. cloudprivatecatalog.targets.get resourcemanager.projects.get resourcemanager.projects.list Adding users to Service Catalog IAM roles Users, Google Groups, or domains must have the resourcemanager.organizations.setIamPolicy permission on the organization to add users to the Service Catalog IAM roles.
- For example, if your organization would like users granted the Catalog Admin role to also be able to add and remove users and groups from the other Service Catalog IAM roles, then an Organization Administrator can do the following: Create a Google Group for the users ( MyCompanyCatalogAdmins ).
- In the example, members of the Google Group ( MyCompanyCatalogAdmins ) can assign users and groups to IAM roles in the organization because the group has been granted the setIamPolicy permission when granted the Organization Administrator role.
- For example, you can grant both roles/cloudprivatecatalogproducer.admin and roles/cloudprivatecatalogproducer.manager to your cloud admin team's Google group .

### "Assigning solutions to a catalog \_|\_ Service Catalog \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-catalog/docs/assign-solutions](https://docs.cloud.google.com/service-catalog/docs/assign-solutions)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- By curating solutions into catalogs, you control which users can view and launch approved solutions in your organization.
- You must have the Catalog Admin ( roles/cloudprivatecatalogproducer.admin ) OR Catalog Manager ( roles/cloudprivatecatalogproducer.manager ) role for the Google Cloud project where Service Catalog is enabled.
- If you've already shared the catalog to a Google Cloud resource, users who have access to the resource can now view and launch the solution.
- To remove a solution from all associated catalogs and delete it from Service Catalog, see deleting solutions from Service Catalog .

### Overview of Service Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-catalog/docs/overview](https://docs.cloud.google.com/service-catalog/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Features Service Catalog includes the following features: A Service Catalog experience for users and cloud admins Ability to create multiple catalogs and share them at different folder and project levels Ability to add additional Service Catalog cloud admins to create and curate content Support for reference links and Cloud Deployment Manager (Deployment Manager) templates Single point of entry for cloud admins and users Respect for organizational policies and Deployment Manager constraints to complement Service Catalog and provide controls A cloud admin can create a catalog under a Google Cloud organization.
- Overview of Service Catalog Service Catalog enables developers and cloud admins to make their solutions discoverable to their own organization's internal enterprise users.
- While making solutions discoverable, cloud admins can also control the distribution of solutions and ensure compliance and governance.
- So she wants to run Service Catalog specifically for her engineering team to control what they can launch from Google Cloud.

