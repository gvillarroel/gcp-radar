---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.689Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Pub/Sub integration"
feature_slug: "pub-sub-integration"
latest_feature_date: "2024-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvaultti"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run"
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
keywords:
  - "pub"
  - "sub"
  - "integration"
  - "adds"
---

# Pub/Sub integration

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds a Pub/Sub integration.

## Extended Definition

Adds a Pub/Sub integration.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvaultti](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvaultti)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run)
- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)

## Supporting Pages

### "Integrate Amazon EC2 with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Action Results Script Result Script result name Value options Example is success True/False is success:False JSON Result "EC2 Instances" : [ { "AmiLaunchIndex" : 0 , "ImageId" : "ami-047a51fa27710816e" , "InstanceId" : "i-044c08c5bfe1a7f98" , "InstanceType" : "t2.micro" , "KeyName" : "\"Key\": \"Test\", \"Value\":\"Test\"" , "LaunchTime" : "2021-1-30" , "Monitoring" :{ "State" : "disabled" }, "Placement" :{ "AvailabilityZone" : "us-east-1d" , "GroupName" : "" , "Tenancy" : "default" }, "PrivateDnsName" : "ip-192-0-2-220.ec2.internal" , "PrivateIpAddress" : "192.0.2.220" , "ProductCodes" :[ ], "PublicDnsName" : "ec2-192-0-2-218.compute-1.amazonaws.com" , "PublicIpAddress" : "192.0.2.218" , "State" :{ "Code" : 16 , "Name" : "running" }, "StateTransitionReason" : "" , "SubnetId" : "subnet-1b1fda3a" , "VpcId" : "vpc- ID " , "Architecture" : "x86 64" , "BlockDeviceMappings" :[ { "DeviceName" : "/dev/xvda" , "Ebs" :{ "AttachTime" : "2021-1-30" , "DeleteOnTermination" : true , "Status" : "attached" , "VolumeId" : "vol-00f70681a43e5d86e" } } ], "ClientToken" : "" , "EbsOptimized" : false , "EnaSupport" : true , "Hypervisor" : "xen" , "NetworkInterfaces" :[ { "Association" :{ "IpOwnerId" : "amazon" , "PublicDnsName" : "ec2-192-0-2-218.compute-1.amazonaws.com" , "PublicIp" : "192.0.2.218" }, "Attachment" :{ "AttachTime" : "" , "AttachmentId" : "eni-attach-06bc5e5901ce99ef2" , "DeleteOnTermination" : true , "DeviceIndex" : 0 , "Status" : "attached" , "NetworkCardIndex" : 0 }, "Description" : "" , "Groups" :[ { "GroupName" : "launch-wizard-2" , "GroupId" : "sg-001700ccddac4189a" } ], "Ipv6Addresses" :[ ], "MacAddress" : "12:34:56:ab:cd:ef" , "NetworkInterfaceId" : "eni-020fa83efd417e32d" , "OwnerId" : " ID " , "PrivateDnsName" : "ip-192-0-2-220.ec2.internal" , "PrivateIpAddress" : "192.0.2.220" , "PrivateIpAddresses" :[ { "Association" :{ "IpOwnerId" : "amazon" , "PublicDnsName" : "ec2-192-0-2-218.compute-1.amazonaws.com" , "PublicIp" : "192.0.2.218" }, "Primary" : true , "PrivateDnsName" : "ip-192-0-2-220.ec2.internal" , "PrivateIpAddress" : "192.0.2.220" } ], "SourceDestCheck" : true , "Status" : "in-use" , "SubnetId" : "subnet-1b1fda3a" , "VpcId" : "vpc- ID " , "InterfaceType" : "interface" } ], "RootDeviceName" : "/dev/xvda" , "RootDeviceType" : "ebs" , "SecurityGroups" :[ { "GroupName" : "launch-wizard-2" , "GroupId" : "sg-001700ccddac4189a" } ], "SourceDestCheck" : true , "Tags" :[ { "Key" : "Owner" , "Value" : "Example" }, { "Key" : "Name" , "Value" : "Example test" } ], "VirtualizationType" : "hvm" , "CpuOptions" :{ "CoreCount" : 1 , "ThreadsPerCore" : 1 }, "CapacityReservationSpecification" :{ "CapacityReservationPreference" : "open" }, "HibernationOptions" :{ "Configured" : false }, "MetadataOptions" :{ "State" : "applied" , "HttpTokens" : "optional" , "HttpPutResponseHopLimit" : 1 , "HttpEndpoint" : "enabled" }, "EnclaveOptions" :{ "Enabled" : false } } ] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: If successfully listed instances(is success = true): "Successfully described Amazon EC2 instances." If no available values(is success = false): "No instances were found in Amazon EC2" The action should fail and stop a playbook execution: if fatal error, invalid instance ID, SDK error, like wrong credentials, no connection to server, other: "Error executing action "List Instances".
- Reason: {0}''.format(error.Stacktrace) General Case Wall Table Table Name: Amazon EC2 Instances Table Columns: ID State Type Availability Zone Public IPv4 DNS Public IPv4 address Monitoring Security group name Key name Launch time List Security Groups Describes the specified security groups or all of your security groups.
- Integration parameters Use the following parameters to configure the integration: Parameter Display Name Type Default Value Is Mandatory Description AWS Access Key ID String N/A Yes AWS Access Key ID to use in integration.
- Before you begin This integration provides native platform capabilities and doesn't require external third-party API keys or credentials for authentication.

