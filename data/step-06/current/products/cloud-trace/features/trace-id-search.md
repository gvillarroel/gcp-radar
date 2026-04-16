---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.004Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Trace ID search"
feature_slug: "trace-id-search"
latest_feature_date: "2020-08-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset"
  - "https://docs.cloud.google.com/trace/docs/analytics"
  - "https://docs.cloud.google.com/trace/docs/setup/java-ot"
  - "https://docs.cloud.google.com/trace/docs/setup/java"
keywords:
  - "trace"
  - "id"
  - "search"
  - "the"
  - "viewer"
  - "supports"
  - "searching"
  - "by"
---

# Trace ID search

Product: Cloud Trace
Coverage: MEDIUM

## Step 02 Summary

The Cloud Trace viewer supports searching by trace ID.

## Extended Definition

The Cloud Trace viewer supports searching by trace ID.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset)
- [https://docs.cloud.google.com/trace/docs/analytics](https://docs.cloud.google.com/trace/docs/analytics)
- [https://docs.cloud.google.com/trace/docs/setup/java-ot](https://docs.cloud.google.com/trace/docs/setup/java-ot)
- [https://docs.cloud.google.com/trace/docs/setup/java](https://docs.cloud.google.com/trace/docs/setup/java)

## Supporting Pages

### Analyze trace data with BigQuery \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset)
- Source ID: `site-docs-root-2`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use BigQuery Studio To open BigQuery from the Observability Analytics page and then query your trace data, do the following: In the Google Cloud console, go to the manage search Log Analytics page: Go to Log Analytics If you use the search bar to find this page, then select the result whose subheading is Logging .
- The value of the name field has the following format: projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /dataset/ DATASET ID /links/ LINK ID The value you provide for the name field must match the linked BigQuery dataset referenced by the query parameter.
- Execute the gcloud beta observability buckets datasets links create command: Linux, macOS, or Cloud Shell gcloud beta observability buckets datasets links create \ projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /datasets/ DATASET ID /links/ LINK ID \ --dataset = DATASET ID \ --bucket = BUCKET ID \ --location = LOCATION \ --project = PROJECT ID Windows (PowerShell) gcloud beta observability buckets datasets links create projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /datasets/ DATASET ID /links/ LINK ID --dataset = DATASET ID --bucket = BUCKET ID --location = LOCATION ` --project = PROJECT ID Windows (cmd.exe) gcloud beta observability buckets datasets links create ^ projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /datasets/ DATASET ID /links/ LINK ID ^ --dataset = DATASET ID ^ --bucket = BUCKET ID ^ --location = LOCATION ^ --project = PROJECT ID The create command initiates a long-running operation.
- To get the permissions that you need to create a link on an observability dataset, ask your administrator to grant you the following IAM roles on your project: Observability Editor ( roles/observability.editor ) BigQuery User ( roles/bigquery.user ) Logs Viewer ( roles/logging.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### Query and analyze traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/analytics](https://docs.cloud.google.com/trace/docs/analytics)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To identify the schema, do the following: In the Google Cloud console, go to the manage search Log Analytics page: Go to Log Analytics If you use the search bar to find this page, then select the result whose subheading is Logging .
- This document describes how to query and analyze your trace data by using Observability Analytics, which provides a SQL -based query interface.
- If you want to view or explore individual traces or spans, or view attributes that are attached to spans, then use the Trace Explorer page.
- Enable the API To get the permissions that you need to load the Observability Analytics page, write, run, and save private queries on your trace data, ask your administrator to grant you the following IAM roles: Observability View Accessor ( roles/observability.viewAccessor ) on the observability views that you want to query.

### Java instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/java-ot](https://docs.cloud.google.com/trace/docs/setup/java-ot)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you encounter an error when viewing trace data either by searching for a trace by ID or by following the steps in this task, then wait a minute or two and retry the action.
- It will automatically generate a span for the controller body. / @GetMapping ( "/multi" ) public Mono<String> handleMulti () throws Exception { int subRequests = ThreadLocalRandom . current (). nextInt ( 3 , 8 ); // Write a structured log with the request context, which allows the log to // be linked with the trace for this request. logger . info ( "handle /multi request with subRequests={}" , subRequests ); // Make 3-7 http requests to the /single endpoint. return Flux . range ( 0 , subRequests ) . concatMap ( i - > client . get (). uri ( "http://localhost:8080/single" ). retrieve (). bodyToMono ( Void . class )) . then ( Mono . just ( "ok" )); } The /single endpoint is handled by the handleSingle function.
- To view your trace data, do the following: In the Google Cloud console, go to the Trace explorer page: Go to Trace explorer You can also find this page by using the search bar.
- The following code sample illustrates a log4j2.xml file configured to output JSON structured logs using the JSON Template Layout : <!-- Format JSON logs for the Cloud Logging agent https://cloud.google.com/logging/docs/structured-logging#special-payload-fields --> <!-- Log4j2's JsonTemplateLayout includes a template for Cloud Logging's special JSON fields https://logging.apache.org/log4j/2.x/manual/json-template-layout.html#event-templates --> <JsonTemplateLayout eventTemplateUri="classpath:GcpLayout.json"> <!-- Extend the included GcpLayout to include the trace and span IDs from Mapped Diagnostic Context (MDC) so that Cloud Logging can correlate Logs and Spans Since log4j2 2.24.0, GcpLayout.json already includes trace context logging from MDC and the below additional fields are no longer needed --> <EventTemplateAdditionalField key="logging.googleapis.com/trace" format="JSON" value='{"$resolver": "mdc", "key": "trace id"}' /> <EventTemplateAdditionalField key="logging.googleapis.com/spanId" format="JSON" value='{"$resolver": "mdc", "key": "span id"}' /> <EventTemplateAdditionalField key="logging.googleapis.com/trace sampled" format="JSON" value="true" /> </JsonTemplateLayout> The previous configuration extracts information about the active span from SLF4J's Mapped Diagnostic Context and adds that information as attributes to the log.

### Java instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/java](https://docs.cloud.google.com/trace/docs/setup/java)
- Source ID: `site-docs-root-2`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you encounter an error when viewing trace data either by searching for a trace by ID or by following the steps in this task, then wait a minute or two and retry the action.
- It will automatically generate a span for the controller body. / @GetMapping ( "/multi" ) public Mono<String> handleMulti () throws Exception { int subRequests = ThreadLocalRandom . current (). nextInt ( 3 , 8 ); // Write a structured log with the request context, which allows the log to // be linked with the trace for this request. logger . info ( "handle /multi request with subRequests={}" , subRequests ); // Make 3-7 http requests to the /single endpoint. return Flux . range ( 0 , subRequests ) . concatMap ( i - > client . get (). uri ( "http://localhost:8080/single" ). retrieve (). bodyToMono ( Void . class )) . then ( Mono . just ( "ok" )); } The /single endpoint is handled by the handleSingle function.
- To view your trace data, do the following: In the Google Cloud console, go to the Trace explorer page: Go to Trace explorer You can also find this page by using the search bar.
- The following code sample illustrates a log4j2.xml file configured to output JSON structured logs using the JSON Template Layout : <!-- Format JSON logs for the Cloud Logging agent https://cloud.google.com/logging/docs/structured-logging#special-payload-fields --> <!-- Log4j2's JsonTemplateLayout includes a template for Cloud Logging's special JSON fields https://logging.apache.org/log4j/2.x/manual/json-template-layout.html#event-templates --> <JsonTemplateLayout eventTemplateUri="classpath:GcpLayout.json"> <!-- Extend the included GcpLayout to include the trace and span IDs from Mapped Diagnostic Context (MDC) so that Cloud Logging can correlate Logs and Spans Since log4j2 2.24.0, GcpLayout.json already includes trace context logging from MDC and the below additional fields are no longer needed --> <EventTemplateAdditionalField key="logging.googleapis.com/trace" format="JSON" value='{"$resolver": "mdc", "key": "trace id"}' /> <EventTemplateAdditionalField key="logging.googleapis.com/spanId" format="JSON" value='{"$resolver": "mdc", "key": "span id"}' /> <EventTemplateAdditionalField key="logging.googleapis.com/trace sampled" format="JSON" value="true" /> </JsonTemplateLayout> The previous configuration extracts information about the active span from SLF4J's Mapped Diagnostic Context and adds that information as attributes to the log.

