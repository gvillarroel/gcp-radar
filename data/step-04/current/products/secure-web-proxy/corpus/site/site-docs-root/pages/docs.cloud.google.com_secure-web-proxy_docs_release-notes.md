---
title: "Secure Web Proxy release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-web-proxy/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/secure-web-proxy/docs
source_metadata:
  url: https://docs.cloud.google.com/secure-web-proxy/docs/release-notes
  title: "Secure Web Proxy release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Secure Web Proxy
Resources
Send feedback
Secure Web Proxy release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Secure Web Proxy.
Check this page for announcements about new or updated features, bug fixes,
known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
August 18, 2025
Feature
Support for VPC Service Controls is generally available (GA).
January 20, 2025
Feature
Secure Web Proxy (SWP) uses a Cloud Network Address Translation (NAT) gateway to allow external communication between Google Cloud Platform (GCP) workloads and internet destinations. This NAT gateway is automatically provisioned when you set up your SWP instance.
To limit the number of IP addresses being used up, the Cloud NAT gateway now uses dynamic port allocation (DPA) for SWP. This feature is generally available (GA).
October 28, 2024
Feature
You can now configure your Secure Web Proxy (SWP) instance to be a next hop for routing web traffic within your network. To create a next hop, you can use either policy-based routes or static routes .
With the launch of this deployment mode, you now have the flexibility to deploy your SWP instance in explicit proxy mode , as a Private Service Connect (PSC) service attachment , or as a next hop . This feature is now generally available (GA).
September 17, 2024
Feature
The Direct VPC egress feature of Cloud Run now supports Secure Web Proxy . This feature is generally available (GA).
June 03, 2024
Feature
You can now publish Secure Web Proxy (SWP) as a Private Service Connect (PSC) service attachment . With this feature, you can centralize and apply security policies on your egress web traffic. This feature is now generally available (GA).
May 22, 2023
Feature
Secure Web Proxy is generally available ( GA ).
March 14, 2023
Feature
Cloud Secure Web Proxy supports TLS inspection , which helps you intercept the TLS traffic, inspect the encrypted request, and enforce security policies. This feature is supported in Preview.
October 31, 2022
Feature
Cloud SWG is available in Preview . Cloud SWG provides a secure web gateway that helps you secure egress web traffic (HTTP/S). Contact your sales representative to sign up and use Cloud SWG.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
