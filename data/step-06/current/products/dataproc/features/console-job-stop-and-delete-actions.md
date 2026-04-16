---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.689Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Console job stop and delete actions"
feature_slug: "console-job-stop-and-delete-actions"
latest_feature_date: "2016-10-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop"
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console"
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console"
keywords:
  - "console"
  - "job"
  - "stop"
  - "delete"
  - "actions"
  - "dataproc"
  - "jobs"
  - "page"
---

# Console job stop and delete actions

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The Dataproc console Jobs page shows Stop and Delete buttons for every job in the list.

## Extended Definition

The Dataproc console Jobs page shows Stop and Delete buttons for every job in the list.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop)
- [https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console](https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console)
- [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console)

## Supporting Pages

### "Stop and start clusters \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud console Click the cluster name from the Managed Service for Apache Spark Clusters page in the Google Cloud console, then click STOP to stop and START to start the cluster. gcloud CLI Stop a cluster gcloud dataproc clusters stop CLUSTER NAME \ --region= REGION Start a cluster gcloud dataproc clusters start CLUSTER NAME \ --region= REGION REST API Stop a cluster Submit a clusters.stop request.
- Limitations You cannot stop: clusters with secondary workers clusters with local ssds When a cluster is stopped, you cannot: update the cluster submit jobs to the cluster access notebooks running on the cluster using the Managed Service for Apache Spark component gateway Starting a cluster When you restart a stopped cluster, any initialization actions won't be re-run.
- Stop Response: When the stop request returns a stop operation, the cluster will be in a STOPPING state, and no further jobs will be allowed to be submitted ( SubmitJob requests will fail).
- You can use the gcloud dataproc clusters describe cluster-name command to monitor the transitioning of the cluster's status from RUNNING to STOPPING to STOPPED .

### "Quickstart: Create a cluster by using the Google Cloud console \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console](https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a cluster by using the Google Cloud console This page shows you how to use the Google Cloud console to create a Managed Service for Apache Spark cluster, run a basic Apache Spark job in the cluster, and then modify the number of workers in the cluster.
- On the Jobs page, click add box Submit job , and then do the following: In the Job ID field, use the default setting, or provide an ID that is unique to your Google Cloud project.
- Enable the API In the Google Cloud console, on the project selector page, select or create a Google Cloud project.
- Create a cluster In the Google Cloud console, go to the Managed Service for Apache Spark Clusters page.

### "Quickstart: Create a cluster by using the Google Cloud console \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a cluster by using the Google Cloud console This page shows you how to use the Google Cloud console to create a Managed Service for Apache Spark cluster, run a basic Apache Spark job in the cluster, and then modify the number of workers in the cluster.
- On the Jobs page, click add box Submit job , and then do the following: In the Job ID field, use the default setting, or provide an ID that is unique to your Google Cloud project.
- Enable the API In the Google Cloud console, on the project selector page, select or create a Google Cloud project.
- Create a cluster In the Google Cloud console, go to the Managed Service for Apache Spark Clusters page.

