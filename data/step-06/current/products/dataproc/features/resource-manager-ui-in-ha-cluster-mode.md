---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.054Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Resource Manager UI in HA cluster mode"
feature_slug: "resource-manager-ui-in-ha-cluster-mode"
latest_feature_date: "2022-02-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console"
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console"
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-client-libraries"
keywords:
  - "resource"
  - "manager"
  - "ui"
  - "in"
  - "ha"
  - "cluster"
  - "mode"
  - "dataproc"
---

# Resource Manager UI in HA cluster mode

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc HA cluster mode supports the Resource Manager UI and other HA-capable UIs.

## Extended Definition

Dataproc HA cluster mode supports the Resource Manager UI and other HA-capable UIs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console](https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console)
- [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console)
- [https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-client-libraries](https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-client-libraries)

## Supporting Pages

### "Quickstart: Create a cluster by using the Google Cloud console \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console](https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- User roles To get the permissions that you need to create a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account role To ensure that the Compute Engine default service account has the necessary permissions to create a Managed Service for Apache Spark cluster, ask your administrator to grant the Dataproc Worker ( roles/dataproc.worker ) IAM role to the Compute Engine default service account on the project.
- Select a region (for example, us-east1 or europe-west1 ) to isolate resources, such as virtual machine (VM) instances and Cloud Storage and metadata storage locations that are utilized by Managed Service for Apache Spark, in the region.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Roles required to select or create a project Select a project : Selecting a project doesn't require a specific IAM role—you can select any project that you've been granted a role on.

### "Quickstart: Create a cluster by using the Google Cloud console \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- User roles To get the permissions that you need to create a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account role To ensure that the Compute Engine default service account has the necessary permissions to create a Managed Service for Apache Spark cluster, ask your administrator to grant the Dataproc Worker ( roles/dataproc.worker ) IAM role to the Compute Engine default service account on the project.
- Select a region (for example, us-east1 or europe-west1 ) to isolate resources, such as virtual machine (VM) instances and Cloud Storage and metadata storage locations that are utilized by Managed Service for Apache Spark, in the region.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Roles required to select or create a project Select a project : Selecting a project doesn't require a specific IAM role—you can select any project that you've been granted a role on.

### "Quickstart: Create a cluster by using client libraries \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-client-libraries](https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-client-libraries)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JobControllerClient ({ apiEndpoint : ${ region } -dataproc.googleapis.com , projectId : projectId , }); async function quickstart () { // Create the cluster config const cluster = { projectId : projectId , region : region , cluster : { clusterName : clusterName , config : { masterConfig : { numInstances : 1 , machineTypeUri : 'n1-standard-2' , }, workerConfig : { numInstances : 2 , machineTypeUri : 'n1-standard-2' , }, }, }, }; // Create the cluster const [ operation ] = await clusterClient . createCluster ( cluster ); const [ response ] = await operation . promise (); // Output a success message console . log ( Cluster created successfully: ${ response . clusterName } ); const job = { projectId : projectId , region : region , job : { placement : { clusterName : clusterName , }, pysparkJob : { mainPythonFileUri : jobFilePath , }, }, }; const [ jobOperation ] = await jobClient . submitJobAsOperation ( job ); const [ jobResponse ] = await jobOperation . promise (); const matches = jobResponse . driverOutputResourceUri . match ( 'gs://(. ?)/(. )' ); const storage = new Storage (); const output = await storage . bucket ( matches [ 1 ]) . file ( ${ matches [ 2 ] } .000000000 ) . download (); // Output a success message. console . log ( Job finished successfully: ${ output } ); // Delete the cluster once the job has terminated. const deleteClusterReq = { projectId : projectId , region : region , clusterName : clusterName , }; const [ deleteOperation ] = await clusterClient . deleteCluster ( deleteClusterReq ); await deleteOperation . promise (); // Output a success message console . log ( Cluster ${ clusterName } successfully deleted. ); } quickstart (); } const args = process . argv . slice ( 2 ); if ( args . length !== 4 ) { console . log ( 'Insufficient number of parameters provided.
- RawDescriptionHelpFormatter , ) parser . add argument ( "--project id" , type = str , required = True , help = "Project to use for creating resources." , ) parser . add argument ( "--region" , type = str , required = True , help = "Region where the resources should live." , ) parser . add argument ( "--cluster name" , type = str , required = True , help = "Name to use for creating a cluster." , ) parser . add argument ( "--job file path" , type = str , required = True , help = "Job in GCS to execute against the cluster." , ) args = parser . parse args () quickstart ( args . project id , args . region , args . cluster name , args . job file path ) View the output The code outputs the job driver log to the default Managed Service for Apache Spark staging bucket in Cloud Storage.
- See Uploading objects to learn more about uploading files to Cloud Storage. // This quickstart shows how you can use the Dataproc Client library to create a // Dataproc cluster, submit a PySpark job to the cluster, wait for the job to finish // and finally delete the cluster. // // Usage: // // go build // ./quickstart --project id <PROJECT ID> --region <REGION> \ // --cluster name <CLUSTER NAME> --job file path <GCS JOB FILE PATH> package main import ( "context" "flag" "fmt" "io" "log" "regexp" dataproc "cloud.google.com/go/dataproc/apiv1" "cloud.google.com/go/dataproc/apiv1/dataprocpb" "cloud.google.com/go/storage" "google.golang.org/api/option" ) func main () { var projectID , clusterName , region , jobFilePath string flag .
- See Uploading objects to learn more about uploading files to Cloud Storage. // This quickstart sample walks a user through creating a Dataproc // cluster, submitting a PySpark job from Google Cloud Storage to the // cluster, reading the output of the job and deleting the cluster, all // using the Node.js client library. 'use strict' ; function main ( projectId , region , clusterName , jobFilePath ) { const dataproc = require ( ' @google-cloud/dataproc ' ); const { Storage } = require ( ' @google-cloud/storage ' ); // Create a cluster client with the endpoint set to the desired cluster region const clusterClient = new dataproc . v1 .

