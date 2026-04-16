---
title: "Dataflow SQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/deprecations/dataflow-sql
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/resources/locations
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/deprecations/dataflow-sql
  title: "Dataflow SQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Dataflow
Resources
Send feedback
Dataflow SQL
Stay organized with collections
Save and categorize content based on your preferences.
Dataflow has ended support for Dataflow SQL.
This is a breaking change.
As of July 31, 2024, you can't access Dataflow SQL in the
Google Cloud console.
As of January 31, 2025, you can't use Dataflow SQL in the
Google Cloud CLI.
Replacement: Beam SQL
Beam SQL lets you
query bounded and unbounded PCollections with SQL statements. If you're
working in an Apache Beam notebook, you can use the IPython
custom magic
beam_sql to speed up your pipeline development.
Beam SQL provides similar functionality as Dataflow SQL,
using SQL statements to query PCollections .
Migration
We recommend that you begin migrating your Dataflow SQL query to Beam SQL
as soon as possible.
Moving to Beam SQL is a breaking change that
affects any Dataflow SQL job or query. You will need to rebuild these
jobs and queries.
With this change, you can't create new Dataflow SQL jobs. However, this
change doesn't affect Dataflow SQL jobs that are already running.
For information about creating queries in Beam SQL, see
Beam SQL and beam_sql magic
and
Beam SQL overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
