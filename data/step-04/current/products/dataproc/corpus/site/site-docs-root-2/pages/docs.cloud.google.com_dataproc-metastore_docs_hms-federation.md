---
title: "About Metadata federation \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/hms-federation
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/hms-federation
  title: "About Metadata federation \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation"
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
About Metadata federation
Stay organized with collections
Save and categorize content based on your preferences.
Metadata federation is a service that lets you access multiple sources of
metadata from a single endpoint.
To set up federation, you create a federation service and then configure your
metadata sources. Afterward, the service exposes a single gRPC endpoint that you can
use to access all of your metadata.
For example, using federation, you can create a Managed Service for Apache Spark cluster
that exposes multiple Dataproc Metastore services through a
single endpoint. Afterward, you can run big data jobs through open-source
software (OSS) engines, such as Spark or Hive, to access your metadata across
multiple metastores.
How federation works
OSS big data workloads that run on Spark or Hive send requests to the Hive
Metastore API to fetch metadata at runtime.
The Hive Metastore interface
supports both read and write methods. The federation service exposes a gRPC
version of the Hive Metastore interface.
At runtime, when the federation service receives a request, it checks the
source ordering to retrieve the appropriate metadata.
Metadata sources
When you create a federation service, you must add a metadata source.
You can use the following sources as backend metastores:
A Dataproc Metastore instance.
A project containing one or more BigQuery datasets.
A Dataplex Universal Catalog Lake ( Preview ).
Source restrictions
The following section lists the restrictions that you must adhere to when
using various metadata sources.
All sources
The following restrictions apply to all metadata sources:
A federation service doesn't contain its own data. Instead, the federation
service just serves metadata from one of its metadata sources.
A federation service can't be a source of metadata in another federation
service.
Dataproc Metastore
If you're using a Dataproc Metastore as a source, the following
restrictions apply:
Federation services are only available through gRPC endpoints. To use a
Dataproc Metastore with federation, create your metastore
with a gRPC endpoint .
BigQuery
If you're using a project that contains BigQuery datasets as a
source, you must satisfy the following conditions:
Grant the correct Identity and Access Management roles to access the project that contains the
BigQuery datasets.
Add at least one Dataproc Metastore service as a source, along
with your BigQuery datasets.
Dataplex Universal Catalog Lakes
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Grant an IAM role that contains the dataplex.lakes.get permission.
Add at least one Dataproc Metastore service as a source,
along with your Dataplex Universal Catalog Lake.
Source ordering
Your federation service processes metadata requests in a priority order. This
concept is known as source ordering. At runtime, when the federation service
receives a request, it checks the source ordering and completes one of the
following actions:
Note: The metastore with the lowest rank is known as the primary metastore.
If the request contains a database name . The request is routed to the
backend metastore that contains the database name. If more than one
metastore contains the same database name, the request is routed to the
metastore with the lowest rank.
If the request creates or drops a database . The request is routed to the
metastore with the lowest rank.
If the request doesn't contain a database name and it doesn't create or
drop a database . The request is routed to the
Dataproc Metastore instance with the lowest rank. Some
examples of Hive Metastore requests that don't specify a database are
set_ugi and create_database .
If none of the metastores contain a database . The OSS engine responds
with the equivalent of a not-found error.
What's next
Create a federation service
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
