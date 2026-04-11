---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.429Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Environment groups"
feature_slug: "environment-groups"
latest_feature_date: "2025-01-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen"
keywords:
  - "environment"
  - "groups"
  - "let"
  - "you"
  - "organize"
  - "environments"
  - "into"
  - "logical"
---

# Environment groups

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Environment groups let you organize environments into logical categories for administration and case management.

## Extended Definition

Environment groups let you organize environments into logical categories for administration and case management.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)

## Supporting Pages

### Google Security Operations SOAR release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- Source ID: `site-api-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- February 02, 2025 Feature Environment groups This feature lets you group environments into logical categories, making it easier to manage your company or your customers as an MSSP.
- October 26, 2025 Feature Delete high-load environments You can now easily delete environments with heavy loads directly from the platform.
- New API for Logs: Admin users can now retrieve raw python logs directly from the platform using the following API: POST/api/external/v1/logging/python Fixed Release Notes 6.2.31 Importing a custom integration on top of an existing commercial integration causes the connector to not work properly (ID #00243798) Specific Integration showing incorrect update available (ID #00181718) SDK call siemplify.current alert.creation time returns 0 (ID #00226591) In rare situations, unable to access several cases via the Platform or via API (ID #00243878) When changing the Case Stage under the Cases tab, the drop down list of stages does not follow the same numerical order as defined in the Settings (ID #44453181) Entities that should be internal are created as external if ingested using the environment alias (ID #00225318) In certain situations, alerts are ingested into the platform for environments that don't exist yet in the platform and as soon as the environments are created - the cases are opened and playbooks run.
- Feature Remote agent notifications Agent notifications will alert you to new remote agent version releases and agent downtime based on your permissions and associated environments.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- January 28, 2025 Feature Environment groups This feature lets you group environments into logical categories, making it easier to manage your company or your customers as an MSSP.
- The following rules have been added to the rulepack: Archive Exfiltration Event to Non-Google Websites Google Chrome Navigation Event to Shortened URLs Suspicious Download from Filehosting or Chat Platform in Chrome Management Chrome Suspicious Download Event from Newly Observed Domain in Environment October 26, 2025 Feature Delete high-load SOAR environments You can now easily delete environments with heavy loads directly from the platform.
- This feature lets you integrate AI-driven capabilities into your existing playbooks while staying in charge of critical actions by combining agents with deterministic automation steps.
- Feature Remote agent notifications Agent notifications will alert you to new remote agent version releases and agent downtime based on your permissions and associated environments.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- January 28, 2025 Feature Environment groups This feature lets you group environments into logical categories, making it easier to manage your company or your customers as an MSSP.
- Duet AI can translate natural language into Chronicle's unified data model, letting you search your event data without having to know YARA-L to craft custom queries.
- This feature lets you feed the output of one query stage into the input of another, providing more granular data transformation than a single, monolithic query.
- These scores are surfaced in the Risk Analytics dashboard which lets you better understand risk in your environment by visualizing entity risk trends.

### "Explore the Playbooks page \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)
- Source ID: `site-api-reference`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can select one or multiple environments, environment groups, or a combination of both.
- You can apply playbooks associated with environment groups to cases originating from any environment within those groups.
- Environments : Multi-select option for environments and environment groups.
- Menu : Click edit Edit and select the required playbooks or blocks before using Menu to perform bulk actions: New Folder : Add a new playbooks folder; the playbook automatically inherits any changes made to its associated environment groups.

