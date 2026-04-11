---
title: "Class ManagedZone (0.36.1) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/dns/latest/google.cloud.dns.zone.ManagedZone
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/dns/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/dns/latest/google.cloud.dns.zone.ManagedZone
  title: "Class ManagedZone (0.36.1) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class ManagedZone (0.36.1)
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
ManagedZone ( name , dns_name = None , client = None , description = None )
ManagedZones are containers for DNS resource records.
See
https://cloud.google.com/dns/api/v1/managedZones
Parameters
Name
Description
name
str
the name of the zone
dns_name
str
(Optional) the DNS name of the zone. If not passed, then calls to create will fail.
client
Client
A client which holds credentials and project configuration for the zone (which requires a project).
description
str
(Optional) the description for the zone. If not passed, defaults to the value of 'dns_name'.
Properties
created
Datetime at which the zone was created.
Returns
Type
Description
datetime.datetime , or NoneType
the creation time (None until set from the server).
description
Description of the zone.
Returns
Type
Description
str, or NoneType
The description as set by the user, or None (the default).
name_server_set
Named set of DNS name servers that all host the same ManagedZones.
Most users will leave this blank.
See
https://cloud.google.com/dns/api/v1/managedZones#nameServerSet
Returns
Type
Description
str, or NoneType
The name as set by the user, or None (the default).
name_servers
Datetime at which the zone was created.
Returns
Type
Description
list of strings, or NoneType .
the assigned name servers (None until set from the server).
path
URL path for the zone's APIs.
Returns
Type
Description
str
the path based on project and dataste name.
project
Project bound to the zone.
Returns
Type
Description
str
the project (derived from the client).
zone_id
ID for the zone resource.
Returns
Type
Description
str, or NoneType
the ID (None until set from the server).
Methods
changes
changes ()
Construct a change set bound to this zone.
Returns
Type
Description
Changes
a new Changes instance
create
create ( client = None )
API call: create the zone via a PUT request
See
https://cloud.google.com/dns/api/v1/managedZones/create
Parameter
Name
Description
client
Client
(Optional) the client to use. If not passed, falls back to the client stored on the current zone.
delete
delete ( client = None )
API call: delete the zone via a DELETE request
See
https://cloud.google.com/dns/api/v1/managedZones/delete
Parameter
Name
Description
client
Client
(Optional) the client to use. If not passed, falls back to the client stored on the current zone.
exists
exists ( client = None )
API call: test for the existence of the zone via a GET request
See
https://cloud.google.com/dns/api/v1/managedZones/get
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
Boolean indicating existence of the managed zone.
from_api_repr
from_api_repr ( resource , client )
Factory: construct a zone given its API representation
Parameters
Name
Description
resource
dict
zone resource representation returned from the API
client
Client
Client which holds credentials and project configuration for the zone.
Returns
Type
Description
ManagedZone
Zone parsed from resource .
list_changes
list_changes ( max_results = None , page_token = None , client = None )
List change sets for this zone.
See
https://cloud.google.com/dns/api/v1/resourceRecordSets/list
Parameters
Name
Description
max_results
int
Optional. The maximum number of change sets to return. Defaults to a sensible value set by the API.
page_token
str
Optional. If present, return the next batch of change sets, using the value, which must correspond to the nextPageToken value returned in the previous response. Deprecated: use the pages property of the returned iterator instead of manually passing the token.
client
Client
(Optional) the client to use. If not passed, falls back to the client stored on the current zone.
Returns
Type
Description
google.api_core.page_iterator.Iterator
Iterator of .changes.Changes belonging to this zone.
list_resource_record_sets
list_resource_record_sets ( max_results = None , page_token = None , client = None )
List resource record sets for this zone.
See
https://cloud.google.com/dns/api/v1/resourceRecordSets/list
Parameters
Name
Description
max_results
int
Optional. The maximum number of resource record sets to return. Defaults to a sensible value set by the API.
page_token
str
Optional. If present, return the next batch of resource record sets, using the value, which must correspond to the nextPageToken value returned in the previous response. Deprecated: use the pages property of the returned iterator instead of manually passing the token.
client
Client
(Optional) the client to use. If not passed, falls back to the client stored on the current zone.
Returns
Type
Description
google.api_core.page_iterator.Iterator
Iterator of .resource_record_set.ResourceRecordSet belonging to this zone.
reload
reload ( client = None )
API call: refresh zone properties via a GET request
See
https://cloud.google.com/dns/api/v1/managedZones/get
Parameter
Name
Description
client
Client
(Optional) the client to use. If not passed, falls back to the client stored on the current zone.
resource_record_set
resource_record_set ( name , record_type , ttl , rrdatas )
Construct a resource record set bound to this zone.
Parameters
Name
Description
name
str
Name of the record set.
record_type
str
RR type
ttl
int
TTL for the RR, in seconds
rrdatas
list of string
resource data for the RR
Returns
Type
Description
ResourceRecordSet
a new ResourceRecordSet instance
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
