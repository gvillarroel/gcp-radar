---
title: "Feed management overview \_|\_ Google Security Operations \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview
  title: "Feed management overview \_|\_ Google Security Operations \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Feed management overview
Supported in:
Google secops
SIEM
This page provides an overview of Google SecOps feed management.
You can create and manage feeds using the feed management UI or the feed management API.
The feed management UI is built on the feed management API. You can use Google SecOps
data feeds to ingest log data into your Google SecOps instance from the following sources:
Cloud Storage services that are supported by Google SecOps, such as Google Cloud Storage and Amazon S3
Third-party data sources that are supported by Google SecOps and accessed through API, such as Microsoft 365
Files accessible directly using HTTP(S) requests
Sources that support HTTPS push ingestion, such as webhooks, Pub/Sub, and
Amazon Data Firehose. You can push logs using an HTTPS endpoint from these sources.
Each feed that you create is composed of a data source type and a log type .
Google Cloud Storage, third-party APIs, and HTTP-accessible files are examples
of source types. For each data source type that Google SecOps supports, Google SecOps
also supports specific log types. For example, for the Google Cloud Storage source type,
Google SecOps supports the Carbon Black log type and many others. The list of
supported log types varies by source type.
When you create a feed, you specify the source type, log type, required permissions,
authentication details, and other information that is based on the log type. As part
of its security design, Google SecOps stores user credentials (for example,
credentials that you provide so that a Google SecOps
feed can ingest log data from a third-party API) in Secret Manager .
Note: Each Google SecOps instance is deployed as a completely
separate and isolated environment. Data and credentials are not shared or
accessible between these isolated tenants.
If Google SecOps provides a default parser
for the log type, then the ingested log data is stored in both Google SecOps
Unified Data Model (UDM) format and raw log format.
Supported source types and log types
Note: To restrict access using Google Cloud public IP range, open a support
ticket.
Google SecOps supports the following source types:
Feed source type
Description
Third-party API
Ingest data from a third-party API.
Pub/Sub
Ingest data using a Pub/Sub push subscription.
Google Cloud Storage (Deprecated)
Ingest data from a Google Cloud Storage bucket. Note: This connector is deprecated, and will be discontinued on March 15, 2027. We recommend using Google Cloud Storage v2 for improved reliability, scalability, and performance.
Amazon Data Firehose
Ingest data using Amazon Data Firehose.
Amazon S3 (Deprecated)
Ingest data from an Amazon Simple Storage Service bucket. Note: This connector is deprecated, and will be discontinued on March 15, 2027. We recommend using Amazon S3 v2 for improved reliability, scalability, and performance.
Amazon SQS (Deprecated)
Ingest data from an Amazon Simple Queue Service queue whose entries point to files stored in S3. Note: This connector is deprecated, and will be discontinued on March 15, 2027. We recommend using Amazon SQS v2 for improved reliability, scalability, and performance.
Azure Blobstore (Deprecated)
Ingest data from Azure Blob Storage. Note: This connector is deprecated, and will be discontinued on March 15, 2027. We recommend using Azure Blobstore v2 for improved reliability, scalability, and performance.
HTTP(S)
Ingest data from files accessible by an HTTP(S) request. Do not
use this source type to interact with third-party APIs. Use the API
feed source type for third-party APIs supported by Google SecOps.
Webhook
Ingest data using an HTTPS webhook.
There are several ways to view a list of supported log types:
Google SecOps UI : For information about how to view the list of supported
log types for each source type, see Add a feed .
API reference documentation : To view a list of supported log types for third-party API
feeds, see Configuration by log type .
Feed Schema API : To view log types for any source type, you can also use the
Feed Schema API .
Note: The log types listed in third-party endpoints in the Feed UI are not listed
in any other Cloud Storage options like AWS S3, AWS SQS, Google Cloud Storage,
and Azure Blob Store.
What's next
Learn how to create and manage feeds using the feed management UI .
Learn how to create and manage feeds using the Feed management API .
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
