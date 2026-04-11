---
title: "Interface Dns (2.86.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.Dns
  title: "Interface Dns (2.86.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Interface Dns (2.86.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.86.0 (latest)
2.85.0
2.83.0
2.81.0
2.80.0
2.79.0
2.78.0
2.76.0
2.74.0
2.73.0
2.72.0
2.71.0
2.70.0
2.68.0
2.66.0
2.65.0
2.62.0
2.61.0
2.60.0
2.58.0
2.57.0
2.56.0
2.55.0
2.54.0
2.53.0
2.52.0
2.51.0
2.50.0
2.49.0
2.47.0
2.46.0
2.45.0
2.44.0
2.43.0
2.42.0
2.41.0
2.40.0
2.39.0
2.38.0
2.37.0
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.0
2.28.0
2.27.0
2.26.0
2.25.0
2.22.0
2.21.0
2.20.0
2.19.0
2.18.0
2.17.0
2.16.0
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.10.0
2.9.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.0
2.2.0
2.1.8
2.0.9
public interface Dns extends Service<DnsOptions>
An interface for the Google Cloud DNS service.
See Also: Google Cloud DNS
Implements
com.google.cloud.Service<com.google.cloud.dns.DnsOptions>
Methods
applyChangeRequest(String zoneName, ChangeRequestInfo changeRequest, Dns.ChangeRequestOption[] options)
public abstract ChangeRequest applyChangeRequest ( String zoneName , ChangeRequestInfo changeRequest , Dns . ChangeRequestOption [] options )
Submits a change request for the specified zone. The returned object contains the following
read-only fields supplied by the server: id, start time and status. time, id, and list of name
servers. The fields to be returned can be selected by ChangeRequestOption s.
See Also: Cloud DNS Changes: create
Parameters
Name
Description
zoneName
String
changeRequest
ChangeRequestInfo
options
ChangeRequestOption []
Returns
Type
Description
ChangeRequest
the new ChangeRequest
batch()
public abstract DnsBatch batch ()
Creates a new empty batch for grouping multiple service calls in one underlying RPC call.
Returns
Type
Description
DnsBatch
create(ZoneInfo zoneInfo, Dns.ZoneOption[] options)
public abstract Zone create ( ZoneInfo zoneInfo , Dns . ZoneOption [] options )
Creates a new zone.
Returns Zone object representing the new zone's information. In addition to the
name, dns name and description (supplied by the user within the zoneInfo parameter),
the returned object can include the following read-only fields supplied by the server: creation
time, id, and list of name servers. The returned fields can be optionally restricted by
specifying ZoneOption s.
See Also: Cloud DNS Managed Zones: create
Parameters
Name
Description
zoneInfo
ZoneInfo
options
ZoneOption []
Returns
Type
Description
Zone
delete(String zoneName)
public abstract boolean delete ( String zoneName )
Deletes an existing zone identified by name. Returns true if the zone was successfully
deleted and false otherwise.
See Also: Cloud DNS Managed Zones: delete
Parameter
Name
Description
zoneName
String
Returns
Type
Description
boolean
true if zone was found and deleted and false otherwise
getChangeRequest(String zoneName, String changeRequestId, Dns.ChangeRequestOption[] options)
public abstract ChangeRequest getChangeRequest ( String zoneName , String changeRequestId , Dns . ChangeRequestOption [] options )
Retrieves updated information about a change request previously submitted for a zone identified
by ID. Returns null if the request cannot be found and throws an exception if the zone
does not exist. The fields to be returned using can be specified using ChangeRequestOption s.
See Also: Cloud DNS Chages: get
Parameters
Name
Description
zoneName
String
changeRequestId
String
options
ChangeRequestOption []
Returns
Type
Description
ChangeRequest
getProject(Dns.ProjectOption[] fields)
public abstract ProjectInfo getProject ( Dns . ProjectOption [] fields )
Retrieves the information about the current project. The returned fields can be optionally
restricted by specifying ProjectOption s.
See Also: Cloud DNS Projects: get
Parameter
Name
Description
fields
ProjectOption []
Returns
Type
Description
ProjectInfo
getZone(String zoneName, Dns.ZoneOption[] options)
public abstract Zone getZone ( String zoneName , Dns . ZoneOption [] options )
Returns the zone by the specified zone name. Returns null if the zone is not found. The
returned fields can be optionally restricted by specifying ZoneOption s.
See Also: Cloud DNS Managed Zones: get
Parameters
Name
Description
zoneName
String
options
ZoneOption []
Returns
Type
Description
Zone
listChangeRequests(String zoneName, Dns.ChangeRequestListOption[] options)
public abstract Page<ChangeRequest> listChangeRequests ( String zoneName , Dns . ChangeRequestListOption [] options )
Lists the change requests for the zone identified by name that were submitted to the service.
The sorting order for changes (based on when they were received by the server), fields to be
returned, page size and page token can be specified using ChangeRequestListOption s.
See Also: Cloud DNS Chages: list
Parameters
Name
Description
zoneName
String
options
ChangeRequestListOption []
Returns
Type
Description
Page < ChangeRequest >
A page of change requests
listRecordSets(String zoneName, Dns.RecordSetListOption[] options)
public abstract Page<RecordSet> listRecordSets ( String zoneName , Dns . RecordSetListOption [] options )
Lists the record sets in the zone identified by name.
The fields to be returned, page size and page tokens can be specified using RecordSetListOption s.
See Also: Cloud DNS ResourceRecordSets: list
Parameters
Name
Description
zoneName
String
options
RecordSetListOption []
Returns
Type
Description
Page < RecordSet >
listZones(Dns.ZoneListOption[] options)
public abstract Page<Zone> listZones ( Dns . ZoneListOption [] options )
Lists the zones inside the project.
This method returns zones in an unspecified order. New zones do not necessarily appear at
the end of the list. Use ZoneListOption to restrict the listing to a domain name, set
page size, and set page token.
See Also: Cloud DNS Managed Zones: list
Parameter
Name
Description
options
ZoneListOption []
Returns
Type
Description
Page < Zone >
a page of zones
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
