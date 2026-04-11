---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.589Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Data products"
feature_slug: "data-products"
latest_feature_date: "2025-11-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1"
  - "https://docs.cloud.google.com/dataplex/docs/data-products-overview"
  - "https://docs.cloud.google.com/dataplex/docs/create-data-products"
keywords:
  - "products"
  - "dataplex"
  - "universal"
  - "catalog"
  - "supports"
  - "curated"
  - "that"
  - "package"
---

# Data products

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Dataplex Universal Catalog supports curated data products that package data assets for specific business use cases.

## Extended Definition

Dataplex Universal Catalog supports curated data products that package data assets for specific business use cases.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- [https://docs.cloud.google.com/dataplex/docs/data-products-overview](https://docs.cloud.google.com/dataplex/docs/data-products-overview)
- [https://docs.cloud.google.com/dataplex/docs/create-data-products](https://docs.cloud.google.com/dataplex/docs/create-data-products)

## Supporting Pages

### "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- Source ID: `site-java-reference`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cmek Service Client Service Description: Dataplex Universal Catalog Customer Managed Encryption Keys (CMEK) Service This class provides the ability to make remote calls to the backing service through method calls that map to API methods.
- Content Service Grpc ContentService manages Notebook and SQL Scripts for Dataplex Universal Catalog. com. google. cloud. dataplex. v1.
- Data Asset Represents a data asset resource that can be packaged and shared via a data product. com. google. cloud. dataplex. v1.
- Async Service ContentService manages Notebook and SQL Scripts for Dataplex Universal Catalog. com. google. cloud. dataplex. v1.

### About data products \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/data-products-overview](https://docs.cloud.google.com/dataplex/docs/data-products-overview)
- Source ID: `site-docs-root-2`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- This document describes the architecture and key concepts of data products in Knowledge Catalog (formerly Dataplex Universal Catalog).
- As of April 10, 2026, Dataplex Universal Catalog is now called Knowledge Catalog.
- The key capabilities of a data product include the following: Organize catalog assets into a logical unit that solves a specific business problem and enables faster time to insights.
- Home Documentation Data analytics Knowledge Catalog Guides Send feedback About data products Stay organized with collections Save and categorize content based on your preferences.

### Create data products \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/create-data-products](https://docs.cloud.google.com/dataplex/docs/create-data-products)
- Source ID: `site-docs-root-2`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- To import the entry, use the following command: terraform import google dataplex entry.data product metadata "projects/ DATA PRODUCT PROJECT NUMBER /locations/ LOCATION /entryGroups/@dataplex/entries/projects/ DATA PRODUCT PROJECT NUMBER /locations/ LOCATION /dataProducts/ DATA PRODUCT ID " Terraform configuration: resource "google dataplex entry" "data product metadata" { project = " DATA PRODUCT PROJECT NUMBER " location = " LOCATION " entry group id = "@dataplex" entry id = "projects/ DATA PRODUCT PROJECT NUMBER /locations/ LOCATION /dataProducts/ DATA PRODUCT ID " entry type = "projects/655216118709/locations/global/entryTypes/data-product" aspects { aspect key = "655216118709.global.overview" aspect { data = jsonencode({ content = " DOCUMENTATION " }) } } provider = google-beta } Replace the following: DATA PRODUCT PROJECT NUMBER : the project number where the data product resource is located LOCATION : the region of the Knowledge Catalog service endpoint you are calling (for example, us-central1 ) DATA PRODUCT ID : the ID of your data product DOCUMENTATION : the content that you want to attach to the data product For general information on the import process, refer to the Terraform import documentation .
- For example, send the following PATCH request: curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d \ '{ "aspects": { "dataplex-types.global.overview": { "aspectType": "projects/dataplex-types/locations/global/aspectTypes/overview", "data": { "content": " DOCUMENTATION " } } } }' \ "https://dataplex.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /entryGroups/@dataplex/entries/projects/ DATA PRODUCT PROJECT NUMBER /locations/ DATA PRODUCT LOCATION /dataProducts/ DATA PRODUCT ID ?updateMask=aspects" Replace the following: PROJECT ID : the ID of your Google Cloud project where the API call is being made LOCATION : the region of the Knowledge Catalog service endpoint you are calling (for example, us-central1 ) DATA PRODUCT PROJECT NUMBER : the project number where the data product resource is located DATA PRODUCT LOCATION : the location of the data product resource DATA PRODUCT ID : the ID of your data product DOCUMENTATION : the content that you want to attach to the data product Terraform Documentation is modeled as aspects on the data product.
- Roles for a data product owner To get the permissions that you need to create and manage data products, ask your administrator to grant you the following IAM roles on the project: Full permissions to create, update, delete, and manage permissions for data products: Dataplex Data Products Admin ( roles/dataplex.dataProductsAdmin ) Update and manage existing data products: Dataplex Data Products Editor ( roles/dataplex.dataProductsEditor ) Add aspects such as schema , overview , and contacts : Dataplex Entry and EntryLink Owner ( roles/dataplex.entryOwner ) Search for and add assets: Dataplex Catalog Viewer ( roles/dataplex.catalogViewer ) Edit system aspect types such as documentation and contract aspect of refresh cadence: Dataplex Catalog Editor ( roles/dataplex.catalogEditor ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- This document is intended for data product owners who want to create and configure data products in Knowledge Catalog (formerly Dataplex Universal Catalog).

