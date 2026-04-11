---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:05:29.901Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Security Actions"
feature_slug: "security-actions"
latest_feature_date: "2023-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/enable-security"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-report-jobs"
keywords:
  - "automated security response"
  - "condition-based security action"
  - "allow security action"
  - "deny security action"
  - "flag security action"
  - "automated action"
  - "Security Actions"
  - "security action"
---

# Security Actions

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Security Actions are available to define automated responses to detected traffic, including deny, flag, and allow actions based on configured conditions.

## Extended Definition

Security Actions in Apigee Advanced API Security are configurable security action settings used by the API security features to represent enforcement outcomes, with documented action values including ALLOW, DENY, and FLAG. The documentation indicates these are managed via security action configurations, and access is role-gated (for example, creation/editing/deletion and viewing/listing of actions are tied to specific Apigee IAM roles). Evidence in these excerpts does not fully describe the complete rule-creation workflow or full condition logic, but it does confirm supported action outcomes and associated management permissions.

## Evidence Summary

The cited pages provide role requirements for security action configuration tasks and show that security actions are reported with the explicit values ALLOW, DENY, and FLAG.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/enable-security](https://docs.cloud.google.com/apigee/docs/api-security/enable-security)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-report-jobs](https://docs.cloud.google.com/apigee/docs/api-security/security-report-jobs)

## Supporting Pages

### Getting started \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/enable-security](https://docs.cloud.google.com/apigee/docs/api-security/enable-security)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: WEAK
- Re-rank rationale: It references monitoring alerts and incidents, but it does not document configuring or executing security actions.

Evidence snippets:
- Security Action Task Required Role(s) Create, edit, or delete security action configurations Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Organization Admin ( roles/apigee.admin ) View or list security actions Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) Check the state of enforcement Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) Note: To make the API calls described in the following sections, you need to obtain an OAuth 2.0 access token , which is passed with the calls.
- Abuse Detection Task Required Role(s) and Permission(s) View incidents in the Abuse detection UI Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) View incident generative AI Insights cloudaicompanion.instances.generateText permission Opt an organization in or out of machine learning models for abuse detection apigee.securitySettings.update permission Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Organization Admin ( roles/apigee.admin ) Required roles for security actions The table below shows the required roles to perform tasks related to security actions .
- Next steps Once you have enabled Advanced API Security, see: Security reports Risk assessment Abuse detection Security alerts Security actions Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For example, you can use Terraform to configure: Risk Assessment v2 security profiles Risk Assessment v2 security monitoring conditions Abuse detection exclusion lists Security actions For information on the currently supported functionality, see the Apigee section of the Terraform Registry .

### Security reports overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-report-jobs](https://docs.cloud.google.com/apigee/docs/api-security/security-report-jobs)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: The page explains how security reports identify suspicious API traffic and mentions using report findings to block attacks, but it does not define configurable security actions or their behavior.

Evidence snippets:
- Possibly values are ALLOW , DENY , or FLAG . security action name The name of the security action. security action headers Headers that you can use to query for a flag security action.
- See Example: Get details for a specific incident . incident id only works with the following metrics: bot bot traffic response size security action The security action.

