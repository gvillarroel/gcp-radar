---
title: "Class ChangeRequestInfo (2.86.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.ChangeRequestInfo
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.ChangeRequestInfo
  title: "Class ChangeRequestInfo (2.86.0) \_|\_ Java client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class ChangeRequestInfo (2.86.0)
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
public class ChangeRequestInfo implements Serializable
A class representing an atomic update to a collection of RecordSet s within a
Zone .
See Also: Google Cloud DNS documentation
Inheritance
Object >
ChangeRequestInfo
Implements
Serializable
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
Static Methods
newBuilder()
public static ChangeRequestInfo . Builder newBuilder ()
Returns an empty builder for the ChangeRequestInfo class.
Returns
Type
Description
ChangeRequestInfo.Builder
Methods
equals(Object obj)
public boolean equals ( Object obj )
Parameter
Name
Description
obj
Object
Returns
Type
Description
boolean
Overrides
Object.equals(Object)
getAdditions()
public List<RecordSet> getAdditions ()
Returns the list of RecordSet s to be added to the zone upon submitting this change
request.
Returns
Type
Description
List < RecordSet >
getDeletions()
public List<RecordSet> getDeletions ()
Returns the list of RecordSet s to be deleted from the zone upon submitting this change
request.
Returns
Type
Description
List < RecordSet >
getGeneratedId()
public String getGeneratedId ()
Returns the service-generated id for this change request.
Returns
Type
Description
String
getStartTimeMillis()
public Long getStartTimeMillis ()
Returns the time when this change request was started by the server.
Returns
Type
Description
Long
getStatus()
public ChangeRequestInfo . Status getStatus ()
Returns the status of this change request. If the change request has not been applied yet, the
status is PENDING .
Returns
Type
Description
ChangeRequestInfo.Status
hashCode()
public int hashCode ()
Returns
Type
Description
int
Overrides
Object.hashCode()
status()
public ChangeRequestInfo . Status status ()
Returns the status of this change request. If the change request has not been applied yet, the
status is PENDING .
Returns
Type
Description
ChangeRequestInfo.Status
toBuilder()
public ChangeRequestInfo . Builder toBuilder ()
Creates a builder populated with values of this ChangeRequestInfo .
Returns
Type
Description
ChangeRequestInfo.Builder
toString()
public String toString ()
Returns
Type
Description
String
Overrides
Object.toString()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
