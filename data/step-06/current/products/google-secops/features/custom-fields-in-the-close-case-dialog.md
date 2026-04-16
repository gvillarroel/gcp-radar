---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.751Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Custom fields in the Close Case dialog"
feature_slug: "custom-fields-in-the-close-case-dialog"
latest_feature_date: "2025-09-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight"
  - "https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview"
keywords:
  - "custom"
  - "fields"
  - "close"
  - "case"
  - "dialog"
  - "administrators"
  - "can"
  - "add"
---

# Custom fields in the Close Case dialog

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Administrators can add custom fields to the Close Case dialog to streamline case closure.

## Extended Definition

Administrators can add custom fields to the Close Case dialog to streamline case closure.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight)
- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.
- When searching Values , UDM Lookup displays Possible value match when a match is found in the following cases: Matches in the following UDM fields: metadata.description security result.description security result.detection fields.value security result.summary network.http.user agent Matches in fields with a full path that ends in one of the following values: .command line For example principal.process.command line . .file.full path For example principal.process.file.full path . .labels.value For example src.labels.value . .registry.registry key For example principal.registry.registry key . .url For example principal.url .
- When searching Values , UDM Lookup does not return matches in the following cases: Matches in the following UDM fields: metadata.product log id network.session id security result.rule id network.parent session id Matches in UDM fields with a full path that ends in one of the following values: .pid For example target.process.pid . .asset id For example principal.asset id . .product specific process id For example principal.process.product specific process id . .resource.id For example principal.resource.id .

### "Integrate ArcSight with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight)
- Source ID: `site-api-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Jobs Close Cases The job requires the following parameters: Parameter name Type Default value Is mandatory Description Server Address String 192.0.2.1 Yes N/A Username String N/A Yes N/A Password Password N/A Yes N/A Need more help?
- Cases Folder Path String I:\SiemShare\CorrelationSource Yes The location of the case files, such as I:\SiemShare\CorrelationSource Note: The Cases Folder Path parameter can be changed from one customer to another.
- Example: CustomDeviceString2 Alert Custom Fields Names String N/A No Pull custom field values from ArcSight into the alert, such as baseEventCount,agent address,device assetId.
- Environment Field Name String event.customerURI Yes The name of the field to get the case's environment, for example, event.customerUri.

### Cases overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- The case queue—automatically refreshed every minute—lists all active cases and lets you manually refresh, sort, filter, add, or close cases as needed.
- It also shows the assigned analyst (name or role), and includes controls for Chat , Close Case , Refresh , Explore , and the Case Actions menu.
- Each case entry shows key metadata, such as: Case name and unique ID Case timestamp Number of associated alerts Assigned analyst (with avatar) Case priority and stage (optional, depending on view) Analysts can toggle between these views: Default view : Shows case cards with essential information.
- Case top bar The Case Top Bar displays case-level context and available actions, as follows: The case queue header displays the case title, ID, priority, stage , timestamp, change environment, and tags .

