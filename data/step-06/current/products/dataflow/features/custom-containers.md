---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.815Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Custom containers"
feature_slug: "custom-containers"
latest_feature_date: "2021-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates"
  - "https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced"
keywords:
  - "custom"
  - "containers"
  - "let"
  - "dataflow"
  - "run"
  - "pipelines"
  - "user"
  - "provided"
---

# Custom containers

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Custom containers let Dataflow run pipelines with user-provided container images; Custom containers let Dataflow run pipelines with user-provided container images.

## Extended Definition

Custom containers let Dataflow run pipelines with user-provided container images; Custom containers let Dataflow run pipelines with user-provided container images.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates)
- [https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced](https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced)

## Supporting Pages

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Java --workerDiskType=pd-ssd Python --worker disk type=pd-ssd Go disk type=pd-ssd No space left on device When a job runs out of disk space, the following error might appear in the worker logs: No space left on device This error can occur for one of the following reasons: The worker persistent storage runs out of free space, which can occur for one of the following reasons: A job downloads large dependencies at runtime A job uses large custom containers A job writes many temporary data to local disk When using Dataflow Shuffle , Dataflow sets lower default disk size .
- No value is provided When you try to archive a Dataflow job by using the API, the following error might occur: The field mask specifies an update for the field job metadata.user display properties.archived in job JOB ID , but no value is provided.
- CONTAINER ID = nerdctl ps grep sdk-0-0 awk '{print $1}' Start a shell in the running container. nerdctl exec --privileged -it $CONTAINER ID /bin/bash Inspect python processes in the running container. ps -A grep python PYTHON PID = $( ps -A grep python head -1 awk '{print $1}' ) Use pystack to retrieve stacktraces from the python process. pip install pystack pystack remote --native $PYTHON PID Find which thread holds the GIL and inspect the stacktrace. pystack remote --native $PYTHON PID grep -iF "Has the GIL" -A 100 Alternately, use inspect with gdb. apt update && apt install -y gdb gdb --quiet \ --eval-command = "set pagination off" \ --eval-command = "thread apply all bt" \ --eval-command "set confirm off" \ --eval-command = "quit" -p $PYTHON PID In Python pipelines, in the default configuration, Dataflow assumes that each Python process running on the workers efficiently uses one vCPU core.
- The API does not recognize the value When you try to archive a Dataflow job by using the API, the following error might occur: The API does not recognize the value VALUE for the field job metadata.user display properties.archived for job JOB ID .

### "Use Flex Templates to package a Dataflow pipeline for deployment \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates)
- Source ID: `site-docs-reference-2`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Here's an example Google Cloud CLI command that builds a Flex Template using an image in a private registry with a self-signed certificate. gcloud dataflow flex-template build gs://example-bucket/custom-pipeline-private-repo.json --sdk-language = JAVA --image = "gcp.repository.example.com:9082/registry/example/image:latest" --image-repository-username-secret-id = "projects/example-project/secrets/username-secret" --image-repository-password-secret-id = "projects/example-project/secrets/password-secret/versions/latest" --image-repository-cert-path = "gs://example-bucket/self-signed.crt" --metadata-file = metadata.json To build your own Flex Template, you need to replace the example values, and you might need to specify different or additional options.
- For example: gcloud dataflow flex-template run $JOB NAME \ --region = $REGION \ --template-file-gcs-location = $TEMPLATE PATH \ --parameters = sdk container image = $CUSTOM CONTAINER IMAGE \ --additional-experiments = use runner v2 For more information, see Use custom containers in Dataflow .
- Example metadata file Java { "name" : "Streaming Beam SQL" , "description" : "An Apache Beam streaming pipeline that reads JSON encoded messages from Pub/Sub, uses Beam SQL to transform the message data, and writes the results to a BigQuery" , "parameters" : [ { "name" : "inputSubscription" , "label" : "Pub/Sub input subscription." , "helpText" : "Pub/Sub subscription to read from." , "regexes" : [ "[a-zA-Z][- . +%a-zA-Z0-9]{2,}" ] }, { "name" : "outputTable" , "label" : "BigQuery output table" , "helpText" : "BigQuery table spec to write to, in the form 'project:dataset.table'." , "isOptional" : true , "regexes" : [ "[^:]+:[^.]+[.].+" ] } ] } Python { "name" : "Streaming beam Python flex template" , "description" : "Streaming beam example for python flex template." , "parameters" : [ { "name" : "input subscription" , "label" : "Input PubSub subscription." , "helpText" : "Name of the input PubSub subscription to consume from." , "regexes" : [ "projects/[^/]+/subscriptions/[a-zA-Z][- . +%a-zA-Z0-9]{2,}" ] }, { "name" : "output table" , "label" : "BigQuery output table name." , "helpText" : "Name of the BigQuery output table name." , "isOptional" : true , "regexes" : [ "([^:]+:)?[^.]+[.].+" ] } ] } You can download metadata files for the Google-provided templates from the Dataflow template directory .
- This command creates the following artifacts: The template specification file, stored in Cloud Storage The launcher container image, stored in Artifact Registry Use a Google-provided base image To run a Flex Template using a Google-provided base image, run the following command: Java gcloud dataflow flex-template build gs:// BUCKET NAME / TEMPLATE FILE NAME \ --image-gcr-path " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE : TAG " \ --sdk-language "JAVA" \ --flex-template-base-image " BASE IMAGE " \ --metadata-file " METADATA FILE " \ --jar " JAR FILE " \ --env "FLEX TEMPLATE JAVA MAIN CLASS= JAVA MAIN CLASS " Replace the following: BUCKET NAME : the name of a Cloud Storage bucket to store the template specification file TEMPLATE FILE NAME : the name of the template specification file to create.

### "Use Apache Beam notebook advanced features \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced](https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced)
- Source ID: `site-docs-reference-2`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For general Apache Beam container usage, see: Container environments Managing Python Pipeline Dependencies For Dataflow container usage, see: Use custom containers in Dataflow Disable external IP addresses When creating an Apache Beam notebook instance, to increase security, disable external IP addresses.
- Build a custom container In most cases, if your pipeline doesn't require additional Python dependencies or executables, Apache Beam can automatically use its official container images to run your user-defined code.
- Use custom containers Depending on the runner, you can use custom containers for different purposes.
- For more information, see: https://beam.apache.org/documentation/runtime/environments/ options . view as ( PortableOptions ) . environment config = 'apache/beam python3.7 sdk:2.41.0 or LOCATION .pkg.dev/ PROJECT ID / REPOSITORY /your custom container' Usage The parallelism is applied to each step, so if your pipeline has 10 steps, you end up having 10 10 = 100 tasks scheduled, which can be run in parallel. options . view as ( FlinkRunnerOptions ) . parallelism = 10 p word count = beam .

