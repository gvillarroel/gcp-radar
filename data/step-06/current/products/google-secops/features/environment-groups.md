---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.963Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Environment groups"
feature_slug: "environment-groups"
latest_feature_date: "2025-01-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
keywords:
  - "environment"
  - "groups"
  - "let"
  - "administrators"
  - "organize"
  - "environments"
  - "into"
  - "logical"
---

# Environment groups

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Environment groups let administrators organize environments into logical categories for user access, IdP mapping, playbooks, and case filtering.

## Extended Definition

Environment groups let administrators organize environments into logical categories for user access, IdP mapping, playbooks, and case filtering.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)

## Supporting Pages

### Google Security Operations SOAR release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- February 02, 2025 Feature Environment groups This feature lets you group environments into logical categories, making it easier to manage your company or your customers as an MSSP.
- It uses a lottery algorithm for resource allocation and lets administrators prioritize environments via API-based weighting.
- New API for Logs: Admin users can now retrieve raw python logs directly from the platform using the following API: POST/api/external/v1/logging/python Fixed Release Notes 6.2.31 Importing a custom integration on top of an existing commercial integration causes the connector to not work properly (ID #00243798) Specific Integration showing incorrect update available (ID #00181718) SDK call siemplify.current alert.creation time returns 0 (ID #00226591) In rare situations, unable to access several cases via the Platform or via API (ID #00243878) When changing the Case Stage under the Cases tab, the drop down list of stages does not follow the same numerical order as defined in the Settings (ID #44453181) Entities that should be internal are created as external if ingested using the environment alias (ID #00225318) In certain situations, alerts are ingested into the platform for environments that don't exist yet in the platform and as soon as the environments are created - the cases are opened and playbooks run.
- October 26, 2025 Feature Delete high-load environments You can now easily delete environments with heavy loads directly from the platform.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- January 28, 2025 Feature Environment groups This feature lets you group environments into logical categories, making it easier to manage your company or your customers as an MSSP.
- It uses a lottery algorithm for resource allocation and lets administrators prioritize SOAR environments via API-based weighting.
- The following rules have been added to the rulepack: Archive Exfiltration Event to Non-Google Websites Google Chrome Navigation Event to Shortened URLs Suspicious Download from Filehosting or Chat Platform in Chrome Management Chrome Suspicious Download Event from Newly Observed Domain in Environment October 26, 2025 Feature Delete high-load SOAR environments You can now easily delete environments with heavy loads directly from the platform.
- March 08, 2025 Feature Map users in the platform for Google Cloud Identity customers Administrators can now provision and map new users into the platform by adding them to groups in bulk using their email addresses.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- January 28, 2025 Feature Environment groups This feature lets you group environments into logical categories, making it easier to manage your company or your customers as an MSSP.
- For more information about how to create groups of environments, see Create environment groups .
- Customer authoring of rules Customer development of response playbooks Curated views for Investigation and triage Insights : Applied Threat Intelligence provides curated views that show valuable associations between an indicator and threat actor, threat campaign, or malware, statistics about a threat observed in customer environments.
- June 24, 2024 Change During the Google Security Operations onboarding steps, you can now specify identity provider groups that include administrators who configure user access to SOAR-related features.

