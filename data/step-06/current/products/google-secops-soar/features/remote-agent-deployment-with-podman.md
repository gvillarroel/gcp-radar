---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.805Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "Remote Agent deployment with Podman"
feature_slug: "remote-agent-deployment-with-podman"
latest_feature_date: "2025-09-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere"
keywords:
  - "remote"
  - "agent"
  - "deployment"
  - "with"
  - "podman"
  - "agents"
  - "can"
  - "now"
---

# Remote Agent deployment with Podman

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

Remote Agents can now be installed using Podman as a lightweight deployment option.

## Extended Definition

Remote Agents can now be installed using Podman as a lightweight deployment option.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)

## Supporting Pages

### "SOAR migration overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- Source ID: `site-api-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- For more information, refer to Migrate endpoints to Chronicle API Migrate Remote Agents You can migrate the Remote Agents to Google Cloud by doing the following: Create a Service Account instead of an API key for the remote agent.
- What's Next SOAR migration pre-validation guide Migrate a SOAR standalone instance of an MSSP Migrate SOAR endpoints to the Chronicle API Migrate remote agents Migrate SOAR permissions to Google Cloud IAM Frequently asked questions Need more help?
- Existing Remote Agents will be available until September 30, 2026, after which they will no longer function.
- For detailed instructions, see Migrate Remote Agents to Google Cloud .

