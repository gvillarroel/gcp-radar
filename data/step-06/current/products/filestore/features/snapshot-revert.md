---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.665Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Snapshot revert"
feature_slug: "snapshot-revert"
latest_feature_date: "2021-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/create-snapshots"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub"
  - "https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerClient"
keywords:
  - "snapshot"
  - "revert"
  - "filestore"
  - "snapshots"
  - "can"
  - "be"
  - "reverted"
  - "to"
---

# Snapshot revert

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Filestore snapshots can be reverted to a previous snapshot.

## Extended Definition

Filestore snapshots can be reverted to a previous snapshot.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/create-snapshots](https://docs.cloud.google.com/filestore/docs/create-snapshots)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub)
- [https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerClient](https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerClient)

## Supporting Pages

### "Create a snapshot to preserve the state of your data \_|\_ Filestore \_\

- URL: [https://docs.cloud.google.com/filestore/docs/create-snapshots](https://docs.cloud.google.com/filestore/docs/create-snapshots)
- Source ID: `site-docs-root-2`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Snapshots overview Restore a file from a snapshot Revert an instance to a prior snapshot state Schedule Filestore enterprise snapshots Backups overview Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The --description and --labels flags are added as optional arguments: gcloud filestore instances snapshots create SNAPSHOT ID \ --instance = INSTANCE ID \ --instance-location = LOCATION \ --description = " DESCRIPTION " \ --labels = KEY = VALUE Replace the following: SNAPSHOT ID with the name that you want to give the snapshot.
- View information about a snapshot To view information about a snapshot, run the instances snapshots describe command: gcloud filestore instances snapshots describe SNAPSHOT ID \ --instance = INSTANCE ID \ --instance-location = LOCATION Replace the following: SNAPSHOT ID with the name that you want to give the snapshot.
- The --description and --update-labels flags are added as optional arguments: gcloud filestore instances snapshots update SNAPSHOT ID \ --instance = INSTANCE ID \ --instance-location = LOCATION \ --description = " NEW-DESCRIPTION " \ --update-labels = KEY1 = VALUE1,KEY2 = VALUE2...

### "Class CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub (1.89.0)\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub)
- Source ID: `site-java-reference`
- Final score: 298
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As such, Filestore instances are resources of the form: /projects/{project number}/locations/{location id}/instances/{instance id} and backups are resources of the form: /projects/{project number}/locations/{location id}/backup/{backup id} Note that location id must be a Google Cloud zone for instances, but a Google Cloud region for backups; for example: projects/12345/locations/us-central1-c/instances/my-filestore projects/12345/locations/us-central1/backups/my-backup Inheritance java.lang.Object > io.grpc.stub.AbstractStub > io.grpc.stub.AbstractBlockingStub > CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub Inherited Members io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel) io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T) io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.getCallOptions() io.grpc.stub.AbstractStub.getChannel() io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials) io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel) io.grpc.stub.AbstractStub.withCompression(java.lang.String) io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline) io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration) io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit) io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor) io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...) io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int) io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int) io.grpc.stub.AbstractStub.withOnReadyThreshold(int) io.grpc.stub.AbstractStub.withWaitForReady() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods build(Channel channel, CallOptions callOptions) protected CloudFilestoreManagerGrpc .
- Parameter Name Description request RestoreInstanceRequest Returns Type Description Operation revertInstance(RevertInstanceRequest request) public Operation revertInstance ( RevertInstanceRequest request ) Revert an existing instance's file system to a specified snapshot.
- 1.89.0 (latest) 1.88.0 1.86.0 1.84.0 1.83.0 1.82.0 1.81.0 1.79.0 1.77.0 1.76.0 1.75.0 1.74.0 1.73.0 1.71.0 1.69.0 1.68.0 1.65.0 1.64.0 1.63.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.2.0 public static final class CloudFilestoreManagerGrpc .
- CloudFilestoreManagerBlockingStub build ( Channel channel , CallOptions callOptions ) Parameters Name Description channel io.grpc.Channel callOptions io.grpc.CallOptions Returns Type Description CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub Overrides io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions) createBackup(CreateBackupRequest request) public Operation createBackup ( CreateBackupRequest request ) Creates a backup.

### "Class CloudFilestoreManagerAsyncClient (1.16.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 274
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Filestore Instance to create the snapshots of, in the format projects/{project id}/locations/{location}/instances/{instance id} This corresponds to the parent field on the request instance; if request is provided, this should not be set. snapshot Snapshot Required.
- The snapshot resource name, in the format projects/{project id}/locations/{location}/instances/{instance id}/snapshots/{snapshot id} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The snapshot resource name, in the format projects/{project id}/locations/{location}/instances/{instance id}/snapshots/{snapshot id} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- RevertInstanceRequest ( name="name value", target snapshot id="target snapshot id value", ) Make the request operation = client. revert instance (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.filestore v1.types.RevertInstanceRequest , dict]] The request object.

### "Class CloudFilestoreManagerClient (1.16.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerClient](https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerClient)
- Source ID: `site-python-reference`
- Final score: 274
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Filestore Instance to create the snapshots of, in the format projects/{project id}/locations/{location}/instances/{instance id} This corresponds to the parent field on the request instance; if request is provided, this should not be set. snapshot google.cloud.filestore v1.types.Snapshot Required.
- The snapshot resource name, in the format projects/{project id}/locations/{location}/instances/{instance id}/snapshots/{snapshot id} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The snapshot resource name, in the format projects/{project id}/locations/{location}/instances/{instance id}/snapshots/{snapshot id} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- RevertInstanceRequest ( name="name value", target snapshot id="target snapshot id value", ) Make the request operation = client. revert instance (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.filestore v1.types.RevertInstanceRequest , dict] The request object.

