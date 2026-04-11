---
title: "Class CopyBackupRequest (2.74.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.CopyBackupRequest
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.CopyBackupRequest
  title: "Class CopyBackupRequest (2.74.0) \_|\_ Java client libraries \_|\_ Google\
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
Class CopyBackupRequest (2.74.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.74.0 (latest)
2.73.0
2.72.0
2.71.0
2.70.0
2.68.0
2.67.1
2.66.0
2.65.1
2.63.0
2.62.0
2.61.0
2.60.0
2.59.0
2.58.2
2.56.0
2.54.0
2.52.0
2.51.2
2.49.0
2.46.0
2.45.1
2.44.1
2.43.0
2.42.0
2.40.0
2.39.5
2.37.0
2.35.1
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.1
2.28.0
public final class CopyBackupRequest
Build CopyBackupRequest for com.google.bigtable.admin.v2.CopyBackupRequest .
Inheritance
Object >
CopyBackupRequest
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
of(String sourceClusterId, String sourceBackupId)
public static CopyBackupRequest of ( String sourceClusterId , String sourceBackupId )
Create a CopyBackupRequest object. It assumes the source backup is located in the same
instance and project as the destination backup, which is where the BigtableTableAdminClient is
created in. use setSourceInstance("[INSTANCE]") if the source backup is located in a different
instance. use setSourceInstance("[PROJECT]", "[INSTANCE]") if the source backup is located in a
different project.
Parameters
Name
Description
sourceClusterId
String
sourceBackupId
String
Returns
Type
Description
CopyBackupRequest
Methods
equals(Object o)
public boolean equals ( Object o )
Parameter
Name
Description
o
Object
Returns
Type
Description
boolean
Overrides
Object.equals(Object)
hashCode()
public int hashCode ()
Returns
Type
Description
int
Overrides
Object.hashCode()
setDestination(String clusterId, String backupId)
public CopyBackupRequest setDestination ( String clusterId , String backupId )
Parameters
Name
Description
clusterId
String
backupId
String
Returns
Type
Description
CopyBackupRequest
setExpireTime(Instant expireTime)
public CopyBackupRequest setExpireTime ( Instant expireTime )
Parameter
Name
Description
expireTime
org.threeten.bp.Instant
Returns
Type
Description
CopyBackupRequest
setSourceInstance(String instanceId)
public CopyBackupRequest setSourceInstance ( String instanceId )
Parameter
Name
Description
instanceId
String
Returns
Type
Description
CopyBackupRequest
setSourceInstance(String projectId, String instanceId)
public CopyBackupRequest setSourceInstance ( String projectId , String instanceId )
Parameters
Name
Description
projectId
String
instanceId
String
Returns
Type
Description
CopyBackupRequest
toProto(String projectId, String instanceId)
public CopyBackupRequest toProto ( String projectId , String instanceId )
Internal Only : This feature is not stable for application use.
Parameters
Name
Description
projectId
String
instanceId
String
Returns
Type
Description
com.google.bigtable.admin.v2.CopyBackupRequest
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
