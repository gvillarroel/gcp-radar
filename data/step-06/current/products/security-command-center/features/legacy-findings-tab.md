---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.938Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Legacy Findings tab"
feature_slug: "legacy-findings-tab"
latest_feature_date: "2023-03-01"
deprecation_date: "2023-03-31"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center"
keywords:
  - "legacy"
  - "findings"
  - "tab"
  - "version"
  - "security"
  - "command"
  - "center"
  - "console"
---

# Legacy Findings tab

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The legacy version of the Security Command Center Findings tab in the Cloud console; deprecated on 2023-03-31.

## Extended Definition

The legacy version of the Security Command Center Findings tab in the Cloud console; deprecated on 2023-03-31.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- March 01, 2023 Deprecated The legacy version of the Findings tab in the Security Command Center dashboard in the Cloud console is now deprecated.
- April 06, 2023 Deprecated The legacy version of the Findings tab is removed from Security Command Center in the Google Cloud console.
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Anomaly Detection is automatically enabled when you activate Security Command Center Standard-legacy or Premium tier, and findings are available in the Google Cloud console.
- Enable or disable IAM recommender findings To enable or disable IAM recommender findings in Security Command Center, follow these steps: Go to the Integrated services tab of the Security Command Center Settings page in the Google Cloud console: Go to Integrated Services Go to the IAM recommender entry.
- If you configure your Sensitive Data Protection operation to send results to Security Command Center, you can see the findings directly in the Security Command Center section of the Google Cloud console, in addition to the Sensitive Data Protection section.
- App Hub Standard-legacy, Standard, Premium, and Enterprise service tiers Security Command Center and Compliance Manager let you view findings, issues, and compliance information for resources within a specific App Hub application.

### "Use Security Command Center in the Google Cloud console \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Legacy Vulnerabilities page Standard-legacy, Standard, Premium, and Enterprise service tiers The legacy Vulnerabilities page lists all of the misconfiguration and software vulnerability findings that the built-in detection services of Security Command Center run in your cloud environments.
- Findings Standard-legacy, Standard, Premium, and Enterprise service tiers On the Findings page, you can query, review, mute, and mark Security Command Center findings , the records that Security Command Center services create when they detect a security issue in your environment.
- By using filters that are available on the Security Command Center Vulnerabilities and Findings pages in the Google Cloud console, you can focus on the highest severity vulnerabilities across your organization, and review vulnerabilities by asset type, project, and more.
- Standard-legacy, Standard, Premium, and Enterprise service tiers This page provides an overview of Security Command Center in the Google Cloud console, describes the navigation, and gives an overview of top-level pages.

