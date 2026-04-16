---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.410Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Abuse Detection exclusion lists"
feature_slug: "abuse-detection-exclusion-lists"
latest_feature_date: "2025-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection"
  - "https://docs.cloud.google.com/apigee/docs/api-security/enable-security"
  - "https://docs.cloud.google.com/apigee/docs/api-security/detection-rules"
keywords:
  - "managing"
  - "lists"
  - "exclusion"
  - "creating"
  - "supports"
  - "detection"
  - "abuse"
---

# Abuse Detection exclusion lists

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Abuse Detection now supports creating and managing multiple exclusion lists to exclude safe traffic from future incident reports.

## Extended Definition

Abuse Detection now supports creating and managing multiple exclusion lists to exclude safe traffic from future incident reports.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection)
- [https://docs.cloud.google.com/apigee/docs/api-security/enable-security](https://docs.cloud.google.com/apigee/docs/api-security/enable-security)
- [https://docs.cloud.google.com/apigee/docs/api-security/detection-rules](https://docs.cloud.google.com/apigee/docs/api-security/detection-rules)

## Supporting Pages

### Abuse detection \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection)
- Source ID: `site-docs-reference-required-7`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Exclude traffic from abuse detection by adding attributes to exclusion lists , which specify the traffic to exclude and the reasons why.
- Manage exclusion lists To manage exclusion lists directly: Select an environment for abuse detection.
- Exclusion lists Exclusion lists collect the attributes to exclude from detection.
- When managing exclusion lists , you can add or modify attributes directly.

### Getting started \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/enable-security](https://docs.cloud.google.com/apigee/docs/api-security/enable-security)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, you can use Terraform to configure: Risk Assessment v2 security profiles Risk Assessment v2 security monitoring conditions Abuse detection exclusion lists Security actions For information on the currently supported functionality, see the Apigee section of the Terraform Registry .
- Risk Assessment Task Required Role(s) Create, update, or delete a custom security profile Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Organization Admin ( roles/apigee.admin ) Attach or detach a security profile Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Organization Admin ( roles/apigee.admin ) View security scores Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) List all security profiles or get a profile Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) Create, update, or delete a security monitoring condition Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Organization Admin ( roles/apigee.admin ) List and view security monitoring conditions Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) List and view security monitoring condition metrics Monitoring Admin ( roles/monitoring.admin ) Monitoring Editor ( roles/monitoring.editor ) Create, update, or delete monitoring alerts See Required roles (for security alerts) View monitoring alerts See Incidents for metric-based alerting policies: Before you begin Required roles and permissions for abuse detection The table below shows the required roles and permissions to perform tasks related to abuse detection .
- Abuse Detection Task Required Role(s) and Permission(s) View incidents in the Abuse detection UI Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) View incident generative AI Insights cloudaicompanion.instances.generateText permission Opt an organization in or out of machine learning models for abuse detection apigee.securitySettings.update permission Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Organization Admin ( roles/apigee.admin ) Required roles for security actions The table below shows the required roles to perform tasks related to security actions .
- Next steps Once you have enabled Advanced API Security, see: Security reports Risk assessment Abuse detection Security alerts Security actions Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Detection rules \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/detection-rules](https://docs.cloud.google.com/apigee/docs/api-security/detection-rules)
- Source ID: `site-docs-reference-required-8`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Note that one incident might be triggered by multiple detection rules, in which case all of the rules that triggered the incident are listed in the Abuse detection Environment details view.
- Limitations For Abuse Detection Advanced Anomaly Detection: Anomalies are detected at the environment level.
- Note: The Advanced API Security Abuse detection page uses detection rules to detect security incidents.
- For more information, see Opt in for machine learning models for Abuse Detection .

