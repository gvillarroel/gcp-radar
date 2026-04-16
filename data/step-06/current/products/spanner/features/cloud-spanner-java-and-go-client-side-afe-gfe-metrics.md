---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.175Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner Java and Go client-side AFE/GFE metrics"
feature_slug: "cloud-spanner-java-and-go-client-side-afe-gfe-metrics"
latest_feature_date: "2025-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/client-side-metrics-descriptions"
  - "https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry"
  - "https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus"
keywords:
  - "side"
  - "metrics"
  - "client"
  - "java"
---

# Cloud Spanner Java and Go client-side AFE/GFE metrics

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner added new client-side AFE and GFE metrics for Java and Go applications, including connectivity error count and latency metrics for both fronts.

## Extended Definition

Cloud Spanner added new client-side AFE and GFE metrics for Java and Go applications, including connectivity error count and latency metrics for both fronts.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/spanner/docs/client-side-metrics-descriptions)
- [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry)
- [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus)

## Supporting Pages

### Client-side metrics descriptions \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/spanner/docs/client-side-metrics-descriptions)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If your application is deployed outside Google Cloud, then the metrics are published to the global region. method : the RPC method name—for example, spanner.commit . status : the RPC status—for example, OK or INTERNAL . client name : the library name and version—for example, spanner-java/6.70.1 .
- You can access client-side metrics using the Spanner client libraries for Java, Go, Node.js and Python.
- All client-side metrics have the following dimensions: project ID : the Google Cloud project ID. instance ID : the Spanner instance ID. database ID : the Spanner database ID. location : the Google Cloud region where the client-side metrics are published.
- Home Documentation Databases Spanner Guides Send feedback Client-side metrics descriptions Stay organized with collections Save and categorize content based on your preferences.

### "Capture custom client-side metrics using OpenTelemetry \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To set up custom client-side metrics using OpenTelemetry, you need to configure the OpenTelemetry SDK and OTLP exporter: Add the necessary dependencies to your application using the following code: Java <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.32.0</version> <type>pom</type> <scope>import</scope> </dependency> <dependency> <groupId>io.opentelemetry</groupId> <artifactId>opentelemetry-bom</artifactId> <version>1.35.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-spanner</artifactId> </dependency> <dependency> <groupId>io.opentelemetry</groupId> <artifactId>opentelemetry-sdk</artifactId> </dependency> <dependency> <groupId>io.opentelemetry</groupId> <artifactId>opentelemetry-sdk-metrics</artifactId> </dependency> <dependency> <groupId>io.opentelemetry</groupId> <artifactId>opentelemetry-sdk-trace</artifactId> </dependency> <dependency> <groupId>io.opentelemetry</groupId> <artifactId>opentelemetry-exporter-otlp</artifactId> </dependency> </dependencies> Go go . opentelemetry . io / otel v1 .34.0 go . opentelemetry . io / otel / exporters / otlp / otlpmetric / otlpmetricgrpc v1 .28.0 go . opentelemetry . io / otel / exporters / otlp / otlptrace / otlptracegrpc v1 .28.0 go . opentelemetry . io / otel / metric v1 .34.0 go . opentelemetry . io / otel / sdk v1 .34.0 go . opentelemetry . io / otel / sdk / metric v1 .34.0 Create an OpenTelemetry object with the OTLP exporter and inject it into Spanner using SpannerOptions : Java // Enable OpenTelemetry metrics and traces before Injecting OpenTelemetry SpannerOptions . enableOpenTelemetryMetrics (); SpannerOptions . enableOpenTelemetryTraces (); // Create a new meter provider SdkMeterProvider sdkMeterProvider = SdkMeterProvider . builder () // Use Otlp exporter or any other exporter of your choice. . registerMetricReader ( PeriodicMetricReader . builder ( OtlpGrpcMetricExporter . builder (). build ()). build ()) . build (); // Create a new tracer provider SdkTracerProvider sdkTracerProvider = SdkTracerProvider . builder () // Use Otlp exporter or any other exporter of your choice. . addSpanProcessor ( SimpleSpanProcessor . builder ( OtlpGrpcSpanExporter . builder (). build ()). build ()) . build (); // Configure OpenTelemetry object using Meter Provider and Tracer Provider OpenTelemetry openTelemetry = OpenTelemetrySdk . builder () . setMeterProvider ( sdkMeterProvider ) . setTracerProvider ( sdkTracerProvider ) . build (); // Inject OpenTelemetry object via Spanner options or register as GlobalOpenTelemetry.
- You can capture the GFE latency using the following code: Java static void captureGfeMetric ( DatabaseClient dbClient ) { // GFE latency and other Spanner metrics are automatically collected // when OpenTelemetry metrics are enabled. try ( ResultSet resultSet = dbClient . singleUse () // Execute a single read or query against Cloud Spanner. . executeQuery ( Statement . of ( "SELECT SingerId, AlbumId, AlbumTitle FROM Albums" ))) { while ( resultSet . next ()) { System . out . printf ( "%d %d %s" , resultSet . getLong ( 0 ), resultSet . getLong ( 1 ), resultSet . getString ( 2 )); } } } Go // GFE Latency and other Spanner metrics are automatically collected // when OpenTelemetry metrics are enabled. func captureGFELatencyMetric ( ctx context .
- Home Documentation Databases Spanner Guides Send feedback Capture custom client-side metrics using OpenTelemetry Stay organized with collections Save and categorize content based on your preferences.
- Custom client-side metrics can help you find the source of latency in your system.

### "Capture custom client-side metrics using OpenCensus \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It is imperative that this step exists, // otherwise recorded metrics will be dropped and never exported. static View QUERY STATS LATENCY VIEW = View . create ( Name . create ( "cloud.google.com/java/spanner/query stats elapsed" ), "The execution of the query" , QUERY STATS ELAPSED , AGGREGATION WITH MILLIS HISTOGRAM , Collections . emptyList ()); static ViewManager manager = Stats . getViewManager (); private static final StatsRecorder STATS RECORDER = Stats . getStatsRecorder (); static void captureQueryStatsMetric ( DatabaseClient dbClient ) { manager . registerView ( QUERY STATS LATENCY VIEW ); // Enable OpenCensus exporters to export metrics to Cloud Monitoring. // Exporters use Application Default Credentials to authenticate. // See https://developers.google.com/identity/protocols/application-default-credentials // for more details. try { StackdriverStatsExporter . createAndRegister (); } catch ( IOException IllegalStateException e ) { System . out . println ( "Error during StackdriverStatsExporter" ); } try ( ResultSet resultSet = dbClient . singleUse () . analyzeQuery ( Statement . of ( "SELECT SingerId, AlbumId, AlbumTitle FROM Albums" ), QueryAnalyzeMode .
- You can capture client round-trip latency using the following code: Java static void captureGrpcMetric ( DatabaseClient dbClient ) { // Add io.grpc:grpc-census and io.opencensus:opencensus-exporter-stats-stackdriver // dependencies to enable gRPC metrics. // Register basic gRPC views.
- Home Documentation Databases Spanner Guides Send feedback Capture custom client-side metrics using OpenCensus Stay organized with collections Save and categorize content based on your preferences.
- This document describes how to capture custom client-side metrics using OpenCensus .

