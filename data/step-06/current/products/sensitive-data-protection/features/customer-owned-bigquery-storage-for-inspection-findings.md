---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.611Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Customer-owned BigQuery storage for inspection findings"
feature_slug: "customer-owned-bigquery-storage-for-inspection-findings"
latest_feature_date: "2017-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-storage"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage"
keywords:
  - "customer"
  - "owned"
  - "stored"
  - "inspection"
  - "findings"
  - "storage"
---

# Customer-owned BigQuery storage for inspection findings

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Inspection findings are stored in the customer's own BigQuery instance.

## Extended Definition

Inspection findings are stored in the customer's own BigQuery instance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-storage)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage)

## Supporting Pages

### "Create de-identified copies of data stored in Cloud Storage using the API\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-storage)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DlpServiceClient (); // The project ID to run the API call under // const projectId = 'my-project'; // The Cloud Storage directory that needs to be inspected // const inputDirectory = 'your-google-cloud-storage-path'; // The ID of the dataset to inspect, e.g. 'my dataset' // const datasetId = 'my dataset'; // The ID of the table to inspect, e.g. 'my table' // const tableId = 'my table'; // The Cloud Storage directory that will be used to store the de-identified files // const outputDirectory = 'your-output-directory'; // The full resource name of the default de-identify template // const deidentifyTemplateId = 'your-deidentify-template-id'; // The full resource name of the de-identify template for structured files // const structuredDeidentifyTemplateId = 'your-structured-deidentify-template-id'; // The full resource name of the image redaction template for images // const imageRedactTemplateId = 'your-image-redact-template-id'; async function deidentifyCloudStorage () { // Specify storage configuration that uses file set. const storageConfig = { cloudStorageOptions : { fileSet : { url : inputDirectory , }, }, }; // Specify the type of info the inspection will look for. const infoTypes = [{ name : 'PERSON NAME' }, { name : 'EMAIL ADDRESS' }]; // Construct inspect configuration const inspectConfig = { infoTypes : infoTypes , includeQuote : true , }; // Types of files to include for de-identification. const fileTypesToTransform = [ { fileType : 'IMAGE' }, { fileType : 'CSV' }, { fileType : ' TEXT FILE ' }, ]; // Specify the big query table to store the transformation details. const transformationDetailsStorageConfig = { table : { projectId : projectId , tableId : tableId , datasetId : datasetId , }, }; // Specify the de-identify template used for the transformation. const transformationConfig = { deidentifyTemplate : deidentifyTemplateId , structuredDeidentifyTemplate : structuredDeidentifyTemplateId , imageRedactTemplate : imageRedactTemplateId , }; // Construct action to de-identify sensitive data. const action = { deidentify : { cloudStorageOutput : outputDirectory , transformationConfig : transformationConfig , transformationDetailsStorageConfig : transformationDetailsStorageConfig , fileTypes : fileTypesToTransform , }, }; // Construct the inspect job configuration. const inspectJobConfig = { inspectConfig : inspectConfig , storageConfig : storageConfig , actions : [ action ], }; // Construct the job creation request to be sent by the client. const createDlpJobRequest = { parent : projects/ ${ projectId } /locations/global , inspectJob : inspectJobConfig , }; // Send the job creation request and process the response. const [ response ] = await dlp . createDlpJob ( createDlpJobRequest ); const jobName = response . name ; // Waiting for a maximum of 15 minutes for the job to get complete. let job ; let numOfAttempts = 30 ; while ( numOfAttempts > 0 ) { // Fetch DLP Job status [ job ] = await dlp . getDlpJob ({ name : jobName }); // Check if the job has completed. if ( job . state === 'DONE' ) { break ; } if ( job . state === 'FAILED' ) { console . log ( 'Job Failed, Please check the configuration.' ); return ; } // Sleep for a short duration before checking the job status again. await new Promise ( resolve = > { setTimeout (() = > resolve (), 30000 ); }); numOfAttempts -= 1 ; } // Print out the results. const infoTypeStats = job . inspectDetails . result . infoTypeStats ; if ( infoTypeStats . length > 0 ) { infoTypeStats . forEach ( infoTypeStat = > { console . log ( Found ${ infoTypeStat . count } instance(s) of infoType ${ infoTypeStat . infoType . name } . ); }); } else { console . log ( 'No findings.' ); } } await deidentifyCloudStorage (); PHP To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .
- DONE : print ( f "Job did not complete within { timeout } minutes." ) return Print out the results. print ( f "Job name: { job . name } " ) result = job . inspect details . result print ( f "Processed Bytes: { result . processed bytes } " ) if result . info type stats : for stats in result . info type stats : print ( f "Info type: { stats . info type . name } " ) print ( f "Count: { stats . count } " ) else : print ( "No findings." ) REST JSON input { "inspect job" : { "storage config" : { "cloud storage options" : { "file set" : { "url" : " INPUT DIRECTORY " } } }, "inspect config" : { "info types" : [ { "name" : "PERSON NAME" } ] }, "actions" : { "deidentify" : { "cloud storage output" : " OUTPUT DIRECTORY " , "transformation config" : { "deidentify template" : " DEIDENTIFY TEMPLATE NAME " , "structured deidentify template" : " STRUCTURED DEIDENTIFY TEMPLATE NAME " , "image redact template" : " IMAGE REDACTION TEMPLATE NAME " }, "transformation details storage config" : { "table" : { "project id" : " TRANSFORMATION DETAILS PROJECT ID " , "dataset id" : " TRANSFORMATION DETAILS DATASET ID " , "table id" : " TRANSFORMATION DETAILS TABLE ID " } }, "fileTypesToTransform" : [ "IMAGE" , "CSV" , "TEXT FILE" ] } } } } Replace the following: PROJECT ID : the ID of the project where you want to store the inspection job.
- You can also control access at the following levels: Cloud Storage bucket BigQuery dataset BigQuery table API overview To create de-identified copies of content stored in Cloud Storage, you configure an inspection job that looks for sensitive data according to the criteria that you specify.
- If you don't provide a table ID, the system automatically creates one. @param string $tableId The ID of the BigQuery table where you want to store the transformation details. / function deidentify cloud storage( // TODO(developer): Replace sample parameters before running the code. string $callingProjectId, string $inputgcsPath = 'gs://YOUR GOOGLE STORAGE BUCKET', string $outgcsPath = 'gs://YOUR GOOGLE STORAGE BUCKET', string $deidentifyTemplateName = 'YOUR DEIDENTIFY TEMPLATE NAME', string $structuredDeidentifyTemplateName = 'YOUR STRUCTURED DEIDENTIFY TEMPLATE NAME', string $imageRedactTemplateName = 'YOUR IMAGE REDACT DEIDENTIFY TEMPLATE NAME', string $datasetId = 'YOUR DATASET ID', string $tableId = 'YOUR TABLE ID' ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $parent = "projects/$callingProjectId/locations/global"; // Specify the GCS Path to be de-identify. $cloudStorageOptions = (new CloudStorageOptions()) ->setFileSet((new FileSet()) ->setUrl($inputgcsPath)); $storageConfig = (new StorageConfig()) ->setCloudStorageOptions(($cloudStorageOptions)); // Specify the type of info the inspection will look for. $inspectConfig = (new InspectConfig()) ->setInfoTypes([ (new InfoType())->setName('PERSON NAME'), (new InfoType())->setName('EMAIL ADDRESS') ]); // Specify the big query table to store the transformation details. $transformationDetailsStorageConfig = (new TransformationDetailsStorageConfig()) ->setTable((new BigQueryTable()) ->setProjectId($callingProjectId) ->setDatasetId($datasetId) ->setTableId($tableId)); // Specify the de-identify template used for the transformation. $transformationConfig = (new TransformationConfig()) ->setDeidentifyTemplate( DlpServiceClient::projectDeidentifyTemplateName($callingProjectId, $deidentifyTemplateName) ) ->setStructuredDeidentifyTemplate( DlpServiceClient::projectDeidentifyTemplateName($callingProjectId, $structuredDeidentifyTemplateName) ) ->setImageRedactTemplate( DlpServiceClient::projectDeidentifyTemplateName($callingProjectId, $imageRedactTemplateName) ); $deidentify = (new Deidentify()) ->setCloudStorageOutput($outgcsPath) ->setTransformationConfig($transformationConfig) ->setTransformationDetailsStorageConfig($transformationDetailsStorageConfig) ->setFileTypesToTransform([FileType::TEXT FILE, FileType::IMAGE, FileType::CSV]); $action = (new Action()) ->setDeidentify($deidentify); // Configure the inspection job we want the service to perform. $inspectJobConfig = (new InspectJobConfig()) ->setInspectConfig($inspectConfig) ->setStorageConfig($storageConfig) ->setActions([$action]); // Send the job creation request and process the response. $createDlpJobRequest = (new CreateDlpJobRequest()) ->setParent($parent) ->setInspectJob($inspectJobConfig); $job = $dlp->createDlpJob($createDlpJobRequest); $numOfAttempts = 10; do { printf('Waiting for job to complete' .

### "Profile Cloud Storage data in a single project \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage)
- Source ID: `site-docs-reference-3`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Caution: If you don't include an inspection template that's stored in the global region, Sensitive Data Protection can't profile data in regions that don't have a dedicated inspection template.
- To respect data residency, Sensitive Data Protection doesn't use an inspection template outside the region where that template is stored.
- The Region field is automatically populated with the name of the region where your inspection template is stored.
- Optional: Add an inspection template that's stored in the global region.

### "Profile Azure Blob Storage data \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage)
- Source ID: `site-docs-reference-3`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To respect data residency, Sensitive Data Protection doesn't use an inspection template outside the region where that template is stored.
- The Region field is automatically populated with the name of the region where your inspection template is stored.
- For each Blob Storage container, a file store data profile includes the following information: The types of files that you're storing in the container, categorized into file clusters The sensitivity level of the data in the container A summary about each detected file cluster, including the types of sensitive information found For a full list of insights and metadata in each file store data profile, see File store data profiles .
- SELECT findings table . quote , findings table . infotype . name , findings table . location . container name , profiles table . file store profile . file store path as bucket name , profiles table . file store profile . sensitivity score as bucket sensitivity score FROM FINDINGS TABLE PROJECT ID .

