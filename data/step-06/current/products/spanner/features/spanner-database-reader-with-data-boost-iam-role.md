---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.204Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Database Reader with Data Boost IAM role"
feature_slug: "spanner-database-reader-with-data-boost-iam-role"
latest_feature_date: "2024-12-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
keywords:
  - "reader"
  - "predefined"
  - "boost"
  - "role"
  - "named"
  - "database"
---

# Spanner Database Reader with Data Boost IAM role

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

A predefined IAM role named Spanner Database Reader with Data Boost is introduced to allow querying Spanner databases using Data Boost.

## Extended Definition

A predefined IAM role named Spanner Database Reader with Data Boost is introduced to allow querying Spanner databases using Data Boost.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)

## Supporting Pages

### "Class DatabaseAdminClient (3.63.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)
- Source ID: `site-python-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.
- A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.
- The result type for the operation will be Database A Cloud Spanner database. crypto key path crypto key path ( project : str , location : str , key ring : str , crypto key : str ) - > str Returns a fully-qualified crypto key string. crypto key version path crypto key version path ( project : str , location : str , key ring : str , crypto key : str , crypto key version : str ) - > str Returns a fully-qualified crypto key version string. database path database path ( project : str , instance : str , database : str ) - > str Returns a fully-qualified database string. database role path database role path ( project : str , instance : str , database : str , role : str ) - > str Returns a fully-qualified database role string. delete backup delete backup ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 def sample list database roles(): Create a client client = spanner admin database v1.

### "Class DatabaseAdminAsyncClient (3.63.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 141
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.
- A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.
- The result type for the operation will be Database A Cloud Spanner database. crypto key path crypto key path ( project : str , location : str , key ring : str , crypto key : str ) - > str Returns a fully-qualified crypto key string. crypto key version path crypto key version path ( project : str , location : str , key ring : str , crypto key : str , crypto key version : str ) - > str Returns a fully-qualified crypto key version string. database path database path ( project : str , instance : str , database : str ) - > str Returns a fully-qualified database string. database role path database role path ( project : str , instance : str , database : str , role : str ) - > str Returns a fully-qualified database role string. delete backup delete backup ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 async def sample list database roles(): Create a client client = spanner admin database v1.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Row filtering in information schema tables Principals with database-level IAM permissions and principals who have been granted access to the spanner info reader system role (or to members of that role) can see all rows in all information schema tables.
- Principals with database-level IAM permissions and principals who have been granted access to the spanner info reader system role or to members of that role can see all rows in this view.
- Principals with database-level IAM permissions and principals who have been granted access to the spanner info reader system role or to members of that role can see all rows in this view.
- Principals with database-level IAM permissions and principals who have been granted access to the spanner info reader system role or to members of that role can see all rows in this view.

