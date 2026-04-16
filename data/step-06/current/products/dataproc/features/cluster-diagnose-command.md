---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.712Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cluster diagnose command"
feature_slug: "cluster-diagnose-command"
latest_feature_date: "2015-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster"
  - "https://docs.cloud.google.com/dataproc/docs/support/diagnose-command"
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud"
keywords:
  - "cluster"
  - "diagnose"
  - "command"
  - "gcloud"
  - "dataproc"
  - "tooling"
  - "includes"
  - "collecting"
---

# Cluster diagnose command

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The gcloud Dataproc tooling includes a diagnose command for collecting cluster logs and diagnostic information.

## Extended Definition

The gcloud Dataproc tooling includes a diagnose command for collecting cluster logs and diagnostic information.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster)
- [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
- [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud)

## Supporting Pages

### "View cluster diagnostic data \_|\_ Managed Service for Apache Spark \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable sharing after cluster creation : You can enable sharing checkpoint data with Google Cloud support after cluster creation by providing read access to checkpoint data to the service account used by the Google Cloud support, as follows: If uniform bucket-level access is enabled on the temp bucket, add IAM policy binding: gcloud storage buckets add-iam-policy-binding gs:// TEMP BUCKET \ --member=serviceAccount:cloud-diagnose@cloud-dataproc.iam.gserviceaccount.com \ --role=roles/storage.objectViewer If object-level access control is enabled on the temp bucket, run the following command to share checkpoint diagnostic data: gcloud storage objects update \ gs:// TEMP BUCKET /google-cloud-dataproc-diagnostic/ CLUSTER UUID \ --add-acl-grant=entity=user-cloud-diagnose@cloud-dataproc.iam.gserviceaccount.com,role=READER --recursive Disable checkpoint diagnostic data collection To disable the collection of checkpoint diagnostic data on a cluster, set dataproc:diagnostic.capture.enabled=false when you create the cluster.
- As an alternative to running the diagnose command, you can use SSH to connect to the cluster then run the script locally on the master node. gcloud compute ssh HOSTNAME gcloud storage cp gs://dataproc-diagnostic-scripts/diagnostic-script.sh . sudo bash diagnostic-script.sh The diagnostic archive tar file is saved in a local directory.
- Optional: Run the diagnostic script The gcloud dataproc clusters diagnose command can fail or time-out if a cluster is in an error state and cannot accept diagnose tasks from the Managed Service for Apache Spark server.
- Snapshot diagnostic data collection You can run the following gcloud dataproc clusters diagnose command to collect a snapshot of diagnostic data from a running cluster.

### "Diagnose GKE clusters \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Managed Service for Apache Spark provides a gcloud CLI dataproc clusters diagnose command to help you troubleshoot Managed Service for Apache Spark on GKE cluster and job issues.
- Diagnose archive file The following tables list metrics and other information included in the dataproc clusters diagnose command archive file.
- System information Item Archive location GKE node metrics where virtual Managed Service for Apache Spark on GKE pods run: CPU usage Memory usage /system/ NODE NAME .json Network metrics and file system status of running pods: CPU usage Memory usage Network status Filesystem status /system/ POD NAME .json Configuration information Item Archive location Cluster configmap /conf/configmap Kubernetes deployment /conf/deployment Role Based Access Control (RBAC) /conf/role /conf/rolebind /conf/serviceaccount Logs Item Archive location Agent log /logs/agent.log Spark engine log /logs/sparkengine.log Spark driver running and completed job logs over the last 24 hours /logs/ DRIVER ID Job and pod information Item Archive location JobAttempt object /jobattempts Kubernetes Pod object /pods What's next See Diagnose Managed Service for Apache Spark clusters .
- This command gathers and archives cluster-related configuration files, logs, and outputs into an archive file. and then uploads the archive to the Cloud Storage staging bucket you specified when you created your Managed Service for Apache Spark on GKE cluster .

### "Create a cluster by using the gcloud CLI \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Update a cluster To change the number of workers in the cluster to five, run the following command: gcloud dataproc clusters update example-cluster \ --region= REGION \ --num-workers 5 The command output displays cluster details: workerConfig: ... instanceNames: - example-cluster-w-0 - example-cluster-w-1 - example-cluster-w-2 - example-cluster-w-3 - example-cluster-w-4 numInstances: 5 statusHistory: ... - detail: Add 3 workers.
- Submit a job To submit a sample Spark job that calculates a rough value for pi , run the following gcloud Managed Service for Apache Spark jobs submit spark command: gcloud dataproc jobs submit spark --cluster example-cluster \ --region= REGION \ --class org.apache.spark.examples.SparkPi \ --jars file:///usr/lib/spark/examples/jars/spark-examples.jar -- 1000 Notes: Replace the following: REGION : Specify the cluster region.
- To decrease the number of worker nodes to the original value of 2 , run the following command: gcloud dataproc clusters update example-cluster \ --region= REGION \ --num-workers 2 Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, follow these steps.
- To delete the example-cluster , run the clusters delete command: gcloud dataproc clusters delete example-cluster \ --region= REGION What's next Learn how to write and run a Spark Scala job .

