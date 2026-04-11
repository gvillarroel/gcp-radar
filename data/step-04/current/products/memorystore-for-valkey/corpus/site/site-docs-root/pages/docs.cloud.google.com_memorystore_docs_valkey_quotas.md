---
title: "Quotas and limits \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/valkey/quotas
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/valkey
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/valkey/quotas
  title: "Quotas and limits \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Valkey
Resources
Send feedback
Quotas and limits
Stay organized with collections
Save and categorize content based on your preferences.
This document contains the current resource capacity limits and per-minute API
request quotas for Memorystore for Valkey.
Instance limits
Memorystore for Valkey enforces the following usage limits:
Limit
Value
Databases per instance
1
Usage units per instance
250
Max clients
Max clients is the maximum number of client connections that you can have for
each node of a node type without experiencing performance issues.
To make sure that you don't exceed the maximum number of client connections, we
recommend that you monitor the /instance/node/clients/connected_clients metric.
The following table lists the node types that are available for
Memorystore for Valkey and the maximum number of client connections that you
can have for each node type.
Node type
Max clients 1
shared-core-nano
5,000
standard-small
16,000 (default). Max value is 32,000
highmem-medium
32,000 (default). Max value is 64,000
highmem-xlarge
64,000
Caution : We recommend that you use the
shared-core-nano node type for development or testing purposes
only because this node type has no SLA. If you run Memorystore for Valkey in a
production environment, then we recommend using the standard-small , highmem-medium , or highmem-xlarge node types. For more
information about these node types, see Choose a node type .
1 To learn how to adjust the maximum client connection limit, see
Configure an instance .
Instance usage units
The per-project instance usage units for a Memorystore for Valkey instance is
calculated by the following formula:
Instance usage units = (shard_count) * (1 + replica_count)
The regional quota for Memorystore for Valkey limits the total amount of usage
units that you can provision across all of your instances in a region.
For example, if you provision three instances in your project with 3 shards and
1 replica each in us-central1 , then you consume 18 units out of the total
regional unit quota for us-central1 .
Per-minute API requests quota
Note:
You cannot request a quota increase for Memorystore for Valkey API operations, such as instance create , update , and delete . There is no limit to the number of Valkey commands you can run, such as Valkey SET , GET , and DEL .
Follow the Exponential backoff recommendations
to reduce the number of API requests made if an error is encountered.
The per-minute quotas for Memorystore for Valkey API requests/operations are as follows, and are subject to change:
API Requests Quota
Value
Create or delete Valkey instance requests per project per minute
10
Valkey instance requests per project per minute
60
Create or delete Valkey instance requests include:
Create operations ( gcloud memorystore instances create )
Delete operations ( gcloud memorystore instances delete )
Memorystore for Valkey API operations include:
Get operations ( gcloud memorystore instances describe )
List operations ( gcloud memorystore instances list )
Create operations ( gcloud memorystore instances create )
Delete operations ( gcloud memorystore instances delete )
Update operations ( gcloud rmemorystore instances update )
This quota is for memorystore.googleapis.com requests/operations, not OSS Valkey
protocol/commands. These limits apply to each Google Cloud console project and
are shared across all applications and IP addresses using that project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
