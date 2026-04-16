---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.983Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable Kafka sink"
feature_slug: "bigtable-kafka-sink"
latest_feature_date: "2025-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient"
keywords:
  - "connectivity"
  - "direct"
  - "kafka"
  - "sink"
  - "generally"
  - "available"
---

# Bigtable Kafka sink

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

The Bigtable Kafka sink is now generally available for direct connectivity with Google Cloud Managed Service for Apache Kafka.

## Extended Definition

The Bigtable Kafka sink is now generally available for direct connectivity with Google Cloud Managed Service for Apache Kafka.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient)

## Supporting Pages

### Bigtable for Aerospike users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- Source ID: `site-docs-root-2`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Aerospike Bigtable No directly corresponding item. instance : a managed group of clusters in different Google Cloud zones or regions between which replication and connection routing occur. cluster : an Aerospike deployment consisting of a collection of nodes. cluster : a group of nodes in the same geographic Google Cloud zones. node : a server providing compute and owning its storage. node : a server providing compute only.
- No directly corresponding item. column family : The number of column families is unlimited, however more than 100 can cause performance degradation. bin : The number of bins is unlimited, however, each bin can hold not more than 1 MB of data.
- No directly corresponding item. cell : a label for a timestamped value stored in a table. (record) digest : a hash of a three-tuple identifying a record: namespace, set, and key.
- If the node that's responsible for the requested key range is overloaded or temporarily unavailable in a cluster, this profile provides automatic failover.

