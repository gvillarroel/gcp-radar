---
title: "Class CloudFilestoreManagerGrpc (1.89.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc
  title: "Class CloudFilestoreManagerGrpc (1.89.0) \_|\_ Java client libraries \_\
    |\_ Google Cloud Documentation"
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
Class CloudFilestoreManagerGrpc (1.89.0)
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
public final class CloudFilestoreManagerGrpc
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
CloudFilestoreManagerGrpc
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
Static Fields
SERVICE_NAME
public static final String SERVICE_NAME
Field Value
Type
Description
String
Static Methods
bindService(CloudFilestoreManagerGrpc.AsyncService service)
public static final ServerServiceDefinition bindService ( CloudFilestoreManagerGrpc . AsyncService service )
Parameter
Name
Description
service
CloudFilestoreManagerGrpc.AsyncService
Returns
Type
Description
io.grpc.ServerServiceDefinition
getCreateBackupMethod()
public static MethodDescriptor<CreateBackupRequest , Operation > getCreateBackupMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < CreateBackupRequest , Operation >
getCreateInstanceMethod()
public static MethodDescriptor<CreateInstanceRequest , Operation > getCreateInstanceMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < CreateInstanceRequest , Operation >
getCreateSnapshotMethod()
public static MethodDescriptor<CreateSnapshotRequest , Operation > getCreateSnapshotMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < CreateSnapshotRequest , Operation >
getDeleteBackupMethod()
public static MethodDescriptor<DeleteBackupRequest , Operation > getDeleteBackupMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < DeleteBackupRequest , Operation >
getDeleteInstanceMethod()
public static MethodDescriptor<DeleteInstanceRequest , Operation > getDeleteInstanceMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < DeleteInstanceRequest , Operation >
getDeleteSnapshotMethod()
public static MethodDescriptor<DeleteSnapshotRequest , Operation > getDeleteSnapshotMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < DeleteSnapshotRequest , Operation >
getGetBackupMethod()
public static MethodDescriptor<GetBackupRequest , Backup > getGetBackupMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < GetBackupRequest , Backup >
getGetInstanceMethod()
public static MethodDescriptor<GetInstanceRequest , Instance > getGetInstanceMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < GetInstanceRequest , Instance >
getGetSnapshotMethod()
public static MethodDescriptor<GetSnapshotRequest , Snapshot > getGetSnapshotMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < GetSnapshotRequest , Snapshot >
getListBackupsMethod()
public static MethodDescriptor<ListBackupsRequest , ListBackupsResponse > getListBackupsMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < ListBackupsRequest , ListBackupsResponse >
getListInstancesMethod()
public static MethodDescriptor<ListInstancesRequest , ListInstancesResponse > getListInstancesMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < ListInstancesRequest , ListInstancesResponse >
getListSnapshotsMethod()
public static MethodDescriptor<ListSnapshotsRequest , ListSnapshotsResponse > getListSnapshotsMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < ListSnapshotsRequest , ListSnapshotsResponse >
getPromoteReplicaMethod()
public static MethodDescriptor<PromoteReplicaRequest , Operation > getPromoteReplicaMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < PromoteReplicaRequest , Operation >
getRestoreInstanceMethod()
public static MethodDescriptor<RestoreInstanceRequest , Operation > getRestoreInstanceMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < RestoreInstanceRequest , Operation >
getRevertInstanceMethod()
public static MethodDescriptor<RevertInstanceRequest , Operation > getRevertInstanceMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < RevertInstanceRequest , Operation >
getServiceDescriptor()
public static ServiceDescriptor getServiceDescriptor ()
Returns
Type
Description
io.grpc.ServiceDescriptor
getUpdateBackupMethod()
public static MethodDescriptor<UpdateBackupRequest , Operation > getUpdateBackupMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < UpdateBackupRequest , Operation >
getUpdateInstanceMethod()
public static MethodDescriptor<UpdateInstanceRequest , Operation > getUpdateInstanceMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < UpdateInstanceRequest , Operation >
getUpdateSnapshotMethod()
public static MethodDescriptor<UpdateSnapshotRequest , Operation > getUpdateSnapshotMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < UpdateSnapshotRequest , Operation >
newBlockingStub(Channel channel)
public static CloudFilestoreManagerGrpc . CloudFilestoreManagerBlockingStub newBlockingStub ( Channel channel )
Creates a new blocking-style stub that supports unary and streaming output calls on the service
Parameter
Name
Description
channel
io.grpc.Channel
Returns
Type
Description
CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub
newBlockingV2Stub(Channel channel)
public static CloudFilestoreManagerGrpc . CloudFilestoreManagerBlockingV2Stub newBlockingV2Stub ( Channel channel )
Creates a new blocking-style stub that supports all types of calls on the service
Parameter
Name
Description
channel
io.grpc.Channel
Returns
Type
Description
CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingV2Stub
newFutureStub(Channel channel)
public static CloudFilestoreManagerGrpc . CloudFilestoreManagerFutureStub newFutureStub ( Channel channel )
Creates a new ListenableFuture-style stub that supports unary calls on the service
Parameter
Name
Description
channel
io.grpc.Channel
Returns
Type
Description
CloudFilestoreManagerGrpc.CloudFilestoreManagerFutureStub
newStub(Channel channel)
public static CloudFilestoreManagerGrpc . CloudFilestoreManagerStub newStub ( Channel channel )
Creates a new async stub that supports all call types for the service
Parameter
Name
Description
channel
io.grpc.Channel
Returns
Type
Description
CloudFilestoreManagerGrpc.CloudFilestoreManagerStub
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
