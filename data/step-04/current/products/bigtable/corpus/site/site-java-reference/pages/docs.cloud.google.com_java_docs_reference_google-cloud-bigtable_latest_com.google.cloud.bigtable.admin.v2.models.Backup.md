---
title: "Class Backup (2.74.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.Backup
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.Backup
  title: "Class Backup (2.74.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
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
Class Backup (2.74.0)
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
public class Backup
A backup lets you save a copy of a table's schema and data and restore the backup to a new table
at a later time.
Inheritance
Object >
Backup
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
fromProto(Backup proto)
public static Backup fromProto ( Backup proto )
Internal Only : This feature is not stable for application use.
Parameter
Name
Description
proto
com.google.bigtable.admin.v2.Backup
Returns
Type
Description
Backup
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
getBackupType()
public Backup . BackupType getBackupType ()
Get the backup type of this backup.
Returns
Type
Description
Backup.BackupType
getEncryptionInfo()
public EncryptionInfo getEncryptionInfo ()
Get the encryption information for the backup.
If encryption_type is CUSTOMER_MANAGED_ENCRYPTION, kms_key_version will be filled in with
status UNKNOWN.
If encryption_type is GOOGLE_DEFAULT_ENCRYPTION, all other fields will have default value.
Returns
Type
Description
EncryptionInfo
getEndTime()
public Instant getEndTime ()
Get the end time when the creation of this backup has completed.
Returns
Type
Description
org.threeten.bp.Instant
getExpireTime()
public Instant getExpireTime ()
Get the expire time of this backup.
Returns
Type
Description
org.threeten.bp.Instant
getHotToStandardTime()
public Instant getHotToStandardTime ()
Get the time at which this backup will be converted from a hot backup to a standard backup.
Returns
Type
Description
org.threeten.bp.Instant
getId()
public String getId ()
Get the ID of this backup.
Returns
Type
Description
String
getInstanceId()
public String getInstanceId ()
Get the instance ID where this backup is located.
Returns
Type
Description
String
getSizeBytes()
public long getSizeBytes ()
Get the size of this backup.
Returns
Type
Description
long
getSourceBackupId()
public String getSourceBackupId ()
Get the source backup ID from which the backup is copied.
Returns
Type
Description
String
getSourceTableId()
public String getSourceTableId ()
Get the source table ID from which the backup is created.
Returns
Type
Description
String
getStartTime()
public Instant getStartTime ()
Get the start time when this backup is taken.
Returns
Type
Description
org.threeten.bp.Instant
getState()
public Backup . State getState ()
Get the state of this backup.
Returns
Type
Description
Backup.State
hashCode()
public int hashCode ()
Returns
Type
Description
int
Overrides
Object.hashCode()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
