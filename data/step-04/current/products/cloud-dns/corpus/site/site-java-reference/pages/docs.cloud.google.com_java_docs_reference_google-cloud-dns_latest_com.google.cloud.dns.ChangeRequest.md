---
title: "Class ChangeRequest (2.86.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.ChangeRequest
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.ChangeRequest
  title: "Class ChangeRequest (2.86.0) \_|\_ Java client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class ChangeRequest (2.86.0)
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
public class ChangeRequest extends ChangeRequestInfo
An immutable class representing an atomic update to a collection of RecordSet s within a
Zone .
See Also: Google Cloud DNS documentation
Inheritance
Object >
ChangeRequestInfo >
ChangeRequest
Inherited Members
ChangeRequestInfo.equals(Object)
ChangeRequestInfo.getAdditions()
ChangeRequestInfo.getDeletions()
ChangeRequestInfo.getGeneratedId()
ChangeRequestInfo.getStartTimeMillis()
ChangeRequestInfo.getStatus()
ChangeRequestInfo.hashCode()
ChangeRequestInfo.newBuilder()
ChangeRequestInfo.status()
ChangeRequestInfo.toBuilder()
ChangeRequestInfo.toString()
Object.clone()
Object.finalize()
Object.getClass()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Methods
applyTo(String zoneName, Dns.ChangeRequestOption[] options)
public ChangeRequest applyTo ( String zoneName , Dns . ChangeRequestOption [] options )
Applies this change request to the zone identified by zoneName .
Parameters
Name
Description
zoneName
String
options
ChangeRequestOption []
Returns
Type
Description
ChangeRequest
equals(Object obj)
public final boolean equals ( Object obj )
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
ChangeRequestInfo.equals(Object obj)
getDns()
public Dns getDns ()
Returns the change request's Dns object used to issue requests.
Returns
Type
Description
Dns
getZone()
public String getZone ()
Returns the name of the Zone associated with this change request.
Returns
Type
Description
String
hashCode()
public final int hashCode ()
Returns
Type
Description
int
Overrides
ChangeRequestInfo.hashCode()
isDone()
public boolean isDone ()
Returns true if the change request has been completed. If the status is not ChangeRequestInfo.Status#DONE already, the method makes an API call to Google Cloud DNS to
update the change request first.
Returns
Type
Description
boolean
reload(Dns.ChangeRequestOption[] options)
public ChangeRequest reload ( Dns . ChangeRequestOption [] options )
Retrieves the up-to-date information about the change request from Google Cloud DNS. Parameter
options can be used to restrict the fields to be included in the updated object the
same way as in Dns#getChangeRequest(String, String, Dns.ChangeRequestOption...) . If
options are provided, any field other than generatedId which is not included in the
options will be null regardless of whether they are initialized or not in
this instance.
Parameter
Name
Description
options
ChangeRequestOption []
Returns
Type
Description
ChangeRequest
an object with the updated information or null if it does not exist
toBuilder()
public ChangeRequest . Builder toBuilder ()
Creates a builder populated with values of this ChangeRequestInfo .
Returns
Type
Description
ChangeRequest.Builder
Overrides
ChangeRequestInfo.toBuilder()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
