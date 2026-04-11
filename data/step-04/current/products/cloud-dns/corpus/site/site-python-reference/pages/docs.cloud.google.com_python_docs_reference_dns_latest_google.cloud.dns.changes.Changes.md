---
title: "Class Changes (0.36.1) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/dns/latest/google.cloud.dns.changes.Changes
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/dns/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/dns/latest/google.cloud.dns.changes.Changes
  title: "Class Changes (0.36.1) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class Changes (0.36.1)
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
Changes ( zone )
Changes are bundled additions / deletions of DNS resource records.
Changes are owned by a xref_ManagedZone instance.
See
https://cloud.google.com/dns/api/v1/changes
Parameter
Name
Description
zone
ManagedZone
A zone which holds one or more record sets.
Properties
additions
Resource record sets to be added to the zone.
Returns
Type
Description
sequence of ResourceRecordSet .
record sets appended via add_record_set .
deletions
Resource record sets to be deleted from the zone.
Returns
Type
Description
sequence of ResourceRecordSet .
record sets appended via delete_record_set .
name
Name of the change set.
Returns
Type
Description
str or NoneType
Name, as set by the back-end, or None.
path
URL path for change set APIs.
Returns
Type
Description
str
the path based on project, zone, and change set names.
started
Time when the change set was started.
Returns
Type
Description
datetime.datetime or NoneType
Time, as set by the back-end, or None.
status
Status of the change set.
Returns
Type
Description
str or NoneType
Status, as set by the back-end, or None.
Methods
add_record_set
add_record_set ( record_set )
Append a record set to the 'additions' for the change set.
Parameter
Name
Description
record_set
ResourceRecordSet
the record set to append.
Exceptions
Type
Description
`ValueError
if record_set is not of the required type.
create
create ( client = None )
API call: create the change set via a POST request.
See
https://cloud.google.com/dns/api/v1/changes/create
Parameter
Name
Description
client
Client
(Optional) the client to use. If not passed, falls back to the client stored on the current zone.
delete_record_set
delete_record_set ( record_set )
Append a record set to the 'deletions' for the change set.
Parameter
Name
Description
record_set
ResourceRecordSet
the record set to append.
Exceptions
Type
Description
`ValueError
if record_set is not of the required type.
exists
exists ( client = None )
API call: test for the existence of the change set via a GET request.
See
https://cloud.google.com/dns/api/v1/changes/get
Parameter
Name
Description
client
Client
(Optional) the client to use. If not passed, falls back to the client stored on the current zone.
Returns
Type
Description
bool
Boolean indicating existence of the changes.
from_api_repr
from_api_repr ( resource , zone )
Factory: construct a change set given its API representation
Parameters
Name
Description
resource
dict
change set representation returned from the API.
zone
ManagedZone
A zone which holds zero or more change sets.
Returns
Type
Description
Changes
RRS parsed from resource .
reload
reload ( client = None )
API call: refresh zone properties via a GET request.
See
https://cloud.google.com/dns/api/v1/changes/get
Parameter
Name
Description
client
Client
(Optional) the client to use. If not passed, falls back to the client stored on the current zone.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
