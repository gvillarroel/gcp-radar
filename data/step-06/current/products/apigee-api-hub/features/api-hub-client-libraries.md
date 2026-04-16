---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.545Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "API hub client libraries"
feature_slug: "api-hub-client-libraries"
latest_feature_date: "2024-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/libraries"
  - "https://docs.cloud.google.com/apigee/docs/release/known-issues"
  - "https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway"
keywords:
  - "programming"
  - "libraries"
  - "popular"
  - "client"
  - "provides"
  - "multiple"
---

# API hub client libraries

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

API hub now provides client libraries for multiple popular programming languages.

## Extended Definition

API hub now provides client libraries for multiple popular programming languages.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/libraries](https://docs.cloud.google.com/apigee/docs/apihub/libraries)
- [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)

## Supporting Pages

### API hub client libraries \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/libraries](https://docs.cloud.google.com/apigee/docs/apihub/libraries)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Supported languages API hub provides client libraries and guides for the following languages: C# Go Java Node.js PHP Python Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- While you can use API hub by making direct REST over HTTP requests, we provide client libraries for several popular languages.
- Home Documentation Application development Apigee Guides Send feedback API hub client libraries Stay organized with collections Save and categorize content based on your preferences.

### Apigee known issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Metric Description apigee.googleapis.com/proxy/request count Number of requests to the Apigee proxy since the last sample was recorded. apigee.googleapis.com/proxy/response count Number of responses sent by the Apigee API proxy. apigee.googleapis.com/proxy/latencies Distribution of latencies, which are calculated from the time the request was received by the Apigee proxy to the time the response was sent from the Apigee proxy to the client. apigee.googleapis.com/target/request count Number of requests sent to the Apigee target since the last sample was recorded. apigee.googleapis.com/target/response count Number of responses received from the Apigee target since the last sample was recorded. apigee.googleapis.com/target/latencies Distribution of latencies, which are calculated from the time the request was sent to the Apigee target to the time the response was received by the Apigee proxy.
- Delete CRDs List the istio.io CRDs in your cluster to a CSV file: kubectl get crd -o custom-columns=NAME:metadata.name grep istio.io > istio-crd.csv Optional: Save the CRDs locally in case you need to recreate them: kubectl get crd $(cat istio-crd.csv) -o yaml > istio-crd.yaml Delete the istio.io CRDs: Dry run: kubectl delete crd $(cat istio-crd.csv) --dry-run=client Tip: You can use either --dry-run=client or --dry-run=server .
- 300660653 Apigee FIXED An error should be, but is not, returned when deploying proxies with the same path to multiple environments that are attached to the same instance and environment group Deploying proxies with the same path to multiple environments that are attached to the same instance and environment group is not allowed and should return a warning message about a base path conflict.
- The error appears similar to the following: { "fault" : { "faultstring" : "Failed to execute JavaCallout. org/apache/commons/lang/StringUtils" , "detail" : { "errorcode" : "steps.javacallout.ExecutionError" }}} This error occurs when a Java Callout policy incorrectly depends on libraries intended for Apigee's internal use instead of providing its own dependencies.

### "Advanced API Security for multiple Apigee organizations and gateways \_\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- IAM roles and permissions To use Advanced API Security, you must have the following IAM roles and permissions: IAM roles Permissions Description API Security Admin ( roles/apigee.securityAdmin ) apigee.securityProfilesV2.create apigee.securityProfilesV2.delete apigee.securityProfilesV2.update apigee.securityProfilesV2.get apigee.securityProfilesV2.list Provides permissions to create, update, delete, get, and list security profiles. apigee.securityAssessmentResult.compute Provides permissions to compute security assessment results. apigee.securityMonitoringConditions.create apigee.securityMonitoringConditions.delete apigee.securityMonitoringConditions.get apigee.securityMonitoringConditions.list apigee.securityMonitoringConditions.update Provides permissions to create, delete, get, list, and update security monitoring conditions.
- To configure and use security monitoring conditions and alerts in Cloud Monitoring: Action(s) Required roles or steps List and view security monitoring condition metrics Monitoring Admin ( roles/monitoring.admin ) Monitoring Editor ( roles/monitoring.editor ) Create, update, or delete monitoring alerts See Required roles (for security alerts) View monitoring alerts See Incidents for metric-based alerting policies: Before you begin For information about granting IAM roles, see Grant or revoke multiple IAM roles using the Google Cloud console .
- API Security Viewer ( roles/apigee.securityViewer ) apigee.securityProfilesV2.get apigee.securityProfilesV2.list Provides permissions to get, list, and view security profiles. apigee.securityAssessmentResult.compute Provides permissions to compute security assessment results. apigee.securityMonitoringConditions.get apigee.securityMonitoringConditions.list Provides permissions to get and list security monitoring conditions.
- Key capabilities Advanced API Security offers the following capabilities when you enable it for your API hub instance: Risk assessment across multiple Apigee organizations, environments, and gateways: assess the security scores for a specific API or for all APIs across all of its deployments in multiple Apigee organizations, environments, and gateways to get a comprehensive understanding of its risk profile.

