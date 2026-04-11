---
title: "Package Methods (0.36.1) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/dns/latest/summary_method
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/dns/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/dns/latest/summary_method
  title: "Package Methods (0.36.1) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Package Methods (0.36.1)
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
Summary of entries of Methods for dns.
google.cloud.dns.changes.Changes.add_record_set
add_record_set ( record_set )
Append a record set to the 'additions' for the change set.
See more: google.cloud.dns.changes.Changes.add_record_set
google.cloud.dns.changes.Changes.create
create ( client = None )
API call: create the change set via a POST request.
See more: google.cloud.dns.changes.Changes.create
google.cloud.dns.changes.Changes.delete_record_set
delete_record_set ( record_set )
Append a record set to the 'deletions' for the change set.
See more: google.cloud.dns.changes.Changes.delete_record_set
google.cloud.dns.changes.Changes.exists
exists ( client = None )
API call: test for the existence of the change set via a GET request.
See more: google.cloud.dns.changes.Changes.exists
google.cloud.dns.changes.Changes.from_api_repr
from_api_repr ( resource , zone )
Factory: construct a change set given its API representation
.
See more: google.cloud.dns.changes.Changes.from_api_repr
google.cloud.dns.changes.Changes.reload
reload ( client = None )
API call: refresh zone properties via a GET request.
See more: google.cloud.dns.changes.Changes.reload
google.cloud.dns.client.Client.list_zones
list_zones ( max_results = None , page_token = None )
List zones for the project associated with this client.
See more: google.cloud.dns.client.Client.list_zones
google.cloud.dns.client.Client.quotas
quotas ()
Return DNS quotas for the project associated with this client.
See more: google.cloud.dns.client.Client.quotas
google.cloud.dns.client.Client.zone
zone ( name , dns_name = None , description = None )
Construct a zone bound to this client.
See more: google.cloud.dns.client.Client.zone
google.cloud.dns.resource_record_set.ResourceRecordSet.from_api_repr
from_api_repr ( resource , zone )
Factory: construct a record set given its API representation
.
See more: google.cloud.dns.resource_record_set.ResourceRecordSet.from_api_repr
google.cloud.dns.zone.ManagedZone.changes
changes ()
Construct a change set bound to this zone.
See more: google.cloud.dns.zone.ManagedZone.changes
google.cloud.dns.zone.ManagedZone.create
create ( client = None )
API call: create the zone via a PUT request.
See more: google.cloud.dns.zone.ManagedZone.create
google.cloud.dns.zone.ManagedZone.delete
delete ( client = None )
API call: delete the zone via a DELETE request.
See more: google.cloud.dns.zone.ManagedZone.delete
google.cloud.dns.zone.ManagedZone.exists
exists ( client = None )
API call: test for the existence of the zone via a GET request.
See more: google.cloud.dns.zone.ManagedZone.exists
google.cloud.dns.zone.ManagedZone.from_api_repr
from_api_repr ( resource , client )
Factory: construct a zone given its API representation
.
See more: google.cloud.dns.zone.ManagedZone.from_api_repr
google.cloud.dns.zone.ManagedZone.list_changes
list_changes ( max_results = None , page_token = None , client = None )
List change sets for this zone.
See more: google.cloud.dns.zone.ManagedZone.list_changes
google.cloud.dns.zone.ManagedZone.list_resource_record_sets
list_resource_record_sets ( max_results = None , page_token = None , client = None )
List resource record sets for this zone.
See more: google.cloud.dns.zone.ManagedZone.list_resource_record_sets
google.cloud.dns.zone.ManagedZone.reload
reload ( client = None )
API call: refresh zone properties via a GET request.
See more: google.cloud.dns.zone.ManagedZone.reload
google.cloud.dns.zone.ManagedZone.resource_record_set
resource_record_set ( name , record_type , ttl , rrdatas )
Construct a resource record set bound to this zone.
See more: google.cloud.dns.zone.ManagedZone.resource_record_set
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
