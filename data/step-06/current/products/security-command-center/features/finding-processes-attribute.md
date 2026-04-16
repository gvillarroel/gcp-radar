---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.007Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Finding.processes attribute"
feature_slug: "finding-processes-attribute"
latest_feature_date: "2022-05-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-security-hub"
keywords:
  - "finding"
  - "processes"
  - "attribute"
  - "provides"
  - "details"
  - "about"
  - "operating"
  - "system"
---

# Finding.processes attribute

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The attribute provides details about operating system processes relevant to a finding.

## Extended Definition

The attribute provides details about operating system processes relevant to a finding.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-security-hub](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-security-hub)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- The processes attribute provides details about operating system processes relevant to a finding.
- March 17, 2023 Feature The following attributes were added to the Finding object of the Security Command Center API. cloudDlpInspection cloudDlpDataProfile The cloudDlpInspection attribute provides details about the results of a Cloud Data Loss Prevention (Cloud DLP) inspection job .
- August 22, 2022 Feature The following attributes were added to the Finding object of the Security Command Center API: Database provides information about access to a database that is related to a finding. serviceAccountKeyName , serviceAccountDelegationInfo , and principalSubject attributes were added to the existing access attribute.
- The container attribute provides information about both Kubernetes and non-Kubernetes containers that are associated with a given finding.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- Standard-legacy, Standard, Premium, and Enterprise service tiers The Google Kubernetes Engine (GKE) security posture dashboard is a page in the Google Cloud console that provides you with opinionated, actionable findings about potential security issues in your GKE clusters.
- Pricing tier : Premium Supported assets compute. googleapis. com/ Instance Fix this finding build VM Manager's vulnerability reports detail vulnerabilities in installed operating system packages for Compute Engine VMs, including Common Vulnerabilities and Exposures (CVEs) .
- Detector Summary Asset scan settings OS vulnerability Category name in the API: OS VULNERABILITY Finding description : VM Manager detected a vulnerability in the installed operating system (OS) package for a Compute Engine VM.
- On the Summary tab, review the details of the finding, including information about what was detected, the affected resource, and—if available—steps that you can take to remediate the finding.

