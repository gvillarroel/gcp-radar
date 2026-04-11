---
title: "Resource Record Sets \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/dns/latest/resource-record-set
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/dns/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/dns/latest/resource-record-set
  title: "Resource Record Sets \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Resource Record Sets
Stay organized with collections
Save and categorize content based on your preferences.
0.36.1 (latest)
0.36.0
0.35.1
0.34.2
0.33.1
0.32.3
0.31.0
0.30.2
Define API ResourceRecordSets.
class google.cloud.dns.resource_record_set.ResourceRecordSet(name, record_type, ttl, rrdatas, zone)
Bases: object
ResourceRecordSets are DNS resource records.
RRS are owned by a google.cloud.dns.zone.ManagedZone instance.
See
https://cloud.google.com/dns/api/v1/resourceRecordSets
Parameters
name ( str ) – the name of the record set.
record_type ( str ) – the RR type of the zone.
ttl ( int ) – TTL (in seconds) for caching the record sets.
rrdatas ( list of string ) – one or more lines containing the resource data.
zone ( google.cloud.dns.zone.ManagedZone ) – A zone which holds one or more record sets.
classmethod from_api_repr(resource, zone)
Factory: construct a record set given its API representation
Parameters
resource ( dict ) – record sets representation returned from the API
zone ( google.cloud.dns.zone.ManagedZone ) – A zone which holds one or more record sets.
Return type
google.cloud.dns.zone.ResourceRecordSet
Returns
RRS parsed from resource .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
