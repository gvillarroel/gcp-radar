---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.036Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable Python client library"
feature_slug: "cloud-bigtable-python-client-library"
latest_feature_date: "2019-09-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/async_data_client"
keywords:
  - "python"
  - "provides"
  - "library"
  - "generally"
  - "client"
  - "available"
  - "became"
---

# Cloud Bigtable Python client library

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

The Cloud Bigtable client library for Python became generally available; Cloud Bigtable provides a Python client library for interacting with the service in beta.

## Extended Definition

The Cloud Bigtable client library for Python became generally available; Cloud Bigtable provides a Python client library for interacting with the service in beta.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/async_data_client](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/async_data_client)

## Supporting Pages

### "Class BigtableTableAdminAsyncClient (2.35.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 185
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Generally, you only need to set this if you're developing your own client library.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 async def sample restore table(): Create a client client = admin v2.BigtableTableAdminAsyncClient() Initialize request argument(s) request = admin v2.RestoreTableRequest( backup="backup value", parent="parent value", table id="table id value", ) Make the request operation = await client.restore table(request=request) print("Waiting for operation to complete...") response = await operation.result() Handle the response print(response) Handle LRO2 optimize operation = await operation.optimize restore table operation() if optimize operation: print("Waiting for table optimization to complete...") response = await optimize operation.result() Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.RestoreTableRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 async def sample wait for consistency(): Create a client client = admin v2.BigtableTableAdminAsyncClient() Initialize request argument(s) request = admin v2.WaitForConsistencyRequest( name="name value", ) Make the request print("Waiting for operation to complete...") response = await client.wait for replication(request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.bigtable admin v2.overlay.types.WaitForConsistencyRequest , dict] The request object. name str Required.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import bigtable admin v2 from google.iam.v1 import iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = bigtable admin v2.

### "Class BigtableTableAdminClient (2.35.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
- Source ID: `site-python-reference`
- Final score: 185
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Generally, you only need to set this if you're developing your own client library.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 def sample restore table(): Create a client client = admin v2.BigtableTableAdminClient() Initialize request argument(s) request = admin v2.RestoreTableRequest( backup="backup value", parent="parent value", table id="table id value", ) Make the request operation = client.restore table(request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Handle LRO2 optimize operation = operation.optimize restore table operation() if optimize operation: print("Waiting for table optimization to complete...") response = optimize operation.result() Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.RestoreTableRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 def sample wait for consistency(): Create a client client = admin v2.BigtableTableAdminClient() Initialize request argument(s) request = admin v2.WaitForConsistencyRequest( name="name value", ) Make the request print("Waiting for operation to complete...") response = client.wait for replication(request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.bigtable admin v2.overlay.types.WaitForConsistencyRequest , dict] The request object. name str Required.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import bigtable admin v2 from google.iam.v1 import iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = bigtable admin v2.

### Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/async_data_client](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/async_data_client)
- Source ID: `site-python-reference`
- Final score: 151
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Version latest keyboard arrow down 2.35.0 (latest) 2.34.0 2.33.0 2.32.0 2.31.0 2.30.1 2.29.0 2.28.1 2.26.0 2.25.0 2.24.0 2.23.1 2.22.0 2.21.0 2.20.0 2.19.0 2.18.1 2.17.0 2.16.0 2.15.0 2.14.1 2.13.2 2.12.0 2.11.3 2.10.1 2.9.0 2.8.1 2.7.1 2.6.0 2.5.2 2.4.0 2.3.3 2.2.0 2.1.0 2.0.0 1.7.3 1.6.1 1.5.1 1.4.0 1.3.0 1.2.1 1.1.0 1.0.0 0.34.0 Bigtable Data Client Async NOTE : It is generally not recommended to use the async client in an otherwise synchronous codebase.
- Defaults to 4 (DeadlineExceeded) and 14 (ServiceUnavailable) Returns a table instance for making data API requests Return type TableAsync Raises RuntimeError – if called outside of an async context (no running event loop) property universe domain( : str Return the universe domain used by the client instance.
- Home Documentation Developer tools Python Client libraries Send feedback Stay organized with collections Save and categorize content based on your preferences.
- When an entry is provided for a PROTO or ENUM column, the client library will attempt to deserialize the raw data.

