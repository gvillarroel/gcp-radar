---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.724Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Issues page"
feature_slug: "issues-page"
latest_feature_date: "2025-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center"
keywords:
  - "issues"
  - "page"
  - "risk"
  - "section"
  - "now"
  - "includes"
  - "dedicated"
---

# Issues page

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The Risk section now includes a dedicated Issues page.

## Extended Definition

The Risk section now includes a dedicated Issues page.

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
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Change The following Security Command Center Enterprise pages that you previously accessed through the Google Security Operations console are now under Security Command Center in the Google Cloud console: Risk Overview Issues Assets (previously called resources ) Findings The Security Command Center Enterprise left navigation also includes links to pages in the Google Security Operations console.
- The Risk Overview dashboard has also been updated, and a new Issues page added to the Risk section.
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- March 20, 2025 Feature The Risk section of the SecOps console has been updated for Security Command Center Enterprise, introducing the following features in Preview : Issues are the most important security risks Security Command Center Enterprise has found in your cloud environments.

### "Use Security Command Center in the Google Cloud console \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Risk overview Graph Search Issues page Findings Assets Compliance Posture Management Sources Settings Setup Guide Cases Risk overview Standard-legacy, Standard, Premium, and Enterprise service tiers The Risk overview page serves as your first-contact security dashboard, highlighting high-priority risks in your cloud environments identified by all built-in and integrated services.
- Risk overview Graph Search Issues page Findings Assets Compliance Posture Management Sources Settings Enterprise In the Security Command Center Enterprise left navigation, Cases links to pages in the Google Security Operations tenant that was configured during Security Command Center Enterprise activation.
- Risk overview Issues page : Prompts you to upgrade to the Premium service tier.
- Risk overview Issues page : Prompts you to upgrade to the Premium service tier.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- You can filter in the following investigative views: Risk Overview > All risk dashboard Risk Overview > Data dashboard Findings page Issues page Compliance > Monitor (New) tab Compliance > Monitor (New) > Framework Details page The application filter is available when viewing data for an organization and lists applications that are created in App Hub and deployed in the same organization where Security Command Center was activated.
- In the Enterprise or Premium tier of Security Command Center, the Risk Engine detects groups of security issues that, when they occur together in a particular pattern, create a path to one or more of your high-value resources that a determined attacker could potentially use to reach and compromise those resources.
- Organization Fix this finding build : Use IAM recommender to apply the recommended fix for this finding by following these steps: In the Next steps section of the finding details in the Google Cloud console, copy and paste the URL for the IAM page into a browser address bar and press Enter .
- Organization Fix this finding build : Use IAM recommender to apply the recommended fix for this finding by following these steps: In the Next steps section of the finding details in the Google Cloud console, copy and paste the URL for the IAM page into a browser address bar and press Enter .

