---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.656Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Gemini Code Assist subscription licensing"
feature_slug: "gemini-code-assist-subscription-licensing"
latest_feature_date: "2024-10-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/code-customization"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/manage-licenses"
  - "https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini"
keywords:
  - "gemini"
  - "code"
  - "assist"
  - "subscription"
  - "licensing"
  - "administrators"
  - "can"
  - "assign"
---

# Gemini Code Assist subscription licensing

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Administrators can assign, unassign, and manage Gemini Code Assist subscription licenses for users.

## Extended Definition

Administrators can assign, unassign, and manage Gemini Code Assist subscription licenses for users.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/manage-licenses](https://docs.cloud.google.com/gemini/docs/codeassist/manage-licenses)
- [https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini](https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini)

## Supporting Pages

### "Configure Gemini Code Assist code customization \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- Source ID: `site-docs-root`
- Final score: 280
- Re-rank relevance: N/A

Evidence snippets:
- Subset of the index You can create multiple repository groups and assign IAM roles to different IAM principals. data "google iam policy" "foo" { binding { role = "roles/cloudaicompanion.repositoryGroupsUser" members = [ "test-user@example.com" ] } } resource "google gemini repository group iam policy" "foo" { project = " PROJECT ID " location = " REGION " code repository index id = " INDEX NAME " repository group id = " GROUP NAME " policy data = data.google iam policy.foo.policy data } data "google gemini repository group iam policy" "foo" { project = " PROJECT ID " location = " REGION " code repository index id = " INDEX NAME " repository group id = " GROUP NAME " depends on = [ google gemini repository group iam policy.foo ] } You can also create a binding: resource "google gemini repository group iam binding" "foo" { project = " PROJECT ID " location = " REGION " code repository index id = " INDEX NAME " repository group id = " GROUP NAME " role = "roles/cloudaicompanion.repositoryGroupsUser" members = [ "test-user@example.com" ] } Replace the following: GROUP NAME : the repository group name you created in a preceding step to control access to your index using repository groups.
- Before you begin Set up Gemini Code Assist with an Enterprise subscription .
- You also can create a repository group with repositories defined in a JSON (or YAML) file, formatted as follows: JSON [ { "resource" : " REPOSITORY RESOURCE NAME " , "branchPattern" : "main dev" }, { "resource" : " REPOSITORY RESOURCE NAME " , "branchPattern" : "dev" } ] YAML - resource : REPOSITORY RESOURCE NAME branchPattern : main dev - resource : REPOSITORY RESOURCE NAME branchPattern : dev To create a repository group based on a JSON or YAML file, in a shell environment, use the gemini code-repository-indexes repository-groups create command : JSON gcloud gemini code-repository-indexes repository-groups create REPOSITORY GROUP \ --project = PROJECT ID \ --location = REGION \ --code-repository-index = INDEX NAME \ --repositories = FILEPATH .json YAML gcloud gemini code-repository-indexes repository-groups create REPOSITORY GROUP \ --project = PROJECT ID \ --location = REGION \ --code-repository-index = INDEX NAME \ --repositories = FILEPATH .yaml If preferred, you can encrypt and control your data with a customer-managed encryption key (CMEK) through Cloud Key Management Service .
- You also can create a repository group with repositories defined in a JSON (or YAML) file, formatted as follows: JSON [ { "resource" : " REPOSITORY RESOURCE NAME " , "branchPattern" : "main dev" }, { "resource" : " REPOSITORY RESOURCE NAME " , "branchPattern" : "dev" } ] YAML - resource : REPOSITORY RESOURCE NAME branchPattern : main dev - resource : REPOSITORY RESOURCE NAME branchPattern : dev To create a repository group based on a JSON or YAML file, in a shell environment, use the gemini code-repository-indexes repository-groups create command : JSON gcloud gemini code-repository-indexes repository-groups create REPOSITORY GROUP \ --project = PROJECT ID \ --location = REGION \ --code-repository-index = INDEX NAME \ --repositories = FILEPATH .json YAML gcloud gemini code-repository-indexes repository-groups create REPOSITORY GROUP \ --project = PROJECT ID \ --location = REGION \ --code-repository-index = INDEX NAME \ --repositories = FILEPATH .yaml If preferred, you can encrypt and control your data with a customer-managed encryption key (CMEK) through Cloud Key Management Service .

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 270
- Re-rank relevance: N/A

Evidence snippets:
- After you set up Gemini Code Assist, you can view license assignments by navigating to the Admin for Gemini page, selecting your billing account, clicking Manage Gemini Code Assist Subscription , and then selecting the License management tab.
- A user in your organization is automatically assigned a license when they use Gemini Code Assist within a supported IDE, provided all the following conditions are met: The user has selected a project that is associated with the subscription's billing account.
- A user in your organization is automatically assigned a license when they use Gemini Code Assist within a supported IDE, provided all the following conditions are met: The user has selected a project that is associated with the subscription's billing account.
- When all available licenses in the subscription are assigned, users who try to access Gemini Code Assist without a license will receive an error message indicating one is required.

### "Manage Gemini Code Assist Standard and Enterprise licenses \_|\_ Gemini\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/manage-licenses](https://docs.cloud.google.com/gemini/docs/codeassist/manage-licenses)
- Source ID: `site-docs-root`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the command succeeds, it returns licensedUsers output in the following format: { "licensedUsers": [ { "username": "dana@example.com", "assignTime": "2024-09-26T16:24:40.559222Z" }, { "username": "lee@example.com", "assignTime": "2024-09-26T16:24:40.559222Z" }, { "username": "taylor@example.com", "assignTime": "2024-09-26T16:24:40.559222Z" }, { "username": "bola@example.com", "assignTime": "2024-09-26T16:24:14.610828Z" } ] } If there are no Gemini Code Assist Standard or Enterprise license assignments or the ORDER ID is invalid, it returns licensedUsers output in the following format: {} Automatically assign Gemini Code Assist Standard and Enterprise licenses You can enable automatic license assignment for a subscription.
- Note: You can't assign a Gemini Code Assist Standard seat license to a user that has a Google Developer Program Premium subscription , because such a user already has a Gemini Code Assist Standard license as part of their own subscription.
- If the Gemini Code Assist Standard or Enterprise subscription is set to Automatically Assign Licenses , then you cannot manage individual licenses.
- View Gemini Code Assist Standard and Enterprise license assignments Select one of the following options: Console Verify that you have the following IAM permissions on the billing account that owns the subscription: billing.accounts.get consumerprocurement.orders.get consumerprocurement.licensePools.get consumerprocurement.licensePools.enumerateLicensedUsers resourcemanager.projects.get Go to the Admin for Gemini page and select the project attached to your billing account with the Gemini Code Assist Standard or Enterprise subscription.

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini](https://docs.cloud.google.com/gemini/docs/discover/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: N/A

Evidence snippets:
- After you set up Gemini Code Assist, you can view license assignments by navigating to the Admin for Gemini page, selecting your billing account, clicking Manage Gemini Code Assist Subscription , and then selecting the License management tab.
- A user in your organization is automatically assigned a license when they use Gemini Code Assist within a supported IDE, provided all the following conditions are met: The user has selected a project that is associated with the subscription's billing account.
- A user in your organization is automatically assigned a license when they use Gemini Code Assist within a supported IDE, provided all the following conditions are met: The user has selected a project that is associated with the subscription's billing account.
- When all available licenses in the subscription are assigned, users who try to access Gemini Code Assist without a license will receive an error message indicating one is required.

