---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.440Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Looker Status Dashboard"
feature_slug: "looker-status-dashboard"
latest_feature_date: "2025-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-alerts"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-datagroups"
keywords:
  - "looker"
  - "status"
  - "dashboard"
  - "provides"
  - "real"
  - "time"
  - "availability"
  - "disruption"
---

# Looker Status Dashboard

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Looker Status Dashboard provides real-time service availability and disruption updates for Looker-hosted instances.

## Extended Definition

The Looker Status Dashboard provides real-time service availability and disruption updates for Looker-hosted instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-alerts](https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-alerts)
- [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)
- [https://docs.cloud.google.com/looker/docs/admin-panel-database-datagroups](https://docs.cloud.google.com/looker/docs/admin-panel-database-datagroups)

## Supporting Pages

### Admin settings - Alerts \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-alerts](https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-alerts)
- Source ID: `site-docs-reference-required-4`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Source Time The timestamp of the database row from which the alert query checked for the conditional value Any timestamp in the format DD/MM HH:MM Example: 05/25 16:01 Condition Met A Boolean that indicates whether or not the alert conditions were met Yes (conditions were met) No (conditions were not met) Trigger The conditional value that would trigger the alert if met or exceeded Any numerical value Observed The observed value that met or exceeded the alert conditions and triggered the alert Any numerical value Status The status of the alert query Complete Running Not Started Viewing alert synchronization status Both tabs on the Alert Details page show the alert's synchronization status and the name of the dashboard with which the alert is associated: A green encircled check mark indicates that the alert is still synced to its dashboard.
- After the next time the alert query runs, the status will show as Disabled with a tooltip message indicating that the dashboard or dashboard element (tile) has been deleted.
- You can filter alerts by the following attributes: Frequency — The frequency at which the alert is checked for whether conditions have been met or exceeded Minutes — Returns all alerts with a frequency of 15 minutes or 30 minutes Hourly — Returns all alerts with a frequency of Hour , 2 hours , 3 hours , 4 hours , 6 hours , 8 hours , or 12 hours Daily — Returns all alerts with a Daily frequency of any Time Weekly — Returns all alerts with a Weekly frequency of any Day or Time Monthly — Returns all alerts with a Monthly frequency of any Day or Time Condition Met — Indicates whether the alert conditions were met when the alert query was last run Yes — Alert conditions were met or exceeded No — Alert conditions were not met or exceeded Status — Indicates whether the alert is still being checked against its conditions Active — Alert is still being checked against its conditions Disabled — Alert is no longer being checked against its conditions You can impose multiple filters on your results.
- Some alert details display automatically on the Alert Details page and cannot be configured: Information about the alert's history (noted in the Activity tab of the page) The alert visualization The dashboard synchronization status and name of the dashboard with which the alert is associated Other ways to interact with an alert you own include: Click the three-dot menu on the alert visualization, and then click Explore from here to open an Explore that is pre-set with the query for the dashboard tile on which the alert is set.

### "Admin settings - Persistent Derived Tables \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)
- Source ID: `site-docs-reference-required-4`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- A list of all the persisted table rebuilds that have occurred during the dashboard's time period, including the date each rebuild was completed, the number of seconds taken to complete each rebuild, whether rebuilds were incremental builds, the trigger that caused each rebuild, and the number of persisted table builds.
- Action Data Provides more specific detail about an action, including the trigger that's being used, the value of a trigger, the expiration time for a persistent table, the cause of a rebuild, and the text of an error message.
- The Looker Persistent Derived Tables admin page shows the status of the Looker instance's persisted tables (which include both persistent derived tables and aggregate tables .
- You can change the time period that's shown by using the filter bar at the top of the dashboard.

### Admin settings - Datagroups \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-datagroups](https://docs.cloud.google.com/looker/docs/admin-panel-database-datagroups)
- Source ID: `site-docs-reference-required-4`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you have a permission that provides access to only select pages in the Admin panel, such as manage schedules , manage themes , or see admin , but you don't have the Admin role , the page or pages that are described here may not be visible to you in the Admin panel.
- Datagroup information The Datagroups page provides the following information for each datagroup: Column Definition Name The name of the datagroup, which you define in the model file.
- Any scheduled data deliveries of Looks , dashboards , and LookML dashboards that use the datagroup as a trigger will be sent when the triggered datagroup reaches the ready state.
- Home Documentation Data analytics Looker Guides Send feedback Admin settings - Datagroups Stay organized with collections Save and categorize content based on your preferences.