### "Integrate AWS Security Hub with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-security-hub](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-security-hub)
- Source ID: `site-docs-root-2`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action outputs The Get Insight Details action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Available Enrichment table Not available JSON result Available Output messages Available Script result Available Case wall table The Get Insight Details action can return the following table in Google SecOps: Table name: ' NUMBER OF OBJECTS ' Bucket Objects Columns: Name (mapped as GroupByAttributeValue ) Count (mapped as Count ) JSON result The following example shows the JSON result output received when using the Get Insight Details action: "InsightResults" : { "InsightArn" : "arn:aws:securityhub: ID " , "GroupByAttribute" : "ResourceId" , "ResultValues" : [ { "GroupByAttributeValue" : "arn:aws:s3:::int-arcsight-v-27-0-getreportstatus" , "Count" : 5 }, { "GroupByAttributeValue" : "arn:aws:s3:::int-arcsight-v-27-0-searchactionbug" , "Count" : 5 }, { "GroupByAttributeValue" : "arn:aws:s3:::int-arcsight-v-27-0-unicodeandlogs" , "Count" : 5 }, { "GroupByAttributeValue" : "arn:aws:s3:::int-automation-v-1-0" , "Count" : 5 }, { "GroupByAttributeValue" : "arn:aws:s3:::int-awss3-v-1-0" , "Count" : 5 }, { "GroupByAttributeValue" : "arn:aws:s3:::int-azureactivedirectory-v-4-0" , "Count" : 5 }, { "GroupByAttributeValue" : "arn:aws:s3:::int-bootcamp-v-1-0" , "Count" : 5 }, { "GroupByAttributeValue" : "arn:aws:s3:::int-categories" , "Count" : 5 } ] } Output messages The Get Insight Details action can return the following output messages: Output message Message description Successfully returned details about Insight with ARN ' ARN ' in AWS Security Hub.
- The structure of the filter with all possible configurations is as follows: { "ProductArn" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "AwsAccountId" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "Id" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "GeneratorId" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "Type" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "FirstObservedAt" : [ { "Start" : "string" , "End" : "string" , "DateRange" : { "Value" : 123 , "Unit" : "DAYS" } } ], "LastObservedAt" : [ { "Start" : "string" , "End" : "string" , "DateRange" : { "Value" : 123 , "Unit" : "DAYS" } } ], "CreatedAt" : [ { "Start" : "string" , "End" : "string" , "DateRange" : { "Value" : 123 , "Unit" : "DAYS" } } ], "UpdatedAt" : [ { "Start" : "string" , "End" : "string" , "DateRange" : { "Value" : 123 , "Unit" : "DAYS" } } ], "SeverityProduct" : [ { "Gte" : 123.0 , "Lte" : 123.0 , "Eq" : 123.0 } ], "SeverityNormalized" : [ { "Gte" : 123.0 , "Lte" : 123.0 , "Eq" : 123.0 } ], "SeverityLabel" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "Confidence" : [ { "Gte" : 123.0 , "Lte" : 123.0 , "Eq" : 123.0 } ], "Criticality" : [ { "Gte" : 123.0 , "Lte" : 123.0 , "Eq" : 123.0 } ], "Title" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "Description" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "RecommendationText" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "SourceUrl" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ProductFields" : [ { "Key" : "string" , "Value" : "string" , "Comparison" : "EQUALS" "NOT EQUALS" } ], "ProductName" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "CompanyName" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "UserDefinedFields" : [ { "Key" : "string" , "Value" : "string" , "Comparison" : "EQUALS" "NOT EQUALS" } ], "MalwareName" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "MalwareType" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "MalwarePath" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "MalwareState" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "NetworkDirection" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "NetworkProtocol" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "NetworkSourceIpV4" : [ { "Cidr" : "string" } ], "NetworkSourceIpV6" : [ { "Cidr" : "string" } ], "NetworkSourcePort" : [ { "Gte" : 123.0 , "Lte" : 123.0 , "Eq" : 123.0 } ], "NetworkSourceDomain" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "NetworkSourceMac" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "NetworkDestinationIpV4" : [ { "Cidr" : "string" } ], "NetworkDestinationIpV6" : [ { "Cidr" : "string" } ], "NetworkDestinationPort" : [ { "Gte" : 123.0 , "Lte" : 123.0 , "Eq" : 123.0 } ], "NetworkDestinationDomain" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ProcessName" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ProcessPath" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ProcessPid" : [ { "Gte" : 123.0 , "Lte" : 123.0 , "Eq" : 123.0 } ], "ProcessParentPid" : [ { "Gte" : 123.0 , "Lte" : 123.0 , "Eq" : 123.0 } ], "ProcessLaunchedAt" : [ { "Start" : "string" , "End" : "string" , "DateRange" : { "Value" : 123 , "Unit" : "DAYS" } } ], "ProcessTerminatedAt" : [ { "Start" : "string" , "End" : "string" , "DateRange" : { "Value" : 123 , "Unit" : "DAYS" } } ], "ThreatIntelIndicatorType" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ThreatIntelIndicatorValue" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ThreatIntelIndicatorCategory" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ThreatIntelIndicatorLastObservedAt" : [ { "Start" : "string" , "End" : "string" , "DateRange" : { "Value" : 123 , "Unit" : "DAYS" } } ], "ThreatIntelIndicatorSource" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ThreatIntelIndicatorSourceUrl" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceType" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceId" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourcePartition" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceRegion" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceTags" : [ { "Key" : "string" , "Value" : "string" , "Comparison" : "EQUALS" "NOT EQUALS" } ], "ResourceAwsEc2InstanceType" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceAwsEc2InstanceImageId" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceAwsEc2InstanceIpV4Addresses" : [ { "Cidr" : "string" } ], "ResourceAwsEc2InstanceIpV6Addresses" : [ { "Cidr" : "string" } ], "ResourceAwsEc2InstanceKeyName" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceAwsEc2InstanceIamInstanceProfileArn" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceAwsEc2InstanceVpcId" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceAwsEc2InstanceSubnetId" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceAwsEc2InstanceLaunchedAt" : [ { "Start" : "string" , "End" : "string" , "DateRange" : { "Value" : 123 , "Unit" : "DAYS" } } ], "ResourceAwsS3BucketOwnerId" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceAwsS3BucketOwnerName" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceAwsIamAccessKeyUserName" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceAwsIamAccessKeyStatus" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceAwsIamAccessKeyCreatedAt" : [ { "Start" : "string" , "End" : "string" , "DateRange" : { "Value" : 123 , "Unit" : "DAYS" } } ], "ResourceContainerName" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceContainerImageId" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceContainerImageName" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "ResourceContainerLaunchedAt" : [ { "Start" : "string" , "End" : "string" , "DateRange" : { "Value" : 123 , "Unit" : "DAYS" } } ], "ResourceDetailsOther" : [ { "Key" : "string" , "Value" : "string" , "Comparison" : "EQUALS" "NOT EQUALS" } ], "ComplianceStatus" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "VerificationState" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "WorkflowState" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "WorkflowStatus" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "RecordState" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "RelatedFindingsProductArn" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "RelatedFindingsId" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "NoteText" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "NoteUpdatedAt" : [ { "Start" : "string" , "End" : "string" , "DateRange" : { "Value" : 123 , "Unit" : "DAYS" } } ], "NoteUpdatedBy" : [ { "Value" : "string" , "Comparison" : "EQUALS" "PREFIX" "NOT EQUALS" "PREFIX NOT EQUALS" } ], "Keyword" : [ { "Value" : "string" } ] } An example of a filter that returns only findings with the critical severity is as follows: { "SeverityLabel" : [ { "Value" : "CRITICAL" , "Comparison" : "EQUALS" } ] } Actions To function properly, the AWS Security Hub actions require you to configure specific permissions.
- To configure permissions that are required for the AWS Security Hub integration, and set the custom policy, use the following code: { "Sid" : "SecurityHubServiceRolePermissions" , "Effect" : "Allow" , "Action" : [ "securityhub:GetMasterAccount" , "securityhub:GetInsightResults" , "securityhub:CreateInsight" , "securityhub:UpdateInsight" , "securityhub:BatchUpdateFindings" , "securityhub:GetFindings" , "securityhub:GetInsight" , "securityhub:DescribeHub" , ], "Resource" : " " } For more information about configuring permissions, see AWS managed policy: AWSSecurityHubServiceRolePolicy in AWS documentation.
- Action outputs The Update Finding action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Not available Output messages Available Script result Available Output messages The Update Finding action can return the following output messages: Output message Message description Successfully updated finding with ID ' FINDING ID ' and Product ARN ' ARN ' in AWS Security Hub.

