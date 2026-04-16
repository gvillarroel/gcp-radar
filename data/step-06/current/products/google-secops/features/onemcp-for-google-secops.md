---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.709Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "OneMCP for Google SecOps"
feature_slug: "onemcp-for-google-secops"
latest_feature_date: "2026-01-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-staxx"
keywords:
  - "onemcp"
  - "secops"
  - "remote"
  - "mcp"
  - "server"
  - "lets"
  - "llm"
  - "agents"
---

# OneMCP for Google SecOps

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

The remote MCP server lets LLM agents perform data-related tasks in Google SecOps.

## Extended Definition

The remote MCP server lets LLM agents perform data-related tasks in Google SecOps.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-staxx](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-staxx)

## Supporting Pages

### "Integrate Amazon GuardDuty with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)
- Source ID: `site-api-reference`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- Brute force attacks are used to gain unauthorized access to your instance by guessing the RDP password." , "Id" : " ID " , "Partition" : "aws" , "Region" : "us-east-1" , "Resource" : { "InstanceDetails" : { "AvailabilityZone" : "us-east-1e" , "ImageId" : "ami- IMAGE ID " , "InstanceId" : "i- INSTANCE ID " , "InstanceState" : "running" , "InstanceType" : "t2.micro" , "LaunchTime" : "2020-05-27T08:54:03Z" , "NetworkInterfaces" : [{ "Ipv6Addresses" : [], "NetworkInterfaceId" : "eni-012d9b8a1a3b4e40a" , "PrivateDnsName" : "ip-192.0.2.1.ec2.internal" , "PrivateIpAddress" : "192.0.2.1" , "PrivateIpAddresses" : [{ "PrivateDnsName" : "ip-192.0.2.1.ec2.internal" , "PrivateIpAddress" : "192.0.2.1" }], "PublicDnsName" : "ec2-54-234-69-236.compute-1.amazonaws.com" , "PublicIp" : "198.51.100.236" , "SecurityGroups" : [{ "GroupId" : "sg-0fa42e04e9cd15407" , "GroupName" : "Windows Server 2016" }], "SubnetId" : "subnet-2edddf10" , "VpcId" : "vpc-48a7ac32" }], "Platform" : "windows" , "ProductCodes" : [], "Tags" : [{ "Key" : "Name" , "Value" : "CiscoAMP-win2012" }]}, "ResourceType" : "Instance" }, "SchemaVersion" : "2.0" , "Service" : { "Action" : { "ActionType" : "NETWORK CONNECTION" , "NetworkConnectionAction" : { "Blocked" : false , "ConnectionDirection" : "INBOUND" , "LocalPortDetails" : { "Port" : 3389 , "PortName" : "RDP" }, "Protocol" : "TCP" , "LocalIpDetails" : { "IpAddressV4" : "192.0.2.1" }, "RemoteIpDetails" : { "IpAddressV4" : "203.0.113.9" , "Organization" : { "Asn" : "24875" , "AsnOrg" : "Example Inc." , "Isp" : "Example Inc." , "Org" : "Example Inc." }}, "RemotePortDetails" : { "Port" : 1549 , "PortName" : "Unknown" }}}, "Archived" : false , "Count" : 5 , "DetectorId" : " DETECTOR ID " , "EventFirstSeen" : "2020-10-06T05:10:58Z" , "EventLastSeen" : "2020-10-06T05:46:59Z" , "ResourceRole" : "TARGET" , "ServiceName" : "guardduty" }, "Severity" : 2 , "Title" : "203.0.113.9 is performing RDP brute force attacks against i- INSTANCE ID ." , "Type" : "UnauthorizedAccess:EC2/RDPBruteForce" , "UpdatedAt" : "2020-10-06T06:01:46.380Z" }] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If "ErrorCode" is reported (is success=false): "Action wasn't able to get Findings details.
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result { "Format" : "TXT" , "Location" : "https: //example.s3.amazonaws.com/test.txt" , "Name" : "API Test" , "ResponseMetadata" : { "HTTPHeaders" : { "connection" : "keep-alive" , "content-length" : "149" , "content-type" : "application/json" , "date" : "Mon,19 Oct 2020 06: 23: 22 GMT" , "x-amz-apigw-id" : " ID " , "x-amzn-requestid" : " REQUEST ID " , "x-amzn-trace-id" : " TRACE ID " }, "HTTPStatusCode" : 200 , "RequestId" : " REQUEST ID " , "RetryAttempts" : 0 }, "Status" : "ERROR" , "Tags" : {} } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successfully returned details about at list one set (is success=true): "Successfully retrieved details about the following Threat Intelligence Sets from Amazon GuardDuty:\n{0}.".format(list of ids)" If unsuccessful for some of the IDs (is success=true): "Action wasn't able to retrieve details about the following Threat Intelligence Sets from Amazon GuardDuty:\n{0}.".format(list of ids)" If no IDs are used: "No details were retrieved about the provided Threat Intelligence Sets.".format(list of ids) The action should fail and stop a playbook execution: If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "List Threat Intelligence Sets".
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result { "ip set id" : { "Format" : "response['Format']" , "Location" : "response['Location']" , "Name" : "response['Name']" , "Status" : "response['Status']" } } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successfully returned details (is success=true): "Successfully retrieved details about the following Trusted IP Lists from Amazon GuardDuty:\n{0}.".format(list of ids)" If not successful for some of the IDs (is success=true) : "Action wasn't able to retrieve details about the following Trusted IP Lists from Amazon GuardDuty:\n{0}.".format(list of ids) If no IDs are used (is success=false): "No details were retrieved about the provided Trusted IP Lists".format(list of ids)" The action should fail and stop a playbook execution: If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "List Trusted IP Lists".
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result { "ThreatIntelSetId" : "b6f0c884a54449cc8e29eed3094e9c31" } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successfully created a set (is success=true): "Successfully created the Threat Intelligence Set '{0}' in Amazon GuardDuty.".format(Name) If unsuccessful to create a set (is success=false): "Action wasn't able to create the Threat Intelligence Set '{0}' in Amazon GuardDuty.".format(name) The action should fail and stop a playbook execution: If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "Create Threat Intelligence Set".

