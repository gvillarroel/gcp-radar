---
title: "Managed Zones \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/dns/latest/zone
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/dns/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/dns/latest/zone
  title: "Managed Zones \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Managed Zones
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
Define API ManagedZones.
class google.cloud.dns.zone.ManagedZone(name, dns_name=None, client=None, description=None)
Bases: object
ManagedZones are containers for DNS resource records.
See
https://cloud.google.com/dns/api/v1/managedZones
Parameters
name ( str ) – the name of the zone
dns_name ( str ) – (Optional) the DNS name of the zone. If not passed, then calls to
create() will fail.
client ( google.cloud.dns.client.Client ) – A client which holds credentials and project configuration
for the zone (which requires a project).
description ( str ) – (Optional) the description for the zone. If not passed, defaults to
the value of ‘dns_name’.
changes()
Construct a change set bound to this zone.
Return type
google.cloud.dns.changes.Changes
Returns
a new Changes instance
create(client=None)
API call: create the zone via a PUT request
See
https://cloud.google.com/dns/api/v1/managedZones/create
Parameters
client ( google.cloud.dns.client.Client ) – (Optional) the client to use. If not passed, falls back to the
client stored on the current zone.
property created()
Datetime at which the zone was created.
Return type
datetime.datetime , or NoneType
Returns
the creation time (None until set from the server).
delete(client=None)
API call: delete the zone via a DELETE request
See
https://cloud.google.com/dns/api/v1/managedZones/delete
Parameters
client ( google.cloud.dns.client.Client ) – (Optional) the client to use. If not passed, falls back to the
client stored on the current zone.
property description()
Description of the zone.
Return type
str, or NoneType
Returns
The description as set by the user, or None (the default).
exists(client=None)
API call: test for the existence of the zone via a GET request
See
https://cloud.google.com/dns/api/v1/managedZones/get
Parameters
client ( google.cloud.dns.client.Client ) – (Optional) the client to use. If not passed, falls back to the
client stored on the current zone.
Return type
bool
Returns
Boolean indicating existence of the managed zone.
classmethod from_api_repr(resource, client)
Factory: construct a zone given its API representation
Parameters
resource ( dict ) – zone resource representation returned from the API
client ( google.cloud.dns.client.Client ) – Client which holds credentials and project
configuration for the zone.
Return type
google.cloud.dns.zone.ManagedZone
Returns
Zone parsed from resource .
list_changes(max_results=None, page_token=None, client=None)
List change sets for this zone.
See
https://cloud.google.com/dns/api/v1/resourceRecordSets/list
Parameters
max_results ( int ) – Optional. The maximum number of change sets
to return. Defaults to a sensible value set by the API.
page_token ( str ) – Optional. If present, return the next batch of
change sets, using the value, which must correspond to the
nextPageToken value returned in the previous response.
Deprecated: use the pages property of the returned iterator
instead of manually passing the token.
client ( google.cloud.dns.client.Client ) – (Optional) the client to use. If not passed, falls back to the
client stored on the current zone.
Return type
Iterator
Returns
Iterator of Changes
belonging to this zone.
list_resource_record_sets(max_results=None, page_token=None, client=None)
List resource record sets for this zone.
See
https://cloud.google.com/dns/api/v1/resourceRecordSets/list
Parameters
max_results ( int ) – Optional. The maximum number of resource record
sets to return. Defaults to a sensible value
set by the API.
page_token ( str ) – Optional. If present, return the next batch of
resource record sets, using the value, which must correspond to
the nextPageToken value returned in the previous response.
Deprecated: use the pages property of the returned iterator
instead of manually passing the token.
client ( google.cloud.dns.client.Client ) – (Optional) the client to use. If not passed, falls back to the
client stored on the current zone.
Return type
Iterator
Returns
Iterator of ResourceRecordSet
belonging to this zone.
property name_server_set()
Named set of DNS name servers that all host the same ManagedZones.
Most users will leave this blank.
See
https://cloud.google.com/dns/api/v1/managedZones#nameServerSet
Return type
str, or NoneType
Returns
The name as set by the user, or None (the default).
property name_servers()
Datetime at which the zone was created.
Return type
list of strings, or NoneType .
Returns
the assigned name servers (None until set from the server).
property path()
URL path for the zone’s APIs.
Return type
str
Returns
the path based on project and dataste name.
property project()
Project bound to the zone.
Return type
str
Returns
the project (derived from the client).
reload(client=None)
API call: refresh zone properties via a GET request
See
https://cloud.google.com/dns/api/v1/managedZones/get
Parameters
client ( google.cloud.dns.client.Client ) – (Optional) the client to use. If not passed, falls back to the
client stored on the current zone.
resource_record_set(name, record_type, ttl, rrdatas)
Construct a resource record set bound to this zone.
Parameters
name ( str ) – Name of the record set.
record_type ( str ) – RR type
ttl ( int ) – TTL for the RR, in seconds
rrdatas ( list of string ) – resource data for the RR
Return type
google.cloud.dns.resource_record_set.ResourceRecordSet
Returns
a new ResourceRecordSet instance
property zone_id()
ID for the zone resource.
Return type
str, or NoneType
Returns
the ID (None until set from the server).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
