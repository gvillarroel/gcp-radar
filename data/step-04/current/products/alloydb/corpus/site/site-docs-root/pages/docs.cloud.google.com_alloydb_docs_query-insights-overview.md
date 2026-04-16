---
title: "About query insights \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/query-insights-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/query-insights-overview
  title: "About query insights \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
About query insights
Stay organized with collections
Save and categorize content based on your preferences.
This page gives an overview of the query insights tool. To start using the tool
now, see Improve query performance by using query insights .
Query insights help you detect, diagnose, and prevent query performance problems for
AlloyDB databases. They provide self-service, intuitive monitoring, and
diagnostic information that goes beyond detection to help you to identify the
root cause of performance problems.
With query insights, you can monitor performance at an application level and
trace the source of a problematic query across the application stack by model,
view, controller, route, user, and host. The query insights tool can integrate
with your existing application monitoring (APM) tools and Google Cloud
services using open standards and APIs. This way, you can monitor and
troubleshoot query problems using your favorite tool.
You view metrics for queries on the query insights dashboard. The dashboard
provides a series of filters that help you view database load for queries
by user, database, IP address, time range, CPU capacity, CPU and CPU wait, IO
Wait, and Lock Wait.
Benefits of using query insights
Query insights provide monitoring and diagnostics that let you detect and fix
query performance problems. Query insights dashboards help you identify query
performance problems early and let you move from detection to resolution using a
single interface. Built-in, visual query plans assist you in troubleshooting
issues to find the root cause. You can also use in-context, end-to-end
application tracing to find the source of a problematic query.
Query insights let you tag queries with business logic that the query is
associated with, such as payment, inventory, business analytics, or shipping so
that you can monitor query performance from an application-centric perspective.
Also, query insights provide application-centric monitoring that helps you
diagnose performance problems for applications built using object-relational
mappings (ORMs). The query insights tool uses SQL Commenter ,
an open source library, to automatically instrument your ORMs. This
instrumentation helps you identify which application code is causing problems.
Query insights can integrate with your existing APM tools, letting you monitor
and troubleshoot query problems using your favorite tool. Query insights
support the OpenCensus and
OpenTelemetry standards and makes the query metrics
and traces data available for your APM tools through the Google Cloud Observability API. Query insights integrate
with Cloud Monitoring , letting you
create custom dashboards and alerts on query metrics or tags and receive
notifications using email, SMS, Slack, PagerDuty, and more.
Pricing
There is no additional cost for this feature. You can access one week of data on
the query insights dashboard. For API requests, see the Cloud Monitoring
Pricing . Cloud Monitoring has a
tier you can use at no additional cost.
Security
Users who have access to the AlloyDB dashboard can access query insights
metrics on the query insights dashboard.
Query insights metrics are encrypted at rest.
Privacy
Query insights store and display only normalized queries. All the constant
values from the query string are removed. Query plan traces don't collect or
store any constant values. By default, query insights collect IP addresses and
tag information.
Performance
Query insight's PostgreSQL extension records query metrics and execution plans
implemented using postgres hooks. The metrics, and execution plans, are stored
as a postgres table in a shared memory table. By avoiding using expensive Disk
I/O operations, query insights are always on, and their performance overhead is
expected to be small. Query insights use 12 MB of RAM for a default query
string size of 1024 bytes. RAM usage increases with an increase in the query
string size. Metrics are expected to be available in query insights within
minutes of query completion.
Storage
Query insights don't occupy any storage space in your AlloyDB instance
storage space. Metrics are stored in system metrics in
Cloud Monitoring .
It's important to review the
Cloud Monitoring data retention policy .
Query insights traces are stored in Cloud Trace .
It's important to review the
Cloud Trace data retention policy .
Compatibility
Query insights are supported on all AlloyDB machine types
and available on all Google Cloud Platform regions.
Limitations
The limitations of query insights are as follows:
When client IP address tracking is enabled and a high number of clients, for example, exceeding 100, send traffic to an instance, query insights capture the client addresses that contribute to the highest cumulative execution time. Consequently, statistics related to other client addresses might be omitted.
When client IP address tracking is enabled, changes in client address traffic can lead to a temporary gap in metrics, because it takes time for the new top client addresses to be exported. For example, a client restart or recreation, such as a Kubernetes pod sending traffic from different machines, might cause this gap, depending on your architecture.
What's Next
Improve query performance using query insights
AlloyDB metrics
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
