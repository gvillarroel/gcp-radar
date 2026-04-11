---
title: "Interface CloudFilestoreManagerGrpc.AsyncService (1.89.0) \_|\_ Java client\
  \ libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.AsyncService
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.AsyncService
  title: "Interface CloudFilestoreManagerGrpc.AsyncService (1.89.0) \_|\_ Java client\
    \ libraries \_|\_ Google Cloud Documentation"
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
Interface CloudFilestoreManagerGrpc.AsyncService (1.89.0)
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
public static interface CloudFilestoreManagerGrpc . AsyncService
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
Methods
createBackup(CreateBackupRequest request, StreamObserver<Operation> responseObserver)
public default void createBackup ( CreateBackupRequest request , StreamObserver<Operation> responseObserver )
Creates a backup.
Parameters
Name
Description
request
CreateBackupRequest
responseObserver
io.grpc.stub.StreamObserver < Operation >
createInstance(CreateInstanceRequest request, StreamObserver<Operation> responseObserver)
public default void createInstance ( CreateInstanceRequest request , StreamObserver<Operation> responseObserver )
Creates an instance.
When creating from a backup, the capacity of the new instance needs to be
equal to or larger than the capacity of the backup (and also equal to or
larger than the minimum capacity of the tier).
Parameters
Name
Description
request
CreateInstanceRequest
responseObserver
io.grpc.stub.StreamObserver < Operation >
createSnapshot(CreateSnapshotRequest request, StreamObserver<Operation> responseObserver)
public default void createSnapshot ( CreateSnapshotRequest request , StreamObserver<Operation> responseObserver )
Creates a snapshot.
Parameters
Name
Description
request
CreateSnapshotRequest
responseObserver
io.grpc.stub.StreamObserver < Operation >
deleteBackup(DeleteBackupRequest request, StreamObserver<Operation> responseObserver)
public default void deleteBackup ( DeleteBackupRequest request , StreamObserver<Operation> responseObserver )
Deletes a backup.
Parameters
Name
Description
request
DeleteBackupRequest
responseObserver
io.grpc.stub.StreamObserver < Operation >
deleteInstance(DeleteInstanceRequest request, StreamObserver<Operation> responseObserver)
public default void deleteInstance ( DeleteInstanceRequest request , StreamObserver<Operation> responseObserver )
Deletes an instance.
Parameters
Name
Description
request
DeleteInstanceRequest
responseObserver
io.grpc.stub.StreamObserver < Operation >
deleteSnapshot(DeleteSnapshotRequest request, StreamObserver<Operation> responseObserver)
public default void deleteSnapshot ( DeleteSnapshotRequest request , StreamObserver<Operation> responseObserver )
Deletes a snapshot.
Parameters
Name
Description
request
DeleteSnapshotRequest
responseObserver
io.grpc.stub.StreamObserver < Operation >
getBackup(GetBackupRequest request, StreamObserver<Backup> responseObserver)
public default void getBackup ( GetBackupRequest request , StreamObserver<Backup> responseObserver )
Gets the details of a specific backup.
Parameters
Name
Description
request
GetBackupRequest
responseObserver
io.grpc.stub.StreamObserver < Backup >
getInstance(GetInstanceRequest request, StreamObserver<Instance> responseObserver)
public default void getInstance ( GetInstanceRequest request , StreamObserver<Instance> responseObserver )
Gets the details of a specific instance.
Parameters
Name
Description
request
GetInstanceRequest
responseObserver
io.grpc.stub.StreamObserver < Instance >
getSnapshot(GetSnapshotRequest request, StreamObserver<Snapshot> responseObserver)
public default void getSnapshot ( GetSnapshotRequest request , StreamObserver<Snapshot> responseObserver )
Gets the details of a specific snapshot.
Parameters
Name
Description
request
GetSnapshotRequest
responseObserver
io.grpc.stub.StreamObserver < Snapshot >
listBackups(ListBackupsRequest request, StreamObserver<ListBackupsResponse> responseObserver)
public default void listBackups ( ListBackupsRequest request , StreamObserver<ListBackupsResponse> responseObserver )
Lists all backups in a project for either a specified location or for all
locations.
Parameters
Name
Description
request
ListBackupsRequest
responseObserver
io.grpc.stub.StreamObserver < ListBackupsResponse >
listInstances(ListInstancesRequest request, StreamObserver<ListInstancesResponse> responseObserver)
public default void listInstances ( ListInstancesRequest request , StreamObserver<ListInstancesResponse> responseObserver )
Lists all instances in a project for either a specified location
or for all locations.
Parameters
Name
Description
request
ListInstancesRequest
responseObserver
io.grpc.stub.StreamObserver < ListInstancesResponse >
listSnapshots(ListSnapshotsRequest request, StreamObserver<ListSnapshotsResponse> responseObserver)
public default void listSnapshots ( ListSnapshotsRequest request , StreamObserver<ListSnapshotsResponse> responseObserver )
Lists all snapshots in a project for either a specified location
or for all locations.
Parameters
Name
Description
request
ListSnapshotsRequest
responseObserver
io.grpc.stub.StreamObserver < ListSnapshotsResponse >
promoteReplica(PromoteReplicaRequest request, StreamObserver<Operation> responseObserver)
public default void promoteReplica ( PromoteReplicaRequest request , StreamObserver<Operation> responseObserver )
Promote the standby instance (replica).
Parameters
Name
Description
request
PromoteReplicaRequest
responseObserver
io.grpc.stub.StreamObserver < Operation >
restoreInstance(RestoreInstanceRequest request, StreamObserver<Operation> responseObserver)
public default void restoreInstance ( RestoreInstanceRequest request , StreamObserver<Operation> responseObserver )
Restores an existing instance's file share from a backup.
The capacity of the instance needs to be equal to or larger than the
capacity of the backup (and also equal to or larger than the minimum
capacity of the tier).
Parameters
Name
Description
request
RestoreInstanceRequest
responseObserver
io.grpc.stub.StreamObserver < Operation >
revertInstance(RevertInstanceRequest request, StreamObserver<Operation> responseObserver)
public default void revertInstance ( RevertInstanceRequest request , StreamObserver<Operation> responseObserver )
Revert an existing instance's file system to a specified snapshot.
Parameters
Name
Description
request
RevertInstanceRequest
responseObserver
io.grpc.stub.StreamObserver < Operation >
updateBackup(UpdateBackupRequest request, StreamObserver<Operation> responseObserver)
public default void updateBackup ( UpdateBackupRequest request , StreamObserver<Operation> responseObserver )
Updates the settings of a specific backup.
Parameters
Name
Description
request
UpdateBackupRequest
responseObserver
io.grpc.stub.StreamObserver < Operation >
updateInstance(UpdateInstanceRequest request, StreamObserver<Operation> responseObserver)
public default void updateInstance ( UpdateInstanceRequest request , StreamObserver<Operation> responseObserver )
Updates the settings of a specific instance.
Parameters
Name
Description
request
UpdateInstanceRequest
responseObserver
io.grpc.stub.StreamObserver < Operation >
updateSnapshot(UpdateSnapshotRequest request, StreamObserver<Operation> responseObserver)
public default void updateSnapshot ( UpdateSnapshotRequest request , StreamObserver<Operation> responseObserver )
Updates the settings of a specific snapshot.
Parameters
Name
Description
request
UpdateSnapshotRequest
responseObserver
io.grpc.stub.StreamObserver < Operation >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
