---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.208Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cassandra to Spanner proxy adapter"
feature_slug: "cassandra-to-spanner-proxy-adapter"
latest_feature_date: "2024-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry"
  - "https://docs.cloud.google.com/spanner/docs/open-source-jdbc"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.executor.spanner.WorkerProxy"
keywords:
  - "adapter"
  - "proxy"
  - "cassandra"
  - "open"
  - "source"
  - "offers"
---

# Cassandra to Spanner proxy adapter

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now offers an open-source Cassandra-to-Spanner proxy adapter to migrate Cassandra workloads to Spanner without modifying application logic.

## Extended Definition

Spanner now offers an open-source Cassandra-to-Spanner proxy adapter to migrate Cassandra workloads to Spanner without modifying application logic.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry)
- [https://docs.cloud.google.com/spanner/docs/open-source-jdbc](https://docs.cloud.google.com/spanner/docs/open-source-jdbc)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.executor.spanner.WorkerProxy](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.executor.spanner.WorkerProxy)

## Supporting Pages

### "Capture custom client-side metrics using OpenTelemetry \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- SpannerOptions options = SpannerOptions . newBuilder () . setOpenTelemetry ( openTelemetry ) . build (); Spanner spanner = options . getService (); DatabaseClient dbClient = spanner . getDatabaseClient ( DatabaseId . of ( projectId , instanceId , databaseId )); captureGfeMetric ( dbClient ); captureQueryStatsMetric ( openTelemetry , dbClient ); // Close the providers to free up the resources and export the data. / sdkMeterProvider . close (); sdkTracerProvider . close (); Go // Ensure that your Go runtime version is supported by the OpenTelemetry-Go compatibility policy before enabling OpenTelemetry instrumentation. // Refer to compatibility here https://github.com/googleapis/google-cloud-go/blob/main/debug.md#opentelemetry import ( "context" "fmt" "io" "log" "strconv" "strings" "cloud.google.com/go/spanner" "go.opentelemetry.io/otel" "go.opentelemetry.io/otel/exporters/otlp/otlpmetric/otlpmetricgrpc" "go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc" "go.opentelemetry.io/otel/metric" sdkmetric "go.opentelemetry.io/otel/sdk/metric" "go.opentelemetry.io/otel/sdk/resource" sdktrace "go.opentelemetry.io/otel/sdk/trace" semconv "go.opentelemetry.io/otel/semconv/v1.24.0" "google.golang.org/api/iterator" ) func enableOpenTelemetryMetricsAndTraces ( w io .
- OpenTelemetry is an open source observability framework and toolkit that lets you create and manage telemetry data such as traces, metrics, and logs.
- To set up custom client-side metrics using OpenTelemetry, you need to configure the OpenTelemetry SDK and OTLP exporter: Add the necessary dependencies to your application using the following code: Java <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.32.0</version> <type>pom</type> <scope>import</scope> </dependency> <dependency> <groupId>io.opentelemetry</groupId> <artifactId>opentelemetry-bom</artifactId> <version>1.35.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-spanner</artifactId> </dependency> <dependency> <groupId>io.opentelemetry</groupId> <artifactId>opentelemetry-sdk</artifactId> </dependency> <dependency> <groupId>io.opentelemetry</groupId> <artifactId>opentelemetry-sdk-metrics</artifactId> </dependency> <dependency> <groupId>io.opentelemetry</groupId> <artifactId>opentelemetry-sdk-trace</artifactId> </dependency> <dependency> <groupId>io.opentelemetry</groupId> <artifactId>opentelemetry-exporter-otlp</artifactId> </dependency> </dependencies> Go go . opentelemetry . io / otel v1 .34.0 go . opentelemetry . io / otel / exporters / otlp / otlpmetric / otlpmetricgrpc v1 .28.0 go . opentelemetry . io / otel / exporters / otlp / otlptrace / otlptracegrpc v1 .28.0 go . opentelemetry . io / otel / metric v1 .34.0 go . opentelemetry . io / otel / sdk v1 .34.0 go . opentelemetry . io / otel / sdk / metric v1 .34.0 Create an OpenTelemetry object with the OTLP exporter and inject it into Spanner using SpannerOptions : Java // Enable OpenTelemetry metrics and traces before Injecting OpenTelemetry SpannerOptions . enableOpenTelemetryMetrics (); SpannerOptions . enableOpenTelemetryTraces (); // Create a new meter provider SdkMeterProvider sdkMeterProvider = SdkMeterProvider . builder () // Use Otlp exporter or any other exporter of your choice. . registerMetricReader ( PeriodicMetricReader . builder ( OtlpGrpcMetricExporter . builder (). build ()). build ()) . build (); // Create a new tracer provider SdkTracerProvider sdkTracerProvider = SdkTracerProvider . builder () // Use Otlp exporter or any other exporter of your choice. . addSpanProcessor ( SimpleSpanProcessor . builder ( OtlpGrpcSpanExporter . builder (). build ()). build ()) . build (); // Configure OpenTelemetry object using Meter Provider and Tracer Provider OpenTelemetry openTelemetry = OpenTelemetrySdk . builder () . setMeterProvider ( sdkMeterProvider ) . setTracerProvider ( sdkTracerProvider ) . build (); // Inject OpenTelemetry object via Spanner options or register as GlobalOpenTelemetry.
- You can capture the GFE latency using the following code: Java static void captureGfeMetric ( DatabaseClient dbClient ) { // GFE latency and other Spanner metrics are automatically collected // when OpenTelemetry metrics are enabled. try ( ResultSet resultSet = dbClient . singleUse () // Execute a single read or query against Cloud Spanner. . executeQuery ( Statement . of ( "SELECT SingerId, AlbumId, AlbumTitle FROM Albums" ))) { while ( resultSet . next ()) { System . out . printf ( "%d %d %s" , resultSet . getLong ( 0 ), resultSet . getLong ( 1 ), resultSet . getString ( 2 )); } } } Go // GFE Latency and other Spanner metrics are automatically collected // when OpenTelemetry metrics are enabled. func captureGFELatencyMetric ( ctx context .

### "Class WorkerProxy (6.111.1) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.executor.spanner.WorkerProxy](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.executor.spanner.WorkerProxy)
- Source ID: `site-java-reference`
- Final score: 77
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Inheritance java.lang.Object > WorkerProxy Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields CLOUD TRACE ENDPOINT public static final String CLOUD TRACE ENDPOINT Field Value Type Description String PROJECT ID public static final String PROJECT ID Field Value Type Description String cert public static String cert Field Value Type Description String commandLine public static CommandLine commandLine Field Value Type Description org.apache.commons.cli.CommandLine enableGrpcFaultInjector public static boolean enableGrpcFaultInjector Field Value Type Description boolean multiplexedSessionOperationsRatio public static double multiplexedSessionOperationsRatio Field Value Type Description double openTelemetrySdk public static OpenTelemetrySdk openTelemetrySdk Field Value Type Description io.opentelemetry.sdk.OpenTelemetrySdk proxyPort public static int proxyPort Field Value Type Description int serviceKeyFile public static String serviceKeyFile Field Value Type Description String spannerPort public static int spannerPort Field Value Type Description int usePlainTextChannel public static boolean usePlainTextChannel Field Value Type Description boolean Static Methods main(String[] args) public static void main ( String [] args ) Parameter Name Description args String [] Exceptions Type Description Exception setupOpenTelemetrySdk() public static OpenTelemetrySdk setupOpenTelemetrySdk () Returns Type Description io.opentelemetry.sdk.OpenTelemetrySdk Exceptions Type Description Exception Constructors WorkerProxy() public WorkerProxy () Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- 6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1 public class WorkerProxy Worker proxy for Java API.
- Home Documentation Developer tools Java Client libraries Send feedback Class WorkerProxy (6.111.1) Stay organized with collections Save and categorize content based on your preferences.
- This is the main entry of the Java client proxy on cloud Spanner Java client.

### Spanner JDBC driver \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/open-source-jdbc](https://docs.cloud.google.com/spanner/docs/open-source-jdbc)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Google offers an open-source JDBC driver for Spanner.
- The open-source driver enables applications to access Spanner through the Java Database Connectivity (JDBC) API.
- The open-source driver can also create and modify indexes as DDL statements.
- Connection pools The Spanner JDBC driver handles pooling internally by keeping track of all connections that have been opened, as well as the connection properties that were used to open those connections.

