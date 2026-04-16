---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.035Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable Java client library"
feature_slug: "cloud-bigtable-java-client-library"
latest_feature_date: "2019-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient"
keywords:
  - "java"
  - "library"
  - "generally"
  - "client"
  - "available"
  - "beta"
  - "became"
---

# Cloud Bigtable Java client library

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

The Cloud Bigtable client library for Java became generally available; The Cloud Bigtable Java client library became available in beta.

## Extended Definition

The Cloud Bigtable client library for Java became generally available; The Cloud Bigtable Java client library became available in beta.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient)

## Supporting Pages

### "Class BigtableInstanceAdminClient (2.74.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient)
- Source ID: `site-java-reference`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample code: ApiFuture<Cluster> clustersFuture = client . listClustersAsync ( "my-instance" ); ApiFutures . addCallback ( clustersFuture , new ApiFutureCallback<List<Cluster> > () { public void onFailure ( Throwable t ) { if ( t instanceof PartialListClustersException ) { PartialListClustersException partialError = ( PartialListClustersException ) t ; System . out . println ( "The following zones are unavailable: " + partialError . getUnavailableZones ()); System . out . println ( "But the following clusters are reachable: " + partialError . getClusters ()); } else { t . printStackTrace (); } } public void onSuccess ( List<Cluster> result ) { System . out . println ( "Found a complete set of instances: " + result ); } }, MoreExecutors . directExecutor ()); Parameter Name Description instanceId String Returns Type Description ApiFuture < List < Cluster >> listInstances() public List<Instance> listInstances () Lists all of the instances in the current project.
- Sample code: ApiFuture<Instance> instancesFuture = client . listInstancesAsync (); ApiFutures . addCallback ( instancesFuture , new ApiFutureCallback<List<Instance> > () { public void onFailure ( Throwable t ) { if ( t instanceof PartialListInstancesException ) { PartialListInstancesException partialError = ( PartialListInstancesException ) t ; System . out . println ( "The following zones are unavailable: " + partialError . getUnavailableZones ()); System . out . println ( "But the following instances are reachable: " + partialError . getInstances ()); } else { t . printStackTrace (); } } public void onSuccess ( List<Instance> result ) { System . out . println ( "Found a complete set of instances: " + result ); } }, MoreExecutors . directExecutor ()); Returns Type Description ApiFuture < List < Instance >> listLogicalViews(String instanceId) public List<LogicalView> listLogicalViews ( String instanceId ) Lists all logical views of the specified instance.
- Sample code: try { List<Cluster> clusters = client . listClusters ( "my-instance" ); } catch ( PartialListClustersException e ) { System . out . println ( "The following zones are unavailable: " + e . getUnavailableZones ()); System . out . println ( "But the following clusters are reachable: " + e . getClusters ()) } Parameter Name Description instanceId String Returns Type Description List < Cluster > listClustersAsync(String instanceId) public ApiFuture<List<Cluster> > listClustersAsync ( String instanceId ) Asynchronously lists all clusters in the specified instance.
- Builder settingsBuilder = BigtableInstanceAdminSettings . newBuilder () . setProjectId ( "my-project" ); settingsBuilder . stubSettings () . setEndpoint ( myEndpoint ); BigtableInstanceAdminClient client = BigtableInstanceAdminClient . create ( settingsBuilder . build ()); Inheritance java.lang.Object > BigtableInstanceAdminClient Static Methods create(BigtableInstanceAdminSettings settings) public static BigtableInstanceAdminClient create ( BigtableInstanceAdminSettings settings ) Constructs an instance of BigtableInstanceAdminClient with the given settings.

