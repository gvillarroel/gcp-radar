---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.615Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Correlated Threats"
feature_slug: "correlated-threats"
latest_feature_date: "2025-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/service-tiers"
  - "https://docs.cloud.google.com/security-command-center/docs/assess-risk"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
keywords:
  - "correlated"
  - "threats"
  - "combines"
  - "related"
  - "threat"
  - "findings"
  - "security"
  - "graph"
---

# Correlated Threats

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Correlated Threats combines related threat findings using the security graph to help prioritize and respond to active threats.

## Extended Definition

Correlated Threats combines related threat findings using the security graph to help prioritize and respond to active threats.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/service-tiers](https://docs.cloud.google.com/security-command-center/docs/service-tiers)
- [https://docs.cloud.google.com/security-command-center/docs/assess-risk](https://docs.cloud.google.com/security-command-center/docs/assess-risk)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- This feature combines related threat findings together by using the security graph, helping you to prioritize and respond to active threats.
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.
- The following detectors, which are available in Preview with the Enterprise and Premium tiers of Security Command Center, allow users to manage threats to their Google Cloud Backup and Disaster Recovery assets in Security Command Center: BACKUP DELETE VAULT BACKUP DELETE VAULT BACKUP BACKUP DELETE BACKUP PLAN ASSOCIATION In addition, we updated the existing BACKUP REMOVE PLAN detector to support findings on Google Cloud Backup and Disaster Recovery assets that are managed in the Google Cloud console.

### "Assess risk at a glance \_|\_ Security Command Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/assess-risk](https://docs.cloud.google.com/security-command-center/docs/assess-risk)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Premium and Enterprise Riskiest issues shows at-a-glance information for your top issues , including simplified attack paths, evidence diagrams, or threat finds that are combined together as Correlated Threats ( Preview ).
- You can view multiple domains in Overview by selecting one of the following views: All risk Vulnerabilities Identity Data AI security Threats If Security Command Center was recently activated, it might take time for data to appear.
- You can view findings in the following panels: New threats over time shows potentially harmful events in your resources over a time period that you specify.
- Threats by project panel shows the number of findings for each project in your organization.

### Security Command Center service tiers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/service-tiers](https://docs.cloud.google.com/security-command-center/docs/service-tiers)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This feature combines related threat findings together by using the security graph, helping you to prioritize and respond to active threats.
- Correlated Threats ( Preview ).
- Security Command Center integrates with App Hub to let you filter data related to resources registered to a specific application when investigating findings and issues.
- AI Protection helps you manage the security posture of your AI workloads by detecting threats and helping you to mitigate risks to your AI asset inventory.

