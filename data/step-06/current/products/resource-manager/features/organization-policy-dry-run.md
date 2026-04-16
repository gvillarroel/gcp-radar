---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.069Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Organization Policy dry run"
feature_slug: "organization-policy-dry-run"
latest_feature_date: "2023-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/access-control-org"
  - "https://docs.cloud.google.com/resource-manager/docs/custom-constraints"
  - "https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies"
keywords:
  - "organization"
  - "policy"
  - "dry"
  - "run"
  - "mode"
  - "lets"
  - "you"
  - "test"
---

# Organization Policy dry run

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Dry-run mode lets you test organization policies before they are enforced.

## Extended Definition

Dry-run mode lets you test organization policies before they are enforced.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)

## Supporting Pages

### "Access control for organization resources with IAM \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- Source ID: `site-iam-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- For example, to make anotheradmin@gcp-test.com an Organization Administrator, change the previous example as follows: { "bindings" : [ { "members" : [ "user:testuser1@gcp-test.com" ], "role" : "roles/editor" }, { "members" : [ "user:admin@gcp-test.com" , "user:anotheradmin@gcp-test.com" ], "role" : "roles/resourcemanager.organizationAdmin" }, { "members" : [ "user:testuser20@gcp-test.com" ], "role" : "roles/resourcemanager.projectCreator" }, ], "etag" : "BwU1aRxWk30=" } Update the organization resource's allow policy by running the following command: gcloud alpha organizations set-iam-policy <var>ORGANIZATION ID</var> policy.json API Request: POST h tt ps : //cloudresourcemanager.googleapis.com/v3/organizations/12345:setIamPolicy { "policy" : { "version" : "0" , "bindings" : [ { "role" : "roles/resourcemanager.organizationAdmin" , "members" : [ "user:email1@gmail.com" ] }, { "role" : "roles/resourcemanager.projectCreator" , "members" : [ "user:email2@gmail.com" , "user:email3@gmail.com" , "serviceAccount:my-other-app@appspot.gserviceaccount.com" ] } ] "etag" : "BwUjHYKHHiQ=" } } Response: { "bindings" : [ { "role" : "roles/resourcemanager.organizationAdmin" , "members" : [ "user:email1@gmail.com" ] }, { "role" : "roles/resourcemanager.projectCreator" , "members" : [ "user:email2@gmail.com" , "user:email3@gmail.com" , "serviceAccount:my-other-app@appspot.gserviceaccount.com" ] } ] "etag" : "BwUjHYKJUiQ=" } The setIamPolicy() method lets you grant roles to users by attaching an allow policy to the organization resource.
- In the Info Panel , under Permissions , click Expand a role and display all members who have that role. gcloud Get the allow policy for the organization resource using the get-iam-policy command: gcloud alpha organizations get-iam-policy <var>ORGANIZATION ID</var> --format json > <var>FILENAME.JSON</var> The command outputs the allow policy, which looks similar to the following: bindings : - members : - user:testuser1@gcp-test.com role : roles/editor - members : - user:admin@gcp-test.com role:roles/resourcemanager.organizationAdmin - members : - user:testuser2@gcp-test.com role : roles/resourcemanager.projectCreator etag" : "BwU1aRxWk30=" API The following code snippet returns the allow policy for the organization resource https://cloudresourcemanager.googleapis.com/v3/organizations/12345 .
- Click Add . gcloud To set an organization resource's allow policy using the gcloud command: Get the allow policy for the organization resource using the get-iam-policy command and output the policy to a JSON file: gcloud alpha organizations get-iam-policy <var>ORGANIZATION ID</var> --format json > <var>FILENAME.JSON</var> The contents of the JSON file looks similar to the following: { "bindings" : [ { "members" : [ "user:testuser1@gcp-test.com" ], "role" : "roles/editor" }, { "members" : [ "user:admin@gcp-test.com" , ], "role" : "roles/resourcemanager.organizationAdmin" }, { "members" : [ "user:testuser2@gcp-test.com" ], "role" : "roles/resourcemanager.projectCreator" }, ], "etag" : "BwU1aRxWk30=" } Open the JSON file in a text editor.
- For example, the following allow policy grants the Organization Policy Administrator role only on resources that have the environment: dev tag, and doesn't grant it on any other resource: { "bindings" : [ { "members" : [ "{dynamic print variables.examples.principal group api}" ], "role" : "roles/orgpolicy.policyAdmin" , "condition" : { "title" : "Dev environment only" , "description" : "Only granted in the development environment" , "expression" : "resource.matchTag('123456789012/env', 'dev')" } } ], "etag" : "BwWKmjvelug=" , "version" : 3 } Test permissions You can test IAM permissions on a user for an organization resource with the testIamPermissions() method.

### "Create custom constraints for Essential Contacts \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies](https://docs.cloud.google.com/resource-manager/docs/essentialcontacts-custom-org-policies)
- Source ID: `site-docs-reference-2`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- After you verify that the organization policy in dry-run mode works as intended, set the live policy by clicking Set policy . gcloud To create an organization policy with boolean rules, create a policy YAML file that references the constraint: name : projects/ PROJECT ID /policies/ CONSTRAINT NAME spec : rules : - enforce : true dryRunSpec : rules : - enforce : true Replace the following: PROJECT ID : the project that you want to enforce your constraint on.
- After you verify that the organization policy in dry-run mode works as intended, set the live policy with the org-policies set-policy command and the spec flag: gcloud org-policies set-policy POLICY PATH --update-mask = spec Replace POLICY PATH with the full path to your organization policy YAML file.
- To enforce the organization policy in dry-run mode , run the following command with the dryRunSpec flag: gcloud org-policies set-policy POLICY PATH --update-mask = dryRunSpec Replace POLICY PATH with the full path to your organization policy YAML file.
- Test the custom organization policy The following example creates a custom constraint and policy that allow the users to subscribe only to technical notifications in a specific project.

### "Manage resources with custom constraints \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/custom-constraints](https://docs.cloud.google.com/resource-manager/docs/custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- After you verify that the organization policy in dry-run mode works as intended, set the live policy by clicking Set policy . gcloud To create an organization policy with boolean rules, create a policy YAML file that references the constraint: name : projects/ PROJECT ID /policies/ CONSTRAINT NAME spec : rules : - enforce : true dryRunSpec : rules : - enforce : true Replace the following: PROJECT ID : the project that you want to enforce your constraint on.
- Test the policy Create a project with project ID sampleDemoProject in the organization: gcloud projects create sampleDemoProject \ --organization = ORGANIZATION ID The output is the following: PERMISSION DENIED: The caller does not have permission Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- After you verify that the organization policy in dry-run mode works as intended, set the live policy with the org-policies set-policy command and the spec flag: gcloud org-policies set-policy POLICY PATH --update-mask = spec Replace POLICY PATH with the full path to your organization policy YAML file.
- To enforce the organization policy in dry-run mode , run the following command with the dryRunSpec flag: gcloud org-policies set-policy POLICY PATH --update-mask = dryRunSpec Replace POLICY PATH with the full path to your organization policy YAML file.

