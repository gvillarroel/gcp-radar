# Dataflow

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 163
Unique features: 212

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-02-27 | C4A Arm worker machine support |  | Dataflow supports the C4A Arm machine series for worker VMs to improve power efficiency and price-performance for many workloads. |
| 2026-02-02 | Managed I/O rolling upgrades for streaming jobs |  | Dataflow Managed I/O can automatically roll connector upgrades into running streaming pipelines as new versions become available. |
| 2026-01-20 | Bangkok region availability |  | Dataflow is available in the Bangkok region (asia-southeast3). |
| 2026-01-13 | Runner v2 harness upgrade notice |  | Dataflow provides advance notice before upgrading the Runner v2 container image for a streaming pipeline. |
| 2025-11-21 | Speculative execution for batch pipelines |  | Dataflow can mitigate stragglers in batch pipelines by launching redundant executions of slow-running tasks. |
| 2025-09-24 | Flex-start GPU provisioning |  | Dataflow supports the flex-start provisioning model for GPU jobs in batch pipelines to improve access to constrained GPU resources. |
| 2025-09-08 | Secure tags for worker VM firewall rules |  | Dataflow can use secure tags to apply firewall rules to worker VMs. |
| 2025-08-27 | Targeted reservations for accelerator pipelines |  | Dataflow supports specifically targeted Compute Engine reservations for pipelines that use GPUs or TPUs. |
| 2025-08-27 | TPU support |  | Dataflow supports TPUs to accelerate inference workloads on frameworks such as PyTorch, JAX, and TensorFlow. |
| 2025-08-11 | Streaming bottleneck detection |  | Dataflow automatically detects performance bottlenecks in streaming jobs and surfaces their causes in the Step Info panel. |
| 2025-06-26 | Automated parallel update workflow |  | Dataflow can update streaming jobs by launching a replacement job in parallel and automatically draining the old job after a specified time. |
| 2025-06-09 | Right fitting for streaming jobs |  | Dataflow right fitting lets you specify resource requirements for streaming pipelines or individual pipeline steps. |
| 2025-03-13 | Data lineage |  | Dataflow supports data lineage to track how data moves through systems. |
| 2025-03-04 | Stockholm region availability |  | Dataflow is available in the Stockholm region (europe-north2). |
| 2025-01-21 | Managed I/O automatic connector upgrades |  | Dataflow Managed I/O can automatically use the latest reliable version of supported I/O connectors. |
| 2024-11-18 | Queretaro region availability |  | Dataflow is available in the Queretaro region (northamerica-south1). |
| 2024-07-11 | Job builder UI |  | The Dataflow job builder UI lets users create and run Dataflow pipelines in the Google Cloud console without writing code. |
| 2024-06-04 | Iceberg read and write support via Managed I/O Java API |  | Dataflow Managed I/O Java API supports reading and writing Apache Iceberg tables. |
| 2024-05-31 | Per-DoFn latency metrics in Metrics Explorer |  | Dataflow exposes per-DoFn latency and processing metrics in Metrics Explorer for streaming pipelines using Apache Beam 2.53.0 and later. |
| 2024-04-26 | Python UDF support in Cloud Storage Text to BigQuery template |  | The Cloud Storage Text to BigQuery (Stream) Dataflow template supports user-defined functions written in Python; The Cloud Storage Text to BigQuery Dataflow template supports user-defined functions written in Python. |
| 2024-04-26 | Python UDF support in Pub/Sub Proto to BigQuery template |  | The Pub/Sub Proto to BigQuery Dataflow template supports user-defined functions written in Python. |
| 2024-04-26 | Python UDF support in Pub/Sub to BigQuery template |  | The Pub/Sub to BigQuery Dataflow template supports user-defined functions written in Python. |
| 2024-04-05 | Google Cloud to Neo4j template |  | The Google Cloud to Neo4j Dataflow template is generally available. |
| 2024-04-05 | Pub/Sub to Datadog template |  | The Pub/Sub to Datadog Dataflow template is generally available. |
| 2024-03-28 | Right fitting for non-Prime batch pipelines |  | Dataflow right fitting is supported for non-Prime batch pipelines. |
| 2024-03-15 | Autoscaling metrics dashboard |  | Dataflow includes new autoscaling metrics and charts that explain scaling decisions, worker CPU utilization, timer backlog, and parallel processing capacity. |
| 2024-03-15 | Worker utilization hints for horizontal autoscaling |  | Dataflow lets users provide worker utilization hints to tune horizontal autoscaling for streaming pipelines. |
| 2024-03-11 | Committed use discounts for streaming jobs |  | Dataflow streaming jobs support committed use discounts for discounted pricing in exchange for long-term compute commitments. |
| 2024-02-27 | At-least-once streaming mode |  | Dataflow supports an at-least-once streaming mode for lower latency and reduced costs in workloads that can tolerate duplicate records. |
| 2024-02-21 | Gemma model inference support |  | Dataflow Apache Beam inference pipelines can use Gemma models. |
| 2024-02-15 | Streaming data enrichment transform |  | Dataflow provides a turnkey transform to enrich streaming data by augmenting records with related data from a second source. |
| 2024-02-12 | Streaming Engine resource-based billing |  | Dataflow Streaming Engine supports resource-based billing based on the total resources consumed by a job. |
| 2024-01-31 | Johannesburg region availability |  | Dataflow is available in the Johannesburg region (africa-south1). |
| 2023-12-18 | Exception sampling |  | Dataflow supports data sampling for pipeline exceptions so users can inspect sample data when unhandled errors occur. |
| 2023-12-12 | Replacement job graph validation |  | Dataflow can validate whether a replacement job is valid before the new job is launched. |
| 2023-12-06 | Job archiving |  | Dataflow lets users archive completed jobs so they move from the main Jobs page to the Archived jobs page in the console. |
| 2023-12-05 | Project monitoring dashboard |  | The Dataflow web-based monitoring interface includes a project-level dashboard for monitoring Dataflow jobs. |
| 2023-11-13 | 000-worker job scaling |  | Dataflow jobs can scale to 4,000 worker VMs. |
| 2023-11-13 | 4 |  | Dataflow jobs can scale to 4,000 worker VMs. |
| 2023-11-13 | Cloud Spanner to Vertex AI Vector Search template |  | The Cloud Spanner to Vertex AI Vector Search Dataflow template is generally available. |
| 2023-10-23 | Cloud Spanner to BigQuery batch template |  | The Cloud Spanner to BigQuery Dataflow template for batch pipelines is available in preview. |
| 2023-09-19 | Dammam region availability |  | Dataflow is available in the Dammam region (me-central2). |
| 2023-09-14 | Tau T2A Arm worker machine support |  | Dataflow supports the Tau T2A Arm machine series as a worker machine type. |
| 2023-09-06 | BigQuery to Bigtable template |  | The BigQuery to Bigtable Dataflow template is generally available. |
| 2023-09-06 | Pub/Sub to Splunk template |  | The Pub/Sub to Splunk Dataflow template is generally available. |
| 2023-08-22 | Berlin region availability |  | Dataflow is available in the Berlin region (europe-west10). |
| 2023-08-15 | Cost monitoring |  | Dataflow provides cost monitoring for observing job costs. |
| 2023-08-15 | In-flight job option update |  | Dataflow lets users update streaming job options without stopping the running job. |
| 2023-07-27 | MySQL to BigQuery template |  | The MySQL to BigQuery Dataflow template is generally available. |
| 2023-07-27 | PostgreSQL to BigQuery template |  | The PostgreSQL to BigQuery Dataflow template is generally available. |
| 2023-07-27 | SQL Server to BigQuery template |  | The SQL Server to BigQuery Dataflow template is generally available. |
| 2023-07-26 | Dynamic thread scaling |  | Dynamic thread scaling automatically adjusts thread usage as part of Dataflow's vertical scaling features. |
| 2023-07-25 | NVIDIA Multi-Process Service support |  | Dataflow GPU workloads can use NVIDIA Multi-Process Service to improve GPU efficiency and utilization when running multiple SDK processes on a shared GPU. |
| 2023-07-24 | Streaming straggler visibility |  | Dataflow lets users view streaming stragglers in the Google Cloud console for troubleshooting. |
| 2023-06-13 | Confidential VM worker support |  | Dataflow supports Confidential VMs for worker VMs. |
| 2023-05-31 | Data sampling |  | Dataflow data sampling lets users observe the data at each step of a pipeline. |
| 2023-04-21 | Automatic Model Refresh |  | Automatic Model Refresh lets Dataflow ML update a machine learning model without stopping an Apache Beam pipeline. |
| 2023-04-19 | Eventarc job management |  | Eventarc job management lets you manage Dataflow jobs by using Eventarc. |
| 2023-04-10 | Dataflow cost monitoring |  | Dataflow cost monitoring provides visibility into Dataflow job costs. |
| 2023-03-30 | Regional availability in Doha (me-central1) |  | This feature makes Dataflow available in the Doha region me-central1. |
| 2023-03-28 | Vertical Autoscaling for batch jobs |  | Vertical Autoscaling automatically adjusts worker machine resources for batch jobs. |
| 2023-03-23 | Regional availability in Turin (europe-west12) |  | This feature makes Dataflow available in the Turin region europe-west12. |
| 2023-01-03 | ES6 JavaScript UDF support in Google-provided templates |  | Google-provided Dataflow templates support ES6 syntax for JavaScript user-defined functions. |
| 2022-12-16 | Regional placement for workers |  | Regional placement for workers lets Dataflow place worker VMs within a specified region. |
| 2022-10-04 | Regional availability in Tel Aviv (me-west1) |  | This feature makes Dataflow available in the Tel Aviv region me-west1. |
| 2022-07-20 | Dataflow Prime |  | Dataflow Prime is an enhanced Dataflow execution offering for running pipelines; Dataflow Prime is an enhanced Dataflow execution offering for running pipelines. |
| 2022-07-11 | Apache Beam SDK for Go |  | The Apache Beam SDK for Go lets you create batch and streaming Dataflow pipelines in Go; The Apache Beam SDK for Go lets you create batch Dataflow pipelines in Go. |
| 2022-06-07 | Regional availability in Dallas (us-south1) |  | This feature makes Dataflow available in the Dallas region us-south1. |
| 2022-05-24 | Regional availability in Columbus (us-east5) |  | This feature makes Dataflow available in the Columbus region us-east5. |
| 2022-05-13 | Flex Template private registry images |  | Flex Template private registry images let Dataflow use Flex Template container images from private registries. |
| 2022-05-10 | Regional availability in Madrid (europe-southwest1) |  | This feature makes Dataflow available in the Madrid region europe-southwest1. |
| 2022-05-03 | Regional availability in Paris (europe-west9) |  | This feature makes Dataflow available in the Paris region europe-west9. |
| 2022-04-20 | Regional availability in Milan (europe-west8) |  | This feature makes Dataflow available in the Milan region europe-west8. |
| 2022-04-06 | Runner v2 |  | Runner v2 is the next-generation Dataflow runner architecture for executing pipelines. |
| 2022-03-31 | Hot key detection and logging | 2022-03-31 | Hot key detection and logging identifies and records hot keys in streaming pipelines for debugging; deprecated on 2022-03-31. |
| 2022-03-17 | Apache Cassandra to Bigtable template |  | This Google-provided template migrates data from Apache Cassandra to Bigtable. |
| 2022-03-17 | Apache Kafka to BigQuery template |  | This Google-provided template loads data from Apache Kafka into BigQuery. |
| 2022-03-17 | BigQuery export to Parquet (via Storage API) template |  | This Google-provided template exports BigQuery data to Parquet by using the Storage API. |
| 2022-03-17 | Bulk Compress Cloud Storage Files template |  | This Google-provided template bulk-compresses files stored in Cloud Storage. |
| 2022-03-17 | Bulk Decompress Cloud Storage Files template |  | This Google-provided template bulk-decompresses files stored in Cloud Storage. |
| 2022-03-17 | Change Data Capture to BigQuery (Stream) template |  | This Google-provided streaming template loads change data capture records into BigQuery. |
| 2022-03-17 | Cloud Spanner to Cloud Storage Text template |  | This Google-provided template exports Cloud Spanner data to Cloud Storage as text files. |
| 2022-03-17 | Cloud Storage Text to BigQuery template |  | This Google-provided streaming template loads text data from Cloud Storage into BigQuery; This Google-provided template loads text data from Cloud Storage into BigQuery. |
| 2022-03-17 | Cloud Storage Text to Firestore template |  | This Google-provided template loads text data from Cloud Storage into Firestore. |
| 2022-03-17 | Cloud Storage Text to Pub/Sub (Batch) template |  | This Google-provided batch template publishes text data from Cloud Storage to Pub/Sub; This Google-provided streaming template publishes text data from Cloud Storage to Pub/Sub. |
| 2022-03-17 | Datastream to Cloud Spanner template |  | This Google-provided template loads Datastream output into Cloud Spanner. |
| 2022-03-17 | File Format Conversion template |  | This Google-provided template converts files between supported data formats. |
| 2022-03-17 | Firestore Bulk Delete template |  | This Google-provided template deletes Firestore documents in bulk. |
| 2022-03-17 | Firestore to Cloud Storage Text template |  | This Google-provided template exports Firestore data to Cloud Storage as text files. |
| 2022-03-17 | Pub/Sub Avro to BigQuery template |  | This Google-provided template loads Avro-encoded Pub/Sub data into BigQuery. |
| 2022-03-17 | Pub/Sub Proto to BigQuery template |  | This Google-provided template loads Protocol Buffers data from Pub/Sub into BigQuery. |
| 2022-03-17 | Pub/Sub Subscription to BigQuery template |  | This Google-provided template loads data from a Pub/Sub subscription into BigQuery. |
| 2022-03-17 | Pub/Sub to Cloud Storage Avro template |  | This Google-provided template writes Pub/Sub data to Cloud Storage in Avro format. |
| 2022-03-17 | Pub/Sub to Cloud Storage Text template |  | This Google-provided template writes Pub/Sub data to Cloud Storage as text files. |
| 2022-03-17 | Pub/Sub to Pub/Sub template |  | This Google-provided template reads from one Pub/Sub source and writes to another Pub/Sub destination. |
| 2022-03-17 | Pub/Sub Topic to BigQuery template |  | This Google-provided template loads data from a Pub/Sub topic into BigQuery. |
| 2022-03-17 | Streaming Data Generator template |  | This Google-provided template generates streaming data for Pub/Sub, BigQuery, and Cloud Storage. |
| 2022-02-16 | Cloud Profiler integration |  | Cloud Profiler integration lets you profile Dataflow pipelines to monitor performance. |
| 2022-01-04 | IAM custom roles support |  | IAM custom roles support lets Dataflow use custom IAM roles with user-managed service accounts. |
| 2021-11-16 | Regional availability in Santiago (southamerica-west1) |  | This feature makes Dataflow available in the Santiago region southamerica-west1. |
| 2021-09-07 | Shielded VM workers |  | Shielded VM workers let Dataflow run worker VMs with Shielded VM protections. |
| 2021-08-03 | Dataflow Shuffle in Toronto (northamerica-northeast2) |  | This feature makes Dataflow Shuffle available in zones in the Toronto region northamerica-northeast2. |
| 2021-08-03 | FlexRS in Toronto (northamerica-northeast2) |  | This feature makes FlexRS available in zones in the Toronto region northamerica-northeast2. |
| 2021-08-03 | Regional endpoints in Toronto (northamerica-northeast2) |  | This feature provides Dataflow regional endpoints in the Toronto region northamerica-northeast2. |
| 2021-08-03 | Streaming Engine in Toronto (northamerica-northeast2) |  | This feature makes Streaming Engine available in zones in the Toronto region northamerica-northeast2. |
| 2021-08-03 | Worker availability in Toronto (northamerica-northeast2) |  | This feature lets Dataflow use workers in zones in the Toronto region northamerica-northeast2. |
| 2021-07-31 | Artifact Registry support for Flex Template images |  | Artifact Registry support lets Dataflow store Flex Template images in Artifact Registry. |
| 2021-07-22 | Custom containers |  | Custom containers let Dataflow run pipelines with user-provided container images; Custom containers let Dataflow run pipelines with user-provided container images. |
| 2021-06-30 | GPU support |  | GPU support lets Dataflow use GPU accelerators for pipeline workloads; GPU support lets Dataflow use GPU accelerators for pipeline workloads. |
| 2021-06-29 | Dataflow Shuffle in Delhi (asia-south2) |  | This feature makes Dataflow Shuffle available in zones in the Delhi region asia-south2. |
| 2021-06-29 | FlexRS in Delhi (asia-south2) |  | This feature makes FlexRS available in zones in the Delhi region asia-south2. |
| 2021-06-29 | Regional endpoints in Delhi (asia-south2) |  | This feature provides Dataflow regional endpoints in the Delhi region asia-south2. |
| 2021-06-29 | Streaming Engine in Delhi (asia-south2) |  | This feature makes Streaming Engine available in zones in the Delhi region asia-south2. |
| 2021-06-29 | Worker availability in Delhi (asia-south2) |  | This feature lets Dataflow use workers in zones in the Delhi region asia-south2. |
| 2021-06-28 | Dataflow snapshots |  | Dataflow snapshots let you capture pipeline state for later recovery or analysis; Dataflow snapshots let you capture pipeline state for later recovery or analysis. |
| 2021-06-22 | Dataflow Shuffle in Melbourne (australia-southeast2) |  | This feature makes Dataflow Shuffle available in zones in the Melbourne region australia-southeast2. |
| 2021-06-22 | FlexRS in Melbourne (australia-southeast2) |  | This feature makes FlexRS available in zones in the Melbourne region australia-southeast2. |
| 2021-06-22 | Regional endpoints in Melbourne (australia-southeast2) |  | This feature provides Dataflow regional endpoints in the Melbourne region australia-southeast2. |
| 2021-06-22 | Streaming Engine in Melbourne (australia-southeast2) |  | This feature makes Streaming Engine available in zones in the Melbourne region australia-southeast2. |
| 2021-06-22 | Worker availability in Melbourne (australia-southeast2) |  | This feature lets Dataflow use workers in zones in the Melbourne region australia-southeast2. |
| 2021-06-14 | Dataflow SQL Java aggregate UDFs |  | Dataflow SQL Java aggregate UDFs let you define aggregate user-defined functions in Java. |
| 2021-06-09 | Dataflow SQL Java UDFs |  | Dataflow SQL Java UDFs let you write user-defined functions for Dataflow SQL in Java. |
| 2021-05-14 | Human-readable hot key logging |  | Human-readable hot key logging records hot keys in a readable format for troubleshooting. |
| 2021-05-11 | Dataflow Shuffle default for batch pipelines |  | This feature makes Dataflow Shuffle the default execution mode for batch pipelines. |
| 2021-03-24 | Dataflow Shuffle in Warsaw (europe-central2) |  | This feature makes Dataflow Shuffle available in zones in the Warsaw region europe-central2. |
| 2021-03-24 | FlexRS in Warsaw (europe-central2) |  | This feature makes FlexRS available in zones in the Warsaw region europe-central2. |
| 2021-03-24 | Regional endpoints in Warsaw (europe-central2) |  | This feature provides Dataflow regional endpoints in the Warsaw region europe-central2. |
| 2021-03-24 | Streaming Engine in Warsaw (europe-central2) |  | This feature makes Streaming Engine available in zones in the Warsaw region europe-central2. |
| 2021-03-24 | Worker availability in Warsaw (europe-central2) |  | This feature lets Dataflow use workers in zones in the Warsaw region europe-central2. |
| 2021-03-22 | Dataflow SQL SQL UDFs |  | Dataflow SQL SQL UDFs let you write user-defined functions for Dataflow SQL in SQL. |
| 2021-03-19 | Execution details |  | Execution details provide detailed runtime information for Dataflow job execution. |
| 2021-02-03 | Dataflow Shuffle |  | Dataflow Shuffle is a managed shuffle service for Dataflow batch pipelines; Dataflow Shuffle is a managed shuffle service for Dataflow batch pipelines. |
| 2021-02-03 | FlexRS |  | FlexRS is a flexible resource scheduling feature for reducing Dataflow job cost; FlexRS is a flexible resource scheduling feature for reducing Dataflow job cost. |
| 2021-02-03 | Regional endpoints in Finland (europe-north1) |  | This feature provides Dataflow regional endpoints in Finland europe-north1. |
| 2021-02-03 | Regional endpoints in Hong Kong (asia-east2) |  | This feature provides Dataflow regional endpoints in Hong Kong asia-east2. |
| 2021-02-03 | Regional endpoints in Jakarta (asia-southeast2) |  | This feature provides Dataflow regional endpoints in Jakarta asia-southeast2. |
| 2021-02-03 | Regional endpoints in Las Vegas (us-west4) |  | This feature provides Dataflow regional endpoints in Las Vegas us-west4. |
| 2021-02-03 | Regional endpoints in Osaka (asia-northeast2) |  | This feature provides Dataflow regional endpoints in Osaka asia-northeast2. |
| 2021-02-03 | Regional endpoints in Salt Lake City (us-west3) |  | This feature provides Dataflow regional endpoints in Salt Lake City us-west3. |
| 2021-02-03 | Regional endpoints in Seoul (asia-northeast3) |  | This feature provides Dataflow regional endpoints in Seoul asia-northeast3. |
| 2021-02-03 | Streaming Engine |  | Streaming Engine is a service that offloads streaming execution state and processing from worker VMs; Streaming Engine is a service that offloads streaming execution state and processing from worker VMs. |
| 2020-11-11 | Interactive Notebooks |  | Interactive Notebooks provide notebook-based development for Dataflow workflows; Interactive Notebooks provide notebook-based development support for Dataflow workflows. |
| 2020-11-05 | Regional endpoints in Los Angeles (us-west2) |  | This feature provides Dataflow regional endpoints in Los Angeles us-west2. |
| 2020-11-05 | Regional endpoints in Mumbai (asia-south1) |  | This feature provides Dataflow regional endpoints in Mumbai asia-south1. |
| 2020-11-05 | Regional endpoints in São Paulo (southamerica-east1) |  | This feature provides Dataflow regional endpoints in São Paulo southamerica-east1. |
| 2020-11-05 | Regional endpoints in Zurich (europe-west6) |  | This feature provides Dataflow regional endpoints in Zurich europe-west6. |
| 2020-09-30 | Flex Templates |  | Flex Templates let you package and launch Dataflow templates with containerized pipeline environments; Flex Templates let users package and launch Dataflow jobs using flexible container-based templates. |
| 2020-09-29 | Network tags parameter |  | The network tags parameter lets you apply network tags to all worker VMs for a Dataflow job. |
| 2020-07-27 | Regional endpoints in Montréal (northamerica-northeast1) |  | This feature provides Dataflow regional endpoints in Montréal northamerica-northeast1. |
| 2020-07-27 | Regional endpoints in Singapore (asia-southeast1) |  | This feature provides Dataflow regional endpoints in Singapore asia-southeast1. |
| 2020-07-27 | Regional endpoints in Sydney (australia-southeast1) |  | This feature provides Dataflow regional endpoints in Sydney australia-southeast1. |
| 2020-06-08 | Worker availability in Jakarta (asia-southeast2) |  | This feature lets Dataflow use workers in zones in the Jakarta region asia-southeast2. |
| 2020-04-20 | Worker support in us-west4 region |  | Dataflow can run worker VMs in zones within the us-west4 region. |
| 2020-04-15 | Dataflow SQL | 2024-07-31 | Dataflow SQL provides a SQL-based interface for working with Dataflow jobs in the console and CLI; Dataflow SQL lets users develop and run Dataflow jobs using SQL; deprecated on 2024-07-31. |
| 2020-04-15 | Parameterized queries in Dataflow SQL UI |  | The Dataflow SQL UI supports running parameterized SQL queries. |
| 2020-04-07 | Flexible Resource Scheduling |  | Flexible Resource Scheduling optimizes Dataflow resource usage and cost for eligible jobs; Flexible Resource Scheduling optimizes Dataflow resource usage and cost for eligible jobs. |
| 2020-04-07 | Regional endpoints |  | Regional endpoints let users submit and manage Dataflow jobs through region-specific service endpoints; Regional endpoints let users submit and manage Dataflow jobs through region-specific service endpoints. |
| 2020-03-03 | BigQuery load configuration in Dataflow SQL |  | Dataflow SQL lets users specify how data is loaded into a BigQuery table. |
| 2020-03-03 | Multiple output destinations in Dataflow SQL |  | Dataflow SQL can write query results to two destinations, including Pub/Sub. |
| 2020-03-03 | Pipeline options in Dataflow SQL UI |  | The Dataflow SQL UI lets users set pipeline execution options. |
| 2020-02-24 | Customer-managed encryption keys |  | Dataflow supports customer-managed encryption keys through Cloud Key Management Service; Dataflow supports customer-managed encryption keys through Cloud Key Management Service. |
| 2020-02-24 | Worker support in us-west3 region |  | Dataflow can run worker VMs in zones within the us-west3 region. |
| 2020-02-04 | Enhanced observability in monitoring UI |  | The Dataflow monitoring UI includes enhanced observability features for troubleshooting batch and streaming pipelines. |
| 2020-01-24 | Worker support in asia-northeast3 region |  | Dataflow can run worker VMs in zones within the asia-northeast3 region. |
| 2019-11-18 | Cloud Storage filesets as Dataflow SQL sources |  | Dataflow SQL can use Cloud Storage filesets as input data sources. |
| 2019-11-18 | Pub/Sub message preview in Dataflow SQL UI |  | The Dataflow SQL UI can preview the content of Cloud Pub/Sub messages. |
| 2019-11-18 | Schema assignment in Dataflow SQL UI |  | The Dataflow SQL UI lets users assign schemas to data sources. |
| 2019-10-25 | Cloud KMS audit logs for Dataflow key operations |  | Dataflow integrates with Cloud KMS audit logs for key operations. |
| 2019-10-25 | Customer-managed encryption for Dataflow Shuffle state |  | Dataflow Shuffle state can be protected with a customer-managed encryption key. |
| 2019-10-08 | Python 3 support |  | Dataflow supports running Apache Beam pipelines with Python 3.5, 3.6, and 3.7; Dataflow supports running Apache Beam pipelines with Python 3.5, 3.6, and 3.7. |
| 2019-10-08 | Python streaming support |  | Dataflow supports Python streaming pipelines with Apache Beam SDK 2.16 or higher. |
| 2019-10-08 | Streaming autoscaling for Python pipelines |  | Python streaming pipelines can use Dataflow streaming autoscaling. |
| 2019-10-08 | Streaming Engine for Python pipelines |  | Python streaming pipelines can use Dataflow Streaming Engine. |
| 2019-10-08 | Update and drain for Python streaming pipelines |  | Python streaming pipelines can be updated and drained in Dataflow. |
| 2019-09-03 | Automatic hot key detection |  | Dataflow can automatically detect hot keys in batch pipelines for Apache Beam SDK 2.15.0 or higher. |
| 2019-08-09 | VPC Service Controls integration |  | Dataflow integrates with VPC Service Controls for service perimeter protection; Dataflow integrates with VPC Service Controls for service perimeter protection. |
| 2019-04-18 | Worker support in asia-northeast2 region |  | Dataflow can run worker VMs in zones within the asia-northeast2 region. |
| 2019-04-10 | Streaming autoscaling |  | Streaming autoscaling automatically adjusts resources for streaming pipelines that use Streaming Engine. |
| 2019-03-20 | Apache Beam SDK 2.4.0 | 2019-03-20 | Apache Beam SDK 2.4.0 is an SDK version supported by Dataflow pipelines; deprecated on 2019-03-20. |
| 2019-03-20 | Cloud Dataflow SDK 2.4.0 | 2019-03-20 | Cloud Dataflow SDK 2.4.0 is an SDK version for Dataflow pipelines; deprecated on 2019-03-20. |
| 2019-03-11 | Worker support in europe-west6 region |  | Dataflow can run worker VMs in zones within the europe-west6 region. |
| 2019-02-25 | Data freshness metrics |  | The Dataflow monitoring interface shows data freshness metrics for pipelines. |
| 2019-02-25 | System latency metrics |  | The Dataflow monitoring interface shows system latency metrics for pipelines. |
| 2018-12-17 | Apache Beam SDK for Java 2.0.0-2.4.0 | March 25 | Apache Beam SDK for Java versions 2.0.0 through 2.4.0 are SDK versions used with Dataflow; deprecated on March 25. |
| 2018-12-17 | Apache Beam SDK for Python 2.0.0-2.4.0 | March 25 | Apache Beam SDK for Python versions 2.0.0 through 2.4.0 are SDK versions used with Dataflow; deprecated on March 25. |
| 2018-12-17 | Cloud Dataflow SDK for Java 2.0.0-2.4.0 | March 25 | Cloud Dataflow SDK for Java versions 2.0.0 through 2.4.0 are SDK versions for Dataflow jobs; deprecated on March 25. |
| 2018-12-17 | Cloud Dataflow SDK for Python 2.0.0-2.4.0 | March 25 | Cloud Dataflow SDK for Python versions 2.0.0 through 2.4.0 are SDK versions for Dataflow jobs; deprecated on March 25. |
| 2018-10-22 | Worker support in asia-east2 region |  | Dataflow can run worker VMs in zones within the asia-east2 region. |
| 2018-10-16 | Cloud Dataflow SDK 1.x for Java | October 16 | Cloud Dataflow SDK 1.x for Java is a legacy Java SDK for Dataflow jobs; deprecated on October 16. |
| 2018-10-03 | Public IP parameter |  | The Public IP parameter lets users disable public IP addresses on Dataflow worker nodes. |
| 2018-07-10 | Worker support in us-west2 region |  | Dataflow can run worker VMs in zones within the us-west2 region. |
| 2018-06-11 | User-managed controller service account |  | Dataflow lets users specify a user-managed controller service account for pipeline jobs. |
| 2018-06-11 | Worker support in europe-north1 region |  | Dataflow can run worker VMs in zones within the europe-north1 region. |
| 2018-04-26 | Side input metrics |  | The Dataflow monitoring interface shows side input metrics for pipelines. |
| 2018-01-10 | Worker support in europe-west4 region |  | Dataflow can run worker VMs in zones within the europe-west4 region. |
| 2018-01-10 | Worker support in northamerica-northeast1 region |  | Dataflow can run worker VMs in zones within the northamerica-northeast1 region. |
| 2017-10-31 | Worker support in asia-south1 region |  | Dataflow can run worker VMs in zones within the asia-south1 region. |
| 2017-10-30 | Dataflow Shuffle for Apache Beam Python |  | Dataflow Shuffle is available for pipelines using Apache Beam SDK for Python version 2.1 or later. |
| 2017-10-25 | Google-provided templates |  | Dataflow provides Google-built templates for common pipeline patterns. |
| 2017-09-05 | Dataflow worker support in southamerica-east1 |  | Dataflow can run workers in zones within the southamerica-east1 region. |
| 2017-08-01 | Dataflow worker support in europe-west3 |  | Dataflow can run workers in zones within the europe-west3 region. |
| 2017-07-20 | Stackdriver error reports in Dataflow monitoring interface |  | Dataflow provides direct access to Stackdriver error reports from the monitoring interface. |
| 2017-06-20 | Dataflow worker support in australia-southeast1 |  | Dataflow can run workers in zones within the australia-southeast1 region. |
| 2017-06-06 | Dataflow worker support in europe-west2 |  | Dataflow can run workers in zones within the europe-west2 region. |
| 2017-04-25 | Per-step worker logs in Dataflow UI |  | Dataflow exposes per-step worker logs directly in the UI. |
| 2016-09-29 | Autoscaling for streaming pipelines |  | Dataflow supports autoscaling for streaming pipelines with select sources and sinks. |
| 2016-07-27 | Cloud Dataflow SDK for Python 0.4.0 support |  | Dataflow supports running pipelines remotely with the Cloud Dataflow SDK for Python 0.4.0. |
| 2015-08-12 | Cloud Dataflow Service general availability |  | The Cloud Dataflow Service reached general availability. |
| 2015-04-16 | Cloud Dataflow Service beta release |  | The Cloud Dataflow Service entered beta. |
| 2015-04-13 | gcloud command-line interface for Dataflow |  | Dataflow is available through the gcloud alpha command-line interface. |
| 2015-03-27 | Elastic worker pool scaling for batch pipelines |  | Dataflow batch pipelines can automatically grow and shrink the worker pool during different execution stages. |
| 2015-03-01 | Dynamic work rebalancing |  | Dataflow supports dynamic work rebalancing during pipeline execution. |

Source file slug: `dataflow.md`

