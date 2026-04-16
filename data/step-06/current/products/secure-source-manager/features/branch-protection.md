---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:17.042Z"
product_name: "Secure Source Manager"
product_slug: "secure-source-manager"
feature_name: "Branch protection"
feature_slug: "branch-protection"
latest_feature_date: "2024-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secure-source-manager/docs/branch-protection-overview"
  - "https://docs.cloud.google.com/secure-source-manager/docs/configure-branch-protection"
  - "https://docs.cloud.google.com/secure-source-manager/docs/overview"
  - "https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build"
keywords:
  - "branch"
  - "protection"
  - "is"
  - "now"
  - "generally"
  - "available"
  - "in"
  - "secure"
---

# Branch protection

Product: Secure Source Manager
Coverage: MEDIUM

## Step 02 Summary

Branch protection is now generally available in Secure Source Manager.

## Extended Definition

Branch protection is now generally available in Secure Source Manager.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secure-source-manager/docs/branch-protection-overview](https://docs.cloud.google.com/secure-source-manager/docs/branch-protection-overview)
- [https://docs.cloud.google.com/secure-source-manager/docs/configure-branch-protection](https://docs.cloud.google.com/secure-source-manager/docs/configure-branch-protection)
- [https://docs.cloud.google.com/secure-source-manager/docs/overview](https://docs.cloud.google.com/secure-source-manager/docs/overview)
- [https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build](https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build)

## Supporting Pages

### "Branch protection overview \_|\_ Secure Source Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/branch-protection-overview](https://docs.cloud.google.com/secure-source-manager/docs/branch-protection-overview)
- Source ID: `site-docs-reference`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes branch protection in Secure Source Manager for administrators.
- Repository administrators can configure branch protection to block code submission to specific branches based on the following criteria.
- What's next Configure branch protection Connect to Cloud Build Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application development Secure Source Manager Guides Send feedback Branch protection overview Stay organized with collections Save and categorize content based on your preferences.

### "Configure branch protection \_|\_ Secure Source Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/configure-branch-protection](https://docs.cloud.google.com/secure-source-manager/docs/configure-branch-protection)
- Source ID: `site-docs-reference`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to configure branch protection rules for a Secure Source Manager repository, ask your administrator to grant you the following IAM roles: Secure Source Manager Instance Accessor ( roles/securesourcemanager.instanceAccessor ) on the Secure Source Manager instance Secure Source Manager Repository Admin ( roles/securesourcemanager.repoAdmin ) on the Secure Source Manager repository To approve pull requests on protected branches in any repository in a Secure Source Manager instance: Secure Source Manager Repository Pull Request Approver ( roles/securesourcemanager.repoPullRequestApprover ) on the Google Cloud project for the instance Secure Source Manager Repository Writer ( roles/securesourcemanager.repoWriter ) on the Google Cloud project for the instance To approve pull requests on protected branches in a single repository: Secure Source Manager Repository Pull Request Approver ( roles/securesourcemanager.repoPullRequestApprover ) on the repository Secure Source Manager Repository Writer ( roles/securesourcemanager.repoWriter ) on the repository For more information about granting roles, see Manage access to projects, folders, and organizations .
- BRANCH NAME PATTERN : the branch name or regex pattern, such as main . resource "google secure source manager branch rule" "default" { branch rule id = " BRANCH RULE ID " project = " PROJECT ID " location = " LOCATION " repository id = " REPOSITORY ID " include pattern = " BRANCH NAME PATTERN " minimum approvals count = 2 minimum reviews count = 2 require comments resolved = true require linear history = true require pull request = true disabled = false allow stale reviews = false } Modify a branch protection rule To modify a branch protection rule, do the following: In the Secure Source Manager web interface, select the repository with the branch protection rule you want to modify.
- This page explains how to configure branch protection for Secure Source Manager repositories.
- Branch protection lets repository administrators set rules to control who can make changes to branches, who needs to approve or review changes, and what conditions must be met before an approved change can be merged into a branch.

### Secure Source Manager overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/overview](https://docs.cloud.google.com/secure-source-manager/docs/overview)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Instances and repositories Secure Source Manager instances are deployed to an available Google Cloud region and are accessible through their instance URIs.
- For more information on protecting branches in Secure Source Manager, see Branch protection overview .
- Security compliance Secure Source Manager is in compliance with the following certifications: FedRAMP High compliant HIPAA compliant Configure a private Secure Source Manager instance in a VPC Service Controls perimeter You can use Secure Source Manager in a VPC Service Controls perimeter in order to guard against data exfiltration.
- This enables features like Private Google Access for Secure Source Manager repositories, letting you fetch code from Secure Source Manager without exposing your instance to the public internet.

### Connect to Cloud Build \_|\_ Secure Source Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build](https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to connect a Secure Source Manager repository to Cloud Build, ask your administrator to grant you the following IAM roles: Secure Source Manager Repository Writer ( roles/securesourcemanager.repoWriter ) on your repository Secure Source Manager Instance Accessor ( roles/securesourcemanager.instanceAccessor ) on the Secure Source Manager instance For more information about granting roles, see Manage access to projects, folders, and organizations .
- You can prevent commits with unsuccessful builds from merging into important branches if you configure a branch protection rule to require a successful status check from triggers configured in your triggers file.
- This page details how to invoke builds automatically from Secure Source Manager using Cloud Build configuration files and a triggers YAML file in your Secure Source Manager repository.
- View build status When a build is triggered by a push or pull request event, the commit and build status is displayed in the Secure Source Manager web interface.

