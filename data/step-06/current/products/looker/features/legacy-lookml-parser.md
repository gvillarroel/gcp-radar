---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.397Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Legacy LookML parser"
feature_slug: "legacy-lookml-parser"
latest_feature_date: "2026-03-11"
deprecation_date: "2026-03-11"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-support-access"
  - "https://docs.cloud.google.com/looker/docs/additional-lookml-basics"
keywords:
  - "legacy"
  - "lookml"
  - "parser"
  - "can"
  - "disabled"
  - "customer"
  - "hosted"
  - "looker"
---

# Legacy LookML parser

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The legacy LookML parser can be disabled on customer-hosted Looker 26.4 instances and is fully deprecated in Looker 26.6; deprecated on 2026-03-11.

## Extended Definition

The legacy LookML parser can be disabled on customer-hosted Looker 26.4 instances and is fully deprecated in Looker 26.6; deprecated on 2026-03-11.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-support-access](https://docs.cloud.google.com/looker/docs/admin-panel-general-support-access)
- [https://docs.cloud.google.com/looker/docs/additional-lookml-basics](https://docs.cloud.google.com/looker/docs/additional-lookml-basics)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- This setting is enabled by default for all Looker (original) instances except those that are hosted in the EMEA region and those that are enrolled in Looker's Extended Support Release (ESR) program .
- Force mobile authentication When this setting is enabled, users are required to sign in to the Looker mobile app and the Looker (Legacy) app every time they open the app on their mobile device.
- Mobile Application Access When this setting is enabled, users can log in to their Looker account on the instance using the Looker mobile app and the Looker (Legacy) app .
- Gemini in Looker can be enabled or disabled manually on the Gemini in Looker page in the Platform section of the Admin panel.

### Admin settings - Support Access \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-support-access](https://docs.cloud.google.com/looker/docs/admin-panel-general-support-access)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Changes to Support Access Settings tile lists the most recent events when your support access settings were changed, and includes: Whether support access to your Looker instance was enabled, disabled, or extended The name of the user who changed the support access setting, or an explanation for automatic changes (such as expiration of the access timer) The time and date the setting change occurred The Recent Access tile shows information about which Google employees have recently accessed your Looker instance, including: The name of the Google employee who accessed your Looker instance The date that the analyst accessed your instance The purpose for which the analyst accessed your instance (this will be one of the following values): Professional Services support Technical Support Trial Development Support Legacy support access If you are using a Looker (original) instance and the Tiered Support Access Labs feature has been disabled, the Support Access page in the Admin section of Looker behaves differently in the following ways: The maximum duration for support access is 90 days.
- If you have a customer-hosted Looker deployment or a Looker-hosted deployment with an IP allowlist , you must add Looker's secure gateway IP address to your allowlist to enable Looker support to access your Looker application.
- Enabling support access Note: If you are using a Looker (original) instance and the Tiered Support Access Labs feature has been disabled, see the Legacy support access section for steps to enable support access.
- The see admin permission within each of these roles grants read-only access to many pages in the Admin panel; however, users won't have access to the following Admin panel pages: Support Access Preview Features Legacy Features Export Content Access Actions (if the page displays only the enabled or disabled states of actions) Additionally, some features or settings may be hidden on pages that support users do have access to.

### Common LookML patterns \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/additional-lookml-basics](https://docs.cloud.google.com/looker/docs/additional-lookml-basics)
- Source ID: `site-docs-reference-required-4`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- The following code creates a set customers.detail and points both counts to the same set of fields. view: customers { set: detail { fields: [id, name, city] # creates named set customers.detail } measure: count { type: count drill fields: [detail ] # show fields in the set "customers.detail" } measure: in california count { type: count filters: [state: "California"] drill fields: [detail ] # show fields in the set "customers.detail" } } LookML sets are powerful in the following ways: Redeclaration of sets is additive.
- If the user didn't filter on any of those fields, Looker will automatically add a filter of 1 day on orders.created time . filters: [orders.created time: "1 day"] unless: [created date, shipped time, shipped date, orders.id, customer.name] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This page describes the following common patterns in LookML: Labeling fields (and names in the UI) Filtering counts by a dimension Percentages Using sets for drill-down details Filtering result sets Labeling fields (and names in the UI) Looker converts LookML field names into the strings that the UI displays by combining the view name in regular-weight font with the field's short name in bold.
- Home Documentation Data analytics Looker Guides Send feedback Common LookML patterns Stay organized with collections Save and categorize content based on your preferences.

