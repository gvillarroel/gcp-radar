---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.230Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "Cloud Run jobs integration"
feature_slug: "cloud-run-jobs-integration"
latest_feature_date: "2025-02-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/run-jobs"
  - "https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode"
  - "https://docs.cloud.google.com/mainframe-connector/docs/deploy-mainframe-connector"
  - "https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference"
keywords:
  - "run"
  - "jobs"
  - "integration"
  - "can"
  - "integrate"
  - "extraction"
  - "transformation"
  - "and"
---

# Cloud Run jobs integration

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

Cloud Run jobs can integrate extraction, transformation, and loading tools with Mainframe Connector.

## Extended Definition

Cloud Run jobs can integrate extraction, transformation, and loading tools with Mainframe Connector.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/run-jobs](https://docs.cloud.google.com/mainframe-connector/docs/run-jobs)
- [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)
- [https://docs.cloud.google.com/mainframe-connector/docs/deploy-mainframe-connector](https://docs.cloud.google.com/mainframe-connector/docs/deploy-mainframe-connector)
- [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)

## Supporting Pages

### Use Cloud Run with Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/run-jobs](https://docs.cloud.google.com/mainframe-connector/docs/run-jobs)
- Source ID: `site-docs-root-2`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you can use this feature, to integrate your existing extraction, transformation, and loading (ETL) tool with Mainframe Connector using Cloud Run jobs.
- This page discusses how you can perform the following tasks using Mainframe Connector: Trigger a Cloud Run job: initiate a Cloud Run job from Mainframe Connector View Cloud Run job logs: view Cloud Run job logs locally on your Mainframe for monitoring Cancel a Cloud Run job: cancel an ongoing Cloud Run job For more information about creating and managing Cloud Run jobs, see Cloud Run documentation .
- To view the logs for a specific Cloud Run job execution, use the cloud run job logs command from your Mainframe JCL file: //STEP01 EXEC BQSH //STDIN DD cloud run job logs EXECUTION ID / Replace EXECUTION ID with the execution ID of the Cloud Run job. (Optional) To cancel a Cloud Run job, use the cloud run job cancel command from your Mainframe JCL file: Example JCL //STEP01 EXEC BQSH //STDIN DD cloud run job cancel EXECUTION ID / Replace EXECUTION ID with the execution ID of the Cloud Run job that you want to cancel.
- To run the Cloud Run commands, ensure that you assign the following roles to your user account: Cloud Run Invoker Cloud Run Jobs Executor Cloud Run Jobs Executor With Overrides Cloud Run Viewer Logs Viewer For more information about assigning roles to a user account, see Managing access using IAM .

### Run Mainframe Connector in standalone mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode](https://docs.cloud.google.com/mainframe-connector/docs/standalone-mode)
- Source ID: `site-docs-root-2`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Transcode data using Mainframe Connector in standalone mode on Cloud Run Mainframe Connector provides two ways in which you can run Mainframe Connector as a standalone job on Google Cloud: Using qsam commands (release 5.16.0 and later) Using the gsutil cp command Advantages of qsam commands The qsam commands provide the following advantages: Support for compound data types, including the OCCURS clause (lists), REDEFINES clause, and nested records.
- Deploy the new job using the following command: gcloud run jobs replace job.yaml Run the job using the following command: gcloud run jobs execute JOB NAME Replace JOB NAME with the name of the job.
- Deploy the new job using the following command: gcloud run jobs replace job.yaml Run the job using the following command: gcloud run jobs execute JOB NAME Replace JOB NAME with the name of the job.
- Mainframe Connector provides two ways in which you can export BigQuery table: Using qsam commands (release 5.16.0 and later) Using the bq export command Use qsam commands environmentVariables: - name: "QUERY" value: " QUERY PATH " - name: "OUTFILE" value: " OUTFILE " - name: "COPYBOOK" value: " COPYBOOK PATH " - name: "TRANSCODE CONFIGURATION" value: " TRANSCODE CONFIGURATION PATH " - name: "PROJECT ID" value: " PROJECT ID " - name: "LOCATION" value: " LOCATION " - name: "LOG PROJECT" value: " LOG PROJECT " - name: "IBM JAVA OPTIONS" value: "-XX:+UseContainerSupport" command: qsam encode \ $QUERY $OUTFILE --copybook ${COPYBOOK PATH} --transcode-configuration ${TRANSCODE CONFIGURATION PATH} --input-format=BIGQUERY \ --input-parameter project id=${PROJECT ID} \ --input-parameter location=${LOCATION} Replace the following: QUERY PATH : The SQL query to execute.

### Deploy Mainframe Connector on Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/deploy-mainframe-connector](https://docs.cloud.google.com/mainframe-connector/docs/deploy-mainframe-connector)
- Source ID: `site-docs-root-2`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can trigger this service from your mainframe to perform remote transcoding , or as a standalone instance that is integrated with an existing extract, transfer, and load (ETL) workflow .
- What's next Transcode mainframe data remotely on Google Cloud Transcode mainframe data moved to Google Cloud using a virtual tape library Run Mainframe Connector as a standalone job Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Deploy Mainframe Connector. terraform apply -var-file= VARIABLE FILE NAME Replace VARIABLE FILE NAME with the variables file you created in the previous step. (Optional) To check if Mainframe Connector is deployed and running, go to the Cloud Run page, and select the Services tab.
- You can also reuse the same bucket and prefix when you upgrade Mainframe Connector. terraform init \ -backend-config bucket= DEPLOYMENT STATE BUCKET \ -backend-config prefix= BUCKET PREFIX Replace the following: DEPLOYMENT STATE BUCKET : The name of the Cloud Storage bucket.

### Mainframe Connector command-line reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference](https://docs.cloud.google.com/mainframe-connector/docs/api-command-reference)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Synopsis cloud run job cancel [-h] --project= PROJECT --region= REGION EXECUTION Flags and arguments The cloud run job cancel command uses the following flags and arguments: EXECUTION Specify the name of the Cloud Run job execution id. --help or -h (Optional) Display this help message. --project = PROJECT Specify the project ID. --region = REGION Specify the region in which the resource can be found. cloud run job execute Execute a specific job.
- The default value is 60s. --project = PROJECT Specify the project ID. --region = REGION Specify the region in which the resource can be found. --tail-logs (Optional) If you run the command in the synchronous mode by specifying the --tail logs flag, Mainframe Connector displays the progress logs on the screen.
- To view the complete job logs, use the cloud run job log command after the job has finished. --task-timeout = TIMEOUT (Optional) Displays the existing maximum time (deadline) a job task attempt can run for.
- The default value is true. --use legacy sql (Optional) Use legacy SQL instead of standard SQL. cloud run job cancel Cancel a specific job execution.

