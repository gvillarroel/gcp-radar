---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:35.135Z"
product_name: "Database Center"
product_slug: "database-center"
feature_name: "Customized dashboard views"
feature_slug: "customized-dashboard-views"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-center/docs/dashboard-views"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient"
  - "https://docs.cloud.google.com/database-center/docs/customize-database-fleet-view"
keywords:
  - "customized"
  - "dashboard"
  - "views"
  - "database"
  - "center"
  - "lets"
  - "users"
  - "create"
---

# Customized dashboard views

Product: Database Center
Coverage: MEDIUM

## Step 02 Summary

Database Center lets users create personal or shared dashboard views filtered to selected health issues.

## Extended Definition

Database Center lets users create personal or shared dashboard views filtered to selected health issues.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-center/docs/dashboard-views](https://docs.cloud.google.com/database-center/docs/dashboard-views)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient)
- [https://docs.cloud.google.com/database-center/docs/customize-database-fleet-view](https://docs.cloud.google.com/database-center/docs/customize-database-fleet-view)

## Supporting Pages

### "Create customized dashboard views \_|\_ Database Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/database-center/docs/dashboard-views](https://docs.cloud.google.com/database-center/docs/dashboard-views)
- Source ID: `site-docs-root`
- Final score: 353
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Database Center Guides Send feedback Create customized dashboard views Stay organized with collections Save and categorize content based on your preferences.
- Database Center lets you create a customized dashboard view that shows only the health issues in your database fleet that you want to see.
- To create a dashboard view, do the following: In the Google Cloud console, go to the Database Center page.
- Database Center Do one of the following: Click View drop-down menu to see the customized dashboards.

### "Class DatabaseCenterAsyncClient (0.7.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.databasecenter v1beta.types.AggregateIssueStatsResponse The response message containing one of more group of relevant health issues for database resources. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta async def sample query database resource groups(): Create a client client = databasecenter v1beta .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta async def sample aggregate issue stats(): Create a client client = databasecenter v1beta .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta async def sample aggregate fleet(): Create a client client = databasecenter v1beta .

### "Class DatabaseCenterClient (0.7.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient)
- Source ID: `site-python-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.databasecenter v1beta.types.AggregateIssueStatsResponse The response message containing one of more group of relevant health issues for database resources. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta def sample query database resource groups(): Create a client client = databasecenter v1beta .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta def sample aggregate issue stats(): Create a client client = databasecenter v1beta .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta def sample aggregate fleet(): Create a client client = databasecenter v1beta .

### "Customize your database fleet view \_|\_ Database Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/database-center/docs/customize-database-fleet-view](https://docs.cloud.google.com/database-center/docs/customize-database-fleet-view)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Select the following information, which affects the information that's displayed on the Overview and All Resources in the Database Center dashboard: Projects: You can select Google Cloud projects when the scope is at an organization level.
- Database Center When you open Database Center for the first time, the dashboard displays all available databases, database resources, health issues, and database issues for your selected scope.
- To remove health issues from the Database Center dashboard, follow these steps: In the Google Cloud console, go to the Database Center page.
- The health issues that you cleared are no longer displayed in your Database Center dashboard.

