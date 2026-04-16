---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.813Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Remote agent high availability"
feature_slug: "remote-agent-high-availability"
latest_feature_date: "2025-03-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-staxx"
keywords:
  - "remote"
  - "agent"
  - "high"
  - "availability"
  - "agents"
  - "deployments"
  - "connectors"
  - "actions"
---

# Remote agent high availability

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Remote agents support high-availability deployments for connectors, actions, and jobs.

## Extended Definition

Remote agents support high-availability deployments for connectors, actions, and jobs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-staxx](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-staxx)

## Supporting Pages

### "Integrate Amazon GuardDuty with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)
- Source ID: `site-api-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Brute force attacks are used to gain unauthorized access to your instance by guessing the RDP password." , "Id" : " ID " , "Partition" : "aws" , "Region" : "us-east-1" , "Resource" : { "InstanceDetails" : { "AvailabilityZone" : "us-east-1e" , "ImageId" : "ami- IMAGE ID " , "InstanceId" : "i- INSTANCE ID " , "InstanceState" : "running" , "InstanceType" : "t2.micro" , "LaunchTime" : "2020-05-27T08:54:03Z" , "NetworkInterfaces" : [{ "Ipv6Addresses" : [], "NetworkInterfaceId" : "eni-012d9b8a1a3b4e40a" , "PrivateDnsName" : "ip-192.0.2.1.ec2.internal" , "PrivateIpAddress" : "192.0.2.1" , "PrivateIpAddresses" : [{ "PrivateDnsName" : "ip-192.0.2.1.ec2.internal" , "PrivateIpAddress" : "192.0.2.1" }], "PublicDnsName" : "ec2-54-234-69-236.compute-1.amazonaws.com" , "PublicIp" : "198.51.100.236" , "SecurityGroups" : [{ "GroupId" : "sg-0fa42e04e9cd15407" , "GroupName" : "Windows Server 2016" }], "SubnetId" : "subnet-2edddf10" , "VpcId" : "vpc-48a7ac32" }], "Platform" : "windows" , "ProductCodes" : [], "Tags" : [{ "Key" : "Name" , "Value" : "CiscoAMP-win2012" }]}, "ResourceType" : "Instance" }, "SchemaVersion" : "2.0" , "Service" : { "Action" : { "ActionType" : "NETWORK CONNECTION" , "NetworkConnectionAction" : { "Blocked" : false , "ConnectionDirection" : "INBOUND" , "LocalPortDetails" : { "Port" : 3389 , "PortName" : "RDP" }, "Protocol" : "TCP" , "LocalIpDetails" : { "IpAddressV4" : "192.0.2.1" }, "RemoteIpDetails" : { "IpAddressV4" : "203.0.113.9" , "Organization" : { "Asn" : "24875" , "AsnOrg" : "Example Inc." , "Isp" : "Example Inc." , "Org" : "Example Inc." }}, "RemotePortDetails" : { "Port" : 1549 , "PortName" : "Unknown" }}}, "Archived" : false , "Count" : 5 , "DetectorId" : " DETECTOR ID " , "EventFirstSeen" : "2020-10-06T05:10:58Z" , "EventLastSeen" : "2020-10-06T05:46:59Z" , "ResourceRole" : "TARGET" , "ServiceName" : "guardduty" }, "Severity" : 2 , "Title" : "203.0.113.9 is performing RDP brute force attacks against i- INSTANCE ID ." , "Type" : "UnauthorizedAccess:EC2/RDPBruteForce" , "UpdatedAt" : "2020-10-06T06:01:46.380Z" }] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If "ErrorCode" is reported (is success=false): "Action wasn't able to get Findings details.
- Once checked, the option appears to select the remote user (agent).
- Note: Amazon GuardDuty maps the integer value in the following order: 1,2,3 - Low 4,5,6 - Medium 7,8 - High Fetch Max Hours Backwards Integer 1 No The number of hours prior to now to retrieve findings.
- If a raw alert contains a list of entities (such as multiple email addresses, hostnames, or IP addresses), connectors automatically flatten them into separate, unique events.

### "Integrate Amazon Macie with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie)
- Source ID: `site-api-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Once selected, the option appears to select the remote user (agent).
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "ResponseMetadata" :{ "HTTPHeaders" :{ "connection" : "keep-alive" , "content-length" : "2741" , "content-type" : "application/json" , "date" : "Thu, 22 Oct 2020 11:08:58 GMT" , "x-amz-apigw-id" : " ID " , "x-amzn-remapped-content-length" : "2741" , "x-amzn-remapped-date" : "Thu, 22 Oct ""2020 11:08:57 ""GMT" , "x-amzn-remapped-x-amzn-requestid" : "eaea00d2-11f8-40d8-adce-f6c9f17e9815" , "x-amzn-requestid" : "4102349a-a5da-4bfc-ad78-40f48885985f" }, "HTTPStatusCode" : 200 , "RequestId" : "4102349a-a5da-4bfc-ad78-40f48885985f" , "RetryAttempts" : 0 }, "findings" :[ { "accountId" : " ACCOUNT ID " , "archived" : false , "category" : "CLASSIFICATION" , "classificationDetails" :{ "detailedResultsLocation" : "s3://[export-config-not-set]/AWSLogs/ ACCOUNT ID /Macie/us-east-1/" , "jobArn" : "arn:aws:macie2:us-east-1" , "jobId" : "088009521d393eda440a24f3c7ad8fbd" , "result" :{ "additionalOccurrences" : false , "customDataIdentifiers" :{ "detections" :[ ], "totalCount" : 0 }, "mimeType" : "application/zip" , "sensitiveData" :[ { "category" : "PERSONAL INFORMATION" , "detections" :[ { "count" : 80 , "type" : "PHONE NUMBER" }, { "count" : 5 , "type" : "ADDRESS" }, { "count" : 207 , "type" : "NAME" } ], "totalCount" : 292 }, { "category" : "CREDENTIALS" , "detections" :[ { "count" : 5 , "type" : "AWS CREDENTIALS" } ], "totalCount" : 5 } ], "sizeClassified" : 44213802 , "status" :{ "code" : "PARTIAL" , "reason" : "ARCHIVE CONTAINS UNPROCESSED FILES" } } }, "count" : 1 , "createdAt" : da tet ime.da tet ime( 2020 , 10 , 22 , 3 , 12 , 9 , 364000 , "tzinfo=tzutc())" , "description" : "The object contains more than one type of ""sensitive information." , "id" : " FINDING ID " , "partition" : "aws" , "region" : "us-east-1" , "resourcesAffected" :{ "s3Bucket" :{ "arn" : "arn:aws:s3:::testexample" , "createdAt" : da tet ime.da tet ime( 2020 , 9 , 14 , 10 , 31 , 56 , "tzinfo=tzutc())" , "defaultServerSideEncryption" :{ "encryptionType" : "NONE" }, "name" : "testexample" , "owner" :{ "displayName" : "lab aws" , "id" : " OWNER ID " }, "publicAccess" :{ "effectivePermission" : "PUBLIC" , "permissionConfiguration" :{ "accountLevelPermissions" :{ "blockPublicAccess" :{ "blockPublicAcls" : false , "blockPublicPolicy" : false , "ignorePublicAcls" : false , "restrictPublicBuckets" : false } }, "bucketLevelPermissions" :{ "accessControlList" :{ "allowsPublicReadAccess" : false , "allowsPublicWriteAccess" : false }, "blockPublicAccess" :{ "blockPublicAcls" : false , "blockPublicPolicy" : false , "ignorePublicAcls" : false , "restrictPublicBuckets" : false }, "bucketPolicy" :{ "allowsPublicReadAccess" : true , "allowsPublicWriteAccess" : false } } } }, "tags" :[ ] }, "s3Object" :{ "bucketArn" : "arn:aws:s3:::testsiemplify" , "eTag" : "8dfbe2ba101b3ca0a62f8fde823503b4-5" , "extension" : "zip" , "key" : "awscliv2.zip" , "lastModified" : da tet ime.da tet ime( 2020 , 9 , 28 , 18 , 47 , 30 , "tzinfo=tzutc())" , "path" : "testexample/awscliv2.zip" , "publicAccess" : false , "serverSideEncryption" :{ "encryptionType" : "NONE" }, "size" : 33775890 , "storageClass" : "STANDARD" , "tags" :[ ], "versionId" : "" } }, "sample" : false , "schemaVersion" : "1.0" , "severity" :{ "description" : "High" , "score" : 3 }, "title" : "The S3 object contains multiple types of sensitive ""information." , "type" : "SensitiveData:S3Object/Multiple" , "updatedAt" : da tet ime.da tet ime( 2020 , 10 , 22 , 3 , 12 , 9 , 364000 , "tzinfo=tzutc())" } ] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful: "Amazon Macie findings found" If is success=False, for example no findings were found: "No findings were returned." The action should fail and stop a playbook execution: If a critical error, like wrong credentials or lost connectivity is reported: "Failed to connect to the Amazon Macie service!
- If a raw alert contains a list of entities (such as multiple email addresses, hostnames, or IP addresses), connectors automatically flatten them into separate, unique events.
- Error is {0}".format(exception.stacktrace) General Connectors To learn more about configuring connectors in Google SecOps, see Ingest your data (connectors) .

### "Integrate Anomali STAXX with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-staxx](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-staxx)
- Source ID: `site-api-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Once checked, the option appears to select the remote user (agent).
- If a raw alert contains a list of entities (such as multiple email addresses, hostnames, or IP addresses), connectors automatically flatten them into separate, unique events.
- Error is {0}".format(exception.stacktrace) General Connectors To learn more about configuring connectors in Google SecOps, see Ingest your data (connectors) .
- Possible values: Low Medium High Critical Lowest Confidence To Fetch Integer 0 No Lowest confidence that will be used to fetch indicators.

