---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.390Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Terraform repository SSH authentication and service account fields"
feature_slug: "terraform-repository-ssh-authentication-and-service-account-fields"
latest_feature_date: "2023-10-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/connect-repository"
  - "https://docs.cloud.google.com/dataform/docs/release-notes"
  - "https://docs.cloud.google.com/dataform/docs/create-repository"
keywords:
  - "terraform"
  - "repository"
  - "ssh"
  - "authentication"
  - "and"
  - "account"
  - "fields"
  - "this"
---

# Terraform repository SSH authentication and service account fields

Product: Dataform
Coverage: LOW

## Step 02 Summary

This feature adds ssh_authentication_config and service_account fields to the google_dataform_repository Terraform resource.

## Extended Definition

This feature adds ssh_authentication_config and service_account fields to the google_dataform_repository Terraform resource.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/connect-repository](https://docs.cloud.google.com/dataform/docs/connect-repository)
- [https://docs.cloud.google.com/dataform/docs/release-notes](https://docs.cloud.google.com/dataform/docs/release-notes)
- [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository)

## Supporting Pages

### "Connect to a third-party Git repository \_|\_ Dataform \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataform/docs/connect-repository](https://docs.cloud.google.com/dataform/docs/connect-repository)
- Source ID: `site-docs-root-2`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table lists supported Git providers and connection methods that are available for their repositories: Git provider Connection method Azure DevOps Services SSH Bitbucket SSH GitHub SSH or HTTPS GitLab SSH or HTTPS Important: To connect your remote Git repository to Dataform, verify that your Git host has a public IP address .
- Connect a remote repository through SSH To connect a remote repository through SSH, you need to generate an SSH key and a Secret Manager secret.
- The value that you copy must be in the following format: ALGORITHM BASE64 KEY VALUE For example: ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC7Hr1oTWqNqOlzGJOfGJ4NakVyIzf1rXYd4d7wo6jBlkLvCA4odBlL0mDUyZ0/QUfTTqeu+tm22gOsv+VrVTMk6vwRU75gY/y9ut5Mb3bR5BV58dKXyq9A9UeB5Cakehn5Zgm6x1mKoVyf+FFn26iYqXJRgzIZZcZ5V6hrE0Qg39kZm4az48o0AUbf6Sp4SLdvnuMa2sVNwHBboS7EJkm57XQPVU3/QpyNLHbWDdzwtrlS+ez30S3AdYhLKEOxAG8weOnyrtLJAUen9mTkol8oII1edf7mWWbWVf0nBmly21+nZcmCTISQBtdcyPaEno7fFQMDD26/s0lfKob4Kw8H Verify this key is still up-to-date with Azure DevOps Services.
- Azure DevOps Services To retrieve the Azure DevOps Services public host key, run the following command in the terminal: ssh-keyscan -t rsa ssh.dev.azure.com Copy one of the outputted keys, omitting ssh.dev.azure.com from the beginning of the line.

### Dataform release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/release-notes](https://docs.cloud.google.com/dataform/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- October 17, 2023 Feature ssh authentication config and service account fields are available in the google dataform repository Dataform Terraform resource.
- This feature enhances security by requiring users to have the iam.serviceAccounts.actAs permission on the service account used to run workflows, ensuring a more secure and predictable permissions model for your Dataform projects.
- August 18, 2023 Feature SSH authentication for GitHub, GitLab, and Bitbucket Cloud repositories is supported.
- August 01, 2023 Feature The following Dataform API methods for version control are available: CommitRepositoryChanges() ReadRepositoryFile() QueryRepositoryDirectoryContents() FetchRepositoryHistory() The following fields of Repository are available: labels set authenticated user admin July 27, 2023 Feature Selection of files for a commit is available.

### Create a repository \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Restrict remote repositories Required roles To get the permissions that you need to create and delete a repository, ask your administrator to grant you the following IAM roles on repositories: Dataform Admin ( roles/dataform.admin ) - the project Service Account User ( roles/iam.serviceAccountUser ) - the custom service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- Grant required roles To run workflows in your Dataform repository and in BigQuery, you can use a custom service account or your Google Account.
- This document helps you understand the concept of repositories in Dataform and how to create a new repository.
- By default, Dataform uses a service agent or service account derived from your project number in the following format: service- PROJECT NUMBER @gcp-sa-dataform.iam.gserviceaccount.com You must use a custom service account to run workflows in your repository, but the default Dataform service agent is still used for all other repository operations.

