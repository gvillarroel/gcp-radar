---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.344Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "BigQuery discovery and inspection support for INTERVAL and RANGE data types"
feature_slug: "bigquery-discovery-and-inspection-support-for-interval-and-range-data-types"
latest_feature_date: "2024-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/supported-file-types"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers"
keywords:
  - "interval"
  - "range"
  - "inspection"
  - "tables"
  - "discovery"
  - "types"
---

# BigQuery discovery and inspection support for INTERVAL and RANGE data types

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Discovery and inspection services for BigQuery now support tables with INTERVAL and RANGE columns.

## Extended Definition

Discovery and inspection services for BigQuery now support tables with INTERVAL and RANGE columns.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/supported-file-types](https://docs.cloud.google.com/sensitive-data-protection/docs/supported-file-types)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference-2`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- May 10, 2019 Issue Using VPC Service Controls currently blocks Cloud SCC asset discovery inside VPC Service perimeters for the following asset types: Compute Engine Addresses Routes VPN Tunnels Cloud Storage Buckets GKE Clusters This is expected to be fixed in a future release.
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.
- September 20, 2023 Feature Attack path simulations support additional resources The attack path simulation feature that generates attack exposure scores and attack paths for your high-value resources now supports the following additional Google Cloud resources: aiplatform.googleapis.com/Dataset aiplatform.googleapis.com/Featurestore aiplatform.googleapis.com/MetadataStore aiplatform.googleapis.com/Model aiplatform.googleapis.com/TrainingPipeline container.googleapis.com/Cluster For more information, see Resource types supported in high-value resource sets .
- Discovery: Can get sensitive Kubernetes object check Privilege Escalation: Changes to sensitive Kubernetes RBAC objects Privilege Escalation: Create Kubernetes CSR for master cert Privilege Escalation: Creation of sensitive Kubernetes bindings Privilege Escalation: Get Kubernetes CSR with compromised bootstrap credentials Privilege Escalation: Launch of privileged Kubernetes container These rules detect scenarios where a potentially malicious actor attempted to query or escalate privileges in Google Kubernetes Engine.

### "Supported file types and scanning modes \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/supported-file-types](https://docs.cloud.google.com/sensitive-data-protection/docs/supported-file-types)
- Source ID: `site-docs-reference-3`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported file types in inspection and de-identification operations The following table shows the types of files that Sensitive Data Protection can inspect and transform ( de-identify ).
- Sensitive Data Protection uses this scanning mode for any object infoTypes that are specified in the inspection or redaction configuration.
- OCR Image content detection Image content classification Executables ac, air, apk, app, appimage, bas, bin, bms, class, cls, com, command, ctl, ctx, dca, ddf, dep, dll, dob, dox, dsr, dsx, dws, exe, frm, frx, gadget, ipa, mpk, oca, ocx, pag, pgx, pif, pyc, res, run, scb, tlb, vbd, vbg, vbl, vbp, vbr, vbw, vbz, vlx, wct, widget, workflow, wsf, x86, x86 64, xap, xbe, xlm Not scanned at this time Archives 7z, a, ace, afa, alz, apk, ar, arc, arj, ark, b1, b6z, ba, bh, cab, car, cdx, cfs, cpio, cpt, dar, dd, dgc, dmg, ear, esd, gca, genozip, gz, ha, hki, ice, ima, img, iso, jar, kgb, lha, lpaq# , lzh, lzx, mou, pak, paq# , paq6, paq7, paq8 and variants, partimg, pea, phar, pim, pit, qda, rar, rk, run, s7z, sda, sea, sen, sfx, shar, shk, sit, sitx, sqx, swm, tar, tar.bz2, tar.gz, tar.lz4, tar.lzma, tar.xz, tar.z, tgz, uc, uc0, uc2, uca, ucn, ue2, uha, ur2, war, wim, xar, xp3, yz1, zip, zipx, zoo, zpaq, zz Sensitive Data Protection scans files within archives that have these file extensions: bz2, cpio, gz, jar, lz4, lzma, tar, tar.bz2, tar.gz, tar.lz4, tar.lzma, tar.xz, tar.z, xz, z, zip The scanning mode used for each file depends on the type of the file.
- Structured parsing De-identify content PDF pdf PDF limits Intelligent document parsing Text asc, brf, c, c++, cc, cpp, cs, css, cxx, dart, eml, go, h, h++, hh, hpp, hs, htm, html, hxx, ini, java, js, json, jsonl, lhs, m, markdown, md, mkd, ml, mli, ocaml, php, pht, phtml, pl, pm, py, pyw, rb, rbw, rc, rs, scala, sh, shtm, shtml, sql, tex, text, txt, vcard, vcs, wml, xhtml, xml, xsd, xsl, yaml, yml Plain text De-identify content Microsoft Word docm, docx, dotm, dotx Word limits Intelligent document parsing Microsoft Excel xlsm, xlsx, xltm, xltx Excel limits Intelligent document parsing Microsoft Powerpoint potm, potx, pptm, pptx Powerpoint limits Intelligent document parsing Image bmp, gif, jpe, jpeg, jpg, png OCR Image content detection Image content classification Redaction Binary Unrecognized file types and images that can't be scanned using optical character recognition (OCR), image content detection, or image content classification.

### "Creating and scheduling Sensitive Data Protection inspection jobs \_|\_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers)
- Source ID: `site-api-reference-required-2`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Example : gs://GOOGLE STORAGE BUCKET NAME/dlp sample.csv / function create job( string $callingProjectId, string $gcsPath ): void { // Instantiate a client. $dlp = new DlpServiceClient(); // Set autoPopulateTimespan to true to scan only new content. $timespanConfig = (new TimespanConfig()) ->setEnableAutoPopulationOfTimespanConfig(true); // Specify the GCS file to be inspected. $cloudStorageOptions = (new CloudStorageOptions()) ->setFileSet((new FileSet()) ->setUrl($gcsPath)); $storageConfig = (new StorageConfig()) ->setCloudStorageOptions(($cloudStorageOptions)) ->setTimespanConfig($timespanConfig); // ----- Construct inspection config ----- $emailAddressInfoType = (new InfoType()) ->setName('EMAIL ADDRESS'); $personNameInfoType = (new InfoType()) ->setName('PERSON NAME'); $locationInfoType = (new InfoType()) ->setName('LOCATION'); $phoneNumberInfoType = (new InfoType()) ->setName('PHONE NUMBER'); $infoTypes = [$emailAddressInfoType, $personNameInfoType, $locationInfoType, $phoneNumberInfoType]; // Whether to include the matching string in the response. $includeQuote = true; // The minimum likelihood required before returning a match. $minLikelihood = likelihood::LIKELIHOOD UNSPECIFIED; // The maximum number of findings to report (0 = server maximum). $limits = (new FindingLimits()) ->setMaxFindingsPerRequest(100); // Create the Inspect configuration object. $inspectConfig = (new InspectConfig()) ->setMinLikelihood($minLikelihood) ->setLimits($limits) ->setInfoTypes($infoTypes) ->setIncludeQuote($includeQuote); // Specify the action that is triggered when the job completes. $action = (new Action()) ->setPublishSummaryToCscc(new PublishSummaryToCscc()); // Configure the inspection job we want the service to perform. $inspectJobConfig = (new InspectJobConfig()) ->setInspectConfig($inspectConfig) ->setStorageConfig($storageConfig) ->setActions([$action]); // Send the job creation request and process the response. $parent = "projects/$callingProjectId/locations/global"; $createDlpJobRequest = (new CreateDlpJobRequest()) ->setParent($parent) ->setInspectJob($inspectJobConfig); $job = $dlp->createDlpJob($createDlpJobRequest); // Print results. printf($job->getName()); } Python To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .
- JSON input: { "jobTrigger" :{ "displayName" : "JobTrigger1" , "description" : "Starts an inspection of a Datastore kind" , "triggers" : [ { "schedule":{ "recurrencePeriodDuration":"86400s" } } ] , "status" : "HEALTHY" , "inspectJob" :{ "storageConfig" :{ "datastoreOptions" :{ "kind" :{ "name" : "Example-Kind" } , "partitionId" :{ "projectId" : "[PROJECT ID]" , "namespaceId" : "[NAMESPACE ID]" } } } , "inspectConfig" :{ "infoTypes" : [ { "name":"PHONE NUMBER" } ] , "excludeInfoTypes" : false , "includeQuote" : true , "minLikelihood" : "LIKELY" } , "actions" : [ { "saveFindings":{ "outputConfig":{ "table":{ "projectId":"[PROJECT ID ] ", " datasetId ":" [ BIGQUERY DATASET NAME ] ", " tableId ":" [ BIGQUERY TABLE NAME ] " } } } } ] } } } JSON output: The following output indicates that the job trigger was successfully created. { "name" : "projects/[PROJECT ID]/jobTriggers/[JOB TRIGGER NAME]" , "displayName" : "JobTrigger1" , "description" : "Starts an inspection of a Datastore kind" , "inspectJob" :{ "storageConfig" :{ "datastoreOptions" :{ "partitionId" :{ "projectId" : "[PROJECT ID]" , "namespaceId" : "[NAMESPACE ID]" } , "kind" :{ "name" : "Example-Kind" } } } , "inspectConfig" :{ "infoTypes" : [ { "name":"PHONE NUMBER" } ] , "minLikelihood" : "LIKELY" , "limits" :{ } , "includeQuote" : true } , "actions" : [ { "saveFindings":{ "outputConfig":{ "table":{ "projectId":"[PROJECT ID ] ", " datasetId ":" [ BIGQUERY DATASET NAME ] ", " tableId ":" [ BIGQUERY TABLE NAME ] " } } } } ] }, " triggers ":[ { " schedule ":{ " recurrencePeriodDuration ":" 86400 s " } } ], " createTime ":" 2018 - 11 - 30 T01 : 52 : 41.171857 Z ", " updateTime ":" 2018 - 11 - 30 T01 : 52 : 41.171857 Z ", " status ":" HEALTHY " } List all jobs To list all jobs for the current project: Console In the Google Cloud console, go to the Sensitive Data Protection page.
- JSON output: { "jobTriggers" : [ { "name":"projects/[PROJECT ID ]/ jobTriggers /[ JOB TRIGGER NAME ] ", " displayName ":" JobTrigger1 ", " description ":" Starts an inspection of a Datastore kind ", " inspectJob ":{ " storageConfig ":{ " datastoreOptions ":{ " partitionId ":{ " projectId ":" [ PROJECT ID ] ", " namespaceId ":" [ NAMESPACE ID ] " }, " kind ":{ " name ":" Example - Kind " } } }, " inspectConfig ":{ " infoTypes ":[ { " name ":" PHONE NUMBER " } ], " minLikelihood ":" LIKELY ", " limits ":{ }, " includeQuote ":true }, " actions ":[ { " saveFindings ":{ " outputConfig ":{ " table ":{ " projectId ":" [ PROJECT ID ] ", " datasetId ":" [ BIGQUERY DATASET NAME ] ", " tableId ":" [ BIGQUERY TABLE NAME ] " } } } } ] }, " triggers ":[ { " schedule ":{ " recurrencePeriodDuration ":" 86400 s " } } ], " createTime ":" 2018 - 11 - 30 T01 : 52 : 41.171857 Z ", " updateTime ":" 2018 - 11 - 30 T01 : 52 : 41.171857 Z ", " status ":" HEALTHY " }, ... ], " nextPageToken ":" KkwKCQjivJ2UpPreAgo Kj1wcm9qZWN0cy92ZWx2ZXR5LXN0dWR5LTE5NjEwMS9qb2JUcmlnZ2Vycy8xNTA5NzEyOTczMDI0MDc1NzY0 " } To quickly try this out, you can use the API Explorer that's embedded below.
- FileSet . newBuilder (). setUrl ( gcsPath )) . build (); StorageConfig storageConfig = StorageConfig . newBuilder () . setCloudStorageOptions ( cloudStorageOptions ) . setTimespanConfig ( timespanConfig ) . build (); // Specify the type of info the inspection will look for. // See https://cloud.google.com/dlp/docs/infotypes-reference for complete list of info types List<InfoType> infoTypes = Stream . of ( "PHONE NUMBER" , "EMAIL ADDRESS" , "CREDIT CARD NUMBER" ) . map ( it - > InfoType . newBuilder (). setName ( it ). build ()) . collect ( Collectors . toList ()); InspectConfig inspectConfig = InspectConfig . newBuilder (). addAllInfoTypes ( infoTypes ). build (); // Configure the inspection job we want the service to perform.

