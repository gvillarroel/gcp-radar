---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.841Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "BigQuery load configuration in Dataflow SQL"
feature_slug: "bigquery-load-configuration-in-dataflow-sql"
latest_feature_date: "2020-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates"
  - "https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks"
keywords:
  - "bigquery"
  - "load"
  - "configuration"
  - "dataflow"
  - "sql"
  - "lets"
  - "users"
  - "specify"
---

# BigQuery load configuration in Dataflow SQL

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow SQL lets users specify how data is loaded into a BigQuery table.

## Extended Definition

Dataflow SQL lets users specify how data is loaded into a BigQuery table.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates)
- [https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks](https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks)

## Supporting Pages

### "Specify a network and subnetwork \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks](https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Required 'compute.subnetworks.get' permission in "Troubleshoot Dataflow permissions." Example network and subnetwork specifications The following example shows a complete URL that specifies a subnetwork: https://www.googleapis.com/compute/v1/projects/ HOST PROJECT ID /regions/ REGION NAME /subnetworks/ SUBNETWORK NAME Replace the following: HOST PROJECT ID : the host project ID REGION NAME : the region of your Dataflow job SUBNETWORK NAME : the name of your Compute Engine subnetwork The following is an example URL where the host project ID is my-cloud-project , the region is us-central1 , and the subnetwork name is mysubnetwork : https://www.googleapis.com/compute/v1/projects/my-cloud-project/regions/us-central1/subnetworks/mysubnetwork The following is an example of a short form that specifies a subnetwork: regions/ REGION NAME /subnetworks/ SUBNETWORK NAME Replace the following: REGION NAME : the region of your Dataflow job SUBNETWORK NAME : the name of your Compute Engine subnetwork Run your pipeline with the network specified If you want to use a network other than the default network created by Google Cloud, in most cases, you need to specify the subnetwork .
- POST h tt ps : //dataflow.googleapis.com/v1b3/projects/[YOUR PROJECT ID]/templates:launch?gcsPath=gs://dataflow-templates/wordcount/template file { "jobName" : " JOB NAME " , "parameters" : { "inputFile" : " INPUT PATH " , "output" : "gs:// STORAGE BUCKET /output" }, "environment" : { "tempLocation" : "gs:// STORAGE BUCKET /temp" , "network" : " NETWORK NAME " , "zone" : "us-central1-f" } } Replace the following: JOB NAME : the name of your Dataflow job (API only) INPUT PATH : the path to your source HOST PROJECT ID : the host project ID REGION : a Dataflow region , like us-central1 STORAGE BUCKET : the storage bucket NETWORK NAME : the name of your Compute Engine network Run your pipeline with the subnetwork specified If you are a Service Project Admin who only has permission to use specific subnetworks in a Shared VPC network, you must specify the subnetwork parameter with a subnetwork that you have permission to use.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Specify a network and subnetwork Stay organized with collections Save and categorize content based on your preferences.
- Network and subnetwork for a Dataflow job When you create a Dataflow job, you can specify a network, a subnetwork, or both options.

### "Create a custom job with the job builder \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job)
- Source ID: `site-docs-reference-required-3`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: You can load the pipeline's configuration back into the job builder by clicking the Clone button.
- The job builder lets you create custom batch and streaming Dataflow jobs.
- For example, if you select BigQuery, specify the table to read from.
- Run the following command in your shell or terminal: gcloud dataflow yaml run my-job-builder-job --yaml-pipeline-file = YAML FILE PATH Replace YAML FILE PATH with the path of your YAML file, either locally or in Cloud Storage.

### "Use Flex Templates to package a Dataflow pipeline for deployment \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates)
- Source ID: `site-docs-reference-2`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Example metadata file Java { "name" : "Streaming Beam SQL" , "description" : "An Apache Beam streaming pipeline that reads JSON encoded messages from Pub/Sub, uses Beam SQL to transform the message data, and writes the results to a BigQuery" , "parameters" : [ { "name" : "inputSubscription" , "label" : "Pub/Sub input subscription." , "helpText" : "Pub/Sub subscription to read from." , "regexes" : [ "[a-zA-Z][- . +%a-zA-Z0-9]{2,}" ] }, { "name" : "outputTable" , "label" : "BigQuery output table" , "helpText" : "BigQuery table spec to write to, in the form 'project:dataset.table'." , "isOptional" : true , "regexes" : [ "[^:]+:[^.]+[.].+" ] } ] } Python { "name" : "Streaming beam Python flex template" , "description" : "Streaming beam example for python flex template." , "parameters" : [ { "name" : "input subscription" , "label" : "Input PubSub subscription." , "helpText" : "Name of the input PubSub subscription to consume from." , "regexes" : [ "projects/[^/]+/subscriptions/[a-zA-Z][- . +%a-zA-Z0-9]{2,}" ] }, { "name" : "output table" , "label" : "BigQuery output table name." , "helpText" : "Name of the BigQuery output table name." , "isOptional" : true , "regexes" : [ "([^:]+:)?[^.]+[.].+" ] } ] } You can download metadata files for the Google-provided templates from the Dataflow template directory .
- Here's an example Google Cloud CLI command that builds a Flex Template using an image in a private registry with a self-signed certificate. gcloud dataflow flex-template build gs://example-bucket/custom-pipeline-private-repo.json --sdk-language = JAVA --image = "gcp.repository.example.com:9082/registry/example/image:latest" --image-repository-username-secret-id = "projects/example-project/secrets/username-secret" --image-repository-password-secret-id = "projects/example-project/secrets/password-secret/versions/latest" --image-repository-cert-path = "gs://example-bucket/self-signed.crt" --metadata-file = metadata.json To build your own Flex Template, you need to replace the example values, and you might need to specify different or additional options.
- To speed up Flex Template launch, pre-download the requirements cache when creating the Template. && pip download --no-cache-dir --dest /tmp/dataflow-requirements-cache -r $FLEX TEMPLATE PYTHON REQUIREMENTS FILE Set this if using Beam 2.37.0 or earlier SDK to speed up job submission.
- You can provide the secret in one of the following formats: projects/ {project} /secrets/ {secret} /versions/ {secret version} projects/ {project} /secrets/ {secret} If you use the second format, because it doesn't specify the version, Dataflow uses the latest version.

