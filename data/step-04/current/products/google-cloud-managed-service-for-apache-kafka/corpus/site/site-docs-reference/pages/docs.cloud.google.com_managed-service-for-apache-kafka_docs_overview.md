---
title: "Managed Service for Apache Kafka overview \_|\_ Google Cloud Managed Service\
  \ for Apache Kafka \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview
  title: "Managed Service for Apache Kafka overview \_|\_ Google Cloud Managed Service\
    \ for Apache Kafka \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Google Cloud Managed Service for Apache Kafka
Guides
Send feedback
Managed Service for Apache Kafka overview
Stay organized with collections
Save and categorize content based on your preferences.
Managed Service for Apache Kafka is a Google Cloud service that helps you run secure,
scalable open source Apache Kafka clusters. This page is an overview of what the
service automates and simplifies for you. For
more information about Apache Kafka, see the Apache Kafka
website .
Simple sizing and scaling
To size or scale a Managed Service for Apache Kafka cluster, you need only set the total
vCPU count and RAM size for the cluster. Management of brokers, including
storage, is fully automated. To keep up with demands of clients, you can monitor
vCPU and other resource utilization and adjust them up or down.
When you set the vCPU count and RAM size, the service automates broker resizing
and provisioning. If increasing the cluster size requires
a new broker, the service can automatically rebalance partitions across brokers.
Broker provisioning
When you configure the total vCPU and RAM size for the cluster,
the service provisions new brokers and scales existing brokers. For a typical
cluster configuration, the total vCPU and RAM size is split evenly across all
brokers. This means that fractional vCPU counts per broker are allowed, although
a minimum of a single vCPU per broker is required. All clusters are distributed
across three zones. This means that a minimum of 3 vCPU and 3 GiB of RAM per
cluster is required.
As you increase the cluster size, brokers are scaled vertically up to 15 vCPU
per broker. After this limit is reached, the service creates new brokers. When
you decrease the cluster size, existing brokers are scaled down to a single
vCPU, but not deleted.
The maximum broker size might change at any time.
This limit was chosen to maintain linear scaling of broker throughput with vCPU
count.
Scaling algorithm
The number of brokers is determined by the cluster's total vCPU or memory
capacity. The scaling ratio is 1 broker for every 15 vCPUs or 120 gibibytes
(GiB) of resources, whichever results in a greater number of brokers. The vCPU
to memory ratio (vCPU:GiB) must stay between 1:1 and 1:8. The brokers are
equally distributed among the 3 zones, with a maximum difference of one.
For example, if you configure a cluster with 70 vCPUs and 130 GiB RAM, along
with a replication factor of 3, the following calculation determines the number
of brokers:
Calculate the number of brokers required to account for vCPUs: ceiling(70
vCPUs / 15 vCPUs) = 5 brokers
Calculate the number of brokers required to account for memory: ceiling(130
GiB / 120 GiB) = 2 brokers
In this scenario, the cluster has 5 brokers, because the number of brokers is
determined by the number of vCPUs. Two of the 3 zones each have 2 brokers
assigned to them, and the last zone has 1 broker.
Storage management
Storage management is automated. In most situations, you are responsible for
setting the retention time on individual topics to control cost or satisfy your
data retention policies. You don't need to provision and manage persistent
disks.
The service relies on tiered storage
( KIP-405 ).
Tiered storage combines pre-provisioned persistent disk volumes attached to
brokers with virtually unlimited object storage.
The service allocates at least 100 GiB of SSD persistent
disks for each vCPU to balance performance, availability, and cost. You are
billed for 100 GiB per vCPU, although the actual disk size per broker might
exceed this value. The size of the disk per broker is never reduced, even if the
cluster is scaled down.
Each partition leader buffers messages in segment files on these persistent
disks. After a segment is rolled, it is moved to persistent object storage
backed by regional Cloud Storage . The size of these segment files is
set by log.roll.ms and log.segment.bytes settings.
While these details are useful to understand, storage is managed by the service.
The specific configurations, such as amount of persistent disk capacity per
vCPU, are implementation details that might change. You don't have direct access
to Cloud Storage buckets used for persistent storage.
Note: As a part of Tiered storage, Managed Service for Apache Kafka creates
a topic named __remote_log_metadata . Don't delete this topic, as doing so
prevents your cluster from reading and writing data.
Rebalancing
For newly provisioned brokers to be useful in maintaining performance, some
traffic from existing brokers must be moved to these new machines. To make this
easier, you can turn on automatic rebalancing.
With automatic rebalancing turned on, when a new broker is provisioned, the
service automatically rebalances the partitions from existing brokers. The
tiered storage model verifies that a relatively small amount of data must be
copied to new brokers, speeding up rebalancing.
The rebalancing algorithm is based on the count of partitions.
It does not account for the actual traffic served by each partition.
Flexible networking
The service makes a cluster accessible from any VPC securely. This includes
access from multiple VPCs, projects, and regions.
To configure networking for a cluster, you provide the set of subnets where the
cluster is accessible. The service provisions private IP addresses for the
bootstrap servers and brokers in each subnet. It also sets up private
Cloud DNS with URLs for each IP address. The bootstrap servers have a load
balancer, so there is a single bootstrap URL per cluster. The URLs are the same
across all VPCs so client configurations can be consistent across environments.
This level of flexibility is achieved thanks to Private Service
Connect (PSC). Each IP address allocated for
a cluster requires a PSC endpoint. The endpoints are provisioned automatically.
Secure clusters
The service offers the following features for security of the clusters:
authentication, authorization, encryption, patching, and resource isolation. It
also disallows unauthenticated and unencrypted connections and storage.
Authentication
The service supports two authentication methods: Simple Authentication and
Security Layer (SASL) and mutual TLS (mTLS).
mTLS authentication is available on clusters created after June 24, 2025. All
connections to managed clusters authenticate with a principal that is an
IAM identity using SASL or a
client certificate using mTLS. Human, service, and federated accounts are
supported as principals when using SASL.
The service does not support other protocols, including SASL/GSSAPI,
SASL/SCRAM-SHA-256, and SASL/SCRAM-SHA-512. The service also does not allow
unauthenticated connections.
Authorization
The service employs a layered approach to authorization. IAM
controls cluster management actions such as creating, updating, and deleting
resources. Authorization for authenticated principals depends on the method
used:
SASL : Principals using IAM are authorized through
Google Cloud IAM role bindings or with Kafka ACLs on
the cluster. For more information, see Configure SASL authentication .
mTLS : Principals authenticating with mTLS are authorized through Kafka
ACLs. For more information, see Configure mTLS authentication .
You can manage Kafka ACLs with the Google Cloud tools or third-party Kafka tools.
For more information about configuring IAM and Kafka ACLs, see
Access control with IAM and Kafka ACLs .
Encryption
Encryption is required. All connections to clusters must use TLS. The TLS
certificates presented by the brokers are signed by the Public Certificate Authority.
Stored data is always encrypted. Choose whether to use Google-managed or
Customer-managed encryption keys ( CMEK ) for encryption
at rest.
Patching
The service team tracks security vulnerabilities discovered in the open source
code. When the service discovers vulnerabilities, it patches your clusters
automatically.
Resource isolation
Another security feature of the service is resource isolation. The managed
service deploys clusters in tenant projects in a
private VPC inaccessible through public IP addresses. Each of your projects has
a dedicated tenant project, with a dedicated service agent
account. This helps limit the scope of access granted to the service.
Schema registry
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
To simplify coordination between producers and consumers, Managed Service for Apache Kafka
includes a schema registry API. A registry provided by the service acts as a
repository of schemas that are shared among applications.
The service implements the
Confluent Schema Registry REST API
that helps in integration with existing Kafka applications. Apache Avro and
Protocol Buffer (Protobuf) schema formats are supported. JSON is not supported.
Managed Service for Apache Kafka also offers an administrative API and toolset for
managing schema registries and schemas. The toolset includes the
Google Cloud console, gcloud CLI, and client libraries.
For more information about schema registry, see the
Schema registry overview .
Data integration with Kafka Connect
Managed Service for Apache Kafka simplifies data integration through
Kafka Connect. Kafka Connect offers several built-in connector plugins hosted in
Connect clusters. These connectors are used for migration, backup, disaster recovery,
high availability, and data integration. These connectors let you connect your
Managed Service for Apache Kafka clusters to various systems, including
other Kafka deployments and Google Cloud services like
BigQuery, Cloud Storage, and Pub/Sub.
Kafka Connect provides scalable, reliable data integration with
lower operational overhead and integrated monitoring and logging.
To know more about Kafka Connect, see the Kafka Connect overview .
High availability clusters
The goal of the service is to provide regional clusters for mission-critical
applications. Specifically, the service protects you from failures of individual
zones or brokers.
To achieve this, all clusters are provisioned in a rack-aware three-zone
configuration. The default topic configuration requires at least three replicas.
Rack-awareness makes sure that replicas are created in different zones. The
default minimum number of in-sync replicas is two. This means that your cluster
can tolerate complete loss of a zone or a broker.
When a broker fails, due to software, hardware or networking failure, it
is replaced automatically. When the service detects broker failure, it
automatically restarts it, on a different machine if necessary. After the broker
is available, Apache Kafka integrates the broker into the
cluster. Complete zone failure might make it impossible to create a new broker.
However, the cluster continues operating as long as the other two zones
remain available.
In addition to these specific features, a growing list of internal
tools and processes proactively maintain the health of the service, Apache
Kafka code, and updates. Data and metadata backups are maintained at multiple
levels, allowing the service to recover from many human errors and software
failures.
The service does not provide protection from regional or dual-zone
failures. For applications that require this level of protection, we recommend
running two separate regional clusters. You can synchronize the data between
two clusters by using tools such as MirrorMaker 2.0 from Kafka Connect.
Tools for your style of administration
The service aims to offer a complete set of tools for your style of cluster
management and troubleshooting. This includes tools for administering,
monitoring, and logging.
The Managed Service for Apache Kafka is exposed as a Google Cloud API . This means
that you can manage clusters and cluster resources using REST and gRPC APIs.
Several clients and interfaces are provided for these APIs, including
Terraform providers if you prefer the infrastructure as code approach.
UI in Google Cloud console for interactive work in a browser.
The gcloud CLI for interactive work in a shell.
Client libraries in Java, Python, Go and other languages for custom
development and scripting.
For monitoring and troubleshooting, the service exports metrics to
Cloud Monitoring. Some of the metrics are available in the service UI.
A complete set is available in Cloud Monitoring for
interactive work, configuring alerts, and export to other systems.
The service also exports broker logs to Cloud Logging. These are searchable
and can be used to create log-based metrics and alerts.
Upgrades and patches
Managed Service for Apache Kafka clusters run on Apache Kafka version 3.7.1.
The service automatically patches critical security vulnerabilities.
Updates to the underlying infrastructure, including the operating system and
orchestration layers, are continuous and automatic. Brokers are updated with a
rolling restart, with no downtime to the cluster.
The service doesn't automatically upgrade the Apache Kafka code running on the
brokers to new minor versions.
Transparent cost
The pricing model for Managed Service for Apache Kafka is similar to the charges you see
when you run Apache Kafka yourself on Compute Engine .
You pay for the resources you provision—vCPU, RAM, and local storage—and
consume—persistent storage and data transfer. Persistent storage and vCPU cost
more with Managed Service for Apache Kafka compared
to setting up a similar system yourself. In contrast, data transfer and
local storage prices are similar between Managed Service for Apache Kafka
and self-managed Kafka. For more information
about pricing, see
Managed Service for Apache Kafka pricing .
Compatible because we run Apache Kafka
Finally, Managed Service for Apache Kafka runs the same
open source software you may already run in your
environment. You don't have to change your application code to migrate
it to the service.
Limitations
Managed Service for Apache Kafka has the following limitations:
Each cluster must have equal resources in each
of the three zones. Single-zone or two-zone Managed Service for Apache Kafka clusters
are not supported.
You cannot choose the zones when you create the cluster.
You cannot configure the volume of local storage on a cluster.
Managed Service for Apache Kafka runs in the
KRaft mode . Zookeeper mode is not
supported.
JMX APIs for metrics are not supported.
Topic compression with zstd is not supported. Supported values
for compression.type include lz4 , gzip , snappy , and uncompressed .
While you can change broker
configurations with read-only update mode at any time, these changes
take effect only when the brokers restart. Restarts happen periodically as part
of Google's maintenance and upgrade processes, but there's no set schedule or a
way to manually trigger them. As a result, you can't control when
these changes take effect. Examples of read-only configurations include
auto.create.topics.enable and background.threads .
Updates to configurations with the cluster-wide update mode, such as
message.max.bytes , don't require restarts and take effect immediately.
Some broker configuration parameters are managed by the service
and cannot be updated. This includes
broker.id and storage-related settings, such as
remote.log.storage.system.enable .
What's next?
Create a Managed Service for Apache Kafka cluster .
Send and receive messages by using a Managed Service for Apache Kafka cluster .
Review the Managed Service for Apache Kafka limitations .
Learn about Managed Service for Apache Kafka pricing .
Apache Kafka® is a registered
trademark of The Apache Software Foundation or its affiliates in the United
States and/or other countries.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
