---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.799Z"
product_name: "Policy Intelligence"
product_slug: "policy-intelligence"
feature_name: "Policy Troubleshooter for deny policies"
feature_slug: "policy-troubleshooter-for-deny-policies"
latest_feature_date: "2023-07-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview"
  - "https://docs.cloud.google.com/policy-intelligence/docs/analyze-iam-policies"
  - "https://docs.cloud.google.com/policy-intelligence/docs/deny-simulator-overview"
  - "https://docs.cloud.google.com/policy-intelligence/docs/analyze-organization-policies"
keywords:
  - "policy"
  - "troubleshooter"
  - "for"
  - "deny"
  - "policies"
  - "can"
  - "analyze"
---

# Policy Troubleshooter for deny policies

Product: Policy Intelligence
Coverage: MEDIUM

## Step 02 Summary

Policy Troubleshooter can analyze deny policies.

## Extended Definition

Policy Troubleshooter can analyze deny policies.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview](https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview)
- [https://docs.cloud.google.com/policy-intelligence/docs/analyze-iam-policies](https://docs.cloud.google.com/policy-intelligence/docs/analyze-iam-policies)
- [https://docs.cloud.google.com/policy-intelligence/docs/deny-simulator-overview](https://docs.cloud.google.com/policy-intelligence/docs/deny-simulator-overview)
- [https://docs.cloud.google.com/policy-intelligence/docs/analyze-organization-policies](https://docs.cloud.google.com/policy-intelligence/docs/analyze-organization-policies)

## Supporting Pages

### "Policy Analyzer for allow policies \_|\_ Policy Intelligence \_|\_ Google\

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview](https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview)
- Source ID: `site-docs-root`
- Final score: 274
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Policy Analyzer for allow policies doesn't support the following forms of access control: IAM deny policies IAM principal access boundary policies Google Kubernetes Engine role-based access control Cloud Storage access control lists Cloud Storage public access prevention Policy Analyzer query results don't account for unsupported policy types.
- Policy Analyzer for allow policies can help you answer questions like these: Who can access this IAM service account?
- For example, imagine you're trying to find out who can access an IAM service account: If you scope the query to a project, Policy Analyzer analyzes the allow policy of the service account and the allow policy of the project.
- Policy Analyzer for allow policies lets you find out which principals (for example, users, service accounts, groups, and domains) have what access to which Google Cloud resources based on your IAM allow policies .

### Analyze allow policies \_|\_ Policy Intelligence \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/analyze-iam-policies](https://docs.cloud.google.com/policy-intelligence/docs/analyze-iam-policies)
- Source ID: `site-iam-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required IAM roles To get the permissions that you need to analyze an allow policy, ask your administrator to grant you the following IAM roles on the project, folder, or organization that you will scope your query to: Cloud Asset Viewer ( roles/cloudasset.viewer ) To analyze policies with custom IAM roles : Role Viewer ( roles/iam.roleViewer ) To use the Google Cloud CLI to analyze policies: Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- This page shows how to use Policy Analyzer for allow policies to find out which principals (users, service accounts, groups, and domains), have what access to which Google Cloud resources.
- If you want to export the results for further analysis, you can use AnalyzeIamPolicyLongrunning to write query results to BigQuery or Cloud Storage .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to analyze an allow policy: cloudasset.assets.analyzeIamPolicy cloudasset.assets.searchAllResources cloudasset.assets.searchAllIamPolicies To analyze policies with custom IAM roles: iam.roles.get To use the Google Cloud CLI to analyze policies: serviceusage.services.use You might also be able to get these permissions with custom roles or other predefined roles .

### "Policy Simulator for deny policies \_|\_ Policy Intelligence \_|\_ Google\

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/deny-simulator-overview](https://docs.cloud.google.com/policy-intelligence/docs/deny-simulator-overview)
- Source ID: `site-iam-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported principal types Policy Simulator for deny policies only reviews access logs for the following types of principals: Google Workspace Accounts Service accounts Service account principal sets for projects, folders, and organizations Service agents Service agent principal sets for projects, folders, and organizations When simulating deny policies, Policy Simulator doesn't review access logs for any other principal types, including those based on federated identities in a workload identity pool.
- To learn how to simulate other policy types, see the following: Policy Simulator for organization policies Policy Simulator for allow policies Policy Simulator for principal access boundary policies How Policy Simulator for deny policies works Policy Simulator for deny policies helps you determine whether a change to a deny policy will block access that your principals are using.
- Home Documentation Security Policy Intelligence Guides Send feedback Policy Simulator for deny policies Stay organized with collections Save and categorize content based on your preferences.
- Policy Simulator for deny policies lets you see how a change to an IAM deny policy might affect a principal's access before you commit to making the change.

### "Analyze organization policies \_|\_ Policy Intelligence \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/analyze-organization-policies](https://docs.cloud.google.com/policy-intelligence/docs/analyze-organization-policies)
- Source ID: `site-iam-reference`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The JSON response is similar to the following: Sample JSON response { "governedAssets" : [ { "governedResource" : { "fullResourceName" : "//container.googleapis.com/projects/opa-test-project-2/zones/us-central1-c/clusters/opa-test-project-2-cluster-1/nodePools/default-pool" , "parent" : "//container.googleapis.com/projects/opa-test-project-2/zones/us-central1-c/clusters/opa-test-project-2-cluster-1" , "project" : "projects/892625391619" , "folders" : [ "folders/513502730678" , "folders/666681422980" ], "organization" : "organizations/474566717491" }, "consolidatedPolicy" : { "attachedResource" : "//cloudresourcemanager.googleapis.com/projects/opa-test-project-2" , "rules" : [ { "enforce" : false } ], "appliedResource" : "//cloudresourcemanager.googleapis.com/projects/opa-test-project-2" }, "policyBundle" : [ { "attachedResource" : "//cloudresourcemanager.googleapis.com/projects/opa-test-project-2" , "reset" : true , "appliedResource" : "//cloudresourcemanager.googleapis.com/projects/opa-test-project-2" }, { "attachedResource" : "//cloudresourcemanager.googleapis.com/organizations/474566717491" , "rules" : [ { "enforce" : true } ], "appliedResource" : "//cloudresourcemanager.googleapis.com/organizations/474566717491" } ] }, { "governedResource" : { "fullResourceName" : "//container.googleapis.com/projects/project2-244918/zones/us-central1-c/clusters/cluster-1/nodePools/default-pool" , "parent" : "//container.googleapis.com/projects/project2-244918/zones/us-central1-c/clusters/cluster-1" , "project" : "projects/761097189269" , "folders" : [ "folders/800636178739" , "folders/408342778736" ], "organization" : "organizations/474566717491" }, "consolidatedPolicy" : { "attachedResource" : "//cloudresourcemanager.googleapis.com/projects/project2-244918" , "rules" : [ { "enforce" : false } ], "appliedResource" : "//cloudresourcemanager.googleapis.com/projects/project2-244918" }, "policyBundle" : [ { "attachedResource" : "//cloudresourcemanager.googleapis.com/projects/project2-244918" , "rules" : [ { "enforce" : false } ], "appliedResource" : "//cloudresourcemanager.googleapis.com/projects/project2-244918" }, { "attachedResource" : "//cloudresourcemanager.googleapis.com/folders/408342778736" , "rules" : [ { "enforce" : false , "condition" : { "expression" : "resource.matchTag(\"474566717491/env\", \"prod\")" , "title" : "cond-title1" , "description" : "cond-desc1" } }, { "enforce" : true } ], "appliedResource" : "//cloudresourcemanager.googleapis.com/folders/408342778736" }, { "attachedResource" : "//cloudresourcemanager.googleapis.com/organizations/474566717491" , "rules" : [ { "enforce" : true } ], "appliedResource" : "//cloudresourcemanager.googleapis.com/organizations/474566717491" } ] } ] "constraint" : { "customConstraint" : { "name" : "organizations/474566717491/customConstraints/custom.disableGkeAutoUpgrade" , "resourceTypes" : [ "container.googleapis.com/NodePool" ], "methodTypes" : [ "CREATE" , "UPDATE" ], "condition" : "resource.management.autoUpgrade == false" , "actionType" : "ALLOW" , "displayName" : "Disable GKE auto upgrade" , "description" : "Only allow GKE NodePool resource create or updates if AutoUpgrade is not enabled" } } } Visualize inheritance If you have an organization-level activation of the Premium or Enterprise tier of Security Command Center , you can visualize the inheritance of organization policies you have analyzed using the Google Cloud console.
- Using Policy Analyzer for Organization Policy, you can create an analysis query to get information on both custom and predefined organization policies.
- You can use Policy Analyzer to return a list of all containers that have organization policies with a particular constraint enforced on them.
- You can use Policy Analyzer to return a list of all assets that have organization policies with a particular constraint enforced on them.

