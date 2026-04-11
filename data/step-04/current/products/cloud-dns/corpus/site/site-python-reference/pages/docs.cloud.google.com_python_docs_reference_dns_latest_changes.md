---
title: "Change Sets \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/dns/latest/changes
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/dns/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/dns/latest/changes
  title: "Change Sets \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Change Sets
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
class google.cloud.dns.changes.Changes(zone)
Bases: object
Changes are bundled additions / deletions of DNS resource records.
Changes are owned by a google.cloud.dns.zone.ManagedZone instance.
See
https://cloud.google.com/dns/api/v1/changes
Parameters
zone ( google.cloud.dns.zone.ManagedZone ) – A zone which holds one or more record sets.
add_record_set(record_set)
Append a record set to the ‘additions’ for the change set.
Parameters
record_set ( google.cloud.dns.resource_record_set.ResourceRecordSet ) – the record set to append.
Raises
ValueError if record_set is not of the required type.
property additions()
Resource record sets to be added to the zone.
Return type
sequence of
google.cloud.dns.resource_record_set.ResourceRecordSet .
Returns
record sets appended via add_record_set() .
create(client=None)
API call: create the change set via a POST request.
See
https://cloud.google.com/dns/api/v1/changes/create
Parameters
client ( google.cloud.dns.client.Client ) – (Optional) the client to use. If not passed, falls back to the
client stored on the current zone.
delete_record_set(record_set)
Append a record set to the ‘deletions’ for the change set.
Parameters
record_set ( google.cloud.dns.resource_record_set.ResourceRecordSet ) – the record set to append.
Raises
ValueError if record_set is not of the required type.
property deletions()
Resource record sets to be deleted from the zone.
Return type
sequence of
google.cloud.dns.resource_record_set.ResourceRecordSet .
Returns
record sets appended via delete_record_set() .
exists(client=None)
API call: test for the existence of the change set via a GET request.
See
https://cloud.google.com/dns/api/v1/changes/get
Parameters
client ( google.cloud.dns.client.Client ) – (Optional) the client to use. If not passed, falls back to the
client stored on the current zone.
Return type
bool
Returns
Boolean indicating existence of the changes.
classmethod from_api_repr(resource, zone)
Factory: construct a change set given its API representation
Parameters
resource ( dict ) – change set representation returned from the API.
zone ( google.cloud.dns.zone.ManagedZone ) – A zone which holds zero or more change sets.
Return type
google.cloud.dns.changes.Changes
Returns
RRS parsed from resource .
property name()
Name of the change set.
Return type
str or NoneType
Returns
Name, as set by the back-end, or None.
property path()
URL path for change set APIs.
Return type
str
Returns
the path based on project, zone, and change set names.
reload(client=None)
API call: refresh zone properties via a GET request.
See
https://cloud.google.com/dns/api/v1/changes/get
Parameters
client ( google.cloud.dns.client.Client ) – (Optional) the client to use. If not passed, falls back to the
client stored on the current zone.
property started()
Time when the change set was started.
Return type
datetime.datetime or NoneType
Returns
Time, as set by the back-end, or None.
property status()
Status of the change set.
Return type
str or NoneType
Returns
Status, as set by the back-end, or None.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
