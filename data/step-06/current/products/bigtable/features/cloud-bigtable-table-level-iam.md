---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.033Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable table-level IAM"
feature_slug: "cloud-bigtable-table-level-iam"
latest_feature_date: "2019-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient"
keywords:
  - "controls"
  - "added"
  - "availability"
  - "level"
  - "table"
---

# Cloud Bigtable table-level IAM

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Cloud Bigtable added general availability of table-level IAM controls.

## Extended Definition

Cloud Bigtable added general availability of table-level IAM controls.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Cassandra provides fault tolerance through availability levels that are correlated with the tunable consistency level, allowing a cluster to serve clients while one or more nodes are impaired.
- Bigtable's Identity and Access Management (IAM) controls are fully integrated with Google Cloud, and tables can also be used as an external data source from BigQuery.
- Because Bloom filters never provide a false negative, all the qualifying SSTables are added to a candidate list to be included in further read result processing.
- The Bigtable Google Cloud console page comes with prebuilt dashboards for tracking throughput and utilization metrics at the instance, cluster, and table levels.

### "Class BigtableTableAdminAsyncClient (2.35.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. snapshot path snapshot path ( project : str , instance : str , cluster : str , snapshot : str ) - > str Returns a fully-qualified snapshot string. snapshot table snapshot table ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 async def sample restore table(): Create a client client = admin v2.BigtableTableAdminAsyncClient() Initialize request argument(s) request = admin v2.RestoreTableRequest( backup="backup value", parent="parent value", table id="table id value", ) Make the request operation = await client.restore table(request=request) print("Waiting for operation to complete...") response = await operation.result() Handle the response print(response) Handle LRO2 optimize operation = await operation.optimize restore table operation() if optimize operation: print("Waiting for table optimization to complete...") response = await optimize operation.result() Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.RestoreTableRequest , dict] The request object.
- Returns Type Description google.cloud.bigtable admin v2.types.CheckConsistencyResponse Response message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency][google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency] cluster path cluster path ( project : str , instance : str , cluster : str ) - > str Returns a fully-qualified cluster string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. copy backup copy backup ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 async def sample wait for consistency(): Create a client client = admin v2.BigtableTableAdminAsyncClient() Initialize request argument(s) request = admin v2.WaitForConsistencyRequest( name="name value", ) Make the request print("Waiting for operation to complete...") response = await client.wait for replication(request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.bigtable admin v2.overlay.types.WaitForConsistencyRequest , dict] The request object. name str Required.

### "Class BigtableTableAdminClient (2.35.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
- Source ID: `site-python-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. snapshot path snapshot path ( project : str , instance : str , cluster : str , snapshot : str ) - > str Returns a fully-qualified snapshot string. snapshot table snapshot table ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 def sample restore table(): Create a client client = admin v2.BigtableTableAdminClient() Initialize request argument(s) request = admin v2.RestoreTableRequest( backup="backup value", parent="parent value", table id="table id value", ) Make the request operation = client.restore table(request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Handle LRO2 optimize operation = operation.optimize restore table operation() if optimize operation: print("Waiting for table optimization to complete...") response = optimize operation.result() Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.RestoreTableRequest , dict] The request object.
- Returns Type Description google.cloud.bigtable admin v2.types.CheckConsistencyResponse Response message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency][google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency] cluster path cluster path ( project : str , instance : str , cluster : str ) - > str Returns a fully-qualified cluster string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. copy backup copy backup ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 def sample wait for consistency(): Create a client client = admin v2.BigtableTableAdminClient() Initialize request argument(s) request = admin v2.WaitForConsistencyRequest( name="name value", ) Make the request print("Waiting for operation to complete...") response = client.wait for replication(request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.bigtable admin v2.overlay.types.WaitForConsistencyRequest , dict] The request object. name str Required.

