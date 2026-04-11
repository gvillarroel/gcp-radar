---
title: "Quotas and limits \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/cluster/quotas
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/cluster
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/cluster/quotas
  title: "Quotas and limits \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis Cluster
Resources
Send feedback
Quotas and limits
Stay organized with collections
Save and categorize content based on your preferences.
This document contains the current resource capacity limits and per-minute API
request quotas for Memorystore for Redis Cluster.
Instance limits
Memorystore for Redis Cluster enforces the following usage limits:
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
recommend that you monitor the /cluster/node/clients/connected_clients metric.
The following table lists the node types that are available for
Memorystore for Redis Cluster and the maximum number of client connections that you
can have for each node type.
Node type
Max clients 1
redis-shared-core-nano
5,000
redis-standard-small
16,000 (default). Max value is 32,000
redis-highmem-medium
32,000 (default). Max value is 64,000
redis-highmem-xlarge
64,000
Caution : We recommend that you use the
redis-shared-core-nano node type for development or testing
purposes only because this node type has no SLA. If you run Memorystore for Redis Cluster in
a production environment, then we recommend using the
redis-standard-small , redis-highmem-medium , or
redis-highmem-xlarge node types. For more information about these
node types, see Choose a node type .
1 For instructions on adjusting the maximum client connection limit,
see Configure an instance .
Cluster usage units
The per-project cluster usage units for a cluster in Memorystore for Redis Cluster is
calculated by the following formula:
Cluster usage units = (shard_count) * (1 + replica_count)
The regional quota for Memorystore for Redis Cluster limits the total amount of usage
units that you can provision across all of your clusters in a region.
For example, if you provision three clusters in your project with 3 shards and
1 replica each in us-central1 , then you consume 18 units out of the total
regional unit quota for us-central1 .
Per-minute API requests quota
Note:
You cannot request a quota increase for Memorystore for Redis Cluster API operations, such as instance create , update , and delete . There is no limit to the number of Redis commands you can run, such as Redis SET , GET , and DEL .
Follow the Exponential backoff recommendations
to reduce the number of API requests made if an error is encountered.
The per-minute quotas for Memorystore for Redis API requests/operations are as follows, and are subject to change:
API Requests Quota
Value
Create or delete Redis Cluster requests per project per minute
10
Redis Cluster requests per project per minute
60
Create or delete Redis Cluster requests include:
Create operations ( gcloud redis clusters create )
Delete operations ( gcloud redis clusters delete )
Memorystore for Redis Cluster API operations include:
Get operations ( gcloud redis clusters describe )
List operations ( gcloud redis clusters list )
Create operations ( gcloud redis clusters create )
Delete operations ( gcloud redis clusters delete )
Update operations ( gcloud redis clusters update )
This quota is for redis.googleapis.com requests/operations, not OSS Redis
protocol/commands. These limits apply to each Google Cloud console project and
are shared across all applications and IP addresses using that project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
