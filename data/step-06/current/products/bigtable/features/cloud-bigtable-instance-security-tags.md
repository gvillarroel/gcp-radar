---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.364Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable instance security tags"
feature_slug: "cloud-bigtable-instance-security-tags"
latest_feature_date: "2022-08-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/access-control"
  - "https://docs.cloud.google.com/bigtable/docs/configure-connection-pools"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
keywords:
  - "security"
  - "tags"
  - "that"
  - "instances"
  - "instance"
  - "on"
  - "supports"
  - "bigtable"
---

# Cloud Bigtable instance security tags

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Cloud Bigtable supports tags on instances that can be used to allow or deny security policies.

## Extended Definition

Cloud Bigtable supports tags on instances that can be used to allow or deny security policies.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control)
- [https://docs.cloud.google.com/bigtable/docs/configure-connection-pools](https://docs.cloud.google.com/bigtable/docs/configure-connection-pools)
- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)

## Supporting Pages

### Bigtable access control with IAM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Lowest-level resources where you can grant this role: Table bigtable. bigtable.appProfiles.create bigtable.appProfiles.delete bigtable.appProfiles.get bigtable.appProfiles.list bigtable.appProfiles.update bigtable. authorizedViews. create bigtable. authorizedViews. createTagBinding bigtable. authorizedViews. delete bigtable. authorizedViews. deleteTagBinding bigtable.authorizedViews.get bigtable. authorizedViews. getIamPolicy bigtable.authorizedViews.list bigtable. authorizedViews. listEffectiveTags bigtable. authorizedViews. listTagBindings bigtable. authorizedViews. mutateRows bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable. authorizedViews. setIamPolicy bigtable. authorizedViews. update bigtable.backups.create bigtable.backups.delete bigtable.backups.get bigtable.backups.getIamPolicy bigtable.backups.list bigtable.backups.read bigtable.backups.restore bigtable.backups.setIamPolicy bigtable.backups.update bigtable.clusters.create bigtable.clusters.delete bigtable.clusters.get bigtable.clusters.list bigtable.clusters.update bigtable.hotTablets.list bigtable.instances.create bigtable. instances. createTagBinding bigtable.instances.delete bigtable. instances. deleteTagBinding bigtable. instances. executeQuery bigtable.instances.get bigtable. instances. getIamPolicy bigtable.instances.list bigtable. instances. listEffectiveTags bigtable. instances. listTagBindings bigtable.instances.ping bigtable. instances. setIamPolicy bigtable.instances.update bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.create bigtable.logicalViews.delete bigtable.logicalViews.get bigtable. logicalViews. getIamPolicy bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable. logicalViews. setIamPolicy bigtable.logicalViews.update bigtable. materializedViews. create bigtable. materializedViews. delete bigtable.materializedViews.get bigtable. materializedViews. getIamPolicy bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable. materializedViews. setIamPolicy bigtable. materializedViews. update bigtable.schemaBundles.create bigtable.schemaBundles.delete bigtable.schemaBundles.get bigtable. schemaBundles. getIamPolicy bigtable.schemaBundles.list bigtable. schemaBundles. setIamPolicy bigtable.schemaBundles.update bigtable. tables. checkConsistency bigtable.tables.create bigtable.tables.delete bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.getIamPolicy bigtable.tables.list bigtable.tables.mutateRows bigtable.tables.readRows bigtable.tables.sampleRowKeys bigtable.tables.setIamPolicy bigtable.tables.undelete bigtable.tables.update cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries. monitoring.timeSeries.create monitoring.timeSeries.list resourcemanager.projects.get Bigtable Editor ( roles/ bigtable.editor ) Editor role for bigtable bigtable.appProfiles. bigtable.appProfiles.create bigtable.appProfiles.delete bigtable.appProfiles.get bigtable.appProfiles.list bigtable.appProfiles.update bigtable. authorizedViews. create bigtable. authorizedViews. delete bigtable.authorizedViews.get bigtable. authorizedViews. getIamPolicy bigtable.authorizedViews.list bigtable. authorizedViews. listEffectiveTags bigtable. authorizedViews. listTagBindings bigtable. authorizedViews. mutateRows bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable. authorizedViews. update bigtable.backups.create bigtable.backups.delete bigtable.backups.get bigtable.backups.getIamPolicy bigtable.backups.list bigtable.backups.read bigtable.backups.restore bigtable.backups.update bigtable.clusters. bigtable.clusters.create bigtable.clusters.delete bigtable.clusters.get bigtable.clusters.list bigtable.clusters.update bigtable.hotTablets.list bigtable.instances.create bigtable.instances.delete bigtable. instances. executeQuery bigtable.instances.get bigtable. instances. getIamPolicy bigtable.instances.list bigtable. instances. listEffectiveTags bigtable. instances. listTagBindings bigtable.instances.ping bigtable.instances.update bigtable.keyvisualizer. bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.create bigtable.logicalViews.delete bigtable.logicalViews.get bigtable. logicalViews. getIamPolicy bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable.logicalViews.update bigtable. materializedViews. create bigtable. materializedViews. delete bigtable.materializedViews.get bigtable. materializedViews. getIamPolicy bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable. materializedViews. update bigtable.schemaBundles.create bigtable.schemaBundles.delete bigtable.schemaBundles.get bigtable. schemaBundles. getIamPolicy bigtable.schemaBundles.list bigtable.schemaBundles.update bigtable. tables. checkConsistency bigtable.tables.create bigtable.tables.delete bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.getIamPolicy bigtable.tables.list bigtable.tables.mutateRows bigtable.tables.readRows bigtable.tables.sampleRowKeys bigtable.tables.undelete bigtable.tables.update monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries.list resourcemanager.projects.get resourcemanager.projects.list Bigtable User ( roles/ bigtable.user ) Provides read-write access to the data stored within Bigtable tables.
- Lowest-level resources where you can grant this role: Table bigtable.appProfiles.get bigtable.appProfiles.list bigtable.authorizedViews.get bigtable.authorizedViews.list bigtable. authorizedViews. readRows bigtable. authorizedViews. sampleRowKeys bigtable.backups.get bigtable.backups.list bigtable.clusters.get bigtable.clusters.list bigtable.hotTablets.list bigtable. instances. executeQuery bigtable.instances.get bigtable.instances.list bigtable.instances.ping bigtable.keyvisualizer. bigtable.keyvisualizer.get bigtable.keyvisualizer.list bigtable.locations.list bigtable.logicalViews.get bigtable.logicalViews.list bigtable.logicalViews.readRows bigtable.materializedViews.get bigtable. materializedViews. list bigtable. materializedViews. readRows bigtable. materializedViews. sampleRowKeys bigtable.schemaBundles.get bigtable.schemaBundles.list bigtable. tables. checkConsistency bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.list bigtable.tables.readRows bigtable.tables.sampleRowKeys monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries. monitoring.timeSeries.create monitoring.timeSeries.list resourcemanager.projects.get Custom roles If the predefined roles for Bigtable don't address your business requirements, you can define your own custom roles with permissions that you specify.
- Lowest-level resources where you can grant this role: Table bigtable.appProfiles.get bigtable.appProfiles.list bigtable.authorizedViews.get bigtable.authorizedViews.list bigtable.backups.get bigtable.backups.list bigtable.clusters.get bigtable.clusters.list bigtable.hotTablets.list bigtable.instances.get bigtable.instances.list bigtable. instances. listEffectiveTags bigtable. instances. listTagBindings bigtable.locations.list bigtable.logicalViews.get bigtable.logicalViews.list bigtable.materializedViews.get bigtable. materializedViews. list bigtable.schemaBundles.get bigtable.schemaBundles.list bigtable. tables. checkConsistency bigtable. tables. generateConsistencyToken bigtable.tables.get bigtable.tables.list monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.timeSeries.list resourcemanager.projects.get Bigtable Reader ( roles/ bigtable.reader ) Provides read-only access to the data stored within Bigtable tables.
- The user or service account is granted the roles that you specified at the table level. gcloud If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list If you don't know the instance's table IDs, use the bigtable instances tables list command to view a list of tables in the instance. gcloud bigtable instances tables list --instances = INSTANCE ID Provide the following: INSTANCE ID : The permanent identifier for the instance.

