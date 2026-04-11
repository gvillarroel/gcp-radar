---
title: "Class BackupInfo.Builder (6.111.1) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BackupInfo.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BackupInfo.Builder
  title: "Class BackupInfo.Builder (6.111.1) \_|\_ Java client libraries \_|\_ Google\
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
Class BackupInfo.Builder (6.111.1)
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
public abstract static class BackupInfo . Builder
Inheritance
java.lang.Object >
BackupInfo.Builder
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
Constructors
Builder()
public Builder ()
Methods
addAllReferencingBackups(List<String> referencingBackups)
protected BackupInfo . Builder addAllReferencingBackups ( List<String> referencingBackups )
Output Only.
Returns the names of the destination backups being created by copying this source backup.
Parameter
Name
Description
referencingBackups
List < String >
Returns
Type
Description
BackupInfo.Builder
build()
public abstract Backup build ()
Builds the backup from this builder.
Returns
Type
Description
Backup
setDatabase(DatabaseId database)
public abstract BackupInfo . Builder setDatabase ( DatabaseId database )
Required for creating a new backup.
Sets the source database to use for creating the backup.
Parameter
Name
Description
database
DatabaseId
Returns
Type
Description
BackupInfo.Builder
setEncryptionConfig(BackupEncryptionConfig encryptionConfig)
public abstract BackupInfo . Builder setEncryptionConfig ( BackupEncryptionConfig encryptionConfig )
Optional for creating a new backup.
The encryption configuration to be used for the backup. The possible configurations are
com.google.cloud.spanner.encryption.CustomerManagedEncryption , com.google.cloud.spanner.encryption.GoogleDefaultEncryption and com.google.cloud.spanner.encryption.UseDatabaseEncryption .
If no encryption config is given the backup will be created with the same encryption as
set by the database ( com.google.cloud.spanner.encryption.UseDatabaseEncryption ).
Parameter
Name
Description
encryptionConfig
BackupEncryptionConfig
Returns
Type
Description
BackupInfo.Builder
setExpireTime(Timestamp expireTime)
public abstract BackupInfo . Builder setExpireTime ( Timestamp expireTime )
Required for creating a new backup.
Sets the expiration time of the backup. The expiration time of the backup, with
microseconds granularity that must be at least 6 hours and at most 366 days from the time the
request is received. Once the expireTime has passed, Cloud Spanner will delete the backup and
free the resources used by the backup.
Parameter
Name
Description
expireTime
com.google.cloud.Timestamp
Returns
Type
Description
BackupInfo.Builder
setMaxExpireTime(Timestamp maxExpireTime)
protected BackupInfo . Builder setMaxExpireTime ( Timestamp maxExpireTime )
Output Only.
Returns the max allowed expiration time of the backup, with microseconds granularity.
Parameter
Name
Description
maxExpireTime
com.google.cloud.Timestamp
Returns
Type
Description
BackupInfo.Builder
setVersionTime(Timestamp versionTime)
public abstract BackupInfo . Builder setVersionTime ( Timestamp versionTime )
Optional for creating a new backup.
Specifies the timestamp to have an externally consistent copy of the database. If no
version time is specified, it will be automatically set to the backup create time.
The version time can be as far in the past as specified by the database earliest version
time (see Database#getEarliestVersionTime() ).
Parameter
Name
Description
versionTime
com.google.cloud.Timestamp
Returns
Type
Description
BackupInfo.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