### "Integrate AlienVault OTX with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvaultti](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvaultti)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters N/A Run on This action runs on the following entities: IP Address Filehash URL Hostname Action results Entity enrichment Enrichment field name Logic - When to apply analysis Returns if it exists in JSON result general Returns if it exists in JSON result Script result Script result name Value options Example is enriched True or False is enriched:False JSON result [ { "EntityResult" : { "analysis" : { "analysis" : { "hash" : "555a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd55" , "info" : { "results" : { "file class" : "None" , "file type" : "ASCII text, with no line terminators" , "md5" : "55d88612fea8a8f36de82e1278abb02f" , "sha1" : "1235856ce81f2b7382dee72602f798b642f14123" , "ssdeep" : " " , "filesize" : "68" , "sha256" : "37dhr21bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf65hdgsu" }}, " id" : "52b1200214ad667e85105707" , "metadata" : { "tlp" : "WHITE" }, "datetime int" : "2013 - 12 - 18T04: 09: 37" , "plugins" : { "exiftool" : { "process time" : "0.083348989486694336" , "results" : { "Error" : "Unknown file type" }}, "avg" : { "process time" : "0.92721199989318848" , "results" : { "detection" : "EICAR Test" , "alerts" : [ " Malware infection" ] }}, "clamav" : { "process time" : "0.00052618980407714844" , "results" : { "detection" : "Eicar - Test - Signature" , "alerts" : [ "Malware detected" ] }}}}, "malware" : {}, "page type" : "None" }, "general" : { "type title" : " FileHash - SHA256" , "sections" : [ "general" , "analysis" ], "indicator" : "555a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd55" , "base indicator" : { "title" : " " , "access type" : "public" , "description" : " " , "content" : " " , "indicator" : "275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f" , "access reason" : " " , "type" : "FileHash - SHA256" , "id" : 22822 }, "type" : "sha256" , "pulse info" : { "count" : 11 , "pulses" : [{ "pulse source" : "api" , "references" : [ "https://metadefender.opswat.com/threat-intelligence-feeds" ], "subscriber count" : 568 , "modified text" : "95 days ago" , "is subscribing" : "None" , "votes count" : 0 , "vote" : 0 , "id" : "5bbf59f5d47a1b46ca035bde" , "industries" : [], "author" : { "username" : "Metadefender" , "is subscribed" : 0 , "avatar url" : "https://otx20-web-media.s3.amazonaws.com/media/avatars/user/resized/80/avatar.png" , "is following" : 0 , "id" : "32153" }, "cloned from" : "None" , "comment count" : 0 , "follower count" : 0 , "public" : 1 , "indicator type counts" : { "FileHash-SHA1" : 1000 , "FileHash-MD5" : 1000 , "FileHash-SHA256" : 1000 }, "TLP" : "green" , "description" : "Production malware has shown the following behaviors: injector,trojan,adware,sms,backdoor" , "tags" : [ "html" , "win32" , "js" ], "in group" : "False" , "is modified" : "False" , "upvotes count" : 0 , "targeted countries" : [], "groups" : [], "validator count" : 0 , "threat hunter scannable" : "True" , "is author" : "False" , "adversary" : " " , "name" : "Production malware on Metadefender.com" , "locked" : 0 , "observation" : { "pulse source" : "api" , "references" : [ "https://metadefender.opswat.com/threat-intelligence-feeds" ], "subscriber count" : 2 , "is subscribed" : 0 , "author name" : "Metadefender" , "is subscribing" : "None" , "is following" : 0 , "vote" : 0 , "id" : "5bbf59f5d47a1b46ca035bde" , "industries" : [], "cloned from" : "None" , "comment count" : 0 , "avatar url" : "https://otx20-web-media.s3.amazonaws.com/media/avatars/user/resized/80/avatar.png" , "follower count" : 0 , "public" : 1 , "revision" : 1 , "indicator type counts" : { "FileHash-SHA1" : 1000 , "FileHash-MD5" : 1000 , "FileHash-SHA256" : 1000 }, "description" : "Production malware has shown the following behaviors: injector,trojan,adware,sms,backdoor" , "tags" : [ "html" , "win32" , "js" ], "upvotes count" : 0 , "targeted countries" : [], "groups" : [], "validator count" : 0 , "adversary" : " " , "tlp" : "green" , "locked" : 0 , "name" : "Production malware on Metadefender.com" , "created" : "2018-10-11T14:11:01.432000" , "downvotes count" : 0 , "modified" : "2018-10-11T14:11:01.432000" , "export count" : 3 , "extract source" : [], "votes count" : 0 , "author id" : 32153 , "user subscriber count" : 566 }, "created" : "2018-10-11T14:11:01.432000" , "downvotes count" : 0 , "modified" : "2018-10-11T14:11:01.432000" , "export count" : 3 , "indicator count" : 3000 , "is following" : 0 }], "references" : [ "https: //metadefender.opswat.com/results?utm medium=reference&amp" ] }}}, "Entity" : "123a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fasd" } ] Ping Test the connectivity.
- Network Function Default port Direction Protocol API Multivalues Outbound apikey Integration parameters Use the following parameters to configure the integration: Parameter name Type Default value Is mandatory Description Instance Name String N/A No Name of the Instance you intend to configure integration for.
- Run Remotely Checkbox Unchecked No Check the field in order to run the configured integration remotely.
- For instructions about how to configure an integration in Google SecOps, see Configure integrations .

