---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.674Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Pinned Quick Filter fields"
feature_slug: "pinned-quick-filter-fields"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs"
keywords:
  - "pinned"
  - "quick"
  - "filter"
  - "fields"
  - "can"
  - "so"
  - "they"
  - "stay"
---

# Pinned Quick Filter fields

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Quick Filter fields can be pinned so they stay at the top of the favorites list.

## Extended Definition

Quick Filter fields can be pinned so they stay at the top of the favorites list.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Understand suggestion ranking The editor organizes suggestions into three distinct categories to help you find fields quickly: Recently used fields : The top seven suggestions are based on fields you have used recently that match your typed field.
- Perform the following actions: Filters : Apply the following filters to the Selected list: Show unenriched fields Show enriched fields Show additional fields Show extracted fields Add to Columns : Add the UDM field as a column.
- In the Events columns tab, select fields from the following collapsible sections: Quick fields : Use quick fields to quickly add the most relevant UDM field for that data type.
- Fields remain in the Selected list, and their hierarchy in the Pinned list is shown in dot-delimited notation with the udm prefix (for example, udm.metadata.event type ).

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-1`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Composite detections Supported in: Google secops SIEM This document introduces composite detections and how they can enhance threat detection workflows by correlating outputs from multiple rules.
- The following concepts define the building blocks of composite rules and clarify how they function within detection workflows: Composite rules : use detections or alerts (or both) as input.
- This allows a specific team (for example, the Data Loss Prevention (DLP) administrators) to monitor only the risks that are relevant, filtering out noise from other security domains.
- Define the join conditions : Determine the common piece of information that links the detections from your input rules, such as rule labels, variables, or detection fields.

### "View alerts and IOC matches \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- Source ID: `site-api-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Value : select the check boxes for the fields you want to match or filter out.
- The following table details which specific UDM fields are used for automatic IOC matching based on your package: Enterprise package Enterprise Plus package about.file network.dns.answers network.dns.questions network.dns.questions principal.administrative domain principal.asset principal.ip principal.process.file principal.process.file principal.process.parent process.file principal.process.parent process.file security result.about.file security result.about.file src.file src.file src.ip target.asset.ip target.domain.name target.file target.file target.hostname target.hostname target.ip target.ip target.process.file target.process.file target.process.parent process.file Understanding which UDM fields are used helps ensure your data parsers correctly map raw log fields to the appropriate UDM fields for effective IOC matching.
- To specify the date and time range using pre-set options, click the Range tab and select one of the following options: Today Last Hour Last 12 Hours Last Day Last Week Last 2 Weeks Last Month Last 2 Months Custom : select the start and end date on the calendar, and then click the Start time and End time fields to select the time.
- Example of filtering for Applied Threat Intelligence IOCs If you want to view only Applied Threat Intelligence IOCs, select Sources in the left column, Show only in the middle column, and Mandiant in the right column.

