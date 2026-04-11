---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.939Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Search result limit keyword"
feature_slug: "search-result-limit-keyword"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/reference/search-api"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
keywords:
  - "search"
  - "result"
  - "limit"
  - "keyword"
  - "the"
  - "restricts"
  - "number"
  - "of"
---

# Search result limit keyword

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

The limit keyword restricts the number of results returned by a search.

## Extended Definition

The limit keyword restricts the number of results returned by a search.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/reference/search-api](https://docs.cloud.google.com/chronicle/docs/reference/search-api)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Limit results You can limit search results by adding the limit keyword with the maximum number of search results you want to display.
- For example, if you add the following to your search, it limits the results to a maximum of 25: limit: 25 Note: You can also add the limit keyword to custom dashboards.
- Factors that limit search results When conducting searches, the following factors can limit the number of results returned: Maximum search results : 1M events.
- Configure result limits Use the UDM search settings dialog to control the number of results a search returns.

### Search \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/search-api](https://docs.cloud.google.com/chronicle/docs/reference/search-api)
- Source ID: `site-docs-reference-2`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Request GET https://backstory.googleapis.com/v1/events:udmSearch?query=<query>&time range.start time=<start time>&time range.end time=<end time>&limit=<limit> Parameters Parameter Name Type Description query string UDM search query. time range.start time ISO 8601 format Inclusive start time. time range.end time ISO 8601 format Exclusive end time. limit integer (Optional) The maximum number of matched events to return.
- Search API query submission rate limits The Search API enforces limits on the number of requests that you can send to the Google SecOps platform.
- For each API call, you can specify the page size property to limit the maximum number of returned results.
- Sample Request https://backstory.googleapis.com/v1/events:udmSearch?query=metadata.event type+%3D+%22NETWORK CONNECTION%22+and+principal.hostname%3D%22jdx%22&time range.start time=2022-08-04T00%3A00%3A00Z&time range.end time=2022-08-04T01%3A00%3A00Z&limit=100 Sample Response { "events": [ { "name": "00000000c5fd1146ce52d833659247f68b82009d000000000500000000000000", "udm": { "metadata": { "eventTimestamp": "2022-09-14T00:59:59.567051Z", "eventType": "NETWORK CONNECTION", "ingestedTimestamp": "2022-09-14T01:00:20.783486Z", "id": "AAAAAMX9EUbOUtgzZZJH9ouCAJ0AAAAABQAAAAAAAAA=" }, "principal": { "ip": [ "10.9.8.7" ], }, "target": { "ip": [ "74.125.197.190" ], "port": 443 } } }, { "name": "000000000f8e8dc25f873448a3b51ed3e81af0d900000000050000001c000000", "udm": { "metadata": { "eventTimestamp": "2022-09-14T00:59:59.567051Z", "eventType": "NETWORK CONNECTION", "ingestedTimestamp": "2022-09-14T01:00:20.071428Z", "id": "AAAAAA+OjcJfhzRIo7Ue0+ga8NkAAAAABQAAABwAAAA=" }, "principal": { "ip": [ "10.9.8.7" ] }, "target": { "ip": [ "74.125.135.103" ], "port": 443 } } } ] } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Restrict search results using limit The limit keyword now lets you restrict the number of results returned by a search.
- Absolute Secure Endpoint ( ABSOLUTE SECURE ENDPOINT ) Airbus Security Logging (ACD AISD) ( AIRBUS SECURITY LOG ) Azure Recovery Services Vaults ( AZURE RECOVERY SERVICES VAULTS ) Boeing Onboard Network System Logging ( BOEING ONS ) Cisco Firepower Threat Defense ( CISCO FIREPOWER THREAT DEFENSE ) Cisco Security Cloud Control ( CISCO SECURITY CLOUD CONTROL ) Pico Corvilnet Engine ( CORVILNET ENGINE ) CrowdStrike Falcon Shield ( CROWDSTRIKE FALCON SHIELD ) Easy NAC ( EASY NAC ) FairXchange Horizon ( FAIRXCHANGE HORIZON ) Google Threat Intelligence ( GCP THREATINTEL ) HPE Alletra ( HPE ALLETRA ) Huawei Cloud Trace Service Audit ( HUAWEI CTS AUDIT ) Huawei SecMaster ( HUAWEI SECMASTER ) IBM ILO ( IBM ILO ) Infisical ( INFISICAL ) JSCAPE SFTP ( JSCAPE SFTP ) Juniper Edge ( JUNIPER EDGE ) Kaspersky for Microsoft Office 365 ( KASPERSKY O365 EVENTS ) Microsoft Defender for Cloud Apps ( MICROSOFT DEFENDER CLOUD APPS ) Oracle Cloud Infrastructure Network Firewall ( OCI FIREWALL ) Okta Workflows ( OKTA WORKFLOWS ) Phosphorus ( PHOSPHORUS ) Rapid7 Cloud Security ( RAPID7 CLOUDSEC ) Research and Education Networks Information Sharing and Analysis Center ( REN ISAC ) Risk Resecurity ( RISK RESECURITY ) Sangfor Network Detection and Response ( SANGFOR NDR ) SAP Enterprise Threat Detection ( SAP ETD ) SAP IAS Context ( SAP IAS CONTEXT ) Sectigo SCM ( SECTIGO SCM ) ServiceNow Node ( SERVICENOW NODE ) ServiceNow Outbound HTTP ( SERVICENOW OUTBOUNDHTTP ) ServiceNow System log ( SERVICENOW SYSLOG ) ServiceNow Transaction ( SERVICENOW TRANSACTION ) Seti S4 ( SETI S4 ) ThousandEyes ( THOUSAND EYES ) Transmit Security Mosaic CIAM ( TRANSMIT MOSAIC CIAM ) Transmit Security Mosaic Fraud Prevention ( TRANSMIT MOSAIC FRAUD PREVENTION ) Transmit Security Mosaic Identity Verification ( TRANSMIT MOSAIC IDENTITY VERIFICATION ) Transmit Security Mosaic Management ( TRANSMIT MOSAIC MANAGEMENT ) Tripwire Security Configuration Management ( TRIPWIRE SCM ) Valimail ( VALIMAIL ) WSO2 IS AM ( WSO2 IS AM ) XDR.Net Digital Twin ( XDRNET DIGITALTWIN ) Zimbra Mail ( ZIMBRA MAIL ) Zscaler Email DLP ( ZSCALER EMAIL DLP ) November 13, 2025 Feature Raw log search enhancements Google SecOps now includes enhancements to raw log search to boost usability, performance, and data analysis: New filtering options : Filter raw log results by their parsing status or by one or more log sources.
- April 06, 2026 Change Updates to search query limits and error messaging Google SecOps has updated search query limits for programmatic and web interface access: Increased Queries Per Hour (QPH) limits of up to 2,000 for APIs and 1,000 for the web interface.
- June 30, 2021 Feature Downloading Events You can download large numbers of the events associated with each threat detection as a CSV file, enabling you to search across a broad set of the data stored in your Chronicle account to hunt for security issues.

