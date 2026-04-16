---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.681Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Mimecast Create Block Sender Policy"
feature_slug: "mimecast-create-block-sender-policy"
latest_feature_date: "2025-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
keywords:
  - "mimecast"
  - "create"
  - "block"
  - "sender"
  - "policy"
  - "adds"
  - "an"
  - "action"
---

# Mimecast Create Block Sender Policy

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action to create a block sender policy in Mimecast.

## Extended Definition

Adds an action to create a block sender policy in Mimecast.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)

## Supporting Pages

### "AWS Identity and Access Management (IAM) \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result { "PolicyName" : "S3-read-only-bucket" , "PolicyId" : "ANPAYPE7MW7AFKUDK3HD7" , "Arn" : "arn:aws:iam::582302349248:policy/S3-read-only-bucket" , "Path" : "/" , "DefaultVersionId" : "v1" , "AttachmentCount" : 0 , "PermissionsBoundaryUsageCount" : 0 , "IsAttachable" : true , "CreateDate" : "2020-12-6T17:16:45" , "UpdateDate" : "2020-12-6T17:16:45" } Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "<Policy name> policy was successfully created" The action should fail and stop a playbook execution: If error - Policy already exists: Print "Could not create <policy name> policy.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "Policy was attached to <Identity Type>: <Identity Name>" The action should fail and stop a playbook execution: If error -: Print "Could not create <policy name> policy.
- This action creates a policy version with a version identifier of v1and sets v1 as the policy's default version.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result [{ "Arn" : "arn:aws:iam::582302349248:group/ZivGroup" , "CreateDate" : "2020-12-05 16:18:36+00:00" , "Path" : "/" , "GroupId" : "AGPAYPE7MW7AMKCWMJPMX" , "GroupName" : "ZivGroup" }] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "Successfully listed available groups in AWS IAM" If no data available: Print "No Groups found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, If 'Max Groups'> 1000): print "Error executing action 'List Groups'.

