---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.033Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Organization policy conditions for tag keys"
feature_slug: "organization-policy-conditions-for-tag-keys"
latest_feature_date: "2025-08-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing"
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview"
  - "https://docs.cloud.google.com/resource-manager/docs/access-control-org"
keywords:
  - "organization"
  - "policy"
  - "conditions"
  - "tag"
  - "keys"
  - "can"
  - "match"
  - "key"
---

# Organization policy conditions for tag keys

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Organization policy conditions can match a tag key to enable or disable enforcement for all resources with that tag key.

## Extended Definition

Organization policy conditions can match a tag key to enable or disable enforcement for all resources with that tag key.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview)
- [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)

## Supporting Pages

### Create and manage tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- Source ID: `site-docs-reference-2`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Dynamic tag values can't be used in Identity and Access Management (IAM) conditions or in Organization Policy Service constraints.
- You should get a response similar to the following: For predefined tags: inherited: true namespacedTagKey: 433637338589/environment namespacedTagValue: 433637338589/environment/production tagKey: tagKeys/162008917964 tagKeyParentName: organizations/433637338589 tagValue: tagValues/281482214193975 For tags with dynamic values: inherited: true namespacedTagKey: my-sample-org/dynamic-key namespacedTagValue: my-sample-org/dynamic-key/staging tagKey: tagKeys/281476834141096 tagKeyParentName: projects/357710452272 If all tags evaluated on a resource are directly attached, the inherited field is false and is omitted.
- You should get a response similar to the following: NAME SHORT NAME DESCRIPTION tagKeys/123456789012 environment description of tag key API To return a list of all tag keys for a given resource, use the tagKeys.list method, with the parent resource specified in the query: GET https://cloudresourcemanager.googleapis.com/v3/tagKeys { "parent": " RESOURCE ID " } RESOURCE ID is the ID of the organization or project resource for which you want to find attached tag keys; for example: organizations/123456789012 and projects/test-project123 .
- You should get a response similar to the following: name: tagKeys/123456789012 short name: environment namespaced name: 123456789012/environment description: "new description" parent: organizations/123456789012 API To modify a tag key description, use the tagKeys.patch method: PATCH https://cloudresourcemanager.googleapis.com/v3/{tagKey.name= TAGKEY NAME } -d Request JSON body: { "description": DESCRIPTION , } Where: TAGKEY NAME is the permanent ID of the tag key; for example: tagKeys/123456789012 .

### Tags overview \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview)
- Source ID: `site-docs-reference-2`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists some of the differences between tags and labels: Tags Labels Resource structure Tag keys, tag values, and tag bindings are all discrete resources Not a resource in itself, but metadata for resources Definition Defined at the organization or project level Defined by each resource Access control Management and attachment of tags requires Identity and Access Management (IAM) roles Attachment of labels requires IAM roles , which vary based on the service resource Prerequisite for attachment The tag key and tag value must be defined before a tag can be attached to a resource No prerequisites for attachment Inheritance Tag bindings are inherited by children of the resource in the Google Cloud hierarchy Not inherited by children of the resource Deletion requirements Tags can't be deleted unless no tag bindings for that tag exist Can be removed from a resource at any time Naming requirements Requirements for tag values and tag keys Requirements for labels Key-value name length 256 characters maximum 63 characters maximum Allow and deny policy support Tags can be referenced by allow policy conditions and deny policy conditions No allow and deny policy support Organization policy support Tags on some resources can be referenced by organization policy conditional constraints No organization policy support Cloud Billing integration Perform chargebacks, audits, and other cost allocation analysis, export Cloud Billing cost data to BigQuery Filter resources by label in Cloud Billing, export Cloud Billing data to BigQuery For more information about labels, see Creating and managing labels .
- When you enforce mandatory tags, you can only create resources that comply with your organization's tagging policies; that is, resources are bound with the tag values for the mandatory tag keys specified in the policy.
- You can enforce mandatory tags on resources by using a custom organization policy.
- A tag key resource can be created under your organization or project resources, and tag values are resources that are attached to a key—for example, a tag key environment with values production and development .

