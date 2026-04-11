---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.392Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Bitbucket Cloud repository connectivity"
feature_slug: "bitbucket-cloud-repository-connectivity"
latest_feature_date: "2023-08-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/connect-repository"
  - "https://docs.cloud.google.com/dataform/docs/create-repository"
  - "https://docs.cloud.google.com/dataform/docs/repositories"
keywords:
  - "bitbucket"
  - "repository"
  - "connectivity"
  - "lets"
  - "dataform"
  - "connect"
  - "repositories"
  - "to"
---

# Bitbucket Cloud repository connectivity

Product: Dataform
Coverage: LOW

## Step 02 Summary

Bitbucket Cloud repository connectivity lets Dataform connect repositories to Bitbucket Cloud repositories.

## Extended Definition

Bitbucket Cloud repository connectivity lets Dataform connect repositories to Bitbucket Cloud repositories.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/connect-repository](https://docs.cloud.google.com/dataform/docs/connect-repository)
- [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository)
- [https://docs.cloud.google.com/dataform/docs/repositories](https://docs.cloud.google.com/dataform/docs/repositories)

## Supporting Pages

### "Connect to a third-party Git repository \_|\_ Dataform \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataform/docs/connect-repository](https://docs.cloud.google.com/dataform/docs/connect-repository)
- Source ID: `site-docs-root-2`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table lists supported Git providers and connection methods that are available for their repositories: Git provider Connection method Azure DevOps Services SSH Bitbucket SSH GitHub SSH or HTTPS GitLab SSH or HTTPS Important: To connect your remote Git repository to Dataform, verify that your Git host has a public IP address .
- Before you begin If your organization or project restricts remote Git repositories with the dataform.restrictGitRemotes Organization Policy, ensure that the remote Git repository is added to the allowlist in the policy before you create the Dataform repository that you want to connect to a remote repository.
- Required roles To get the permissions that you need to connect a Dataform repository to a remote Git repository, ask your administrator to grant you the Dataform Admin ( roles/dataform.admin ) IAM role on repositories.
- After you connect the repositories, the changes you make in a Dataform development workspace can be pushed to and pulled from the remote Git repository.

### Create a repository \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Important: Before you create a Dataform repository that you want to connect to a remote Git repository , check if your organization or project restricts remote Git repositories with the dataform.restrictGitRemotes Organization Policy.
- After you create a Dataform repository, you can connect it to a remote GitHub, GitLab, or Bitbucket repository.
- For more information, see Restrict remote repositories Required roles To get the permissions that you need to create and delete a repository, ask your administrator to grant you the following IAM roles on repositories: Dataform Admin ( roles/dataform.admin ) - the project Service Account User ( roles/iam.serviceAccountUser ) - the custom service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- Important: To create a Dataform repository connected to a remote Git repository that is not allow-listed in the dataform.restrictGitRemotes policy, first add the remote Git repository to the allowedValues list in the policy, and then create a new Dataform repository and connect it to the remote repository.

### Create a repository \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/repositories](https://docs.cloud.google.com/dataform/docs/repositories)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Important: Before you create a Dataform repository that you want to connect to a remote Git repository , check if your organization or project restricts remote Git repositories with the dataform.restrictGitRemotes Organization Policy.
- After you create a Dataform repository, you can connect it to a remote GitHub, GitLab, or Bitbucket repository.
- For more information, see Restrict remote repositories Required roles To get the permissions that you need to create and delete a repository, ask your administrator to grant you the following IAM roles on repositories: Dataform Admin ( roles/dataform.admin ) - the project Service Account User ( roles/iam.serviceAccountUser ) - the custom service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- Important: To create a Dataform repository connected to a remote Git repository that is not allow-listed in the dataform.restrictGitRemotes policy, first add the remote Git repository to the allowedValues list in the policy, and then create a new Dataform repository and connect it to the remote repository.

