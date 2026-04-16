---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.887Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security Command Center API Finding.userAgent attribute"
feature_slug: "security-command-center-api-finding-useragent-attribute"
latest_feature_date: "2023-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage"
keywords:
  - "security"
  - "command"
  - "center"
  - "finding"
  - "useragent"
  - "attribute"
  - "adds"
  - "access"
---

# Security Command Center API Finding.userAgent attribute

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Adds the userAgent attribute to the Access object in a finding to identify the caller's user agent.

## Extended Definition

Adds the userAgent attribute to the Access object in a finding to identify the caller's user agent.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- June 12, 2023 Feature New Finding attribute: userAgent The userAgent attribute is added to the Access object, which is included in the Finding object of the Security Command Center API.
- August 22, 2022 Feature The following attributes were added to the Finding object of the Security Command Center API: Database provides information about access to a database that is related to a finding. serviceAccountKeyName , serviceAccountDelegationInfo , and principalSubject attributes were added to the existing access attribute.
- February 10, 2022 Feature Access-related details are now available as finding attributes for all Security Command Center services.
- The userAgent attribute identifies the user agent of the caller that is associated with a Security Command Center finding.

### "Profile Cloud Storage data in a single project \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage)
- Source ID: `site-docs-reference-3`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Publish to Security Command Center Findings from data profiles provide context when you triage and develop response plans for your vulnerability and threat findings in Security Command Center .
- Turning on Security Command Center at the organization level enables the flow of findings from integrated services like Sensitive Data Protection.
- If Security Command Center isn't activated at the organization level, Sensitive Data Protection findings won't appear in Security Command Center.
- Before you begin If you have an organization-level discovery subscription—including one through Security Command Center—be aware that this project-level discovery configuration isn't included in your subscription and is billed separately.

### "Profile Cloud Storage data in an organization or folder \_|\_ Sensitive\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage)
- Source ID: `site-docs-reference-3`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Publish to Security Command Center Findings from data profiles provide context when you triage and develop response plans for your vulnerability and threat findings in Security Command Center .
- Turning on Security Command Center at the organization level enables the flow of findings from integrated services like Sensitive Data Protection.
- If Security Command Center isn't activated at the organization level, Sensitive Data Protection findings won't appear in Security Command Center.
- Note: You can also configure Security Command Center to automatically prioritize resources for the attack path simulation feature according to the calculated sensitivity of the data that the resources contain.

