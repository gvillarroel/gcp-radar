---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.805Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Automatic case severity updates"
feature_slug: "automatic-case-severity-updates"
latest_feature_date: "2024-05-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/cases-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics"
keywords:
  - "automatic"
  - "case"
  - "severity"
  - "updates"
  - "cases"
  - "automatically"
  - "update"
  - "when"
---

# Automatic case severity updates

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Cases automatically update when the severity of the underlying finding changes.

## Extended Definition

Cases automatically update when the severity of the underlying finding changes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/cases-overview](https://docs.cloud.google.com/security-command-center/docs/cases-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics)

## Supporting Pages

### Cases overview \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/cases-overview](https://docs.cloud.google.com/security-command-center/docs/cases-overview)
- Source ID: `site-docs-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When the finding severity changes, Security Command Center automatically updates the case priority to match the highest severity property among all findings in a case.
- If you integrate with ticketing systems , enable synchronization jobs to keep the information about findings and their statuses up to date automatically and synchronize case data with relevant tickets.
- Overview In Security Command Center, you use cases to obtain details about findings, attach playbooks to finding alerts, apply automatic threat responses, and track the remediation of security issues.
- By default, cases containing threat findings have no related tickets even when you integrate the ticketing system with your Security Command Center Enterprise instance.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Feature Finding severities update in cases automatically In the Security Operations console of Security Command Center Enterprise, the severity of each finding is displayed in its corresponding case in the Finding summary widget.
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- If the severity of a finding changes, the case is updated automatically.
- The new use case, identified by date December 18, 2024, introduces updates to security posture findings playbooks and other enhancements to support the management of toxic combination findings and cases in the Security Operations console.

### "Using Security Health Analytics \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manage findings with cases Enterprise service tier Security Command Center automatically opens a case in the Security Operations console for threats, toxic combinations, and findings related to toxic combinations.
- HTTP method and URL: PATCH https://securitycentermanagement.googleapis.com/v1/ RESOURCE TYPE / RESOURCE ID /locations/global/securityCenterServices/security-health-analytics?updateMask=modules Request JSON body: { "modules": { " MODULE NAME ": { "intendedEnablementState": " NEW STATE " } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- When a detector is disabled, existing findings are automatically marked as inactive.
- For brevity, this example shows a subset of all Security Health Analytics modules. effectiveEnablementState: ENABLED intendedEnablementState: ENABLED modules: ACCESS AWSCLOUDSHELLFULLACCESS RESTRICTED: effectiveEnablementState: DISABLED ACCESS KEYS ROTATED 90 DAYS LESS: effectiveEnablementState: ENABLED ACCESS TRANSPARENCY DISABLED: effectiveEnablementState: ENABLED ADMIN SERVICE ACCOUNT: effectiveEnablementState: ENABLED ALLOYDB AUTO BACKUP DISABLED: effectiveEnablementState: DISABLED name: projects/1070293378382/locations/global/securityCenterServices/SECURITY HEALTH ANALYTICS updateTime: '2026-02-11T21:15:41.269584764Z' REST The Security Command Center Management API's RESOURCE TYPE .locations.securityCenterServices.patch method updates the state of a Security Command Center service or module.

