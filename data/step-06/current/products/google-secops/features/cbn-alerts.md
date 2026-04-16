---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.828Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "CBN alerts"
feature_slug: "cbn-alerts"
latest_feature_date: "2025-01-23"
deprecation_date: "2025-01-23"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
  - "https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp"
keywords:
  - "cbn"
  - "alerts"
  - "will"
  - "no"
  - "longer"
  - "available"
  - "should"
  - "migrated"
---

# CBN alerts

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

CBN alerts will no longer be available and should be migrated to the YARA-L detection engine; deprecated on 2025-01-23.

## Extended Definition

CBN alerts will no longer be available and should be migrated to the YARA-L detection engine; deprecated on 2025-01-23.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- [https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts](https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)

## Supporting Pages

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Google Security Operations CBN alerts July 22, 2024 July 22, 2025 The Enterprise Insights page and the CBN alerts will no longer be available after July 2025.
- This system will no longer be updated, and no alerts will be sent from this system after September 01, 2024.
- NETSKOPE ALERT log type October 15, 2025 November 30, 2025 As of October 15, 2025, the Netskope Alerts v1 connector (for the NETSKOPE ALERT log type) has been deprecated and will be removed on November 30, 2025.
- Google SecOps ingestion stats table in BigQuery April 18, 2024 May 15, 2024 The ingestion stats table in BigQuery has been deprecated and will no longer be updated after May 15, 2024.

### "Migrate CBN alerts to YARA-L detection rule alerts \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts](https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts)
- Source ID: `site-api-reference`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrate CBN alerts to the YARA-L detection engine To migrate CBN alerts, you can ensure that your prior CBN alerts are available as detection rule alerts using the following options.
- See the following example. metadata . vendor name = "Microsoft" metadata . product name = "Windows Defender AV" metadata . product event type = "MALWAREPROTECTION STATE MALWARE DETECTED" principal . asset . hostname = "client02.example.local" security result . action = "BLOCK" security result . severity = "MEDIUM" Create a new YARA-L detection engine rule. rule windows defender av monitored events { meta : author = "Chronicle" description = "Migration of CBN alerts to Google SecOps YARA-L detection engine rule alert." // Severity is set at the Outcome level via security result.severity severity = "INFORMATIONAL" priority = "INFORMATIONAL" events : $ windows defender av . metadata . vendor name = "Microsoft" $ windows defender av . metadata . product name = "Windows Defender AV" $ windows defender av . metadata . product event type = "MALWAREPROTECTION STATE MALWARE DETECTED" $ windows defender av . principal . asset . hostname = $ host // optionally tune to only detection on ALLOW, i.e., failure to BLOCK //$windows defender av.security result.action = "ALLOW" // optionally tune on severity of detection //$windows defender av.security result.severity != "LOW" outcome : $ risk score = max ( if ( $ windows defender av . security result . severity = "UNKNOWN SEVERITY" , 0 ) + if ( $ windows defender av . security result . severity = "LOW" , 25 ) + if ( $ windows defender av . security result . severity = "MEDIUM" , 50 ) + if ( $ windows defender av . security result . severity = "HIGH" , 75 ) + if ( $ windows defender av . security result . severity = "CRITICAL" , 100 ) ) $ severity = array distinct ( $ windows defender av . security result . severity ) condition : $ windows defender av } CBN alert appears to use a field that was not parsed into UDM Using the parser extensions option you can quickly address this scenario.
- For example, Corelight CBN alert uses the notice field and conditionally alerts only if true: if [ notice ] == "true" { mutate { replace = > { "is significant" = > "true" "is alert" = > "true" } } } Because this value isn't normalized into UDM by default you can use a parser extension Grok as follows to add that value as a UDM field of type Additional : filter { mutate { replace = > { "notice" = > "" } } grok { match = > { "message" = > [ "(?P<message>\{. \})$" ] } on error = > " grok not syslog" overwrite = > [ "message" ] } json { on error = > "not json" source = > "message" array function = > "split columns" } if ! [ not json ] { if [ notice ] != "" { mutate { convert = > { "notice" = > "string" } } mutate { replace = > { "additional notice.key" = > "notice" "additional notice.value.string value" = > "%{notice}" } } mutate { merge = > { "event1.idm.read only udm.additional.fields" = > "additional notice" } } mutate { merge = > { "@output" = > "event1" } } } } } You can then utilize this in a YARA-L detection engine rule as follows, and using the Maps function : events : // Corelight : Weird Log ( $ corelight . metadata . vendor name = "Corelight" and $ corelight . metadata . product name = "Zeek" and // this requires a custom parser extension to extract notice $ corelight . metadata . product event type = "weird" and $ corelight . additional . fields [ "notice" ] = "true" ) You must enable and turn on the authored rules for alerting.
- Use UDM search Using the UDM search option, you can view events with the alert state set in the parsers: security result.alert state = "ALERTING" From the UDM search results, you can explore the following fields to understand which sources are generating CBN alerts in your environment: Metadata > Vendor Name Metadata > Product Name Download default CBN alerts using the Tools API and manually review The previous approach helps you to find alerts that have fired, but does not cover the scenario of alerts that you have not seen before.

### "SOAR migration overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- Source ID: `site-api-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- The legacy SOAR API and API Keys will be available till September 30, 2026 after which they will no longer function.
- Existing Remote Agents will be available until September 30, 2026, after which they will no longer function.
- Following the downtime, the platform will be accessible, and SOAR services will resume processing any alerts generated or ingested during the downtime.
- Migrate SOAR Audit Logs SOAR logs will become available in Google Cloud once you complete the permissions migration to IAM.

