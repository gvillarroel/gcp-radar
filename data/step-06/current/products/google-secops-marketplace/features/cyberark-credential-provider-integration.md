---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.674Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "CyberArk Credential Provider integration"
feature_slug: "cyberark-credential-provider-integration"
latest_feature_date: "2025-08-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-waf"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/algosec"
keywords:
  - "cyberark"
  - "credential"
  - "provider"
  - "integration"
  - "adds"
  - "the"
---

# CyberArk Credential Provider integration

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds the CyberArk Credential Provider integration.

## Extended Definition

Adds the CyberArk Credential Provider integration.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-waf](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-waf)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/algosec](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/algosec)

## Supporting Pages

### "Integrate Amazon EC2 with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin This integration provides native platform capabilities and doesn't require external third-party API keys or credentials for authentication.
- Action Results Script Result Script result name Value options Example is success True/False is success:False JSON Result "EC2 Instances" : [ { "AmiLaunchIndex" : 0 , "ImageId" : "ami-047a51fa27710816e" , "InstanceId" : "i-044c08c5bfe1a7f98" , "InstanceType" : "t2.micro" , "KeyName" : "\"Key\": \"Test\", \"Value\":\"Test\"" , "LaunchTime" : "2021-1-30" , "Monitoring" :{ "State" : "disabled" }, "Placement" :{ "AvailabilityZone" : "us-east-1d" , "GroupName" : "" , "Tenancy" : "default" }, "PrivateDnsName" : "ip-192-0-2-220.ec2.internal" , "PrivateIpAddress" : "192.0.2.220" , "ProductCodes" :[ ], "PublicDnsName" : "ec2-192-0-2-218.compute-1.amazonaws.com" , "PublicIpAddress" : "192.0.2.218" , "State" :{ "Code" : 16 , "Name" : "running" }, "StateTransitionReason" : "" , "SubnetId" : "subnet-1b1fda3a" , "VpcId" : "vpc- ID " , "Architecture" : "x86 64" , "BlockDeviceMappings" :[ { "DeviceName" : "/dev/xvda" , "Ebs" :{ "AttachTime" : "2021-1-30" , "DeleteOnTermination" : true , "Status" : "attached" , "VolumeId" : "vol-00f70681a43e5d86e" } } ], "ClientToken" : "" , "EbsOptimized" : false , "EnaSupport" : true , "Hypervisor" : "xen" , "NetworkInterfaces" :[ { "Association" :{ "IpOwnerId" : "amazon" , "PublicDnsName" : "ec2-192-0-2-218.compute-1.amazonaws.com" , "PublicIp" : "192.0.2.218" }, "Attachment" :{ "AttachTime" : "" , "AttachmentId" : "eni-attach-06bc5e5901ce99ef2" , "DeleteOnTermination" : true , "DeviceIndex" : 0 , "Status" : "attached" , "NetworkCardIndex" : 0 }, "Description" : "" , "Groups" :[ { "GroupName" : "launch-wizard-2" , "GroupId" : "sg-001700ccddac4189a" } ], "Ipv6Addresses" :[ ], "MacAddress" : "12:34:56:ab:cd:ef" , "NetworkInterfaceId" : "eni-020fa83efd417e32d" , "OwnerId" : " ID " , "PrivateDnsName" : "ip-192-0-2-220.ec2.internal" , "PrivateIpAddress" : "192.0.2.220" , "PrivateIpAddresses" :[ { "Association" :{ "IpOwnerId" : "amazon" , "PublicDnsName" : "ec2-192-0-2-218.compute-1.amazonaws.com" , "PublicIp" : "192.0.2.218" }, "Primary" : true , "PrivateDnsName" : "ip-192-0-2-220.ec2.internal" , "PrivateIpAddress" : "192.0.2.220" } ], "SourceDestCheck" : true , "Status" : "in-use" , "SubnetId" : "subnet-1b1fda3a" , "VpcId" : "vpc- ID " , "InterfaceType" : "interface" } ], "RootDeviceName" : "/dev/xvda" , "RootDeviceType" : "ebs" , "SecurityGroups" :[ { "GroupName" : "launch-wizard-2" , "GroupId" : "sg-001700ccddac4189a" } ], "SourceDestCheck" : true , "Tags" :[ { "Key" : "Owner" , "Value" : "Example" }, { "Key" : "Name" , "Value" : "Example test" } ], "VirtualizationType" : "hvm" , "CpuOptions" :{ "CoreCount" : 1 , "ThreadsPerCore" : 1 }, "CapacityReservationSpecification" :{ "CapacityReservationPreference" : "open" }, "HibernationOptions" :{ "Configured" : false }, "MetadataOptions" :{ "State" : "applied" , "HttpTokens" : "optional" , "HttpPutResponseHopLimit" : 1 , "HttpEndpoint" : "enabled" }, "EnclaveOptions" :{ "Enabled" : false } } ] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: If successfully listed instances(is success = true): "Successfully described Amazon EC2 instances." If no available values(is success = false): "No instances were found in Amazon EC2" The action should fail and stop a playbook execution: if fatal error, invalid instance ID, SDK error, like wrong credentials, no connection to server, other: "Error executing action "List Instances".
- Action Results Script Result Script result name Value options Example is success True/False is success:False JSON Result "EC2 Security Groups" : [ { "Description" : "launch-wizard-2 created 2021-01-30T19:37:11.523+02:00" , "GroupName" : "launch-wizard-2" , "IpPermissions" :[ { "FromPort" : 22 , "IpProtocol" : "tcp" , "IpRanges" :[ { "CidrIp" : "192.0.2.0/0" } ], "Ipv6Ranges" :[ ], "PrefixListIds" :[ ], "ToPort" : 22 , "UserIdGroupPairs" :[ ] } ], "OwnerId" : "582302349248" , "GroupId" : "sg-001700ccddac4189a" , "IpPermissionsEgress" :[ { "IpProtocol" : "-1" , "IpRanges" :[ { "CidrIp" : "192.0.2.0/0" } ], "Ipv6Ranges" :[ ], "PrefixListIds" :[ ], "UserIdGroupPairs" :[ ] } ], "Tags" :[ { "Key" : "Team" , "Value" : "A-Team" }, { "Key" : "Owner" , "Value" : "Example" } ], "VpcId" : "vpc- ID " } ] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: If successfully listed groups(is success = true): "Successfully described Amazon EC2 security groups." If no available values(is success = false): "No security groups were found in Amazon EC2" The action should fail and stop a playbook execution: if fatal error, invalid group ID/Name, SDK error, like wrong credentials, no connection to server, other: "Error executing action "List Security Groups".
- For more details please check the logs.` If failed to add the specified egress rules to all groups: is success=false The action should fail and stop a playbook execution: if fatal error, SDK error, like wrong credentials, no connection to server, other: "Error executing action "Authorize Security Group Egress".

### "AWS Identity and Access Management (IAM) \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-iam)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Create Users(Dev need to be able to create their data in the company bucket) Create Groups (Developers as a group) Create Policies (John need to assign permissions to the users/group) Attach Policies (John attaches a policy to the group that lets devs read,write,list objects in AWS S3) Add/remove users from group (One of the devs becomes a manager, access should be changed) Before you begin This integration provides native platform capabilities and doesn't require external third-party API keys or credentials for authentication.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result [{ "Arn" : "arn:aws:iam::582302349248:group/ZivGroup" , "CreateDate" : "2020-12-05 16:18:36+00:00" , "Path" : "/" , "GroupId" : "AGPAYPE7MW7AMKCWMJPMX" , "GroupName" : "ZivGroup" }] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "Successfully listed available groups in AWS IAM" If no data available: Print "No Groups found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, If 'Max Groups'> 1000): print "Error executing action 'List Groups'.
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result [{ "Arn" : "arn:aws:iam::582302349248:user/ziv" , "CreateDate" : "2020-12-03T12:12:20" , "Path" : "/" , "UserId" : "AIDAYPE7MW7AFMHK4WCHS" , "UserName" : "ziv" }] Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: print "Successfully listed available users in AWS IAM" If no data available: Print "No users found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, if max>10000): print "Error executing action 'List Users'.
- Please note, there are additional policies that match the provided filter." If no data: Print "No Policies were found in AWS IAM" The action should fail and stop a playbook execution: if not successful (wrong credentials, no connection to server, other server error, max>1000): print "Error executing action 'List Policies.

### "Integrate AWS WAF with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-waf](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-waf)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result [ { "Name" : "example" , "Id" : " ID " , "Description" : "example" , "LockToken" : "7e76581b-f152-4448-aafe-b733a33c8fa2" , "ARN" : "arn:aws:wafv2:us-east-1:regional/ipset/example/ ID " } ] "CloudFront" : [ { "Name" : "example" , "Id" : " ID " , "Description" : "example" , "LockToken" : "7e76581b-f152-4448-aafe-b733a33c8fa2" , "ARN" : "arn:aws:wafv2:us-east-1:regional/ipset/example/ ID " } ] Case Wall Result type Value/Description Type (Entity \ General) Output message The action should not fail nor stop a playbook execution: If successfully listed available IP Sets and "Scope" == "Both": "Successfully listed available Web ACLs in Regional and Cloudfront scopes." If successfully listed available IP Sets(is success = true) and "Scope" == "Regional": "Successfully listed available Web ACLs in Regional scope." If successfully listed available IP Sets(is success = true) and "Scope" == "Cloudfront": "Successfully listed available Web ACLs in Cloudfront scope." If no available values(is success = false) and "Scope" == "Both": "No available Web ACLs were found in Regional and Cloudfront scopes." If no available values (is success = false) and "Scope" == "Regional": "No available Web ACLs were found in Regional scope." If no available values(is success = false) and "Scope" == "Cloudfront": "No available Web ACLs were found in Cloudfront scope." The action should fail and stop a playbook execution: if fatal error, SDK error, like wrong credentials, no connection to server, other: "Error executing action "List Web ACLs".
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result [ { "Name" : "example" , "Id" : " ID " , "Description" : "example" , "LockToken" : "7e76581b-f152-4448-aafe-b733a33c8fa2" , "ARN" : "arn:aws:wafv2:us-east-1:regional/ipset/example/ ID " } ] "CloudFront" : [ { "Name" : "example" , "Id" : " ID " , "Description" : "example" , "LockToken" : "7e76581b-f152-4448-aafe-b733a33c8fa2" , "ARN" : "arn:aws:wafv2:us-east-1:regional/ipset/example/ ID " } ] Case Wall Result type Value/Description Type (Entity \ General) Output message The action should not fail nor stop a playbook execution: If successfully listed available Regex Sets and "Scope" == "Both": "Successfully listed available Regex Pattern sets in Regional and Cloudfront scopes." If successfully listed available IP Sets and "Scope" == "Regional": "Successfully listed available Regex Pattern sets in Regional scope." If successfully listed available IP Sets and "Scope" == "Cloudfront": "Successfully listed available Regex Pattern sets in Cloudfront scope." If no available values and "Scope" == "Both": "No available Regex Pattern sets were found in Regional and Cloudfront scopes." If no available values and "Scope" == "Regional": "No available Regex Pattern sets were found in Regional scope." If no available values and "Scope" == "Cloudfront": "No available Regex Pattern sets were found in Cloudfront scope." The action should fail and stop a playbook execution: If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "List Regex Pattern Sets".
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result [ { "Name" : "example" , "Id" : " ID " , "Description" : "example" , "LockToken" : "7e76581b-f152-4448-aafe-b733a33c8fa2" , "ARN" : "arn:aws:wafv2:us-east-1:regional/ipset/example/ ID " } ] "CloudFront" : [ { "Name" : "example" , "Id" : " ID " , "Description" : "example" , "LockToken" : "7e76581b-f152-4448-aafe-b733a33c8fa2" , "ARN" : "arn:aws:wafv2:us-east-1:regional/ipset/example/ ID " } ] Case Wall Result type Value/Description Type (Entity \ General) Output message The action should not fail nor stop a playbook execution: If successfully listed available IP Sets and "Scope" == "Both": "Successfully listed available Rule groups in Regional and Cloudfront scopes." If successfully listed available IP Sets and "Scope" == "Regional": "Successfully listed available Rule groups in Regional scope." If successfully listed available IP Sets and "Scope" == "Cloudfront": "Successfully listed available Rule groups in Cloudfront scope."> If no available values and "Scope" == "Both": "No available Rule groups were found in Regional and Cloudfront scopes." If no available values and "Scope" == "Regional": "No available Rule groups were found in Regional scope." If no available values and "Scope" == "Cloudfront": "No available Rule groups were found in Cloudfront scope." The action should fail and stop a playbook execution: If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "List Rule Groups".
- Action Results Script Result Script Result Name Value Options is success is success=False is success is success=True JSON Result [ { "Name" : "example" , "Id" : " ID " , "Description" : "example" , "LockToken" : "7e76581b-f152-4448-aafe-b733a33c8fa2" , "ARN" : "arn:aws:wafv2:us-east-1:regional/ipset/example/ ID " } ] "CloudFront" : [ { "Name" : "example" , "Id" : " ID " , "Description" : "example" , "LockToken" : "7e76581b-f152-4448-aafe-b733a33c8fa2" , "ARN" : "arn:aws:wafv2:us-east-1:regional/ipset/example/ ID " } ] Case Wall Result type Value/Description Type (Entity \ General) Output message The action should not fail nor stop a playbook execution: If successfully listed available IP Sets and "Scope" == "Both": "Successfully listed available IP sets in Regional and Cloudfront scopes." If successfully listed available IP Sets and "Scope" == "Regional": "Successfully listed available IP sets in Regional scope." If successfully listed available IP Sets and "Scope" == "Cloudfront": "Successfully listed available IP sets in Cloudfront scope." If no available values and "Scope" == "Both": Print "No available IP Sets were found in Regional and Cloudfront scopes." If no available values and "Scope" == "Regional": "No available IP Sets were found in Regional scope." If no available values and "Scope" == "Cloudfront": "No available IP Sets were found in Cloudfront scope." The action should fail and stop a playbook execution: If a fatal error, SDK error, like wrong credentials, no connection to the server, other is reported: "Error executing action "List IP Sets".

### "Integrate AlgoSec with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/algosec](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/algosec)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Integration parameters Use the following parameters to configure the integration: Parameter name Type Default value Is mandatory Description API Root String https:/{{ip address}} Yes API root of the AlgoSec instance.
- Reason: {0}''.format(error.Stacktrace) If the 400 status code is reported: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Block IP".
- Reason: {0}''.format(error.Stacktrace) If the 400 status code is reported: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Block IP".
- The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "List Templates".

