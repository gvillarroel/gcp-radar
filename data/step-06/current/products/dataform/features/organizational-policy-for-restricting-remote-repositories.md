---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.392Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Organizational policy for restricting remote repositories"
feature_slug: "organizational-policy-for-restricting-remote-repositories"
latest_feature_date: "2023-09-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/restrict-git-remotes"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient"
keywords:
  - "organizational"
  - "policy"
  - "for"
  - "restricting"
  - "remote"
  - "repositories"
  - "this"
  - "lets"
---

# Organizational policy for restricting remote repositories

Product: Dataform
Coverage: LOW

## Step 02 Summary

This organizational policy lets administrators restrict remote repositories used by Dataform.

## Extended Definition

This organizational policy lets administrators restrict remote repositories used by Dataform.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/restrict-git-remotes](https://docs.cloud.google.com/dataform/docs/restrict-git-remotes)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)

## Supporting Pages

### Restrict remote repositories \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/restrict-git-remotes](https://docs.cloud.google.com/dataform/docs/restrict-git-remotes)
- Source ID: `site-docs-root-2`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following is a request to apply the dataform.restrictGitRemotes constraint to an organization where Dataform repositories can connect to only the selected remote Git repositories, and the constraints/dataform.restrictGitRemotes policy is already set: PATCH https://orgpolicy.googleapis.com/v2/projects/ PROJECT ID OR NUMBER /policies/dataform.restrictGitRemotes The request body contains the desired organization policy for this constraint: { "name": "projects/ PROJECT ID OR NUMBER /policies/dataform.restrictGitRemotes", "spec": { "rules": [ { "values": { "allowedValues": ["https://github.com/example/allowed-repository.git"] } } ] } } Replace PROJECT ID OR NUMBER with the project ID or project number for this request.
- For example, the following is a request to apply the dataform.restrictGitRemotes constraint to an organization where Dataform repositories can connect only to the selected remote Git repositories, and the constraints/dataform.restrictGitRemotes policy is not set yet: POST https://orgpolicy.googleapis.com/v2/projects/ PROJECT ID OR NUMBER /policies The request body contains the desired organization policy for this constraint: { "name": "projects/ PROJECT ID OR NUMBER /policies/dataform.restrictGitRemotes", "spec": { "rules": [ { "values": { "allowedValues": ["https://github.com/example/allowed-repository.git"] } } ] } } Replace PROJECT ID OR NUMBER with the project ID or project number for this request.
- The constraint for restricting remote Git repositories in Dataform is: constraints/dataform.restrictGitRemotes To use the constraint, you create an organization policy with an allowedValues list of URLs of remote Git repositories that can connect to a Dataform repository.
- This document shows you how to use the Organization Policy Service to restrict the pool of third-party remote Git repositories that Dataform repositories can connect to.

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Request message for SetIamPolicy method. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- FetchRemoteBranches request message. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Note: This method can return repositories not shown in the Dataform UI <https://console.cloud.google.com/bigquery/dataform> .
- Can be in the format of: "" to move into the root User folder, projects/ /locations/ /folders/ , projects//locations/ /teamFolders/ This corresponds to the destination containing folder field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class DataformClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- Source ID: `site-python-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Request message for SetIamPolicy method. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- FetchRemoteBranches request message. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Note: This method can return repositories not shown in the Dataform UI <https://console.cloud.google.com/bigquery/dataform> .
- Can be in the format of: "" to move into the root User folder, projects/ /locations/ /folders/ , projects//locations/ /teamFolders/ This corresponds to the destination containing folder field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

