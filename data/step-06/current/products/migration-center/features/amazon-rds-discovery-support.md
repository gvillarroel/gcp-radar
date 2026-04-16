---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.052Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "Amazon RDS discovery support"
feature_slug: "amazon-rds-discovery-support"
latest_feature_date: "2025-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migration-center/docs/start-asset-discovery"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
  - "https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security"
keywords:
  - "amazon"
  - "rds"
  - "discovery"
  - "migration"
  - "center"
  - "supports"
  - "of"
  - "instances"
---

# Amazon RDS discovery support

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center supports discovery of Amazon RDS instances and uploading the collected information to Migration Center.

## Extended Definition

Migration Center supports discovery of Amazon RDS instances and uploading the collected information to Migration Center.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migration-center/docs/start-asset-discovery](https://docs.cloud.google.com/migration-center/docs/start-asset-discovery)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)

## Supporting Pages

### Start an asset discovery \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/start-asset-discovery](https://docs.cloud.google.com/migration-center/docs/start-asset-discovery)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Collection methods Migration Center lets you collect data from your infrastructure in different ways to give you the flexibility to balance speed and depth of discovery.
- Security and privacy For every server in your existing environment, Migration Center collects the following information: Machine information Configuration data Utilization data Network dependencies Installed software The breadth of data collected depends on the collection method you select, as well as any security settings that are applied during setup.
- With Google Cloud Migration Center, you can discover physical servers and virtual machine (VM) instances in your infrastructure hosted on-premises or on other cloud providers, and gather detailed information about every component.
- Migration Center supports three approaches: Automated one-time collection Automated continuous collection Manual data import The following sections help you decide which method and tools to use depending on your use case.

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description MigrationCenterAsyncClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description MigrationCenterAsyncClient The constructed client. from service account info from service account info ( info : dict , args , kwargs ) Creates an instance of this client using the provided credentials info.
- Returns Type Description google.cloud.migrationcenter v1.types.Report Report represents a point-in-time rendering of the ReportConfig results. get report config get report config ( request : typing .
- Returns Type Description google.cloud.migrationcenter v1.types.BatchUpdateAssetsResponse Response for updating a list of assets. cancel operation cancel operation ( request : typing .

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description MigrationCenterClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description MigrationCenterClient The constructed client. from service account info from service account info ( info : dict , args , kwargs ) Creates an instance of this client using the provided credentials info.
- Returns Type Description google.cloud.migrationcenter v1.types.Report Report represents a point-in-time rendering of the ReportConfig results. get report config get report config ( request : typing .
- Returns Type Description google.cloud.migrationcenter v1.types.BatchUpdateAssetsResponse Response for updating a list of assets. cancel operation cancel operation ( request : typing .

### "Discovery client data collection and security \_|\_ Migration Center \_\

- URL: [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Migration Migration Center Resources Send feedback Discovery client data collection and security Stay organized with collections Save and categorize content based on your preferences.
- Communication with Google Cloud Registered discovery clients communicate with Google Cloud Migration Center during their normal operation.
- This document addresses concerns and questions about installing the Migration Center discovery client in data centers.
- The communication happens through a service account with the roles/migrationcenter.discoveryClient role binding.

