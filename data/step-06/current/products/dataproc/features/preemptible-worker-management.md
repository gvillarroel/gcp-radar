---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.714Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Preemptible worker management"
feature_slug: "preemptible-worker-management"
latest_feature_date: "2015-10-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console"
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
keywords:
  - "preemptible"
  - "worker"
  - "management"
  - "console"
  - "supports"
  - "adding"
  - "editing"
  - "removing"
---

# Preemptible worker management

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The console supports adding, editing, and removing preemptible instances in Dataproc clusters.

## Extended Definition

The console supports adding, editing, and removing preemptible instances in Dataproc clusters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console](https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console)
- [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)

## Supporting Pages

### "Quickstart: Create a cluster by using the Google Cloud console \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console](https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Create a cluster by using the Google Cloud console This page shows you how to use the Google Cloud console to create a Managed Service for Apache Spark cluster, run a basic Apache Spark job in the cluster, and then modify the number of workers in the cluster.
- User roles To get the permissions that you need to create a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account role To ensure that the Compute Engine default service account has the necessary permissions to create a Managed Service for Apache Spark cluster, ask your administrator to grant the Dataproc Worker ( roles/dataproc.worker ) IAM role to the Compute Engine default service account on the project.
- To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin Sign in to your Google Cloud account.
- Update a cluster Update your cluster by changing the number of worker instances: In the Managed Service for Apache Spark navigation menu, click Clusters .

### "Quickstart: Create a cluster by using the Google Cloud console \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Create a cluster by using the Google Cloud console This page shows you how to use the Google Cloud console to create a Managed Service for Apache Spark cluster, run a basic Apache Spark job in the cluster, and then modify the number of workers in the cluster.
- User roles To get the permissions that you need to create a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account role To ensure that the Compute Engine default service account has the necessary permissions to create a Managed Service for Apache Spark cluster, ask your administrator to grant the Dataproc Worker ( roles/dataproc.worker ) IAM role to the Compute Engine default service account on the project.
- To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin Sign in to your Google Cloud account.
- Update a cluster Update your cluster by changing the number of worker instances: In the Managed Service for Apache Spark navigation menu, click Clusters .

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- POST /v1/projects/ PROJECT ID /regions/ REGION /clusters/ { "clusterName": " CLUSTER NAME ", "config": { "masterConfig": { "imageUri": "projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME " }, "workerConfig": { "imageUri": "projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME " } } } Console Open the Managed Service for Apache Spark Create a cluster page.
- The REST response lists additional information about the image, including the selfLink , which is the image URI. { ... "name": "my-custom-image", "selfLink": "projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME " , "sourceDisk": ..., ... } Create a cluster with a custom image create a cluster with using the gcloud CLI, the Managed Service for Apache Spark API, or the Google Cloud console. gcloud CLI Create a Managed Service for Apache Spark cluster with a custom image using the dataproc clusters create command with the --image flag.
- To initialize the gcloud CLI, run the following command: gcloud init Install Python 3.11+ Prepare a customization script that installs custom packages and/or updates configurations, for example: #! /usr/bin/bash apt-get -y update apt-get install python-dev apt-get install python-pip pip install numpy Create a Cloud Storage bucket in your project In the Google Cloud console, go to the Cloud Storage Buckets page.
- Use the gcloud CLI to create the Managed Service for Apache Spark cluster again, adding the copied TOKEN VALUE as a cluster property. gcloud dataproc clusters create CLUSTER-NAME \ --image= CUSTOM-IMAGE-NAME \ --properties=dataproc:dataproc.custom.image.expiration.token= TOKEN VALUE \ --region= REGION \ ... other flags Cluster creation with the custom image should succeed.

