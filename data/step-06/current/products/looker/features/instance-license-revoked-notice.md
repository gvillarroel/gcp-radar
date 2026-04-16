---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.455Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "instance license revoked notice"
feature_slug: "instance-license-revoked-notice"
latest_feature_date: "2025-08-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/action-hub"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-users"
keywords:
  - "instance"
  - "license"
  - "revoked"
  - "notice"
  - "admins"
  - "now"
  - "receive"
  - "when"
---

# instance license revoked notice

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Instance admins now receive a notice when the instance license is revoked and have 14 days to correct issues before shutdown.

## Extended Definition

Instance admins now receive a notice when the instance license is revoked and have 14 days to correct issues before shutdown.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Onboarding When enabled, Looker admins and developers who log in to a new Looker instance will see the Looker onboarding walkthrough, which guides users through the four major steps to make use of a Looker instance: Adding a connection Creating a project Editing project files as needed Exploring data Once any combination of admins or developers completes the full guide, it stops being displayed.
- Looker Support requires permission from a technical contact to do any of the following: Cause downtime for the instance, which could be due to a non-scheduled version update, performance changes to your Looker server, or other reasons Change something about your Looker license, possibly to enable new features for you.
- Include custom filter values for boards Enabling the Include custom filter values for boards feature enables the Include custom filter values setting instance-wide by default when users add dashboards to boards.
- Limit Automatically refresh dashboard option When this setting is enabled, only Looker admins will be able to enable the Automatically refresh dashboard option on user-defined dashboards.

### Sharing data through an action hub \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- Source ID: `site-docs-reference-required-4`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The appropriate solution or combination of solutions will depend on the architecture of the Looker instance: If the customer-hosted instance is not resolvable by the Looker Action Hub — that is, the Looker Action Hub cannot receive requests from the Looker instance — Looker admins can contact a Google Cloud sales specialist to enable the public host url license feature.
- Admins of customer-hosted instances may need to consider additional factors when choosing to enable Looker integrations from the Looker Action Hub, especially integrations that support streamed results or that use OAuth .
- That license feature reveals the --public-host-url startup option , which lets admins specify a resolvable <public host url> hostname that is different from the instance <host looker url> .
- The Looker Action Hub must be able to send and receive API requests in the following ways: From the Looker instance to the Looker Action Hub network From the Looker user's browser to the Looker Action Hub network From the Looker Action Hub network to the Looker instance If your Looker deployment cannot accommodate these requests or if the IP Allowlist feature is enabled on your Looker instance, consider setting up a local action hub server to serve private Looker integrations or custom actions .

### Admin settings - Users \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Note: When an administrator creates an account to use the Platform on a user's behalf, additional information about the user's use is created, which may collect and use the following information: License credentials to ensure that usage is in compliance with the customer's licensing terms.
- Timezone If you've enabled User Specific Time Zones on your Looker instance, you can select the time zone that will be used when this user runs a query in Looker.
- Note: Starting in Looker 25.18, Looker admins can no longer manage users' API keys on a Looker (Google Cloud core) instance.
- On a Looker (Google Cloud core) instance, Looker admins enable individual users to manage their own API keys.

