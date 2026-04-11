---
title: "Introduction to continuous queries \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction
  title: "Introduction to continuous queries \_|\_ BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Introduction to continuous queries
This document describes BigQuery continuous queries.
BigQuery continuous queries are SQL statements that run
continuously. Continuous queries let you analyze incoming data in
BigQuery in real time. You can insert the output rows produced
by a continuous query into a BigQuery table or export them to
Pub/Sub, Bigtable, or Spanner. Continuous
queries can process data that has been written to
standard BigQuery tables
by using one of the following methods:
The BigQuery Storage Write API
The tabledata.insertAll method
Batch load
The INSERT DML statement
Mutating data manipulation language (DML) statements
such as DELETE , UPDATE , and MERGE when exporting data to Pub/Sub .
Writes from the results of a batch query to a permanent table
Writes from the results of a BigQuery continuous query to a permanent table
A Pub/Sub BigQuery subscription
Writes from Dataflow to BigQuery
Writes from Datastream to BigQuery using
append-only write mode
You can use continuous queries to perform time-sensitive tasks, such as
creating and immediately acting on insights, applying real-time machine
learning (ML) inference, and replicating data into other platforms. This
lets you use BigQuery as an event-driven data processing
engine for your application's decision logic.
The following diagram shows common continuous query workflows:
Use cases
Common use cases where you might want to use continuous queries are as follows:
Personalized customer interaction services : use generative AI to create
tailored messages customized for each customer interaction.
Anomaly detection : build solutions that let you perform anomaly and threat
detection on complex data in real time, so that you can react to issues more
quickly.
Customizable event-driven pipelines : use continuous query integration with
Pub/Sub to trigger downstream applications based on incoming
data.
Data enrichment and entity extraction : use continuous queries to perform
real-time data enrichment and transformation by using SQL functions and
ML models.
Reverse extract-transform-load (ETL) : perform real-time reverse ETL into other
storage systems more suited for low latency application serving. For example,
analyzing or enhancing event data that is written to BigQuery,
and then streaming it to Bigtable or Spanner for application
serving.
Supported functionality
The following operations are supported in continuous queries:
Running
INSERT statements
to write data from a continuous query into a BigQuery table.
Running
EXPORT DATA statements
to publish
continuous query output to Pub/Sub topics. For
more information, see
Export data to Pub/Sub .
From a Pub/Sub topic, you can use the data with other
services, such as performing streaming analytics by using Dataflow,
or using the data in an application integration workflow.
Running EXPORT DATA statements to export data from BigQuery
to Bigtable tables .
For more information, see
Export data to Bigtable .
Running EXPORT DATA statements to export data from BigQuery
to Spanner tables. For more information, see
Export data to Spanner (reverse ETL) .
Calling the following generative AI functions:
AI.GENERATE
AI.GENERATE_TEXT
This function requires you to have a
BigQuery ML remote model
over a
Vertex AI model .
Calling the following AI functions:
ML.UNDERSTAND_TEXT
ML.TRANSLATE
These functions require you to have a
BigQuery ML remote model
over a Cloud AI API.
Normalizing numerical data by using the
ML.NORMALIZER function .
Using stateless GoogleSQL functions—for example,
conversion functions .
In stateless functions, each row is processed independently from other
rows in the table.
Using stateful
operations —for
example JOIN s, aggregations, and window
aggregations . In
stateful operations, the state of ingested data is retained across multiple
rows or time intervals in order to compute an accurate result.
Using the
APPENDS
change history function to process appended data from a
specific point in time.
Using the
CHANGES
change history function to process changed data, including both appends and
mutations, from a specific point in time when
exporting data to Pub/Sub .
However, CHANGES is not supported when using a
stateful operation .
Supported stateful operations
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
To request support or provide feedback for this feature, send an email to
bq-continuous-queries-feedback@google.com .
Stateful operations let continuous queries perform complex analysis that
requires retaining information across multiple rows or time intervals. While
stateless functions process each row independently, stateful operations maintain
the state of ingested data to support functions like JOIN s, aggregations, and
window aggregations . This
capability lets you correlate events from different streams or calculate metrics
over time—such as a 30-minute average—by storing necessary data in memory while
the query runs.
Continuous queries support the following stateful operations:
JOINs
Aggregations and windowing
Authorization
The
Google Cloud access tokens
that are used when running continuous query jobs have a time to live (TTL) of
two days when they are generated by a user account. Therefore, such jobs stop
running after two days. The access tokens that are generated by service
accounts can run longer, but must still adhere to the maximum query runtime.
For more information, see
Run a continuous query by using a service account .
Locations
For a list of supported regions, see
BigQuery continuous query locations .
Limitations
Continuous queries are subject to the following limitations:
The state of ingested data is only maintained for the specific
stateful operations in Preview .
While continuous queries now support some types of JOIN s, aggregations, and
window aggregations, these are restricted to specific stateful operations. Not all
types of stateful operations are supported.
You can't use the following SQL capabilities in a continuous query, unless
they are listed as a supported stateful operation :
The following
query operators:
PIVOT
UNPIVOT
TABLESAMPLE
Query set operators
The SELECT DISTINCT statement
EXISTS or NOT EXISTS subqueries
Recursive CTEs
User-defined functions
Window function calls
BigQuery ML functions other than those listed in
Supported functionality
Data definition language (DDL) statements
Data manipulation language (DML) statements
except for INSERT .
Data control language (DCL) statements
EXPORT DATA statements that don't target Bigtable,
Pub/Sub, or Spanner.
Procedural language
Debugging statements
Continuous queries don't support the following data sources:
External tables .
Information schema views .
BigLake tables for Apache Iceberg in BigQuery .
Wildcard tables .
Change Data Capture (CDC) upsert
data.
Materialized views .
Views that are defined by other continuous query
limitations, such as JOIN operations, aggregate functions, user-defined functions or change data
capture-enabled tables.
Continuous queries don't support the column-
and row-level security features.
The output of a continuous query is subject to the inherent quotas and limits
of the destination service the output is being exported to.
When exporting data to Bigtable, Spanner, or
Pub/Sub locational
endpoints
you can only target Bigtable, Spanner, or
Pub/Sub resources that fall within the same Google Cloud
regional boundary as the BigQuery dataset that contains the
table you are querying. This restriction doesn't apply when exporting data
to Pub/Sub global endpoints.
For more information about
exporting to a Bigtable app profile
routing policy, see Location considerations .
You can't run a continuous query from a
data canvas .
You can't modify the SQL used in a continuous query while the continuous
query job is running. For more information, see
Modify the SQL of a continuous query .
If a continuous query job falls behind in processing incoming data and has
an output watermark lag of
more than 48 hours, then it fails. You can run the query again
and use the
APPENDS or
CHANGES
change history function to resume processing from the point in time at which
you stopped the previous continuous query job. For more information, see
Start a continuous query from a particular point in time .
A continuous query configured with a user account can run for up to two
days. A continuous query configured with a service account can run for
up to 150 days. When the maximum query runtime is reached, the query fails
and stops processing incoming data.
Although continuous queries are built using BigQuery
reliability features , occasional
temporary issues can occur. Issues might lead to some amount of automatic
reprocessing of your continuous query, which could result in duplicate
data in the continuous query output. Design your downstream systems to
handle such scenarios.
Reservation limitations
You must create Enterprise edition or Enterprise Plus
edition reservations in order to run
continuous queries. Continuous queries don't support the on-demand compute
billing model.
When you create a CONTINUOUS
reservation assignment ,
the associated reservation is limited to at most
500 slots. You can request an increase to this limit by contacting
bq-continuous-queries-feedback@google.com .
You can't create a reservation assignment that uses a different
job type in the
same reservation as a continuous query reservation assignment.
You can't configure continuous query concurrency. BigQuery
automatically determines the number of continuous queries that can run
concurrently, based on available reservation assignments that use the
CONTINUOUS job type.
When running multiple continuous queries using the same reservation,
individual jobs might not split available resources fairly, as
defined by
BigQuery fairness .
Slots autoscaling
Continuous queries can use
slot autoscaling to dynamically scale
allocated capacity to accommodate your workload. As your continuous queries
workload increases or decreases, BigQuery dynamically adjusts
your slots.
After a continuous query starts running, it actively listens for incoming data,
which consumes slot resources. While a reservation with a running continuous
query does not scale down to zero slots, an idle continuous query that is
primarily listening for incoming data is expected to consume a minimal amount of
slots, typically around 1 slot.
Idle slot sharing
Continuous queries can use idle slot sharing
to share unused slot resources with other reservations and
job types .
A CONTINUOUS
reservation assignment is still
required to run a continuous query and can't solely rely on idle slots
from other reservations. Thus a CONTINUOUS reservation assignment requires
either a non-zero slot baseline or a non-zero slot autoscaling configuration.
Only idle baseline slots or committed slots from a CONTINUOUS reservation
assignment are shareable.
Autoscaled slots aren't
shareable as idle slots for other reservations.
Pricing
Continuous queries use
BigQuery capacity compute pricing ,
which is measured in slots .
To run continuous queries, you must have a
reservation that uses the
Enterprise or Enterprise Plus edition ,
and a reservation assignment
that uses the CONTINUOUS job type.
Usage of other BigQuery resources, such as data ingestion and
storage, are charged at the rates shown in
BigQuery pricing .
Usage of other services that receive continuous query results or that are called
during continuous query processing are charged at the rates published for those
services. For the pricing of other Google Cloud services used by continuous
queries, see the following topics:
Bigtable pricing
Pub/Sub pricing
Spanner pricing
Vertex AI pricing
What's next
Try creating a continuous query .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
