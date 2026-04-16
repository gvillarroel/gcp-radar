---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.824Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "User Preferences"
feature_slug: "user-preferences"
latest_feature_date: "2025-02-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp"
  - "https://docs.cloud.google.com/chronicle/docs/administration/rbac"
keywords:
  - "user"
  - "preferences"
  - "dialog"
  - "centralizes"
  - "time"
  - "zone"
  - "date"
  - "notification"
---

# User Preferences

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

The User Preferences dialog centralizes time zone, date and time, notification, and accessibility settings.

## Extended Definition

The User Preferences dialog centralizes time zone, date and time, notification, and accessibility settings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- The User Preferences dialog appears.
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.

### "Role-Based Access Control (RBAC) User Guide \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Update the time zone You can update the time zone as follows: Locate the Time Settings section on your profile and click Edit .
- Note: Some user interface elements display only UTC time, such as the time values on the prevalence graph in Domain view, which are labeled as UTC .
- Similarly, downloaded results are always displayed in UTC, regardless of the configured time zone.
- From this dialog you can complete the following tasks: Assign a new user or users to a role.

### "SOAR migration overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- Source ID: `site-api-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migration stage 1 for Google SecOps unified customers Check your in-product notification for your Stage 1 migration date and the included Google Form to confirm the time slot.
- Provide the Google Cloud project ID in the Google form in the in-product notification and confirm the migration date and time slot before you submit the form.
- Landing page The landing page will move from the Permissions page to the User Preferences menu, accessible from your avatar.
- Each time a user signs in to the platform, they are automatically added to Settings > Organization > User Management page.

