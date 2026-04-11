---
title: "Monitor Config Controller \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/monitor
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/manage-resources
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/monitor
  title: "Monitor Config Controller \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Config Controller
Guides
Send feedback
Monitor Config Controller
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to monitor Config Controller. Config Controller
includes Config Connector, Config Sync and Policy Controller. Each operator
includes multiple metrics.
This page is for IT administrators and Operators who monitor
the health of deployed applications or services. To learn more about common
roles and example tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
Set up Policy Controller monitoring
Allow Policy Controller to send metrics by running this command:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = "serviceAccount: PROJECT_ID .svc.id.goog[gatekeeper-system/gatekeeper-admin]" \
--role = roles/monitoring.metricWriter
Replace PROJECT_ID with the cluster's Google Cloud project ID.
What's next
Learn more about options to monitor Config Connector, Config Sync and
Policy Controller:
Monitoring Config Connector with Prometheus
Use Config Sync metrics
Use Policy Controller metrics
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
