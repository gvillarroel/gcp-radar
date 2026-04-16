---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.090Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Service account access token lifetime extension organization policy constraint"
feature_slug: "service-account-access-token-lifetime-extension-organization-policy-constraint"
latest_feature_date: "2020-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/access-control-org"
  - "https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints"
  - "https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts"
keywords:
  - "account"
  - "access"
  - "token"
  - "lifetime"
  - "extension"
  - "organization"
  - "policy"
  - "constraint"
---

# Service account access token lifetime extension organization policy constraint

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Allows organizations to extend the maximum lifetime of OAuth 2.0 access tokens created for a service account.

## Extended Definition

Allows organizations to extend the maximum lifetime of OAuth 2.0 access tokens created for a service account.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts](https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts)

## Supporting Pages

### "Access control for organization resources with IAM \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: Project essentialcontacts. essentialcontacts. contacts. create essentialcontacts. contacts. delete essentialcontacts.contacts.get essentialcontacts. contacts. list essentialcontacts. contacts. send essentialcontacts. contacts. update iam.policybindings. iam.policybindings.get iam.policybindings.list orgpolicy.constraints.list orgpolicy.policies.list orgpolicy.policy.get resourcemanager.capabilities. resourcemanager. capabilities. get resourcemanager. capabilities. update resourcemanager. folders. createPolicyBinding resourcemanager. folders. deletePolicyBinding resourcemanager.folders.get resourcemanager. folders. getIamPolicy resourcemanager.folders.list resourcemanager. folders. searchPolicyBindings resourcemanager. folders. setIamPolicy resourcemanager. folders. updatePolicyBinding resourcemanager. organizations. resourcemanager. organizations. createPolicyBinding resourcemanager. organizations. deletePolicyBinding resourcemanager. organizations. get resourcemanager. organizations. getIamPolicy resourcemanager. organizations. searchPolicyBindings resourcemanager. organizations. setIamPolicy resourcemanager. organizations. updatePolicyBinding resourcemanager. projects. createPolicyBinding resourcemanager. projects. deletePolicyBinding resourcemanager.projects.get resourcemanager. projects. getIamPolicy resourcemanager.projects.list resourcemanager. projects. searchPolicyBindings resourcemanager. projects. setIamPolicy resourcemanager. projects. updatePolicyBinding Organization Viewer ( roles/ resourcemanager.organizationViewer ) Provides access to view an organization.
- Lowest-level resources where you can grant this role: Organization cloudasset. assets. analyzeOrgPolicy cloudasset. assets. exportResource cloudasset.assets.listResource cloudasset. assets. searchAllResources orgpolicy. orgpolicy.constraints.list orgpolicy. customConstraints. create orgpolicy. customConstraints. delete orgpolicy. customConstraints. get orgpolicy. customConstraints. list orgpolicy. customConstraints. update orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set policysimulator. orgPolicyViolations. list policysimulator. orgPolicyViolationsPreviews. policysimulator. orgPolicyViolationsPreviews. create policysimulator. orgPolicyViolationsPreviews. get policysimulator. orgPolicyViolationsPreviews. list recommender. orgPolicyInsights. recommender. orgPolicyInsights. get recommender. orgPolicyInsights. list recommender. orgPolicyInsights. update recommender. orgPolicyRecommendations. recommender. orgPolicyRecommendations. get recommender. orgPolicyRecommendations. list recommender. orgPolicyRecommendations. update Browser ( roles/ browser ) Read access to browse the hierarchy for a project, including the folder, organization, and allow policy.
- The Organization Policy constraint constraints/resourcemanager.accessBoundaries is a list constraint that is enforced on your organization resource.
- For example, to make anotheradmin@gcp-test.com an Organization Administrator, change the previous example as follows: { "bindings" : [ { "members" : [ "user:testuser1@gcp-test.com" ], "role" : "roles/editor" }, { "members" : [ "user:admin@gcp-test.com" , "user:anotheradmin@gcp-test.com" ], "role" : "roles/resourcemanager.organizationAdmin" }, { "members" : [ "user:testuser20@gcp-test.com" ], "role" : "roles/resourcemanager.projectCreator" }, ], "etag" : "BwU1aRxWk30=" } Update the organization resource's allow policy by running the following command: gcloud alpha organizations set-iam-policy <var>ORGANIZATION ID</var> policy.json API Request: POST h tt ps : //cloudresourcemanager.googleapis.com/v3/organizations/12345:setIamPolicy { "policy" : { "version" : "0" , "bindings" : [ { "role" : "roles/resourcemanager.organizationAdmin" , "members" : [ "user:email1@gmail.com" ] }, { "role" : "roles/resourcemanager.projectCreator" , "members" : [ "user:email2@gmail.com" , "user:email3@gmail.com" , "serviceAccount:my-other-app@appspot.gserviceaccount.com" ] } ] "etag" : "BwUjHYKHHiQ=" } } Response: { "bindings" : [ { "role" : "roles/resourcemanager.organizationAdmin" , "members" : [ "user:email1@gmail.com" ] }, { "role" : "roles/resourcemanager.projectCreator" , "members" : [ "user:email2@gmail.com" , "user:email3@gmail.com" , "serviceAccount:my-other-app@appspot.gserviceaccount.com" ] } ] "etag" : "BwUjHYKJUiQ=" } The setIamPolicy() method lets you grant roles to users by attaching an allow policy to the organization resource.

