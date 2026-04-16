---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:22:23.527Z"
product_name: "Workflows"
product_slug: "workflows"
feature_name: "GOOGLE_CLOUD_SERVICE_ACCOUNT_NAME environment variable"
feature_slug: "google-cloud-service-account-name-environment-variable"
latest_feature_date: "2021-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workflows/docs/reference/environment-variables"
  - "https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsClient"
keywords:
  - "variable"
  - "exposes"
  - "name"
  - "environment"
  - "account"
  - "built"
  - "execution"
  - "workflow"
---

# GOOGLE_CLOUD_SERVICE_ACCOUNT_NAME environment variable

Product: Workflows
Coverage: MEDIUM

## Step 02 Summary

The GOOGLE_CLOUD_SERVICE_ACCOUNT_NAME built-in environment variable exposes the service account name for a workflow execution.

## Extended Definition

The GOOGLE_CLOUD_SERVICE_ACCOUNT_NAME built-in environment variable exposes the service account name for a workflow execution.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/workflows/docs/reference/environment-variables](https://docs.cloud.google.com/workflows/docs/reference/environment-variables)
- [https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsClient](https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsClient)

## Supporting Pages

### Built-in environment variables \_|\_ Workflows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workflows/docs/reference/environment-variables](https://docs.cloud.google.com/workflows/docs/reference/environment-variables)
- Source ID: `site-api-reference`
- Final score: 263
- Re-rank relevance: N/A

Evidence snippets:
- Built-in environment variables require no declaration and are available in every workflow execution.
- Home Documentation Application development Workflows Reference Send feedback Built-in environment variables Stay organized with collections Save and categorize content based on your preferences.
- Access built-in environment variables To access an environment variable, make a call to the sys.get env() function in an expression, passing the name of the environment variable as a parameter.
- List of built-in environment variables You can use the following built-in environment variables: GOOGLE CLOUD LOCATION : The location of the workflow.

### "Class ExecutionsAsyncClient (1.21.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 225
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description google.cloud.workflows.executions v1.types.Execution A running instance of a Workflow. execution path execution path ( project : str , location : str , workflow : str , execution : str ) - > str Returns a fully-qualified execution string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description google.cloud.workflows.executions v1.types.Execution A running instance of a Workflow. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create execution create execution ( request : typing .
- Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class ExecutionsClient (1.21.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsClient](https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.services.executions.ExecutionsClient)
- Source ID: `site-python-reference`
- Final score: 225
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description google.cloud.workflows.executions v1.types.Execution A running instance of a Workflow. execution path execution path ( project : str , location : str , workflow : str , execution : str ) - > str Returns a fully-qualified execution string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description google.cloud.workflows.executions v1.types.Execution A running instance of a Workflow. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create execution create execution ( request : typing .
- Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

