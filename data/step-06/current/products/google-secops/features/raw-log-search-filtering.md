---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.720Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Raw log search filtering"
feature_slug: "raw-log-search-filtering"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere"
  - "https://docs.cloud.google.com/chronicle/docs/reference/search-api"
keywords:
  - "raw"
  - "log"
  - "search"
  - "filtering"
  - "results"
  - "can"
  - "filtered"
  - "parsing"
---

# Raw log search filtering

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Raw log search results can be filtered by parsing status or by one or more log sources.

## Extended Definition

Raw log search results can be filtered by parsing status or by one or more log sources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)
- [https://docs.cloud.google.com/chronicle/docs/reference/search-api](https://docs.cloud.google.com/chronicle/docs/reference/search-api)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- Use a block comment: additional.fields["pod name"] = "kube-scheduler" / Block comments can span multiple lines. / AND additional.fields["pod name1"] = "kube-scheduler1" Use a single-line comment: additional.fields["pod name"] != "" // my single-line comment Search settings You can set the maximum number of search results in UDM search settings .
- Searching for text in Values returns results as follows: If the string is found at the beginning or end of the value, it is highlighted in the result, along with the UDM field name and the log ingestion time.

### "Integrate LevelBlue USM Anywhere with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)
- Source ID: `site-api-reference`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Format: "%d/%m/%Y" End Time String N/A No Filtered results will include events that occurred before this timestamp.
- Start Time String N/A No Filtered results will include events that occurred after this timestamp.
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "rep device fqdn" : "192.0.2.30" , "sorce name" : "192.0.2.30" , "tag" : "pdate-esp-kernelmodle.sh" , "timestamp occred" : "1596541223000" , "destination address" : "198.51.100.130" , "rep dev canonical" : "192.0.2.30" , "destination name" : "198.51.100.130" , "received from" : "Centos7-001" , "timestamp occred iso8601" : "2020-08-04T11:40:23.000Z" , "id" : "f52dd545-ff14-5576-3b70-47f10f528f53" , "needs enrichment" : True , "rep device asset id" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "timestamp received" : "1596541223152" , "sorce canonical" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "destination fqdn" : "198.51.100.130" , " links" : { "self" : { "href" : " URL " } }, "has alarm" : False , "rep device address" : "192.0.2.30" , "event name" : "pdate-esp-kernelmodle.sh event" , "sed hint" : False , "transient" : False , "packet type" : "log" , "was fzzied" : True , "sppressed" : False , "log" : "<13>Ag 4 14:40:23 Centos7-001 pdate-esp-kernelmodle.sh: McAfeeESPFileAccess installed in this system is - 198.51.100.130" , "sorce asset id" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "timestamp received iso8601" : "2020-08-04T11:40:23.152Z" , "destination canonical" : "198.51.100.130" , "time offset" : "Z" } Case wall Result type Description Type Output message In case of general error: "Action didn't complete due to error: {error}", result value should be set to false and the action should fail.
- Error is {}. action should fail." Action pass successfully: "Successfully returned AlienVault Anywhere alarm {} details" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Columns: ID Priority Occurred Time Received Time Source Source Organization Source Country Destination Rule Attack ID Rule Strategy Rule ID Rule Attack Tactic Rule Attack Technique Rule Intent General List Events Search for AlienVault events.

