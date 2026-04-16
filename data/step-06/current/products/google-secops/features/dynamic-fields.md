---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.753Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Dynamic Fields"
feature_slug: "dynamic-fields"
latest_feature_date: "2025-09-07"
deprecation_date: "2025-09-07"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight"
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
keywords:
  - "dynamic"
  - "fields"
  - "was"
  - "legacy"
  - "feature"
  - "replaced"
  - "custom"
  - "close"
---

# Dynamic Fields

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Dynamic Fields was the legacy feature replaced by custom fields in the Close Case dialog; deprecated on 2025-09-07.

## Extended Definition

Dynamic Fields was the legacy feature replaced by custom fields in the Close Case dialog; deprecated on 2025-09-07.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight)
- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)

## Supporting Pages

### "Integrate ArcSight with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action results Script result Script result name Value options Example success True or False success:False JSON result [ { "Target User Name" : "user" , "Attacker Address" : "192.0.2.1" , "External ID" : "127" , "Name" : "A Kerberos authentication ticket (TGT) was requested." , "Target Address" : "192.0.2.1" },{ "Target User Name" : "user" , "Attacker Address" : "192.0.2.1" , "External ID" : "127" , "Name" : "A Kerberos authentication ticket (TGT) was requested." , "Target Address" : "192.0.2.1" } ] Get Report Description Get a report with dynamic fields.
- Example: CustomDeviceString2 Alert Custom Fields Names String N/A No Pull custom field values from ArcSight into the alert, such as baseEventCount,agent address,device assetId.
- Field 10 String N/A No The dynamic fields for the query to generate the report.
- Field 2 String N/A No The dynamic fields for the query to generate the report.

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Other customers can use their own BigQuery instance to export telemetry data, a feature currently in preview.
- For more information see Overview of the YARA-L 2.0 language . labels fields for UDM nouns November 29, 2023 November 29, 2024 On or after November 29, 2023, the following Google Security Operations labels fields for UDM nouns are deprecated: about.labels , intermediary.labels , observer.labels , principal.labels , src.labels , security result.about.labels , and target.labels .
- If any of your existing feeds for the MICROSOFT GRAPH ALERT log type are pointing towards the legacy alerts endpoint, you must update the API Full Path in your feed configuration to switch to the alerts v2 endpoint instead, as described in How to set up Microsoft Graph API alerts .
- Feature Deprecated date Shutdown date Details v1 Cloud Storage Connectors April 15, 2026 March 15, 2027 Google SecOps is deprecating the v1 connector framework for GOOGLE CLOUD STORAGE , AMAZON S3 , AMAZON SQS , and AZURE BLOBSTORE .

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.
- For example: A text value, all caps enclosed in double quotes: metadata.event type = "NETWORK CONNECTION" Additional values: Use the field[key\] = value format to search within additional and labels fields.
- The Event Viewer includes these tabs: Event Fields Raw Log Alerts Entities Event Fields tab Note: This feature is covered by Pre-GA Offerings Terms of the Google Security Operations Service Specific Terms.

