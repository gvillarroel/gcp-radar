---
title: "Configure a source Oracle database \_|\_ Datastream \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/configure-your-source-oracle-database
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/configure-your-source-oracle-database
  title: "Configure a source Oracle database \_|\_ Datastream \_|\_ Google Cloud Documentation"
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
Configure a source Oracle database
Stay organized with collections
Save and categorize content based on your preferences.
This section describes how to configure your source Oracle database so that Datastream can pull data from it. Datastream can pull changes to data from on-premises or cloud-hosted Oracle databases, including Oracle relational database service (RDS).
Datastream can use the following methods to query redo log files:
Binary log reader ( Preview ): select this method if you need to query both online and archived redo log files. Binary reader can access the log files using Automatic Storage Management (ASM) or database directory objects. This method is multithreaded and supports low-latency CDC.
LogMiner API : select this method if you only need to work with archived redo log files. The Oracle LogMiner is single-threaded and can be subject to higher latency and lower throughput. However, this method supports most data types and Oracle database features.
For more information about these methods, see
Overview of Oracle as a source
and Work with Oracle database redo log files .
For information about how to configure your database type for each of these
methods, see the respective configuration pages.
Supported databases
Datastream works with the following types of Oracle databases:
Amazon RDS for Oracle
Self-managed Oracle database
Self-hosted Oracle pluggable database
What's next
Learn how to configure an Amazon RDS for Oracle database to work with Datastream.
Learn how to configure a self-managed Oracle database to work with Datastream.
Learn how to configure a self-hosted Oracle pluggable database to work with Datastream.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
