---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.749Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Repository labels"
feature_slug: "repository-labels"
latest_feature_date: "2023-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/create-repository"
  - "https://docs.cloud.google.com/dataform/docs/best-practices-repositories"
  - "https://docs.cloud.google.com/dataform/docs/monitor-runs"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryAsyncPager"
keywords:
  - "repository"
  - "labels"
  - "add"
  - "label"
  - "to"
  - "the"
  - "dataform"
  - "resource"
---

# Repository labels

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

Repository labels add label support to the Dataform Repository resource.

## Extended Definition

Repository labels add label support to the Dataform Repository resource.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository)
- [https://docs.cloud.google.com/dataform/docs/best-practices-repositories](https://docs.cloud.google.com/dataform/docs/best-practices-repositories)
- [https://docs.cloud.google.com/dataform/docs/monitor-runs](https://docs.cloud.google.com/dataform/docs/monitor-runs)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryAsyncPager)

## Supporting Pages

### Create a repository \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository)
- Source ID: `site-docs-root`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Important: To create a Dataform repository connected to a remote Git repository that is not allow-listed in the dataform.restrictGitRemotes policy, first add the remote Git repository to the allowedValues list in the policy, and then create a new Dataform repository and connect it to the remote repository.
- For more information, see Restrict remote repositories Required roles To get the permissions that you need to create and delete a repository, ask your administrator to grant you the following IAM roles on repositories: Dataform Admin ( roles/dataform.admin ) - the project Service Account User ( roles/iam.serviceAccountUser ) - the custom service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- To let Dataform use your custom service account, the default Dataform service agent must have the following roles on the custom service account resource: Service Account Token Creator ( roles/iam.serviceAccountTokenCreator ) Service Account User ( roles/iam.serviceAccountUser ) To grant these roles, follow these steps: In the Google Cloud console, go to the IAM page.
- By default, Dataform uses a service agent or service account derived from your project number in the following format: service- PROJECT NUMBER @gcp-sa-dataform.iam.gserviceaccount.com You must use a custom service account to run workflows in your repository, but the default Dataform service agent is still used for all other repository operations.

### Best practices for repositories \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/best-practices-repositories](https://docs.cloud.google.com/dataform/docs/best-practices-repositories)
- Source ID: `site-docs-root-2`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Best practices for repository size Repository size impacts multiple aspects of development in Dataform, such as the following: Collaboration Codebase readability Development processes Workflow compilation Workflow execution Dataform enforces API quotas and limits on compilation resources .
- Overview of repository size This section helps you understand how repository size impacts workflow development and Dataform compilation resources usage, and how to estimate the compilation resources usage of your repository.
- About repository compilation resource limits During development, Dataform compiles all the repository code inside your workspace to generate a representation of the workflow in your repository.
- Splitting a repository in Dataform comes with the following advantages: Adhering to Dataform compilation resource limits .

### Monitor runs \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/monitor-runs](https://docs.cloud.google.com/dataform/docs/monitor-runs)
- Source ID: `site-docs-root-2`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Log format Dataform sends workflow invocation log messages in the following format: { "insertId" : "14ip1tza5" , "jsonPayload" : { "terminalState" : "SUCCEEDED" , "workflowInvocationId" : "1678383230-ac4ed48c-eb70-4555-b2b0-cda54d13edfa" , "@type" : "type.googleapis.com/google.cloud.dataform.logging.v1.WorkflowInvocationCompletionLogEntry" }, "resource" : { "type" : "dataform.googleapis.com/Repository" , "labels" : { "repository id" : "repository-name-example" , "resource container" : " PROJECT ID " , "location" : "us-central1" } }, "timestamp" : "2023-03-09T17:34:06.965981805Z" , "severity" : "INFO" , "logName" : "projects/project-name-example/logs/dataform.googleapis.com%2Fworkflow invocation completion" , "receiveTimestamp" : "2023-03-09T17:34:07.362371980Z" } What is logged Dataform log entries contain information that is useful for monitoring and debugging your workflow invocations.
- The following query alerts you when a Dataform workflow invocation that's related to both the daily release configuration and the production workflow configuration fails: resource.type="dataform.googleapis.com/Repository" jsonPayload.@type="type.googleapis.com/google.cloud.dataform.logging.v1.WorkflowInvocationCompletionLogEntry" jsonPayload.terminalState="FAILED" jsonPayload.releaseConfigId="daily" jsonPayload.workflowConfigId="production" Optional: To validate the query, use Run query in the Query results pane.
- Go to Logs Explorer In the Query pane, select Show query and enter the following query: resource.type="dataform.googleapis.com/Repository" jsonPayload.@type="type.googleapis.com/google.cloud.dataform.logging.v1.WorkflowInvocationCompletionLogEntry" jsonPayload.terminalState="FAILED" This query alerts you of all failed Dataform workflow invocations.
- Log entries contain the following types of information: receiveTimestamp release config id repository id resource container workflow invocation id workflow config id severity : can be INFO , WARNING , or ERROR terminalState : can be SUCCEEDED , CANCELED , or FAILED timestamp @type Configure metrics and alerts with Cloud Monitoring You can use Monitoring to observe trends in your logs and to notify you when conditions that you describe occur.

### "Class FetchRepositoryHistoryAsyncPager (0.10.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryAsyncPager)
- Source ID: `site-python-reference`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataform v1.types.FetchRepositoryHistoryRequest The initial request object. response google.cloud.dataform v1.types.FetchRepositoryHistoryResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If there are more pages, the aiter method will make additional FetchRepositoryHistory requests and continue to iterate through the commits field on the corresponding responses.
- FetchRepositoryHistoryResponse ], ], request : google . cloud . dataform v1 . types . dataform .
- FetchRepositoryHistoryResponse ], ], request : google . cloud . dataform v1 . types . dataform .

