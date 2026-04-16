---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.119Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "pd-extreme disk support for Dataproc cluster creation"
feature_slug: "pd-extreme-disk-support-for-dataproc-cluster-creation"
latest_feature_date: "2023-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-client-libraries"
keywords:
  - "extreme"
  - "creation"
  - "disk"
  - "type"
  - "supports"
  - "cluster"
---

# pd-extreme disk support for Dataproc cluster creation

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc cluster creation supports the pd-extreme disk type.

## Extended Definition

Dataproc cluster creation supports the pd-extreme disk type.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-client-libraries](https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-client-libraries)

## Supporting Pages

### "InstanceGroupConfig \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- HYPERDISK EXTREME Hyperdisk Extreme disk type.
- JSON representation { "numInstances" : integer , "instanceNames" : [ string ] , "imageUri" : string , "machineTypeUri" : string , "diskConfig" : { object ( DiskConfig ) } , "isPreemptible" : boolean , "preemptibility" : enum ( Preemptibility ) , "managedGroupConfig" : { object ( ManagedGroupConfig ) } , "accelerators" : [ { object ( AcceleratorConfig ) } ] , "minCpuPlatform" : string , "minNumInstances" : integer , "instanceFlexibilityPolicy" : { object ( InstanceFlexibilityPolicy ) } , "startupConfig" : { object ( StartupConfig ) } } Fields numInstances integer Optional.
- JSON representation DiskConfig JSON representation AttachedDiskConfig JSON representation DiskType Preemptibility ManagedGroupConfig JSON representation AcceleratorConfig JSON representation InstanceFlexibilityPolicy JSON representation ProvisioningModelMix JSON representation InstanceSelection JSON representation InstanceSelectionResult JSON representation StartupConfig JSON representation The config settings for Compute Engine resources in an instance group, such as a master or worker group.
- Examples: https://www.googleapis.com/compute/v1/projects/[projectId]/zones/[zone]/machineTypes/n1-standard-2 projects/[projectId]/zones/[zone]/machineTypes/n1-standard-2 n1-standard-2 Auto Zone Exception : If you are using the Dataproc Auto Zone Placement feature, you must use the short name of the machine type resource, for example, n1-standard-2 . diskConfig object ( DiskConfig ) Optional.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "clusterType" : enum ( ClusterType ) , "clusterTier" : enum ( ClusterTier ) , "configBucket" : string , "tempBucket" : string , "gceClusterConfig" : { object ( GceClusterConfig ) } , "masterConfig" : { object ( InstanceGroupConfig ) } , "workerConfig" : { object ( InstanceGroupConfig ) } , "secondaryWorkerConfig" : { object ( InstanceGroupConfig ) } , "softwareConfig" : { object ( SoftwareConfig ) } , "initializationActions" : [ { object ( NodeInitializationAction ) } ] , "encryptionConfig" : { object ( EncryptionConfig ) } , "autoscalingConfig" : { object ( AutoscalingConfig ) } , "securityConfig" : { object ( SecurityConfig ) } , "lifecycleConfig" : { object ( LifecycleConfig ) } , "endpointConfig" : { object ( EndpointConfig ) } , "metastoreConfig" : { object ( MetastoreConfig ) } , "dataprocMetricConfig" : { object ( DataprocMetricConfig ) } , "auxiliaryNodeGroups" : [ { object ( AuxiliaryNodeGroup ) } ] } Fields clusterType enum ( ClusterType ) Optional.
- JSON representation ClusterType ClusterTier GceClusterConfig JSON representation PrivateIpv6GoogleAccess ReservationAffinity JSON representation Type NodeGroupAffinity JSON representation ShieldedInstanceConfig JSON representation ConfidentialInstanceConfig JSON representation SoftwareConfig JSON representation Component NodeInitializationAction JSON representation EncryptionConfig JSON representation AutoscalingConfig JSON representation SecurityConfig JSON representation KerberosConfig JSON representation IdentityConfig JSON representation LifecycleConfig JSON representation EndpointConfig JSON representation DataprocMetricConfig JSON representation Metric JSON representation MetricSource AuxiliaryNodeGroup JSON representation The cluster config.
- When this key resource name is provided, the following job arguments of the following job types submitted to the cluster are encrypted using CMEK: FlinkJob args HadoopJob args SparkJob args SparkRJob args PySparkJob args SparkSqlJob scriptVariables and queryList.queries HiveJob scriptVariables and queryList.queries PigJob scriptVariables and queryList.queries PrestoJob scriptVariables and queryList.queries AutoscalingConfig Autoscaling Policy config associated with the cluster.
- Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period.

