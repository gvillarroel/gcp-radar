---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:05.596Z"
product_name: "Cloud Source Repositories"
product_slug: "cloud-source-repositories"
feature_name: "Beta user interface"
feature_slug: "beta-user-interface"
latest_feature_date: "2018-07-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/source-repositories/docs/audit-logging"
  - "https://docs.cloud.google.com/source-repositories/docs/csr-ssm-migration-guide"
  - "https://docs.cloud.google.com/source-repositories/docs/csr-ssm-permission-mapping"
  - "https://docs.cloud.google.com/source-repositories/docs/browsing-repositories"
keywords:
  - "beta"
  - "user"
  - "interface"
  - "source"
  - "repositories"
  - "provides"
  - "for"
  - "managing"
---

# Beta user interface

Product: Cloud Source Repositories
Coverage: MEDIUM

## Step 02 Summary

Cloud Source Repositories provides a beta user interface for managing repositories and related tasks.

## Extended Definition

Cloud Source Repositories provides a beta user interface for managing repositories and related tasks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/source-repositories/docs/audit-logging](https://docs.cloud.google.com/source-repositories/docs/audit-logging)
- [https://docs.cloud.google.com/source-repositories/docs/csr-ssm-migration-guide](https://docs.cloud.google.com/source-repositories/docs/csr-ssm-migration-guide)
- [https://docs.cloud.google.com/source-repositories/docs/csr-ssm-permission-mapping](https://docs.cloud.google.com/source-repositories/docs/csr-ssm-permission-mapping)
- [https://docs.cloud.google.com/source-repositories/docs/browsing-repositories](https://docs.cloud.google.com/source-repositories/docs/browsing-repositories)

## Supporting Pages

### Cloud Source Repositories audit logging information \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/source-repositories/docs/audit-logging](https://docs.cloud.google.com/source-repositories/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Audited operations The following table summarizes which API operations correspond to each audit log type in Cloud Source Repositories: Note: Cloud Source Repositories audit logging does not capture events from users searching and browsing within repositories in the user interface.
- Home Documentation Application development Cloud Source Repositories Guides Send feedback Cloud Source Repositories audit logging information Stay organized with collections Save and categorize content based on your preferences.
- Available audit logs The following types of audit logs are available for Cloud Source Repositories: Admin Activity audit logs Includes "admin write" operations that write metadata or configuration information.
- For more information about querying by using the Logs Explorer, see Build queries in the Logs Explorer . gcloud The Google Cloud CLI provides a command-line interface to the Logging API.

### "Migrate to Secure Source Manager \_|\_ Cloud Source Repositories \_|\_ Google\

- URL: [https://docs.cloud.google.com/source-repositories/docs/csr-ssm-migration-guide](https://docs.cloud.google.com/source-repositories/docs/csr-ssm-migration-guide)
- Source ID: `site-iam-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Prerequisites Before you begin the migration, make sure you meet the following prerequisites: Permissions : The user or service accounts must have the following permissions to perform the migration: source.repos.get , which is available in the roles/source.reader role, on the source CSR repository securesourcemanager.instances.access , which is available in the roles/securesourcemanager.instanceAccessor role, and securesourcemanager.repositories.fetch , which is available in the roles/securesourcemanager.repoWriter role, on the target SSM instance and repository.
- Determine access principal and method for CSR, SSM repositories You can connect to CSR using HTTP or SSH transports when you authenticate as a user principal, or through HTTP when you authenticate as a service account.
- This guide describes how to migrate a Git repository, including all its information, from Google's Cloud Source Repositories (CSR) to Secure Source Manager (SSM).
- Home Documentation Application development Cloud Source Repositories Guides Send feedback Migrate to Secure Source Manager Stay organized with collections Save and categorize content based on your preferences.

### "Translate Cloud Source Repositories roles and permissions to Secure Source\

- URL: [https://docs.cloud.google.com/source-repositories/docs/csr-ssm-permission-mapping](https://docs.cloud.google.com/source-repositories/docs/csr-ssm-permission-mapping)
- Source ID: `site-iam-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required for repository-level roles to be effective. roles/securesourcemanager.instanceManager Manage instance-level configurations. roles/securesourcemanager.instanceOwner Full control over instance configurations. roles/securesourcemanager.instanceRepoCreator Create repositories on an instance. roles/securesourcemanager.sshKeyUser Manage SSH keys for authentication to an instance.
- SSM has 11 roles for user principals, a significant increase compared to Cloud Source Repositories.
- Role Permissions roles/securesourcemanager.repoAdmin Full control over a repository, including repository settings and user access. roles/securesourcemanager.repoPullRequestApprover Approve pull requests in a repository. roles/securesourcemanager.repoReader Read repository content and view pull requests and issues. roles/securesourcemanager.repoWriter Read and write repository content, and manage pull requests and issues. roles/securesourcemanager.repoCreator Create new repositories within a project.
- Use this role with repoReader and instanceAccessor to let a user access an instance, browse the repository, and approve pull requests without modifying other data. roles/securesourcemanager.repoCreator grants only the permission to create repositories in a project.

### "Browsing repositories \_|\_ Cloud Source Repositories \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/source-repositories/docs/browsing-repositories](https://docs.cloud.google.com/source-repositories/docs/browsing-repositories)
- Source ID: `site-iam-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View all repositories If you don't see the repository you want to open in the My source, you can search for it by viewing all repositories.
- Home Documentation Application development Cloud Source Repositories Guides Send feedback Browsing repositories Stay organized with collections Save and categorize content based on your preferences.
- For alternative source hosting options, Secure Source Manager is a regionally deployed, single tenant, managed source code repository hosted on Google Cloud.
- Select a different view of a repository By default, the code search and source browsing interface opens a repository to the master branch.