### "Integrate ANY.RUN with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/any-run)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- For enhanced functionality, we strongly recommend that you transition to the following dedicated Partner Integrations : ANYRUN Sandbox ANYRUN TI Feeds ANYRUN TI Lookup Parameters Parameter name Type Default value Is mandatory Description Submission Name String N/A No Specific submission name to search for.
- Use TOR DDL false Possible values: true false No Use TOR or not while running analysis. opt network mitm DDL false Possible values: true false No HTTPS MITM proxy option. opt network geo DDL Fastest Possible values: Fastest AU BR DE CH FR KR US RU GB IT No Geolocation option. opt network heavyevasion DDL false Possible values: true false No Heavy evasion option. opt privacy type DDL By Link Possible values: By Link Public Owner By Team No Privacy settings for analysis. opt timeout String 60 No Timeout period for analysis in range from 10 to 600 seconds. obj ext startfolder DDL temp Possible values: temp desktop home downloads appdata windows root No Start location for analysis.
- Use TOR DDL False No Use TOR or not while running analysis. opt network mitm DDL False No HTTPS MITM proxy option. opt network geo DDL Fastest No Geolocation option. opt network heavyevasion DDL False No Heavy evasion option. opt privacy type DDL By Link Possible values: By Link Public Owner By Team No Privacy settings for analysis. opt timeout String 60 No Timeout period for analysis in range from 10 to 600 seconds. obj ext startfolder DDL temp No Start location for analysis.
- Use TOR DDL False No Use TOR or not while running analysis. opt network mitm DDL False No HTTPS MITM proxy option. opt network geo DDL Fastest No Geolocation option. opt network heavyevasion DDL False No Heavy evasion option. opt privacy type DDL By Link Possible values: By Link Public Owner By Team No Privacy settings for analysis. opt timeout String 60 No Timeout period for analysis in range from 10 to 600 seconds. obj ext startfolder DDL temp No Start location for analysis.

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Response integrations community contribution guidelines Supported in: Google secops SOAR This document outlines the guidelines for submitting Response Integrations to Google SecOps through community contributions.
- All submitted integrations undergo a vetting process by the official Google SecOps team, with a focus on the highlighted requirements within this document.
- General notes Test every integration content before submission.
- You should validate the logo on the following pages: Response > Integration Setup Response > Playbooks > Playbook Designer Cases > Alert > Alert Playbook View The following is an example of an SVG logo, designed to match our style guide: <?xml version="1.0" encoding="UTF-8"?><svg id="Layer 1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 23"> <defs> <style> .cls-1 { stroke-width: 0px; } </style> </defs> <path class="cls-1" d="M15.51,4.79H5.49c-.4,0-.72.32-.72.72v5.75c0,2.3,1.71,4.15,3.69,5.38.54.34,1.1.62,1.66.86l.09.04c.06.02.12.05.18.06.03,0,.07,0,.1,0,.1,0,.19-.03.28-.07l.09-.04c.76-.33,2.22-1.03,3.46-2.24,1.24-1.22,1.89-2.6,1.89-4v-5.75c0-.4-.32-.72-.72-.72ZM14.32,11.26c0,.88-.44,1.77-1.32,2.63-.65.64-1.55,1.22-2.5,1.68-.95-.46-1.84-1.04-2.5-1.68-.88-.86-1.32-1.75-1.32-2.63v-4.55h7.64v4.55ZM20.28,0H.72c-.4,0-.72.32-.72.72v10.77c0,2.56,1.18,4.99,3.51,7.21,2.29,2.18,5.12,3.56,6.61,4.2l.09.04s.1.04.15.05c.04,0,.09.01.13.01.1,0,.19-.02.28-.06l.09-.04c.53-.23,1.23-.55,2.02-.97,1.42-.75,3.11-1.82,4.59-3.23,2.33-2.22,3.51-4.64,3.51-7.21V.72c0-.4-.32-.72-.72-.72ZM16.17,17.31c-1.9,1.81-4.24,3.04-5.67,3.69-1.43-.65-3.77-1.88-5.67-3.69-1.94-1.84-2.92-3.8-2.92-5.82V1.92h17.18v9.57c0,2.02-.98,3.98-2.92,5.82Z"/></svg> Be sure to encode the SVG before adding it to the integration definition file, as can be found in other integrations in the Content Hub.

