---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.581Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Zero-scale clusters"
feature_slug: "zero-scale-clusters"
latest_feature_date: "2025-05-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/manage-tags"
  - "https://docs.cloud.google.com/dataproc/docs/api-libraries-overview"
keywords:
  - "zero"
  - "scale"
  - "clusters"
  - "dataproc"
  - "supports"
  - "use"
  - "only"
  - "secondary"
---

# Zero-scale clusters

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports zero-scale clusters that use only secondary workers and can scale down to zero when idle.

## Extended Definition

Dataproc supports zero-scale clusters that use only secondary workers and can scale down to zero when idle.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies)
- [https://docs.cloud.google.com/dataproc-metastore/docs/manage-tags](https://docs.cloud.google.com/dataproc-metastore/docs/manage-tags)
- [https://docs.cloud.google.com/dataproc/docs/api-libraries-overview](https://docs.cloud.google.com/dataproc/docs/api-libraries-overview)

## Supporting Pages

### "Manage Java and Scala dependencies for Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: gcloud dataproc jobs submit spark \ --cluster=my-cluster \ --region= region \ --properties=spark.jars.packages='com.google.cloud:google-cloud-translate:1.35.0,org.apache.bahir:spark-streaming-pubsub 2.11:2.2.0' When submitting a job directly on your cluster use the spark-submit command with the --packages=[DEPENDENCIES] parameter.
- Here are recommended approaches to including these dependencies when you submit a Spark job to a Managed Service for Apache Spark cluster: When submitting a job from your local machine with the gcloud dataproc jobs submit command, use the --properties spark.jars.packages=[DEPENDENCIES] flag.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

### "Overview of APIs and Client Libraries \_|\_ Managed Service for Apache Spark\

- URL: [https://docs.cloud.google.com/dataproc/docs/api-libraries-overview](https://docs.cloud.google.com/dataproc/docs/api-libraries-overview)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These "legacy" libraries access REST but not gRPC APIs (see Google API Client Libraries for additional information). gRPC : If a client library is not available for your programming language of choice, you can generate gRPC client libraries for Dataproc in any gRPC-supported language.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

### "Attach and manage tags on Dataproc Metastore resources \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/manage-tags](https://docs.cloud.google.com/dataproc-metastore/docs/manage-tags)
- Source ID: `site-docs-root-2`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Attach tags to Dataproc Metastore resources gcloud resource-manager tags bindings create \ --parent= PARENT PATH \ --tag-value= TAG VALUE \ --location= LOCATION Detach tags from Dataproc Metastore resources gcloud resource-manager tags bindings delete \ --parent= PARENT PATH \ --tag-value= TAG VALUE \ --location= LOCATION List tags on Dataproc Metastore resources gcloud resource-manager tags bindings list \ --parent= PARENT PATH \ --location= LOCATION What's next Learn more about attaching tags to resources .
- Before you begin To get the permissions that you need to view and set tags on Dataproc Metastore resources, ask your administrator to grant you the following IAM roles on your project: Dataproc Metastore Editor ( roles/metastore.editor ): assign to set and view tags Dataproc Metastore Viewer ( roles/metastore.viewer ): assign to view tags For more information about granting roles, see Manage access to projects, folders, and organizations .
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Attach and manage tags on Dataproc Metastore resources Stay organized with collections Save and categorize content based on your preferences.
- Work with tags After you've created and defined a tag using Resource Manager, you can start using tags with Dataproc Metastore service and federation resources.

