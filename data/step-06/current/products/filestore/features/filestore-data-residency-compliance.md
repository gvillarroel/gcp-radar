---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.662Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Filestore data residency compliance"
feature_slug: "filestore-data-residency-compliance"
latest_feature_date: "2023-03-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/getting-instance-information"
  - "https://docs.cloud.google.com/filestore/docs/create-custom-constraints"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub"
  - "https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances"
keywords:
  - "filestore"
  - "residency"
  - "compliance"
  - "meets"
  - "at"
  - "rest"
  - "and"
  - "in"
---

# Filestore data residency compliance

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Filestore data meets at-rest and in-use data residency requirements under Google Cloud terms.

## Extended Definition

Filestore data meets at-rest and in-use data residency requirements under Google Cloud terms.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/getting-instance-information](https://docs.cloud.google.com/filestore/docs/getting-instance-information)
- [https://docs.cloud.google.com/filestore/docs/create-custom-constraints](https://docs.cloud.google.com/filestore/docs/create-custom-constraints)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub)
- [https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances](https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances)

## Supporting Pages

### Get instance information \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/getting-instance-information](https://docs.cloud.google.com/filestore/docs/getting-instance-information)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- INSTANCE NAME ZONE TIER CAPACITY GB FILE SHARE NAME IP ADDRESS STATE CREATE TIME nfs-loc europe-west1-b BASIC HDD 1024 nfs1 10.0.5.2 READY 2017-10-09T22:11:28 nfs3 us-central1-c BASIC HDD 1024 acme 10.0.6.2 READY 2017-11-06T09:37:18 Example The following command lists the Filestore instances in project myproject : gcloud filestore instances list --project=myproject REST API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- Example The following command provides information about the test-nfs instance in project myproject , in region us-central1 . gcloud filestore instances describe test-nfs --project=myproject --region=us-central1 REST API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- Go to the Filestore instances page Click the instance ID to open the instance details page. gcloud Get information about a Filestore instance by running the instances describe command: gcloud filestore instances describe instance-id --project= project-id --location= location The response to the instances describe command is similar to the following: createTime: '2021-10-11T17:28:23.340943077Z' customPerformanceSupported: true fileShares: - capacityGb: '1024' name: vol1 kmsKeyName: projects/example-project/locations/us-central1/keyRings/example-ring/cryptoKeys/example-key labels: key:val name: projects/yourproject/locations/us-central1/instances/nfs-server networks: - ipAddresses: - 10.0.0.2 network: default reservedIpRange: 10.0.0.0/26 performanceConfig: iopsPerTb: maxIopsPerTb: '17000' performanceLimits: maxIops: '17000' maxReadIops: '17000' maxReadThroughputBps: '417792000' maxWriteIops: '5100' maxWriteThroughputBps: '139264000' state: READY tier: REGIONAL These fields represent the following values: createTime : The time the instance was created, in RFC 3339 format. fileShares : capacityGb : The size of the Filestore file share in binary gigabytes ( GB ), where 1 GB = 1024 3 bytes. name : The name of the Filestore file share.
- List the mount points for an instance You can list all mount points where a Filestore instance is mounted by running: sudo showmount -a INSTANCE IP Example The following command lists all mount points for a Filestore instance with the IP address 10.77.67.226 : sudo showmount -a 10.77.67.226 The response looks similar to the following: All mount points on 10 .77.67.226: 10 .128.0.1:/fileshare 10 .128.0.2:/fileshare 10 .128.0.3:/fileshare Get the number of mount points for an instance You can get the total number of mount points for a Filestore instance by running: sudo showmount -a INSTANCE IP --no-headers wc -l Example The following command displays the number of mount points for an instance with the IP address 10.77.67.226 : sudo showmount -a 10.77.67.226 --no-headers wc -l What's next Create another instance .

### Creating custom constraints for Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/create-custom-constraints](https://docs.cloud.google.com/filestore/docs/create-custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Test the policy Try creating an instance without setting deletionProtection to true : gcloud filestore instances create test-ins --zone = us-central1 --tier = enterprise --network = name = "default" --file-share = "capacity=1024,name=test-fs" The output is similar to the following: ERROR: (gcloud.filestore.instances.create) FAILED PRECONDITION: Operation denied by custom org policy on resource 'projects/test-project/locations/us-central1/instances/test-ins': ["customConstraints/custom.deletionProtectionEnabledEnforcedOnCreate": "Enforce instance creation with deletion protection."]. - '@type': type.googleapis.com/google.rpc.DebugInfo detail: "generic::failed precondition: Operation denied by custom org policy on\ \ resource 'projects/test-project/locations/us-central1/instances/test-ins':\ \ [\"customConstraints/custom.deletionProtectionEnabledEnforcedOnCreate\": \"\ Enforce instance creation with deletion protection.\"]." . . . - '@type': type.googleapis.com/google.rpc.DebugInfo - '@type': type.googleapis.com/google.rpc.ErrorInfo domain: file.googleapis.com metadata: customConstraints: customConstraints/custom.deletionProtectionEnabledEnforcedOnCreate resource: projects/test-project/locations/us-central1/instances/test-ins reason: CUSTOM ORG POLICY VIOLATION Example custom organization policies for common use cases The following table lists custom organization policies that you might find useful: Description Constraint syntax When setting the access control to a restricted list of IPs and roles, allow setting the administrator IP to a unique IP name : organizations/ ORGANIZATION ID /customConstraints/custom.filestoreAdminIP resourceTypes : - file.googleapis.com/Instance methodTypes : - CREATE - UPDATE condition : "resource.fileShares.size() > 0 && resource.fileShares[0].nfsExportOptions.size() > 0 && resource.fileShares[0].nfsExportOptions.exists(o, o.squashMode == 'NO ROOT SQUASH' && o.accessMode == 'READ WRITE' && o.ipRanges.exists(i, i != '10.0.0.1'))" actionType : ALLOW displayName : Access control admin IP description : Access control restriction allows setting admin IP exclusively to 10.0.0.1.
- As the organization policy administrator , you can define an organization policy, which is a set of restrictions called constraints that apply to Google Cloud resources and descendants of those resources in the Google Cloud resource hierarchy .
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom constraints and use those custom constraints in an organization policy.
- Test the custom organization policy The following example creates a custom constraint and policy that lets the users create a Filestore instance if the deletionProtection field is set to true .

### "Class CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub (1.89.0)\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub)
- Source ID: `site-java-reference`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As such, Filestore instances are resources of the form: /projects/{project number}/locations/{location id}/instances/{instance id} and backups are resources of the form: /projects/{project number}/locations/{location id}/backup/{backup id} Note that location id must be a Google Cloud zone for instances, but a Google Cloud region for backups; for example: projects/12345/locations/us-central1-c/instances/my-filestore projects/12345/locations/us-central1/backups/my-backup Inheritance java.lang.Object > io.grpc.stub.AbstractStub > io.grpc.stub.AbstractBlockingStub > CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub Inherited Members io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel) io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T) io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.getCallOptions() io.grpc.stub.AbstractStub.getChannel() io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials) io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel) io.grpc.stub.AbstractStub.withCompression(java.lang.String) io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline) io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration) io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit) io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor) io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...) io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int) io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int) io.grpc.stub.AbstractStub.withOnReadyThreshold(int) io.grpc.stub.AbstractStub.withWaitForReady() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods build(Channel channel, CallOptions callOptions) protected CloudFilestoreManagerGrpc .
- The file.googleapis.com service implements the Filestore API and defines the following resource model for managing instances: The service works with a collection of cloud projects, named: /projects/ Each project has a collection of available locations, named: /locations/ Each location has a collection of instances and backups, named: /instances/ and /backups/ respectively.
- Home Documentation Developer tools Java Client libraries Send feedback Class CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub (1.89.0) Stay organized with collections Save and categorize content based on your preferences.
- 1.89.0 (latest) 1.88.0 1.86.0 1.84.0 1.83.0 1.82.0 1.81.0 1.79.0 1.77.0 1.76.0 1.75.0 1.74.0 1.73.0 1.71.0 1.69.0 1.68.0 1.65.0 1.64.0 1.63.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.2.0 public static final class CloudFilestoreManagerGrpc .

### "REST Resource: projects.locations.instances \_|\_ Filestore \_|\_ Google\

- URL: [https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances](https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances)
- Source ID: `site-api-reference`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Storage Filestore Reference Send feedback REST Resource: projects.locations.instances Stay organized with collections Save and categorize content based on your preferences.
- Methods create Creates an instance. delete Deletes an instance. get Gets the details of a specific instance. list Lists all instances in a project for either a specified location or for all locations. patch Updates the settings of a specific instance. promoteReplica Promote the standby instance (replica). restore Restores an existing instance's file share from a backup. revert Revert an existing instance's file system to a specified snapshot.
- Resource: Instance JSON representation State FileShareConfig JSON representation NfsExportOptions JSON representation AccessMode SquashMode NetworkConfig JSON representation AddressMode ConnectMode PscConfig JSON representation SuspensionReason Replication JSON representation Role ReplicaConfig JSON representation State StateReason PerformanceConfig JSON representation IOPSPerTB JSON representation FixedIOPS JSON representation PerformanceLimits JSON representation Methods Resource: Instance A Filestore instance.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-21 UTC."],[],[]]

