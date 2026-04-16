---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.557Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "UDM field mapping removal via parser extensions"
feature_slug: "udm-field-mapping-removal-via-parser-extensions"
latest_feature_date: "2025-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections"
keywords:
  - "udm"
  - "field"
  - "mapping"
  - "removal"
  - "via"
  - "parser"
  - "extensions"
  - "can"
---

# UDM field mapping removal via parser extensions

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Parser extensions can now remove existing UDM field mappings in Google SecOps.

## Extended Definition

Parser extensions can now remove existing UDM field mappings in Google SecOps.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections)

## Supporting Pages

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- See Exporting Security Command Center findings for more information about how Google SecOps default parsers map the data fields.
- AWS - Organization : Detects AWS activity associated with your organization , including the addition or removal of accounts, and unexpected events related to region usage.
- Google SecOps provides default parsers that parse and normalize raw logs from Google Cloud services to create UDM records with data required by these rule sets.
- Azure - Organization : Detects activity associated with your organization, including the addition or removal of subscriptions and accounts.

### "Applied Threat Intelligence curated detections overview \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections)
- Source ID: `site-api-reference`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- If you replace a default parser with a custom parser, and you change the UDM field where a domain, IP address, file hash, or URL is stored, it may impact the behavior of these rule sets.
- These fields, combined with prioritization features from Mandiant Threat Intelligence, help determine priority levels, such as Active breach, High, or Medium: network.direction security result.[]action event count (active breach IP address only) For IP address indicators, the network.direction is required.
- If the network.direction field is not populated in the UDM event, then Applied Threat Intelligence checks the principal.ip and target.ip fields against RFC 1918 internal IP address ranges to determine the network direction.
- The Inbound IP Address Authentication rule set uses three UDM fields that could be used for tuning alerts from this rule set: principal.ip principal.asset.ip src.ip Need more help?

### "View alerts and IOC matches \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- Source ID: `site-api-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- The following table details which specific UDM fields are used for automatic IOC matching based on your package: Enterprise package Enterprise Plus package about.file network.dns.answers network.dns.questions network.dns.questions principal.administrative domain principal.asset principal.ip principal.process.file principal.process.file principal.process.parent process.file principal.process.parent process.file security result.about.file security result.about.file src.file src.file src.ip target.asset.ip target.domain.name target.file target.file target.hostname target.hostname target.ip target.ip target.process.file target.process.file target.process.parent process.file Understanding which UDM fields are used helps ensure your data parsers correctly map raw log fields to the appropriate UDM fields for effective IOC matching.
- Note: If you are getting IOC mappings but there are no events, then there may be a mistake in the field mapping or no rules.
- To specify the date and time range based on events, click the Event Time tab, select the date on the calendar, and then select one of the following options: Exact Time : click the Event Time field and select the specific time the events occurred. +/- 1 Minute +/- 3 Minutes +/- 5 Minutes +/- 10 Minutes +/- 15 Minutes +/- 1 Hour +/- 2 Hours +/- 6 Hours +/- 12 Hours +/- 1 Day +/- 3 Days +/- 1 Week Sort alerts and IOC matches You can sort the alerts and IOC matches that are displayed in ascending or descending order.
- To specify the date and time range using pre-set options, click the Range tab and select one of the following options: Today Last Hour Last 12 Hours Last Day Last Week Last 2 Weeks Last Month Last 2 Months Custom : select the start and end date on the calendar, and then click the Start time and End time fields to select the time.

