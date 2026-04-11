---
title: "Overview of Chrome Enterprise Premium and Falcon ZTA integration \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/chrome-enterprise-premium/docs/cs-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/chrome-enterprise-premium/docs/access-protection
source_metadata:
  url: https://docs.cloud.google.com/chrome-enterprise-premium/docs/cs-overview
  title: "Overview of Chrome Enterprise Premium and Falcon ZTA integration \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Chrome Enterprise Premium
Guides
Send feedback
Overview of Chrome Enterprise Premium and Falcon ZTA integration
Stay organized with collections
Save and categorize content based on your preferences.
CrowdStrike Falcon Zero Trust Assessment (Falcon ZTA) is a Falcon Insight feature that
monitors the built-in OS security settings and applied sensor policies of
Windows 10 and macOS endpoints (devices). Falcon ZTA helps administrators assess
the security posture of managed devices within their organization.
Google Cloud's Chrome Enterprise Premium integrates with Falcon ZTA to provide a solution
that lets you ensure that the devices connecting to your organization's web
resources and applications are authorized, secured, and managed as per your
organization's policies.
When to use Chrome Enterprise Premium and Falcon ZTA integration
Use this integration when you want to collect the
real-time information about the devices in your organization using Falcon ZTA,
and use this information to manage your devices and control access to
your organizational resources using Chrome Enterprise Premium.
How Chrome Enterprise Premium works with Falcon ZTA
Chrome Enterprise Premium uses a zero trust model to grant access to your organizational
resources based on a user's device identity and context of the request.
In this integration, Falcon ZTA collects the real-time device information using its
built-in solution, CrowdStrike's Falcon sensor, and provides this information to
Chrome Enterprise Premium. Endpoint Verification ,
which is a part of Chrome Enterprise Premium, communicates with Falcon ZTA to collect device
information. Access Context Manager uses the device information collected by Endpoint Verification
and Falcon ZTA, and provides security-based access control to your resources by using access levels.
Note: Creating custom access levels in Access Context Manager is available in Chrome Enterprise Premium
, which is the paid subscription of Chrome Enterprise Premium. To upgrade, contact our sales team .
The following diagram shows how Chrome Enterprise Premium works with Falcon ZTA:
What's next
Set up Chrome Enterprise Premium and Falcon ZTA integration
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
