---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.288Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "System insights dashboard"
feature_slug: "system-insights-dashboard"
latest_feature_date: "2023-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
  - "https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus"
keywords:
  - "scorecards"
  - "displays"
  - "dashboard"
  - "system"
  - "insights"
  - "metrics"
  - "provides"
---

# System insights dashboard

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner provides a system insights dashboard that displays metrics and scorecards for instances and databases.

## Extended Definition

Spanner provides a system insights dashboard that displays metrics and scorecards for instances and databases.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus)

## Supporting Pages

### Change dual-region quorum \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum](https://docs.cloud.google.com/spanner/docs/change-dual-region-quorum)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Check dual-region quorum status You can check the status of your dual-region quorum in the following ways: On the Database overview page Use the System insights dashboard Use a Cloud Monitoring REST API or Google Cloud CLI On the Database overview page Go to the Spanner Instances page in the Google Cloud console.
- Use the System insights dashboard After you create a dual-region configuration, you can view the Dual-region quorum health timeline metric on the Instance-level System insights dashboard.
- For more information, see View the system insights dashboard .
- Click System insights in the navigation menu.

### "Capture custom client-side metrics using OpenCensus \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- SpannerRpcViews . registerGfeLatencyView (); // Capture GFE Latency and GFE Header missing count. // SpannerRpcViews.registerGfeLatencyAndHeaderMissingCountViews(); // Capture only GFE Header missing count. // SpannerRpcViews.registerGfeHeaderMissingCountView(); // Enable OpenCensus exporters to export metrics to Stackdriver Monitoring. // Exporters use Application Default Credentials to authenticate. // See https://developers.google.com/identity/protocols/application-default-credentials // for more details. try { StackdriverStatsExporter . createAndRegister (); } catch ( IOException IllegalStateException e ) { System . out . println ( "Error during StackdriverStatsExporter" ); } try ( ResultSet resultSet = dbClient . singleUse () // Execute a single read or query against Cloud Spanner. . executeQuery ( Statement . of ( "SELECT SingerId, AlbumId, AlbumTitle FROM Albums" ))) { while ( resultSet . next ()) { System . out . printf ( "%d %d %s" , resultSet . getLong ( 0 ), resultSet . getLong ( 1 ), resultSet . getString ( 2 )); } } } Go // We are in the process of adding support in the Cloud Spanner Go Client Library // to capture the gfe latency metric. import ( "context" "fmt" "io" "strconv" "strings" spanner "cloud.google.com/go/spanner/apiv1" sppb "cloud.google.com/go/spanner/apiv1/spannerpb" gax "github.com/googleapis/gax-go/v2" "google.golang.org/grpc" "google.golang.org/grpc/metadata" "contrib.go.opencensus.io/exporter/stackdriver" "go.opencensus.io/stats" "go.opencensus.io/stats/view" "go.opencensus.io/tag" ) // OpenCensus Tag, Measure and View. var ( KeyMethod = tag .
- It is imperative that this step exists, // otherwise recorded metrics will be dropped and never exported. static View QUERY STATS LATENCY VIEW = View . create ( Name . create ( "cloud.google.com/java/spanner/query stats elapsed" ), "The execution of the query" , QUERY STATS ELAPSED , AGGREGATION WITH MILLIS HISTOGRAM , Collections . emptyList ()); static ViewManager manager = Stats . getViewManager (); private static final StatsRecorder STATS RECORDER = Stats . getStatsRecorder (); static void captureQueryStatsMetric ( DatabaseClient dbClient ) { manager . registerView ( QUERY STATS LATENCY VIEW ); // Enable OpenCensus exporters to export metrics to Cloud Monitoring. // Exporters use Application Default Credentials to authenticate. // See https://developers.google.com/identity/protocols/application-default-credentials // for more details. try { StackdriverStatsExporter . createAndRegister (); } catch ( IOException IllegalStateException e ) { System . out . println ( "Error during StackdriverStatsExporter" ); } try ( ResultSet resultSet = dbClient . singleUse () . analyzeQuery ( Statement . of ( "SELECT SingerId, AlbumId, AlbumTitle FROM Albums" ), QueryAnalyzeMode .
- RpcViews . registerClientGrpcBasicViews (); // Enable OpenCensus exporters to export metrics to Stackdriver Monitoring. // Exporters use Application Default Credentials to authenticate. // See https://developers.google.com/identity/protocols/application-default-credentials // for more details. try { StackdriverStatsExporter . createAndRegister (); } catch ( IOException IllegalStateException e ) { System . out . println ( "Error during StackdriverStatsExporter" ); } try ( ResultSet resultSet = dbClient . singleUse () // Execute a single read or query against Cloud Spanner. . executeQuery ( Statement . of ( "SELECT SingerId, AlbumId, AlbumTitle FROM Albums" ))) { while ( resultSet . next ()) { System . out . printf ( "%d %d %s" , resultSet . getLong ( 0 ), resultSet . getLong ( 1 ), resultSet . getString ( 2 )); } } } Go import ( "context" "fmt" "io" "regexp" "cloud.google.com/go/spanner" "google.golang.org/api/iterator" "contrib.go.opencensus.io/exporter/stackdriver" "go.opencensus.io/plugin/ocgrpc" "go.opencensus.io/stats/view" ) var validDatabasePattern = regexp .
- Custom client-side metrics can help find the source of latency in your system.

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Standard Dataflow metrics Dataflow provides several metrics to make sure your job is healthy, such as data freshness, system lag, job throughput, worker CPU utilization and more.
- Apache Beam documentation provides a myriad of transforms that can be applied, as well as ready to use I/O connectors to write the data into external systems.
- For change streams pipelines, there are two main metrics that should be taken into account: the system latency and the data freshness .
- This function breaks each data change record into separate data change records, one per mod. private static class BreakRecordByModFn extends DoFn<DataChangeRecord , DataChangeRecord > { @ProcessElement public void processElement ( @Element DataChangeRecord record , OutputReceiver<DataChangeRecord> outputReceiver ) { record . getMods (). stream () . map ( mod - > new DataChangeRecord ( record . getPartitionToken (), record . getCommitTimestamp (), record . getServerTransactionId (), record . isLastRecordInTransactionInPartition (), record . getRecordSequence (), record . getTableName (), record . getRowType (), Collections . singletonList ( mod ), record . getModType (), record . getValueCaptureType (), record . getNumberOfRecordsInTransaction (), record . getNumberOfPartitionsInTransaction (), record . getTransactionTag (), record . isSystemTransaction (), record . getMetadata ())) . forEach ( outputReceiver :: output ); } } KeyByIdFn This function takes in a DataChangeRecord and outputs a DataChangeRecord keyed by the Spanner primary key hashed to an integer value. private static class KeyByIdFn extends DoFn<DataChangeRecord , KV<String , DataChangeRecord >> { // NUMBER OF BUCKETS should be configured by the user to match their key cardinality // Here, we are choosing to hash the Spanner primary keys to a bucket index, in order to have a deterministic number // of states and timers for performance purposes. // Note that having too many buckets might have undesirable effects if it results in a low number of records per bucket // On the other hand, having too few buckets might also be problematic, since many keys will be contained within them. private static final int NUMBER OF BUCKETS = 1000 ; @ProcessElement public void processElement ( @Element DataChangeRecord record , OutputReceiver<KV<String , DataChangeRecord >> outputReceiver ) { int hashCode = ( int ) record . getMods (). get ( 0 ). getKeysJson (). hashCode (); // Hash the received keys into a bucket in order to have a // deterministic number of buffers and timers.

