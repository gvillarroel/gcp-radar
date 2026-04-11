---
title: "Class DnsBatch (2.86.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.DnsBatch
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.DnsBatch
  title: "Class DnsBatch (2.86.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
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
Class DnsBatch (2.86.0)
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
public class DnsBatch
A batch of operations to be submitted to Google Cloud DNS using a single RPC request.
Inheritance
java.lang.Object >
DnsBatch
Inherited Members
Object.clone()
Object.equals(Object)
Object.finalize()
Object.getClass()
Object.hashCode()
Object.notify()
Object.notifyAll()
Object.toString()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Methods
applyChangeRequest(String zoneName, ChangeRequestInfo changeRequest, Dns.ChangeRequestOption[] options)
public DnsBatchResult<ChangeRequest> applyChangeRequest ( String zoneName , ChangeRequestInfo changeRequest , Dns . ChangeRequestOption [] options )
Adds a request representing the "apply change request" operation to the zone specified by
zoneName to this batch. The options can be used to restrict the fields returned
in the same way as for Dns#applyChangeRequest(String, ChangeRequestInfo,
Dns.ChangeRequestOption...) . Calling DnsBatchResult#get() on the return value yields
the created ChangeRequest if successful or throws a DnsException if the
operation failed or the zone does not exist.
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
DnsBatchResult < ChangeRequest >
createZone(ZoneInfo zone, Dns.ZoneOption[] options)
public DnsBatchResult<Zone> createZone ( ZoneInfo zone , Dns . ZoneOption [] options )
Adds a request representing the "create zone" operation to this batch. The options can
be used to restrict the fields returned in the same way as for Dns#create(ZoneInfo,
Dns.ZoneOption...) . Calling DnsBatchResult#get() on the return value yields the
created Zone if successful and throws a DnsException otherwise.
Parameters
Name
Description
zone
ZoneInfo
options
ZoneOption []
Returns
Type
Description
DnsBatchResult < Zone >
deleteZone(String zoneName)
public DnsBatchResult<Boolean> deleteZone ( String zoneName )
Adds a request representing the "delete zone" operation to this batch. Calling DnsBatchResult#get() on the return value yields true upon successful deletion,
false if the zone was not found, or throws a DnsException if the operation failed.
Parameter
Name
Description
zoneName
String
Returns
Type
Description
DnsBatchResult < Boolean >
getChangeRequest(String zoneName, String changeRequestId, Dns.ChangeRequestOption[] options)
public DnsBatchResult<ChangeRequest> getChangeRequest ( String zoneName , String changeRequestId , Dns . ChangeRequestOption [] options )
Adds a request representing the "get change request" operation for the zone specified by
zoneName to this batch. The options can be used to restrict the fields returned in the
same way as for Dns#getChangeRequest(String, String, Dns.ChangeRequestOption...) .
Calling DnsBatchResult#get() on the return value yields the requested ChangeRequest if successful, null if the change request does not exist, or throws a
DnsException if the operation failed or the zone does not exist.
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
DnsBatchResult < ChangeRequest >
getProject(Dns.ProjectOption[] options)
public DnsBatchResult<ProjectInfo> getProject ( Dns . ProjectOption [] options )
Adds a request representing the "get project" operation to this batch. The options can
be used to restrict the fields returned in the same way as for Dns#getProject(Dns.ProjectOption...) . Calling DnsBatchResult#get() on the return value
yields the created ProjectInfo if successful and throws a DnsException if the
operation failed.
Parameter
Name
Description
options
ProjectOption []
Returns
Type
Description
DnsBatchResult < ProjectInfo >
getZone(String zoneName, Dns.ZoneOption[] options)
public DnsBatchResult<Zone> getZone ( String zoneName , Dns . ZoneOption [] options )
Adds a request representing the "get zone" operation to this batch. The options can be
used to restrict the fields returned in the same way as for Dns#getZone(String,
Dns.ZoneOption...) . Calling DnsBatchResult#get() on the return value yields the
requested Zone if successful, null if no such zone exists, or throws a DnsException if the operation failed.
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
DnsBatchResult < Zone >
listChangeRequests(String zoneName, Dns.ChangeRequestListOption[] options)
public DnsBatchResult<Page<ChangeRequest> > listChangeRequests ( String zoneName , Dns . ChangeRequestListOption [] options )
Adds a request representing the "list change requests" operation in the zone specified by
zoneName to this batch. The options can be used to restrict the fields returned
or provide page size limits in the same way as for Dns#listChangeRequests(String,
Dns.ChangeRequestListOption...) . Calling DnsBatchResult#get() on the return value
yields a page of change requests if successful and throws a DnsException if the
operation failed or the zone does not exist.
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
DnsBatchResult < Page < ChangeRequest >>
listRecordSets(String zoneName, Dns.RecordSetListOption[] options)
public DnsBatchResult<Page<RecordSet> > listRecordSets ( String zoneName , Dns . RecordSetListOption [] options )
Adds a request representing the "list record sets" operation in the zone specified by
zoneName to this batch. The options can be used to restrict the fields returned or
provide page size limits in the same way as for Dns#listRecordSets(String,
Dns.RecordSetListOption...) . Calling DnsBatchResult#get() on the return value yields a
page of record sets if successful and throws a DnsException if the operation failed or
the zone does not exist.
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
DnsBatchResult < Page < RecordSet >>
listZones(Dns.ZoneListOption[] options)
public DnsBatchResult<Page<Zone> > listZones ( Dns . ZoneListOption [] options )
Adds a request representing the "list zones" operation to this batch. The options can
be used to restrict the fields returned or provide page size limits in the same way as for
Dns#listZones(Dns.ZoneListOption...) . Calling DnsBatchResult#get() on the
return value yields a page of zones if successful and throws a DnsException otherwise.
Parameter
Name
Description
options
ZoneListOption []
Returns
Type
Description
DnsBatchResult < Page < Zone >>
submit()
public void submit ()
Submits this batch for processing using a single RPC request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
