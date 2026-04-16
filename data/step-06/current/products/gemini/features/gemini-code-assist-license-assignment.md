---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.655Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Gemini Code Assist license assignment"
feature_slug: "gemini-code-assist-license-assignment"
latest_feature_date: "2024-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/codeassist/manage-licenses"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/code-customization"
  - "https://docs.cloud.google.com/gemini/docs/codeassist/request-license"
keywords:
  - "gemini"
  - "code"
  - "assist"
  - "license"
  - "assignment"
  - "admins"
  - "can"
  - "assign"
---

# Gemini Code Assist license assignment

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Admins can assign Gemini Code Assist licenses automatically or manually.

## Extended Definition

Admins can assign Gemini Code Assist licenses automatically or manually.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/codeassist/manage-licenses](https://docs.cloud.google.com/gemini/docs/codeassist/manage-licenses)
- [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- [https://docs.cloud.google.com/gemini/docs/codeassist/request-license](https://docs.cloud.google.com/gemini/docs/codeassist/request-license)

## Supporting Pages

### "Manage Gemini Code Assist Standard and Enterprise licenses \_|\_ Gemini\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/manage-licenses](https://docs.cloud.google.com/gemini/docs/codeassist/manage-licenses)
- Source ID: `site-docs-root`
- Final score: 319
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the command succeeds, it returns licensedUsers output in the following format: { "licensedUsers": [ { "username": "dana@example.com", "assignTime": "2024-09-26T16:24:40.559222Z" }, { "username": "lee@example.com", "assignTime": "2024-09-26T16:24:40.559222Z" }, { "username": "taylor@example.com", "assignTime": "2024-09-26T16:24:40.559222Z" }, { "username": "bola@example.com", "assignTime": "2024-09-26T16:24:14.610828Z" } ] } If there are no Gemini Code Assist Standard or Enterprise license assignments or the ORDER ID is invalid, it returns licensedUsers output in the following format: {} Automatically assign Gemini Code Assist Standard and Enterprise licenses You can enable automatic license assignment for a subscription.
- Manually assign Gemini Code Assist Standard and Enterprise licenses to individual users With manual license assignment, you can add and remove licenses for individual users.
- View Gemini Code Assist Standard and Enterprise license assignments Select one of the following options: Console Verify that you have the following IAM permissions on the billing account that owns the subscription: billing.accounts.get consumerprocurement.orders.get consumerprocurement.licensePools.get consumerprocurement.licensePools.enumerateLicensedUsers resourcemanager.projects.get Go to the Admin for Gemini page and select the project attached to your billing account with the Gemini Code Assist Standard or Enterprise subscription.
- Users with the cloudaicompanion.licenses.selfAssign permission automatically receive a license when they first access Gemini Code Assist Standard or Enterprise in a project paid by a billing account that has a valid subscription that is configured for automatic license assignment and has available licenses covered by your subscriptions in the billing account.

### "Set up Gemini Code Assist Standard and Enterprise \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/set-up-gemini)
- Source ID: `site-docs-root`
- Final score: 295
- Re-rank relevance: N/A

Evidence snippets:
- After you set up Gemini Code Assist, you can view license assignments by navigating to the Admin for Gemini page, selecting your billing account, clicking Manage Gemini Code Assist Subscription , and then selecting the License management tab.
- After you set up Gemini Code Assist, you can then choose to assign licenses manually .
- Any custom roles that you create need the following permissions for you to assign and manage Gemini Code Assist licenses: consumerprocurement.orders.get consumerprocurement.orders.licensePools. consumerprocurement.orders.licensePools.update consumerprocurement.orders.licensePools.get consumerprocurement.orders.licensePools.assign consumerprocurement.orders.licensePools.unassign consumerprocurement.orders.licensePools.enumerateLicensedUsers Also note that for any of the preceding permissions to work, the Gemini for Google Cloud API needs to be enabled in the same Google Cloud project where you've assigned each permission.
- Any custom roles that you create need the following permissions for you to access Gemini Code Assist Standard and Enterprise: cloudaicompanion.companions.generateChat cloudaicompanion.companions.generateCode cloudaicompanion.instances.completeCode cloudaicompanion.instances.completeTask cloudaicompanion.instances.generateCode cloudaicompanion.instances.generateText cloudaicompanion.instances.exportMetrics cloudaicompanion.instances.queryEffectiveSetting cloudaicompanion.instances.queryEffectiveSettingBindings serviceusage.services.enable Assign and manage licenses.

### "Configure Gemini Code Assist code customization \_|\_ Gemini for Google\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- Source ID: `site-docs-root`
- Final score: 288
- Re-rank relevance: N/A

Evidence snippets:
- Subset of the index You can create multiple repository groups and assign IAM roles to different IAM principals. data "google iam policy" "foo" { binding { role = "roles/cloudaicompanion.repositoryGroupsUser" members = [ "test-user@example.com" ] } } resource "google gemini repository group iam policy" "foo" { project = " PROJECT ID " location = " REGION " code repository index id = " INDEX NAME " repository group id = " GROUP NAME " policy data = data.google iam policy.foo.policy data } data "google gemini repository group iam policy" "foo" { project = " PROJECT ID " location = " REGION " code repository index id = " INDEX NAME " repository group id = " GROUP NAME " depends on = [ google gemini repository group iam policy.foo ] } You can also create a binding: resource "google gemini repository group iam binding" "foo" { project = " PROJECT ID " location = " REGION " code repository index id = " INDEX NAME " repository group id = " GROUP NAME " role = "roles/cloudaicompanion.repositoryGroupsUser" members = [ "test-user@example.com" ] } Replace the following: GROUP NAME : the repository group name you created in a preceding step to control access to your index using repository groups.
- You also can create a repository group with repositories defined in a JSON (or YAML) file, formatted as follows: JSON [ { "resource" : " REPOSITORY RESOURCE NAME " , "branchPattern" : "main dev" }, { "resource" : " REPOSITORY RESOURCE NAME " , "branchPattern" : "dev" } ] YAML - resource : REPOSITORY RESOURCE NAME branchPattern : main dev - resource : REPOSITORY RESOURCE NAME branchPattern : dev To create a repository group based on a JSON or YAML file, in a shell environment, use the gemini code-repository-indexes repository-groups create command : JSON gcloud gemini code-repository-indexes repository-groups create REPOSITORY GROUP \ --project = PROJECT ID \ --location = REGION \ --code-repository-index = INDEX NAME \ --repositories = FILEPATH .json YAML gcloud gemini code-repository-indexes repository-groups create REPOSITORY GROUP \ --project = PROJECT ID \ --location = REGION \ --code-repository-index = INDEX NAME \ --repositories = FILEPATH .yaml If preferred, you can encrypt and control your data with a customer-managed encryption key (CMEK) through Cloud Key Management Service .
- You also can create a repository group with repositories defined in a JSON (or YAML) file, formatted as follows: JSON [ { "resource" : " REPOSITORY RESOURCE NAME " , "branchPattern" : "main dev" }, { "resource" : " REPOSITORY RESOURCE NAME " , "branchPattern" : "dev" } ] YAML - resource : REPOSITORY RESOURCE NAME branchPattern : main dev - resource : REPOSITORY RESOURCE NAME branchPattern : dev To create a repository group based on a JSON or YAML file, in a shell environment, use the gemini code-repository-indexes repository-groups create command : JSON gcloud gemini code-repository-indexes repository-groups create REPOSITORY GROUP \ --project = PROJECT ID \ --location = REGION \ --code-repository-index = INDEX NAME \ --repositories = FILEPATH .json YAML gcloud gemini code-repository-indexes repository-groups create REPOSITORY GROUP \ --project = PROJECT ID \ --location = REGION \ --code-repository-index = INDEX NAME \ --repositories = FILEPATH .yaml If preferred, you can encrypt and control your data with a customer-managed encryption key (CMEK) through Cloud Key Management Service .
- Optional: To delete the index, in a shell environment, use the gemini code-repository-indexes delete command : gcloud gemini code-repository-indexes delete INDEX NAME \ --location= REGION \ --project= PROJECT ID What's next Start using Gemini Code Assist: VS Code, IntelliJ, and other supported JetBrains IDEs: Code with Gemini Code Assist Cloud Shell Editor: Code with Gemini Code Assist Cloud Workstations: Code with Gemini Code Assist Learn how to use code customization and best practices.

### "Request a Gemini Code Assist license \_|\_ Gemini for Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/gemini/docs/codeassist/request-license](https://docs.cloud.google.com/gemini/docs/codeassist/request-license)
- Source ID: `site-docs-root`
- Final score: 282
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Licenses are assigned to specific people (not Google Cloud projects), so after you are assigned a license you can use Gemini Code Assist in any Google Cloud project that's managed by your organization.
- If all licenses in the subscription have been assigned, users not yet assigned a license are shown an error message stating that they need a license to access Gemini Code Assist.
- Home Documentation AI and ML Gemini for Google Cloud Guides Send feedback Request a Gemini Code Assist license Stay organized with collections Save and categorize content based on your preferences.
- You must have a valid license in order to use Gemini Code Assist Standard and Enterprise .

