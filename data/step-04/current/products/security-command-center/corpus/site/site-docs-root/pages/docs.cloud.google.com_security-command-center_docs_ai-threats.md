---
title: "AI threat findings \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/ai-threats
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/ai-threats
  title: "AI threat findings \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
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
AI threat findings
Stay organized with collections
Save and categorize content based on your preferences.
Security Command Center has detectors for general AI-related threats and detectors that are
designed for AI agents deployed to Vertex AI Agent Engine
Runtime.
General AI threats
The following log-based detections are available with
Event Threat Detection :
Initial Access: Dormant Service Account Activity in AI Service
Persistence: New AI API Method
Persistence: New Geography for AI Service
Privilege Escalation: Anomalous Impersonation of Service Account for AI Admin Activity
Privilege Escalation: Anomalous Multistep Service Account Delegation for AI Admin Activity
Privilege Escalation: Anomalous Multistep Service Account Delegation for AI Data Access
Privilege Escalation: Anomalous Service Account Impersonator for AI Admin Activity
Privilege Escalation: Anomalous Service Account Impersonator for AI Data Access
Threats to agents deployed to Vertex AI Agent Engine Runtime
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Security Command Center performs runtime and control plane
monitoring of AI agents deployed to
Vertex AI Agent Engine Runtime.
Runtime finding types
The following runtime detections are available with
Agent Engine Threat Detection :
Execution: Added Malicious Binary Executed
Execution: Added Malicious Library Loaded
Execution: Built in Malicious Binary Executed
Execution: Container Escape
Execution: Kubernetes Attack Tool Execution
Execution: Local Reconnaissance Tool Execution
Execution: Malicious Python Executed
Execution: Modified Malicious Binary Executed
Execution: Modified Malicious Library Loaded
Malicious Script Executed
Malicious URL Observed
Reverse Shell
Unexpected Child Shell
Control plane finding types
The following control plane detections are available with
Event Threat Detection :
Credential Access: AI Agent Anomalous Access to Metadata Service
Discovery: AI Agent Service Account Self-Investigation
Discovery: AI Agent Unauthorized Service Account API Call
Discovery: Evidence of Port Scanning from AI Agent
Exfiltration: AI Agent Initiated BigQuery Data Exfiltration to External Table
Exfiltration: AI Agent Initiated BigQuery Data Extraction
Exfiltration: AI Agent Initiated BigQuery VPC Perimeter Violation
Exfiltration: AI Agent Initiated CloudSQL Exfiltration to External Bucket
Exfiltration: AI Agent Initiated CloudSQL Exfiltration to Public Bucket
Initial Access: AI Agent Identity Excessive Permission Denied Actions
Privilege Escalation: AI Agent Suspicious Cross-Project Access Token Generation
Privilege Escalation: AI Agent Suspicious Cross-Project OpenID Token Generation
Privilege Escalation: AI Agent Suspicious Token Generation Using Implicit Delegation
Privilege Escalation: AI Agent Suspicious Token Generation Using signJwt
What's next
Learn about
Event Threat Detection .
Learn about
Agent Engine Threat Detection .
Learn how to respond to AI threat
findings .
Refer to the Threat findings index .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