### "Access control for organization resources with IAM \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- Source ID: `site-iam-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following allow policy grants the Organization Policy Administrator role only on resources that have the environment: dev tag, and doesn't grant it on any other resource: { "bindings" : [ { "members" : [ "{dynamic print variables.examples.principal group api}" ], "role" : "roles/orgpolicy.policyAdmin" , "condition" : { "title" : "Dev environment only" , "description" : "Only granted in the development environment" , "expression" : "resource.matchTag('123456789012/env', 'dev')" } } ], "etag" : "BwWKmjvelug=" , "version" : 3 } Test permissions You can test IAM permissions on a user for an organization resource with the testIamPermissions() method.
- Lowest-level resources where you can grant this role: Project essentialcontacts. essentialcontacts. contacts. create essentialcontacts. contacts. delete essentialcontacts.contacts.get essentialcontacts. contacts. list essentialcontacts. contacts. send essentialcontacts. contacts. update iam.policybindings. iam.policybindings.get iam.policybindings.list orgpolicy.constraints.list orgpolicy.policies.list orgpolicy.policy.get resourcemanager.capabilities. resourcemanager. capabilities. get resourcemanager. capabilities. update resourcemanager. folders. createPolicyBinding resourcemanager. folders. deletePolicyBinding resourcemanager.folders.get resourcemanager. folders. getIamPolicy resourcemanager.folders.list resourcemanager. folders. searchPolicyBindings resourcemanager. folders. setIamPolicy resourcemanager. folders. updatePolicyBinding resourcemanager. organizations. resourcemanager. organizations. createPolicyBinding resourcemanager. organizations. deletePolicyBinding resourcemanager. organizations. get resourcemanager. organizations. getIamPolicy resourcemanager. organizations. searchPolicyBindings resourcemanager. organizations. setIamPolicy resourcemanager. organizations. updatePolicyBinding resourcemanager. projects. createPolicyBinding resourcemanager. projects. deletePolicyBinding resourcemanager.projects.get resourcemanager. projects. getIamPolicy resourcemanager.projects.list resourcemanager. projects. searchPolicyBindings resourcemanager. projects. setIamPolicy resourcemanager. projects. updatePolicyBinding Organization Viewer ( roles/ resourcemanager.organizationViewer ) Provides access to view an organization.
- For example, to make anotheradmin@gcp-test.com an Organization Administrator, change the previous example as follows: { "bindings" : [ { "members" : [ "user:testuser1@gcp-test.com" ], "role" : "roles/editor" }, { "members" : [ "user:admin@gcp-test.com" , "user:anotheradmin@gcp-test.com" ], "role" : "roles/resourcemanager.organizationAdmin" }, { "members" : [ "user:testuser20@gcp-test.com" ], "role" : "roles/resourcemanager.projectCreator" }, ], "etag" : "BwU1aRxWk30=" } Update the organization resource's allow policy by running the following command: gcloud alpha organizations set-iam-policy <var>ORGANIZATION ID</var> policy.json API Request: POST h tt ps : //cloudresourcemanager.googleapis.com/v3/organizations/12345:setIamPolicy { "policy" : { "version" : "0" , "bindings" : [ { "role" : "roles/resourcemanager.organizationAdmin" , "members" : [ "user:email1@gmail.com" ] }, { "role" : "roles/resourcemanager.projectCreator" , "members" : [ "user:email2@gmail.com" , "user:email3@gmail.com" , "serviceAccount:my-other-app@appspot.gserviceaccount.com" ] } ] "etag" : "BwUjHYKHHiQ=" } } Response: { "bindings" : [ { "role" : "roles/resourcemanager.organizationAdmin" , "members" : [ "user:email1@gmail.com" ] }, { "role" : "roles/resourcemanager.projectCreator" , "members" : [ "user:email2@gmail.com" , "user:email3@gmail.com" , "serviceAccount:my-other-app@appspot.gserviceaccount.com" ] } ] "etag" : "BwUjHYKJUiQ=" } The setIamPolicy() method lets you grant roles to users by attaching an allow policy to the organization resource.
- Lowest-level resources where you can grant this role: Organization cloudasset. assets. analyzeOrgPolicy cloudasset. assets. exportResource cloudasset.assets.listResource cloudasset. assets. searchAllResources orgpolicy. orgpolicy.constraints.list orgpolicy. customConstraints. create orgpolicy. customConstraints. delete orgpolicy. customConstraints. get orgpolicy. customConstraints. list orgpolicy. customConstraints. update orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set policysimulator. orgPolicyViolations. list policysimulator. orgPolicyViolationsPreviews. policysimulator. orgPolicyViolationsPreviews. create policysimulator. orgPolicyViolationsPreviews. get policysimulator. orgPolicyViolationsPreviews. list recommender. orgPolicyInsights. recommender. orgPolicyInsights. get recommender. orgPolicyInsights. list recommender. orgPolicyInsights. update recommender. orgPolicyRecommendations. recommender. orgPolicyRecommendations. get recommender. orgPolicyRecommendations. list recommender. orgPolicyRecommendations. update Browser ( roles/ browser ) Read access to browse the hierarchy for a project, including the folder, organization, and allow policy.