### Search \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/search-api](https://docs.cloud.google.com/chronicle/docs/reference/search-api)
- Source ID: `site-docs-reference-2`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Response { "events": [ { "metadata": { "eventTimestamp": "2019-11-18T20:36:58.069290Z", "collectedTimestamp": "2019-11-18T20:36:58.069290Z", "eventType": "NETWORK DNS" }, "principal": { "hostname": "enterprise.service.example.com", "ip": ["203.0.113.100"] }, "target": { "ip": ["10.0.2.8"] }, "network": { "applicationProtocol": "DNS", "dns": { "questions": [ { "name": "www.altostrat.com", "type": 1 } ], "answers": [ { "name": "www.altostrat.com", "type": 1, "class": 1, "data": "203.0.113.100" } ] } } }, { "metadata": { "eventTimestamp": "2019-11-18T20:36:58.069290Z", "collectedTimestamp": "2019-11-18T20:36:58.069290Z", "eventType": "NETWORK DHCP" }, "principal": { "ip": ["10.0.2.8"] }, "target": { "ip": ["198.51.152"] }, "network": { "applicationProtocol": "DHCP" } }, { "metadata": { "eventTimestamp": "2019-11-18T20:36:58.069290Z", "collectedTimestamp": "2019-11-18T20:36:58.069290Z", "eventType": "NETWORK HTTP" }, "principal": { "ip": ["10.0.2.18"] }, "target": { "hostname": "www.altostrat.com", "url": "http://www.altostrat.com/robots.txt" }, "network": { "ipProtocol": "HTTP", "http": { "method": "METHOD GET", "responseCode": 200 } } } ] uri: ["https://sample.backstory.chronicle.security/assetResults?assetIdentifier= sample asset&referenceTime=2019-12-18T18%3A40%3A34.965Z&selectedList=AssetViewTimeline& startTime=2019-12-18T17%3A20%3A35.445Z&endTime=2019-12-18T19%3A20%3A35.445Z"] } Python sample code def call list events(): Imports required for the sample - Google Auth and API Client Library Imports.
- Sample Request https://backstory.googleapis.com/v1/events:udmSearch?query=metadata.event type+%3D+%22NETWORK CONNECTION%22+and+principal.hostname%3D%22jdx%22&time range.start time=2022-08-04T00%3A00%3A00Z&time range.end time=2022-08-04T01%3A00%3A00Z&limit=100 Sample Response { "events": [ { "name": "00000000c5fd1146ce52d833659247f68b82009d000000000500000000000000", "udm": { "metadata": { "eventTimestamp": "2022-09-14T00:59:59.567051Z", "eventType": "NETWORK CONNECTION", "ingestedTimestamp": "2022-09-14T01:00:20.783486Z", "id": "AAAAAMX9EUbOUtgzZZJH9ouCAJ0AAAAABQAAAAAAAAA=" }, "principal": { "ip": [ "10.9.8.7" ], }, "target": { "ip": [ "74.125.197.190" ], "port": 443 } } }, { "name": "000000000f8e8dc25f873448a3b51ed3e81af0d900000000050000001c000000", "udm": { "metadata": { "eventTimestamp": "2022-09-14T00:59:59.567051Z", "eventType": "NETWORK CONNECTION", "ingestedTimestamp": "2022-09-14T01:00:20.071428Z", "id": "AAAAAA+OjcJfhzRIo7Ue0+ga8NkAAAAABQAAABwAAAA=" }, "principal": { "ip": [ "10.9.8.7" ] }, "target": { "ip": [ "74.125.135.103" ], "port": 443 } } } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following asset indicators identify an asset: Hostname IP address MAC address Product ID Sample response { assets: [ { asset: { hostname: "rick" }, firstSeenArtifactInfo: { artifactIndicator: { domainName: "www.altostrat.com" }, seenTime: "2018-09-14T20:10:27.157476Z" }, lastSeenArtifactInfo: { artifactIndicator: { domainName: "www.altostrat.com" }, seenTime: "2019-10-24T22:04:04.327829Z" } }, { asset: { hostname: "morty" }, firstSeenArtifactInfo: { artifactIndicator: { domainName: "www.altostrat.com" }, seenTime: "2019-06-17T21:22:44.812738Z" }, lastSeenArtifactInfo: { artifactIndicator: { domainName: "www.altostrat.com" }, seenTime: "2019-10-24T20:40:54.846676Z" } }], uri: ["https://sample.backstory.chronicle.security/domainResults?domain= altostrat.com&selectedList=DomainViewDistinctAssets&whoIsTimestamp= 2020-01-08T21%3A09%3A13.000Z"] } Python sample code def call list assets(): Imports required for the sample - Google Auth and API Client Library Imports.
- The artifact indicator must either be a domain name or an IP address. artifact.destination ip address destination IP address Response { sources: [{ addresses: [{ domain: "www.altostrat.com", port: [80] }], category: "Spyware Reporting Server", confidenceScore: {strRawConfidenceScore: "25"}, firstActiveTime: "2013-08-04T00:00:00Z", lastActiveTime: "2019-08-13T00:00:00Z", rawSeverity: "Medium", sourceUrl:"http://tools.emergingthreats.net/docs/ET%20Intelligence%20Rep%20List%20Tech%20Description.pdf" }], uri: ["https://sample.backstory.chronicle.security/domainResults? domain=altostrat.com&selectedList=DomainViewDistinctAssets& whoIsTimestamp=2020-01-09T01%3A29%3A59.526Z" ] } Python sample code def call list ioc details(): Imports required for the sample - Google Auth and API Client Library Imports.

