---
title: "Best practices \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iap/docs/concepts-best-practices
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/iap/docs
source_metadata:
  url: https://docs.cloud.google.com/iap/docs/concepts-best-practices
  title: "Best practices \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Identity-Aware Proxy
Guides
Send feedback
Best practices
Stay organized with collections
Save and categorize content based on your preferences.
This page describes best practices for using Identity-Aware Proxy
(IAP).
Caching
Don't use a third-party CDN in front of your application. CDNs may cache
content and serve cached pages to unauthenticated users.
If you have large, non-sensitive resources that you want to serve from a
CDN, use a separate domain such as images.yourapp.com for these
resources. Use the CDN with that domain and add the Cache-control:
private HTTP response header to all objects that should only be served
to authenticated users.
Securing your app
To properly secure your app, you must use signed headers
for App Engine standard environment ,
Compute Engine, and GKE applications.
Configuring your firewall
Make sure all requests to Compute Engine or GKE are routed through
the load balancer:
Configure a firewall rule to allow health checking
and make sure that all traffic to your Virtual Machine (VM) is from a Google Front End (GFE)
IP.
For additional protection, check the source IP of requests in your app to make sure
they're from the same IP range that the firewall rule allows.
In the Google Cloud console, IAP displays an error or warning if your firewall
rules appear to be set up incorrectly. The IAP Google Cloud console doesn't
detect which VM is used for each service, so the firewall analysis doesn't include advanced
features like non-default networks and firewall rule tags. To bypass this analysis, enable
IAP through the
gcloud compute backend-services update
command.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
