---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.075Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "Service account key renewal"
feature_slug: "service-account-key-renewal"
latest_feature_date: "2025-01-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient"
  - "https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security"
  - "https://docs.cloud.google.com/migration-center/docs/migration-center-overview"
keywords:
  - "account"
  - "key"
  - "renewal"
  - "migration"
  - "center"
  - "lets"
  - "you"
  - "manually"
---

# Service account key renewal

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center lets you manually renew the service account key used for authentication.

## Extended Definition

Migration Center lets you manually renew the service account key used for authentication.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- [https://docs.cloud.google.com/migration-center/docs/migration-center-overview](https://docs.cloud.google.com/migration-center/docs/migration-center-overview)

## Supporting Pages

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 269
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description MigrationCenterAsyncClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description MigrationCenterAsyncClient The constructed client. from service account info from service account info ( info : dict , args , kwargs ) Creates an instance of this client using the provided credentials info.
- Home Documentation Developer tools Python Client libraries Send feedback Class MigrationCenterAsyncClient (0.4.0) Stay organized with collections Save and categorize content based on your preferences.
- Returns Type Description google.cloud.migrationcenter v1.types.Asset An asset represents a resource in your environment.

### "Class MigrationCenterClient (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterClient)
- Source ID: `site-python-reference`
- Final score: 269
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description MigrationCenterClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description MigrationCenterClient The constructed client. from service account info from service account info ( info : dict , args , kwargs ) Creates an instance of this client using the provided credentials info.
- Home Documentation Developer tools Python Client libraries Send feedback Class MigrationCenterClient (0.4.0) Stay organized with collections Save and categorize content based on your preferences.
- Returns Type Description google.cloud.migrationcenter v1.types.Asset An asset represents a resource in your environment.

### "Discovery client data collection and security \_|\_ Migration Center \_\

- URL: [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Migration Migration Center Resources Send feedback Discovery client data collection and security Stay organized with collections Save and categorize content based on your preferences.
- The communication happens through a service account with the roles/migrationcenter.discoveryClient role binding.
- The service account private key is encrypted on the discovery client machine using the encryption mechanism described in the following section.
- Communication with Google Cloud Registered discovery clients communicate with Google Cloud Migration Center during their normal operation.

### Migration Center overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/migration-center-overview](https://docs.cloud.google.com/migration-center/docs/migration-center-overview)
- Source ID: `site-api-reference`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Estimate your cloud costs Migration Center lets you generate a rapid cost estimate of future Google Cloud costs based on the size and configuration of your current on-premises or other cloud environment resources ( Preview ).
- By automating as much of this as possible with Migration Center, it saves your organization time and energy that would otherwise be spent collecting this data manually.
- However, if you don't want automatic data collection for your assets, you can also choose to manually upload your infrastructure data into Migration Center.
- With features like cloud spend estimation, asset discovery of your current environment, and a variety of tooling for different migration scenarios, Migration Center provides you with what you need for your migration.

