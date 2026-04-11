---
title: "Overview of APIs, client libraries, and ORM drivers \_|\_ Spanner \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/spanner/docs/api-libraries-overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/spanner/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/spanner/docs/api-libraries-overview
  title: "Overview of APIs, client libraries, and ORM drivers \_|\_ Spanner \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Spanner
Reference
Send feedback
Overview of APIs, client libraries, and ORM drivers
Stay organized with collections
Save and categorize content based on your preferences.
Available interfaces
You can use one of several programmatic interfaces when interacting with
Spanner. These are the available interfaces, in the order that we
recommend using them:
Client libraries : The Spanner client libraries
are available in multiple languages and are built on gRPC . These
client libraries provide a layer of abstraction on top of gRPC and handle the
details of session management, transaction execution, retries, and more.
ORM and framework drivers : Google supports open-source
Spanner drivers for several popular object-relational mapping
libraries (ORMs) and frameworks, such as JDBC. These drivers allow the use of
Spanner databases through APIs defined by those frameworks.
RPC API : If a client library or ORM driver is not available for your
programming language of choice, use the RPC API, which is built on
gRPC . gRPC offers a number of performance benefits compared with
using the REST API, including representing objects in protocol buffer format
(which are faster to produce and consume compared with JSON) and persistent
connections (which result in less per-request overhead). Read more about
these and other benefits in gRPC Concepts .
REST API : If you're unable to use Spanner's client
libraries or the RPC API, use the REST API. Note that some features that are
available in the RPC API are not supported in the REST API, as documented
below.
RPC versus REST API
This table compares Spanner features available through its RPC
and REST API interfaces.
Feature
Supported in the RPC API ?
Supported in the REST API?
Cancelling a request
Yes
No
Setting a deadline or timeout on a request
Yes
No
Sending a streaming request
Yes. see ExecuteStreamingSQL and StreamingRead .
Partial. HTTP Streaming is supported but application-level flow control is not.
Client libraries features support
The following table lists the client libraries, noting the major
Spanner features that each one supports.
Client
Go
Java
Node.js
Python
Ruby
C++
PHP
C#
Batch DDL
Batch DML
Configurable leader
option
Graph queries
Interleaved
tables
JSON type
Mutations
Partitioned DML
Partitioned
read
Cross-region backup
Custom instance config
-->
PostgreSQL
interface
Request
priority
Request
tagging
Session labeling
Stale reads
Statement hints
Client metrics
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
