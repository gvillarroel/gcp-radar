---
title: "Apache Beam I/O connector best practices \_|\_ Cloud Dataflow \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/io-connector-best-practices
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/io-connector-best-practices
  title: "Apache Beam I/O connector best practices \_|\_ Cloud Dataflow \_|\_ Google\
    \ Cloud Documentation"
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
Apache Beam I/O connector best practices
Stay organized with collections
Save and categorize content based on your preferences.
Data processing in Dataflow can be highly parallelized. Much of this
parallelism is handled automatically by Dataflow. I/O connectors
sit at the boundary between your pipeline and other parts of your architecture,
such as file storage, databases, and messaging systems. As such, I/O connectors
often have specific considerations for achieving parallelism.
General best practices
The following list describes general best practices for using I/O connectors in
Dataflow.
Read the Javadoc, Pydoc, or Go documentation for the connectors in your
pipeline. For more information, see
I/O connectors
in the Apache Beam documentation.
Use the latest version of the Apache Beam SDK. I/O connectors are
continually being improved, adding features and fixing known issues.
When developing a pipeline, it's important to balance the parallelism of the
job. If a job has too little parallelism, it can be slow, and data can build
up in the source. However, too much parallelism can overwhelm a sink with too
many requests.
Don't rely on the ordering of elements. In general, Dataflow
does not guarantee the order of elements in a collection.
If an I/O connector isn't available in your SDK of choice, consider using the
cross-language framework
to use an I/O connector from another SDK. In addition, connectors don't always
have feature parity between SDKs. If a connector from another SDK provides a
feature that you need, you can use it as a cross-language transform.
In general, writing custom I/O connectors is challenging. Use an existing
connector whenever possible. If you need to implement a custom I/O connector,
read
Developing a new I/O connector .
If a pipeline fails, check for errors logged by I/O connectors. See
Troubleshoot Dataflow errors .
When performing writes from Dataflow to a connector, consider using
an ErrorHandler
to handle any failed writes or malformed reads. This type of error handling is
supported for the following Java I/Os in Apache Beam versions 2.55.0 and
later: BigQueryIO , BigtableIO , PubSubIO , KafkaIO , FileIO , TextIO ,
and AvroIO .
For an example of performance benchmarks in a Dataflow streaming
pipeline, see
Performance characteristics of Pub/Sub to BigQuery pipelines .
Best practices for individual I/O connectors
The following topics list best practices for individual I/O connectors:
I/O connector Read Write
Apache Iceberg
Read from Apache Iceberg
Write to Apache Iceberg
Apache Kafka
Read from Apache Kafka
Write to Apache Kafka
BigQuery
Read from BigQuery
Write to BigQuery
Bigtable
Read from Bigtable
Write to Bigtable
Cloud Storage
Read from Cloud Storage
Write to Cloud Storage
Pub/Sub
Read from Pub/Sub
Write to Pub/Sub
Google-supported I/O connectors
The following table lists the Apache Beam I/O connectors supported by
Dataflow. For a full list of Apache Beam I/O connectors,
including those developed by the Apache Beam community and supported
by other runners, see
I/O connectors
in the Apache Beam documentation.
I/O connector name
Java
Python
Go
AvroIO
Supported
Supported
Supported
BigQueryIO
Supported
Supported
Supported
BigTableIO
Supported
Sink supported
Sink supported
DatastoreIO
Supported
Supported
Supported
FhirIO (healthcare)
Supported
Not available
Supported
FileIO
Supported
Supported
Supported
GcsFileSystem
Supported
Supported
Supported
JdbcIO
Supported
Cross-language support
Cross-language support
KafkaIO
Supported
Cross-language support
Cross-language support
LocalFileSystem
Supported
Supported
Supported
ParquetIO
Supported
Supported
Supported
PubSubIO
Supported
Supported
Supported
SpannerIO
Supported
Cross-language support
Supported
TextIO
Supported
Supported
Supported
TFRecordIO
Supported
Supported
Not available
What's next
Read the Apache Beam documentation for
I/O connectors .
Performance characteristics of Pub/Sub to BigQuery pipelines
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
