---
title: "Client-side metrics descriptions \_|\_ Spanner \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/spanner/docs/client-side-metrics-descriptions
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/spanner/docs
source_metadata:
  url: https://docs.cloud.google.com/spanner/docs/client-side-metrics-descriptions
  title: "Client-side metrics descriptions \_|\_ Spanner \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Spanner
Guides
Send feedback
Client-side metrics descriptions
Stay organized with collections
Save and categorize content based on your preferences.
This page provides a detailed
description of each client-side metric that Spanner offers.
For more information about viewing and managing client-side metrics, see
View and manage client-side metrics .
Client-side metrics offer latency information about
the client's RPC request attempts and operations to
Spanner.
An attempt is a single RPC request from the client to
Spanner. The client can make multiple attempts if a request
fails.
An operation represents completion of all RPC requests, including all
the attempts the client made to Spanner. An operation is
completed when the client receives a response or exhausts all attempts.
An RPC request first reaches the Google frontend (GFE) and then the
Spanner API frontend (AFE). For more information, see
Latency points in a Spanner request .
These metrics include DISTRIBUTION and INT64 metric value types. For
more information, see
Value types and metric kinds .
You can access client-side metrics using the Spanner
client libraries for Java, Go, Node.js and Python.
The client-side metrics support all Spanner methods in
the google.spanner.v1.Spanner
RPC API.
All client-side metrics have the following dimensions:
project ID : the Google Cloud project ID.
instance ID : the Spanner instance ID.
database ID : the Spanner database ID.
location : the Google Cloud region where the client-side metrics are
published. If your application is deployed outside Google Cloud,
then the metrics are published to the global region.
method : the RPC method name—for example, spanner.commit .
status : the RPC status—for example, OK or INTERNAL .
client_name : the library name and version—for example,
spanner-java/6.70.1 .
AFE connectivity error count
The AFE connectivity error count metric records the number of
RPC requests that failed to reach the Spanner AFE.
The AFE connectivity error count metric has the following attributes:
Metric name : spanner.googleapis.com/client/afe_connectivity_error_count
Metric value type : INT64
AFE latencies
The AFE latencies metric measures the time in between the Spanner
AFE receiving the RPC request from the client and Spanner AFE
starts writing the response.
The AFE latencies metric has the following attributes:
Metric name : spanner.googleapis.com/client/afe_latencies
Metric value type : DISTRIBUTION
Attempt count
The attempt count metric records the number of attempts performed. The
attempt_count value is typically identical to the operation_count value.
If the client receives transient errors, the attempt_count value is the sum
of all attempts.
The Attempt count metric has the following attributes:
Metric name : spanner.googleapis.com/client/attempt_count
Metric value type : INT64
Attempt latencies
The attempt latencies metric measures the duration it takes for a single
RPC request to reach Spanner from the client.
The attempt_latencies value is typically identical to the
operation_latencies value. If the client receives transient errors, then the
operation_latencies value is a sum of all the attempt_latencies values.
The Attempt latencies metric has the following attributes:
Metric name : spanner.googleapis.com/client/attempt_latencies
Metric value type : DISTRIBUTION
GFE connectivity error count
The GFE connectivity error count metric records the number of
RPC requests that failed to reach the GFE.
The GFE connectivity error count metric has the following attributes:
Metric name : spanner.googleapis.com/client/gfe_connectivity_error_count
Metric value type : INT64
GFE latencies
The GFE latencies metric measures the time in between the GFE receiving the RPC
request from the client and when the GFE receives the first byte of the
response. This metric does not account for the time taken for any TCP/SSL
handshake.
The GFE latencies metric has the following attributes:
Metric name : spanner.googleapis.com/client/gfe_latencies
Metric value type : DISTRIBUTION
Operation count
The operation count metric records the number of operations performed every
60 seconds.
The Operation count metric has the following attributes:
Metric name : spanner.googleapis.com/client/operation_count
Metric value type : INT64
Operation latencies
The operation latencies metric measures an
operation's round trip from the client gRPC layer to
Spanner and back to the client.
The Operation latencies metric has the following attributes:
Metric name : spanner.googleapis.com/client/operation_latencies
Metric value type : DISTRIBUTION
What's next
Client metrics overview
Signal capture overview
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
