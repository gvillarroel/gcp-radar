---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.394Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Looker Continuous Integration"
feature_slug: "looker-continuous-integration"
latest_feature_date: "2026-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-ci"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/action-hub"
keywords:
  - "looker"
  - "continuous"
  - "integration"
  - "validates"
  - "content"
  - "through"
  - "ci"
  - "suites"
---

# Looker Continuous Integration

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Looker Continuous Integration validates content through CI suites and integrates with GitHub-triggered runs; Looker CI lets you run validators on LookML projects to catch SQL, data test, content, and LookML issues before production.

## Extended Definition

Looker Continuous Integration validates content through CI suites and integrates with GitHub-triggered runs; Looker CI lets you run validators on LookML projects to catch SQL, data test, content, and LookML issues before production.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-ci](https://docs.cloud.google.com/looker/docs/admin-panel-platform-ci)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)

## Supporting Pages

### "Admin settings - Continuous Integration \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-ci](https://docs.cloud.google.com/looker/docs/admin-panel-platform-ci)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To automatically run CI suites on your repository, Continuous Integration needs the following permissions: Read access to your repository's metadata and pull requests Read and write access to your repository's commit statuses, repository hooks, and workflows These permissions are not set up when you set up a Git connection for your LookML project in the Looker IDE.
- Home Documentation Data analytics Looker Guides Send feedback Admin settings - Continuous Integration Stay organized with collections Save and categorize content based on your preferences.
- Integrations If you use GitHub as a remote repository for your LookML project, you can configure Continuous Integration to automatically run CI suites when LookML developers submit pull requests to your LookML repository .
- Continuous Integration is not supported on Looker (Google Cloud core) instances that are enabled for CMEK , or on instances that are configured with a private connections or hybrid connections network configuration.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- The Looker CI Users role has the following permissions that are required to perform CI runs: deploy : required for setting up the GitHub webhooks that are required for CI runs see ci : required to view the results of CI runs, view the CI Suites page, and run CI suites manage ci : required to create CI suites, manage CI users, and configure the Git connection with Continuous Integration Gemini The Gemini role cannot be renamed or deleted and contains only the gemini in looker permission in its permission set.
- Default permission sets For new installations, Looker includes several default permission sets that you can start with: Permission Set Included Permissions Admin All permissions Developer access data , can create forecast , clear cache refresh , create custom fields , create table calculations , deploy , develop , download without limit , explore , manage spaces , mobile app access , save content , save dashboards , save looks , schedule look emails , see drill overlay , see lookml , see lookml dashboards , see looks , see pdts , see sql , see user dashboards , send to integration , schedule without limit , use sql runner NOTE : The see pdts permission is included in the Developer default permission only for Looker installations that were created with Looker 21.18 or later.
- If you assign the manage project connections restricted permission to a user, the user will be able to see, edit, and create project-scoped connections for any projects included in the model set. see ci develop Instance Wide NN Added 25.6 Users can view the results of Continuous Integration runs, view the Continuous Integration Suites page, and run test suites. manage ci see ci Instance Wide NN Added 25.6 Users can create Continuous Integration suites, manage Continuous Integration users, and configure the git connection with Continuous Integration.
- Only an admin can enable the Continuous Integration feature for a Looker instance. use sql runner see lookml Model Specific Users can use SQL Runner to run raw SQL against their allowed connections.

### Sharing data through an action hub \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- Source ID: `site-docs-reference-required-4`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- In addition to delivering content to Looker's built-in destinations, you can use actions — also called integrations — to deliver content to third-party services that are integrated with Looker through an action hub server.
- Define a valid value for the user attribute for the users or user groups that need to deliver content to your action destination. (These users must also have send to integration permissions.) The params parameter represents the form fields that a Looker admin must configure on the action's enablement page from the Actions list in the Admin panel.
- Home Documentation Data analytics Looker Guides Send feedback Sharing data through an action hub Stay organized with collections Save and categorize content based on your preferences.
- You can also set up multiple action hubs if you would like to use Looker's integrations through the Looker Action Hub and also host your own private or custom actions.

