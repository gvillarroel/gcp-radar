---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.596Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Dataplex Attribute Store"
feature_slug: "dataplex-attribute-store"
latest_feature_date: "2025-02-18"
deprecation_date: "2026-02-18"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1"
  - "https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata"
keywords:
  - "dataplex"
  - "attribute"
  - "store"
  - "provides"
  - "based"
  - "metadata"
  - "capabilities"
  - "that"
---

# Dataplex Attribute Store

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Dataplex Attribute Store provides attribute-based metadata capabilities that are being retired in favor of tags, policy tags, and IAM conditions; deprecated on 2026-02-18.

## Extended Definition

Dataplex Attribute Store provides attribute-based metadata capabilities that are being retired in favor of tags, policy tags, and IAM conditions; deprecated on 2026-02-18.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/release-notes](https://docs.cloud.google.com/dataplex/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata)

## Supporting Pages

### Knowledge Catalog release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/release-notes](https://docs.cloud.google.com/dataplex/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- May 28, 2024 Feature Dataplex automatic data quality supports the following capabilities: Email notifications to alert people about the status and results of a data quality job Data quality scores that indicate the percentage of rules that passed API support for rule recommendations based on data profiling scans For more information, see Use auto data quality and Auto data quality overview .
- January 12, 2026 Breaking Some of the metadata that is stored in Dataplex Universal Catalog is changing.
- Breaking Some of the BigQuery metadata that is stored in Dataplex Catalog is changing.
- February 17, 2022 Feature Dataplex Explore provides a fully-managed, serverless data exploration experience that enables you to query your data using Apache SparkSQL queries and Jupyter notebooks.

### "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- Source ID: `site-java-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Compatibility Status Provides compatibility information for various metadata stores. com. google. cloud. dataplex. v1.
- Compatibility Provides compatibility information for a specific metadata store. com. google. cloud. dataplex. v1.
- Builder Provides compatibility information for a specific metadata store. com. google. cloud. dataplex. v1.
- Builder Provides compatibility information for various metadata stores. com. google. cloud. dataplex. v1.

### "Manage aspects and enrich metadata \_|\_ Knowledge Catalog \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use aspects to store: Business metadata : Information that provides business context, such as data classification.
- Required roles To get the permissions that you need to create and manage aspect types and aspects, ask your administrator to grant you the following IAM roles on the resource: Full set of permissions on metadata resources in Knowledge Catalog, including aspect types and data aspects: Dataplex Catalog Admin ( roles/dataplex.catalogAdmin ) Create and manage metadata resources in Knowledge Catalog, including aspect types and data aspects: Dataplex Catalog Editor ( roles/dataplex.catalogEditor ) Full set of permissions on custom aspect types (except for permissions to use aspect types to create or edit entries): Dataplex Aspect Type Owner ( roles/dataplex.aspectTypeOwner ) View aspect types and IAM policies associated with them: Dataplex Catalog Viewer ( roles/dataplex.catalogViewer ) Use aspect types to create and modify entries with the corresponding aspects: Dataplex Aspect Type User ( roles/dataplex.aspectTypeUser ) Add aspects of some of the system aspect types, such as schema , schema-join , overview , contacts : Dataplex Entry and EntryLink Owner ( roles/dataplex.entryOwner ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Data quality scorecard A data quality scorecard is an aspect that provides a summary of data quality, often based on data quality scans or other processes.
- String projectId = "MY PROJECT ID" ; // Available locations: https://cloud.google.com/dataplex/docs/locations String location = "MY LOCATION" ; String entryGroupId = "MY ENTRY GROUP ID" ; String entryId = "MY ENTRY ID" ; Entry createdEntry = updateEntry ( projectId , location , entryGroupId , entryId ); System . out . println ( "Successfully updated entry: " + createdEntry . getName ()); } // Method to update Entry located in projectId, location, entryGroupId and with entryId public static Entry updateEntry ( String projectId , String location , String entryGroupId , String entryId ) throws Exception { // Initialize client that will be used to send requests.

