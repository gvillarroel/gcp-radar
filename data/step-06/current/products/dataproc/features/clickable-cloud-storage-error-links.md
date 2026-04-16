---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.708Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Clickable Cloud Storage error links"
feature_slug: "clickable-cloud-storage-error-links"
latest_feature_date: "2015-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/error-messages"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices"
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-client-libraries"
keywords:
  - "clickable"
  - "storage"
  - "error"
  - "links"
  - "bucket"
  - "paths"
  - "shown"
  - "messages"
---

# Clickable Cloud Storage error links

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Cloud Storage bucket paths shown in error messages are rendered as clickable links.

## Extended Definition

Cloud Storage bucket paths shown in error messages are rendered as clickable links.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/error-messages](https://docs.cloud.google.com/dataproc-metastore/docs/error-messages)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices)
- [https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-client-libraries](https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-client-libraries)

## Supporting Pages

### Error messages \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/error-messages](https://docs.cloud.google.com/dataproc-metastore/docs/error-messages)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Please make sure the service agent is granted roles/metastore.serviceAgent in the project [PROJECT NUMBER]." "Dataproc Metastore Service Agent cannot access Cloud Storage URI [GCS URI] with permissions [SERVICE AGENT PERMISSIONS]; Please check permissions or VPC Service Controls service perimeter." "The provided warehouse directory's Cloud Storage bucket [GCS URI] is not readable and writable by the Dataproc Metastore service agent." Errors relating to import and export: Import and export Cloud Storage permissions: ""Dataproc Metastore Service Agent" or "Caller" does not have enough permissions of the Cloud Storage URI for import/export ([SERVICE AGENT] cannot access Cloud Storage URI [GCS URI] with permissions [SERVICE AGENT PERMISSIONS])." Run Avro import or export on an unsupported Hive version: "Importing from Avro files is not supported for Hive version [HIVE METASTORE VERSION], supported versions are [SUPPORT HIVE VERSIONS]." Missing import tables: "Avro source files not found for tables [MISSING TABLE LIST]." "Hive schema validation failed, missing tables: [MISSING TABLE LIST]." Errors relating to backup and restore: Backup not found for restore: "Backup [BACKUP ID] not found." Cannot delete a backup: "Cannot delete a backup in a state [RESOURCE STATE]." General errors This section explains general errors.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Error messages Stay organized with collections Save and categorize content based on your preferences.
- You provided a custom data warehouse Cloud Storage bucket, but you didn't grant the Dataproc Metastore service agent permission to access it.
- The provided warehouse directory's Cloud Storage bucket [GCS URI] is not readable and writable by the Dataproc Metastore service agent.

### "Managed Service for Apache Spark best practices for production \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Typically, the staging bucket Cloud Storage location is shown in error messages, as shown in the bold text in the following sample error message: ERROR: (gcloud.dataproc.clusters.create) Operation ... failed: ... - Initialization action failed.
- View the staging bucket to investigate failures Look at your cluster's staging bucket to investigate cluster and job error messages.
- Failed action ... see output in: gs://dataproc-<BUCKETID>-us-central1/google-cloud-dataproc-metainfo/CLUSTERID/<CLUSTER ID>\dataproc-initialization-script-0 output Use the gcloud CLI to view staging bucket contents: gcloud storage cat gs:// STAGING BUCKET Sample output: + readonly RANGER VERSION=1.2.0 ...
- For production environments, associate your cluster with a specific major.minor Managed Service for Apache Spark image version, as shown in the following gcloud CLI command. gcloud dataproc clusters create CLUSTER NAME \ --region= region \ --image-version=2.0 Dataproc resolves the major.minor version to the latest sub-minor version version ( 2.0 is resolved to 2.0.x ).

### "Quickstart: Create a cluster by using client libraries \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-client-libraries](https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-client-libraries)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JobControllerClient ({ apiEndpoint : ${ region } -dataproc.googleapis.com , projectId : projectId , }); async function quickstart () { // Create the cluster config const cluster = { projectId : projectId , region : region , cluster : { clusterName : clusterName , config : { masterConfig : { numInstances : 1 , machineTypeUri : 'n1-standard-2' , }, workerConfig : { numInstances : 2 , machineTypeUri : 'n1-standard-2' , }, }, }, }; // Create the cluster const [ operation ] = await clusterClient . createCluster ( cluster ); const [ response ] = await operation . promise (); // Output a success message console . log ( Cluster created successfully: ${ response . clusterName } ); const job = { projectId : projectId , region : region , job : { placement : { clusterName : clusterName , }, pysparkJob : { mainPythonFileUri : jobFilePath , }, }, }; const [ jobOperation ] = await jobClient . submitJobAsOperation ( job ); const [ jobResponse ] = await jobOperation . promise (); const matches = jobResponse . driverOutputResourceUri . match ( 'gs://(. ?)/(. )' ); const storage = new Storage (); const output = await storage . bucket ( matches [ 1 ]) . file ( ${ matches [ 2 ] } .000000000 ) . download (); // Output a success message. console . log ( Job finished successfully: ${ output } ); // Delete the cluster once the job has terminated. const deleteClusterReq = { projectId : projectId , region : region , clusterName : clusterName , }; const [ deleteOperation ] = await clusterClient . deleteCluster ( deleteClusterReq ); await deleteOperation . promise (); // Output a success message console . log ( Cluster ${ clusterName } successfully deleted. ); } quickstart (); } const args = process . argv . slice ( 2 ); if ( args . length !== 4 ) { console . log ( 'Insufficient number of parameters provided.
- RawDescriptionHelpFormatter , ) parser . add argument ( "--project id" , type = str , required = True , help = "Project to use for creating resources." , ) parser . add argument ( "--region" , type = str , required = True , help = "Region where the resources should live." , ) parser . add argument ( "--cluster name" , type = str , required = True , help = "Name to use for creating a cluster." , ) parser . add argument ( "--job file path" , type = str , required = True , help = "Job in GCS to execute against the cluster." , ) args = parser . parse args () quickstart ( args . project id , args . region , args . cluster name , args . job file path ) View the output The code outputs the job driver log to the default Managed Service for Apache Spark staging bucket in Cloud Storage.
- JobControllerClient ( client options = { "api endpoint" : " {} -dataproc.googleapis.com:443" . format ( region )} ) Create the job config. job = { "placement" : { "cluster name" : cluster name }, "pyspark job" : { "main python file uri" : job file path }, } operation = job client . submit job as operation ( request = { "project id" : project id , "region" : region , "job" : job } ) response = operation . result () Dataproc job output gets saved to the Google Cloud Storage bucket allocated to the job.
- Use a regex to obtain the bucket and blob info. matches = re . match ( "gs://(. ?)/(. )" , response . driver output resource uri ) output = ( storage .

