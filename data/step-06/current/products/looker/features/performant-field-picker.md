---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.530Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Performant Field Picker"
feature_slug: "performant-field-picker"
latest_feature_date: "2024-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/bar-options"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails"
keywords:
  - "performant"
  - "field"
  - "picker"
  - "feature"
  - "generally"
  - "available"
---

# Performant Field Picker

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Performant Field Picker feature is generally available.

## Extended Definition

The Performant Field Picker feature is generally available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/bar-options](https://docs.cloud.google.com/looker/docs/bar-options)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails](https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails)

## Supporting Pages

### Bar chart options \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/bar-options](https://docs.cloud.google.com/looker/docs/bar-options)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- When Show Full Field Name is turned off, generally only the field name shows; however, measures of type count display only the view name instead.
- You can also use the following calculations, embedded in double curly brackets {{ }}, in the Label field: median mean max min deviation (for population standard deviation) variance (for population variance) For example, enter "Average: \{{mean}}" to show something like Average: 123.4 .
- For Looker developers: The formatting used in the Value Format field is the same as formatting that is used with the value format LookML parameter , except that the value format parameter requires the formatting string to be enclosed in double quotes.
- To change a selected color, or edit all colors at once, input hex strings , such as #2ca6cd , or CSS color names , such as mediumblue , into the color value box at the bottom of the picker.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Feature Configuration The following feature configuration settings are available for Looker instances.
- See more about how this setting and a user's permissions affect their ability to deliver Looker content and alert notifications in the Permissions overview section on this page. looker internal email domain allowlist user attribute In addition to the email domains that are included in the global Email Domain Allowlist for Scheduled Content field, you can also specify email domains on a per-group level using the looker internal email domain allowlist user attribute .
- For example: ...&user attributes={"email":"joe@domain.com"} If you define the email user attribute in the embed URL, Looker will allow an embed user who has only the schedule look emails permission to email Looker content to their own email address, even if their email domain isn't in the Email Domain Allowlist for Scheduled Content field, or if the Email Domain Allowlist for Scheduled Content field is blank.
- Looker Support requires permission from a technical contact to do any of the following: Cause downtime for the instance, which could be due to a non-scheduled version update, performance changes to your Looker server, or other reasons Change something about your Looker license, possibly to enable new features for you.

### Content Guardrails \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails](https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Maximum query tiles Note: These options are available only when the Dashboard Tile Limits preview feature is enabled.
- Visualization limits Note: This feature is available only when the Increased Row Limit preview feature is enabled.
- The Content guardrails page has the following options: Limit merged results query tiles Reduce loading time for custom visualizations Limit dashboard refreshing Limit dashboard tabs Limit query tiles on tabs and on dashboards Limit rows in a custom visualization For more information and recommendations about building performant dashboards, see Considerations when building performant Looker dashboards .
- If a custom visualization's JavaScript code is written with the assumption that data is already available when the iframe environment is initialized, pre-rendering the iframe before data load can lead to errors or unexpected behavior.

