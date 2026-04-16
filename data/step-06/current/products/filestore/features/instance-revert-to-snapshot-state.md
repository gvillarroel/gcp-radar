---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.657Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Instance revert to snapshot state"
feature_slug: "instance-revert-to-snapshot-state"
latest_feature_date: "2024-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/create-snapshots"
  - "https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub"
  - "https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient"
keywords:
  - "instance"
  - "revert"
  - "to"
  - "snapshot"
  - "state"
  - "filestore"
  - "instances"
  - "can"
---

# Instance revert to snapshot state

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Filestore instances can be reverted to a snapshot state.

## Extended Definition

Filestore instances can be reverted to a snapshot state.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/create-snapshots](https://docs.cloud.google.com/filestore/docs/create-snapshots)
- [https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances](https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub)
- [https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient)

## Supporting Pages

### "Create a snapshot to preserve the state of your data \_|\_ Filestore \_\

- URL: [https://docs.cloud.google.com/filestore/docs/create-snapshots](https://docs.cloud.google.com/filestore/docs/create-snapshots)
- Source ID: `site-docs-root-2`
- Final score: 323
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Snapshots overview Restore a file from a snapshot Revert an instance to a prior snapshot state Schedule Filestore enterprise snapshots Backups overview Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The snapshot is named nfs-server-snapshot . gcloud filestore instances snapshots create nfs-server-snapshot \ --instance = nfs-server \ --instance-location = us-central1 \ List, view, update, and delete snapshots You can list, view, update, and delete snapshots.
- Create a snapshot You can create a snapshot of an instance using one of the following methods: Google Cloud console In the Google Cloud console, go to the Filestore instances page.
- Click Delete . gcloud CLI List all snapshots in your current project To view a list of snapshots for an instance, run the instances snapshots list command: gcloud filestore instances snapshots list \ --instance = INSTANCE ID \ --instance-location = LOCATION Replace the following: INSTANCE ID with the name of the instance from which you want to create a list of snapshots.

### "REST Resource: projects.locations.instances \_|\_ Filestore \_|\_ Google\

- URL: [https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances](https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances)
- Source ID: `site-api-reference`
- Final score: 313
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods create Creates an instance. delete Deletes an instance. get Gets the details of a specific instance. list Lists all instances in a project for either a specified location or for all locations. patch Updates the settings of a specific instance. promoteReplica Promote the standby instance (replica). restore Restores an existing instance's file share from a backup. revert Revert an existing instance's file system to a specified snapshot.
- The range you specify can't overlap with either existing subnets or assigned IP address ranges for other Filestore instances in the selected VPC network. ipAddresses[] string Output only.
- Resource: Instance JSON representation State FileShareConfig JSON representation NfsExportOptions JSON representation AccessMode SquashMode NetworkConfig JSON representation AddressMode ConnectMode PscConfig JSON representation SuspensionReason Replication JSON representation Role ReplicaConfig JSON representation State StateReason PerformanceConfig JSON representation IOPSPerTB JSON representation FixedIOPS JSON representation PerformanceLimits JSON representation Methods Resource: Instance A Filestore instance.
- Home Documentation Storage Filestore Reference Send feedback REST Resource: projects.locations.instances Stay organized with collections Save and categorize content based on your preferences.

### "Class CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub (1.89.0)\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub)
- Source ID: `site-java-reference`
- Final score: 312
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As such, Filestore instances are resources of the form: /projects/{project number}/locations/{location id}/instances/{instance id} and backups are resources of the form: /projects/{project number}/locations/{location id}/backup/{backup id} Note that location id must be a Google Cloud zone for instances, but a Google Cloud region for backups; for example: projects/12345/locations/us-central1-c/instances/my-filestore projects/12345/locations/us-central1/backups/my-backup Inheritance java.lang.Object > io.grpc.stub.AbstractStub > io.grpc.stub.AbstractBlockingStub > CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub Inherited Members io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel) io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T) io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.getCallOptions() io.grpc.stub.AbstractStub.getChannel() io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials) io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel) io.grpc.stub.AbstractStub.withCompression(java.lang.String) io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline) io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration) io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit) io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor) io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...) io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int) io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int) io.grpc.stub.AbstractStub.withOnReadyThreshold(int) io.grpc.stub.AbstractStub.withWaitForReady() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods build(Channel channel, CallOptions callOptions) protected CloudFilestoreManagerGrpc .
- The file.googleapis.com service implements the Filestore API and defines the following resource model for managing instances: The service works with a collection of cloud projects, named: /projects/ Each project has a collection of available locations, named: /locations/ Each location has a collection of instances and backups, named: /instances/ and /backups/ respectively.
- Parameter Name Description request RestoreInstanceRequest Returns Type Description Operation revertInstance(RevertInstanceRequest request) public Operation revertInstance ( RevertInstanceRequest request ) Revert an existing instance's file system to a specified snapshot.
- Parameter Name Description request ListInstancesRequest Returns Type Description ListInstancesResponse listSnapshots(ListSnapshotsRequest request) public ListSnapshotsResponse listSnapshots ( ListSnapshotsRequest request ) Lists all snapshots in a project for either a specified location or for all locations.

### "Class CloudFilestoreManagerAsyncClient (1.16.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 309
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- RevertInstanceRequest ( name="name value", target snapshot id="target snapshot id value", ) Make the request operation = client. revert instance (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.filestore v1.types.RevertInstanceRequest , dict]] The request object.
- The Filestore Instance to create the snapshots of, in the format projects/{project id}/locations/{location}/instances/{instance id} This corresponds to the parent field on the request instance; if request is provided, this should not be set. snapshot Snapshot Required.
- As such, Filestore instances are resources of the form: /projects/{project number}/locations/{location id}/instances/{instance id} and backups are resources of the form: /projects/{project number}/locations/{location id}/backup/{backup id} Note that location id must be a Google Cloud zone for instances, but a Google Cloud region for backups; for example: projects/12345/locations/us-central1-c/instances/my-filestore projects/12345/locations/us-central1/backups/my-backup Properties api endpoint Return the API endpoint used by the client instance.
- The snapshot resource name, in the format projects/{project id}/locations/{location}/instances/{instance id}/snapshots/{snapshot id} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

