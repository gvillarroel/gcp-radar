---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.737Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "ENTITY_RISK_CHANGE UDM event type"
feature_slug: "entity-risk-change-udm-event-type"
latest_feature_date: "2025-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting"
keywords:
  - "entity"
  - "risk"
  - "change"
  - "udm"
  - "event"
  - "type"
  - "enables"
  - "yara"
---

# ENTITY_RISK_CHANGE UDM event type

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

A new UDM event type enables YARA-L rules to trigger on changes in entity risk score without ingested events.

## Extended Definition

A new UDM event type enables YARA-L rules to trigger on changes in entity risk score without ingested events.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting](https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting)

## Supporting Pages

### Risk-based alerting with entity-only rules | Google Security Operations | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting](https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting)
- Source ID: `feature-recovery-http`
- Final score: 318
- Re-rank relevance: N/A

Evidence snippets:
- Risk-based alerting with entity-only rules Supported in: Google secops SIEM With the ENTITY_RISK_CHANGE Unified Data Model (UDM) event type, you can write YARA-L detection rules that trigger independently of ingested events.
- Detect when an entity's risk score exceeds 100 The following example rule uses the ENTITY_RISK_CHANGE event type to detect when an entity's risk score exceeds 100: rule entity_only_risk_change { meta: author = "test@google.com" description = "Alert on entities crossing a threshold" events: // Check only Entity Risk Change events $e1.metadata.event_type = "ENTITY_RISK_CHANGE" // Check for a Risk Score change with 100 as the threshold $e1.extensions.entity_risk.risk_score >= 100 outcome: // Reset risk score to prevent feedback $risk_score = 0 condition: $e1 } Filter entities with risk scores over 0 The following example rule uses the ENTITY_RISK_CHANGE event type to track when the risk scores of entities exceed 0: rule entity_only_risk { meta: author = "test@google.com" description = "Track changing risk per hostname" events: // Filter for Risk Change events with risk scores greater than 0 $e1.metadata.event_type = "ENTITY_RISK_CHANGE" $e1.extensions.entity_risk.risk_score > 0 // Deduplication $e1.extensions.entity_risk.risk_window_has_new_detections = true // Aggregation data $hostname = $e1.about.hostname $risk_score = $e1.extensions.entity_risk.risk_score match: $hostname over 5m outcome: $calculated_risk_score = sum($risk_score) $single_risk_score = max($risk_score) condition: $e1 } Need more help?
- Be aware that raw log search doesn't support entity search. metadata.event_type = "ENTITY_RISK_CHANGE" Note: Event ingestion doesn't count against your ingestion rate limit and doesn't have any effect on billing.
- In Search, you can display events tagged with ENTITY_RISK_CHANGE using the following YARA-L syntax.

### "Create an Azure Event Hub feed \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed](https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, change Endpoint=<ENDPOINT>;SharedAccessKeyName=<KEY NAME>;SharedAccessKey=<KEY>;EntityPath=<EVENT HUB NAME> to Endpoint=<ENDPOINT>;SharedAccessKeyName=<KEY NAME>;SharedAccessKey=<KEY> .
- To keep things organized, use event hub names that match the log type.
- In the Source type list, select Microsoft Azure Event Hub .
- Retrieve the information from the event hub that you created earlier in the Azure portal to fill in the following fields: Event hub name : the event hub name Event hub consumer group : the consumer group associated with your event hub Caution: Don't create subscribers or retrieve data programmatically through the Data Explorer tab in the Azure portal for the consumer group.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.
- It then matches those events against the hostnames column and the ip column in the badApps data table. events: $e.metadata.event type = "NETWORK CONNECTION" $e.security result.action = "ALLOW" $e.target.asset.asset id = $assetid // Event hostname matches at least one value in table column hostname. $e.target.hostname in %badApps.hostname // Event IP matches at least one value in table column ip. $e.target.ip in %badApps.ip For more information, see Use data tables .

