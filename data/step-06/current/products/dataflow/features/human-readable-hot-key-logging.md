---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.822Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Human-readable hot key logging"
feature_slug: "human-readable-hot-key-logging"
latest_feature_date: "2021-05-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-tfrecords"
keywords:
  - "human"
  - "readable"
  - "hot"
  - "key"
  - "logging"
  - "records"
  - "keys"
  - "format"
---

# Human-readable hot key logging

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Human-readable hot key logging records hot keys in a readable format for troubleshooting.

## Extended Definition

Human-readable hot key logging records hot keys in a readable format for troubleshooting.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-tfrecords](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-tfrecords)

## Supporting Pages

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- To print the human-readable key to the logs when a hot key is detected in the pipeline, use the hot key pipeline option .
- For more information about hot keys and possible solutions, see Writing Dataflow pipelines with scalability in mind .
- If you're using the Apache Beam SDK, to import the correct libraries BOM, use beam-sdks-java-io-google-cloud-platform-bom : Maven <dependencyManagement> <dependencies> <dependency> <groupId>org.apache.beam</groupId> <artifactId>beam-sdks-java-google-cloud-platform-bom</artifactId> <version> BEAM VERSION </version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> Gradle dependencies { implementation ( platform ( "org.apache.beam:beam-sdks-java-google-cloud-platform-bom: BEAM VERSION " )) } For more information, see Manage pipeline dependencies in Dataflow .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

### "Use customer-managed encryption keys \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- Source ID: `site-docs-reference-2`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Job metadata includes the following: User-supplied data, such as Job Names, Job Parameter values, and Pipeline Graph System-generated data, such as Job IDs and IP addresses of workers Encryption of pipeline state locations The following storage locations are protected with Cloud KMS keys: Persistent Disks attached to Dataflow workers and used for Persistent Disk-based shuffle and streaming state storage.
- Support and limitations Cloud KMS is supported in the following Apache Beam SDK versions: Java SDK versions 2.13.0 and later Python SDK versions 2.13.0 and later Go SDK versions 2.40.0 and later Cloud KMS with Dataflow supports regional keys .

### "BigQuery to Cloud Storage TFRecords template \_|\_ Cloud Dataflow \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-tfrecords](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-tfrecords)
- Source ID: `site-api-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BATCH , displayName = "BigQuery to TensorFlow Records" , description = "The BigQuery to Cloud Storage TFRecords template is a pipeline that reads data from a BigQuery query and writes it to a Cloud Storage bucket in TFRecord format. " + "You can specify the training, testing, and validation percentage splits. " + "By default, the split is 1 or 100% for the training set and 0 or 0% for testing and validation sets. " + "When setting the dataset split, the sum of training, testing, and validation needs to add up to 1 or 100% (for example, 0.6+0.2+0.2). " + "Dataflow automatically determines the optimal number of shards for each output dataset." , optionsClass = Options . class , optionsOrder = { BigQueryReadOptions . class , Options . class }, documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-tfrecords" , contactInformation = "https://cloud.google.com/support" , requirements = { "The BigQuery dataset and table must exist." , "The output Cloud Storage bucket must exist before pipeline execution.
- The BigQuery to Cloud Storage TFRecords template is a pipeline that reads data from a BigQuery query and writes it to a Cloud Storage bucket in TFRecord format.
- POST h tt ps : //dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ LOCATION /templates:launch?gcsPath=gs://dataflow-templates- LOCATION / VERSION /Cloud BigQuery to GCS TensorFlow Records { "jobName" : " JOB NAME " , "parameters" : { "readQuery" : " READ QUERY " , "outputDirectory" : " OUTPUT DIRECTORY " , "trainingPercentage" : " TRAINING PERCENTAGE " , "testingPercentage" : " TESTING PERCENTAGE " , "validationPercentage" : " VALIDATION PERCENTAGE " , "outputSuffix" : " OUTPUT FILENAME SUFFIX " }, "environment" : { "zone" : "us-central1-f" } } Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.
- In your shell or terminal, run the template: gcloud dataflow jobs run JOB NAME \ --gcs-location gs://dataflow-templates- REGION NAME / VERSION /Cloud BigQuery to GCS TensorFlow Records \ --region REGION NAME \ --parameters \ readQuery = READ QUERY , \ outputDirectory = OUTPUT DIRECTORY , \ trainingPercentage = TRAINING PERCENTAGE , \ testingPercentage = TESTING PERCENTAGE , \ validationPercentage = VALIDATION PERCENTAGE , \ outputSuffix = OUTPUT FILENAME SUFFIX Replace the following: JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.

