---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.819Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "Case report PDF export"
feature_slug: "case-report-pdf-export"
latest_feature_date: "2024-09-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie"
  - "https://docs.cloud.google.com/chronicle/docs/secops/secops-overview"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty"
  - "https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview"
keywords:
  - "case"
  - "report"
  - "pdf"
  - "export"
  - "reports"
  - "can"
  - "now"
  - "be"
---

# Case report PDF export

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

Case reports can now be exported in PDF format.

## Extended Definition

Case reports can now be exported in PDF format.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie)
- [https://docs.cloud.google.com/chronicle/docs/secops/secops-overview](https://docs.cloud.google.com/chronicle/docs/secops/secops-overview)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)
- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)

## Supporting Pages

### "Integrate Amazon Macie with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie)
- Source ID: `site-api-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "ResponseMetadata" :{ "HTTPHeaders" :{ "connection" : "keep-alive" , "content-length" : "2741" , "content-type" : "application/json" , "date" : "Thu, 22 Oct 2020 11:08:58 GMT" , "x-amz-apigw-id" : " ID " , "x-amzn-remapped-content-length" : "2741" , "x-amzn-remapped-date" : "Thu, 22 Oct ""2020 11:08:57 ""GMT" , "x-amzn-remapped-x-amzn-requestid" : "eaea00d2-11f8-40d8-adce-f6c9f17e9815" , "x-amzn-requestid" : "4102349a-a5da-4bfc-ad78-40f48885985f" }, "HTTPStatusCode" : 200 , "RequestId" : "4102349a-a5da-4bfc-ad78-40f48885985f" , "RetryAttempts" : 0 }, "findings" :[ { "accountId" : " ACCOUNT ID " , "archived" : false , "category" : "CLASSIFICATION" , "classificationDetails" :{ "detailedResultsLocation" : "s3://[export-config-not-set]/AWSLogs/ ACCOUNT ID /Macie/us-east-1/" , "jobArn" : "arn:aws:macie2:us-east-1" , "jobId" : "088009521d393eda440a24f3c7ad8fbd" , "result" :{ "additionalOccurrences" : false , "customDataIdentifiers" :{ "detections" :[ ], "totalCount" : 0 }, "mimeType" : "application/zip" , "sensitiveData" :[ { "category" : "PERSONAL INFORMATION" , "detections" :[ { "count" : 80 , "type" : "PHONE NUMBER" }, { "count" : 5 , "type" : "ADDRESS" }, { "count" : 207 , "type" : "NAME" } ], "totalCount" : 292 }, { "category" : "CREDENTIALS" , "detections" :[ { "count" : 5 , "type" : "AWS CREDENTIALS" } ], "totalCount" : 5 } ], "sizeClassified" : 44213802 , "status" :{ "code" : "PARTIAL" , "reason" : "ARCHIVE CONTAINS UNPROCESSED FILES" } } }, "count" : 1 , "createdAt" : da tet ime.da tet ime( 2020 , 10 , 22 , 3 , 12 , 9 , 364000 , "tzinfo=tzutc())" , "description" : "The object contains more than one type of ""sensitive information." , "id" : " FINDING ID " , "partition" : "aws" , "region" : "us-east-1" , "resourcesAffected" :{ "s3Bucket" :{ "arn" : "arn:aws:s3:::testexample" , "createdAt" : da tet ime.da tet ime( 2020 , 9 , 14 , 10 , 31 , 56 , "tzinfo=tzutc())" , "defaultServerSideEncryption" :{ "encryptionType" : "NONE" }, "name" : "testexample" , "owner" :{ "displayName" : "lab aws" , "id" : " OWNER ID " }, "publicAccess" :{ "effectivePermission" : "PUBLIC" , "permissionConfiguration" :{ "accountLevelPermissions" :{ "blockPublicAccess" :{ "blockPublicAcls" : false , "blockPublicPolicy" : false , "ignorePublicAcls" : false , "restrictPublicBuckets" : false } }, "bucketLevelPermissions" :{ "accessControlList" :{ "allowsPublicReadAccess" : false , "allowsPublicWriteAccess" : false }, "blockPublicAccess" :{ "blockPublicAcls" : false , "blockPublicPolicy" : false , "ignorePublicAcls" : false , "restrictPublicBuckets" : false }, "bucketPolicy" :{ "allowsPublicReadAccess" : true , "allowsPublicWriteAccess" : false } } } }, "tags" :[ ] }, "s3Object" :{ "bucketArn" : "arn:aws:s3:::testsiemplify" , "eTag" : "8dfbe2ba101b3ca0a62f8fde823503b4-5" , "extension" : "zip" , "key" : "awscliv2.zip" , "lastModified" : da tet ime.da tet ime( 2020 , 9 , 28 , 18 , 47 , 30 , "tzinfo=tzutc())" , "path" : "testexample/awscliv2.zip" , "publicAccess" : false , "serverSideEncryption" :{ "encryptionType" : "NONE" }, "size" : 33775890 , "storageClass" : "STANDARD" , "tags" :[ ], "versionId" : "" } }, "sample" : false , "schemaVersion" : "1.0" , "severity" :{ "description" : "High" , "score" : 3 }, "title" : "The S3 object contains multiple types of sensitive ""information." , "type" : "SensitiveData:S3Object/Multiple" , "updatedAt" : da tet ime.da tet ime( 2020 , 10 , 22 , 3 , 12 , 9 , 364000 , "tzinfo=tzutc())" } ] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful: "Amazon Macie findings found" If is success=False, for example no findings were found: "No findings were returned." The action should fail and stop a playbook execution: If a critical error, like wrong credentials or lost connectivity is reported: "Failed to connect to the Amazon Macie service!
- Use cases Create Amazon Macie custom data identifier based on the observed data, so later new custom data identifier can be used in classification jobs.
- Action results Script result Script result name Value options Example is success True or False is success:False JSON Result { "ResponseMetadata" :{ "HTTPHeaders" :{ "connection" : "keep-alive" , "content-length" : "65" , "content-type" : "application/json" , "date" : "Mon, 26 Oct 2020 05:15:07 GMT" , "x-amz-apigw-id" : " ID " , "x-amzn-remapped-content-length" : "65" , "x-amzn-remapped-date" : "Mon, 26 Oct ""2020 05:15:07 ""GMT" , "x-amzn-remapped-x-amzn-requestid" : "61217a30-189e-4573-9f76-257b7065a04d" , "x-amzn-requestid" : "509e1c12-ab86-459e-9d6d-790a359686b2" }, "HTTPStatusCode" : 200 , "RequestId" : "509e1c12-ab86-459e-9d6d-790a359686b2" , "RetryAttempts" : 0 }, "customDataIdentifierId" : "ff43487b-5643-4de1-b651-9ecbeb3021ed" } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful: "New Amazon Macie custom data identifier created: {0}".format(new identifier id from response) If is success=False, for example no findings were found: "Failed to create Amazon Macie Identifier.
- Action results Script result Script result name Value options Example is success True or False is success:False JSON Result { "Policy" : { "Version" : "2012-10-17" , "Statement" : [ { "Sid" : "AddPerm" , "Effect" : "Allow" , "Principal" : " " , "Action" : "s3:GetObject" , "Resource" : "arn:aws:s3:::testexample/ " } ] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful: "Amazon Macie findings found" If is success=False, for example no findings were found: "No findings were returned." The action should fail and stop a playbook execution: If a critical error, like wrong credentials or lost connectivity is reported: "Failed to connect to the Amazon Macie service!

### "Google SecOps overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/secops-overview](https://docs.cloud.google.com/chronicle/docs/secops/secops-overview)
- Source ID: `site-api-reference`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use built-in dashboards and reports or build your own.
- Google SecOps can be used to detect threats, investigate the scope and cause of those threats, and provide remediation using prebuilt integrations with enterprise workflow, response, and orchestration platforms.
- Case management Group related alerts into cases, sort and filter cases queue for triage and prioritization, assign cases, collaborate on every case, case audit and reporting.
- You can specify rules to search all of your incoming data and notify you when potential and known threats appear in your enterprise.

### "Integrate Amazon GuardDuty with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)
- Source ID: `site-api-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Brute force attacks are used to gain unauthorized access to your instance by guessing the RDP password." , "Id" : " ID " , "Partition" : "aws" , "Region" : "us-east-1" , "Resource" : { "InstanceDetails" : { "AvailabilityZone" : "us-east-1e" , "ImageId" : "ami- IMAGE ID " , "InstanceId" : "i- INSTANCE ID " , "InstanceState" : "running" , "InstanceType" : "t2.micro" , "LaunchTime" : "2020-05-27T08:54:03Z" , "NetworkInterfaces" : [{ "Ipv6Addresses" : [], "NetworkInterfaceId" : "eni-012d9b8a1a3b4e40a" , "PrivateDnsName" : "ip-192.0.2.1.ec2.internal" , "PrivateIpAddress" : "192.0.2.1" , "PrivateIpAddresses" : [{ "PrivateDnsName" : "ip-192.0.2.1.ec2.internal" , "PrivateIpAddress" : "192.0.2.1" }], "PublicDnsName" : "ec2-54-234-69-236.compute-1.amazonaws.com" , "PublicIp" : "198.51.100.236" , "SecurityGroups" : [{ "GroupId" : "sg-0fa42e04e9cd15407" , "GroupName" : "Windows Server 2016" }], "SubnetId" : "subnet-2edddf10" , "VpcId" : "vpc-48a7ac32" }], "Platform" : "windows" , "ProductCodes" : [], "Tags" : [{ "Key" : "Name" , "Value" : "CiscoAMP-win2012" }]}, "ResourceType" : "Instance" }, "SchemaVersion" : "2.0" , "Service" : { "Action" : { "ActionType" : "NETWORK CONNECTION" , "NetworkConnectionAction" : { "Blocked" : false , "ConnectionDirection" : "INBOUND" , "LocalPortDetails" : { "Port" : 3389 , "PortName" : "RDP" }, "Protocol" : "TCP" , "LocalIpDetails" : { "IpAddressV4" : "192.0.2.1" }, "RemoteIpDetails" : { "IpAddressV4" : "203.0.113.9" , "Organization" : { "Asn" : "24875" , "AsnOrg" : "Example Inc." , "Isp" : "Example Inc." , "Org" : "Example Inc." }}, "RemotePortDetails" : { "Port" : 1549 , "PortName" : "Unknown" }}}, "Archived" : false , "Count" : 5 , "DetectorId" : " DETECTOR ID " , "EventFirstSeen" : "2020-10-06T05:10:58Z" , "EventLastSeen" : "2020-10-06T05:46:59Z" , "ResourceRole" : "TARGET" , "ServiceName" : "guardduty" }, "Severity" : 2 , "Title" : "203.0.113.9 is performing RDP brute force attacks against i- INSTANCE ID ." , "Type" : "UnauthorizedAccess:EC2/RDPBruteForce" , "UpdatedAt" : "2020-10-06T06:01:46.380Z" }] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If "ErrorCode" is reported (is success=false): "Action wasn't able to get Findings details.
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result { "ThreatIntelSetIds" : [ "14ba8b942b76c1be6d985715eb7443eb" , "32ba8b92e553fe04d06dab543ed57a70" , "8aba8b93ba6e08e8fd5349b2c2b57709" ] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successfully listed available sets (is success=true): "Successfully listed available Threat Intelligence Sets." The action should fail and stop a playbook execution: If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "List Threat Intelligence Sets".
- Please check if all Finding IDs are correct." If successful: "Findings were successfully archived" → Changed to: "The following findings were successfully archived: <ids> In case of one/all invalid finding IDs, the action shouldn't fail, but is success should be set to false: "Couldn't archive the following findings: <ids>" Note: The error code cannot be for one of the IDs.
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result { "Format" : "TXT" , "Location" : "https: //example.s3.amazonaws.com/test.txt" , "Name" : "API Test" , "ResponseMetadata" : { "HTTPHeaders" : { "connection" : "keep-alive" , "content-length" : "149" , "content-type" : "application/json" , "date" : "Mon,19 Oct 2020 06: 23: 22 GMT" , "x-amz-apigw-id" : " ID " , "x-amzn-requestid" : " REQUEST ID " , "x-amzn-trace-id" : " TRACE ID " }, "HTTPStatusCode" : 200 , "RequestId" : " REQUEST ID " , "RetryAttempts" : 0 }, "Status" : "ERROR" , "Tags" : {} } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successfully returned details about at list one set (is success=true): "Successfully retrieved details about the following Threat Intelligence Sets from Amazon GuardDuty:\n{0}.".format(list of ids)" If unsuccessful for some of the IDs (is success=true): "Action wasn't able to retrieve details about the following Threat Intelligence Sets from Amazon GuardDuty:\n{0}.".format(list of ids)" If no IDs are used: "No details were retrieved about the provided Threat Intelligence Sets.".format(list of ids) The action should fail and stop a playbook execution: If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "List Threat Intelligence Sets".

### Cases overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Each case entry shows key metadata, such as: Case name and unique ID Case timestamp Number of associated alerts Assigned analyst (with avatar) Case priority and stage (optional, depending on view) Analysts can toggle between these views: Default view : Shows case cards with essential information.
- When you open this tab, you can view case-related information such as tasks, user comments, pinned chat messages, manual and system actions, and file attachments (up to 50 MB per file).
- They collect enrichment data, analyst comments, and historical context, letting analysts track entity behavior over time and across cases.
- Analysts can also: Automatically group additional alerts into existing cases based on shared entities and configurable rules.

