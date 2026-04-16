---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:24.678Z"
product_name: "Cloud DNS"
product_slug: "cloud-dns"
feature_name: "Cloud DNS resourceRecordSets.list filter"
feature_slug: "cloud-dns-resourcerecordsets-list-filter"
latest_feature_date: "2026-03-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/list"
  - "https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/list"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.RecordSetListOption"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.ChangeRequestListOption"
keywords:
  - "dns"
  - "resourcerecordsets"
  - "list"
  - "filter"
  - "adds"
  - "query"
  - "parameter"
  - "to"
---

# Cloud DNS resourceRecordSets.list filter

Product: Cloud DNS
Coverage: MEDIUM

## Step 02 Summary

Cloud DNS adds a filter query parameter to the resourceRecordSets.list API to return records that match a specified domain.

## Extended Definition

Cloud DNS adds a filter query parameter to the resourceRecordSets.list API to return records that match a specified domain.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/list](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/list)
- [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/list](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/list)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.RecordSetListOption](https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.RecordSetListOption)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.ChangeRequestListOption](https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.ChangeRequestListOption)

## Supporting Pages

### "Method: projects.locations.dnsThreatDetectors.list \_|\_ Cloud DNS \_|\_\

- URL: [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/list](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1/projects.locations.dnsThreatDetectors/list)
- Source ID: `site-docs-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "dnsThreatDetectors" : [ { object ( DnsThreatDetector ) } ] , "nextPageToken" : string , "unreachable" : [ string ] } Fields dnsThreatDetectors[] object ( DnsThreatDetector ) The list of DnsThreatDetector resources. nextPageToken string A token, which can be sent as pageToken , to retrieve the next page. unreachable[] string Unordered list.
- Home Documentation Networking Cloud DNS Reference Send feedback Method: projects.locations.dnsThreatDetectors.list Stay organized with collections Save and categorize content based on your preferences.
- IAM Permissions Requires the following IAM permission on the parent resource: networksecurity.dnsThreatDetectors.list For more information, see the IAM documentation .
- Response body The response message to requesting a list of DnsThreatDetectors.

### "Method: projects.locations.dnsThreatDetectors.list \_|\_ Cloud DNS \_|\_\

- URL: [https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/list](https://docs.cloud.google.com/dns/docs/reference/dns-armor/rest/v1beta1/projects.locations.dnsThreatDetectors/list)
- Source ID: `site-docs-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "dnsThreatDetectors" : [ { object ( DnsThreatDetector ) } ] , "nextPageToken" : string , "unreachable" : [ string ] } Fields dnsThreatDetectors[] object ( DnsThreatDetector ) The list of DnsThreatDetector resources. nextPageToken string A token, which can be sent as pageToken , to retrieve the next page. unreachable[] string Unordered list.
- Home Documentation Networking Cloud DNS Reference Send feedback Method: projects.locations.dnsThreatDetectors.list Stay organized with collections Save and categorize content based on your preferences.
- IAM Permissions Requires the following IAM permission on the parent resource: networksecurity.dnsThreatDetectors.list For more information, see the IAM documentation .
- Response body The response message to requesting a list of DnsThreatDetectors.

### "Class Dns.RecordSetListOption (2.86.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.RecordSetListOption](https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.RecordSetListOption)
- Source ID: `site-java-reference`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameter Name Description type RecordSet.Type Returns Type Description Dns.RecordSetListOption Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Parameter Name Description dnsName String Returns Type Description Dns.RecordSetListOption fields(Dns.RecordSetField[] fields) public static Dns .
- Parameter Name Description fields RecordSetField [] Returns Type Description Dns.RecordSetListOption pageSize(int pageSize) public static Dns .
- Parameter Name Description pageToken String Returns Type Description Dns.RecordSetListOption type(RecordSet.Type type) public static Dns .

### "Class Dns.ChangeRequestListOption (2.86.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.ChangeRequestListOption](https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.ChangeRequestListOption)
- Source ID: `site-java-reference`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- Parameter Name Description order Dns.SortingOrder Returns Type Description Dns.ChangeRequestListOption Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Parameter Name Description fields ChangeRequestField [] Returns Type Description Dns.ChangeRequestListOption pageSize(int pageSize) public static Dns .
- Parameter Name Description pageToken String Returns Type Description Dns.ChangeRequestListOption sortOrder(Dns.SortingOrder order) public static Dns .
- Parameter Name Description pageSize int Returns Type Description Dns.ChangeRequestListOption pageToken(String pageToken) public static Dns .

