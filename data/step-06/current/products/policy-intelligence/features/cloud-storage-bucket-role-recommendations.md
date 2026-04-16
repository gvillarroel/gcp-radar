---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.800Z"
product_name: "Policy Intelligence"
product_slug: "policy-intelligence"
feature_name: "Cloud Storage bucket role recommendations"
feature_slug: "cloud-storage-bucket-role-recommendations"
latest_feature_date: "2022-07-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview"
  - "https://docs.cloud.google.com/policy-intelligence/docs/configure-role-recommendations"
  - "https://docs.cloud.google.com/policy-intelligence/docs/export-role-recommendations-data"
  - "https://docs.cloud.google.com/policy-intelligence/docs/overview"
keywords:
  - "storage"
  - "bucket"
  - "role"
  - "recommendations"
  - "recommender"
  - "can"
  - "suggest"
  - "changes"
---

# Cloud Storage bucket role recommendations

Product: Policy Intelligence
Coverage: MEDIUM

## Step 02 Summary

Recommender can suggest role changes for Cloud Storage buckets based on actual permission usage.

## Extended Definition

Recommender can suggest role changes for Cloud Storage buckets based on actual permission usage.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview)
- [https://docs.cloud.google.com/policy-intelligence/docs/configure-role-recommendations](https://docs.cloud.google.com/policy-intelligence/docs/configure-role-recommendations)
- [https://docs.cloud.google.com/policy-intelligence/docs/export-role-recommendations-data](https://docs.cloud.google.com/policy-intelligence/docs/export-role-recommendations-data)
- [https://docs.cloud.google.com/policy-intelligence/docs/overview](https://docs.cloud.google.com/policy-intelligence/docs/overview)

## Supporting Pages

### "Overview of role recommendations \_|\_ Policy Intelligence \_|\_ Google\

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview)
- Source ID: `site-docs-root`
- Final score: 253
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following advanced IAM recommender features are available with project-level or organization-level activations of the Premium or Enterprise tier of Security Command Center : Recommendations for non-basic roles Recommendations for roles granted on resources other than organizations, folders, and projects—for example, recommendations for roles granted on Cloud Storage buckets Recommendations that suggest custom roles Policy insights Lateral movement insights For more information, see Billing questions .
- Therefore, the IAM recommender generates a role recommendation suggesting that you revoke the Editor role and replace it with a combination of two other roles, which removes thousands of excess permissions: Console gcloud { "associatedInsights" : [ { "insight" : "projects/123456789012/locations/global/insightTypes/google.iam.policy.Insight/insights/3d4ef3d6-bdf0-4330-975d-c65cb929c44d" } ], "content" : { "operationGroups" : [ { "operations" : [ { "action" : "add" , "path" : "/iamPolicy/bindings/ /members/-" , "pathFilters" : { "/iamPolicy/bindings/ /condition/expression" : "" , "/iamPolicy/bindings/ /role" : "roles/iam.serviceAccountUser" }, "resource" : "//cloudresourcemanager.googleapis.com/projects/123456789012" , "resourceType" : "cloudresourcemanager.googleapis.com/Project" , "value" : "user:my-user@example.com" }, { "action" : "add" , "path" : "/iamPolicy/bindings/ /members/-" , "pathFilters" : { "/iamPolicy/bindings/ /condition/expression" : "" , "/iamPolicy/bindings/ /role" : "roles/storage.objectAdmin" }, "resource" : "//cloudresourcemanager.googleapis.com/projects/123456789012" , "resourceType" : "cloudresourcemanager.googleapis.com/Project" , "value" : "user:my-user@example.com" }, { "action" : "remove" , "path" : "/iamPolicy/bindings/ /members/ " , "pathFilters" : { "/iamPolicy/bindings/ /condition/expression" : "" , "/iamPolicy/bindings/ /members/ " : "user:my-user@example.com" , "/iamPolicy/bindings/ /role" : "roles/editor" }, "resource" : "//cloudresourcemanager.googleapis.com/projects/123456789012" , "resourceType" : "cloudresourcemanager.googleapis.com/Project" } ] } ], "overview" : { "addedRoles" : [ "roles/iam.serviceAccountUser" , "roles/storage.objectAdmin" ], "member" : "user:my-user@example.com" , "minimumObservationPeriodInDays" : "0" , "removedRole" : "roles/editor" , "resource" : "//cloudresourcemanager.googleapis.com/projects/123456789012" } }, "description" : "Replace the current role with smaller predefined roles to cover the permissions needed." , "etag" : "\"0da9a354c2a83d96\"" , "lastRefreshTime" : "2022-06-22T07:00:00Z" , "name" : "projects/123456789012/locations/global/recommenders/google.iam.policy.Recommender/recommendations/4637db3d-dba5-45eb-95ac-b4ee4b4cd14e" , "primaryImpact" : { "category" : "SECURITY" , "securityProjection" : { "details" : { "revokedIamPermissionsCount" : 2998 } } }, "priority" : "P2" , "recommenderSubtype" : "REPLACE ROLE" , "stateInfo" : { "state" : "ACTIVE" } } REST { "name" : "projects/123456789012/locations/global/recommenders/google.iam.policy.Recommender/recommendations/4637db3d-dba5-45eb-95ac-b4ee4b4cd14e" , "description" : "Replace the current role with smaller predefined roles to cover the permissions needed." , "lastRefreshTime" : "2022-06-22T07:00:00Z" , "primaryImpact" : { "category" : "SECURITY" , "securityProjection" : { "details" : { "revokedIamPermissionsCount" : 2998 } } }, "content" : { "operationGroups" : [ { "operations" : [ { "action" : "add" , "resourceType" : "cloudresourcemanager.googleapis.com/Project" , "resource" : "//cloudresourcemanager.googleapis.com/projects/123456789012" , "path" : "/iamPolicy/bindings/ /members/-" , "value" : "user:my-user@example.com" , "pathFilters" : { "/iamPolicy/bindings/ /condition/expression" : "" , "/iamPolicy/bindings/ /role" : "roles/iam.serviceAccountOwner" } }, { "action" : "add" , "resourceType" : "cloudresourcemanager.googleapis.com/Project" , "resource" : "//cloudresourcemanager.googleapis.com/projects/123456789012" , "path" : "/iamPolicy/bindings/ /members/-" , "value" : "user:my-user@example.com" , "pathFilters" : { "/iamPolicy/bindings/ /condition/expression" : "" , "/iamPolicy/bindings/ /role" : "roles/storage.objectAdmin" } }, { "action" : "remove" , "resourceType" : "cloudresourcemanager.googleapis.com/Project" , "resource" : "//cloudresourcemanager.googleapis.com/projects/123456789012" , "path" : "/iamPolicy/bindings/ /members/ " , "pathFilters" : { "/iamPolicy/bindings/ /condition/expression" : "" , "/iamPolicy/bindings/ /members/ " : "user:my-user@example.com" , "/iamPolicy/bindings/ /role" : "roles/editor" } } ] } ], "overview" : { "resource" : "//cloudresourcemanager.googleapis.com/projects/123456789012" , "member" : "user:my-user@example.com" , "removedRole" : "roles/editor" , "addedRoles" : [ "roles/iam.serviceAccountUser" , "roles/storage.objectAdmin" ], "minimumObservationPeriodInDays" : "0" } }, "stateInfo" : { "state" : "ACTIVE" }, "etag" : "\"0da9a354c2a83d96\"" , "recommenderSubtype" : "REPLACE ROLE" , "associatedInsights" : [ { "insight" : "projects/123456789012/locations/global/insightTypes/google.iam.policy.Insight/insights/3d4ef3d6-bdf0-4330-975d-c65cb929c44d" } ], "priority" : "P2" } Create a custom role The user my-user@example.com was granted the Cloud Trace Admin role ( roles/cloudtrace.admin ) on a project.
- In this example, the resourcemanager.projects.get permission was recommended based on machine learning: { "name" : "projects/123456789012/locations/global/insightTypes/google.iam.policy.Insight/insights/07841f74-02ce-4de8-bbe6-fc4eabb68568" , "description" : "4 of the permissions in this role binding were used in the past 90 days." , "content" : { "role" : "roles/editor" , "member" : "serviceAccount:my-service-account@my-project.iam.gserviceaccount.com" , "condition" : { "expression" : "" , "title" : "" , "description" : "" , "location" : "" }, "exercisedPermissions" : [ { "permission" : "storage.objects.create" }, { "permission" : "storage.objects.delete" }, { "permission" : "storage.objects.get" }, { "permission" : "storage.objects.list" } ], "inferredPermissions" : [ { "permission" : "resourcemanager.projects.get" } ], "currentTotalPermissionsCount" : "5069" }, "lastRefreshTime" : "2020-07-12T07:00:00Z" , "observationPeriod" : "7776000s" , "stateInfo" : { "state" : "ACTIVE" }, "category" : "SECURITY" , "associatedRecommendations" : [ { "recommendation" : "projects/123456789012/locations/global/recommenders/google.iam.policy.Recommender/recommendations/b1932220-867d-43d1-bd74-fb95876ab656" } ], "targetResources" : [ "//cloudresourcemanager.googleapis.com/projects/123456789012" ], "insightSubtype" : "PERMISSIONS USAGE" , "etag" : "\"d3cdec23cc712bd0\"" , "severity" : "HIGH" } To learn how to get a policy insight, see one of the following: Review policy insights for projects, folders, and organizations Review policy insights for Cloud Storage buckets Review policy insights for BigQuery datasets What's next Understand best practices for using role recommendations .
- In this example, the resourcemanager.projects.get permission was recommended based on machine learning: associatedRecommendations : - recommendation : projects/123456789012/locations/global/recommenders/google.iam.policy.Recommender/recommendations/0573b702-96a5-4622-a916-c762e7b0731f category : SECURITY content : condition : description : '' expression : '' location : '' title : '' currentTotalPermissionsCount : '5069' exercisedPermissions : - permission : storage.objects.create - permission : storage.objects.delete - permission : storage.objects.get - permission : storage.objects.list inferredPermissions : - permission : resourcemanager.projects.get member : serviceAccount:my-service-account@my-project. iam.gserviceaccount.com role : roles/editor description : 4 of the permissions in this role binding were used in the past 90 days. etag : '"d3cdec23cc712bd0"' insightSubtype : PERMISSIONS USAGE lastRefreshTime : '2020-07-11T07:00:00Z' name : projects/123456789012/locations/global/insightTypes/google.iam.policy.Insight/insights/0d3ce433-f067-4e78-b6ae-03d7d1f6f040 observationPeriod : 7776000s stateInfo : state : ACTIVE targetResources : - //cloudresourcemanager.googleapis.com/projects/123456789012 severity : HIGH To learn how to get a policy insight, see one of the following: Review policy insights for projects, folders, and organizations Review policy insights for Cloud Storage buckets Review policy insights for BigQuery datasets REST Permissions that were added based on the IAM recommender's machine learning rather than on permission usage aren't listed in the recommendation itself.

### "Configure role recommendation generation \_|\_ Policy Intelligence \_|\_\

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/configure-role-recommendations](https://docs.cloud.google.com/policy-intelligence/docs/configure-role-recommendations)
- Source ID: `site-iam-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Review and apply your role recommendations for Cloud Storage buckets Learn more about Recommender .
- Though the IAM recommender generates role recommendations for a variety of resources, you can only edit how role recommendations are generated for projects.
- By changing your IAM recommender configuration, you can customize how your role recommendations are generated.
- Required roles To get the permissions that you need to configure IAM role recommendations, ask your administrator to grant you the following IAM roles on the project whose IAM recommender you want to configure: View configuration details: IAM Recommender Viewer (roles/recommender.iamViewer) Modify your configuration: IAM Recommender Admin (roles/recommender.iamAdmin) For more information about granting roles, see Manage access to projects, folders, and organizations .

### "Export data for role recommendations \_|\_ Policy Intelligence \_|\_ Google\

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/export-role-recommendations-data](https://docs.cloud.google.com/policy-intelligence/docs/export-role-recommendations-data)
- Source ID: `site-iam-reference`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The IAM role recommender uses aggregated IAM access data, collected during the usage of services in Google Cloud, to provide recommendations.
- Home Documentation Security Policy Intelligence Guides Send feedback Export data for role recommendations Stay organized with collections Save and categorize content based on your preferences.
- Understand best practices for using role recommendations .
- Enable the APIs Read about role recommendations .

### Policy Intelligence overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/policy-intelligence/docs/overview](https://docs.cloud.google.com/policy-intelligence/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- To learn how to manage role recommendations, see one of the following guides: Review and apply role recommendations for projects, folders, and organizations Review and apply role recommendations for Cloud Storage buckets Review and apply role recommendations for BigQuery datasets Prevent policy misconfigurations There are several Policy Intelligence tools that you can use to see how changes to policies will impact your organization.
- Role recommendations suggest actions that you can take to remediate the issues identified by lateral movement insights.
- Change risk recommendations generate warnings when you try to make certain high-risk changes, like revoking a project-level role that Google Cloud has identified as important.
- Improve your policies You can improve your IAM allow policies by using role recommendations.

