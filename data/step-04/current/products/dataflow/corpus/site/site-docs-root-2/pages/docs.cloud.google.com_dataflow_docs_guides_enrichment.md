---
title: "Enrich streaming data \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/enrichment
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/enrichment
  title: "Enrich streaming data \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Dataflow
Guides
Send feedback
Enrich streaming data
Stay organized with collections
Save and categorize content based on your preferences.
Apache Beam simplifies the data enrichment workflow by providing a turnkey
enrichment transform that you can add to your pipeline. This page explains how
to use the Apache Beam enrichment transform to enrich your streaming data.
When you enrich data, you augment the raw data from one source by adding related
data from a second source. The additional data can come from a variety of
sources, such as Bigtable or
BigQuery . The Apache Beam enrichment
transform uses a key-value lookup to connect the additional data to the raw data.
The following examples provide some cases where data enrichment is useful:
You want to create an ecommerce pipeline that captures user activities from a
website or app and provides customized recommendations. The transform
incorporates the activities into your pipeline data so that you can provide
the customized recommendations.
You have user data that you want to join with geographical data to do
geography-based analytics.
You want to create a pipeline that gathers data from internet-of-things (IOT)
devices that send out telemetry events.
Benefits
The enrichment transform has the following benefits:
Transforms your data without requiring you to write complex code or manage
underlying libraries.
Provides built-in source handlers.
Use the
BigTableEnrichmentHandler handler
to enrich your data by using a
Bigtable source without passing configuration details.
Use the
BigQueryEnrichmentHandler handler
to enrich your data by using a
BigQuery source without passing configuration details.
Use the
VertexAIFeatureStoreEnrichmentHandler handler
with
Vertex AI Feature Store
and Bigtable online serving .
Uses client-side throttling to manage rate limiting
the requests. The requests are exponentially backed off with a default retry
strategy. You can configure rate limiting to suit your use case.
Support and limitations
The enrichment transform has the following requirements:
Available for batch and streaming pipelines.
The BigTableEnrichmentHandler handler is available in the Apache Beam
Python SDK versions 2.54.0 and later.
The BigQueryEnrichmentHandler handler is available in the Apache Beam
Python SDK versions 2.57.0 and later.
The VertexAIFeatureStoreEnrichmentHandler handler is available in the Apache Beam
Python SDK versions 2.55.0 and later.
When using the Apache Beam Python SDK versions 2.55.0 and later, you
also need to install the Python client for Redis .
Dataflow jobs must use Runner v2 .
Use the enrichment transform
To use the enrichment transform, include the following code in
your pipeline:
import apache_beam as beam
from apache_beam.transforms.enrichment import Enrichment
from apache_beam.transforms.enrichment_handlers.bigtable import BigTableEnrichmentHandler
bigtable_handler = BigTableEnrichmentHandler ( ... )
with beam . Pipeline () as p :
output = ( p
...
| "Create" >> beam . Create ( data )
| "Enrich with Bigtable" >> Enrichment ( bigtable_handler )
...
)
Because the enrichment transform performs a cross join by default, design the
custom join to enrich the input data. This design ensures that the join includes
only the specified fields.
In the following example, left is the input element of the enrichment
transform, and right is data fetched from an external service for that input
element.
def custom_join ( left: Dict [ str, Any ] , right: Dict [ str, Any ]) :
enriched = {}
enriched [ ' FIELD_NAME ' ] = left [ ' FIELD_NAME ' ]
...
return beam.Row ( **enriched )
Parameters
To use the enrichment transform, the EnrichmentHandler parameter is required.
You can also use a configuration parameter to specify a lambda function for a join
function, a timeout, a throttler, or a repeater (retry strategy). The following
configuration parameters are available:
join_fn : A lambda function that takes dictionaries as input and returns an
enriched row ( Callable[[Dict[str, Any], Dict[str, Any]], beam.Row] ). The
enriched row specifies how to join the data fetched from the API.
Defaults to a cross join.
timeout : The number of seconds to wait for the request to be completed by
the API before timing out. Defaults to 30 seconds.
throttler : Specifies the throttling mechanism. The only supported option is
default client-side adaptive throttling.
repeater : Specifies the retry strategy when errors like TooManyRequests
and TimeoutException occur. Defaults to ExponentialBackOffRepeater .
What's next
For more examples, see
Enrichment transform
in the Apache Beam transform catalog.
Use Apache Beam and Bigtable to enrich data .
Use Apache Beam and BigQuery to enrich data .
Use Apache Beam and Vertex AI Feature Store to enrich data .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
