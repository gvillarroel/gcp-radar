---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:04.992Z"
product_name: "Oracle Database@Google Cloud"
product_slug: "oracle-database-google-cloud"
feature_name: "Exadata Database Service availability in southamerica-east1"
feature_slug: "exadata-database-service-availability-in-southamerica-east1"
latest_feature_date: "2025-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/oracle/database/docs/create-instances"
  - "https://docs.cloud.google.com/oracle/database/docs/available-configurations"
  - "https://docs.cloud.google.com/oracle/database/docs/delete-instances"
  - "https://docs.cloud.google.com/oracle/database/docs/manage-instances"
keywords:
  - "exadata"
  - "database"
  - "availability"
  - "in"
  - "southamerica"
  - "east1"
  - "is"
  - "available"
---

# Exadata Database Service availability in southamerica-east1

Product: Oracle Database@Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Exadata Database Service is available in the southamerica-east1 location.

## Extended Definition

Exadata Database Service is available in the southamerica-east1 location.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/oracle/database/docs/create-instances](https://docs.cloud.google.com/oracle/database/docs/create-instances)
- [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations)
- [https://docs.cloud.google.com/oracle/database/docs/delete-instances](https://docs.cloud.google.com/oracle/database/docs/delete-instances)
- [https://docs.cloud.google.com/oracle/database/docs/manage-instances](https://docs.cloud.google.com/oracle/database/docs/manage-instances)

## Supporting Pages

### "Create Exadata Infrastructure instances \_|\_ Oracle Database at Google\

- URL: [https://docs.cloud.google.com/oracle/database/docs/create-instances](https://docs.cloud.google.com/oracle/database/docs/create-instances)
- Source ID: `site-docs-reference`
- Final score: 227
- Re-rank relevance: N/A

Evidence snippets:
- The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). / // const requestId = 'abc123' // Imports the Oracledatabase library const { OracleDatabaseClient } = require ( ' @google-cloud/oracledatabase ' ). v1 ; // Instantiates a client const oracledatabaseClient = new OracleDatabaseClient (); async function callCreateCloudExadataInfrastructure () { // Construct request const request = { parent , cloudExadataInfrastructureId , cloudExadataInfrastructure , }; // Run request const [ operation ] = await oracledatabaseClient . createCloudExadataInfrastructure ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callCreateCloudExadataInfrastructure (); PHP use Google\ApiCore\ApiException; use Google\ApiCore\OperationResponse; use Google\Cloud\OracleDatabase\V1\Client\OracleDatabaseClient; use Google\Cloud\OracleDatabase\V1\CloudExadataInfrastructure; use Google\Cloud\OracleDatabase\V1\CreateCloudExadataInfrastructureRequest; use Google\Rpc\Status; / Creates a new Exadata Infrastructure in a given project and location. @param string $formattedParent The parent value for CloudExadataInfrastructure in the following format: projects/{project}/locations/{location}.
- Operation ; public class AsyncCreateCloudExadataInfrastructure { public static void main ( String [] args ) throws Exception { asyncCreateCloudExadataInfrastructure (); } public static void asyncCreateCloudExadataInfrastructure () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( OracleDatabaseClient oracleDatabaseClient = OracleDatabaseClient . create ()) { CreateCloudExadataInfrastructureRequest request = CreateCloudExadataInfrastructureRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setCloudExadataInfrastructureId ( "cloudExadataInfrastructureId975345409" ) . setCloudExadataInfrastructure ( CloudExadataInfrastructure . newBuilder (). build ()) . setRequestId ( "requestId693933066" ) . build (); ApiFuture<Operation> future = oracleDatabaseClient . createCloudExadataInfrastructureCallable (). futureCall ( request ); // Do something.
- C# using Google.Cloud.OracleDatabase.V1 ; using Google.LongRunning ; using System.Threading.Tasks ; public sealed partial class GeneratedOracleDatabaseClientSnippets { /// <summary>Snippet for CreateCloudExadataInfrastructureAsync</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public async Task CreateCloudExadataInfrastructureAsync () { // Create client OracleDatabaseClient oracleDatabaseClient = await OracleDatabaseClient .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client, please see the apiEndpoint client configuration option for more details. / function callSample(): void { $formattedParent = OracleDatabaseClient::locationName('[PROJECT]', '[LOCATION]'); $cloudExadataInfrastructureId = '[CLOUD EXADATA INFRASTRUCTURE ID]'; create cloud exadata infrastructure sample($formattedParent, $cloudExadataInfrastructureId); } Python This snippet has been automatically generated and should be regarded as a code template only.

### "Supported regions and zones \_|\_ Oracle Database at Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Available regions and zones Oracle Database@Google Cloud is available in the following regions based on your selected Oracle Cloud Infrastructure (OCI) service type: Exadata Database Service Base Database Service Exadata Database Service on Exascale Infrastructure Autonomous AI Database Service Exadata Database Service regions and zones You can create Exadata Database and Exadata VM Clusters resources in the following regions and zones: Region Name Region Description Zone Asia Pacific asia-northeast1 Tokyo, Japan asia-northeast1-a-r1 asia-northeast2 Osaka, Japan asia-northeast2-a-r1 australia-southeast1 Sydney, Australia australia-southeast1-b-r1 australia-southeast2 Melbourne, Australia australia-southeast2-a-r2 australia-southeast2-b-r1 asia-south1 Mumbai, India asia-south1-b-r1 asia-south2 Delhi, India asia-south2-b-r1 North America northamerica-northeast1 Montréal, Québec, Canada northamerica-northeast1-a-r1 northamerica-northeast2 Toronto, Ontario, Canada northamerica-northeast2-a-r2 us-central1 Iowa us-central1-a-r1 us-east4 Northern Virginia us-east4-a-r2 us-east4-b-r1 us-west3 Salt Lake City us-west3-a-r1 South America southamerica-east1 São Paulo, Brazil, South America southamerica-east1-a-r1 Europe europe-west2 London , England europe-west2-a-r1 europe-west2-c-r2 Low CO 2 europe-west3 Frankfurt, Germany europe-west3-a-r2 europe-west3-b-r1 europe-west8 Milan, Italy europe-west8-b-r1 europe-west8-a-r1 Exadata Database Service on Exascale Infrastructure regions and zones You can create Exascale VM Clusters and Exascale Storage Vaults in the following regions and zones: Region Name Region Description Zone Asia Pacific asia-northeast1 Tokyo, Japan asia-northeast1-a-r1 North America northamerica-northeast1 Montréal, Québec, Canada northamerica-northeast1-a-r1 us-central1 Iowa us-central1-a-r1 us-east4 Northern Virginia us-east4-a-r2 us-east4-b-r1 us-west3 Salt Lake City us-west3-a-r1 Europe europe-west2 London europe-west2-a-r1 europe-west2-c-r2 Low CO 2 europe-west3 Frankfurt europe-west3-b-r1 Base Database Service regions and zones You can create DB systems resources in the following regions and zones: Region Name Region Description Zone Asia Pacific asia-northeast1 Tokyo, Japan asia-northeast1-a-r1 North America northamerica-northeast1 Montréal, Québec, Canada northamerica-northeast1-a-r1 us-central1 Iowa us-central1-a-r1 us-east4 Northern Virginia us-east4-a-r2 us-east4-b-r1 us-west3 Salt Lake City us-west3-a-r1 Europe europe-west2 London europe-west2-a-r1 europe-west2-c-r2 Low CO 2 europe-west3 Frankfurt europe-west3-b-r1 Autonomous AI Database Service regions You can create Autonomous AI Database resources in the following regions: Region Name Region Description Asia Pacific asia-northeast1 Tokyo, Japan asia-northeast2 Osaka, Japan australia-southeast1 Sydney, Australia australia-southeast2 Melbourne, Australia asia-south1 Mumbai, India asia-south2 Delhi, India North America northamerica-northeast1 Montréal, Québec, Canada northamerica-northeast2 Toronto, Ontario, Canada us-central1 Iowa us-east4 Northern Virginia us-west3 Salt Lake City South America southamerica-east1 São Paulo, Brazil, South America Europe europe-west2 London, England Low CO 2 europe-west3 Frankfurt, Germany europe-west8 Milan, Italy What's next?
- The following Oracle Database@Google Cloud resources are regional resources: Autonomous AI Databases The following Oracle Database@Google Cloud resources are zonal resources: Exadata Infrastructures Exadata VM Clusters Exascale VM Clusters and Exascale Storage Vaults ODB Networks and ODB Subnets DB systems Choosing a region and zone You choose which region or zone hosts your resources, which controls where your data is stored and used.
- Place an order for Oracle Database@Google Cloud Create Exadata Infrastructure instances Create Exadata VM Clusters Create Exascale VM Clusters Create Autonomous AI Database resources Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### "Delete Exadata Infrastructure instances \_|\_ Oracle Database at Google\

- URL: [https://docs.cloud.google.com/oracle/database/docs/delete-instances](https://docs.cloud.google.com/oracle/database/docs/delete-instances)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Operation ; public class AsyncDeleteCloudExadataInfrastructure { public static void main ( String [] args ) throws Exception { asyncDeleteCloudExadataInfrastructure (); } public static void asyncDeleteCloudExadataInfrastructure () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( OracleDatabaseClient oracleDatabaseClient = OracleDatabaseClient . create ()) { DeleteCloudExadataInfrastructureRequest request = DeleteCloudExadataInfrastructureRequest . newBuilder () . setName ( CloudExadataInfrastructureName . of ( "[PROJECT]" , "[LOCATION]" , "[CLOUD EXADATA INFRASTRUCTURE]" ) . toString ()) . setRequestId ( "requestId693933066" ) . setForce ( true ) . build (); ApiFuture<Operation> future = oracleDatabaseClient . deleteCloudExadataInfrastructureCallable (). futureCall ( request ); // Do something. future . get (); } } } Node.js / This snippet has been automatically generated and should be regarded as a code template only.
- An Exadata Infrastructure can only be deleted once all its VM clusters have been deleted. / // const force = true // Imports the Oracledatabase library const { OracleDatabaseClient } = require ( ' @google-cloud/oracledatabase ' ). v1 ; // Instantiates a client const oracledatabaseClient = new OracleDatabaseClient (); async function callDeleteCloudExadataInfrastructure () { // Construct request const request = { name , }; // Run request const [ operation ] = await oracledatabaseClient . deleteCloudExadataInfrastructure ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callDeleteCloudExadataInfrastructure (); PHP use Google\ApiCore\ApiException; use Google\ApiCore\OperationResponse; use Google\Cloud\OracleDatabase\V1\Client\OracleDatabaseClient; use Google\Cloud\OracleDatabase\V1\DeleteCloudExadataInfrastructureRequest; use Google\Rpc\Status; / Deletes a single Exadata Infrastructure. @param string $formattedName The name of the Cloud Exadata Infrastructure in the following format: projects/{project}/locations/{location}/cloudExadataInfrastructures/{cloud exadata infrastructure}.
- C# using Google.Cloud.OracleDatabase.V1 ; using Google.LongRunning ; using Google.Protobuf.WellKnownTypes ; using System.Threading.Tasks ; public sealed partial class GeneratedOracleDatabaseClientSnippets { /// <summary>Snippet for DeleteCloudExadataInfrastructureAsync</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public async Task DeleteCloudExadataInfrastructureAsync () { // Create client OracleDatabaseClient oracleDatabaseClient = await OracleDatabaseClient .
- Please see {@see OracleDatabaseClient::cloudExadataInfrastructureName()} for help formatting this field. / function delete cloud exadata infrastructure sample(string $formattedName): void { // Create a client. $oracleDatabaseClient = new OracleDatabaseClient(); // Prepare the request message. $request = (new DeleteCloudExadataInfrastructureRequest()) ->setName($formattedName); // Call the API and handle any network failures. try { / @var OperationResponse $response / $response = $oracleDatabaseClient->deleteCloudExadataInfrastructure($request); $response->pollUntilComplete(); if ($response->operationSucceeded()) { printf('Operation completed successfully.' .

### "Manage Exadata Infrastructure instances \_|\_ Oracle Database at Google\

- URL: [https://docs.cloud.google.com/oracle/database/docs/manage-instances](https://docs.cloud.google.com/oracle/database/docs/manage-instances)
- Source ID: `site-docs-root-2`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Oracle Database at Google Cloud Guides Send feedback Manage Exadata Infrastructure instances Stay organized with collections Save and categorize content based on your preferences.
- Enable the Oracle Database@Google Cloud API Confirm that you have the required roles necessary to modify an instance: cloudExadataInfrastructureViewer .
- In Oracle Database@Google Cloud, you can modify an Exadata Infrastructure instance using Oracle Cloud Infrastructure (OCI).
- Confirm you have the required Oracle Cloud Infrastructure (OCI) permissions to manage an Exadata Infrastructure instance.

