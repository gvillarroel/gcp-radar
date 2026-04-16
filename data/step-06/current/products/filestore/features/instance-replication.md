---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.656Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Instance replication"
feature_slug: "instance-replication"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/configure-instance-replication"
  - "https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances"
  - "https://docs.cloud.google.com/filestore/docs/monitoring-instances"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListInstancesFixedSizeCollection"
keywords:
  - "instance"
  - "replication"
  - "enables"
  - "filestore"
  - "instances"
  - "to"
  - "replicate"
  - "replicas"
---

# Instance replication

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Instance replication enables Filestore instances to replicate data to replicas.

## Extended Definition

Instance replication enables Filestore instances to replicate data to replicas.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/configure-instance-replication](https://docs.cloud.google.com/filestore/docs/configure-instance-replication)
- [https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances](https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances)
- [https://docs.cloud.google.com/filestore/docs/monitoring-instances](https://docs.cloud.google.com/filestore/docs/monitoring-instances)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListInstancesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListInstancesFixedSizeCollection)

## Supporting Pages

### Manage instance replication \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/configure-instance-replication](https://docs.cloud.google.com/filestore/docs/configure-instance-replication)
- Source ID: `site-docs-root-2`
- Final score: 338
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use cURL to call the Filestore API : curl -s \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ --header "Content-Type: application/json" \ -d '{"tier": " TIER ", "networks": { "network": " NETWORK " }, "file shares": {"name": " SHARE NAME ","capacity gb": " CAPACITY "}, "replication": {"replicas":[{"peer instance": "projects/ PROJECT /locations/ ACTIVE LOCATION /instances/ ACTIVE NAME "}], "role":"standby"}, "description": " DESCRIPTION " }' \ "https://file.googleapis.com/v1beta1/projects/ PROJECT /locations/ REPLICA LOCATION /instances?instanceId= REPLICA INSTANCE NAME " Where: TIER is the name of the service tier you want to use for the replica.
- When successfully completed, the following response or similar is returned: createTime: '2025-12-22T14:03:33.727531128Z' customPerformanceSupported: true description: Replica of active, us-central1 fileShares: - capacityGb: '1024' name: share name: projects/genomics-project/locations/us-central1/instances/my-replica networks: - connectMode: DIRECT PEERING ipAddresses: - 10.229.150.130 modes: - MODE IPV4 network: default reservedIpRange: 10.229.150.128/26 performanceLimits: maxIops: '12000' maxReadIops: '12000' maxReadThroughputBps: '125829120' maxWriteIops: '4000' maxWriteThroughputBps: '104857600' protocol: NFS V3 replication: replicas: - peerInstance: projects/genomics-project/locations/us-central1/instances/my-source state: READY stateUpdateTime: '2025-12-22T14:24:27.558413891Z' role: STANDBY state: READY tier: REGIONAL REST API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- When successfully completed, the following response or similar is returned: createTime: '2025-12-22T14:03:33.727531128Z' customPerformanceSupported: true description: Replica of active, us-east1-b fileShares: - capacityGb: '1024' name: share name: projects/genomics-project/locations/us-west2-a/instances/my-replica networks: - connectMode: DIRECT PEERING ipAddresses: - 10.229.150.130 modes: - MODE IPV4 network: default reservedIpRange: 10.229.150.128/26 performanceLimits: maxIops: '12000' maxReadIops: '12000' maxReadThroughputBps: '125829120' maxWriteIops: '4000' maxWriteThroughputBps: '104857600' protocol: NFS V3 replication: replicas: - peerInstance: projects/genomics-project/locations/us-east1-b/instances/my-source state: PAUSED stateUpdateTime: '2025-12-22T14:24:27.558413891Z' role: STANDBY state: READY tier: REGIONAL REST API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- When successfully completed, the following response or similar is returned: capacityGb: '1024' capacityStepSizeGb: '256' createTime: '2024-06-20T17:11:56.048062134Z' fileShares: - capacityGb: '1024' name: vol1 maxCapacityGb: '9984' maxShareCount: '1' name: projects/genomics-project/locations/us-west2-a/instances/my-replica networks: - connectMode: DIRECT PEERING ipAddresses: - 10.155.90.194 network: default reservedIpRange: 10.155.90.192/26 protocol: NFS V3 replication: replicas: - lastActiveSyncTime: '2024-06-21T00:13:23Z' peerInstance: projects/genomics-project/locations/us-east1-b/instances/my-source role: STANDBY satisfiesPzi: true state: PROMOTING tier: ZONAL REST API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.

### "REST Resource: projects.locations.instances \_|\_ Filestore \_|\_ Google\

- URL: [https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances](https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances)
- Source ID: `site-api-reference`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource: Instance JSON representation State FileShareConfig JSON representation NfsExportOptions JSON representation AccessMode SquashMode NetworkConfig JSON representation AddressMode ConnectMode PscConfig JSON representation SuspensionReason Replication JSON representation Role ReplicaConfig JSON representation State StateReason PerformanceConfig JSON representation IOPSPerTB JSON representation FixedIOPS JSON representation PerformanceLimits JSON representation Methods Resource: Instance A Filestore instance.
- Home Documentation Storage Filestore Reference Send feedback REST Resource: projects.locations.instances Stay organized with collections Save and categorize content based on your preferences.
- The range you specify can't overlap with either existing subnets or assigned IP address ranges for other Filestore instances in the selected VPC network. ipAddresses[] string Output only.
- Methods create Creates an instance. delete Deletes an instance. get Gets the details of a specific instance. list Lists all instances in a project for either a specified location or for all locations. patch Updates the settings of a specific instance. promoteReplica Promote the standby instance (replica). restore Restores an existing instance's file share from a backup. revert Revert an existing instance's file system to a specified snapshot.

### Monitoring instances and quota \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/monitoring-instances](https://docs.cloud.google.com/filestore/docs/monitoring-instances)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the Filestore instance caches the data, some write operations are not reflected as disk writes. ✓ ✓ Metadata operations count Number of disk metadata operations. ✓ Free bytes Number of free disk bytes. ✓ ✓ Free disk space percent Percentage of free disk bytes. ✓ ✓ Free raw capacity percent Free raw capacity as a percentage of total space. ✓ Procedure call count Returns the same information as the nfsstat -s command. ✓ Snapshots used bytes The amount of space used for storing snapshots, measured in bytes. ✓ Time (in milliseconds) spent on read operations Time spent on disk reads. ✓ Time (in milliseconds) spent on write operations Time spent on disk writes. ✓ Used bytes Number of used disk bytes. ✓ ✓ Used space percent Percentage of used disk bytes. ✓ ✓ Memory-cached operations only occur in basic tier instances.
- Set the following specifications: Field Configuration Alert trigger Any time series violates Threshold position Below threshold Threshold value Enter the lowest acceptable free disk space percentage for each of your Filestore instances.
- Home Documentation Storage Filestore Guides Send feedback Monitoring instances and quota Stay organized with collections Save and categorize content based on your preferences.
- Low backups quota If you are scheduling or automating backups creation for your Filestore instances, you should set up alerts for when you're running low on backups quota.

### "Class CloudFilestoreManagerClient.ListInstancesFixedSizeCollection (1.89.0)\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListInstancesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient.ListInstancesFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 253
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListInstancesFixedSizeCollection > Inheritance java.lang.Object > AbstractFixedSizeCollection > CloudFilestoreManagerClient.ListInstancesFixedSizeCollection Inherited Members AbstractFixedSizeCollection.createCollection(List<PageT>,int) AbstractFixedSizeCollection.getCollectionSize() AbstractFixedSizeCollection.getNextCollection() AbstractFixedSizeCollection.getNextPageToken() AbstractFixedSizeCollection.getValues() AbstractFixedSizeCollection.hasNextCollection() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createCollection(List<CloudFilestoreManagerClient.ListInstancesPage> pages, int collectionSize) protected CloudFilestoreManagerClient .
- ListInstancesPage > pages , int collectionSize ) Parameters Name Description pages List < ListInstancesPage > collectionSize int Returns Type Description CloudFilestoreManagerClient.ListInstancesFixedSizeCollection Overrides AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Java Client libraries Send feedback Class CloudFilestoreManagerClient.ListInstancesFixedSizeCollection (1.89.0) Stay organized with collections Save and categorize content based on your preferences.
- ListInstancesFixedSizeCollection extends AbstractFixedSizeCollection<ListInstancesRequest , ListInstancesResponse , Instance , CloudFilestoreManagerClient .