### "Manage Google Cloud security baseline constraints \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Organization policy name Organization policy constraint Description Impact of enforcement Disable service account key creation constraints/iam.managed.disableServiceAccountKeyCreation Prevent users from creating persistent keys for service accounts.
- Disable organization policies To disable or delete an organization policy, run the following command: gcloud org-policies delete CONSTRAINT NAME --organization = ORGANIZATION ID Replace the following: CONSTRAINT NAME : the name of the organization policy constraint that you want to delete—for example, iam.allowedPolicyMemberDomains ORGANIZATION ID : the unique identifier of your organization What's next For more information about creating and managing organization policies, see Using constraints .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies: orgpolicy.constraints.list orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set You might also be able to get these permissions with custom roles or other predefined roles .
- Organization policies enforced on organization resources The following table lists the organization policy constraints that are automatically enforced when you create an organization resource.

### Manage Essential Contacts \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts](https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts)
- Source ID: `site-iam-reference`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Then, make the request: $cred = gcloud auth application-default print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://essentialcontacts.googleapis.com/v1/ RESOURCE TYPE / RESOURCE ID /contacts:compute?notificationCategories= NOTIFICATION CATEGORY &pageSize= PAGE SIZE &pageToken= NEXT PAGE TOKEN " Select-Object -Expand Content After sending the request, you receive a JSON response similar to the following example: { "contacts": [ { "name": "projects/my-projects/contacts/1", "email": "my-project-contact-1@example.com", "notificationCategorySubscriptions": [ "ALL" ], "languageTag": "en-US" }, { "name": "projects/my-projects/contacts/2", "email": "my-project-contact-2@example.com", "notificationCategorySubscriptions": [ "BILLING" ], "languageTag": "en-US" }, { "name": "organizations/my-organization/contacts/1", "email": "my-organization-contact@example.com", "notificationCategorySubscriptions": [ "ALL" ], "languageTag": "en-US" } ] } Add a contact Important: Some Google Cloud services capture the list of recipients for a notification campaign, such as a Mandatory Service Announcement (MSA), in advance.
- Then, save the request body in a JSON file called request.json and make the request: curl -X PATCH \ -H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ https://essentialcontacts.googleapis.com/v1/ RESOURCE TYPE / RESOURCE ID /contacts/ CONTACT ID ?updateMask=" UPDATE MASK " PowerShell (Windows) Set the GOOGLE APPLICATION CREDENTIALS environment variable to your service account private key path.
- Then, save the request body in a JSON file called request.json and make the request: curl -X POST \ -H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ https://essentialcontacts.googleapis.com/v1/ RESOURCE TYPE / RESOURCE ID /contacts PowerShell (Windows) Set the GOOGLE APPLICATION CREDENTIALS environment variable to your service account private key path.
- Then, make the request: curl -X GET \ -H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \ https://essentialcontacts.googleapis.com/v1/ RESOURCE TYPE / RESOURCE ID /contacts:compute?notificationCategories= NOTIFICATION CATEGORY &pageSize= PAGE SIZE &pageToken= NEXT PAGE TOKEN PowerShell (Windows) Set the GOOGLE APPLICATION CREDENTIALS environment variable to your service account private key path.

