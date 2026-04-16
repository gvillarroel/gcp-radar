---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.666Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Filestore availability in asia-south2 region"
feature_slug: "filestore-availability-in-asia-south2-region"
latest_feature_date: "2021-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/monitoring-instances"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub"
  - "https://docs.cloud.google.com/filestore/docs/creating-instances"
  - "https://docs.cloud.google.com/filestore/docs/getting-instance-information"
keywords:
  - "filestore"
  - "availability"
  - "in"
  - "asia"
  - "south2"
  - "region"
  - "is"
  - "available"
---

# Filestore availability in asia-south2 region

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Filestore is available in the asia-south2 region.

## Extended Definition

Filestore is available in the asia-south2 region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/monitoring-instances](https://docs.cloud.google.com/filestore/docs/monitoring-instances)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub)
- [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- [https://docs.cloud.google.com/filestore/docs/getting-instance-information](https://docs.cloud.google.com/filestore/docs/getting-instance-information)

## Supporting Pages

### Monitoring instances and quota \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/monitoring-instances](https://docs.cloud.google.com/filestore/docs/monitoring-instances)
- Source ID: `site-docs-root`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Select an available metric to view: Metric Description Basic tiers Regional, zonal, and enterprise tiers Average read latency The average time a read operation takes (in milliseconds). ✓ Average write latency The average time a write operation takes (in milliseconds). ✓ Bytes written Number of bytes written. ✓ ✓ Bytes read Number of bytes read from persistent storage.
- If the Filestore instance caches the data, some write operations are not reflected as disk writes. ✓ ✓ Metadata operations count Number of disk metadata operations. ✓ Free bytes Number of free disk bytes. ✓ ✓ Free disk space percent Percentage of free disk bytes. ✓ ✓ Free raw capacity percent Free raw capacity as a percentage of total space. ✓ Procedure call count Returns the same information as the nfsstat -s command. ✓ Snapshots used bytes The amount of space used for storing snapshots, measured in bytes. ✓ Time (in milliseconds) spent on read operations Time spent on disk reads. ✓ Time (in milliseconds) spent on write operations Time spent on disk writes. ✓ Used bytes Number of used disk bytes. ✓ ✓ Used space percent Percentage of used disk bytes. ✓ ✓ Memory-cached operations only occur in basic tier instances.
- Add a Filestore metric chart to a Cloud Monitoring dashboard To see Filestore performance metrics in a Cloud Monitoring dashboard, follow these steps: In the Google Cloud console, go to the leaderboard Metrics explorer page: Go to Metrics explorer If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Set the following specifications: Field Configuration Alert trigger Any time series violates Threshold position Below threshold Threshold value Enter the lowest acceptable free disk space percentage for each of your Filestore instances.

### "Class CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub (1.89.0)\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub)
- Source ID: `site-java-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- The file.googleapis.com service implements the Filestore API and defines the following resource model for managing instances: The service works with a collection of cloud projects, named: /projects/ Each project has a collection of available locations, named: /locations/ Each location has a collection of instances and backups, named: /instances/ and /backups/ respectively.
- As such, Filestore instances are resources of the form: /projects/{project number}/locations/{location id}/instances/{instance id} and backups are resources of the form: /projects/{project number}/locations/{location id}/backup/{backup id} Note that location id must be a Google Cloud zone for instances, but a Google Cloud region for backups; for example: projects/12345/locations/us-central1-c/instances/my-filestore projects/12345/locations/us-central1/backups/my-backup Inheritance java.lang.Object > io.grpc.stub.AbstractStub > io.grpc.stub.AbstractBlockingStub > CloudFilestoreManagerGrpc.CloudFilestoreManagerBlockingStub Inherited Members io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel) io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T) io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions) io.grpc.stub.AbstractStub.getCallOptions() io.grpc.stub.AbstractStub.getChannel() io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials) io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel) io.grpc.stub.AbstractStub.withCompression(java.lang.String) io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline) io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration) io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit) io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor) io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...) io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int) io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int) io.grpc.stub.AbstractStub.withOnReadyThreshold(int) io.grpc.stub.AbstractStub.withWaitForReady() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods build(Channel channel, CallOptions callOptions) protected CloudFilestoreManagerGrpc .
- 1.89.0 (latest) 1.88.0 1.86.0 1.84.0 1.83.0 1.82.0 1.81.0 1.79.0 1.77.0 1.76.0 1.75.0 1.74.0 1.73.0 1.71.0 1.69.0 1.68.0 1.65.0 1.64.0 1.63.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.2.0 public static final class CloudFilestoreManagerGrpc .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]

### Create an instance \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- The following table summarizes capabilities available by service tier: Capabilities of Filestore service tiers Capability Basic HDD and Basic SSD Zonal Regional Enterprise Capacity 1 TiB to 63.9 TiB 1 TiB to 100 TiB 100 GiB or 1 TiB to 100 TiB 1 TiB to 10 TiB Scalability Basic HDD (1 TiB to 63.9 TiB) : Scales up in increments of 1 GiB Basic SSD (2.5 TiB to 63.9 TiB) : Scales up only in increments of 1 GiB Zonal (1 TiB to 9.75 TiB) : Scales up or down in increments of 256 GiB Zonal (10 TiB to 100 TiB) : Scales up or down in increments of 2.5 TiB Regional Depending on the access to the small instances feature , you can use one of the following options: Users with access to small instances feature: 100 GiB to 10,239 GiB .
- The following table shows the instance sizes available for each tier: Tier Minimum size Maximum size Incremental step size Zonal 1 TiB 9.75 TiB 256 GiB Zonal 10 TiB 100 TiB 2.5 TiB Regional 100 GiB or 1 TiB 10,239 GiB or 9.75 TiB 1 GiB or 256 GiB Regional 10 TiB 100 TiB 2.5 TiB Basic HDD 1 TiB 63.9 TiB 1 GiB Basic SSD 2.5 TiB 63.9 TiB 1 GiB Enterprise 1 TiB 10 TiB 256 GiB Depending on the access to the small capacity instances feature, the lower capacity range for Filestore regional instances can be either 100 GiB to 10,239 GiB or 1 TiB to 9.75 TiB.
- A justification for the deletion protection setting is provided. gcloud filestore instances create render1 \ --project=myproject \ --region=us-central1 \ --tier=REGIONAL \ --performance=max-iops-per-tb=17000 \ --network=name="default",reserved-ip-range="10.0.7.0/29" \ --flags-file=nfs-export-options.json \ --deletion-protection \ --deletion-protection-reason="All genomics data must adhere to current organization policies." nfs-export-options.json file contents: { "--file-share": { "capacity": "2048", "name": "my vol", "nfs-export-options": [ { "access-mode": "READ WRITE", "ip-ranges": [ "10.0.0.0/29", "10.2.0.0/29" ], "squash-mode": "ROOT SQUASH", "anon uid": 1003, "anon gid": 1003 }, { "access-mode": "READ ONLY", "ip-ranges": [ "192.168.0.0/26" ], "squash-mode": "NO ROOT SQUASH" } ] } } REST API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- You can set the default location by running the config set filestore/zone command: gcloud config set filestore/zone zone For the regional or enterprise tier, use the config set filestore/region command: gcloud config set filestore/region region DESCRIPTION A description of the Filestore instance.

### Get instance information \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/getting-instance-information](https://docs.cloud.google.com/filestore/docs/getting-instance-information)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- Go to the Filestore instances page Click the instance ID to open the instance details page. gcloud Get information about a Filestore instance by running the instances describe command: gcloud filestore instances describe instance-id --project= project-id --location= location The response to the instances describe command is similar to the following: createTime: '2021-10-11T17:28:23.340943077Z' customPerformanceSupported: true fileShares: - capacityGb: '1024' name: vol1 kmsKeyName: projects/example-project/locations/us-central1/keyRings/example-ring/cryptoKeys/example-key labels: key:val name: projects/yourproject/locations/us-central1/instances/nfs-server networks: - ipAddresses: - 10.0.0.2 network: default reservedIpRange: 10.0.0.0/26 performanceConfig: iopsPerTb: maxIopsPerTb: '17000' performanceLimits: maxIops: '17000' maxReadIops: '17000' maxReadThroughputBps: '417792000' maxWriteIops: '5100' maxWriteThroughputBps: '139264000' state: READY tier: REGIONAL These fields represent the following values: createTime : The time the instance was created, in RFC 3339 format. fileShares : capacityGb : The size of the Filestore file share in binary gigabytes ( GB ), where 1 GB = 1024 3 bytes. name : The name of the Filestore file share.
- List the mount points for an instance You can list all mount points where a Filestore instance is mounted by running: sudo showmount -a INSTANCE IP Example The following command lists all mount points for a Filestore instance with the IP address 10.77.67.226 : sudo showmount -a 10.77.67.226 The response looks similar to the following: All mount points on 10 .77.67.226: 10 .128.0.1:/fileshare 10 .128.0.2:/fileshare 10 .128.0.3:/fileshare Get the number of mount points for an instance You can get the total number of mount points for a Filestore instance by running: sudo showmount -a INSTANCE IP --no-headers wc -l Example The following command displays the number of mount points for an instance with the IP address 10.77.67.226 : sudo showmount -a 10.77.67.226 --no-headers wc -l What's next Create another instance .
- View all instances in a project Google Cloud console You can get information about your Filestore instances, and view all instances in a project, by going to the Filestore instances page: Go to the Filestore instances page gcloud You can get information about your Filestore instances, and view all instances in a project, by running the instances list command: gcloud filestore instances list --project= project-id --zone= zone where: project-id is the project ID of the Google Cloud project that contains the Filestore instance.
- INSTANCE NAME ZONE TIER CAPACITY GB FILE SHARE NAME IP ADDRESS STATE CREATE TIME nfs-loc europe-west1-b BASIC HDD 1024 nfs1 10.0.5.2 READY 2017-10-09T22:11:28 nfs3 us-central1-c BASIC HDD 1024 acme 10.0.6.2 READY 2017-11-06T09:37:18 Example The following command lists the Filestore instances in project myproject : gcloud filestore instances list --project=myproject REST API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.

