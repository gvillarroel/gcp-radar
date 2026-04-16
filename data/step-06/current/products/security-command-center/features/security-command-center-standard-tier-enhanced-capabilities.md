---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.588Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security Command Center Standard tier enhanced capabilities"
feature_slug: "security-command-center-standard-tier-enhanced-capabilities"
latest_feature_date: "2026-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/service-tiers"
  - "https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier"
keywords:
  - "security"
  - "command"
  - "center"
  - "standard"
  - "tier"
  - "enhanced"
  - "capabilities"
  - "includes"
---

# Security Command Center Standard tier enhanced capabilities

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The Security Command Center Standard tier includes a new set of capabilities and can be automatically activated for some organizations.

## Extended Definition

The Security Command Center Standard tier includes a new set of capabilities and can be automatically activated for some organizations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/service-tiers](https://docs.cloud.google.com/security-command-center/docs/service-tiers)
- [https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier](https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- February 11, 2026 Feature The Security Command Center Standard tier , available at no charge, has a new set of capabilities and is activated automatically for some organizations.
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.
- See the following for detailed information about activating a specific tier: Activate Security Command Center Standard tier for an organization Activate Security Command Center Premium tier for an organization November 17, 2025 Feature Agent Engine Threat Detection , a built-in service of Security Command Center, is available in Preview to the Security Command Center Enterprise and Premium tiers.

### Security Command Center service tiers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/service-tiers](https://docs.cloud.google.com/security-command-center/docs/service-tiers)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Standard-legacy, Standard, Premium, and Enterprise service tiers Security Command Center is offered in three service tiers: Standard, Premium, and Enterprise.
- Home Documentation Security Security Command Center Guides Send feedback Security Command Center service tiers Stay organized with collections Save and categorize content based on your preferences.
- For the Google SecOps features supported with the Security Command Center Enterprise tier, see Google SecOps features in Security Command Center Enterprise .
- Security Command Center Enterprise users get access to the Premium tier of Audit Manager at no extra cost.

### "Activate the Security Command Center Enterprise tier \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier](https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- For instructions on activating Security Command Center with a different service tier, see the following: Activate Security Command Center Standard tier Activate Security Command Center Premium tier Before you begin Before you activate Security Command Center for the first time, complete the following: Plan for the activation Create an organization Create the management project Configure permissions and APIs Configure notification contacts Plan for the activation This section describes decisions and information you need to prepare for the activation.
- If you did not enable Security Command Center data residency for the Standard or Premium tier, then you cannot enable it when you upgrade to the Enterprise tier.
- If you use the Standard or Premium service tier, then upgrading to the Enterprise tier does not change the location of your Security Command Center data.
- Enterprise service tier The Security Command Center Enterprise tier provides security enhancements, including the following: Advanced security operations using Google Security Operations Integrations with other Google Cloud products, such as Mandiant Attack Surface Management, Sensitive Data Protection, and Assured OSS Multi-cloud support Risk analysis Compliance support ( Preview ) For a description of the Enterprise tier features, see Service tiers .

