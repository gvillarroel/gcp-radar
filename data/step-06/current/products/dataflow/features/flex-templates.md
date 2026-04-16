---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.837Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Flex Templates"
feature_slug: "flex-templates"
latest_feature_date: "2020-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates"
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceClient"
keywords:
  - "flex"
  - "templates"
  - "let"
  - "you"
  - "package"
  - "launch"
  - "dataflow"
  - "containerized"
---

# Flex Templates

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Flex Templates let you package and launch Dataflow templates with containerized pipeline environments; Flex Templates let users package and launch Dataflow jobs using flexible container-based templates.

## Extended Definition

Flex Templates let you package and launch Dataflow templates with containerized pipeline environments; Flex Templates let users package and launch Dataflow jobs using flexible container-based templates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceClient)

## Supporting Pages

### "Use Flex Templates to package a Dataflow pipeline for deployment \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates)
- Source ID: `site-docs-reference-2`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A modified Flex Template Dockerfile might look like the following example: FROM gcr.io/dataflow-templates-base/python3-template-launcher-base ENV FLEX TEMPLATE PYTHON PY FILE = "/template/main.py" COPY . /template If you use a requirements file, pre-install the requirements.txt.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Use Flex Templates to package a Dataflow pipeline for deployment Stay organized with collections Save and categorize content based on your preferences.
- When you run a Python Dataflow job that uses Flex Templates in an environment that restricts access to the internet, you must prepackage the dependencies when you create the template.
- Example metadata file Java { "name" : "Streaming Beam SQL" , "description" : "An Apache Beam streaming pipeline that reads JSON encoded messages from Pub/Sub, uses Beam SQL to transform the message data, and writes the results to a BigQuery" , "parameters" : [ { "name" : "inputSubscription" , "label" : "Pub/Sub input subscription." , "helpText" : "Pub/Sub subscription to read from." , "regexes" : [ "[a-zA-Z][- . +%a-zA-Z0-9]{2,}" ] }, { "name" : "outputTable" , "label" : "BigQuery output table" , "helpText" : "BigQuery table spec to write to, in the form 'project:dataset.table'." , "isOptional" : true , "regexes" : [ "[^:]+:[^.]+[.].+" ] } ] } Python { "name" : "Streaming beam Python flex template" , "description" : "Streaming beam example for python flex template." , "parameters" : [ { "name" : "input subscription" , "label" : "Input PubSub subscription." , "helpText" : "Name of the input PubSub subscription to consume from." , "regexes" : [ "projects/[^/]+/subscriptions/[a-zA-Z][- . +%a-zA-Z0-9]{2,}" ] }, { "name" : "output table" , "label" : "BigQuery output table name." , "helpText" : "Name of the BigQuery output table name." , "isOptional" : true , "regexes" : [ "([^:]+:)?[^.]+[.].+" ] } ] } You can download metadata files for the Google-provided templates from the Dataflow template directory .

### "Class FlexTemplatesServiceAsyncClient (0.13.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 async def sample launch flex template(): Create a client client = dataflow v1beta3 .
- A request to launch a Cloud Dataflow job from a FlexTemplate. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- LaunchFlexTemplateRequest ( ) Make the request response = await client. launch flex template (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataflow v1beta3.types.LaunchFlexTemplateRequest , dict]] The request object.
- Returns Type Description google.cloud.dataflow v1beta3.types.LaunchFlexTemplateResponse Response to the request to launch a job from Flex Template. parse common billing account path parse common billing account path ( path : str ) - > typing .

### "Class FlexTemplatesServiceClient (0.13.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceClient)
- Source ID: `site-python-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataflow v1beta3 def sample launch flex template(): Create a client client = dataflow v1beta3 .
- A request to launch a Cloud Dataflow job from a FlexTemplate. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- LaunchFlexTemplateRequest ( ) Make the request response = client. launch flex template (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.dataflow v1beta3.types.LaunchFlexTemplateRequest , dict] The request object.
- Returns Type Description google.cloud.dataflow v1beta3.types.LaunchFlexTemplateResponse Response to the request to launch a job from Flex Template. parse common billing account path parse common billing account path ( path : str ) - > typing .