### "Class BigtableInstanceAdminClient (2.74.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient)
- Source ID: `site-java-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Sample code: ApiFuture<Cluster> clustersFuture = client . listClustersAsync ( "my-instance" ); ApiFutures . addCallback ( clustersFuture , new ApiFutureCallback<List<Cluster> > () { public void onFailure ( Throwable t ) { if ( t instanceof PartialListClustersException ) { PartialListClustersException partialError = ( PartialListClustersException ) t ; System . out . println ( "The following zones are unavailable: " + partialError . getUnavailableZones ()); System . out . println ( "But the following clusters are reachable: " + partialError . getClusters ()); } else { t . printStackTrace (); } } public void onSuccess ( List<Cluster> result ) { System . out . println ( "Found a complete set of instances: " + result ); } }, MoreExecutors . directExecutor ()); Parameter Name Description instanceId String Returns Type Description ApiFuture < List < Cluster >> listInstances() public List<Instance> listInstances () Lists all of the instances in the current project.
- Sample code: ApiFuture<Instance> instancesFuture = client . listInstancesAsync (); ApiFutures . addCallback ( instancesFuture , new ApiFutureCallback<List<Instance> > () { public void onFailure ( Throwable t ) { if ( t instanceof PartialListInstancesException ) { PartialListInstancesException partialError = ( PartialListInstancesException ) t ; System . out . println ( "The following zones are unavailable: " + partialError . getUnavailableZones ()); System . out . println ( "But the following instances are reachable: " + partialError . getInstances ()); } else { t . printStackTrace (); } } public void onSuccess ( List<Instance> result ) { System . out . println ( "Found a complete set of instances: " + result ); } }, MoreExecutors . directExecutor ()); Returns Type Description ApiFuture < List < Instance >> listLogicalViews(String instanceId) public List<LogicalView> listLogicalViews ( String instanceId ) Lists all logical views of the specified instance.
- Sample code: ApiFuture<Policy> newPolicyFuture = client . setIamPolicyAsync ( "my-instance" , Policy . newBuilder () . addIdentity ( Role . of ( "bigtable.user" ), Identity . user ( "someone@example.com" )) . addIdentity ( Role . of ( "bigtable.admin" ), Identity . group ( "admins@example.com" )) . build ()); ApiFutures . addCallback ( policyFuture , new ApiFutureCallback<Policy> () { public void onSuccess ( Policy policy ) { for ( Entry<Role , Set<Identity> > entry : policy . getBindings (). entrySet ()) { System . out . printf ( "Role: %s Identities: %s " , entry . getKey (), entry . getValue ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: Instance-level IAM management Parameters Name Description instanceId String policy com.google.cloud.Policy Returns Type Description ApiFuture < com.google.cloud.Policy > testIamPermission(String instanceId, String[] permissions) public List<String> testIamPermission ( String instanceId , String [] permissions ) Tests whether the caller has the given permissions for the specified instance.
- Sample code: ApiFuture<MaterializedView> existingMaterializedViewFuture = client . getMaterializedViewAsync ( "my-instance" , "my-materialized-view" ); ApiFuture<MaterializedView> updatedMaterializedViewFuture = ApiFutures . transformAsync ( existingMaterializedViewFuture , new ApiAsyncFunction<MaterializedView , MaterializedView > () { public ApiFuture<MaterializedView> apply ( MaterializedView existingMaterializedView ) { return client . updateMaterializedViewAsync ( UpdateMaterializedViewRequest . of ( existingMaterializedView ) . setDeletionProtection ( false ) ); } }, MoreExecutors . directExecutor () ); ApiFuture<MaterializedView> materializedView = updatedMaterializedViewFuture . get (); See Also: UpdateMaterializedViewRequest Parameter Name Description request UpdateMaterializedViewRequest Returns Type Description ApiFuture < MaterializedView > Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Class BigtableTableAdminClient (2.74.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient)
- Source ID: `site-java-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Sample code: ApiFuture<Table> modifiedTableFuture = client . modifyFamiliesAsync ( ModifyColumnFamiliesRequest . of ( tableId ) . addFamily ( "cf1" ) . addFamily ( "cf2" , GCRULES . maxAge ( Duration . ofSeconds ( 1000 , 20000 ))) . updateFamily ( "cf3" , GCRULES . union () . rule ( GCRULES . maxAge ( Duration . ofSeconds ( 100 ))) . rule ( GCRULES . maxVersions ( 1 )) ) . addFamily ( "cf4" , GCRULES . intersection () . rule ( GCRULES . maxAge ( Duration . ofSeconds ( 2000 ))) . rule ( GCRULES . maxVersions ( 10 )) ) . dropFamily ( "cf5" ) ); ApiFutures . addCallback ( modifiedTableFuture , new ApiFutureCallback<Table> () { public void onSuccess ( Table table ) { System . out . println ( "Modified table: " + table . getTableName ()); System . out . println ( "Resulting families:" ); for ( ColumnFamily cf : modifiedTable . getColumnFamilies ()) { System . out . println ( cf . getId ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor () ); See Also: ModifyColumnFamiliesRequestfor available options.
- Sample code: CreateAuthorizedViewRequest request = CreateAuthorizedViewRequest . of ( "my-table" , "my-new-authorized-view" ) . setDeletionProtection ( true ) . setAuthorizedViewType ( SubsetView . create () . addRowPrefix ( "row#" ) . addFamilySubsets ( "my-family" , FamilySubsets . create (). addQualifier ( "column" ))); ApiFuture<AuthorizedView> future = client . createAuthorizedViewAsync ( request ); ApiFutures . addCallback ( future , new ApiFutureCallback<AuthorizedView> () { public void onSuccess ( AuthorizedView authorizedView ) { System . out . println ( "Successfully created the authorized view: " + authorizedView . getId ()); } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor () ); See Also: CreateAuthorizedViewRequestfor available options.
- Sample code: CreateSchemaBundleRequest request = CreateSchemaBundleRequest . of ( "my-table" , "my-new-schema-bundle" ) . setDeletionProtection ( true ) . setSchemaBundleType ( SubsetView . create () . addRowPrefix ( "row#" ) . addFamilySubsets ( "my-family" , FamilySubsets . create (). addQualifier ( "column" ))); ApiFuture<SchemaBundle> future = client . createSchemaBundleAsync ( request ); ApiFutures . addCallback ( future , new ApiFutureCallback<SchemaBundle> () { public void onSuccess ( SchemaBundle schemaBundle ) { System . out . println ( "Successfully created the schema bundle: " + schemaBundle . getId ()); } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: CreateSchemaBundleRequestfor available options.
- Sample code: AuthorizedView existingAuthorizedView = client . getAuthorizedView ( "my-table" , "my-authorized-view" ); UpdateAuthorizedViewRequest request = UpdateAuthorizedViewRequest . of ( existingAuthorizedView ). setDeletionProtection ( true ); ApiFuture<AuthorizedView> future = client . updateAuthorizedViewAsync ( request ); ApiFutures . addCallback ( future , new ApiFutureCallback<AuthorizedView> () { public void onSuccess ( AuthorizedView authorizedView ) { System . out . println ( "Successfully updated the authorized view: " + authorizedView . getId ()); } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor () ); See Also: UpdateAuthorizedViewRequestfor available options.

