---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.819Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Automation"
feature_slug: "automation"
latest_feature_date: "2024-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center"
  - "https://docs.cloud.google.com/security-command-center/docs/cases-overview"
keywords:
  - "automation"
  - "soar"
  - "capabilities"
  - "manage"
  - "detections"
  - "investigations"
  - "responses"
  - "cases"
---

# Automation

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The SOAR capabilities manage detections, investigations, and responses with cases and playbooks.

## Extended Definition

The SOAR capabilities manage detections, investigations, and responses with cases and playbooks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center)
- [https://docs.cloud.google.com/security-command-center/docs/cases-overview](https://docs.cloud.google.com/security-command-center/docs/cases-overview)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.
- The new use case, identified by date, September 4, 2024, introduces updated widgets, new playbooks, optimized data synchronization jobs, updated ingestion logic, and other enhancements to support the management of toxic combination findings and cases in the Security Operations console.
- June 13, 2024 Feature Preview of Cloud Infrastructure Entitlement Management capabilities Cloud Infrastructure Entitlement Management (CIEM) for Amazon Web Services (AWS) and other identity providers on Google Cloud, such as Entra ID (Azure AD) and Okta, is now in preview.

### "Use Security Command Center in the Google Cloud console \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- You also need any of the following IAM roles: Chronicle SOAR Admin ( roles/chronicle.soarAdmin ) Chronicle SOAR Threat Manager ( roles/chronicle.soarThreatManager ) Chronicle SOAR Vulnerability Manager ( roles/chronicle.soarVulnerabilityManager ) To enable access to SOAR-related features, you must also map these Identity and Access Management roles to a SOC role , Permission group , and Environment on the Settings > SOAR settings page.
- Risk overview Graph Search Issues page Findings Assets Compliance Posture Management Sources Settings Setup Guide Cases Risk overview Standard-legacy, Standard, Premium, and Enterprise service tiers The Risk overview page serves as your first-contact security dashboard, highlighting high-priority risks in your cloud environments identified by all built-in and integrated services.
- Risk overview Graph Search Issues page Findings Assets Compliance Posture Management Sources Settings Enterprise In the Security Command Center Enterprise left navigation, Cases links to pages in the Google Security Operations tenant that was configured during Security Command Center Enterprise activation.
- Security Operations console pages The Security Operations console page lets you perform tasks such as the following: Connect to other cloud environments to collect log data for curated detections in security information and event management (SIEM).

### Cases overview \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/cases-overview](https://docs.cloud.google.com/security-command-center/docs/cases-overview)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The connector collects the alerts and ingests them into the security orchestration, automation, and response (SOAR) module where the playbooks process and enrich the alerts that are grouped into cases.
- Overview In Security Command Center, you use cases to obtain details about findings, attach playbooks to finding alerts, apply automatic threat responses, and track the remediation of security issues.
- How to perform a manual action on a case How to simulate cases Work with playbook blocks Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If you integrate a ticketing system , Security Command Center Enterprise creates tickets based on posture cases and forwards all information collected by playbooks to the ticketing system using the synchronization job.

