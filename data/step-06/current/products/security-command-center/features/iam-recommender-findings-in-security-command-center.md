---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.876Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "IAM recommender findings in Security Command Center"
feature_slug: "iam-recommender-findings-in-security-command-center"
latest_feature_date: "2023-07-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview"
keywords:
  - "iam"
  - "recommender"
  - "findings"
  - "security"
  - "command"
  - "center"
  - "recommendations"
  - "published"
---

# IAM recommender findings in Security Command Center

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

IAM recommender recommendations are published as vulnerability findings in Security Command Center.

## Extended Definition

IAM recommender recommendations are published as vulnerability findings in Security Command Center.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview)

## Supporting Pages

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Enable or disable IAM recommender findings To enable or disable IAM recommender findings in Security Command Center, follow these steps: Go to the Integrated services tab of the Security Command Center Settings page in the Google Cloud console: Go to Integrated Services Go to the IAM recommender entry.
- In Security Command Center Premium, you can also view the IAM recommender findings on the legacy Vulnerabilities page by selecting the IAM recommender query preset.
- Important : Security bulletin findings that are published in Security Command Center don't include a cve field that lists the associated CVEs.
- View IAM recommender findings in the console In the Google Cloud console, go to the Findings page of Security Command Center.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- The following IAM recommender recommendations are now published as Vulnerability class findings in Security Command Center: IAM role has excessive permissions Service agent role replaced with basic role Service agent granted basic role Unused IAM role For more information, see Security sources > IAM recommender .
- July 13, 2023 Feature Recommendations from the IAM recommender are now available as findings in Security Command Center in a Preview release.
- April 01, 2024 Fixed The following Security Health Analytics misconfiguration detectors have changed to check for overly restrictive flag values that might prevent error messages from being written to the logs: SQL LOG ERROR VERBOSITY SQL LOG MIN ERROR STATEMENT SEVERITY For the flag values that the detectors check for, see: SQL log error verbosity SQL log min error statement severity March 26, 2024 Feature GKE security posture recommendations released to Preview Recommendations from GKE security posture are now available as findings in all tiers of Security Command Center as a Preview release.
- October 21, 2025 Change The release note for Security Command Center and attack path simulations , published on October 16, 2025, was updated to clarify that attack path simulations use Compute Engine and Google Kubernetes Engine OS and software vulnerability findings to detect toxic combinations and chokepoints.

### "Overview of Event Threat Detection \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- That information is used to detect the following unsafe changes for privileged Google Groups: External group members added to privileged groups Sensitive roles or permissions granted to groups with external group members Privileged groups that are changed to allow anyone in the general public to join Event Threat Detection writes findings to Security Command Center.
- If you activate Security Command Center Premium tier at the organization level, you can additionally use Google Security Operations to investigate some findings.
- If you activate Security Command Center Premium tier at the organization level, Security Command Center can write findings to a Cloud Logging project.
- If you activate Security Command Center at the project level, Event Threat Detection doesn't scan these logs and doesn't produce any findings.

