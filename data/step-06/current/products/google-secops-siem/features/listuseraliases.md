---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.683Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "ListUserAliases"
feature_slug: "listuseraliases"
latest_feature_date: "2022-09-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/ingest-bce"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/detection/chrome-enterprise-threats-category"
keywords:
  - "listuseraliases"
  - "returns"
  - "all"
  - "aliases"
  - "user"
  - "enterprise"
---

# ListUserAliases

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

ListUserAliases returns all aliases for a user in an enterprise.

## Extended Definition

ListUserAliases returns all aliases for a user in an enterprise.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/ingest-bce](https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/ingest-bce)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/detection/chrome-enterprise-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/chrome-enterprise-threats-category)

## Supporting Pages

### "Collect Chrome Enterprise Premium Context Access Aware Data \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/ingest-bce](https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/ingest-bce)
- Source ID: `site-api-reference`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud Logs Cloud Identity Devices Cloud Identity Device Users Before you begin Before you set up feeds to ingest Chrome Enterprise Premium data, complete the following tasks: Connect your Google Cloud organization to Google Security Operations by completing the following sections: Enable telemetry ingestion to Google Security Operations .
- Collect Chrome Enterprise Premium Context Access Aware Data Supported in: Google secops SIEM This document explains how you can connect your organization to Google Security Operations, enable the Identity-Aware Proxy (IAP) API, and set up feeds to ingest the following data to Google Security Operations.
- For more information, see Control API access with domain-wide delegation Create a user for impersonation From the Google Admin console Home page, select Directory > Users .
- In the Log type list, select either GCP Cloud Identity Devices or GCP Cloud Identity Device Users .

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Types of grouped UDM fields You can search across all of the following grouped UDM fields: Grouped field name Associated UDM fields domain about.administrative domain about.asset.network domain network.dns.questions.name network.dns domain principal.administrative domain principal.asset.network domain target.administrative domain target.asset.hostname target.asset.network domain target.hostname email intermediary.user.email addresses network.email.from network.email.to principal.user.email addresses security result.about.user.email addresses target.user.email addresses file path principal.file.full path principal.process.file.full path principal.process.parent process.file.full path target.file.full path target.process.file.full path target.process.parent process.file.full path hash about.file.md5 about.file.sha1 about.file.sha256 principal.process.file.md5 principal.process.file.sha1 principal.process.file.sha256 security result.about.file.sha256 target.file.md5 target.file.sha1 target.file.sha256 target.process.file.md5 target.process.file.sha1 target.process.file.sha256 hostname intermediary.hostname observer.hostname principal.asset.hostname principal.hostname src.asset.hostname src.hostname target.asset.hostname target.hostname ip intermediary.ip observer.ip principal.artifact.ip principal.asset.ip principal.ip src.artifact.ip src.asset.ip src.ip target.artifact.ip target.asset.ip target.ip namespace principal.namespace src.namespace target.namespace process id principal.process.parent process.pid principal.process.parent process.product specific process id principal.process.pid principal.process.product specific process id target.process.parent process.pid target.process.parent process.product specific process id target.process.pid target.process.product specific process id user about.user.userid observer.user.userid principal.user.user display name principal.user.userid principal.user.windows sid src.user.userid target.user.user display name target.user.userid target.user.windows sid Find a UDM field for search query While writing a search query, you may not know which UDM field to include.
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.

### "Overview of Chrome Enterprise Premium Threats Category \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/chrome-enterprise-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/chrome-enterprise-threats-category)
- Source ID: `site-api-reference`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported devices and log types The rule sets in the Chrome Enterprise Premium Threats category require logs from the following Google Security Operations data sources: Chrome Management Logs ( CHROME MANAGEMENT ) To feed these logs to Google SecOps, follow the steps in Collect Google Chrome logs .
- This document provides an overview of the rule sets within the Chrome Enterprise Threats category, the required data sources, and configuration you can use to tune the alerts generated by each rule set.
- Overview of Chrome Enterprise Premium Threats Category Supported in: Google secops SIEM Note: This feature is covered by Pre-GA Offerings Terms of the Google Security Operations Service Specific Terms.
- Rule sets in the Chrome Enterprise Premium Threats category help identify threats in the Google Cloud environment using Chrome Enterprise Premium Management logs.

