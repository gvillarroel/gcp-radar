---
title: "Class ChangeRequest.Builder (2.86.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.ChangeRequest.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dns/latest/com.google.cloud.dns.ChangeRequest.Builder
  title: "Class ChangeRequest.Builder (2.86.0) \_|\_ Java client libraries \_|\_ Google\
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
Class ChangeRequest.Builder (2.86.0)
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
public static class ChangeRequest . Builder extends ChangeRequestInfo . Builder
A builder for ChangeRequest s.
Inheritance
java.lang.Object >
ChangeRequestInfo.Builder >
ChangeRequest.Builder
Inherited Members
ChangeRequestInfo.Builder.add(RecordSet)
ChangeRequestInfo.Builder.build()
ChangeRequestInfo.Builder.clearAdditions()
ChangeRequestInfo.Builder.clearDeletions()
ChangeRequestInfo.Builder.delete(RecordSet)
ChangeRequestInfo.Builder.removeAddition(RecordSet)
ChangeRequestInfo.Builder.removeDeletion(RecordSet)
ChangeRequestInfo.Builder.setAdditions(List<RecordSet>)
ChangeRequestInfo.Builder.setDeletions(List<RecordSet>)
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
add(RecordSet recordSet)
public ChangeRequest . Builder add ( RecordSet recordSet )
Adds a RecordSet to be added to the zone upon executing this
ChangeRequestInfo .
Parameter
Name
Description
recordSet
RecordSet
Returns
Type
Description
ChangeRequest.Builder
Overrides
ChangeRequestInfo.Builder.add(RecordSet recordSet)
build()
public ChangeRequest build ()
Creates a ChangeRequestInfo instance populated by the values associated with this
builder.
Returns
Type
Description
ChangeRequest
Overrides
ChangeRequestInfo.Builder.build()
clearAdditions()
public ChangeRequest . Builder clearAdditions ()
Clears the collection of RecordSet s which are to be added to the zone upon executing
this ChangeRequestInfo .
Returns
Type
Description
ChangeRequest.Builder
Overrides
ChangeRequestInfo.Builder.clearAdditions()
clearDeletions()
public ChangeRequest . Builder clearDeletions ()
Clears the collection of RecordSet s which are to be deleted from the zone upon
executing this ChangeRequestInfo .
Returns
Type
Description
ChangeRequest.Builder
Overrides
ChangeRequestInfo.Builder.clearDeletions()
delete(RecordSet recordSet)
public ChangeRequest . Builder delete ( RecordSet recordSet )
Adds a RecordSet to be deleted to the zone upon executing this
ChangeRequestInfo .
Parameter
Name
Description
recordSet
RecordSet
Returns
Type
Description
ChangeRequest.Builder
Overrides
ChangeRequestInfo.Builder.delete(RecordSet recordSet)
removeAddition(RecordSet recordSet)
public ChangeRequest . Builder removeAddition ( RecordSet recordSet )
Removes a single RecordSet from the collection of records to be
added to the zone upon executing this ChangeRequestInfo .
Parameter
Name
Description
recordSet
RecordSet
Returns
Type
Description
ChangeRequest.Builder
Overrides
ChangeRequestInfo.Builder.removeAddition(RecordSet recordSet)
removeDeletion(RecordSet recordSet)
public ChangeRequest . Builder removeDeletion ( RecordSet recordSet )
Removes a single RecordSet from the collection of records to be
deleted from the zone upon executing this ChangeRequestInfo .
Parameter
Name
Description
recordSet
RecordSet
Returns
Type
Description
ChangeRequest.Builder
Overrides
ChangeRequestInfo.Builder.removeDeletion(RecordSet recordSet)
setAdditions(List<RecordSet> additions)
public ChangeRequest . Builder setAdditions ( List<RecordSet> additions )
Sets a collection of RecordSet s which are to be added to the zone upon executing this
ChangeRequestInfo .
Parameter
Name
Description
additions
List < RecordSet >
Returns
Type
Description
ChangeRequest.Builder
Overrides
ChangeRequestInfo.Builder.setAdditions(List<RecordSet> additions)
setDeletions(List<RecordSet> deletions)
public ChangeRequest . Builder setDeletions ( List<RecordSet> deletions )
Sets a collection of RecordSet s which are to be deleted from the zone upon executing
this ChangeRequestInfo .
Parameter
Name
Description
deletions
List < RecordSet >
Returns
Type
Description
ChangeRequest.Builder
Overrides
ChangeRequestInfo.Builder.setDeletions(List<RecordSet> deletions)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
