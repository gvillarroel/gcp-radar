---
title: "Class Backup (6.111.1) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.Backup
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.Backup
  title: "Class Backup (6.111.1) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
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
Class Backup (6.111.1)
Stay organized with collections
Save and categorize content based on your preferences.
6.111.1 (latest)
6.111.0
6.108.0
6.107.0
6.103.0
6.102.1
6.101.1
6.100.0
6.99.0
6.98.1
6.97.1
6.96.1
6.95.1
6.94.0
6.93.0
6.89.0
6.88.0
6.87.0
6.86.0
6.85.0
6.83.0
6.82.0
6.80.1
6.79.0
6.77.0
6.74.1
6.72.0
6.71.0
6.69.0
6.68.0
6.66.0
6.65.1
6.62.0
6.60.0
6.58.0
6.57.0
6.56.0
6.55.0
6.54.0
6.53.0
6.52.1
6.51.0
6.50.1
6.49.0
6.25.1
6.24.0
6.23.4
6.22.0
6.21.2
6.20.0
6.19.1
6.18.0
6.17.4
6.14.1
public class Backup extends BackupInfo
Represents a Cloud Spanner database backup. Backup adds a layer of service related
functionality over BackupInfo .
Inheritance
java.lang.Object >
BackupInfo >
Backup
Inherited Members
BackupInfo.equals(Object)
BackupInfo.getDatabase()
BackupInfo.getEncryptionConfig()
BackupInfo.getEncryptionInfo()
BackupInfo.getExpireTime()
BackupInfo.getId()
BackupInfo.getInstanceId()
BackupInfo.getMaxExpireTime()
BackupInfo.getProto()
BackupInfo.getReferencingBackups()
BackupInfo.getSize()
BackupInfo.getState()
BackupInfo.getVersionTime()
BackupInfo.hashCode()
BackupInfo.toString()
Object.clone()
Object.finalize()
Object.getClass()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Methods
create()
public OperationFuture<Backup , CreateBackupMetadata > create ()
Creates a backup on the server based on the source of this Backup instance.
Returns
Type
Description
OperationFuture < Backup , CreateBackupMetadata >
delete()
public void delete ()
Deletes this backup on Cloud Spanner.
Exceptions
Type
Description
SpannerException
exists()
public boolean exists ()
Returns true if a backup with the id of this Backup exists on Cloud
Spanner.
Returns
Type
Description
boolean
getIAMPolicy()
public Policy getIAMPolicy ()
Returns the IAM Policy for this backup.
Returns
Type
Description
com.google.cloud.Policy
isReady()
public boolean isReady ()
Returns true if this backup is ready to use. The value returned by this method
could be out-of-sync with the value returned by #getState() , as this method will make a
round-trip to the server and return a value based on the response from the server.
Returns
Type
Description
boolean
listBackupOperations()
public Page<Operation> listBackupOperations ()
Returns all long-running backup operations for this Backup .
Returns
Type
Description
Page < Operation >
reload()
public Backup reload ()
Fetches the backup's current information and returns a new Backup instance. It does not
update this instance.
Returns
Type
Description
Backup
Exceptions
Type
Description
SpannerException
restore(DatabaseId database)
public OperationFuture<Database , RestoreDatabaseMetadata > restore ( DatabaseId database )
Restores this backup to the specified database. The database must not already exist and will be
created by this call. The database may be created in a different instance than where the backup
is stored.
Parameter
Name
Description
database
DatabaseId
Returns
Type
Description
OperationFuture < Database , RestoreDatabaseMetadata >
setIAMPolicy(Policy policy)
public Policy setIAMPolicy ( Policy policy )
Updates the IAM policy for this backup and returns the resulting policy. It is highly
recommended to first get the current policy and base the updated policy on the returned policy.
See Policy.Builder#setEtag(String) for information on the recommended read-modify-write
cycle.
Parameter
Name
Description
policy
com.google.cloud.Policy
Returns
Type
Description
com.google.cloud.Policy
testIAMPermissions(Iterable<String> permissions)
public Iterable<String> testIAMPermissions ( Iterable<String> permissions )
Tests for the given permissions on this backup for the caller.
Parameter
Name
Description
permissions
Iterable < String > the permissions to test for. Permissions with wildcards (such as ' ',
'spanner. ', 'spanner.instances.*') are not allowed.
Returns
Type
Description
Iterable < String >
the subset of the tested permissions that the caller is allowed.
toBuilder()
public Backup . Builder toBuilder ()
Returns
Type
Description
Backup.Builder
updateExpireTime()
public void updateExpireTime ()
Updates the expire time of this backup on Cloud Spanner. If this Backup does not have
an expire time, the method will throw an IllegalStateException .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
