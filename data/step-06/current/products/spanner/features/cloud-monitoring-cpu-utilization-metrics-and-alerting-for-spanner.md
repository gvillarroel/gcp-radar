---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.344Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Monitoring CPU utilization metrics and alerting for Spanner"
feature_slug: "cloud-monitoring-cpu-utilization-metrics-and-alerting-for-spanner"
latest_feature_date: "2019-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry"
  - "https://docs.cloud.google.com/spanner/docs/cmek"
  - "https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus"
keywords:
  - "alerting"
  - "utilization"
  - "monitoring"
  - "metrics"
  - "console"
---

# Cloud Monitoring CPU utilization metrics and alerting for Spanner

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Monitoring and the Google Cloud console now provide additional Spanner CPU utilization charts and support alerting on those CPU utilization metrics.

## Extended Definition

Cloud Monitoring and the Google Cloud console now provide additional Spanner CPU utilization charts and support alerting on those CPU utilization metrics.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry)
- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus)

## Supporting Pages

### "Capture custom client-side metrics using OpenTelemetry \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- View metrics in the Metrics Explorer In the Google Cloud console, go to the Metrics Explorer page.
- This latency metric is available as part of Monitoring metrics .
- To set up custom client-side metrics using OpenTelemetry, you need to configure the OpenTelemetry SDK and OTLP exporter: Add the necessary dependencies to your application using the following code: Java <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.32.0</version> <type>pom</type> <scope>import</scope> </dependency> <dependency> <groupId>io.opentelemetry</groupId> <artifactId>opentelemetry-bom</artifactId> <version>1.35.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-spanner</artifactId> </dependency> <dependency> <groupId>io.opentelemetry</groupId> <artifactId>opentelemetry-sdk</artifactId> </dependency> <dependency> <groupId>io.opentelemetry</groupId> <artifactId>opentelemetry-sdk-metrics</artifactId> </dependency> <dependency> <groupId>io.opentelemetry</groupId> <artifactId>opentelemetry-sdk-trace</artifactId> </dependency> <dependency> <groupId>io.opentelemetry</groupId> <artifactId>opentelemetry-exporter-otlp</artifactId> </dependency> </dependencies> Go go . opentelemetry . io / otel v1 .34.0 go . opentelemetry . io / otel / exporters / otlp / otlpmetric / otlpmetricgrpc v1 .28.0 go . opentelemetry . io / otel / exporters / otlp / otlptrace / otlptracegrpc v1 .28.0 go . opentelemetry . io / otel / metric v1 .34.0 go . opentelemetry . io / otel / sdk v1 .34.0 go . opentelemetry . io / otel / sdk / metric v1 .34.0 Create an OpenTelemetry object with the OTLP exporter and inject it into Spanner using SpannerOptions : Java // Enable OpenTelemetry metrics and traces before Injecting OpenTelemetry SpannerOptions . enableOpenTelemetryMetrics (); SpannerOptions . enableOpenTelemetryTraces (); // Create a new meter provider SdkMeterProvider sdkMeterProvider = SdkMeterProvider . builder () // Use Otlp exporter or any other exporter of your choice. . registerMetricReader ( PeriodicMetricReader . builder ( OtlpGrpcMetricExporter . builder (). build ()). build ()) . build (); // Create a new tracer provider SdkTracerProvider sdkTracerProvider = SdkTracerProvider . builder () // Use Otlp exporter or any other exporter of your choice. . addSpanProcessor ( SimpleSpanProcessor . builder ( OtlpGrpcSpanExporter . builder (). build ()). build ()) . build (); // Configure OpenTelemetry object using Meter Provider and Tracer Provider OpenTelemetry openTelemetry = OpenTelemetrySdk . builder () . setMeterProvider ( sdkMeterProvider ) . setTracerProvider ( sdkTracerProvider ) . build (); // Inject OpenTelemetry object via Spanner options or register as GlobalOpenTelemetry.
- SpannerOptions options = SpannerOptions . newBuilder () . setOpenTelemetry ( openTelemetry ) . build (); Spanner spanner = options . getService (); DatabaseClient dbClient = spanner . getDatabaseClient ( DatabaseId . of ( projectId , instanceId , databaseId )); captureGfeMetric ( dbClient ); captureQueryStatsMetric ( openTelemetry , dbClient ); // Close the providers to free up the resources and export the data. / sdkMeterProvider . close (); sdkTracerProvider . close (); Go // Ensure that your Go runtime version is supported by the OpenTelemetry-Go compatibility policy before enabling OpenTelemetry instrumentation. // Refer to compatibility here https://github.com/googleapis/google-cloud-go/blob/main/debug.md#opentelemetry import ( "context" "fmt" "io" "log" "strconv" "strings" "cloud.google.com/go/spanner" "go.opentelemetry.io/otel" "go.opentelemetry.io/otel/exporters/otlp/otlpmetric/otlpmetricgrpc" "go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc" "go.opentelemetry.io/otel/metric" sdkmetric "go.opentelemetry.io/otel/sdk/metric" "go.opentelemetry.io/otel/sdk/resource" sdktrace "go.opentelemetry.io/otel/sdk/trace" semconv "go.opentelemetry.io/otel/semconv/v1.24.0" "google.golang.org/api/iterator" ) func enableOpenTelemetryMetricsAndTraces ( w io .

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- To create an alerting policy, do the following: In the Google Cloud console, go to the notifications Alerting page: Go to Alerting If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- In the Metrics menu, select CMEK Keys . (The metric.type is spanner.googleapis.com/instance/replica/cmek/total keys ).
- In the Metrics menu, select CMEK Keys . (The metric.type is spanner.googleapis.com/instance/replica/cmek/total keys ).
- To create this alerting policy, expand the following steps and settings: Steps to create an alerting policy .

