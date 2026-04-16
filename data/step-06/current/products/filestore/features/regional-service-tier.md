---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.657Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Regional service tier"
feature_slug: "regional-service-tier"
latest_feature_date: "2024-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient"
  - "https://docs.cloud.google.com/filestore/docs/create-instance-gcloud"
  - "https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient"
keywords:
  - "regional"
  - "tier"
  - "filestore"
  - "is"
  - "generally"
  - "available"
---

# Regional service tier

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Filestore's regional service tier is generally available.

## Extended Definition

Filestore's regional service tier is generally available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke](https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient)
- [https://docs.cloud.google.com/filestore/docs/create-instance-gcloud](https://docs.cloud.google.com/filestore/docs/create-instance-gcloud)
- [https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient)

## Supporting Pages

### "Back up and restore persistent storage for your GKE clusters \_|\_ Filestore\

- URL: [https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke](https://docs.cloud.google.com/filestore/docs/backup-persistent-storage-gke)
- Source ID: `site-docs-root-2`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- Only the following Filestore service tiers are supported: Service tier Share type GKE minimum version for NFSv3 GKE minimum version for NFSv4.1 Enterprise Single share, multishare 1.25 1.33 (single share only) Zonal (1 TiB - 9.75 TiB) Single share 1.31 1.33 Zonal (10 TiB - 100 TiB) Single share 1.27 1.33 Regional Single share 1.33.4-gke.1172000 1.33.4-gke.1172000 Basic HDD (100 GiB - 63.9 TiB) Single share 1.33 Not supported Basic HDD Single share 1.21 Not supported Basic SSD Single share 1.21 Not supported Use control plane versions 1.17 or later.
- The Filestore CSI driver does not support dynamic provisioning or backup workflows for the Regional Filestore service tier : You can back up only one share per instance at a time.
- Create a PersistentVolumeClaim and a Deployment To create the PersistentVolumeClaim object, save the following manifest as my-pvc.yaml : Filestore apiVersion : v1 kind : PersistentVolumeClaim metadata : name : my-pvc spec : storageClassName : enterprise-rwx accessModes : - ReadWriteMany resources : requests : storage : 1Ti This example creates an enterprise tier Filestore PVC.
- You can check the status by running the following command: kubectl get volumesnapshot \ -o custom-columns = 'NAME:.metadata.name,READY:.status.readyToUse' If the snapshot is ready to use, the output is similar to the following: NAME READY my-snapshot true Delete the test file Delete the test file that you created: kubectl exec POD NAME \ -- sh -c 'rm /usr/share/hello/hello.txt' Verify that the file no longer exists: kubectl exec POD NAME \ -- sh -c 'cat /usr/share/hello/hello.txt' The output is similar to the following: cat: /usr/share/hello/hello.txt: No such file or directory Restore the volume snapshot Save the following manifest as pvc-restore.yaml : Filestore apiVersion : v1 kind : PersistentVolumeClaim metadata : name : pvc-restore spec : dataSource : name : my-snapshot kind : VolumeSnapshot apiGroup : snapshot.storage.k8s.io storageClassName : enterprise-rwx accessModes : - ReadWriteMany resources : requests : storage : 1Ti Note: The namespace of the PersistentVolumeClaim must be the same as the namespace of the VolumeSnapshot .

### "Class CloudFilestoreManagerClient (1.89.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient)
- Source ID: `site-java-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- For example: To customize credentials: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library CloudFilestoreManagerSettings cloudFilestoreManagerSettings = CloudFilestoreManagerSettings . newBuilder () . setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials )) . build (); CloudFilestoreManagerClient cloudFilestoreManagerClient = CloudFilestoreManagerClient . create ( cloudFilestoreManagerSettings ); To customize the endpoint: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library CloudFilestoreManagerSettings cloudFilestoreManagerSettings = CloudFilestoreManagerSettings . newBuilder (). setEndpoint ( myEndpoint ). build (); CloudFilestoreManagerClient cloudFilestoreManagerClient = CloudFilestoreManagerClient . create ( cloudFilestoreManagerSettings ); To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library CloudFilestoreManagerSettings cloudFilestoreManagerSettings = CloudFilestoreManagerSettings . newHttpJsonBuilder (). build (); CloudFilestoreManagerClient cloudFilestoreManagerClient = CloudFilestoreManagerClient . create ( cloudFilestoreManagerSettings ); Please refer to the GitHub repository's samples for more quickstart code snippets.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudFilestoreManagerClient cloudFilestoreManagerClient = CloudFilestoreManagerClient . create ()) { ListSnapshotsRequest request = ListSnapshotsRequest . newBuilder () . setParent ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setOrderBy ( "orderBy-1207110587" ) . setFilter ( "filter-1274492040" ) . setReturnPartialSuccess ( true ) . build (); ApiFuture<Snapshot> future = cloudFilestoreManagerClient . listSnapshotsPagedCallable (). futureCall ( request ); // Do something. for ( Snapshot element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListSnapshotsRequest , ListSnapshotsPagedResponse > promoteReplicaAsync(PromoteReplicaRequest request) public final OperationFuture<Instance , OperationMetadata > promoteReplicaAsync ( PromoteReplicaRequest request ) Promote the standby instance (replica).
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudFilestoreManagerClient cloudFilestoreManagerClient = CloudFilestoreManagerClient . create ()) { ListInstancesRequest request = ListInstancesRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setOrderBy ( "orderBy-1207110587" ) . setFilter ( "filter-1274492040" ) . build (); ApiFuture<Instance> future = cloudFilestoreManagerClient . listInstancesPagedCallable (). futureCall ( request ); // Do something. for ( Instance element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListInstancesRequest , ListInstancesPagedResponse > listSnapshots(InstanceName parent) public final CloudFilestoreManagerClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudFilestoreManagerClient cloudFilestoreManagerClient = CloudFilestoreManagerClient . create ()) { ListBackupsRequest request = ListBackupsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setOrderBy ( "orderBy-1207110587" ) . setFilter ( "filter-1274492040" ) . build (); ApiFuture<Backup> future = cloudFilestoreManagerClient . listBackupsPagedCallable (). futureCall ( request ); // Do something. for ( Backup element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListBackupsRequest , ListBackupsPagedResponse > listInstances(ListInstancesRequest request) public final CloudFilestoreManagerClient .

### "Quickstart: Create a Filestore instance by using the gcloud CLI \_|\_ Google\

- URL: [https://docs.cloud.google.com/filestore/docs/create-instance-gcloud](https://docs.cloud.google.com/filestore/docs/create-instance-gcloud)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Set the --tags flag to http-server . gcloud compute instances create nfs-client --zone = us-central1-c --image-project = windows-cloud --image-family = windows-2012-r2 --tags = http-server Create a Filestore instance This quickstart shows how to create an instance in the regional service tier with custom performance enabled.
- Set the --network flag to name="default" . gcloud filestore instances create nfs-server --region = us-central1 --tier = REGIONAL --performance = max-iops-per-tb = 17000 --file-share = name = "vol1" ,capacity = 1TB --network = name = "default" Get information about the Filestore instance you created: gcloud filestore instances describe nfs-server --region = us-central1 The command returns something like: createTime: '2025-02-12T09:15:08.163246004Z' customPerformanceSupported: true fileShares: -capacityGb: '1024' name: vol1 name: projects/yourproject/locations/us-central1/instances/nfs-server networks: -connectMode: DIRECT PEERING ipAddresses: - 10 .0.0.2 network: default reservedIpRange: 10 .0.0.2/26 performanceConfig: iopsPerTb: maxIopsPerTb: '17000' performanceLimits: maxIops: '17000' maxReadIops: '17000' maxReadThroughputBps: '417792000' maxWriteIops: '5100' maxWriteThroughputBps: '139264000' protocol: NFS V3 state: READY tier: REGIONAL Copy down the IP address of the instance for use when mounting the file share.
- In PowerShell , run the following commands to create two new registry entries, AnonymousUid and AnonymousGid : New-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\ClientForNFS\CurrentVersion\Default" -Name "AnonymousUid" -Value "0" -PropertyType DWORD New-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\ClientForNFS\CurrentVersion\Default" -Name "AnonymousGid" -Value "0" -PropertyType DWORD Restart the NFS client service: nfsadmin client stop nfsadmin client start Map the vol1 file share to the nfs-client instance Exit PowerShell : exit From Command Prompt , mount the file share to the nfs-client instance with the mount command by specifying the IP address of the Filestore instance, the name of the file share, and the drive letter to mount to: mount - o mtype = hard 10.0.0.2 : / vol1 z : Create a file on the mounted file share Linux In the nfs-client terminal window, create a file named testfile by running the following command: echo 'This is a test' > /mnt/test/testfile Confirm the file was created by running the following command and verifying that testfile is in the directory contents returned: ls /mnt/test Windows In the Command Prompt window of the nfs-client instance, create a file named testfile : echo 'This is a test' > Z:\testfile Confirm the file was created by running the following command: dir Z: and verifying that testfile is in the directory contents returned.
- Mount the Filestore file share on the nfs-client instance Linux Establish an SSH connection to the nfs-client instance: gcloud compute ssh nfs-client Install NFS by running the following commands on the terminal window of nfs-client : sudo apt-get -y update && sudo apt-get -y install nfs-common Create a mount directory on the nfs-client instance for the Filestore file share: sudo mkdir /mnt/test Mount the file share to the nfs-client instance with the mount command by specifying the IP address of the Filestore instance, the name of the file share, and the mount directory to mount to: sudo mount MOUNT-POINT-DIRECTORY /mnt/test where: MOUNT-POINT-DIRECTORY is the path to the directory where the Filestore file share is mounted.

### "Class CloudFilestoreManagerAsyncClient (1.16.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import filestore v1 async def sample restore instance(): Create a client client = filestore v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import filestore v1 async def sample create instance(): Create a client client = filestore v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import filestore v1 async def sample create snapshot(): Create a client client = filestore v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import filestore v1 async def sample delete instance(): Create a client client = filestore v1 .

