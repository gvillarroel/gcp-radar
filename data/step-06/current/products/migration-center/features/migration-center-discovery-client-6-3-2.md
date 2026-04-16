---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.084Z"
product_name: "Migration Center"
product_slug: "migration-center"
feature_name: "Migration Center discovery client 6.3.2"
feature_slug: "migration-center-discovery-client-6-3-2"
latest_feature_date: "2024-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security"
  - "https://docs.cloud.google.com/migration-center/docs/start-asset-discovery"
  - "https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.discoveryClients"
  - "https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient"
keywords:
  - "migration"
  - "center"
  - "discovery"
  - "client"
  - "version"
  - "is"
  - "available"
  - "with"
---

# Migration Center discovery client 6.3.2

Product: Migration Center
Coverage: MEDIUM

## Step 02 Summary

Migration Center discovery client version 6.3.2 is available with new features and bug fixes.

## Extended Definition

Migration Center discovery client version 6.3.2 is available with new features and bug fixes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- [https://docs.cloud.google.com/migration-center/docs/start-asset-discovery](https://docs.cloud.google.com/migration-center/docs/start-asset-discovery)
- [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.discoveryClients](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.discoveryClients)
- [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)

## Supporting Pages

### "Discovery client data collection and security \_|\_ Migration Center \_\

- URL: [https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security](https://docs.cloud.google.com/migration-center/docs/discovery-client-data-and-security)
- Source ID: `site-docs-root`
- Final score: 320
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Migration Migration Center Resources Send feedback Discovery client data collection and security Stay organized with collections Save and categorize content based on your preferences.
- Communication with Google Cloud Registered discovery clients communicate with Google Cloud Migration Center during their normal operation.
- The communication happens through a service account with the roles/migrationcenter.discoveryClient role binding.
- This document addresses concerns and questions about installing the Migration Center discovery client in data centers.

### Start an asset discovery \_|\_ Migration Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migration-center/docs/start-asset-discovery](https://docs.cloud.google.com/migration-center/docs/start-asset-discovery)
- Source ID: `site-docs-root`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn how data collection works with the mcdc CLI, see Migration Center discovery client CLI overview .
- Collected environment Collection method Automated (one-time) Automated (continuous) Manual collection and import Virtual machines on vCenter mcdc CLI Discovery client Upload RVTools data Virtual machines on other hypervisors mcdc CLI 1 Discovery client Manually create and upload data tables Physical servers mcdc CLI 1 Discovery client Manually create and upload data tables AWS EC2s mcdc CLI Discovery client 2 Not available AWS assets mcdc CLI Not available Not available Azure virtual machines ( Preview) mcdc CLI Discovery client 2 Not available Databases mcdc CLI Not available Discover and import databases 1 Use the mcdc CLI for Windows if you need to collect data directly from Windows hosts.
- Home Documentation Migration Migration Center Guides Send feedback Start an asset discovery Stay organized with collections Save and categorize content based on your preferences.
- To perform an automated one-time collection, download and run the Migration Center discovery client CLI, then scan your infrastructure.

### "REST Resource: projects.locations.discoveryClients \_|\_ Migration Center\

- URL: [https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.discoveryClients](https://docs.cloud.google.com/migration-center/docs/reference/rest/v1/projects.locations.discoveryClients)
- Source ID: `site-api-reference`
- Final score: 300
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Migration Migration Center Reference Send feedback REST Resource: projects.locations.discoveryClients Stay organized with collections Save and categorize content based on your preferences.
- Resource: DiscoveryClient JSON representation State Methods Resource: DiscoveryClient Represents an installed Migration Center Discovery Client instance.
- Full name of the source object associated with this discovery client. service Account string Required.
- Current state of the discovery client. version string Output only.

### "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 299
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 async def sample remove assets from group(): Create a client client = migrationcenter v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 async def sample aggregate assets values(): Create a client client = migrationcenter v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 async def sample create import data file(): Create a client client = migrationcenter v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import migrationcenter v1 async def sample delete import data file(): Create a client client = migrationcenter v1 .

