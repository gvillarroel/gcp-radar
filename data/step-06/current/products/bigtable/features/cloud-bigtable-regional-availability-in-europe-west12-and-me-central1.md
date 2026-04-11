---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.354Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable regional availability in europe-west12 and me-central1"
feature_slug: "cloud-bigtable-regional-availability-in-europe-west12-and-me-central1"
latest_feature_date: "2023-07-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings.Builder"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
keywords:
  - "west12"
  - "me"
  - "availability"
  - "regional"
  - "europe"
  - "bigtable"
  - "and"
  - "in"
---

# Cloud Bigtable regional availability in europe-west12 and me-central1

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Cloud Bigtable became available in the europe-west12 (Turin) and me-central1 (Doha) regions.

## Extended Definition

Cloud Bigtable became available in the europe-west12 (Turin) and me-central1 (Doha) regions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings.Builder)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)

## Supporting Pages

### "Class BigtableInstanceAdminSettings (2.74.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings)
- Source ID: `site-java-reference`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Java Client libraries Send feedback Class BigtableInstanceAdminSettings (2.74.0) Stay organized with collections Save and categorize content based on your preferences.
- Builder newBuilderForEmulator ( String hostname , int port ) Creates a new builder preconfigured to connect to the Bigtable emulator with host name and port number.
- Builder settingsBuilder = BigtableInstanceAdminSettings . newBuilder () . setProjectId ( "my-project" ); settingsBuilder . stubSettings (). createInstanceSettings () . setRetrySettings ( RetrySettings . newBuilder () . setTotalTimeout ( Duration . ofMinutes ( 15 )) . build ()); BigtableInstanceAdminSettings settings = settingsBuilder . build (); Inheritance java.lang.Object > BigtableInstanceAdminSettings Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods newBuilder() public static BigtableInstanceAdminSettings .
- Returns Type Description BigtableInstanceAdminSettings.Builder toString() public String toString () Returns Type Description String Overrides Object.toString() Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Class BigtableInstanceAdminSettings.Builder (2.74.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Java Client libraries Send feedback Class BigtableInstanceAdminSettings.Builder (2.74.0) Stay organized with collections Save and categorize content based on your preferences.
- Inheritance java.lang.Object > BigtableInstanceAdminSettings.Builder Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods build() public BigtableInstanceAdminSettings build () Builds an instance of the settings.
- Returns Type Description BigtableInstanceAdminStubSettings.Builder Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Parameter Name Description credentialsProvider CredentialsProvider Returns Type Description BigtableInstanceAdminSettings.Builder setProjectId(String projectId) public BigtableInstanceAdminSettings .

### "Class BigtableTableAdminAsyncClient (2.35.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 async def sample restore table(): Create a client client = admin v2.BigtableTableAdminAsyncClient() Initialize request argument(s) request = admin v2.RestoreTableRequest( backup="backup value", parent="parent value", table id="table id value", ) Make the request operation = await client.restore table(request=request) print("Waiting for operation to complete...") response = await operation.result() Handle the response print(response) Handle LRO2 optimize operation = await operation.optimize restore table operation() if optimize operation: print("Waiting for table optimization to complete...") response = await optimize operation.result() Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.RestoreTableRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 async def sample wait for consistency(): Create a client client = admin v2.BigtableTableAdminAsyncClient() Initialize request argument(s) request = admin v2.WaitForConsistencyRequest( name="name value", ) Make the request print("Waiting for operation to complete...") response = await client.wait for replication(request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.bigtable admin v2.overlay.types.WaitForConsistencyRequest , dict] The request object. name str Required.
- CreateTableFromSnapshotRequest ( parent="parent value", table id="table id value", source snapshot="source snapshot value", ) Make the request operation = client. create table from snapshot (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.bigtable admin v2.types.CreateTableFromSnapshotRequest , dict]] The request object.
- CreateSchemaBundleRequest ( parent="parent value", schema bundle id="schema bundle id value", schema bundle=schema bundle, ) Make the request operation = client. create schema bundle (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.bigtable admin v2.types.CreateSchemaBundleRequest , dict]] The request object.

