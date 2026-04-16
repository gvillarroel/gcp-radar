---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.035Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable PHP client library"
feature_slug: "cloud-bigtable-php-client-library"
latest_feature_date: "2019-09-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient"
  - "https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions"
keywords:
  - "provides"
  - "library"
  - "generally"
  - "client"
  - "available"
  - "became"
---

# Cloud Bigtable PHP client library

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

The Cloud Bigtable client library for PHP became generally available; Cloud Bigtable provides a PHP client library for interacting with the service in beta.

## Extended Definition

The Cloud Bigtable client library for PHP became generally available; Cloud Bigtable provides a PHP client library for interacting with the service in beta.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
- [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions)

## Supporting Pages

### "Class BigtableTableAdminAsyncClient (2.35.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Generally, you only need to set this if you're developing your own client library.
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. get mtls endpoint and cert source get mtls endpoint and cert source ( client options : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 async def sample restore table(): Create a client client = admin v2.BigtableTableAdminAsyncClient() Initialize request argument(s) request = admin v2.RestoreTableRequest( backup="backup value", parent="parent value", table id="table id value", ) Make the request operation = await client.restore table(request=request) print("Waiting for operation to complete...") response = await operation.result() Handle the response print(response) Handle LRO2 optimize operation = await operation.optimize restore table operation() if optimize operation: print("Waiting for table optimization to complete...") response = await optimize operation.result() Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.RestoreTableRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 async def sample wait for consistency(): Create a client client = admin v2.BigtableTableAdminAsyncClient() Initialize request argument(s) request = admin v2.WaitForConsistencyRequest( name="name value", ) Make the request print("Waiting for operation to complete...") response = await client.wait for replication(request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.bigtable admin v2.overlay.types.WaitForConsistencyRequest , dict] The request object. name str Required.

### "Class BigtableTableAdminClient (2.35.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
- Source ID: `site-python-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Generally, you only need to set this if you're developing your own client library.
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. get mtls endpoint and cert source get mtls endpoint and cert source ( client options : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 def sample restore table(): Create a client client = admin v2.BigtableTableAdminClient() Initialize request argument(s) request = admin v2.RestoreTableRequest( backup="backup value", parent="parent value", table id="table id value", ) Make the request operation = client.restore table(request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Handle LRO2 optimize operation = operation.optimize restore table operation() if optimize operation: print("Waiting for table optimization to complete...") response = optimize operation.result() Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.RestoreTableRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 def sample wait for consistency(): Create a client client = admin v2.BigtableTableAdminClient() Initialize request argument(s) request = admin v2.WaitForConsistencyRequest( name="name value", ) Make the request print("Waiting for operation to complete...") response = client.wait for replication(request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.bigtable admin v2.overlay.types.WaitForConsistencyRequest , dict] The request object. name str Required.

### Client-side metrics descriptions \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions)
- Source ID: `site-docs-root-2`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supported Bigtable operations ReadRow ReadRows MutateRow MutateRows SampleRowKeys CheckAndMutateRow BulkReadRows BulkMutateRows Type Distribution Available dimensions project ID instance ID table cluster zone app profile ID method name final operation status streaming operation client name Client library support The following table shows the minimum client library versions required to use the operation latencies metric.
- Supported Bigtable operations ReadRow ReadRows MutateRow MutateRows SampleRowKeys CheckAndMutateRow BulkReadRows BulkMutateRows Type Distribution Available dimensions project ID instance ID table cluster zone app profile ID method name attempt status streaming operation client name Client library support The following table shows the minimum client library versions required to use the attempt latencies metric.
- Supported Bigtable operations ReadRow ReadRows MutateRow MutateRows SampleRowKeys CheckAndMutateRow BulkReadRows BulkMutateRows Type Distribution Available dimensions project ID instance ID table cluster zone app profile ID method name attempt status streaming operation client name Client library support The following table shows the minimum client library versions required to use the server latencies metric.
- Supported Bigtable operations ReadRow ReadRows MutateRow MutateRows SampleRowKeys CheckAndMutateRow BulkReadRows BulkMutateRows Type Distribution Available dimensions project ID instance ID table cluster zone app profile ID method name attempt status client name Client library support The following table shows the minimum client library versions required to use the connectivity error count metric.

