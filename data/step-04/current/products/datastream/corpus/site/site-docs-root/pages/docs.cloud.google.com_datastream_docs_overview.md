---
title: "Datastream overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/overview
  title: "Datastream overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Guides
Send feedback
Datastream overview
Stay organized with collections
Save and categorize content based on your preferences.
Datastream is a serverless and easy-to-use change data capture (CDC) and replication service that lets you synchronize data reliably, and with minimal latency.
Datastream provides seamless replication of data from operational databases into BigQuery. In addition, Datastream supports writing the change event stream into Cloud Storage, and offers streamlined integration with Dataflow templates to build custom workflows for loading data into a wide range of destinations, such as Cloud SQL and Spanner. You can also use Datastream to take advantage of the event stream directly from Cloud Storage to realize event-driven architectures. Datastream supports Oracle, MySQL, SQL Server, PostgreSQL (including AlloyDB for PostgreSQL), MongoDB, Salesforce, and Spanner sources.
Benefits of Datastream include:
Seamless setup of ELT (Extract, Load, Transform) pipelines for low-latency
data replication to enable near real-time insights in BigQuery.
Being serverless so there are no resources to provision or manage, and the
service scales up and down automatically, as needed, with minimal downtime.
Easy-to-use setup and monitoring experiences that achieve super-fast
time-to-value.
Integration across the best of Google Cloud data services'
portfolio for data integration across Datastream,
Dataflow, Pub/Sub, BigQuery, and more.
Synchronizing and unifying data streams across heterogeneous databases and
applications.
Security, with private connectivity options and the security you expect from
Google Cloud.
Being accurate and reliable, with transparent status reporting and robust
processing flexibility in the face of data and schema changes.
Supporting multiple use cases, including analytics, database replication,
and synchronization for migrations and hybrid-cloud configurations, and for
building event-driven architectures.
Use cases
The streaming capabilities of Datastream enable a variety of use cases:
Replicating and synchronizing data across your organization with minimal
latency
You can synchronize data across heterogeneous databases and applications
reliably, with low latency, and with minimal impact to the performance of
your source. Unlock the power of data streams for analytics, database
replication, cloud migration, and event-driven architectures across hybrid
environments.
Scale up or down with a serverless architecture seamlessly
Get up and running fast with a serverless and easy-to-use service that
scales seamlessly as your data volumes shift. Focus on deriving up-to-date
insights from your data and responding to high-priority issues, instead of
managing infrastructure, performance tuning, or resource provisioning.
Integrate with the Google Cloud data integration suite
Connect data across your organization with the Google Cloud data
integration suite of products. Integrate Datastream with
Dataflow job templates to read data from a Cloud Storage bucket
and load it into a variety of destinations, such as BigQuery,
Spanner, and Cloud SQL.
Experience elements
There are three main elements in Datastream:
Private connectivity configurations enable Datastream to
communicate with a data source over a private network (internally within
Google Cloud, or with external sources connected over VPN or
Interconnect). This communication happens through a Virtual Private Cloud (VPC)
peering connection.
Connection profiles represent connectivity information to both a source
and a destination. This information will be used by a stream.
Streams use the information in the connection profiles to transfer CDC
and backfill data from the source to the destination.
What's next
Start replicating your data from a source database to BigQuery datasets .
Learn more about key concepts and features of Datastream.
Find out how to create private connectivity configurations ,
connection profiles and streams .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
