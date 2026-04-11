---
title: "Applied Threat Intelligence overview \_|\_ Google Security Operations \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview
  title: "Applied Threat Intelligence overview \_|\_ Google Security Operations \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Applied Threat Intelligence overview
Supported in:
Google secops
SIEM
Applied Threat Intelligence (ATI) helps you identify and respond to threats. It continually
analyzes and evaluates your security telemetry against Indicators of Compromise
(IoCs) curated by Mandiant threat intelligence.
When ATI is enabled, Google SecOps ingests IoCs curated
by Mandiant threat intelligence that are classified as malicious by the Google
Threat Indicator (GTI) verdict.
When a match is found, an alert is generated. You can then investigate the IoC on the IoC matches page, which displays possible IoC matches for domains, IP addresses, file hashes, and URLs. Information about the IoC is displayed, including the following:
GCTI priority
GTI verdict
Associations
Campaigns
You can also view detailed information about the events that triggered the IoC match, information from the threat intelligence source,
and the rationale for the GTI score. For more information, see View IoCs using Applied Threat Intelligence .
Important: Applied Threat Intelligence in Google SecOps is available with
a Google SecOps Enterprise Plus license.
Google SecOps curated detections evaluate your event data against
Mandiant threat intelligence data, and generates an alert when one or more rules
identify a match to an IoC with an active breach or high priority.
In addition, ATI includes composite rules
that correlate multiple ATI alerts into a single, high-fidelity alert when a
campaign, malware, or threat actor is identified.
To use Applied Threat Intelligence, do the following:
Enable the Applied Threat Intelligence curated detections .
Investigate alerts using the IOC matches page.
You can also learn more about how the IC-Score is assigned in the IC-Score overview .
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
