---
title: "Threat Intelligence overview \_|\_ Google Security Operations \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/detection
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/threatconnect-ioc-v3
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/detection
  title: "Threat Intelligence overview \_|\_ Google Security Operations \_|\_ Google\
    \ Cloud Documentation"
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
Threat Intelligence overview
Supported in:
Google secops
SIEM
Google Threat Intelligence provides a comprehensive and proactive approach to identifying, analyzing, and mitigating security threats. It uses Google's vast infrastructure, global telemetry, and advanced analytics to deliver useful insights and improve your organization's security.
Google Threat Intelligence includes threat detection, analysis of malware and phishing campaigns, real-time threat alerts, and intelligence feeds that integrate seamlessly with security tools such as Security Information and Event Management (SIEM) and Security Orchestration, Automation, and Response (SOAR) platforms.
You can integrate and use Google Threat Intelligence within Google SecOps using the following integration methods:
Applied Threat Intelligence (ATI)
This fully managed, native pipeline automatically curates and applies Google's threat intelligence.
License :
Google SecOps Enterprise+
Features :
Provides advanced automated threat intelligence capabilities.
Includes a fully built-in and managed integration that automatically
uses the complete spectrum of Google, Mandiant, and
VirusTotal intelligence to provide automated context, enrichment, and
alerting without manual pipeline configuration.
Combines
frontline expertise with the breadth of Google's visibility to deliver a
unified view of the threat landscape.
Lets security teams
contextualize alerts, understand threat actor tactics, and use
intelligence directly within their workflows.
Integration steps : See Applied Threat Intelligence overview .
Bring your own license (BYOL) Google Threat Intelligence integration
This customer-deployed pipeline ingests licensed Google Threat Intelligence (GTI) data (Threat Lists, IoC Streams, and adversary context) into Google SecOps. This method lets you deploy and manage resources (such as Cloud Run functions, Cloud Scheduler, Secret Manager) in your Google SecOps environment to fetch data from the Chronicle API and stream it to Google SecOps.
License :
Google SecOps Standard or Enterprise.
An active Google Threat Intelligence license to use the Bring Your Own License (BYOL) integration.
The Enterprise+ license includes permissions for the BYOL integration.
Features :
Lets you use a customer-deployed pipeline to ingest your data into Google SecOps for enhanced detection and threat hunting.
Replaces legacy fragmented connectors with a single, unified solution.
Integration steps : See BYOL Threat Intelligence integration .
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
