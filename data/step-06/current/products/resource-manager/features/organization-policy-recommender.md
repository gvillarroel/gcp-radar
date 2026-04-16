---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.062Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Organization Policy recommender"
feature_slug: "organization-policy-recommender"
latest_feature_date: "2024-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/access-control-org"
  - "https://docs.cloud.google.com/resource-manager/docs/custom-constraints"
  - "https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview"
keywords:
  - "organization"
  - "policy"
  - "recommender"
  - "generates"
  - "insights"
  - "recommendations"
  - "restrict"
  - "creation"
---

# Organization Policy recommender

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

This recommender generates insights and recommendations to restrict the creation and upload of service account keys.

## Extended Definition

This recommender generates insights and recommendations to restrict the creation and upload of service account keys.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview](https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview)

## Supporting Pages

### "Access control for organization resources with IAM \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- Source ID: `site-iam-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: Organization cloudasset. assets. analyzeOrgPolicy cloudasset. assets. exportResource cloudasset.assets.listResource cloudasset. assets. searchAllResources orgpolicy. orgpolicy.constraints.list orgpolicy. customConstraints. create orgpolicy. customConstraints. delete orgpolicy. customConstraints. get orgpolicy. customConstraints. list orgpolicy. customConstraints. update orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set policysimulator. orgPolicyViolations. list policysimulator. orgPolicyViolationsPreviews. policysimulator. orgPolicyViolationsPreviews. create policysimulator. orgPolicyViolationsPreviews. get policysimulator. orgPolicyViolationsPreviews. list recommender. orgPolicyInsights. recommender. orgPolicyInsights. get recommender. orgPolicyInsights. list recommender. orgPolicyInsights. update recommender. orgPolicyRecommendations. recommender. orgPolicyRecommendations. get recommender. orgPolicyRecommendations. list recommender. orgPolicyRecommendations. update Browser ( roles/ browser ) Read access to browse the hierarchy for a project, including the folder, organization, and allow policy.
- Http ())) policy = crm . organizations () . getIamPolicy ( resource = flags . organizationId , body = {}) . execute () admin binding = next ( ( binding for binding in policy [ 'bindings' ] if binding [ 'role' ] == 'roles/resourcemanager.organizationAdmin' ), None ) Add an empty Organization Administrator binding if not present. if not admin binding : admin binding = { 'role' : 'roles/resourcemanager.organizationAdmin' , 'members' : [] } policy [ 'bindings' ] . append ( admin binding ) Add the new Admin (if necessary). new admin = 'user:' + flags . adminEmail if new admin not in admin binding [ 'members' ]: admin binding [ 'members' ] . append ( new admin ) policy = crm . organizations () . setIamPolicy ( resource = flags . organizationId , body = { 'resource' : flags . organizationId , 'policy' : policy }) . execute () print json . dumps ( policy , indent = 2 ) Restrict project visibility for users Users can see all projects they have access to in the Google Cloud console and in search queries, regardless of whether or not they are in the user's selected organization resource.
- Lowest-level resources where you can grant this role: Organization resourcemanager. organizations. get Organization Policy Administrator ( roles/ orgpolicy.policyAdmin ) Provides access to define what restrictions an organization wants to place on the configuration of cloud resources by setting Organization Policies.
- You can use the Organization Policy Service to restrict the set of projects that are returned in queries and in the Google Cloud console.

### "Manage resources with custom constraints \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: cloudresourcemanager.googleapis.com/Project cloudresourcemanager.googleapis.com/Folder To learn more about Organization Policy, see Custom organization policies .
- As the organization policy administrator , you can define an organization policy, which is a set of restrictions called constraints that apply to Google Cloud resources and descendants of those resources in the Google Cloud resource hierarchy .
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom constraints and use those custom constraints in an organization policy.
- Disable creation of a folder within another folder to control the depth of the resource hierarchy tree. name : organizations/ ORGANIZATION ID /customConstraints/custom.disableFolderCreation resourceTypes : - cloudresourcemanager.googleapis.com/Folder methodTypes : - CREATE condition : "resource.parent.startsWith(" folders")" actionType : DENY displayName : Disable creation of a folder inside another folder description : Do not allow creation of a folder within another folder when the resource hierarchy is set to a maximum value of 1.

### "Introduction to organization restrictions \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview](https://docs.cloud.google.com/resource-manager/docs/organization-restrictions/overview)
- Source ID: `site-docs-reference-2`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- The following diagram illustrates how the different components work to enforce organization restrictions: The architecture diagram shows the following components: Managed device : A device that is governed by the organization policies of a company.
- Common use cases Here are some common organization restrictions use cases: Restrict access to employees in your organization so that employees can access resources only in your Google Cloud organization and not other organizations.
- Google Cloud : The organization restrictions feature in Google Cloud inspects all requests for organization restrictions header, and allows or denies the requests based on the organization being accessed.
- Home Documentation Security Resource Manager Guides Send feedback Introduction to organization restrictions Stay organized with collections Save and categorize content based on your preferences.

