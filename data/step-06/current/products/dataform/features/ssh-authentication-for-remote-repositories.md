---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.393Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "SSH authentication for remote repositories"
feature_slug: "ssh-authentication-for-remote-repositories"
latest_feature_date: "2023-08-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/connect-repository"
  - "https://docs.cloud.google.com/dataform/docs/restrict-git-remotes"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
keywords:
  - "ssh"
  - "authentication"
  - "for"
  - "remote"
  - "repositories"
  - "lets"
  - "dataform"
  - "connect"
---

# SSH authentication for remote repositories

Product: Dataform
Coverage: LOW

## Step 02 Summary

SSH authentication lets Dataform connect to GitHub, GitLab, and Bitbucket Cloud repositories using SSH.

## Extended Definition

SSH authentication lets Dataform connect to GitHub, GitLab, and Bitbucket Cloud repositories using SSH.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/connect-repository](https://docs.cloud.google.com/dataform/docs/connect-repository)
- [https://docs.cloud.google.com/dataform/docs/restrict-git-remotes](https://docs.cloud.google.com/dataform/docs/restrict-git-remotes)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)

## Supporting Pages

### "Connect to a third-party Git repository \_|\_ Dataform \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataform/docs/connect-repository](https://docs.cloud.google.com/dataform/docs/connect-repository)
- Source ID: `site-docs-root-2`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table lists supported Git providers and connection methods that are available for their repositories: Git provider Connection method Azure DevOps Services SSH Bitbucket SSH GitHub SSH or HTTPS GitLab SSH or HTTPS Important: To connect your remote Git repository to Dataform, verify that your Git host has a public IP address .
- Before you begin If your organization or project restricts remote Git repositories with the dataform.restrictGitRemotes Organization Policy, ensure that the remote Git repository is added to the allowlist in the policy before you create the Dataform repository that you want to connect to a remote repository.
- Required roles To get the permissions that you need to connect a Dataform repository to a remote Git repository, ask your administrator to grant you the Dataform Admin ( roles/dataform.admin ) IAM role on repositories.
- To connect a remote repository to a Dataform repository through SSH, follow these steps: In your Git provider, do the following: Azure DevOps Services In Azure DevOps Services, create a private SSH key .

### Restrict remote repositories \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/restrict-git-remotes](https://docs.cloud.google.com/dataform/docs/restrict-git-remotes)
- Source ID: `site-docs-root-2`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following is a request to apply the dataform.restrictGitRemotes constraint to an organization where Dataform repositories can connect to only the selected remote Git repositories, and the constraints/dataform.restrictGitRemotes policy is already set: PATCH https://orgpolicy.googleapis.com/v2/projects/ PROJECT ID OR NUMBER /policies/dataform.restrictGitRemotes The request body contains the desired organization policy for this constraint: { "name": "projects/ PROJECT ID OR NUMBER /policies/dataform.restrictGitRemotes", "spec": { "rules": [ { "values": { "allowedValues": ["https://github.com/example/allowed-repository.git"] } } ] } } Replace PROJECT ID OR NUMBER with the project ID or project number for this request.
- For example, the following is a request to apply the dataform.restrictGitRemotes constraint to an organization where Dataform repositories can connect only to the selected remote Git repositories, and the constraints/dataform.restrictGitRemotes policy is not set yet: POST https://orgpolicy.googleapis.com/v2/projects/ PROJECT ID OR NUMBER /policies The request body contains the desired organization policy for this constraint: { "name": "projects/ PROJECT ID OR NUMBER /policies/dataform.restrictGitRemotes", "spec": { "rules": [ { "values": { "allowedValues": ["https://github.com/example/allowed-repository.git"] } } ] } } Replace PROJECT ID OR NUMBER with the project ID or project number for this request.
- If you do not want Dataform repositories to be able to connect to any remote Git repositories, you can set an organization policy with denyAll set to true : { "name": "organizations/ ORGANIZATION ID /policies/dataform.restrictGitRemotes", "spec": { "rules": [ { "denyAll": true } ] } } Replace < code><var>ORGANIZATION ID < / var >< / code > with the numeric ID of the organization .
- If you do not want Dataform repositories to be able to connect to any remote Git repositories, you can set an organization policy with denyAll set to true : { "name": "organizations/ ORGANIZATION ID /policies/dataform.restrictGitRemotes", "spec": { "rules": [ { "denyAll": true } ] } } Replace ORGANIZATION ID with the numeric ID of the organization.

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 async def sample fetch remote branches(): Create a client client = dataform v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 async def sample list repositories(): Create a client client = dataform v1 .
- ListRepositoriesRequest ( parent="parent value", ) Make the request page result = client. list repositories (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.dataform v1.types.ListRepositoriesRequest , dict]] The request object.
- FetchRemoteBranchesRequest ( name="name value", ) Make the request response = await client. fetch remote branches (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataform v1.types.FetchRemoteBranchesRequest , dict]] The request object.

