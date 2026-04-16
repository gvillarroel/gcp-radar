---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:18.795Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Composer Local Development CLI"
feature_slug: "composer-local-development-cli"
latest_feature_date: "2026-01-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsPager"
keywords:
  - "composer"
  - "local"
  - "development"
  - "cli"
  - "provides"
  - "airflow"
  - "environments"
  - "testing"
---

# Composer Local Development CLI

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

The Composer Local Development CLI provides local Airflow environments for Cloud Composer development and testing; The Composer Local Development CLI provides local Airflow environments for Cloud Composer development and testing.

## Extended Definition

The Composer Local Development CLI provides local Airflow environments for Cloud Composer development and testing; The Composer Local Development CLI provides local Airflow environments for Cloud Composer development and testing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines](https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsAsyncPager](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsPager](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsPager)

## Supporting Pages

### Launch Dataflow pipelines with Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines](https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines)
- Source ID: `site-iam-reference`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . def upload file bucket name :, local file path :, file name : nil The ID of your GCS bucket bucket name = "your-unique-bucket-name" The path to your file to upload local file path = "/local/path/to/file.txt" The ID of your GCS object file name = "your-file-name" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . bucket bucket name , skip lookup : true file = bucket . create file local file path , file name puts "Uploaded #{ local file path } as #{ file . name } in bucket #{ bucket name } " end Configure DataflowTemplateOperator Before running the DAG, set the following Airflow variables .
- For versions in non-production environments, use the subfolder 'latest' https://cloud.google.com/dataflow/docs/guides/templates/provided-batch#gcstexttobigquery template = "gs://dataflow-templates/latest/GCS Text to BigQuery" , Use the link above to specify the correct parameters for your template. parameters = { "javascriptTextTransformFunctionName" : "transformCSVtoJSON" , "JSONPath" : bucket path + "/jsonSchema.json" , "javascriptTextTransformGcsPath" : bucket path + "/transformCSVtoJSON.js" , "inputFilePattern" : bucket path + "/inputFile.txt" , "outputTable" : project id + ":average weather.average weather" , "bigQueryLoadingTemporaryDirectory" : bucket path + "/tmp/" , }, ) Airflow 1 """Example Airflow DAG that creates a Cloud Dataflow workflow which takes a text file and adds the rows to a BigQuery table.
- For more information, see Set up authentication for a local development environment . def create bucket bucket name : The ID to give your GCS bucket bucket name = "your-unique-bucket-name" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . create bucket bucket name puts "Created bucket: #{ bucket . name } " end Create a JSON-formatted BigQuery schema for your output table Create a JSON formatted BigQuery schema file that matches the output table you created earlier.
- For more information, see Set up authentication for a local development environment . from google.cloud import storage def upload blob ( bucket name , source file name , destination blob name ): """Uploads a file to the bucket.""" The ID of your GCS bucket bucket name = "your-bucket-name" The path to your file to upload source file name = "local/path/to/file" The ID of your GCS object destination blob name = "storage-object-name" storage client = storage .

### "Class ListEnvironmentsAsyncPager (1.19.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsAsyncPager](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.orchestration.airflow.service v1.types.ListEnvironmentsRequest The initial request object. response google.cloud.orchestration.airflow.service v1.types.ListEnvironmentsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This class thinly wraps an initial ListEnvironmentsResponse object, and provides an aiter method to iterate through its environments field.
- ListEnvironmentsResponse ], ], request : google . cloud . orchestration . airflow . service v1 . types . environments .
- ListEnvironmentsResponse ], ], request : google . cloud . orchestration . airflow . service v1 . types . environments .

### "Class ListEnvironmentsPager (1.19.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsPager](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsPager)
- Source ID: `site-python-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.orchestration.airflow.service v1.types.ListEnvironmentsRequest The initial request object. response google.cloud.orchestration.airflow.service v1.types.ListEnvironmentsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This class thinly wraps an initial ListEnvironmentsResponse object, and provides an iter method to iterate through its environments field.
- ListEnvironmentsResponse , ], request : google . cloud . orchestration . airflow . service v1 . types . environments .
- ListEnvironmentsResponse , ], request : google . cloud . orchestration . airflow . service v1 . types . environments .

