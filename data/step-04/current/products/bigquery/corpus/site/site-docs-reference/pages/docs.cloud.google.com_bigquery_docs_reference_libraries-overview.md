---
title: "BigQuery APIs and libraries overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview
  title: "BigQuery APIs and libraries overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
BigQuery APIs and libraries overview
This page provides an overview of the various APIs associated with
BigQuery. While you can use the APIs directly
by making raw requests to the server, client libraries let you code in your
preferred language and provide simplifications
that significantly reduce the amount of code you need to write.
BigQuery supports client libraries in C#, Go, Java, Node.js, PHP,
Python, and Ruby.
For a more general overview of client libraries within Google Cloud, see
Client libraries explained .
For examples of using the various BigQuery libraries and APIs,
see the BigQuery Code Samples .
To use the APIs, you must authenticate to verify your client's identity. You can
do this by using
Application Default Credentials ,
a service account key file ,
or user credentials .
To learn more about authentication, see the
Introduction to authentication .
See Pricing for more information about BigQuery
pricing, including data ingestion
and data extraction pricing.
BigQuery API
This is the main API that provides resources for creating, modifying, and
deleting core resources such as datasets, tables, jobs, and routines.
For information about installation and usage, see
BigQuery API client libraries .
For related quota information, see BigQuery API quotas .
For links to the reference documentation and source code, select a language:
C#
API Reference Documentation
Source Code
Go
API Reference Documentation
Source Code
Java
API Reference Documentation
Source Code
Node.js
API Reference Documentation
Source Code
PHP
API Reference Documentation
Source Code
Python
API Reference Documentation
Source Code
Ruby
API Reference Documentation
Source Code
BigQuery Data Policy API
This API helps users manage BigQuery data policies for
column-level security and data masking.
For information about this API and its usage, see
BigQuery Data Policy API .
For links to the reference documentation and source code, select a
language:
C++
API Reference Documentation
Source Code
C#
API Reference Documentation
Source Code
Go
API Reference Documentation
Source Code
Java
API Reference Documentation
Source Code
PHP
API Reference Documentation
Source Code
Ruby
API Reference Documentation
Source Code
BigQuery Connection API
This API provides the control plane for establishing remote connections to allow
BigQuery to interact with remote data sources such as Cloud SQL. Some
federated query functionality is exposed within the BigQuery
API and libraries.
For more information about installation and usage, see
BigQuery Connection client libraries .
For links to the reference documentation and source code, select a
language:
C++
API Reference Documentation
Source Code
C#
API Reference Documentation
Source Code
Go
API Reference Documentation
Source Code
Java
API Reference Documentation
Source Code
Node.js
API Reference Documentation
Source Code
PHP
API Reference Documentation
Source Code
Python
API Reference Documentation
Source Code
Ruby
API Reference Documentation
Source Code
BigQuery Migration API
This API supports mechanisms to help users migrate existing data warehouses to
BigQuery. It largely models work as a series of workflows and
tasks to be processed, such as translating SQL.
For more information about installation and usage, see
BigQuery Migration client libraries .
For links to the reference documentation and source code, select a
language:
C++
API Reference Documentation
Source Code
C#
API Reference Documentation
Source Code
Go
API Reference Documentation
Source Code
Java
API Reference Documentation
Source Code
Node.js
API Reference Documentation
Source Code
PHP
API Reference Documentation
Source Code
Python
API Reference Documentation
Source Code
Ruby
API Reference Documentation
Source Code
BigQuery Storage API
This API exposes high throughput data reading for consumers who need to scan
large volumes of managed data from their own applications and tools. The API
supports a parallel mechanism of scanning storage and exposes support for leveraging
features such as column projects and filtering.
For more information about installation and usage, see
BigQuery Storage client libraries .
For links to the reference documentation and source code, select a
language:
C++
API Reference Documentation
Source Code
C#
API Reference Documentation
Source Code
Go
API Reference Documentation
Source Code
Java
API Reference Documentation
Source Code
Node.js
API Reference Documentation
Source Code
PHP
API Reference Documentation
Source Code
Python
API Reference Documentation
Source Code
Ruby
API Reference Documentation
Source Code
BigQuery Reservation API
This API provides the mechanisms by which enterprise users can provision and manage
dedicated resources such as slots and BigQuery BI Engine memory allocations.
For more information about installation and usage, see
BigQuery Reservation client libraries .
For links to the reference documentation and source code, select a
language:
C++
API Reference Documentation
Source Code
C#
API Reference Documentation
Source Code
Go
API Reference Documentation
Source Code
Java
API Reference Documentation
Source Code
Node.js
API Reference Documentation
Source Code
PHP
API Reference Documentation
Source Code
Python
API Reference Documentation
Source Code
Ruby
API Reference Documentation
Source Code
BigQuery sharing (formerly Analytics Hub)
This API facilitates data sharing within and across organizations. It allows
data providers to publish listings that reference shared
resources, including BigQuery datasets and Pub/Sub
topics. With BigQuery sharing, users can discover and search for listings
that they have access to. Subscribers can view and subscribe to listings. When
you subscribe to a listing, sharing creates a linked
dataset in your project.
For more information about this API and its usage, see
Analytics Hub API .
For links to the reference documentation and source code, select a
language:
C++
API Reference Documentation
Source Code
C#
API Reference Documentation
Source Code
Go
API Reference Documentation
Source Code
Java
API Reference Documentation
Source Code
Node.js
API Reference Documentation
Source Code
PHP
API Reference Documentation
Source Code
Python
API Reference Documentation
Source Code
Ruby
API Reference Documentation
Source Code
BigQuery Data Transfer Service API
This API is used for managed ingestion pipelines. Examples of pipelines include
scheduling periodic ingestions from Cloud Storage, automated ingestion
of analytics data from other Google properties such as YouTube, or data transfers
from third-party partners who integrate with the service.
This API is also where scheduled queries are defined and managed within BigQuery.
For more information about installation and usage, see
BigQuery Data Transfer Service client libraries . For links to the reference documentation and source code, select a
language:
C++
API Reference Documentation
Source Code
C#
API Reference Documentation
Source Code
Go
API Reference Documentation
Source Code
Java
API Reference Documentation
Source Code
Node.js
API Reference Documentation
Source Code
PHP
API Reference Documentation
Source Code
Python
API Reference Documentation
Source Code
Ruby
API Reference Documentation
Source Code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
