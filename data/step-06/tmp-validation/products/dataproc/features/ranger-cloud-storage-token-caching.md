---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.110Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Ranger Cloud Storage token caching"
feature_slug: "ranger-cloud-storage-token-caching"
latest_feature_date: "2024-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
keywords:
  - "caching"
  - "token"
  - "integration"
  - "ranger"
  - "storage"
  - "compute"
  - "engine"
---

# Ranger Cloud Storage token caching

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc on Compute Engine Ranger Cloud Storage integration supports caching tokens in a local cache.

## Extended Definition

Dataproc on Compute Engine Ranger Cloud Storage integration supports caching tokens in a local cache.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)

## Supporting Pages

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- You can avoid this issue by including the following command in your customization script to clear cached credentials. rm -r /root/.gsutil /root/.config/gcloud --zone : the Compute Engine zone where generate custom image.py will create a temporary VM to use to create your custom image. --gcs-bucket : a URI, in the format gs:// BUCKET NAME , that points to your Cloud Storage bucket . generate custom image.py writes log files to this bucket.
- Note: You incur Google Cloud charges for the temporary Compute Engine VM and your Cloud Storage bucket.
- Enable the Dataproc API, Compute Engine API, and Cloud Storage APIs.
- Enable the Dataproc API, Compute Engine API, and Cloud Storage APIs.

### "Run a Spark job on Google Kubernetes Engine \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- User roles To get the permissions that you need to create a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account role To ensure that the Compute Engine default service account has the necessary permissions to create a Managed Service for Apache Spark cluster, ask your administrator to grant the Dataproc Worker ( roles/dataproc.worker ) IAM role to the Compute Engine default service account on the project.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- It's a virtual resource, and unlike a Managed Service for Apache Spark on Compute Engine cluster, does not include separate Managed Service for Apache Spark master and worker VMs.
- Important: You must grant this role to the Compute Engine default service account, not to your user account.

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Costs In this document, you use the following billable components of Google Cloud: Compute Engine Managed Service for Apache Spark Cloud Storage To generate a cost estimate based on your projected usage, use the pricing calculator .
- If necessary, set up a project with the Managed Service for Apache Spark, Compute Engine, and Cloud Storage APIs enabled and the Google Cloud CLI installed on your local machine.
- Enable the Dataproc, Compute Engine, and Cloud Storage APIs.
- Enable the Dataproc, Compute Engine, and Cloud Storage APIs.

