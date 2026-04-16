---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.240Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "Cloud Run remote service deployment with Terraform"
feature_slug: "cloud-run-remote-service-deployment-with-terraform"
latest_feature_date: "2024-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/deploy-mainframe-connector"
  - "https://docs.cloud.google.com/mainframe-connector/docs/remote-transcoding"
  - "https://docs.cloud.google.com/mainframe-connector/docs/run-jobs"
  - "https://docs.cloud.google.com/mainframe-connector/docs/vtl-transcoding"
keywords:
  - "run"
  - "remote"
  - "deployment"
  - "with"
  - "terraform"
  - "can"
  - "be"
  - "managed"
---

# Cloud Run remote service deployment with Terraform

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

Cloud Run remote service deployment can be managed with Terraform.

## Extended Definition

Cloud Run remote service deployment can be managed with Terraform.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/deploy-mainframe-connector](https://docs.cloud.google.com/mainframe-connector/docs/deploy-mainframe-connector)
- [https://docs.cloud.google.com/mainframe-connector/docs/remote-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/remote-transcoding)
- [https://docs.cloud.google.com/mainframe-connector/docs/run-jobs](https://docs.cloud.google.com/mainframe-connector/docs/run-jobs)
- [https://docs.cloud.google.com/mainframe-connector/docs/vtl-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/vtl-transcoding)

## Supporting Pages

### Deploy Mainframe Connector on Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/deploy-mainframe-connector](https://docs.cloud.google.com/mainframe-connector/docs/deploy-mainframe-connector)
- Source ID: `site-docs-root-2`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page discusses how you can deploy Mainframe Connector on Cloud Run as a remote service using Terraform .
- Deploy Mainframe Connector. terraform apply -var-file= VARIABLE FILE NAME Replace VARIABLE FILE NAME with the variables file you created in the previous step. (Optional) To check if Mainframe Connector is deployed and running, go to the Cloud Run page, and select the Services tab.
- You can also reuse the same bucket and prefix when you upgrade Mainframe Connector. terraform init \ -backend-config bucket= DEPLOYMENT STATE BUCKET \ -backend-config prefix= BUCKET PREFIX Replace the following: DEPLOYMENT STATE BUCKET : The name of the Cloud Storage bucket.
- You can trigger this service from your mainframe to perform remote transcoding , or as a standalone instance that is integrated with an existing extract, transfer, and load (ETL) workflow .

### "Transcode mainframe data remotely on Google Cloud \_|\_ Mainframe Connector\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/remote-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/remote-transcoding)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following figure describes how you can move your mainframe data to Google Cloud and transcode it remotely to ORC format using Cloud Run, and then move the content to BigQuery.
- For the complete list of environment variables supported by Mainframe Connector, see Environment variables . //STEP01 EXEC BQSH //INFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.FILENAME //STDIN DD gsutil cp --replace gs://mybucket/tablename.orc --remote \ --remoteHost <mainframe-connector-url>.a.run.app \ --remotePort 443 / If you want to log the commands executed during this process, you can enable load statistics . (Optional) Create and submit a BigQuery query job that executes a SQL read from the QUERY DD file .
- To avoid this, you can use Cloud Run to move and transcode mainframe data remotely on Google Cloud to optimized row columnar (ORC) format and then move the data to Cloud Storage.
- Remotely transcode mainframe data Before you begin Deploy Mainframe Connector on Cloud Run .

### Use Cloud Run with Mainframe Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/run-jobs](https://docs.cloud.google.com/mainframe-connector/docs/run-jobs)
- Source ID: `site-docs-root-2`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To view the logs for a specific Cloud Run job execution, use the cloud run job logs command from your Mainframe JCL file: //STEP01 EXEC BQSH //STDIN DD cloud run job logs EXECUTION ID / Replace EXECUTION ID with the execution ID of the Cloud Run job. (Optional) To cancel a Cloud Run job, use the cloud run job cancel command from your Mainframe JCL file: Example JCL //STEP01 EXEC BQSH //STDIN DD cloud run job cancel EXECUTION ID / Replace EXECUTION ID with the execution ID of the Cloud Run job that you want to cancel.
- For example, you can use this feature, to integrate your existing extraction, transformation, and loading (ETL) tool with Mainframe Connector using Cloud Run jobs.
- This page discusses how you can perform the following tasks using Mainframe Connector: Trigger a Cloud Run job: initiate a Cloud Run job from Mainframe Connector View Cloud Run job logs: view Cloud Run job logs locally on your Mainframe for monitoring Cancel a Cloud Run job: cancel an ongoing Cloud Run job For more information about creating and managing Cloud Run jobs, see Cloud Run documentation .
- Run a Cloud Run job using Mainframe Connector To run a Cloud Run job using Mainframe Connector, follow these steps: To trigger a Cloud Run job from your Mainframe, use the cloud run job execute command from your Mainframe Job Control Language (JCL) file: //STEP01 EXEC BQSH //STDIN DD cloud run job execute JOB NAME / Replace JOB NAME with the Cloud Run job that you want to run.

### "Transcode mainframe data moved to Google Cloud using virtual tape library\

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/vtl-transcoding](https://docs.cloud.google.com/mainframe-connector/docs/vtl-transcoding)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To avoid this, you can use Cloud Run to move and transcode mainframe data remotely on Google Cloud.
- Example JCL //STEP04 EXEC BQSH //OUTFILE DD DSN=<HLQ>.DATA.FILENAME,DISP=SHR //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.FILENAME //QUERY DD DSN=<HLQ>.QUERY.FILENAME,DISP=SHR //STDIN DD PROJECT= PROJECT NAME DATASET ID= DATASET ID DESTINATION TABLE= DESTINATION TABLE BUCKET= BUCKET bq export --project id=$PROJECT \ --dataset id=$DATASET ID \ --destination table=$DESTINATION TABLE \ --location="US" \ --bucket=$BUCKET \ --remoteHost <mainframe-connector-url>.a.run.app \ --remotePort 443 / Replace the following: PROJECT NAME : The name of the project in which you want to execute the query.
- For the complete list of environment variables supported by Mainframe Connector, see Environment variables . //STEP01 EXEC BQSH //COPYBOOK DD DISP=SHR,DSN=<HLQ>.COPYBOOK.FILENAME //STDIN DD gsutil cp --replace gs://mybucket/tablename.orc \ --inDsn INPUT FILENAME \ --remoteHost <mainframe-connector-url>.a.run.app \ --remotePort 443 \ --project id PROJECT NAME / Replace the following: PROJECT NAME : The name of the project in which you want to execute the query.
- The following diagram shows how you can move your mainframe data to a Cloud Storage bucket using a VTL solution, transcode the data to the ORC format using Cloud Run, and then move the content to BigQuery.

