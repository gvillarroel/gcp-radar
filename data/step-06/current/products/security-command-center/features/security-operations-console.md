---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.825Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security Operations console"
feature_slug: "security-operations-console"
latest_feature_date: "2024-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center"
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics"
keywords:
  - "security"
  - "operations"
  - "console"
  - "dedicated"
  - "supports"
  - "global"
  - "tasks"
---

# Security Operations console

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

A dedicated console supports global security operations tasks.

## Extended Definition

A dedicated console supports global security operations tasks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center)
- [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics)

## Supporting Pages

### "Use Security Command Center in the Google Cloud console \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-command-center)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Security Operations console pages The Security Operations console page lets you perform tasks such as the following: Connect to other cloud environments to collect log data for curated detections in security information and event management (SIEM).
- This section describes the tasks that you can perform on each page and the navigation links that open Security Operations console pages.
- Links to the Security Operations console Enterprise service tier The Security Command Center Enterprise tier includes features available on both the Google Cloud console pages and on Security Operations console pages.
- Cases In the Security Operations console, you use cases to obtain details about findings, attach playbooks to finding alerts, apply automatic threat responses, and track the remediation of security issues.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- July 17, 2025 Feature The following Container Threat Detection detectors for file monitoring are in Preview : Collection: Pam.d Modification Credential Access: Access Sensitive Files on Nodes Defense Evasion: Disable or modify Linux audit system Defense Evasion: Root Certificate Installed Execution: Suspicious Cron Modification Persistence: Modify ld.so.preload Change The following Security Command Center Enterprise pages in the Google Cloud console now fully replace equivalent pages that you accessed previously in the Google Security Operations console.
- Change The following Security Command Center Enterprise pages that you previously accessed through the Google Security Operations console are now under Security Command Center in the Google Cloud console: Risk Overview Issues Assets (previously called resources ) Findings The Security Command Center Enterprise left navigation also includes links to pages in the Google Security Operations console.
- September 04, 2024 Change Install new version of the Security Command Center Enterprise use case The installation and configuration of a new version of the SCC Enterprise - Cloud Orchestration & Remediation use case in the Security Operations console is required for the toxic combination functionality of Security Command Center Enterprise.

### "Using Security Health Analytics \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- For brevity, this example shows a subset of all Security Health Analytics modules. { "effectiveEnablementState": "ENABLED", "intendedEnablementState": "ENABLED", "modules": { "ACCESS AWSCLOUDSHELLFULLACCESS RESTRICTED": { "effectiveEnablementState": "DISABLED" }, "ACCESS KEYS ROTATED 90 DAYS LESS": { "effectiveEnablementState": "ENABLED" }, "ACCESS TRANSPARENCY DISABLED": { "effectiveEnablementState": "ENABLED" }, "ADMIN SERVICE ACCOUNT": { "effectiveEnablementState": "ENABLED" }, "ALLOYDB AUTO BACKUP DISABLED": { "effectiveEnablementState": "DISABLED" } }, "name": "projects/1070293378382/locations/global/securityCenterServices/SECURITY HEALTH ANALYTICS", "updateTime": "2026-02-11T21:15:41.269584764Z" } Filtering findings in the Google Cloud console Standard-legacy, Standard, Premium, and Enterprise service tiers A large organization might have many vulnerability findings across their deployment to review, triage, and track.
- Manage findings with cases Enterprise service tier Security Command Center automatically opens a case in the Security Operations console for threats, toxic combinations, and findings related to toxic combinations.
- The command should display output like the following, with results from your organization: groupByResults : - count : '1' properties : category : MFA NOT ENFORCED - count : '3' properties : category : ADMIN SERVICE ACCOUNT - count : '2' properties : category : API KEY APIS UNRESTRICTED - count : '1' properties : category : API KEY APPS UNRESTRICTED - count : '2' properties : category : API KEY EXISTS - count : '10' properties : category : AUDIT CONFIG NOT MONITORED - count : '10' properties : category : AUDIT LOGGING DISABLED - count : '1' properties : category : AUTO UPGRADE DISABLED - count : '10' properties : category : BUCKET IAM NOT MONITORED - count : '10' properties : category : BUCKET LOGGING DISABLED nextPageToken : TOKEN readTime : '2023-08-05T21:56:13.862Z' totalSize : 50 Programmatically manage findings Standard-legacy, Standard, Premium, and Enterprise service tiers Using the Google Cloud CLI and the Security Command Center client libraries, you can automate almost anything you can do with Security Command Center in the Google Cloud console.
- For brevity, this example shows a subset of all Security Health Analytics modules. effectiveEnablementState: ENABLED intendedEnablementState: ENABLED modules: ACCESS AWSCLOUDSHELLFULLACCESS RESTRICTED: effectiveEnablementState: DISABLED ACCESS KEYS ROTATED 90 DAYS LESS: effectiveEnablementState: ENABLED ACCESS TRANSPARENCY DISABLED: effectiveEnablementState: ENABLED ADMIN SERVICE ACCOUNT: effectiveEnablementState: ENABLED ALLOYDB AUTO BACKUP DISABLED: effectiveEnablementState: DISABLED name: projects/1070293378382/locations/global/securityCenterServices/SECURITY HEALTH ANALYTICS updateTime: '2026-02-11T21:15:41.269584764Z' REST The Security Command Center Management API's RESOURCE TYPE .locations.securityCenterServices.patch method updates the state of a Security Command Center service or module.

