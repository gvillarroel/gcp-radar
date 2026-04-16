---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.668Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Filestore availability in us-west4"
feature_slug: "filestore-availability-in-us-west4"
latest_feature_date: "2020-04-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/create-custom-constraints"
  - "https://docs.cloud.google.com/filestore/docs/create-instance-gcloud"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub"
  - "https://docs.cloud.google.com/filestore/docs/monitoring-instances"
keywords:
  - "filestore"
  - "availability"
  - "in"
  - "us"
  - "west4"
  - "is"
  - "available"
  - "the"
---

# Filestore availability in us-west4

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Filestore is available in the us-west4 region.

## Extended Definition

Filestore is available in the us-west4 region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/create-custom-constraints](https://docs.cloud.google.com/filestore/docs/create-custom-constraints)
- [https://docs.cloud.google.com/filestore/docs/create-instance-gcloud](https://docs.cloud.google.com/filestore/docs/create-instance-gcloud)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub)
- [https://docs.cloud.google.com/filestore/docs/monitoring-instances](https://docs.cloud.google.com/filestore/docs/monitoring-instances)

## Supporting Pages

### Creating custom constraints for Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/create-custom-constraints](https://docs.cloud.google.com/filestore/docs/create-custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Test the policy Try creating an instance without setting deletionProtection to true : gcloud filestore instances create test-ins --zone = us-central1 --tier = enterprise --network = name = "default" --file-share = "capacity=1024,name=test-fs" The output is similar to the following: ERROR: (gcloud.filestore.instances.create) FAILED PRECONDITION: Operation denied by custom org policy on resource 'projects/test-project/locations/us-central1/instances/test-ins': ["customConstraints/custom.deletionProtectionEnabledEnforcedOnCreate": "Enforce instance creation with deletion protection."]. - '@type': type.googleapis.com/google.rpc.DebugInfo detail: "generic::failed precondition: Operation denied by custom org policy on\ \ resource 'projects/test-project/locations/us-central1/instances/test-ins':\ \ [\"customConstraints/custom.deletionProtectionEnabledEnforcedOnCreate\": \"\ Enforce instance creation with deletion protection.\"]." . . . - '@type': type.googleapis.com/google.rpc.DebugInfo - '@type': type.googleapis.com/google.rpc.ErrorInfo domain: file.googleapis.com metadata: customConstraints: customConstraints/custom.deletionProtectionEnabledEnforcedOnCreate resource: projects/test-project/locations/us-central1/instances/test-ins reason: CUSTOM ORG POLICY VIOLATION Example custom organization policies for common use cases The following table lists custom organization policies that you might find useful: Description Constraint syntax When setting the access control to a restricted list of IPs and roles, allow setting the administrator IP to a unique IP name : organizations/ ORGANIZATION ID /customConstraints/custom.filestoreAdminIP resourceTypes : - file.googleapis.com/Instance methodTypes : - CREATE - UPDATE condition : "resource.fileShares.size() > 0 && resource.fileShares[0].nfsExportOptions.size() > 0 && resource.fileShares[0].nfsExportOptions.exists(o, o.squashMode == 'NO ROOT SQUASH' && o.accessMode == 'READ WRITE' && o.ipRanges.exists(i, i != '10.0.0.1'))" actionType : ALLOW displayName : Access control admin IP description : Access control restriction allows setting admin IP exclusively to 10.0.0.1.
- Test the custom organization policy The following example creates a custom constraint and policy that lets the users create a Filestore instance if the deletionProtection field is set to true .
- Filestore supported resources The following table lists the Filestore resources that you can reference in custom constraints.
- When you have entered a value into each field, the equivalent YAML configuration for this custom constraint appears on the right. gcloud To create a custom constraint, create a YAML file using the following format: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : RESOURCE NAME methodTypes : - CREATE - UPDATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .

### "Quickstart: Create a Filestore instance by using the gcloud CLI \_|\_ Google\

- URL: [https://docs.cloud.google.com/filestore/docs/create-instance-gcloud](https://docs.cloud.google.com/filestore/docs/create-instance-gcloud)
- Source ID: `site-docs-root`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In PowerShell , run the following commands to create two new registry entries, AnonymousUid and AnonymousGid : New-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\ClientForNFS\CurrentVersion\Default" -Name "AnonymousUid" -Value "0" -PropertyType DWORD New-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\ClientForNFS\CurrentVersion\Default" -Name "AnonymousGid" -Value "0" -PropertyType DWORD Restart the NFS client service: nfsadmin client stop nfsadmin client start Map the vol1 file share to the nfs-client instance Exit PowerShell : exit From Command Prompt , mount the file share to the nfs-client instance with the mount command by specifying the IP address of the Filestore instance, the name of the file share, and the drive letter to mount to: mount - o mtype = hard 10.0.0.2 : / vol1 z : Create a file on the mounted file share Linux In the nfs-client terminal window, create a file named testfile by running the following command: echo 'This is a test' > /mnt/test/testfile Confirm the file was created by running the following command and verifying that testfile is in the directory contents returned: ls /mnt/test Windows In the Command Prompt window of the nfs-client instance, create a file named testfile : echo 'This is a test' > Z:\testfile Confirm the file was created by running the following command: dir Z: and verifying that testfile is in the directory contents returned.
- Set the --tags flag to http-server . gcloud compute instances create nfs-client --zone = us-central1-c --image-project = windows-cloud --image-family = windows-2012-r2 --tags = http-server Create a Filestore instance This quickstart shows how to create an instance in the regional service tier with custom performance enabled.
- Enable the Filestore API: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Enable the Filestore API: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.

### "Class CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub (1.89.0)\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub)
- Source ID: `site-java-reference`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The file.googleapis.com service implements the Filestore API and defines the following resource model for managing instances: The service works with a collection of cloud projects, named: /projects/ Each project has a collection of available locations, named: /locations/ Each location has a collection of instances and backups, named: /instances/ and /backups/ respectively.
- As such, Filestore instances are resources of the form: /projects/{project number}/locations/{location id}/instances/{instance id} and backups are resources of the form: /projects/{project number}/locations/{location id}/backup/{backup id} Note that location id must be a Google Cloud zone for instances, but a Google Cloud region for backups; for example: projects/12345/locations/us-central1-c/instances/my-filestore projects/12345/locations/us-central1/backups/my-backup Inheritance java.lang.Object > io.grpc.stub.AbstractStub > io.grpc.stub.AbstractBlockingStub > CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub Inherited Members io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel) io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T) io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.getCallOptions() io.grpc.stub.AbstractStub.getChannel() io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials) io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel) io.grpc.stub.AbstractStub.withCompression(java.lang.String) io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline) io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration) io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit) io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor) io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...) io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int) io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int) io.grpc.stub.AbstractStub.withOnReadyThreshold(int) io.grpc.stub.AbstractStub.withWaitForReady() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods build(Channel channel, CallOptions callOptions) protected CloudFilestoreManagerGrpc .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
- Parameter Name Description request ListInstancesRequest Returns Type Description ListInstancesResponse listSnapshots(ListSnapshotsRequest request) public ListSnapshotsResponse listSnapshots ( ListSnapshotsRequest request ) Lists all snapshots in a project for either a specified location or for all locations.

