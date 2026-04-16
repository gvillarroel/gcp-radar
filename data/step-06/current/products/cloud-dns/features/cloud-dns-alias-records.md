---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:24.680Z"
product_name: "Cloud DNS"
product_slug: "cloud-dns"
feature_name: "Cloud DNS alias records"
feature_slug: "cloud-dns-alias-records"
latest_feature_date: "2025-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dns/docs/set-up-dns-records-domain-name"
  - "https://docs.cloud.google.com/dns/docs/records"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.RecordSetListOption"
  - "https://docs.cloud.google.com/dns/docs/reference/json-record"
keywords:
  - "dns"
  - "alias"
  - "records"
  - "introduces"
  - "cname"
  - "like"
  - "custom"
  - "record"
---

# Cloud DNS alias records

Product: Cloud DNS
Coverage: MEDIUM

## Step 02 Summary

Cloud DNS introduces alias records, a CNAME-like custom record type that maps a zone apex domain to a canonical target; Cloud DNS now supports alias records that map an apex alias name to a canonical name.

## Extended Definition

Cloud DNS introduces alias records, a CNAME-like custom record type that maps a zone apex domain to a canonical target; Cloud DNS now supports alias records that map an apex alias name to a canonical name.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dns/docs/set-up-dns-records-domain-name](https://docs.cloud.google.com/dns/docs/set-up-dns-records-domain-name)
- [https://docs.cloud.google.com/dns/docs/records](https://docs.cloud.google.com/dns/docs/records)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.RecordSetListOption](https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.RecordSetListOption)
- [https://docs.cloud.google.com/dns/docs/reference/json-record](https://docs.cloud.google.com/dns/docs/reference/json-record)

## Supporting Pages

### "Quickstart: Set up DNS records for a domain name with Cloud DNS \_|\_ Google\

- URL: [https://docs.cloud.google.com/dns/docs/set-up-dns-records-domain-name](https://docs.cloud.google.com/dns/docs/set-up-dns-records-domain-name)
- Source ID: `site-docs-reference`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Update your domain name servers to publish your domain Finally, you must update your domain's name servers to use Cloud DNS to publish your new records to the internet.
- Quickstart: Set up DNS records for a domain name with Cloud DNS This page explains how to set up a Cloud DNS managed zone and a resource record for your domain name.
- It guides you through an example of creating a managed zone and then setting up Address ( A ) and Canonical Name ( CNAME ) records for the domain.
- You can verify that the DNS records are working by visiting the domain name and confirming that the domain resolves to your IP address.

### Add, update, and delete records \_|\_ Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/records](https://docs.cloud.google.com/dns/docs/records)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 1 21600 3600 259200 300 ttl : 21600 type : SOA --- kind : dns#resourceRecordSet name : host1.example.com. rrdatas : - 192.0.2.91 ttl : 300 type : A Cloud DNS supports the ALIAS record type, which isn't a standard DNS record type and isn't supported in BIND .
- Caution: Some DNS implementations and providers export BIND zone-formatted files without trailing dots ( . ) on domain name data in CNAME , MX , PTR , and other records.
- MANAGED ZONE : the managed zone that this resource record set is affiliated with—for example, my-zone-name ; the name of this resource record set must have the DNS name of the managed zone as its suffix API To add a resource record set, use the resourceRecordSets.create method method: POST https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones/ MANAGED ZONE /rrsets { "name": " RRSET NAME ", "type": " RRSET TYPE ", "ttl": TTL , "rrdatas": [ RR DATA ] } Replace the following: PROJECT ID : the ID of the project MANAGED ZONE : the managed zone that this resource record set is affiliated with—for example, my-zone-name ; the name of this resource record set must have the DNS name of the managed zone as its suffix RRSET NAME : the DNS name that matches the incoming queries with this zone's DNS name as its suffix—for example, test.example.com RRSET TYPE : the resource record type of this resource record set—for example, A TTL : the TTL in seconds that the resolver caches this resource record set—for example, 30 RR DATA : an arbitrary value associated with the resource record set—for example, "198.51.100.5" ; you can also enter multiple values in a comma-separated list—for example, "198.51.100.5","10.2.3.4" .
- MANAGED ZONE : the managed zone that this resource record set is affiliated with—for example, my-zone-name ; the name of this resource record set must have the DNS name of the managed zone as its suffix API To delete an existing resource record set, use the resourceRecordSets.delete method : DELETE https://dns.googleapis.com/dns/v1/projects/ PROJECT ID /managedZones/ MANAGED ZONE /rrsets/ RRSET NAME / RRSET TYPE Replace the following: PROJECT ID : the ID of the project MANAGED ZONE : the managed zone that this resource record set is affiliated with—for example, my-zone-name ; the name of this resource record set must have the DNS name of the managed zone as its suffix RRSET NAME : the DNS name that matches the incoming queries with this zone's DNS name as its suffix—for example, test.example.com RRSET TYPE : the resource record type of this resource record set—for example, A .

### "Class Dns.RecordSetListOption (2.86.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.RecordSetListOption](https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns.RecordSetListOption)
- Source ID: `site-java-reference`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Inheritance Object > com.google.cloud.dns.Option > Dns.RecordSetListOption Inherited Members com.google.cloud.dns.Option.equals(java.lang.Object) com.google.cloud.dns.Option.hashCode() com.google.cloud.dns.Option.toString() Object.clone() Object.finalize() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods dnsName(String dnsName) public static Dns .
- Parameter Name Description type RecordSet.Type Returns Type Description Dns.RecordSetListOption Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Java Client libraries Send feedback Class Dns.RecordSetListOption (2.86.0) Stay organized with collections Save and categorize content based on your preferences.
- Parameter Name Description dnsName String Returns Type Description Dns.RecordSetListOption fields(Dns.RecordSetField[] fields) public static Dns .

### Records format (JSON) \_|\_ Cloud DNS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dns/docs/reference/json-record](https://docs.cloud.google.com/dns/docs/reference/json-record)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example of the resource record set representation: { "kind" : "dns#resourceRecordSet" , "name" : "example.com." , "rrdatas" : [ "2607:f8b0:400a:801::1005" ], "ttl" : 86400 , "type" : "AAAA" } CNAME Canonical name record, which is used to alias names.
- Example of the resource record set representation: { "kind" : "dns#resourceRecordSet" , "name" : "mail.example.com." , "rrdatas" : [ "example.com." ], "ttl" : 86400 , "type" : "CNAME" } Note that the hostnames must end with periods or trailing dots ( . ) in the rrdatas fields to be fully-qualified DNS names.
- Example of the resource record set representation: { "kind" : "dns#resourceRecordSet" , "name" : "2.1.2.1.5.5.5.0.7.7.1.e164.arpa." , "rrdatas" : [ "100 10 \"u\" \"sip+E2U\" \"!^. $!sip:information@foo.se!i\" ." , "102 10 \"u\" \"smtp+E2U\" \"!^. $!mailto:information@foo.se!i\" ." ], "ttl" : 300 , "type" : "NAPTR" } Note that the value in the final replacement field of each rrdatas must end with a period or trailing dot ( . ) to be a fully-qualified DNS name.
- If one of your strings contains embedded white space, you must use the quoted form, for example: { "kind" : "dns#resourceRecordSet" , "name" : "example.com." , "rrdatas" : [ "\"v=spf1 include: spf.google.com all\"" ], "ttl" : 21600 , "type" : "TXT" } The preceding resource record set consists of a single TXT resource record that contains a single character string with embedded spaces.

