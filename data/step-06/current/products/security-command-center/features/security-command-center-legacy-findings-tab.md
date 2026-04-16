---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.907Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security Command Center legacy Findings tab"
feature_slug: "security-command-center-legacy-findings-tab"
latest_feature_date: "2023-04-06"
deprecation_date: "2023-04-06"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview"
keywords:
  - "security"
  - "command"
  - "center"
  - "legacy"
  - "findings"
  - "tab"
  - "console"
  - "removed"
---

# Security Command Center legacy Findings tab

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The legacy Findings tab in the Google Cloud console is removed; deprecated on 2023-04-06.

## Extended Definition

The legacy Findings tab in the Google Cloud console is removed; deprecated on 2023-04-06.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- April 06, 2023 Deprecated The legacy version of the Findings tab is removed from Security Command Center in the Google Cloud console.
- March 01, 2023 Deprecated The legacy version of the Findings tab in the Security Command Center dashboard in the Cloud console is now deprecated.
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.

### "Using Security Health Analytics \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- The command should display output like the following, with results from your organization: groupByResults : - count : '1' properties : category : MFA NOT ENFORCED - count : '3' properties : category : ADMIN SERVICE ACCOUNT - count : '2' properties : category : API KEY APIS UNRESTRICTED - count : '1' properties : category : API KEY APPS UNRESTRICTED - count : '2' properties : category : API KEY EXISTS - count : '10' properties : category : AUDIT CONFIG NOT MONITORED - count : '10' properties : category : AUDIT LOGGING DISABLED - count : '1' properties : category : AUTO UPGRADE DISABLED - count : '10' properties : category : BUCKET IAM NOT MONITORED - count : '10' properties : category : BUCKET LOGGING DISABLED nextPageToken : TOKEN readTime : '2023-08-05T21:56:13.862Z' totalSize : 50 Programmatically manage findings Standard-legacy, Standard, Premium, and Enterprise service tiers Using the Google Cloud CLI and the Security Command Center client libraries, you can automate almost anything you can do with Security Command Center in the Google Cloud console.
- For brevity, this example shows a subset of all Security Health Analytics modules. { "effectiveEnablementState": "ENABLED", "intendedEnablementState": "ENABLED", "modules": { "ACCESS AWSCLOUDSHELLFULLACCESS RESTRICTED": { "effectiveEnablementState": "DISABLED" }, "ACCESS KEYS ROTATED 90 DAYS LESS": { "effectiveEnablementState": "ENABLED" }, "ACCESS TRANSPARENCY DISABLED": { "effectiveEnablementState": "ENABLED" }, "ADMIN SERVICE ACCOUNT": { "effectiveEnablementState": "ENABLED" }, "ALLOYDB AUTO BACKUP DISABLED": { "effectiveEnablementState": "DISABLED" } }, "name": "projects/1070293378382/locations/global/securityCenterServices/SECURITY HEALTH ANALYTICS", "updateTime": "2026-02-11T21:15:41.269584764Z" } Filtering findings in the Google Cloud console Standard-legacy, Standard, Premium, and Enterprise service tiers A large organization might have many vulnerability findings across their deployment to review, triage, and track.
- By using filters that are available on the Security Command Center Vulnerabilities and Findings pages in the Google Cloud console, you can focus on the highest severity vulnerabilities across your organization, and review vulnerabilities by asset type, project, and more.
- Marking assets and findings with security marks Standard-legacy, Standard, Premium, and Enterprise service tiers You can add custom properties to findings and assets in Security Command Center by using security marks.

### "Overview of Event Threat Detection \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- That information is used to detect the following unsafe changes for privileged Google Groups: External group members added to privileged groups Sensitive roles or permissions granted to groups with external group members Privileged groups that are changed to allow anyone in the general public to join Event Threat Detection writes findings to Security Command Center.
- For project-level activations of the Security Command Center Premium tier, this finding is available only if the Standard-legacy tier is enabled in the parent organization..
- For project-level activations of the Security Command Center Premium tier, this finding is available only if the Standard-legacy tier is enabled in the parent organization..
- For project-level activations of the Security Command Center Premium tier, this finding is available only if the Standard-legacy tier is enabled in the parent organization..

