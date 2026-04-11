---
title: "Class CloudFilestoreManagerClient (1.89.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient
  title: "Class CloudFilestoreManagerClient (1.89.0) \_|\_ Java client libraries \_\
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
Class CloudFilestoreManagerClient (1.89.0)
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
GitHub Repository Product Reference REST Documentation
Service Description: Configures and manages Filestore resources.
Filestore Manager v1.
The file.googleapis.com service implements the Filestore API and defines the following
resource model for managing instances:
The service works with a collection of cloud projects, named: /projects/*
Each project has a collection of available locations, named: /locations/*
Each location has a collection of instances and backups, named: /instances/* and
/backups/* respectively.
As such, Filestore instances are resources of the form:
/projects/{project_number}/locations/{location_id}/instances/{instance_id} and backups
are resources of the form:
/projects/{project_number}/locations/{location_id}/backup/{backup_id}
Note that location_id must be a Google Cloud zone for instances, but a Google Cloud region
for backups; for example:
projects/12345/locations/us-central1-c/instances/my-filestore
projects/12345/locations/us-central1/backups/my-backup
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
InstanceName name = InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" );
Instance response = cloudFilestoreManagerClient . getInstance ( name );
}
Note: close() needs to be called on the CloudFilestoreManagerClient object to clean up
resources such as threads. In the example above, try-with-resources is used, which automatically
calls close().
Methods
Method
Description
Method Variants
ListInstances
Lists all instances in a project for either a specified location or for all locations.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listInstances(ListInstancesRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listInstances(LocationName parent)
listInstances(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listInstancesPagedCallable()
listInstancesCallable()
GetInstance
Gets the details of a specific instance.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getInstance(GetInstanceRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getInstance(InstanceName name)
getInstance(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getInstanceCallable()
CreateInstance
Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createInstanceAsync(CreateInstanceRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
createInstanceAsync(LocationName parent, Instance instance, String instanceId)
createInstanceAsync(String parent, Instance instance, String instanceId)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createInstanceOperationCallable()
createInstanceCallable()
UpdateInstance
Updates the settings of a specific instance.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
updateInstanceAsync(UpdateInstanceRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
updateInstanceAsync(Instance instance, FieldMask updateMask)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
updateInstanceOperationCallable()
updateInstanceCallable()
RestoreInstance
Restores an existing instance's file share from a backup.
The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
Request object method variants only take one parameter, a request object, which must be constructed before the call.
restoreInstanceAsync(RestoreInstanceRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
restoreInstanceOperationCallable()
restoreInstanceCallable()
RevertInstance
Revert an existing instance's file system to a specified snapshot.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
revertInstanceAsync(RevertInstanceRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
revertInstanceOperationCallable()
revertInstanceCallable()
DeleteInstance
Deletes an instance.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteInstanceAsync(DeleteInstanceRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
deleteInstanceAsync(InstanceName name)
deleteInstanceAsync(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteInstanceOperationCallable()
deleteInstanceCallable()
ListSnapshots
Lists all snapshots in a project for either a specified location or for all locations.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listSnapshots(ListSnapshotsRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listSnapshots(InstanceName parent)
listSnapshots(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listSnapshotsPagedCallable()
listSnapshotsCallable()
GetSnapshot
Gets the details of a specific snapshot.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getSnapshot(GetSnapshotRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getSnapshot(SnapshotName name)
getSnapshot(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getSnapshotCallable()
CreateSnapshot
Creates a snapshot.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createSnapshotAsync(CreateSnapshotRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
createSnapshotAsync(InstanceName parent, Snapshot snapshot, String snapshotId)
createSnapshotAsync(String parent, Snapshot snapshot, String snapshotId)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createSnapshotOperationCallable()
createSnapshotCallable()
DeleteSnapshot
Deletes a snapshot.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteSnapshotAsync(DeleteSnapshotRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
deleteSnapshotAsync(SnapshotName name)
deleteSnapshotAsync(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteSnapshotOperationCallable()
deleteSnapshotCallable()
UpdateSnapshot
Updates the settings of a specific snapshot.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
updateSnapshotAsync(UpdateSnapshotRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
updateSnapshotAsync(Snapshot snapshot, FieldMask updateMask)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
updateSnapshotOperationCallable()
updateSnapshotCallable()
ListBackups
Lists all backups in a project for either a specified location or for all locations.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listBackups(ListBackupsRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listBackups(LocationName parent)
listBackups(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listBackupsPagedCallable()
listBackupsCallable()
GetBackup
Gets the details of a specific backup.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getBackup(GetBackupRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getBackup(BackupName name)
getBackup(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getBackupCallable()
CreateBackup
Creates a backup.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createBackupAsync(CreateBackupRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
createBackupAsync(LocationName parent, Backup backup, String backupId)
createBackupAsync(String parent, Backup backup, String backupId)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createBackupOperationCallable()
createBackupCallable()
DeleteBackup
Deletes a backup.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteBackupAsync(DeleteBackupRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
deleteBackupAsync(BackupName name)
deleteBackupAsync(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteBackupOperationCallable()
deleteBackupCallable()
UpdateBackup
Updates the settings of a specific backup.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
updateBackupAsync(UpdateBackupRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
updateBackupAsync(Backup backup, FieldMask updateMask)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
updateBackupOperationCallable()
updateBackupCallable()
PromoteReplica
Promote the standby instance (replica).
Request object method variants only take one parameter, a request object, which must be constructed before the call.
promoteReplicaAsync(PromoteReplicaRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
promoteReplicaOperationCallable()
promoteReplicaCallable()
See the individual methods for example code.
Many parameters require resource names to be formatted in a particular way. To assist with
these names, this class includes a format method for each type of name, and additionally a parse
method to extract the individual identifiers contained within names that are returned.
This class can be customized by passing in a custom instance of CloudFilestoreManagerSettings
to create(). For example:
To customize credentials:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
CloudFilestoreManagerSettings cloudFilestoreManagerSettings =
CloudFilestoreManagerSettings . newBuilder ()
. setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials ))
. build ();
CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ( cloudFilestoreManagerSettings );
To customize the endpoint:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
CloudFilestoreManagerSettings cloudFilestoreManagerSettings =
CloudFilestoreManagerSettings . newBuilder (). setEndpoint ( myEndpoint ). build ();
CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ( cloudFilestoreManagerSettings );
To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over
the wire:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
CloudFilestoreManagerSettings cloudFilestoreManagerSettings =
CloudFilestoreManagerSettings . newHttpJsonBuilder (). build ();
CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ( cloudFilestoreManagerSettings );
Please refer to the GitHub repository's samples for more quickstart code snippets.
Inheritance
java.lang.Object >
CloudFilestoreManagerClient
Static Methods
create()
public static final CloudFilestoreManagerClient create ()
Constructs an instance of CloudFilestoreManagerClient with default settings.
Returns
Type
Description
CloudFilestoreManagerClient
Exceptions
Type
Description
IOException
create(CloudFilestoreManagerSettings settings)
public static final CloudFilestoreManagerClient create ( CloudFilestoreManagerSettings settings )
Constructs an instance of CloudFilestoreManagerClient, using the given settings. The channels
are created based on the settings passed in, or defaults for any settings that are not set.
Parameter
Name
Description
settings
CloudFilestoreManagerSettings
Returns
Type
Description
CloudFilestoreManagerClient
Exceptions
Type
Description
IOException
create(CloudFilestoreManagerStub stub)
public static final CloudFilestoreManagerClient create ( CloudFilestoreManagerStub stub )
Constructs an instance of CloudFilestoreManagerClient, using the given stub for making calls.
This is for advanced usage - prefer using create(CloudFilestoreManagerSettings).
Parameter
Name
Description
stub
CloudFilestoreManagerStub
Returns
Type
Description
CloudFilestoreManagerClient
Constructors
CloudFilestoreManagerClient(CloudFilestoreManagerSettings settings)
protected CloudFilestoreManagerClient ( CloudFilestoreManagerSettings settings )
Constructs an instance of CloudFilestoreManagerClient, using the given settings. This is
protected so that it is easy to make a subclass, but otherwise, the static factory methods
should be preferred.
Parameter
Name
Description
settings
CloudFilestoreManagerSettings
CloudFilestoreManagerClient(CloudFilestoreManagerStub stub)
protected CloudFilestoreManagerClient ( CloudFilestoreManagerStub stub )
Parameter
Name
Description
stub
CloudFilestoreManagerStub
Methods
awaitTermination(long duration, TimeUnit unit)
public boolean awaitTermination ( long duration , TimeUnit unit )
Parameters
Name
Description
duration
long
unit
TimeUnit
Returns
Type
Description
boolean
Exceptions
Type
Description
InterruptedException
close()
public final void close ()
createBackupAsync(CreateBackupRequest request)
public final OperationFuture<Backup , OperationMetadata > createBackupAsync ( CreateBackupRequest request )
Creates a backup.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
CreateBackupRequest request =
CreateBackupRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setBackup ( Backup . newBuilder (). build ())
. setBackupId ( "backupId2121930365" )
. build ();
Backup response = cloudFilestoreManagerClient . createBackupAsync ( request ). get ();
}
Parameter
Name
Description
request
CreateBackupRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Backup , OperationMetadata >
createBackupAsync(LocationName parent, Backup backup, String backupId)
public final OperationFuture<Backup , OperationMetadata > createBackupAsync ( LocationName parent , Backup backup , String backupId )
Creates a backup.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
Backup backup = Backup . newBuilder (). build ();
String backupId = "backupId2121930365" ;
Backup response =
cloudFilestoreManagerClient . createBackupAsync ( parent , backup , backupId ). get ();
}
Parameters
Name
Description
parent
LocationName Required. The backup's project and location, in the format
projects/{project_number}/locations/{location} . In Filestore, backup locations map to
Google Cloud regions, for example **us-west1**.
backup
Backup Required. A backup resource
backupId
String Required. The ID to use for the backup. The ID must be unique within the
specified project and location.
This value must start with a lowercase letter followed by up to 62 lowercase letters,
numbers, or hyphens, and cannot end with a hyphen. Values that do not match this pattern
will trigger an INVALID_ARGUMENT error.
Returns
Type
Description
OperationFuture < Backup , OperationMetadata >
createBackupAsync(String parent, Backup backup, String backupId)
public final OperationFuture<Backup , OperationMetadata > createBackupAsync ( String parent , Backup backup , String backupId )
Creates a backup.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
Backup backup = Backup . newBuilder (). build ();
String backupId = "backupId2121930365" ;
Backup response =
cloudFilestoreManagerClient . createBackupAsync ( parent , backup , backupId ). get ();
}
Parameters
Name
Description
parent
String Required. The backup's project and location, in the format
projects/{project_number}/locations/{location} . In Filestore, backup locations map to
Google Cloud regions, for example **us-west1**.
backup
Backup Required. A backup resource
backupId
String Required. The ID to use for the backup. The ID must be unique within the
specified project and location.
This value must start with a lowercase letter followed by up to 62 lowercase letters,
numbers, or hyphens, and cannot end with a hyphen. Values that do not match this pattern
will trigger an INVALID_ARGUMENT error.
Returns
Type
Description
OperationFuture < Backup , OperationMetadata >
createBackupCallable()
public final UnaryCallable<CreateBackupRequest , Operation > createBackupCallable ()
Creates a backup.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
CreateBackupRequest request =
CreateBackupRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setBackup ( Backup . newBuilder (). build ())
. setBackupId ( "backupId2121930365" )
. build ();
ApiFuture<Operation> future =
cloudFilestoreManagerClient . createBackupCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < CreateBackupRequest , Operation >
createBackupOperationCallable()
public final OperationCallable<CreateBackupRequest , Backup , OperationMetadata > createBackupOperationCallable ()
Creates a backup.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
CreateBackupRequest request =
CreateBackupRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setBackup ( Backup . newBuilder (). build ())
. setBackupId ( "backupId2121930365" )
. build ();
OperationFuture<Backup , OperationMetadata > future =
cloudFilestoreManagerClient . createBackupOperationCallable (). futureCall ( request );
// Do something.
Backup response = future . get ();
}
Returns
Type
Description
OperationCallable < CreateBackupRequest , Backup , OperationMetadata >
createInstanceAsync(CreateInstanceRequest request)
public final OperationFuture<Instance , OperationMetadata > createInstanceAsync ( CreateInstanceRequest request )
Creates an instance. When creating from a backup, the capacity of the new instance needs to be
equal to or larger than the capacity of the backup (and also equal to or larger than the
minimum capacity of the tier).
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
CreateInstanceRequest request =
CreateInstanceRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setInstanceId ( "instanceId902024336" )
. setInstance ( Instance . newBuilder (). build ())
. build ();
Instance response = cloudFilestoreManagerClient . createInstanceAsync ( request ). get ();
}
Parameter
Name
Description
request
CreateInstanceRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Instance , OperationMetadata >
createInstanceAsync(LocationName parent, Instance instance, String instanceId)
public final OperationFuture<Instance , OperationMetadata > createInstanceAsync ( LocationName parent , Instance instance , String instanceId )
Creates an instance. When creating from a backup, the capacity of the new instance needs to be
equal to or larger than the capacity of the backup (and also equal to or larger than the
minimum capacity of the tier).
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
Instance instance = Instance . newBuilder (). build ();
String instanceId = "instanceId902024336" ;
Instance response =
cloudFilestoreManagerClient . createInstanceAsync ( parent , instance , instanceId ). get ();
}
Parameters
Name
Description
parent
LocationName Required. The instance's project and location, in the format
projects/{project_id}/locations/{location} . In Filestore, locations map to Google Cloud
zones, for example **us-west1-b**.
instance
Instance Required. An instance resource
instanceId
String Required. The name of the instance to create. The name must be unique for the
specified project and location.
Returns
Type
Description
OperationFuture < Instance , OperationMetadata >
createInstanceAsync(String parent, Instance instance, String instanceId)
public final OperationFuture<Instance , OperationMetadata > createInstanceAsync ( String parent , Instance instance , String instanceId )
Creates an instance. When creating from a backup, the capacity of the new instance needs to be
equal to or larger than the capacity of the backup (and also equal to or larger than the
minimum capacity of the tier).
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
Instance instance = Instance . newBuilder (). build ();
String instanceId = "instanceId902024336" ;
Instance response =
cloudFilestoreManagerClient . createInstanceAsync ( parent , instance , instanceId ). get ();
}
Parameters
Name
Description
parent
String Required. The instance's project and location, in the format
projects/{project_id}/locations/{location} . In Filestore, locations map to Google Cloud
zones, for example **us-west1-b**.
instance
Instance Required. An instance resource
instanceId
String Required. The name of the instance to create. The name must be unique for the
specified project and location.
Returns
Type
Description
OperationFuture < Instance , OperationMetadata >
createInstanceCallable()
public final UnaryCallable<CreateInstanceRequest , Operation > createInstanceCallable ()
Creates an instance. When creating from a backup, the capacity of the new instance needs to be
equal to or larger than the capacity of the backup (and also equal to or larger than the
minimum capacity of the tier).
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
CreateInstanceRequest request =
CreateInstanceRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setInstanceId ( "instanceId902024336" )
. setInstance ( Instance . newBuilder (). build ())
. build ();
ApiFuture<Operation> future =
cloudFilestoreManagerClient . createInstanceCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < CreateInstanceRequest , Operation >
createInstanceOperationCallable()
public final OperationCallable<CreateInstanceRequest , Instance , OperationMetadata > createInstanceOperationCallable ()
Creates an instance. When creating from a backup, the capacity of the new instance needs to be
equal to or larger than the capacity of the backup (and also equal to or larger than the
minimum capacity of the tier).
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
CreateInstanceRequest request =
CreateInstanceRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setInstanceId ( "instanceId902024336" )
. setInstance ( Instance . newBuilder (). build ())
. build ();
OperationFuture<Instance , OperationMetadata > future =
cloudFilestoreManagerClient . createInstanceOperationCallable (). futureCall ( request );
// Do something.
Instance response = future . get ();
}
Returns
Type
Description
OperationCallable < CreateInstanceRequest , Instance , OperationMetadata >
createSnapshotAsync(CreateSnapshotRequest request)
public final OperationFuture<Snapshot , OperationMetadata > createSnapshotAsync ( CreateSnapshotRequest request )
Creates a snapshot.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
CreateSnapshotRequest request =
CreateSnapshotRequest . newBuilder ()
. setParent ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. setSnapshotId ( "snapshotId-1113817601" )
. setSnapshot ( Snapshot . newBuilder (). build ())
. build ();
Snapshot response = cloudFilestoreManagerClient . createSnapshotAsync ( request ). get ();
}
Parameter
Name
Description
request
CreateSnapshotRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Snapshot , OperationMetadata >
createSnapshotAsync(InstanceName parent, Snapshot snapshot, String snapshotId)
public final OperationFuture<Snapshot , OperationMetadata > createSnapshotAsync ( InstanceName parent , Snapshot snapshot , String snapshotId )
Creates a snapshot.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
InstanceName parent = InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" );
Snapshot snapshot = Snapshot . newBuilder (). build ();
String snapshotId = "snapshotId-1113817601" ;
Snapshot response =
cloudFilestoreManagerClient . createSnapshotAsync ( parent , snapshot , snapshotId ). get ();
}
Parameters
Name
Description
parent
InstanceName Required. The Filestore Instance to create the snapshots of, in the format
projects/{project_id}/locations/{location}/instances/{instance_id}
snapshot
Snapshot Required. A snapshot resource.
snapshotId
String Required. The ID to use for the snapshot. The ID must be unique within the
specified instance.
This value must start with a lowercase letter followed by up to 62 lowercase letters,
numbers, or hyphens, and cannot end with a hyphen.
Returns
Type
Description
OperationFuture < Snapshot , OperationMetadata >
createSnapshotAsync(String parent, Snapshot snapshot, String snapshotId)
public final OperationFuture<Snapshot , OperationMetadata > createSnapshotAsync ( String parent , Snapshot snapshot , String snapshotId )
Creates a snapshot.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
String parent = InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ();
Snapshot snapshot = Snapshot . newBuilder (). build ();
String snapshotId = "snapshotId-1113817601" ;
Snapshot response =
cloudFilestoreManagerClient . createSnapshotAsync ( parent , snapshot , snapshotId ). get ();
}
Parameters
Name
Description
parent
String Required. The Filestore Instance to create the snapshots of, in the format
projects/{project_id}/locations/{location}/instances/{instance_id}
snapshot
Snapshot Required. A snapshot resource.
snapshotId
String Required. The ID to use for the snapshot. The ID must be unique within the
specified instance.
This value must start with a lowercase letter followed by up to 62 lowercase letters,
numbers, or hyphens, and cannot end with a hyphen.
Returns
Type
Description
OperationFuture < Snapshot , OperationMetadata >
createSnapshotCallable()
public final UnaryCallable<CreateSnapshotRequest , Operation > createSnapshotCallable ()
Creates a snapshot.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
CreateSnapshotRequest request =
CreateSnapshotRequest . newBuilder ()
. setParent ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. setSnapshotId ( "snapshotId-1113817601" )
. setSnapshot ( Snapshot . newBuilder (). build ())
. build ();
ApiFuture<Operation> future =
cloudFilestoreManagerClient . createSnapshotCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < CreateSnapshotRequest , Operation >
createSnapshotOperationCallable()
public final OperationCallable<CreateSnapshotRequest , Snapshot , OperationMetadata > createSnapshotOperationCallable ()
Creates a snapshot.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
CreateSnapshotRequest request =
CreateSnapshotRequest . newBuilder ()
. setParent ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. setSnapshotId ( "snapshotId-1113817601" )
. setSnapshot ( Snapshot . newBuilder (). build ())
. build ();
OperationFuture<Snapshot , OperationMetadata > future =
cloudFilestoreManagerClient . createSnapshotOperationCallable (). futureCall ( request );
// Do something.
Snapshot response = future . get ();
}
Returns
Type
Description
OperationCallable < CreateSnapshotRequest , Snapshot , OperationMetadata >
deleteBackupAsync(BackupName name)
public final OperationFuture<Empty , OperationMetadata > deleteBackupAsync ( BackupName name )
Deletes a backup.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
BackupName name = BackupName . of ( "[PROJECT]" , "[LOCATION]" , "[BACKUP]" );
cloudFilestoreManagerClient . deleteBackupAsync ( name ). get ();
}
Parameter
Name
Description
name
BackupName Required. The backup resource name, in the format
projects/{project_number}/locations/{location}/backups/{backup_id}
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteBackupAsync(DeleteBackupRequest request)
public final OperationFuture<Empty , OperationMetadata > deleteBackupAsync ( DeleteBackupRequest request )
Deletes a backup.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
DeleteBackupRequest request =
DeleteBackupRequest . newBuilder ()
. setName ( BackupName . of ( "[PROJECT]" , "[LOCATION]" , "[BACKUP]" ). toString ())
. build ();
cloudFilestoreManagerClient . deleteBackupAsync ( request ). get ();
}
Parameter
Name
Description
request
DeleteBackupRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteBackupAsync(String name)
public final OperationFuture<Empty , OperationMetadata > deleteBackupAsync ( String name )
Deletes a backup.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
String name = BackupName . of ( "[PROJECT]" , "[LOCATION]" , "[BACKUP]" ). toString ();
cloudFilestoreManagerClient . deleteBackupAsync ( name ). get ();
}
Parameter
Name
Description
name
String Required. The backup resource name, in the format
projects/{project_number}/locations/{location}/backups/{backup_id}
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteBackupCallable()
public final UnaryCallable<DeleteBackupRequest , Operation > deleteBackupCallable ()
Deletes a backup.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
DeleteBackupRequest request =
DeleteBackupRequest . newBuilder ()
. setName ( BackupName . of ( "[PROJECT]" , "[LOCATION]" , "[BACKUP]" ). toString ())
. build ();
ApiFuture<Operation> future =
cloudFilestoreManagerClient . deleteBackupCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteBackupRequest , Operation >
deleteBackupOperationCallable()
public final OperationCallable<DeleteBackupRequest , Empty , OperationMetadata > deleteBackupOperationCallable ()
Deletes a backup.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
DeleteBackupRequest request =
DeleteBackupRequest . newBuilder ()
. setName ( BackupName . of ( "[PROJECT]" , "[LOCATION]" , "[BACKUP]" ). toString ())
. build ();
OperationFuture<Empty , OperationMetadata > future =
cloudFilestoreManagerClient . deleteBackupOperationCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
OperationCallable < DeleteBackupRequest , Empty , OperationMetadata >
deleteInstanceAsync(DeleteInstanceRequest request)
public final OperationFuture<Empty , OperationMetadata > deleteInstanceAsync ( DeleteInstanceRequest request )
Deletes an instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
DeleteInstanceRequest request =
DeleteInstanceRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. setForce ( true )
. build ();
cloudFilestoreManagerClient . deleteInstanceAsync ( request ). get ();
}
Parameter
Name
Description
request
DeleteInstanceRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteInstanceAsync(InstanceName name)
public final OperationFuture<Empty , OperationMetadata > deleteInstanceAsync ( InstanceName name )
Deletes an instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
InstanceName name = InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" );
cloudFilestoreManagerClient . deleteInstanceAsync ( name ). get ();
}
Parameter
Name
Description
name
InstanceName Required. The instance resource name, in the format
projects/{project_id}/locations/{location}/instances/{instance_id}
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteInstanceAsync(String name)
public final OperationFuture<Empty , OperationMetadata > deleteInstanceAsync ( String name )
Deletes an instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
String name = InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ();
cloudFilestoreManagerClient . deleteInstanceAsync ( name ). get ();
}
Parameter
Name
Description
name
String Required. The instance resource name, in the format
projects/{project_id}/locations/{location}/instances/{instance_id}
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteInstanceCallable()
public final UnaryCallable<DeleteInstanceRequest , Operation > deleteInstanceCallable ()
Deletes an instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
DeleteInstanceRequest request =
DeleteInstanceRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. setForce ( true )
. build ();
ApiFuture<Operation> future =
cloudFilestoreManagerClient . deleteInstanceCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteInstanceRequest , Operation >
deleteInstanceOperationCallable()
public final OperationCallable<DeleteInstanceRequest , Empty , OperationMetadata > deleteInstanceOperationCallable ()
Deletes an instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
DeleteInstanceRequest request =
DeleteInstanceRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. setForce ( true )
. build ();
OperationFuture<Empty , OperationMetadata > future =
cloudFilestoreManagerClient . deleteInstanceOperationCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
OperationCallable < DeleteInstanceRequest , Empty , OperationMetadata >
deleteSnapshotAsync(DeleteSnapshotRequest request)
public final OperationFuture<Empty , OperationMetadata > deleteSnapshotAsync ( DeleteSnapshotRequest request )
Deletes a snapshot.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
DeleteSnapshotRequest request =
DeleteSnapshotRequest . newBuilder ()
. setName (
SnapshotName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" , "[SNAPSHOT]" ). toString ())
. build ();
cloudFilestoreManagerClient . deleteSnapshotAsync ( request ). get ();
}
Parameter
Name
Description
request
DeleteSnapshotRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteSnapshotAsync(SnapshotName name)
public final OperationFuture<Empty , OperationMetadata > deleteSnapshotAsync ( SnapshotName name )
Deletes a snapshot.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
SnapshotName name = SnapshotName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" , "[SNAPSHOT]" );
cloudFilestoreManagerClient . deleteSnapshotAsync ( name ). get ();
}
Parameter
Name
Description
name
SnapshotName Required. The snapshot resource name, in the format
projects/{project_id}/locations/{location}/instances/{instance_id}/snapshots/{snapshot_id}
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteSnapshotAsync(String name)
public final OperationFuture<Empty , OperationMetadata > deleteSnapshotAsync ( String name )
Deletes a snapshot.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
String name =
SnapshotName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" , "[SNAPSHOT]" ). toString ();
cloudFilestoreManagerClient . deleteSnapshotAsync ( name ). get ();
}
Parameter
Name
Description
name
String Required. The snapshot resource name, in the format
projects/{project_id}/locations/{location}/instances/{instance_id}/snapshots/{snapshot_id}
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteSnapshotCallable()
public final UnaryCallable<DeleteSnapshotRequest , Operation > deleteSnapshotCallable ()
Deletes a snapshot.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
DeleteSnapshotRequest request =
DeleteSnapshotRequest . newBuilder ()
. setName (
SnapshotName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" , "[SNAPSHOT]" ). toString ())
. build ();
ApiFuture<Operation> future =
cloudFilestoreManagerClient . deleteSnapshotCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteSnapshotRequest , Operation >
deleteSnapshotOperationCallable()
public final OperationCallable<DeleteSnapshotRequest , Empty , OperationMetadata > deleteSnapshotOperationCallable ()
Deletes a snapshot.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
DeleteSnapshotRequest request =
DeleteSnapshotRequest . newBuilder ()
. setName (
SnapshotName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" , "[SNAPSHOT]" ). toString ())
. build ();
OperationFuture<Empty , OperationMetadata > future =
cloudFilestoreManagerClient . deleteSnapshotOperationCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
OperationCallable < DeleteSnapshotRequest , Empty , OperationMetadata >
getBackup(BackupName name)
public final Backup getBackup ( BackupName name )
Gets the details of a specific backup.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
BackupName name = BackupName . of ( "[PROJECT]" , "[LOCATION]" , "[BACKUP]" );
Backup response = cloudFilestoreManagerClient . getBackup ( name );
}
Parameter
Name
Description
name
BackupName Required. The backup resource name, in the format
projects/{project_number}/locations/{location}/backups/{backup_id} .
Returns
Type
Description
Backup
getBackup(GetBackupRequest request)
public final Backup getBackup ( GetBackupRequest request )
Gets the details of a specific backup.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
GetBackupRequest request =
GetBackupRequest . newBuilder ()
. setName ( BackupName . of ( "[PROJECT]" , "[LOCATION]" , "[BACKUP]" ). toString ())
. build ();
Backup response = cloudFilestoreManagerClient . getBackup ( request );
}
Parameter
Name
Description
request
GetBackupRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Backup
getBackup(String name)
public final Backup getBackup ( String name )
Gets the details of a specific backup.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
String name = BackupName . of ( "[PROJECT]" , "[LOCATION]" , "[BACKUP]" ). toString ();
Backup response = cloudFilestoreManagerClient . getBackup ( name );
}
Parameter
Name
Description
name
String Required. The backup resource name, in the format
projects/{project_number}/locations/{location}/backups/{backup_id} .
Returns
Type
Description
Backup
getBackupCallable()
public final UnaryCallable<GetBackupRequest , Backup > getBackupCallable ()
Gets the details of a specific backup.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
GetBackupRequest request =
GetBackupRequest . newBuilder ()
. setName ( BackupName . of ( "[PROJECT]" , "[LOCATION]" , "[BACKUP]" ). toString ())
. build ();
ApiFuture<Backup> future =
cloudFilestoreManagerClient . getBackupCallable (). futureCall ( request );
// Do something.
Backup response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetBackupRequest , Backup >
getHttpJsonOperationsClient()
public final OperationsClient getHttpJsonOperationsClient ()
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
Returns the OperationsClient that can be used to query the status of a long-running operation
returned by another API method call.
Returns
Type
Description
OperationsClient
getInstance(GetInstanceRequest request)
public final Instance getInstance ( GetInstanceRequest request )
Gets the details of a specific instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
GetInstanceRequest request =
GetInstanceRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. build ();
Instance response = cloudFilestoreManagerClient . getInstance ( request );
}
Parameter
Name
Description
request
GetInstanceRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Instance
getInstance(InstanceName name)
public final Instance getInstance ( InstanceName name )
Gets the details of a specific instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
InstanceName name = InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" );
Instance response = cloudFilestoreManagerClient . getInstance ( name );
}
Parameter
Name
Description
name
InstanceName Required. The instance resource name, in the format
projects/{project_id}/locations/{location}/instances/{instance_id} .
Returns
Type
Description
Instance
getInstance(String name)
public final Instance getInstance ( String name )
Gets the details of a specific instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
String name = InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ();
Instance response = cloudFilestoreManagerClient . getInstance ( name );
}
Parameter
Name
Description
name
String Required. The instance resource name, in the format
projects/{project_id}/locations/{location}/instances/{instance_id} .
Returns
Type
Description
Instance
getInstanceCallable()
public final UnaryCallable<GetInstanceRequest , Instance > getInstanceCallable ()
Gets the details of a specific instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
GetInstanceRequest request =
GetInstanceRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. build ();
ApiFuture<Instance> future =
cloudFilestoreManagerClient . getInstanceCallable (). futureCall ( request );
// Do something.
Instance response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetInstanceRequest , Instance >
getOperationsClient()
public final OperationsClient getOperationsClient ()
Returns the OperationsClient that can be used to query the status of a long-running operation
returned by another API method call.
Returns
Type
Description
OperationsClient
getSettings()
public final CloudFilestoreManagerSettings getSettings ()
Returns
Type
Description
CloudFilestoreManagerSettings
getSnapshot(GetSnapshotRequest request)
public final Snapshot getSnapshot ( GetSnapshotRequest request )
Gets the details of a specific snapshot.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
GetSnapshotRequest request =
GetSnapshotRequest . newBuilder ()
. setName (
SnapshotName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" , "[SNAPSHOT]" ). toString ())
. build ();
Snapshot response = cloudFilestoreManagerClient . getSnapshot ( request );
}
Parameter
Name
Description
request
GetSnapshotRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Snapshot
getSnapshot(SnapshotName name)
public final Snapshot getSnapshot ( SnapshotName name )
Gets the details of a specific snapshot.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
SnapshotName name = SnapshotName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" , "[SNAPSHOT]" );
Snapshot response = cloudFilestoreManagerClient . getSnapshot ( name );
}
Parameter
Name
Description
name
SnapshotName Required. The snapshot resource name, in the format
projects/{project_id}/locations/{location}/instances/{instance_id}/snapshots/{snapshot_id}
Returns
Type
Description
Snapshot
getSnapshot(String name)
public final Snapshot getSnapshot ( String name )
Gets the details of a specific snapshot.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
String name =
SnapshotName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" , "[SNAPSHOT]" ). toString ();
Snapshot response = cloudFilestoreManagerClient . getSnapshot ( name );
}
Parameter
Name
Description
name
String Required. The snapshot resource name, in the format
projects/{project_id}/locations/{location}/instances/{instance_id}/snapshots/{snapshot_id}
Returns
Type
Description
Snapshot
getSnapshotCallable()
public final UnaryCallable<GetSnapshotRequest , Snapshot > getSnapshotCallable ()
Gets the details of a specific snapshot.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
GetSnapshotRequest request =
GetSnapshotRequest . newBuilder ()
. setName (
SnapshotName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" , "[SNAPSHOT]" ). toString ())
. build ();
ApiFuture<Snapshot> future =
cloudFilestoreManagerClient . getSnapshotCallable (). futureCall ( request );
// Do something.
Snapshot response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetSnapshotRequest , Snapshot >
getStub()
public CloudFilestoreManagerStub getStub ()
Returns
Type
Description
CloudFilestoreManagerStub
isShutdown()
public boolean isShutdown ()
Returns
Type
Description
boolean
isTerminated()
public boolean isTerminated ()
Returns
Type
Description
boolean
listBackups(ListBackupsRequest request)
public final CloudFilestoreManagerClient . ListBackupsPagedResponse listBackups ( ListBackupsRequest request )
Lists all backups in a project for either a specified location or for all locations.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
ListBackupsRequest request =
ListBackupsRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setOrderBy ( "orderBy-1207110587" )
. setFilter ( "filter-1274492040" )
. build ();
for ( Backup element : cloudFilestoreManagerClient . listBackups ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListBackupsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
CloudFilestoreManagerClient.ListBackupsPagedResponse
listBackups(LocationName parent)
public final CloudFilestoreManagerClient . ListBackupsPagedResponse listBackups ( LocationName parent )
Lists all backups in a project for either a specified location or for all locations.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
for ( Backup element : cloudFilestoreManagerClient . listBackups ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
LocationName Required. The project and location for which to retrieve backup information, in
the format projects/{project_number}/locations/{location} . In Filestore, backup locations
map to Google Cloud regions, for example **us-west1**. To retrieve backup
information for all locations, use "-" for the {location} value.
Returns
Type
Description
CloudFilestoreManagerClient.ListBackupsPagedResponse
listBackups(String parent)
public final CloudFilestoreManagerClient . ListBackupsPagedResponse listBackups ( String parent )
Lists all backups in a project for either a specified location or for all locations.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
for ( Backup element : cloudFilestoreManagerClient . listBackups ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The project and location for which to retrieve backup information, in
the format projects/{project_number}/locations/{location} . In Filestore, backup locations
map to Google Cloud regions, for example **us-west1**. To retrieve backup
information for all locations, use "-" for the {location} value.
Returns
Type
Description
CloudFilestoreManagerClient.ListBackupsPagedResponse
listBackupsCallable()
public final UnaryCallable<ListBackupsRequest , ListBackupsResponse > listBackupsCallable ()
Lists all backups in a project for either a specified location or for all locations.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
ListBackupsRequest request =
ListBackupsRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setOrderBy ( "orderBy-1207110587" )
. setFilter ( "filter-1274492040" )
. build ();
while ( true ) {
ListBackupsResponse response =
cloudFilestoreManagerClient . listBackupsCallable (). call ( request );
for ( Backup element : response . getBackupsList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < ListBackupsRequest , ListBackupsResponse >
listBackupsPagedCallable()
public final UnaryCallable<ListBackupsRequest , CloudFilestoreManagerClient . ListBackupsPagedResponse > listBackupsPagedCallable ()
Lists all backups in a project for either a specified location or for all locations.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
ListBackupsRequest request =
ListBackupsRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setOrderBy ( "orderBy-1207110587" )
. setFilter ( "filter-1274492040" )
. build ();
ApiFuture<Backup> future =
cloudFilestoreManagerClient . listBackupsPagedCallable (). futureCall ( request );
// Do something.
for ( Backup element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListBackupsRequest , ListBackupsPagedResponse >
listInstances(ListInstancesRequest request)
public final CloudFilestoreManagerClient . ListInstancesPagedResponse listInstances ( ListInstancesRequest request )
Lists all instances in a project for either a specified location or for all locations.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
ListInstancesRequest request =
ListInstancesRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setOrderBy ( "orderBy-1207110587" )
. setFilter ( "filter-1274492040" )
. build ();
for ( Instance element : cloudFilestoreManagerClient . listInstances ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListInstancesRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
CloudFilestoreManagerClient.ListInstancesPagedResponse
listInstances(LocationName parent)
public final CloudFilestoreManagerClient . ListInstancesPagedResponse listInstances ( LocationName parent )
Lists all instances in a project for either a specified location or for all locations.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
for ( Instance element : cloudFilestoreManagerClient . listInstances ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
LocationName Required. The project and location for which to retrieve instance information, in
the format projects/{project_id}/locations/{location} . In Cloud Filestore, locations map
to Google Cloud zones, for example
*us-west1-b**. To retrieve instance information for all locations, use
"-" for the {location} value.
Returns
Type
Description
CloudFilestoreManagerClient.ListInstancesPagedResponse
listInstances(String parent)
public final CloudFilestoreManagerClient . ListInstancesPagedResponse listInstances ( String parent )
Lists all instances in a project for either a specified location or for all locations.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
for ( Instance element : cloudFilestoreManagerClient . listInstances ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The project and location for which to retrieve instance information, in
the format projects/{project_id}/locations/{location} . In Cloud Filestore, locations map
to Google Cloud zones, for example
*us-west1-b**. To retrieve instance information for all locations, use
"-" for the {location} value.
Returns
Type
Description
CloudFilestoreManagerClient.ListInstancesPagedResponse
listInstancesCallable()
public final UnaryCallable<ListInstancesRequest , ListInstancesResponse > listInstancesCallable ()
Lists all instances in a project for either a specified location or for all locations.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
ListInstancesRequest request =
ListInstancesRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setOrderBy ( "orderBy-1207110587" )
. setFilter ( "filter-1274492040" )
. build ();
while ( true ) {
ListInstancesResponse response =
cloudFilestoreManagerClient . listInstancesCallable (). call ( request );
for ( Instance element : response . getInstancesList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < ListInstancesRequest , ListInstancesResponse >
listInstancesPagedCallable()
public final UnaryCallable<ListInstancesRequest , CloudFilestoreManagerClient . ListInstancesPagedResponse > listInstancesPagedCallable ()
Lists all instances in a project for either a specified location or for all locations.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
ListInstancesRequest request =
ListInstancesRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setOrderBy ( "orderBy-1207110587" )
. setFilter ( "filter-1274492040" )
. build ();
ApiFuture<Instance> future =
cloudFilestoreManagerClient . listInstancesPagedCallable (). futureCall ( request );
// Do something.
for ( Instance element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListInstancesRequest , ListInstancesPagedResponse >
listSnapshots(InstanceName parent)
public final CloudFilestoreManagerClient . ListSnapshotsPagedResponse listSnapshots ( InstanceName parent )
Lists all snapshots in a project for either a specified location or for all locations.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
InstanceName parent = InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" );
for ( Snapshot element : cloudFilestoreManagerClient . listSnapshots ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
InstanceName Required. The instance for which to retrieve snapshot information, in the format
projects/{project_id}/locations/{location}/instances/{instance_id} .
Returns
Type
Description
CloudFilestoreManagerClient.ListSnapshotsPagedResponse
listSnapshots(ListSnapshotsRequest request)
public final CloudFilestoreManagerClient . ListSnapshotsPagedResponse listSnapshots ( ListSnapshotsRequest request )
Lists all snapshots in a project for either a specified location or for all locations.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
ListSnapshotsRequest request =
ListSnapshotsRequest . newBuilder ()
. setParent ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setOrderBy ( "orderBy-1207110587" )
. setFilter ( "filter-1274492040" )
. setReturnPartialSuccess ( true )
. build ();
for ( Snapshot element : cloudFilestoreManagerClient . listSnapshots ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListSnapshotsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
CloudFilestoreManagerClient.ListSnapshotsPagedResponse
listSnapshots(String parent)
public final CloudFilestoreManagerClient . ListSnapshotsPagedResponse listSnapshots ( String parent )
Lists all snapshots in a project for either a specified location or for all locations.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
String parent = InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ();
for ( Snapshot element : cloudFilestoreManagerClient . listSnapshots ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The instance for which to retrieve snapshot information, in the format
projects/{project_id}/locations/{location}/instances/{instance_id} .
Returns
Type
Description
CloudFilestoreManagerClient.ListSnapshotsPagedResponse
listSnapshotsCallable()
public final UnaryCallable<ListSnapshotsRequest , ListSnapshotsResponse > listSnapshotsCallable ()
Lists all snapshots in a project for either a specified location or for all locations.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
ListSnapshotsRequest request =
ListSnapshotsRequest . newBuilder ()
. setParent ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setOrderBy ( "orderBy-1207110587" )
. setFilter ( "filter-1274492040" )
. setReturnPartialSuccess ( true )
. build ();
while ( true ) {
ListSnapshotsResponse response =
cloudFilestoreManagerClient . listSnapshotsCallable (). call ( request );
for ( Snapshot element : response . getSnapshotsList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < ListSnapshotsRequest , ListSnapshotsResponse >
listSnapshotsPagedCallable()
public final UnaryCallable<ListSnapshotsRequest , CloudFilestoreManagerClient . ListSnapshotsPagedResponse > listSnapshotsPagedCallable ()
Lists all snapshots in a project for either a specified location or for all locations.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
ListSnapshotsRequest request =
ListSnapshotsRequest . newBuilder ()
. setParent ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setOrderBy ( "orderBy-1207110587" )
. setFilter ( "filter-1274492040" )
. setReturnPartialSuccess ( true )
. build ();
ApiFuture<Snapshot> future =
cloudFilestoreManagerClient . listSnapshotsPagedCallable (). futureCall ( request );
// Do something.
for ( Snapshot element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListSnapshotsRequest , ListSnapshotsPagedResponse >
promoteReplicaAsync(PromoteReplicaRequest request)
public final OperationFuture<Instance , OperationMetadata > promoteReplicaAsync ( PromoteReplicaRequest request )
Promote the standby instance (replica).
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
PromoteReplicaRequest request =
PromoteReplicaRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. setPeerInstance ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. build ();
Instance response = cloudFilestoreManagerClient . promoteReplicaAsync ( request ). get ();
}
Parameter
Name
Description
request
PromoteReplicaRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Instance , OperationMetadata >
promoteReplicaCallable()
public final UnaryCallable<PromoteReplicaRequest , Operation > promoteReplicaCallable ()
Promote the standby instance (replica).
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
PromoteReplicaRequest request =
PromoteReplicaRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. setPeerInstance ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. build ();
ApiFuture<Operation> future =
cloudFilestoreManagerClient . promoteReplicaCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < PromoteReplicaRequest , Operation >
promoteReplicaOperationCallable()
public final OperationCallable<PromoteReplicaRequest , Instance , OperationMetadata > promoteReplicaOperationCallable ()
Promote the standby instance (replica).
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
PromoteReplicaRequest request =
PromoteReplicaRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. setPeerInstance ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. build ();
OperationFuture<Instance , OperationMetadata > future =
cloudFilestoreManagerClient . promoteReplicaOperationCallable (). futureCall ( request );
// Do something.
Instance response = future . get ();
}
Returns
Type
Description
OperationCallable < PromoteReplicaRequest , Instance , OperationMetadata >
restoreInstanceAsync(RestoreInstanceRequest request)
public final OperationFuture<Instance , OperationMetadata > restoreInstanceAsync ( RestoreInstanceRequest request )
Restores an existing instance's file share from a backup.
The capacity of the instance needs to be equal to or larger than the capacity of the backup
(and also equal to or larger than the minimum capacity of the tier).
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
RestoreInstanceRequest request =
RestoreInstanceRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. setFileShare ( "fileShare-1327728701" )
. build ();
Instance response = cloudFilestoreManagerClient . restoreInstanceAsync ( request ). get ();
}
Parameter
Name
Description
request
RestoreInstanceRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Instance , OperationMetadata >
restoreInstanceCallable()
public final UnaryCallable<RestoreInstanceRequest , Operation > restoreInstanceCallable ()
Restores an existing instance's file share from a backup.
The capacity of the instance needs to be equal to or larger than the capacity of the backup
(and also equal to or larger than the minimum capacity of the tier).
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
RestoreInstanceRequest request =
RestoreInstanceRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. setFileShare ( "fileShare-1327728701" )
. build ();
ApiFuture<Operation> future =
cloudFilestoreManagerClient . restoreInstanceCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < RestoreInstanceRequest , Operation >
restoreInstanceOperationCallable()
public final OperationCallable<RestoreInstanceRequest , Instance , OperationMetadata > restoreInstanceOperationCallable ()
Restores an existing instance's file share from a backup.
The capacity of the instance needs to be equal to or larger than the capacity of the backup
(and also equal to or larger than the minimum capacity of the tier).
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
RestoreInstanceRequest request =
RestoreInstanceRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. setFileShare ( "fileShare-1327728701" )
. build ();
OperationFuture<Instance , OperationMetadata > future =
cloudFilestoreManagerClient . restoreInstanceOperationCallable (). futureCall ( request );
// Do something.
Instance response = future . get ();
}
Returns
Type
Description
OperationCallable < RestoreInstanceRequest , Instance , OperationMetadata >
revertInstanceAsync(RevertInstanceRequest request)
public final OperationFuture<Instance , OperationMetadata > revertInstanceAsync ( RevertInstanceRequest request )
Revert an existing instance's file system to a specified snapshot.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
RevertInstanceRequest request =
RevertInstanceRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. setTargetSnapshotId ( "targetSnapshotId-2099459472" )
. build ();
Instance response = cloudFilestoreManagerClient . revertInstanceAsync ( request ). get ();
}
Parameter
Name
Description
request
RevertInstanceRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Instance , OperationMetadata >
revertInstanceCallable()
public final UnaryCallable<RevertInstanceRequest , Operation > revertInstanceCallable ()
Revert an existing instance's file system to a specified snapshot.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
RevertInstanceRequest request =
RevertInstanceRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. setTargetSnapshotId ( "targetSnapshotId-2099459472" )
. build ();
ApiFuture<Operation> future =
cloudFilestoreManagerClient . revertInstanceCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < RevertInstanceRequest , Operation >
revertInstanceOperationCallable()
public final OperationCallable<RevertInstanceRequest , Instance , OperationMetadata > revertInstanceOperationCallable ()
Revert an existing instance's file system to a specified snapshot.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
RevertInstanceRequest request =
RevertInstanceRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. setTargetSnapshotId ( "targetSnapshotId-2099459472" )
. build ();
OperationFuture<Instance , OperationMetadata > future =
cloudFilestoreManagerClient . revertInstanceOperationCallable (). futureCall ( request );
// Do something.
Instance response = future . get ();
}
Returns
Type
Description
OperationCallable < RevertInstanceRequest , Instance , OperationMetadata >
shutdown()
public void shutdown ()
shutdownNow()
public void shutdownNow ()
updateBackupAsync(Backup backup, FieldMask updateMask)
public final OperationFuture<Backup , OperationMetadata > updateBackupAsync ( Backup backup , FieldMask updateMask )
Updates the settings of a specific backup.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
Backup backup = Backup . newBuilder (). build ();
FieldMask updateMask = FieldMask . newBuilder (). build ();
Backup response = cloudFilestoreManagerClient . updateBackupAsync ( backup , updateMask ). get ();
}
Parameters
Name
Description
backup
Backup Required. A backup resource
updateMask
FieldMask Required. Mask of fields to update. At least one path must be supplied in
this field.
Returns
Type
Description
OperationFuture < Backup , OperationMetadata >
updateBackupAsync(UpdateBackupRequest request)
public final OperationFuture<Backup , OperationMetadata > updateBackupAsync ( UpdateBackupRequest request )
Updates the settings of a specific backup.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
UpdateBackupRequest request =
UpdateBackupRequest . newBuilder ()
. setBackup ( Backup . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
Backup response = cloudFilestoreManagerClient . updateBackupAsync ( request ). get ();
}
Parameter
Name
Description
request
UpdateBackupRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Backup , OperationMetadata >
updateBackupCallable()
public final UnaryCallable<UpdateBackupRequest , Operation > updateBackupCallable ()
Updates the settings of a specific backup.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
UpdateBackupRequest request =
UpdateBackupRequest . newBuilder ()
. setBackup ( Backup . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
ApiFuture<Operation> future =
cloudFilestoreManagerClient . updateBackupCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < UpdateBackupRequest , Operation >
updateBackupOperationCallable()
public final OperationCallable<UpdateBackupRequest , Backup , OperationMetadata > updateBackupOperationCallable ()
Updates the settings of a specific backup.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
UpdateBackupRequest request =
UpdateBackupRequest . newBuilder ()
. setBackup ( Backup . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
OperationFuture<Backup , OperationMetadata > future =
cloudFilestoreManagerClient . updateBackupOperationCallable (). futureCall ( request );
// Do something.
Backup response = future . get ();
}
Returns
Type
Description
OperationCallable < UpdateBackupRequest , Backup , OperationMetadata >
updateInstanceAsync(Instance instance, FieldMask updateMask)
public final OperationFuture<Instance , OperationMetadata > updateInstanceAsync ( Instance instance , FieldMask updateMask )
Updates the settings of a specific instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
Instance instance = Instance . newBuilder (). build ();
FieldMask updateMask = FieldMask . newBuilder (). build ();
Instance response =
cloudFilestoreManagerClient . updateInstanceAsync ( instance , updateMask ). get ();
}
Parameters
Name
Description
instance
Instance Only fields specified in update_mask are updated.
updateMask
FieldMask Mask of fields to update. At least one path must be supplied in this field.
The elements of the repeated paths field may only include these fields:
"description"
"file_shares"
"labels"
"performance_config"
"deletion_protection_enabled"
"deletion_protection_reason"
Returns
Type
Description
OperationFuture < Instance , OperationMetadata >
updateInstanceAsync(UpdateInstanceRequest request)
public final OperationFuture<Instance , OperationMetadata > updateInstanceAsync ( UpdateInstanceRequest request )
Updates the settings of a specific instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
UpdateInstanceRequest request =
UpdateInstanceRequest . newBuilder ()
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setInstance ( Instance . newBuilder (). build ())
. build ();
Instance response = cloudFilestoreManagerClient . updateInstanceAsync ( request ). get ();
}
Parameter
Name
Description
request
UpdateInstanceRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Instance , OperationMetadata >
updateInstanceCallable()
public final UnaryCallable<UpdateInstanceRequest , Operation > updateInstanceCallable ()
Updates the settings of a specific instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
UpdateInstanceRequest request =
UpdateInstanceRequest . newBuilder ()
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setInstance ( Instance . newBuilder (). build ())
. build ();
ApiFuture<Operation> future =
cloudFilestoreManagerClient . updateInstanceCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < UpdateInstanceRequest , Operation >
updateInstanceOperationCallable()
public final OperationCallable<UpdateInstanceRequest , Instance , OperationMetadata > updateInstanceOperationCallable ()
Updates the settings of a specific instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
UpdateInstanceRequest request =
UpdateInstanceRequest . newBuilder ()
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setInstance ( Instance . newBuilder (). build ())
. build ();
OperationFuture<Instance , OperationMetadata > future =
cloudFilestoreManagerClient . updateInstanceOperationCallable (). futureCall ( request );
// Do something.
Instance response = future . get ();
}
Returns
Type
Description
OperationCallable < UpdateInstanceRequest , Instance , OperationMetadata >
updateSnapshotAsync(Snapshot snapshot, FieldMask updateMask)
public final OperationFuture<Snapshot , OperationMetadata > updateSnapshotAsync ( Snapshot snapshot , FieldMask updateMask )
Updates the settings of a specific snapshot.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
Snapshot snapshot = Snapshot . newBuilder (). build ();
FieldMask updateMask = FieldMask . newBuilder (). build ();
Snapshot response =
cloudFilestoreManagerClient . updateSnapshotAsync ( snapshot , updateMask ). get ();
}
Parameters
Name
Description
snapshot
Snapshot Required. A snapshot resource.
updateMask
FieldMask Required. Mask of fields to update. At least one path must be supplied in
this field.
Returns
Type
Description
OperationFuture < Snapshot , OperationMetadata >
updateSnapshotAsync(UpdateSnapshotRequest request)
public final OperationFuture<Snapshot , OperationMetadata > updateSnapshotAsync ( UpdateSnapshotRequest request )
Updates the settings of a specific snapshot.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
UpdateSnapshotRequest request =
UpdateSnapshotRequest . newBuilder ()
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setSnapshot ( Snapshot . newBuilder (). build ())
. build ();
Snapshot response = cloudFilestoreManagerClient . updateSnapshotAsync ( request ). get ();
}
Parameter
Name
Description
request
UpdateSnapshotRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Snapshot , OperationMetadata >
updateSnapshotCallable()
public final UnaryCallable<UpdateSnapshotRequest , Operation > updateSnapshotCallable ()
Updates the settings of a specific snapshot.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
UpdateSnapshotRequest request =
UpdateSnapshotRequest . newBuilder ()
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setSnapshot ( Snapshot . newBuilder (). build ())
. build ();
ApiFuture<Operation> future =
cloudFilestoreManagerClient . updateSnapshotCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < UpdateSnapshotRequest , Operation >
updateSnapshotOperationCallable()
public final OperationCallable<UpdateSnapshotRequest , Snapshot , OperationMetadata > updateSnapshotOperationCallable ()
Updates the settings of a specific snapshot.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CloudFilestoreManagerClient cloudFilestoreManagerClient =
CloudFilestoreManagerClient . create ()) {
UpdateSnapshotRequest request =
UpdateSnapshotRequest . newBuilder ()
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setSnapshot ( Snapshot . newBuilder (). build ())
. build ();
OperationFuture<Snapshot , OperationMetadata > future =
cloudFilestoreManagerClient . updateSnapshotOperationCallable (). futureCall ( request );
// Do something.
Snapshot response = future . get ();
}
Returns
Type
Description
OperationCallable < UpdateSnapshotRequest , Snapshot , OperationMetadata >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