### Configure connection pools \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/configure-connection-pools](https://docs.cloud.google.com/bigtable/docs/configure-connection-pools)
- Source ID: `site-docs-root-2`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Builder settingsBuilder = BigtableDataSettings . newBuilder (). setProjectId ( projectId ). setInstanceId ( instanceId ); settingsBuilder . stubSettings () . setTransportChannelProvider ( EnhancedBigtableStubSettings . defaultGrpcTransportProviderBuilder () . setPoolSize ( 10 ) . build ()); BigtableDataSettings settings = settingsBuilder . build (); try ( BigtableDataClient dataClient = BigtableDataClient . create ( settings )) { InstantiatingGrpcChannelProvider provider = ( InstantiatingGrpcChannelProvider ) settings . getStubSettings (). getTransportChannelProvider (); int poolSize = provider . toBuilder (). getPoolSize (); System . out . println ( String . format ( "Connected with pool size of %d" , poolSize )); } catch ( IOException e ) { System . out . println ( "Error during ConfigureConnectionPool: \n" + e . toString ()); } } } C++ namespace cbt = :: google :: cloud :: bigtable ; namespace gc = :: google :: cloud ; []( std :: string const & project id , std :: string const & instance id , std :: string const & table id ) { auto constexpr kPoolSize = 10 ; auto options = gc :: Options {}. set<gc :: GrpcNumChannelsOption > ( kPoolSize ); cbt :: Table table ( cbt :: MakeDataConnection ( options ), cbt :: TableResource ( project id , instance id , table id )); std :: cout << "Connected with channel pool size of " << kPoolSize << " \n " ; } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Fprintf ( w , "Connected with pool size of %d" , poolSize ) return nil } HBase This sample is applicable only for client library versions earlier than 2.9.1, when automatic resizing was introduced. import static com.google.cloud.bigtable.hbase.BigtableOptionsFactory.BIGTABLE DATA CHANNEL COUNT KEY ; import com.google.cloud.bigtable.hbase.BigtableConfiguration ; import org.apache.hadoop.conf.Configuration ; import org.apache.hadoop.hbase.client.Connection ; public class ConfigureConnectionPool { public static void configureConnectionPool ( String projectId , String instanceId ) { // String projectId = "my-project-id"; // String instanceId = "my-instance-id"; Configuration config = BigtableConfiguration . configure ( projectId , instanceId ); config . setInt ( BIGTABLE DATA CHANNEL COUNT KEY , 10 ); try ( Connection connection = BigtableConfiguration . connect ( config )) { int poolSize = connection . getConfiguration (). getInt ( BIGTABLE DATA CHANNEL COUNT KEY , 0 ); System . out . println ( String . format ( "Connected with pool size of %d" , poolSize )); } catch ( Exception e ) { System . out . println ( "Error during ConfigureConnectionPool: \n" + e . toString ()); } } } Java This sample is applicable only for client library versions earlier than 2.23.0, when automatic resizing was introduced. import com.google.api.gax.grpc.
- BigtableDataSettings ; import com.google.cloud.bigtable.data.v2.stub.EnhancedBigtableStubSettings ; import java.io.IOException ; public class ConfigureConnectionPool { public static void configureConnectionPool ( String projectId , String instanceId ) { // String projectId = "my-project-id"; // String instanceId = "my-instance-id"; BigtableDataSettings .
- The following client libraries offer connection pooling and let you configure the number of pools: Go client library for Cloud Bigtable Cloud Bigtable HBase client for Java Cloud Bigtable client library for Java Cloud Bigtable C++ client library Determine the best connection pool size Ideally, to leave room for traffic fluctuations, a connection pool has about twice the number of connections it takes for maximum saturation.

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- June 09, 2025 Libraries Java 2.60.0 (2025-06-06) Features Improve error message on malformed struct ( #2592 ) ( 7f5fdf0 ) Run ExecuteQuery conformance tests ( #2557 ) ( 0bbc083 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.59.0 ( 65782aa ) Ensure that multiple instances of a client in the same process dont clobber each other ( #2590 ) ( 8d3dca4 ) Dependencies Update shared dependencies ( #2587 ) ( 8ec0339 ) May 29, 2025 Change The Bigtable Spark connector supports Scala versions 2.12 and 2.13 in all connector versions and has been updated as follows: Connector versions 0.5.0 and later support dynamic columns .
- February 17, 2025 Libraries Java 2.52.0 (2025-02-14) Features Automated backups are supported in the admin client ( #2472 ) ( 48633e6 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.53.0 ( 47ca299 ) Extend timeouts for check consistency ( 47ca299 ) Dependencies Update dependency com.google.cloud:gapic-libraries-bom to v1.52.0 ( #2490 ) ( ca25d4e ) Update dependency com.google.cloud:sdk-platform-java-config to v3.43.0 ( #2481 ) ( deb1f79 ) February 10, 2025 Libraries Java 2.51.2 (2025-02-03) Bug Fixes Add known conformance test failures ( #2474 ) ( 15488fe ) Dependencies Update shared dependencies ( #2473 ) ( 4d6d419 ) February 03, 2025 Feature Tags data for Bigtable instances is now included in Cloud Billing data, letting you use tagged Bigtable instances to gain visibility into your resource usage and spending.
- Python Changes for google-cloud-bigtable 2.11.3 (2022-08-17) Performance Improvements Optimize row merging ( #628 ) ( c71ec70 ) 2.11.2 (2022-08-11) Bug Fixes Deps: allow protobuf < 5.0.0 ( #631 ) ( fd54fc6 ) Deps: require proto-plus >= 1.22.0 ( fd54fc6 ) August 19, 2022 Feature You can now use tags to allow or deny security policies on a Cloud Bigtable instance.
- For instances created before June 29, 2016, the instance ID is identical to the cluster ID. (There is one exception to this rule: If you had multiple clusters with the same ID before June 29, 2016, your instance IDs will end with -1 , -2 , and so on, so that each instance has a unique ID.) Feature V2 of the Cloud Bigtable RPC API is now available.