### "Integrate Amazon Macie with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "ResponseMetadata" :{ "HTTPHeaders" :{ "connection" : "keep-alive" , "content-length" : "2741" , "content-type" : "application/json" , "date" : "Thu, 22 Oct 2020 11:08:58 GMT" , "x-amz-apigw-id" : " ID " , "x-amzn-remapped-content-length" : "2741" , "x-amzn-remapped-date" : "Thu, 22 Oct ""2020 11:08:57 ""GMT" , "x-amzn-remapped-x-amzn-requestid" : "eaea00d2-11f8-40d8-adce-f6c9f17e9815" , "x-amzn-requestid" : "4102349a-a5da-4bfc-ad78-40f48885985f" }, "HTTPStatusCode" : 200 , "RequestId" : "4102349a-a5da-4bfc-ad78-40f48885985f" , "RetryAttempts" : 0 }, "findings" :[ { "accountId" : " ACCOUNT ID " , "archived" : false , "category" : "CLASSIFICATION" , "classificationDetails" :{ "detailedResultsLocation" : "s3://[export-config-not-set]/AWSLogs/ ACCOUNT ID /Macie/us-east-1/" , "jobArn" : "arn:aws:macie2:us-east-1" , "jobId" : "088009521d393eda440a24f3c7ad8fbd" , "result" :{ "additionalOccurrences" : false , "customDataIdentifiers" :{ "detections" :[ ], "totalCount" : 0 }, "mimeType" : "application/zip" , "sensitiveData" :[ { "category" : "PERSONAL INFORMATION" , "detections" :[ { "count" : 80 , "type" : "PHONE NUMBER" }, { "count" : 5 , "type" : "ADDRESS" }, { "count" : 207 , "type" : "NAME" } ], "totalCount" : 292 }, { "category" : "CREDENTIALS" , "detections" :[ { "count" : 5 , "type" : "AWS CREDENTIALS" } ], "totalCount" : 5 } ], "sizeClassified" : 44213802 , "status" :{ "code" : "PARTIAL" , "reason" : "ARCHIVE CONTAINS UNPROCESSED FILES" } } }, "count" : 1 , "createdAt" : da tet ime.da tet ime( 2020 , 10 , 22 , 3 , 12 , 9 , 364000 , "tzinfo=tzutc())" , "description" : "The object contains more than one type of ""sensitive information." , "id" : " FINDING ID " , "partition" : "aws" , "region" : "us-east-1" , "resourcesAffected" :{ "s3Bucket" :{ "arn" : "arn:aws:s3:::testexample" , "createdAt" : da tet ime.da tet ime( 2020 , 9 , 14 , 10 , 31 , 56 , "tzinfo=tzutc())" , "defaultServerSideEncryption" :{ "encryptionType" : "NONE" }, "name" : "testexample" , "owner" :{ "displayName" : "lab aws" , "id" : " OWNER ID " }, "publicAccess" :{ "effectivePermission" : "PUBLIC" , "permissionConfiguration" :{ "accountLevelPermissions" :{ "blockPublicAccess" :{ "blockPublicAcls" : false , "blockPublicPolicy" : false , "ignorePublicAcls" : false , "restrictPublicBuckets" : false } }, "bucketLevelPermissions" :{ "accessControlList" :{ "allowsPublicReadAccess" : false , "allowsPublicWriteAccess" : false }, "blockPublicAccess" :{ "blockPublicAcls" : false , "blockPublicPolicy" : false , "ignorePublicAcls" : false , "restrictPublicBuckets" : false }, "bucketPolicy" :{ "allowsPublicReadAccess" : true , "allowsPublicWriteAccess" : false } } } }, "tags" :[ ] }, "s3Object" :{ "bucketArn" : "arn:aws:s3:::testsiemplify" , "eTag" : "8dfbe2ba101b3ca0a62f8fde823503b4-5" , "extension" : "zip" , "key" : "awscliv2.zip" , "lastModified" : da tet ime.da tet ime( 2020 , 9 , 28 , 18 , 47 , 30 , "tzinfo=tzutc())" , "path" : "testexample/awscliv2.zip" , "publicAccess" : false , "serverSideEncryption" :{ "encryptionType" : "NONE" }, "size" : 33775890 , "storageClass" : "STANDARD" , "tags" :[ ], "versionId" : "" } }, "sample" : false , "schemaVersion" : "1.0" , "severity" :{ "description" : "High" , "score" : 3 }, "title" : "The S3 object contains multiple types of sensitive ""information." , "type" : "SensitiveData:S3Object/Multiple" , "updatedAt" : da tet ime.da tet ime( 2020 , 10 , 22 , 3 , 12 , 9 , 364000 , "tzinfo=tzutc())" } ] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful: "Amazon Macie findings found" If is success=False, for example no findings were found: "No findings were returned." The action should fail and stop a playbook execution: If a critical error, like wrong credentials or lost connectivity is reported: "Failed to connect to the Amazon Macie service!
- Action results Script result Script result name Value options Example is success True or False is success:False JSON Result { "Policy" : { "Version" : "2012-10-17" , "Statement" : [ { "Sid" : "AddPerm" , "Effect" : "Allow" , "Principal" : " " , "Action" : "s3:GetObject" , "Resource" : "arn:aws:s3:::testexample/ " } ] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful: "Amazon Macie findings found" If is success=False, for example no findings were found: "No findings were returned." The action should fail and stop a playbook execution: If a critical error, like wrong credentials or lost connectivity is reported: "Failed to connect to the Amazon Macie service!
- Action results Script result Script result name Value options Example is success True or False is success:False JSON Result { "ResponseMetadata" :{ "HTTPHeaders" :{ "connection" : "keep-alive" , "content-length" : "65" , "content-type" : "application/json" , "date" : "Mon, 26 Oct 2020 05:15:07 GMT" , "x-amz-apigw-id" : " ID " , "x-amzn-remapped-content-length" : "65" , "x-amzn-remapped-date" : "Mon, 26 Oct ""2020 05:15:07 ""GMT" , "x-amzn-remapped-x-amzn-requestid" : "61217a30-189e-4573-9f76-257b7065a04d" , "x-amzn-requestid" : "509e1c12-ab86-459e-9d6d-790a359686b2" }, "HTTPStatusCode" : 200 , "RequestId" : "509e1c12-ab86-459e-9d6d-790a359686b2" , "RetryAttempts" : 0 }, "customDataIdentifierId" : "ff43487b-5643-4de1-b651-9ecbeb3021ed" } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful: "New Amazon Macie custom data identifier created: {0}".format(new identifier id from response) If is success=False, for example no findings were found: "Failed to create Amazon Macie Identifier.
- Action results Script result Script result name Value options Example is success True or False is success:False Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful: "Successfully connected to the Amazon Macie service with the provided connection parameters!" The action should fail and stop a playbook execution: If a critical error, like wrong credentials or lost connectivity is reported: "Failed to connect to the Amazon Macie service!

### "Integrate Amazon GuardDuty with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Brute force attacks are used to gain unauthorized access to your instance by guessing the RDP password." , "Id" : " ID " , "Partition" : "aws" , "Region" : "us-east-1" , "Resource" : { "InstanceDetails" : { "AvailabilityZone" : "us-east-1e" , "ImageId" : "ami- IMAGE ID " , "InstanceId" : "i- INSTANCE ID " , "InstanceState" : "running" , "InstanceType" : "t2.micro" , "LaunchTime" : "2020-05-27T08:54:03Z" , "NetworkInterfaces" : [{ "Ipv6Addresses" : [], "NetworkInterfaceId" : "eni-012d9b8a1a3b4e40a" , "PrivateDnsName" : "ip-192.0.2.1.ec2.internal" , "PrivateIpAddress" : "192.0.2.1" , "PrivateIpAddresses" : [{ "PrivateDnsName" : "ip-192.0.2.1.ec2.internal" , "PrivateIpAddress" : "192.0.2.1" }], "PublicDnsName" : "ec2-54-234-69-236.compute-1.amazonaws.com" , "PublicIp" : "198.51.100.236" , "SecurityGroups" : [{ "GroupId" : "sg-0fa42e04e9cd15407" , "GroupName" : "Windows Server 2016" }], "SubnetId" : "subnet-2edddf10" , "VpcId" : "vpc-48a7ac32" }], "Platform" : "windows" , "ProductCodes" : [], "Tags" : [{ "Key" : "Name" , "Value" : "CiscoAMP-win2012" }]}, "ResourceType" : "Instance" }, "SchemaVersion" : "2.0" , "Service" : { "Action" : { "ActionType" : "NETWORK CONNECTION" , "NetworkConnectionAction" : { "Blocked" : false , "ConnectionDirection" : "INBOUND" , "LocalPortDetails" : { "Port" : 3389 , "PortName" : "RDP" }, "Protocol" : "TCP" , "LocalIpDetails" : { "IpAddressV4" : "192.0.2.1" }, "RemoteIpDetails" : { "IpAddressV4" : "203.0.113.9" , "Organization" : { "Asn" : "24875" , "AsnOrg" : "Example Inc." , "Isp" : "Example Inc." , "Org" : "Example Inc." }}, "RemotePortDetails" : { "Port" : 1549 , "PortName" : "Unknown" }}}, "Archived" : false , "Count" : 5 , "DetectorId" : " DETECTOR ID " , "EventFirstSeen" : "2020-10-06T05:10:58Z" , "EventLastSeen" : "2020-10-06T05:46:59Z" , "ResourceRole" : "TARGET" , "ServiceName" : "guardduty" }, "Severity" : 2 , "Title" : "203.0.113.9 is performing RDP brute force attacks against i- INSTANCE ID ." , "Type" : "UnauthorizedAccess:EC2/RDPBruteForce" , "UpdatedAt" : "2020-10-06T06:01:46.380Z" }] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If "ErrorCode" is reported (is success=false): "Action wasn't able to get Findings details.
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result { "ThreatIntelSetId" : "b6f0c884a54449cc8e29eed3094e9c31" } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successfully created a set (is success=true): "Successfully created the Threat Intelligence Set '{0}' in Amazon GuardDuty.".format(Name) If unsuccessful to create a set (is success=false): "Action wasn't able to create the Threat Intelligence Set '{0}' in Amazon GuardDuty.".format(name) The action should fail and stop a playbook execution: If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "Create Threat Intelligence Set".
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result { "TrustedIPID" : " TRUSTED IP ID " } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successfully created a set (is success=true): "Successfully created new Trusted IP List '{0}' in Amazon GuardDuty.".format(Name)" If unsuccessful to create a set (is success=false): "Action wasn't able to create new Trusted IP List '{0}' in Amazon GuardDuty.".format(name)" The action should fail and stop a playbook execution: If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "Create Trusted IP List".
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result { "DetectorId" : " DETECTOR ID " , "CreatedAt" : "response['CreatedAt']" , "ServiceRole" : "response['ServiceRole']" , "Status" : "response['Status']" , "UpdatedAt" : "response['UpdatedAt']" , } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful: "Successfully retrieved information about <Indicator ID> indicator." Note : If some detector ID s found, and some not - display both messages based on the relevant detector ID.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Required actions for customers To ensure continuous data ingestion, you must manually re-create your feeds in the new environment.
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .
- Cloud Storage Pub/Sub Access Identity : serviceAccount: service- {unique project id} @gs-project-accounts.iam.gserviceaccount.com Service : pubsub.googleapis.com Operations : All ( ) Resources : All ( ) STS Pub/Sub Identity : serviceAccount: project- {unique project id} @storage-transfer-service.iam.gserviceaccount.com Service : pubsub.googleapis.com Operations : All ( ) Resources : All ( ) To obtain the unique-project-id, do the following: On the Feeds page, click Create Feed .
- Impact of changing your linked Cloud Project on data feeds If you are updating the Google Cloud project associated with your Google SecOps instance, all feeds ingesting data using the following connectors will stop, and must be re-created manually: AMAZON S3 V2 AMAZON SQS V2 GOOGLE CLOUD STORAGE V2 AZURE BLOBSTORE V2 GOOGLE CLOUD STORAGE EVENT DRIVEN For all other feeds that are not utilizing these connectors, ingestion continues without any interruption.

