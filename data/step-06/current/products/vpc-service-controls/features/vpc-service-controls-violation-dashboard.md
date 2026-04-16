---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.510Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "VPC Service Controls violation dashboard"
feature_slug: "vpc-service-controls-violation-dashboard"
latest_feature_date: "2025-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-products"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter"
keywords:
  - "vpc"
  - "controls"
  - "violation"
  - "dashboard"
  - "the"
  - "provides"
  - "an"
  - "aggregated"
---

# VPC Service Controls violation dashboard

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

The VPC Service Controls violation dashboard provides an aggregated view of access denials by service perimeter and includes violation analytics charts.

## Extended Definition

The VPC Service Controls violation dashboard provides an aggregated view of access denials by service perimeter and includes violation analytics charts.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard)
- [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer)
- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter)

## Supporting Pages

### "Set up and view the violation dashboard \_|\_ VPC Service Controls \_|\_\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard)
- Source ID: `site-docs-reference-2`
- Final score: 347
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To get the permissions that you need to view the violation dashboard, ask your administrator to grant you the following IAM roles on the project in which you configure a log bucket during the violation dashboard setup: Logs View Accessor ( roles/logging.viewAccessor ) VPC Service Controls Troubleshooter Viewer ( roles/accesscontextmanager.vpcScTroubleshooterViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Cost When you use the VPC Service Controls violation dashboard, you need to consider the costs that you incur for using the following billable components of Google Cloud: Because you deploy Cloud Logging resources in your organization while setting up the violation dashboard, you incur cost for using these resources.
- Limitations VPC Service Controls doesn't backfill the audit logs from other project-level buckets: If you create a new log bucket while setting up the violation dashboard, VPC Service Controls doesn't backfill the existing logs from other projects within your organization into the newly created log bucket.
- Set up the dashboard To set up the violation dashboard, you need to configure a log bucket to aggregate the VPC Service Controls audit logs and create an organization-level Log Router sink that will route all the VPC Service Controls audit logs to the log bucket.

### "Diagnose an access denial in violation analyzer \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer)
- Source ID: `site-docs-reference-2`
- Final score: 337
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you set up the VPC Service Controls violation dashboard in your organization, the violation dashboard displays access denials by your service perimeters, including the troubleshooting tokens.
- Required roles To get the permissions that you need to use the violation analyzer, ask your administrator to grant you the following IAM roles: To diagnose an access denial event using the violation analyzer: Access Context Manager Reader ( roles/accesscontextmanager.policyReader ) on your organization-level access policy To fetch the troubleshooting token from Cloud Audit Logs: Logs Viewer ( roles/logging.viewer ) on the projects that have VPC Service Controls audit logs For more information about granting roles, see Manage access to projects, folders, and organizations .
- Use the VPC Service Controls page To access the violation analyzer from the VPC Service Controls page, do the following: In the Google Cloud console navigation menu, click Security , and then click VPC Service Controls .
- This page describes how to use the VPC Service Controls violation analyzer to understand and diagnose access denials from service perimeters in your organization.

### "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- Source ID: `site-docs-reference-2`
- Final score: 261
- Re-rank relevance: N/A

Evidence snippets:
- Limitations If you use both Shared VPC and VPC Service Controls, you must have the host project that provides the network and the service project that contains the Parallelstore instance inside the same perimeter for the Parallelstore instance to function correctly.
- If you use both Shared VPC and VPC Service Controls, you must have the host project that provides the network and the service project that contains the Filestore instance inside the same perimeter for the Filestore instance to function correctly.
- If you use both Shared VPC and VPC Service Controls, you must have the host project that provides the network and the service project that contains the Redis instance inside the same perimeter in order for Redis requests to succeed.
- If you use both Shared VPC and VPC Service Controls, you must have the host project that provides the network and the service project that contains the Redis instance inside the same perimeter in order for Redis requests to succeed.

### "Diagnose an access denial and view the classic report \_|\_ VPC Service\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter)
- Source ID: `site-docs-reference-2`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin To troubleshoot a VPC Service Controls violation, make sure that you have the VPC Service Controls Troubleshooter Viewer IAM role ( roles/accesscontextmanager.vpcScTroubleshooterViewer ) at the organization level.
- Use the VPC Service Controls page To access the violation analyzer from the VPC Service Controls page, do the following: In the Google Cloud console navigation menu, click Security , and then click VPC Service Controls .
- Use the Logs Explorer By using the Logs Explorer , you can move directly from a log entry for a VPC Service Controls denial to the violation analyzer.
- This page describes how you can use the VPC Service Controls violation analyzer to understand and diagnose issues that VPC Service Controls logs.

