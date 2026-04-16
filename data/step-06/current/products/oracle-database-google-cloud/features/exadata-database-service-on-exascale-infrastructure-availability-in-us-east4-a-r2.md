---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:04.989Z"
product_name: "Oracle Database@Google Cloud"
product_slug: "oracle-database-google-cloud"
feature_name: "Exadata Database Service on Exascale infrastructure availability in us-east4-a-r2"
feature_slug: "exadata-database-service-on-exascale-infrastructure-availability-in-us-east4-a-r2"
latest_feature_date: "2025-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/oracle/database/docs/create-instances"
  - "https://docs.cloud.google.com/oracle/database/docs/available-configurations"
  - "https://docs.cloud.google.com/oracle/database/docs/delete-instances"
  - "https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters"
keywords:
  - "exadata"
  - "database"
  - "on"
  - "exascale"
  - "infrastructure"
  - "availability"
  - "in"
  - "us"
---

# Exadata Database Service on Exascale infrastructure availability in us-east4-a-r2

Product: Oracle Database@Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Exadata Database Service on Exascale infrastructure is available in the us-east4-a-r2 location.

## Extended Definition

Exadata Database Service on Exascale infrastructure is available in the us-east4-a-r2 location.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/oracle/database/docs/create-instances](https://docs.cloud.google.com/oracle/database/docs/create-instances)
- [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations)
- [https://docs.cloud.google.com/oracle/database/docs/delete-instances](https://docs.cloud.google.com/oracle/database/docs/delete-instances)
- [https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters](https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters)

## Supporting Pages

### "Create Exadata Infrastructure instances \_|\_ Oracle Database at Google\

- URL: [https://docs.cloud.google.com/oracle/database/docs/create-instances](https://docs.cloud.google.com/oracle/database/docs/create-instances)
- Source ID: `site-docs-reference`
- Final score: 282
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). / // const requestId = 'abc123' // Imports the Oracledatabase library const { OracleDatabaseClient } = require ( ' @google-cloud/oracledatabase ' ). v1 ; // Instantiates a client const oracledatabaseClient = new OracleDatabaseClient (); async function callCreateCloudExadataInfrastructure () { // Construct request const request = { parent , cloudExadataInfrastructureId , cloudExadataInfrastructure , }; // Run request const [ operation ] = await oracledatabaseClient . createCloudExadataInfrastructure ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callCreateCloudExadataInfrastructure (); PHP use Google\ApiCore\ApiException; use Google\ApiCore\OperationResponse; use Google\Cloud\OracleDatabase\V1\Client\OracleDatabaseClient; use Google\Cloud\OracleDatabase\V1\CloudExadataInfrastructure; use Google\Cloud\OracleDatabase\V1\CreateCloudExadataInfrastructureRequest; use Google\Rpc\Status; / Creates a new Exadata Infrastructure in a given project and location. @param string $formattedParent The parent value for CloudExadataInfrastructure in the following format: projects/{project}/locations/{location}.
- The value must start with a letter and end with a letter or a number. / function create cloud exadata infrastructure sample( string $formattedParent, string $cloudExadataInfrastructureId ): void { // Create a client. $oracleDatabaseClient = new OracleDatabaseClient(); // Prepare the request message. $cloudExadataInfrastructure = new CloudExadataInfrastructure(); $request = (new CreateCloudExadataInfrastructureRequest()) ->setParent($formattedParent) ->setCloudExadataInfrastructureId($cloudExadataInfrastructureId) ->setCloudExadataInfrastructure($cloudExadataInfrastructure); // Call the API and handle any network failures. try { / @var OperationResponse $response / $response = $oracleDatabaseClient->createCloudExadataInfrastructure($request); $response->pollUntilComplete(); if ($response->operationSucceeded()) { / @var CloudExadataInfrastructure $result / $result = $response->getResult(); printf('Operation successful with response data: %s' .
- C# using Google.Cloud.OracleDatabase.V1 ; using Google.LongRunning ; using System.Threading.Tasks ; public sealed partial class GeneratedOracleDatabaseClientSnippets { /// <summary>Snippet for CreateCloudExadataInfrastructureAsync</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public async Task CreateCloudExadataInfrastructureAsync () { // Create client OracleDatabaseClient oracleDatabaseClient = await OracleDatabaseClient .
- Click Create to create the instance. gcloud Use the gcloud oracle-database cloud-exadata-infrastructures create command to create an instance using gcloud CLI. gcloud oracle-database cloud-exadata-infrastructures create INSTANCE ID --location= REGION ID --display-name= DISPLAY NAME --properties-shape="Exadata.X9M" --properties-compute-count= COMPUTE COUNT --properties-storage-count= STORAGE COUNT Replace the following: INSTANCE ID : a permanent identifier for your instance.

### "Supported regions and zones \_|\_ Oracle Database at Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations)
- Source ID: `site-docs-reference`
- Final score: 278
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Available regions and zones Oracle Database@Google Cloud is available in the following regions based on your selected Oracle Cloud Infrastructure (OCI) service type: Exadata Database Service Base Database Service Exadata Database Service on Exascale Infrastructure Autonomous AI Database Service Exadata Database Service regions and zones You can create Exadata Database and Exadata VM Clusters resources in the following regions and zones: Region Name Region Description Zone Asia Pacific asia-northeast1 Tokyo, Japan asia-northeast1-a-r1 asia-northeast2 Osaka, Japan asia-northeast2-a-r1 australia-southeast1 Sydney, Australia australia-southeast1-b-r1 australia-southeast2 Melbourne, Australia australia-southeast2-a-r2 australia-southeast2-b-r1 asia-south1 Mumbai, India asia-south1-b-r1 asia-south2 Delhi, India asia-south2-b-r1 North America northamerica-northeast1 Montréal, Québec, Canada northamerica-northeast1-a-r1 northamerica-northeast2 Toronto, Ontario, Canada northamerica-northeast2-a-r2 us-central1 Iowa us-central1-a-r1 us-east4 Northern Virginia us-east4-a-r2 us-east4-b-r1 us-west3 Salt Lake City us-west3-a-r1 South America southamerica-east1 São Paulo, Brazil, South America southamerica-east1-a-r1 Europe europe-west2 London , England europe-west2-a-r1 europe-west2-c-r2 Low CO 2 europe-west3 Frankfurt, Germany europe-west3-a-r2 europe-west3-b-r1 europe-west8 Milan, Italy europe-west8-b-r1 europe-west8-a-r1 Exadata Database Service on Exascale Infrastructure regions and zones You can create Exascale VM Clusters and Exascale Storage Vaults in the following regions and zones: Region Name Region Description Zone Asia Pacific asia-northeast1 Tokyo, Japan asia-northeast1-a-r1 North America northamerica-northeast1 Montréal, Québec, Canada northamerica-northeast1-a-r1 us-central1 Iowa us-central1-a-r1 us-east4 Northern Virginia us-east4-a-r2 us-east4-b-r1 us-west3 Salt Lake City us-west3-a-r1 Europe europe-west2 London europe-west2-a-r1 europe-west2-c-r2 Low CO 2 europe-west3 Frankfurt europe-west3-b-r1 Base Database Service regions and zones You can create DB systems resources in the following regions and zones: Region Name Region Description Zone Asia Pacific asia-northeast1 Tokyo, Japan asia-northeast1-a-r1 North America northamerica-northeast1 Montréal, Québec, Canada northamerica-northeast1-a-r1 us-central1 Iowa us-central1-a-r1 us-east4 Northern Virginia us-east4-a-r2 us-east4-b-r1 us-west3 Salt Lake City us-west3-a-r1 Europe europe-west2 London europe-west2-a-r1 europe-west2-c-r2 Low CO 2 europe-west3 Frankfurt europe-west3-b-r1 Autonomous AI Database Service regions You can create Autonomous AI Database resources in the following regions: Region Name Region Description Asia Pacific asia-northeast1 Tokyo, Japan asia-northeast2 Osaka, Japan australia-southeast1 Sydney, Australia australia-southeast2 Melbourne, Australia asia-south1 Mumbai, India asia-south2 Delhi, India North America northamerica-northeast1 Montréal, Québec, Canada northamerica-northeast2 Toronto, Ontario, Canada us-central1 Iowa us-east4 Northern Virginia us-west3 Salt Lake City South America southamerica-east1 São Paulo, Brazil, South America Europe europe-west2 London, England Low CO 2 europe-west3 Frankfurt, Germany europe-west8 Milan, Italy What's next?
- The following Oracle Database@Google Cloud resources are regional resources: Autonomous AI Databases The following Oracle Database@Google Cloud resources are zonal resources: Exadata Infrastructures Exadata VM Clusters Exascale VM Clusters and Exascale Storage Vaults ODB Networks and ODB Subnets DB systems Choosing a region and zone You choose which region or zone hosts your resources, which controls where your data is stored and used.
- Place an order for Oracle Database@Google Cloud Create Exadata Infrastructure instances Create Exadata VM Clusters Create Exascale VM Clusters Create Autonomous AI Database resources Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You must create your ODB Network and other zonal resources, including Exadata Infrastructure, Exadata VM Clusters, and DB system in the same region and zone to ensure optimal performance and seamless communication.

### "Delete Exadata Infrastructure instances \_|\_ Oracle Database at Google\

- URL: [https://docs.cloud.google.com/oracle/database/docs/delete-instances](https://docs.cloud.google.com/oracle/database/docs/delete-instances)
- Source ID: `site-docs-reference`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An Exadata Infrastructure can only be deleted once all its VM clusters have been deleted. / // const force = true // Imports the Oracledatabase library const { OracleDatabaseClient } = require ( ' @google-cloud/oracledatabase ' ). v1 ; // Instantiates a client const oracledatabaseClient = new OracleDatabaseClient (); async function callDeleteCloudExadataInfrastructure () { // Construct request const request = { name , }; // Run request const [ operation ] = await oracledatabaseClient . deleteCloudExadataInfrastructure ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callDeleteCloudExadataInfrastructure (); PHP use Google\ApiCore\ApiException; use Google\ApiCore\OperationResponse; use Google\Cloud\OracleDatabase\V1\Client\OracleDatabaseClient; use Google\Cloud\OracleDatabase\V1\DeleteCloudExadataInfrastructureRequest; use Google\Rpc\Status; / Deletes a single Exadata Infrastructure. @param string $formattedName The name of the Cloud Exadata Infrastructure in the following format: projects/{project}/locations/{location}/cloudExadataInfrastructures/{cloud exadata infrastructure}.
- C# using Google.Cloud.OracleDatabase.V1 ; using Google.LongRunning ; using Google.Protobuf.WellKnownTypes ; using System.Threading.Tasks ; public sealed partial class GeneratedOracleDatabaseClientSnippets { /// <summary>Snippet for DeleteCloudExadataInfrastructureAsync</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public async Task DeleteCloudExadataInfrastructureAsync () { // Create client OracleDatabaseClient oracleDatabaseClient = await OracleDatabaseClient .
- Before running the command, confirm that all Exadata VM Clusters have been removed from the Exadata Infrastructure instance that you want to delete and that there are no active Exadata VM Clusters. gcloud oracle-database cloud-exadata-infrastructures delete INSTANCE ID --location= REGION ID Replace the following: INSTANCE ID : the identifier for the instance that you want to delete.
- This is an auto-generated example demonstrating basic usage of Google::Cloud::OracleDatabase::V1::OracleDatabase::Client#delete cloud exadata infrastructure. def delete cloud exadata infrastructure Create a client object.

### "Create Exascale VM Clusters \_|\_ Oracle Database at Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters](https://docs.cloud.google.com/oracle/database/docs/create-exascale-clusters)
- Source ID: `site-docs-reference`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create an Exascale VM Cluster To create an Exascale VM Cluster, do the following: Console Go to the Exadata Database Service > Exascale Infrastructure page.
- What's next Learn about Exadata Database Service on Exascale Infrastructure Learn to manage your Exascale VM Clusters .
- Run the following curl command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://oracledatabase.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /exadbVmClusters/ CLUSTER ID " -d \ '{ "display name": " CLUSTER DISPLAY NAME ", "gcp oracle zone": " GCP ORACLE ZONE ", "name": "projects/ PROJECT ID /locations/ REGION /exadbVmClusters/ CLUSTER NAME ", "odb network": "projects/ ODB NETWORK PROJECT ID /locations/ REGION /odbNetworks/ ODB NETWORK ID ", "odb subnet": "projects/ ODB NETWORK PROJECT ID /locations/ REGION /odbNetworks/ ODB NETWORK ID /odbSubnets/ CLIENT SUBNET ID ", "backup odb subnet": "projects/ ODB NETWORK PROJECT ID /locations/ REGION /odbNetworks/ ODB NETWORK ID /odbSubnets/ BACKUP SUBNET ID ", "properties": { "cluster name": " CLUSTER NAME ", "grid image id": GRID IMAGE ID , "node count": NODE COUNT , "enabled ecpu count per node": ENABLED ECPU COUNT , "additional ecpu count per node": " ADDITIONAL ECPU COUNT ", "vm file system storage": { "size in gbs per node": STORAGE SIZE }, "license model": " LICENSE TYPE ", "exascaleDbStorageVault": "projects/ PROJECT ID /locations/ REGION /exascaleDbStorageVaults/ VAULT ID ", "hostname prefix": " HOSTNAME PREFIX ", "ssh public keys": [" SSH PUBLIC KEY "], "data collection options": { "is diagnostics events enabled": EVENTS ENABLED , "is health monitoring enabled": HEALTH MONITORING ENABLED , "is incident logs enabled": INCIDENT LOGS ENABLE }, "time zone": { "id": " TIMEZONE " } } }' Replace the following: PROJECT ID : the ID of your Google Cloud project in which to create the cluster.
- Confirm that you have the required Identity and Access Management (IAM) roles and permissions to create an Exascale VM Cluster: roles/oracledatabase.exadbVmClusterAdmin roles/oracledatabase.exascaleDbStorageVaultAdmin For information on how to assign roles, see Apply IAM roles .

