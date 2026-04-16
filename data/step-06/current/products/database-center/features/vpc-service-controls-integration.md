---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:35.136Z"
product_name: "Database Center"
product_slug: "database-center"
feature_name: "VPC Service Controls integration"
feature_slug: "vpc-service-controls-integration"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-center/docs/configure-vpc-service-controls"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient"
  - "https://docs.cloud.google.com/database-center/docs/alerts"
keywords:
  - "vpc"
  - "controls"
  - "integration"
  - "database"
  - "center"
  - "integrates"
  - "with"
  - "to"
---

# VPC Service Controls integration

Product: Database Center
Coverage: MEDIUM

## Step 02 Summary

Database Center integrates with VPC Service Controls to protect database fleet resources with service perimeters.

## Extended Definition

Database Center integrates with VPC Service Controls to protect database fleet resources with service perimeters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-center/docs/configure-vpc-service-controls](https://docs.cloud.google.com/database-center/docs/configure-vpc-service-controls)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient)
- [https://docs.cloud.google.com/database-center/docs/alerts](https://docs.cloud.google.com/database-center/docs/alerts)

## Supporting Pages

### "Configure VPC Service Controls \_|\_ Database Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/database-center/docs/configure-vpc-service-controls](https://docs.cloud.google.com/database-center/docs/configure-vpc-service-controls)
- Source ID: `site-docs-root`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how to configure Database Center with VPC Service Controls, a Google Cloud feature to secure data and resources.
- How to secure Database Center service using VPC Service Controls Configuring VPC Service Controls for Database Center project includes the following steps: Create and manage a service perimeter .
- Home Documentation Databases Database Center Guides Send feedback Configure VPC Service Controls Stay organized with collections Save and categorize content based on your preferences.
- Review limitations when using VPC Service Controls with Database Center.

### "Class DatabaseCenterAsyncClient (0.7.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class DatabaseCenterAsyncClient (0.7.0) Stay organized with collections Save and categorize content based on your preferences.
- If a Callable is given, it will be called with the same set of initialization arguments as used in the DatabaseCenterTransport constructor.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta async def sample query database resource groups(): Create a client client = databasecenter v1beta .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta async def sample aggregate issue stats(): Create a client client = databasecenter v1beta .

### "Class DatabaseCenterClient (0.7.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient)
- Source ID: `site-python-reference`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class DatabaseCenterClient (0.7.0) Stay organized with collections Save and categorize content based on your preferences.
- If a Callable is given, it will be called with the same set of initialization arguments as used in the DatabaseCenterTransport constructor.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta def sample query database resource groups(): Create a client client = databasecenter v1beta .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta def sample aggregate issue stats(): Create a client client = databasecenter v1beta .

### "Monitor your database fleet with alerting policies \_|\_ Database Center\

- URL: [https://docs.cloud.google.com/database-center/docs/alerts](https://docs.cloud.google.com/database-center/docs/alerts)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Database Center Guides Send feedback Monitor your database fleet with alerting policies Stay organized with collections Save and categorize content based on your preferences.
- Preview — Monitoring your database fleet in Database Center This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- To see the alerting policies configured for your Google Cloud project and the incidents they create, do the following: In the Google Cloud console, go to the Database Center page.
- Before you begin Complete the following in the Google Cloud project that stores your alerting policies: Ensure that Database Center is set up for your organization .

