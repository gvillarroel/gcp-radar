---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.826Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Concurrent logins in a single browser profile"
feature_slug: "concurrent-logins-in-a-single-browser-profile"
latest_feature_date: "2025-01-26"
deprecation_date: "2025-02-10"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/rbac"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
keywords:
  - "concurrent"
  - "logins"
  - "single"
  - "browser"
  - "profile"
  - "secops"
  - "no"
  - "longer"
---

# Concurrent logins in a single browser profile

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Google SecOps no longer supports concurrent logins with multiple user accounts in the same browser profile; deprecated on 2025-02-10.

## Extended Definition

Google SecOps no longer supports concurrent logins with multiple user accounts in the same browser profile; deprecated on 2025-02-10.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Navigate search results using pagination To improve browser stability and performance when loading a large number of results, Google SecOps provides paginated search results.
- Navigate result sets To improve browser stability and performance when loading a large number of events, Google SecOps provides paginated search results.
- Note: Grouped UDM field searches typically take longer than single UDM field searches.
- Feature Programmatic access limit Web interface limit QPH limit 2,000 1,000 Simple query concurrency 40 40 Complex query concurrency 10 10 Concurrency limits Concurrency limits define the number of simultaneous search operations allowed per tenant: Simple queries: Queries that span less than one day, use a single data source, and don't include stats.

### "Role-Based Access Control (RBAC) User Guide \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- Source ID: `site-docs-reference`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permissions Permissions provide the authorization needed to perform a single controlled action in Google Security Operations, including (see the user interface for the complete list of permissions): View rule Modify rule Edit feedback Edit reference list View RBAC permissions If a user does not have permissions for an action, the associated feature is disabled.
- Role-Based Access Control (RBAC) User Guide Supported in: Google secops SIEM Role-based access control (RBAC) enables an administrator to tailor access to Google Security Operations features based on an employee's role in your organization.
- Profile The Profile page displays the information from the user's profile (user ID, group ID, roles assigned) and some additional information about their organization (customer ID, Google Cloud project number, Google Cloud project ID).
- If you migrated your instance to IAM, or if you're onboarding to Google SecOps on or after October 6, 2025, see Configure feature access control using IAM and Google SecOps permissions in IAM .

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-3`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Goal : Correlate a single event, like a high-risk login, with a wide range of subsequent "weak signal" activities over a longer period, such as a full day.
- Goal : Build a profile of risky data handling by a single user across multiple devices and actions.
- This includes detecting multi-stage attacks, correlating multiple low-confidence alerts into a single high-confidence alert, or enriching detections with additional context from other data sources.
- Composite detections Supported in: Google secops SIEM This document introduces composite detections and how they can enhance threat detection workflows by correlating outputs from multiple rules.

