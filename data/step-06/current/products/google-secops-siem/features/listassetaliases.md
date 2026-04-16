---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.682Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "ListAssetAliases"
feature_slug: "listassetaliases"
latest_feature_date: "2022-09-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs"
  - "https://docs.cloud.google.com/chronicle/docs/detection/chrome-enterprise-threats-category"
keywords:
  - "listassetaliases"
  - "returns"
  - "all"
  - "aliases"
  - "asset"
  - "enterprise"
---

# ListAssetAliases

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

ListAssetAliases returns all aliases for an asset in an enterprise.

## Extended Definition

ListAssetAliases returns all aliases for an asset in an enterprise.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- [https://docs.cloud.google.com/chronicle/docs/detection/chrome-enterprise-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/chrome-enterprise-threats-category)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Types of grouped UDM fields You can search across all of the following grouped UDM fields: Grouped field name Associated UDM fields domain about.administrative domain about.asset.network domain network.dns.questions.name network.dns domain principal.administrative domain principal.asset.network domain target.administrative domain target.asset.hostname target.asset.network domain target.hostname email intermediary.user.email addresses network.email.from network.email.to principal.user.email addresses security result.about.user.email addresses target.user.email addresses file path principal.file.full path principal.process.file.full path principal.process.parent process.file.full path target.file.full path target.process.file.full path target.process.parent process.file.full path hash about.file.md5 about.file.sha1 about.file.sha256 principal.process.file.md5 principal.process.file.sha1 principal.process.file.sha256 security result.about.file.sha256 target.file.md5 target.file.sha1 target.file.sha256 target.process.file.md5 target.process.file.sha1 target.process.file.sha256 hostname intermediary.hostname observer.hostname principal.asset.hostname principal.hostname src.asset.hostname src.hostname target.asset.hostname target.hostname ip intermediary.ip observer.ip principal.artifact.ip principal.asset.ip principal.ip src.artifact.ip src.asset.ip src.ip target.artifact.ip target.asset.ip target.ip namespace principal.namespace src.namespace target.namespace process id principal.process.parent process.pid principal.process.parent process.product specific process id principal.process.pid principal.process.product specific process id target.process.parent process.pid target.process.parent process.product specific process id target.process.pid target.process.product specific process id user about.user.userid observer.user.userid principal.user.user display name principal.user.userid principal.user.windows sid src.user.userid target.user.user display name target.user.userid target.user.windows sid Find a UDM field for search query While writing a search query, you may not know which UDM field to include.
- When searching Values , UDM Lookup does not return matches in the following cases: Matches in the following UDM fields: metadata.product log id network.session id security result.rule id network.parent session id Matches in UDM fields with a full path that ends in one of the following values: .pid For example target.process.pid . .asset id For example principal.asset id . .product specific process id For example principal.process.product specific process id . .resource.id For example principal.resource.id .
- It then matches those events against the hostnames column and the ip column in the badApps data table. events: $e.metadata.event type = "NETWORK CONNECTION" $e.security result.action = "ALLOW" $e.target.asset.asset id = $assetid // Event hostname matches at least one value in table column hostname. $e.target.hostname in %badApps.hostname // Event IP matches at least one value in table column ip. $e.target.ip in %badApps.ip For more information, see Use data tables .
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.

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

### "View alerts and IOC matches \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- Source ID: `site-api-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- The following table details which specific UDM fields are used for automatic IOC matching based on your package: Enterprise package Enterprise Plus package about.file network.dns.answers network.dns.questions network.dns.questions principal.administrative domain principal.asset principal.ip principal.process.file principal.process.file principal.process.parent process.file principal.process.parent process.file security result.about.file security result.about.file src.file src.file src.ip target.asset.ip target.domain.name target.file target.file target.hostname target.hostname target.ip target.ip target.process.file target.process.file target.process.parent process.file Understanding which UDM fields are used helps ensure your data parsers correctly map raw log fields to the appropriate UDM fields for effective IOC matching.
- Example SQL to query for specific IP-address IOC matches: -- Add your IP IOC Matches here DECLARE IP IOCS ARRAY < STRING > ; SET IP IOCS = [ '40.79.150.120' ]; ------ SELECT MIN ( DATE ( TIMESTAMP SECONDS ( CAST ( day bucket seconds AS INT64 )), 'UTC' )) AS first observed , MAX ( DATE ( TIMESTAMP SECONDS ( CAST ( day bucket seconds AS INT64 )), 'UTC' )) AS last observed , COUNT ( 4 ) AS hits , ioc value , feed log type , is global , CONCAT ( COALESCE ( asset . namespace , "untagged" ), ":" , COALESCE ( asset . hostname , asset . asset ip address , asset . mac , "-" )) AS asset FROM datalake . ioc matches WHERE ioc value IN UNNEST ( IP IOCS ) AND ioc type = "IOC TYPE IP" GROUP BY 4 , 5 , 6 , 7 Here are the truncated results: Row first observed last observed hits ioc value feed log type is global asset 1 2025-02-23 2025-03-05 64 40.79.150.120 CATCH ALL false untagged:192.168.12.16 2 2025-02-27 2025-03-05 29 40.79.150.120 CATCH ALL false untagged:192.168.12.129 You can also query the datalake.events table for multi-dimensional IOC matching by constructing a concatenated string, for example: DECLARE IOC MULTIPLE ATTRIBUTES ARRAY < STRING > ; SET IOC MULTIPLE ATTRIBUTES = [ '1.2.3.4,80' , '1.2.3.4,443' ]; SELECT MIN ( TIMESTAMP SECONDS ( metadata . event timestamp . seconds )) AS first seen , MAX ( TIMESTAMP SECONDS ( metadata . event timestamp . seconds )) AS last seen , target ip , target . port FROM datalake . events , UNNEST ( target . ip ) target ip WHERE DATE ( hour time bucket ) BETWEEN DATE SUB ( CURRENT DATE , INTERVAL 60 DAY ) AND DATE SUB ( CURRENT DATE , INTERVAL 1 DAY ) AND target ip != "" AND target . port > 0 AND CONCAT ( target ip , "," , CAST ( target . port AS STRING )) IN UNNEST ( IOC MULTIPLE ATTRIBUTES ) GROUP BY 3 , 4 Note: The Google SecOps Data Lake typically retains data for six months.
- The following threat-intelligence sources are available in Google SecOps out-of-box: Google SecOps Enterprise package Google SecOps Enterprise Plus package Enriched open-source intelligence (OSINT) Enriched open-source intelligence (OSINT) Mandiant Fusion VirusTotal Real-time and retroactive matching Google SecOps performs IOC matching in two ways: Real-time matching : when new security telemetry is ingested and normalized, it is immediately checked against all available IOC feeds.
- View alerts and IOC matches Supported in: Google secops SIEM The Alerts & IOCs page displays all the alerts and Indicators of Compromise (IOCs) that are impacting your enterprise.

