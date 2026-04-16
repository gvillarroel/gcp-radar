---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.504Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "Violation analyzer"
feature_slug: "violation-analyzer"
latest_feature_date: "2025-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial"
keywords:
  - "violation"
  - "analyzer"
  - "the"
  - "vpc"
  - "controls"
  - "diagnoses"
  - "access"
  - "denial"
---

# Violation analyzer

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

The VPC Service Controls violation analyzer diagnoses access denial events and generates evaluation reports to help troubleshoot denials.

## Extended Definition

The VPC Service Controls violation analyzer diagnoses access denial events and generates evaluation reports to help troubleshoot denials.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer)
- [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard)
- [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter)
- [https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial](https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial)

## Supporting Pages

### "Diagnose an access denial in violation analyzer \_|\_ VPC Service Controls\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer)
- Source ID: `site-docs-reference-2`
- Final score: 370
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to use the violation analyzer, ask your administrator to grant you the following IAM roles: To diagnose an access denial event using the violation analyzer: Access Context Manager Reader ( roles/accesscontextmanager.policyReader ) on your organization-level access policy To fetch the troubleshooting token from Cloud Audit Logs: Logs Viewer ( roles/logging.viewer ) on the projects that have VPC Service Controls audit logs For more information about granting roles, see Manage access to projects, folders, and organizations .
- This page describes how to use the VPC Service Controls violation analyzer to understand and diagnose access denials from service perimeters in your organization.
- VPC Service Controls opens the violation analyzer and displays the troubleshooting result of the access denial.
- Use the VPC Service Controls page To access the violation analyzer from the VPC Service Controls page, do the following: In the Google Cloud console navigation menu, click Security , and then click VPC Service Controls .

### "Set up and view the violation dashboard \_|\_ VPC Service Controls \_|\_\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard)
- Source ID: `site-docs-reference-2`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how to set up and use the VPC Service Controls violation dashboard to view the details about access denials by service perimeters in your organization.
- What's next VPC Service Controls audit logging Learn how to diagnose an access denial in violation analyzer and view its comprehensive evaluation report.
- To get the permissions that you need to view the violation dashboard, ask your administrator to grant you the following IAM roles on the project in which you configure a log bucket during the violation dashboard setup: Logs View Accessor ( roles/logging.viewAccessor ) VPC Service Controls Troubleshooter Viewer ( roles/accesscontextmanager.vpcScTroubleshooterViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Diagnose an access denial and view the classic report Troubleshoot common VPC Service Controls issues with Google Cloud services Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Diagnose an access denial and view the classic report \_|\_ VPC Service\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter)
- Source ID: `site-docs-reference-2`
- Final score: 304
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the VPC Service Controls page To access the violation analyzer from the VPC Service Controls page, do the following: In the Google Cloud console navigation menu, click Security , and then click VPC Service Controls .
- Use the Logs Explorer By using the Logs Explorer , you can move directly from a log entry for a VPC Service Controls denial to the violation analyzer.
- You can access the violation analyzer using either the Logs Explorer or the VPC Service Controls page.
- You can use the VPC Service Controls violation analyzer to diagnose denials from a service perimeter.

### "Protect Compute Engine using a VPC Service Controls perimeter \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial](https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial)
- Source ID: `site-docs-reference`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The VPC Service Controls violation analyzer page opens.
- View audit logs Find the unique ID of the VPC Service Controls violation in the My-Project-2 project's audit logs: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- If the caller IP address is missing or appears as an internal IP address in the log, then this violation can be due to a Google Cloud service that is not supported by VPC Service Controls .
- You should see that VPC Service Controls denies your request to access Compute Engine because the MyFirstPerimeter perimeter protects My-Project-2 and the Compute Engine API.

