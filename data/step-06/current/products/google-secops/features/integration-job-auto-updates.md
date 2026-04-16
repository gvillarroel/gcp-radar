---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.876Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Integration job auto-updates"
feature_slug: "integration-job-auto-updates"
latest_feature_date: "2024-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security-recommended"
keywords:
  - "integration"
  - "job"
  - "auto"
  - "updates"
  - "jobs"
  - "now"
  - "updated"
  - "automatically"
---

# Integration job auto-updates

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Jobs are now updated automatically when an integration is updated, and legacy jobs are flagged in the Jobs Scheduler for follow-up.

## Extended Definition

Jobs are now updated automatically when an integration is updated, and legacy jobs are flagged in the Jobs Scheduler for follow-up.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security-recommended](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security-recommended)

## Supporting Pages

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For changes that affect all integration items: Integration - {Update} For changes that affect all actions: Integration's Actions - {Update} For changes that affect all connectors: Integration's Connectors - {Update} For changes that affect all jobs: Integration's Jobs - {Update} If the release contained a regressive change, then in the release note you need to specify REGRESSIVE! .
- Ontology Mapping is used to automatically create entities (IOCs and Assets).
- You should validate the logo on the following pages: Response > Integration Setup Response > Playbooks > Playbook Designer Cases > Alert > Alert Playbook View The following is an example of an SVG logo, designed to match our style guide: <?xml version="1.0" encoding="UTF-8"?><svg id="Layer 1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 23"> <defs> <style> .cls-1 { stroke-width: 0px; } </style> </defs> <path class="cls-1" d="M15.51,4.79H5.49c-.4,0-.72.32-.72.72v5.75c0,2.3,1.71,4.15,3.69,5.38.54.34,1.1.62,1.66.86l.09.04c.06.02.12.05.18.06.03,0,.07,0,.1,0,.1,0,.19-.03.28-.07l.09-.04c.76-.33,2.22-1.03,3.46-2.24,1.24-1.22,1.89-2.6,1.89-4v-5.75c0-.4-.32-.72-.72-.72ZM14.32,11.26c0,.88-.44,1.77-1.32,2.63-.65.64-1.55,1.22-2.5,1.68-.95-.46-1.84-1.04-2.5-1.68-.88-.86-1.32-1.75-1.32-2.63v-4.55h7.64v4.55ZM20.28,0H.72c-.4,0-.72.32-.72.72v10.77c0,2.56,1.18,4.99,3.51,7.21,2.29,2.18,5.12,3.56,6.61,4.2l.09.04s.1.04.15.05c.04,0,.09.01.13.01.1,0,.19-.02.28-.06l.09-.04c.53-.23,1.23-.55,2.02-.97,1.42-.75,3.11-1.82,4.59-3.23,2.33-2.22,3.51-4.64,3.51-7.21V.72c0-.4-.32-.72-.72-.72ZM16.17,17.31c-1.9,1.81-4.24,3.04-5.67,3.69-1.43-.65-3.77-1.88-5.67-3.69-1.94-1.84-2.92-3.8-2.92-5.82V1.92h17.18v9.57c0,2.02-.98,3.98-2.92,5.82Z"/></svg> Be sure to encode the SVG before adding it to the integration definition file, as can be found in other integrations in the Content Hub.
- Release notes The general structure for the release note should follow the following format: {integration item} - {update} For example: Get Case Details - Added ability to fetch information about affected IOCs Depending on the situation, there are unique release notes for specific scenarios: If it's a new integration: New Integration Added - {integration name} If a new action is added: New Action Added - {action name} If a new connector is added: New Connector Added - {connector name} If a new job is added: New Job Added - {job name} If a predefined widget is added to an action: {action name} - Added Predefined Widget.

### "Google Unified Security Recommended \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security-recommended](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security-recommended)
- Source ID: `site-docs-reference-2`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Unified Security Recommended Solution Overview with FortiGate NGFW and FortiSASE Palo Alto Networks Cortex XDR Endpoint Protection Cortex XDR endpoint data is automatically enriched by Google Threat Intelligence, applying high-fidelity verdicts from Mandiant's frontline research directly to alerts.
- This synchronized intelligence enables dynamic access decisions, automatically granting or denying user access to SaaS and cloud resources based on the real-time security context of the browsing device.
- This automation updates policies to add the compromised workload, improving incident response times while effectively isolating the breach.
- Upon detecting a threat, Google SecOps automatically enriches this data and executes remediation playbooks.

