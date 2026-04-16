---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.718Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "legacySearchRawLogsV2 API"
feature_slug: "legacysearchrawlogsv2-api"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/reference/search-api"
  - "https://docs.cloud.google.com/chronicle/docs/secops/secops-overview"
keywords:
  - "legacysearchrawlogsv2"
  - "can"
  - "search"
  - "raw"
  - "logs"
  - "within"
  - "specified"
  - "secops"
---

# legacySearchRawLogsV2 API

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

The legacySearchRawLogsV2 API can search raw logs within a specified Google SecOps instance.

## Extended Definition

The legacySearchRawLogsV2 API can search raw logs within a specified Google SecOps instance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/reference/search-api](https://docs.cloud.google.com/chronicle/docs/reference/search-api)
- [https://docs.cloud.google.com/chronicle/docs/secops/secops-overview](https://docs.cloud.google.com/chronicle/docs/secops/secops-overview)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- These alerts don't surface within search unless they are processed by the Google SecOps Detection Engine as a YARA-L rule.
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- Search for events and alerts Supported in: Google secops SIEM The search function lets you find Unified Data Model (UDM) events and alerts in your Google Security Operations instance using YARA-L 2.0 syntax .
- For example: A text value, all caps enclosed in double quotes: metadata.event type = "NETWORK CONNECTION" Additional values: Use the field[key\] = value format to search within additional and labels fields.

### Search \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/search-api](https://docs.cloud.google.com/chronicle/docs/reference/search-api)
- Source ID: `site-docs-reference-2`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- If you receive the maximum number of events you specified using the page size parameter (or 10,000, the default), there might still be more events within your Google SecOps account.
- Note: IoCs returned by this method are the IoCs that were discovered by Google SecOps within the specified time range in your enterprise environment.
- Sample Response { "udm": { "metadata": { "productLogId": "12abc345-abcd-678e-9012-fg3456789hij", "eventTimestamp": "2023-01-24T21:40:00Z", "eventType": "NETWORK CONNECTION", "vendorName": "Palo Alto Networks", "productName": "ABCD", "productEventType": "TRAFFIC - start", "ingestedTimestamp": "2023-01-24T21:40:05.710838Z", "id": "ABCDEF1ghiJKlmnOpqrs2tuv3wXYYYYYZZABCD4ABCD=" }, "principal": { "hostname": "abc", "ip": [ "192.0.2.1" ], "port": 50000, "mac": [ "12:34:56:7a:b8:c9" ], "asset": { "productObjectId": "1859c98c-923d-4db0-a549-aee312a35dd9", "hostname": "abc", "ip": [ "192.0.2.1" ], "mac": [ "12:34:56:7a:b8:c9" ], "hardware": [ { "manufacturer": "Apple", "model": "MacBook Pro (14-inch, 2021)" } ], "platformSoftware": { "platform": "MAC", "platformVersion": "macOS Monterey 12.2" }, "type": "LAPTOP" } }, "target": { "hostname": "github.com", "port": 60000 }, "securityResult": [ { "action": [ "ALLOW" ] } ], "network": { "sentBytes": "54321", "receivedBytes": "54123", "ipProtocol": "TCP", "sessionId": "123456" } } } ListAssets Lists all the assets that accessed the specified artifact in your enterprise within the specified time period.
- SERVICE ACCOUNT FILE = os.path.join(os.environ['HOME'], 'bk credentials.json') Create a credential using Google Developer Service Account Credential and Backstory API scope. credentials = service account.Credentials.from service account file( SERVICE ACCOUNT FILE, scopes=SCOPES) Build an HTTP client that can make authorized OAuth requests. http client = auth.authorized http(credentials) Construct the URL BACKSTORY API V1 URL = 'https://backstory.googleapis.com/v1' LIST EVENTS URL = '{}/asset/listevents?start time=2019-11-17T20:37:00Z&page size=10&end time= 2019-11-18T20:37:00Z&reference time=2019-11-17T20:37:00Z&asset.hostname= enterprise.service.altostrat.com'.format(BACKSTORY API V1 URL) Make a request response = http client.request(LIST EVENTS URL, 'GET') Parse the response if response[0].status == 200: asset events = response[1] List of events returned for further processing print(asset events) else: An error occurred, please see the response detail err = response[1] print(err) ListIoCs Lists all the IoCs discovered within your enterprise within the specified time range.

### "Google SecOps overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/secops-overview](https://docs.cloud.google.com/chronicle/docs/secops/secops-overview)
- Source ID: `site-api-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Search UDM Search : Lets you find Unified Data Model (UDM) events and alerts within your Google SecOps instance.
- Use Google SecOps to search across all of the domains accessed within your enterprise.
- Google SecOps overview Supported in: Google secops Google Security Operations is a cloud service, built as a specialized layer on top of Google infrastructure, designed for enterprises to privately retain, analyze, and search the large amounts of security and network telemetry they generate.
- Access control You can both employ predefined roles and configure new roles to control access to classes of data, alerts, and events stored within your Google SecOps instance.

