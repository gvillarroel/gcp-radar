---
title: "Use Datastream with an existing BigQuery table \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/best-practices-cdc-existing-table
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/best-practices-cdc-existing-table
  title: "Use Datastream with an existing BigQuery table \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Resources
Send feedback
Use Datastream with an existing BigQuery table
Stay organized with collections
Save and categorize content based on your preferences.
This page describes best practices for use cases where:
Users have an existing table in BigQuery and need to replicate their
data using change data capture (CDC) into the same BigQuery table.
Users need to copy data into an existing BigQuery table without using
the Datastream backfill capability, either because of the time it would
take or because of product limitations.
Problem
A BigQuery table that's populated using the BigQuery Storage
Write API doesn't allow regular data
manipulation language (DML) operations. This means that once a CDC stream
starts writing to a BigQuery table, there's no way to add historical data
that wasn't already pre-populated in the table.
Consider the following scenario:
TIMESTAMP 1 : the table copy operation is initiated.
TIMESTAMP 2 : while the table is being copied, DML operations at the source
result in changes to the data (rows are added, updated or removed).
TIMESTAMP 3 : CDC is started, changes that happened in TIMESTAMP 2 aren't
captured, resulting in data discrepancy.
Solution
To ensure data integrity, the CDC process must capture all the changes in the
source that occurred from the moment immediately following the last update made
that was copied into the BigQuery table.
The solution that follows lets you ensure that the CDC process captures all the
changes from TIMESTAMP 2 , without blocking the copy operation from writing data
into the BigQuery table.
Prerequisites
The target table in BigQuery must have the exact same schema and
configuration as if the table was created by Datastream. You can use the
Datastream BigQuery Migration Toolkit
to accomplish this.
For MySQL and Oracle sources, the user must be able to identify the log position
at the time when the copy operation is initiated.
The database must have sufficient storage and log retention policy to allow the
table copy process to complete.
MySQL and Oracle sources
Create, but don't start the stream that you intend to use for the ongoing CDC
replication. The stream needs to be in the CREATED state.
When you're ready to start the table copy operation, identify the database current
log position:
For MySQL, see the MySQL documentation
to learn how to obtain the replication binary log coordinates. Once you've
identified the log position, close the session to release any locks on the
database.
For Oracle, run the following query: SELECT current_scn FROM V$DATABASE
Copy the table from the source database into BigQuery.
Once the copy operation is completed, follow the steps described in the
Manage streams page
to start the stream from the log position that you identified earlier.
PostgreSQL sources
When you're ready to start copying the table, create the replication slot.
For more information, see Configure a source PostgreSQL database .
Copy the table from the source database into BigQuery.
Once the copy operation is completed, create and start the stream.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