### Monitoring instances and quota \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/monitoring-instances](https://docs.cloud.google.com/filestore/docs/monitoring-instances)
- Source ID: `site-docs-root`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the Filestore instance caches the data, some write operations are not reflected as disk writes. ✓ ✓ Metadata operations count Number of disk metadata operations. ✓ Free bytes Number of free disk bytes. ✓ ✓ Free disk space percent Percentage of free disk bytes. ✓ ✓ Free raw capacity percent Free raw capacity as a percentage of total space. ✓ Procedure call count Returns the same information as the nfsstat -s command. ✓ Snapshots used bytes The amount of space used for storing snapshots, measured in bytes. ✓ Time (in milliseconds) spent on read operations Time spent on disk reads. ✓ Time (in milliseconds) spent on write operations Time spent on disk writes. ✓ Used bytes Number of used disk bytes. ✓ ✓ Used space percent Percentage of used disk bytes. ✓ ✓ Memory-cached operations only occur in basic tier instances.
- Add a Filestore metric chart to a Cloud Monitoring dashboard To see Filestore performance metrics in a Cloud Monitoring dashboard, follow these steps: In the Google Cloud console, go to the leaderboard Metrics explorer page: Go to Metrics explorer If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Select an available metric to view: Metric Description Basic tiers Regional, zonal, and enterprise tiers Average read latency The average time a read operation takes (in milliseconds). ✓ Average write latency The average time a write operation takes (in milliseconds). ✓ Bytes written Number of bytes written. ✓ ✓ Bytes read Number of bytes read from persistent storage.