### "Class BigtableTableAdminClient (2.74.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableTableAdminClient)
- Source ID: `site-java-reference`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample code: ApiFuture<Table> modifiedTableFuture = client . modifyFamiliesAsync ( ModifyColumnFamiliesRequest . of ( tableId ) . addFamily ( "cf1" ) . addFamily ( "cf2" , GCRULES . maxAge ( Duration . ofSeconds ( 1000 , 20000 ))) . updateFamily ( "cf3" , GCRULES . union () . rule ( GCRULES . maxAge ( Duration . ofSeconds ( 100 ))) . rule ( GCRULES . maxVersions ( 1 )) ) . addFamily ( "cf4" , GCRULES . intersection () . rule ( GCRULES . maxAge ( Duration . ofSeconds ( 2000 ))) . rule ( GCRULES . maxVersions ( 10 )) ) . dropFamily ( "cf5" ) ); ApiFutures . addCallback ( modifiedTableFuture , new ApiFutureCallback<Table> () { public void onSuccess ( Table table ) { System . out . println ( "Modified table: " + table . getTableName ()); System . out . println ( "Resulting families:" ); for ( ColumnFamily cf : modifiedTable . getColumnFamilies ()) { System . out . println ( cf . getId ()); } } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor () ); See Also: ModifyColumnFamiliesRequestfor available options.
- Sample code: CreateAuthorizedViewRequest request = CreateAuthorizedViewRequest . of ( "my-table" , "my-new-authorized-view" ) . setDeletionProtection ( true ) . setAuthorizedViewType ( SubsetView . create () . addRowPrefix ( "row#" ) . addFamilySubsets ( "my-family" , FamilySubsets . create (). addQualifier ( "column" ))); ApiFuture<AuthorizedView> future = client . createAuthorizedViewAsync ( request ); ApiFutures . addCallback ( future , new ApiFutureCallback<AuthorizedView> () { public void onSuccess ( AuthorizedView authorizedView ) { System . out . println ( "Successfully created the authorized view: " + authorizedView . getId ()); } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor () ); See Also: CreateAuthorizedViewRequestfor available options.
- Sample code: CreateSchemaBundleRequest request = CreateSchemaBundleRequest . of ( "my-table" , "my-new-schema-bundle" ) . setDeletionProtection ( true ) . setSchemaBundleType ( SubsetView . create () . addRowPrefix ( "row#" ) . addFamilySubsets ( "my-family" , FamilySubsets . create (). addQualifier ( "column" ))); ApiFuture<SchemaBundle> future = client . createSchemaBundleAsync ( request ); ApiFutures . addCallback ( future , new ApiFutureCallback<SchemaBundle> () { public void onSuccess ( SchemaBundle schemaBundle ) { System . out . println ( "Successfully created the schema bundle: " + schemaBundle . getId ()); } public void onFailure ( Throwable t ) { t . printStackTrace (); } }, MoreExecutors . directExecutor ()); See Also: CreateSchemaBundleRequestfor available options.
- Sample code: Table modifiedTable = client . modifyFamilies ( ModifyColumnFamiliesRequest . of ( tableId ) . addFamily ( "cf1" ) . addFamily ( "cf2" , GCRULES . maxAge ( Duration . ofSeconds ( 1000 , 20000 ))) . updateFamily ( "cf3" , GCRULES . union () . rule ( GCRULES . maxAge ( Duration . ofSeconds ( 100 ))) . rule ( GCRULES . maxVersions ( 1 )) ) . addFamily ( "cf4" , GCRULES . intersection () . rule ( GCRULES . maxAge ( Duration . ofSeconds ( 2000 ))) . rule ( GCRULES . maxVersions ( 10 )) ) . dropFamily ( "cf5" ) ); System . out . println ( "Resulting families:" ); for ( ColumnFamily cf : modifiedTable . getColumnFamilies ()) { System . out . println ( cf . getId ()); } See Also: ModifyColumnFamiliesRequestfor available options.

### "google-cloud-bigtable overview (2.74.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview)
- Source ID: `site-java-reference`
- Final score: 143
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Managing Library Versions We recommend using the com.google.cloud:libraries-bom installation method detailed above to streamline dependency management across multiple Cloud Java client libraries.
- Choosing the Right Version ID Each Cloud Java client library may contain packages tied to specific Version IDs (e.g., v1 , v2alpha ).
- Cloud Bigtable Product Reference GitHub Repository Maven artifact Getting Started In order to use this library, you first need to go through the following steps: Install a JDK (Java Development Kit) Select or create a Cloud Platform project Enable billing for your project Enable the API Set up authentication Use the Cloud Bigtable for Java To ensure that your project uses compatible versions of the libraries and their component artifacts, import com.google.cloud:libraries-bom and use the BOM to specify dependency versions.
- Understanding Version ID and Library Versions When using a Cloud client library, it's important to distinguish between two types of versions: Library Version : The version of the software package (the client library) that helps you interact with the Cloud service.

