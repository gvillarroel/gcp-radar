---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.525Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Supported services metadata retrieval"
feature_slug: "supported-services-metadata-retrieval"
latest_feature_date: "2024-07-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-products"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/enable"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging"
keywords:
  - "supported"
  - "services"
  - "metadata"
  - "retrieval"
  - "lets"
  - "users"
  - "programmatically"
  - "retrieve"
---

# Supported services metadata retrieval

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

Lets users programmatically retrieve VPC Service Controls supported services and the associated supported methods and permissions.

## Extended Definition

Lets users programmatically retrieve VPC Service Controls supported services and the associated supported methods and permissions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors](https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors)
- [https://docs.cloud.google.com/vpc-service-controls/docs/enable](https://docs.cloud.google.com/vpc-service-controls/docs/enable)
- [https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging](https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging)

## Supporting Pages

### "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- Source ID: `site-docs-reference-2`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- List supported methods for a service To retrieve the list of methods and permissions supported by VPC Service Controls for a service, run the following command: gcloud access-context-manager supported-services describe SERVICE ADDRESS Replace SERVICE ADDRESS with the service name of the product or service.
- List all supported services To retrieve the complete list of all VPC Service Controls supported products and services, run the following command: gcloud access-context-manager supported-services list You get a response with a list of products and services.
- You get a response with a list of methods and permissions. availableOnRestrictedVip: RESTRICTED VIP STATUS knownLimitations: LIMITATIONS STATUS name: SERVICE ADDRESS serviceSupportStage: SERVICE STATUS supportedMethods: METHODS LIST . . . title: SERVICE NAME In this response, METHODS LIST lists all the methods and permissions supported by VPC Service Controls for the specified service.
- Service name cloudlocationfinder.googleapis.com Details Cloud Location Finder lets you identify and filter cloud locations in regions and zones across Google Cloud, Google Distributed Cloud, Microsoft Azure, Amazon Web Services, and Oracle Cloud Infrastructure based on proximity, geographic location, and carbon footprint.

### "Retrieve VPC Service Controls errors from audit logs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors](https://docs.cloud.google.com/vpc-service-controls/docs/retrieve-troubleshoot-errors)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To retrieve all VPC Service Controls errors that have occurred in the past week, run the following command: gcloud logging read \ 'protoPayload.metadata.@type:"type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata"' \ --freshness = 7d To retrieve logs that were generated between specific dates, run the following command: gcloud logging read \ 'protoPayload.metadata.@type:"type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata" AND timestamp>=" START DATETIME " AND timestamp<=" END DATETIME "' START DATETIME and END DATETIME are formatted date and time strings.
- To obtain VPC Service Controls logs for a different period, use one of the following commands: To retrieve logs that were generated within a certain period from the current date, run the following command: gcloud logging read \ 'protoPayload.metadata.@type:"type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata"' \ --freshness = DURATION DURATION is a formatted period of time.
- For example, to obtain all VPC Service Controls errors that have occurred between March 22, 2019 and March 26, 2019: gcloud logging read \ 'protoPayload.metadata.@type:"type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata" AND timestamp>="2019-03-22T23:59:59Z" AND timestamp<="2019-03-26T00:00:00Z"' What's next Learn how to diagnose an access denial in violation analyzer and view its comprehensive evaluation report.
- Optional: To find the VPC Service Controls errors that have occurred during a different period, use the time-range selector menu. gcloud To obtain the last 24 hours of VPC Service Controls errors, run the following command: gcloud logging read 'protoPayload.metadata.@type:"type.googleapis.com/google.cloud.audit.VpcServiceControlAuditMetadata"' By default, the read command is limited to the last 24 hours.

### Best practices for enabling VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/enable](https://docs.cloud.google.com/vpc-service-controls/docs/enable)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- To create a log sink that includes all relevant VPC Service Controls log messages, use the following filter: logName = "projects/ $PROJECT /logs/cloudaudit.googleapis.com%2Fpolicy" For maximum security, disallow access to unsupported services.
- The following are some common access patterns: Data access patterns : Services outside the perimeter store or retrieve data that resides in the perimeter.
- In the VPC Service Controls service perimeter , under Restricted Services > Services to protect , add all supported services.
- The following example is a BigQuery query that returns all violation details: SELECT receiveTimestamp , # time of violation Resource . labels . service , # protected Google Cloud service being blocked protopayload auditlog . methodName , # method name being called resource . labels . project id as PROJECT , # protected project blocking the call protopayload auditlog . authenticationInfo . principalEmail , # caller identity protopayload auditlog . requestMetadata . callerIp , # caller IP JSON EXTRACT ( protopayload auditlog . metadataJson , '$.dryRun' ) as DRYRUN , # dry - run indicator JSON EXTRACT ( protopayload auditlog . metadataJson , '$.violationReason' ) as REASON , # reason for violation protopayload auditlog . metadataJson , # raw violation entry FROM BQ DATASOURCE NAME . cloudaudit googleapis com policy where JSON EXTRACT ( protopayload auditlog . metadataJson , '$.dryRun' ) = "true" # ensure these are dry - run logs Query relevant violations The following strategies can help you to identify the relevant violations: Add a timestamp qualifier for the time window when each unique application executed their use case: WHERE receiveTimestamp > '2020-07-23 19:53:48.241317 UTC' Add a filter for the naming convention of workload identities or projects: WHERE where resource . labels . project id like '%APPLICATION NAME%' Review violation logs When you review violation logs, determine if the following are true: Is the identity (email) expected to invoke the protected APIs?

### VPC Service Controls audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging](https://docs.cloud.google.com/vpc-service-controls/docs/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Dry run mode for service perimeters . metadata.vpcServiceControlsTroubleshootToken A troubleshooting token that lets you diagnose the violation using the violation analyzer . metadata.vpcServiceControlsUniqueId The Unique Identifier of the VPC Service Controls violation described in the record. metadata.violationReason The reason for the violation.
- Audited operations The following table summarizes which API operations correspond to each audit log type in VPC Service Controls: Audit logs category VPC Service Controls methods Policy Denied audit logs The methods of the services that integrate with VPC Service Controls are supported.
- These access levels might not be specified in the violated perimeter and thus can cause NO MATCHING ACCESS LEVEL violation. metadata.intermediateServices The list of the services involved in the request chain.
- Resource types VPC Service Controls audit logs use the resource types supported by the services that integrate with VPC Service Controls.

