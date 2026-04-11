---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/backup
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/backup
  title: "Python client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
2.35.0 (latest)
2.34.0
2.33.0
2.32.0
2.31.0
2.30.1
2.29.0
2.28.1
2.26.0
2.25.0
2.24.0
2.23.1
2.22.0
2.21.0
2.20.0
2.19.0
2.18.1
2.17.0
2.16.0
2.15.0
2.14.1
2.13.2
2.12.0
2.11.3
2.10.1
2.9.0
2.8.1
2.7.1
2.6.0
2.5.2
2.4.0
2.3.3
2.2.0
2.1.0
2.0.0
1.7.3
1.6.1
1.5.1
1.4.0
1.3.0
1.2.1
1.1.0
1.0.0
0.34.0
Backup
A user-friendly wrapper for a Google Cloud Bigtable Backup.
class google.cloud.bigtable.backup.Backup(backup_id, instance, cluster_id=None, table_id=None, expire_time=None, encryption_info=None)
Bases: object
Representation of a Google Cloud Bigtable Backup.
A :class: Backup can be used to:
create() the backup
update() the backup
delete() the backup
Parameters
backup_id ( str ) – The ID of the backup.
instance ( Instance ) – The Instance that owns this Backup.
cluster_id ( str ) – (Optional) The ID of the Cluster that contains this Backup.
Required for calling ‘delete’, ‘exists’ etc. methods.
table_id ( str ) – (Optional) The ID of the Table that the Backup is for.
Required if the ‘create’ method will be called.
expire_time ( datetime.datetime ) – (Optional) The expiration time after which the Backup
will be automatically deleted. Required if the create
method will be called.
property cluster()
The ID of the [parent] cluster used in requests.
Return type
str
Returns
The ID of the cluster containing the Backup.
create(cluster_id=None)
Creates this backup within its instance.
Parameters
cluster_id ( str ) – (Optional) The ID of the Cluster for the newly
created Backup.
Return type
Operation
Returns
A future to be used to poll the status of the ‘create’ request
Raises
Conflict – if the Backup already exists
NotFound – if the Instance owning the Backup does not exist
BadRequest – if the table or expire_time values are invalid,
or expire_time is not set
delete()
Delete this Backup.
property encryption_info()
Encryption info for this Backup.
Return type
google.cloud.bigtable.encryption.EncryptionInfo
Returns
The encryption information for this backup.
property end_time()
The time this Backup was finished.
Return type
datetime.datetime
Returns
A ‘datetime’ object representing the time when the creation
of this Backup was finished.
exists()
Tests whether this Backup exists.
Return type
bool
Returns
True if the Backup exists, else False.
property expire_time()
Expiration time used in the creation requests.
Return type
datetime.datetime
Returns
A ‘datetime’ object representing the expiration time of
this Backup.
classmethod from_pb(backup_pb, instance)
Creates a Backup instance from a protobuf message.
Parameters
backup_pb ( table.Backup ) – A Backup protobuf object.
instance ( Instance ) – The Instance that owns the Backup.
Return type
Backup
Returns
The backup parsed from the protobuf response.
Raises
ValueError: If the backup name does not match the expected
format or the parsed project ID does not match the
project ID on the Instance’s client, or if the
parsed instance ID does not match the Instance ID.
get()
Retrieves metadata of a pending or completed Backup.
Returns
An instance of
Backup
Raises
google.api_core.exceptions.GoogleAPICallError – If the request
failed for any reason.
google.api_core.exceptions.RetryError – If the request failed
due to a retryable error and retry attempts failed.
ValueError – If the parameters are invalid.
get_iam_policy()
Gets the IAM access control policy for this backup.
Return type
google.cloud.bigtable.policy.Policy
Returns
The current IAM policy of this backup.
property name()
Backup name used in requests.
The Backup name is of the form
"projects/../instances/../clusters/../backups/{backup_id}"
Return type
str
Returns
The Backup name.
Raises
ValueError: If the ‘cluster’ has not been set.
property parent()
Name of the parent cluster used in requests.
NOTE : This property will return None if cluster is not set.
The parent name is of the form
"projects/{project}/instances/{instance_id}/clusters/{cluster}"
Return type
str
Returns
A full path to the parent cluster.
reload()
Refreshes the stored backup properties.
restore(table_id, instance_id=None)
Creates a new Table by restoring from this Backup. The new Table
can be created in the same Instance as the Instance containing the
Backup, or another Instance whose ID can be specified in the arguments.
The returned Table long-running operation can be used to track the
progress of the operation and to cancel it. The response type is
Table , if successful.
Parameters
table_id ( str ) – The ID of the Table to create and restore to.
This Table must not already exist.
instance_id ( str ) – (Optional) The ID of the Instance to restore the
backup into, if different from the current one.
Return type
Operation
Returns
A future to be used to poll the status of the ‘restore’
request.
Raises
google.api_core.exceptions.AlreadyExists: If the table
already exists.
Raises
google.api_core.exceptions.GoogleAPICallError: If the request
failed for any reason.
Raises
google.api_core.exceptions.RetryError: If the request failed
due to a retryable error and retry attempts failed.
Raises
ValueError: If the parameters are invalid.
set_iam_policy(policy)
Sets the IAM access control policy for this backup. Replaces any
existing policy.
For more information about policy, please see documentation of
class google.cloud.bigtable.policy.Policy
Parameters
policy ( google.cloud.bigtable.policy.Policy ) – A new IAM policy to replace the current IAM policy
of this backup.
Return type
google.cloud.bigtable.policy.Policy
Returns
The current IAM policy of this backup.
property size_bytes()
The size of this Backup, in bytes.
Return type
int
Returns
The size of this Backup, in bytes.
property source_table()
The full name of the Table from which this Backup is created.
NOTE : This property will return None if table_id is not set.
The table name is of the form
"projects/../instances/../tables/{source_table}"
Return type
str
Returns
The Table name.
property start_time()
The time this Backup was started.
Return type
datetime.datetime
Returns
A ‘datetime’ object representing the time when the creation
of this Backup had started.
property state()
The current state of this Backup.
Return type
State
Returns
The current state of this Backup.
test_iam_permissions(permissions)
Tests whether the caller has the given permissions for this backup.
Returns the permissions that the caller has.
Parameters
permissions ( list ) – The set of permissions to check for
the resource . Permissions with wildcards (such as ‘*’
or ‘storage.*’) are not allowed. For more information see
IAM Overview .
Bigtable Permissions .
Return type
list
Returns
A List(string) of permissions allowed on the backup.
update_expire_time(new_expire_time)
Update the expire time of this Backup.
Parameters
new_expire_time ( datetime.datetime ) – the new expiration time timestamp
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
