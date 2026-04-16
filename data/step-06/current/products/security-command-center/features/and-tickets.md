---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.804Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "and tickets"
feature_slug: "and-tickets"
latest_feature_date: "2024-05-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/cases-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/assign-itsm-tickets"
keywords:
  - "tickets"
  - "muted"
  - "finding"
  - "status"
  - "shown"
  - "related"
  - "alerts"
  - "cases"
---

# and tickets

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Muted finding status is shown in related alerts, cases, and tickets in Security Operations.

## Extended Definition

Muted finding status is shown in related alerts, cases, and tickets in Security Operations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/cases-overview](https://docs.cloud.google.com/security-command-center/docs/cases-overview)
- [https://docs.cloud.google.com/security-command-center/docs/assign-itsm-tickets](https://docs.cloud.google.com/security-command-center/docs/assign-itsm-tickets)

## Supporting Pages

### Cases overview \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/cases-overview](https://docs.cloud.google.com/security-command-center/docs/cases-overview)
- Source ID: `site-docs-reference`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By default, cases containing threat findings have no related tickets even when you integrate the ticketing system with your Security Command Center Enterprise instance.
- Cases containing vulnerability and misconfiguration findings have related tickets only when you integrate and configure the ticketing system.
- If you integrate with ticketing systems , enable synchronization jobs to keep the information about findings and their statuses up to date automatically and synchronize case data with relevant tickets.
- Overview In Security Command Center, you use cases to obtain details about findings, attach playbooks to finding alerts, apply automatic threat responses, and track the remediation of security issues.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- May 30, 2024 Feature Mute state of findings display in alerts, cases, and tickets The mute state of a finding is now reflected in its corresponding alert, case, and tickets in the Security Operations console of Security Command Center Enterprise.
- Previously, muted findings displayed only their Active status.
- For more information, see Finding status in Cases overview .
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.

### "Assign tickets based on posture cases \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/assign-itsm-tickets](https://docs.cloud.google.com/security-command-center/docs/assign-itsm-tickets)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Creating cases and grouping related findings into them.
- All information contained in a case is bidirectionally synchronized with a corresponding ticket, meaning that every time there is an update in a case like a new finding, a new comment, or a status change, the same update appears in the ticket and the other way around.
- Creating cases and grouping findings After the connector has ingested a finding, Security Command Center forwards the finding to a new case if the finding is first of a kind, or an existing case if the finding parameters comply with a grouping mechanism.
- Determining the resource owner While ingesting and grouping findings into cases, the SCC Enterprise - Urgent Posture Findings Connector analyzes every finding for the resource owner and fallback owner values.

