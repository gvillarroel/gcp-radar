---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.795Z"
product_name: "Policy Intelligence"
product_slug: "policy-intelligence"
feature_name: "Policy Troubleshooter access issue remediation"
feature_slug: "policy-troubleshooter-access-issue-remediation"
latest_feature_date: "2025-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/policy-intelligence/docs/access-troubleshooters"
  - "https://docs.cloud.google.com/policy-intelligence/docs/overview"
  - "https://docs.cloud.google.com/policy-intelligence/docs/secure-apis-vpc-sc"
  - "https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-insights"
keywords:
  - "policy"
  - "troubleshooter"
  - "access"
  - "issue"
  - "remediation"
  - "can"
  - "help"
  - "remediate"
---

# Policy Troubleshooter access issue remediation

Product: Policy Intelligence
Coverage: MEDIUM

## Step 02 Summary

Policy Troubleshooter can help remediate access issues.

## Extended Definition

Policy Troubleshooter can help remediate access issues.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/policy-intelligence/docs/access-troubleshooters](https://docs.cloud.google.com/policy-intelligence/docs/access-troubleshooters)
- [https://docs.cloud.google.com/policy-intelligence/docs/overview](https://docs.cloud.google.com/policy-intelligence/docs/overview)
- [https://docs.cloud.google.com/policy-intelligence/docs/secure-apis-vpc-sc](https://docs.cloud.google.com/policy-intelligence/docs/secure-apis-vpc-sc)
- [https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-insights](https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-insights)

## Supporting Pages

### "Access-related troubleshooters \_|\_ Policy Intelligence \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/access-troubleshooters](https://docs.cloud.google.com/policy-intelligence/docs/access-troubleshooters)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To help you understand and remedy access issues, Policy Intelligence offers the following troubleshooters: Policy Troubleshooter VPC Service Controls violation analyzer Policy Troubleshooter for Chrome Enterprise Premium Policy Troubleshooter Preview — Troubleshooting principal access boundary policies This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Policy Troubleshooter helps you understand whether a principal can access a resource.
- Policy Troubleshooter for Chrome Enterprise Premium The Policy Troubleshooter for Chrome Enterprise Premium helps organizations using Chrome Enterprise Premium understand why an end user is denied access.
- Given a principal, a resource, and a permission, Policy Troubleshooter examines the allow policies, deny policies, and principal access boundary (PAB) policies that impact the principal's access.

### Policy Intelligence overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/overview](https://docs.cloud.google.com/policy-intelligence/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Troubleshoot access issues To help you understand and remedy access issues, Policy Intelligence offers the following troubleshooters: Policy Troubleshooter for Identity and Access Management VPC Service Controls troubleshooter Policy Troubleshooter for Chrome Enterprise Premium Access troubleshooters help answer "why" questions like the following: "Why does this user have the bigquery.datasets.create permission on this BigQuery dataset?" "Why isn't this user able to view the allow policy of this Cloud Storage bucket?" To learn more about these troubleshooters, see Access-related troubleshooters .
- Policy Analyzer helps you answer questions like the following: "Who has any access to this IAM service account?" "What roles and permissions does this user have on this BigQuery dataset?" "Which BigQuery datasets does this user have permission to read?" By helping you answer these questions, Policy Analyzer lets you effectively administer access.
- Understand policies and usage There are several Policy Intelligence tools that help you understand what access your policies allow and how the policies are being used.
- Role recommendations suggest actions that you can take to remediate the issues identified by lateral movement insights.

### "Help secure Policy Intelligence APIs with VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/secure-apis-vpc-sc](https://docs.cloud.google.com/policy-intelligence/docs/secure-apis-vpc-sc)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use VPC Service Controls to help secure the following Policy Intelligence APIs: Policy Troubleshooter API Policy Simulator API Help secure the Policy Troubleshooter API Preview — Securing the Policy Troubleshooter API with VPC Service Controls This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- When you restrict the Policy Troubleshooter API with a perimeter, principals can troubleshoot IAM policies only if all resources involved in the request are in the same perimeter.
- Help secure the Policy Simulator API You can restrict the Policy Simulator API with a perimeter when simulating organization policies or allow and deny policies.
- You can then define security policies that help prevent access to supported services from outside of the perimeter.

### "Review organization policy insights for projects, folders, and organizations\

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-insights](https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-insights)
- Source ID: `site-iam-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Organization policy recommendations suggest actions that you can take to remediate the issues identified by organization policy insights.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://recommender.googleapis.com/v1/ RESOURCE TYPE / RESOURCE ID /locations/global/insightTypes/google.orgpolicy.policy.Insight/insights/ INSIGHT ID :markAccepted" Select-Object -Expand Content The response contains the insight, now with the state of ACCEPTED : [ { "associatedRecommendations": [ { "recommendation": "projects/123456789012/locations/global/recommenders/google.orgpolicy.policy.Recommender/recommendations/fb927dc1-9695-4436-0000-f0f285007c0f" } ], "category": "SECURITY", "content": { "consolidatedPolicy": { "inheritFromParent": false, "name": "projects/123456789012/policies/iam.managed.disableServiceAccountKeyCreation", "policyRules": { "rules": [ { "enforce": false } ] }, "reset": false }, "constraint": { "id": "constraints/iam.managed.disableServiceAccountKeyCreation", "name": "Disable service account key creation" }, "evaluatedResources": [ { "numOfResources": "1", "resourceType": "cloudresourcemanager.googleapis.com/Project" }, { "numOfResources": "2", "resourceType": "iam.googleapis.com/ServiceAccountKey" } ], "violations": [ { "numOfResources": "0", "resourceType": "iam.googleapis.com/ServiceAccountKey" }, { "numOfResources": "0", "resourceType": "cloudresourcemanager.googleapis.com/Project" } ] }, "description": "Scanned 2 resources and found 0 violations for constraints/iam.managed.disableServiceAccountKeyCreation.", "etag": "\"9a1ad019022f9f56\"", "insightSubtype": "RESOURCE VIOLATION DISABLE SERVICE ACCOUNT KEY CREATION", "lastRefreshTime": "2024-12-03T08:00:00Z", "name": "projects/123456789012/locations/global/insightTypes/google.orgpolicy.policy.Insight/insights/66d543f3-845d-49d6-a26b-80d84804d8a8", "observationPeriod": "86400s", "severity": "HIGH", "stateInfo": { "state": "ACCEPTED", "stateMetadata": { "reviewedBy": "alice", "priority": "high" } }, "targetResources": [ "//cloudresourcemanager.googleapis.com/projects/123456789012" ] } ] To learn more about the state info of an insight, see Review organization policy insights on this page.
- Organization policy insights can help you identify resources that are not protected by organization policies.
- For example, "d3cdec23cc712bd0" . gcloud recommender insights mark-accepted INSIGHT ID \ --insight-type = google.orgpolicy.policy.Insight \ -- RESOURCE TYPE = RESOURCE ID \ --location = global \ --etag = ETAG The output shows the insight, now with the state of ACCEPTED : associatedRecommendations : - recommendation : folders/234567890123/locations/global/recommenders/google.orgpolicy.policy.Recommender/recommendations/fb927dc1-9695-4436-0000-f0f285007c0f category : SECURITY content : consolidatedPolicy : inheritFromParent : false name : 'projects/123456789012/policies/iam.managed.disableServiceAccountKeyCreation' policyRules : rules : [ "enforce" : false ] reset : false constraint : { id : constraints/iam.managed.disableServiceAccountKeyCreation name : Disable service account key creation } evaluatedResources : - numOfResources : '0' resourceType : iam.googleapis.com/ServiceAccountKey - numOfResources : '1' resourceType : cloudresourcemanager.googleapis.com/Folder - numOfResources : '1' resourceType : cloudresourcemanager.googleapis.com/Project violations : - numOfResources : '0' resourceType : iam.googleapis.com/ServiceAccountKey - numOfResources : '0' resourceType : cloudresourcemanager.googleapis.com/Folder - numOfResources : '0' resourceType : cloudresourcemanager.googleapis.com/Project description : Scanned 2 resources and found 0 violations for constraints/iam.managed.disableServiceAccountKeyUpload. etag : '"2cbb89b22fe2dab7"' insightSubtype : RESOURCE VIOLATION DISABLE SERVICE ACCOUNT KEY UPLOAD lastRefreshTime : '2024-12-10T08:00:00Z' name : folders/234567890123/locations/global/insightTypes/google.orgpolicy.policy.Insight/insights/66d543f3-845d-49d6-a26b-80d84804d8a8 observationPeriod : 86400s severity : HIGH stateInfo : state : ACCEPTED targetResources : - //cloudresourcemanager.googleapis.com/folders/234567890123 To learn more about the state info of an insight, see Review organization policy insights on this page.

