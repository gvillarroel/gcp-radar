---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.627Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Structured data inspection and redaction"
feature_slug: "structured-data-inspection-and-redaction"
latest_feature_date: "2017-08-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/supported-file-types"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-image-redaction"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-storage"
keywords:
  - "redacting"
  - "supplying"
  - "structured"
  - "scanning"
  - "redaction"
  - "supports"
  - "inspection"
  - "table"
---

# Structured data inspection and redaction

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Supports scanning and redacting structured data by supplying a Table in ContentItem.

## Extended Definition

Supports scanning and redacting structured data by supplying a Table in ContentItem.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/supported-file-types](https://docs.cloud.google.com/sensitive-data-protection/docs/supported-file-types)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-image-redaction](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-image-redaction)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-storage)

## Supporting Pages

### "Supported file types and scanning modes \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/supported-file-types](https://docs.cloud.google.com/sensitive-data-protection/docs/supported-file-types)
- Source ID: `site-docs-reference-3`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sensitive Data Protection uses this scanning mode for any image context infoType detectors that are specified in the inspection or redaction configuration.
- Sensitive Data Protection uses this scanning mode for any object infoTypes that are specified in the inspection or redaction configuration.
- OCR Image content detection Image content classification Executables ac, air, apk, app, appimage, bas, bin, bms, class, cls, com, command, ctl, ctx, dca, ddf, dep, dll, dob, dox, dsr, dsx, dws, exe, frm, frx, gadget, ipa, mpk, oca, ocx, pag, pgx, pif, pyc, res, run, scb, tlb, vbd, vbg, vbl, vbp, vbr, vbw, vbz, vlx, wct, widget, workflow, wsf, x86, x86 64, xap, xbe, xlm Not scanned at this time Archives 7z, a, ace, afa, alz, apk, ar, arc, arj, ark, b1, b6z, ba, bh, cab, car, cdx, cfs, cpio, cpt, dar, dd, dgc, dmg, ear, esd, gca, genozip, gz, ha, hki, ice, ima, img, iso, jar, kgb, lha, lpaq# , lzh, lzx, mou, pak, paq# , paq6, paq7, paq8 and variants, partimg, pea, phar, pim, pit, qda, rar, rk, run, s7z, sda, sea, sen, sfx, shar, shk, sit, sitx, sqx, swm, tar, tar.bz2, tar.gz, tar.lz4, tar.lzma, tar.xz, tar.z, tgz, uc, uc0, uc2, uca, ucn, ue2, uha, ur2, war, wim, xar, xp3, yz1, zip, zipx, zoo, zpaq, zz Sensitive Data Protection scans files within archives that have these file extensions: bz2, cpio, gz, jar, lz4, lzma, tar, tar.bz2, tar.gz, tar.lz4, tar.lzma, tar.xz, tar.z, xz, z, zip The scanning mode used for each file depends on the type of the file.
- Structured parsing De-identify content PDF pdf PDF limits Intelligent document parsing Text asc, brf, c, c++, cc, cpp, cs, css, cxx, dart, eml, go, h, h++, hh, hpp, hs, htm, html, hxx, ini, java, js, json, jsonl, lhs, m, markdown, md, mkd, ml, mli, ocaml, php, pht, phtml, pl, pm, py, pyw, rb, rbw, rc, rs, scala, sh, shtm, shtml, sql, tex, text, txt, vcard, vcs, wml, xhtml, xml, xsd, xsl, yaml, yml Plain text De-identify content Microsoft Word docm, docx, dotm, dotx Word limits Intelligent document parsing Microsoft Excel xlsm, xlsx, xltm, xltx Excel limits Intelligent document parsing Microsoft Powerpoint potm, potx, pptm, pptx Powerpoint limits Intelligent document parsing Image bmp, gif, jpe, jpeg, jpg, png OCR Image content detection Image content classification Redaction Binary Unrecognized file types and images that can't be scanned using optical character recognition (OCR), image content detection, or image content classification.

### "Image inspection and redaction \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-image-redaction](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-image-redaction)
- Source ID: `site-api-reference-required-2`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Sensitive Data Protection Guides Send feedback Image inspection and redaction Stay organized with collections Save and categorize content based on your preferences.
- Inspection and redaction are two distinct operations: Inspection : Sensitive Data Protection inspects the submitted base64-encoded image for the specified infoTypes.
- To detect text in images, specify any text-based infoType, such as PERSON NAME and CREDIT CARD NUMBER in your inspection or redaction configuration.
- Image detection features This section describes the image detection features that you can apply to your inspection and redaction operations.

### "Create de-identified copies of data stored in Cloud Storage using the API\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-storage)
- Source ID: `site-docs-root-2`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DlpServiceClient (); // The project ID to run the API call under // const projectId = 'my-project'; // The Cloud Storage directory that needs to be inspected // const inputDirectory = 'your-google-cloud-storage-path'; // The ID of the dataset to inspect, e.g. 'my dataset' // const datasetId = 'my dataset'; // The ID of the table to inspect, e.g. 'my table' // const tableId = 'my table'; // The Cloud Storage directory that will be used to store the de-identified files // const outputDirectory = 'your-output-directory'; // The full resource name of the default de-identify template // const deidentifyTemplateId = 'your-deidentify-template-id'; // The full resource name of the de-identify template for structured files // const structuredDeidentifyTemplateId = 'your-structured-deidentify-template-id'; // The full resource name of the image redaction template for images // const imageRedactTemplateId = 'your-image-redact-template-id'; async function deidentifyCloudStorage () { // Specify storage configuration that uses file set. const storageConfig = { cloudStorageOptions : { fileSet : { url : inputDirectory , }, }, }; // Specify the type of info the inspection will look for. const infoTypes = [{ name : 'PERSON NAME' }, { name : 'EMAIL ADDRESS' }]; // Construct inspect configuration const inspectConfig = { infoTypes : infoTypes , includeQuote : true , }; // Types of files to include for de-identification. const fileTypesToTransform = [ { fileType : 'IMAGE' }, { fileType : 'CSV' }, { fileType : ' TEXT FILE ' }, ]; // Specify the big query table to store the transformation details. const transformationDetailsStorageConfig = { table : { projectId : projectId , tableId : tableId , datasetId : datasetId , }, }; // Specify the de-identify template used for the transformation. const transformationConfig = { deidentifyTemplate : deidentifyTemplateId , structuredDeidentifyTemplate : structuredDeidentifyTemplateId , imageRedactTemplate : imageRedactTemplateId , }; // Construct action to de-identify sensitive data. const action = { deidentify : { cloudStorageOutput : outputDirectory , transformationConfig : transformationConfig , transformationDetailsStorageConfig : transformationDetailsStorageConfig , fileTypes : fileTypesToTransform , }, }; // Construct the inspect job configuration. const inspectJobConfig = { inspectConfig : inspectConfig , storageConfig : storageConfig , actions : [ action ], }; // Construct the job creation request to be sent by the client. const createDlpJobRequest = { parent : projects/ ${ projectId } /locations/global , inspectJob : inspectJobConfig , }; // Send the job creation request and process the response. const [ response ] = await dlp . createDlpJob ( createDlpJobRequest ); const jobName = response . name ; // Waiting for a maximum of 15 minutes for the job to get complete. let job ; let numOfAttempts = 30 ; while ( numOfAttempts > 0 ) { // Fetch DLP Job status [ job ] = await dlp . getDlpJob ({ name : jobName }); // Check if the job has completed. if ( job . state === 'DONE' ) { break ; } if ( job . state === 'FAILED' ) { console . log ( 'Job Failed, Please check the configuration.' ); return ; } // Sleep for a short duration before checking the job status again. await new Promise ( resolve = > { setTimeout (() = > resolve (), 30000 ); }); numOfAttempts -= 1 ; } // Print out the results. const infoTypeStats = job . inspectDetails . result . infoTypeStats ; if ( infoTypeStats . length > 0 ) { infoTypeStats . forEach ( infoTypeStat = > { console . log ( Found ${ infoTypeStat . count } instance(s) of infoType ${ infoTypeStat . infoType . name } . ); }); } else { console . log ( 'No findings.' ); } } await deidentifyCloudStorage (); PHP To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .
- DONE : print ( f "Job did not complete within { timeout } minutes." ) return Print out the results. print ( f "Job name: { job . name } " ) result = job . inspect details . result print ( f "Processed Bytes: { result . processed bytes } " ) if result . info type stats : for stats in result . info type stats : print ( f "Info type: { stats . info type . name } " ) print ( f "Count: { stats . count } " ) else : print ( "No findings." ) REST JSON input { "inspect job" : { "storage config" : { "cloud storage options" : { "file set" : { "url" : " INPUT DIRECTORY " } } }, "inspect config" : { "info types" : [ { "name" : "PERSON NAME" } ] }, "actions" : { "deidentify" : { "cloud storage output" : " OUTPUT DIRECTORY " , "transformation config" : { "deidentify template" : " DEIDENTIFY TEMPLATE NAME " , "structured deidentify template" : " STRUCTURED DEIDENTIFY TEMPLATE NAME " , "image redact template" : " IMAGE REDACTION TEMPLATE NAME " }, "transformation details storage config" : { "table" : { "project id" : " TRANSFORMATION DETAILS PROJECT ID " , "dataset id" : " TRANSFORMATION DETAILS DATASET ID " , "table id" : " TRANSFORMATION DETAILS TABLE ID " } }, "fileTypesToTransform" : [ "IMAGE" , "CSV" , "TEXT FILE" ] } } } } Replace the following: PROJECT ID : the ID of the project where you want to store the inspection job.
- If you don't provide a table ID, the system automatically creates one. @param string $tableId The ID of the BigQuery table where you want to store the transformation details. / function deidentify cloud storage( // TODO(developer): Replace sample parameters before running the code. string $callingProjectId, string $inputgcsPath = 'gs://YOUR GOOGLE STORAGE BUCKET', string $outgcsPath = 'gs://YOUR GOOGLE STORAGE BUCKET', string $deidentifyTemplateName = 'YOUR DEIDENTIFY TEMPLATE NAME', string $structuredDeidentifyTemplateName = 'YOUR STRUCTURED DEIDENTIFY TEMPLATE NAME', string $imageRedactTemplateName = 'YOUR IMAGE REDACT DEIDENTIFY TEMPLATE NAME', string $datasetId = 'YOUR DATASET ID', string $tableId = 'YOUR TABLE ID' ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $parent = "projects/$callingProjectId/locations/global"; // Specify the GCS Path to be de-identify. $cloudStorageOptions = (new CloudStorageOptions()) ->setFileSet((new FileSet()) ->setUrl($inputgcsPath)); $storageConfig = (new StorageConfig()) ->setCloudStorageOptions(($cloudStorageOptions)); // Specify the type of info the inspection will look for. $inspectConfig = (new InspectConfig()) ->setInfoTypes([ (new InfoType())->setName('PERSON NAME'), (new InfoType())->setName('EMAIL ADDRESS') ]); // Specify the big query table to store the transformation details. $transformationDetailsStorageConfig = (new TransformationDetailsStorageConfig()) ->setTable((new BigQueryTable()) ->setProjectId($callingProjectId) ->setDatasetId($datasetId) ->setTableId($tableId)); // Specify the de-identify template used for the transformation. $transformationConfig = (new TransformationConfig()) ->setDeidentifyTemplate( DlpServiceClient::projectDeidentifyTemplateName($callingProjectId, $deidentifyTemplateName) ) ->setStructuredDeidentifyTemplate( DlpServiceClient::projectDeidentifyTemplateName($callingProjectId, $structuredDeidentifyTemplateName) ) ->setImageRedactTemplate( DlpServiceClient::projectDeidentifyTemplateName($callingProjectId, $imageRedactTemplateName) ); $deidentify = (new Deidentify()) ->setCloudStorageOutput($outgcsPath) ->setTransformationConfig($transformationConfig) ->setTransformationDetailsStorageConfig($transformationDetailsStorageConfig) ->setFileTypesToTransform([FileType::TEXT FILE, FileType::IMAGE, FileType::CSV]); $action = (new Action()) ->setDeidentify($deidentify); // Configure the inspection job we want the service to perform. $inspectJobConfig = (new InspectJobConfig()) ->setInspectConfig($inspectConfig) ->setStorageConfig($storageConfig) ->setActions([$action]); // Send the job creation request and process the response. $createDlpJobRequest = (new CreateDlpJobRequest()) ->setParent($parent) ->setInspectJob($inspectJobConfig); $job = $dlp->createDlpJob($createDlpJobRequest); $numOfAttempts = 10; do { printf('Waiting for job to complete' .
- If the operation is complete, you get a response similar to the following: { "name": "projects/ PROJECT ID /dlpJobs/ JOB ID ", "type": "INSPECT JOB", "state": "DONE", "inspectDetails": { "requestedOptions": { "snapshotInspectTemplate": {}, "jobConfig": { "storageConfig": { "cloudStorageOptions": { "fileSet": { "url": " INPUT DIRECTORY " } } }, "inspectConfig": { "infoTypes": [ { "name": "PERSON NAME" } ], "limits": {} }, "actions": [ { "deidentify": { "transformationDetailsStorageConfig": { "table": { "projectId": " TRANSFORMATION DETAILS PROJECT ID ", "datasetId": " TRANSFORMATION DETAILS DATASET ID ", "tableId": " TRANSFORMATION DETAILS TABLE ID " } }, "transformationConfig": { "deidentifyTemplate": " DEIDENTIFY TEMPLATE NAME ", "structuredDeidentifyTemplate": " STRUCTURED DEIDENTIFY TEMPLATE NAME ", "imageRedactTemplate": " IMAGE REDACTION TEMPLATE NAME " }, "fileTypesToTransform": [ "IMAGE", "CSV", "TEXT FILE" ], "cloudStorageOutput": " OUTPUT DIRECTORY " } } ] } }, "result": { "processedBytes": "25242", "totalEstimatedBytes": "25242", "infoTypeStats": [ { "infoType": { "name": "PERSON NAME" }, "count": "114" } ] } }, "createTime": "2022-06-09T23:00:53.380Z", "startTime": "2022-06-09T23:01:27.986383Z", "endTime": "2022-06-09T23:02:00.443536Z", "actionDetails": [ { "deidentifyDetails": { "requestedOptions": { "snapshotDeidentifyTemplate": { "name": " DEIDENTIFY TEMPLATE NAME ", "createTime": "2022-06-09T17:46:34.208923Z", "updateTime": "2022-06-09T17:46:34.208923Z", "deidentifyConfig": { "infoTypeTransformations": { "transformations": [ { "primitiveTransformation": { "characterMaskConfig": { "maskingCharacter": " ", "numberToMask": 25 } } } ] } }, "locationId": "global" }, "snapshotStructuredDeidentifyTemplate": { "name": " STRUCTURED DEIDENTIFY TEMPLATE NAME ", "createTime": "2022-06-09T20:51:12.411456Z", "updateTime": "2022-06-09T21:07:53.633149Z", "deidentifyConfig": { "recordTransformations": { "fieldTransformations": [ { "fields": [ { "name": "Name" } ], "primitiveTransformation": { "replaceConfig": { "newValue": { "stringValue": "[redacted]" } } } } ] } }, "locationId": "global" }, "snapshotImageRedactTemplate": { "name": " IMAGE REDACTION TEMPLATE NAME ", "createTime": "2022-06-09T20:52:25.453564Z", "updateTime": "2022-06-09T20:52:25.453564Z", "deidentifyConfig": {}, "locationId": "global" } }, "deidentifyStats": { "transformedBytes": "3972", "transformationCount": "110" } } } ], "locationId": "global" } What's next Learn more about the process of de-identifying data in storage .

