---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.769Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Client-side tracing for Java client library"
feature_slug: "client-side-tracing-for-java-client-library"
latest_feature_date: "2024-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/client-side-traces"
  - "https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.client.Client"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/overview"
  - "https://docs.cloud.google.com/datastore/docs/concepts/entities"
keywords:
  - "client"
  - "side"
  - "tracing"
  - "for"
  - "java"
  - "library"
  - "the"
  - "supports"
---

# Client-side tracing for Java client library

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

The Java client library supports client-side tracing for Firestore in Datastore mode.

## Extended Definition

The Java client library supports client-side tracing for Firestore in Datastore mode.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces)
- [https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.client.Client](https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.client.Client)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/overview)
- [https://docs.cloud.google.com/datastore/docs/concepts/entities](https://docs.cloud.google.com/datastore/docs/concepts/entities)

## Supporting Pages

### "Monitor performance with client-side traces \_|\_ Datastore \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces)
- Source ID: `site-iam-reference`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OpenTelemetrySdk otel = OpenTelemetrySdk . builder () . setTracerProvider ( SdkTracerProvider . builder () . setResource ( resource ) . addSpanProcessor ( otlpGrpcSpanProcessor ) . setSampler ( Sampler . traceIdRatioBased ( 0.1 )) . build ()) . build (); DatastoreOptions datastoreOptions = DatastoreOptions . newBuilder () . setOpenTelemetryOptions ( DatastoreOpenTelemetryOptions . newBuilder () . setTracingEnabled ( true ) . setOpenTelemetry ( otel ) . build ()) . build (); Datastore datastore = datastoreOptions . getService (); Export directly to an observability backend with OpenTelemetry APIs The following code configures the Java client library to directly export trace spans to Cloud Trace with a 10% trace sampling ratio.
- Client-side tracing can provide a signal about the performance as experienced by your application, as well as insights that can help with debugging issues.
- OpenTelemetry Traces for the Java client library are instrumented using OpenTelemetry APIs.
- Limitations Traces spans are available only for the Java client library.

### Class Client (2.24.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.client.Client](https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.client.Client)
- Source ID: `site-python-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Client (namespace='ns{}'.format(unique)) def do something with(entity): pass .. doctest:: aggregation query >> query = client.query(kind='MyKind') >> aggregation query = client.aggregation query(query) >> aggregation query.count(alias='total') <<xref uid="google.cloud.datastore.aggregation.AggregationQuery">google.cloud.datastore.aggregation.AggregationQuery</xref> object at ...> >> aggregation query.fetch() <<xref uid="google.cloud.datastore.aggregation.AggregationResultIterator">google.cloud.datastore.aggregation.AggregationResultIterator</xref> object at ...> Adding an aggregation to the aggregation query .. doctest:: aggregation query >> query = client.query(kind='MyKind') >> aggregation query.add aggregation(CountAggregation(alias='total')) >> aggregation query.fetch() <<xref uid="google.cloud.datastore.aggregation.AggregationResultIterator">google.cloud.datastore.aggregation.AggregationResultIterator</xref> object at ...> Adding multiple aggregations to the aggregation query .. doctest:: aggregation query >> query = client.query(kind='MyKind') >> total count = CountAggregation(alias='total') >> all count = CountAggregation(alias='all') >> aggregation query.add aggregations([total count, all count]) >> aggregation query.fetch() <<xref uid="google.cloud.datastore.aggregation.AggregationResultIterator">google.cloud.datastore.aggregation.AggregationResultIterator</xref> object at ...> Using the aggregation query iterator .. doctest:: aggregation query >> query = client.query(kind='MyKind') >> aggregation query = client.aggregation query(query) >> aggregation query.count(alias='total') <<xref uid="google.cloud.datastore.aggregation.AggregationQuery">google.cloud.datastore.aggregation.AggregationQuery</xref> object at ...> >> aggregation query iter = aggregation query.fetch() >> for aggregation result in aggregation query iter: ... do something with(aggregation result) or manually page through results .. doctest:: aggregation query >> aggregation query iter = aggregation query.fetch() >> pages = aggregation query iter.pages >> >> first page = next(pages) >> first page entities = list(first page) >> aggregation query iter.next page token is None True Returns Type Description AggregationQuery An AggregationQuery object. allocate ids allocate ids ( incomplete key , num ids , retry = None , timeout = None ) Allocate a list of IDs from a partial key.
- Client (namespace='ns{}'.format(unique)) def do something with(entity): pass .. doctest:: query >> query = client.query(kind='MyKind') >> query.add filter('property', '=', 'val') <<xref uid="google.cloud.datastore.query.Query">google.cloud.datastore.query.Query</xref> object at ...> Using the query iterator .. doctest:: query >> filters = [('property', '=', 'val')] >> query = client.query(kind='MyKind', filters=filters) >> query iter = query.fetch() >> for entity in query iter: ... do something with(entity) or manually page through results .. doctest:: query >> query iter = query.fetch() >> pages = query iter.pages >> >> first page = next(pages) >> first page entities = list(first page) >> query iter.next page token is None True Returns Type Description Query A query object. reserve ids reserve ids ( complete key , num ids , retry = None , timeout = None ) Reserve a list of IDs sequentially from a complete key.
- ClientInfo , client options = None , database = None , http = None , use grpc = None , ) Convenience wrapper for invoking APIs/factories w/ a project. .. doctest:: from google.cloud import datastore client = datastore.Client() Parameters Name Description project str (Optional) The project to pass to proxied API methods. namespace str (Optional) namespace to pass to proxied API methods. credentials google.auth.credentials.Credentials (Optional) The OAuth2 Credentials to use for this client.
- Generally, you only need to set this if you're developing your own library or partner tool. client options google.api core.client options.ClientOptions or dict (Optional) Client options used to set user options on the client.

### "google-cloud-datastore overview (2.37.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/overview)
- Source ID: `site-java-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Datastore Product Reference GitHub Repository Maven artifact Getting Started In order to use this library, you first need to go through the following steps: Install a JDK (Java Development Kit) Select or create a Cloud Platform project Enable billing for your project Enable the API Set up authentication Use the Cloud Datastore for Java To ensure that your project uses compatible versions of the libraries and their component artifacts, import com.google.cloud:libraries-bom and use the BOM to specify dependency versions.
- Managing Library Versions We recommend using the com.google.cloud:libraries-bom installation method detailed above to streamline dependency management across multiple Cloud Java client libraries.
- Choosing the Right Version ID Each Cloud Java client library may contain packages tied to specific Version IDs (e.g., v1 , v2alpha ).
- Understanding Version ID and Library Versions When using a Cloud client library, it's important to distinguish between two types of versions: Library Version : The version of the software package (the client library) that helps you interact with the Cloud service.

### Entities, Properties, and Keys \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/entities](https://docs.cloud.google.com/datastore/docs/concepts/entities)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . type Task struct { Tags [] string Collaborators [] string } task := & Task { Tags : [] string { "fun" , "programming" }, Collaborators : [] string { "alice" , "bob" }, } Java To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- NameKey ( "Task" , "sampleTask" , parentKey ) Java To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- NameKey ( "Task" , "sampleTask" , parentKey ) Java To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- NameKey ( "Task" , "sampletask" , nil ) Java To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .

