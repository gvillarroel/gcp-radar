---
title: "Key concepts and features \_|\_ Datastream \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/behavior-overview
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/behavior-overview
  title: "Key concepts and features \_|\_ Datastream \_|\_ Google Cloud Documentation"
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
Key concepts and features
Stay organized with collections
Save and categorize content based on your preferences.
Behavior and use cases
Datastream gives users the ability to bring source data from a Relational Database Management System (RDBMS) and other sources into destinations such as BigQuery, BigLake Iceberg tables and Cloud Storage in near real-time fashion. This provides for downstream use-cases such as loading the data into BigQuery for data warehousing and analytics, or running Spark jobs over the data for artificial intelligence and machine learning use cases.
Concepts
This section describes the main concepts that you need to understand to use Datastream effectively.
Change data capture
Change data capture (CDC) is a set of software design patterns used to determine (and track) the data that has changed so that action can be taken using the changed data. CDC is also an approach to data integration that's based on the identification, capture, and delivery of the changes made to enterprise data sources.
Event sourcing
Introduced in 2005, event
sourcing is a design
pattern where every change to a state of an application is captured in an event
object. Utilizing event sourcing, an application can rebuild its state, perform
point-in-time recovery
(by processing the event until that point), recompute the state in case of a
change in logic, or enable Command Query Responsibility Segregation
(CQRS) design. With the evolution of
tools for real-time event processing, many applications are moving to the event
sourcing model. Historically, transactional databases were always
event-oriented, because of atomicity, consistency, isolation, and durability
(ACID) requirements.
Transactional databases
In a transactional database, the set of operations that the database is going to perform is usually written to a write-ahead log (WAL) before any operations are executed on the storage engine. After an operation is executed on the storage engine and is committed to the WAL, the operation is considered to be successful. Using WAL enables atomicity and durability, and also allows high-fidelity replication of the database. Some databases will write to the log the exact operation that will happen on the storage level (for example, write 0x41 on location 20 ), so those actions can only be replicated (or redone) on the same storage engine. Other databases will log a complete logical statement (or row) that can be re-executed on a different storage engine.
Events and streams
Datastream ingests a lot of data in near real-time fashion from a variety of sources, and makes the data available for consumption in the destination. The unit of data stored by Datastream is an event. A stream represents continuous ingestion of events from a source and writing them to a destination.
Unified types
Data sources have their own types, some specific to the database itself, and some that are generic and are shared across databases. Because there are many different sources that generate streams to a unified destination, there must be a standard, unified way to represent the original source type across all sources. The unified type is a common and lossless way to represent data types across all sources so that they can be consumed in a cohesive manner. The unified types supported by Datastream will represent the superset of all normalized types across all supported source systems so that all types can be supported losslessly.
Entity context
Datastream has five entities:
Private connectivity configurations enable Datastream to
communicate with data sources over a secure, private network connection.
This communication happens through Virtual Private Cloud (VPC) peering.
Connection profiles represent connectivity information to a specific
source or destination database.
Streams represent a source and destination connection profile pair,
along with stream-specific settings.
Objects represent a sub-portion of a stream. For example, a database
stream has a data object for every table being streamed.
Events represent every data manipulation language (DML) change for a
given object.
After creating a private connectivity
configuration ,
you can connect to sources hosted in Google Cloud or elsewhere over a
private communication channel. Private connectivity is optional,
Datastream also supports other modes of connectivity over public
networks.
After creating a connection
profile for a source and a
destination, you can create streams that use the information stored in the
connection profiles to transfer data from the source to the destination.
After creating a stream , Datastream
connects to the source directly, consumes content, and then processes and writes
the events to the destination based on the event
structure .
Private connectivity configurations and connection profiles can be managed separately from streams for reuse.
Features
Features for Datastream include:
Serverless: You can configure a stream and the data starts moving. There
are no installation, resource allocation, or maintenance overheads. As data
volumes grow and shrink, Datastream's autoscaling capabilities
allocate resources to keep data moving in near real-time, automatically.
Unified Avro-based type schema: Datastream enables
source-independent processing by converting all source-specific data types
into a unified Datastream type schema, based on Avro types.
Stream historical and CDC data: Datastream streams both
historical and CDC source data in near real-time, simultaneously.
Oracle CDC without additional licenses: Datastream provides
LogMiner-based CDC streaming from any Oracle source version 11.2g and later,
without the need to pay for additional licenses or software installations.
BigQuery destination: Changes in the source are replicated
continuously to BigQuery tables in near real-time. Data in
BigQuery is almost immediately available for analytics.
Cloud Storage destination: CDC data is written to self-describing
Avro or JSON files in Cloud Storage continually. This information is
consumable for additional processing, either directly in place or by loading
downstream to another destination such as Spanner.
Centralized metadata management with Knowledge Catalog:
Datastream resources, such as streams, connection profiles, and
connectivity configurations are automatically synchronized with
Knowledge Catalog. This lets you search for and browse
these assets directly in the Knowledge Catalog user
interface.
Use cases
There are three main scenarios for using Datastream:
Data integration : Data streams from databases and Software-as-a-Service (SaaS) cloud services can feed a near real-time data integration pipeline by loading data into BigQuery.
Streaming analytics : Changes in databases are ingested into streaming pipelines such as with Dataflow for fraud detection, security event processing, and anomaly detection.
Near real-time availability of data changes : Availability of data changes in near real-time powers artificial intelligence and machine learning applications to prevent churn or increase engagement using marketing efforts or by feeding back into production systems.
Behavior overview
Datastream enables customers stream ongoing changes from multiple data sources directly into Google Cloud.
Sources
There is setup work required for a source to be used with Datastream, including authentication and additional configuration options.
Each source generates events that reflect all data manipulation language (DML) changes.
Each stream can backfill historical data, as well as stream ongoing changes into the destination.
Destinations
Datastream supports BigQuery, BigLake Iceberg tables and Cloud Storage as destinations . When the stream is created, its destination configuration is defined.
Event delivery
The event order isn't
guaranteed. Event metadata
includes information that can be used to order the events.
The event delivery occurs
at least once. Event metadata includes data that can be used to remove any
duplicate data in the destination.
The event size is limited to 20 MB per event for BigQuery
destinations and 100 MB per event for Cloud Storage destinations.
To learn more about events, see Events and streams .
High availability and disaster recovery
This section contains information about how Datastream handles scenarios associated with high availability and disaster recovery.
High availability: Datastream is a regional service, running on
multiple zones in each
region . A single-zone
failure in any one region doesn't impact the availability or quality of the
service in other zones.
Disaster recovery: If there's a failure in a region, then any streams
running on that region will be down for the duration of the outage. After
the outage is resolved, Datastream will continue exactly where it
left off, and any data that hasn't been written to the destination will be
retrieved again from the source. In this case, duplicates of data may reside
in the destination. See Event delivery for more
information on removing the duplicate data.
Initial data and CDC data
Because data sources have data that existed before the time that the source was connected to a stream (historical data), Datastream generates events both from the historical data as well as data changes happening in real-time.
To ensure fast data access, the historical data and the real-time data changes are replicated simultaneously to the destination. The event metadata indicates whether that event is from the backfill or from the CDC.
What's next
Find out more about Datastream .
Learn about unified types mappings .
Learn more about sources that Datastream supports.
Learn more about destinations that Datastream supports.
Find out how to create private connectivity configurations ,
connection profiles and streams .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
