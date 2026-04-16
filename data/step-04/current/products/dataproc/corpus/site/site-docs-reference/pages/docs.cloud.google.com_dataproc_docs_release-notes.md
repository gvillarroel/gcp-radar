---
title: "Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/release-notes
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/release-notes
  title: "Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

"Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
Home
Documentation
Data analytics
Managed Service for Apache Spark
Resources
Send feedback
Managed Service for Apache Spark release notes
Stay organized with collections
Save and categorize content based on your preferences.
These release notes apply to the core Managed Service for Apache Spark
service, and include:
Announcements of the latest Managed Service for Apache Spark image versions installed
on the Compute Engine VMs used in Managed Service for Apache Spark clusters.
See the
Managed Service for Apache Spark version list
for a list of supported Managed Service for Apache Spark images, with links to
pages that list the
software components
installed on current and recently released Managed Service for Apache Spark images
Announcements of new and updated Managed Service for Apache Spark and Managed Service for Apache Spark
features, bug fixes, known issues, and deprecated functionality
Release schedule : The release of the latest Managed Service for Apache Spark images
can take up to one week to roll out to all
regions . Until the rollout is complete,
the latest Managed Service for Apache Spark images may not be available in your
region .
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 03, 2026
Announcement
Dataproc and Google Cloud Serverless for Apache Spark are now unified under the Managed Service for Apache Spark brand. This change consolidates our managed Spark deployment options into a single umbrella brand that includes the full breadth of our Spark capabilities. No existing functionality is being removed as part of this change, and there will be no impact to the Dataproc API, client library, CLI, or IAM names.
April 02, 2026
Announcement
New Dataproc on Compute Engine subminor image versions :
2.3.28-debian12, 2.3.28-ml-ubuntu22, 2.3.28-rocky9, 2.3.28-ubuntu22, 2.3.28-ubuntu22-arm
Change
Dataproc on Compute Engine : Upgraded Apache Zookeeper to version 3.9.5 in image version 2.3 .
Fixed
Upgraded Dataproc Metastore Proxy to v0.0.79 to fix CVEs.
Fixed CVEs CVE-2026-24308 and CVE-2026-24281.
March 24, 2026
Announcement
New Dataproc on Compute Engine subminor image versions :
2.1.112-debian11, 2.1.112-rocky8, 2.1.112-ubuntu20, 2.1.112-ubuntu20-arm
2.2.80-debian12, 2.2.80-rocky9, 2.2.80-ubuntu22, 2.2.80-ubuntu22-arm
2.3.27-debian12, 2.3.27-ml-ubuntu22, 2.3.27-rocky9, 2.3.27-ubuntu22, 2.3.27-ubuntu22-arm
March 20, 2026
Announcement
New Serverless for Apache Spark runtime versions :
1.2.76
2.2.76
2.3.29
3.0.12
March 18, 2026
Announcement
New Dataproc on Compute Engine subminor image versions :
2.1.111-debian11, 2.1.111-rocky8, 2.1.111-ubuntu20, 2.1.111-ubuntu20-arm
2.2.79-debian12, 2.2.79-rocky9, 2.2.79-ubuntu22, 2.2.79-ubuntu22-arm
2.3.26-debian12, 2.3.26-ml-ubuntu22, 2.3.26-rocky9, 2.3.26-ubuntu22, 2.3.26-ubuntu22-arm
Fixed
Fixed CVEs CVE-2025-58057, CVE-2025-53864, CVE-2025-68161, CVE-2025-48924, and CVE-2025-33042.
Upgraded Dataproc Metastore Proxy to v0.0.78 to fix CVEs.
Default JDK is set to Temurin JDK - 11.0.30 in all 2.1 , 2.2 and 2.3 images.
March 13, 2026
Announcement
New Serverless for Apache Spark runtime versions :
1.2.75
2.2.75
2.3.28
3.0.11
March 11, 2026
Announcement
Dataproc on Compute Engine: The following subminor image versions announced on March 08, 2026 have been rolled back:
2.1.110-debian11, 2.1.110-rocky8, 2.1.110-ubuntu20, 2.1.110-ubuntu20-arm
2.2.78-debian12, 2.2.78-rocky9, 2.2.78-ubuntu22, 2.2.78-ubuntu22-arm
2.3.25-debian12, 2.3.25-ml-ubuntu22, 2.3.25-rocky9, 2.3.25-ubuntu22, 2.3.25-ubuntu22-arm
March 08, 2026
Announcement
New Dataproc on Compute Engine subminor image versions :
2.1.110-debian11, 2.1.110-rocky8, 2.1.110-ubuntu20, 2.1.110-ubuntu20-arm
2.2.78-debian12, 2.2.78-rocky9, 2.2.78-ubuntu22, 2.2.78-ubuntu22-arm
2.3.25-debian12, 2.3.25-ml-ubuntu22, 2.3.25-rocky9, 2.3.25-ubuntu22, 2.3.25-ubuntu22-arm
Rollback Notice: These image versions were rolled back on March 11, 2026 .
Fixed
Fixed CVEs CVE-2025-58057, CVE-2025-53864, CVE-2025-68161, CVE-2025-48924 (partial), and CVE-2025-33042.
Upgraded Dataproc Metastore Proxy to v0.0.78 to fix CVEs.
March 06, 2026
Announcement
New Serverless for Apache Spark runtime versions :
1.2.74
2.2.74
2.3.27
3.0.10
Announcement
Serverless for Apache Spark 3.0 runtime version:
Updated Spark version to 4.0.1 .
Updated BigQuery Spark Connector version to 0.44.0 .
Applied patch for SPARK-52601 .
Applied patch for SPARK-52614 .
Announcement
Serverless for Apache Spark 1.2 , 2.2 and 2.3 runtime versions:
Updated Delta Lake version to 3.2.1 .
March 03, 2026
Announcement
New Serverless for Apache Spark runtime versions :
1.2.73
2.2.73
2.3.26
February 27, 2026
Announcement
New Serverless for Apache Spark runtime versions :
1.2.72
2.2.72
2.3.25
3.0.9
February 24, 2026
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.160-debian10, 2.0.160-rocky8, 2.0.160-ubuntu18
2.1.109-debian11, 2.1.109-rocky8, 2.1.109-ubuntu20, 2.1.109-ubuntu20-arm
2.2.77-debian12, 2.2.77-rocky9, 2.2.77-ubuntu22, 2.2.77-ubuntu22-arm
2.3.24-debian12, 2.3.24-ml-ubuntu22, 2.3.24-rocky9, 2.3.24-ubuntu22, 2.3.24-ubuntu22-arm
Fixed
Fixed an issue that could cause gsutil failures on clusters using custom images built from new base images. This problem occurred when the gcloud core/universe_domain property was not set in the build environment, resulting in a malformed /etc/boto.cfg . The image build process now ensures a correct default configuration, restoring proper Google Cloud Storage connectivity.
February 20, 2026
Announcement
New Serverless for Apache Spark runtime versions :
1.2.71
2.2.71
2.3.24
3.0.8
February 19, 2026
Announcement
Hyperdisks can now be added to a Dataproc cluster.
February 15, 2026
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.159-debian10, 2.0.159-rocky8, 2.0.159-ubuntu18
2.1.108-debian11, 2.1.108-rocky8, 2.1.108-ubuntu20, 2.1.108-ubuntu20-arm
2.2.76-debian12, 2.2.76-rocky9, 2.2.76-ubuntu22, 2.2.76-ubuntu22-arm
2.3.23-debian12, 2.3.23-ml-ubuntu22, 2.3.23-rocky9, 2.3.23-ubuntu22, 2.3.23-ubuntu22-arm
February 13, 2026
Announcement
New Serverless for Apache Spark runtime versions :
1.2.70
2.2.70
2.3.23
3.0.7
February 06, 2026
Announcement
New Serverless for Apache Spark runtime versions :
1.2.69
2.2.69
2.3.22
3.0.5
Feature
Serverless for Apache Spark: Added support for removing conscrypt
from Serverless for Apache Spark 2.3 + runtimes using the
dataproc.artifacts.remove
property .
Feature
Dataproc on Compute Engine: Sharing snapshot diagnostic data : Setting the --tarball-access=GOOGLE_DATAPROC_DIAGNOSE flag with the gcloud dataproc clusters diagnose command shares all of the output Cloud Storage bucket contents with Google Cloud support if uniform bucket-level access is enabled on the output Cloud Storage bucket. If object-level access control is enabled on the output Cloud Storage bucket, only the generated diagnostic tar file is shared.
February 05, 2026
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.158-debian10, 2.0.158-ubuntu18, 2.0.158-rocky8
2.1.107-debian11, 2.1.107-ubuntu20, 2.1.107-ubuntu20-arm, 2.1.107-rocky8
2.2.75-debian12, 2.2.75-ubuntu22, 2.2.75-ubuntu22-arm, 2.2.75-rocky9
2.3.22-debian12, 2.3.22-ml-ubuntu22, 2.3.22-rocky9, 2.3.22-ubuntu22, 2.3.22-ubuntu22-arm
Feature
Zookeeper version upgraded to 3.9.4 in Dataproc image 2.3.22.
Feature
Parquet CLI version upgraded to 1.15.2 in 2.1 and 2.2 images.
Feature
Delta subminor version upgraded to 3.2.1 in Dataproc on Compute Engine image 2.2 and 2.3.
Feature
Apache Pig is now available in ARM images.
Feature
Added a new dataproc:pypi.repository property to customize the PyPI repository used for pip. The value can be a URL, or google to use a Google-hosted cache of PyPI, accessible without public internet connectivity. Starting in image version 3.1, google will be the default; to opt out and return to public PyPI, use the value pypi .
Change
Removed use of deprecated Hadoop configuration properties fs.default.name and yarn.resourcemanager.system-metrics-publisher.enabled .
Fixed
Fixed a bug in the ARM image that prevented connecting to a Dataproc Metastore instance with a gRPC protocol endpoint.
Fixed
Fixed the spark.driver.extraClassPath delimiter for the Jupyter SparkMonitor Listener.
February 04, 2026
Announcement
Upcoming Spark data lineage changes See the upcoming May,
2026 Dataproc and Serverless for Apache Spark release notes for an announcement
of a change that will automatically enable
Dataproc Spark data lineage and
Serverless for Apache Spark data lineage
when you enable the Data Lineage API (see
Control lineage ingestion for a service )
without requiring additional project, cluster, batch workload, or
interactive session settings.
January 30, 2026
Announcement
New Serverless for Apache Spark runtime versions :
3.0.4
Announcement
Dataproc on Compute Engine: The following subminor image versions announced on January 24, 2026 have been rolled back:
2.0.157-debian10, 2.0.157-ubuntu18, 2.0.157-rocky8
2.1.106-debian11, 2.1.106-ubuntu20, 2.1.106-ubuntu20-arm, 2.1.106-rocky8
2.2.74-debian12, 2.2.74-ubuntu22, 2.2.74-ubuntu22-arm, 2.2.74-rocky9
2.3.21-debian12, 2.3.21-ml-ubuntu22, 2.3.21-rocky9, 2.3.21-ubuntu22, 2.3.21-ubuntu22-arm
January 24, 2026
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.157-debian10, 2.0.157-ubuntu18, 2.0.157-rocky8
2.1.106-debian11, 2.1.106-ubuntu20, 2.1.106-ubuntu20-arm, 2.1.106-rocky8
2.2.74-debian12, 2.2.74-ubuntu22, 2.2.74-ubuntu22-arm, 2.2.74-rocky9
2.3.21-debian12, 2.3.21-ml-ubuntu22, 2.3.21-rocky9, 2.3.21-ubuntu22, 2.3.21-ubuntu22-arm
Rollback Notice: These image versions were rolled back on January 30, 2026 .
Feature
Upgraded the Delta subminor version to 3.2.1 in images 2.2 and 2.3 .
Feature
Apache Pig is now available in ARM images.
Feature
Added a new dataproc:pypi.repository property to customize the PyPI repository that pip uses.
The value can be a internet-accessible URL, or you can specify google to use a Google-hosted cache of PyPI, which
is accessible without public internet connectivity. Starting with Managed Service for Apache Spark image version
3.1 , google will be the default (you can specify the pypi property value to use public PyPI instead of the default google 3.1 value).
Change
Removed the use of deprecated Hadoop configuration properties fs.default.name and
yarn.resourcemanager.system-metrics-publisher.enabled .
Fixed
Fixed a bug in the ARM image that prevented connecting to a Dataproc Metastore instance with a
gRPC protocol endpoint.
Fixed
Fixed the spark.driver.extraClassPath delimiter for the Jupyter SparkMonitor Listener.
January 23, 2026
Announcement
New Serverless for Apache Spark runtime versions :
1.2.67
2.2.67
2.3.20
3.0.3
Fixed
Applied patch for SPARK-48292 in Serverless for Apache Spark 1.2 and 2.2 runtimes.
January 13, 2026
Announcement
Dataproc on Compute Engine: The following subminor image versions announced on January 06, 2026 have been rolled back:
2.0.156-debian10, 2.0.156-ubuntu18, 2.0.156-rocky8
2.1.105-debian11, 2.1.105-ubuntu20, 2.1.105-ubuntu20-arm, 2.1.105-rocky8
2.2.73-debian12, 2.2.73-ubuntu22, 2.2.73-ubuntu22-arm, 2.2.73-rocky9
2.3.20-debian12, 2.3.20-ml-ubuntu22, 2.3.20-rocky9, 2.3.20-ubuntu22, 2.3.20-ubuntu22-arm
January 09, 2026
Announcement
New Serverless for Apache Spark runtime versions :
1.2.66
2.2.66
2.3.19
3.0.1
January 06, 2026
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.156-debian10, 2.0.156-ubuntu18, 2.0.156-rocky8
2.1.105-debian11, 2.1.105-ubuntu20, 2.1.105-ubuntu20-arm, 2.1.105-rocky8
2.2.73-debian12, 2.2.73-ubuntu22, 2.2.73-ubuntu22-arm, 2.2.73-rocky9
2.3.20-debian12, 2.3.20-ml-ubuntu22, 2.3.20-rocky9, 2.3.20-ubuntu22, 2.3.20-ubuntu22-arm
Rollback Notice: These image versions were rolled back on January 13, 2026 .
Feature
Added a new property dataproc:pypi.repository to customize the PyPI repository used for pip. The value can be a URL, or google to use a Google-hosted cache of PyPI, accessible without public internet connectivity. Starting in image version 3.1, google will be the default; to opt out and return to public PyPI, use the value pypi .
Change
Removed use of deprecated Hadoop configuration properties fs.default.name and yarn.resourcemanager.system-metrics-publisher.enabled .
Fixed
Fixed the spark.driver.extraClassPath delimiter for the Jupyter SparkMonitor Listener.
December 22, 2025
Announcement
New Serverless for Apache Spark runtime versions :
1.2.65
2.2.65
2.3.18
December 20, 2025
Breaking
The following Dataproc on Compute Engine subminor image versions,
released on December 05, 2025 , are now blocklisted :
2.2.72-debian12, 2.2.72-ubuntu22, 2.2.72-ubuntu22-arm, 2.2.72-rocky9
2.3.19-debian12, 2.3.19-ubuntu22, 2.3.19-ubuntu22-arm, 2.3.19-ml-ubuntu22, 2.3.19-rocky9
December 05, 2025
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.155-debian10, 2.0.155-ubuntu18, 2.0.155-rocky8
2.1.104-debian11, 2.1.104-ubuntu20, 2.1.104-ubuntu20-arm, 2.1.104-rocky8
2.2.72-debian12, 2.2.72-ubuntu22, 2.2.72-ubuntu22-arm, 2.2.72-rocky9
2.3.19-debian12, 2.3.19-ubuntu22, 2.3.19-ubuntu22-arm, 2.3.19-ml-ubuntu22, 2.3.19-rocky9
Blocklist update: The 2.2.72 and 2.3.19
subminor image versions were blocklisted on
December 20, 2025 .
Feature
dataproc-ml is available by default in 2.3 -ml images.
December 04, 2025
Announcement
Serverless for Apache Spark: Runtime version 3.0 is now generally available. This version simplifies onboarding, improves reliability, reduces startup latency, and adds support for Spark 4.0.
Features and improvements:
Regional and multi-zonal workloads are used by default to increase obtainability of compute resources
Faster startup than previous runtimes
Fast resource cleanup that allows faster release of VPC IPs after workload completion
End-user credentials are used for all workloads by default
New bigquery Spark catalog, pre-configured for out-of-the-box BigQuery
native table interactions
New Spark Serverless-specific IAM roles
New dataproc-rm.googleapis.com API enablement is required
November 22, 2025
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.154-debian10, 2.0.154-ubuntu18, 2.0.154-rocky8
2.1.103-debian11, 2.1.103-ubuntu20, 2.1.103-ubuntu20-arm, 2.1.103-rocky8
2.2.71-debian12, 2.2.71-ubuntu22, 2.2.71-ubuntu22-arm, 2.2.71-rocky9
2.3.18-debian12, 2.3.18-ubuntu22, 2.3.18-ubuntu22-arm, 2.3.18-ml-ubuntu22, 2.3.18-rocky9
Change
Dataproc on Compute Engine : Updated Cloud Storage connector:
Updated to 3.1.10 in image version 2.3.18 .
Updated to 3.0.15 in image version 2.2.71 .
Updated to hadoop3-2.2.30 in image versions 2.1.103 and 2.0.154 .
November 13, 2025
Announcement
New Serverless for Apache Spark runtime versions :
1.2.62
2.2.62
2.3.15
Feature
Serverless for Apache Spark: Added the
dataproc.artifacts.remove property,
which lets users remove default artifacts, such as spark-bigquery-connector ,
iceberg , and delta-lake from a Serverless for Apache Spark runtime.
November 07, 2025
Announcement
Serverless for Apache Spark: Apache Spark upgrade to version 3.5.3
for the 1.2
and 2.2
Serverless for Apache Spark runtime versions announced on
October 13, 2025
has been rolled back.
October 29, 2025
Breaking
Dataproc on Compute Engine subminor image version
2.3.16 , announced on
October 20, 2025
has been blocklisted and cannot be used when creating a new cluster.
October 28, 2025
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.153-debian10, 2.0.153-ubuntu18, 2.0.153-rocky8
2.1.102-debian11, 2.1.102-ubuntu20, 2.1.102-ubuntu20-arm, 2.1.102-rocky8
2.2.70-debian12, 2.2.70-ubuntu22, 2.2.70-ubuntu22-arm, 2.2.70-rocky9
2.3.17-debian12, 2.3.17-ubuntu22, 2.3.17-ubuntu22-arm, 2.3.17-ml-ubuntu22, 2.3.17-rocky9
Fixed
Fixed a Jupyter Kernel Gateway bug that caused failures while restarting kernels.
October 22, 2025
Announcement
Announcing the General Availability (GA) of Lightning Engine for Google Cloud Serverless for Apache Spark . Lightning Engine is a high-performance query accelerator that delivers up to 4.3x faster performance for Spark workloads compared to open-source Spark, as measured on TPC-H-like benchmarks.
For more details on enabling Lightning Engine and its advanced features like Native Query Execution (NQE), see the official documentation .
Change
Serverless for Apache Spark: With the Lightning Engine GA release, the property to enable Native Query Execution (NQE) feature has been updated.
In order to use Lightning Engine, submit your jobs in the Premium tier. Under Lightning Engine, if you would like to use the NQE feature, set the new flag: spark.dataproc.lightningEngine.runtime=native . Users are encouraged to try this feature to explore the full potential of Lightning Engine.
For backward compatibility, the legacy property that was used to enable NQE spark.dataproc.runtimeEngine=native will continue to be honored in the existing runtimes 1.2, 2.2 and 2.3, but it's not supported in future releases (3.0+ runtimes).
October 20, 2025
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.152-debian10, 2.0.152-ubuntu18, 2.0.152-rocky8
2.1.101-debian11, 2.1.101-ubuntu20, 2.1.101-ubuntu20-arm, 2.1.101-rocky8
2.2.69-debian12, 2.2.69-ubuntu22, 2.2.69-ubuntu22-arm, 2.2.69-rocky9
2.3.16-debian12, 2.3.16-ubuntu22, 2.3.16-ubuntu22-arm, 2.3.16-ml-ubuntu22, 2.3.16-rocky9
Note: Dataproc on Compute Engine subminor image version
2.3.16
was blocklisted on
October, 29, 2025 ,
and cannot be used when creating a new cluster.
October 16, 2025
Announcement
New Serverless for Apache Spark runtime versions :
3.0.0-RC6
Change
Dataproc on Compute Engine : The default image version of premium tier clusters is now 2.3 .
October 14, 2025
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.151-debian10, 2.0.151-ubuntu18, 2.0.151-rocky8
2.1.100-debian11, 2.1.100-ubuntu20, 2.1.100-ubuntu20-arm, 2.1.100-rocky8
2.2.68-debian12, 2.2.68-ubuntu22, 2.2.68-ubuntu22-arm, 2.2.68-rocky9
2.3.15-debian12, 2.3.15-ubuntu22, 2.3.15-ubuntu22-arm, 2.3.15-ml-ubuntu22, 2.3.15-rocky9
Fixed
Fixed startup race condition in multi-tenant clusters using the dataproc:pip.packages property that could cause authentication failures while starting Jupyter notebook kernels.
October 13, 2025
Announcement
Serverless for Apache Spark: Runtimes rollout with Apache Spark upgrade to version 3.5.3 in the latest 1.2 and 2.2 Serverless for Apache Spark runtime versions has started and is expected to finish by October 16th.
October 06, 2025
Announcement
New Serverless for Apache Spark runtime versions :
2.3.13
3.0.0-RC5
Change
Serverless for Apache Spark: Upgraded Apache Spark to version 3.5.3 in the latest 2.3 Serverless for Apache Spark runtime versions.
Change
Dataproc on Compute Engine: The following diagnostic properties are now enabled by default for new Dataproc clusters created with 2.0+ image versions:
dataproc:diagnostic.capture.enabled : Collects checkpoint diagnostic data in the cluster temp bucket .
dataproc:dataproc.logging.extended.enabled : Collects logs for the Knox, Zeppelin, Ranger-usersync, Jupyter_notebook, Jupyter_kernel_gateway components and the Spark History-Server in Cloud Logging .
dataproc:dataproc.logging.syslog.enabled : Collects VM syslogs in Cloud Logging .
Note: To disable any of these features, set the corresponding property to false during cluster creation.
To continue using the Ops Agent initialization action opsagent.sh to ingest syslogs from Dataproc cluster nodes, do one of the following:
Recommended: Use opsagent_nosyslog.sh since
VM syslogs are emitted by default from Dataproc clusters.
Set the dataproc:dataproc.logging.syslog.enabled=false and continue using opsagent.sh
to ingest syslogs.
October 03, 2025
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.150-debian10, 2.0.150-ubuntu18, 2.0.150-rocky8
2.1.99-debian11, 2.1.99-ubuntu20, 2.1.99-ubuntu20-arm, 2.1.99-rocky8
2.2.67-debian12, 2.2.67-ubuntu22, 2.2.67-ubuntu22-arm, 2.2.67-rocky9
2.3.14-debian12, 2.3.14-ubuntu22, 2.3.14-ubuntu22-arm, 2.3.14-ml-ubuntu22, 2.3.14-rocky9
September 15, 2025
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.149-debian10, 2.0.149-ubuntu18, 2.0.149-rocky8
2.1.98-debian11, 2.1.98-ubuntu20, 2.1.98-ubuntu20-arm, 2.1.98-rocky8
2.2.66-debian12, 2.2.66-ubuntu22, 2.2.66-ubuntu22-arm, 2.2.66-rocky9
2.3.13-debian12, 2.3.13-ubuntu22, 2.3.13-ubuntu22-arm, 2.3.13-ml-ubuntu22, 2.3.13-rocky9
September 11, 2025
Announcement
New Serverless for Apache Spark runtime versions :
1.2.61
2.2.61
2.3.12
3.0.0-RC4
September 08, 2025
Announcement
Announcing the Preview release of Dataproc on Compute Engine image version 3.0.0-RC1 :
Spark 4.0.0
Hadoop 3.4.1
Hive 4.1.0
Tez 0.10.5
Cloud Storage Connector 3.1.4
Conda 24.11
Java 17
Python 3.11
R 4.3
Scala 2.13
Announcement
Announcing the Preview release of Serverless for Apache Spark 3.0.0-RC3 runtime :
Spark 4.0.0
BigQuery Spark Connector 0.42.3
Cloud Storage Connector 3.1.5
Conda 25.3.0
Java 21
Python 3.12
R 4.4
Scala 2.13
Announcement
New Dataproc on Compute Engine subminor image versions :
2.3.11-debian12, 2.3.11-ubuntu22, 2.3.11-ubuntu22-arm, 2.3.11-ml-ubuntu22, 2.3.11-rocky9
September 05, 2025
Announcement
New Dataproc Serverless for Spark runtime versions:
1.2.60
2.2.60
2.3.11
September 02, 2025
Feature
Multi-tenant clusters are now available in Preview. Many data engineers and scientists can share a multi-tenant cluster to execute their workloads in isolation from each other.
August 29, 2025
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.147-debian10, 2.0.147-ubuntu18, 2.0.147-rocky8
2.1.96-debian11, 2.1.96-ubuntu20, 2.1.96-ubuntu20-arm, 2.1.96-rocky8
2.2.64-debian12, 2.2.64-ubuntu22, 2.2.64-ubuntu22-arm, 2.2.64-rocky9
2.3.10-debian12, 2.3.10-ubuntu22, 2.3.10-ubuntu22-arm, 2.3.10-ml-ubuntu22, 2.3.10-rocky9
Announcement
New Dataproc Serverless for Spark runtime versions:
1.2.59
2.2.59
2.3.10
August 22, 2025
Announcement
New Dataproc Serverless for Spark runtime versions :
1.2.58
2.2.58
2.3.9
August 21, 2025
Fixed
Serverless for Apache Spark: Fixed a bug in Dataproc Batches that occasionally caused higher latency before an application was started.
August 19, 2025
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.146-debian10, 2.0.146-ubuntu18, 2.0.146-rocky8
2.1.95-debian11, 2.1.95-ubuntu20, 2.1.95-ubuntu20-arm, 2.1.95-rocky8
2.2.63-debian12, 2.2.63-ubuntu22, 2.2.63-ubuntu22-arm, 2.2.63-rocky9
2.3.9-debian12, 2.3.9-ubuntu22, 2.3.9-ubuntu22-arm, 2.3.9-ml-ubuntu22, 2.3.9-rocky9
August 14, 2025
Announcement
New Dataproc Serverless for Spark runtime versions :
1.2.57
2.2.57
2.3.8
August 12, 2025
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.145-debian10, 2.0.145-ubuntu18, 2.0.145-rocky8
2.1.94-debian11, 2.1.94-ubuntu20, 2.1.94-ubuntu20-arm, 2.1.94-rocky8
2.2.62-debian12, 2.2.62-ubuntu22, 2.2.62-ubuntu22-arm, 2.2.62-rocky9
2.3.8-debian12, 2.3.8-ubuntu22, 2.3.8-ubuntu22-arm, 2.3.8-ml-ubuntu22, 2.3.8-rocky9
Feature
Dataproc on Compute Engine : Sharing checkpoint diagnostic data: Setting the dataproc:diagnostic.capture.access=GOOGLE_DATAPROC_DIAGNOSE property during cluster creation shares all of the temp bucket contents with Google Cloud support if uniform bucket-level access is enabled on temp bucket. If object-level access control is in effect on the temp bucket, only the checkpoint diagnostic data folder corresponding to the cluster in Cloud Storage is shared.
Announcement
New Dataproc Serverless for Spark runtime versions :
1.2.56
2.2.56
2.3.7
Feature
Dataproc on Compute Engine: Image versions 2.2 and 2.3 : The Iceberg optional component supports the BigLake Iceberg REST catalog.
August 11, 2025
Announcement
New Dataproc on Compute Engine subminor image versions :
2.1.93-debian11, 2.1.93-rocky8, 2.1.93-ubuntu20, 2.1.93-ubuntu20-arm
2.2.61-debian12, 2.2.61-rocky9, 2.2.61-ubuntu22, 2.2.61-ubuntu22-arm
July 31, 2025
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.111
1.2.55
2.2.55
2.3.6
Announcement
Dataproc Serverless for Spark: Subminor version 1.1.111 is the last release of runtime version 1.1 , which will no longer be supported and will not receive new releases.
July 25, 2025
Announcement
New Dataproc on Compute Engine subminor image versions :
2.3.7-debian12 , 2.3.7-ubuntu22 , 2.3.7-ubuntu22-arm , 2.3.7-ml-ubuntu22 , and 2.3.7-rocky9
The 2.3.7-ml-ubuntu22 image extends the 2.3 base image with ML-specific libraries .
July 15, 2025
Announcement
New Dataproc on Compute Engine subminor image versions :
2.3.6-debian12 , 2.3.6-ubuntu22 , 2.3.6-ml-ubuntu22 , and 2.3.6-rocky9
The 2.3.6-ml-ubuntu22 image extends the 2.3 base image with ML-specific libraries .
Announcement
Dataproc on Compute Engine: Starting August 18, 2025, the following diagnostic properties will be enabled by default for newly created Dataproc clusters:
dataproc:diagnostic.capture.enabled : Enables the collection of checkpoint data in the cluster temp bucket .
dataproc:dataproc.logging.extended.enabled : Enables the collection of logs for the Knox, Zeppelin, Ranger-usersync, Jupyter_notebook, Jupyter_kernel_gateway components and the Spark History-Server in Cloud Logging .
dataproc:dataproc.logging.syslog.enabled : Enables the collection of VM syslogs in Cloud Logging .
To continue using the Ops Agent initialization action opsagent.sh to ingest syslogs from Dataproc cluster nodes, do one of the following:
Recommended: Use opsagent_nosyslog.sh since
VM syslogs will now be emitted by default from Dataproc clusters.
Set the dataproc:dataproc.logging.syslog.enabled=false and continue using opsagent.sh
to ingest syslogs.
Note: To disable any of these features, set the corresponding property to false during cluster creation.
Feature
Dataproc now allows Dynamic update of multi-tenancy clusters .
July 07, 2025
Feature
The Cluster Scheduled Stop feature is available in preview . You can use this feature to stop clusters after a specified idle period, at a specified future time, or after a specified period from the cluster creation or update request.
July 04, 2025
Announcement
New Dataproc on Compute Engine subminor image versions :
2.3.5-debian12 , 2.3.5-ubuntu22 , 2.3.5-ml-ubuntu22 , and 2.3.5-rocky9
The 2.3.5-ml-ubuntu22 image extends the 2.3 base image with ML-specific libraries .
Change
Serverless for Apache Spark (formerly known as Dataproc Serverless for Spark ) now supports OS Login organization policy . Organizations, folders, and projects that enforce the OS Login policy can now use Serverless for Apache Spark.
July 01, 2025
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.110
1.2.54
2.2.54
2.3.5
June 20, 2025
Change
Dataproc Serverless for Spark: The built-in Iceberg now supports the BigLake Iceberg REST catalog on the 2.2 runtime.
Change
Dataproc Serverless for Spark: Upgraded the Cloud Storage connector version to 2.2.28 in the 1.1 runtime.
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.109
1.2.53
2.2.53
2.3.4
Change
Dataproc on Compute Engine: Upgraded the Cloud Storage connector version to 2.2.28 in the latest 2.0 and 2.1 images.
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.144-debian10, 2.0.144-rocky8, 2.0.144-ubuntu18
2.1.92-debian11, 2.1.92-rocky8, 2.1.92-ubuntu20, 2.1.92-ubuntu20-arm
2.2.60-debian12, 2.2.60-rocky9, 2.2.60-ubuntu22
2.3.4-debian12, 2.3.4-rocky9, 2.3.4-ubuntu22, and 2.3.4-ml-ubuntu22 .
The 2.3.4-ml-ubuntu22 image extends the 2.3 base image with ML-specific libraries .
Change
Dataproc on Compute Engine: Dataproc now automatically configures Knox Gateway configuration properties gateway.dispatch.whitelist.services and gateway.dispatch.whitelist for component web UIs within the cluster.
Fixed
Dataproc on Compute Engine: Fixed a bug in trino-jvm cluster properties . To configure Trino JVM options prefixed with trino-jvm , follow these guidelines:
Configure JVM options starting with -XX: , without : . For JVM flags without a value, add = at the end. For example, add trino-jvm:-XX+HeapDumpOnOutOfMemoryError= as - XX:+HeapDumpOnOutOfMemoryError in the jvm.config .
Specify JVM options system properties with a -D prefix the same way. For example, trino-jvm:-Dsystem.property.name=value .
Any value containing : cannot be provided as a cluster property.
Fixed
Dataproc on Compute Engine & Dataproc Serverless: Backported GH-3198 in Parquet addressing CVE-2025-46762 .
June 10, 2025
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.108
1.2.52
2.2.52
2.3.3
June 09, 2025
Announcement
Announcing the GA release of Dataproc on Compute Engine image version 2.3 :
Image Version 2.3 is a lightweight image that contains only core components, reducing exposure to Common Vulnerabilities and Exposures (CVEs). For higher security compliance requirements, use the image version 2.3 or later when creating a Dataproc cluster. Optional components can still be deployed on-demand.
The following images are the latest available 2.3 subminor image versions:
2.3.3-debian12 , 2.3.3-rocky9 , 2.3.3-ubuntu22 , and 2.3.3-ml-ubuntu22 .
The 2.3.3-ml-ubuntu22 image extends the 2.3 base image with ML-specific libraries .
June 06, 2025
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.107
1.2.51
2.2.51
2.3.2
Fixed
Dataproc Serverless for Spark: Fixed a bug that prevented the spark.executorEnv property from correctly setting specific executor environment variables across all runtimes.
June 01, 2025
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.143-debian10, 2.0.143-rocky8, 2.0.143-ubuntu18
2.1.91-debian11, 2.1.90-rocky8, 2.1.91-ubuntu20, 2.1.91-ubuntu20-arm
2.2.59-debian12, 2.2.59-rocky9, 2.2.59-ubuntu22
Fixed
Dataproc on Compute Engine : Fixed the ordering of log entries generated from clusters created with 2.2+ image versions by assigning timestamps closer to the log generation time.
May 30, 2025
Announcement
The support dates for Dataproc on Compute Engine image versions 2.0 , 2.1 , and 2.2 have been extended, as follows:
Image version 2.2 : Supported until 03/31/2027
Image version 2.1 : Supported until 03/31/2026
Image version 2.0 Supported until 09/30/2025
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.106
1.2.50
2.2.50
2.3.1
May 28, 2025
Announcement
Announcing the General Availability release of Spark on BigQuery , which lets you create a serverless Spark session in a BigQuery Studio notebook. Use this feature to create, run, and test Spark jobs quickly and easily. For more information, see Run PySpark code in BigQuery Studio notebooks .
Announcement
Announcing the General Availability (GA) release of Dataproc Serverless for Spark runtime versions 2.3 , which include the following components:
Spark 3.5.1
BigQuery Spark Connector 0.42.3
Cloud Storage Connector 3.1.2
Java 17
Python 3.11
R 4.3
Scala 2.13
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.105
1.2.49
2.2.49
2.3.0
May 23, 2025
Feature
Dataproc now supports the creation of zero-scale clusters , available in preview . This feature provides a cost-effective way to use Dataproc clusters, as they utilize only secondary workers that can be scaled down to zero when not in use.
Change
New Dataproc on Compute Engine subminor image versions :
2.0.142-debian10, 2.0.142-rocky8, 2.0.142-ubuntu18
2.1.90-debian11, 2.1.90-rocky8, 2.1.90-ubuntu20, 2.1.90-ubuntu20-arm
2.2.58-debian12, 2.2.58-rocky9, 2.2.58-ubuntu22
May 22, 2025
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.104
1.2.48
2.2.48
May 15, 2025
Change
New Dataproc on Compute Engine subminor image versions :
2.0.141-debian10, 2.0.141-rocky8, 2.0.141-ubuntu18
2.1.89-debian11, 2.1.89-rocky8, 2.1.89-ubuntu20, 2.1.89-ubuntu20-arm
2.2.57-debian12, 2.2.57-rocky9, 2.2.57-ubuntu22
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.103
1.2.47
2.2.47
May 12, 2025
Feature
Dataproc Serverless for Spark: Spark UI for Dataproc Serverless batches and interactive sessions , which lets you monitor and debug your serverless Spark workloads, now features Event Timeline and Task Quantile views for enhanced troubleshooting.
May 09, 2025
Change
New Dataproc on Compute Engine subminor image versions :
2.0.140-debian10, 2.0.140-rocky8, 2.0.140-ubuntu18
2.1.88-debian11, 2.1.88-rocky8, 2.1.88-ubuntu20, 2.1.88-ubuntu20-arm
2.2.56-debian12, 2.2.56-rocky9, 2.2.56-ubuntu22
May 08, 2025
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.102
1.2.46
2.2.46
May 07, 2025
Announcement
Dataproc on Compute Engine: The default enabling of the following cluster properties previously announced to occur on May 10, 2025 (see the
February 10, 2025 release note ) has been postponed to a future date. The future date will be announced in a release note at least one month in advance of the change. Until then, these diagnostic properties will continue to be set to false by default unless set to true by the user.
dataproc:diagnostic.capture.enabled
dataproc:dataproc.logging.extended.enabled
dataproc:dataproc.logging.syslog.enabled
May 02, 2025
Change
Dataproc on Compute Engine: Upgraded NodeProblemDetector to 0.8.20 based version for 2.2 image.
Announcement
New Dataproc on Compute Engine subminor image versions:
2.0.139-debian10, 2.0.139-rocky8, 2.0.139-ubuntu18
2.1.87-debian11, 2.1.87-rocky8, 2.1.87-ubuntu20, 2.1.87-ubuntu20-arm
2.2.55-debian12, 2.2.55-rocky9, 2.2.55-ubuntu22
Change
Dataproc on Compute Engine: Upgraded oauth2l to v1.3.3 to address CVEs.
Fixed
Dataproc on Compute Engine: Fixed an issue with Apache Hudi that caused failure in Hudi CLI.
May 01, 2025
Fixed
Dataproc Serverless: Backported GH-3168 in Parquet addressing CVE-2025-30065 .
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.101
1.2.45
2.2.45
Change
Native Query Execution now supports reading Apache ORC complex types.
April 29, 2025
Fixed
Dataproc on Compute Engine: Fixed Job ID retrieval in Dataproc job logs for clusters created with 2.0 , 2.1 image versions, by ignoring timestamp prefix.
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.138-debian10, 2.0.138-rocky8, 2.0.138-ubuntu18
2.1.86-debian11, 2.1.86-rocky8, 2.1.86-ubuntu20, 2.1.86-ubuntu20-arm
2.2.54-debian12, 2.2.54-rocky9, 2.2.54-ubuntu22
Fixed
Dataproc on Compute Engine: Backported GH-3168 in Parquet addressing CVE-2025-30065 .
Fixed
Dataproc on Compute Engine: Added an temporary object hold on the spark-job-history folder in Cloud Stroage to prevent deletion by Cloud Storage life cycling.
April 18, 2025
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.99
1.2.43
2.2.43
April 17, 2025
Fixed
Fixed a bug in which Jupyter fails to restart upon cluster restart on Personal Authentication clusters .
Change
Dataproc on Compute Engine: The Spark BigQuery connector has been upgraded to version 0.34.1 in the latest 2.2 image version .
Announcement
New Dataproc on Compute Engine subminor image versions:
2.0.137-debian10, 2.0.137-rocky8, 2.0.137-ubuntu18
2.1.85-debian11, 2.1.85-rocky8, 2.1.85-ubuntu20, 2.1.85-ubuntu20-arm
2.2.53-debian12, 2.2.53-rocky9, 2.2.53-ubuntu22
April 09, 2025
Announcement
Dataproc Serverless for Spark: Gemini Cloud Assist Investigations is available in Preview for the following runtimes:
1.1
1.2
2.2
April 08, 2025
Fixed
Dataproc on Compute Engine: Fixed an issue with the retrieval of an Access token when using the ranger-gcs-plugin with 2.2 images.
Announcement
New Dataproc on Compute Engine subminor image versions :
2.2.52-debian12, 2.2.52-rocky9, 2.2.52-ubuntu22
April 03, 2025
Change
Dataproc Serverless for Spark: Installed CUDA, cuDNN and NCCL NVIDIA libraries in 1.2 and 2.2 runtimes.
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.98
1.2.42
2.2.42
April 01, 2025
Announcement
New Dataproc on Compute Engine subminor image versions :
2.2.51-debian12, 2.2.51-rocky9, 2.2.51-ubuntu22
Change
Dataproc on Compute Engine: Hyperdisk-Balanced is now the default primary disk type when creating a cluster from the console.
Fixed
Dataproc on Compute Engine: Fixed incorrectly attributed Dataproc job logs in Cloud Logging for clusters created with 2.2+ image versions. This happened when multiple Dataproc jobs were running concurrently on the same cluster.
March 31, 2025
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.97
1.2.41
2.2.41
March 28, 2025
Change
Dataproc Serverless for Spark: Hadoop Native libraries are installed by default in all runtimes.
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.96
1.2.40
2.2.40
March 17, 2025
Change
New Dataproc on Compute Engine subminor image versions :
2.0.136-debian10, 2.0.136-rocky8, 2.0.136-ubuntu18
2.1.84-debian11, 2.1.84-rocky8, 2.1.84-ubuntu20, 2.1.84-ubuntu20-arm
2.2.50-debian12, 2.2.50-rocky9, 2.2.50-ubuntu22
Change
Dataproc on Compute Engine: Spark upgraded to version 3.5.3 in the latest Dataproc image version 2.2 .
Feature
Dataproc on Compute Engine: Added support for Enhanced Flexibility Mode (EFM) with primary worker shuffle mode on Spark for image version 2.2.50 and above.
Change
Dataproc on Compute Engine: The latest Dataproc 2.2 image version now supports Spark data lineage .
March 14, 2025
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.95
1.2.39
2.2.39
March 10, 2025
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.135-debian10, 2.0.135-rocky8, 2.0.135-ubuntu18
2.1.83-debian11, 2.1.83-rocky8, 2.1.83-ubuntu20, 2.1.83-ubuntu20-arm
2.2.49-debian12, 2.2.49-rocky9, 2.2.49-ubuntu22
March 04, 2025
Feature
Dataproc is now available in the europe-north2 region (Stockholm, Sweden).
March 03, 2025
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.94
1.2.38
2.2.38
March 01, 2025
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.134-debian10, 2.0.134-rocky8, 2.0.134-ubuntu18
2.1.82-debian11, 2.1.82-rocky8, 2.1.82-ubuntu20, 2.1.82-ubuntu20-arm
2.2.48-debian12, 2.2.48-rocky9, 2.2.48-ubuntu22
Change
Dataproc on Compute Engine : Explicitly disabled sha1 , md5 algorithms for use with kex and kex-gss sshd features.
February 24, 2025
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.93
1.2.37
2.2.37
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.133-debian10, 2.0.133-rocky8, 2.0.133-ubuntu18
2.1.81-debian11, 2.1.81-rocky8, 2.1.81-ubuntu20, 2.1.81-ubuntu20-arm
2.2.47-debian12, 2.2.47-rocky9, 2.2.47-ubuntu22
February 17, 2025
Announcement
New Dataproc on Compute Engine subminor image versions:
2.0.132-debian10, 2.0.132-rocky8, 2.0.132-ubuntu18
2.1.80-debian11, 2.1.80-rocky8, 2.1.80-ubuntu20, 2.1.80-ubuntu20-arm
2.2.46-debian12, 2.2.46-rocky9, 2.2.46-ubuntu22
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.92
1.2.36
2.2.36
February 11, 2025
Announcement
Data Lineage for Dataproc Hive is now in Public Preview, which can be enabled using the Hive Lineage initialization action .
February 10, 2025
Announcement
Dataproc on Compute Engine: To help diagnose Dataproc clusters, you can set the following cluster properties to true when you create a cluster :
dataproc:diagnostic.capture.enabled : When set to true , enables the collection of checkpoint data in the cluster temp bucket .
dataproc:dataproc.logging.extended.enabled : When set to true , enables the collection of logs for the Knox, Zeppelin, Solr, Trino, Presto, Ranger-usersync, Jupyter_notebook components and the Spark History-Server in Cloud Logging .
dataproc:dataproc.logging.syslog.enabled : When set to true , enables the collection of VM syslogs in Cloud Logging .
Note: starting May 10, 2025, these properties will be set to true by default.
February 09, 2025
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.91
1.2.35
2.2.35
February 07, 2025
Change
New Dataproc on Compute Engine subminor image versions:
2.0.131-debian10, 2.0.131-rocky8, 2.0.131-ubuntu18
2.1.79-debian11, 2.1.79-rocky8, 2.1.79-ubuntu20, 2.1.79-ubuntu20-arm
2.2.45-debian12, 2.2.45-rocky9, 2.2.45-ubuntu22
Announcement
Spark UI for Dataproc Serverless Batches and Interactive sessions , which lets you to monitor and debug your serverless Spark workloads, is now available for CMEK (Customer-Managed Encryption Keys) and Assured Workloads . The Spark UI is available by default and free of cost.
February 02, 2025
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.90
1.2.34
2.2.34
January 31, 2025
Change
New Dataproc on Compute Engine subminor image versions:
2.0.130-debian10, 2.0.130-rocky8, 2.0.130-ubuntu18
2.1.78-debian11, 2.1.78-rocky8, 2.1.78-ubuntu20, 2.1.78-ubuntu20-arm
2.2.44-debian12, 2.2.44-rocky9, 2.2.44-ubuntu22
Announcement
New Hyperdisk Balanced primary disk type available on Dataproc clusters.
New machine types available for Hyperdisk Balanced disk type on clusters: C4, C4A, and N4.
January 30, 2025
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.89
1.2.33
2.2.33
Change
Dataproc on Compute Engine: Private Google Access is now automatically enabled in the configured subnetwork when creating clusters with internal IP addresses .
Change
Dataproc Serverless for Spark: Private Google Access is now automatically enabled in the configured subnetwork when running batch workloads and interactive sessions.
January 24, 2025
Announcement
Dataproc cluster caching now supports ARM images.
Announcement
Zeppelin component added to 2.1-Ubuntu20-arm images .
Announcement
New Dataproc on Compute Engine subminor image versions:
2.0.129-debian10, 2.0.129-rocky8, 2.0.129-ubuntu18
2.1.77-debian11, 2.1.77-rocky8, 2.1.77-ubuntu20, 2.1.77-ubuntu20-arm
2.2.43-debian12, 2.2.43-rocky9, 2.2.43-ubuntu22
January 23, 2025
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.88
1.2.32
2.2.32
January 17, 2025
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.87
1.2.31
2.2.31
Announcement
New Dataproc on Compute Engine subminor image versions:
2.0.128-debian10, 2.0.128-rocky8, 2.0.128-ubuntu18
2.1.76-debian11, 2.1.76-rocky8, 2.1.76-ubuntu20, 2.1.76-ubuntu20-arm
2.2.42-debian12, 2.2.42-rocky9, 2.2.42-ubuntu22
Change
Dataproc Serverless for Spark:
Added support for XGBoost 2.1 in 2.2 runtime.
Change spark.sql.maxMetadataStringLength default value to 5000 for 1.2 and 2.2 runtimes
January 13, 2025
Announcement
Dataproc Serverless for Spark: On March 10, 2025, the Dataproc Resource Manager API will be enabled as part of General Availability (GA) for Dataproc Serverless 3.0+ versions.
User action will not be required in response to this API enablement change.
The Dataproc Resource Manager will be implemented as a stand-alone Google Cloud API, dataprocrm.googleapis.com . It will allow Dataproc distributions of open source software, ,particularly Apache Spark, to directly communicate resource requirements.
January 10, 2025
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.127-debian10, 2.0.127-rocky8, 2.0.127-ubuntu18
2.1.75-debian11, 2.1.75-rocky8, 2.1.75-ubuntu20, 2.1.75-ubuntu20-arm
2.2.41-debian12, 2.2.41-rocky9, 2.2.41-ubuntu22
December 12, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.126-debian10, 2.0.126-rocky8, 2.0.126-ubuntu18
2.1.74-debian11, 2.1.74-rocky8, 2.1.74-ubuntu20, 2.1.74-ubuntu20-arm
2.2.40-debian12, 2.2.40-rocky9, 2.2.40-ubuntu22
Libraries
Dataproc on Compute Engine : Updated Dataproc Metastore (DPMS) gRPC proxy image version to v. 0.0.70
November 20, 2024
Change
Dataproc Serverless for Spark : Spark Lineage is available for all supported Dataproc Serverless for Spark runtime versions .
November 18, 2024
Feature
Dataproc is now available in the northamerica-south1 region (Queretaro, Mexico).
November 11, 2024
Announcement
Announcing the General Availability (GA) of Spot and non-preemptible VM mixing for Dataproc secondary workers which allows you to mix spot and non-preemptible secondary workers when you create a Dataproc cluster.
Announcement
Announcing the General Availability (GA) of Flexible shapes for Dataproc secondary workers which allows you to provide a ranked selection of machine types to use for the creation of VMs.
October 31, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.86
1.2.30
2.2.30
Fixed
Disabled HiveServer2 Ranger policy synchronization in non-HA clusters for latest image version 2.1 and later. Policy synchronization is causing instability of the HiveServer2 process while trying to connect to ZooKeeper, which is not active by default in non-HA clusters.
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.125-debian10, 2.0.125-rocky8, 2.0.125-ubuntu18
2.1.73-debian11, 2.1.73-rocky8, 2.1.73-ubuntu20, 2.1.73-ubuntu20-arm
2.2.39-debian12, 2.2.39-rocky9, 2.2.39-ubuntu22
Note:
When using Dataproc version 2.0.125 with the ranger-gcs-plugin, please create a customer support request for your project to use the enhanced version of the plugin prior to its GA release. This note does not apply Dataproc on Compute Engine image versions 2.1 and 2.2.
October 25, 2024
Feature
Dataproc Serverless for Spark: The Hadoop Google Secret Manager Credential Provider feature is now available in the Dataproc Serverless for Spark 1.2 and 2.2 runtimes.
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.124-debian10, 2.0.124-rocky8, 2.0.124-ubuntu18
2.1.72-debian11, 2.1.72-rocky8, 2.1.72-ubuntu20, 2.1.72-ubuntu20-arm
2.2.38-debian12, 2.2.38-rocky9, 2.2.38-ubuntu22
Change
Dataproc Serverless for Spark: Upgraded Cloud Storage connector to 3.0.3 version in the latest 1.2 and 2.2 runtimes.
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.85
1.2.29
2.2.29
Change
Dataproc Serverless for Spark : Added common AI/ML Python packages by default to Dataproc Serverless for Spark 1.2 and 2.2 runtimes.
October 21, 2024
Announcement
Announcing the General Availability (GA) release of Spark UI for Dataproc Serverless Batches and Interactive sessions which allows you to monitor and debug your serverless Spark workloads. Spark UI is available by default and free of cost for all Dataproc Serverless workloads.
October 18, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.123-debian10, 2.0.123-rocky8, 2.0.123-ubuntu18
2.1.71-debian11, 2.1.71-rocky8, 2.1.71-ubuntu20, 2.1.71-ubuntu20-arm
2.2.37-debian12, 2.2.37-rocky9, 2.2.37-ubuntu22
October 17, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.84
1.2.28
2.2.28
October 14, 2024
Change
Dataproc Clusters created with image versions 2.0.57+, 2.1.5+, or 2.2+ : Secondary workers' control plane operations are made by the Dataproc Service Agent service account ( service-<project-number>@dataproc-accounts.iam.gserviceaccount.com ). They will no longer use the Google APIs Service Agent service account ( <project-number>@cloudservices.gserviceaccount.com ).
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.122-debian10, 2.0.122-rocky8, 2.0.122-ubuntu18
2.1.70-debian11, 2.1.70-rocky8, 2.1.70-ubuntu20, 2.1.70-ubuntu20-arm
2.2.36-debian12, 2.2.36-rocky9, 2.2.36-ubuntu22
October 11, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.83
1.2.27
2.2.27
October 08, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.121-debian10, 2.0.121-rocky8, 2.0.121-ubuntu18
2.1.69-debian11, 2.1.69-rocky8, 2.1.69-ubuntu20, 2.1.69-ubuntu20-arm
2.2.35-debian12, 2.2.35-rocky9, 2.2.35-ubuntu22
October 04, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.82
1.2.26
2.2.26
September 30, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.81
1.2.25
2.2.25
Announcement
Blocklisted the following Dataproc on Compute Engine subminor image versions:
2.0.120-debian10, 2.0.120-rocky8, 2.0.120-ubuntu18
2.1.68-debian11, 2.1.68-rocky8, 2.1.68-ubuntu20, 2.1.68-ubuntu20-arm
2.2.34-debian12, 2.2.34-rocky9, 2.2.34-ubuntu22
September 23, 2024
Change
Dataproc Serverless for Spark: Added the google-cloud-dlp Python package by default to the Dataproc Serverless for Spark runtimes.
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.79
1.2.23
2.2.23
Change
Dataproc Serverless for Spark: In runtime versions 1.2 and 2.2 , minimized the dynamic memory footprint of the Spark application by setting XX:MaxHeapFreeRatio to 30% and XX:MinHeapFreeRatio to 10%.
Fixed
Dataproc Serverless for Spark: Fixed an issue that would cause some batches and sessions to fail to start when using the premium compute tier.
September 21, 2024
Announcement
Blocklisted the following Dataproc on Compute Engine subminor image versions :
2.0.119-debian10, 2.0.103-rocky8, 2.0.103-ubuntu18
2.1.67-debian11, 2.1.51-rocky8, 2.1.51-ubuntu20, 2.1.51-ubuntu20-arm
2.2.33-debian12, 2.2.17-rocky9, 2.2.17-ubuntu22
September 16, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.118-debian10, 2.0.118-rocky8, 2.0.118-ubuntu18
2.1.66-debian11, 2.1.66-rocky8, 2.1.66-ubuntu20, 2.1.66-ubuntu20-arm
2.2.32-debian12, 2.2.32-rocky9, 2.2.32-ubuntu22
September 13, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.78
1.2.22
2.2.22
Fixed
Dataproc Serverless for Spark: Fixed a bug that caused some batches and sessions to fail to start when using the premium compute tier.
September 06, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.117-debian10, 2.0.117-rocky8, 2.0.117-ubuntu18
2.1.65-debian11, 2.1.65-rocky8, 2.1.65-ubuntu20, 2.1.65-ubuntu20-arm
2.2.31-debian12, 2.2.31-rocky9, 2.2.31-ubuntu22
Change
Dataproc on Compute Engine: The latest 2.2 image versions support Hudi Trino integration natively. If both components are selected when you create a Dataproc cluster, Trino will be configured to support Hudi automatically.
Change
Dataproc on Compute Engine: The latest 2.2 image versions now support Hudi 0.15.0 .
September 04, 2024
Announcement
Dataproc on Compute Engine: Dataproc image version 2.2 will become the default Dataproc on Compute Engine image version on September 6, 2024.
September 03, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.116-debian10, 2.0.116-rocky8, 2.0.116-ubuntu18
2.1.64-debian11, 2.1.64-rocky8, 2.1.64-ubuntu20, 2.1.64-ubuntu20-arm
2.2.30-debian12, 2.2.30-rocky9, 2.2.30-ubuntu22,
Deprecated
Dataproc on GKE runtime versions 2.0 (Spark 3.1) is deprecated.
Change
Dataproc on Compute Engine: Apache Spark upgraded to version 3.5.1 in image version 2.2 starting with image version 2.2.30 .
August 26, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.115-debian10, 2.0.115-rocky8, 2.0.115-ubuntu18
2.1.63-debian11, 2.1.63-rocky8, 2.1.63-ubuntu20, 2.1.63-ubuntu20-arm
2.2.29-debian12, 2.2.29-rocky9, 2.2.29-ubuntu22
August 22, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.77
1.2.21
2.0.85
2.2.21
Announcement
Dataproc Serverless for Spark: Subminor version 2.0.85 is the last release of runtime version 2.0 , which will no longer be supported and will not receive new releases.
August 19, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.114-debian10, 2.0.114-rocky8, 2.0.114-ubuntu18
2.1.62-debian11, 2.1.62-rocky8, 2.1.62-ubuntu20, 2.1.62-ubuntu20-arm
2.2.28-debian12, 2.2.28-rocky9, 2.2.28-ubuntu22
Announcement
syslog is now available for Dataproc cluster nodes in Cloud Logging . See Dataproc logs for cluster and job log information.
August 15, 2024
Change
New Dataproc Serverless for Spark runtime versions :
1.1.76
1.2.20
2.0.84
2.2.20
August 12, 2024
Change
New Dataproc Serverless for Spark runtime versions :
1.1.75
1.2.19
2.0.83
2.2.19
July 31, 2024
Change
New Dataproc Serverless for Spark runtime versions :
1.1.74
1.2.18
2.0.82
2.2.18
Change
Dataproc Serverless for Spark: Upgraded Spark BigQuery connector to version 0.36.4 in the latest 1.2 and 2.2 Dataproc Serverless for Spark runtime versions.
July 26, 2024
Change
New Dataproc Serverless for Spark runtime versions :
1.1.73
1.2.17
2.0.81
2.2.17
July 25, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.113-debian10, 2.0.113-rocky8, 2.0.113-ubuntu18
2.1.61-debian11, 2.1.61-rocky8, 2.1.61-ubuntu20, 2.1.61-ubuntu20-arm
2.2.27-debian12, 2.2.27-rocky9, 2.2.27-ubuntu22
Announcement
Enabled user sync by default for clusters using Ranger.
Change
Replaced Spark external packages with connector folder on Dataproc 2.2 clusters.
Fixed
Fixed a bug that caused intermittent delays and failures in clusters with 3
HDFS.
July 22, 2024
Change
Added support for N4 and C4 machine types for Dataproc image versions 2.1 and above . The following default configurations are now applied to clusters created with N4 or C4 machine types:
bootdisktype = "hyperdisk-balanced"
nictype = "gvnic"
Change
Hyperdisks for Dataproc clusters are now created with default throughput and IOPS. When this behavior becomes configurable, it will be announced in a future release note.
Breaking
When a Cluster, Job, AutoscalingPolicy, or WorkflowTemplate API resource does not exist and the requestor does not have access to the project, a 403 error code is now issued instead of a 404 error code.
July 19, 2024
Change
New Dataproc Serverless for Spark runtime versions :
1.1.72
1.2.16
2.0.80
2.2.16
Note: Dataproc Serverless for Spark runtime versions 1.1.71, 1.2.15, 2.0.79, and 2.2.15 were not released.
July 18, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.112-debian10, 2.0.112-rocky8, 2.0.112-ubuntu18
2.1.60-debian11, 2.1.60-rocky8, 2.1.60-ubuntu20, 2.1.60-ubuntu20-arm
2.2.26-debian12, 2.2.26-rocky9, 2.2.26-ubuntu22
July 17, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.70
1.2.14
2.0.78
2.2.14
July 12, 2024
Change
New Dataproc on Compute Engine subminor image versions :
2.0.111-debian10, 2.0.112-rocky8, 2.0.112-ubuntu18
2.1.59-debian11, 2.1.60-rocky8, 2.1.60-ubuntu20, 2.1.60-ubuntu20-arm
2.2.25-debian12, 2.2.26-rocky9, 2.2.26-ubuntu22
July 11, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.69
1.2.13
2.0.77
2.2.13
July 08, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.110-debian10, 2.0.110-rocky8, 2.0.110-ubuntu18
2.1.58-debian11, 2.1.58-rocky8, 2.1.58-ubuntu20, 2.1.58-ubuntu20-arm
2.2.24-debian12, 2.2.24-rocky9, 2.2.24-ubuntu22
July 05, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.68
1.2.12
2.0.76
2.2.12
July 03, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.109-debian10, 2.0.109-rocky8, 2.0.109-ubuntu18
2.1.57-debian11, 2.1.57-rocky8, 2.1.57-ubuntu20, 2.1.57-ubuntu20-arm
2.2.23-debian12, 2.2.23-rocky9, 2.2.23-ubuntu22
Feature
Added Cloud Profiler support in Dataproc Serverless for Spark . Enable profiling via the dataproc.profiling.enabled=true property and configure it via dataproc.profiling.name=<PROFILE_NAME>
Change
Dataproc on Compute Engine: Apache Hadoop upgraded to version 3.2.4 in image version 2.0 starting with image version 2.0.109 .
June 28, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.108-debian10, 2.0.108-rocky8, 2.0.108-ubuntu18
2.1.56-debian11, 2.1.56-rocky8, 2.1.56-ubuntu20, 2.1.56-ubuntu20-arm
2.2.22-debian12, 2.2.22-rocky9, 2.2.22-ubuntu22
Fixed
Backported fixes for HIVE-25958 and HIVE-20220 (new configuration hive.groupby.enable.deterministic.distribution=false/true ).
June 26, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.67
1.2.11
2.0.75
2.2.11
Breaking
Dataproc Serverless for Spark: To fix compatibility with open table formats (Apache Iceberg, Apache Hudi and Delta Lake), the ANTLR version downgraded from 4.13.1 to 4.9.3 in Dataproc Serverless for Spark runtime versions 1.2 and 2.2.
June 25, 2024
Change
The Dataproc Component Gateway is now activated by default when you create a Dataproc on Compute Engine cluster using the Google Cloud console.
June 24, 2024
Change
New Dataproc on Compute Engine subminor image versions :
2.0.107-debian10, 2.0.107-rocky8, 2.0.107-ubuntu18
2.1.55-debian11, 2.1.55-rocky8, 2.1.55-ubuntu20, 2.1.55-ubuntu20-arm
2.2.21-debian12, 2.2.21-rocky9, 2.2.21-ubuntu22
June 21, 2024
Breaking
Dataproc Serverless for Spark: To fix compatibility with open table formats (Apache Iceberg, Apache Hudi and Delta Lake), the ANTLR version will be downgraded from 4.13.1 to 4.9.3 in Dataproc Serverless for Spark runtime versions 1.2 and 2.2 on June 26, 2024.
June 20, 2024
Announcement
Dataproc Serverless for Spark: Spark runtime version 2.2 will become the default Dataproc Serverless for Spark runtime version on September 6, 2024.
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.66
1.2.10
2.0.74
2.2.10
June 13, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.106-debian10, 2.0.106-rocky8, 2.0.106-ubuntu18
2.1.54-debian11, 2.1.54-rocky8, 2.1.54-ubuntu20, 2.1.54-ubuntu20-arm
2.2.20-debian12, 2.2.20-rocky9, 2.2.20-ubuntu22
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.65
1.2.9
2.0.73
2.2.9
Change
Support configuration to prevent HiveMetaStore metrics expensive database queries. To prevent expensive queries during HiveMetaStore startup, set Hive property metastore.initial.metadata.count.enabled to false .
Change
Dataproc Serverless for Spark: Upgraded Spark BigQuery connector to version 0.36.3 in the latest 1.2 and 2.2 Dataproc Serverless for Spark runtime versions.
June 11, 2024
Announcement
The Apache Spark in BigQuery feature is available in Private Preview . This feature lets you create a Spark session in a BigQuery notebook that you can use to develop and submit PySpark code from BigQuery. To access this feature, fill in and submit the Dataproc Preview access request form.
June 06, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.105-debian10, 2.0.105-rocky8, 2.0.105-ubuntu18
2.1.53-debian11, 2.1.53-rocky8, 2.1.53-ubuntu20, 2.1.53-ubuntu20-arm
2.2.19-debian12, 2.2.19-rocky9, 2.2.19-ubuntu22
Change
Dataproc on Compute Engine: When creating a cluster with the latest Dataproc on Compute Engine image versions, the secondary worker boot disk type now defaults to the primary worker boot disk type, which is pd-standard if the primary worker boot disk type is not specified.
June 05, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.64
1.2.8
2.0.72
2.2.8
June 03, 2024
Change
Dataproc on Compute Engine : Update restartable job error messages to include job IDs.
Change
Dataproc Serverless for Spark: Automatically apply goog-dataproc-session-id , goog-dataproc-session-uuid and goog-dataproc-location labels for a session resource.
May 30, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.104-debian10, 2.0.104-rocky8, 2.0.104-ubuntu18
2.1.52-debian11, 2.1.52-rocky8, 2.1.52-ubuntu20, 2.1.52-ubuntu20-arm
2.2.18-debian12, 2.2.18-rocky9, 2.2.18-ubuntu22
Change
Dataproc Serverless for Spark: Removed Spark data lineage support for runtime version 1.2 .
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.63
1.2.7
2.0.71
2.1.50
2.2.7
Change
Dataproc Serverless for Spark: Enabled Spark checkpoint ( spark.checkpoint.compress ) and RDD ( spark.rdd.compress ) compression in the latest 1.2 and 2.2 runtime versions.
Announcement
Dataproc Serverless for Spark: Subminor version 2.1.50 is the last release of runtime version 2.1 , which will no longer be supported and will not receive new releases.
May 23, 2024
Change
Blocklisted the following Dataproc on Compute Engine subminor image versions :
2.0.103-debian10, 2.0.103-rocky8, 2.0.103-ubuntu18
2.1.51-debian11, 2.1.51-rocky8, 2.1.51-ubuntu20, 2.1.51-ubuntu20-arm
2.2.17-debian12, 2.2.17-rocky9, 2.2.17-ubuntu22
May 22, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.62
1.2.6
2.0.70
2.1.49
2.2.6
Change
Upgraded Spark BigQuery connector to version 0.36.2 in the latest 1.2 and 2.2 Dataproc Serverless for Spark runtime versions.
May 16, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.102-debian10, 2.0.102-rocky8, 2.0.102-ubuntu18
2.1.50-debian11, 2.1.50-rocky8, 2.1.50-ubuntu20, 2.1.50-ubuntu20-arm
2.2.16-debian12, 2.2.16-rocky9, 2.2.16-ubuntu22
Breaking
Anaconda's default channel is disabled for package installations on Dataproc on Compute Engine .
May 09, 2024
Change
New Dataproc on Compute Engine subminor image versions :
2.0.101-debian10, 2.0.101-rocky8, 2.0.101-ubuntu18
2.1.49-debian11, 2.1.49-rocky8, 2.1.49-ubuntu20, 2.1.49-ubuntu20-arm
2.2.15-debian12, 2.2.15-rocky9, 2.2.15-ubuntu22
May 08, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.61
1.2.5
2.0.69
2.1.48
2.2.5
May 06, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.100-debian10, 2.0.100-rocky8, 2.0.100-ubuntu18
2.1.48-debian11, 2.1.48-rocky8, 2.1.48-ubuntu20, 2.1.48-ubuntu20-arm
2.2.14-debian12, 2.2.14-rocky9, 2.2.14-ubuntu22
Change
Dataproc on Compute Engine :
Backported patches for HIVE-14557 , HIVE-19326 , HIVE-20514 , HIVE-21100 , HIVE-22165 , HIVE-22416 , HIVE-24435 .
Hive: Improved ORC split generation.
May 01, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.60
1.2.4
2.0.68
2.1.47
2.2.4
Change
Dataproc Serverless for Spark:
Upgraded Spark RAPIDS to version 24.04.0 in 1.2 and 2.2 Dataproc Serverless for Spark runtimes.
Breaking
When you submit a Dataproc Serverless Batch with a CMEK key :
In addition to encrypting disk and Cloud Storage data, Dataproc Serverless will use your CMEK to also encrypt batch job arguments. This change will require you to do the following:
Assign the Cloud KMS CryptoKey Encrypter/Decrypter role to the Dataproc Service Agent service account .
Enable the Cloud KMS API on the project that runs Dataproc Batches resources.
If the Dataproc Service Agent role is not attached to the Dataproc Service Agent service account , then add the serviceusage.services.use permission to the custom role attached to the Dataproc Service Agent service account.
batches.list will return an unreachable field that lists any batches with job arguments that couldn't be decrypted. You can issue a batches.get request to obtain more information on an unreachable batch.
Multi-regional and cross-regional CMEKs will no longer be permitted. The key (CMEK) must be located in the same location as the encrypted resource.
For example, the CMEK used to encrypt a batch that runs in the us-central1 region
must also be located in the us-central1 region.
April 29, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.99-debian10, 2.0.99-rocky8, 2.0.99-ubuntu18
2.1.47-debian11, 2.1.47-rocky8, 2.1.47-ubuntu20, 2.1.47-ubuntu20-arm
2.2.13-debian12, 2.2.13-rocky9, 2.2.13-ubuntu22
April 26, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.59
1.2.3
2.0.67
2.1.46
2.2.3
April 21, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.98-debian10, 2.0.98-rocky8, 2.0.98-ubuntu18
2.1.46-debian11, 2.1.46-rocky8, 2.1.46-ubuntu20, 2.1.46-ubuntu20-arm
2.2.12-debian12, 2.2.12-rocky9, 2.2.12-ubuntu22
April 20, 2024
Announcement
Announcing Dataproc Workflow Templates supports the CMEK organization policy .
April 18, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.58
1.2.2
2.0.66
2.1.45
2.2.2
Change
Updated the default autoscaling V2 cool-down time from 2m to 1m to reduce scaling latency.
Change
Set the soft delete policy of newly created Dataproc staging and temp Cloud Storage buckets to 0 days.
Fixed
Fixed a bug where Dataproc Serverless sessions that live longer than 48 hours are underbilled.
April 09, 2024
Feature
Dataproc Serverless for Spark: The preview release of Advanced troubleshooting , including Gemini-assisted troubleshooting , is now available for Spark workloads submitted with the following or later-released runtime versions:
1.1.55
1.2.0-RC1
2.0.63
2.1.42
2.2.0-RC15
Feature
Dataproc Serverless for Spark : Announcing the preview release of Autotuning Spark workloads .
April 04, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.57
1.2.1
2.0.65
2.1.44
2.2.1
Change
Added bigframes Python package by default in the Dataproc Serverless for Spark runtime versions 1.2 and 2.2
April 02, 2024
Announcement
The following previously released sub-minor versions of Dataproc on Compute Engine images have been rolled back and can only be used when updating existing clusters that already use them:
2.0.97-debian10, 2.0.97-rocky8, 2.0.97-ubuntu18
2.1.45-debian11, 2.1.45-rocky8, 2.1.45-ubuntu20, 2.1.45-ubuntu20-arm
2.2.11-debian12, 2.2.11-rocky9, 2.2.11-ubuntu22
March 29, 2024
Breaking
Dataproc Serverless for Spark: runtime version 2.2 will become the default Dataproc Serverless for Spark runtime version on May 3, 2024.
Note: This announcement was updated in the April 19, 2024 release note.
March 28, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.97-debian10, 2.0.97-rocky8, 2.0.97-ubuntu18
2.1.45-debian11, 2.1.45-rocky8, 2.1.45-ubuntu20, 2.1.45-ubuntu20-arm
2.2.11-debian12, 2.2.11-rocky9, 2.2.11-ubuntu22
Note: the above subminor image versions were rolled back on April 2, 2024
Feature
Dataproc on Compute Engine: New Hadoop Google Secret Manager Credential Provider feature introduced in latest Dataproc on Compute Engine 2.0 image versions .
March 27, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.56
1.2.0
2.0.64
2.1.43
2.2.0
Announcement
Announcing the General Availability (GA) release of Dataproc Serverless for Spark runtime versions 1.2 and 2.2 , which include the following components:
Spark 3.5.1
BigQuery Spark Connector 0.36.1
Cloud Storage Connector 3.0.0
Conda 24.1
Java 17
Python 3.12
R 4.3
Scala 2.12 (1.2 runtime) and Scala 2.13 (2.2 runtime)
Change
Dataproc Serverless for Spark:
Upgraded Spark to version 3.5.1 in the latest 1.2 and 2.2 runtimes.
Upgraded Conda to version 24.1 in the latest 1.2 and 2.2 runtimes.
Upgraded Spark BigQuery connector to version 0.36.1 in the latest 1.2 and 2.2 runtimes.
March 21, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.96-debian10, 2.0.96-rocky8, 2.0.96-ubuntu18
2.1.44-debian11, 2.1.44-rocky8, 2.1.44-ubuntu20, 2.1.44-ubuntu20-arm
2.2.10-debian12, 2.2.10-rocky9, 2.2.10-ubuntu22
March 20, 2024
Announcement
Announcing the Preview release of Dataproc Serverless for Spark 1.2 runtime :
Spark 3.5.0
BigQuery Spark Connector 0.35.1
Cloud Storage Connector 3.0.0
Conda 23.11
Java 17
Python 3.12
R 4.3
Scala 2.12
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.55
1.2.0-RC1
2.0.63
2.1.42
2.2.0-RC15
Change
Dataproc Serverless for Spark:
Upgraded Spark RAPIDS plugin to version 24.2.0 in the latest runtimes.
Upgraded Spark to version 3.3.4 in the latest 1.1 and 2.0 runtimes.
Backported SPARK-44198 in the latest 1.2 and 2.2 runtimes.
March 14, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.95-debian10, 2.0.95-rocky8, 2.0.95-ubuntu18
2.1.43-debian11, 2.1.43-rocky8, 2.1.43-ubuntu20, 2.1.43-ubuntu20-arm
2.2.9-debian12, 2.2.9-rocky9, 2.2.9-ubuntu22
Change
Added the bigframes ( BigQuery DataFrames ) Python package in the Dataproc Serverless for Spark 2.1 runtime.
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.54
2.0.62
2.1.41
2.2.0-RC14
March 07, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.53
2.0.61
2.1.40
2.2.0-RC13
Change
Dataproc Serverless for Spark: Upgraded Cloud Storage connector to 2.2.20 version in the latest 1.1, 2.0, and 2.1 runtimes.
March 06, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.94-debian10, 2.0.94-rocky8, 2.0.94-ubuntu18
2.1.42-debian11, 2.1.42-rocky8, 2.1.42-ubuntu20, 2.1.42-ubuntu20-arm
2.2.8-debian12, 2.2.8-rocky9, 2.2.8-ubuntu22
Libraries
Dataproc on Compute Engine : Upgraded Cloud Storage connector version to 2.2.20 for 2.0 and 2.1 images.
Change
Dataproc on Compute Engine : Mounted Java cacerts into containers by default when the Docker-on-YARN feature is enabled.
March 04, 2024
Change
Dataproc Serverless for Spark : Extended Spark metrics collected for a batch now include executor:resultSize , executor:shuffleBytesWritten , and executor:shuffleTotalBytesRead .
February 29, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.52
2.0.60
2.1.39
2.2.0-RC12
February 28, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.93-debian10, 2.0.93-rocky8, 2.0.93-ubuntu18
2.1.41-debian11, 2.1.41-rocky8, 2.1.41-ubuntu20, 2.1.41-ubuntu20-arm
2.2.7-debian12, 2.2.7-rocky9, 2.2.7-ubuntu22
Feature
Dataproc on Compute Engine : The new Secret Manager credential provider feature is available in the latest 2.1 image versions.
Change
Dataproc on Compute Engine :
Upgraded Zookeeper to 3.8.3 for Dataproc 2.2.
Upgraded ORC for Hive to 1.15.13 for Dataproc 2.1.
Upgraded ORC for Spark to 1.7.10 for Dataproc 2.1.
Extended expiry for the internal Knox Gateway certificate from one year to five years from cluster creation for Dataproc images 2.0, 2.1, and 2.2.
Fixed
Dataproc on Compute Engine : Fixed ZooKeeper startup failures in image 2.2 HA (High Availability) clusters that use fully qualified hostnames.
February 22, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.51
2.0.59
2.1.38
2.2.0-RC11
February 16, 2024
Breaking
Dataproc on Compute Engine: The internalIpOnly cluster configuration setting now defaults to true for clusters created with 2.2 image versions . Also see Create a Dataproc cluster with internal IP addresses only .
February 15, 2024
Announcement
Dataproc Serverless for Spark : Spark Lineage is available for Dataproc Serverless for Spark 1.1 runtime.
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.50
2.0.58
2.1.37
2.2.0-RC10
February 08, 2024
Feature
Dataproc on Compute Engine : The new Secret Manager credential provider feature is available in the latest 2.2 image versions.
Feature
Dataproc on Compute Engine Ranger Cloud Storage enhancement:
Enabled downscoping
Added caching of tokens in local cache
Both settings are configurable and can be enabled by customers: see Use Ranger with caching and downscoping .
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.92-debian10, 2.0.92-rocky8, 2.0.92-ubuntu18
2.1.40-debian11, 2.1.40-rocky8, 2.1.40-ubuntu20, 2.1.40-ubuntu20-arm
2.2.6-debian12, 2.2.6-rocky9, 2.2.6-ubuntu22
Change
Dataproc on Compute Engine: Backported patch for HADOOP-18652 .
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.49
2.0.57
2.1.36
2.2.0-RC9
Change
Dataproc Serverless for Spark : Backported patch for HADOOP-18652 .
February 02, 2024
Change
Dataproc on Compute Engine: Bucket ttl validation now also runs for buckets created by Dataproc.
Change
Dataproc Serverless for Spark: When dynamic allocation is enabled, the initial executor number is determined by max of spark.dynamicAllocation.initialExecutors and spark.executor.instances .
Change
Dataproc on Compute Engine: Added a warning during cluster creation if the cluster Cloud Storage staging bucket is using the legacy fine-grained/ACL IAM configuration instead of the recommended Uniform bucket-level access controls.
February 01, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.91-debian10, 2.0.91-rocky8, 2.0.91-ubuntu18
2.1.39-debian11, 2.1.39-rocky8, 2.1.39-ubuntu20, 2.1.39-ubuntu20-arm
2.2.5-debian12, 2.2.5-rocky9, 2.2.5-ubuntu22
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.48
2.0.56
2.1.35
2.2.0-RC8
Change
Dataproc on Compute Engine : Backported patches for HIVE-21214 , HIVE-23154 , HIVE-23354 and HIVE-23614 .
January 31, 2024
Feature
Dataproc is now available in the africa-south1 region (Johannesburg, South Africa).
Announcement
The GitHub Ops Agent initialization action installs the Ops Agent on a Dataproc cluster, and provides metrics similar to the metrics that were enabled with the --metric-sources=monitoring-agent-defaults setting available for use with Dataproc images versions prior to version 2.2.
January 25, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.47
2.0.55
2.1.34
2.2.0-RC7
January 24, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.90-debian10, 2.0.90-rocky8, 2.0.90-ubuntu18
2.1.38-debian11, 2.1.38-rocky8, 2.1.38-ubuntu20, 2.1.38-ubuntu20-arm
2.2.4-debian12, 2.2.4-rocky9, 2.2.4-ubuntu22
Change
Backport HIVE-19568 : Active/Passive HiveServer2 HA: Disallow direct connection to passive instance.
Change
Backport HIVE-27715 : Remove ThreadPoolExecutorWithOomHook.
January 19, 2024
Change
Dataproc on Compute Engine: The default yarn.nm.liveness-monitor.expiry-interval-ms Hadoop YARN setting has been changed in the latest image versions from 15000 (15 seconds) to 120000 (2 minutes).
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.89-debian10, 2.0.89-rocky8, 2.0.89-ubuntu18
2.1.37-debian11, 2.1.37-rocky8, 2.1.37-ubuntu20, 2.1.37-ubuntu20-arm
2.2.3-debian12, 2.2.3-rocky9, 2.2.3-ubuntu22
Security
Dataproc on Compute Engine: Upgraded Miniconda to 23.11, Python to 3.11, and curl to 8.5 to fix CVE-2023-38545 in the latest 2.2 images.
Fixed
Dataproc on Compute Engine: Fixed the gsutil: command not found error in the latest Ubuntu images.
Fixed
Dataproc on Compute Engine: Fixed Trino startup issue in the latest 2.2 images.
Change
Dataproc on Compute Engine: Upgraded Cloud Storage connector version to 2.2.19 in the latest 2.0 and 2.1 images.
Change
Dataproc Serverless for Spark: Upgraded Cloud Storage connector to 2.2.19 version in the latest 1.1, 2.0, and 2.1 runtimes.
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.46
2.0.54
2.1.33
2.2.0-RC6
January 17, 2024
Breaking
Beginning March 31, 2024, when you submit a Dataproc Serverless Batch with a CMEK key :
In addition to encrypting disk and Cloud Storage data, Dataproc Serverless will use your CMEK to also encrypt batch job arguments. This change will require that you assign the Cloud KMS CryptoKey Encrypter/Decrypter and the Service Usage Consumer role to the Dataproc Service Agent service account .
batches.list will return an unreachable field that lists any batches with job arguments that couldn't be decrypted. You can issue a batches.get request to obtain more information on an unreachable batch.
Multi-regional and cross-regional CMEKs will no longer be permitted. The key (CMEK) must be located in the same location as the encrypted resource.
For example, the CMEK used to encrypt a batch that runs in the us-central1 region
must also be located in the us-central1 region.
January 15, 2024
Change
Dataproc Serverless for Spark:
Upgraded Spark RAPIDS to version 23.12.1
Upgraded the following components to the following versions in the latest 2.2 runtime:
Spark BigQuery connector version 0.35.0
Cloud Storage connector version 3.0.0
Conda version 23.11
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.45
2.0.53
2.1.32
2.2.0-RC5
Feature
Dataproc Spark Enhancements are now available in the Google Cloud console Dataproc cluster and job creation pages.
January 05, 2024
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.44
2.0.52
2.1.31
2.2.0-RC4
January 04, 2024
Announcement
The following previously released sub-minor versions of Dataproc images have been rolled back and can only be used when updating existing clusters that already use them:
2.0.88-debian10, 2.0.88-rocky8, 2.0.88-ubuntu18
2.1.36-debian11, 2.1.36-rocky8, 2.1.36-ubuntu20, 2.1.36-ubuntu20-arm
2.2.2-debian12, 2.2.2-rocky9, 2.2.2-ubuntu22
January 02, 2024
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.88-debian10, 2.0.88-rocky8, 2.0.88-ubuntu18
2.1.36-debian11, 2.1.36-rocky8, 2.1.36-ubuntu20, 2.1.36-ubuntu20-arm
2.2.2-debian12, 2.2.2-rocky9, 2.2.2-ubuntu22
Rollback Notice : See the January 4, 2024 release note rollback notice.
Change
Dataproc on Compute Engine: Backported the patch for
YARN-10975 in the latest 2.0
images.
Change
Dataproc on Compute Engine: Changed the Hive Server2 and MetaStore maximum default JVM heap size to 32GiB. Previously, the limit was set to 1/4 of total node memory, which could be too large on large-memory machines.
December 21, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.43
2.0.51
2.1.30
2.2.0-RC3
December 18, 2023
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.87-debian10, 2.0.87-rocky8, 2.0.87-ubuntu18
2.1.35-debian11, 2.1.35-rocky8, 2.1.35-ubuntu20, 2.1.35-ubuntu20-arm
2.2.1-debian12, 2.2.1-rocky9, 2.2.1-ubuntu22
December 14, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.42
2.0.50
2.1.29
2.2.0-RC2
Change
Added the google-cloud-secret-manager Python package in the latest Dataproc Serverless for Spark runtimes.
December 11, 2023
Announcement
Announcing the GA release of Dataproc on Compute Engine image version 2.2 :
2.2.0-debian12, 2.2.0-rocky9, 2.2.0-ubuntu22
The 2.2.0 release includes the following components:
Debian-12 / Ubuntu-2204 / RockyLinux 9
Apache Hadoop 3.3.6
Apache Spark 3.5.0
Spark-BigQuery Connector 0.34.0
Cloud Storage Connector 3.0.0
Trino 432
Apache Flink 1.17.0
Apache Ranger 2.4.0
Apache Solr 9.2.1
R 4.2
Hue 4.11.0
JupyterLab Notebook 3.6
Change
Monitoring-agent-defaults metrics are not available in Dataproc on Compute Engine image version 2.2 clusters unless the Ops Agent is installed. Other metrics for Dataproc provided components will continue to work.
Change
Blocklisted the following Dataproc on Compute Engine Images due to issue with increase in startup time:
2.0.86-debian10, 2.0.86-rocky8, 2.0.86-ubuntu18
2.1.34-debian11, 2.1.34-rocky8, 2.1.34-ubuntu20, 2.1.34-ubuntu20-arm
December 06, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.41
2.0.49
2.1.28
2.2.0-RC1
Announcement
Announcing the Preview release of Dataproc Serverless for Spark 2.2 runtime :
Spark 3.5.0
BigQuery Spark Connector 0.34.0
Cloud Storage Connector 3.0.0-RC1
Conda 23.10
Java 17
Python 3.12
R 4.3
Scala 2.13
December 04, 2023
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.85-debian10, 2.0.85-rocky8, 2.0.85-ubuntu18
2.1.33-debian11, 2.1.33-rocky8, 2.1.33-ubuntu20, 2.1.33-ubuntu20-arm
Feature
Added the Confidential Computing option on the "Manage Security" panel on the "Create a Dataproc cluster on Compute Engine" page in the Google Cloud console.
Change
Updated the Zookeeper component version from 3.8.0 to 3.8.3 in the latest Dataproc on Compute Engine 2.1 image version .
Fixed
Fixed Dataproc Hub issue in latest Dataproc on Compute Engine 2.1 image.
Fixed
Backported HIVE-21698 in Hive 3.1.3 component in latest Dataproc on Compute Engine image versions.
December 01, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.40
2.0.48
2.1.27
Change
The Cloud Storage connector has been upgraded to version 2.2.18 in all Dataproc Serverless for Spark runtimes.
November 17, 2023
Change
In the Flink component in the latest Dataproc on Compute Engine 2.1 image version, added the following java-storage client properties:
gs.retry.max.attempts property to set the max number of retry attempts
gs.retry.total.timeout property to set the total retry timeout
Change
Upgraded the Cloud Storage connector version to 2.2.18 in the latest 2.0 and 2.1 Dataproc on Compute Engine image versions.
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.84-debian10, 2.0.84-rocky8, 2.0.84-ubuntu18
2.1.32-debian11, 2.1.32-rocky8, 2.1.32-ubuntu20, 2.1.32-ubuntu20-arm
2.2.0-RC3-debian11/-ubuntu22/-rocky9
Fixed
Fixed a regression in the Zeppelin websocket rules that caused a websocket error in Zeppelin notebooks.
Issue
The Python kernel does not work in Zeppelin on the Dataproc on Compute Engine 2.1 image version. Other kernels are not impacted.
Issue
The Zeppelin REST API does not work (drops query parameters) on Dataproc on Compute Engine
2.0 and 2.1 image versions via the Component Gateway. Other Zeppelin interactions can also break as a result of dropped query parameters.
November 15, 2023
Announcement
You can use CMEK (Customer Managed Encrytion Keys) with encrypted Dataproc cluster data, incuding persistent disk data, job arguments and queries submitted with Dataproc jobs, and cluster data saved in the cluster Dataproc staging bucket . See Use CMEK with cluster data for more information.
November 10, 2023
Announcement
Announcing the General Availability (GA) release of Dataproc Jupyter Plugin and its availability in Vertex AI Workbench instance notebooks .
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.83-debian10, 2.0.83-rocky8, 2.0.83-ubuntu18
2.1.31-debian11, 2.1.31-rocky8, 2.1.31-ubuntu20, 2.1.31-ubuntu20-arm
November 08, 2023
Announcement
Announcing the release of Workflow Template CMEK (Customer Managed Encryption Key) encryption . Use this feature to apply CMEK encryption to workflow template job arguments . For example, when this feature is enabled, the query string of a workflow template SparkSQL job is encrypted using CMEK.
Feature
You can now use Dataproc Serverless autoscaling V2 to help you manage Dataproc Serverless workloads, improve workload performance, and save costs.
November 07, 2023
Fixed
Set spark.shuffle.mapOutput.minSizeForBroadcast=128m to fix SPARK-38101 when Dataproc Serverless Spark dynamic allocation is enabled.
November 01, 2023
Announcement
Announcing the Preview release of Dataproc Flexible VMs . This feature lets you specify prioritized lists of secondary worker VM types that Dataproc will select from when creating your cluster. Dataproc will select the VM type with sufficient available capacity while taking quotas and reservations into account.
October 30, 2023
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.82-debian10, 2.0.82-rocky8, 2.0.82-ubuntu18
2.1.30-debian11, 2.1.30-rocky8, 2.1.30-ubuntu20, 2.1.30-ubuntu20-arm
Feature
Added spark.dataproc.scaling.version=2 config to let customers control the Dataproc Serverless for Spark autoscaling version.
Change
Increased the TTL for Dataproc on Compute Engine custom images from 60 days to 365 days.
Fixed
Fixed Knox rewrite rules for Zeppelin URLs in some cases in the latest 2.0 and 2.1 Dataproc on Compute Engine image versions.
October 27, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.37
2.0.45
2.1.24
October 25, 2023
Announcement
Announcing the General Availability (GA) release of Dataproc Serverless GPU accelerators .
October 23, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.36
2.0.44
2.1.23
Feature
Dataproc on Compute Engine : Dataproc now collects the dataproc.googleapis.com/job/yarn/vcore_seconds and dataproc.googleapis.com/job/yarn/memory_seconds job-level resource attribution metrics to track YARN application vcore and memory usage during job execution. These metrics are collected by default and are not chargeable to customers.
Change
Dataproc on Compute Engine : Properties dataproc:agent.ha.enabled and dataproc:componentgateway.ha.enabled now default to true to provide high availability for the Dataproc Agent and Component Gateway.
Feature
Dataproc on Compute Engine : Dataproc now collects a dataproc.googleapis.com/node/yarn/nodemanager/health health metric to track the health of individual YARN node managers running on VMs. This metric is written against the gce_instance monitored resource to help you find suspect nodes. It is collected by default and is not chargeable to customers.
October 13, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.35
2.0.43
2.1.22
October 12, 2023
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.80-debian10, 2.0.80-rocky8, 2.0.80-ubuntu18
2.1.28-debian11, 2.1.28-rocky8, 2.1.28-ubuntu20, 2.1.28-ubuntu20-arm
October 09, 2023
Announcement
Announcing the General Availability (GA) release of Dataproc Serverless for Spark Interactive sessions .
October 06, 2023
Announcement
New Dataproc on Compute Engine image version 2.2 is available for preview with upgraded components.
Change
Upgraded Hadoop version from 3.3.3 to 3.3.6 in the latest Dataproc on Compute Engine 2.1 image version .
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.79-debian10, 2.0.79-rocky8, 2.0.79-ubuntu18
2.1.27-debian11, 2.1.27-rocky8, 2.1.27-ubuntu20, 2.1.27-ubuntu20-arm
2.2.0-RC2-debian11, 2.2.0-RC2-rocky9, 2.2.0-RC2-ubuntu22
Change
Upgraded the Cloud Storage connector version to 2.2.17 in the latest Dataproc Serverless for Spark runtimes .
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.34
2.0.42
2.1.21
Change
Added the gs.filesink.entropy.enabled property in Flink to enable entropy
injection in filesink Cloud Storage path in the latest Dataproc on Compute Engine 2.1 image version .
Change
Added the gs.http.connect-timeout and gs.http.read-timeout properties in Flink to
set the connection timeout and read timeout for java-storage client
in the latest Dataproc on Compute Engine 2.1 image version .
September 28, 2023
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.78-debian10, 2.0.78-rocky8, 2.0.78-ubuntu18
2.1.26-debian11, 2.1.26-rocky8, 2.1.26-ubuntu20, 2.1.26-ubuntu20-arm
Change
Upgraded the Cloud Storage connector version to 2.2.17 in the latest 2.0 and 2.1 Dataproc on Compute Engine image versions.
Change
Upgraded Hive version from 3.1.2 to 3.1.3 in the latest Dataproc on Compute Engine 2.0 image version.
September 22, 2023
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.77-debian10, 2.0.77-rocky8, 2.0.77-ubuntu18
2.1.25-debian11, 2.1.25-rocky8, 2.1.25-ubuntu20, 2.1.25-ubuntu20-arm
Change
In the latest Dataproc on Compute Engine 2.0 and 2.1 image versions, unset the CLOUDSDK_PYTHON variable to allow the gcloud command-line tool to use its bundled Python interpreter.
Fixed
Fixed Jupyter notebooks bug that made Scala compilation errors invisible with the Toree kernel in Dataproc on Compute Engine 2.1 images.
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.32
2.0.40
2.1.19
September 19, 2023
Feature
Dataproc is now available in the me-central2 region (Dammam, Saudi Arabia).
September 15, 2023
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.76-debian10, 2.0.76-rocky8, 2.0.76-ubuntu18
2.1.24-debian11, 2.1.24-rocky8, 2.1.24-ubuntu20, 2.1.24-ubuntu20-arm
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.31
2.0.39
2.1.18
Change
Scala has been upgraded to version 2.12.18 and Apache Tez has been upgraded to version 0.10.2 in Dataproc on Compute Engine 2.1 images.
September 13, 2023
Announcement
Announcing the Private Preview release of the Dataproc on Compute Engine Flink Jobs resource . During Private Preview, you can contact your Google Cloud Sales representative to have your project(s) added to an allowlist to allow you to submit Flink jobs to the Dataproc on Compute Engine service.
September 12, 2023
Change
The dataproc.diagnostics.enabled property is now avaiable to enable running diagnostics on Dataproc Serverless for Spark. The existing spark.dataproc.diagnostics.enabled property will be deprecated for use with newer runtimes.
September 08, 2023
Feature
Dataproc Auto zone placement for clusters is now available in the Google Cloud console by selecting the "Any" option for the cluster zone.
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.30
2.0.38
2.1.17
Change
The Apache Spark version has been upgraded from 3.3.0 to 3.3.2 in Dataproc on Compute Engine 2.1 images.
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.75-debian10, 2.0.75-rocky8, 2.0.75-ubuntu18
2.1.23-debian11, 2.1.23-rocky8, 2.1.23-ubuntu20, 2.1.23-ubuntu20-arm
September 04, 2023
Announcement
Announcing the General Availability (GA) release of Data Lineage for Dataproc , which captures data transformations (lineage events) in Dataproc Spark jobs, and publishes them to Dataplex Lineage .
Feature
Dataproc Serverless Interactive sessions detail and list pages are now available in the Google Cloud console.
August 29, 2023
Announcement
Announcing the Preview release of Dataproc Serverless for Spark Interactive sessions and the Dataproc Jupyter Plugin.
August 25, 2023
Change
New Dataproc Serverless for Spark runtime versions :
1.1.29
2.0.37
2.1.16
August 23, 2023
Fixed
Fixed a Dataproc Serverless issue where Spark batches failed with unhelpful error messages.
August 22, 2023
Feature
Dataproc is now available in the europe-west10 region (Berlin).
August 17, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.28
2.0.36
2.1.15
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.74-debian10, 2.0.74-rocky8, 2.0.74-ubuntu18
2.1.22-debian11, 2.1.22-rocky8, 2.1.22-ubuntu20, 2.1.22-ubuntu20-arm
Change
Backported the patches for HIVE-20618 in the new Dataproc on Compute Engine 2.0 and 2.1 images.
August 11, 2023
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.73-debian10, 2.0.73-rocky8, 2.0.73-ubuntu18
2.1.21-debian11, 2.1.21-rocky8, 2.1.21-ubuntu20, 2.1.21-ubuntu20-arm
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.27
2.0.35
2.1.14
Announcement
Added new Dataproc Serverless Templates for batch workload creation:
Cloud Spanner to Cloud Storage
Cloud Storage to JDBC
Cloud Storage to Cloud Storage
Hive to BigQuery
JDBC to Cloud Spanner
JDBC to JDBC
Pub/Sub to Cloud Storage
Feature
Improved the reliability of Dataproc Serverless compute node initialization with a Premium disk tier option.
August 07, 2023
Announcement
Added a dataproc:dataproc.cluster.caching.enabled flag to enable and disable Dataproc on Compute Engine cluster caching . The flag is false by default. Use this feature with the latest Dataproc on Compute Engine images.
August 06, 2023
Change
The following previously released sub-minor versions of Dataproc on Compute Engine images unintentionally reverted several dependency library versions. This caused a risk of backward-incompatibility for some workloads.
These sub-minor versions have been rolled back, and can only be used when updating existing clusters that already use them:
2.0.71-debian10, 2.0.71-rocky8, 2.0.71-ubuntu18
2.1.19-debian11, 2.1.19-rocky8, 2.1.19-ubuntu20, 2.1.19-ubuntu20-arm
August 05, 2023
Security
Backported ZEPPELIN-5434 to image 2.1 to fix CVE-2022-2048 .
Change
Upgraded Hudi to 0.12.3 and added the BigQuery Sync tool as part of the Hudi optional component.
Announcement
New Dataproc on Compute Engine image versions :
2.0.72-debian10, 2.0.72-rocky8, 2.0.72-ubuntu18
2.1.20-debian11, 2.1.20-rocky8, 2.1.20-ubuntu20, 2.1.20-ubuntu20-arm
Change
Downgraded Cloud Storage connector version to 2.2.15 in all Dataproc on Compute Engine image versions to prevent potential performance regression.
Fixed
Backported the patches for HIVE-22170 and HIVE-22331 .
August 03, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.26
2.0.34
2.1.13
Change
Downgraded Cloud Storage connector to 2.2.15 version in all Dataproc Serverless for Spark runtimes to prevent potential performance regression.
July 30, 2023
Change
New Dataproc on Compute Engine image versions :
2.0.71-debian10, 2.0.72-rocky8, 2.0.72-ubuntu18
2.1.19-debian11, 2.1.20-rocky8, 2.1.20-ubuntu20, 2.1.20-ubuntu20-arm
Note: The above image versions were rolled back. See the August 6, 2023 release note
Announcement
The Maximum total memory per core for Dataproc Serverless Premium compute tiers has increased to 24576m (7424m for Standard compute tiers unchanged). See Dataproc Serverless Resource allocation properties .
July 28, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.25
2.0.33
2.1.12
July 26, 2023
Breaking
Clusters cannot be created with a driver node group if the cluster image version is older than 2.0.57 or 2.1.5, or if the permissions for the staging bucket are missing.
Change
Added recommendation details in Autoscaler Stackdriver logs for the CANCEL and DO_NOT_CANCEL recommendations.
July 21, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.24
2.0.32
2.1.11
Fixed
Fixed a race condition in Spark startup that could lead to nodes failing to initialize when using premium disk tier.
Announcement
New Dataproc on Compute Engine image versions , which includes a 2.1.18-ubuntu20-arm image that supports ARM machine types :
2.0.70-debian10, 2.0.70-rocky8, 2.0.70-ubuntu18
2.1.18-debian11, 2.1.18-rocky8, 2.1.18-ubuntu20, 2.1.18-ubuntu20-arm
July 14, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.23
2.0.31
2.1.10
Change
Upgraded the Cloud Storage connector version to 2.2.16 in Dataproc Serverless for Spark runtimes .
Feature
Clusters that use a driver node group now configure YARN queues with user-limit-factor set to 2, allowing for a single user to burst to 2x utilization of capacity, which is set to 50. This achieves better resource utilization for workloads submitted by a single user.
July 10, 2023
Announcement
New Dataproc on Compute Engine image versions :
2.0.69-debian10, 2.0.69-rocky8, 2.0.69-ubuntu18
2.1.17-debian11, 2.1.17-rocky8, 2.1.17-ubuntu20
Change
Upgraded the Cloud Storage connector version to 2.2.16 for Dataproc on Compute Engine 2.0 and 2.1 images.
July 07, 2023
Announcement
Dataproc Serverless Spark 1.1 and 2.0 runtime subminor versions can now be used 365 days after their release (instead of 90 days).
Feature
The goog-dataproc-batch-id , goog-dataproc-batch-uuid and goog-dataproc-location labels are now automatically applied to Dataproc Serverless batch resources.
Feature
Dataproc Serverless for Spark now supports updating the BigQuery connector using the dataproc.sparkBqConnector.version and dataproc.sparkBqConnector.uri properties
see Use the BigQuery connector with Dataproc Serverless for Spark .
July 06, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.22
2.0.30
2.1.9
June 29, 2023
Feature
Added support for Premium compute and storage pricing tiers for Dataproc Serverless Spark workloads. Premium compute offers higher performance per core, and Premium storage offers higher throughput and IOPs. To use Premium compute and storage, set the following Spark runtime environment properties :
spark.dataproc.(driver|executor).compute.tier=premium
spark.dataproc.(driver|executor).storage.tier=premium .
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.21
2.0.29
2.1.8
June 28, 2023
Change
Backported ZEPPELIN-5755 to Zeppelin 0.10 in 2.1 images for Spark 3.3 support.
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.68-debian10, 2.0.68-rocky8, 2.0.68-ubuntu18
2.1.16-debian11, 2.1.16-rocky8, 2.1.16-ubuntu20
June 26, 2023
Announcement
Added Dataproc Serverless Templates for batch creation:
Cloud Storage to BigQuery
Cloud Storage to Cloud Spanner
Hive to Cloud Storage
JDBC to BigQuery
JDBC to Cloud Storage
June 22, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.20
2.0.28
2.1.7
June 16, 2023
Announcement
New Dataproc on Compute Engine subminor image versions :
2.0.67-debian10, 2.0.67-rocky8, 2.0.67-ubuntu18
2.1.15-debian11, 2.1.15-rocky8, 2.1.15-ubuntu20
Fixed
Fixed a bug that caused cluster creation to fail when ATSv2 is enabled for tables that have a garbage collection policy setup other than maxversions .
June 14, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.19
2.0.27
2.1.6
June 08, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.18
2.0.26
2.1.5
June 02, 2023
Change
Upgrade Cloud Storage connector to 2.2.14 version in Dataproc Serverless for Spark runtimes .
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.17
2.0.25
2.1.4
June 01, 2023
Change
Upgrade Cloud Storage connector version to 2.2.14 for 2.0 and 2.1 images
Announcement
New sub-minor versions of Dataproc images:
2.0.66-debian10, 2.0.66-rocky8, 2.0.66-ubuntu18
2.1.14-debian11, 2.1.14-rocky8, 2.1.14-ubuntu20
Change
Backport HIVE-22891 , HIVE-21660 , HIVE-21915 to 2.0 images.
Change
Backport HIVE-22891 , HIVE-21660 , HIVE-25520 , HIVE-25521 to 2.1 images.
May 26, 2023
Announcement
New sub-minor versions of Dataproc images:
2.0.65-debian10, 2.0.65-rocky8, 2.0.65-ubuntu18
2.1.13-debian11, 2.1.13-rocky8, 2.1.13-ubuntu20
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.16
2.0.24
2.1.3
May 24, 2023
Change
Unauthorized callers attempting to get, delete, or terminate non-existent Sessions will now receive a 403 response code instead of a 404 response code. This does not impact authorized callers.
Change
Upgraded the Cloud Storage connector to 2.2.13 version in Dataproc on Compute Engine 2.0 and 2.1 image versions.
Fixed
Fixed Serverless history server endpoint URL when Persistent History Server (PHS) was setup without using a wildcard.
May 19, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.15
2.0.23
2.1.2
Change
Upgraded the Cloud Storage connector to 2.2.13 version in Dataproc Serverless for Spark runtimes .
Fixed
Backported HIVE-22891 to 2.0 images.
Fixed
Fixed the NoClassDefFoundError for log4j class in Zeppelin BigQuery interpreter in 2.0 images.
May 18, 2023
Announcement
New sub-minor versions of Dataproc images:
2.0.64-debian10, 2.0.64-rocky8, 2.0.64-ubuntu18
2.1.12-debian11, 2.1.12-rocky8, 2.1.12-ubuntu20
Feature
You can now use --properties=dataproc:componentgateway.ha.enabled=true to enable the Dataproc Component Gateway and Knox along with the Spark History Server (SHS) UI in HA mode .
May 11, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.14
2.0.22
2.1.1
May 05, 2023
Announcement
Announcing the General Availability (GA) release of Dataproc Serverless for Spark runtime version 2.1 , which includes the following components:
Spark 3.4.0
BigQuery Spark Connector 0.28.1
Cloud Storage Connector 2.2.11
Conda 23.3
Java 17
Python 3.11
R 4.2
Scala 2.13
Change
Upgraded Conda to 23.3 in Dataproc Serverless for Spark runtime 2.1 .
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.13
2.0.21
2.1.0
April 28, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.12
2.0.20
2.1.0-RC8
Change
hive principal will be used for Hive catalog queries via presto in kerberos cluster.
Announcement
New sub-minor versions of Dataproc images:
1.5.89-debian10, 1.5.89-rocky8, 1.5.89-ubuntu18
2.0.63-debian10, 2.0.63-rocky8, 2.0.63-ubuntu18
2.1.11-debian11, 2.1.11-rocky8, 2.1.11-ubuntu20
Change
Upgrade Spark to 3.4.0 and its dependencies in Dataproc Serverless for Spark 2.1 runtime :
Jetty to 9.4.51.v20230217
ORC to 1.8.3
Parquet to 1.13.0
Protobuf to 3.22.3
April 24, 2023
Announcement
Dataproc now supports the usage of cross-project service account .
Feature
Autoscaler recommendation reasoning details are available now in Cloud Logging logs.
Change
Default batch TTL is set to 4 hours for Dataproc Serverless for Spark runtime version 2.1 .
April 20, 2023
Announcement
New sub-minor versions of Dataproc images:
1.5.88-debian10, 1.5.88-rocky8, 1.5.88-ubuntu18
2.0.62-debian10, 2.0.62-rocky8, 2.0.62-ubuntu18
2.1.10-debian11, 2.1.10-rocky8, 2.1.10-ubuntu20
Announcement
Running Spark jobs with the DataprocFileOutoutputCommitter is now supported. Enable the committer for Spark applications that write to a Cloud Storage destination concurrently.
April 18, 2023
Change
Add Autoscaler recommendation reasoning details in Cloud Logging.
Change
Dataproc on GKE SLM force delete timeout exception converted to DataprocIoException .
April 17, 2023
Announcement
Announcing Dataproc General Availability (GA) support for CMEK organization policy .
April 14, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.11
2.0.19
2.1.0-RC7
Fixed
Make spark user an owner for all items in the driver working directory for Dataproc Serverless for Spark workloads to fix permissions issues after Hadoop upgrade to 3.3.5.
April 06, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.10
2.0.18
2.1.0-RC6
Change
Upgrade Hadoop to 3.3.5 in Dataproc Serverless for Spark runtimes
April 04, 2023
Announcement
Announcing the General Availability (GA) release of Key Access Justifications for Dataproc .
March 30, 2023
Feature
Dataproc is now available in the me-central1 region (Doha).
March 28, 2023
Announcement
New sub-minor versions of Dataproc images:
1.5.87-debian10, 1.5.87-rocky8, 1.5.87-ubuntu18
2.0.61-debian10, 2.0.61-rocky8, 2.0.61-ubuntu18
2.1.9-debian11, 2.1.9-rocky8, 2.1.9-ubuntu20
Feature
Dataproc cluster creation now supports the pd-extreme disk type.
Change
Dataproc on GKE now disallows update operations.
Change
Dataproc on GKE diagnose operation now verifies that the master agent is running.
March 27, 2023
Announcement
New sub-minor versions of Dataproc images:
1.5.86-debian10, 1.5.86-rocky8, 1.5.86-ubuntu18
2.0.60-debian10, 2.0.60-rocky8, 2.0.60-ubuntu18
2.1.8-debian11, 2.1.8-rocky8, 2.1.8-ubuntu20
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.9
2.0.17
2.1.0-RC5
March 24, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.8
2.0.16
2.1.0-RC4
Change
Upgrade Python to 3.11 and Conda to 23.1 in Dataproc Serverless for Spark runtime 2.1
March 23, 2023
Feature
Dataproc is now available in the europe-west12 region (Turin).
March 17, 2023
Change
New Dataproc Serverless for Spark runtime versions :
1.1.7
2.0.15
2.1.0-RC3
March 16, 2023
Announcement
Upgrade Flink to 1.15.3 from 1.15.0 in 2.1 images
Announcement
New sub-minor versions of Dataproc images:
1.5.85-debian10, 1.5.85-rocky8, 1.5.85-ubuntu18
2.0.59-debian10, 2.0.59-rocky8, 2.0.59-ubuntu18
2.1.7-debian11, 2.1.7-rocky8, 2.1.7-ubuntu20
March 10, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.6
2.0.14
2.1.0-RC2
Change
Upgraded Spark BigQuery connector version to 0.28.1 in 1.1 and 2.1 Dataproc Serverless for Spark runtimes.
March 06, 2023
Change
Added stronger validations to disallow upper-case characters in template IDs per Resource Names guidance , which allows Workflow template creation to fail fast instead of failing at workflow template instantiation.
Change
Added decision metric field in Stackdriver autoscaler logs.
March 02, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.5
2.0.13
2.1.0-RC1
Change
Release Dataproc Serverless for Spark runtime 2.1 preview :
Spark 3.4.0-rc1
BigQuery Spark Connector 0.28.0
Cloud Storage Connector 2.2.11
Conda 22.11
Java 17
Python 3.10
R 4.2
Scala 2.13
February 28, 2023
Feature
--properties=dataproc:agent.ha.enabled=true can now be used to enable the Dataproc Agent in high availability mode. This property is supported by Dataproc Image versions 2.0 and above.
February 23, 2023
Change
Upgrade Spark to 3.3.2 and its dependencies in 1.1 and 2.0 Dataproc Serverless for Spark runtimes:
Jackson to 2.13.5
Jetty to 9.4.50.v20221201
ORC to 1.8.2
Protobuf to 3.21.12
RoaringBitmap to 0.9.39
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.4
2.0.12
February 17, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.3
2.0.11
Announcement
New sub-minor versions of Dataproc images:
1.5.82-debian10, 1.5.82-rocky8, 1.5.82-ubuntu18
2.0.56-debian10, 2.0.56-rocky8, 2.0.56-ubuntu18
2.1.4-debian11, 2.1.4-rocky8, 2.1.4-ubuntu20
February 10, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.1.2
2.0.10
Feature
Add support for filters when listing batches. Batches may be filtered on one or more of batch_id , batch_uuid , state , or create_time (for example, state = RUNNING AND create_time < "2023-01-01T00:00:0Z" ). See Filter expressions for more information.
Feature
Dataproc Serverless for Spark now supports unconditional TTL to batches. The workload will be terminated after the TTL without waiting for work to complete.
Feature
Dataproc Serverless for Spark now supports statically-sized Dataproc Serverless for Spark batch workloads with more than 500 executors.
Change
Generate a warning when initialization actions are used in a cluster created with a driver node group .
Change
The default Dataproc Serverless for Spark runtime version has changed to 2.0 .
February 03, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.0.29
1.1.1
2.0.9
Announcement
1.0.29 is the last release of the Dataproc Serverless for Spark runtime version 1.0, it will no longer be supported and will not receive new releases.
Change
Upgrade Cloud Storage connector to 2.2.11 version in Dataproc Serverless for Spark runtimes .
January 27, 2023
Announcement
Announcing the General Availability (GA) release of Dataproc Serverless for Spark runtime version 1.1 , which includes the following components:
Spark 3.3.1
BigQuery Spark Connector 0.28.0
Cloud Storage Connector 2.2.9
Conda 22.11
Java 11
Python 3.10
R 4.2
Scala 2.12
Announcement
New Dataproc Serverless for Spark runtime versions :
1.0.28
1.1.0
2.0.8
Change
Dataproc Serverless for Spark runtime version 1.0 changed to non-LTS because of the release of backward-compatible Dataproc Serverless for Spark runtime version 1.1 LTS .
Announcement
Announcing the General Availability (GA) release of the Dataproc Hudi Optional Component .
January 24, 2023
Announcement
Announcing the General Availability (GA) release of the Dataproc driver node groups .
January 23, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.0.27
2.0.7
Feature
Added support for enabling Hive Metastore OSS metrics by passing hivemetastore to --metric-sources property during cluster creation.
Feature
Added support for Dataproc Metastore integration with Trino.
Announcement
New sub-minor versions of Dataproc images:
1.5.80-debian10, 1.5.80-rocky8, 1.5.80-ubuntu18
2.0.54-debian10, 2.0.54-rocky8, 2.0.54-ubuntu18
2.1.2-debian11, 2.1.2-rocky8, 2.1.2-ubuntu20
Change
Upgraded Parquet to 1.12.2 for 2.1 images .
Change
The value of hive.server2.builtin.udf.blacklist is now set by default to reflect,reflect2 in hive-site.xml to prevent arbitrary code execution.
January 13, 2023
Announcement
New Dataproc Serverless for Spark runtime versions :
1.0.26
2.0.6
December 19, 2022
Change
Backported Spark patch in Dataproc Serverless for Spark runtime 1.0 and 2.0 :
SPARK-40481 : Ignore stage fetch failure caused by decommissioned executor.
Announcement
New sub-minor versions of Dataproc images:
1.5.79-debian10, 1.5.79-rocky8, 1.5.79-ubuntu18
2.0.53-debian10, 2.0.53-rocky8, 2.0.53-ubuntu18
2.1.1-debian11, 2.1.1-rocky8, 2.1.1-ubuntu20
Announcement
New Dataproc Serverless for Spark runtime versions :
1.0.25
2.0.5
December 12, 2022
Announcement
General Availability (GA) release of Dataproc 2.1 images .
Change
Upgrade Cloud Storage connector version to 2.1.9 for 1.5 images.
Change
Upgrade Cloud Storage connector version to 2.2.9 for 2.1 images.
Announcement
New sub-minor versions of Dataproc images:
1.5.78-debian10, 1.5.78-rocky8, 1.5.78-ubuntu18
2.0.52-debian10, 2.0.52-rocky8, 2.0.52-ubuntu18
2.1.0-debian11, 2.1.0-rocky8, 2.1.0-ubuntu20
Announcement
New Dataproc Serverless for Spark runtime versions: 1.0.24 and 2.0.4
Change
Dataproc Serverless for Spark runtime 1.0:
Upgrade to Spark to 3.2.3
Upgrade Cloud Storage connector to 2.2.9
Upgrade Spark dependencies:
Jetty to 9.4.49.v20220914
ORC to 1.7.7
Protobuf to 3.19.6
RoaringBitmap to 0.9.35
Scala to 2.12.17
Change
Dataproc Serverless for Spark runtime 2.0:
Upgrade Cloud Storage connector to 2.2.9
Upgrade Spark dependencies:
Protobuf to 3.21.9
RoaringBitmap to 0.9.35
Change
Use jemalloc as a default OS memory allocator in Dataproc Serverless for Spark runtime.
Change
Backport Spark patches in Dataproc Serverless for Spark runtime 1.0 and 2.0 :
SPARK-39324 : Log ExecutorDecommission as INFO level in TaskSchedulerImpl
SPARK-40168 : Handle SparkException during shuffle block migration
SPARK-40269 : Randomize the orders of peer in BlockManagerDecommissioner
SPARK-40778 : Make HeartbeatReceiver as an IsolatedRpcEndpoint
December 09, 2022
Feature
Added the dataproc.googleapis.com/job/state metric to track the status of Dataproc Jobs states (such as, RUNNING or PENDING ). This metric is collected by default and is not chargeable to customers.
Dataproc job IDs are now queryable and viewable from MQL(Monitoring Query Language) , and the metric can be used for long-running job monitoring and alerting .
December 06, 2022
Announcement
Dataproc Serverless for Spark runtime version 2.0 will become the default Dataproc Serverless for Spark runtime version on January 24, 2023 (instead of December 13, 2022, as previously announced ).
November 17, 2022
Feature
Dataproc Serverless for Spark supports Spark and System metrics . These metrics are enabled by default. Spark driver and executor metrics can be customised using overrides.
Change
Nodemanagers in DECOMMISSIONING, NEW, and SHUTDOWN state are now included in the /cluster/yarn/nodemanagers metric.
Change
Secure Boot, Virtual trusted platform module (vTPM), and Integrity monitoring Shielded VM features are enabled by default for Dataproc on Compute Engine clusters that use 2.1 preview images.
Change
Added support for Dataproc to attach to a gRPC Dataproc Metastore in any region.
Change
Dataproc Serverless for Spark now shows the subminor runtime version used in the runtimeConfig.version field,
Fixed
Fixed a bug that caused a Dataproc cluster with a Dataproc Metastore service to fail the creation process, if the cluster was in the same network but different subnetworks.
November 14, 2022
Announcement
New sub-minor versions of Dataproc images:
1.5.77-debian10, 1.5.77-rocky8, 1.5.77-ubuntu18,
2.0.51-debian10, 2.0.51-rocky8, 2.0.51-ubuntu18,
preview 2.1.0-RC4-debian11, preview 2.1.0-RC4-rocky8, preview 2.1.0-RC4-ubuntu20.
Announcement
Dataproc Serverless for Spark now now uses runtime version 1.0.23 and 2.0.3 .
Fixed
Backported HIVE-17317 in the latest 2.0 and 2.1 images.
Fixed
Downgraded google-auth-oauthlib Python package to fix gcsfs Python package for 2.0 and 2.1 images.
Fixed
Dataproc Serverless for Spark runtime version 1.0.23 and 2.0.3 downgrades google-auth-oauthlib Python package to fix gcsfs Python package.
Security
Upgraded Apache Commons Text to 1.10.0 for Knox in 1.5 images, and for Spark, Pig, Knox in 2.0 images, addressing CVE-2022-42889 .
Libraries
Dataproc Serverless for Spark runtime version 1.0.23 and 2.0.3 adds PyMongo Python library.
November 11, 2022
Deprecated
Dataproc images 2.0.50 and preview 2.1.0-RC3 are deprecated and cluster creations based on these images will fail starting 11/11/2022. This is due to an update to the google auth library which breaks running Pyspark batch workloads having dependency on gcsfs . Upcoming image versions will have a fix to address this issue.
Deprecated
Dataproc Serverless for Spark runtime versions 1.0.22 and 2.0.2 will be deprecated on 11/11/2022. New batch submissions that use these runtime versions will fail starting 11/11/2022. This is due to an update to the google auth library which breaks running Pyspark batch workloads having dependency on gcsfs . Upcoming runtime versions will address this issue.
November 07, 2022
Announcement
New sub-minor versions of Dataproc images:
1.5.76-debian10, 1.5.76-rocky8, 1.5.76-ubuntu18
2.0.50-debian10, 2.0.50-rocky8, 2.0.50-ubuntu18
preview 2.1.0-RC3-debian11, preview 2.1.0-RC3-rocky8, preview 2.1.0-RC3-ubuntu20,
Announcement
Dataproc Serverless for Spark now now uses runtime version 1.0.22 and 2.0.2 .
Feature
If a Dataproc Metastore service uses the gRPC endpoint protocol , a Dataproc or self-managed cluster located in any region can attach to the service .
October 31, 2022
Feature
Dataproc Serverless for Spark now allows the customization of driver and executor memory using the following properties:
spark.driver.memory
spark.driver.memoryOverhead
spark.executor.memory
spark.executor.memoryOverhead
Feature
Dataproc Serverless for Spark now outputs approximate_usage after a workload finishes that shows the approximate DCU and shuffle storage resource consumption by the workload.
Change
Removed the Auto Zone placement check for supported machine types.
October 28, 2022
Announcement
The following preview Dataproc image versions are available:
2.1.0-RC2-debian11
2.1.0-RC2-rocky8
2.1.0-RC2-ubuntu20
The following component versions are available for use with the 2.1.0-RC2 images (the HBase and Druid components are not supported in 2.1 image versions):
Apache Atlas 2.2.0
Apache Flink 1.15.0
Apache Hadoop 3.3.3
Apache Hive 3.1.3
Apache Hive WebHCat 3.1.3
Apache Kafka 3.1.0
Apache Pig 0.18.0-SNAPSHOT
Apache Spark 3.3.0
Apache Sqoop v1 1.5.0-SNAPSHOT
Apache Sqoop v2 1.99.6
Apache Tez 0.10.1
Cloud Storage Connector hadoop3-2.2.8
Conscrypt 2.5.2
Docker 20.10
Hue 4.10.0
Java temurin-11-jdk
JupyterLab Notebook 3.4
Oozie 5.2.1
Presto 376
Python 3.10
R 4.1
Ranger 2.2.0
Scala 2.12.14
Solr 9.0.0
Zeppelin Notebook 0.10.1
Zookeeper 3.8.0
Security
Dataproc Serverless for Spark runtime version 2.0.1 upgrades Apache Commons Text to 1.10.0 , addressing CVE-2022-42889
Libraries
Dataproc Serverless for Spark runtime version 2.0.1 upgrades the following components:
Spark to 3.3.1
SLF4J to 2.0.3
Announcement
Dataproc Serverless for Spark now now uses runtime version 1.0.21 and 2.0.1 .
October 26, 2022
Breaking
All Dataproc Serverless for Spark runtime versions prior to 1.0.21 and 2.0.1 will be deprecated on November 2, 2022.
October 25, 2022
Announcement
Dataproc Serverless for Spark runtime version 2.0 will become the default Dataproc Serverless for Spark runtime version on December 13, 2022.
October 24, 2022
Feature
Dataproc Serverless for Spark now supports spark.dataproc.diagnostics.enabled property that enables auto diagnostics on Batch failure. Note that enabling auto diagnostics will hold compute and storage quota after Batch is complete and until diagnostics is finished.
October 21, 2022
Announcement
Announcing the General Availability (GA) release of Dataproc Serverless for Spark runtime 2.0 .
Announcement
New sub-minor versions of Dataproc images:
1.5.75-debian10, 1.5.75-rocky8, 1.5.75-ubuntu18
2.0.49-debian10, 2.0.49-rocky8, 2.0.49-ubuntu18
Libraries
Dataproc Serverless for Spark runtime version 2.0.0 upgrades the following components:
Conda to 22.9
Jetty to 9.4.49.v20220914
ORC to 1.8.0
Protobuf to 3.21.7
RoaringBitmap to 0.9.32
Libraries
Upgraded Cloud Storage connector version to 2.2.8 in the latest 2.0 images.
Announcement
Dataproc Serverless for Spark now uses runtime version 1.0.20 and 2.0.0 .
Libraries
Upgraded the Conscrypt library to 2.5.2 in the latest 1.5 and 2.0 images.
Change
Disabled auto deletion of files under /tmp in the latest Rocky images. Previous Rocky images have files in the /tmp folder deleted every 10 days due to default OS system setting in /usr/lib/tmpfiles.d/tmp.conf .
Change
Set yarn:spark.yarn.shuffle.stop_on_failure to true by default in the latest 1.5 and 2.0 images. This change causes YARN node manager startup to fail if the Spark external shuffle service startup fails. On VM boot, Dataproc will continuously restart the YARN node manager until it is able to start. This change reduces Spark executor errors, such as: org.apache.spark.SparkException: Unable to register with external shuffle server due to : Failed to connect to <worker host>:7337 , particularly when starting a stopped cluster . See Spark external shuffle service documentation for details.
Change
Changed Hive TokenStoreDelegationTokenSecretManager in the latest 1.5 and 2.0 images so that it updates the base class's current key ID after generating a new master key. This is important for users of DBTokenStore , which generates key IDs based on a monotonically increasing sequence from the database. Prior to this fix, there was a race condition during master key rollover that could cause it to attempt updating the prior master key using an incorrect ID value. This would fail and then quickly retry, sometimes multiple times, causing too many rows in the database.
Security
Addressing CVE-2022-23305 , CVE-2022-23302 , CVE-2021-4104 , CVE-2019-17571 , migrated log4j 1.2 to reload4j for Hadoop, Spark in the latest 1.5 images and Hadoop, Spark, ZooKeeper, Oozie, Knox in the latest 2.0 images.
Security
Enabled Spark authentication and encryption for Kerberos enabled clusters created with the latest 1.5 and 2.0 images.
Security
Backported the patch for HADOOP-18316 in the latest 2.0 images, addressing CVE-2022-25168 .
Security
Set HDFS /user/<name> directory permission with owner= <name> and mode=700 for Kerberos enabled clusters created with the latest 1.5 and 2.0 images.
Security
Backported the patch for HIVE-25468 in the latest 1.5 and 2.0 images, addressing CVE-2021-34538 .
Fixed
Backported the patch for HIVE-20607 in the latest 2.0 images.
Fixed
Backported the patch for HIVE-19310 in the latest 1.5 images.
Fixed
Fixed an issue in which Presto queries might fail when submitted to HA clusters in the latest 1.5 and 2.0 images.
Fixed
Backported the patch for HIVE-26447 in the latest 2.0 images.
Fixed
Backported the patch for SPARK-36383 in the latest 2.0 images.
Fixed
Fixed a "gsutil not found" issue in the latest 1.5 and 2.0 Ubuntu images.
Fixed
Fixed a bug where metrics created based on the yarn:yarn.resourcemanager.metrics.runtime.buckets property were not exported to Cloud Monitoring, even though listed in --metric-overrides during cluster creation.
Fixed
Backported the patch for HIVE-20004 in the latest 2.0 images.
October 05, 2022
Feature
Dataproc is now available in the me-west1 region (Tel Aviv, Israel).
October 03, 2022
Announcement
Preemptible SPOT VMs can be used as secondary workers in a Dataproc cluster. Unlike legacy preemptible VMs with a 24-hour maximum lifetime, Spot VMs have no maximum lifetime.
October 01, 2022
Feature
Dataproc Serverless for Spark now supports Artifact Registry with image streaming.
Fixed
Dataproc Metastore : Fixed an endpoint resolution issue that caused 500 type errors for valid setups. The service was overly aggressive in describing networks and subnetworks attached to the service via the NetworkConfig field.
September 27, 2022
Feature
Dataproc Auto Zone Placement now takes ANY reservation into account by default.
September 26, 2022
Change
Dataproc Serverless for Spark now uses runtime version 1.0.19 and 2.0.0-RC4 , which also upgrades both runtimes to Cloud Storage Connector to 2.2.8 .
September 20, 2022
Feature
Dataproc Serverless for Spark:
You can now use the spark.dynamicAllocation.executorAllocationRatio property to configure how aggressively to scale up Serverless workloads. A value of 1.0 provides maximum scale up.
Change
Dataproc Serverless for Spark: Increased initial and maximum Spark executor limits to 500 and 2,000 , respectively.
Change
Dataproc Serverless for Spark: Sets a maximum limit of 500 workers per scale up or scale down operation.
Change
Dataproc Serverless for Spark:
Reduced the latency between batch workload completion and when a batch is marked SUCCEEDED.
Change
Dataproc on Compute Engine : Stop all master and worker VMs when starting a cluster fails due to stockout or insufficient quota.
September 19, 2022
Change
Dataproc Serverless for Spark now uses runtime version 1.0.18 and 2.0.0-RC3 .
September 12, 2022
Change
Dataproc Serverless for Spark now uses runtime version 1.0.17 and 2.0.0-RC2 .
September 08, 2022
Issue
Avoid using the following image versions when creating new clusters:
2.0.31-debian10 , 2.0.31-ubuntu18 , 2.0.31-rocky8
2.0.32-debian10 , 2.0.32-ubuntu18 , 2.0.32-rocky8
2.0.33-debian10 , 2.0.33-ubuntu18 , 2.0.33-rocky8
1.5.57-debian10 , 1.5.57-ubuntu18 , 1.5.57-rocky8
1.5.58-debian10 , 1.5.58-ubuntu18 , 1.5.58-rocky8
1.5.59-debian10 , 1.5.59-ubuntu18 , 1.5.59-rocky8
If your cluster uses one of these image versions, there is a small chance that the cluster might enter an ERROR_DUE_TO_UPDATE state while being updated, either manually or as a result of autoscaling. If that happens, contact support. You can avoid future occurrences by creating new clusters with a newer image version.
September 01, 2022
Fixed
Fixed issue where gcloud dataproc batches list hangs when a large
number of batches is present.
August 24, 2022
Announcement
Announcing the Preview release of Dataproc custom constraints , which can be used to allow or deny specific operations on Dataproc clusters.
August 22, 2022
Announcement
Announcing Dataproc Serverless for Spark preview runtime version 2.0.0-RC1 , which includes the following components:
Spark 3.3.0
Cloud Storage Connector 2.2.7
Java 17
Conda 4.13
Python 3.10
R 4.1
Scala 2.13
Change
Dataproc Serverless for Spark now uses runtime version 1.0.16 , which upgrades the following components to the following versions:
Spark 3.2.2
Avro 1.11.1
Hadoop 3.3.4
Jetty 9.4.48.v20220622
ORC 1.7.5
RoaringBitmap 0.9.31
Scala 2.12.16
August 13, 2022
Change
New sub-minor versions of Dataproc images:
1.5.73-debian10 , 1.5.73-rocky8 , 1.5.73-ubuntu18
2.0.47-debian10 , 2.0.47-rocky8, 2.0.47-ubuntu18
Change
Dataproc on Compute Engine images now have master VM memory protection enabled by default. Jobs may be terminated to prevent the master VM running out of memory.
Change
Enabled Spark authentication and encryption for Kerberos clusters in 1.5 and 2.0 images .
Change
Dataproc Serverless for Spark now uses runtime version 1.0.15 , which upgrades the following Spark dependencies to the following versions:
Jackson 2.13.3
Jetty 9.4.46.v20220331
ORC 1.7.4
Parquet 1.12.3
Protobuf 3.19.4
RoaringBitmap 0.9.28
Breaking
FallbackHiveAuthorizerFactory is now set by default on newly created 1.5 and 2.0 image clusters that have the any of the following features enabled:
Kerberos security
Personal Cluster Authentication
Secure Multi-Tenancy
If you encounter a Cannot modify <PARAM> or similar runtime error when running a SET statement in a Hive query, this means the parameter is not in list of allowable runtime parameters. You can allow the parameter using
hive.security.authorization.sqlstd.confwhitelist.append as a cluster property when you create a cluster.
Example:
--properties="hive:hive.security.authorization.sqlstd.confwhitelist.append=tez.application.tags,<ADDITIONAL-1>,<ADDITIONAL-2>"
August 01, 2022
Change
Default MySQL instance root password changed to a random value in 1.5 and 2.0 images. New password is now stored in MySQL configuration file accessible only by the OS level root user.
Change
New sub-minor versions of Dataproc images:
1.5.72-debian10 , 1.5.72-rocky8 , 1.5.72-ubuntu18
2.0.46-debian10 , 2.0.46-rocky8, 2.0.46-ubuntu18
Change
Upgraded Hadoop to version 2.10.2
version 2.10.2 in 1.5 images .
Change
Upgraded Hadoop to version 3.2.3 in 2.0 images .
Fixed
Backported the patches for HIVE-19047 and HIVE-19048 in 1.5 images .
Fixed
Backported the patch for HIVE-19048 in 2.0 images .
Fixed
Backported the patch for KNOX-1997 in 2.0 images .
July 07, 2022
Announcement
Dataproc support for the following images has been extended to the following dates:
Dataproc image version 1.5 : March 31, 2023
Dataproc image version 2.0 : June 30, 2023
July 01, 2022
Change
New sub-minor versions of Dataproc images:
1.5.71-debian10 , 1.5.71-rocky8 , 1.5.71-ubuntu18
2.0.45-debian10 , 2.0.45-rocky8 , 2.0.45-ubuntu18
Fixed
For 1.5 images and the 2.0.45-ubuntu18 image , backported the upstream fix for
KNOX-1997 .
June 21, 2022
Change
New sub-minor versions of Dataproc images:
1.5.70-debian10 , 1.5.70-rocky8 , 1.5.70-ubuntu18
2.0.44-debian10 , 2.0.44-rocky8 , 2.0.44-ubuntu18
Feature
Dataproc Metastore: For 1.5 images, added a spark.hadoop.hive.eager.fetch.functions.enabled Spark Hive client property to control whether the client fetches all functions from Hive Metastore during initialization. The default setting is true , which preserves the existing behavior of fetching all functions. If set to false , the client will not fetch all functions during initialization, which can help reduce high latency during initialization, particularly when there are many functions and the Metastore is not located in the client's region.
Fixed
For 1.5 and 2.0 images, backported
YARN-9608 to fix the issue in
graceful decommissioning .
June 14, 2022
Change
New sub-minor versions of Dataproc images:
1.5.69-debian10 , 1.5.69-rocky8 , 1.5.69-ubuntu18
2.0.43-debian10 , 2.0.43-rocky8 , 2.0.43-ubuntu18
Change
Backported the patch for HBASE-23287 to HBase 1.5.0 in 1.5 image
Announcement
Announcing the General Availability (GA) release of Dataproc Custom OSS Metrics GA , which collects then integrates Dataproc cluster
OSS component metrics into Cloud Monitoring .
June 13, 2022
Announcement
Announcing the General Availability (GA) release of Ranger Cloud Storage plugin . This plugin activates an authorization service on each Dataproc cluster VM, which evaluates requests from the Cloud Storage connector against Ranger policies and, if the request is allowed, returns an access token for the cluster VM service account
Feature
Dataproc is now available in the us-south1 region (Dallas, Texas).
June 06, 2022
Announcement
Announcing the General Availability (GA) release of Dataproc Persistent History Server , which provides web interfaces to view job history for jobs run on active or deleted Dataproc clusters.
Change
Dataproc Serverless for Spark now uses runtime version 1.0.13 .
Change
New sub-minor versions of Dataproc images:
1.5.68-debian10 , 1.5.68-rocky8 , 1.5.68-ubuntu18
2.0.42-debian10 , 2.0.42-rocky8 , 2.0.42-ubuntu18
Deprecated
Dataproc Serverless for Spark runtime versions 1.0.2, 1.0.3 and 1.0.4 are unavailable for new batch submissions.
Change
Upgrade Cloud Storage connector version
2.1.8
for 1.5 images only.
Change
Dataproc on GKE Spark 3.1 images upgraded to Spark version 3.1.3 .
Fixed
Fixed a bug where HDFS directories initialization could fail when user names in a project contain special characters.
Fixed
Fix a Dataproc on GKE bug that caused upload of driver logs to Cloud Storage to fail.
June 01, 2022
Feature
Dataproc is now available in the us-east5 region (Columbus, Ohio).
May 31, 2022
Feature
Dataproc is now available in the europe-west9 region (Paris, France).
Feature
Dataproc is now available in the europe-southwest1 region (Madrid, Spain).
May 30, 2022
Change
New sub-minor versions of Dataproc images:
1.5.67-debian10 , 1.5.67-ubuntu18 , 1.5.67-rocky8
2.0.41-debian10 , 2.0.41-ubuntu18 , 2.0.41-rocky8
Change
Dataproc on GKE error messages now provide additional information.
Fixed
Backported fixes for HIVE-22098 , HIVE-23809 , HIVE-20462 ,
HIVE-21675 to Hive 3.1 in Dataproc 2.0 images.
Fixed
Fixed a bug where older-image (for example, 1.3.95) cluster create operations failed with the error message : "does not support specifying local SSD interface other than 'SCSI'".
Fixed
Fix a bug where properties related to Kerberos cross realm trust were not properly set.
May 23, 2022
Change
New sub-minor versions of Dataproc images:
1.5.66-debian10 , 1.5.66-ubuntu18 , 1.5.66-rocky8
2.0.40-debian10 , 2.0.40-ubuntu18 , 2.0.40-rocky8
Change
Upgraded Spark to 3.1.3 in Dataproc image version 2.0 .
Fixed
Fixed a bug where job was not being marked as terminated after master node reboot.
Fixed
Backported the fix for HIVE-20514 to Hive 2.3 in Dataproc image version 1.5 .
Fixed
Fixed a bug with HDFS directories initialization when core:fs.defaultFS is set to an external HDFS.
Fixed
Fixed a bug where Flink was not able to run on HA clusters.
May 09, 2022
Change
Dataproc Serverless for Spark now uses runtime version 1.0.12 .
Change
New sub-minor versions of Dataproc images:
1.5.65-debian10 , 1.5.65-ubuntu18 , 1.5.65-rocky8
2.0.39-debian10 , 2.0.39-ubuntu18 , 2.0.39-rocky8
Fixed
Fixed an issue where chronyd systemd service failed to start due to a race condition between systemd-timesyncd and chronyd .
Deprecated
Dataproc Serverless for Spark runtime version 1.0.1 is unavailable for new batch submissions.
May 03, 2022
Change
Dataproc Serverless for Spark now uses runtime version 1.0.11 .
Change
New sub-minor versions of Dataproc images:
1.5.64-debian10 , 1.5.64-ubuntu18 , 1.5.64-rocky8
2.0.38-debian10 , 2.0.38-ubuntu18 , 2.0.38-rocky8
Change
If you request to cancel a job in one of the following states, Dataproc will
return the job, but not initiate cancellation, since it is already in
progress: CANCEL_PENDING, CANCEL_STARTED, or CANCELLED.
Change
Added Dataproc Serverless support for updating the Cloud Storage connector using the dataproc.gcsConnector.version and dataproc.gcsConnector.uri properties.
Change
When submitting a Dataproc job or workflow that selects a cluster that
matches the specified labels, Dataproc will avoid choosing clusters that are
in a state that disallows running jobs. Specifically, Dataproc will only
choose among clusters in one of the following states: RUNNING, UPDATING, CREATING, or ERROR_DUE_TO_UPDATE.
Fixed
Hive: Upgrade to Apache ORC 1.5.13 in image version 2.0 . Notable in this release are 2 bug fixes: ORC-598 and ORC-672 , related to handling ORC files with arrays larger than 1024 elements.
Fixed
Dataproc correctly defaults NodePool locations when the GKE cluster is in us-east1 and europe-west1 .
Deprecated
Dataproc Serverless for Spark runtime version 1.0.0 is unavailable for new batch submissions.
April 22, 2022
Change
Cloud Storage connector version upgraded to 2.2.6 in image version 2.0 .
Change
New sub-minor versions of Dataproc images:
1.5.63-debian10 , 1.5.63-ubuntu18 , 1.5.63-rocky8
2.0.37-debian10 , 2.0.37-ubuntu18 , 2.0.37-rocky8
Change
Dataproc Serverless for Spark now uses runtime version 1.0.10 .
Fixed
Hive: Bundle threeten classes in hive-exec.jar in image version 2.0 . ORC now requires date handling classes in the org.threeten package, which are not present in hive-exec.jar at query time.
HIVE-22589 fixed this bug upstream, but it was part of a large new feature. Instead, this change applies a small targeted fix to address the bug.
April 20, 2022
Feature
Dataproc is now available in the europe-west8 region (Milan, Italy).
April 13, 2022
Announcement
Announcing the General Availability (GA) release of Dataproc on GKE , which allows you to execute Big Data applications using the Dataproc jobs API on GKE clusters.
April 11, 2022
Feature
The dataproc:dataproc.performance.metrics.listener.enabled cluster property, which is enabled by default, listens on port 8791 on all master nodes to extract performance-related telemetry Spark metrics. The metrics are published to the Dataproc service for it to use to set better defaults and improve the service. To opt-out of this feature, set dataproc:dataproc.performance.metrics.listener.enabled=false when creating a Dataproc cluster.
Change
New sub-minor versions of Dataproc images:
1.5.62-debian10, 1.5.62-ubuntu18, and 1.5.62-rocky8
2.0.36-debian10, 2.0.36-ubuntu18, and 2.0.36-rocky8
Fixed
Fixed and issue in which the Dataproc autoscaler would sometimes try to scale down a cluster by more than one thousand secondary worker nodes at one time. Now, the autoscaler will scale down at most one thousand nodes at one time. In cases where the autoscaler previously would have scaled down more than one thousand nodes at one time, it will scale down the nodes by at most one thousand nodes, and a log will be written to the autoscaler log noting this occurrence.
Fixed
Changed the owner of /usr/lib/knox/conf/gateway-site.xml from root:root to knox:knox .
Change
Dataproc Serverless for Spark now uses runtime version 1.0.9 .
Fixed
Fixed bugs that could cause Dataproc to delay marking a job cancelled.
April 01, 2022
Change
New sub-minor versions of Dataproc images:
1.5.61-debian10, 1.5.61-ubuntu18, and 1.5.61-rocky8
2.0.35-debian10, 2.0.35-ubuntu18, and 2.0.35-rocky8
Change
Dataproc Serverless for Spark now uses runtime version 1.0.8 .
Fixed
Changed the owner of /var/lib/zookeeper/myid from root to zookeeper .
March 25, 2022
Change
Dataproc Serverless for Spark now uses runtime version 1.0.7 .
Change
New sub-minor versions of Dataproc images:
1.5.60-debian10, 1.5.60-ubuntu18, and 1.5.60-rocky8
2.0.34-debian10, 2.0.34-ubuntu18, and 2.0.34-rocky8
March 17, 2022
Change
Dataproc Serverless for Spark now uses runtime version 1.0.6 .
Change
New sub-minor versions of Dataproc images:
1.5.59-debian10, 1.5.59-ubuntu18, and 1.5.59-rocky8
2.0.33-debian10, 2.0.33-ubuntu18, and 2.0.33-rocky8
March 07, 2022
Change
New sub-minor versions of Dataproc images:
1.5.58-debian10, 1.5.58-ubuntu18, and 1.5.58-rocky8
2.0.32-debian10, 2.0.32-ubuntu18, and 2.0.32-rocky8
Change
Dataproc Serverless for Spark now uses runtime version 1.0.5 .
Fixed
Fixed bug where clusters created with Kerberos failed with SSL
Certificate string is too long error.
Fixed
Fixed bug where clusters created via Dataproc Hub failed with Unit
file jupyter.service does not exist error.
February 18, 2022
Feature
Added support for Enhanced Flexibility Mode (EFM) with primary worker shuffle mode on Spark for image version 2.0 .
Announcement
General Availability (GA) release of new Rocky Linux based images: 1.5.57-rocky8 and 2.0.31-rocky8. These images are replacing CentOS images which are EOL.
Change
Upgraded Cloud Storage connector version to 2.1.7 in image version 1.5.
Deprecated
CentOS images are EOL. 1.5.56-centos8 and 2.0.30-centos8 are the final CentOS based images. CentOS images are no longer supported and will not receive new releases.
Change
Dataproc Serverless for Spark now uses runtime version 1.0.4 , which updates GCS connector to 2.2.5 version.
Change
New sub-minor versions of Dataproc images:
1.5.57-debian10 , 1.5.57-ubuntu18 , and 1.5.57-rocky8
2.0.31-debian10 , 2.0.31-ubuntu18 , and 2.0.31-rocky8
Change
Upgraded Cloud Storage connector version to 2.2.5 in image version 2.0.
February 17, 2022
Announcement
A script that checks if a project or organization is using an unsupported Dataproc image is available for downloading (see Unsupported Dataproc versions ).
February 15, 2022
Deprecated
Dataproc images prior to 1.3.95, 1.4.77, 1.5.53, and 2.0.27 are deprecated and cluster creations based on these images will fail starting 2/28/2022.
February 11, 2022
Change
Dataproc Serverless for Spark now uses runtime version 1.0.3 .
February 07, 2022
Feature
Added cluster_type field to job and operation metrics in Cloud Monitoring .
February 01, 2022
Feature
Enabled the Resource Manager UI and HA capable UIs in HA cluster mode.
Announcement
1.4.80-debian10 and 1.4.80-ubuntu18 are the last releases for the 1.4 images. Dataproc 1.4 images will no longer be supported and will not receive new releases.
Change
Configured Zeppelin Spark interpreter to run in YARN client mode by default for image version 2.0 .
Change
New sub-minor versions of Dataproc images:
1.4.80-debian10 and 1.4.80-ubuntu18
1.5.56-debian10 , 1.5.56-ubuntu18 , and 1.5.56-centos8
2.0.30-debian10 , 2.0.30-ubuntu18 , and 2.0.30-centos8
January 31, 2022
Change
Dataproc Serverless for Spark now uses runtime version 1.0.2 , which updates Spark to 3.2.1 version.
January 24, 2022
Change
Dataproc Serverless for Spark now uses runtime version 1.0.1 , which includes improved error messaging for network connectivity issues.
January 19, 2022
Announcement
Announcing the General Availability (GA) release of Dataproc Serverless for Spark , which allows you to run your Spark jobs on Dataproc without having to spin up and manage your own cluster.
January 18, 2022
Feature
Added support for Dataproc Metastore's beta NetworkConfig field. Beta services using this field can now be used in conjunction with v1 Dataproc clusters.
Change
Dataproc extracts the warehouse directory from the Dataproc Metastore service for the cluster-local warehouse directory.
January 17, 2022
Change
New sub-minor versions of Dataproc images:
1.4.79-debian10 and 1.4.79-ubuntu18
1.5.55-debian10 , 1.5.55-ubuntu18 , and 1.5.55-centos8
2.0.29-debian10 , 2.0.29-ubuntu18 , and 2.0.29-centos8
Change
The Cloud Storage connector jar is installed on the Solr server (even if dataproc:solr.gcs.path property is not set). Applies to image versions 1.4 , 1.5 , and 2.0 .
Change
Dataproc images 1.4.79, 1.5.55, and 2.0.29, listed above, were updated with log4j version 2.17.1 . It is strongly recommended that your clusters use previously released images 1.4.77, 1.5.53, or 2.0.27, or higher (see Supported Dataproc versions ). While not urgent nor strongly recommended, Dataproc advises you to create or recreate Dataproc clusters with the latest sub-minor image versions when possible.
Fixed
Fixed a bug where cluster restart disabled Solr and Ranger services even if the components are selected. Applies to image versions 1.4 , 1.5 , and 2.0 .
Change
Migrated to Eclipse Temurin JDK in image versions 1.4 , 1.5 , and 2.0 .
Fixed
RANGER-3324 : Make optimized db schema script idempotent for MySQL DB. Applies to 2.0 images .
Fixed
YARN-8865 : RMStateStore contains large number of expired RMDelegationToken. Applies to 1.5 images .
January 09, 2022
Change
New sub-minor versions of Dataproc images:
1.4.78-debian10, and 1.4.78-ubuntu18
1.5.54-centos8 , 1.5.54-debian10 , and 1.5.54-ubuntu18
2.0.28-centos8 , 2.0.28-debian10 , and 2.0.28-ubuntu18
Change
Dataproc images 1.4.78, 1.5.54, and 2.0.28, listed above, were updated with log4j version 2.17.0 . It is strongly recommended that your clusters use previously released images 1.4.77, 1.5.53, or 2.0.27, or higher (see Supported Dataproc versions ). While not urgent nor strongly recommended, Dataproc advises you to create or recreate Dataproc clusters with the latest sub-minor image versions when possible.
Fixed
Fixed the problem that jars added with the --jars flag in gcloud dataproc jobs submit spark-sql are missing at runtime.
Change
Upgraded Cloud Storage connector version to 2.2.4 in image version 2.0 .
December 21, 2021
Change
Dataproc has released 1.3.95-debian10/-ubuntu18 images with a one-time patch that addresses the Apache Log4j 2 CVE-2021-44228 and CVE-2021-45046 vulnerabilities, but note that that all 1.3 images remain unsupported, and Dataproc will not provide upgrades to 1.3 images .
December 18, 2021
Change
Removed the Geode interpreter from Zeppelin notebook, which is affected by https://nvd.nist.gov/vuln/detail/CVE-2021-45046.
Change
Dataproc has released the following sub-minor image versions to address an Apache Log4j 2 vulnerability (also see Create a cluster and Recreate and update a cluster for more information). Note: These images supersede the 1.5 and 2.0 images listed in the December 16, 2021 release note :
1.5.53-centos8 , 1.5.53-debian10 , 1.5.53-ubuntu18 ,
2.0.27-centos8 , 2.0.27-debian10 , 2.0.27-ubuntu18
December 16, 2021
Change
Upgraded log4j version to 2.16.0 , which fixes https://nvd.nist.gov/vuln/detail/CVE-2021-44228.
Change
Dataproc has released the following [sub-minor image versions](https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions:
1.4.77-debian10 , 1.4.77-ubuntu18 ,
1.5.52-centos8 , 1.5.52-debian10 , 1.5.52-ubuntu18 ,
2.0.26-centos8 , 2.0.26-debian10 , 2.0.26-ubuntu18
December 13, 2021
Issue
Dataproc has added new images, listed in this release note, to address an Apache Log4j 2 vulnerability .
Note: these images have been superseded. by the 12/16/21 images (see the December 16, 2021 release note ). Also see Create a cluster and Recreate and update a cluster for more information.
Change
Upgraded log4j version to 2.15.0 , which fixes https://nvd.nist.gov/vuln/detail/CVE-2021-45046.
Change
New sub-minor versions of Dataproc images:
1.4.76-debian10 , 1.4.76-ubuntu18 ,
1.5.51-centos8 , 1.5.51-debian10 , 1.5.51-ubuntu18 ,
2.0.25-centos8 , 2.0.25-debian10 , 2.0.25-ubuntu18
Fixed
HIVE-21040 : msck does unnecessary file listing at last level of directory tree. Applies to 1.5 and 2.0 images.
Fixed
Fixed a bug where driver log links on PHS Web UI stop working once the job cluster is deleted. Applies to 1.4 and 1.5 images.
Fixed
Fixed executor log links on Spark History Server Web UI for running and completed applications. Applies to 1.4 and 1.5 images.
Fixed
SPARK-35817 : Queries against wide Avro tables can be slow. Applies to 2.0 images.
Fixed
SPARK-7768 : Make user-defined type (UDT) API public. Applies to 2.0 images.
Fixed
YARN-8990 : Fixed a Fairscheduler race condition. Applies to 2.0 images.
November 17, 2021
Feature
Dataproc is now available in the southamerica-west1 region (Santiago, Chile).
November 01, 2021
Feature
Added the following new Apache Spark properties to control Cloud Storage flush behavior for event logs for 1.4 and later images :
spark.history.fs.gs.outputstream.type (default: BASIC )
spark.history.fs.gs.outputstream.sync.min.interval.ms (default: 5000ms ).
Note: The default configuration of these properties enables the display of running jobs in the Spark History Server UI for clusters using Cloud Storage to store spark event logs.
Feature
Added support in 1.5 and 2.0 images to filter Spark Applications on the Spark History Server Web UI based on Cloud Storage path. Filtering is accomplished using the eventLogDirFilter parameter, which accepts any Cloud Storage path substring and will return applications that match the Cloud Storage path.
Change
New sub-minor versions of Dataproc images:
1.4.75-debian10 , 1.4.75-ubuntu18 ,
1.5.50-centos8 , 1.5.50-debian10 , 1.5.50-ubuntu18 ,
2.0.24-centos8 , 2.0.24-debian10 , 2.0.24-ubuntu18
Announcement
The previous Dataproc on GKE beta documentation has been replaced with a Dataproc on GKE private preview sign up form . Existing beta customers can continue using the beta release, but note that the beta release is planned to be deprecated and removed.
Change
Removed Apache Iceberg and Delta Lake libraries in 2.0 images because they are not compatible with Spark 3.1.
Change
Upgraded Cloud Storage connector to version 2.2.3 on 2.0 Images .
Fixed
Backported SPARK-23182 in 1.4 and 1.5 images . This prevents long-running Spark shuffle servers from leaking connections when they are not cleanly terminated.
Fixed
Backported SPARK-31946 in 2.0 images .
Fixed
Patched Hive in 2.0 images with HIVE-20187 , which fixes a bug where Hive returned incorrect query results when hive.convert.join.bucket.mapjoin.tez is set to true.
Fixed
Fixed stdout and stderr links in the Spark History Server Web UI in 2.0 images .
October 22, 2021
Change
The dataproc:dataproc.cluster-ttl.consider-yarn-activity cluster property is now set to true by default for image versions 1.4.64+, 1.5.39+, and 2.0.13+ . With this change, with clusters created with these image versions, Dataproc Cluster Scheduled Deletion by default will consider YARN activity, in addition to Dataproc Jobs API activity, when determining cluster idle time . This change does not affect clusters with images with lower version numbers: cluster idle time for those clusters will continue to be computed based on Dataproc Jobs API activity only. When using image versions 1.4.64+, 1.5.39+, and 2.0.13+, you can opt out of this changed behavior by setting this property to false when you create the cluster.
October 08, 2021
Announcement
In a future announcement (on approximately October 22, 2021), Dataproc will announce that Cluster Scheduled Deletion by default will consider YARN activity, in addition to Dataproc Jobs API activity, when determining cluster idle time. This change will affect image versions 1.4.64+, 1.5.39+, and 2.0.13+. To test this feature now, create a cluster with a recent image, setting the dataproc:dataproc.cluster-ttl.consider-yarn-activity cluster property to true . Note: After this behavior becomes the default, you can opt out when you create a cluster by setting the property to false .
October 01, 2021
Fixed
Fixed an issue where complete YARN container logs were not visible in 1.5 and 2.0 Images.
Change
New sub-minor versions of Dataproc images:
1.4.73-debian10 , 1.4.73-ubuntu18 ,
1.5.48-centos8 , 1.5.48-debian10 , 1.5.48-ubuntu18 ,
2.0.22-centos8 , 2.0.22-debian10 , 2.0.22-ubuntu18
Fixed
HADOOP-15129 : Fixed in 2.0 Images : Datanode cached namenode DNS lookup failure and could not startup on.
September 17, 2021
Feature
Updated August 19, 2021 release notes with cluster creation Failure Action feature.
September 13, 2021
Change
New sub-minor versions of Dataproc images: 1.4.71-debian10 , 1.4.71-ubuntu18 , 1.5.46-centos8 , 1.5.46-debian10 , 1.5.46-ubuntu18 , 2.0.20-centos8 , 2.0.20-debian10 , 2.0.20-ubuntu18
Change
Added support for enabling/disabling Ubuntu Snap daemon with cluster property dataproc:dataproc.snap.enabled . The default value is "true". If set to "false", pre-installed Snap packages in the image won't be affected, but auto refresh will be disabled. Applies to all Ubuntu images.
Fixed
HIVE-21018 : Grouping/distinct on more than 64 columns should be possible. Applies to 2.0 images.
September 08, 2021
Change
The following previously released sub-minor versions of Dataproc images included a bug where the dataproc user account was broken. This prevented some Dataproc services from functioning properly, which resulted in features being unavailable. In particular, this prevented Jupyter from running in clusters with Personal Cluster Authentication enabled.
These sub-minor versions have been rolled back, and can only be used when updating existing clusters that already use them:
1.4.66-debian10, 1.4.66-ubuntu18
1.4.67-debian10, 1.4.67-ubuntu18
1.5.41-centos8, 1.5.41-debian10, 1.5.41-ubuntu18
1.5.42-centos8, 1.5.42-debian10, 1.5.42-ubuntu18
2.0.15-centos8, 2.0.15-debian10, 2.0.15-ubuntu18
2.0.16-centos8, 2.0.16-debian10, 2.0.16-ubuntu18
September 07, 2021
Change
Added additional messages to the error messages for networking and IAM
errors when creating a new cluster.
August 30, 2021
Change
Image 2.0:
OOZIE-3599 : Upgraded Jetty version to 9.4.
Change
New sub-minor versions of Dataproc images: 1.4.70-debian10 , 1.4.70-ubuntu18 , 1.5.45-centos8 , 1.5.45-debian10 , 1.5.45-ubuntu18 , 2.0.19-centos8 , 2.0.19-debian10 , 2.0.19-ubuntu18
Change
Backported SPARK-34295 : Added a new spark.yarn.kerberos.renewal.excludeHadoopFileSystems configuration option.
August 23, 2021
Change
New sub-minor versions of Dataproc images: 1.4.69-debian10, 1.4.69-ubuntu18, 1.5.44-centos8, 1.5.44-debian10, 1.5.44-ubuntu18, 2.0.18-centos8, 2.0.18-debian10, and 2.0.18-ubuntu18.
Change
Backported the following Trino (PrestoSQL) BigQuery connector patches in image 2.0 :
Make BigQuery views cache ttl configurable
Move DestinationTableBuilder to BigQueryClient
Fix wrong result due to column position mismatch in BigQuery
Escape single quote in BigQuery string condition
Fix information_schema query failures in BigQuery connector
Add support for CREATE and DROP SCHEMA in BigQuery
Fasten listing tables in BigQuery connector
Implement case insensitive name matching for BigQuery
Add BigQuerySqlExecutor and refactor tests to use it
Add view_definition system table for BigQuery view
Prefer ImmutableMap to Map
Add test for aggregating BigQuery view more than once
Upgrade Google Could library bom to 16.3.0
Fix TestBigQueryIntegrationSmokeTest.testShowCreateTable
Enable views in BigQuery tests
Fix incorrect result when aggregating count BigQuery view
Remove dependency on presto-tests from Druid, BigQuery
Refactor unused var in presto-bigquery
Fix projection pushdown in BigQuery connector
Add test for yearly partitioned table in BigQuery
Upgrade BigQuery library to 11.0.0
Add BigQuery smoke test for HOUR-ly partitioned table
Redact bigquery.credentials-key config
Update BigQuery dependencies to support HOURLY partitioning of
tables
Change
Configured YARN ResourceManager to use port 8554 and Druid to use port 17071 for JMX Remote RMI port.
August 19, 2021
Feature
Users can now help assure the successful creation of a cluster by automatically deleting any failed primary workers (the master(s) and at least two primary workers must be successfully provisioned for cluster creation to succeed). To delete any failed primary workers when you create a cluster:
Using gcloud : Set the gcloud dataproc clusters create --action-on-failed-primary-workers flag to "DELETE".
Using the Dataproc clusters.create API: Set the actionOnFailedPrimaryWorkers field to "DELETE".
Announcement
Added support for Dataproc Metastore in three recently turned up regions : .europe-west1, northamerica-northeast1, and asia-southeast1.
Change
Dataproc issues a warning message if the staging or test bucket name contains an underscore.
August 13, 2021
Change
New sub-minor versions of Dataproc images: 1.4.68-debian10, 1.4.68-ubuntu18, 1.5.43-centos8, 1.5.43-debian10, 1.5.43-ubuntu18, 2.0.17-centos8, 2.0.17-debian10, and 2.0.17-ubuntu18.
Change
Upgrade Flink to version 1.12.5 in image 2.0 .
Fixed
HIVE-2527 : Fixed slow Hive partition deletion for Cloud Object Stores with expensive ListFiles.
Fixed
Fixed Jupyter startup on Personal Auth clusters on all images .
August 09, 2021
Change
New sub-minor versions of Dataproc images: 1.4.67-debian10, 1.4.67-ubuntu18, 1.5.42-centos8, 1.5.42-debian10, 1.5.42-ubuntu18, 2.0.16-centos8, 2.0.16-debian10, and 2.0.16-ubuntu18.
Fixed
SPARK-28290 : Fixed an issue where Spark History Server failed to serve because of a wild card certificate in the 1.4 and 1.5 images.
August 03, 2021
Feature
Dataproc is now available in the northamerica-northeast2 region (Toronto).
August 02, 2021
Announcement
1.3 images are no longer supported and will not receive new releases.
Change
New sub-minor versions of Dataproc images: 1.4.66-debian10, 1.4.66-ubuntu18, 1.5.41-centos8, 1.5.41-debian10, 1.5.41-ubuntu18, 2.0.15-centos8, 2.0.15-debian10, and 2.0.15-ubuntu18.
Change
In image 2.0 , set the mapreduce.fileoutputcommitter.algorithm.version=2 property in Spark. This makes Spark commit algorithm version consistent with prior Dataproc image versions.
July 27, 2021
Change
New sub-minor versions of Dataproc images: 1.3.94-debian10, 1.3.94-ubuntu18, 1.4.65-debian10, 1.4.65-ubuntu18, 1.5.40-centos8, 1.5.40-debian10, 1.5.40-ubuntu18, 2.0.14-centos8, 2.0.14-debian10, and 2.0.14-ubuntu18.
Change
The following component versions were updated in image 2.0 :
Upgraded Scala version to 2.12.14 .
Upgrades Spark version to 3.1.2 .
Upgraded Zeppelin version to 0.9.1-SNAPSHOT .
Fixed
Fixed a rare bug that sometimes happened when scaling down the number of secondary workers in a cluster in which the update operation would fail with error 'Resource is not a member of' or 'Cannot delete instance that was already deleted'.
July 20, 2021
Announcement
Announcing the General Availability (GA) release of Dataproc Enhanced Flexibility Mode .
Change
New sub-minor versions of Dataproc images: 1.3.93-debian10, 1.3.93-ubuntu18, 1.4.64-debian10, 1.4.64-ubuntu18, 1.5.39-centos8, 1.5.39-debian10, 1.5.39-ubuntu18, 2.0.13-centos8, 2.0.13-debian10, and 2.0.13-ubuntu18.
Change
Upgraded Cloud Storage connector to version 2.2.2 on 2.0 images.
Fixed
Fixed an issue on 1.4 and 1.5 images where temporary shuffle data could be leaked when running Enhanced Flexibility Mode (EFM) with Spark.
Fixed
Fixed Hue installation on Ubuntu 2.0 images.
July 12, 2021
Change
For 2.0+ image clusters, the dataproc:dataproc.master.custom.init.actions.mode cluster property can be set to RUN_AFTER_SERVICES to run initialization actions on the master after HDFS and any services that depend on HDFS are initialized. Examples of HDFS-dependent services include: HBase, Hive Server2, Ranger, Solr, and the Spark and MapReduce history servers. Default: RUN_BEFORE_SERVICES .
July 09, 2021
Change
Custom image limitation: New images announced in the Dataproc release notes are not available for use as the base for custom images until one week from their announcement date.
Deprecated
The Dataproc v1beta2 APIs are deprecated. Please use the
Dataproc v1 APIs .
July 07, 2021
Announcement
The end date of support for Dataproc image version 1.4 has been extended from August, 2021 to November, 2021.
July 05, 2021
Change
Upgraded Spark version to 2.4.8 in the following images:
Image 1.4
Image 1.5
Change
Upgrade HBase to version 2.2.7 in image 2.0 .
Change
New sub-minor versions of Dataproc images: 1.3.92-debian10, 1.3.92-ubuntu18, 1.4.63-debian10, 1.4.63-ubuntu18, 1.5.38-centos8, 1.5.38-debian10, 1.5.38-ubuntu18, 2.0.12-centos8, 2.0.12-debian10, and 2.0.12-ubuntu18.
Change
Minimum boot disk sizes for Dataproc images:
Image 2.0: 30GB
Image 1.5: 20GB
Image 1.4: 15GB
Image 1.3: 15GB
Fixed
Fixed stdout/stderr links on Spark History Server Web UI of the Persistent History Server in the following images:
Image 1.4
Image 1.5
Fixed
Fixed a bug where personal auth credentials would not propagate to every VM in the cluster if VPC service controls were enabled.
June 29, 2021
Feature
Dataproc is now available in the asia-south2 region (Delhi).
Change
The following previously released sub-minor versions of Dataproc images have been rolled back and can only be used when
updating existing clusters that already use them:
1.3.91-debian10, 1.3.91-ubuntu18
1.4.62-debian10, 1.4.62-ubuntu18
1.5.37-centos8, 1.5.37-debian10, 1.5.37-ubuntu18
2.0.11-centos8, 2.0.11-debian10, and 2.0.11-ubuntu18.
Change
Introduced a new ERROR_DUE_TO_UPDATE state, which indicates a cluster has encountered an irrecoverable error while scaling. Clusters in this state cannot be scaled, but can accept jobs.
Change
Added support for Dataproc Metastore in three new recently turned up regions : europe-west3, us-west1, and us-east1.
Fixed
Fixed an issue where a spurious unrecognized property warning was generated when the dataproc:jupyter.listen.all.interfaces cluster property is set.
June 21, 2021
Feature
Dataproc is now available in the australia-southeast2 region (Melbourne).
June 18, 2021
Change
Dataproc Component Gateway URLs for any two new clusters that have the same project ID, region, and name will be identical unless Dataproc Personal Cluster Authentication is enabled.
June 08, 2021
Change
Custom image limitation: Currently, the following
Dataproc image versions are the latest images that can be used as
the base for custom images :
1.3.89-debian10, 1.3.89-ubuntu18
1.4.60-debian10, 1.4.60-ubuntu18
1.5.35-debian10, 1.5.35-ubuntu18, 1.5.35-centos8
2.0.9-debian10, 2.0.9-ubuntu18, 2.0.11-centos8
June 01, 2021
Change
New sub-minor versions of Dataproc images: 1.3.91-debian10, 1.3.91-ubuntu18, 1.4.62-debian10, 1.4.62-ubuntu18, 1.5.37-centos8, 1.5.37-debian10, 1.5.37-ubuntu18, 2.0.11-centos8, 2.0.11-debian10, and 2.0.11-ubuntu18.
Rollback Notice: See the June 29, 2021 release note rollback notice.
Change
Image 1.3 - 2.0
All jobs now share a single JobthreadPool .
The number of Job threads in the Agent is configurable with the dataproc:agent.process.threads.job.min and dataproc:agent.process.threads.job.max cluster properties , defaulting to 10 and 100, respectively. The previous behavior was to always use 10 Job threads.
Change
Image 2.0
Added snappy-jar dependency to Hadoop.
Upgraded versions of Python packages: nbdime 2.1 -> 3.0 , pyarrow 2.0 -> 3.0 , spyder 4.2 -> 5.0 , spyder-kernels 1.10 -> 2.0 , regex 2020.11 -> 2021.4 .
Fixed
Image 1.3 - 2.0
SPARK-35227 : Replace Bintray with the new repository service for the spark-packages resolver in SparkSubmit.
Deprecated
Image 1.5 and 2.0
Agnets no longer publish a /has_run_before sentinel file. If you use a fork of connectors initialization-actions , then sync from head.
Fixed
Image 2.0
Fixed the problem that the environment variable PATH was not set in YARN containers.
SPARK-34731 : ConcurrentModificationException in EventLoggingListener when redacting properties.
May 20, 2021
Announcement
You can customize the Conda environment during cluster creation using new Conda-related cluster properties. See Using Conda-related cluster properties .
Change
Added validation for clusters created with Dataproc Metastore services to determine compatibility between the Dataproc image's Hive version and the DPMS service's hive version
April 23, 2021
Announcement
Announcing Dataproc Confidential Compute : Dataproc clusters now support Compute Engine Confidential VMs .
Change
Image 1.4
Updated Conda to version 4.6 .
Change
Image 1.5
CentOS only : adoptopenjdk is set as the default Java environment.
Change
New sub-minor versions of Dataproc images: 1.3.89-debian10, 1.3.89-ubuntu18, 1.4.60-debian10, 1.4.60-ubuntu18, 1.5.35-centos8, 1.5.35-debian10, 1.5.35-ubuntu18, 2.0.9-centos8, 2.0.9-debian10, and 2.0.9-ubuntu18.
Change
Image 1.5 and 2.0
Updated Oozie version to 5.2.1
The Jupyter optional component now uses the "GCS" subdirectory as the initial working directory when you open the JupyterLab UI.
April 16, 2021
Change
Added the ability to stop and start high-availability clusters .
Fixed
Fixed a bug where scale-down update cluster requests failed due to quota validation if the user project was over a quota limit.
April 05, 2021
Change
Image 2.0:
New sub-minor versions of Dataproc images: 2.0.8-centos8, 2.0.8-debian10, and 2.0.8-ubuntu18.
Added HBase Spark Connector .
March 31, 2021
Announcement
Dataproc support of Dataproc Metastore services is now available in GA.
March 26, 2021
Breaking
Image 2.0:
Changed default private IPv6 Google APIs access for 2.0 clusters from OUTBOUND to INHERIT_FROM_SUBNETWORK .
March 24, 2021
Feature
Dataproc is now available in the europe-central2 region (Warsaw).
March 23, 2021
Announcement
The default Dataproc image is now image version 2.0 .
Announcement
Announcing the General Availability (GA) release of Dataproc cluster Stop/Start .
Change
New sub-minor versions of Dataproc images: 1.3.88-debian10 , 1.3.88-ubuntu18 , 1.4.59-debian10 , 1.4.59-ubuntu18 , 1.5.34-centos8 , 1.5.34-debian10 , 1.5.34-ubuntu18 , 2.0.7-centos8 , 2.0.7-debian10 , and 2.0.7-ubuntu18 .
Fixed
Image 2.0 :
HIVE-22373 : File Merge tasks fail when containers are reused.
Fixed
Fixed a bug that caused Hive jobs to fail on Ranger-enabled clusters.
Announcement
The end date of support for Dataproc image version 1.3 has been extended from March, 2021 to July, 2021.
Change
Image 2.0 :
Updated Iceberg to version 0.11.0 .
Updated Flink to version 1.12.2 .
Fixed
Fixed a bug where Presto property value with ';' could not be set correctly in the config file.
Fixed
CVE-2020-13957 : SOLR-14663: ConfigSets CREATE does not set trusted flag.
Fixed
Fixed a bug where Spark event logs directory and history server directory could not be set to Cloud Storage correctly.
Fixed
CVE-2020-1926 : HIVE-22708 : Test fix for http transport.
March 16, 2021
Announcement
Announcing the General availability (GA) release of CentOS 8 based 2.0 images .
Change
New sub-minor versions of Dataproc images: 1.3.87-debian10 , 1.3.87-ubuntu18 , 1.4.58-debian10 , 1.4.58-ubuntu18 , 1.5.33-centos8 , 1.5.33-debian10 , 1.5.33-ubuntu18 , 2.0.6-centos8 , 2.0.6-debian10 , and 2.0.6-ubuntu18 .
Change
Image 2.0: Upgraded Spark to version 3.1.1
March 08, 2021
Announcement
Dataproc 2.0 image version will become a default Dataproc image version in 1 week on March 15, 2021.
March 05, 2021
Change
New sub-minor versions of Dataproc images: 1.3.86-debian10 , 1.3.86-ubuntu18 , 1.4.57-debian10 , 1.4.57-ubuntu18 , 1.5.32-centos8 , 1.5.32-debian10 , 1.5.32-ubuntu18 , 2.0.5-debian10 , and 2.0.5-ubuntu18
Change
Image 2.0:
Upgraded Delta Lake to 0.8.0 version .
Fixed
Fixed the permission for mounted SSD Hadoop directories.
Fixed
Fixed a bug where YARN applications launched by Hive jobs were not correctly tagged, leading to missing YARN application status from job state.
March 02, 2021
Feature
Added the --cluster-labels flag to gcloud dataproc jobs submit to allow submitting jobs to a cluster that matches specified cluster labels. Also see Submitting a Dataproc job .
March 01, 2021
Announcement
Dataproc 2.0 image version will become a default Dataproc image version in 2 weeks on March 15, 2021.
February 26, 2021
Change
New sub-minor versions of Dataproc images: 1.3.85-debian10 , 1.3.85-ubuntu18 , 1.4.56-debian10 , 1.4.56-ubuntu18 , 1.5.31-centos8 , 1.5.31-debian10 , 1.5.31-ubuntu18 , 2.0.4-debian10 , and 2.0.4-ubuntu18
Change
Image 2.0: Upgraded Spark to 3.1.1 RC2 version
Change
Allow stopping clusters that have autoscaling enabled, and allow enabling autoscaling on clusters that are STOPPED , STOPPING , or STARTING . If you stop a cluster that has autoscaling enabled, the Dataproc autoscaler will stop scaling the cluster. It will resume scaling the cluster once it has been started again. If you enable autoscaling on a stopped cluster, the autoscaling policy will only take effect once the cluster has been started (see Starting and stopping clusters ).
Change
Deactivated mysql and hive-metastore components for clusters created with a Dataproc Metastore service on an image that has the DISABLE_COMPONENT_HIVE_METASTORE and DISABLE_COMPONENT_MYSQL capabilities.
Fixed
Image 1.3 - 1.5 : HIVE-18871 : hive on Tez execution error due to set hive.aux.jars.path to hdfs://
February 22, 2021
Announcement
Dataproc 2.0 image version will become a default Dataproc image version in 3 weeks on March 15, 2021.
February 16, 2021
Change
New sub-minor versions of Dataproc images: 1.3.84-debian10, 1.3.84-ubuntu18, 1.4.55-debian10, 1.4.55-ubuntu18, 1.5.30-centos8, 1.5.30-debian10, 1.5.30-ubuntu18, 2.0.3-debian10, and 2.0.3-ubuntu18
Fixed
Fixed a bug that prevented Dataproc on GKE cluster creation.
February 15, 2021
Announcement
Dataproc 2.0 image version will become a default Dataproc image version in 4 weeks on March 15, 2021.
February 09, 2021
Change
Image 2.0:
Upgraded Spark built-in Hive to version 2.3.8 .
Upgraded Druid to version 0.20.1
HIVE-24436 : Fixed Avro NULL_DEFAULT_VALUE compatibility issue.
SQOOP-3485 : Fixed Avro NULL_DEFAULT_VALUE compatibility issue.
SQOOP-3447 : Removed usage of org.codehaus.jackson and org.json packages.
Change
New sub-minor versions of Dataproc images: 2.0.2-debian10, and 2.0.2-ubuntu18.
Fixed
Fixed a bug for beta clusters using a Dataproc Metastore Service where using a subnetwork for the cluster resulted in an error.
February 08, 2021
Announcement
Dataproc 2.0 image version will become a default Dataproc image version in 5 weeks on March 15, 2021.
February 01, 2021
Announcement
Dataproc 2.0 image version will become a default Dataproc image version in 3 weeks on February 22, 2021.
January 29, 2021
Change
Image 2.0:
Upgraded Hadoop to version 3.2.2
Upgraded Scala to version 2.12.13
Upgraded Flink to version 1.12.1
Upgraded Spark to version 3.1.1 RC1
Change
New sub-minor versions of Dataproc images: 1.3.83-debian10, 1.3.83-ubuntu18, 1.4.54-debian10, 1.4.54-ubuntu18, 1.5.29-centos8, 1.5.29-debian10, 1.5.29-ubuntu18, 2.0.1-debian10, and 2.0.1-ubuntu18.
January 25, 2021
Announcement
Dataproc 2.0 image version will become a default Dataproc image version in 4 weeks on February 22, 2021.
January 22, 2021
Announcement
Announcing the General Availability (GA) release of Dataproc 2.0 images . This image will become the default Dataproc image version on February 22, 2021.
Breaking
2.0 image clusters :
In 2.0 clusters, yarn.nm.liveness-monitor.expiry-interval-ms is set to 15000 (15 seconds). If the resource manager does not receive a heartbeat from a NodeManager during this period, it marks the NodeManager as LOST . This setting is important for clusters that use preemptible VMs . Usually, NodeManagers unregister with the resource manager when their VMs shut down, but in rare cases when they are be shut down ungracefully, it is important for the resource manager to notice this quickly.
Change
New sub-minor versions of Dataproc images: 1.3.82-debian10, 1.3.82-ubuntu18, 1.4.53-debian10, 1.4.53-ubuntu18, 1.5.28-centos8, 1.5.28-debian10, 1.5.28-ubuntu18, 2.0.0-debian10, and 2.0.0-ubuntu18.
Breaking
2.0 image clusters :
You can no longer pass the dataproc:dataproc.worker.custom.init.actions.mode property when creating a 2.0 image cluster. For 2.0+ image clusters, dataproc:dataproc.worker.custom.init.actions.mode is set to RUN_BEFORE_SERVICES. For more information, see
Important considerations and guidelines—Initialization processing .
Fixed
Fixed bug affecting cluster scale-down: If Dataproc was unable to verify whether a master node exists, for example when hitting Compute Engine read quota limits, it would erroneously put the cluster into an ERROR state.
January 15, 2021
Deprecated
The gcloud_dataproc_personal_cluster.py tool for the personal auth beta is no longer supported for new images. It will be replaced by an equivalent set of commands in an upcoming gcloud release.
Change
Image 2.0 preview:
Upgraded Spark to version 3.1.0 RC1 .
Upgraded Zeppelin to version 0.9.0 .
Upgraded Cloud Storage Connector to version 2.2.0 .
Upgraded JupyterLab to version 3.0 .
Announcement
Announcing the Beta release of Dataproc Service Account Based Secure Multi-tenancy , which allows you to share a cluster with multiple users. With secure multi-tenancy, users can submit interactive workloads to the cluster with isolated user identities.
Change
New sub-minor versions of Dataproc images: 1.3.81-debian10, 1.3.81-ubuntu18, 1.4.52-debian10, 1.4.52-ubuntu18, 1.5.27-centos8, 1.5.27-debian10, 1.5.27-ubuntu18, 2.0.0-RC23-debian10, and 2.0.0-RC23-ubuntu18.
January 12, 2021
Feature
Added support for user configuration of Compute Engine Shielded VMs in a Dataproc Cluster.
January 08, 2021
Change
New sub-minor versions of Dataproc images: 1.3.80-debian10, 1.3.80-ubuntu18, 1.4.51-debian10, 1.4.51-ubuntu18, 1.5.26-centos8, 1.5.26-debian10, 1.5.26-ubuntu18, 2.0.0-RC22-debian10, and 2.0.0-RC22-ubuntu18.
Fixed
Image 2.0 preview:
HIVE-21646 : Tez: Prevent TezTasks from escaping thread logging context
Change
Image 2.0 preview:
Upgraded Delta Hive connector to version 0.2.0 .
Upgraded Flink to version 1.12.0 .
Updated Iceberg to version 0.10.0 .
Feature
Added support for new persistent disk type, pd-balanced .
December 17, 2020
Announcement
Announcing the General Availability (GA) release of CentOS 8 based 1.5 images .
Change
Image 2.0 preview :
Changed the default value of Spark SQL property spark.sql.autoBroadcastJoinThreshold to 0.75% of executor memory.
Fixed SPARK-32436 : Initialize numNonEmptyBlocks in HighlyCompressedMapStatus.readExternal
Change
New sub-minor versions of Dataproc images: 1.3.79-debian10, 1.3.79-ubuntu18, 1.4.50-debian10, 1.4.50-ubuntu18, 1.5.25-centos8, 1.5.25-debian10, 1.5.25-ubuntu18, 2.0.0-RC21-debian10, and 2.0.0-RC21-ubuntu18.
Fixed
Images 1.5-2.0 preview :
Fixed ZOOKEEPER-1936 : Server exits when unable to create data directory due to race condition.
Fixed
Image 1.4-1.5 :
Fixed a NullPointerException in a primary worker shuffle when the BypassMergeSortShuffleWriter is used when some output partitions are empty.
Fixed
Fixed a bug where Dataproc agent logs had separate entries for exception stack trace in StackDriver.
December 15, 2020
Announcement
Announcing the Beta release of the Dataproc cluster Stop/Start .
Announcement
Announcing the General Availability (GA) release of the Dataproc Workflow Timeout feature, which allows users to set a timeout on their graph of jobs and automatically cancel their workflow after a specified period.
December 08, 2020
Feature
Restartable jobs : Added the ability for users to specify the maximum number of total failures when a job is submitted.
Breaking
Image 2.0 preview
Using the n1-standard-1 machine type is no longer supported.
Changed default values of Spark SQL properties:
spark.sql.adaptive.enabled=true
spark.sql.autoBroadcastJoinThreshold =< 2% of executor memory.
Change
Image 1.5 :
Upgraded Hadoop to version 2.10.1 .
Announcement
The Dataproc Metastore Service is now available in the us-east4, europe-west2, asia-northeast1, and australia-southeast1 regions in addition to the existing us-central1 region.
Change
New sub-minor versions of Dataproc images: 1.3.78-debian10, 1.3.78-ubuntu18, 1.4.49-debian10, 1.4.49-ubuntu18, 1.5.24-debian10, 1.5.24-ubuntu18, 2.0.0-RC20-debian10, and 2.0.0-RC20-ubuntu18.
November 16, 2020
Change
Image 2.0 preview
Upgraded Hue to version
4.8.0
Change
New sub-minor versions of Dataproc images: 1.3.77-debian10, 1.3.77-ubuntu18, 1.4.48-debian10, 1.4.48-ubuntu18, 1.5.23-debian10, 1.5.23-ubuntu18, 2.0.0-RC19-debian10, and 2.0.0-RC19-ubuntu18.
November 09, 2020
Change
New sub-minor versions of Dataproc images: 1.3.76-debian10, 1.3.76-ubuntu18, 1.4.47-debian10, 1.4.47-ubuntu18, 1.5.22-debian10, 1.5.22-ubuntu18, 2.0.0-RC18-debian10, and 2.0.0-RC18-ubuntu18.
Breaking
Clusters that use Dataproc Metastore must be created in the same region as the Dataproc Metastore service that they will use.
Fixed
Fixed a bug where the Jupyter optional component depended on the availability of GitHub at cluster creation time.
Change
Image 2.0 preview
Upgraded Miniconda to version 4.9.0
Upgraded Druid to version 0.20.0
Upgraded Upgrade FasterXML Jackson to version 2.10.5
Upgraded Apache ORC to version 1.5.12
Upgraded Apache Parquet to version 1.11.1
October 30, 2020
Feature
Added a dataproc:dataproc.cooperative.multi-tenancy.user.mapping cluster property which takes a list of comma-separated user-to-service account mappings. If a cluster is created with this property set, when a user submits a job, the cluster will attempt to impersonate the corresponding service account when accessing Cloud Storage through the Cloud Storage connector . This feature requires Cloud Storage connector version 2.1.4 or higher.
Change
New sub-minor versions of Dataproc images: 1.3.75-debian10, 1.3.75-ubuntu18, 1.4.46-debian10, 1.4.46-ubuntu18, 1.5.21-debian10, 1.5.21-ubuntu18, 2.0.0-RC17-debian10, and 2.0.0-RC17-ubuntu18.
Fixed
Image 2.0 preview:
Fixed HADOOP-15124 : Slow FileSystem.Statistics counters implementation.
Fixed
Image 1.3 to 2.0 preview:
Fixed HIVE-19202 : CBO failed due to NullPointerException in HiveAggregate.isBucketedInput() .
Fixed
Fixed a bug in HBASE optional component on HA clusters in which hbase.rootdir was always configured to be hdfs://${CLUSTER_NAME}-m-0:8020/hbase , which assumes that master 0 is the active namenode. Now it is configured to be hdfs://${CLUSTER_NAME}:8020/hbase , so that the active master is always chosen.
October 23, 2020
Change
2.0 preview image versions:
Upgraded Apache Arrow version used by Spark
to Apache Arrow 1.0.1 .
Fixed
Pin MySQL Java connector version to prevent breakage of the /usr/share/java/mysql-connector-java.jar symlink on long-running and old clusters caused by auto-upgrade to a new MySQL Java connector.
Change
Decreased the minimum allowed value of Dataproc Scheduled Deletion LifecycleConfig.idleDeleteTtl (Dataproc API) and --max-idle flag (gcloud command-line tool) from 10 minutes to 5 minutes.
Change
New sub-minor versions of Dataproc images: 1.3.74-debian10, 1.3.74-ubuntu18, 1.4.45-debian10, 1.4.45-ubuntu18, 1.5.20-debian10, 1.5.20-ubuntu18, 2.0.0-RC16-debian10, and 2.0.0-RC16-ubuntu18.
Fixed
All image versions:
Fixed a bug where files uploaded to Cloud Storage through the JupyterLab UI were incorrectly base64 encoded.
Fixed
1.4 and 1.5 image versions:
SPARK-32708 : Fixed SparkSQL query optimization failure to reuse exchange with DataSourceV2.
Fixed
Sole-tenant node cluster create or update requests to use preemptible secondary workers or attach autoscaling policies that create preemptible secondary workers are now correctly rejected.
October 22, 2020
Feature
Announcing the Alpha release of the Dataproc Persistent History Server , which provides a UI to view job history for jobs run on active and deleted Dataproc clusters.
October 19, 2020
Feature
Announcing the GA (General Availability) release of the Dataproc Ranger Optional Component and the
Dataproc Solr Optional Component .
October 16, 2020
Feature
Announcing the GA (General Availability) release of the Dataproc - Docker Optional Component and the
Dataproc - Flink Optional Component .
October 13, 2020
Change
New sub-minor versions of Dataproc images: 1.3.72-debian10, 1.3.72-ubuntu18, 1.4.43-debian10, 1.4.43-ubuntu18, 1.5.18-debian10, 1.5.18-ubuntu18, 2.0.0-RC14-debian10, and 2.0.0-RC14-ubuntu18.
October 06, 2020
Change
Image 2.0
Updated HBase to version 2.2.6 .
Installed google-cloud-bigquery-storage in default conda environment.
Changed default value of zeppelin.notebook.storage in zeppelin-site.xml to "org.apache.zeppelin.notebook.repo.GCSNotebookRepo".
Change
Image 1.4
Upgraded Spark to version 2.4.7 .
Change
Image 1.5
Upgraded Spark to version 2.4.7 .
Installed google-cloud-bigquery-storage package by default in the Anaconda component .
Changed default value of zeppelin.notebook.storage in zeppelin-site.xml to "org.apache.zeppelin.notebook.repo.GCSNotebookRepo".
Change
New sub-minor versions of Dataproc images: 1.3.71-debian10, 1.3.71-ubuntu18, 1.4.42-debian10, 1.4.42-ubuntu18, 1.5.17-debian10, 1.5.17-ubuntu18, 2.0.0-RC13-debian10, and 2.0.0-RC13-ubuntu18.
October 01, 2020
Feature
Launched Dataproc integration with Compute Engine sole-tenant nodes , which allows users to create a cluster in a sole-tenant node group .
September 30, 2020
Change
Creating clusters and instantiating workflow requests that succeed even when the requester did not have ActAs permission on the service account now generate a warning field in the audit log request.
Change
New sub-minor versions of Dataproc images: 1.3.70-debian10, 1.3.70-ubuntu18, 1.4.41-debian10, 1.4.41-ubuntu18, 1.5.16-debian10, 1.5.16-ubuntu18, 2.0.0-RC12-debian10, and 2.0.0-RC12-ubuntu18.
Change
All supported images
Upgraded Conscrypt to the 2.5.1 version .
Change
Image 1.5 and Image 2.0 Preview
Upgraded Cloud Storage connector to the 2.1.5 version .
Change
Image 1.5
Upgraded Delta Lake to the 0.6.1 version .
Change
Image 2.0 preview
The Anaconda optional component is no longer available or required when using the Jupyter optional component (Miniconda is installed and activated by default).
Updated R to the 4.0.0 version .
Configured YARN aggregated logs to use the IFile format.
Upgrade Flink to the 1.11.2 version .
Fixed
YARN-9607 : Auto-configuring rollover-size of IFile format for non-appendable filesystems.
YARN-9525 : IFile format is not working against s3a remote folder.
September 18, 2020
Change
New sub-minor versions of Dataproc images: 1.3.69-debian10, 1.3.69-ubuntu18, 1.4.40-debian10, 1.4.40-ubuntu18, 1.5.15-debian10, 1.5.15-ubuntu18, 2.0.0-RC11-debian10, and 2.0.0-RC11-ubuntu18.
Change
All image versions
Upgrade Conscrypt to version 2.5.0
Change
Image 2.0 preview
Enable outbound private IPv6 Google APIs access from cluster nodes by default.
Upgrade Miniconda to version 4.8.3
Upgrade Python to version 3.8
Upgrade Delta Lake to version 0.7.0
Upgrade Iceberg to version 0.9.1
Upgrade Spark to version 3.0.1
Backport HIVE-18702 : INSERT OVERWRITE TABLE doesn't clean the table directory before overwriting.
September 11, 2020
Change
Added the PrivateIpv6GoogleAccess API field to allow configuring IPv6 access to Dataproc cluster.
Change
New sub-minor versions of Dataproc images: 1.3.68-debian10, 1.3.68-ubuntu18, 1.4.39-debian10, 1.4.39-ubuntu18, 1.5.14-debian10, 1.5.14-ubuntu18, 2.0.0-RC10-debian10, and 2.0.0-RC10-ubuntu18.
Change
1.3-1.5 Images:
HIVE-18323 :
Vectorization: add the support of timestamp in
VectorizedPrimitiveColumnReader for parquet
Change
1.5 and 2.0 preview images:
Upgraded the jupyter-core and jupyter-client packages in the 1.5 and 2.0 images to be compatible with the installed notebook package version.
Change
2.0 preview image:
HIVE-21085 : Materialized views registry starts non-external Tez session.
HIVE-22647 : Enable session pool by default.
HDFS-14759 : HDFS cat logs an info message.
Upgraded Scala to 2.12.12 version .
Upgraded Druid to 0.19.0 version .
Upgraded Flink to 1.11.1 version .
Upgraded Hue to 4.7.1 version
Upgraded Presto SQL to 340 version .
Fixed
Fixed a regression that could cause clusters to fail to start if user-supplied keystore/truststore are provided when enabling Kerberos.
September 04, 2020
Change
Switched 1.3 and 1.3-debian image version aliases to point to 1.3 Debian 10 images.
Change
Improved node memory utilization in clusters created with 2.0 preview images .
Change
Changed secondary workers default boot disk size to 1000 GB in clusters created with 2.0 preview images .
Change
Support more than 8 local SSDs on VMs. Compute Engine supports 16 and 24 SSDs for larger machine types.
Change
When Enhanced Flexibility Mode is enabled, increased app master, task, and Spark stage retries to 10 to improve resiliency of applications to downscaling and preemption of preemptible VMs.
August 28, 2020
Feature
Launched Dataproc Workflow Timeout feature, which allows users to set a timeout on their graph of jobs and automatically cancel their workflow after a specified period.
Feature
Dataproc Metastore integration, which allows users to create a cluster using a Dataproc Metastore service as an external metastore, is now available for Alpha release testing .
August 21, 2020
Feature
Announcing the Beta release of Dataproc Enhanced Flexibility Mode (EFM) , which manages shuffle data to minimize job progress delays caused by the removal of nodes from a running cluster.
Change
Image 1.3 and 1.4: upgraded the Cloud Storage connector to version to 1.9.18.
Change
Changed 1.4 and 1.4-debian image version aliases to point to 1.4-debian10 . The version name 1.4-debian9 will continue to be available, but it won't get updates in future releases.
Change
New sub-minor versions of Dataproc images: 1.3.67-debian10, 1.3.67-ubuntu18, 1.4.38-debian10, 1.4.38-ubuntu18, 1.5.13-debian10, 1.5.13-ubuntu18, 2.0.0-RC9-debian10, and 2.0.0-RC9-ubuntu18.
August 17, 2020
Feature
Launched new Personal Cluster Authentication feature, which allows the creation of single-user clusters that can access Cloud Storage using the user's own credentials instead of a VM service account.
August 14, 2020
Change
Dataproc quotas are now regional: each region now has its own quota, which can be separately adjusted. All existing quota overrides have been migrated; customer action is not required.
Change
Enabled Spark SQL parquet metadata cache (removed spark.sql.parquet.cacheMetadata=false from Spark default configuration).
Change
New sub minor versions of Dataproc images: 1.3.66-debian10, 1.3.66-ubuntu18, 1.4.37-debian10, 1.4.37-ubuntu18, 1.5.12-debian10, 1.5.12-ubuntu18, 2.0.0-RC8-debian10, and 2.0.0-RC8-ubuntu18.
Change
Image 2.0 preview:
Upgraded Zeppelin to 0.9.0-preview2 version .
Included all plugins in Zeppelin installation by default.
Upgraded HBase to 2.2.5 version .
Change
Image 1.4:
Fixed a bug in Spark EFM HCFS shuffle where failures after partial commits are not recoverable.
Upgraded Spark to 2.4.6 version .
Change
Image 1.5:
Fixed a bug in Spark EFM HCFS shuffle where failures after partial commits are not recoverable.
Upgraded Spark to 2.4.6 version .
Upgraded Zeppelin to 0.9.0-preview2 version .
Included all plugins in Zeppelin installation by default.
August 03, 2020
Change
Dataproc users are required to have service account ActAs permission to deploy Dataproc resources, for example, to create clusters and submit jobs. See Managing service account impersonation for more information.
Opt-in for existing Dataproc customers: This change does not automatically apply to current Dataproc customers without ActAs permission. To opt in, see Securing Dataproc, Dataflow, and Cloud Data Fusion .
July 31, 2020
Feature
Enabled Kerberos automatic-configuration feature. When creating a cluster, users can enable Kerberos by setting the dataproc:kerberos.beta.automatic-config.enable cluster property to true . When using this feature, users do not need to specify the Kerberos root principal password with the --kerberos-root-principal-password and --kerberos-kms-key-uri flags.
Change
New sub-minor versions of Dataproc images: 1.3.65-debian10, 1.3.65-ubuntu18, 1.4.36-debian10, 1.4.36-ubuntu18, 1.5.11-debian10, 1.5.11-ubuntu18, 2.0.0-RC7-debian10, and 2.0.0-RC7-ubuntu18.
Change
1.3+ images (includes Preview image):
HADOOP-16984 : Added support to read history files only from the done directory.
MAPREDUCE-7279 : Display the Resource Manager name on the HistoryServer web page.
SPARK-32135 : Show the Spark driver name on the Spark history web page.
SPARK-32097 : Allow reading Spark history log files via the Spark history server from multiple directories.
Change
Images 1.3 - 1.5:
HIVE-20600 : Fixed Hive Metastore connection leak.
Change
Images 1.5 - 2.0 preview:
Upgraded the Cloud Storage connector to version 2.1.4 (see the GitHub change notes ).
Fixed
Fixed an issue where optional components that depend on HDFS failed on single node clusters.
Fixed
Fixed an issue that caused workflows to be stuck in the RUNNING state when managed clusters (created by the workflow) were deleted while the workflow was running.
July 24, 2020
Feature
Terminals started in Jupyter and JupyterLab now use login shells. The terminals behave as if you SSH'd into the cluster as root .
Change
Upgraded the jupyter-gcs-contents-manager package to the latest version. This upgrade includes a bug fix to a 404 (NOT FOUND) error message that was issued in response to an attempt to create a file in the virtual top-level directory instead of the expected 403 (PERMISSION DENIED) error message.
Change
New sub-minor versions of Dataproc images: 1.3.64-debian10, 1.3.64-ubuntu18, 1.4.35-debian10, 1.4.35-ubuntu18, 1.5.10-debian10, 1.5.10-ubuntu18, 2.0.0-RC6-debian10, and 2.0.0-RC6-ubuntu18.
Fixed
Fixed a bug in which the HDFS DataNode daemon was enabled on secondary workers but not started (except on VM reboot if started automatically by systemd ).
Fixed
Fixed a bug in which StartLimitIntervalSec=0 appeared in the Service section instead of the Unit section for systemd services, which disabled rate limiting for retries when systemd restarted a service.
July 17, 2020
Feature
Dataproc now uses Shielded VMs for Debian 10 and Ubuntu 18.04 clusters by default.
Feature
Added support for Zeppelin Spark and shell interpreters in Kerberized clusters by default.
Fixed
If a project's regional Dataproc staging bucket is manually deleted, it will be recreated automatically when a cluster is subsequently created in that region.
Change
New sub-minor versions of Dataproc images: 1.3.63-debian10, 1.3.63-ubuntu18, 1.4.34-debian10, 1.4.34-ubuntu18, 1.5.9-debian10, 1.5.9-ubuntu18, 2.0.0-RC5-debian10, and 2.0.0-RC5-ubuntu18.
Change
Image 2.0 preview:
Updated Pig 0.18.0-SNAPHOT to 0b2066a revision to fix Hive 3.1 compatibility ( PIG-4764 ).
Feature
The Proxy-Authorization header is accepted in place of Authorization to authenticate to Component Gateway to the backend for programmatic API calls. If Proxy-Authorization is set to a bearer token, Component Gateway will forward the Authorization header if it does not contain a bearer token.
For example, this allows setting both Proxy-Authorization: Bearer <google-access-token> as well as setting Authorization: Basic ... to authenticate to HiveServer2 with HTTP basic auth.
July 10, 2020
Feature
Added --temp-bucket flag to gcloud dataproc clusters create and gcloud dataproc workflow-templates set-managed-cluster to allow users to configure a Cloud Storage bucket that stores ephemeral cluster and jobs data, such as Spark and MapReduce history files.
Feature
Dataproc images now include the oauth2l command line tool. The tool is installed in /usr/local/bin , which is available to all users in the VM.
Feature
Extended Jupyter to support notebooks stored on VM persistent disk. This change modifies the Jupyter contents manager to create two virtual top-level directories, named GCS , and Local Disk . The GCS directory points to the Cloud Storage location used by previous versions, and the Local Disk directory points to the persistent disk of the VM running Jupyter.
Change
New sub-minor versions of Dataproc images: 1.2.102-debian9, 1.3.62-debian9, 1.4.33-debian9, 1.3.62-debian10, 1.4.33-debian10, 1.5.8-debian10, 1.3.62-ubuntu18, 1.4.33-ubuntu18, 1.5.8-ubuntu18, 2.0.0-RC4-debian10, 2.0.0-RC4-ubuntu18
Fixed
Images 1.3 - 1.5:
Fixed HIVE-11920 : ADD JAR failing with URL schemes other than file/ivy/hdfs.
Images 1.3 - 2.0 preview:
Fixed TEZ-4108 : NullPointerException during speculative execution race condition.
Fixed
Fixed a race condition that could nondeterministically cause Hive-WebHCat to fail at startup when HBase is not enabled.
July 07, 2020
Feature
Announcing the General Availability (GA) release of Dataproc Component Gateway , which provides secure access to web endpoints for Dataproc default and optional components.
June 24, 2020
Change
Image 2.0 preview :
SPARK-22404 : set
spark.yarn.unmanagedAM.enabled property to true on clusters where
Kerberos is not enabled to run Spark Application Master in driver (not
managed in YARN) to improve job execution time.
Updated R version to 3.6
Updated Spark to 3.0.0 version
Image 1.5
Updated R version to 3.6
Change
New subminor image versions : 1.2.100-debian9, 1.3.60-debian9, 1.4.31-debian9, 1.3.60-debian10, 1.4.31-debian10, 1.5.6-debian10, 1.3.60-ubuntu18, 1.4.31-ubuntu18, 1.5.6-ubuntu18, preview 2.0.0-RC2-debian10, and preview 2.0.0-RC2-ubuntu18.
Fixed
Fixed a quota validation bug where accelerator counts were squared before validation -- for example, previously if you requested 8 GPUs, Dataproc validated whether your project had quota for 8^2=64 GPUs.
June 11, 2020
Feature
Users can now configure a tempBucket in API calls. The temp bucket is a Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket.
Change
New subminor image versions : 1.2.99-debian9, 1.3.59-debian9, 1.4.30-debian9, 1.3.59-debian10, 1.4.30-debian10, 1.5.5-debian10, 1.3.59-ubuntu18, 1.4.30-ubuntu18, and 1.5.5-ubuntu18.
New preview image 2.0.0-RC1-debian10, 2.0.0-RC1-ubuntu18 , with the following components:
Anaconda 2019.10
Atlas 2.0.0
Druid 0.18.1
Flink 1.10.1
Hadoop 3.2.1
HBase 2.2.4
Hive 3.1.2 (with LLAP support)
Hue 4.7.0
JupyterLab 2.1.0
Kafka 2.3.1
Miniconda3 4.8.3
Pig 0.18.0
Presto SQL 333
Oozie 5.2.0
R 3.6.0
Ranger 2.0.0
Solr 8.1.1
Spark 3.0.0
Sqoop 1.5.0
Zeppelin 0.9.0
Change
Image 1.3+
Patched HIVE-23496 Adding a flag to disable materialized views cache warm up.
Change
Dataproc Job container logging now supports Dataproc Kerberized clusters .
Change
Druid's Historical's and Broker's JVM and runtime properties are now calculated using server resources. Previously, only the Historical's and MiddleManager's MaxHeapSize property was calculated using server resources. This change modifies how new values for MaxHeapSize and MaxDirectMemorySize properties are calculated for Broker and Historical processes. Also, new runtime properties druid.processing.numThreads and druid.processing.numMergeBuffers are calculated using server resources.
Change
If the project-level staging bucket is manually deleted, it will be recreated when a cluster is created.
Fixed
Image 1.5:
Fixed a bug that prevented users from logging on to the Presto UI when using Component Gateway.
June 08, 2020
Feature
Dataproc is now available in the asia-southeast2 region (Jakarta).
May 27, 2020
Feature
Dataproc now provides beta support for Dataproc Hub .
May 21, 2020
Feature
You can now set core:fs.defaultFS to a location in Cloud Storage (for example, gs://bucket ) when creating a cluster to set Cloud Storage as the default filesystem. This also sets core:fs.gs.reported.permissions , the reported permission returned by the Cloud Storage connector for all files, to 777. If Cloud Storage is not set as the default filesystem, this property will continue to return 700, the default value.
Feature
Image 1.4 and 1.5
HADOOP-16984 : Enable persistent history server to read from done directory.
Change
Image 1.5
Upgrade Druid to version 0.17.1 .
Upgrade Cloud Storage Connector to version 2.1.3 .
Upgrade Delta Lake to version 0.6.0 .
Change
New sub-minor versions of Dataproc images: 1.2.98-debian9, 1.3.58-debian9, 1.4.29-debian9, 1.3.58-debian10, 1.4.29-debian10, 1.5.4-debian10, 1.3.58-ubuntu18, 1.4.29-ubuntu18, 1.5.4-ubuntu18.
Change
Image 1.3, 1.4, and 1.5
Restrict Jupyter, Zeppelin, and Knox to only accept connections from localhost when Component Gateway is enabled. This restriction reduces the risk of remote code execution over unsecured notebook server APIs. To override this change, when you create the cluster, set the Jupyter, Zeppelin, and Knox cluster properties , respectively, as follows: dataproc:jupyter.listen.all.interfaces=true , zeppelin:zeppelin.server.addr=0.0.0.0 , and knox:gateway.host=0.0.0.0 .
Upgrade Hive to version 2.3.7.
Change
Image 1.4 and 1.5
SPARK-29367 : Add ARROW_PRE_0_15_IPC_FORMAT=1 in yarn-env.sh to fix the Pandas UDF issue with pyarrow 0.15.
Change
Set the hive.localize.resource.num.wait.attempts property to 25 to improve reliability of Hive queries.
Change
Hide the "Quit" button from Jupyter notebook ( c.NotebookApp.quit_button = False ) when using the Jupyter optional component . The Jupyter environment is shut down when the cluster is deleted.
Fixed
Image 1.5
Fix a race condition in which hbase-master would try to write /hbase/.tmp/hbase.version to HDFS before HDFS was initialized. This can increase cluster creation time for clusters created with HBase.
Fixed
Fix a race condition in which, when the am.primary_only property is provided, the "non-preemptible" node label was not added to the resource manager's node label store before node managers started registering with the resource manager.
Store resource manager node labels in Cloud Storage when am.primary_only property is provided.
Deprecated
The dataproc:alpha.state.shuffle.hcfs.enabled cluster property has been deprecated. To enable Enhanced Flexibility Mode (EFM) for Spark, set dataproc:efm.spark.shuffle=hcfs . To enable EFM for MapReduce, set dataproc:efm.mapreduce.shuffle=hcfs .
May 05, 2020
Feature
Clusters can now be created with non-preemptible secondary workers.
May 01, 2020
Feature
Announcing the Beta release of Dataproc Component Gateway , which provides secure access to web endpoints for Dataproc default and optional components.
April 27, 2020
Feature
Dataproc on GKE version 1.4.27-beta is available with minor fixes.
April 24, 2020
Feature
Image 1.5
Delta Lake version is upgraded to 0.5.0 release. Delta Lake Hive Connector 0.1.0 is also added to the 1.5 image.
Feature
Customers can now adjust the amount of time the Dataproc startup script will wait for Presto Coordinator service to start before deciding that their startup has succeeded. This is set via dataproc:startup.component.service-binding-timeout.presto-coordinator property and takes a value in seconds. The maximum respected value is 1800 (30 minutes).
Change
New sub-minor image versions: 1.2.96-debian9, 1.3.56-debian9, 1.4.27-debian9, 1.3.56-debian10, 1.4.27-debian10, 1.5.2-debian10, 1.3.56-ubuntu18, 1.4.27-ubuntu18, 1.5.2-ubuntu18
Change
Image 1.5
Cloud Storage connector upgraded to version 2.1.2 (for more information, review the change notes in the GitHub repository)
Fixed
Image 1.5
Notebook bug fixes: fixed a bug in Zeppelin and Jupyter that resulted in a failure to render images when using Component Gateway. Also fixed a Jupyter Notebooks bug that caused notebook downloads to fail .
April 20, 2020
Change
Dataproc is now available in the us-west4 region (Las Vegas).
April 17, 2020
Feature
Announcing the Beta release of Dataproc on Google Kubernetes Engine . Customers can now create Dataproc on GKE clusters to run Spark jobs on Kubernetes via the Dataproc jobs API.
April 15, 2020
Feature
Image 1.5
Presto now includes two default catalogs:
bigquery pointing to the datasets of the cluster's project
bigquery_public_data pointing to the public datasets
Feature
Image 1.5
Jupyter on Dataproc now supports exporting notebooks as PDFs.
Feature
Image 1.3, 1.4 and 1.5
Added Component Gateway support for Dataproc clusters secured with Kerberos.
Change
Image 1.5
Updated Presto to version 331 .
Change
Image 1.3 and 1.4
Debian 10 images will become default images for 1.3 and 1.4 image tracks and Debian 9 images will not be released for these tracks anymore after June 30, 2020.
Change
New sub-minor versions of Dataproc images: 1.2.95-debian9, 1.3.55-debian9, 1.4.26-debian9, 1.3.55-debian10, 1.4.26-debian10, 1.5.1-debian10, 1.3.55-ubuntu18, 1.4.26-ubuntu18, 1.5.1-ubuntu18.
Change
Created cloud-sql-proxy log file for the Cloud SQL Proxy initialization action and for Dataproc clusters with Ranger that use Cloud SQL Proxy.
Fixed
Image 1.3, 1.4 and 1.5
Fixed a bug where Jupyter was unable to read and write notebooks stored in Cloud Storage buckets with CMEK enabled.
Fixed
Images 1.4 and 1.5
SPARK-29080 : Support R file extension case-insensitively when submitting Spark R jobs.
Fixed
Image 1.3, 1.4 and 1.5
HIVE-17275 : Auto-merge fails on writes of UNION ALL output to ORC file with dynamic partitioning.
April 03, 2020
Feature
Added Presto and SparkR job type support to Dataproc Workflows .
Fixed
Fixed an Auto Zone Placement bug that incorrectly returned INVALID_ARGUMENT errors as INTERNAL errors, and didn't propagate these error messages to the user.
April 01, 2020
Feature
Announcing the General Availability (GA) release of Dataproc Presto job type , which can be submitted to a cluster using the gcloud dataproc jobs submit presto command. Note: The Dataproc Presto Optional Component must be enabled when the cluster is created to submit a Presto job to the cluster.
March 25, 2020
Feature
Dataproc clusters can now be created on the GKE platform by setting the GkeClusterConfig instead of the GceClusterConfig via the Beta API. This feature allows jobs to be submitted that will run on the Kubernetes cluster.
Feature
Announcing the Beta release of Dataproc - Ranger Top-Level Component and
Dataproc - Solr Top-Level Component .
Feature
Added alphabetical sort order to Workflow Templates List methods.
Feature
Added pagination support to Clusters List methods to provide functionality to the pageSize parameter, which is a part of the API. This feature allows users to specify a page size to receive paginated data in the response. The default page size is 200 and the max page size is 1000.
Feature
Announcing the General Availability (GA) release of Dataproc - Presto Top-Level Component .
Feature
Announcing the General Availability (GA)
release of Dataproc 1.5 images .
Change
Images 1.2 and 1.4
Dataproc 1.4 will be the default image version after April 31, 2020.
Dataproc 1.2 will have no further releases after June 30, 2020.
Change
New sub-minor versions of Dataproc images: 1.2.94-debian9, 1.3.54-debian9, 1.4.25-debian9, 1.5.0-debian10, 1.3.54-ubuntu18, 1.4.25-ubuntu18, and 1.5.0-ubuntu18
Change
Image 1.5
Upgraded the Cloud Storage connector to version 2.1.1 .
Fixed
Images 1.3, 1.4, and 1.5
Fixed HDFS UI in the Component Gateway on HA clusters
Fixed
Fixed issue where Jupyter hangs when loading a directory containing many large files. This also improves responsiveness when listing directories.
March 18, 2020
Change
Added the following flag to the gcloud dataproc clusters update command:
--num-secondary-workers
Deprecated
The following flag to gcloud dataproc clusters update has been deprecated:
--num-preemptible-workers
See the related change, above, for the new flag to use in place of this deprecated flag.
March 17, 2020
Feature
Added a mapreduce.jobhistory.always-scan-user-dir cluster property that enables the MapReduce job history server to read the history files (recommended when writing history files to Cloud Storage). The default is true .
Feature
Added support for n2- , c2- , e2- , n2d- , and m2- machine types when using
Auto Zone Placement .
Previously, users could only specify n1- or custom- machine types when using
Auto Zone Placement.
Feature
Added a dataproc:job.history.to-gcs.enabled cluster property that allows persisting MapReduce and Spark history files to the Dataproc temp bucket (default: true for image versions 1.5+). bucket. This property defaults to true for image versions 1.5 and up. Users can overwrite the locations of job history file persistence through the following properties:
mapreduce.jobhistory.done-dir
mapreduce.jobhistory.intermediate-done-dir * spark.eventLog.dir
spark.history.fs.logDirectory
Feature
Customers can now enable the Cloud Profiler when submitting a Dataproc job by setting the
cloud.profiler.enable property. To use profiling, customers must enable the Cloud Profiler API for their
project and create the cluster with --scopes=cloud-platform . The following profiling properties can also be set
when submitting a Dataproc job:
cloud.profiler.name : to collect profiler data under the
specified name. If not specified, it defaults to the job UUID.
cloud.profiler.service.version : to compare profiler information from different job runs. If not specified, defaults to
the job UUID.
Change
Image 1.4, 1.5 preview
Added ARROW_PRE_0_15_IPC_FORMAT=1 for spark-env for pyarrow upgrade from 0.13 to 0.15.
Change
New sub-minor versions of Dataproc images: 1.2.93-debian9, 1.3.53-debian9, 1.4.24-debian9, 1.5.0-RC9-debian10, 1.3.53-ubuntu18, 1.4.24-ubuntu18, and 1.5.0-RC9-ubuntu18
Change
Image 1.5 preview
Preinstalled additional Python packages and Jupyter[Lab] extensions to
align Jupyter notebook environment with AI Platforms Notebooks when
Jupyter optional component is enabled.
Upgraded Druid version to 0.17.0
Change
Image 1.2, 1.3, 1.4
Upgraded HBase to 1.3.6
Change
Cluster list methods now return results in lexical order.
Change
Normalized custom image URLs to a full URL, for example: https://www.googleapis.com/compute/v1/projects/foo-project/global/images/foo-image . The cluster creation API will continue to accept relative names, such as
projects/foo-project/global/images/foo-image or foo-image (see Dataproc API doesn't return imageUri in a consistent format ).
Fixed
Image 1.3, 1.4, 1.5 preview
Fixed YARN container log links in Component Gateway
March 16, 2020
Feature
Announcing the General Availability (GA) release
of Dataproc minimum CPU platform .
March 10, 2020
Change
Added the following flags to gcloud dataproc clusters create and gcloud dataproc workflow-templates set-managed-cluster commands:
--num-secondary-workers
--num-secondary-worker-local-ssds
--secondary-worker-boot-disk-size
--secondary-worker-boot-disk-type
--secondary-worker-accelerator
Deprecated
The following flags to gcloud dataproc clusters create and gcloud dataproc workflow-templates set-managed-cluster commands have been deprecated:
--num-preemptible-workers
--num-preemptible-worker-local-ssds
--preemptible-worker-boot-disk-size
--preemptible-worker-boot-disk-type
--preemptible-worker-accelerator
See the related change, above, for the new flags to use in place of these deprecated flags.
March 03, 2020
Feature
Added a dataproc:yarn.log-aggregation.enabled cluster property that allows turning on YARN log aggregation to a Dataproc temporary bucket (default: true for image versions 1.5+). Users can also set the location of aggregated YARN logs by overwriting the yarn.nodemanager.remote-app-log-dir YARN property.
Change
1.5 preview image:
Upgraded the Cloud Storage connector to version 2.0.1.
Change
New sub-minor versions of Dataproc images: 1.2.92-debian9, 1.3.52-debian9, 1.4.23-debian9, 1.5.0-RC8-debian10, 1.3.52-ubuntu18, 1.4.23-ubuntu18, 1.5.0-RC8-ubuntu18
Change
Changed the staging bucket naming scheme for new buckets from dataproc-<UUID>-<REGION> to dataproc-staging-<REGION>-<PROJECT_NUMBER>-<RANDOM_STRING> .
Change
In addition to the staging bucket , Dataproc now creates a temporary bucket for storing feature-related data with a 90-day retention period per project per region. The bucket name will be of the following form: dataproc-temp-<REGION>-<PROJECT_NUMBER>-<RANDOM_STRING> .
Fixed
1.3, 1.4, and 1.5 preview images:
Fixed a bug where Component Gateway pages added an additional banner on each page load in some browsers.
February 25, 2020
Feature
Added support for attaching GPUs to preemptible workers.
Feature
Component Gateway now supports
VPC Service Controls .
Change
Add OS-family image version aliases: 1.0-debian , 1.1-debian , 1.2-debian ,
1.3-debian , 1.3-ubuntu , 1.4-debian , 1.4-ubuntu , preview-debian ,
preview-ubuntu . Users can now reference these aliases: Example:
gcloud dataproc clusters create $CLUSTER_NAME --image-version=1.4-debian
Change
Increase Dataproc agent buffer size for streaming driver output to Cloud Storage from
60KB to 8MB. This significantly increases streaming throughput: from
~200KBps to ~7MBps. However, it also increases the memory footprint for each
job in the Dataproc agent from ~100KB to ~10MB.
Change
New sub-minor versions of Dataproc images: 1.2.91-debian9, 1.3.51-debian9, 1.4.22-debian9,
1.5.0-RC7-debian10, 1.3.51-ubuntu18, 1.4.22-ubuntu18, 1.5.0-RC7-ubuntu18
Breaking
The Compute Engine API call from the Dataproc backend to check the API-specific quota limit is now enforced. The default Compute Engine API quota limit should be sufficient for most
projects. If your project is experiencing Compute Engine API throttling, you can request a higher quota . If your project requires QPS that is higher than the upper quota limit, consider splitting your project into smaller projects.
Change
Image 1.2, 1.3, & 1.4:
Upgrade Oozie to 4.3.1 and backport
OOZIE-3112 .
Change
Image 1.3:
Added BigQuery magics for Python2 and PySpark kernels to Dataproc
Jupyter notebooks . You can now use the BigQuery Python client library and Pandas in a Jupyter notebook to visualize data in the BigQuery table.The BigQuery client library provides a %%bigquery cell magic, which runs a SQL query and returns the results as a Pandas DataFrame (see Visualizing BigQuery data in a Jupyter notebook
https://cloud.google.com/bigquery/docs/visualize-jupyter ). Example:
%%bigquer SELECT * FROM bigquery-public-data.samples.natality LIMIT 1
Upgrade Zeppelin to 0.8.1 version
Change
Images 1.3, 1.4, & 1.5:
Backport HIVE-16958 .
Change
Added support for parameterizing numInstances field in Workflow Templates .
Change
Images 1.4 & 1.5 :
Upgrade Spark to
2.4.5 version
Change
Image 1.4 & 1.5:
Added BigQuery magics for Python3 and PySpark kernels to Dataproc
Jupyter notebooks . You can now use the BigQuery Python client library and Pandas in a Jupyter notebook to visualize data in the BigQuery table.The BigQuery client library provides a %%bigquery cell magic, which runs a SQL query and returns the results as a Pandas DataFrame (see Visualizing BigQuery data in a Jupyter notebook
https://cloud.google.com/bigquery/docs/visualize-jupyter ). Example:
%%bigquer SELECT * FROM `bigquery-public-data.samples.natality` LIMIT 1
Fixed
Fixed the bug that causing update cluster label operations failed on
clusters using CMEK on PD.
Fixed
Backport YARN-9011 to all
1.2, 1.3, 1.4, and 1.5 images. This fixes a race condition in the resource
manager that would sometimes cause containers to be killed while performing
a
graceful decommission .
Fixed
Image 1.3 & 1.4:
ZEPPELIN-4168 :
fixed downloading of Maven dependencies in Zeppelin
Fixed
Fix "YARN available memory" metric when using YARN's FairScheduler.
Importantly, this ensures autoscaling works with the FairScheduler.
February 24, 2020
Feature
Dataproc is now available in the us-west3 region (Salt Lake City).
February 03, 2020
Feature
You can adjust the amount of time the Dataproc startup script will wait for services (currently hive-metastore, hive-server2, hadoop-hdfs-namenode) to bind to ports before deciding that their startup has succeeded. These delays are set via the dataproc:startup.component.service-binding-timeout.hive-metastore , dataproc:startup.component.service-binding-timeout.hive-server2 , and dataproc:startup.component.service-binding-timeout.hadoop-hdfs-namenode cluster properties , which take a value in seconds. The maximum recognized value is 1800 seconds (30 minutes).
Change
1.5 preview image:
Add BigQuery connector to Presto SQL
Change
New sub-minor versions of Dataproc images: 1.2.90-debian9, 1.3.50-debian9, 1.4.21-debian9, 1.5.0-RC6-debian10, 1.3.50-ubuntu18, 1.4.21-ubuntu18, 1.5.0-RC6-ubuntu18.
January 31, 2020
Feature
Announcing the General Availability (GA) release
of Dataproc Scheduled Deletion .
This feature provides options to delete a cluster:
at a specified future time
after a specified cluster idle period
after a specified period that starts from the time of submission of the cluster creation request
January 24, 2020
Feature
Dataproc is now available in the asia-northeast3 region (Seoul).
January 20, 2020
Change
New sub-minor versions of Dataproc images: 1.2.89-debian9, 1.3.49-debian9, 1.4.20-debian9,1.5.0-RC5-debian10, 1.3.49-ubuntu18, 1.4.20-ubuntu18, 1.5.0-RC5-ubuntu18.
Feature
Promoted Zonal Reservations to General Availability (GA) .
Breaking
Breaking Change: Reduced default spark.executor.memory by 1MB from 9310 to 9309 on n1-highmem-4 workers to improve YARN bin packing.
Change
1.5 preview image updates:
Upgraded Apache Druid to 0.16.1 version
Upgraded Presto SQL to 326 version
Upgraded Apache Oozie to 5.2.0 version
Added Apache Atlas 1.2.0
Set spark.ui.port property to 0 to run Spark UI on random port -
removes limit on max number of concurrent Spark jobs (16 by default).
Previous behavior can be restored by setting spark.ui.port=4040
property
Set yarn.nodemanager.address property to 0.0.0.0:8026 to run YARN Node Manager on the same port - if a Node Manager process restarts (e.g. when a VM is preempted), it shows up as the same node in YARN. Otherwise, you would see both a LOST node for the old port, as well as a new RUNNING node with the new port
Set hive.fetch.task.conversion property to none to disable execution of the SELECT * WHERE conditions LIMIT x queries in the job driver
Set mapreduce.jobhistory.always-scan-user-dir property to true to enable better support of history files stored on Cloud Storage.
Set mapreduce.jobhistory.recovery.store.class property to org.apache.hadoop.mapreduce.v2.hs.HistoryServerLeveldbStateStoreService to reduce HDFS usage
Configured default Spark fair scheduling pool in the /etc/spark/conf/fairscheduler.xml configuration file
Added R kernel to Jupyter Optional Component
Breaking
Breaking Change: Modified gcloud beta clusters create command, replacing --reservation-label with --reservation , which accepts the name of the reservation when --reservation-affinity is specific , matching gcloud compute instances create .
Change
1.2 – 1.4 image updates:
* Upgraded Apache Solr to 6.6.6 version
Breaking
Breaking Change: gcloud command-line tool dataproc commands now require the --region flag on each invocation or dataproc/region config property to be set. Set your default Dataproc region via the gcloud config set dataproc/region us-central1
command.
January 10, 2020
Change
New sub-minor versions of Dataproc images: 1.2.88-debian9, 1.3.48-debian9, 1.4.19-debian9, 1.5.0-RC4-debian10, 1.3.48-ubuntu18, 1.4.19-ubuntu18, 1.5.0-RC4-ubuntu18.
Change
Component Gateway UIs now include a banner showing the project and cluster name being accessed and a button to sign out of Component Gateway for the cluster.
December 20, 2019
Fixed
Fixed a bug in UpdateCluster quota validation logic impacting the use of zonal reservations where the resource requirements of new instances being added in an update failed to consider the capacity of unused zonal reservations, and thus would incorrectly return an "insufficient quota" error if the new instances could not fit in the unused quota outside of zonal reservations.
Feature
Added additional information into Autoscaler recommendations in Stackdriver logging. In particular each recommendation now includes 1) the minimum and maximum worker counts configured in the autoscaling policy, 2) the graceful decommission timeout (for SCALE_DOWN operations), and 3) additional context into why the autoscaler couldn't add or remove more nodes. For example, it will indicate if it could not scale up further due to available regional or global quotas in the project (SCALING_CAPPED_DUE_TO_LACK_OF_QUOTA).
Change
New sub-minor versions of Cloud Dataproc images:: 1.2.87-debian9, 1.3.47-debian9, 1.4.18-debian9, 1.5.0-RC3-debian10, 1.3.47-ubuntu18, 1.4.18-ubuntu18, 1.5.0-RC3-ubuntu18
Change
1.5 preview image updates
Upgraded Debian OS to Debian 10 (buster)
Upgraded Apache Atlas to version 1.2.0
Upgraded Apache Solr to version 6.6.6
Upgraded Apache Knox to version 1.3.0
Backported SPARK-28921 : Spark jobs failing on latest versions of Kubernetes (1.15.3, 1.14.6, 1,13.10, 1.12.10, 1.11.10)
Enabled HBase optional component in Dataproc beta.
Installed Delta Lake 0.4.0 and Apache Iceberg 0.7.0 jars
Updated Jupyter Python 3 kernel to add SparkMonitor 0.11 support. To create SparkContext, user can import SparkContext and create SparkContext using an auto-created conf object using sc=SparkContext.getOrCreate(conf=conf) . To create SparkSession, user can import SparkSession and use SparkSession.builder.appName("Any Name").getOrCreate()
Change
New images now install the latest Linux kernel version available in Debian backports repository
through
linux-image-amd64
meta package.
Change
Disabled noisy Jersey logging in the YARN Timeline Server.
December 06, 2019
Fixed
Fixed a bug in using the JupyterLab UI through the Component Gateway, where an error dialog would pop up after 5 minutes saying "Failed to fetch".
Feature
Expose Presto UI in under
component gateway
when Presto Dataproc Optional Component is enabled.
Change
New sub-minor versions of Cloud Dataproc images: 1.2.86-debian9, 1.3.46-debian9, 1.4.17-debian9,
1.5.0-RC2-debian9, 1.3.46-ubuntu18, 1.4.17-ubuntu18, 1.5.0-RC2-ubuntu18
Change
Added a warning when clusters are created with component gateway and kerberos
as they are not currently supported together
Change
1.3 image update - Upgraded Hive to version 2.3.6
Change
1.4 image update - Fixed a bug in the Jupyter component that prevented creating text files using the Jupyter and JupyterLab UIs
Change
1.5 preview image update:
Updated Anaconda to
version 2019.10
Updated Miniconda to
version 4.7.12.1
Upgrade Hue to
version 4.5.0
Upgraded Scala to version 2.12.10
Upgrade Hadoop to version 2.10.0
Unset java.net.preferIPv4Stack=true property in Hadoop
November 26, 2019
Issue
1.3 and 1.4 images:
Cloud Dataproc images in the 1.3 and 1.4 minor version tracks are affected by an issue that causes the YARN Timeline Server to excessively log without proper rotation. This can specifically impact longer running Clusters and Clusters with high traffic of YARN applications (Dataproc Jobs).
There is a script that can be run as an initialization action or on live Master Nodes to mitigate this issue on new and running Clusters.
November 15, 2019
Feature
Allow creation of Dataproc master and worker VMs with Intel Optane DC Persistent memory using dataproc:dataproc.alpha.master.nvdimm.size.gb and dataproc:dataproc.alpha.master.nvdimm.size.gb properties. Note: Optane VMs can only be created in zones with only n1-highmem-96-aep machine type (such as us-central1-f ).
Support updating Cloud Storage connector version by setting the GCS_CONNECTOR_VERSION metadata key. For example, --metadata GCS_CONNECTOR_VERSION=2.0.0 .
Breaking
Breaking Changes:
Dataproc will no longer accept requests to create new clusters using Debian 8 images. Existing clusters that are using Debian 8 can still be used and scaled.
The alpha version of the Kerberos optional component option has been removed from the v1beta2 API. To use Kerberos, please configure it via the SecurityConfig message instead.
Disallow setting or overriding goog-dataproc-* labels when creating or updating clusters. All attempts to set goog-dataproc-* labels on creation will be ignored. Any existing custom goog-dataproc-* labels on running clusters will be removed if cluster labels are updated, and attempts to add new custom goog-dataproc-* labels to existing clusters will be ignored.
Reset autoscaling if the same or a new autoscaling policy is attached to a cluster. E.g. through gcloud dataproc clusters update --autoscaling-policy=<policy-name> . Note that resetting autoscaling does not change the cluster's status. Autoscaling will only run while the cluster's status is RUNNING or UPDATING , and does not work if the cluster is in ERROR . In addition, if the cluster was previously resizing ( UPDATING ), the autoscaler will not be able to scale the cluster until the previous update operation has completed.
Also fixes an issue where autoscaling would not reset correctly if autoscaling was disabled then re-enabled with the same within 30 seconds. Running gcloud dataproc clusters update --disable-autoscaling and then gcloud dataproc clusters update --autoscaling-policy=<same-policy> should now correctly reset autoscaling regardless of how long autoscaling was disabled.
Change
New Dataproc image versions : 1.2.85-debian9, 1.3.45-debian9, 1.4.16-debian9, 1.3.45-ubuntu18, 1.4.16-ubuntu18, and Preview.
Note that Dataproc 1.1 will have no further releases.
Update Conscrypt library to 1.4.2
Failed Jobs error messages now include a link to the logs in the Cloud Console rather than to the Google Cloud Storage directory containing them.
1.3 image
Upgrade Spark to 2.3.4 .
1.4 image
Upgrade Hive to 2.3.6 .
Apply SPARK-28921 to prevent Spark jobs from failing on newer versions of Kubernetes (1.15.3, 1.14.6, 1,13.10, 1.12.10, 1.11.10)
Preview image
Hadoop 2.10
Spark 2.4.4
Hive 2.3.6
Pig 0.17.0
Tez 0.9.2
Cloud Storage Connector 2.0.0
Python 3.7
Scala 2.12.0
Anaconda3 5.3.0
Druid 0.16
Hive Webhcat 2.3.2
Jupyter 4.5.0
Kerberos 1.15.1
Presto 324 (prestosql)
Zeppelin 0.9.0-SNAPSHOT
Zookeeper 3.4.13
Fixed
Fixed race condition where deleting a cluster shortly after updating it would not delete all of the cluster's VMs
Allow compute resource names with an Alpha API version. For example: https://compute.googleapis.com/compute/alpha/projects/my-project/global/networks/my-network .
This allows gcloud alpha dataproc clusters create <cluster-name> --network=my-network to succeed, since gcloud sets the compute API version to the same as the gcloud command track.
October 31, 2019
Feature
Announcing the General Availability (GA) release of SparkR jobs on Cloud Dataproc . This feature allows you to submit SparkR jobs on a Cloud Dataproc cluster using the gcloud command-line tool, the Google Cloud Platform Console, or the Cloud Dataproc API.
October 04, 2019
Feature
Announcing the General Availability (GA) release of Cloud Dataproc Autoscaling . This feature automatically resizes clusters to meet workload demands.
September 26, 2019
Change
New sub-minor versions of Cloud Dataproc images: 1.1.121-debian9, 1.2.84-debian9, 1.3.44-debian9, 1.4.15-debian9, 1.3.44-ubuntu18, 1.4.15-ubuntu18.
Image 1.4
Upgraded Spark to 2.4.4.
Fixed
Fixed an issue caused by expired Bigtop APT repo GPG key.
September 24, 2019
Feature
Announcing the General Availability (GA) release of Cloud Dataproc Compute Engine Accelerator Support , which allows you to attach graphics processing units (GPUs) to a Cloud Dataproc cluster.
September 20, 2019
Feature
Added support for specifying images by image family URI when creating Dataproc clusters.
September 03, 2019
Change
New sub-minor versions of Cloud Dataproc images: 1.1.120-debian9, 1.2.83-debian9, 1.3.43-debian9, 1.4.14-debian9, 1.3.43-ubuntu18, 1.4.14-ubuntu18.
Druid Optional Component can now be configured via druid-broker , druid-overlord , druid-coordinator , druid-historical , and druid-middlemanager property prefixes.
Image 1.3
Applied patch for YARN-6629 to Hadoop.
Image 1.4
Applied patch for YARN-6629 to Hadoop.
August 23, 2019
Change
New sub-minor versions of Cloud Dataproc images: 1.1.119-debian9, 1.2.82-debian9, 1.3.42-debian9, 1.4.13-debian9, 1.3.42-ubuntu18, 1.4.13-ubuntu18.
Image 1.4
Upgraded Zeppelin to 0.8.1 with fix for compatibility issue with Spark 2.4.
Fixed
Fixed autoscaling issue where autoscaler rounded down the number of nodes to add if scaleUpFactor * pendingMemory was a fractional value. Now, the autoscaler correctly rounds up to ensure that the cluster is large enough to allocate the required percentage of pending memory. For example, previously, with scaleUpFactor = 1.0 and enough pending memory for half a node, the autoscaler did not allocate a new node. Now, the autoscaler will correctly allocate a new node so that the cluster is sufficiently large to allocate all pending YARN containers.
Fixed autoscaling Stackdriver logging that reported the wrong jsonPayload type.
Fixed an issue where creations of High Availability clusters with Kerberos enabled using Ubuntu images failed.
Image 1.4
Fixed an issue where Spark jobs failed on 1.4 clusters with Kerberos enabled.
Feature
Image 1.4:
The property dataproc:jupyter.hub.enabled can now be used to enable jupyterhub-singleuser (version 1.0.0) when using the JUPYTER optional component. This is intended to be used with DataprocSpawner . Properties dataproc:jupyter.hub.env and dataproc:jupyter.hub.args are populated by the spawner.
August 09, 2019
Change
New sub-minor versions of Cloud Dataproc images: 1.1.118-debian9, 1.2.81-debian9, 1.3.41-debian9, 1.4.12-debian9, 1.3.41-ubuntu18, 1.4.12-ubuntu18.
Image 1.3
Applied patch for MAPREDUCE-7101 to Hadoop.
Upgraded Hive to 2.3.5.
Image 1.4
Applied patch for MAPREDUCE-7101 to Hadoop.
Upgraded Hive to 2.3.5.
Added Sqoop version 1.4.6.
Fixed
Image 1.4
Reverted Zeppelin to version 0.8.0 due to an incompatibility between Spark 2.4 and Zeppelin 0.8.1.
July 12, 2019
Change
New sub-minor versions of Cloud Dataproc images: 1.1.117-debian9, 1.2.80-debian9, 1.3.40-debian9, 1.4.11-debian9, 1.3.40-ubuntu18, 1.4.11-ubuntu18.
July 02, 2019
Change
New sub-minor versions of Cloud Dataproc images: 1.1.116-debian9, 1.2.79-debian9, 1.3.39-debian9, 1.4.10-debian9, 1.3.39-ubuntu18, 1.4.10-ubuntu18.
June 28, 2019
Feature
Announcing the General Availability (GA) release of Hadoop Secure Mode via Kerberos . This feature provides multi-tenancy via user authentication, isolation, and encryption inside a Cloud Dataproc cluster.
June 20, 2019
Fixed
Fixed an issue in which a cluster entered an ERROR state if Cloud Dataproc failed during validation of HDFS capacity when scaling down primary workers.
Fixed issue in which Spark jobs failed if fs.defaultFS was passed at job submission and the directory /user/spark/eventlog did not exist in the specified FileSystem. The spark event log directory now defaults to hdfs:///user/spark/eventlog without regard to the default FileSystem. Users can override this behavior by setting the properties spark.eventLog.dir and spark.history.fs.logDirectory when creating a cluster or submitting a job.
Fixed an issue in which fsck fails on Kerberized clusters , which can defeat cluster downscaling.
YARN node labels are now disallowed on autoscaling clusters ( yarn:yarn.node-labels.enabled ). Non-exclusive node labels are not compatible with autoscaling since they cause YARN to incorrectly report cluster utilization metrics (including pending memory). See YARN-9088
Fixed a rare deadlock in agent that stops sending HDFS/YARN metrics to Stackdriver.
Change
New major and sub-minor versions of Cloud Dataproc images: 1.1.115-debian9, 1.2.78-debian9, 1.3.38-debian9, 1.4.9-debian9, 1.3.38-ubuntu18, 1.4.9-ubuntu18
Image 1.1:
Upgraded Hadoop to 2.7.7
June 18, 2019
Fixed
Image 1.2, 1.3, and 1.4:
Fixed bug where agent would fail to mark jobs as done and complete diagnose requests when Resource Manager requests are slow.
Feature
Added support for the Tez UI in Component Gateway .
Change
New major and sub-minor versions of Cloud Dataproc images: 1.1.114-debian9, 1.2.77-debian9, 1.3.37-debian9, 1.4.8-debian9, 1.3.37-ubuntu18, 1.4.8-ubuntu18
Added a warning when using the alpha version of Kerberos configuration. Kerberos is now configured on a Dataproc cluster via the KerberosConfig message instead of Dataproc properties and optional components. Create cluster requests that use the Component+Properties mechanism in the clusters API to configure Kerberos will now generate a warning to use KerberosConfig instead.
Clusters created with small PD Standard disks will no longer trigger a warning during creation if they also have local SSDs specified on the disk configuration.
Audit requests and responses for the Cloud Dataproc Autoscaling Policies API. Previously, API methods were audited, but not the actual request and response bodies.
Image 1.3 and 1.4:
Cloud Storage connector upgraded to 1.9.17
Image 1.3:
Upgraded Tez to 0.9.2
Image 1.4:
Upgraded Spark to 2.4.3
Upgraded Flink to 1.6.4
Upgraded Zeppelin to 0.8.1
June 11, 2019
Fixed
Fixed the following Microarchitectural Data Sampling CVEs in all image versions:
CVE-2018-12126
CVE-2018-12127
CVE-2018-12130
CVE-2019-11091
Image 1.2:
Backported fix for SPARK-21444 .
Change
New major and sub-minor versions of Cloud Dataproc images: 1.1.113-debian9, 1.2.76-debian9, 1.3.36-debian9, 1.4.7-debian9, 1.3.36-ubuntu18, 1.4.7-ubuntu18
Failed autoscaling operations now appear with error messages in logs. Previously, log included only the failing operation ID, which user was expected to use to lookup the error message.
Image 1.4:
Upgraded Tez to 0.9.2.
Image 1.3:
The zstandard codec is now supported in Hadoop.
Feature
Added support for the Tez UI in Component Gateway .
June 01, 2019
Issue
June 2019 Release Note Bulletin
This bulletin applies if you override the defaultFS at job-submission time for Spark jobs.
An inadvertent change in behavior has been identified for determining the location of the Spark eventlog directory when setting spark.hadoop.fs.defaultFS to any setting other than HDFS at Spark job-submission time in the following Cloud Dataproc June 2019 image versions:
1.1.113-debian9, 1.2.76-debian9, 1.3.36-debian9, 1.4.7-debian9, 1.3.36-ubuntu18, 1.4.7-ubuntu18
1.1.114-debian9, 1.2.77-debian9, 1.3.37-debian9, 1.4.8-debian9, 1.3.37-ubuntu18, 1.4.8-ubuntu18
Although the /user/spark/eventlog directory normally stays in HDFS, it began referring to the specified filesystem from spark.hadoop.fs.defaultFS in these image versions, and can result in the failure of Spark jobs with an error similar to "java.io.FileNotFoundException: File not found : /user/spark/eventlog".
Use any of the following strategies as a workaround:
Run the following command manually before submitting jobs:
hdfs dfs -mkdir -p <filesystem base/bucket>/user/spark/eventlog
Add the following Spark properties to Spark jobs to override defaultFS :
spark.eventLog.dir=hdfs:///user/spark/eventlog,spark.history.fs.logDirectory=hdfs:///user/spark/eventlog
Temporarily pin to the immediately prior image version numbers until image versions newer than those listed above are available.
May 16, 2019
Change
New major and sub-minor versions of Cloud Dataproc images: 1.1.111-debian9, 1.2.74-debian9, 1.3.34-debian9, 1.4.5-debian9, 1.3.34-ubuntu18, 1.4.5-ubuntu18
Image 1.1:
Parallelized Hive.copyFiles method in Spark's fork of Hive.
Resolved scheme-less Spark event log directory relative to default filesystem.
Image 1.4:
Support zstandard in Hadoop
May 09, 2019
Fixed
Fixed a rare issue where a managed instance group could be leaked if a delete cluster request is processed while a labels update is in progress for a cluster that uses preemptible VMs.
Change
New major and sub-minor versions of Cloud Dataproc images: 1.0.119-debian9, 1.1.110-debian9, 1.2.73-debian9, 1.3.33-debian9, 1.4.4-debian9, 1.3.33-ubuntu18, 1.4.4-ubuntu18
This is the final release of Dataproc 1.0 image.
Image 1.3 and 1.4:
Allow remapping Jupyter and Zeppelin Optional Component ports via dataproc:{jupyter,zeppelin}.port properties
Image 1.4:
Upgrade Spark to 2.4.2
May 06, 2019
Fixed
Image 1.2, 1.3, and 1.4:
Applied patch for SPARK-27523 .
Image 1.3 and 1.4:
Fixed issue with Component Gateway that prevented renaming Jupyter notebooks.
Change
New major and sub-minor versions of Cloud Dataproc images: 1.0.118-debian9, 1.1.109-debian9, 1.2.72-debian9, 1.3.32-debian9, 1.4.3-debian9, 1.3.32-ubuntu18, 1.4.3-ubuntu18
Image 1.3:
Upgraded Spark to 2.3.3.
April 29, 2019
Fixed
Fixed issue where the dataproc.googleapis.com/cluster/job/running_count metric was not consistent with the active running jobs count on the Cloud Dataproc Job page in Google Cloud Platform console.
Fixed an issue in which the HDFS Datanode blocks and MapReduce and Spark local directories on clusters with local SSDs were stored on both the cluster's boot disk and on the local SSDs. They are now stored only on the local SSDs.
Change
New major and sub-minor versions of Cloud Dataproc images: 1.0.117-debian9, 1.1.108-debian9, 1.2.71-debian9, 1.3.31-debian9, 1.4.2-debian9, 1.3.31-ubuntu18, 1.4.2-ubuntu18
Image 1.2:
Parallelized the Hive.copyFiles method in Spark's fork of Hive.
Image 1.4:
Upgraded Spark to 2.4.1.
Included S3 and Azure Storage connectors in Spark 2.4 libraries.
Changed compute root API URL from www.googleapis.com to https://compute.googleapis.com due to a change in compute client.
Allowed updating clusters after the expiration of its custom image. Previously, after the expiration of a cluster's custom image, the cluster could not be resized manually or through autoscaling. Now, clusters created with valid custom images can be resized indefinitely.
Disallowed using the dataproc:am.primary_only cluster property with autoscaling since this property, which restricts the scheduling of app masters to primary workers, uses YARN Node Labels . Non-exclusive node labels are not compatible with autoscaling since they cause YARN to incorrectly report cluster utilization metrics (including pending memory). See YARN-9088 Note: Hadoop MapReduce and Spark jobs in client mode, which is the Cloud Dataproc default, are resilient to app master failures (scheduling app masters on primary workers is not necessary in client mode).
Feature
Announcing the General Availability (GA) release of Ubuntu 18.04 LTS-based 1.3 and 1.4 images .
April 26, 2019
Feature
Announcing the Beta release of Cloud Dataproc Job Logs in Stackdriver . Enable this feature to view, search, filter, and archive job driver and YARN container logs in Stackdriver Logging .
The dataproc:dataproc.logging.stackdriver.job.driver.enable=true service property can now be used to enable sending Job driver logs to Stackdriver. Logs will be sent to the Stackdriver "Cloud Dataproc Job" resource under the dataproc.job.driver log.
The dataproc:dataproc.logging.stackdriver.job.yarn.container.enable service property can now be used to enable sending YARN container logs to Stackdriver. Logs will be sent to the Stackdriver "Cloud Dataproc Job" resource under the dataproc.job.yarn.container log (instead of the "Cloud Dataproc Cluster" resource under the yarn-userlogs log).
Fixed
Fixed quota validation errors in which scaling down clusters with accelerators on primary workers failed with java.lang.IllegalArgumentException: occurrences cannot be negative .
Fixed an issue where the Tez UI failed to load.
Fixed a race condition on cluster startup in which a cluster accepted Hive jobs before the hive-server2 was available via beeline to run the jobs.
Fixed an issue where removing the yarn.nodemanager.local-dirs property from yarn-site.xml in a Kerberized cluster failed cluster creation.
Change
New sub-minor versions of Cloud Dataproc images - 1.0.116-debian9, 1.1.107-debian9, 1.2.70-debian9, 1.3.30-debian9, 1.4.1-debian9, 1.3.30-ubuntu18, 1.4.1-ubuntu18
Removed limit on concurrent number of running workflow templates per project.
Put Zookeeper Server in secure (Kerberos) mode if Kerberos is enabled on HA clusters .
The dataproc:jobs.file-backed-output.enable service property now configures Cloud Dataproc jobs to pipe their output to temporary files in the /var/log/google-dataproc-job directory.
Added cluster UUID in the description of Compute Engine instance groups created by Cloud Dataproc to be used as secondary identifier to classify whether a Google Compute Engine instance group manager is created by Cloud Dataproc.
Image 1.3 only:
Parallelized Hive.copyFiles method in the Spark fork of Hive.
April 18, 2019
Feature
Cloud Dataproc is now available in the asia-northeast2 region (Osaka).
April 05, 2019
Feature
The Cloud Dataproc Component Gateway (Alpha Release) feature can now be enabled from the Cloud Dataproc Create a cluster form on the Google Cloud Platform console. After enabling this feature, the Web Interfaces tab on the Cluster details form on the GCP console lists the Component Gateway links to the web interfaces of default and optional components installed on the cluster. Clicking on a link opens the web interface of the component running on the master node of the cluster in a local browser.
April 04, 2019
Feature
Initial Alpha release of Cloud Dataproc Enhanced Flexibility Mode . Enhanced Flexibility Mode can provide stability and scalability benefits by preserving stateful node data, such as mapreduce shuffle data, in HDFS. Enhanced Flexibility Mode can be used with clusters created with image version 1.4.x and later.
March 26, 2019
Feature
Announcing the Alpha release of Cloud Dataproc Component Gateway , which provides secure access to web endpoints for Cloud Dataproc core and optional components without relying on SSH tunnels or modifying firewall rules to allow inbound traffic (applies to clusters created with image version 1.3.29 and later).
Note: Currently, the Component Gateway feature is not available in the europe-west6 region (Zürich, Switzerland).
March 22, 2019
Feature
Announcing the General Availability (GA) release of Cloud Dataproc image version 1.4 .
Ubuntu 18.04 LTS-based 1.3 and 1.4 images are available for preview.
Announcing the Beta release of Cloud Dataproc Autoscaling . This feature automatically resizes clusters to meet workload demands.
Announcing the Beta release of the Cloud Dataproc Kerberos Component . This component enables Kerberos/Hadoop Secure Mode, providing user isolation and encryption inside a Cloud Dataproc cluster created with image version 1.3 and later.
Announcing the Alpha release of the Cloud Dataproc Druid Optional Component , which allows you to install Apache Druid on your Cloud Dataproc cluster when you create the cluster.
Announcing the Beta release of the Cloud Dataproc Zookeeper Optional Component , which allows you to install Apache Zookeeper on your Cloud Dataproc cluster when you create the cluster.
Change
New major and sub-minor versions of Cloud Dataproc images: 1.0.115-debian9, 1.1.106-debian9, 1.2.69-debian9, 1.3.29-debian9, 1.4.0-debian9, 1.3.29-ubuntu18, 1.4.0-ubuntu18
Image 1.4:
Installed PyArrow for Spark UDF to Pandas conversion (see PySpark Usage Guide for Pandas with Apache Arrow ).
Image 1.3 and 1.4:
Cloud Storage connector upgraded to version 1.9.16 .
Modified the Kerberos optional component parameter requirement: when cross realm trust is enabled, the admin server of the remote realm is optional.
March 12, 2019
Feature
Announcing the General Availability (GA) release of Cloud Dataproc Optional Components . This feature allows users to specify additional components to install when creating new Cloud Dataproc clusters (applies to clusters created with image version 1.3 and later).
March 11, 2019
Feature
Cloud Dataproc is now available in the europe-west6 region (Zürich, Switzerland).
March 08, 2019
Fixed
Fixed an issue in which the namenode occasionally prevented datanodes from registering correctly.
Change
New sub-minor versions of Cloud Dataproc images - 1.0.114-deb9, 1.1.105-deb9, 1.2.68-deb9, 1.3.28-deb9, 1.4.0-RC12-deb9
Image 1.3 and 1.4 preview
Cloud Storage connector upgraded to version 1.9.16 .
Image 1.4 preview
Added Spylon (Scala) kernel for Jupyter.
March 04, 2019
Fixed
Fixed regression in creating autoscaling clusters where dataproc:alpha.autoscaling.secondary.max_workers had to be greater than 0.
Change
New sub-minor versions of Cloud Dataproc images - 1.0.113-deb9, 1.1.104-deb9, 1.2.67-deb9, 1.3.27-deb9, 1.4.0-RC11-deb9
Image 1.0-1.2
YARN-6868 : Add test scope to certain entries in hadoop-yarn-server-resourcemanager pom.xml.
Image 1.0-1.4 preview
MAPREDUCE-7185 : Parallelize part files move in FileOutputCommitter.
Image 1.1-1.4 preview
Parallelized files move and deletion in Spark Driver during SQL queries execution:
HIVE-20395 : Parallelize files move in replaceFiles method.
Parallelize Hive.moveFile method.
Parallelize FileUtils.trashFilesUnderDir method.
Upgraded Zookeeper to 3.4.13 version.
Upgraded Hadoop LZO to 0.4.20 version.
Image 1.3
Added Solr 6.6.0
Upgraded Kafka to 1.1.1 version.
Upgraded the Cloud Storage connector to 1.9.15 version. Review the change notes in the GitHub repository for more information.
Image 1.4 preview
Upgraded Solr to 7.6.0 version.
Use 1TB sized PD-Standard for masters and primary workers by default to improve I/O performance.
Moved Cloud Storage connector to /usr/local/share/google/dataproc/lib directory.
Upgraded the Cloud Storage connector to 1.9.15 version. Review the change notes in the GitHub repository for more information.
February 26, 2019
Change
Due to the issue announced on February 22, 2019 , Cloud Dataproc image versions announced on February 14, 2019 ( 1.0.111-deb9, 1.1.102-deb9, 1.2.65-deb9, 1.3.25-deb9, 1.4.0-RC9-deb9 ) and the changes and fixes associated with those image versions are currently not available. The latest images versions available for cluster creation, and the changes and fixes associated with those image versions, are those announced on February 11, 2019 ( 1.0.110-deb9, 1.1.101-deb9, 1.2.64-deb9, 1.3.24-deb9, 1.4.0-RC8-deb9 ).
February 22, 2019
Issue
Cloud Dataproc images 1.3.25-deb9 and 1.4.0-RC9-deb9 contain Cloud Storage connector 1.9.13 that has a bug that could lead to a spike in Cloud Storage list requests. You can mitigate this issue by pinning the Dataproc image version to one of the previous releases (1.3.24-deb9, 1.4.0-RC8-deb9).
February 14, 2019
Change
New sub-minor versions of Cloud Dataproc images - 1.0.111-deb9, 1.1.102-deb9, 1.2.65-deb9, 1.3.25-deb9, 1.4.0-RC9-deb9
The yarn-site.xml yarn.resourcemanager.webapp.methods-allowed property now defaults to "GET,HEAD". This change restricts the HTTP methods that can be called on the YARN Resource Manager web UI (default port 8088) and REST APIs to GET and HEAD only, and disables job submission and modifications via the YARN REST API. You can override the default values and enable specific HTTP methods on port 8088 by setting the yarn.resourcemanager.webapp.methods-allowed property to one or more comma-separated HTTP method names when you create a cluster. An ALL value will allow all HTTP methods on the port.
Example: gcloud dataproc clusters create --properties='yarn:yarn.resourcemanager.webapp.methods allowed=GET,POST,DELETE'
Recommendation: If you set this property to allow non-default HTTP methods, make sure to configure firewall rules and other security settings to restrict access to port 8088 (see Cluster Web Interfaces→Avoid Security Vulnerabilities ).
Image 1.2 only:
Upgraded Spark to 2.2.3
HIVE-15208 : Query string is now HTML encoded for Web UI
Image 1.3 only:
Upgraded Flink to 1.5.6
The Cloud Storage connector has been upgraded to 1.9.13. Review the change notes in the GitHub repository for more information.
Image 1.4 preview only:
The cloud Storage connector has been upgraded to 1.9.13. Review the change notes in the GitHub repository for more information.
Used Python 3.6 instead of 3.7 as the default user Python version
Downgraded default Miniconda3 to 4.5.4
Downgraded Anaconda3 optional component to 5.2.0
Added Solr 6.6.0
HIVE-18786 : NPE in Hive windowing functions
Upgraded Zookeeper to 3.4.13
Upgraded Hadoop LZO to 0.4.20
Fixed
HIVE-20395 : Parallelized file moves in replaceFiles method
Image 1.1 only:
HIVE-16844 : Fixed a Connection leak in ObjectStore when new Conf object is used.
Image 1.3 and 1.4:
Fixed an issue where Jupyter notebook directory is not honored
Fixed an issue where PySpark kernel in Jupyter does not use the correct Python version
February 11, 2019
Change
New sub-minor versions of Cloud Dataproc images - 1.0.110-deb9, 1.1.101-deb9, 1.2.64-deb9, 1.3.24-deb9, 1.4.0-RC8-deb9 .
YARN applications that are submitted via the Cloud Dataproc Jobs API now include the Job UUID in the application tags with the format "dataproc uuid ${UUID}".
Removed upper limit on total number of threads in job drivers.
Image 1.3 only:
Added a new yarn-site.xml property ( yarn.resourcemanager.webapp.methods-allowed ) which is set with a comma- separated list of the names of HTTP methods that the YARN Resource Manager will allow to be called in its web UI and REST API (default port 8088). The current default value is "ALL", which allows all HTTP methods (GET,POST,PUT,PATCH,DELETE,HEAD,CONNECT,OPTIONS, TRACE). It is recommended that this property be set to "GET" to disable remote code submission or other modifications via the REST API. This property will default to "GET" for all Cloud Dataproc clusters in a future release (see Important cross-update notes , above).
Image 1.4 preview only:
Upgraded Kafka to 1.1.1
Added a new yarn-site.xml property ( yarn.resourcemanager.webapp.methods-allowed ) which is set with a comma- separated list of the names of HTTP methods that the YARN Resource Manager will allow to be called in its web UI and REST API (default port 8088). The current default value is "ALL", which allows all HTTP methods (GET,POST,PUT,PATCH,DELETE,HEAD,CONNECT,OPTIONS, TRACE). It is recommended that this property be set to "GET" to disable remote code submission or other modifications via the REST API. This property will default to "GET" for all Cloud Dataproc clusters in a future release (see Important cross-update notes , above).
Fixed
Fixed issue in which graceful decommission was not graceful on HA clusters.
Fixed issue in which mapreduce jobs would fail when trying to write a final history event with "Unknown Job" error by setting dfs.namenode.file.close.num-committed-allowed to 1.
February 01, 2019
Change
New sub-minor versions of Cloud Dataproc images - 1.0.109-deb9, 1.1.100-deb9, 1.2.63-deb9, 1.3.23-deb9, 1.4.0-RC7-deb9 .
January 28, 2019
Fixed
Fixed a bug that can cause jobs in heavily loaded clusters to fail with a "Task not acquired" error.
Change
New sub-minor versions of Cloud Dataproc images - 1.0.108-deb9, 1.1.99-deb9, 1.2.62-deb9, 1.3.22-deb9, 1.4.0-RC6-deb9 .
January 22, 2019
Change
New sub-minor versions of Cloud Dataproc images - 1.0.107-deb9, 1.1.98-deb9, 1.2.61-deb9, 1.3.21-deb9, 1.4.0-RC5-deb9 .
Do not throttle scheduling of submitted jobs based on master node CPU load.
Set yarn.resourcemanager.nodemanager-graceful-decommission-timeout-secs to 86400 (1 day) on Cloud Dataproc 1.3+ clusters. This fixes the bug where trying to graceful decommission nodes with a timeout on Cloud Dataproc 1.3+ would still terminate at 1 hour.
Upgrade the Presto Component to version 0.215.
Change property parameter in Kerberos Component "dataproc:kerberos.cross-realm-trust.shared-key.uri" to "dataproc:kerberos.cross-realm-trust.shared-password.uri".
Make the Presto Component compatible with the Kerberos Component, so if both Components are enabled, Presto will run in secure mode.
Explicitly set the property hadoop.ssl.enabled.protocols to "TLSv1,TLSv1.1,TLSv1.2". This change will affect any newly created clusters using a Dataproc image 1.2 and up. This is to help avoid issues caused by incompatibility between SSLv2Hello (enabled by default in Hadoop 2.8.4 and up) and the Conscrypt security provider , the default security provider used by the Cloud Storage connector.
Make 1.3 default image version.
Image 1.0 only:
Fix Hive Metastore/Hive Server2/Spark History Server systemd services exited problem.
Image 1.2 only:
Upgrade Hue to 4.3.0.
Upgrade Hadoop to 2.8.5.
Patch [SPARK-21960][STREAMING] Spark Streaming Dynamic Allocation should respect spark.executor.instances.
Image 1.3 only:
Upgrade Hadoop to 2.9.2.
Upgrade Hue to 4.3.0.
Patch Spark-25959 GBTClassifier picks wrong impurity stats on loading.
Patch HIVE-20395 Parallelize files move in the ql.metadata.Hive#replaceFiles
Upgrade Hive to 2.3.4.
Cloud Storage connector upgrade (for more information, review the change notes in the GitHub repository).
Image 1.4 - Preview only:
Upgrade Hadoop to 2.9.2.
Upgrade Flink to 1.6.2.
Patch Spark-25959 GBTClassifier picks wrong impurity stats on loading.
Upgrade Hive to 2.3.4.
Cloud Storage connector upgrade (for more information, review the change notes in the GitHub repository).
Remove the logic in Kerberos optional component to set property hadoop.ssl.enabled.protocols . It will be set by the Dataproc service.
Collect Zookeeper logs as part of the diagnose command.
Export Zookeeper logs to stackdriver.
Run Dataproc Agent process at higher priority.
Add parquet (parquet-cli) binary to PATH for debugging convenience.
Fix Hive-WebHCat to use effective python profile, and fix issues with logging directory.
Publish up-to-date HDFS and YARN metrics from the Dataproc agent. Earlier, there was an up to 30 second delay between collection and publishing.
Reduce the minimum autoscaling cooldown period to 2 minutes. The cooldown period still starts after a previous scaling operation completes.
In Kerberos optional component activation process, the KMS key existence verification is collapsed into decryption while using the key.
December 14, 2018
Change
New sub-minor versions of Cloud Dataproc images - 1.0.105-deb9, 1.1.96-deb9, 1.2.59-deb9, 1.3.19-deb9, 1.4.0-RC3-deb9 .
Allow properties in zoo.cfg to be configured through 'zookeeper:' property prefix.
Allow users to parameterize the name of a managed cluster in workflow templates.
December 10, 2018
Change
New sub-minor versions of Cloud Dataproc images - 1.0.104-deb9, 1.1.95-deb9, 1.2.58-deb9, 1.3.18-deb9, 1.4.0-RC2-deb9 .
Upgraded Spark from 2.3.1 to 2.3.2 on image version 1.3 .
Extra ' character in /etc/hadoop/conf.empty/yarn-site.xml under yarn.application.classpath prevents running Hadoop jobs.
Image 1.2 only:
Fix issue where difference in featureImportances results on computed vs. saved models. ( SPARK-25959 ).
Image 1.3 and later only:
Jupyter Optional Component changes default storage location of notebooks from gs://staging-bucket/notebooks to gs://staging-bucket/notebooks/jupyter . This can be changed by setting dataproc:jupyter.notebook.gcs.dir cluster property.
Zeppelin Optional Component will now save notebooks to the staging Google Cloud Storage bucket in gs://staging-bucket/notebooks/zeppelin . This can be changed by setting zeppelin:zeppelin.notebook.gcs.dir cluster property.
Zeppelin Optional Component can now be configured via zeppelin and zeppelin-env property prefixes.
Feature
Announcing the General Availability (GA) release of Cloud Dataproc Stackdriver Monitoring . Stackdriver Monitoring is automatically enabled on Cloud Dataproc clusters, and collects and reports HDFS, YARN, and other Cloud Dataproc cluster and job metrics.
Announcing a Beta release of Cluster Scheduled Deletion , which updates support of this feature in the Cloud SDK by including scheduled deletion output in the gcloud beta dataproc clusters list and gcloud beta dataproc clusters describe commands.
Announcing the Beta release of Cloud Dataproc image version 1.4 , which can be specified as "1.4.0-RC2-deb9" or "preview". This new image version includes Python 3.7 installed via Miniconda and Spark 2.4.
Announcing the Alpha release of Cloud Dataproc - Kerberos Top-Level Component . This feature enables Kerberos/Hadoop Secure Mode, providing user isolation and encryption inside a Cloud Dataproc cluster created with image version 1.3 and higher.
Autoscaling logs now appear in Stackdriver Logging under logs for a Cloud Dataproc cluster.
December 04, 2018
Feature
Announcing the Beta release of SparkR jobs on Cloud Dataproc . This feature allows you to submit SparkR jobs on a Cloud Dataproc cluster using the gcloud command-line tool, the Google Cloud Platform Console, or the Cloud Dataproc API.
Announcing the General Availability (GA) release of Cloud Dataproc local SSDs on preemptible workers . Local SSDs can now be added to preemptible (secondary) worker nodes in a cluster.
November 16, 2018
Feature
Announcing the Beta release of Cloud Dataproc - Presto Top-Level Component . This feature allows users to install Presto when creating new Cloud Dataproc clusters.
Change
New sub-minor versions of Cloud Dataproc images - 1.0.102-deb9, 1.1.93-deb9, 1.2.56-deb9, 1.3.16-deb9 .
Creating Dataproc clusters will now issue a warning if we detect a potential security vulnerability due to misconfigured firewall rules allowing public access to YARN ports.
Looking up the details of a job will show who submitted that job in the submittedBy field.
Image 1.3 only:
Upgraded Cloud Storage Connector to version 1.9.10. See the GitHub release notes .
November 12, 2018
Fixed
Fixed a bug where CMEK was not passed to PD on preemptible workers. * Fixed a bug where changes to PATH in custom images broke Cloud Dataproc initialization. For example, changing the default Python to Python 3 previously broke initialization. * Fixed a bug where POST ant PUT requests to the YARN REST API were blocked by anonymous users on Cloud Dataproc 1.3. This was fixed by adding org.apache.hadoop.http.lib.StaticUserWebFilter back to hadoop.http.filter.initializers in core-site.xml * Fixed logging warnings in Hive 2 in Cloud Dataproc 1.1, 1.2, and 1.3.
Change
New sub-minor versions of Cloud Dataproc images - 1.0.101-deb9, 1.1.92-deb9, 1.2.55-deb9, 1.3.15-deb9 .
Minor image versions now redirect to Debian 9-based images. For example, 1.2 now points to 1.2-deb9. There will be no new Debian 8-based images.
Job UUIDs are now exposed to allow job runs to be uniquely identified.
The Cloud Storage Connector now sets fadvise to SEQUENTIAL for Hadoop DistCp jobs. This mode is optimized for streaming reads, which are most efficient for these workloads.
Removed the ALPN boot jar from Cloud Dataproc versions 1.0 and 1.1 due to incompatibility with the latest OpenJDK 8 distributed with Debian. gRPC users must use a form of netty-tcnative , for example, io.grpc:grpc-netty-shaded . This already applies to 1.2 and 1.3.
Reduced the Linux process priority of user jobs.
dfs.namenode.datanode.registration.retry-hostname-dns-lookup is now set to true .
Increased the maximum number of DistCp tasks scheduled per node. This improves DistCp performance.
Image 1.3 only:
Ported HDFS-13056 to Hadoop 2.9.
Upgraded Cloud Storage Connector to version 1.9.9. See the GitHub release notes .
Presto is now supported as an optional top-level component.
November 02, 2018
Issue
As of November 2, 2018, Cloud Dataproc has stopped releasing images based on Debian 8. 1.X releases after November 2, 2018 will use Debian 9 as their base OS. No further updates, patches, or security fixes will be released for Debian 8 after November 2, 2018.
On November 9, 2018, the ALPN boot jar will be removed from the classpath of future Cloud Datproc version 1.0 and 1.1 images due to incompatibilites with the latest security patches of the Debian OpenJDK 8 package. Image version 1.2 and 1.3 will be gRPC Java clients, and will need to use netty-tcnative for authentication with Google APIs. Clients, such as Cloud Bigtable, that bundle netty-tcnative can depend on grpc-netty-shaded to avoid collisions with the Hadoop Classpath. See Manage Java and Scala dependencies for Apache Spark for more information.
October 26, 2018
Fixed
Fixed a Graceful Decommissioning and Secondary Workers issue. When using graceful decommissioning to remove secondary (preemptible) workers soon after scaling the secondary worker group, an error would occasionally occur with a error message similar to the following: "Secondary worker group cannot be modified outside of Cloud Dataproc. If you recently created or updated this cluster, wait a few minutes before gracefully decommissioning to allow all secondary instances to join or leave the cluster. Expected secondary worker group size: x, actual size: y."
Related Information:
Cloud Dataproc calls listManagedInstances on the Managed Instance Group that manages secondary workers, filters out instances whose current action is DELETING or ABANDONING, and then chooses instances to delete from the resulting set. Cloud Dataproc prefers to delete VMs that are being created, rather than running VMs.
When describing a cluster, the secondary worker group will still appear to have instances that are DELETING and ABANDONING. Thus, the group's target size may not match the size of the list of hostnames, even after the scaling operation is complete. The instances will be removed from the list when they have been deleted from the Managed Instance group.
Fixed issues that led to an "Internal Server Error" when creating clusters.
Change
New sub-minor versions of Cloud Dataproc images - 1.0.100-deb8, 1.1.91-deb8, 1.2.54-deb8, 1.3.14-deb8, 1.0.100-deb9, 1.1.91-deb9, 1.2.54-deb9, 1.3.14-deb9 .
October 22, 2018
Feature
Cloud Dataproc is now available in the asia-east2 region (Hong Kong).
October 19, 2018
Change
New sub-minor versions of Cloud Dataproc images - 1.0.99-deb8, 1.1.90-deb8, 1.2.53-deb8, 1.3.13-deb8, 1.0.99-deb9, 1.1.90-deb9, 1.2.53-deb9, 1.3.13-deb9 .
Fixed
Image 1.0 only: Fixed a bug where Stackdriver metrics were failing to be published, which also impacted autoscaling functionality.
October 12, 2018
Change
New sub-minor versions of Cloud Dataproc images - 1.0.98-deb8, 1.1.89-deb8, 1.2.52-deb8, 1.3.12-deb8, 1.0.98-deb9, 1.1.89-deb9, 1.2.52-deb9, 1.3.12-deb9 .
Image 1.3 only: Cloud Storage connector upgrade (for more information, review the change notes in the GitHub repository):
Cloud Storage connector has been upgraded to 1.9.8 version.
Image 1.0 only: Upgrade Hadoop to 2.7.4.
October 09, 2018
Feature
Announcing the General Availability (GA) release of Cloud Dataproc Customer Managed Encryption Keys on Compute Engine . This feature allows you to create, use, and revoke the key encryption key (KEK) on Persistent Disks (PDs) associated with the Compute Engine VMs in your cluster.
October 05, 2018
Fixed
Fixed an issue in which the timeout for the first initialization action was used as the timeout for all other initialization actions.
Fixed infrequent issue in which cluster creation failed with debconf: DbDriver "config": /var/cache/debconf/config.dat is locked by another process: Resource temporarily unavailable error.
Change
New sub-minor versions of Cloud Dataproc images - 1.0.97-deb8, 1.1.88-deb8, 1.2.51-deb8, 1.3.11-deb8, 1.0.97-deb9, 1.1.88-deb9, 1.2.51-deb9, 1.3.11-deb9 .
Image 1.1 only: Upgraded Zeppelin to 0.7.3.
Image 1.1 only: Published YARN and HDFS metrics to Stackdriver (except HDFS PendingDeletionBlocks) from clusters using image version 1.1.82 and above.
September 28, 2018
Fixed
Fixed issue where Spark history server failed to start.
Fixed issue where autoscaling stops after 1000 cool-down periods.
Change
New sub-minor versions of Cloud Dataproc images - 1.0.97-deb8, 1.1.88-deb8, 1.2.51-deb8, 1.3.11-deb8, 1.0.97-deb9, 1.1.88-deb9, 1.2.51-deb9, 1.3.11-deb9 .
Image 1.3 only: Cloud Storage connector upgrade (for more information, review the change notes in the GitHub repository):
Cloud Storage connector has been upgraded to 1.9.7 version
Image 1.0-1.2 only: Cloud Storage and BigQuery connector upgrades (for more information, review the change notes in the GitHub repository):
Cloud Storage connector has been upgraded to 1.6.10 version
BigQuery connector has been upgraded to 0.10.11 version
Feature
Feature (1.2+) - Enabled new dataproc:am.primary_only cluster property to prevent application master from running on preemptible workers. This feature is only enabled for Dataproc 1.2+ clusters. To use the cluster property, set --properties dataproc:am.primary_only=true when creating a cluster.
September 25, 2018
Feature
Announcing the General Availability (GA) release of Cloud Dataproc Workflow Templates , including Workflow Template Parameterization and the Workflow Templates InstantiateInline API .
Announcing the General Availability (GA) release of Cloud Dataproc Granular IAM . This feature allows you to set IAM roles and their corresponding permissions on a per-cluster basis.
Announcing the Beta release of Cloud Dataproc Cluster Import/Export from YAML . This feature allows you to use the gcloud command-line tool to export the configuration of an existing Cloud Dataproc cluster into a YAML file, then create a new cluster by importing the YAML file configuration.
Announcing the Beta release of Cloud Dataproc Optional Components . This feature allows users to specify additional components to install when creating new Cloud Dataproc clusters.
September 21, 2018
Fixed
Fixed issue where gRPC based clients can fail when calling Get/List on Operations after using v1beta2 API to perform cluster operations.
Feature
Announcing the Beam on Flink on Dataproc Initialization Action ( Beta ) on GitHub, which sets up an Apache Beam service on a Cloud Dataproc cluster.
Change
New sub-minor versions of Cloud Dataproc images - 1.0.95-deb8, 1.1.86-deb8, 1.2.49-deb8, 1.3.9-deb8, 1.0.95-deb9, 1.1.86-deb9, 1.2.49-deb9, 1.3.9-deb9 .
Changed initialization actions to run inside a login shell so that environment profile changes can be seen by subsequent init actions.
Image 1.3 only: Cloud Storage connector upgrade (for more information, review the change notes in the GitHub repository):
Cloud Storage connector has been upgraded to 1.9.6 version
Image 1.0-1.2 only: Cloud Storage and BigQuery connector upgrades (for more information, review the change notes in the GitHub repository):
Cloud Storage connector has been upgraded to 1.6.9 version
BigQuery connector has been upgraded to 0.10.10 version
September 14, 2018
Fixed
Improved granularity and accuracy of Hadoop metrics in Stackdriver
Fixed Hue service failed to start issue on 1.3-deb9 images.
Change
New sub-minor versions of Cloud Dataproc images - 1.0.94-deb8, 1.1.85-deb8, 1.2.48-deb8, 1.3.8-deb8, 1.0.94-deb9, 1.1.85-deb9, 1.2.48-deb9, 1.3.8-deb9 .
Added Flink 1.5.0 and HBase 1.3.2 to 1.3-deb8 images.
August 31, 2018
Fixed
Fixed issue in which workers would fail to join the cluster when using the connectors init action .
Fixed issue in which Hive jobs would fail if they were submitted during the first minute after cluster creation.
Fixed init actions flakiness due to E: Could not get lock /var/lib/dpkg/lock error.
Change
New sub-minor versions of Cloud Dataproc images - 1.0.93-deb8, 1.1.84-deb8, 1.2.47-deb8, 1.3.7-deb8, 1.0.93-deb9, 1.1.84-deb9, 1.2.47-deb9, 1.3.7-deb9 .
August 30, 2018
Feature
Announcing the General Availability (GA) release of Cloud Dataproc Customer Managed Encryption Keys on Cloud Storage . This feature allows you to create, use, and revoke the key encryption key (KEK) on the Cloud Storage bucket used by Cloud Dataproc to write cluster metadata and job driver output.
August 24, 2018
Fixed
Fixed issue in Dataproc Image version 1.2 where conflicting ASM JARs occasionally caused Zeppelin to crash.
Fix issue in Dataproc Image version 1.3 where Snappy compression in the ORC file format in Spark was broken. This was a regression introduced in Image Version 1.3.3 while resolving SPARK-24018 . After this fix, Parquet and ORC can both use Snappy compression.
Change
New sub-minor versions of Cloud Dataproc images - 1.0.92-deb8, 1.1.83-deb8, 1.2.46-deb8, 1.3.6-deb8, 1.0.92-deb9, 1.1.83-deb9, 1.2.46-deb9, 1.3.6-deb9 .
Image 1.0-1.2 only: Cloud Storage and BigQuery connector upgrades (for more information, review the change notes in the GitHub repository):
Cloud Storage connector has been upgraded to 1.6.8 version
BigQuery connector has been upgraded to 0.10.9 version
Image 1.3 only: Cloud Storage connector upgrade to 1.9.5 version (for more information, review the change notes in the GitHub repository)
Image 1.3 with Debian 9 only:
Upgrade Spark to 2.3.1.
Add HBase 1.3.2.
Add Flink 1.5.0.
August 16, 2018
Change
New sub-minor versions of Cloud Dataproc images - 1.0.91-deb8, 1.0.91-deb9, 1.1.82-deb8, 1.1.82-deb9, 1.2.45-deb8, 1.2.45-deb9, 1.3.5-deb8, 1.3.5-deb9 .
Security fix: Install Linux Kernel 4.9 in all image versions to get security fixes for CVE-2018-3590 and CVE-2018-3591 in all new Debian 8 images.
Feature
New Debian 9 based images are available for image versions 1.0-1.3. They can be accessed by appending '-deb9' to the existing version tracks (for example 1.2-deb9).
Until November 2, 2018, existing 1.X image versions will use debian 8 images (for example 1.3 will resolve to 1.3.Y-deb8). On November 2, 2018, existing 1.X image versions will switch to Debian 9 images. Debian 8 will not be used in new image releases on and after November 2, 2018.
August 10, 2018
Change
New sub-minor versions of Cloud Dataproc images - 1.0.90, 1.1.81, 1.2.45, 1.3.5
Set maximum number of open files to 65535 for all Systemd services.
August 03, 2018
Fixed
Fixed issue in which Hive jobs would fail on 1.3 HA clusters.
Fixed the default value of mapreduce.jobhistory.recovery.store.fs.uri by setting it back to ${hadoop.tmp.dir}/mapred/history/recoverystore . It was set to hdfs:///mapred/history/recoverystore in error as part of the July 6 release.
Backported ZOOKEEPER-1576 into ZooKeeper 3.4.6 in Dataproc 1.2 and 1.3. This bug caused Zookeper connections to fail if any one of the servers failed to resolve.
Change
New sub-minor versions of Cloud Dataproc images - 1.0.89, 1.1.80, 1.2.44, 1.3.4
In HA clusters, hadoop.security.token.service.use_ip is now set to false.
Upgraded Hadoop to 2.8.4. (Dataproc 1.2)
July 31, 2018
Fixed
Fixed issue breaking native Snappy compression in spark-shell ( SPARK-24018 ) and Zeppelin .
Fixed issue where gsutil and gcloud do not work on cluster VMs when the ANACONDA optional component is selected.
Feature
Announcing Cloud Dataproc Autoscaling (public Alpha). This feature automatically resizes clusters to meet workload demands.
Change
New sub-minor versions of Cloud Dataproc images - 1.3.3
Changes to 1.3 image only:
Disabled node blacklisting in Tez jobs (set tez.am.node-blacklisting.enabled=false ). This affects all Hive jobs, which run on Tez by default.
July 18, 2018
Feature
Announcing Cloud Dataproc Workflow Parameters (Beta). This feature allows Cloud Dataproc workflow templates to be reused multiple times with different parameters. As part of this feature launch, users can import and export workflow templates directly from YAML files using the gcloud command-line tool.
July 13, 2018
Change
New sub-minor versions of Cloud Dataproc images - 1.0.88, 1.1.79, 1.2.43, 1.3.2
Cloud Dataproc now adds resource location to generated cloud audit logs.
July 10, 2018
Feature
Cloud Dataproc is now available in the us-west2 region (Los Angeles).
July 06, 2018
Fixed
A race condition in HA cluster creation with the resolveip utility has been resolved.
Change
New sub-minor versions of Cloud Dataproc images - 1.0.87, 1.1.78, 1.2.42, 1.3.1
Changes to 1.3 image only:
The per-driver Spark web UI has been re-enabled.
The HCatalog library is installed by default.
MapReduce job history server recovery is now enabled by default.
Feature
Announcing the alpha release of Cloud Dataproc Optional Components . This feature allows users to specify additional components to install when creating new Dataproc clusters.
June 29, 2018
Change
New sub-minor versions of Cloud Dataproc images - 1.0.86, 1.1.77, 1.2.41, 1.3.0
Changes to 1.3 image only:
Cloud Storage connector was upgraded to version 1.9.0 (see the change notes in the GitHub repository).
The NFS Kernel Server is no longer installed.
Feature
Cloud Dataproc 1.3 - A new image version for Cloud Dataproc is now generally available.
Image version 1.3 will become the default image version for new clusters starting 07/30/2018. See the Cloud Dataproc Version List for more information.Image version 1.3 includes the following changes:
Apache Spark has been updated to version 2.3.0.
Apache Hadoop has been updated to version 2.9.0.
Apache Hive has been updated to version 2.3.2.
Hive runs on Apache Tez by default.
The YARN Timeline Server is enabled by default.
Announcing the general availability (GA) release of Cloud Dataproc Custom Images (was Beta). This feature allows users to create and save custom images with packages pre-installed. These custom images can then be used to create Cloud Dataproc clusters.
June 27, 2018
Feature
Announcing the Beta release of Cloud Dataproc Customer Managed Encryption Keys (CMEK) , a feature that allows you to create, use, and revoke the key encryption key (KEK) for Compute Engine VMs in your cluster and the Cloud Storage bucket used with Cloud Dataproc.
Announcing the general availability (GA) release of Cloud Dataproc and Customer-Managed Encryption Keys on BigQuery. Cloud Dataproc users can now use Customer-Managed Encryption Keys (CMEK) to access protected BigQuery datasets and tables (see Writing a MapReduce Job with the BigQuery Connector for an example).
Announcing the general availability (GA) release of Cloud Dataproc Persistent Solid State Drive (PD-SSD) Boot Disks , which allows you to create clusters that use PD-SSDs for the master and worker node boot disks.
June 22, 2018
Change
New sub-minor versions of Cloud Dataproc images - 1.0.85, 1.1.76, 1.2.40
Upgraded the Cloud Storage and BigQuery connectors in 1.0.85, 1.1.76, 1.2.40 (for more information, review the change notes in the GitHub repository):
Cloud Storage connector has been upgraded to version 1.6.7
BigQuery connector has been upgraded to version 0.10.8
June 15, 2018
Fixed
Fixed ZooKeeper initialization action issue .
Change
New sub-minor versions of Cloud Dataproc images - 1.0.84, 1.1.75, 1.2.39
Initialization Action output is now available in Stackdriver under google.dataproc.startup log.
Cloud Dataproc will refuse to create new clusters based on most images created before 2018-02-14. Customers do not need to change minor versions, but if they specify a subminor version that falls into this group, they will need to use a newer subminor version (e.g. 1.1.39 can not be used for new clusters, but 1.1 and 1.1.73 are valid).
June 11, 2018
Feature
Cloud Dataproc is now available in the europe-north1 region (Finland).
June 08, 2018
Feature
Google Cloud SDK 203.0.0 (2018-05-29)
Changes include:
Added gcloud beta dataproc workflow-templates instantiate-from-file to enable instantiation of workflow templates directly from a YAML file.
Added gcloud beta dataproc clusters create-from-file to enable creation of clusters directly from a YAML file.
See the Cloud SDK reference documentation for more information.
Change
New sub-minor versions of Cloud Dataproc images - 1.0.83, 1.1.74, 1.2.38
Change the jdbc connect string passed to beeline when submitting Hive jobs to high availability clusters through the Cloud Dataproc Jobs API. The new connect string takes advantage of high availability of HiveServer2.
Fixed
WorkflowTemplates will now correctly report Job failures.
May 28, 2018
Change
New sub-minor versions of Cloud Dataproc images - 1.0.82, 1.1.73, 1.2.37
Hive Server 2 now runs all three masters in High Availablility mode.
Preview image changes (Dataproc 1.3):
Now requires a 15 GB minimum boot disk size.
The NameNode Service RPC port has changed from 8040 to 8051.
The SPARK_HOME environment variable is now globally set.
Fixed
ALPN boot jar removed from 1.2. This regression was introduced in 1.2.35.
May 21, 2018
Change
New sub-minor versions of Cloud Dataproc images - 1.0.81, 1.1.72, 1.2.36
Upgraded the Cloud Storage and BigQuery connectors in 1.0.81, 1.1.72, 1.2.36 (for more information, review the change notes in the GitHub repository):
Cloud Storage connector has been upgraded to version 1.6.6
BigQuery connector has been upgraded to version 0.10.7
New version of Cloud Dataproc 1.3 preview image:
Remove BigQuery connector from image. Users should instead include the BigQuery connector with jars for their jobs.
Cloud Dataproc 1.3 is not supported
See Cloud Dataproc version list for more information.
Hive Metastore is configured to run on all three masters in High Availability mode
Fixed
Fixed an issue in which accelerator quota was being incorrectly validated, for example, cluster creation might fail with an "Insufficient 'NVIDIA_K80_GPUS' quota" error, even though quota was sufficient.
May 14, 2018
Change
New sub-minor versions of Cloud Dataproc images - 1.0.80, 1.1.71, 1.2.35
Feature
New Cloud Dataproc 1.3 image track available in preview.
Changes include:
Spark 2.3, Hadoop 2.9, Hive 2.3, Pig 0.17, Tez 0.9
Hive on Tez by default (no need for the Tez initialization action).
Cloud Dataproc 1.3 is not officially supported.
See Cloud Dataproc version list for more information.
May 04, 2018
Fixed
Fixed issue in which preemptible workers were not getting cleaned up from node membership files once they had left the cluster.
Change
New sub-minor versions of Cloud Dataproc images - 1.0.79, 1.1.70, 1.2.34
April 27, 2018
Change
New sub-minor versions of Cloud Dataproc images - 1.0.78, 1.1.69, 1.2.33
April 20, 2018
Change
New sub-minor versions of Cloud Dataproc images - 1.0.77, 1.1.68, 1.2.32
Changed the Namenode HTTP port from 50070 to 9870 on HA clusters in preview image. WebHDFS, for example, is accessible at http://clustername-m-0:9870/webhdfs/v1/ . This is consistent with standard and single node clusters in Dataproc 1.2+. Dataproc 1.0 and 1.1 clusters will continue to use port 50070 for all cluster modes.
Upgraded the Cloud Storage and BigQuery connectors (for more information, review the change notes in the GitHub repository):
Cloud Storage connector has been upgraded to version 1.6.5
BigQuery connector has been upgraded to version 0.10.6
Fixed
Fixed issue where cluster can go into ERROR state due to error when resizing a managed instance group.
Backported PIG-4967 and MAPREDUCE-6762 into Cloud Datproc image version 1.2 to fix an occasional NullPointerException in Pig jobs.
Fixed an uncommon issue in which a Cloud Dataproc agent restart during a small window of a cluster downscale operation could cause problems decommissioning data nodes.
April 13, 2018
Fixed
Fixed rare issue where Cloud Dataproc agent fails to initialize HDFS configuration and reports too few DataNodes reporting.
Fixed how Cloud Dataproc determines that HDFS decommission is complete.
Change
New sub-minor versions of Cloud Dataproc images - 1.0.76, 1.1.67, 1.2.31
Updated software versions in Cloud Dataproc image version 1.2 to the following:
Apache Spark 2.2.0 -> 2.2.1
Apache Hadoop 2.8.2 -> 2.8.3
April 06, 2018
Change
New sub-minor versions of Cloud Dataproc images - 1.0.75, 1.1.66, 1.2.30
March 30, 2018
Change
New sub-minor versions of Cloud Dataproc images - 1.0.74, 1.1.65, 1.2.29
March 23, 2018
Change
New sub-minor versions of Cloud Dataproc images - 1.0.73, 1.1.64, 1.2.28
Cloud Storage and BigQuery connector upgrades: The Cloud Storage connector has been upgraded to gcs-connector-1.6.4 and the BigQuery connector has been upgraded to bigquery-connector-0.10.5 . For more information, review the GitHub repository 2018-03-19 (Google Cloud Storage 1.6.4, BigQuery 0.10.5) changelog .
March 22, 2018
Feature
Granular IAM permissions are now available for Cloud Dataproc jobs, operations, and workflow templates in Beta.
March 16, 2018
Fixed
Fixed an issue where Hive jobs sometimes pointed to a master node without a Hive Server 2 in High Availability Mode . Resolves a GitHub issue .
Change
New sub-minor versions of Cloud Dataproc images - 1.0.73, 1.1.64, 1.2.28 .
Updated Conda initialization action to use latest Miniconda version if Spark is at least version 2.2.0.
Feature
Google Stackdriver Monitoring (Beta) is automatically enabled on Cloud Dataproc clusters, and collects and reports HDFS, YARN, and other Cloud Dataproc cluster and job metrics.
Added Connectors initialization action that allows users to update the installed Cloud Storage and BigQuery connectors in Cloud Dataproc clusters.
March 09, 2018
Fixed
Fixed an issue where ZooKeeper was not configured to periodically clean up its data directories.
Change
Cloud Dataproc Auto Zone is now generally available.
New sub-minor versions of Cloud Dataproc images - 1.0.71, 1.1.62, 1.2.26 .
March 05, 2018
Fixed
Fixed an issue where initialization actions could fail to execute with the error "errno 26 Text file is busy".
Change
New sub-minor versions of Cloud Dataproc images - 1.0.70, 1.1.61, 1.2.25 .
An optional requestId field has been added to CreateCluster, UpdateCluster, DeleteCluster, and SubmitJob. The requestId field can be used to prevent the processing of duplicate requests (subsequent requests with a requestId that is the same as a previous requestId are ignored).
Increased the MapReduce and Spark History Server heap sizes when running on large master nodes.
Feature
Cloud Dataproc Custom Images - Beta . Users can now create and save custom images that have their packages pre-installed. The custom images can then be used to create Cloud Dataproc clusters.
February 23, 2018
Change
New sub-minor versions of Cloud Dataproc images - 1.0.69, 1.1.60, 1.2.24 .
February 16, 2018
Change
New sub-minor versions of Cloud Dataproc images - 1.0.68, 1.1.59, 1.2.23 .
Updating cluster labels now also updates labels on PDs attached to master and primary worker VMs.
Fixed
Fixed an issue where cluster deletion could be slow if multiple delete cluster requests were in progress.
Fixed an issue where jobs became stuck if logging failed.
Fixed an issue where a cluster downsize operation failed when the dataproc agent incorrectly identified HDFS datanode decommission as stuck.
Fixed an issue where the dataproc agent incorrectly reported two YARN metrics.
February 09, 2018
Fixed
Fixed an issue where a workflow can get stuck due to a manually deleted cluster.
Change
New sub-minor versions of the Cloud Dataproc images - 1.0.67, 1.1.58, 1.2.22 .
The High Availability Mode feature is now in public release (was Beta). Cloud Dataproc clusters can be created with high availability mode enabled. This is an optional feature when creating a cluster. In high availability mode, Cloud Dataproc clusters have three master nodes instead of one. This enables both HDFS High Availability and YARN High Availability to allow uninterrupted YARN and HDFS operations despite any single-node failures or reboots.
This feature is available when creating clusters with the [gcloud](/sdk/gcloud/reference/dataproc/) command-line tool, the Cloud Dataproc REST API , and Google Cloud Platform Console . See High Availability Mode for more information.
An Update Cluster operation now returns a DONE operation if the update request has no work to perform.
February 02, 2018
Fixed
Fixed a Hadoop issue where an insufficient number of Datanodes were reporting.
Sped up commitJob on Cloud Storage for jobs with many last-stage (reduce) tasks.
Change
New sub-minor versions of the Cloud Dataproc images - 1.0.66, 1.1.57, 1.2.21 .
Cloud Storage and BigQuery connector upgrades: The Cloud Storage connector has been upgraded to gcs-connector-1.6.3 and the Google BigQuery connector has been upgraded to bigquery-connector-0.10.4 . For more information, review the GitHub repository Cloud Storage change notes and BigQuery change notes .
Updates to BoringSSL and Conscrypt .
User labels set on a cluster now propagate to attached disks.
Feature
Added support for setting hadoop-env, mapred-env, spark-env, and yarn-env dataproc properties through new prefixes. NOTE: applies only to new subminor image versions.
Added a button to link to Stackdriver logs for a cluster on the Google Cloud Platform Console Cluster details page.
January 10, 2018
Feature
It is now possible to instantiate Dataproc workflows directly without creating a WorkflowTemplate by using the new InstantiateInline method .
Announcing the Beta release of Cloud Dataproc Persistent Solid State Drive (PD-SSD) Boot Disks , which allows you to create clusters that use PD-SSDs for the master and worker node boot disks.
Cloud Dataproc is now available in the northamerica-northeast1 region (Montréal, Canada).
Cloud Dataproc is now available in the europe-west4 region (Netherlands).
Change
New sub-minor versions of the Cloud Dataproc images - 1.0.63, 1.1.54, 1.2.18 .
Automatic retry of commitJob (introduced in MAPREDUCE-5485 ) is now enabled by default; set mapreduce.fileoutputcommitter.failures.attempt to 1 to revert to the old behavior.
Fixed
Applied patch for CVE-2017-5754 ("Meltdown") along with other security patches referenced in DSA-4082-1 .
Local SSDs are now properly reformatted on boot after an ungraceful host migration; previously, ungraceful host migrations on nodes with local SSDs could cause workers to become defunct.
Improved reliability of High Availability cluster startup for cases where one or more masters' startup is delayed.
December 20, 2017
Feature
You can now select a minimum CPU platform when you create a Cloud Dataproc cluster.
Change
The Google Cloud Dataproc Graceful Decommissioning feature is now in public release (was Beta). Graceful Decomissioning enables the removal of nodes from the cluster without interrupting jobs in progress. A user-specified timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes. This feature is available when updating clusters using the gcloud command-line tool, the Cloud Dataproc REST API , and Google Cloud Platform Console . See Graceful Decommissioning for more information.
The Single Node Clusters feature is now in public release (was Beta). Single node clusters are Cloud Dataproc clusters with only one node that acts as the master and worker. Single node clusters are useful for a number of activities, including development, education, and lightweight data science.
This feature is available when creating clusters with the gcloud command-line tool, the Cloud Dataproc REST API , and Google Cloud Platform Console . See Single node clusters for more information.
December 08, 2017
Change
The Restartable Jobs feature is now in public release (was Beta). Cloud Dataproc jobs have an optional setting to restart failed jobs. When you set a job to restart, you specify the maximum number of retries per hour (maximum is 10). Restartable jobs allow you to mitigate common types of job failure, and are especially useful for long-running and streaming jobs. This feature is available when submitting jobs using the gcloud command-line tool, the Cloud Dataproc REST API , and Google Cloud Platform Console . See Restartable jobs for more information.
November 17, 2017
Change
New sub-minor versions of the Cloud Dataproc images - 1.0.58, 1.1.49, 1.2.13 .
Added new optimization that increases the performance of list operations for operations and jobs when tags are used.
November 10, 2017
Change
New sub-minor versions of the Cloud Dataproc images - 1.0.57, 1.1.48, 1.2.12 .
Apache Hadoop has been upgraded to 2.8.2 in the Cloud Dataproc 1.2 image.
November 01, 2017
Fixed
Fixed a bug that prevented workflow templates from handling /locations/ in resource names.
Change
When using workflow cluster selectors , if more than one cluster matches the specified label(s), Cloud Dataproc will select the cluster with the most free YARN memory. This change replaces the old behavior of choosing a random cluster with the matching label.
New sub-minor versions of the Cloud Dataproc images - 1.0.56, 1.1.47, 1.2.11 .
HTTP 404 and 409 errors will now show the full resource name in order to provide more useful error messages.
October 31, 2017
Feature
Cloud Dataproc is now available in the asia-south1 region (Mumbai, India).
October 24, 2017
Change
All WorkflowTemplate operations after October 27, 2017 will be logged in Cloud Audit Logging .
New sub-minor versions of the Cloud Dataproc images - 1.0.55, 1.1.46, 1.2.10 .
October 17, 2017
Fixed
Fixed a bug where HTTP keep-alive was causing java.lang.NullPointerException: ssl == null errors when accessing Cloud Storage.
The Apache Oozie initialization action has been fixed to work with Cloud Dataproc 1.2.
Change
New sub-minor versions of the Cloud Dataproc images - 1.0.54, 1.1.45, 1.2.9 .
October 11, 2017
Fixed
Fixed a bug reading ORC files in Hive 2.1 on Cloud Dataproc 1.1. To fix this issue, HIVE-17448 has been patched into to Hive 2.1.
Fixed an issue where Spark memoryOverhead was improperly set for clusters with high-memory master machines and low-memory workers. The memoryOverhead will now be appropriately set for these types of clusters.
The Cloud Dataproc agent has improved logic to start jobs in the order in which they were submitted.
The HUE initialization action has been fixed to work with Cloud Dataproc 1.2.
Fixed a bug where initialization action failures were not properly reported.
Change
The fluentd on Cloud Dataproc clusters has been reconfigured to concatenate multi-line error messages. This should make error messages easier to locate.
Clusters created with Cloud Dataproc Workflows can now use auto-zone placement .
Starting with this release, sub-minor releases to the Cloud Dataproc images will be mentioned in the release notes.
New sub-minor versions of the Cloud Dataproc images - 1.0.53, 1.1.44, 1.2.8 .
October 04, 2017
Feature
Cloud Dataproc Workflow Templates (Beta) – This new Cloud Dataproc resource allows jobs to be composed into a graph to execute on an ephemeral or an existing cluster. The template can create a cluster, run jobs, then delete the cluster when the workflow is finished. Graph progress can be monitored by polling a single operation. See Workflow templates—Overview for more information.
September 27, 2017
Feature
Cloud Dataproc Granular IAM (Beta) – Now you can set IAM roles and their corresponding permissions on a per-cluster basis. This provides a mechanism to have different IAM settings for Cloud Dataproc clusters. See the Cloud Dataproc IAM documentation for more information.
Fixed
Fixed a bug which prevented Apache Pig and Apache Tez from working together in Cloud Dataproc 1.2 . This fix was applied to Cloud Dataproc 1.1 in a previous release.
Fixed a bug involving Hive schema validation. This fix specifically addresses HIVE-17448 and HIVE-12274 .
September 19, 2017
Change
New Subminor Image Versions – The latest subminor image versions for 1.0, 1.1, and 1.2 now map to 1.0.51 , 1.1.42 , 1.2.6 , respectively.
September 06, 2017
Feature
Cluster Scheduled Deletion (Beta) – Cloud Dataproc clusters can now be created with an scheduled deletion policy. Clusters can be scheduled for deletion either after a specified duration or at a specified time, or after a specified period of inactivity. See Cluster Scheduled Deletion for more information.
September 05, 2017
Feature
Cloud Dataproc is now available in the southamerica-east1 region (São Paulo, Brazil).
August 18, 2017
Fixed
PySpark drivers are now launched under a changed process group ID to allow the Cloud Dataproc agent to correctly clean up misbehaving or cancelled jobs.
Fixed a bug where updating clusters labels and the number of secondary workers in a single update resulted in a stuck update operation and an undeletable cluster.
Change
New Subminor Image Versions – The latest subminor image versions for 1.0, 1.1, and 1.2 now map to 1.0.49 , 1.1.40 , 1.2.4 , respectively.
All Cloud Dataproc clusters now have a goog-dataproc-cluster-name label that is propagated to underlying Google Compute Engine resources and can be used to determine combined Cloud Dataproc related costs in exported billing data.
August 08, 2017
Change
Beginning today, Cloud Dataproc 1.2 will be the default version for new clusters. To use older versions of Cloud Dataproc, you will need to manually select the version on cluster creation.
August 04, 2017
Change
Apache Hadoop on Cloud Dataproc 1.2 has been updated to version 2.8.1
Feature
Graceful decomissioning – Cloud Dataproc clusters running Cloud Dataproc 1.2 or later now support graceful YARN decommissioning . Graceful decomissioning enables the removal of nodes from the cluster without interrupting jobs in progress. A user-specified timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes. The Cloud Dataproc scaling documentation contains details how enable graceful decomissioning.
August 01, 2017
Feature
Cloud Dataproc is now available in the europe-west3 region (Frankfurt, Germany).
July 21, 2017
Feature
Cloud Dataproc 1.2 – A new image version for Cloud Dataproc is now generally available: 1.2 . It will become the default image version for new clusters starting in 2 weeks. See the Cloud Dataproc version list for more information. Some important changes included in this new image version:
Apache Spark has been updated to version 2.2.0.
Apache Hadoop has been updated to version 2.8.0.
The default security (SSL) provider used by the Cloud Storage connector has been changed to one based on Conscrypt . This change should more efficiently utilize the CPU for SSL operations. In many cases, this change should result in better read and write performance between Cloud Dataproc and Cloud Storage.
The reported block size for Cloud Storage is now 128MB.
Memory configuration for Hadoop and Spark have both been adjusted to improve performance and stability.
HDFS daemons no longer use ephemeral ports in accordance with new port assignments outlined in HDFS-9427 . This eliminates certain rare race conditions that could cause occasional daemon startup failures.
YARN Capacity Scheduler fair ordering from YARN-3319 is now enabled by default.
Change
Starting with the Cloud Dataproc 1.2 release, the ALPN boot jars are no longer provided on the Cloud Dataproc image. To avoid Spark job breakage, upgrade Cloud Bigtable client versions, and bundle boringssl-static with Cloud Dataproc jobs. Our initialization action repository contains initialization actions to revert to the previous (deprecated) behavior of including the jetty-alpn boot jar. This change should only impact you if you use Cloud Bigtable or other Java gRPC clients from Cloud Dataproc.
July 11, 2017
Feature
Spark 2.2.0 in Preview – The Cloud Dataproc preview image has been updated to Spark 2.2.0.
June 28, 2017
Feature
Regional endpoints generally available – Regional endpoints for Cloud Dataproc are now generally available.
Autozone (Beta) – When you create a new cluster as an alternative to choosing a zone, you can use the Cloud Dataproc Auto Zone feature to let Cloud Dataproc select a zone within your selected region for the placement of the cluster.
Conscrypt for Cloud Storage connector – The default security (SSL) provider used by the Cloud Storage connector on the Cloud Dataproc preview image has been changed to one based on Conscrypt . This change should more efficiently utilize the CPU for SSL operations. In many cases, this change should result in better read and write performance between Cloud Dataproc and Cloud Storage.
June 26, 2017
Deprecated
The v1alpha1 and v1beta1 Cloud Dataproc APIs are now deprecated and cannot be used. Instead, you should use the current v1 API .
June 20, 2017
Feature
Cloud Dataproc is now available in the australia-southeast1 region (Sydney).
June 06, 2017
Feature
Cloud Dataproc is now available in the europe-west2 region (London).
April 28, 2017
Change
Cloud Storage and BigQuery connector upgrades – The Cloud Storage connector has been upgraded to gcs-connector-1.6.1 and the BigQuery connector has been upgraded to bigquery-connector-0.10.2 . For more information, review the Cloud Storage or BigQuery change notes in the GitHub repository.
Deprecated
The v1alpha1 and v1beta1 Cloud Dataproc APIs are now deprecated and cannot be used. Instead, you should use the current v1 API .
April 21, 2017
Change
In the Hadoop 2.8-based preview image , the YARN capacity scheduler has been set to use the fair ordering policy instead of FIFO.
The Cloud Dataproc IAM role names have been updated to be consistent with other Google Cloud products.
New logging and monitoring permissions have been added to the Dataproc/Dataproc Worker IAM role .
April 12, 2017
Change
Apache Hive on Cloud Dataproc 1.1 has been updated to version 2.1.1.
April 07, 2017
Change
The Conscrypt security provider has been temporarily changed from the default to an optional security provider. This change was made due to incompatibilities with some workloads. The Conscrypt provider will be re-enabled as the default with the release of Cloud Dataproc 1.2 in the future. In the meantime, you can re-enable the Conscrypt provider when creating a cluster by specifying this Cloud Dataproc property :
--properties dataproc:dataproc.conscrypt.provider.enable=true
Feature
Cloud Dataproc worker IAM role – A new Cloud Dataproc IAM role called Dataproc/Dataproc Worker has been added. This role is intended specifically for use with service accounts .
March 30, 2017
Change
Updates to user labels applied to Cloud Dataproc clusters will now be applied to managed instance group templates. Since preemptible virtual machines are included in a managed instance group, label updates are now applied to preemptible VMs.
Feature
Conscrypt for Cloud Storage connector – The default security (SSL) provider used by the Cloud Storage connector has been changed to one based on Conscrypt . This change should more efficiently utilize the CPU for SSL operations. In many cases, this change should result in better read and write performance between Cloud Dataproc and Cloud Storage.
March 17, 2017
Deprecated
As mentioned in the February 9th release notes , Cloud Audit Logs for Cloud Dataproc are no longer emitted to the dataproc_cluster resource type. Starting with this release, Cloud Audit Logs are emitted to the new cloud_dataproc_cluster resource type.
Change
The gcloud command now requires a double dash ( -- ) between gcloud-specific arguments and arguments to those commands. For example, if you used this command in the past:
gcloud dataproc jobs submit spark --cluster example-cluster \
--class sample_class --jars jar_file 1000
The new format for the command requires a double-dash with a space before and after the double dash:
gcloud dataproc jobs submit spark --cluster example-cluster \
--class sample_class --jars jar_file -- 1000
.
March 07, 2017
Feature
User labels – User labels with Cloud Dataproc resources are now generally available. You can add and update labels on Cloud Dataproc clusters and jobs. Labels are useful in situations such as cost accounting, work distribution, and testing.
Attaching GPUs to clusters (Beta) – Cloud Dataproc clusters now support Compute Engine GPUs . Clusters can have 1-8 GPUs attached to master and worker nodes . These GPUs can be used with applications on the cluster, such as Apache Spark. Attaching GPUs may benefit some types of data processing jobs.
March 01, 2017
Feature
Restartable jobs (Beta) – Cloud Dataproc jobs now have an optional setting to restart jobs that have failed. When you set a job to restart, you specify the maximum number of retries per hour. Restartable jobs allow you to mitigate common types of job failure and are especially useful for long-running and streaming jobs.
Single node clusters (Beta) – Single node clusters are Cloud Dataproc clusters with only one node that acts as the master and worker. Single node clusters are useful for a number of activities, including development, education, and lightweight data science.
February 09, 2017
Change
Cloud Dataproc Stackdriver Logging Changes
With new images, cluster logs are now exported to Stackdriver as resource type cloud_dataproc_cluster (was previously dataproc_cluster ).
Cloud Audit logs will be emitted to both cloud_dataproc_cluster and dataproc_cluster (deprecated) until the March 9th release.
Stackdriver logs for new images are indexed first by cluster name and then cluster UUID to assist in filtering logs by cluster name or cluster instance.
Cloud Dataproc Stackdriver Monitoring Changes
Logs-based metrics from Cloud Dataproc logs are now visible in Stackdriver.
Cloud Dataproc User Labels Changes
User Labels on Dataproc jobs can now be updated with the gcloud command-line tool or the Cloud Dataproc REST API .
January 19, 2017
Feature
Cloud Dataproc 1.2 preview – The preview image has been updated to reflect the planned Cloud Dataproc 1.2 release. This image includes Apache Spark 2.1 and Apache Hadoop 2.8-SNAPSHOT. This preview image is provided so we can provide access to Hadoop 2.8 in Dataproc 1.2 once Hadoop 2.8 is formally released and access to release candidates.
January 05, 2017
Change
The diagnose command has been updated to include the jstack output of the agent and spawned drivers.
Feature
Cloud Storage and BigQuery connector upgrades – The Cloud Storage connector has been upgraded to gcs-connector-1.6.0 and the BigQuery connector has been upgraded to bigquery-connector-0.10.1 . For more information, review the Cloud Storage or BigQuery change notes in the GitHub repository.
December 16, 2016
Feature
Google Stackdriver Agent Installed – The Stackdriver monitoring agent is now installed by default on Cloud Dataproc clusters. The Cloud Dataproc Stackdriver monitoring documentation has information on how to use Stackdriver monitoring with Cloud Dataproc. The agent for monitoring and logging can be enabled and disabled by adjusting the cluster properties when you create a cluster.
Cloud Dataproc 1.1.15 and 1.0.24 – The 1.1 and 1.0 images have been updated with non-impacting updates, bug fixes, and enhancements.
December 07, 2016
Change
Increased number of situations where Cloud-Dataproc services are automatically restarted by systemd on clusters in the event of unexpected or unhealthy behavior.
Feature
Cloud Dataproc 1.1.14 and 1.0.23 – The 1.1 and 1.0 images have been updated with non-impacting updates, bug fixes, and enhancements.
Issue
Starting with this release, the Google Cloud Dataproc API must be enabled for your project for Cloud Dataproc to function properly. You can use the GCP Console to enable the Cloud Dataproc API. Existing projects with the Cloud Dataproc API enabled will not be impacted.
November 29, 2016
Feature
Custom service account support – When creating a Cloud Dataproc cluster, you can now specify a user-managed (non-default) service account. This service account will be used to run the Compute Engine virtual machines in your cluster. This enables much more fine-grained permissions across services for each individual cluster. See the service account documentation for more information.
Cloud Dataproc 1.1.13 and 1.0.22 – The 1.1 image for Cloud Dataproc has been updated to include support for Apache Spark 2.0.2, Apache Zeppelin 0.6.2, and Apache Flink 1.1.3. The 1.1 and 1.0 images have also been updated with non-impacting bug fixes and enhancements. See the Cloud Dataproc version list for more information about Cloud Dataproc image versions.
November 14, 2016
Fixed
Fixed an issue where the --jars argument was missing from gcloud dataproc jobs submit pyspark command.
November 08, 2016
Feature
Google BigQuery connector upgrade – The BigQuery connector has been upgraded to bigquery-connector-0.10.1-SNAPSHOT . This version introduces the new IndirectBigQueryOutputFormat that uses Hadoop output formats that write directly to a temporary Cloud Storage bucket, and issues a single BigQuery load job per Hadoop/Spark job at job-commit time. For more information, review the BigQuery change notes in the GitHub repository.
November 07, 2016
Feature
Support for the newly-announced asia-northeast1 region – Cloud Dataproc is now available in the newly announced asia-northeast1 region.
November 02, 2016
Feature
User Labels [BETA] – You can now apply user-specified key=value labels to Cloud Dataproc clusters and jobs. This allows you to group resources and related operations for later filtering and listing. As an example, you can use labels with clusters to break out Cloud Dataproc usage by groups or individuals. For more information see the user labels documentation.
Change
Fixed an issue where failures during a cluster update caused the cluster to fail. Now, update failures return the cluster to Running state.
Fixed an issue where submitting a large number of jobs rapidly or over a long period of time caused a cluster to fail.
Increased the maximum number of concurrent jobs per cluster.
October 18, 2016
Change
Fixed an issue where HiveServer2 was not healthy for up to 60 seconds after the cluster was deployed. Hive jobs should now successfully connect to the required HiveServer2 immediately after a cluster is deployed.
Feature
Cloud Dataproc 1.1 Update – The Cloud Dataproc 1.1 image has been updated to include Spark 2.0.1 and Hadoop 2.7.3 .
October 11, 2016
Feature
Cloud Storage and BigQuery connector upgrades – The Cloud Storage connector has been upgraded to gcs-connector-1.5.4 and the BigQuery connector has been upgraded to bigquery-connector-0.8.0 . For more information, review the Cloud Storage or BigQuery change notes in the GitHub repository.
dataproc.localssd.mount.enable – Added the new property dataproc.localssd.mount.enable that can be set at cluster deployment time to make Cloud Dataproc ignore local SSDs. If set, Cloud Dataproc will use the main persistent disks for HDFS and temporary Hadoop directories so the local SSDs can be used separately for user-defined purposes. This property can be set by using the argument --properties dataproc:dataproc.localssd.mount.enable=false when creating a Cloud Dataproc cluster.
Change
Fixed an issue where CPU quota validation for preemptible virtual machines was being performed against the non-preemptible CPU quota even when preemptible CPU quota was set.
October 07, 2016
Change
Optimized the listing of resources by state and cluster UUID. This should reduce several list operations from seconds to milliseconds.
Feature
GCP Console
Now, up to 8 local SSDs can be added to worker nodes. The previous limit was 4.
When looking at a cluster's details, the "Jobs" page now shows Stop and Delete buttons for every job in the list. Previously, the buttons were only visible on the row where the mouse hovered.
September 29, 2016
Feature
Hadoop High Availability Mode [BETA] – Cloud Dataproc clusters can be created with high availability mode enabled. This is an optional feature when creating a cluster. In high availability mode, Cloud Dataproc clusters have three master nodes instead of one. This enables both HDFS High Availability and YARN High Availability to allow uninterrupted YARN and HDFS operations despite any single-node failures or reboots.
Presently, this feature is available when creating clusters with the [gcloud](/dataproc/docs/gcloud-installation) command-line tool or the Cloud Dataproc REST API . A future release will enable support for creating clusters with high availability in the Google Cloud Platform Console .
See the high availability mode documentation for more information.
Change
Optimized how jobs are listed based on state or cluster uuid. This should significantly decrease the time required to list jobs.
September 22, 2016
Feature
Cloud Storage and BigQuery connector upgrades – The Cloud Storage connector has been upgraded to gcs-connector-1.5.3 and the BigQuery connector has been upgraded to bigquery-connector-0.7.9 . For more information, review the change notes in the GitHub repository.
Change
While Cloud Dataproc has been using Java 8 since its Beta launch in September 2015, there is now a hard dependency on Java 8 or higher.
The --preemptible-worker-boot-disk-size command no longer requires that you specify 0 preemptible workers if you do not want to add preemptible machines when you create a cluster.
September 16, 2016
Change
Updated Debian guest environment with latest changes as outlined in the Linux Guest Environment for Google Compute Engine overview.
Feature
Preemptible boot disk sizes - The disk size for preemptible workers can now be set via the gcloud command-line tool at cluster creation, even when preemptibles are not added to a cluster using the commend --preemptible-worker-boot-disk-size .
September 01, 2016
Change
Cluster resource definitions for newly deployed clusters now display a fully resolved sub-minor image-version (e.g. 1.0.11 instead of 1.0 ). This makes it easier to temporarily revert to an older sub-minor version. See the Cloud Dataproc versioning for more information.
The message displayed after submitting a long-running operation in the GCP Console, such as creating or deleting a cluster, will now indicate the operation has been "submitted" rather than "has succeeded."
Feature
Identity & Access Management support [BETA] - Cloud Dataproc now has beta support for Identity and Access Management (IAM) . Cloud Dataproc IAM permissions allow users to perform specific actions on Cloud Dataproc clusters, jobs, and operations. See Cloud Dataproc Permissions and IAM Roles for more information.
LZO support - Cloud Dataproc clusters now natively support the LZO data compression format.
Google Stackdriver logging toggle - It is now possible to disable Google Stackdriver logging on Cloud Dataproc clusters. To disable Stackdriver logging, use the command --properties dataproc:dataproc.logging.stackdriver.enable=false when creating a cluster with the gcloud command-line tool.
August 25, 2016
Change
Cloud Dataproc 1.1 default – Cloud Dataproc 1.1 is now the default image version for new clusters.
Fixed
Fixed an issue where adding many (~200+) nodes to a cluster would cause some nodes to fail.
Fix an issue where output from initialization actions that timed out was not copied to Cloud Storage.
Feature
Cloud Storage and BigQuery connector upgrades – The Cloud Storage connector has been upgraded to gcs-connector-1.5.2 and the BigQuery connector has been upgraded to bigquery-connector-0.7.8 , which bring performance improvements. See the release notes for the gcs-connector and bigquery-connector for more information.
Apache Zeppelin 0.6.1 – The Apache Zeppelin package built for Cloud Dataproc and installable with this initialization action has been upgraded to version 0.6.1 . This new version of Zeppelin brings support for Google BigQuery.
August 16, 2016
Change
Image versions released after Cloud Dataproc became generally available, starting with 1.0 , will be subject to the Cloud Dataproc versioning policy .
Deprecated
The two Cloud Dataproc image versions released during the Cloud Dataproc beta, 0.1 and 0.2 , will no longer receive updates. You can continue to use the beta images; however, no new updates, such as bug fixes and connector updates, will be applied to these two deprecated image versions.
August 08, 2016
Change
Cloud SDK release 121.0.0 – Updated several gcloud dataproc arguments.
The --preemptible-worker-boot-disk-size argument has been promoted to general availability and can be used to adjust the persistent disk size (in GB) of preemptible workers.
The --master-boot-disk-size-gb and --worker-boot-disk-size-gb arguments have been removed. Use --master-boot-disk-size and --worker-boot-disk-size instead.
Feature
Cloud Dataproc 1.1 – A new image version , Cloud Dataproc 1.1 , has been released. Several components have been updated for this image version including:
Apache Spark 2.0.0
Apache Hive 2.1.0
Apache Pig 0.16.0
To create a cluster with the 1.1 image, you can use the gcloud command-line tool with the --image-version argument, such as gcloud dataproc clusters create --image-version 1.1 .
August 02, 2016
Fixed
Fixed an issue in which the NFS-based Cloud Storage consistency cache would not get cleaned on long-running clusters with sustained high file creation rates (> ~1,000,000 files per hour for a sustained period of time).
Feature
Updated preview image – Several preview image components have been updated, including:
Apache Spark 2.0.0
Apache Hive 2.1.0
Apache Pig 0.16.0
Feature
Cloud Storage and BigQuery connector upgrades – The Cloud Storage connector has been upgraded to gcs-connector-1.5.1 and the BigQuery connector has been upgraded to bigquery-connector-0.7.7 . See the release notes for the gcs-connector and bigquery-connector for more information.
July 19, 2016
Feature
Support for new us-west1 region - Cloud Dataproc is available from day
one in the newly announced west-1
region .
As mentioned in the announcement, some West Coast users may see reductions
in latency.
Apache Spark upgrade to 1.6.2 - Apache Spark on the 1.0 Cloud
Dataproc image version has been
upgraded from 1.6.1 to 1.6.2 .
Cloud Storage and BigQuery connector upgrades - The Cloud Storage
connector has been upgraded to gcs-connector-1.5.0 and the BigQuery
connector has been upgraded to bigquery-connector-0.7.6 . These new
versions bring a number of new features and fixes.
Appendable output streams - GHFS (Google Hadoop File System) now
contains an option to enable support for appendable output streams. You
can enable this option by setting the fs.gs.outputstream.type property
to SYNCABLE_COMPOSITE .
Auto retries on 429 errors - HTTP 429 (rate limit) errors from
Google APIs will now be automatically retried with a backoff.
Cloud Storage performance - Improved the Cloud Storage connector
read performance, especially for lots of small reads or lots of seeks.
See the detailed change
log
for more information.
Fixed
GCP Console
The GCP Console now uses the Cloud Dataproc v1 instead of the
v1beta1 API. Clicking on the equivalent REST link will show the
appropriate v1 API paths and resource names.
Fixed an issue where some HDFS nodes did not join a cluster because their
domain name could not be resolved on first boot.
July 01, 2016
Fixed
Fixed a bug introduced in a June release that caused clusters to fail only
after waiting for ~30 minutes. This occurred most frequently when
initialization actions failed during cluster creation. Now clusters should
fail within 1 minute of an initialization action failure.
Decreased job startup time for SparkSQL jobs with partitioned/nested
directories by applying a patch for Spark
( SPARK-9926 )
Further optimized job startup time for any job with a lot of file inputs by
applying a patch for Hadoop
( HADOOP-12810 )
Feature
gcloud command-line tool
Added the flag --preemptible-worker-boot-disk-size which can be used
to adjust the boot disk size of preemptible workers. This was added in
the gcloud beta track.
The --*-boot-disk-size-gb flag is now deprecated in all tracks and has
been replaced by the --*-boot-disk-size commands.
June 10, 2016
Feature
Spark 2.0-preview - The preview
image now
includes the preview release of Apache Spark .
May 04, 2016
Feature
Cloud SQL Initialization Action - Cloud Dataproc now has a Cloud SQL
I/O and Hive
Metastore
initialization action. This initialization action installs a Google Cloud
SQL proxy on every node in a Cloud Dataproc cluster.
It also configures the cluster to store Apache Hive metadata on a given
Cloud SQL instance.
April 29, 2016
Fixed
The staging directory for a Cloud Dataproc job is now automatically cleared
when a job completes.
If a cluster fails to delete properly, it will now be transitioned to a
FAILED state instead of remaining in a DELETING state.
Fixed an issue which prevented the Cloud Dataproc --properties
command from changing
MapReduce properties.
Fixed a bug where an exception would be thrown when trying to set YARN
log-aggregation to output to Cloud Storage (related to
YARN-3269 ).
March 30, 2016
Feature
Spark 1.6.1 - The Cloud Dataproc image version 1.0 has been updated to
include the Spark
1.6.1 maintenance
release instead of Spark 1.6.0.
OSS upgrades - This release upgrades the Cloud Storage and Google
BigQuery
connectors to
gcs-connector-1.4.5 and bigquery-connector-0.7.5, respectively.
Fixed
It is now possible to specify --num-preemptible-workers 0 through the
gcloud command-line tool. Previously this would fail.
Fixed a validation issue which produced 500 HTTP errors when the response
should have been 400 bad input or 200 OK .
Resolved a cache validation issue and re-enabled re-enable directory
inference for the Cloud Storage connector
( fs.gs.implicit.dir.infer.enable ).
Adjusted Compute Engine migration settings due to unexpected host failures -
normal VMs will automatically restart after migration and preemptible
machines will not. Previously all VMs were set to not automatically restart
after a migration.
Addressed an issue where rapid job submission would result in a Too many
pending operations on a resource error.
March 08, 2016
Fixed
Added strict validation of full compute resource URIs. The following
patterns are supported:
https://<authority>/compute/<version>/projects/...
compute/<version>/projects/...
projects/...
Fixed an issue wher
Feature
Subnetwork support - Cloud Dataproc now supports
subnetworks through the gcloud command-line
tool. You can now use the --subnet SUBNET command to specify a subnetwork
when you create a Cloud Dataproc cluster.
February 22, 2016
Feature
Cloud Dataproc is now generally available! For more information, see our
announcement blog post .
Custom compute engine machine types - Cloud Dataproc clusters now
support custom Compute Engine machine
types
for both master and worker nodes. This means you can create clusters with
customized amounts of virtual CPUs and memory. For more information, please
read the Dataproc documentation for custom machine
types .
OSS upgrades - We have released Cloud Dataproc version
1.0 .
This release includes an upgrade to Apache Spark 1.6.0 and Apache Hadoop
2.7.2 . This release also includes new versions of the Cloud Storage
and Google BigQuery
connectors .
v1 API - The v1 API for Cloud Dataproc is now live. This API includes
support for regionality along with minor fixes and adjustments. The API is
available in the APIs
Explorer and
also has a Maven
artifact
in Maven Central. For more information, review the REST API
documentation .
Support for --jars for PySpark - Added support for using the --jars
option for PySpark jobs.
API auto-enable - Enabling the Cloud Dataproc API now automatically
enables required dependent APIs, such as Cloud Storage and Google
Compute Engine
Fixed
Resolved several issues that occasionally caused some clusters to hang being
scaled down.
Improved validation of certain types of malformed URLs, which previously
failed during cluster deployment.
February 03, 2016
Fixed
Improved reliability of the DeleteJob command.
Fixed a bug that caused jobs to remain in a RUNNING state after the job
completed successfully.
Feature
A new --image-version option has been added: preview
Unlike other numerical versions like 0.1 and 0.2 , the preview
version will contain newer Hadoop/Spark/Pig/Hive components targeted for
potential release in the next stable Cloud Dataproc distribution
version, and will change over time.
As of February 3, 2016, the preview version contains Spark 1.6.0, with
the same Hadoop/Pig/Hive versions as Cloud Dataproc 0.2 .
The preview option is being rolled out to the GCP Console
gradually, so may not be visible in your account for another week or so.
For all users, the preview option is accessible by deploying clusters
with the gcloud command-line tool.
January 27, 2016
Fixed
Fixed two issues which would sometimes cause virtual machines to remain
active after a cluster deletion request was submitted
The Spark maxExecutors setting is now set to 10000 to avoid the
AppMaster failing on jobs with many tasks
Improved handling for aggressive job submission by making several changes to
the Cloud Dataproc agent, including:
Limiting the number of concurrent jobs so they are proportional to the
memory of the master node
Checking free memory before scheduling new jobs
Rate limiting how many jobs can be scheduled per cycle
Improved how HDFS capacity is calculated before commissioning or
decommissioning nodes to prevent excessively long updates
Feature
Two new options have been added to the Cloud Dataproc gcloud command-line
tool for adding tags and metadata to virtual machines used in Cloud Dataproc
clusters. These tags and metadata will apply to both regular and preemptible
instances.
The --tags option will add tags to the Google Compute Engine instances
in a cluster. For example, using the argument --tags foo,bar,baz will
add three tags to the virtual machine instances in the cluster.
The --metadata option will add metadata to the compute engine
instances. For example, using --metadata 'meta1=value1,key1=value2'
will add two key-value pairs of metadata.
Support for heterogeneous clusters where the master node and worker nodes
have different amounts of memory. Some memory settings were previously based
on the master node which caused some problems as described in this Stack
Overflow
question .
Cloud Dataproc now better supports clusters with master and worker nodes
which use different machine types.
GCP Console
The Output tab for a job now includes a Line wrapping option to
make it easier to view job output containing very long lines
January 21, 2016
Fixed
SparkR jobs no longer immediately fail with a "permission denied" error
( Spark JIRA issue )
Configuring logging for Spark jobs with the --driver-logging-levels option
no longer interferes with Java driver options
GCP Console
The error shown for improperly-formatted initialization actions now
properly appears with information about the problem
Very long error messages now include a scrollbar so the Close button
remains on-screen re ## January 7, 2016 #### Bugfixes
Fixed issue in Dataproc version 0.1 that caused zero-byte _SUCCESS and
_FAILURE files for each job to be continually re-written to Cloud Storage.
Feature
The dataproc command in the Google Cloud SDK now includes a --properties
option for adding or updating properties in some cluster configuration
files, such as core-site.xml . Properties are mapped to configuration files
by specifying a prefix, such as core:io.serializations . This command makes
it possible to modify multiple properties and files when creating a cluster.
For more information, see the Cloud Dataproc documentation for the
--properties
command .
GCP Console
An option has been added to the "Create Clusters" form to enable the
cloud-platform scope for a cluster. This lets you view and manage data
across all Google Cloud Platform services from Cloud Dataproc clusters.
You can find this option by expanding the Preemptible workers, bucket,
network, version, initialization, & access options section at the
bottom of the form.
December 16, 2015
Feature
Cloud Dataproc clusters now have vim , git , and bash-completion
installed by default
The Cloud Dataproc API now has an official Maven
artifact ,
Javadocs ,
and a downloadable .zip
file
GCP Console
Properties can now be specified when submitting a job, and can be seen
in the Configuration tab of a job
A Clone button has been added that allows you to easily copy all
information about a job to a new job submission form
The left-side icons for Clusters and Jobs are now custom icons rather
than generic ones
An Image version field has been added to the bottom of the create
cluster form that allows you to select a specific Cloud Dataproc image
version
when creating a cluster
A VM Instances tab has been added on the cluster detail page, which
you can use to display a list of all VMs in a cluster and easily SSH
into the master node
An Initialization Actions field has been added to the bottom of the
create cluster form, which allows you to specify initialization
actions when creating a cluster
Paths to Cloud Storage buckets
that are displayed in error messages are now clickable links.
Fixed
Forced distcp settings to match mapred-site.xml settings to provide
additional fixes for the distcp command (see this related
JIRA )
Ensured that workers created during an update do not join the cluster until
after custom initialization actions are complete
Ensured that workers always disconnect from a cluster when the Cloud
Dataproc agent is shutdown
Fixed a race condition in the API frontend that occurred when validating a
request and marking cluster as updating
Enhanced validation checks for quota, Cloud Dataproc image, and
initialization actions when updating clusters
Improved handling of jobs when the Cloud Dataproc agent is restarted
GCP Console
Allowed duplicate arguments when submitting a job
Replaced generic Failed to load message with details about the cause
of an error when an error occurs that is not related to Cloud Dataproc
When a single jar file for a job is submitted, allowed it to be listed
only in the Main class or jar field on the Submit a Job form, and
no longer required it to also be listed in the Jar files field
November 18, 2015
Change
Core service improvements
If set, a project's default zone setting is now used as the default value
for the zone in the create-cluster form in the GCP Console.
Optimizations
Hive performance has been greatly increased, especially for partitioned
tables with a large number of partitions
Multithreaded listStatus has now been enabled, which should speed up job
startup time for FileInputFormats reading large numbers of files and
directories in Cloud Storage
Feature
Version selection - With the release of Cloud Dataproc version 0.2 , you can now select among different versions of Cloud Dataproc (see Cloud Dataproc Versioning for information on support for previous versions and Cloud Dataproc Version List a list of the software components supported in each version). You can select a Cloud Dataproc version when creating a cluster through the Cloud Dataproc API, Cloud SDK (using the gcloud beta dataproc clusters create --image-version command) or through the https://console.cloud.google.com/. Note that within four days of the release of a new version in a region, the new version will become the default version used to create new clusters in the region.
OSS upgrades - We have released Cloud Dataproc version 0.2 . The new Spark component includes a number of bug fixes. The new Hive component enables use of the hive command, contains performance improvements, and has a new metastore.
Connector updates - We released updates to our BigQuery and Google Cloud Storage connectors (0.7.3 and 1.4.3, respectively.) These connectors fix a number of bugs and the new versions are now included in Cloud Dataproc version 0.2 .
Hive Metastore - We introduced a MySQL-based per-cluster persistent metastore, which is shared between Hive and SparkSQL. This also fixes the hive command.
More Native Libraries - Cloud Dataproc now includes native Snappy libraries. It also includes native BLAS, LAPACK and ARPACK libraries for Spark's MLlib.
Clusters --diagnose command - The Cloud SDK now includes a --diagnose command for gathering logging and diagnostic information about your cluster. More details about this command are available in the Cloud Dataproc support documentation .
Fixed
Fixed the ability to delete jobs that fast-failed before some cluster and
staging directories were created
Fixed some remaining errors with vmem settings when using the distcp
command
Fixed a rare bug in which underlying Compute Engine issues could lead to VM
instances failing to be deleted after the Cloud Dataproc cluster had been
successfully deleted
Hive command has been fixed
Fixed error reporting when updating the number of workers (standard and
preemptible) in a cluster
Fixed some cases when Rate Limit Exceeded errors occurred
The maximum cluster name length is now correctly 55 instead of 56 characters
GCP Console
Cluster list now includes a Created column, and the cluster
configuration tab now includes a Created field, telling the creation
time of the cluster
In the cluster-create screen, cluster memory sizes greater than 999 GB
are now displayed in TB
Fields that were missing from the PySpark and Hive job configuration tab
( Additional Python Files and Jar Files ) have been added
The option to add preemptible nodes when creating a cluster is now in
the "expander" at the bottom of the form
Machine types with insufficient memory (less than 3.5 GB) are no longer
displayed in the list of machine types (previously, selecting one of
these small machine types would lead to an error from the backend
The placeholder text in the Arguments field of the submit-job form has
been corrected
October 23, 2015
Feature
GCP Console: Added support for adding, editing, and removing preemptible
instances
in clusters.
October 15, 2015
Fixed
Fixed a bug in which DataNodes failed to register with the NameNode on
startup, resulting in less-than-expected HDFS capacity.
Prevented the submission of jobs in an Error state.
Fixed bug that prevented clusters from deleting cleanly in some situations.
Reduced HTTP 500 errors when deploying Cloud Dataproc clusters.
Corrected distcp out-of-memory errors with better cluster configuration.
Fixed a situation in which jobs failed to delete properly and were stuck in
a Deleting state.
Change
Core service improvements
Provided more detail about HTTP 500 errors instead of showing 4xx
errors.
Added information on existing resources for Resource already exists
errors.
Specific information now provided instead of generic error message for
errors related to Cloud Storage .
Listing operations now support pagination.
Optimizations
Significantly improved YARN utilization for MapReduce jobs running directly
against Cloud Storage .
Made adjustments to yarn.scheduler.capacity.maximum-am-resource-percent to
enable better utilization and concurrent job support.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
