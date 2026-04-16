---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.666Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Filestore VPC Service Controls support"
feature_slug: "filestore-vpc-service-controls-support"
latest_feature_date: "2021-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/csi-driver"
  - "https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances"
  - "https://docs.cloud.google.com/filestore/docs/configure-psc"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient"
keywords:
  - "filestore"
  - "vpc"
  - "controls"
  - "instances"
  - "can"
  - "be"
  - "protected"
  - "with"
---

# Filestore VPC Service Controls support

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Filestore instances can be protected with a VPC Service Controls service perimeter.

## Extended Definition

Filestore instances can be protected with a VPC Service Controls service perimeter.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- [https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances](https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances)
- [https://docs.cloud.google.com/filestore/docs/configure-psc](https://docs.cloud.google.com/filestore/docs/configure-psc)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient)

## Supporting Pages

### "Access Filestore instances with the Filestore CSI driver \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/filestore/docs/csi-driver](https://docs.cloud.google.com/filestore/docs/csi-driver)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- Create a StorageClass when using the Filestore CSI driver with Shared VPC The following example shows how you can create a StorageClass when using the Filestore CSI driver with Shared VPC: cat <<EOF kubectl apply -f - apiVersion: storage.k8s.io/v1 kind: StorageClass metadata: name: filestore-sharedvpc-example provisioner: filestore.csi.storage.gke.io parameters: network: "projects/ HOST PROJECT ID /global/networks/ SHARED VPC NAME " connect-mode: PRIVATE SERVICE ACCESS reserved-ip-range: RESERVED IP RANGE NAME allowVolumeExpansion: true EOF Replace the following: HOST PROJECT ID : the ID or name of the host project of the Shared VPC network.
- You can also dynamically create or delete Filestore instances and use them in Kubernetes workloads with a StorageClass or a Deployment .
- The network parameter can be used when provisioning Filestore instances on non-default VPCs.
- For dynamic provisioning, set the protocol field to NFS V4 1 in the parameters of a StorageClass object. apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : enterprise-multishare-rwx provisioner : filestore.csi.storage.gke.io parameters : tier : enterprise multishare : "true" instance-storageclass-label : "enterprise-multishare-rwx" protocol : NFS V4 1 volumeBindingMode : WaitForFirstConsumer allowVolumeExpansion : true You cannot mount the Filestore instance with the NFSv4.1 protocol with mountOptions set to nfsvers=3 in the StorageClass object.

### "REST Resource: projects.locations.instances \_|\_ Filestore \_|\_ Google\

- URL: [https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances](https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances)
- Source ID: `site-api-reference`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The range you specify can't overlap with either existing subnets or assigned IP address ranges for other Filestore instances in the selected VPC network. ipAddresses[] string Output only.
- Home Documentation Storage Filestore Reference Send feedback REST Resource: projects.locations.instances Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { // Union field mode can be only one of the following: "iopsPerTb" : { object ( IOPSPerTB ) } , "fixedIops" : { object ( FixedIOPS ) } // End of list of possible types for union field mode . } Fields Union field mode . mode can be only one of the following: iopsPerTb object ( IOPSPerTB ) Provision IOPS dynamically based on the capacity of the instance.
- JSON representation { "name" : string , "capacityGb" : string , "nfsExportOptions" : [ { object ( NfsExportOptions ) } ] , // Union field source can be only one of the following: "sourceBackup" : string // End of list of possible types for union field source . } Fields name string Required.

### "Create a Filestore instance with Private Service Connect \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/filestore/docs/configure-psc](https://docs.cloud.google.com/filestore/docs/configure-psc)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create to create the instance. gcloud If you already have the gcloud CLI installed, you can update it: gcloud components update Create a Filestore zonal, regional, or enterprise instance: gcloud beta filestore instances create INSTANCE-ID \ --description=" DESCRIPTION " \ --region= LOCATION \ --tier= TIER \ --protocol= PROTOCOL \ --file-share=name=" FILE SHARE NAME ",capacity= CAPACITY \ --network=name=" VPC NETWORK NAME ",connect-mode= CONNECT MODE ,address-mode= ADDRESS MODE ,psc-endpoint-project= PSC ENDPOINT PROJECT \ --project= CONSUMER PROJECT ID Where: INSTANCE ID is the instance ID of the Filestore instance that you want to create.
- Address mode is MODE IPV4 . gcloud filestore instances create my-instance \ --project="my-project" \ --region=us-central1 \ --tier=REGIONAL \ --protocol=NFS v4 1 \ --file-share=name="my vol",capacity=1024 \ --network=name=projects/host/global/networks/default,connect-mode=PRIVATE SERVICE CONNECT,address-mode=MODE IPV4 What's next Edit a Filestore instance Create an instance on a Shared VPC network in service projects Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more information on using subnets with Private Service Connect, see Purposes of subnets Optional: In the Connection limit field, The limit determines how many endpoints can be created by using this connection policy.
- The following guide shows you how to configure your Filestore instances to use Private Service Connect with NFSv3 or NFSv4.1 file system protocols.

### "Class CloudFilestoreManagerClient (1.89.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.CloudFilestoreManagerClient)
- Source ID: `site-java-reference`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudFilestoreManagerClient cloudFilestoreManagerClient = CloudFilestoreManagerClient . create ()) { ListInstancesRequest request = ListInstancesRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setOrderBy ( "orderBy-1207110587" ) . setFilter ( "filter-1274492040" ) . build (); ApiFuture<Instance> future = cloudFilestoreManagerClient . listInstancesPagedCallable (). futureCall ( request ); // Do something. for ( Instance element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListInstancesRequest , ListInstancesPagedResponse > listSnapshots(InstanceName parent) public final CloudFilestoreManagerClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudFilestoreManagerClient cloudFilestoreManagerClient = CloudFilestoreManagerClient . create ()) { ListBackupsRequest request = ListBackupsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setOrderBy ( "orderBy-1207110587" ) . setFilter ( "filter-1274492040" ) . build (); ApiFuture<Backup> future = cloudFilestoreManagerClient . listBackupsPagedCallable (). futureCall ( request ); // Do something. for ( Backup element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListBackupsRequest , ListBackupsPagedResponse > listInstances(ListInstancesRequest request) public final CloudFilestoreManagerClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudFilestoreManagerClient cloudFilestoreManagerClient = CloudFilestoreManagerClient . create ()) { ListInstancesRequest request = ListInstancesRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setOrderBy ( "orderBy-1207110587" ) . setFilter ( "filter-1274492040" ) . build (); while ( true ) { ListInstancesResponse response = cloudFilestoreManagerClient . listInstancesCallable (). call ( request ); for ( Instance element : response . getInstancesList ()) { // doThingsWith(element); } String nextPageToken = response . getNextPageToken (); if ( !
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudFilestoreManagerClient cloudFilestoreManagerClient = CloudFilestoreManagerClient . create ()) { ListInstancesRequest request = ListInstancesRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setOrderBy ( "orderBy-1207110587" ) . setFilter ( "filter-1274492040" ) . build (); for ( Instance element : cloudFilestoreManagerClient . listInstances ( request ). iterateAll ()) { // doThingsWith(element); } } Parameter Name Description request ListInstancesRequest The request object containing all of the parameters for the API call.

