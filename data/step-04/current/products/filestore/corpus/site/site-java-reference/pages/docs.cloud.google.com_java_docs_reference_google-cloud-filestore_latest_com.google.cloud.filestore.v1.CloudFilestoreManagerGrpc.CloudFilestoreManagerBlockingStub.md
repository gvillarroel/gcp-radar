---
title: "Class CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub (1.89.0)\
  \ \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub
  title: "Class CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub (1.89.0)\
    \ \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
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
Class CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub (1.89.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.89.0 (latest)
1.88.0
1.86.0
1.84.0
1.83.0
1.82.0
1.81.0
1.79.0
1.77.0
1.76.0
1.75.0
1.74.0
1.73.0
1.71.0
1.69.0
1.68.0
1.65.0
1.64.0
1.63.0
1.61.0
1.60.0
1.59.0
1.58.0
1.57.0
1.56.0
1.55.0
1.54.0
1.53.0
1.52.0
1.50.0
1.49.0
1.48.0
1.47.0
1.46.0
1.45.0
1.44.0
1.43.0
1.42.0
1.41.0
1.40.0
1.38.0
1.37.0
1.36.0
1.35.0
1.34.0
1.33.0
1.32.0
1.31.0
1.30.0
1.29.0
1.28.0
1.25.0
1.24.0
1.23.0
1.22.0
1.21.0
1.20.0
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.10.0
1.9.0
1.8.0
1.7.0
1.6.0
1.5.0
1.2.0
public static final class CloudFilestoreManagerGrpc . CloudFilestoreManagerBlockingStub extends AbstractBlockingStub<CloudFilestoreManagerGrpc . CloudFilestoreManagerBlockingStub >
A stub to allow clients to do limited synchronous rpc calls to service CloudFilestoreManager.
Configures and manages Filestore resources.
Filestore Manager v1.
The file.googleapis.com service implements the Filestore API and
defines the following resource model for managing instances:
The service works with a collection of cloud projects, named: /projects/*
Each project has a collection of available locations, named: /locations/*
Each location has a collection of instances and backups, named:
/instances/* and /backups/* respectively.
As such, Filestore instances are resources of the form:
/projects/{project_number}/locations/{location_id}/instances/{instance_id}
and backups are resources of the form:
/projects/{project_number}/locations/{location_id}/backup/{backup_id}
Note that location_id must be a Google Cloud zone for instances, but
a Google Cloud region for backups; for example:
projects/12345/locations/us-central1-c/instances/my-filestore
projects/12345/locations/us-central1/backups/my-backup
Inheritance
java.lang.Object >
io.grpc.stub.AbstractStub >
io.grpc.stub.AbstractBlockingStub >
CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub
Inherited Members
io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)
io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)
io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T)
io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)
io.grpc.stub.AbstractStub.getCallOptions()
io.grpc.stub.AbstractStub.getChannel()
io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials)
io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel)
io.grpc.stub.AbstractStub.withCompression(java.lang.String)
io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline)
io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration)
io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit)
io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor)
io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...)
io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int)
io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int)
io.grpc.stub.AbstractStub.withOnReadyThreshold(int)
io.grpc.stub.AbstractStub.withWaitForReady()
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
build(Channel channel, CallOptions callOptions)
protected CloudFilestoreManagerGrpc . CloudFilestoreManagerBlockingStub build ( Channel channel , CallOptions callOptions )
Parameters
Name
Description
channel
io.grpc.Channel
callOptions
io.grpc.CallOptions
Returns
Type
Description
CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub
Overrides
io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)
createBackup(CreateBackupRequest request)
public Operation createBackup ( CreateBackupRequest request )
Creates a backup.
Parameter
Name
Description
request
CreateBackupRequest
Returns
Type
Description
Operation
createInstance(CreateInstanceRequest request)
public Operation createInstance ( CreateInstanceRequest request )
Creates an instance.
When creating from a backup, the capacity of the new instance needs to be
equal to or larger than the capacity of the backup (and also equal to or
larger than the minimum capacity of the tier).
Parameter
Name
Description
request
CreateInstanceRequest
Returns
Type
Description
Operation
createSnapshot(CreateSnapshotRequest request)
public Operation createSnapshot ( CreateSnapshotRequest request )
Creates a snapshot.
Parameter
Name
Description
request
CreateSnapshotRequest
Returns
Type
Description
Operation
deleteBackup(DeleteBackupRequest request)
public Operation deleteBackup ( DeleteBackupRequest request )
Deletes a backup.
Parameter
Name
Description
request
DeleteBackupRequest
Returns
Type
Description
Operation
deleteInstance(DeleteInstanceRequest request)
public Operation deleteInstance ( DeleteInstanceRequest request )
Deletes an instance.
Parameter
Name
Description
request
DeleteInstanceRequest
Returns
Type
Description
Operation
deleteSnapshot(DeleteSnapshotRequest request)
public Operation deleteSnapshot ( DeleteSnapshotRequest request )
Deletes a snapshot.
Parameter
Name
Description
request
DeleteSnapshotRequest
Returns
Type
Description
Operation
getBackup(GetBackupRequest request)
public Backup getBackup ( GetBackupRequest request )
Gets the details of a specific backup.
Parameter
Name
Description
request
GetBackupRequest
Returns
Type
Description
Backup
getInstance(GetInstanceRequest request)
public Instance getInstance ( GetInstanceRequest request )
Gets the details of a specific instance.
Parameter
Name
Description
request
GetInstanceRequest
Returns
Type
Description
Instance
getSnapshot(GetSnapshotRequest request)
public Snapshot getSnapshot ( GetSnapshotRequest request )
Gets the details of a specific snapshot.
Parameter
Name
Description
request
GetSnapshotRequest
Returns
Type
Description
Snapshot
listBackups(ListBackupsRequest request)
public ListBackupsResponse listBackups ( ListBackupsRequest request )
Lists all backups in a project for either a specified location or for all
locations.
Parameter
Name
Description
request
ListBackupsRequest
Returns
Type
Description
ListBackupsResponse
listInstances(ListInstancesRequest request)
public ListInstancesResponse listInstances ( ListInstancesRequest request )
Lists all instances in a project for either a specified location
or for all locations.
Parameter
Name
Description
request
ListInstancesRequest
Returns
Type
Description
ListInstancesResponse
listSnapshots(ListSnapshotsRequest request)
public ListSnapshotsResponse listSnapshots ( ListSnapshotsRequest request )
Lists all snapshots in a project for either a specified location
or for all locations.
Parameter
Name
Description
request
ListSnapshotsRequest
Returns
Type
Description
ListSnapshotsResponse
promoteReplica(PromoteReplicaRequest request)
public Operation promoteReplica ( PromoteReplicaRequest request )
Promote the standby instance (replica).
Parameter
Name
Description
request
PromoteReplicaRequest
Returns
Type
Description
Operation
restoreInstance(RestoreInstanceRequest request)
public Operation restoreInstance ( RestoreInstanceRequest request )
Restores an existing instance's file share from a backup.
The capacity of the instance needs to be equal to or larger than the
capacity of the backup (and also equal to or larger than the minimum
capacity of the tier).
Parameter
Name
Description
request
RestoreInstanceRequest
Returns
Type
Description
Operation
revertInstance(RevertInstanceRequest request)
public Operation revertInstance ( RevertInstanceRequest request )
Revert an existing instance's file system to a specified snapshot.
Parameter
Name
Description
request
RevertInstanceRequest
Returns
Type
Description
Operation
updateBackup(UpdateBackupRequest request)
public Operation updateBackup ( UpdateBackupRequest request )
Updates the settings of a specific backup.
Parameter
Name
Description
request
UpdateBackupRequest
Returns
Type
Description
Operation
updateInstance(UpdateInstanceRequest request)
public Operation updateInstance ( UpdateInstanceRequest request )
Updates the settings of a specific instance.
Parameter
Name
Description
request
UpdateInstanceRequest
Returns
Type
Description
Operation
updateSnapshot(UpdateSnapshotRequest request)
public Operation updateSnapshot ( UpdateSnapshotRequest request )
Updates the settings of a specific snapshot.
Parameter
Name
Description
request
UpdateSnapshotRequest
Returns
Type
Description
Operation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
