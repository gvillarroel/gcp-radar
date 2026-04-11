---
title: "Monitor in-band integration \_|\_ Network Security Integration \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/network-security-integration/docs/in-band/monitor-in-band-integration
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/network-security-integration/docs
source_metadata:
  url: https://docs.cloud.google.com/network-security-integration/docs/in-band/monitor-in-band-integration
  title: "Monitor in-band integration \_|\_ Network Security Integration \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Security Integration
Guides
Send feedback
Monitor in-band integration
Stay organized with collections
Save and categorize content based on your preferences.
Network Security Integration in-band integration exports monitoring data about
intercepted traffic to Cloud Monitoring .
In-band integration provides the following consumer metrics for
intercepted packets:
/intercept/intercepted_packets_count
/intercept/intercepted_bytes_count
For more information, see the
metrics list for
Compute Engine in the Monitoring documentation.
Service producers can use Internal passthrough Network Load Balancer logging and
monitoring for
each internal passthrough Network Load Balancer that provides packet inspection services.
View packet intercept metrics
Go to the Metics explorer page.
Go to the Metrics explorer page
Select your Google Cloud project.
In the Metric element, expand the Select a metric menu and specify the metric: Intercepted bytes or Intercepted packets
View the charts to see the intercepted bytes and intercepted packets.
For more information about creating and using charts, see Select metrics when using Metrics Explorer .
To define alerting policies, see Create new alerting policies . To view and customize dashboards, see View and copy Google Cloud dashboards .
What's next
Network Security Integration overview
In-band integration overview
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
