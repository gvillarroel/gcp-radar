---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.554Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Log type distribution charts"
feature_slug: "log-type-distribution-charts"
latest_feature_date: "2025-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs"
keywords:
  - "log"
  - "type"
  - "distribution"
  - "charts"
  - "have"
  - "been"
  - "improved"
  - "readability"
---

# Log type distribution charts

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Log type distribution charts have been improved for readability and usability.

## Extended Definition

Log type distribution charts have been improved for readability and usability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- Understand suggestion ranking The editor organizes suggestions into three distinct categories to help you find fields quickly: Recently used fields : The top seven suggestions are based on fields you have used recently that match your typed field.
- Grouped fields can also be used in combination with regular UDM fields as shown in the following example: ip = "5.6.7.8" AND metadata.event type = "NETWORK CONNECTION" Grouped fields have a separate section in Aggregations .
- Note: The Events table only displays the 10,000 latest events based on any filters that have been applied.

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Supported devices and required log types for Office 365 These rule sets have been tested and are supported with the following data sources, listed by product name and Google SecOps ingestion label : Curated detection for Okta rule sets Okta rule sets in this category help detect threats within Okta environments by analyzing event and context data.
- Supported devices and required log types for Okta These rule sets have been tested and are supported with the following data sources, listed by product name and Google SecOps ingestion label : Tune alerts returned by rule sets You can reduce the number of detections a rule or rule set generates using rule exclusions .
- Supported devices and required log types for Azure These rule sets have been tested and are supported with the following data sources, listed by product name and Google SecOps ingestion label .
- Supported devices and log types for AWS These rule sets have been tested and are supported with the following Google SecOps data sources, listed by product name and ingestion label.

### "View alerts and IOC matches \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- Source ID: `site-api-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Example of filtering for critical IOCs If you're looking for IOCs that have been identified as critically severe, select Severity in the left column, Show only in the middle column, and Critical in the right column.
- View IOC matches The IOC Matches tab displays the IOCs that have been detected in your network and matched against a list of known suspicious IOCs in intelligent threat feeds.
- View alerts The Alerts tab displays a list of the alerts that have been detected in your enterprise within the specified date and time range.
- Use the IOC Matches tab to view the IOCs that have been flagged as suspicious and have been seen in your enterprise.

