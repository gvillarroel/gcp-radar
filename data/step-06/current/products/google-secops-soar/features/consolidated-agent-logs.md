---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.819Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "Consolidated agent logs"
feature_slug: "consolidated-agent-logs"
latest_feature_date: "2024-08-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/administration/migrate-legacy-siem-infra"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty"
keywords:
  - "consolidated"
  - "agent"
  - "logs"
  - "are"
  - "now"
  - "in"
  - "single"
  - "location"
---

# Consolidated agent logs

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

Agent logs are now consolidated in a single location under /opt/SiemplifyAgent/Logs.

## Extended Definition

Agent logs are now consolidated in a single location under /opt/SiemplifyAgent/Logs.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/administration/migrate-legacy-siem-infra](https://docs.cloud.google.com/chronicle/docs/administration/migrate-legacy-siem-infra)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .
- Note: For the AWS CLOUDTRAIL log type, verify that the logs are in JSON format and the filename is a JSON file (uncompressed) or a JSON GZipped file (compressed).
- Impact of changing your linked Cloud Project on data feeds If you are updating the Google Cloud project associated with your Google SecOps instance, all feeds ingesting data using the following connectors will stop, and must be re-created manually: AMAZON S3 V2 AMAZON SQS V2 GOOGLE CLOUD STORAGE V2 AZURE BLOBSTORE V2 GOOGLE CLOUD STORAGE EVENT DRIVEN For all other feeds that are not utilizing these connectors, ingestion continues without any interruption.

### "Migrate legacy SIEM Infra to Google Cloud \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/migrate-legacy-siem-infra](https://docs.cloud.google.com/chronicle/docs/administration/migrate-legacy-siem-infra)
- Source ID: `site-docs-root-2`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Scope of migration Infra Legacy stack Modern stack Project hosting Google owned project Customer-owned Google Cloud project Authentication Legacy SIEM Authentication Google Cloud Auth: Workforce Identity Federation (WIF) or Cloud Identity Authorization Legacy SIEM RBAC Feature RBAC: Google Cloud IAM Audit Logging Limited internal logging Cloud Audit Logs: Comprehensive Google Cloud logging Before you begin Prepare your Google Cloud environment before you start the migration: Identify or create a Google Cloud organization and a Google Cloud project .
- Migrate your SIEM instance if it is any of the following types: Not deployed in your Google Cloud project OR Not using Google Cloud Authentication (Workforce Identity Federation / Cloud Identity) OR Not using Google Cloud Identity and Access Management (IAM) for Role-Based Access Control (RBAC) You don't need to migrate if your instance meets all of the following conditions: Deployed in a Google Cloud project AND Uses Workforce Identity Federation or Cloud Identity for authentication AND Uses Google Cloud IAM to manage granular access permissions Why migrate now?
- This migration modernizes your SIEM infrastructure to meet industry standards, enhances reliability, privacy, compliance, and granular access controls, and unlocks newer capabilities, such as agentic SOC.
- We're here to help We understand that these changes might require some planning, and we are here to support you throughout this transition.

### "SOAR migration overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- It also enables access to Agentic AI capabilities through Model Context Protocol (MCP) integration and best-in-class services including IAM for access control, Cloud Monitoring, and Cloud Audit Logs.
- For SOAR standalone customers, see Collect SOAR logs Further changes post migration: License type The license type is now determined by the user's assigned permissions in IAM.
- What's Next SOAR migration pre-validation guide Migrate a SOAR standalone instance of an MSSP Migrate SOAR endpoints to the Chronicle API Migrate remote agents Migrate SOAR permissions to Google Cloud IAM Frequently asked questions Need more help?
- For more information, refer to Migrate endpoints to Chronicle API Migrate Remote Agents You can migrate the Remote Agents to Google Cloud by doing the following: Create a Service Account instead of an API key for the remote agent.

### "Integrate Amazon GuardDuty with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)
- Source ID: `site-api-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Brute force attacks are used to gain unauthorized access to your instance by guessing the RDP password." , "Id" : " ID " , "Partition" : "aws" , "Region" : "us-east-1" , "Resource" : { "InstanceDetails" : { "AvailabilityZone" : "us-east-1e" , "ImageId" : "ami- IMAGE ID " , "InstanceId" : "i- INSTANCE ID " , "InstanceState" : "running" , "InstanceType" : "t2.micro" , "LaunchTime" : "2020-05-27T08:54:03Z" , "NetworkInterfaces" : [{ "Ipv6Addresses" : [], "NetworkInterfaceId" : "eni-012d9b8a1a3b4e40a" , "PrivateDnsName" : "ip-192.0.2.1.ec2.internal" , "PrivateIpAddress" : "192.0.2.1" , "PrivateIpAddresses" : [{ "PrivateDnsName" : "ip-192.0.2.1.ec2.internal" , "PrivateIpAddress" : "192.0.2.1" }], "PublicDnsName" : "ec2-54-234-69-236.compute-1.amazonaws.com" , "PublicIp" : "198.51.100.236" , "SecurityGroups" : [{ "GroupId" : "sg-0fa42e04e9cd15407" , "GroupName" : "Windows Server 2016" }], "SubnetId" : "subnet-2edddf10" , "VpcId" : "vpc-48a7ac32" }], "Platform" : "windows" , "ProductCodes" : [], "Tags" : [{ "Key" : "Name" , "Value" : "CiscoAMP-win2012" }]}, "ResourceType" : "Instance" }, "SchemaVersion" : "2.0" , "Service" : { "Action" : { "ActionType" : "NETWORK CONNECTION" , "NetworkConnectionAction" : { "Blocked" : false , "ConnectionDirection" : "INBOUND" , "LocalPortDetails" : { "Port" : 3389 , "PortName" : "RDP" }, "Protocol" : "TCP" , "LocalIpDetails" : { "IpAddressV4" : "192.0.2.1" }, "RemoteIpDetails" : { "IpAddressV4" : "203.0.113.9" , "Organization" : { "Asn" : "24875" , "AsnOrg" : "Example Inc." , "Isp" : "Example Inc." , "Org" : "Example Inc." }}, "RemotePortDetails" : { "Port" : 1549 , "PortName" : "Unknown" }}}, "Archived" : false , "Count" : 5 , "DetectorId" : " DETECTOR ID " , "EventFirstSeen" : "2020-10-06T05:10:58Z" , "EventLastSeen" : "2020-10-06T05:46:59Z" , "ResourceRole" : "TARGET" , "ServiceName" : "guardduty" }, "Severity" : 2 , "Title" : "203.0.113.9 is performing RDP brute force attacks against i- INSTANCE ID ." , "Type" : "UnauthorizedAccess:EC2/RDPBruteForce" , "UpdatedAt" : "2020-10-06T06:01:46.380Z" }] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If "ErrorCode" is reported (is success=false): "Action wasn't able to get Findings details.
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result { "Format" : "TXT" , "Location" : "https: //example.s3.amazonaws.com/test.txt" , "Name" : "API Test" , "ResponseMetadata" : { "HTTPHeaders" : { "connection" : "keep-alive" , "content-length" : "149" , "content-type" : "application/json" , "date" : "Mon,19 Oct 2020 06: 23: 22 GMT" , "x-amz-apigw-id" : " ID " , "x-amzn-requestid" : " REQUEST ID " , "x-amzn-trace-id" : " TRACE ID " }, "HTTPStatusCode" : 200 , "RequestId" : " REQUEST ID " , "RetryAttempts" : 0 }, "Status" : "ERROR" , "Tags" : {} } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successfully returned details about at list one set (is success=true): "Successfully retrieved details about the following Threat Intelligence Sets from Amazon GuardDuty:\n{0}.".format(list of ids)" If unsuccessful for some of the IDs (is success=true): "Action wasn't able to retrieve details about the following Threat Intelligence Sets from Amazon GuardDuty:\n{0}.".format(list of ids)" If no IDs are used: "No details were retrieved about the provided Threat Intelligence Sets.".format(list of ids) The action should fail and stop a playbook execution: If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "List Threat Intelligence Sets".
- Action results Script result Script result name Value options Example is success True or False is success=False JSON result { "ip set id" : { "Format" : "response['Format']" , "Location" : "response['Location']" , "Name" : "response['Name']" , "Status" : "response['Status']" } } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successfully returned details (is success=true): "Successfully retrieved details about the following Trusted IP Lists from Amazon GuardDuty:\n{0}.".format(list of ids)" If not successful for some of the IDs (is success=true) : "Action wasn't able to retrieve details about the following Trusted IP Lists from Amazon GuardDuty:\n{0}.".format(list of ids) If no IDs are used (is success=false): "No details were retrieved about the provided Trusted IP Lists".format(list of ids)" The action should fail and stop a playbook execution: If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "List Trusted IP Lists".
- Action results Script result Script result name Value options Example is success True or False is success=False Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successfully returned details about at list one set (is success=true): "Successfully deleted the following Threat Intelligence Sets in Amazon GuardDuty:\n{0}.".format(list of ids) If unsuccessful for some of the IDs (is success=true): "Action wasn't able to delete the following Threat Intelligence Sets in Amazon GuardDuty:\n{0}.".format(list of ids) If no IDs are used: "No Threat Intelligence Sets were deleted.".format(list of ids) The action should fail and stop a playbook execution: Invalid detector ID should raise an exception as well, stop the playbook and set is success to false.

