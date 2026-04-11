---
title: "Artifact analysis and vulnerability scanning \_|\_ Artifact Registry \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/analysis
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/analysis
  title: "Artifact analysis and vulnerability scanning \_|\_ Artifact Registry \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Artifact Registry
Guides
Send feedback
Artifact analysis and vulnerability scanning
Stay organized with collections
Save and categorize content based on your preferences.
Artifact Analysis is a family of services that provide software
composition analysis, metadata storage and retrieval. Its detection points are
built into a number of Google Cloud products such as Artifact Registry and
Google Kubernetes Engine (GKE) for quick enablement. The service works with
both Google Cloud's first-party products and also lets you store
information from third-party sources. The scanning services use a common
vulnerability store for matching files against known vulnerabilities.
This service was formerly known as Container Analysis. The new name does not
change existing products or APIs, but reflects the product's expanding range of
features beyond containers.
Figure 1. Diagram that shows Artifact Analysis creating and interacting
with metadata across source, build, storage, deployment and runtime
environments.
Registry scanning
This section outlines Artifact Analysis vulnerability scanning
features based in Artifact Registry, and lists related Google Cloud
products where you can enable complementary capabilities to support your
security posture.
Automatic scanning in Artifact Registry
The scanning process is triggered automatically every time you push a new
image to Artifact Registry.
The vulnerability information is continuously updated when new
vulnerabilities are discovered. Artifact Registry includes application language
package scanning. To get started, enable
automatic scanning .
Centralized risk management with Security Command Center
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Security Command Center centralizes your cloud security, offering vulnerability
scanning, threat detection, posture monitoring, and data management.
Security Command Center aggregates vulnerability findings from Artifact Registry
scans, allowing you to view container image vulnerabilities within your
running workloads, across all projects alongside your other security risks
in Security Command Center. You can also export these findings to
BigQuery for in-depth analysis and long-term storage.
For more information, see
Artifact Registry vulnerability assessment .
GKE workload vulnerability scanning - standard tier
Caution: Starting on July 23, 2024, standard tier/container
OS vulnerability scanning is deprecated and is scheduled for shutdown on
July 31, 2025. For more information about deprecation and shutdown dates, see
Vulnerability scanning removal from GKE .
As part of GKE security posture dashboard, workload
vulnerability scanning provides detection of container image OS
vulnerabilities. Scanning is free and can be enabled per cluster. Results
are available to view in the security posture dashboard .
GKE workload vulnerability scanning - advanced vulnerability insights
Caution: Starting on June 16, 2025
Advanced Vulnerability Insights is deprecated and is scheduled for shutdown on June 16,
2026 as part of the deprecation of various GKE security posture dashboard
features. For more information about deprecation and shutdown dates, see
Vulnerability
scanning removal from GKE .
In addition to basic container OS scanning, GKE users
can upgrade to advanced vulnerability insights to take advantage of
continual language package vulnerability detection. You must manually enable
this feature on your clusters, after which you'll receive OS and language
package vulnerability results. Learn more about
vulnerability scanning in GKE workloads .
On-Demand scanning
This service is not continual; you must run a command to manually initiate
the scan. Scan results are available up to 48 hours after the scan is
completed. The vulnerability information is not updated after the scan is
finished. You can scan images stored locally, without having to push them to
Artifact Registry or GKE runtimes first. To
learn more, see on-demand scanning .
Access metadata
Artifact Analysis is a Google Cloud infrastructure
component that lets you
store and retrieve structured metadata for Google Cloud
resources. At various phases of your release process, people or automated
systems can add metadata that describes the result of an activity. For
example, you can add metadata to your image indicating that the image has
passed an integration test suite or a vulnerability scan.
With Artifact Analysis integrated into your CI/CD pipeline, you
can make decisions based on metadata. For example, you can use
Binary Authorization to create deployment policies
that only allow deployments for compliant images from trusted registries.
Artifact Analysis associates metadata with images through notes and
occurrences . To learn more about these concepts, see the
metadata management page .
To learn about using Artifact Analysis for metadata management, and
costs for the optional vulnerability scanning service, see the
Artifact Analysis documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
