---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.209Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner integration with Database Center"
feature_slug: "spanner-integration-with-database-center"
latest_feature_date: "2024-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient"
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
keywords:
  - "tracked"
  - "fleet"
  - "center"
  - "resources"
  - "integration"
  - "allowing"
  - "database"
---

# Spanner integration with Database Center

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner is supported in Database Center, allowing Spanner resources to be tracked in fleet inventory and the resource table.

## Extended Definition

Spanner is supported in Database Center, allowing Spanner resources to be tracked in fleet inventory and the resource table.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)
- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)

## Supporting Pages

### "Class DatabaseAdminAsyncClient (3.63.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- The result type for the operation will be Database A Cloud Spanner database. crypto key path crypto key path ( project : str , location : str , key ring : str , crypto key : str ) - > str Returns a fully-qualified crypto key string. crypto key version path crypto key version path ( project : str , location : str , key ring : str , crypto key : str , crypto key version : str ) - > str Returns a fully-qualified crypto key version string. database path database path ( project : str , instance : str , database : str ) - > str Returns a fully-qualified database string. database role path database role path ( project : str , instance : str , database : str , role : str ) - > str Returns a fully-qualified database role string. delete backup delete backup ( request : typing .
- Version latest keyboard arrow down 3.63.0 (latest) 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.1 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.1 3.39.0 3.38.0 3.37.0 3.36.0 3.35.1 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.0 3.23.0 3.22.2 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.1 3.14.1 3.13.0 3.12.1 3.11.1 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.1.1 2.0.0 1.19.3 1.18.0 1.17.1 1.16.0 1.15.1 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 DatabaseAdminAsyncClient ( , credentials : typing .
- Returns Type Description google.cloud.spanner admin database v1.types.AddSplitPointsResponse The response for AddSplitPoints][google.spanner.admin.database.v1.DatabaseAdmin.AddSplitPoints] . backup path backup path ( project : str , instance : str , backup : str ) - > str Returns a fully-qualified backup string. backup schedule path backup schedule path ( project : str , instance : str , database : str , schedule : str ) - > str Returns a fully-qualified backup schedule string. cancel operation cancel operation ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = spanner admin database v1.

### "Class DatabaseAdminClient (3.63.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)
- Source ID: `site-python-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- The result type for the operation will be Database A Cloud Spanner database. crypto key path crypto key path ( project : str , location : str , key ring : str , crypto key : str ) - > str Returns a fully-qualified crypto key string. crypto key version path crypto key version path ( project : str , location : str , key ring : str , crypto key : str , crypto key version : str ) - > str Returns a fully-qualified crypto key version string. database path database path ( project : str , instance : str , database : str ) - > str Returns a fully-qualified database string. database role path database role path ( project : str , instance : str , database : str , role : str ) - > str Returns a fully-qualified database role string. delete backup delete backup ( request : typing .
- Version latest keyboard arrow down 3.63.0 (latest) 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.1 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.1 3.39.0 3.38.0 3.37.0 3.36.0 3.35.1 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.0 3.23.0 3.22.2 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.1 3.14.1 3.13.0 3.12.1 3.11.1 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.1.1 2.0.0 1.19.3 1.18.0 1.17.1 1.16.0 1.15.1 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 DatabaseAdminClient ( , credentials : typing .
- Returns Type Description google.cloud.spanner admin database v1.types.AddSplitPointsResponse The response for AddSplitPoints][google.spanner.admin.database.v1.DatabaseAdmin.AddSplitPoints] . backup path backup path ( project : str , instance : str , backup : str ) - > str Returns a fully-qualified backup string. backup schedule path backup schedule path ( project : str , instance : str , database : str , schedule : str ) - > str Returns a fully-qualified backup schedule string. cancel operation cancel operation ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = spanner admin database v1.

### "Create and query a database in the Google Cloud console \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Create an instance with the Google Cloud console When you first use Spanner, you must create an instance, which is an allocation of resources that are used by Spanner databases in that instance.
- If not, enable it manually: Enable Spanner API To get the permissions that you need to create instances and databases, ask your administrator to grant you the Cloud Spanner Admin (roles/spanner.admin) IAM role on your project.
- Home Documentation Databases Spanner Guides Send feedback Create and query a database in the Google Cloud console Stay organized with collections Save and categorize content based on your preferences.
- The Singers table now has two rows: GoogleSQL PostgreSQL Run a query in the Google Cloud console On the database Overview page, click Spanner Studio in the navigation menu.