### "Integrate Amazon Macie with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie)
- Source ID: `site-api-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If a raw alert contains a list of entities (such as multiple email addresses, hostnames, or IP addresses), connectors automatically flatten them into separate, unique events.
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "ResponseMetadata" :{ "HTTPHeaders" :{ "connection" : "keep-alive" , "content-length" : "2741" , "content-type" : "application/json" , "date" : "Thu, 22 Oct 2020 11:08:58 GMT" , "x-amz-apigw-id" : " ID " , "x-amzn-remapped-content-length" : "2741" , "x-amzn-remapped-date" : "Thu, 22 Oct ""2020 11:08:57 ""GMT" , "x-amzn-remapped-x-amzn-requestid" : "eaea00d2-11f8-40d8-adce-f6c9f17e9815" , "x-amzn-requestid" : "4102349a-a5da-4bfc-ad78-40f48885985f" }, "HTTPStatusCode" : 200 , "RequestId" : "4102349a-a5da-4bfc-ad78-40f48885985f" , "RetryAttempts" : 0 }, "findings" :[ { "accountId" : " ACCOUNT ID " , "archived" : false , "category" : "CLASSIFICATION" , "classificationDetails" :{ "detailedResultsLocation" : "s3://[export-config-not-set]/AWSLogs/ ACCOUNT ID /Macie/us-east-1/" , "jobArn" : "arn:aws:macie2:us-east-1" , "jobId" : "088009521d393eda440a24f3c7ad8fbd" , "result" :{ "additionalOccurrences" : false , "customDataIdentifiers" :{ "detections" :[ ], "totalCount" : 0 }, "mimeType" : "application/zip" , "sensitiveData" :[ { "category" : "PERSONAL INFORMATION" , "detections" :[ { "count" : 80 , "type" : "PHONE NUMBER" }, { "count" : 5 , "type" : "ADDRESS" }, { "count" : 207 , "type" : "NAME" } ], "totalCount" : 292 }, { "category" : "CREDENTIALS" , "detections" :[ { "count" : 5 , "type" : "AWS CREDENTIALS" } ], "totalCount" : 5 } ], "sizeClassified" : 44213802 , "status" :{ "code" : "PARTIAL" , "reason" : "ARCHIVE CONTAINS UNPROCESSED FILES" } } }, "count" : 1 , "createdAt" : da tet ime.da tet ime( 2020 , 10 , 22 , 3 , 12 , 9 , 364000 , "tzinfo=tzutc())" , "description" : "The object contains more than one type of ""sensitive information." , "id" : " FINDING ID " , "partition" : "aws" , "region" : "us-east-1" , "resourcesAffected" :{ "s3Bucket" :{ "arn" : "arn:aws:s3:::testexample" , "createdAt" : da tet ime.da tet ime( 2020 , 9 , 14 , 10 , 31 , 56 , "tzinfo=tzutc())" , "defaultServerSideEncryption" :{ "encryptionType" : "NONE" }, "name" : "testexample" , "owner" :{ "displayName" : "lab aws" , "id" : " OWNER ID " }, "publicAccess" :{ "effectivePermission" : "PUBLIC" , "permissionConfiguration" :{ "accountLevelPermissions" :{ "blockPublicAccess" :{ "blockPublicAcls" : false , "blockPublicPolicy" : false , "ignorePublicAcls" : false , "restrictPublicBuckets" : false } }, "bucketLevelPermissions" :{ "accessControlList" :{ "allowsPublicReadAccess" : false , "allowsPublicWriteAccess" : false }, "blockPublicAccess" :{ "blockPublicAcls" : false , "blockPublicPolicy" : false , "ignorePublicAcls" : false , "restrictPublicBuckets" : false }, "bucketPolicy" :{ "allowsPublicReadAccess" : true , "allowsPublicWriteAccess" : false } } } }, "tags" :[ ] }, "s3Object" :{ "bucketArn" : "arn:aws:s3:::testsiemplify" , "eTag" : "8dfbe2ba101b3ca0a62f8fde823503b4-5" , "extension" : "zip" , "key" : "awscliv2.zip" , "lastModified" : da tet ime.da tet ime( 2020 , 9 , 28 , 18 , 47 , 30 , "tzinfo=tzutc())" , "path" : "testexample/awscliv2.zip" , "publicAccess" : false , "serverSideEncryption" :{ "encryptionType" : "NONE" }, "size" : 33775890 , "storageClass" : "STANDARD" , "tags" :[ ], "versionId" : "" } }, "sample" : false , "schemaVersion" : "1.0" , "severity" :{ "description" : "High" , "score" : 3 }, "title" : "The S3 object contains multiple types of sensitive ""information." , "type" : "SensitiveData:S3Object/Multiple" , "updatedAt" : da tet ime.da tet ime( 2020 , 10 , 22 , 3 , 12 , 9 , 364000 , "tzinfo=tzutc())" } ] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful: "Amazon Macie findings found" If is success=False, for example no findings were found: "No findings were returned." The action should fail and stop a playbook execution: If a critical error, like wrong credentials or lost connectivity is reported: "Failed to connect to the Amazon Macie service!
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
- Error is {0}".format(exception.stacktrace) General Table Table Name: Amazon Macie Findings Table Columns: Finding ID - "id" Category Title Severity Type Is Archived - archived Created At Updated At General Create Custom Data Identifier Create Amazon Macie Custom Data Identifier.

