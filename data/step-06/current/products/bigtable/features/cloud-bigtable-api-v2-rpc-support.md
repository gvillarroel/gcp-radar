---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.416Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable API v2 RPC support"
feature_slug: "cloud-bigtable-api-v2-rpc-support"
latest_feature_date: "2016-06-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
keywords:
  - "rpc"
  - "offers"
  - "v2"
  - "version"
  - "api"
  - "bigtable"
  - "of"
  - "now"
---

# Cloud Bigtable API v2 RPC support

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Cloud Bigtable now offers version 2 of its RPC API, enabling custom gRPC clients for both the Data API and Admin API.

## Extended Definition

Cloud Bigtable now offers version 2 of its RPC API, enabling custom gRPC clients for both the Data API and Admin API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)

## Supporting Pages

### "Class BigtableTableAdminAsyncClient (2.35.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Request message for google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange][google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange] retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The request for RestoreTable][google.bigtable.admin.v2.BigtableTableAdmin.RestoreTable] . retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 async def sample restore table(): Create a client client = admin v2.BigtableTableAdminAsyncClient() Initialize request argument(s) request = admin v2.RestoreTableRequest( backup="backup value", parent="parent value", table id="table id value", ) Make the request operation = await client.restore table(request=request) print("Waiting for operation to complete...") response = await operation.result() Handle the response print(response) Handle LRO2 optimize operation = await operation.optimize restore table operation() if optimize operation: print("Waiting for table optimization to complete...") response = await optimize operation.result() Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.RestoreTableRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 async def sample wait for consistency(): Create a client client = admin v2.BigtableTableAdminAsyncClient() Initialize request argument(s) request = admin v2.WaitForConsistencyRequest( name="name value", ) Make the request print("Waiting for operation to complete...") response = await client.wait for replication(request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.bigtable admin v2.overlay.types.WaitForConsistencyRequest , dict] The request object. name str Required.

### "Class BigtableTableAdminClient (2.35.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
- Source ID: `site-python-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Request message for google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange][google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange] retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The request for RestoreTable][google.bigtable.admin.v2.BigtableTableAdmin.RestoreTable] . retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 def sample restore table(): Create a client client = admin v2.BigtableTableAdminClient() Initialize request argument(s) request = admin v2.RestoreTableRequest( backup="backup value", parent="parent value", table id="table id value", ) Make the request operation = client.restore table(request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Handle LRO2 optimize operation = operation.optimize restore table operation() if optimize operation: print("Waiting for table optimization to complete...") response = optimize operation.result() Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.RestoreTableRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 def sample wait for consistency(): Create a client client = admin v2.BigtableTableAdminClient() Initialize request argument(s) request = admin v2.WaitForConsistencyRequest( name="name value", ) Make the request print("Waiting for operation to complete...") response = client.wait for replication(request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.bigtable admin v2.overlay.types.WaitForConsistencyRequest , dict] The request object. name str Required.

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Node.js Changes for @google-cloud/bigtable 5.1.1 (2024-07-11) Bug Fixes Ensure that during resumption of a scan, rows that have not been observed by the caller are re-requested ( #1444 ) ( 2d8de32 ) Remove custom readrows retry logic and rely on gax for retries ( #1422 ) ( 3e0a46e ) Java Changes for google-cloud-bigtable 2.40.0 (2024-06-28) Features Add String type with Utf8Raw encoding to Bigtable API ( #2191 ) ( e7f03fc ) Bug Fixes Add getServiceName() to EnhancedBigTableStubSettings ( #2256 ) ( da703db ) Remove grpclb ( #2033 ) ( 7355375 ) Dependencies Update dependency com.google.truth.extensions:truth-proto-extension to v1.4.3 ( #2268 ) ( 4573220 ) Update dependency org.junit.vintage:junit-vintage-engine to v5.10.3 ( #2269 ) ( 69fef96 ) Update shared dependencies ( #2265 ) ( 61014ca ) June 17, 2024 Feature The Python client library for Bigtable now offers an asynchronous API for use with asynchronous applications.
- For instances created before June 29, 2016, the instance ID is identical to the cluster ID. (There is one exception to this rule: If you had multiple clusters with the same ID before June 29, 2016, your instance IDs will end with -1 , -2 , and so on, so that each instance has a unique ID.) Feature V2 of the Cloud Bigtable RPC API is now available.
- Java Changes for google-cloud-bigtable 2.48.0 (2024-11-19) Features Enable trailer optimization by default ( #2421 ) ( 7b2c4e4 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.50.0 ( 6b35b47 ) Make client side metrics tag in sync with server ( #2401 ) ( bba4183 ) Dependencies Revert downgrade grpc to 1.67.1 #2366 ( #2414 ) ( 710fa52 ) Update dependency com.google.cloud:gapic-libraries-bom to v1.48.0 ( #2422 ) ( 2088a39 ) Update sdk-platform-java dependencies ( #2418 ) ( c12bb01 ) November 18, 2024 Feature You can now create a Data Boost app profile and view Data Boost metrics in the Google Cloud console.
- July 25, 2017 Feature V2 of the Cloud Bigtable REST Admin API is now available.