### "Integrate Anomali STAXX with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-staxx](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-staxx)
- Source ID: `site-api-reference`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action results Script result Script result name Value options Example is success True or False is success:False Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: if successful: "Successfully connected to the Anomali STAXX server with the provided connection parameters!" The action should fail and stop a playbook execution: If not successful: "Failed to connect to the Anomali STAXX server!
- Error is {0}".format(exception.stacktrace) General Connectors To learn more about configuring connectors in Google SecOps, see Ingest your data (connectors) .
- Integrate Anomali STAXX with Google SecOps This document explains how to integrate Anomali STAXX with Google Security Operations (Google SecOps).
- Verify SSL Checkbox Unchecked Yes If selected, the integration validates the SSL certificate when connecting to the Anomali STAXX server.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- REMOTE SERVER REPORTED BAD REQUEST A connection to the source was established, but the source rejected the request.
- REMOTE SERVER ERROR A connection to the source was established, but the source didn't respond with data.
- Sample egress rule "egressPolicies" : [ { "egressFrom": { "identities": [ "serviceAccount:service-{replace with project id}@gs-project-accounts.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "GCS pubsub access" } , { "egressFrom" : { "identities" : [ "serviceAccount:project-{replace with project id}@storage-transfer-service.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "STS pubsub" } ] Enable STS access for Amazon S3 and Azure Storage The STS is used by the following Google Cloud Storage feeds to transfer data from Amazon S3 and Azure Storage blobstores to Google SecOps: Amazon S3 (V2) Amazon SQS (V2) Azure Blob Storage (V2) STS sends data transfer requests to the Amazon S3 and Azure storage services from a set of defined STS IP address ranges.
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .

