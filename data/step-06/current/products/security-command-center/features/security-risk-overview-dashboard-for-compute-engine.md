---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.703Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security Risk Overview dashboard for Compute Engine"
feature_slug: "security-risk-overview-dashboard-for-compute-engine"
latest_feature_date: "2025-05-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/assess-risk"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
keywords:
  - "security"
  - "risk"
  - "overview"
  - "dashboard"
  - "compute"
  - "engine"
  - "shows"
  - "top"
---

# Security Risk Overview dashboard for Compute Engine

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Shows the top Security Command Center findings affecting Compute Engine resources.

## Extended Definition

Shows the top Security Command Center findings affecting Compute Engine resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/assess-risk](https://docs.cloud.google.com/security-command-center/docs/assess-risk)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- DOCX, DOCM, DOTX, DOTM documents PPTX, PPTM, POTX, POT presentations XLSX, XLSM, XLTX, XLTM spreadsheets June 06, 2025 Change The Security Risk Overview dashboard for Compute Engine is in General Availability .
- May 09, 2025 Feature A Security Risk Overview dashboard for Compute Engine is available in the Google Cloud console.
- The dashboard, available in Preview , shows the top Security Command Center findings that affect your Compute Engine resources.
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.

### "Assess risk at a glance \_|\_ Security Command Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/assess-risk](https://docs.cloud.google.com/security-command-center/docs/assess-risk)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All risk dashboard The All risk dashboard surfaces the following high-priority security risks across your cloud environments: Standard-legacy Misconfigurations by date : shows the number of misconfiguration findings over time.
- The Overview page serves as your first contact security dashboard, highlighting the highest priority risks in your cloud environments.
- You can view multiple domains in Overview by selecting one of the following views: All risk Vulnerabilities Identity Data AI security Threats If Security Command Center was recently activated, it might take time for data to appear.
- The dashboard displays the following sections: AI Inventory : Access an overview of the following: The count of discovered AI agents that are deployed to Vertex AI Agent Engine Runtime .

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- You can filter in the following investigative views: Risk Overview > All risk dashboard Risk Overview > Data dashboard Findings page Issues page Compliance > Monitor (New) tab Compliance > Monitor (New) > Framework Details page The application filter is available when viewing data for an organization and lists applications that are created in App Hub and deployed in the same organization where Security Command Center was activated.
- Standard, Premium, and Enterprise service tiers The Vulnerability Assessment for Google Cloud service detects software vulnerabilities in the following resources on the Google Cloud platform: Running Compute Engine VM instances Nodes in GKE Standard clusters Containers running in GKE Standard and GKE Autopilot clusters For each detected vulnerability, Vulnerability Assessment for Google Cloud generates a Vulnerability class finding in the Software vulnerability or OS vulnerability finding category in Security Command Center.
- Risk Engine Premium and Enterprise service tiers The Security Command Center Risk Engine assesses the risk exposure of your cloud deployments, assigns attack exposure scores to vulnerability findings and your high-value resources, and diagrams paths that a potential attacker could take to reach your high-value resources.
- In the Enterprise or Premium tier of Security Command Center, the Risk Engine detects groups of security issues that, when they occur together in a particular pattern, create a path to one or more of your high-value resources that a determined attacker could potentially use to reach and compromise those resources.

