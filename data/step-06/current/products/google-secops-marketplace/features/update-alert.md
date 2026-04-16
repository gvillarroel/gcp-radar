---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.671Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Update Alert"
feature_slug: "update-alert"
latest_feature_date: "2025-09-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/armis"
  - "https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts"
  - "https://docs.cloud.google.com/chronicle/docs/administration/bulk-close-alerts"
keywords:
  - "update"
  - "alert"
  - "adds"
  - "an"
  - "action"
  - "that"
  - "updates"
---

# Update Alert

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action that updates an alert.

## Extended Definition

Adds an action that updates an alert.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api](https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/armis](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/armis)
- [https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts](https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts)
- [https://docs.cloud.google.com/chronicle/docs/administration/bulk-close-alerts](https://docs.cloud.google.com/chronicle/docs/administration/bulk-close-alerts)

## Supporting Pages

### "Migrate from CrowdStrike Detects API to Alerts API \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api](https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CrowdStrike's deprecation of this API affects the following actions and connectors: Add Comment to Detection Close Detection Update Detection CrowdStrike - Detections Connector The SOAR CrowdStrike integration already supports the Alerts API, which replaces the Detections API.
- Update playbooks to use the Update Alert and Add Alert Comment actions.
- Option 1: Update permissions for your existing CrowdStrike API client (Recommended) Option 2: Create and use a new CrowdStrike API client Option 1: Update permissions for your existing CrowdStrike API client (Recommended) This approach requires configuration changes only in your CrowdStrike Falcon console and has the lowest impact on existing detection rules that reference the CS DETECTS log type.
- By creating a new client with the correct permissions, you can ensure that the connector uses the modern Alerts API.

### "Integrate Armis with Google SecOps \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/armis](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/armis)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If 400 (is success=true): "Alert "{alert id}" already has status "{status}" in Armis. " The action should fail and stop a playbook execution: if fatal error, like wrong credentials, no connection to server, other: "Error executing action "Update Alert Status".
- Action results Script result Script result name Value options Example is success True/False is success:False JSON result { "band" : null , "channel" : null , "dhcpAuthenticationDuration" : null , "duration" : 12339 , "endTimestamp" : "2021-03-18T20:19:31.562873+00:00" , "id" : 33355 , "inboundTraffic" : 12412512 , "outboundTraffic" : 19626489 , "protocol" : "Bluetooth" , "radiusAuthenticationDuration" : null , "risk" : "Medium" , "rssi" : null , "sensor" : { "name" : "EXAMPLE" , "type" : "Switch" }, "site" : { "location" : "Location" , "name" : "Location HQ" }, "snr" : null , "sourceId" : 2097 , "startTimestamp" : "2021-03-18T16:53:52.562873+00:00" , "targetId" : 217 , "title" : "Connection between Example and user's iPhone" , "totalAssociationDuration" : null , "traffic" : 32039001 , "wlanAssociationDuration" : null } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: if 200 and data is available (is success = true): "Successfully returned connections related to the alert {alertId} based on the provided criteria in Armis." If 200 and no data is available (is success=false): "No connections were found related to the alert {alertId} based on the provided criteria in Armis." The action should fail and stop a playbook execution: if fatal error, like wrong credentials, no connection to server, other: "Error executing action "List Alert Connections".
- Action results Script result Script result name Value options Example is success True/False is success:False Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: if 200 (is success = true): "Successfully updated status of the alert "{alert id}" to "{status}" in Armis.".
- To streamline and improve the mapping process for the connector, the default value alert type resolves to a fallback value that is referenced from the code.

### "Migrate CBN alerts to YARA-L detection rule alerts \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts](https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts)
- Source ID: `site-docs-root`
- Final score: 152
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
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Command: python -m detect.v1alpha.bulk update alerts \ --project id=$PROJECT ID \ --project instance=$PROJECT INSTANCE \ --credentials file=$CREDENTIALS FILE \ --alert ids file="$(pwd)/ip in abuseipdb out.txt" Verify Closure (Optional) To verify the alerts were closed successfully, you can check the details of a single alert using the get alert.py module.
- Default Behavior: The bulk update alerts.py script uses a hard-coded default feedback payload: Status: CLOSED Reason: REASON MAINTENANCE Comment: automated cleanup .
- Configure Feedback ("close" Action) When you close an alert, the "feedback" status is set to CLOSED .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

