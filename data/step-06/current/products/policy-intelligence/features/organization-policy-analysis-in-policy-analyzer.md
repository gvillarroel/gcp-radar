---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.800Z"
product_name: "Policy Intelligence"
product_slug: "policy-intelligence"
feature_name: "Organization policy analysis in Policy Analyzer"
feature_slug: "organization-policy-analysis-in-policy-analyzer"
latest_feature_date: "2022-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/policy-intelligence/docs/analyze-organization-policies"
  - "https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview"
  - "https://docs.cloud.google.com/policy-intelligence/docs/audit-logging/policyanalyzer-audit-logging"
  - "https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-insights"
keywords:
  - "organization"
  - "policy"
  - "analysis"
  - "in"
  - "analyzer"
  - "can"
  - "analyze"
  - "constraints"
---

# Organization policy analysis in Policy Analyzer

Product: Policy Intelligence
Coverage: MEDIUM

## Step 02 Summary

Policy Analyzer can analyze organization policy constraints and show the resources they affect.

## Extended Definition

Policy Analyzer can analyze organization policy constraints and show the resources they affect.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/policy-intelligence/docs/analyze-organization-policies](https://docs.cloud.google.com/policy-intelligence/docs/analyze-organization-policies)
- [https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview](https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview)
- [https://docs.cloud.google.com/policy-intelligence/docs/audit-logging/policyanalyzer-audit-logging](https://docs.cloud.google.com/policy-intelligence/docs/audit-logging/policyanalyzer-audit-logging)
- [https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-insights](https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-insights)

## Supporting Pages

### "Analyze organization policies \_|\_ Policy Intelligence \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/analyze-organization-policies](https://docs.cloud.google.com/policy-intelligence/docs/analyze-organization-policies)
- Source ID: `site-iam-reference`
- Final score: 330
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom constraints, managed constraints, and the following predefined constraints are supported: constraints/ainotebooks.accessMode constraints/ainotebooks.disableFileDownloads constraints/ainotebooks.disableRootAccess constraints/ainotebooks.disableTerminal constraints/ainotebooks.environmentOptions constraints/ainotebooks.requireAutoUpgradeSchedule constraints/ainotebooks.restrictVpcNetworks constraints/compute.disableGuestAttributesAccess constraints/compute.disableInstanceDataAccessApis constraints/compute.disableNestedVirtualization constraints/compute.disableSerialPortAccess constraints/compute.disableSerialPortLogging constraints/compute.disableVpcExternalIpv6 constraints/compute.requireOsLogin constraints/compute.requireShieldedVm constraints/compute.restrictLoadBalancerCreationForTypes constraints/compute.restrictProtocolForwardingCreationForTypes constraints/compute.restrictXpnProjectLienRemoval constraints/compute.setNewProjectDefaultToZonalDNSOnly constraints/compute.skipDefaultNetworkCreation constraints/compute.trustedImageProjects constraints/compute.vmCanIpForward constraints/compute.vmExternalIpAccess constraints/gcp.detailedAuditLoggingMode constraints/gcp.resourceLocations constraints/iam.allowedPolicyMemberDomains constraints/iam.automaticIamGrantsForDefaultServiceAccounts constraints/iam.disableServiceAccountCreation constraints/iam.disableServiceAccountKeyCreation constraints/iam.disableServiceAccountKeyUpload constraints/iam.restrictCrossProjectServiceAccountLienRemoval constraints/iam.serviceAccountKeyExpiryHours constraints/resourcemanager.accessBoundaries constraints/resourcemanager.allowedExportDestinations constraints/sql.restrictAuthorizedNetworks constraints/sql.restrictNoncompliantDiagnosticDataAccess constraints/sql.restrictNoncompliantResourceCreation constraints/sql.restrictPublicIp constraints/storage.publicAccessPrevention constraints/storage.restrictAuthTypes constraints/storage.uniformBucketLevelAccess Policy Analyzer returns the full name of each asset, the asset's parent in the hierarchy, and any ancestor project, folder, and organization resources above the asset in the hierarchy.
- Using Policy Analyzer for Organization Policy, you can create an analysis query to get information on both custom and predefined organization policies.
- The JSON response is similar to the following: Sample JSON response { "governedAssets" : [ { "governedResource" : { "fullResourceName" : "//container.googleapis.com/projects/opa-test-project-2/zones/us-central1-c/clusters/opa-test-project-2-cluster-1/nodePools/default-pool" , "parent" : "//container.googleapis.com/projects/opa-test-project-2/zones/us-central1-c/clusters/opa-test-project-2-cluster-1" , "project" : "projects/892625391619" , "folders" : [ "folders/513502730678" , "folders/666681422980" ], "organization" : "organizations/474566717491" }, "consolidatedPolicy" : { "attachedResource" : "//cloudresourcemanager.googleapis.com/projects/opa-test-project-2" , "rules" : [ { "enforce" : false } ], "appliedResource" : "//cloudresourcemanager.googleapis.com/projects/opa-test-project-2" }, "policyBundle" : [ { "attachedResource" : "//cloudresourcemanager.googleapis.com/projects/opa-test-project-2" , "reset" : true , "appliedResource" : "//cloudresourcemanager.googleapis.com/projects/opa-test-project-2" }, { "attachedResource" : "//cloudresourcemanager.googleapis.com/organizations/474566717491" , "rules" : [ { "enforce" : true } ], "appliedResource" : "//cloudresourcemanager.googleapis.com/organizations/474566717491" } ] }, { "governedResource" : { "fullResourceName" : "//container.googleapis.com/projects/project2-244918/zones/us-central1-c/clusters/cluster-1/nodePools/default-pool" , "parent" : "//container.googleapis.com/projects/project2-244918/zones/us-central1-c/clusters/cluster-1" , "project" : "projects/761097189269" , "folders" : [ "folders/800636178739" , "folders/408342778736" ], "organization" : "organizations/474566717491" }, "consolidatedPolicy" : { "attachedResource" : "//cloudresourcemanager.googleapis.com/projects/project2-244918" , "rules" : [ { "enforce" : false } ], "appliedResource" : "//cloudresourcemanager.googleapis.com/projects/project2-244918" }, "policyBundle" : [ { "attachedResource" : "//cloudresourcemanager.googleapis.com/projects/project2-244918" , "rules" : [ { "enforce" : false } ], "appliedResource" : "//cloudresourcemanager.googleapis.com/projects/project2-244918" }, { "attachedResource" : "//cloudresourcemanager.googleapis.com/folders/408342778736" , "rules" : [ { "enforce" : false , "condition" : { "expression" : "resource.matchTag(\"474566717491/env\", \"prod\")" , "title" : "cond-title1" , "description" : "cond-desc1" } }, { "enforce" : true } ], "appliedResource" : "//cloudresourcemanager.googleapis.com/folders/408342778736" }, { "attachedResource" : "//cloudresourcemanager.googleapis.com/organizations/474566717491" , "rules" : [ { "enforce" : true } ], "appliedResource" : "//cloudresourcemanager.googleapis.com/organizations/474566717491" } ] } ] "constraint" : { "customConstraint" : { "name" : "organizations/474566717491/customConstraints/custom.disableGkeAutoUpgrade" , "resourceTypes" : [ "container.googleapis.com/NodePool" ], "methodTypes" : [ "CREATE" , "UPDATE" ], "condition" : "resource.management.autoUpgrade == false" , "actionType" : "ALLOW" , "displayName" : "Disable GKE auto upgrade" , "description" : "Only allow GKE NodePool resource create or updates if AutoUpgrade is not enabled" } } } Visualize inheritance If you have an organization-level activation of the Premium or Enterprise tier of Security Command Center , you can visualize the inheritance of organization policies you have analyzed using the Google Cloud console.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to run an organization policy analysis: To conduct the analysis: cloudasset.assets.analyzeOrgPolicy cloudasset.assets.searchAllResources cloudasset.assets.searchAllIamPolicies To view custom and managed constraints: orgpolicy.customConstraints.get You might also be able to get these permissions with custom roles or other predefined roles .

### "Policy Analyzer for allow policies \_|\_ Policy Intelligence \_|\_ Google\

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview](https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview)
- Source ID: `site-docs-root`
- Final score: 330
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If this option is enabled, Policy Analyzer runs additional analysis queries to determine who can impersonate the service accounts that have the specified access to the specified resources.
- Analysis queries To use Policy Analyzer, you create an analysis query specifying one or more of the following fields: Principals: The identities (for example, users, service accounts, groups, and domains) whose access you want to check Access: The permissions and roles that you want to check for Resources: The resources that you want to check for access to (API only) Condition context: The context—for example, time of day—under which you want to check for access Typically, you specify one or two of these fields in the analysis query, then use the query results to get more information about the fields that you didn't specify.
- If a relevant role binding contains a condition, Policy Analyzer does one of the following: If Policy Analyzer can analyze the condition, it does one of the following: If the condition evaluates to true, Policy Analyzer includes the role binding in the query results and marks the condition evaluation as TRUE .
- If you scope the query to an organization, Policy Analyzer analyzes the allow policy of the service account, the allow policy of the project that owns the service account, the allow policies of any folders containing the project, and the allow policy of the organization.

### "Policy Analyzer audit logging \_|\_ Policy Intelligence \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/audit-logging/policyanalyzer-audit-logging](https://docs.cloud.google.com/policy-intelligence/docs/audit-logging/policyanalyzer-audit-logging)
- Source ID: `site-iam-reference`
- Final score: 294
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name To view the Cloud Policy Analyzer audit logs, do the following: In the Google Cloud console, go to the Logs Explorer page: Go to Logs Explorer Copy and paste the following query into the Query field of the Logs Explorer, and then click Run query . protoPayload . serviceName = "policyanalyzer.googleapis.com" Methods by permission type Each IAM permission has a type property, whose value is an enum that can be one of four values: ADMIN READ , ADMIN WRITE , DATA READ , or DATA WRITE .
- Permission type Methods DATA READ google.cloud.policyanalyzer.v1.ActivityAnalyzer.QueryActivity google.cloud.policyanalyzer.v1beta1.ActivityAnalyzer.QueryActivity API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud Policy Analyzer. google.cloud.policyanalyzer.v1.ActivityAnalyzer The following audit logs are associated with methods belonging to google.cloud.policyanalyzer.v1.ActivityAnalyzer .
- QueryActivity Method : google.cloud.policyanalyzer.v1.ActivityAnalyzer.QueryActivity Audit log type : Data access Permissions : policyanalyzer.resourceAuthorizationActivities.query - DATA READ policyanalyzer.serviceAccountKeyLastAuthenticationActivities.query - DATA READ policyanalyzer.serviceAccountLastAuthenticationActivities.query - DATA READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.policyanalyzer.v1.ActivityAnalyzer.QueryActivity" google.cloud.policyanalyzer.v1beta1.ActivityAnalyzer The following audit logs are associated with methods belonging to google.cloud.policyanalyzer.v1beta1.ActivityAnalyzer .

### "Review organization policy insights for projects, folders, and organizations\

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-insights](https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-insights)
- Source ID: `site-iam-reference`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, two resources are analyzed for external service account keys, and no violations are detected: [ { "associatedRecommendations": [ { "recommendation": "projects/123456789012/locations/global/recommenders/google.orgpolicy.policy.Recommender/recommendations/fb927dc1-9695-4436-0000-f0f285007c0f" } ], "category": "SECURITY", "content": { "consolidatedPolicy": { "inheritFromParent": false, "name": "projects/123456789012/policies/iam.managed.disableServiceAccountKeyCreation", "policyRules": { "rules": [ { "enforce": false } ] }, "reset": false }, "constraint": { "id": "constraints/iam.managed.disableServiceAccountKeyCreation", "name": "Disable service account key creation" }, "evaluatedResources": [ { "numOfResources": "1", "resourceType": "cloudresourcemanager.googleapis.com/Project" }, { "numOfResources": "2", "resourceType": "iam.googleapis.com/ServiceAccountKey" } ], "violations": [ { "numOfResources": "0", "resourceType": "iam.googleapis.com/ServiceAccountKey" }, { "numOfResources": "0", "resourceType": "cloudresourcemanager.googleapis.com/Project" } ] }, "description": "Scanned 2 resources and found 0 violations for constraints/iam.managed.disableServiceAccountKeyCreation.", "etag": "\"9a1ad019022f9f56\"", "insightSubtype": "RESOURCE VIOLATION DISABLE SERVICE ACCOUNT KEY CREATION", "lastRefreshTime": "2024-12-03T08:00:00Z", "name": "projects/123456789012/locations/global/insightTypes/google.orgpolicy.policy.Insight/insights/66d543f3-845d-49d6-a26b-80d84804d8a8", "observationPeriod": "86400s", "severity": "HIGH", "stateInfo": { "state": "ACTIVE", "stateMetadata": { "reviewedBy": "alice", "priority": "high" } }, "targetResources": [ "//cloudresourcemanager.googleapis.com/projects/123456789012" ] } ] To learn more about the components of an insight, see Review organization policy insights on this page.
- For example, two resources are analyzed for external service account keys, and no violations are detected: associatedRecommendations : - recommendation : projects/123456789012/locations/global/recommenders/google.orgpolicy.policy.Recommender/recommendations/fb927dc1-9695-4436-0000-f0f285007c0f category : SECURITY content : consolidatedPolicy : inheritFromParent : false name : 'projects/123456789012/policies/iam.managed.disableServiceAccountKeyCreation' policyRules : rules : [ "enforce" : false ] reset : false constraint : { id : constraints/iam.managed.disableServiceAccountKeyCreation name : Disable service account key creation } evaluatedResources : - numOfResources : '1' resourceType : cloudresourcemanager.googleapis.com/Project - numOfResources : '2' resourceType : iam.googleapis.com/ServiceAccountKey violations : - numOfResources : '0' resourceType : iam.googleapis.com/ServiceAccountKey - numOfResources : '0' resourceType : cloudresourcemanager.googleapis.com/Project description : Scanned 3 resources and found 0 violations for constraints/iam.managed.disableServiceAccountKeyCreation. etag : '"34ddfdcefd214fd7"' insightSubtype : RESOURCE VIOLATION DISABLE SERVICE ACCOUNT KEY CREATION lastRefreshTime : '2024-12-10T08:00:00Z' name : projects/123456789012/locations/global/insightTypes/google.orgpolicy.policy.Insight/insights/66d543f3-845d-49d6-a26b-80d84804d8a8 observationPeriod : 86400s severity : HIGH stateInfo : state : ACTIVE targetResources : - //cloudresourcemanager.googleapis.com/projects/123456789012 To learn more about the components of an insight, see Review organization policy insights on this page.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://recommender.googleapis.com/v1/ RESOURCE TYPE / RESOURCE ID /locations/global/insightTypes/google.orgpolicy.policy.Insight/insights/ INSIGHT ID :markAccepted" Select-Object -Expand Content The response contains the insight, now with the state of ACCEPTED : [ { "associatedRecommendations": [ { "recommendation": "projects/123456789012/locations/global/recommenders/google.orgpolicy.policy.Recommender/recommendations/fb927dc1-9695-4436-0000-f0f285007c0f" } ], "category": "SECURITY", "content": { "consolidatedPolicy": { "inheritFromParent": false, "name": "projects/123456789012/policies/iam.managed.disableServiceAccountKeyCreation", "policyRules": { "rules": [ { "enforce": false } ] }, "reset": false }, "constraint": { "id": "constraints/iam.managed.disableServiceAccountKeyCreation", "name": "Disable service account key creation" }, "evaluatedResources": [ { "numOfResources": "1", "resourceType": "cloudresourcemanager.googleapis.com/Project" }, { "numOfResources": "2", "resourceType": "iam.googleapis.com/ServiceAccountKey" } ], "violations": [ { "numOfResources": "0", "resourceType": "iam.googleapis.com/ServiceAccountKey" }, { "numOfResources": "0", "resourceType": "cloudresourcemanager.googleapis.com/Project" } ] }, "description": "Scanned 2 resources and found 0 violations for constraints/iam.managed.disableServiceAccountKeyCreation.", "etag": "\"9a1ad019022f9f56\"", "insightSubtype": "RESOURCE VIOLATION DISABLE SERVICE ACCOUNT KEY CREATION", "lastRefreshTime": "2024-12-03T08:00:00Z", "name": "projects/123456789012/locations/global/insightTypes/google.orgpolicy.policy.Insight/insights/66d543f3-845d-49d6-a26b-80d84804d8a8", "observationPeriod": "86400s", "severity": "HIGH", "stateInfo": { "state": "ACCEPTED", "stateMetadata": { "reviewedBy": "alice", "priority": "high" } }, "targetResources": [ "//cloudresourcemanager.googleapis.com/projects/123456789012" ] } ] To learn more about the state info of an insight, see Review organization policy insights on this page.
- For example, "d3cdec23cc712bd0" . gcloud recommender insights mark-accepted INSIGHT ID \ --insight-type = google.orgpolicy.policy.Insight \ -- RESOURCE TYPE = RESOURCE ID \ --location = global \ --etag = ETAG The output shows the insight, now with the state of ACCEPTED : associatedRecommendations : - recommendation : folders/234567890123/locations/global/recommenders/google.orgpolicy.policy.Recommender/recommendations/fb927dc1-9695-4436-0000-f0f285007c0f category : SECURITY content : consolidatedPolicy : inheritFromParent : false name : 'projects/123456789012/policies/iam.managed.disableServiceAccountKeyCreation' policyRules : rules : [ "enforce" : false ] reset : false constraint : { id : constraints/iam.managed.disableServiceAccountKeyCreation name : Disable service account key creation } evaluatedResources : - numOfResources : '0' resourceType : iam.googleapis.com/ServiceAccountKey - numOfResources : '1' resourceType : cloudresourcemanager.googleapis.com/Folder - numOfResources : '1' resourceType : cloudresourcemanager.googleapis.com/Project violations : - numOfResources : '0' resourceType : iam.googleapis.com/ServiceAccountKey - numOfResources : '0' resourceType : cloudresourcemanager.googleapis.com/Folder - numOfResources : '0' resourceType : cloudresourcemanager.googleapis.com/Project description : Scanned 2 resources and found 0 violations for constraints/iam.managed.disableServiceAccountKeyUpload. etag : '"2cbb89b22fe2dab7"' insightSubtype : RESOURCE VIOLATION DISABLE SERVICE ACCOUNT KEY UPLOAD lastRefreshTime : '2024-12-10T08:00:00Z' name : folders/234567890123/locations/global/insightTypes/google.orgpolicy.policy.Insight/insights/66d543f3-845d-49d6-a26b-80d84804d8a8 observationPeriod : 86400s severity : HIGH stateInfo : state : ACCEPTED targetResources : - //cloudresourcemanager.googleapis.com/folders/234567890123 To learn more about the state info of an insight, see Review organization policy insights on this page.

