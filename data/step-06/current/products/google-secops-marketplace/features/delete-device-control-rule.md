---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.668Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Delete Device Control Rule"
feature_slug: "delete-device-control-rule"
latest_feature_date: "2025-10-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2"
keywords:
  - "delete"
  - "device"
  - "control"
  - "rule"
  - "adds"
  - "an"
  - "action"
  - "that"
---

# Delete Device Control Rule

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action that deletes a device control rule in SentinelOne.

## Extended Definition

Adds an action that deletes a device control rule in SentinelOne.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2)

## Supporting Pages

### "Integrate LevelBlue USM Anywhere with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- If the action is completed successfully: "Successfully returned {len(events)} AlienVault Anywhere events" If the action failed to run: "Failed to list Endgame AlienVault Anywhere events!" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Table Title: Events Table Columns: ID Name Occurred Time Received Time Suppressed Severity Category Sub Category Access Control Outcome Destination Destination Port Source Source Port Values: id= uuid name = event name Occurred Time=timestamp occurred iso8601 Received Time=timestamp received iso8601 Suppressed =suppressed Severity = event severity Category = event category Sub Category = event subcategory Access Control Outcome = access control outcome Destination = destination name Destination Port = destination port Source = source name Source Port= source port General Ping Test connectivity.
- Error is {}. action should fail." Action pass successfully: "Successfully returned AlienVault Anywhere alarm {} details" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Columns: ID Priority Occurred Time Received Time Source Source Organization Source Country Destination Rule Attack ID Rule Strategy Rule ID Rule Attack Tactic Rule Attack Technique Rule Intent General List Events Search for AlienVault events.
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "rep device fqdn" : "192.0.2.30" , "sorce name" : "192.0.2.30" , "tag" : "pdate-esp-kernelmodle.sh" , "timestamp occred" : "1596541223000" , "destination address" : "198.51.100.130" , "rep dev canonical" : "192.0.2.30" , "destination name" : "198.51.100.130" , "received from" : "Centos7-001" , "timestamp occred iso8601" : "2020-08-04T11:40:23.000Z" , "id" : "f52dd545-ff14-5576-3b70-47f10f528f53" , "needs enrichment" : True , "rep device asset id" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "timestamp received" : "1596541223152" , "sorce canonical" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "destination fqdn" : "198.51.100.130" , " links" : { "self" : { "href" : " URL " } }, "has alarm" : False , "rep device address" : "192.0.2.30" , "event name" : "pdate-esp-kernelmodle.sh event" , "sed hint" : False , "transient" : False , "packet type" : "log" , "was fzzied" : True , "sppressed" : False , "log" : "<13>Ag 4 14:40:23 Centos7-001 pdate-esp-kernelmodle.sh: McAfeeESPFileAccess installed in this system is - 198.51.100.130" , "sorce asset id" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "timestamp received iso8601" : "2020-08-04T11:40:23.152Z" , "destination canonical" : "198.51.100.130" , "time offset" : "Z" } Case wall Result type Description Type Output message In case of general error: "Action didn't complete due to error: {error}", result value should be set to false and the action should fail.
- This process ensures that every entity is correctly indexed as a unique asset, making it fully searchable and actionable in playbooks.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample ingress rule - ingressFrom: identities: - serviceAccount:8911409095528497-0-account@partnercontent.gserviceaccount.com sources: - accessLevel: " " ingressTo: operations: - serviceName: storage.googleapis.com methodSelectors: - method: google.storage.objects.list - method: google.storage.objects.get - method: google.storage.objects.delete resources: - projects/PROJECT ID Egress rules The following egress rules must be allowed for feeds using GOOGLE CLOUD STORAGE V2 , GOOGLE CLOUD STORAGE EVENT DRIVEN , AMAZON S3 V2 , AMAZON SQS V2 , and AZURE BLOBSTORE V2 to operate when VPCSC is enabled.
- Ingress rules The following Cloud Storage methods must be allowed in the ingress rule: google.storage.objects.list : Required for a single file feed. google.storage.objects.get : Required for feeds that require directory or subdirectory access. google.storage.objects.delete : Required for feeds that require deletion of the source file.
- Record and delete existing feeds (before migration) : Before you begin the BYOP migration, record the configuration settings for all existing feeds that use the impacted connectors (for example, Amazon S3 V2), and then delete the feeds.
- Note: When you configure the SOURCE DELETION OPTION field, if you select an option to delete source objects, you must enable the required deletion permissions for that feed type.

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Workspace-related rule sets The following rule sets detect patterns in Google Workspace data: Potential Insider Data Exfiltration from Chrome Potential Insider Data Exfiltration from Drive Potential Insider Data Exfiltration from Gmail Potential Workspace Account Compromise Suspicious Workspace Administrative Actions These rule sets require the following log types, listed by product name and Google SecOps ingestion label: Workspace Activities ( WORKSPACE ACTIVITY ) Workspace Alerts ( WORKSPACE ALERTS ) Workspace ChromeOS Devices ( WORKSPACE CHROMEOS ) Workspace Mobile Devices ( WORKSPACE MOBILE ) Workspace Users ( WORKSPACE USERS ) Google Chrome Browser Cloud Management ( CHROME MANAGEMENT ) Gmail logs ( GMAIL LOGS ) To ingest the required data, do the following: Collect the data listed in the All rule sets section of this document.
- The following rule sets create a detection when findings from Security Command Center Event Threat Detection , Google Cloud Armor , Security Command Center Sensitive Actions Service , and Custom modules for Event Threat Detection are identified: CDIR SCC Cloud IDS CDIR SCC Cloud Armor CDIR SCC Impact CDIR SCC Enhanced Persistence CDIR SCC Enhanced Defense Evasion CDIR SCC Custom Module Kubernetes Suspicious Tools rule set To use the Kubernetes Suspicious Tools rule set, we recommend that you collect the data listed in the All rule sets section.
- Send user action data to trigger the test rules To verify that data is ingested as expected, create a user and login to verify that these actions trigger the test rules.
- CDIR SCC Enhanced rule sets All rule sets that begin with the name CDIR SCC Enhanced use Security Command Center Premium findings contextualized with several other Google Cloud log sources, including the following: Cloud Audit Logs Cloud DNS logs Identity and Access Management (IAM) analysis Sensitive Data Protection context BigQuery context Compute Engine context To use the CDIR SCC Enhanced rule sets, we recommend that you collect the following Google Cloud data: Log data listed in the All rule sets section.

