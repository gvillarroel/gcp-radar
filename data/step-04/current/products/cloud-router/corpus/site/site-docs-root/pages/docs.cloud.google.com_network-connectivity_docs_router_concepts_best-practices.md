---
title: "Best practices for Cloud Router \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/router/concepts/best-practices
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/router
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/router/concepts/best-practices
  title: "Best practices for Cloud Router \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Connectivity
Cloud Router
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Best practices for Cloud Router
When working with Cloud Router, use the following best practices.
If your on-premises Border Gateway Protocol (BGP) router supports Bidirectional Forwarding Detection (BFD) ,
enable it on your on-premises BGP device and on the Cloud Router to
provide a high-availability network link that can respond faster to link
failures.
If your peer router supports it, consider enabling MD5 authentication on
your BGP sessions. By default, BGP sessions are unauthenticated.
Enable graceful restart on your on-premises BGP device. With graceful
restart, traffic between networks isn't disrupted in the event of a
Cloud Router or on-premises BGP device failure as long as the BGP
session is re-established within the graceful restart period.
If graceful restart is not supported or enabled on your device, configure
two on-premises BGP devices with one tunnel each to provide redundancy. If you
don't configure two separate on-premises devices, Cloud VPN tunnel traffic
can be disrupted in the event of a Cloud Router or an on-premises BGP
device failure.
To ensure that you don't exceed Cloud Router quotas , use Cloud Monitoring to
create alerting policies . For example, you
can use the metrics for learned routes to create alerting policies for the unique Cloud Router
dynamic route prefixes quotas .
If appropriate, you can manually configure custom
learned routes and apply them to a BGP session. Dynamic routes created
from custom learned routes are programmed and withdrawn just like dynamic
routes that are BGP received.
What's next
To become familiar with Cloud Router terminology, see
Key terms .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
