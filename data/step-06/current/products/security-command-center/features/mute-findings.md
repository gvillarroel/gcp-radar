---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.085Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Mute Findings"
feature_slug: "mute-findings"
latest_feature_date: "2021-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/quickstart-optimize-security-command-center"
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics"
keywords:
  - "mute"
  - "findings"
  - "lets"
  - "you"
  - "create"
  - "filters"
  - "automatically"
  - "hide"
---

# Mute Findings

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Mute Findings lets you create filters to automatically hide or suppress current and future findings that match specified criteria.

## Extended Definition

Mute Findings lets you create filters to automatically hide or suppress current and future findings that match specified criteria.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/quickstart-optimize-security-command-center](https://docs.cloud.google.com/security-command-center/docs/quickstart-optimize-security-command-center)
- [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Mute Findings is a powerful volume management feature that lets you create filters to automatically hide or suppress current and future findings based on criteria you specify.
- The Findings > Quick filters panel shows separate State and Mute filter sections.
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- Impact: Finding notification filters, post-processing and alerting based on the finding source property will need to be updated to take advantage of the new data type for findings of the following categories: AUDIT CONFIG NOT MONITORED , BUCKET IAM NOT MONITORED , CUSTOM ROLE NOT MONITORED , FIREWALL NOT MONITORED , NETWORK NOT MONITORED , OWNER NOT MONITORED , ROUTE NOT MONITORED , SQL INSTANCE NOT MONITORED .

### Security Command Center best practices \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/quickstart-optimize-security-command-center](https://docs.cloud.google.com/security-command-center/docs/quickstart-optimize-security-command-center)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Remediating Security Health Analytics findings Remediating Web Security Scanner findings Investigating and responding to threats Control finding volume Standard-legacy, Standard, Premium, and Enterprise service tiers To control the volume of findings in Security Command Center, you can manually or programmatically mute individual findings, or create mute rules that automatically mute findings based on filters you define.
- You can use the Notifications API and Cloud Run functions to send findings to third-party remediation and ticketing systems or take automated actions, like automatically closing findings.
- There are two types of mute rules you can use to control finding volume: Static mute rules that indefinitely mute future findings.
- Muting findings with dynamic mute rules is the recommended and most effective approach for controlling finding volume.

### "Using Security Health Analytics \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Mute findings Standard-legacy, Standard, Premium, and Enterprise service tiers To control the volume of findings in Google Cloud console, you can manually or programmatically mute individual findings, or create mute rules that automatically mute findings based on filters you define.
- Before you begin Standard-legacy, Standard, Premium, and Enterprise service tiers To get the permissions that you need to manage Security Health Analytics findings, ask your administrator to grant you the following IAM roles on your organization, folder, or project: Enable and disable detectors: Security Center Settings Editor ( roles/securitycenter.settingsEditor ) View and filter findings: Security Center Findings Viewer ( roles/securitycenter.findingsViewer ) Manage mute rules: Security Center Mute Configurations Editor ( roles/securitycenter.muteConfigsEditor ) Manage security marks: Security Center Finding Security Marks Writer ( roles/securitycenter.findingSecurityMarksWriter ) Programmatically manage findings: Security Center Findings Editor ( roles/securitycenter.findingsEditor ) Grant inbound access to a VPC Service Controls service perimeter: Access Context Manager Editor ( roles/accesscontextmanager.policyEditor ) Complete any task on this page: Security Center Settings Admin ( roles/securitycenter.settingsAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- By using filters that are available on the Security Command Center Vulnerabilities and Findings pages in the Google Cloud console, you can focus on the highest severity vulnerabilities across your organization, and review vulnerabilities by asset type, project, and more.
- Although it is not a recommended method, you can suppress unneeded findings by adding dedicated security marks to assets so that the Security Health Analytics detectors don't create security findings for those assets.