### "Integrate Amazon EC2 with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Action Results Script Result Script result name Value options Example is success True/False is success:False JSON Result "EC2 Instances" : [ { "AmiLaunchIndex" : 0 , "ImageId" : "ami-047a51fa27710816e" , "InstanceId" : "i-044c08c5bfe1a7f98" , "InstanceType" : "t2.micro" , "KeyName" : "\"Key\": \"Test\", \"Value\":\"Test\"" , "LaunchTime" : "2021-1-30" , "Monitoring" :{ "State" : "disabled" }, "Placement" :{ "AvailabilityZone" : "us-east-1d" , "GroupName" : "" , "Tenancy" : "default" }, "PrivateDnsName" : "ip-192-0-2-220.ec2.internal" , "PrivateIpAddress" : "192.0.2.220" , "ProductCodes" :[ ], "PublicDnsName" : "ec2-192-0-2-218.compute-1.amazonaws.com" , "PublicIpAddress" : "192.0.2.218" , "State" :{ "Code" : 16 , "Name" : "running" }, "StateTransitionReason" : "" , "SubnetId" : "subnet-1b1fda3a" , "VpcId" : "vpc- ID " , "Architecture" : "x86 64" , "BlockDeviceMappings" :[ { "DeviceName" : "/dev/xvda" , "Ebs" :{ "AttachTime" : "2021-1-30" , "DeleteOnTermination" : true , "Status" : "attached" , "VolumeId" : "vol-00f70681a43e5d86e" } } ], "ClientToken" : "" , "EbsOptimized" : false , "EnaSupport" : true , "Hypervisor" : "xen" , "NetworkInterfaces" :[ { "Association" :{ "IpOwnerId" : "amazon" , "PublicDnsName" : "ec2-192-0-2-218.compute-1.amazonaws.com" , "PublicIp" : "192.0.2.218" }, "Attachment" :{ "AttachTime" : "" , "AttachmentId" : "eni-attach-06bc5e5901ce99ef2" , "DeleteOnTermination" : true , "DeviceIndex" : 0 , "Status" : "attached" , "NetworkCardIndex" : 0 }, "Description" : "" , "Groups" :[ { "GroupName" : "launch-wizard-2" , "GroupId" : "sg-001700ccddac4189a" } ], "Ipv6Addresses" :[ ], "MacAddress" : "12:34:56:ab:cd:ef" , "NetworkInterfaceId" : "eni-020fa83efd417e32d" , "OwnerId" : " ID " , "PrivateDnsName" : "ip-192-0-2-220.ec2.internal" , "PrivateIpAddress" : "192.0.2.220" , "PrivateIpAddresses" :[ { "Association" :{ "IpOwnerId" : "amazon" , "PublicDnsName" : "ec2-192-0-2-218.compute-1.amazonaws.com" , "PublicIp" : "192.0.2.218" }, "Primary" : true , "PrivateDnsName" : "ip-192-0-2-220.ec2.internal" , "PrivateIpAddress" : "192.0.2.220" } ], "SourceDestCheck" : true , "Status" : "in-use" , "SubnetId" : "subnet-1b1fda3a" , "VpcId" : "vpc- ID " , "InterfaceType" : "interface" } ], "RootDeviceName" : "/dev/xvda" , "RootDeviceType" : "ebs" , "SecurityGroups" :[ { "GroupName" : "launch-wizard-2" , "GroupId" : "sg-001700ccddac4189a" } ], "SourceDestCheck" : true , "Tags" :[ { "Key" : "Owner" , "Value" : "Example" }, { "Key" : "Name" , "Value" : "Example test" } ], "VirtualizationType" : "hvm" , "CpuOptions" :{ "CoreCount" : 1 , "ThreadsPerCore" : 1 }, "CapacityReservationSpecification" :{ "CapacityReservationPreference" : "open" }, "HibernationOptions" :{ "Configured" : false }, "MetadataOptions" :{ "State" : "applied" , "HttpTokens" : "optional" , "HttpPutResponseHopLimit" : 1 , "HttpEndpoint" : "enabled" }, "EnclaveOptions" :{ "Enabled" : false } } ] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: If successfully listed instances(is success = true): "Successfully described Amazon EC2 instances." If no available values(is success = false): "No instances were found in Amazon EC2" The action should fail and stop a playbook execution: if fatal error, invalid instance ID, SDK error, like wrong credentials, no connection to server, other: "Error executing action "List Instances".
- For more details please check the logs.` If failed to add the specified egress rules to all groups: is success=false The action should fail and stop a playbook execution: if fatal error, SDK error, like wrong credentials, no connection to server, other: "Error executing action "Authorize Security Group Egress".
- By default, Amazon EC2 deletes all EBS volumes that were attached when the instance launched.
- Action Results Script Result Script result name Value options Example is success True/False is success:False JSON Result "EC2 Security Groups" : [ { "Description" : "launch-wizard-2 created 2021-01-30T19:37:11.523+02:00" , "GroupName" : "launch-wizard-2" , "IpPermissions" :[ { "FromPort" : 22 , "IpProtocol" : "tcp" , "IpRanges" :[ { "CidrIp" : "192.0.2.0/0" } ], "Ipv6Ranges" :[ ], "PrefixListIds" :[ ], "ToPort" : 22 , "UserIdGroupPairs" :[ ] } ], "OwnerId" : "582302349248" , "GroupId" : "sg-001700ccddac4189a" , "IpPermissionsEgress" :[ { "IpProtocol" : "-1" , "IpRanges" :[ { "CidrIp" : "192.0.2.0/0" } ], "Ipv6Ranges" :[ ], "PrefixListIds" :[ ], "UserIdGroupPairs" :[ ] } ], "Tags" :[ { "Key" : "Team" , "Value" : "A-Team" }, { "Key" : "Owner" , "Value" : "Example" } ], "VpcId" : "vpc- ID " } ] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: If successfully listed groups(is success = true): "Successfully described Amazon EC2 security groups." If no available values(is success = false): "No security groups were found in Amazon EC2" The action should fail and stop a playbook execution: if fatal error, invalid group ID/Name, SDK error, like wrong credentials, no connection to server, other: "Error executing action "List Security Groups".

