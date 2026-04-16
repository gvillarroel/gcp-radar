---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.889Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Large alert trimming"
feature_slug: "large-alert-trimming"
latest_feature_date: "2024-01-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/bulk-close-alerts"
  - "https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts"
keywords:
  - "large"
  - "alert"
  - "trimming"
  - "alerts"
  - "more"
  - "than"
  - "500"
  - "entities"
---

# Large alert trimming

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Alerts with more than 500 entities are ingested with key entities retained and the excess entities removed to prevent performance issues.

## Extended Definition

Alerts with more than 500 entities are ingested with key entities retained and the excess entities removed to prevent performance issues.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/administration/bulk-close-alerts](https://docs.cloud.google.com/chronicle/docs/administration/bulk-close-alerts)
- [https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts](https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- The Event Viewer includes these tabs: Event Fields Raw Log Alerts Entities Event Fields tab Note: This feature is covered by Pre-GA Offerings Terms of the Google Security Operations Service Specific Terms.
- Events that are associated with one or more alerts are marked with an Alert chip in the Event Timeline .
- However, there may be many more matching events and alerts that are not displayed.
- When the 1,000 limit is reached, no more alerts are retrieved.

### "Migrate CBN alerts to YARA-L detection rule alerts \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts](https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts)
- Source ID: `site-api-reference`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See the following example. metadata . vendor name = "Microsoft" metadata . product name = "Windows Defender AV" metadata . product event type = "MALWAREPROTECTION STATE MALWARE DETECTED" principal . asset . hostname = "client02.example.local" security result . action = "BLOCK" security result . severity = "MEDIUM" Create a new YARA-L detection engine rule. rule windows defender av monitored events { meta : author = "Chronicle" description = "Migration of CBN alerts to Google SecOps YARA-L detection engine rule alert." // Severity is set at the Outcome level via security result.severity severity = "INFORMATIONAL" priority = "INFORMATIONAL" events : $ windows defender av . metadata . vendor name = "Microsoft" $ windows defender av . metadata . product name = "Windows Defender AV" $ windows defender av . metadata . product event type = "MALWAREPROTECTION STATE MALWARE DETECTED" $ windows defender av . principal . asset . hostname = $ host // optionally tune to only detection on ALLOW, i.e., failure to BLOCK //$windows defender av.security result.action = "ALLOW" // optionally tune on severity of detection //$windows defender av.security result.severity != "LOW" outcome : $ risk score = max ( if ( $ windows defender av . security result . severity = "UNKNOWN SEVERITY" , 0 ) + if ( $ windows defender av . security result . severity = "LOW" , 25 ) + if ( $ windows defender av . security result . severity = "MEDIUM" , 50 ) + if ( $ windows defender av . security result . severity = "HIGH" , 75 ) + if ( $ windows defender av . security result . severity = "CRITICAL" , 100 ) ) $ severity = array distinct ( $ windows defender av . security result . severity ) condition : $ windows defender av } CBN alert appears to use a field that was not parsed into UDM Using the parser extensions option you can quickly address this scenario.
- For example, Corelight CBN alert uses the notice field and conditionally alerts only if true: if [ notice ] == "true" { mutate { replace = > { "is significant" = > "true" "is alert" = > "true" } } } Because this value isn't normalized into UDM by default you can use a parser extension Grok as follows to add that value as a UDM field of type Additional : filter { mutate { replace = > { "notice" = > "" } } grok { match = > { "message" = > [ "(?P<message>\{. \})$" ] } on error = > " grok not syslog" overwrite = > [ "message" ] } json { on error = > "not json" source = > "message" array function = > "split columns" } if ! [ not json ] { if [ notice ] != "" { mutate { convert = > { "notice" = > "string" } } mutate { replace = > { "additional notice.key" = > "notice" "additional notice.value.string value" = > "%{notice}" } } mutate { merge = > { "event1.idm.read only udm.additional.fields" = > "additional notice" } } mutate { merge = > { "@output" = > "event1" } } } } } You can then utilize this in a YARA-L detection engine rule as follows, and using the Maps function : events : // Corelight : Weird Log ( $ corelight . metadata . vendor name = "Corelight" and $ corelight . metadata . product name = "Zeek" and // this requires a custom parser extension to extract notice $ corelight . metadata . product event type = "weird" and $ corelight . additional . fields [ "notice" ] = "true" ) You must enable and turn on the authored rules for alerting.
- Use UDM search Using the UDM search option, you can view events with the alert state set in the parsers: security result.alert state = "ALERTING" From the UDM search results, you can explore the following fields to understand which sources are generating CBN alerts in your environment: Metadata > Vendor Name Metadata > Product Name Download default CBN alerts using the Tools API and manually review The previous approach helps you to find alerts that have fired, but does not cover the scenario of alerts that you have not seen before.
- Migrate Windows Defender antivirus alerts that were previously displayed in Enterprise Insights as CBN alerts The following example shows how you can migrate Windows Defender antivirus alerts that were previously displayed in Enterprise Insights as CBN alerts.

### "Close alerts in bulk using the API \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/bulk-close-alerts](https://docs.cloud.google.com/chronicle/docs/administration/bulk-close-alerts)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Close alerts in bulk using the API Supported in: Google secops SIEM This document describes how to programmatically close a large number of alerts using the Google Security Operations REST API.
- Command: python -m detect.v1alpha.bulk update alerts \ --project id=$PROJECT ID \ --project instance=$PROJECT INSTANCE \ --credentials file=$CREDENTIALS FILE \ --alert ids file="$(pwd)/ip in abuseipdb out.txt" Verify Closure (Optional) To verify the alerts were closed successfully, you can check the details of a single alert using the get alert.py module.
- Command: python -m detect.v1alpha.list detections \ --project id=$PROJECT ID \ --project instance=$PROJECT INSTANCE \ --credentials file=$CREDENTIALS FILE \ --rule id=$RULE ID \ ip in abuseipdb out.json Note: This script supports pagination if you have more than 1,000 results.
- Default Behavior: The bulk update alerts.py script uses a hard-coded default feedback payload: Status: CLOSED Reason: REASON MAINTENANCE Comment: automated cleanup .