### "Capture custom client-side metrics using OpenCensus \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SpannerRpcViews . registerGfeLatencyView (); // Capture GFE Latency and GFE Header missing count. // SpannerRpcViews.registerGfeLatencyAndHeaderMissingCountViews(); // Capture only GFE Header missing count. // SpannerRpcViews.registerGfeHeaderMissingCountView(); // Enable OpenCensus exporters to export metrics to Stackdriver Monitoring. // Exporters use Application Default Credentials to authenticate. // See https://developers.google.com/identity/protocols/application-default-credentials // for more details. try { StackdriverStatsExporter . createAndRegister (); } catch ( IOException IllegalStateException e ) { System . out . println ( "Error during StackdriverStatsExporter" ); } try ( ResultSet resultSet = dbClient . singleUse () // Execute a single read or query against Cloud Spanner. . executeQuery ( Statement . of ( "SELECT SingerId, AlbumId, AlbumTitle FROM Albums" ))) { while ( resultSet . next ()) { System . out . printf ( "%d %d %s" , resultSet . getLong ( 0 ), resultSet . getLong ( 1 ), resultSet . getString ( 2 )); } } } Go // We are in the process of adding support in the Cloud Spanner Go Client Library // to capture the gfe latency metric. import ( "context" "fmt" "io" "strconv" "strings" spanner "cloud.google.com/go/spanner/apiv1" sppb "cloud.google.com/go/spanner/apiv1/spannerpb" gax "github.com/googleapis/gax-go/v2" "google.golang.org/grpc" "google.golang.org/grpc/metadata" "contrib.go.opencensus.io/exporter/stackdriver" "go.opencensus.io/stats" "go.opencensus.io/stats/view" "go.opencensus.io/tag" ) // OpenCensus Tag, Measure and View. var ( KeyMethod = tag .
- It is imperative that this step exists, // otherwise recorded metrics will be dropped and never exported. static View QUERY STATS LATENCY VIEW = View . create ( Name . create ( "cloud.google.com/java/spanner/query stats elapsed" ), "The execution of the query" , QUERY STATS ELAPSED , AGGREGATION WITH MILLIS HISTOGRAM , Collections . emptyList ()); static ViewManager manager = Stats . getViewManager (); private static final StatsRecorder STATS RECORDER = Stats . getStatsRecorder (); static void captureQueryStatsMetric ( DatabaseClient dbClient ) { manager . registerView ( QUERY STATS LATENCY VIEW ); // Enable OpenCensus exporters to export metrics to Cloud Monitoring. // Exporters use Application Default Credentials to authenticate. // See https://developers.google.com/identity/protocols/application-default-credentials // for more details. try { StackdriverStatsExporter . createAndRegister (); } catch ( IOException IllegalStateException e ) { System . out . println ( "Error during StackdriverStatsExporter" ); } try ( ResultSet resultSet = dbClient . singleUse () . analyzeQuery ( Statement . of ( "SELECT SingerId, AlbumId, AlbumTitle FROM Albums" ), QueryAnalyzeMode .
- RpcViews . registerClientGrpcBasicViews (); // Enable OpenCensus exporters to export metrics to Stackdriver Monitoring. // Exporters use Application Default Credentials to authenticate. // See https://developers.google.com/identity/protocols/application-default-credentials // for more details. try { StackdriverStatsExporter . createAndRegister (); } catch ( IOException IllegalStateException e ) { System . out . println ( "Error during StackdriverStatsExporter" ); } try ( ResultSet resultSet = dbClient . singleUse () // Execute a single read or query against Cloud Spanner. . executeQuery ( Statement . of ( "SELECT SingerId, AlbumId, AlbumTitle FROM Albums" ))) { while ( resultSet . next ()) { System . out . printf ( "%d %d %s" , resultSet . getLong ( 0 ), resultSet . getLong ( 1 ), resultSet . getString ( 2 )); } } } Go import ( "context" "fmt" "io" "regexp" "cloud.google.com/go/spanner" "google.golang.org/api/iterator" "contrib.go.opencensus.io/exporter/stackdriver" "go.opencensus.io/plugin/ocgrpc" "go.opencensus.io/stats/view" ) var validDatabasePattern = regexp .
- View metrics in the Metrics Explorer In the Google Cloud console, go to the Metrics Explorer page.

