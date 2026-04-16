---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.106Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Advanced troubleshooting for Serverless Spark"
feature_slug: "advanced-troubleshooting-for-serverless-spark"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/network-access"
  - "https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage"
keywords:
  - "advanced"
  - "troubleshooting"
  - "workloads"
  - "serverless"
  - "provides"
  - "spark"
---

# Advanced troubleshooting for Serverless Spark

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless for Spark provides advanced troubleshooting for supported Spark workloads.

## Extended Definition

Dataproc Serverless for Spark provides advanced troubleshooting for supported Spark workloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc-metastore/docs/network-access](https://docs.cloud.google.com/dataproc-metastore/docs/network-access)
- [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)

## Supporting Pages

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Advanced usage: If you use your own process to create a custom Managed Service for Apache Spark image, you must add the goog-dataproc-version label manually to your custom image, as follows: Extract the goog-dataproc-version label from the base Managed Service for Apache Spark image used to create the custom image. gcloud compute images describe ${BASE DATAPROC IMAGE} \ --project cloud-dataproc \ --format="value(labels.goog-dataproc-version)" Set the label on the custom image. gcloud compute images add-labels IMAGE NAME --labels= [KEY=VALUE,...] Use a custom image You specify the custom image when you create a Managed Service for Apache Spark cluster.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Custom image version labels (advanced usage) When using Managed Service for Apache Spark's standard custom image tool, the tool sets a goog-dataproc-version label on the created custom image.
- The REST response lists additional information about the image, including the selfLink , which is the image URI. { ... "name": "my-custom-image", "selfLink": "projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME " , "sourceDisk": ..., ... } Create a cluster with a custom image create a cluster with using the gcloud CLI, the Managed Service for Apache Spark API, or the Google Cloud console. gcloud CLI Create a Managed Service for Apache Spark cluster with a custom image using the dataproc clusters create command with the --image flag.

### "Using Spark data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)
- Source ID: `site-iam-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Disable Spark data lineage on a job If Spark data lineage is enabled on a cluster, you can disable Spark data lineage on a job by passing the spark.extraListeners property with an empty value ("") when you submit the job. gcloud dataproc jobs submit spark \ --cluster = CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --class CLASS \ --jars = gs:// APPLICATION BUCKET /spark-application.jar \ --properties = spark.extraListeners = '' Submit a Spark job When you submit a supported Spark job on a Managed Service for Apache Spark cluster that was created with Spark data lineage enabled, Managed Service for Apache Spark captures and reports the data lineage information to the Data Lineage API. gcloud dataproc jobs submit spark \ --cluster = CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --class CLASS \ --jars = gs:// APPLICATION BUCKET /spark-application.jar \ --properties = spark.openlineage.namespace = CUSTOM NAMESPACE ,spark.openlineage.appName = CUSTOM APPNAME Notes: Adding the spark.openlineage.namespace and spark.openlineage.appName properties, which are used to uniquely identify the job, is optional.
- It uses a Cloud Storage bucket for temporary storage. #!/usr/bin/env python from pyspark.sql import SparkSession import sys spark = SparkSession \ . builder \ . appName ( 'LINEAGE BQ TO BQ' ) \ . getOrCreate () bucket = 'gs:// BUCKET ` spark . conf . set ( 'temporaryCloudStorageBucket' , bucket ) source = 'bigquery-public-data:samples.shakespeare' words = spark . read . format ( 'bigquery' ) \ . option ( 'table' , source ) \ . load () words . createOrReplaceTempView ( 'words' ) word count = spark . sql ( 'SELECT word, SUM(word count) AS word count FROM words GROUP BY word' ) destination table = ' PROJECT ID : DATASET .
- To get the permissions that you need to use data lineage with Managed Service for Apache Spark , ask your administrator to grant you the following IAM roles on your cluster's custom service account : Grant one of the following roles: Managed Service for Apache Spark Worker ( roles/dataproc.worker ) Data Lineage Editor ( roles/datalineage.editor ) Data Lineage Producer ( roles/datalineage.producer ) Data Lineage Administrator ( roles/datalineage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### Configuring Network Access for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/network-access](https://docs.cloud.google.com/dataproc-metastore/docs/network-access)
- Source ID: `site-docs-root-2`
- Final score: 97
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Understanding the following concepts is crucial for a successful setup: Shared Virtual Private Cloud: If your Managed Service for Apache Spark clusters or Managed Service for Apache Spark workloads are in a service project that uses a Shared VPC network from a host project, verify the appropriate network configurations are made in the host project.
- Refer to General Troubleshooting: For more detailed network diagnostics, refer to: Troubleshooting Managed Service for Apache Spark Cluster Creation Failures Troubleshooting Managed Service for Apache Spark Batch Creation Failures Troubleshooting Dataproc Metastore Connectivity What's next Learn more about Dataproc Metastore .
- Egress Rule from Workload to Metastore: Verify that an egress firewall rule allows outbound TCP traffic from your Managed Service for Apache Spark cluster or Managed Service for Apache Spark workloads to the IP address range of your Dataproc Metastore instance on port 9083 .
- Correct network setup is essential for Managed Service for Apache Spark clusters and Managed Service for Apache Spark workloads to securely and privately communicate with your managed Dataproc Metastore service.

