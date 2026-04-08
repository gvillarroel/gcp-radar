# Pub/Sub

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 112
Unique features: 74

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-13 | Pub/Sub remote MCP server |  | The Pub/Sub remote MCP server lets you manage Pub/Sub topics, subscriptions, and snapshots, and publish messages to topics. |
| 2026-01-20 | Pub/Sub availability in asia-southeast3 |  | Pub/Sub is available in the asia-southeast3 region. |
| 2025-07-31 | Pub/Sub Ruby client library v2 | 2026-07-31 | The v2 Pub/Sub Ruby client library is deprecated and will no longer receive security or bug fixes after the effective date; deprecated on 2026-07-31. |
| 2025-07-15 | Pub/Sub Go client library v1 | 2026-07-31 | The v1 Pub/Sub Go client library is deprecated and will no longer receive security or bug fixes after the effective date; deprecated on 2026-07-31. |
| 2025-06-02 | Single Message Transforms (SMTs) |  | Single Message Transforms let you make lightweight modifications to message data and attributes within Pub/Sub topics or subscriptions. |
| 2025-03-04 | Pub/Sub availability in europe-north2 |  | Pub/Sub is available in the europe-north2 region. |
| 2025-03-03 | Pub/Sub import topics |  | Import topics let you ingest streaming data into Pub/Sub from Azure Event Hubs, Amazon Managed Streaming for Apache Kafka, and Confluent Cloud. |
| 2024-11-18 | Pub/Sub availability in northamerica-south1 |  | Pub/Sub is available in the northamerica-south1 region. |
| 2024-11-06 | Cloud Storage import topics |  | Cloud Storage import topics let you ingest data from Cloud Storage into Pub/Sub. |
| 2024-11-06 | Platform logs for Cloud Storage import topics |  | Google Cloud platform logs can be enabled to help troubleshoot Cloud Storage import topics. |
| 2024-10-01 | Pub/Sub OpenTelemetry tracing |  | OpenTelemetry tracing lets you identify and trace latency for Pub/Sub client library operations. |
| 2024-09-30 | Subscription message retention duration |  | Subscription message retention duration can now be increased to 31 days. |
| 2024-08-20 | BigQuery subscriptions table schema type conversions |  | BigQuery subscriptions with Use table schema enabled now support type conversions for DATE, TIME, DATETIME, TIMESTAMP, NUMERIC, and BIGNUMERIC values. |
| 2024-08-20 | Cloud Storage subscriptions Avro schema from topic schema |  | Cloud Storage subscriptions can use the schema of the attached Pub/Sub topic when writing Avro files. |
| 2024-08-20 | Pub/Sub schema definition size limit |  | Pub/Sub increased the schema definition size limit to 300 KB. |
| 2024-07-01 | Pub/Sub topics and subscriptions in Analytics Hub |  | Data publishers can share Pub/Sub topics and manage subscriptions in Analytics Hub in public preview. |
| 2024-04-08 | Pub/Sub import topics for Amazon Kinesis Data Streams |  | Import topics can ingest streaming data from Amazon Kinesis Data Streams into Pub/Sub. |
| 2024-02-22 | Subscription backlog metrics for filtered subscriptions |  | When filtering is enabled, backlog metrics include only messages that match the filter. |
| 2024-01-22 | BigQuery subscriptions parse JSON messages with table schema |  | BigQuery subscriptions can parse JSON messages by using the schema of a BigQuery table. |
| 2023-10-16 | BigQuery subscriptions support BigQuery change data capture |  | BigQuery subscriptions now support BigQuery change data capture in public preview. |
| 2023-09-19 | BigQuery subscription dead-letter reason attribute |  | Messages written to a dead letter topic include an attribute that explains why the message could not be written to BigQuery. |
| 2023-08-22 | Pub/Sub regional availability in europe-west10 |  | Pub/Sub is available in the europe-west10 region. |
| 2023-07-28 | Pub/Sub Cloud Storage subscriptions |  | Cloud Storage subscriptions let Pub/Sub write messages directly to an existing Cloud Storage bucket. |
| 2023-07-18 | Push subscription payload unwrapping |  | Payload unwrapping delivers Pub/Sub messages with only the message data in the HTTP body. |
| 2023-05-15 | BigQuery subscription NUMERIC and BIGNUMERIC support |  | BigQuery subscriptions support the NUMERIC and BIGNUMERIC data types. |
| 2023-03-21 | Eventarc push subscriptions to Workflows destinations |  | In service perimeter-protected projects, Eventarc can create a Pub/Sub push subscription whose endpoint is a Workflows execution. |
| 2023-03-21 | Pub/Sub regional availability in europe-west12 |  | Pub/Sub is available in the europe-west12 region. |
| 2023-03-13 | Pub/Sub schema updates |  | Pub/Sub schemas can be updated after creation. |
| 2022-11-18 | Kafka Connector library for Pub/Sub and Pub/Sub Lite |  | The Kafka Connector library supports integration with Pub/Sub and Pub/Sub Lite; The Kafka Connector library supports integration with Pub/Sub and Pub/Sub Lite. |
| 2022-11-15 | BigQuery subscription JSON type support |  | BigQuery subscriptions support the JSON type for string fields, including data and attributes. |
| 2022-11-01 | BigQuery subscription Avro logical types support |  | BigQuery subscriptions support the Avro logical types timestamp-micros, date, and time-micros. |
| 2022-09-20 | Pub/Sub monitoring dashboards for topics and subscriptions |  | Pub/Sub includes new monitoring dashboards for topics and subscriptions in the console. |
| 2022-09-14 | BigQuery subscriptions |  | BigQuery subscriptions can map Pub/Sub string fields to TIMESTAMP, DATETIME, DATE, or TIME columns in BigQuery; Pub/Sub can create BigQuery subscriptions that write messages directly to an existing BigQuery table. |
| 2022-09-13 | Pub/Sub regional availability |  | Pub/Sub became available in the me-west1 region; Pub/Sub became available in the us-south1 region. |
| 2022-05-31 | Pub/Sub Java client library gRPC compression |  | The Pub/Sub Java client library now supports gRPC compression for publisher requests. |
| 2022-03-07 | Exactly-once delivery |  | Exactly-once delivery lets subscribers receive successfully published messages exactly once. |
| 2021-12-08 | Topic message retention |  | Extended topic retention lets Pub/Sub retain published messages for up to 31 days. |
| 2021-08-03 | Pub/Sub Lite regional availability |  | Pub/Sub Lite became available in the northamerica-northeast2 region; Pub/Sub Lite became available in additional regions. |
| 2021-07-27 | Pub/Sub push subscriptions with Cloud Run service endpoints and VPC Service Controls |  | Pub/Sub push subscriptions can use Cloud Run service endpoints protected by VPC Service Controls; Pub/Sub push subscriptions can use Cloud Run service endpoints protected by VPC Service Controls in Preview. |
| 2021-07-19 | Pub/Sub Lite Python client library |  | The Pub/Sub Lite Python client library reached GA; The Pub/Sub Lite Python client library provides Python access to Pub/Sub Lite. |
| 2021-07-08 | Pub/Sub Lite Go client library |  | The Pub/Sub Lite Go client library reached GA. |
| 2021-06-30 | Pub/Sub message schemas |  | Pub/Sub message schemas reached GA; Pub/Sub message schemas are available in Preview. |
| 2021-03-22 | Pub/Sub Lite topic partition increases |  | Pub/Sub Lite topics can have their partition count increased. |
| 2021-02-24 | Apache Spark connector for Pub/Sub Lite |  | An Apache Spark connector is available for Pub/Sub Lite. |
| 2020-11-18 | Pub/Sub message filtering |  | Pub/Sub message filtering lets subscriptions deliver only messages that match filter expressions; Pub/Sub message filtering lets subscriptions deliver only messages that match filter expressions. |
| 2020-10-30 | Pub/Sub Lite Kafka Shim Java client library |  | The Kafka Shim Java client library lets Kafka API clients use Pub/Sub Lite as a backend. |
| 2020-10-19 | Pub/Sub message ordering |  | Pub/Sub message ordering preserves the order of messages within an ordering key; Pub/Sub message ordering preserves the order of messages within an ordering key. |
| 2020-10-09 | Pub/Sub Lite |  | Pub/Sub Lite is a low-cost, high-throughput messaging service with partitioned topics and subscriptions; Pub/Sub Lite is a low-cost, high-throughput messaging service with partitioned topics and subscriptions. |
| 2020-08-28 | Pub/Sub subscription detachment |  | Pub/Sub subscription detachment lets you detach a subscription from its topic. |
| 2020-06-16 | Pub/Sub subscription retry policies |  | Pub/Sub subscription retry policies control how failed message deliveries are retried. |
| 2020-05-18 | Pub/Sub Lite Java client library |  | The Pub/Sub Lite Java client library provides Java access to Pub/Sub Lite. |
| 2020-04-20 | Pub/Sub dead-letter topics |  | Dead-letter topics route undeliverable messages from subscriptions to a separate topic. |
| 2019-09-23 | Pub/Sub resource location restrictions |  | Resource location restrictions let you control where Pub/Sub topic messages are stored; Resource location restrictions let you control where Pub/Sub topic messages are stored. |
| 2019-09-05 | Pub/Sub customer-managed encryption keys (CMEK) |  | Pub/Sub supports customer-managed encryption keys for encrypting data with Cloud KMS keys; Pub/Sub supports customer-managed encryption keys for encrypting data with Cloud KMS keys. |
| 2019-08-29 | Pub/Sub Python client library |  | The Python client library provides Pub/Sub access from Python applications. |
| 2019-07-17 | Pub/Sub push subscription authentication |  | Pub/Sub can authenticate requests sent to push subscription endpoints. |
| 2019-05-16 | Pub/Sub subscription expiration policy management |  | Pub/Sub lets you modify subscription expiration policies. |
| 2019-04-09 | Push subscription authentication |  | Allows push subscriptions to authenticate delivery requests. |
| 2019-03-11 | Cloud Pub/Sub regional availability |  | Cloud Pub/Sub is available in the europe-west6 region (Zurich, Switzerland); Cloud Pub/Sub is available in the asia-east2 region (Hong Kong). |
| 2019-02-05 | Pub/Sub seek |  | Allows subscribers to alter the acknowledgement state of messages in bulk for replay or discard workflows; Allows subscribers to alter the acknowledgement state of messages in bulk for replay or discard workflows. |
| 2018-09-19 | Pub/Sub labels |  | Adds label support for Cloud Pub/Sub resources; Adds label support for Cloud Pub/Sub resources. |
| 2018-05-31 | Pub/Sub client libraries |  | Provides GA client libraries for C#, Go, and Java. |
| 2018-05-23 | Cloud Pub/Sub audit logging |  | Provides GA audit logging for Cloud Pub/Sub. |
| 2018-04-20 | Pub/Sub gRPC service APIs |  | Pub/Sub gRPC service APIs, including StreamingPull, reached general availability for production workloads; Pub/Sub gRPC service APIs were announced in beta. |
| 2018-02-20 | Pub/Sub audit logging |  | Pub/Sub can generate Google Cloud Audit Logs to track usage and access. |
| 2018-01-24 | Pub/Sub gcloud commands |  | Pub/Sub gcloud commands reached general availability and no longer require the beta label. |
| 2017-08-30 | Pub/Sub StreamingPull API |  | StreamingPull entered beta to improve end-to-end message latency and CPU utilization with updated client libraries. |
| 2015-12-01 | Pub/Sub subscription byte cost metric |  | Pub/Sub exposes a quota metric for subscription byte cost. |
| 2015-12-01 | Pub/Sub topic byte cost metric |  | Pub/Sub exposes a quota metric for topic byte cost. |
| 2015-11-01 | Pub/Sub publish timestamp field |  | Pulled messages include the original publish timestamp. |
| 2015-06-01 | Pub/Sub API v1 |  | Pub/Sub API v1 reached stable production release. |
| 2015-02-01 | Pub/Sub API v1beta2 |  | Pub/Sub API v1beta2 was released as a beta version. |
| 2014-11-01 | Pub/Sub batch request support |  | Pub/Sub added batch Publish and Pull request support. |
| 2014-06-01 | Pub/Sub API v1beta1 |  | Pub/Sub API v1beta1 was initially released. |

Source file slug: `pub-sub.md`

