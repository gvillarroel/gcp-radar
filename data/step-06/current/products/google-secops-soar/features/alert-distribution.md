---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.826Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "Alert Distribution"
feature_slug: "alert-distribution"
latest_feature_date: "2024-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab"
  - "https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview"
  - "https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
keywords:
  - "alert"
  - "distribution"
  - "shows"
  - "case"
  - "information"
  - "under"
  - "the"
  - "name"
---

# Alert Distribution

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

Shows case distribution information under the Alert Distribution name in Entity Explorer.

## Extended Definition

Shows case distribution information under the Alert Distribution name in Entity Explorer.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab)
- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- [https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts](https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)

## Supporting Pages

### "Explore the alert overview tab \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This widget helps you understand the components of alerts within a case.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Explore the alert overview tab Supported in: Google secops SOAR This document serves as a reference for the Alert Overview tab, the central interface for triaging alerts within a case.
- Key value : View and display specific details from various sources; for example, Key-Product Value- [Alert.Product] Entities Graph : View a visual graph and other case entity details.

### Cases overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Each case entry shows key metadata, such as: Case name and unique ID Case timestamp Number of associated alerts Assigned analyst (with avatar) Case priority and stage (optional, depending on view) Analysts can toggle between these views: Default view : Shows case cards with essential information.
- It also shows the assigned analyst (name or role), and includes controls for Chat , Close Case , Refresh , Explore , and the Case Actions menu.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Icon Description Displays actions taken on alerts in a table, including the action name, timestamp, alert name, result, and status ( Completed or Faulted ).

### "Migrate CBN alerts to YARA-L detection rule alerts \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts](https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts)
- Source ID: `site-api-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See the following example. metadata . vendor name = "Microsoft" metadata . product name = "Windows Defender AV" metadata . product event type = "MALWAREPROTECTION STATE MALWARE DETECTED" principal . asset . hostname = "client02.example.local" security result . action = "BLOCK" security result . severity = "MEDIUM" Create a new YARA-L detection engine rule. rule windows defender av monitored events { meta : author = "Chronicle" description = "Migration of CBN alerts to Google SecOps YARA-L detection engine rule alert." // Severity is set at the Outcome level via security result.severity severity = "INFORMATIONAL" priority = "INFORMATIONAL" events : $ windows defender av . metadata . vendor name = "Microsoft" $ windows defender av . metadata . product name = "Windows Defender AV" $ windows defender av . metadata . product event type = "MALWAREPROTECTION STATE MALWARE DETECTED" $ windows defender av . principal . asset . hostname = $ host // optionally tune to only detection on ALLOW, i.e., failure to BLOCK //$windows defender av.security result.action = "ALLOW" // optionally tune on severity of detection //$windows defender av.security result.severity != "LOW" outcome : $ risk score = max ( if ( $ windows defender av . security result . severity = "UNKNOWN SEVERITY" , 0 ) + if ( $ windows defender av . security result . severity = "LOW" , 25 ) + if ( $ windows defender av . security result . severity = "MEDIUM" , 50 ) + if ( $ windows defender av . security result . severity = "HIGH" , 75 ) + if ( $ windows defender av . security result . severity = "CRITICAL" , 100 ) ) $ severity = array distinct ( $ windows defender av . security result . severity ) condition : $ windows defender av } CBN alert appears to use a field that was not parsed into UDM Using the parser extensions option you can quickly address this scenario.
- Use UDM search Using the UDM search option, you can view events with the alert state set in the parsers: security result.alert state = "ALERTING" From the UDM search results, you can explore the following fields to understand which sources are generating CBN alerts in your environment: Metadata > Vendor Name Metadata > Product Name Download default CBN alerts using the Tools API and manually review The previous approach helps you to find alerts that have fired, but does not cover the scenario of alerts that you have not seen before.
- For example, Corelight CBN alert uses the notice field and conditionally alerts only if true: if [ notice ] == "true" { mutate { replace = > { "is significant" = > "true" "is alert" = > "true" } } } Because this value isn't normalized into UDM by default you can use a parser extension Grok as follows to add that value as a UDM field of type Additional : filter { mutate { replace = > { "notice" = > "" } } grok { match = > { "message" = > [ "(?P<message>\{. \})$" ] } on error = > " grok not syslog" overwrite = > [ "message" ] } json { on error = > "not json" source = > "message" array function = > "split columns" } if ! [ not json ] { if [ notice ] != "" { mutate { convert = > { "notice" = > "string" } } mutate { replace = > { "additional notice.key" = > "notice" "additional notice.value.string value" = > "%{notice}" } } mutate { merge = > { "event1.idm.read only udm.additional.fields" = > "additional notice" } } mutate { merge = > { "@output" = > "event1" } } } } } You can then utilize this in a YARA-L detection engine rule as follows, and using the Maps function : events : // Corelight : Weird Log ( $ corelight . metadata . vendor name = "Corelight" and $ corelight . metadata . product name = "Zeek" and // this requires a custom parser extension to extract notice $ corelight . metadata . product event type = "weird" and $ corelight . additional . fields [ "notice" ] = "true" ) You must enable and turn on the authored rules for alerting.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- An alert is a composite detection when the Inputs column shows Detection as a source and the Detection type column displays an Alert label with a number next to it (for example, Alert (3) ).
- Enrich detections with context from raw events This use case involves linking a high-level alert from one system with event logs from another system.
- Reduce alert noise This use case involves managing detections that are too "noisy" or produce too many false positives on their own.

