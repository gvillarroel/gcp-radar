---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:22:50.096Z"
product_name: "Service Catalog"
product_slug: "service-catalog"
feature_name: "Private Catalog Cloud Console access control management"
feature_slug: "private-catalog-cloud-console-access-control-management"
latest_feature_date: "2020-12-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/service-catalog/docs/access-control"
  - "https://docs.cloud.google.com/service-catalog/docs/terraform-configuration"
  - "https://docs.cloud.google.com/service-catalog/docs/share-catalog"
keywords:
  - "private"
  - "catalog"
  - "console"
  - "access"
  - "control"
  - "management"
  - "adds"
  - "more"
---

# Private Catalog Cloud Console access control management

Product: Service Catalog
Coverage: LOW

## Step 02 Summary

Private Catalog adds more Cloud Console options for managing access control.

## Extended Definition

Private Catalog adds more Cloud Console options for managing access control.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/service-catalog/docs/access-control](https://docs.cloud.google.com/service-catalog/docs/access-control)
- [https://docs.cloud.google.com/service-catalog/docs/terraform-configuration](https://docs.cloud.google.com/service-catalog/docs/terraform-configuration)
- [https://docs.cloud.google.com/service-catalog/docs/share-catalog](https://docs.cloud.google.com/service-catalog/docs/share-catalog)

## Supporting Pages

### Access control with IAM \_|\_ Service Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-catalog/docs/access-control](https://docs.cloud.google.com/service-catalog/docs/access-control)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Access control with IAM This page explains how you grant and manage access to Service Catalog using Identity and Access Management (IAM).
- Google Cloud offers Identity and Access Management (IAM) , which lets you give more granular access to specific Google Cloud resources and prevents unwanted access to other resources.
- Home Documentation Access and resource management Service Catalog Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Go to the Google Cloud console IAM & admin page Select Cloud Private Catalog from the side menu.

### "Creating a Terraform configuration \_|\_ Service Catalog \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-catalog/docs/terraform-configuration](https://docs.cloud.google.com/service-catalog/docs/terraform-configuration)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You must have the following Identity and Access Management (IAM) roles : Catalog Admin OR Catalog Manager for the Google Cloud organization associated with the Google Cloud project which has Service Catalog enabled.
- Home Documentation Access and resource management Service Catalog Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Creating a Cloud Storage bucket To set up Cloud Storage, create a bucket in the same project where you enabled Service Catalog for your organization: In the Google Cloud console, go to the Cloud Storage Buckets page.
- The following screenshot illustrates creating a Terraform configuration: Next steps Assign the Terraform configuration to a catalog, so that users in your organization can access and deploy the solution.

### Sharing a catalog \_|\_ Service Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-catalog/docs/share-catalog](https://docs.cloud.google.com/service-catalog/docs/share-catalog)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Grant the following Identity and Access Management (IAM) roles to users who will use the shared catalog: Catalog Consumer ( roles/cloudprivatecatalog.consumer ) OR the IAM Viewer ( roles/viewer ) role for the relevant organization, project, or folder.
- Home Documentation Access and resource management Service Catalog Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- For details on Service Catalog's IAM roles and permissions, see Access control .
- Before you begin You must have the Catalog Admin ( roles/cloudprivatecatalogproducer.admin ) OR Catalog Manager ( roles/cloudprivatecatalogproducer.manager ) role for the Google Cloud project where Service Catalog is enabled, and the folder, project, or organization where you're sharing the catalog.

