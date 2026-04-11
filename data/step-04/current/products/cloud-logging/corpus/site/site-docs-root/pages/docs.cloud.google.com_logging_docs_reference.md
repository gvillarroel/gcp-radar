---
title: "Cloud Logging API overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/reference
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/reference
  title: "Cloud Logging API overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Logging
Reference
Send feedback
Cloud Logging API overview
Stay organized with collections
Save and categorize content based on your preferences.
The Cloud Logging API lets you programmatically accomplish logging-related tasks,
including reading and writing log entries, creating log-based metrics, and
managing sinks to route logs.
See the following reference documentation for the Logging API:
For the REST version of the API, see
REST reference .
For the gRPC version of the API, see
gRPC reference .
For details on the limits that apply to your usage of the Logging API,
see Logging API quotas and limits .
Service endpoint
A service endpoint is a base URL that specifies the
network address of an API service. Logging has both global and
regional endpoints. You can use a global or regional service
endpoint to make requests to Logging:
Global endpoint : Global endpoints don't specify a region and have the
following format: logging.googleapis.com .
Regional and multi-regional endpoints : A regional endpoint enforces
regional restrictions and only allows requests to proceed if the affected
resource exists in the region specified by the endpoint. Regional endpoints
have the following format: logging. LOCATION .rep.googleapis.com . For a
list of available and multi-regional endpoints for Logging, see
Regional service endpoints .
Note: Writing log entries isn't restricted by region to ensure data isn't
dropped. Log entries are routed to the specified log buckets regardless of the
region.
Enable the Logging API
The Logging API must be enabled before it can be used. For
instructions, see
Enable the Logging API .
Access the Logging API
You can indirectly invoke the Logging API by using a
command-line interface or a client library written to support a
high-level programming language. For more information, see
the following reference documentation:
For the command-line interface to the Logging API,
see the gcloud logging command .
To learn how to set up client libraries and authorize the
Logging API, with sample code, see Client libraries .
To try the API without writing any code, you can use the APIs Explorer.
The APIs Explorer appears on REST API method reference pages in a panel
titled Try this API . For instructions, see
Using the API Explorer .
Optimize usage of the Logging API
Following are some tips for using the Logging API effectively.
Read and list logs efficiently
To efficiently use your entries.list quota, try the
following:
Set a large pageSize : In the request body, you can set the pageSize
parameter up to and including the maximum value of an int32 (2,147,483,647).
Setting the pageSize parameter to a higher value lets Logging
return more entries per query, reducing the number of queries needed to
retrieve the full set of entries that you're targeting.
Set a large deadline: When a query nears its deadline, Logging
prematurely terminates and returns the log entries scanned thus far. If you
set a large deadline, then Logging can retrieve more entries
per query.
Retry quota errors with exponential backoff :
If your use case isn't time-sensitive, then you can wait for the quota to
replenish before retrying
your query. The pageToken parameter is still valid after a delay.
Write logs efficiently
To efficiently use your entries.write quota, increase your
batch volume to support a larger number of log entries per
request, which helps reduce the number of writes made per request.
Logging supports requests with up to 10MB of data.
Bulk retrieval of log entries
The method you use to retrieve log entries is
entries.list , but this method isn't intended for
high-volume retrieval of log entries. Using this method in this way might
quickly exhaust your quota for read requests.
If you need contemporary or continuous querying, or bulk retrieval of log
entries, then
configure sinks to send your
log entries to
Pub/Sub. When you create a Pub/Sub sink, you send the log
entries that you want to process to a Pub/Sub topic, and then
consume the log entries from there.
This approach has the following advantages:
It doesn't exhaust your read-request quota. For more on quotas, see
Logging usage limits .
It captures log entries that might have been written out of order, without
workarounds to seek back and re-read recent entries to ensure nothing was
missed.
It automatically buffers the log entries if the consumer becomes
unavailable.
The log entries don't count towards your free allotment because they
aren't stored in log buckets.
You can create Pub/Sub sinks to route log entries to a variety of
analytics platforms. For an example, see
Scenarios for routing Cloud Logging data: Splunk .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
