---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.386Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable production instance node minimum reduction"
feature_slug: "cloud-bigtable-production-instance-node-minimum-reduction"
latest_feature_date: "2020-03-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
keywords:
  - "reduction"
  - "minimum"
  - "production"
  - "instances"
  - "instance"
  - "bigtable"
  - "node"
  - "now"
---

# Cloud Bigtable production instance node minimum reduction

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Production Cloud Bigtable instances now support one or two nodes per cluster, down from a minimum of three.

## Extended Definition

Production Cloud Bigtable instances now support one or two nodes per cluster, down from a minimum of three.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient)
- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)

## Supporting Pages

### "Class BigtableInstanceAdminClient (2.74.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient)
- Source ID: `site-java-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- 2.74.0 (latest) 2.73.0 2.72.0 2.71.0 2.70.0 2.68.0 2.67.1 2.66.0 2.65.1 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.2 2.56.0 2.54.0 2.52.0 2.51.2 2.49.0 2.46.0 2.45.1 2.44.1 2.43.0 2.42.0 2.40.0 2.39.5 2.37.0 2.35.1 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.1 2.28.0 GitHub Repository Product Reference Client for creating, configuring and deleting Cloud Bigtable instances, app profiles, and clusters.
- Sample code: ApiFuture<Policy> newPolicyFuture = client . setIamPolicyAsync ( "my-instance" , Policy . newBuilder () . addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" )) . addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" )) . build ()); ApiFutures . addCallback ( policyFuture , new ApiFutureCallback<Policy> () { public void onSuccess ( Policy policy ) { for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) { System . out . printf ( "Role: %s Identities: %s " , entry . getKey (), entry . getValue ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Instance-level IAM management Parameters Name Description instanceId String policy com.google.cloud.Policy Returns Type Description ApiFuture < com.google.cloud.Policy > testIamPermission(String instanceId, String[] permissions) public List<String> testIamPermission ( String instanceId , String [] permissions ) Tests whether the caller has the given permissions for the specified instance.
- Sample code: ApiFuture<List<String> > grantedPermissionsFuture = client . testIamPermissionAsync ( "my-instance" , "bigtable.tables.readRows" , "bigtable.tables.mutateRows" ); ApiFutures . addCallback ( grantedPermissionsFuture , new ApiFutureCallback<List<String> > () { public void onSuccess ( List<String> grantedPermissions ) { System . out . println ( "Has read access: " + grantedPermissions . contains ( "bigtable.tables.readRows" )); System . out . println ( "Has write access: " + grantedPermissions . contains ( "bigtable.tables.mutateRows" )); } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Cloud Bigtable permissions Parameters Name Description instanceId String permissions String [] Returns Type Description ApiFuture < List < String >> updateAppProfile(UpdateAppProfileRequest request) public AppProfile updateAppProfile ( UpdateAppProfileRequest request ) Updates an existing app profile.
- Sample code: ApiFuture<Cluster> clustersFuture = client . listClustersAsync ( "my-instance" ); ApiFutures . addCallback ( clustersFuture , new ApiFutureCallback<List<Cluster> > () { public void onFailure ( Throwable t ) { if ( t instanceof PartialListClustersException ) { PartialListClustersException partialError = ( PartialListClustersException ) t ; System . out . println ( "The following zones are unavailable: " + partialError . getUnavailableZones ()); System . out . println ( "But the following clusters are reachable: " + partialError . getClusters ()); } else { t . printStackTrace (); } } public void onSuccess ( List<Cluster> result ) { System . out . println ( "Found a complete set of instances: " + result ); } }, MoreExecutors . directExecutor ()); Parameter Name Description instanceId String Returns Type Description ApiFuture < List < Cluster >> listInstances() public List<Instance> listInstances () Lists all of the instances in the current project.

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Prior to this change, production instances had a minimum of three nodes per cluster, and the only way to create smaller clusters was in a development instance.
- March 19, 2020 Feature You can now create a production Cloud Bigtable instance that has one or two nodes per cluster.
- Node.js Changes for @google-cloud/bigtable 4.0.4 (2022-09-14) Bug Fixes Use grpc-gcp v1.0.0 ( #1156 ) ( 6196424 ) 4.0.3 (2022-09-09) Bug Fixes Update dependency uuid to v9 ( #1152 ) ( dea0425 ) Wait for instances to get created in all samples ( #1149 ) ( c9dd9c6 ) Java Changes for google-cloud-bigtable 2.12.0 (2022-09-15) Features generated: Publish CBT deletion protection field in Table, UpdateTableRequest, and UpdateTable API ( f1f3f05 ) Dependencies Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.4.3 ( #1386 ) ( f460373 ) Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.4.3 ( #1387 ) ( e339cb1 ) Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.4.4 ( #1395 ) ( a2db183 ) Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.0.2 ( #1384 ) ( ee3b256 ) Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.0.3 ( #1393 ) ( df6c6c7 ) September 13, 2022 Feature Cloud Bigtable is available in the me-west1 (Tel Aviv) region.
- February 17, 2025 Libraries Java 2.52.0 (2025-02-14) Features Automated backups are supported in the admin client ( #2472 ) ( 48633e6 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.53.0 ( 47ca299 ) Extend timeouts for check consistency ( 47ca299 ) Dependencies Update dependency com.google.cloud:gapic-libraries-bom to v1.52.0 ( #2490 ) ( ca25d4e ) Update dependency com.google.cloud:sdk-platform-java-config to v3.43.0 ( #2481 ) ( deb1f79 ) February 10, 2025 Libraries Java 2.51.2 (2025-02-03) Bug Fixes Add known conformance test failures ( #2474 ) ( 15488fe ) Dependencies Update shared dependencies ( #2473 ) ( 4d6d419 ) February 03, 2025 Feature Tags data for Bigtable instances is now included in Cloud Billing data, letting you use tagged Bigtable instances to gain visibility into your resource usage and spending.

### "Class BigtableTableAdminAsyncClient (2.35.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.bigtable admin v2.types.CheckConsistencyResponse Response message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency][google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency] cluster path cluster path ( project : str , instance : str , cluster : str ) - > str Returns a fully-qualified cluster string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. copy backup copy backup ( request : typing .
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the schema bundle field on the request instance; if request is provided, this should not be set. update mask google.protobuf.field mask pb2.FieldMask Optional.

