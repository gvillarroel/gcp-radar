# Dataproc

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 256
Unique features: 241

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-02-06 | Snapshot diagnostic data sharing |  | Dataproc on Compute Engine can share snapshot diagnostic data from cluster diagnose output with Google Cloud support using the tarball access flag. |
| 2026-02-05 | Apache Pig on ARM images |  | Apache Pig is available in Dataproc ARM images; Apache Pig is available in Dataproc ARM images. |
| 2026-02-05 | Custom PyPI repository for pip |  | Dataproc supports configuring the PyPI repository used by pip with the dataproc:pypi.repository property, including a Google-hosted cache option; Dataproc supports configuring the PyPI repository used by pip with the dataproc:pypi.repository property, including a Google-hosted cache option. |
| 2025-12-05 | Default dataproc-ml in 2.3-ml images |  | Dataproc 2.3-ml images include dataproc-ml by default. |
| 2025-09-02 | Multi-tenant clusters |  | Dataproc supports multi-tenant clusters that let multiple users run isolated workloads on a shared cluster. |
| 2025-08-12 | BigLake Iceberg REST catalog support |  | The Dataproc Iceberg optional component supports the BigLake Iceberg REST catalog in Compute Engine image versions 2.2 and 2.3. |
| 2025-08-12 | Checkpoint diagnostic data sharing |  | Dataproc on Compute Engine can share checkpoint diagnostic data from the temp bucket with Google Cloud support through a cluster property. |
| 2025-07-15 | Dynamic multi-tenant cluster updates |  | Dataproc supports dynamic updates for multi-tenant clusters. |
| 2025-07-07 | Cluster Scheduled Stop |  | Cluster Scheduled Stop can automatically stop Dataproc clusters after an idle period or at a scheduled time. |
| 2025-05-23 | Zero-scale clusters |  | Dataproc supports zero-scale clusters that use only secondary workers and can scale down to zero when idle. |
| 2025-05-12 | Spark UI Event Timeline view |  | The Spark UI for Dataproc Serverless batches and interactive sessions includes an Event Timeline view for troubleshooting. |
| 2025-05-12 | Spark UI Task Quantile view |  | The Spark UI for Dataproc Serverless batches and interactive sessions includes a Task Quantile view for troubleshooting. |
| 2025-03-17 | Enhanced Flexibility Mode with primary worker shuffle |  | Dataproc on Compute Engine supports Enhanced Flexibility Mode with primary worker shuffle mode for Spark. |
| 2024-10-25 | Hadoop Google Secret Manager Credential Provider for Serverless Spark |  | Dataproc Serverless for Spark supports the Hadoop Google Secret Manager Credential Provider in 1.2 and 2.2 runtimes. |
| 2024-09-03 | Dataproc on GKE runtime 2.0 | 2024-09-03 | Dataproc on GKE runtime version 2.0 provides Spark 3.1 support; deprecated on 2024-09-03. |
| 2024-07-03 | Cloud Profiler for Serverless Spark |  | Dataproc Serverless for Spark supports Cloud Profiler and can be enabled with profiling properties. |
| 2024-04-09 | Advanced troubleshooting for Serverless Spark |  | Dataproc Serverless for Spark provides advanced troubleshooting for supported Spark workloads. |
| 2024-04-09 | Autotuning Spark workloads |  | Dataproc Serverless for Spark supports autotuning for Spark workloads. |
| 2024-04-09 | Gemini-assisted troubleshooting for Serverless Spark |  | Dataproc Serverless for Spark includes Gemini-assisted troubleshooting for supported Spark workloads. |
| 2024-03-28 | Hadoop Google Secret Manager Credential Provider for Compute Engine 2.0 images |  | Dataproc on Compute Engine 2.0 image versions support the Hadoop Google Secret Manager Credential Provider. |
| 2024-02-28 | Hadoop Google Secret Manager Credential Provider for Compute Engine 2.1 images |  | Dataproc on Compute Engine 2.1 image versions support the Hadoop Google Secret Manager Credential Provider. |
| 2024-02-08 | Hadoop Google Secret Manager Credential Provider for Compute Engine 2.2 images |  | Dataproc on Compute Engine 2.2 image versions support the Hadoop Google Secret Manager Credential Provider. |
| 2024-02-08 | Ranger Cloud Storage downscoping |  | Dataproc on Compute Engine Ranger Cloud Storage integration supports downscoping. |
| 2024-02-08 | Ranger Cloud Storage token caching |  | Dataproc on Compute Engine Ranger Cloud Storage integration supports caching tokens in a local cache. |
| 2024-01-15 | Dataproc Spark Enhancements in Google Cloud console |  | Dataproc Spark Enhancements are available in the Google Cloud console cluster and job creation pages. |
| 2023-12-04 | Confidential Computing option for cluster creation |  | The Google Cloud console includes a Confidential Computing option when creating a Dataproc cluster on Compute Engine. |
| 2023-11-08 | Dataproc Serverless autoscaling V2 |  | Dataproc Serverless supports autoscaling V2 to help manage workloads, performance, and costs. |
| 2023-10-23 | YARN node manager health metric |  | Dataproc on Compute Engine collects a health metric for individual YARN node managers on cluster VMs. |
| 2023-09-08 | Auto zone placement for clusters |  | Dataproc supports automatic zone placement for clusters in the Google Cloud console with the Any zone option. |
| 2023-09-04 | Serverless interactive sessions pages in console |  | The Google Cloud console includes detail and list pages for Dataproc Serverless interactive sessions. |
| 2023-08-11 | Premium disk tier for Serverless node initialization |  | Dataproc Serverless supports a Premium disk tier option to improve compute node initialization reliability. |
| 2023-07-14 | Driver node group YARN burst configuration |  | Clusters using a driver node group configure YARN queues with a higher user-limit-factor to improve single-user resource utilization. |
| 2023-07-07 | Automatic labels for Serverless batch resources |  | Dataproc Serverless batch resources automatically receive batch ID, batch UUID, and location labels. |
| 2023-07-07 | Configurable BigQuery connector for Serverless Spark |  | Dataproc Serverless for Spark supports updating the BigQuery connector version or URI through runtime properties. |
| 2023-06-29 | Premium compute tier for Serverless Spark |  | Dataproc Serverless Spark workloads support a premium compute tier for higher performance per core. |
| 2023-06-29 | Premium storage tier for Serverless Spark |  | Dataproc Serverless Spark workloads support a premium storage tier for higher throughput and IOPS. |
| 2023-05-18 | High availability mode for Component Gateway and Spark History Server UI |  | Dataproc supports high availability mode for Component Gateway, Knox, and the Spark History Server UI through a cluster property. |
| 2023-04-24 | Autoscaler recommendation reasoning details |  | Dataproc exposes autoscaler recommendation reasoning details in Cloud Logging logs. |
| 2023-03-30 | Dataproc regional availability in me-central1 |  | Dataproc is available in the me-central1 (Doha) region. |
| 2023-03-28 | pd-extreme disk support for Dataproc cluster creation |  | Dataproc cluster creation supports the pd-extreme disk type. |
| 2023-03-23 | Dataproc regional availability in europe-west12 |  | Dataproc is available in the europe-west12 (Turin) region. |
| 2023-02-10 | Batch listing filters |  | Dataproc batch listings support filtering by batch ID, batch UUID, state, and create time. |
| 2023-02-10 | Large statically sized Dataproc Serverless for Spark batches |  | Dataproc Serverless for Spark supports statically sized batch workloads with more than 500 executors. |
| 2023-02-10 | Unconditional TTL for Dataproc Serverless for Spark batches |  | Dataproc Serverless for Spark batches support an unconditional TTL that terminates workloads when the TTL expires. |
| 2023-01-23 | Dataproc Metastore integration with Trino |  | Dataproc supports Dataproc Metastore integration with Trino. |
| 2023-01-23 | Hive Metastore OSS metrics source |  | Dataproc cluster creation supports enabling Hive Metastore OSS metrics through the metric-sources property. |
| 2022-12-09 | Dataproc job state metric |  | Dataproc provides the dataproc.googleapis.com/job/state metric for monitoring job states and querying job IDs in MQL. |
| 2022-11-17 | Dataproc Serverless for Spark metrics |  | Dataproc Serverless for Spark provides Spark and system metrics with customizable driver and executor metric overrides. |
| 2022-11-11 | Dataproc images 2.0.50 and 2.1.0-RC3 | 2022-11-11 | Dataproc image versions 2.0.50 and preview 2.1.0-RC3 were deprecated for cluster creation; deprecated on 2022-11-11. |
| 2022-11-11 | Dataproc Serverless for Spark runtime versions 1.0.22 and 2.0.2 | 2022-11-11 | Dataproc Serverless for Spark runtime versions 1.0.22 and 2.0.2 were deprecated for new batch submissions; deprecated on 2022-11-11. |
| 2022-11-07 | Cross-region Dataproc Metastore attachment via gRPC endpoint |  | Clusters in any region can attach to a Dataproc Metastore service that uses the gRPC endpoint protocol. |
| 2022-10-31 | Approximate usage reporting for Dataproc Serverless for Spark |  | Dataproc Serverless for Spark outputs approximate usage data for DCU and shuffle storage consumption after a workload finishes. |
| 2022-10-31 | Driver and executor memory customization for Dataproc Serverless for Spark |  | Dataproc Serverless for Spark supports customizing driver and executor memory and memory overhead settings. |
| 2022-10-05 | Dataproc regional availability in me-west1 |  | Dataproc is available in the me-west1 (Tel Aviv, Israel) region. |
| 2022-10-01 | Artifact Registry image streaming support for Dataproc Serverless for Spark |  | Dataproc Serverless for Spark supports Artifact Registry with image streaming. |
| 2022-09-27 | ANY reservation awareness for Dataproc Auto Zone Placement |  | Dataproc Auto Zone Placement considers ANY reservations by default. |
| 2022-09-20 | Executor allocation ratio for Dataproc Serverless for Spark dynamic allocation |  | Dataproc Serverless for Spark supports the spark.dynamicAllocation.executorAllocationRatio property to tune scale-up aggressiveness. |
| 2022-06-21 | Eager function fetch control for Dataproc Metastore Spark Hive client |  | Dataproc Metastore on 1.5 images supports a Spark Hive client property to control eager fetching of functions during initialization. |
| 2022-06-13 | Dataproc regional availability in us-south1 |  | Dataproc is available in the us-south1 (Dallas, Texas) region. |
| 2022-06-06 | Dataproc Serverless for Spark runtime versions 1.0.2 | 2022-06-06 | Dataproc Serverless for Spark runtime versions 1.0.2, 1.0.3, and 1.0.4 became unavailable for new batch submissions; deprecated on 2022-06-06. |
| 2022-06-01 | Dataproc regional availability in us-east5 |  | Dataproc is available in the us-east5 (Columbus, Ohio) region. |
| 2022-05-31 | Dataproc regional availability in europe-southwest1 |  | Dataproc is available in the europe-southwest1 (Madrid, Spain) region. |
| 2022-05-31 | Dataproc regional availability in europe-west9 |  | Dataproc is available in the europe-west9 (Paris, France) region. |
| 2022-05-09 | Dataproc Serverless for Spark runtime version 1.0.1 | 2022-05-09 | Dataproc Serverless for Spark runtime version 1.0.1 became unavailable for new batch submissions; deprecated on 2022-05-09. |
| 2022-05-03 | Dataproc Serverless for Spark runtime version 1.0.0 | 2022-05-03 | Dataproc Serverless for Spark runtime version 1.0.0 became unavailable for new batch submissions; deprecated on 2022-05-03. |
| 2022-04-20 | Dataproc regional availability in europe-west8 |  | Dataproc is available in the europe-west8 (Milan, Italy) region. |
| 2022-04-11 | Dataproc performance metrics listener |  | Dataproc clusters include an enabled-by-default performance metrics listener that publishes Spark telemetry to the Dataproc service. |
| 2022-02-18 | CentOS-based Dataproc images | 2022-02-18 | CentOS-based Dataproc images reached end of life and are no longer supported or updated; deprecated on 2022-02-18. |
| 2022-02-18 | Enhanced Flexibility Mode with primary worker shuffle mode |  | Dataproc image version 2.0 supports Enhanced Flexibility Mode with primary worker shuffle mode for Spark. |
| 2022-02-15 | Legacy Dataproc image versions before 1.3.95 | 2022-02-28 | Dataproc image versions earlier than 1.3.95, 1.4.77, 1.5.53, and 2.0.27 were deprecated for cluster creation; deprecated on 2022-02-28. |
| 2022-02-07 | cluster_type field in Dataproc monitoring metrics |  | Dataproc job and operation metrics in Cloud Monitoring include a cluster_type field. |
| 2022-02-01 | Resource Manager UI in HA cluster mode |  | Dataproc HA cluster mode supports the Resource Manager UI and other HA-capable UIs. |
| 2022-01-18 | Dataproc Metastore beta NetworkConfig support with v1 clusters |  | Dataproc supports using Dataproc Metastore beta NetworkConfig services with v1 Dataproc clusters. |
| 2021-11-17 | Dataproc regional availability in southamerica-west1 |  | Dataproc is available in the southamerica-west1 (Santiago, Chile) region. |
| 2021-11-01 | Spark event log Cloud Storage flush control properties |  | Dataproc images 1.4 and later support Spark properties that control Cloud Storage flush behavior for event logs. |
| 2021-11-01 | Spark History Server application filtering by Cloud Storage path |  | Dataproc images 1.5 and 2.0 support filtering Spark History Server applications by Cloud Storage path. |
| 2021-09-17 | Cluster creation failure action |  | Dataproc supports a cluster creation failure action feature for handling failed primary workers during cluster provisioning; Dataproc can automatically delete failed primary workers during cluster creation through the actionOnFailedPrimaryWorkers setting. |
| 2021-08-03 | Dataproc regional availability in northamerica-northeast2 |  | Dataproc is available in the northamerica-northeast2 (Toronto) region. |
| 2021-07-09 | Dataproc v1beta2 API | 2021-07-09 | The Dataproc v1beta2 API was deprecated in favor of the Dataproc v1 API; deprecated on 2021-07-09. |
| 2021-06-29 | Dataproc regional availability in asia-south2 |  | Dataproc is available in the asia-south2 (Delhi) region. |
| 2021-06-21 | Dataproc regional availability in australia-southeast2 |  | Dataproc is available in the australia-southeast2 (Melbourne) region. |
| 2021-06-01 | Image 1.5 and 2.0 agent /has_run_before sentinel file | 2021-06-01 | Dataproc image 1.5 and 2.0 agents no longer publish the /has_run_before sentinel file; deprecated on 2021-06-01. |
| 2021-03-24 | Dataproc regional availability in europe-central2 |  | Dataproc is available in the europe-central2 (Warsaw) region. |
| 2021-03-02 | Cluster label targeting for job submission |  | Dataproc job submission supports targeting a cluster by specified cluster labels. |
| 2021-01-12 | Shielded VM user configuration |  | Dataproc clusters support user configuration of Compute Engine Shielded VM settings. |
| 2021-01-08 | Balanced persistent disk support |  | Dataproc supports the pd-balanced persistent disk type for cluster storage. |
| 2020-12-08 | Restartable jobs maximum failure limit |  | Restartable Dataproc jobs let users specify the maximum total number of job failures at submission time. |
| 2020-10-30 | Cooperative multi-tenancy user mapping |  | Dataproc supports user-to-service-account mappings for cooperative multi-tenancy when accessing Cloud Storage through the connector. |
| 2020-10-22 | Dataproc Persistent History Server |  | Dataproc Persistent History Server provides a UI for viewing job history from active and deleted clusters. |
| 2020-10-19 | Dataproc Ranger Optional Component |  | The Dataproc Ranger Optional Component adds Ranger as an optional component for Dataproc clusters. |
| 2020-10-19 | Dataproc Solr Optional Component |  | The Dataproc Solr Optional Component adds Solr as an optional component for Dataproc clusters. |
| 2020-10-16 | Dataproc Docker Optional Component |  | The Dataproc Docker Optional Component adds Docker as an optional component for Dataproc clusters. |
| 2020-10-16 | Dataproc Flink Optional Component |  | The Dataproc Flink Optional Component adds Flink as an optional component for Dataproc clusters. |
| 2020-10-01 | Compute Engine sole-tenant node integration |  | Dataproc can create clusters in Compute Engine sole-tenant node groups. |
| 2020-08-28 | Dataproc Metastore integration |  | Dataproc clusters can use a Dataproc Metastore service as an external metastore. |
| 2020-08-28 | Workflow timeout |  | Dataproc workflows support configurable timeouts that automatically cancel a job graph after a specified period. |
| 2020-08-21 | Enhanced Flexibility Mode |  | Dataproc Enhanced Flexibility Mode manages shuffle data to reduce job delays when nodes are removed from a running cluster; Enhanced Flexibility Mode improves cluster stability and scalability by preserving stateful node data such as MapReduce shuffle data in HDFS. |
| 2020-08-17 | Personal Cluster Authentication |  | Personal Cluster Authentication lets single-user clusters access Cloud Storage with the user's credentials instead of a VM service account. |
| 2020-07-31 | Kerberos automatic configuration |  | Dataproc can automatically configure Kerberos during cluster creation without requiring explicit root principal password flags. |
| 2020-07-24 | Jupyter and JupyterLab login shells |  | Terminals launched from Jupyter and JupyterLab use login shells that behave like SSH sessions as root. |
| 2020-07-17 | Component Gateway Proxy-Authorization support |  | Component Gateway accepts the Proxy-Authorization header as an alternative bearer-token authentication header for backend API calls. |
| 2020-07-17 | Default Shielded VMs for Debian 10 and Ubuntu 18.04 images |  | Dataproc uses Shielded VMs by default for Debian 10 and Ubuntu 18.04 clusters. |
| 2020-07-17 | Kerberized Zeppelin interpreter support |  | Kerberized Dataproc clusters support Zeppelin Spark and shell interpreters by default. |
| 2020-07-10 | Jupyter local persistent disk notebook storage |  | Jupyter on Dataproc supports notebooks stored on VM persistent disk alongside Cloud Storage-backed notebooks. |
| 2020-07-10 | oauth2l tool in Dataproc images |  | Dataproc images include the oauth2l command-line tool for all VM users. |
| 2020-07-10 | Temporary bucket configuration flag |  | Dataproc gcloud commands support a --temp-bucket flag to configure the Cloud Storage bucket used for ephemeral cluster and job data. |
| 2020-07-07 | Dataproc Component Gateway |  | Dataproc Component Gateway provides secure access to web endpoints for default and optional components; Dataproc Component Gateway provides secure access to web endpoints for default and optional components. |
| 2020-06-11 | Temporary bucket API configuration |  | Dataproc API calls support explicit tempBucket configuration for storing ephemeral cluster and job data in Cloud Storage. |
| 2020-05-27 | Dataproc Hub |  | Dataproc provides support for Dataproc Hub. |
| 2020-05-21 | Cloud Storage default filesystem |  | Dataproc clusters can set Cloud Storage as the default filesystem by configuring core:fs.defaultFS to a gs:// location. |
| 2020-05-21 | Persistent History Server done directory support |  | Dataproc image 1.4 and 1.5 persistent history server support reading from the done directory. |
| 2020-05-05 | Non-preemptible secondary workers |  | Dataproc clusters support creation with non-preemptible secondary workers. |
| 2020-04-24 | Delta Lake 0.5.0 support |  | Dataproc image 1.5 includes Delta Lake version 0.5.0. |
| 2020-04-24 | Delta Lake Hive Connector |  | Dataproc image 1.5 includes the Delta Lake Hive Connector 0.1.0. |
| 2020-04-24 | Presto Coordinator startup timeout |  | Dataproc allows configuration of the startup wait timeout for the Presto Coordinator service. |
| 2020-04-17 | Dataproc on Google Kubernetes Engine |  | Dataproc on Google Kubernetes Engine lets users create Dataproc clusters to run Spark jobs on Kubernetes through the Dataproc jobs API. |
| 2020-04-15 | Jupyter notebook PDF export |  | Jupyter on Dataproc supports exporting notebooks as PDF files. |
| 2020-04-15 | Kerberos support in Component Gateway |  | Component Gateway supports Dataproc clusters secured with Kerberos. |
| 2020-04-15 | Presto default BigQuery catalogs |  | Presto on Dataproc includes default catalogs for the cluster project's BigQuery datasets and public BigQuery datasets. |
| 2020-04-03 | Presto job support in Dataproc Workflows |  | Dataproc Workflows support Presto jobs as a workflow job type. |
| 2020-04-03 | SparkR job support in Dataproc Workflows |  | Dataproc Workflows support SparkR jobs as a workflow job type. |
| 2020-04-01 | Dataproc Presto job type |  | Dataproc supports submitting Presto jobs to clusters with the Presto optional component enabled. |
| 2020-03-25 | Alphabetical sorting for Workflow Templates list methods |  | Dataproc Workflow Templates list methods support alphabetical sorting. |
| 2020-03-25 | Dataproc Presto Top-Level Component |  | The Dataproc Presto Top-Level Component provides Presto as a top-level Dataproc component. |
| 2020-03-25 | Dataproc Ranger Top-Level Component |  | The Dataproc Ranger Top-Level Component provides Ranger as a top-level Dataproc component. |
| 2020-03-25 | Dataproc Solr Top-Level Component |  | The Dataproc Solr Top-Level Component provides Solr as a top-level Dataproc component. |
| 2020-03-25 | GKE cluster configuration for Dataproc |  | Dataproc supports creating clusters on GKE by specifying GkeClusterConfig instead of GceClusterConfig in the Beta API. |
| 2020-03-25 | Pagination for Clusters list methods |  | Dataproc Clusters list methods support paginated responses with configurable page size. |
| 2020-03-18 | --num-preemptible-workers flag | 2020-03-18 | The --num-preemptible-workers flag in gcloud dataproc clusters update configured the number of preemptible workers during cluster updates; deprecated on 2020-03-18. |
| 2020-03-17 | Cloud Profiler for Dataproc jobs |  | Dataproc jobs can enable Cloud Profiler and set profiling metadata through job properties. |
| 2020-03-17 | Expanded machine type support for Auto Zone Placement |  | Auto Zone Placement supports n2, c2, e2, n2d, and m2 machine types in addition to earlier options. |
| 2020-03-17 | Job history persistence to Cloud Storage |  | Dataproc supports persisting MapReduce and Spark history files to the Dataproc temp bucket through a cluster property. |
| 2020-03-17 | MapReduce job history always-scan-user-dir |  | Dataproc supports a cluster property that makes the MapReduce job history server always scan the user directory for history files. |
| 2020-03-16 | Minimum CPU platform |  | Dataproc lets users specify a minimum CPU platform for clusters. |
| 2020-03-10 | Preemptible worker CLI flags | 2020-03-10 | Dataproc cluster and workflow template commands included CLI flags for configuring preemptible workers and their local SSDs, boot disks, and accelerators; deprecated on 2020-03-10. |
| 2020-03-03 | YARN log aggregation |  | Dataproc can aggregate YARN logs to a Dataproc temporary bucket and lets users configure the remote aggregated log directory. |
| 2020-02-25 | Component Gateway VPC Service Controls support |  | Component Gateway supports access patterns compatible with VPC Service Controls. |
| 2020-02-25 | GPU support for preemptible workers |  | Dataproc supports attaching GPUs to preemptible worker nodes. |
| 2020-02-03 | Startup service-binding timeout configuration |  | Dataproc lets users configure how long startup scripts wait for key services to bind to ports before considering startup successful. |
| 2020-01-31 | Scheduled Deletion |  | Scheduled Deletion automatically deletes a cluster at a specified time, after an idle period, or after a duration from cluster creation submission; Scheduled Deletion supports automated cluster deletion and exposes scheduled deletion details in Cloud SDK cluster list and describe commands. |
| 2020-01-20 | Zonal Reservations |  | Zonal Reservations let Dataproc clusters use reserved zonal Compute Engine capacity. |
| 2019-12-20 | Autoscaler recommendations in Cloud Logging |  | Autoscaler recommendations in Cloud Logging include configured worker limits, graceful decommission timeout, and reasons scaling actions were capped. |
| 2019-12-06 | Presto UI in Component Gateway |  | Component Gateway can expose the Presto UI when the Presto optional component is enabled. |
| 2019-11-15 | Cloud Storage connector version override |  | Dataproc lets users update the installed Cloud Storage connector version by setting a metadata key. |
| 2019-11-15 | Intel Optane DC Persistent Memory support |  | Dataproc supports creating master and worker VMs with Intel Optane DC Persistent Memory using cluster properties. |
| 2019-10-31 | SparkR jobs |  | Dataproc supports submitting SparkR jobs through the gcloud CLI, Google Cloud console, and Dataproc API; Dataproc supports submitting SparkR jobs through the gcloud CLI, Google Cloud console, and Dataproc API. |
| 2019-10-04 | Autoscaling |  | Autoscaling automatically resizes Dataproc clusters to meet workload demands; Autoscaling automatically resizes Dataproc clusters to meet workload demands. |
| 2019-09-24 | Compute Engine Accelerator support |  | Compute Engine Accelerator support lets Dataproc clusters attach GPUs. |
| 2019-09-20 | Image family URI cluster images |  | Dataproc lets users specify cluster images by image family URI during cluster creation. |
| 2019-08-23 | JupyterHub integration |  | Dataproc can enable jupyterhub-singleuser for the Jupyter optional component and populate related hub environment and argument properties for DataprocSpawner. |
| 2019-06-28 | Hadoop Secure Mode via Kerberos |  | Hadoop Secure Mode via Kerberos provides user authentication, isolation, and encryption inside a Dataproc cluster. |
| 2019-06-18 | Tez UI in Component Gateway |  | Component Gateway supports access to the Tez UI; Component Gateway supports access to the Tez UI. |
| 2019-04-29 | Ubuntu 18.04 LTS-based images |  | Dataproc provides Ubuntu 18.04 LTS-based images for the 1.3 and 1.4 image lines; Dataproc provides Ubuntu 18.04 LTS-based images for the 1.3 and 1.4 image lines in preview. |
| 2019-04-26 | Job Logs in Cloud Logging |  | Job Logs in Cloud Logging lets users send and manage Dataproc job driver and YARN container logs in Cloud Logging. |
| 2019-04-05 | Component Gateway |  | Component Gateway provides console-accessible links to web interfaces for default and optional cluster components; Component Gateway provides secure access to Dataproc core and optional component web endpoints without SSH tunnels or inbound firewall changes. |
| 2019-03-22 | Druid optional component |  | The Druid optional component lets users install Apache Druid when creating a Dataproc cluster. |
| 2019-03-22 | Image version 1.4 |  | Dataproc image version 1.4 is a generally available image line for new clusters; Dataproc image version 1.4 is a preview image line that includes Python 3.7 via Miniconda and Spark 2.4. |
| 2019-03-22 | Kerberos component |  | The Kerberos component enables Kerberos or Hadoop Secure Mode to provide user isolation and encryption inside Dataproc clusters; The Kerberos top-level component enables Kerberos or Hadoop Secure Mode to provide user isolation and encryption inside Dataproc clusters. |
| 2019-03-22 | Zookeeper optional component |  | The Zookeeper optional component lets users install Apache Zookeeper when creating a Dataproc cluster. |
| 2019-03-12 | Optional Components |  | Optional Components let users specify additional software components to install when creating Dataproc clusters; Optional Components let users specify additional software components to install when creating Dataproc clusters. |
| 2018-12-10 | Autoscaling logs in Cloud Logging |  | Dataproc autoscaling logs appear in Cloud Logging under cluster logs. |
| 2018-12-10 | Stackdriver Monitoring |  | Stackdriver Monitoring is automatically enabled on Dataproc clusters to collect and report cluster and job metrics; Stackdriver Monitoring is automatically enabled on Dataproc clusters to collect and report cluster and job metrics. |
| 2018-12-04 | Local SSDs on preemptible workers |  | Dataproc supports adding local SSDs to preemptible secondary worker nodes. |
| 2018-11-16 | Presto optional component |  | The Presto top-level component lets users install Presto when creating Dataproc clusters. |
| 2018-10-09 | Customer-managed encryption keys on Compute Engine |  | Customer-managed encryption keys on Compute Engine let users manage the encryption key for Persistent Disks attached to Dataproc cluster VMs. |
| 2018-09-25 | Cluster import/export from YAML |  | Cluster import and export from YAML lets users export a cluster configuration to YAML and create a cluster by importing that YAML file. |
| 2018-09-25 | Granular IAM |  | Granular IAM lets users assign IAM roles and permissions on a per-cluster basis; Granular IAM provides job, operation, and workflow template permissions for Dataproc resources. |
| 2018-09-25 | InstantiateInline API |  | The InstantiateInline API lets users instantiate Dataproc workflow templates inline through the API. |
| 2018-09-25 | Workflow Template Parameterization |  | Workflow Template Parameterization lets Dataproc workflow templates be reused with different parameters; Workflow Template Parameterization lets Dataproc workflow templates be reused with different parameters. |
| 2018-09-25 | Workflow Templates |  | Workflow Templates let users define and run reusable Dataproc workflow definitions; Workflow Templates let users define job graphs that can create clusters, run jobs, and delete clusters automatically. |
| 2018-09-21 | Beam on Flink initialization action |  | The Beam on Flink initialization action sets up an Apache Beam service on a Dataproc cluster. |
| 2018-08-30 | Customer-managed encryption keys on Cloud Storage |  | Customer-managed encryption keys on Cloud Storage let users manage the encryption key for the bucket used by Dataproc for cluster metadata and job driver output. |
| 2018-08-16 | Debian 9-based images |  | Dataproc provides Debian 9-based images for image versions 1.0 through 1.3 via deb9 image tracks. |
| 2018-07-18 | Workflow Templates YAML import/export |  | Workflow Templates YAML import and export lets users import and export Dataproc workflow templates directly from YAML files with the gcloud CLI. |
| 2018-06-29 | Custom Images |  | Custom Images let users create and save preconfigured images with packages pre-installed for Dataproc cluster creation; Custom Images let users create reusable Dataproc images with packages pre-installed for cluster creation. |
| 2018-06-29 | Image version 1.3 |  | Dataproc image version 1.3 is a generally available image line that updates major Hadoop ecosystem components and enables Hive on Tez by default; Dataproc image version 1.3 is a preview image line with updated Spark, Hadoop, Hive, Pig, and Tez versions and Hive on Tez by default. |
| 2018-06-27 | Customer-managed encryption keys |  | Customer-managed encryption keys let users manage encryption keys for Dataproc Compute Engine VMs and the associated Cloud Storage bucket. |
| 2018-06-27 | Customer-managed encryption keys on BigQuery |  | Dataproc can use customer-managed encryption keys to access protected BigQuery datasets and tables. |
| 2018-06-27 | PD-SSD boot disks |  | PD-SSD boot disks let Dataproc clusters use persistent SSD boot disks for master and worker nodes; PD-SSD boot disks let Dataproc clusters use persistent SSD boot disks for master and worker nodes. |
| 2018-06-08 | Cluster creation from YAML |  | The gcloud command can create Dataproc clusters directly from a YAML file. |
| 2018-06-08 | Workflow Templates YAML instantiation |  | The gcloud command can instantiate Dataproc workflow templates directly from a YAML file. |
| 2018-03-16 | Connectors initialization action |  | The Connectors initialization action lets users update the installed Cloud Storage and BigQuery connectors in Dataproc clusters. |
| 2018-02-02 | Console link to Stackdriver logs |  | The cluster details page in the Google Cloud console includes a button that links directly to Stackdriver logs for a cluster. |
| 2018-02-02 | Environment property prefixes |  | Environment property prefixes let users set hadoop-env, mapred-env, spark-env, and yarn-env properties through dedicated prefixes. |
| 2018-01-10 | InstantiateInline workflow execution |  | InstantiateInline lets users run Dataproc workflows directly without first creating a WorkflowTemplate. |
| 2017-12-20 | Minimum CPU platform selection |  | Minimum CPU platform selection lets users choose a minimum CPU platform when creating a Dataproc cluster. |
| 2017-09-06 | Cluster Scheduled Deletion |  | Cluster Scheduled Deletion lets users configure clusters to be deleted after a duration, at a specific time, or after inactivity. |
| 2017-08-04 | Graceful decommissioning |  | Graceful decommissioning lets Dataproc remove cluster nodes without interrupting running YARN jobs by waiting up to a configured timeout. |
| 2017-06-28 | Auto Zone |  | Auto Zone lets Dataproc automatically choose a zone within the selected region for cluster placement. |
| 2017-06-28 | Conscrypt-based Cloud Storage connector SSL provider |  | The Cloud Storage connector can use a Conscrypt-based SSL provider to improve CPU efficiency and I/O performance; The Cloud Storage connector can use a Conscrypt-based SSL provider to improve CPU efficiency and I/O performance. |
| 2017-06-28 | Regional endpoints |  | Regional endpoints let clients access Dataproc through region-specific service endpoints. |
| 2017-06-26 | Cloud Dataproc API v1alpha1 and v1beta1 | 2017-06-26 | The v1alpha1 and v1beta1 Cloud Dataproc APIs were deprecated in favor of the v1 API; The v1alpha1 and v1beta1 Cloud Dataproc APIs were deprecated in favor of the v1 API; deprecated on 2017-06-26. |
| 2017-04-07 | Dataproc Worker IAM role |  | The Dataproc Worker IAM role provides a dedicated IAM role intended for service accounts used by Dataproc workers. |
| 2017-03-17 | dataproc_cluster audit log resource type | 2017-03-17 | The dataproc_cluster audit log resource type was deprecated and replaced by cloud_dataproc_cluster for Cloud Audit Logs; deprecated on 2017-03-17. |
| 2017-03-07 | GPU attachment |  | GPU attachment lets Dataproc clusters attach 1 to 8 Compute Engine GPUs to master and worker nodes. |
| 2017-03-07 | User labels |  | User labels let users add and update labels on Dataproc clusters and jobs for organization and cost tracking; User labels let users apply key-value labels to Dataproc clusters and jobs for grouping, filtering, and listing. |
| 2017-03-01 | Restartable jobs |  | Restartable jobs let users configure failed Dataproc jobs to retry automatically up to a specified number of times per hour. |
| 2017-03-01 | Single node clusters |  | Single node clusters provide Dataproc clusters with one node that serves as both master and worker. |
| 2016-12-16 | Stackdriver monitoring agent |  | The Stackdriver monitoring agent is installed by default on Dataproc clusters and can be enabled or disabled through cluster properties. |
| 2016-11-29 | Custom service account support |  | Custom service account support lets users specify a user-managed service account for the Compute Engine VMs in a Dataproc cluster. |
| 2016-11-08 | IndirectBigQueryOutputFormat |  | IndirectBigQueryOutputFormat writes output to a temporary Cloud Storage bucket and submits one BigQuery load job at job commit time. |
| 2016-10-07 | Console job stop and delete actions |  | The Dataproc console Jobs page shows Stop and Delete buttons for every job in the list. |
| 2016-10-07 | Worker local SSD scaling |  | Worker local SSD scaling increases the maximum number of local SSDs that can be attached to worker nodes from 4 to 8. |
| 2016-09-29 | High availability mode |  | High availability mode creates Dataproc clusters with three master nodes to provide HDFS and YARN high availability. |
| 2016-09-16 | Preemptible worker boot disk sizing |  | Preemptible worker boot disk sizing lets users set the boot disk size for preemptible workers at cluster creation time. |
| 2016-09-01 | Identity and Access Management support |  | Identity and Access Management support lets users control permissions for Dataproc clusters, jobs, and operations with IAM. |
| 2016-09-01 | LZO support |  | LZO support enables Dataproc clusters to natively use the LZO data compression format. |
| 2016-09-01 | Stackdriver logging toggle |  | The Stackdriver logging toggle lets users disable Stackdriver logging on Dataproc clusters through a cluster property. |
| 2016-08-25 | Apache Zeppelin BigQuery support |  | The Dataproc-packaged Apache Zeppelin upgrade adds support for Google BigQuery. |
| 2016-08-16 | Cloud Dataproc image versions 0.1 and 0.2 | 2016-08-16 | Cloud Dataproc image versions 0.1 and 0.2 were deprecated and no longer receive updates; deprecated on 2016-08-16. |
| 2016-07-19 | Automatic retries for 429 errors |  | Automatic retries for 429 errors cause Dataproc to retry rate-limit errors from Google APIs with backoff. |
| 2016-07-01 | gcloud --*-boot-disk-size-gb flags | 2016-07-01 | The gcloud --*-boot-disk-size-gb flags were deprecated and replaced by --*-boot-disk-size flags; deprecated on 2016-07-01. |
| 2016-07-01 | Preemptible worker boot disk size flag |  | The gcloud --preemptible-worker-boot-disk-size flag lets users set the boot disk size of preemptible workers. |
| 2016-05-04 | Cloud SQL initialization action |  | The Cloud SQL initialization action installs a Cloud SQL proxy on each cluster node and configures Hive metadata storage in Cloud SQL. |
| 2016-03-08 | Subnetwork support |  | Subnetwork support lets users specify a subnetwork when creating a Dataproc cluster with gcloud. |
| 2016-02-22 | API auto-enable |  | API auto-enable automatically enables required dependent APIs when the Cloud Dataproc API is enabled. |
| 2016-02-22 | Cloud Dataproc API v1 |  | The v1 Cloud Dataproc API provides the live general API with regional support and related fixes. |
| 2016-02-22 | Custom Compute Engine machine types |  | Custom Compute Engine machine types let Dataproc clusters use customized vCPU and memory configurations for master and worker nodes. |
| 2016-02-22 | PySpark --jars support |  | PySpark --jars support lets PySpark jobs use the --jars option. |
| 2016-02-03 | Preview image version |  | A preview Dataproc image version provides newer Hadoop ecosystem components ahead of the next stable distribution release. |
| 2016-01-27 | Cluster VM metadata |  | Cluster creation supports applying instance metadata key-value pairs to Dataproc virtual machine instances. |
| 2016-01-27 | Cluster VM tags |  | Cluster creation supports applying Google Compute Engine network tags to Dataproc virtual machine instances. |
| 2016-01-27 | Heterogeneous cluster machine types |  | Dataproc supports clusters whose master and worker nodes use different machine types and memory sizes. |
| 2016-01-27 | Job output line wrapping |  | The job output view includes a line wrapping option for easier reading of long output lines. |
| 2016-01-21 | Cloud-platform access scope |  | Cluster creation can enable the cloud-platform OAuth scope to allow access across Google Cloud services. |
| 2016-01-21 | Cluster configuration properties |  | Cluster creation supports setting and updating configuration file properties through a prefixed properties option. |
| 2015-12-16 | Clickable Cloud Storage error links |  | Cloud Storage bucket paths shown in error messages are rendered as clickable links. |
| 2015-12-16 | Cluster image version selection |  | Cluster creation supports choosing a specific Dataproc image version. |
| 2015-12-16 | Dataproc API Java client artifacts |  | The Dataproc API is published with official Maven artifacts, Javadocs, and downloadable client files for Java users. |
| 2015-12-16 | Default command-line tools |  | Dataproc cluster nodes include vim, git, and bash-completion by default. |
| 2015-12-16 | Initialization actions |  | Cluster creation supports specifying initialization actions to customize nodes during setup. |
| 2015-12-16 | Job cloning |  | The console can clone an existing job into a new job submission form with copied settings. |
| 2015-12-16 | Job submission properties |  | Job submission supports specifying properties that are also shown in the job configuration view. |
| 2015-12-16 | VM instances tab |  | Cluster details include a VM instances tab for listing cluster VMs and quickly connecting to the master node. |
| 2015-11-18 | BigQuery and Cloud Storage connector updates |  | Dataproc includes updated BigQuery and Cloud Storage connectors with bug fixes in image version 0.2. |
| 2015-11-18 | Cluster diagnose command |  | The gcloud Dataproc tooling includes a diagnose command for collecting cluster logs and diagnostic information. |
| 2015-11-18 | Dataproc 0.2 component upgrades |  | Dataproc 0.2 introduces updated Spark and Hive components with fixes and performance improvements. |
| 2015-11-18 | Dataproc version selection |  | Dataproc supports selecting the service image version when creating a cluster through the API, SDK, or console. |
| 2015-11-18 | Native analytics libraries |  | Dataproc includes native Snappy, BLAS, LAPACK, and ARPACK libraries to support data processing and ML workloads. |
| 2015-11-18 | Persistent Hive metastore |  | Dataproc provides a MySQL-based per-cluster persistent metastore shared by Hive and Spark SQL. |
| 2015-10-23 | Preemptible worker management |  | The console supports adding, editing, and removing preemptible instances in Dataproc clusters. |

Source file slug: `dataproc.md`

