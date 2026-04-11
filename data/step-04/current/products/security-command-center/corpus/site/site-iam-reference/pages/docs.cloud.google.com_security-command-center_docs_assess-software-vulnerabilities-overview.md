---
title: "Assess software vulnerabilities overview \_|\_ Security Command Center \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/assess-software-vulnerabilities-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/assess-software-vulnerabilities-overview
  title: "Assess software vulnerabilities overview \_|\_ Security Command Center \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Guides
Send feedback
Assess software vulnerabilities overview
Stay organized with collections
Save and categorize content based on your preferences.
Standard-legacy, Standard, Premium, and Enterprise service tiers (some features require organization-level activation )
Security Command Center offers multiple services that detect vulnerabilities in
containers, the operating systems and software found in VMs, and web
applications. Where vulnerabilities can be detected depends on the cloud service
you're using. Each service is enabled and configured independently.
AWS
Enterprise service tier
Vulnerability Assessment for AWS :
Detects vulnerabilities in the following AWS resources:
Software packages installed on
Amazon EC2 instances .
Software packages and operating system misconfigurations in Elastic Container
Registry (ECR) images.
The findings from this service have a category of SOFTWARE_VULNERABILITY .
Google Cloud
Standard-legacy, Standard, Premium, and Enterprise service tiers (some features require organization-level activation )
Artifact Registry vulnerability assessment :
Finds vulnerabilities in container images stored in Artifact Registry or
deployed to one of the following assets:
App Engine
Cloud Run job
Cloud Run
Google Kubernetes Engine cluster
The findings from this service have a category of
CONTAINER_IMAGE_VULNERABILITY .
Kubernetes security posture dashboard :
Provides opinionated, actionable findings about potential security issues
in your Google Kubernetes Engine (GKE) clusters.
The findings from this service are issued in the VULNERABILITY and
MISCONFIGURATION finding classes.
VM Manager :
Identifies vulnerabilities in operating systems that are installed on VMs,
including Common Vulnerabilities and Exposures (CVEs).
The findings from this service have a category of OS_VULNERABILITY .
Available for Premium and Enterprise service tiers.
Vulnerability Assessment for Google Cloud :
Helps to discover critical and high severity software vulnerabilities in
your Compute Engine VM instances without installing agents.
The findings from this service have categories of OS_VULNERABILITY and
SOFTWARE_VULNERABILITY . Available for Standard, Premium, and Enterprise service tiers.
Web Security Scanner :
Identifies security vulnerabilities in your App Engine,
GKE, and Compute Engine web applications.
Available for Standard-legacy, Premium, and Enterprise service tiers.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