### "Quickstart: Create a cluster by using client libraries \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-client-libraries](https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-client-libraries)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ClusterControllerClient ( client options = { "api endpoint" : " {} -dataproc.googleapis.com:443" . format ( region )} ) Create the cluster config. cluster = { "project id" : project id , "cluster name" : cluster name , "config" : { "master config" : { "num instances" : 1 , "machine type uri" : "n1-standard-2" , "disk config" : { "boot disk size gb" : 100 }, }, "worker config" : { "num instances" : 2 , "machine type uri" : "n1-standard-2" , "disk config" : { "boot disk size gb" : 100 }, }, }, } Create the cluster. operation = cluster client . create cluster ( request = { "project id" : project id , "region" : region , "cluster" : cluster } ) result = operation . result () print ( "Cluster created successfully: {} " . format ( result . cluster name )) Create the job client. job client = dataproc .
- JobControllerClient ({ apiEndpoint : ${ region } -dataproc.googleapis.com , projectId : projectId , }); async function quickstart () { // Create the cluster config const cluster = { projectId : projectId , region : region , cluster : { clusterName : clusterName , config : { masterConfig : { numInstances : 1 , machineTypeUri : 'n1-standard-2' , }, workerConfig : { numInstances : 2 , machineTypeUri : 'n1-standard-2' , }, }, }, }; // Create the cluster const [ operation ] = await clusterClient . createCluster ( cluster ); const [ response ] = await operation . promise (); // Output a success message console . log ( Cluster created successfully: ${ response . clusterName } ); const job = { projectId : projectId , region : region , job : { placement : { clusterName : clusterName , }, pysparkJob : { mainPythonFileUri : jobFilePath , }, }, }; const [ jobOperation ] = await jobClient . submitJobAsOperation ( job ); const [ jobResponse ] = await jobOperation . promise (); const matches = jobResponse . driverOutputResourceUri . match ( 'gs://(. ?)/(. )' ); const storage = new Storage (); const output = await storage . bucket ( matches [ 1 ]) . file ( ${ matches [ 2 ] } .000000000 ) . download (); // Output a success message. console . log ( Job finished successfully: ${ output } ); // Delete the cluster once the job has terminated. const deleteClusterReq = { projectId : projectId , region : region , clusterName : clusterName , }; const [ deleteOperation ] = await clusterClient . deleteCluster ( deleteClusterReq ); await deleteOperation . promise (); // Output a success message console . log ( Cluster ${ clusterName } successfully deleted. ); } quickstart (); } const args = process . argv . slice ( 2 ); if ( args . length !== 4 ) { console . log ( 'Insufficient number of parameters provided.
- RawDescriptionHelpFormatter , ) parser . add argument ( "--project id" , type = str , required = True , help = "Project to use for creating resources." , ) parser . add argument ( "--region" , type = str , required = True , help = "Region where the resources should live." , ) parser . add argument ( "--cluster name" , type = str , required = True , help = "Name to use for creating a cluster." , ) parser . add argument ( "--job file path" , type = str , required = True , help = "Job in GCS to execute against the cluster." , ) args = parser . parse args () quickstart ( args . project id , args . region , args . cluster name , args . job file path ) View the output The code outputs the job driver log to the default Managed Service for Apache Spark staging bucket in Cloud Storage.
- InstanceGroupConfig masterConfig = InstanceGroupConfig . newBuilder () . setMachineTypeUri ( "n1-standard-2" ) . setNumInstances ( 1 ) . build (); InstanceGroupConfig workerConfig = InstanceGroupConfig . newBuilder () . setMachineTypeUri ( "n1-standard-2" ) . setNumInstances ( 2 ) . build (); ClusterConfig clusterConfig = ClusterConfig . newBuilder () . setMasterConfig ( masterConfig ) . setWorkerConfig ( workerConfig ) . build (); // Create the cluster object with the desired cluster config.

