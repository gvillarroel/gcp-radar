---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.864Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "inIpRange() function"
feature_slug: "iniprange-function"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-security-hub"
keywords:
  - "iniprange"
  - "query"
  - "filters"
  - "findings"
  - "ipv4"
  - "ipv6"
  - "address"
  - "ranges"
---

# inIpRange() function

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The inIpRange() query function filters findings by IPv4 or IPv6 address ranges.

## Extended Definition

The inIpRange() query function filters findings by IPv4 or IPv6 address ranges.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-security-hub](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-security-hub)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- The support for v2.0.0 includes the following new vulnerability detector: Load balancer logging disabled For more information, see the following: Detectors and compliance CIS Google Cloud Foundation 2.0.0 August 21, 2023 Feature inIpRange() function released to General Availability You can now specify a range of IP addresses by using the inIpRange() function in query statements to filter findings that contain IPv4 or IPv6 addresses within the specified range.
- Additional query operators in the Add filters menu in the Query editor on the Findings page are now available.
- Impact: Finding notification filters, post-processing and alerting based on the finding source property will need to be updated to take advantage of the new data type for findings of the following categories: AUDIT CONFIG NOT MONITORED , BUCKET IAM NOT MONITORED , CUSTOM ROLE NOT MONITORED , FIREWALL NOT MONITORED , NETWORK NOT MONITORED , OWNER NOT MONITORED , ROUTE NOT MONITORED , SQL INSTANCE NOT MONITORED .
- Impact: Finding notification filters, post-processing and alerting based on the finding source property will need to be updated to take advantage of the new data type for findings of the following categories: AUDIT CONFIG NOT MONITORED , BUCKET IAM NOT MONITORED , CUSTOM ROLE NOT MONITORED , FIREWALL NOT MONITORED , NETWORK NOT MONITORED , OWNER NOT MONITORED , ROUTE NOT MONITORED , SQL INSTANCE NOT MONITORED .

### "Integrate Amazon EC2 with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2)
- Source ID: `site-docs-root-2`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An inbound rule permits instances to receive traffic from the specified IPv4 or IPv6 CIDR address ranges.
- An outbound rule permits instances to send traffic to the specified IPv4 or IPv6 CIDR address ranges.
- IP Ranges - CidrIP String N/A No The IPv4 address in CIDR format.
- IP Ranges - CidrIP String N/A No The IPv4 address in CIDR format.

