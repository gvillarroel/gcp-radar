---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.140Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Finding severity field in Security Command Center API"
feature_slug: "finding-severity-field-in-security-command-center-api"
latest_feature_date: "2020-10-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-enable-real-time-notifications"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query"
keywords:
  - "finding"
  - "severity"
  - "field"
  - "security"
  - "command"
  - "center"
  - "adds"
  - "findings"
---

# Finding severity field in Security Command Center API

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The Security Command Center API adds a severity field on findings.

## Extended Definition

The Security Command Center API adds a severity field on findings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/how-to-enable-real-time-notifications](https://docs.cloud.google.com/security-command-center/docs/how-to-enable-real-time-notifications)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query](https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query)

## Supporting Pages

### "Enabling real-time email and chat notifications \_|\_ Security Command Center\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-enable-real-time-notifications](https://docs.cloud.google.com/security-command-center/docs/how-to-enable-real-time-notifications)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For instructions, see Using secrets in Cloud Run functions documentation. #!/usr/bin/env python3 import base64 import json import requests from google.cloud import securitycenter v1 WEBEX TOKEN = " WEBEX TOKEN " ROOM ID = " ROOM ID " TEMPLATE = """ Severity: {severity} \n Asset: {asset} \n SCC Category: {category} \n Project: {project} \n First observed: {create time} \n Last observed: {event time} \n Link to finding: {finding link} """ PREFIX = "https://console.cloud.google.com/security/command-center/findings" def get finding detail page link ( finding name ): """Constructs a direct link to the finding detail page.""" org id = finding name . split ( "/" )[ 1 ] return f " { PREFIX } ?organizationId= { org id } & resourceId= { finding name } " def get asset ( parent , resource name ): """Retrieves the asset corresponding to resource name from SCC.""" client = securitycenter v1 .
- Configure Pub/Sub and Cloud Run functions to send notifications to Slack, Twilio SendGrid Mail, or Webex Teams whenever a new high or critical severity finding is written to Security Command Center.
- Standard-legacy, Standard, Premium, and Enterprise service tiers Overview Security Command Center provides real-time notifications of findings in the Google Cloud console.
- Setting up a Pub/Sub topic Important: If you already configured Security Command Center to publish findings in Pub/Sub, you can skip to Setting up a messaging app .

### "Bulk export findings to BigQuery \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query](https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Each dataset contains a findings table, which has the following fields: Field Description source id A unique identifier that Security Command Center assigns to the source of a finding .
- Set up permissions To complete this guide, you must have the following Identity and Access Management (IAM) roles: On the organization where you want to export findings from, one of the following: Security Center BigQuery Exports Editor ( roles/securitycenter.bigQueryExportsEditor ) Security Center Admin ( roles/securitycenter.admin ) To learn more about Security Command Center roles, see Access control .
- For continuous exports, this field is empty. finding A record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement.
- Home Documentation Security Security Command Center Guides Send feedback Bulk export findings to BigQuery Stay organized with collections Save and categorize content based on your preferences.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- February 05, 2021 Change Security Command Center's v1 API now includes a Severity field for Findings.
- Feature The Security Command Center API now includes a severity field for Findings.
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- April 01, 2024 Fixed The following Security Health Analytics misconfiguration detectors have changed to check for overly restrictive flag values that might prevent error messages from being written to the logs: SQL LOG ERROR VERBOSITY SQL LOG MIN ERROR STATEMENT SEVERITY For the flag values that the detectors check for, see: SQL log error verbosity SQL log min error statement severity March 26, 2024 Feature GKE security posture recommendations released to Preview Recommendations from GKE security posture are now available as findings in all tiers of Security Command Center as a Preview release.

