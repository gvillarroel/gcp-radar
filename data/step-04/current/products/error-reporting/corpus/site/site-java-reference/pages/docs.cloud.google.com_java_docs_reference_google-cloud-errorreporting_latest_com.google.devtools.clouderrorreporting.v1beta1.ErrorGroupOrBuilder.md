---
title: "Interface ErrorGroupOrBuilder (0.209.0-beta) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1.ErrorGroupOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1.ErrorGroupOrBuilder
  title: "Interface ErrorGroupOrBuilder (0.209.0-beta) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
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
Interface ErrorGroupOrBuilder (0.209.0-beta)
Stay organized with collections
Save and categorize content based on your preferences.
0.209.0-beta (latest)
0.208.0-beta
0.206.0-beta
0.204.0-beta
0.203.0-beta
0.202.0-beta
0.201.0-beta
0.199.0-beta
0.197.0-beta
0.196.0-beta
0.195.0-beta
0.194.0-beta
0.193.0-beta
0.191.0-beta
0.189.0-beta
0.188.0-beta
0.185.0-beta
0.184.0-beta
0.183.0-beta
0.181.0-beta
0.180.0-beta
0.179.0-beta
0.178.0-beta
0.177.0-beta
0.176.0-beta
0.175.0-beta
0.174.0-beta
0.173.0-beta
0.172.0-beta
0.170.0-beta
0.169.0-beta
0.168.0-beta
0.167.0-beta
0.166.0-beta
0.165.0-beta
0.164.0-beta
0.163.0-beta
0.162.0-beta
0.161.0-beta
0.160.0-beta
0.158.0-beta
0.157.0-beta
0.156.0-beta
0.155.0-beta
0.154.0-beta
0.153.0-beta
0.152.0-beta
0.151.0-beta
0.150.0-beta
0.149.0-beta
0.148.0-beta
0.145.0-beta
0.144.0-beta
0.143.0-beta
0.142.0-beta
0.141.0-beta
0.140.0-beta
0.139.0-beta
0.138.0-beta
0.137.0-beta
0.136.0-beta
0.135.0-beta
0.134.0-beta
0.133.0-beta
0.132.0-beta
0.130.0-beta
0.129.0-beta
0.128.0-beta
0.127.0-beta
0.126.0-beta
0.125.0-beta
0.124.15-beta
0.123.4-beta
0.122.23-beta
public interface ErrorGroupOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getGroupId()
public abstract String getGroupId ()
An opaque identifier of the group. This field is assigned by the Error
Reporting system and always populated.
In the group resource name, the group_id is a unique identifier for a
particular error group. The identifier is derived from key parts of the
error-log content and is treated as Service Data. For information about
how Service Data is handled, see Google Cloud Privacy
Notice .
string group_id = 2;
Returns
Type
Description
String
The groupId.
getGroupIdBytes()
public abstract ByteString getGroupIdBytes ()
An opaque identifier of the group. This field is assigned by the Error
Reporting system and always populated.
In the group resource name, the group_id is a unique identifier for a
particular error group. The identifier is derived from key parts of the
error-log content and is treated as Service Data. For information about
how Service Data is handled, see Google Cloud Privacy
Notice .
string group_id = 2;
Returns
Type
Description
ByteString
The bytes for groupId.
getName()
public abstract String getName ()
The group resource name.
Written as projects/{projectID}/groups/{group_id} or
projects/{projectID}/locations/{location}/groups/{group_id}
Examples: projects/my-project-123/groups/my-group ,
projects/my-project-123/locations/us-central1/groups/my-group
In the group resource name, the group_id is a unique identifier for a
particular error group. The identifier is derived from key parts of the
error-log content and is treated as Service Data. For information about
how Service Data is handled, see Google Cloud Privacy
Notice .
For a list of supported locations, see Supported
Regions . global is
the default when unspecified.
string name = 1;
Returns
Type
Description
String
The name.
getNameBytes()
public abstract ByteString getNameBytes ()
The group resource name.
Written as projects/{projectID}/groups/{group_id} or
projects/{projectID}/locations/{location}/groups/{group_id}
Examples: projects/my-project-123/groups/my-group ,
projects/my-project-123/locations/us-central1/groups/my-group
In the group resource name, the group_id is a unique identifier for a
particular error group. The identifier is derived from key parts of the
error-log content and is treated as Service Data. For information about
how Service Data is handled, see Google Cloud Privacy
Notice .
For a list of supported locations, see Supported
Regions . global is
the default when unspecified.
string name = 1;
Returns
Type
Description
ByteString
The bytes for name.
getResolutionStatus()
public abstract ResolutionStatus getResolutionStatus ()
Error group's resolution status.
An unspecified resolution status will be interpreted as OPEN
.google.devtools.clouderrorreporting.v1beta1.ResolutionStatus resolution_status = 5;
Returns
Type
Description
ResolutionStatus
The resolutionStatus.
getResolutionStatusValue()
public abstract int getResolutionStatusValue ()
Error group's resolution status.
An unspecified resolution status will be interpreted as OPEN
.google.devtools.clouderrorreporting.v1beta1.ResolutionStatus resolution_status = 5;
Returns
Type
Description
int
The enum numeric value on the wire for resolutionStatus.
getTrackingIssues(int index)
public abstract TrackingIssue getTrackingIssues ( int index )
Associated tracking issues.
repeated .google.devtools.clouderrorreporting.v1beta1.TrackingIssue tracking_issues = 3;
Parameter
Name
Description
index
int
Returns
Type
Description
TrackingIssue
getTrackingIssuesCount()
public abstract int getTrackingIssuesCount ()
Associated tracking issues.
repeated .google.devtools.clouderrorreporting.v1beta1.TrackingIssue tracking_issues = 3;
Returns
Type
Description
int
getTrackingIssuesList()
public abstract List<TrackingIssue> getTrackingIssuesList ()
Associated tracking issues.
repeated .google.devtools.clouderrorreporting.v1beta1.TrackingIssue tracking_issues = 3;
Returns
Type
Description
List < TrackingIssue >
getTrackingIssuesOrBuilder(int index)
public abstract TrackingIssueOrBuilder getTrackingIssuesOrBuilder ( int index )
Associated tracking issues.
repeated .google.devtools.clouderrorreporting.v1beta1.TrackingIssue tracking_issues = 3;
Parameter
Name
Description
index
int
Returns
Type
Description
TrackingIssueOrBuilder
getTrackingIssuesOrBuilderList()
public abstract List < ? extends TrackingIssueOrBuilder > getTrackingIssuesOrBuilderList ()
Associated tracking issues.
repeated .google.devtools.clouderrorreporting.v1beta1.TrackingIssue tracking_issues = 3;
Returns
Type
Description
List < ? extends com.google.devtools.clouderrorreporting.v1beta1.TrackingIssueOrBuilder >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
