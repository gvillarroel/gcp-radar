---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.798Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Dynamic mute rules"
feature_slug: "dynamic-mute-rules"
latest_feature_date: "2024-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics"
  - "https://docs.cloud.google.com/security-command-center/docs/quickstart-optimize-security-command-center"
keywords:
  - "dynamic"
  - "mute"
  - "rules"
  - "can"
  - "future"
  - "existing"
  - "findings"
  - "until"
---

# Dynamic mute rules

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Dynamic mute rules can mute future and existing findings until a specified date or indefinitely until a finding no longer matches the configuration.

## Extended Definition

Dynamic mute rules can mute future and existing findings until a specified date or indefinitely until a finding no longer matches the configuration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics)
- [https://docs.cloud.google.com/security-command-center/docs/quickstart-optimize-security-command-center](https://docs.cloud.google.com/security-command-center/docs/quickstart-optimize-security-command-center)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 227
- Re-rank relevance: N/A

Evidence snippets:
- August 29, 2024 Feature Dynamic mute rules are generally available Security Command Center now supports dynamic mute rules, which allow you to mute future and existing findings temporarily until a specified date or indefinitely until a finding no longer matches the configuration.
- For instructions on how to migrate your existing mute rules to dynamic mute rules, see Migrate from static to dynamic mute rules .
- We are adding these rules as an alternative to the original static mute rules that only mute future findings indefinitely.
- Mute Findings is a powerful volume management feature that lets you create filters to automatically hide or suppress current and future findings based on criteria you specify.

### "Using Security Health Analytics \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dynamic mute rules that contain an option to temporarily mute current and future findings.
- There are two types of mute rules you can use to control finding volume: Static mute rules that indefinitely mute future findings.
- We recommend using dynamic mute rules exclusively to reduce the number of findings you review manually.
- Before you begin Standard-legacy, Standard, Premium, and Enterprise service tiers To get the permissions that you need to manage Security Health Analytics findings, ask your administrator to grant you the following IAM roles on your organization, folder, or project: Enable and disable detectors: Security Center Settings Editor ( roles/securitycenter.settingsEditor ) View and filter findings: Security Center Findings Viewer ( roles/securitycenter.findingsViewer ) Manage mute rules: Security Center Mute Configurations Editor ( roles/securitycenter.muteConfigsEditor ) Manage security marks: Security Center Finding Security Marks Writer ( roles/securitycenter.findingSecurityMarksWriter ) Programmatically manage findings: Security Center Findings Editor ( roles/securitycenter.findingsEditor ) Grant inbound access to a VPC Service Controls service perimeter: Access Context Manager Editor ( roles/accesscontextmanager.policyEditor ) Complete any task on this page: Security Center Settings Admin ( roles/securitycenter.settingsAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### Security Command Center best practices \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/quickstart-optimize-security-command-center](https://docs.cloud.google.com/security-command-center/docs/quickstart-optimize-security-command-center)
- Source ID: `site-docs-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dynamic mute rules that contain an option to temporarily mute current and future findings.
- There are two types of mute rules you can use to control finding volume: Static mute rules that indefinitely mute future findings.
- Muting findings with dynamic mute rules is the recommended and most effective approach for controlling finding volume.
- We recommend using dynamic mute rules exclusively to reduce the number of findings you review manually.

