---
title: "About managed migration \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/about-managed-migration
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/about-managed-migration
  title: "About managed migration \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataproc Metastore
Guides
Send feedback
About managed migration
Stay organized with collections
Save and categorize content based on your preferences.
Managed migration is an automated feature that helps you migrate data from a
self-managed Hive Metastore to a Dataproc Metastore service, without
any sizable downtime (otherwise known as a flag day ).
Managed Migration Architecture
The following diagram provides the high-level architecture of a managed
migration.
Managed migration flow
To complete a managed migration, your service runs through two migration
processes— start migration and complete migration .
You can cancel a migration at any time with the cancel migration process.
There are also a number of operational commands you can run, which aren't
required to complete a migration. For example, list migrations or delete
migrations .
As your service moves through this process, it also moves between various
migration states and migration phases . These states and phases represent the
processes that are occurring in the background. For example, the MIGRATING
state indicates that your service is actively transferring data from your
Cloud SQL database to Dataproc Metastore.
Start Migration
Dataproc Metastore establishes a connection with your
private IP Cloud SQL instance . After the connection is made,
Dataproc Metastore uses the Cloud SQL instance as its
Hive Metastore (HMS) backend database. It also remains as the source of
truth for your data during the migration. Metadata reads and writes still
occur in Cloud SQL when the migration is active.
A change data capture (CDC) pipeline is started . This pipeline keeps the
Cloud SQL instance in your project and Spanner in the
Dataproc Metastore managed project in sync. This means that
all changes to the HMS database in the Cloud SQL instance are captured
through Datastream and written to the
Dataproc Metastore Spanner database.
Once the start migration process is successful, you can start routing
data workloads to Dataproc Metastore. At this point, Cloud SQL is
still the source of truth for your data.
Complete migration
After you finish moving your workloads to Dataproc Metastore, you
can complete the migration. When a complete migration process is called,
the following occurs:
Dataproc Metastore transitions into a read-only mode until the
complete migration process finishes.
The CDC stream transfers all in-flight data to Dataproc Metastore.
Dataproc Metastore connects to Spanner and disconnects
from Cloud SQL. Dataproc Metastore now acts as the source of
truth for your HMS data.
Proxy and pipeline considerations
Proxies
Dataproc Metastore uses a Cloud SQL Auth proxy
chained to a SOCKS5 proxy to connect to your private IP Cloud SQL instance.
The SOCKS5 proxy servers are exposed through a service attachment as shown
in previous architecture diagram .
Each migration requires a dedicated NAT subnet. This is because
a NAT subnet can't have more than one service attachment.
To avoid cross-region latency issues, provide subnets that are in the
same region as your Cloud SQL instance to host the SOCKS5 proxy. For example,
proxy_subnet and nat_subnet .
Change data capture pipeline
The change data capture pipeline uses VPC peering to establish a connection
between Datastream and private IP Cloud SQL.
For each migration, a new private connection is created and a new
peering connection is established.
The VPC network hosting the Cloud SQL instance has as many
peering connections as there are active migrations. Make sure that your
VPC network has the capacity to host all of the necessary peering connections.
What's next
Prerequisites for managed migration
Use managed migration
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
