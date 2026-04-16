---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.286Z"
product_name: "Service Catalog"
product_slug: "service-catalog"
feature_name: "Private Catalog internal compliance controls"
feature_slug: "private-catalog-internal-compliance-controls"
latest_feature_date: "2019-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-catalog/docs/overview"
  - "https://docs.cloud.google.com/service-catalog/docs/access-control"
  - "https://docs.cloud.google.com/service-catalog/docs/create-catalog"
  - "https://docs.cloud.google.com/service-catalog/docs/share-catalog"
keywords:
  - "private"
  - "catalog"
  - "internal"
  - "compliance"
  - "controls"
  - "helps"
  - "admins"
  - "ensure"
---

# Private Catalog internal compliance controls

Product: Service Catalog
Coverage: MEDIUM

## Step 02 Summary

Private Catalog helps cloud admins ensure internal compliance for solution distribution.

## Extended Definition

Private Catalog helps cloud admins ensure internal compliance for solution distribution.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-catalog/docs/overview](https://docs.cloud.google.com/service-catalog/docs/overview)
- [https://docs.cloud.google.com/service-catalog/docs/access-control](https://docs.cloud.google.com/service-catalog/docs/access-control)
- [https://docs.cloud.google.com/service-catalog/docs/create-catalog](https://docs.cloud.google.com/service-catalog/docs/create-catalog)
- [https://docs.cloud.google.com/service-catalog/docs/share-catalog](https://docs.cloud.google.com/service-catalog/docs/share-catalog)

## Supporting Pages

### Overview of Service Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-catalog/docs/overview](https://docs.cloud.google.com/service-catalog/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Features Service Catalog includes the following features: A Service Catalog experience for users and cloud admins Ability to create multiple catalogs and share them at different folder and project levels Ability to add additional Service Catalog cloud admins to create and curate content Support for reference links and Cloud Deployment Manager (Deployment Manager) templates Single point of entry for cloud admins and users Respect for organizational policies and Deployment Manager constraints to complement Service Catalog and provide controls A cloud admin can create a catalog under a Google Cloud organization.
- Overview of Service Catalog Service Catalog enables developers and cloud admins to make their solutions discoverable to their own organization's internal enterprise users.
- While making solutions discoverable, cloud admins can also control the distribution of solutions and ensure compliance and governance.
- How Service Catalog helps Andrea Let's say Andrea wants her engineering team to use a known, free virtual image instead of any other paid software tools for building games.

### Access control with IAM \_|\_ Service Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-catalog/docs/access-control](https://docs.cloud.google.com/service-catalog/docs/access-control)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Creates and manages Service Catalog resources, such as solutions and catalogs. cloudprivatecatalogproducer.settings. cloudprivatecatalogproducer.catalogs. cloudprivatecatalogproducer.associations. cloudprivatecatalogproducer.targets. cloudprivatecatalogproducer.producerCatalogs. cloudprivatecatalogproducer.catalogAssociations. cloudprivatecatalogproducer.products. cloudprivatecatalog.targets. resourcemanager.projects.get resourcemanager.projects.list resourcemanager.folders.get resourcemanager.folders.list resourcemanager.organizations.get Catalog Admin Role name Description Includes permissions roles/cloudprivatecatalogproducer.admin Creates and manages Service Catalog resources, such as solutions and catalogs. cloudprivatecatalogproducer.catalogs. cloudprivatecatalogproducer.associations. cloudprivatecatalogproducer.targets. cloudprivatecatalogproducer.producerCatalogs. cloudprivatecatalogproducer.catalogAssociations. cloudprivatecatalogproducer.products. cloudprivatecatalog.targets. resourcemanager.projects.get resourcemanager.projects.list resourcemanager.folders.get resourcemanager.folders.list resourcemanager.organizations.get Catalog Manager Role name Description Includes permissions roles/cloudprivatecatalogproducer.manager Views solutions and catalogs, and shares catalogs with Service Catalog users. cloudprivatecatalog.targets.get cloudprivatecatalogproducer.catalogs.get cloudprivatecatalogproducer.catalogs.list cloudprivatecatalogproducer.targets. cloudprivatecatalogproducer.associations. cloudprivatecatalogproducer.producerCatalogs.get cloudprivatecatalogproducer.producerCatalogs.list cloudprivatecatalogproducer.catalogAssociations. resourcemanager.projects.get resourcemanager.projects.list resourcemanager.folders.get resourcemanager.folders.list resourcemanager.organizations.get Catalog Consumer Role name Description Includes permissions roles/cloudprivatecatalog.consumer Browses catalogs.
- Operates under a target Google Cloud resource, such as an organization, project, or folder. cloudprivatecatalog.targets.get resourcemanager.projects.get resourcemanager.projects.list Adding users to Service Catalog IAM roles Users, Google Groups, or domains must have the resourcemanager.organizations.setIamPolicy permission on the organization to add users to the Service Catalog IAM roles.
- For example, if your organization would like users granted the Catalog Admin role to also be able to add and remove users and groups from the other Service Catalog IAM roles, then an Organization Administrator can do the following: Create a Google Group for the users ( MyCompanyCatalogAdmins ).
- In the example, members of the Google Group ( MyCompanyCatalogAdmins ) can assign users and groups to IAM roles in the organization because the group has been granted the setIamPolicy permission when granted the Organization Administrator role.

### Creating a catalog \_|\_ Service Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-catalog/docs/create-catalog](https://docs.cloud.google.com/service-catalog/docs/create-catalog)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You must have the Catalog Admin ( roles/cloudprivatecatalogproducer.admin ) role for the Google Cloud organization associated with the Google Cloud project which has Service Catalog enabled.
- The description is only visible to Service Catalog admins.
- Next steps Assign solutions to your catalog Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Access and resource management Service Catalog Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### Sharing a catalog \_|\_ Service Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-catalog/docs/share-catalog](https://docs.cloud.google.com/service-catalog/docs/share-catalog)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin You must have the Catalog Admin ( roles/cloudprivatecatalogproducer.admin ) OR Catalog Manager ( roles/cloudprivatecatalogproducer.manager ) role for the Google Cloud project where Service Catalog is enabled, and the folder, project, or organization where you're sharing the catalog.
- Grant the following Identity and Access Management (IAM) roles to users who will use the shared catalog: Catalog Consumer ( roles/cloudprivatecatalog.consumer ) OR the IAM Viewer ( roles/viewer ) role for the relevant organization, project, or folder.
- Home Documentation Access and resource management Service Catalog Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- If your catalog contains DM-based solutions, the Deployment Manager Editor ( roles/deploymentmanager.editor ) role for the project where your users deploy the solution.

