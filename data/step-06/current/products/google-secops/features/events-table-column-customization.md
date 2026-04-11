---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.928Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Events table column customization"
feature_slug: "events-table-column-customization"
latest_feature_date: "2025-09-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
keywords:
  - "events"
  - "table"
  - "column"
  - "customization"
  - "search"
  - "that"
  - "lets"
  - "you"
---

# Events table column customization

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

A Search feature that lets you choose which columns appear in the Events table and dashboard widget tables.

## Extended Definition

A Search feature that lets you choose which columns appear in the Events table and dashboard widget tables.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- Search for events and alerts Supported in: Google secops SIEM The search function lets you find Unified Data Model (UDM) events and alerts in your Google Security Operations instance using YARA-L 2.0 syntax .

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect ForgeRock OpenIDM logs Collect Forseti Open Source logs Collect Fortinet FortiClient logs Collect Fortinet FortiDDoS logs Collect Fortinet FortiEDR logs Collect Fortinet FortiManager logs Collect Fortinet Switch logs Collect Fortra Powertech SIEM Agent logs Collect Google App Engine logs Collect Google Cloud DNS Threat Detector log s Collect Google Cloud Monitoring alerting activity logs Collect Google Cloud Network Connectivity Center logs Collect Google Cloud Secure Web Proxy logs Collect Gmail logs Collect H3C Comware Platform Switch logs Collect HackerOne logs Collect Hillstone Firewall logs Collect Hitachi Content Platform logs Collect HYPR MFA logs Collect IBM Guardium logs February 03, 2026 Feature Share custom column sets Google SecOps now lets you share custom sets of columns in the Events table for consistent analysis across teams.
- January 16, 2024 Feature UDM Search for entity investigation UDM Search now includes a feature that lets you investigate entities (for example, an IP address, user, or asset) in addition to the events and alerts that match the search query terms.
- September 30, 2025 Feature Customize Events table columns in Search You can now specify which columns appear in the Events table on the Search page and in tables within your dashboard widgets .
- November 07, 2025 Change MITRE ATT&CK coverage dashboard is now available The new MITRE ATT&CK coverage dashboard lets you measure your security posture against the MITRE ATT&CK framework, helping you: Assess threat coverage Identify gaps Prioritize security efforts October 31, 2025 Feature Search usability enhancements Google SecOps has introduced the following capabilities to improve usability, performance, and customization in search results: Improved performance for large result sets : For broad queries, Google SecOps now provides paginated search results.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect ForgeRock OpenIDM logs Collect Forseti Open Source logs Collect Fortinet FortiClient logs Collect Fortinet FortiDDoS logs Collect Fortinet FortiEDR logs Collect Fortinet FortiManager logs Collect Fortinet Switch logs Collect Fortra Powertech SIEM Agent logs Collect Google App Engine logs Collect Google Cloud DNS Threat Detector log s Collect Google Cloud Monitoring alerting activity logs Collect Google Cloud Network Connectivity Center logs Collect Google Cloud Secure Web Proxy logs Collect Gmail logs Collect H3C Comware Platform Switch logs Collect HackerOne logs Collect Hillstone Firewall logs Collect Hitachi Content Platform logs Collect HYPR MFA logs Collect IBM Guardium logs February 03, 2026 Feature Share custom column sets Google SecOps now lets you share custom sets of columns in the Events table for consistent analysis across teams.
- January 16, 2024 Feature UDM Search for entity investigation UDM Search now includes a feature that lets you investigate entities (for example, an IP address, user, or asset) in addition to the events and alerts that match the search query terms.
- September 30, 2025 Feature Customize Events table columns in Search You can now specify which columns appear in the Events table on the Search page and in tables within your dashboard widgets .
- November 07, 2025 Change MITRE ATT&CK coverage dashboard is now available The new MITRE ATT&CK coverage dashboard lets you measure your security posture against the MITRE ATT&CK framework, helping you: Assess threat coverage Identify gaps Prioritize security efforts October 31, 2025 Feature Search usability enhancements Google SecOps has introduced the following capabilities to improve usability, performance, and customization in search results: Improved performance for large result sets : For broad queries, Google SecOps now provides paginated search results.

