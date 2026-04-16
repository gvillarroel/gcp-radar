---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.072Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Organization Policy Policy Simulator"
feature_slug: "organization-policy-policy-simulator"
latest_feature_date: "2023-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/access-control-org"
  - "https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies"
  - "https://docs.cloud.google.com/resource-manager/docs/custom-constraints"
keywords:
  - "organization"
  - "policy"
  - "simulator"
  - "lets"
  - "you"
  - "test"
  - "policies"
  - "before"
---

# Organization Policy Policy Simulator

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Policy Simulator lets you test organization policies before they are enforced.

## Extended Definition

Policy Simulator lets you test organization policies before they are enforced.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)
- [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)

## Supporting Pages

### "Access control for organization resources with IAM \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- Source ID: `site-iam-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- For example, to make anotheradmin@gcp-test.com an Organization Administrator, change the previous example as follows: { "bindings" : [ { "members" : [ "user:testuser1@gcp-test.com" ], "role" : "roles/editor" }, { "members" : [ "user:admin@gcp-test.com" , "user:anotheradmin@gcp-test.com" ], "role" : "roles/resourcemanager.organizationAdmin" }, { "members" : [ "user:testuser20@gcp-test.com" ], "role" : "roles/resourcemanager.projectCreator" }, ], "etag" : "BwU1aRxWk30=" } Update the organization resource's allow policy by running the following command: gcloud alpha organizations set-iam-policy <var>ORGANIZATION ID</var> policy.json API Request: POST h tt ps : //cloudresourcemanager.googleapis.com/v3/organizations/12345:setIamPolicy { "policy" : { "version" : "0" , "bindings" : [ { "role" : "roles/resourcemanager.organizationAdmin" , "members" : [ "user:email1@gmail.com" ] }, { "role" : "roles/resourcemanager.projectCreator" , "members" : [ "user:email2@gmail.com" , "user:email3@gmail.com" , "serviceAccount:my-other-app@appspot.gserviceaccount.com" ] } ] "etag" : "BwUjHYKHHiQ=" } } Response: { "bindings" : [ { "role" : "roles/resourcemanager.organizationAdmin" , "members" : [ "user:email1@gmail.com" ] }, { "role" : "roles/resourcemanager.projectCreator" , "members" : [ "user:email2@gmail.com" , "user:email3@gmail.com" , "serviceAccount:my-other-app@appspot.gserviceaccount.com" ] } ] "etag" : "BwUjHYKJUiQ=" } The setIamPolicy() method lets you grant roles to users by attaching an allow policy to the organization resource.
- Lowest-level resources where you can grant this role: Organization cloudasset. assets. analyzeOrgPolicy cloudasset. assets. exportResource cloudasset.assets.listResource cloudasset. assets. searchAllResources orgpolicy. orgpolicy.constraints.list orgpolicy. customConstraints. create orgpolicy. customConstraints. delete orgpolicy. customConstraints. get orgpolicy. customConstraints. list orgpolicy. customConstraints. update orgpolicy.policies.create orgpolicy.policies.delete orgpolicy.policies.list orgpolicy.policies.update orgpolicy.policy.get orgpolicy.policy.set policysimulator. orgPolicyViolations. list policysimulator. orgPolicyViolationsPreviews. policysimulator. orgPolicyViolationsPreviews. create policysimulator. orgPolicyViolationsPreviews. get policysimulator. orgPolicyViolationsPreviews. list recommender. orgPolicyInsights. recommender. orgPolicyInsights. get recommender. orgPolicyInsights. list recommender. orgPolicyInsights. update recommender. orgPolicyRecommendations. recommender. orgPolicyRecommendations. get recommender. orgPolicyRecommendations. list recommender. orgPolicyRecommendations. update Browser ( roles/ browser ) Read access to browse the hierarchy for a project, including the folder, organization, and allow policy.
- Lowest-level resources where you can grant this role: Project essentialcontacts. essentialcontacts. contacts. create essentialcontacts. contacts. delete essentialcontacts.contacts.get essentialcontacts. contacts. list essentialcontacts. contacts. send essentialcontacts. contacts. update iam.policybindings. iam.policybindings.get iam.policybindings.list orgpolicy.constraints.list orgpolicy.policies.list orgpolicy.policy.get resourcemanager.capabilities. resourcemanager. capabilities. get resourcemanager. capabilities. update resourcemanager. folders. createPolicyBinding resourcemanager. folders. deletePolicyBinding resourcemanager.folders.get resourcemanager. folders. getIamPolicy resourcemanager.folders.list resourcemanager. folders. searchPolicyBindings resourcemanager. folders. setIamPolicy resourcemanager. folders. updatePolicyBinding resourcemanager. organizations. resourcemanager. organizations. createPolicyBinding resourcemanager. organizations. deletePolicyBinding resourcemanager. organizations. get resourcemanager. organizations. getIamPolicy resourcemanager. organizations. searchPolicyBindings resourcemanager. organizations. setIamPolicy resourcemanager. organizations. updatePolicyBinding resourcemanager. projects. createPolicyBinding resourcemanager. projects. deletePolicyBinding resourcemanager.projects.get resourcemanager. projects. getIamPolicy resourcemanager.projects.list resourcemanager. projects. searchPolicyBindings resourcemanager. projects. setIamPolicy resourcemanager. projects. updatePolicyBinding Organization Viewer ( roles/ resourcemanager.organizationViewer ) Provides access to view an organization.
- In the Info Panel , under Permissions , click Expand a role and display all members who have that role. gcloud Get the allow policy for the organization resource using the get-iam-policy command: gcloud alpha organizations get-iam-policy <var>ORGANIZATION ID</var> --format json > <var>FILENAME.JSON</var> The command outputs the allow policy, which looks similar to the following: bindings : - members : - user:testuser1@gcp-test.com role : roles/editor - members : - user:admin@gcp-test.com role:roles/resourcemanager.organizationAdmin - members : - user:testuser2@gcp-test.com role : roles/resourcemanager.projectCreator etag" : "BwU1aRxWk30=" API The following code snippet returns the allow policy for the organization resource https://cloudresourcemanager.googleapis.com/v3/organizations/12345 .

