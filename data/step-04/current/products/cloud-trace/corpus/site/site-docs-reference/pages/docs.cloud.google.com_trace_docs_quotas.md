---
title: "Quotas and limits \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/quotas
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/quotas
  title: "Quotas and limits \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Trace
Resources
Send feedback
Quotas and limits
Stay organized with collections
Save and categorize content based on your preferences.
To send trace data to your Google Cloud project you can use the
Telemetry (OTLP) API or the
Cloud Trace API .
The Telemetry API implements the OpenTelemetry OTLP API, and it provides greater
compatibility and support for the open source OpenTelemetry ecosystem. The
Trace API is a proprietary Google Cloud API which
predates support for the Telemetry API. The limits for the
Telemetry API are often more generous than for the Trace API.
Trace API quotas and limits
This section provides information about quotas and limits that apply only
to the Trace API. The quotas and limits listed in this section
don't apply to the Telemetry API.
Cloud Trace enforces two different types of quotas:
a rate quota on your Cloud Trace API requests and an ingestion quota on spans you
send to Trace.
Quotas
The following table summarizes the quota units available for read and write
operations, and the daily quota for ingesting spans for the
Trace API. For example,
you have a total of 300 per 60 seconds for the three API
commands GetTrace , ListTraces , and ListSpan . Here are two different
examples of how you could use all of the available quota units:
Make 12 ListTraces API calls per 60 seconds.
Make 10 ListTraces API calls and 50 GetTrace API calls per 60
seconds.
Category
Total quota units
Read operations 1
300 per 60 seconds
Write operations 2
4,800 per 60 seconds
Ingested spans 3,4
3,000,000 per day - 5,000,000,000 per day
1 Read operations include GetTrace , ListTraces ,
ListSpan . A call to ListTraces consumes 25 quota units. Calls to
GetTrace consume ListSpan 1 quota unit.
2 Write operations include PatchTraces , BatchWrite ,
and CreateSpan . Each write operation consumes 1 quota unit.
3 This quota only applies to spans ingested using the Cloud Trace API.
Ingestion through the Telemetry API is unrestricted.
4 Your daily trace span ingestion quota for the Cloud Trace API is
determined by your billing account history and requests you have made for quota
increases.
Limits
This table lists the limits for the Cloud Trace API.
Description
Value
Maximum number of spans per GetTrace call
10,000
Maximum number of spans per PatchTraces call
25,000
Maximum number of traces per ListTraces call
1,000 in the ROOTSPAN and MINIMAL views 100 in the COMPLETE view
Maximum length of a span name
128 bytes
Maximum number of labels or attributes per span
32
Maximum size of key for a label or attribute
128 bytes
Maximum size of value for a label or attribute
256 bytes
Maximum number of events per span
128
Maximum past timestamp for a span to be ingested
14 days
Maximum future timestamp for a span to be ingested
3 days
Maximum past timestamp for event relative to span timestamp
365 days
Exceeding a limit might not result in an API call failing with an error.
For example, an error isn't reported when the number of attributes attached
a span exceeds 32. Instead, in this scenario,
the Cloud Trace API uses a non-deterministic algorithm to select
32 attributes to ingest. The remaining
attributes are discarded.
The Cloud Trace API provides details about the
GetTrace , PatchTraces , and
ListTraces endpoints.
How you annotate spans depends on the Cloud Trace API endpoint. If you use the
batchWrite endpoint, then add attributes to the
Span object. If you use the
patchTraces endpoint, then add labels to the
TraceSpan object.
Telemetry API limits and quotas
This section lists the limits that apply only when the
Telemetry API is used to ingest trace data.
The Telemetry API, which implements the OpenTelemetry OTLP API, is
designed for use with applications that are instrumented by using one of
the OpenTelemetry SDKs . The limits listed in this section
don't apply to the Cloud Trace API.
Description
Value
Note
Maximum size of attribute keys
512 bytes
Limit.
Maximum size of attribute values
64 KiB
Limit.
Maximum size of a Span * object's name
1024 bytes
Limit.
Maximum number of attributes attached to a Span * object
1024
Limit.
Maximum number of resource attributes per ResourceSpans * object
1024
Limit.
Maximum number of attributes per ResourceSpan * object
Includes attributes attached to child objects of the following types:
Resource , Span , ScopeSpans ,
Event , and Link .
8192
Limit.
Maximum number of Event * objects per Span * object
256
Limit.
Maximum number of Link * objects per Span * object
128
Limit.
Maximum size of an Event * object's name
1024 bytes
Limit.
Maximum number of attributes per Event * object
1024
Limit.
Maximum attributes per Link * object
1024
Limit.
Maximum size of schema URLs
8192 bytes
Limit.
Maximum number of trace-ingestion bytes per minute
2.4 GB for the following regions: asia-east1, asia-northeast1, asia-southeast1,
asia-south1, europe-west1, europe-west2, europe-west3, europe-west4, us-central1, us-east4, us-west1 .
300 MB for all other regions.
Quota.
*
For a definition of this structure, see the
trace.proto file.
Limits on trace scopes
Limits on trace scopes
Value
Maximum number of trace scopes per project
100
Maximum number of views per trace scope
20
Trace retention periods
Category
Retention period
Span data stored by Cloud Trace
30 days
_Trace bucket
30 days
Manage your quota
This section describes how to request a change in a quota and how to monitor
your quota usage.
Request changes to Cloud Trace API quota
You can request higher or lower Cloud Trace API limits using the
Google Cloud console.
For more information, see View and manage quotas .
If you get an error Edit is not allowed for this quota , you can
contact Support to request changes to
the quota. Note also that billing must be enabled on the
Google Cloud project to click the checkboxes.
Monitor you quota usage
To make sure that you don't run out of quota and lose observability into your
apps' performance, verify that you batch your updates and monitor your
quota usage. For example, you might create an alerting policy that notifies
you when your usage exceeds a threshold.
For detailed information on monitoring your API requests and
understanding their responses, see
Monitoring your API usage .
To view your Cloud Trace API and your daily span
ingestion quotas, see View and manage quotas .
To learn how to decrease your API quota units and your daily span
ingestion quota units, see Capping usage .
To request an increase in your API quota
units or your daily span ingestion quotas, see
Request more quota .
See Creating an over-quota alert
for detailed information on creating alerting policies to monitor your
Trace API quota and your rate trace span ingestion.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
