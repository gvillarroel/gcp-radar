---
title: "Client-side metrics overview \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/client-side-metrics
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/client-side-metrics
  title: "Client-side metrics overview \_|\_ Bigtable \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Client-side metrics overview
Bigtable provides client-side metrics that you can use together
with server-side metrics to optimize performance and troubleshoot performance
issues if they occur.
This page provides an overview of Bigtable client-side metrics and
discusses when to use them. For setup and configuration instructions, see Set
up client-side metrics . For a
detailed list of the metrics, see Client-side metrics
descriptions .
Client-side metrics are measured from the time a request leaves your
application to the time the response is received by your application. In
contrast, server-side metrics are measured from the time
Bigtable receives a request until the last byte of data is sent to
the client.
Client-side metrics are available for users of the following client libraries:
Bigtable client library for C++
Bigtable client library for Java
Bigtable HBase client for Java
Bigtable client library for Go
Bigtable client library for Node.js
You can access client-side metrics in one of the following ways:
Cloud Monitoring , under Metrics Explorer
Cloud Monitoring API
Bigtable system insights
When to upgrade
We recommend that you update all applications integrated with
OpenCensus Stats
to use Bigtable client-side metrics instead.
Bigtable client-side metrics improve on the OpenCensus integration
and, unlike with OpenCensus Stats, you incur no additional cost for publishing
the metrics.
When to use client-side metrics
We recommend that you always use client-side metrics in conjunction with
server-side metrics to get a complete, actionable view of your
Bigtable performance. Viewing metrics from both the client and
server sides is especially useful when you are optimizing performance or
troubleshooting issues, and you need to determine in which segment of the
request lifecycle a problem is occurring.
Using both types of metrics is especially valuable for the following types of
workloads:
Serving path reads in user-facing and commercial applications
Critical backend services
Large-scale data pipelines with multiple consumers
Client-side metrics give you insight into which portion of the request lifecycle
might be causing latency:
Expected behaviors
The following behaviors are normal and expected:
One-minute startup time : After you enable client-side metrics, let
your application run for at least a minute before you check for any
published metrics.
Minor differences between server latencies and client attempt latencies :
After enabling client-side metrics, you might notice a single-digit
difference between the bigtable.googleapis.com/server/latencies and
bigtable.googleapis.com/client/attempt_latencies metrics that you were
previously not aware of. For example, if your application uses a
Compute Engine VM and Bigtable in the same region, the
difference between client attempt latencies and server latencies shows the network
latencies. For 350 queries per second (QPS) and payload size 5 KB, the network latency is around 4 ms.
This latency is expected.
Costs
There is no charge to view client-side metrics in Cloud Monitoring. If you
use the Cloud Monitoring API, usage fees might apply. See
Google Cloud Observability pricing
for details.
Limitations
Client-side metrics are not supported for applications that integrate
Dataflow or Apache Beam client libraries with the Bigtable
HBase client for Java.
What's next
Install and configure client-side metrics.
View the complete list of client-side metrics.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
