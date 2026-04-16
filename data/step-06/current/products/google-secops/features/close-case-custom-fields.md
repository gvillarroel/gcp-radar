---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.823Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Close case custom fields"
feature_slug: "close-case-custom-fields"
latest_feature_date: "2025-02-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
keywords:
  - "close"
  - "case"
  - "custom"
  - "fields"
  - "can"
  - "added"
  - "dialog"
  - "require"
---

# Close case custom fields

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Custom fields can be added to the Close Case dialog to require analysts to provide specific information when closing a case; Custom fields can be added to the Close Case page to require analysts to provide specific information when closing a case.

## Extended Definition

Custom fields can be added to the Close Case dialog to require analysts to provide specific information when closing a case; Custom fields can be added to the Close Case page to require analysts to provide specific information when closing a case.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.
- When searching Values , UDM Lookup displays Possible value match when a match is found in the following cases: Matches in the following UDM fields: metadata.description security result.description security result.detection fields.value security result.summary network.http.user agent Matches in fields with a full path that ends in one of the following values: .command line For example principal.process.command line . .file.full path For example principal.process.file.full path . .labels.value For example src.labels.value . .registry.registry key For example principal.registry.registry key . .url For example principal.url .
- When searching Values , UDM Lookup does not return matches in the following cases: Matches in the following UDM fields: metadata.product log id network.session id security result.rule id network.parent session id Matches in UDM fields with a full path that ends in one of the following values: .pid For example target.process.pid . .asset id For example principal.asset id . .product specific process id For example principal.process.product specific process id . .resource.id For example principal.resource.id .

### "Integrate ArcSight with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Jobs Close Cases The job requires the following parameters: Parameter name Type Default value Is mandatory Description Server Address String 192.0.2.1 Yes N/A Username String N/A Yes N/A Password Password N/A Yes N/A Need more help?
- Connector severity prioritization The connector assigns severity with the following prioritization values: 1 and 2 - very low 3 and 4 - low 5 and 6 - medium 7 and 8 - high 9 and 10 - critical Connector inputs Use the following parameters to configure the connector: Parameter name Type Default value Is mandatory Description Environment DDL N/A Yes Select the required environment, for example, Customer One .
- ESM rule or case forwarding to Google SecOps Working with Triggered Rules/Correlations You will be required to configure ArcSight ESM to forward the latest correlation objects to Google SecOps while you configure Google SecOps to function on ArcSight ESM as a SIEM provider, and also to provide API access to ArcSight ESM through an authorized user.
- Cases Folder Path String I:\SiemShare\CorrelationSource Yes The location of the case files, such as I:\SiemShare\CorrelationSource Note: The Cases Folder Path parameter can be changed from one customer to another.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Required actions for customers To ensure continuous data ingestion, you must manually re-create your feeds in the new environment.
- Verify required accesses and permissions are added.
- Verify required accesses and permissions are added.
- Ingress rules The following Cloud Storage methods must be allowed in the ingress rule: google.storage.objects.list : Required for a single file feed. google.storage.objects.get : Required for feeds that require directory or subdirectory access. google.storage.objects.delete : Required for feeds that require deletion of the source file.

