---
title: "Spanner as a source \_|\_ Datastream \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/sources-spanner
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/sources-spanner
  title: "Spanner as a source \_|\_ Datastream \_|\_ Google Cloud Documentation"
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
Spanner as a source
Stay organized with collections
Save and categorize content based on your preferences.
This page contains information about:
The behavior of how Datastream handles data that's being pulled from
a source Spanner database.
The editions of Spanner databases that Datastream supports.
Known limitations for using a Spanner database as a source.
Behavior
Spanner is a fully managed, scalable, and highly available database
service that you can use as a source with Datastream.
Datastream uses a Spanner change stream to track changes
made in Spanner databases. The changes included in the change stream
are then replicated to the destination to reproduce the source events.
Datastream doesn't create or modify change streams, so the database
objects that aren't tracked by the provided Spanner change stream can't
be included in your Datastream stream.
For more information about Spanner, see the
Spanner documentation .
Versions
Datastream supports all available Spanner editions:
Standard edition
Enterprise edition
Enterprise Plus edition
For an overview of each version, see
Spanner editions overview .
Known limitations
Known limitations for using a Spanner database as a source include:
Only change streams using the NEW_ROW value capture type are supported.
Datastream doesn't support the PROTO or ENUM data type
columns.
Datastream doesn't support arrays of DATE or TIMESTAMP data
types.
Backfills for databases of over 3 tebibytes (TiB) in size can take over 24
hours to complete.
Backfills create snapshot epochs, a type of backup created for a specific
timestamp that retain the data versions for that timestamp. Snapshot epochs
delay major compactions until the backfill is complete. To learn more about
compactions, see
Spanner columnar engine overview .
Datastream might have issues keeping up with Spanner
change streams that have more than 10,000 partitions. This means that the change
events might arrive delayed, or the stream might eventually fail.
Datastream might have issues keeping up with Spanner change
streams with over 60,000 updates per second. This means that the change events
might arrive delayed, or the stream might eventually fail.
Datastream might have issues keeping up with Spanner change
streams with over 60 mebibytes (MiB) per second throughput. This means that the
change events might arrive delayed, or the stream might eventually fail.
Replicating geo-partitioned data isn't supported because Spanner
change streams don't support partitioned data.
What's next
Learn how to
configure a Spanner source for
use with Datastream.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