### "Integrate AWS Security Hub with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-security-hub](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-security-hub)
- Source ID: `site-docs-root-2`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- The structure of the filter with all possible configurations is as follows: { "ProductArn" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "AwsAccountId" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "Id" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "GeneratorId" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "Type" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "FirstObservedAt" : [ { "Start" : "string" , "End" : "string" , "DateRange" : { "Value" : 123 , "Unit" : "DAYS" } } ], "LastObservedAt" : [ { "Start" : "string" , "End" : "string" , "DateRange" : { "Value" : 123 , "Unit" : "DAYS" } } ], "CreatedAt" : [ { "Start" : "string" , "End" : "string" , "DateRange" : { "Value" : 123 , "Unit" : "DAYS" } } ], "UpdatedAt" : [ { "Start" : "string" , "End" : "string" , "DateRange" : { "Value" : 123 , "Unit" : "DAYS" } } ], "SeverityProduct" : [ { "Gte" : 123.0 , "Lte" : 123.0 , "Eq" : 123.0 } ], "SeverityNormalized" : [ { "Gte" : 123.0 , "Lte" : 123.0 , "Eq" : 123.0 } ], "SeverityLabel" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "Confidence" : [ { "Gte" : 123.0 , "Lte" : 123.0 , "Eq" : 123.0 } ], "Criticality" : [ { "Gte" : 123.0 , "Lte" : 123.0 , "Eq" : 123.0 } ], "Title" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "Description" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "RecommendationText" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "SourceUrl" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ProductFields" : [ { "Key" : "string" , "Value" : "string" , "Comparison" : "EQUALS" "NOT EQUALS" } ], "ProductName" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "CompanyName" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "UserDefinedFields" : [ { "Key" : "string" , "Value" : "string" , "Comparison" : "EQUALS" "NOT EQUALS" } ], "MalwareName" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "MalwareType" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "MalwarePath" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "MalwareState" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "NetworkDirection" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "NetworkProtocol" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "NetworkSourceIpV4" : [ { "Cidr" : "string" } ], "NetworkSourceIpV6" : [ { "Cidr" : "string" } ], "NetworkSourcePort" : [ { "Gte" : 123.0 , "Lte" : 123.0 , "Eq" : 123.0 } ], "NetworkSourceDomain" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "NetworkSourceMac" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "NetworkDestinationIpV4" : [ { "Cidr" : "string" } ], "NetworkDestinationIpV6" : [ { "Cidr" : "string" } ], "NetworkDestinationPort" : [ { "Gte" : 123.0 , "Lte" : 123.0 , "Eq" : 123.0 } ], "NetworkDestinationDomain" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ProcessName" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ProcessPath" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ProcessPid" : [ { "Gte" : 123.0 , "Lte" : 123.0 , "Eq" : 123.0 } ], "ProcessParentPid" : [ { "Gte" : 123.0 , "Lte" : 123.0 , "Eq" : 123.0 } ], "ProcessLaunchedAt" : [ { "Start" : "string" , "End" : "string" , "DateRange" : { "Value" : 123 , "Unit" : "DAYS" } } ], "ProcessTerminatedAt" : [ { "Start" : "string" , "End" : "string" , "DateRange" : { "Value" : 123 , "Unit" : "DAYS" } } ], "ThreatIntelIndicatorType" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ThreatIntelIndicatorValue" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ThreatIntelIndicatorCategory" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ThreatIntelIndicatorLastObservedAt" : [ { "Start" : "string" , "End" : "string" , "DateRange" : { "Value" : 123 , "Unit" : "DAYS" } } ], "ThreatIntelIndicatorSource" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ThreatIntelIndicatorSourceUrl" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceType" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceId" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourcePartition" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceRegion" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceTags" : [ { "Key" : "string" , "Value" : "string" , "Comparison" : "EQUALS" "NOT EQUALS" } ], "ResourceAwsEc2InstanceType" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceAwsEc2InstanceImageId" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceAwsEc2InstanceIpV4Addresses" : [ { "Cidr" : "string" } ], "ResourceAwsEc2InstanceIpV6Addresses" : [ { "Cidr" : "string" } ], "ResourceAwsEc2InstanceKeyName" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceAwsEc2InstanceIamInstanceProfileArn" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceAwsEc2InstanceVpcId" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceAwsEc2InstanceSubnetId" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceAwsEc2InstanceLaunchedAt" : [ { "Start" : "string" , "End" : "string" , "DateRange" : { "Value" : 123 , "Unit" : "DAYS" } } ], "ResourceAwsS3BucketOwnerId" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceAwsS3BucketOwnerName" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceAwsIamAccessKeyUserName" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceAwsIamAccessKeyStatus" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceAwsIamAccessKeyCreatedAt" : [ { "Start" : "string" , "End" : "string" , "DateRange" : { "Value" : 123 , "Unit" : "DAYS" } } ], "ResourceContainerName" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceContainerImageId" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceContainerImageName" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceContainerLaunchedAt" : [ { "Start" : "string" , "End" : "string" , "DateRange" : { "Value" : 123 , "Unit" : "DAYS" } } ], "ResourceDetailsOther" : [ { "Key" : "string" , "Value" : "string" , "Comparison" : "EQUALS" "NOT EQUALS" } ], "ComplianceStatus" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "VerificationState" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "WorkflowState" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "WorkflowStatus" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "RecordState" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "RelatedFindingsProductArn" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "RelatedFindingsId" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "NoteText" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "NoteUpdatedAt" : [ { "Start" : "string" , "End" : "string" , "DateRange" : { "Value" : 123 , "Unit" : "DAYS" } } ], "NoteUpdatedBy" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "Keyword" : [ { "Value" : "string" } ] } An example of a filter that returns only findings with the critical severity is as follows: { "SeverityLabel" : [ { "Value" : "CRITICAL" , "Comparison" : "EQUALS" } ] } Actions To function properly, the AWS Security Hub actions require you to configure specific permissions.
- The possible values are as follows: AWS Account ID Company Name Status Generator ID Malware Name Process Name Threat Intel Type Product ARN Product Name Record State EC2 Instance Image ID EC2 Instance IPv4 EC2 Instance IPv6 EC2 Instance Key Name EC2 Instance Subnet ID EC2 Instance Type EC2 Instance VPC ID IAM Access Key User Name S3 Bucket Owner Name Container Image ID Container Image Name Container Name Resource ID Resource Type Severity Label Source URL Type Verification State Workflow Status Filter JSON Object Required A filter to apply to findings.
- The possible values are as follows: AWS Account ID Company Name Status Generator ID Malware Name Process Name Threat Intel Type Product ARN Product Name Record State EC2 Instance Image ID EC2 Instance IPv4 EC2 Instance IPv6 EC2 Instance Key Name EC2 Instance Subnet ID EC2 Instance Type EC2 Instance VPC ID IAM Access Key User Name S3 Bucket Owner Name Container Image ID Container Image Name Container Name Resource ID Resource Type Severity Label Source URL Type Verification State Workflow Status Filter JSON Object Optional A filter to apply to findings.
- Work with the Filter JSON Object parameter For the Create Insight and Update Insight action, you can configure filters for findings.

