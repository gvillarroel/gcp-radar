---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.343Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner latency charts in Cloud and Cloud Monitoring consoles"
feature_slug: "spanner-latency-charts-in-cloud-and-cloud-monitoring-consoles"
latest_feature_date: "2019-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
  - "https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
keywords:
  - "consoles"
  - "charts"
  - "provide"
  - "monitoring"
  - "latency"
  - "console"
  - "help"
---

# Spanner latency charts in Cloud and Cloud Monitoring consoles

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Google Cloud Console and Cloud Monitoring provide latency charts for Spanner to help troubleshoot performance issues.

## Extended Definition

Google Cloud Console and Cloud Monitoring provide latency charts for Spanner to help troubleshoot performance issues.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)

## Supporting Pages

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- You can review these plans in the Google Cloud console, and contact support if you need help understanding your query performance.
- If you change the order of the previous index, you can solve this hotspot problem: CREATE INDEX idx score ranking ON Ranking ( Score DESC , GameMode ) This index won't create a significant hotspot from players competing in the same game mode, provided their scores are distributed across the possible range.
- For the same reason, schema updates should use the provided Cloud Spanner API, and should avoid a manual strategy, such as creating a new table and copying the data from another table or a backup file.
- We also recommend using the Universally Unique Identifier (UUID) v4 , because it spreads the player data across DB nodes and can help you get increased performance out of Spanner.

### "Capture custom client-side metrics using OpenTelemetry \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opentelemetry)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Columns ( & singerID , & albumID , & albumTitle ); err != nil { return err } } } The code sample appends the string spanner/gfe latency to the metric name when it's exported to Cloud Monitoring.
- Custom client-side metrics can help you find the source of latency in your system.
- This latency metric is available as part of Monitoring metrics .
- To set up custom client-side metrics using OpenTelemetry, you need to configure the OpenTelemetry SDK and OTLP exporter: Add the necessary dependencies to your application using the following code: Java <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.32.0</version> <type>pom</type> <scope>import</scope> </dependency> <dependency> <groupId>io.opentelemetry</groupId> <artifactId>opentelemetry-bom</artifactId> <version>1.35.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-spanner</artifactId> </dependency> <dependency> <groupId>io.opentelemetry</groupId> <artifactId>opentelemetry-sdk</artifactId> </dependency> <dependency> <groupId>io.opentelemetry</groupId> <artifactId>opentelemetry-sdk-metrics</artifactId> </dependency> <dependency> <groupId>io.opentelemetry</groupId> <artifactId>opentelemetry-sdk-trace</artifactId> </dependency> <dependency> <groupId>io.opentelemetry</groupId> <artifactId>opentelemetry-exporter-otlp</artifactId> </dependency> </dependencies> Go go . opentelemetry . io / otel v1 .34.0 go . opentelemetry . io / otel / exporters / otlp / otlpmetric / otlpmetricgrpc v1 .28.0 go . opentelemetry . io / otel / exporters / otlp / otlptrace / otlptracegrpc v1 .28.0 go . opentelemetry . io / otel / metric v1 .34.0 go . opentelemetry . io / otel / sdk v1 .34.0 go . opentelemetry . io / otel / sdk / metric v1 .34.0 Create an OpenTelemetry object with the OTLP exporter and inject it into Spanner using SpannerOptions : Java // Enable OpenTelemetry metrics and traces before Injecting OpenTelemetry SpannerOptions . enableOpenTelemetryMetrics (); SpannerOptions . enableOpenTelemetryTraces (); // Create a new meter provider SdkMeterProvider sdkMeterProvider = SdkMeterProvider . builder () // Use Otlp exporter or any other exporter of your choice. . registerMetricReader ( PeriodicMetricReader . builder ( OtlpGrpcMetricExporter . builder (). build ()). build ()) . build (); // Create a new tracer provider SdkTracerProvider sdkTracerProvider = SdkTracerProvider . builder () // Use Otlp exporter or any other exporter of your choice. . addSpanProcessor ( SimpleSpanProcessor . builder ( OtlpGrpcSpanExporter . builder (). build ()). build ()) . build (); // Configure OpenTelemetry object using Meter Provider and Tracer Provider OpenTelemetry openTelemetry = OpenTelemetrySdk . builder () . setMeterProvider ( sdkMeterProvider ) . setTracerProvider ( sdkTracerProvider ) . build (); // Inject OpenTelemetry object via Spanner options or register as GlobalOpenTelemetry.

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Custom change stream metrics These metrics are exposed in Cloud Monitoring and include: Bucketed (histogram) latency between a record being committed in Spanner to it being emitted into a PCollection by the connector.
- Dataflow templates Dataflow templates provide a method to create Dataflow jobs based on prebuilt Docker images for common use-cases using the Google Cloud console, the Google Cloud CLI, or Rest API calls.
- This is a good fit for analytics and point-in-time archival, which is independent from Spanner's retention period. pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( MapElements . into ( TypeDescriptors . strings ()). via ( Object :: toString )) . apply ( Window . into ( FixedWindows . of ( Duration . standardMinutes ( 1 )))) . apply ( TextIO . write () . to ( "gs://my-bucket/change-stream-results-" ) . withSuffix ( ".txt" ) . withWindowedWrites () . withNumShards ( 1 )); Note that the Cloud Storage sink provides at-least-once semantics by default.
- WRITE APPEND ) . withSchema ( new TableSchema (). setFields ( Arrays . asList ( new TableFieldSchema () . setName ( "SingerId" ) . setType ( "INT64" ) . setMode ( "REQUIRED" ), new TableFieldSchema () . setName ( "FirstName" ) . setType ( "STRING" ) . setMode ( "REQUIRED" ), new TableFieldSchema () . setName ( "LastName" ) . setType ( "STRING" ) . setMode ( "REQUIRED" ) ))) . withAutoSharding () . optimizedWrites () . withFormatFunction (( String element ) - > { ObjectMapper objectMapper = new ObjectMapper (); JsonNode jsonNode = null ; try { jsonNode = objectMapper . readTree ( element ); } catch ( IOException e ) { e . printStackTrace (); } return new TableRow () . set ( "SingerId" , jsonNode . get ( "SingerId" ). asInt ()) . set ( "FirstName" , jsonNode . get ( "FirstName" ). asText ()) . set ( "LastName" , jsonNode . get ( "LastName" ). asText ()); } ) ); Note that the BigQuery sink provides at-least-once semantics by default.

