---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.653Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Small capacity regional Filestore instances"
feature_slug: "small-capacity-regional-filestore-instances"
latest_feature_date: "2025-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/creating-instances"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient"
  - "https://docs.cloud.google.com/filestore/docs/create-instance-gcloud"
  - "https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient"
keywords:
  - "small"
  - "capacity"
  - "regional"
  - "filestore"
  - "instances"
  - "can"
  - "start"
  - "at"
---

# Small capacity regional Filestore instances

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Regional Filestore instances can start at 100 GiB and scale in 1 GiB increments.

## Extended Definition

Regional Filestore instances can start at 100 GiB and scale in 1 GiB increments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient)
- [https://docs.cloud.google.com/filestore/docs/create-instance-gcloud](https://docs.cloud.google.com/filestore/docs/create-instance-gcloud)
- [https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient)

## Supporting Pages

### Create an instance \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- Source ID: `site-docs-root`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table summarizes capabilities available by service tier: Capabilities of Filestore service tiers Capability Basic HDD and Basic SSD Zonal Regional Enterprise Capacity 1 TiB to 63.9 TiB 1 TiB to 100 TiB 100 GiB or 1 TiB to 100 TiB 1 TiB to 10 TiB Scalability Basic HDD (1 TiB to 63.9 TiB) : Scales up in increments of 1 GiB Basic SSD (2.5 TiB to 63.9 TiB) : Scales up only in increments of 1 GiB Zonal (1 TiB to 9.75 TiB) : Scales up or down in increments of 256 GiB Zonal (10 TiB to 100 TiB) : Scales up or down in increments of 2.5 TiB Regional Depending on the access to the small instances feature , you can use one of the following options: Users with access to small instances feature: 100 GiB to 10,239 GiB .
- The following table shows the instance sizes available for each tier: Tier Minimum size Maximum size Incremental step size Zonal 1 TiB 9.75 TiB 256 GiB Zonal 10 TiB 100 TiB 2.5 TiB Regional 100 GiB or 1 TiB 10,239 GiB or 9.75 TiB 1 GiB or 256 GiB Regional 10 TiB 100 TiB 2.5 TiB Basic HDD 1 TiB 63.9 TiB 1 GiB Basic SSD 2.5 TiB 63.9 TiB 1 GiB Enterprise 1 TiB 10 TiB 256 GiB Depending on the access to the small capacity instances feature, the lower capacity range for Filestore regional instances can be either 100 GiB to 10,239 GiB or 1 TiB to 9.75 TiB.
- A justification for the deletion protection setting is provided. gcloud filestore instances create render1 \ --project=myproject \ --region=us-central1 \ --tier=REGIONAL \ --performance=max-iops-per-tb=17000 \ --network=name="default",reserved-ip-range="10.0.7.0/29" \ --flags-file=nfs-export-options.json \ --deletion-protection \ --deletion-protection-reason="All genomics data must adhere to current organization policies." nfs-export-options.json file contents: { "--file-share": { "capacity": "2048", "name": "my vol", "nfs-export-options": [ { "access-mode": "READ WRITE", "ip-ranges": [ "10.0.0.0/29", "10.2.0.0/29" ], "squash-mode": "ROOT SQUASH", "anon uid": 1003, "anon gid": 1003 }, { "access-mode": "READ ONLY", "ip-ranges": [ "192.168.0.0/26" ], "squash-mode": "NO ROOT SQUASH" } ] } } REST API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- Scales up or down in increments of 256 GiB Regional (10 TiB to 100 TiB) : Scales up or down in increments of 2.5 TiB Scales up or down in increments of 256 GiB Performance Basic HDD : Static Basic SSD : Performance step at 10 TiB Configurable Configurable Scales linearly with capacity Protocol NFSv3 NFSv3, NFSv4.1 NFSv3, NFSv4.1 NFSv3, NFSv4.1 Create operations for zonal, regional, and enterprise instances can take anywhere between 15 minutes and one hour to complete, depending on instance size.

### "Class CloudFilestoreManagerClient (1.89.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient)
- Source ID: `site-java-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: To customize credentials: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library CloudFilestoreManagerSettings cloudFilestoreManagerSettings = CloudFilestoreManagerSettings . newBuilder () . setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials )) . build (); CloudFilestoreManagerClient cloudFilestoreManagerClient = CloudFilestoreManagerClient . create ( cloudFilestoreManagerSettings ); To customize the endpoint: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library CloudFilestoreManagerSettings cloudFilestoreManagerSettings = CloudFilestoreManagerSettings . newBuilder (). setEndpoint ( myEndpoint ). build (); CloudFilestoreManagerClient cloudFilestoreManagerClient = CloudFilestoreManagerClient . create ( cloudFilestoreManagerSettings ); To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library CloudFilestoreManagerSettings cloudFilestoreManagerSettings = CloudFilestoreManagerSettings . newHttpJsonBuilder (). build (); CloudFilestoreManagerClient cloudFilestoreManagerClient = CloudFilestoreManagerClient . create ( cloudFilestoreManagerSettings ); Please refer to the GitHub repository's samples for more quickstart code snippets.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudFilestoreManagerClient cloudFilestoreManagerClient = CloudFilestoreManagerClient . create ()) { ListInstancesRequest request = ListInstancesRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setOrderBy ( "orderBy-1207110587" ) . setFilter ( "filter-1274492040" ) . build (); ApiFuture<Instance> future = cloudFilestoreManagerClient . listInstancesPagedCallable (). futureCall ( request ); // Do something. for ( Instance element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListInstancesRequest , ListInstancesPagedResponse > listSnapshots(InstanceName parent) public final CloudFilestoreManagerClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudFilestoreManagerClient cloudFilestoreManagerClient = CloudFilestoreManagerClient . create ()) { ListBackupsRequest request = ListBackupsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setOrderBy ( "orderBy-1207110587" ) . setFilter ( "filter-1274492040" ) . build (); ApiFuture<Backup> future = cloudFilestoreManagerClient . listBackupsPagedCallable (). futureCall ( request ); // Do something. for ( Backup element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListBackupsRequest , ListBackupsPagedResponse > listInstances(ListInstancesRequest request) public final CloudFilestoreManagerClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudFilestoreManagerClient cloudFilestoreManagerClient = CloudFilestoreManagerClient . create ()) { ListInstancesRequest request = ListInstancesRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setOrderBy ( "orderBy-1207110587" ) . setFilter ( "filter-1274492040" ) . build (); while ( true ) { ListInstancesResponse response = cloudFilestoreManagerClient . listInstancesCallable (). call ( request ); for ( Instance element : response . getInstancesList ()) { // doThingsWith(element); } String nextPageToken = response . getNextPageToken (); if ( !

### "Quickstart: Create a Filestore instance by using the gcloud CLI \_|\_ Google\

- URL: [https://docs.cloud.google.com/filestore/docs/create-instance-gcloud](https://docs.cloud.google.com/filestore/docs/create-instance-gcloud)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set the --network flag to name="default" . gcloud filestore instances create nfs-server --region = us-central1 --tier = REGIONAL --performance = max-iops-per-tb = 17000 --file-share = name = "vol1" ,capacity = 1TB --network = name = "default" Get information about the Filestore instance you created: gcloud filestore instances describe nfs-server --region = us-central1 The command returns something like: createTime: '2025-02-12T09:15:08.163246004Z' customPerformanceSupported: true fileShares: -capacityGb: '1024' name: vol1 name: projects/yourproject/locations/us-central1/instances/nfs-server networks: -connectMode: DIRECT PEERING ipAddresses: - 10 .0.0.2 network: default reservedIpRange: 10 .0.0.2/26 performanceConfig: iopsPerTb: maxIopsPerTb: '17000' performanceLimits: maxIops: '17000' maxReadIops: '17000' maxReadThroughputBps: '417792000' maxWriteIops: '5100' maxWriteThroughputBps: '139264000' protocol: NFS V3 state: READY tier: REGIONAL Copy down the IP address of the instance for use when mounting the file share.
- Set the --tags flag to http-server . gcloud compute instances create nfs-client --zone = us-central1-c --image-project = windows-cloud --image-family = windows-2012-r2 --tags = http-server Create a Filestore instance This quickstart shows how to create an instance in the regional service tier with custom performance enabled.
- Learn how to grant roles . gcloud services enable file.googleapis.com Required roles To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles on your project: Create and manage Filestore instances: Cloud Filestore Editor ( roles/file.editor ) Create and manage Compute Engine instances: Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- In PowerShell , run the following commands to create two new registry entries, AnonymousUid and AnonymousGid : New-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\ClientForNFS\CurrentVersion\Default" -Name "AnonymousUid" -Value "0" -PropertyType DWORD New-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\ClientForNFS\CurrentVersion\Default" -Name "AnonymousGid" -Value "0" -PropertyType DWORD Restart the NFS client service: nfsadmin client stop nfsadmin client start Map the vol1 file share to the nfs-client instance Exit PowerShell : exit From Command Prompt , mount the file share to the nfs-client instance with the mount command by specifying the IP address of the Filestore instance, the name of the file share, and the drive letter to mount to: mount - o mtype = hard 10.0.0.2 : / vol1 z : Create a file on the mounted file share Linux In the nfs-client terminal window, create a file named testfile by running the following command: echo 'This is a test' > /mnt/test/testfile Confirm the file was created by running the following command and verifying that testfile is in the directory contents returned: ls /mnt/test Windows In the Command Prompt window of the nfs-client instance, create a file named testfile : echo 'This is a test' > Z:\testfile Confirm the file was created by running the following command: dir Z: and verifying that testfile is in the directory contents returned.

### "Class CloudFilestoreManagerAsyncClient (1.16.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import filestore v1 async def sample list instances(): Create a client client = filestore v1 .
- As such, Filestore instances are resources of the form: /projects/{project number}/locations/{location id}/instances/{instance id} and backups are resources of the form: /projects/{project number}/locations/{location id}/backup/{backup id} Note that location id must be a Google Cloud zone for instances, but a Google Cloud region for backups; for example: projects/12345/locations/us-central1-c/instances/my-filestore projects/12345/locations/us-central1/backups/my-backup Properties api endpoint Return the API endpoint used by the client instance.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import filestore v1 async def sample restore instance(): Create a client client = filestore v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import filestore v1 async def sample create instance(): Create a client client = filestore v1 .