### "Integrate Amazon GuardDuty with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)
- Source ID: `site-api-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Brute force attacks are used to gain unauthorized access to your instance by guessing the RDP password." , "Id" : " ID " , "Partition" : "aws" , "Region" : "us-east-1" , "Resource" : { "InstanceDetails" : { "AvailabilityZone" : "us-east-1e" , "ImageId" : "ami- IMAGE ID " , "InstanceId" : "i- INSTANCE ID " , "InstanceState" : "running" , "InstanceType" : "t2.micro" , "LaunchTime" : "2020-05-27T08:54:03Z" , "NetworkInterfaces" : [{ "Ipv6Addresses" : [], "NetworkInterfaceId" : "eni-012d9b8a1a3b4e40a" , "PrivateDnsName" : "ip-192.0.2.1.ec2.internal" , "PrivateIpAddress" : "192.0.2.1" , "PrivateIpAddresses" : [{ "PrivateDnsName" : "ip-192.0.2.1.ec2.internal" , "PrivateIpAddress" : "192.0.2.1" }], "PublicDnsName" : "ec2-54-234-69-236.compute-1.amazonaws.com" , "PublicIp" : "198.51.100.236" , "SecurityGroups" : [{ "GroupId" : "sg-0fa42e04e9cd15407" , "GroupName" : "Windows Server 2016" }], "SubnetId" : "subnet-2edddf10" , "VpcId" : "vpc-48a7ac32" }], "Platform" : "windows" , "ProductCodes" : [], "Tags" : [{ "Key" : "Name" , "Value" : "CiscoAMP-win2012" }]}, "ResourceType" : "Instance" }, "SchemaVersion" : "2.0" , "Service" : { "Action" : { "ActionType" : "NETWORK CONNECTION" , "NetworkConnectionAction" : { "Blocked" : false , "ConnectionDirection" : "INBOUND" , "LocalPortDetails" : { "Port" : 3389 , "PortName" : "RDP" }, "Protocol" : "TCP" , "LocalIpDetails" : { "IpAddressV4" : "192.0.2.1" }, "RemoteIpDetails" : { "IpAddressV4" : "203.0.113.9" , "Organization" : { "Asn" : "24875" , "AsnOrg" : "Example Inc." , "Isp" : "Example Inc." , "Org" : "Example Inc." }}, "RemotePortDetails" : { "Port" : 1549 , "PortName" : "Unknown" }}}, "Archived" : false , "Count" : 5 , "DetectorId" : " DETECTOR ID " , "EventFirstSeen" : "2020-10-06T05:10:58Z" , "EventLastSeen" : "2020-10-06T05:46:59Z" , "ResourceRole" : "TARGET" , "ServiceName" : "guardduty" }, "Severity" : 2 , "Title" : "203.0.113.9 is performing RDP brute force attacks against i- INSTANCE ID ." , "Type" : "UnauthorizedAccess:EC2/RDPBruteForce" , "UpdatedAt" : "2020-10-06T06:01:46.380Z" }] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If "ErrorCode" is reported (is success=false): "Action wasn't able to get Findings details.
- Once checked, the option appears to select the remote user (agent).
- Action results Script result Script result name Value options Example is success True or False is success=False Case wall Result type Description Type Output message If successful: "Successfully connected to the AWS GuardDuty server with the provided connection parameters!" Else: "Failed to connect to the AWS if successful: "Successfully connected to the AWS GuardDuty server with the provided connection parameters!" Else: "Failed to connect to the AWS GuardDuty server!
- Please check if all Finding IDs are correct." If successful: "Findings were successfully archived" → Changed to: "The following findings were successfully archived: <ids> In case of one/all invalid finding IDs, the action shouldn't fail, but is success should be set to false: "Couldn't archive the following findings: <ids>" Note: The error code cannot be for one of the IDs.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-root-2`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Note: If you're using agents instead of an agentless transfer, add your agent machine IP address(es) to your list of allowed IPs instead.
- You can now modify the input parameters for the feed and resubmit it to Google SecOps, which will attempt to use the updated feed.
- REMOTE SERVER ERROR A connection to the source was established, but the source didn't respond with data.
- Sample egress rule "egressPolicies" : [ { "egressFrom": { "identities": [ "serviceAccount:service-{replace with project id}@gs-project-accounts.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "GCS pubsub access" } , { "egressFrom" : { "identities" : [ "serviceAccount:project-{replace with project id}@storage-transfer-service.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "STS pubsub" } ] Enable STS access for Amazon S3 and Azure Storage The STS is used by the following Google Cloud Storage feeds to transfer data from Amazon S3 and Azure Storage blobstores to Google SecOps: Amazon S3 (V2) Amazon SQS (V2) Azure Blob Storage (V2) STS sends data transfer requests to the Amazon S3 and Azure storage services from a set of defined STS IP address ranges.

### "Integrate LevelBlue USM Anywhere with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)
- Source ID: `site-api-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Once selected, the option appears to select the remote user (agent).
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "rep device fqdn" : "192.0.2.30" , "sorce name" : "192.0.2.30" , "tag" : "pdate-esp-kernelmodle.sh" , "timestamp occred" : "1596541223000" , "destination address" : "198.51.100.130" , "rep dev canonical" : "192.0.2.30" , "destination name" : "198.51.100.130" , "received from" : "Centos7-001" , "timestamp occred iso8601" : "2020-08-04T11:40:23.000Z" , "id" : "f52dd545-ff14-5576-3b70-47f10f528f53" , "needs enrichment" : True , "rep device asset id" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "timestamp received" : "1596541223152" , "sorce canonical" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "destination fqdn" : "198.51.100.130" , " links" : { "self" : { "href" : " URL " } }, "has alarm" : False , "rep device address" : "192.0.2.30" , "event name" : "pdate-esp-kernelmodle.sh event" , "sed hint" : False , "transient" : False , "packet type" : "log" , "was fzzied" : True , "sppressed" : False , "log" : "<13>Ag 4 14:40:23 Centos7-001 pdate-esp-kernelmodle.sh: McAfeeESPFileAccess installed in this system is - 198.51.100.130" , "sorce asset id" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "timestamp received iso8601" : "2020-08-04T11:40:23.152Z" , "destination canonical" : "198.51.100.130" , "time offset" : "Z" } Case wall Result type Description Type Output message In case of general error: "Action didn't complete due to error: {error}", result value should be set to false and the action should fail.
- If the action is completed successfully: "Successfully returned {len(events)} AlienVault Anywhere events" If the action failed to run: "Failed to list Endgame AlienVault Anywhere events!" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Table Title: Events Table Columns: ID Name Occurred Time Received Time Suppressed Severity Category Sub Category Access Control Outcome Destination Destination Port Source Source Port Values: id= uuid name = event name Occurred Time=timestamp occurred iso8601 Received Time=timestamp received iso8601 Suppressed =suppressed Severity = event severity Category = event category Sub Category = event subcategory Access Control Outcome = access control outcome Destination = destination name Destination Port = destination port Source = source name Source Port= source port General Ping Test connectivity.
- Error is {}. action should fail." Action pass successfully: "Successfully returned AlienVault Anywhere alarm {} details" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Columns: ID Priority Occurred Time Received Time Source Source Organization Source Country Destination Rule Attack ID Rule Strategy Rule ID Rule Attack Tactic Rule Attack Technique Rule Intent General List Events Search for AlienVault events.

