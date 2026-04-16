---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.224Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner vector index creation via DDL"
feature_slug: "spanner-vector-index-creation-via-ddl"
latest_feature_date: "2024-07-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/access-with-fgac"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient"
keywords:
  - "creation"
  - "creating"
  - "vector"
  - "index"
  - "supports"
---

# Spanner vector index creation via DDL

Product: Spanner
Coverage: LOW

## Step 02 Summary

Spanner supports creating vector indexes with DDL statements to accelerate similarity and nearest-neighbor queries on large vector datasets.

## Extended Definition

Spanner supports creating vector indexes with DDL statements to accelerate similarity and nearest-neighbor queries on large vector datasets.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/access-with-fgac](https://docs.cloud.google.com/spanner/docs/access-with-fgac)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)

## Supporting Pages

### "Access a database with fine-grained access control \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/access-with-fgac](https://docs.cloud.google.com/spanner/docs/access-with-fgac)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: N/A

### "Class DatabaseAdminAsyncClient (3.63.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- AsyncOperation Updates the schema of a Cloud Spanner database by creating/altering/dropping tables, columns, indexes, etc.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = spanner admin database v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample get iam policy(): Create a client client = spanner admin database v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample set iam policy(): Create a client client = spanner admin database v1.

### "Class DatabaseAdminClient (3.63.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)
- Source ID: `site-python-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Operation Updates the schema of a Cloud Spanner database by creating/altering/dropping tables, columns, indexes, etc.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = spanner admin database v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore def sample get iam policy(): Create a client client = spanner admin database v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 from google.iam.v1 import iam policy pb2 # type: ignore def sample set iam policy(): Create a client client = spanner admin database v1.