### "Create custom constraints for Essential Contacts \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)
- Source ID: `site-docs-reference-2`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Test organization policy changes with Policy Simulator .
- After you verify that the organization policy in dry-run mode works as intended, set the live policy by clicking Set policy . gcloud To create an organization policy with boolean rules, create a policy YAML file that references the constraint: name : projects/ PROJECT ID /policies/ CONSTRAINT NAME spec : rules : - enforce : true dryRunSpec : rules : - enforce : true Replace the following: PROJECT ID : the project that you want to enforce your constraint on.
- After you verify that the organization policy in dry-run mode works as intended, set the live policy with the org-policies set-policy command and the spec flag: gcloud org-policies set-policy POLICY PATH --update-mask = spec Replace POLICY PATH with the full path to your organization policy YAML file.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: essentialcontacts.googleapis.com/Contact To learn more about Organization Policy, see Custom organization policies .

### "Manage resources with custom constraints \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Test the policy Create a project with project ID sampleDemoProject in the organization: gcloud projects create sampleDemoProject \ --organization = ORGANIZATION ID The output is the following: PERMISSION DENIED: The caller does not have permission Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- For more information, see Test organization policy changes with Policy Simulator .
- After you verify that the organization policy in dry-run mode works as intended, set the live policy by clicking Set policy . gcloud To create an organization policy with boolean rules, create a policy YAML file that references the constraint: name : projects/ PROJECT ID /policies/ CONSTRAINT NAME spec : rules : - enforce : true dryRunSpec : rules : - enforce : true Replace the following: PROJECT ID : the project that you want to enforce your constraint on.
- Apply the policy: gcloud org-policies set-policy /policy-enable-dev-projects.yaml Verify that the policy exists: gcloud org-policies list --organization = ORGANIZATION ID The output is similar to the following: CONSTRAINT LIST POLICY BOOLEAN POLICY ETAG custom.allowProjectForDevIdOnly - SET COCsm5QGENiXi2E= After you apply the policy, Google Cloud takes about two minutes to start enforcing the policy.

