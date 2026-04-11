---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.095Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Image family URI cluster images"
feature_slug: "image-family-uri-cluster-images"
latest_feature_date: "2019-09-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images"
keywords:
  - "image"
  - "family"
  - "uri"
  - "cluster"
  - "images"
  - "dataproc"
  - "lets"
  - "users"
---

# Image family URI cluster images

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc lets users specify cluster images by image family URI during cluster creation.

## Extended Definition

Dataproc lets users specify cluster images by image family URI during cluster creation.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images)

## Supporting Pages

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The REST response lists additional information about the image, including the selfLink , which is the image URI. { ... "name": "my-custom-image", "selfLink": "projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME " , "sourceDisk": ..., ... } Create a cluster with a custom image create a cluster with using the gcloud CLI, the Managed Service for Apache Spark API, or the Google Cloud console. gcloud CLI Create a Managed Service for Apache Spark cluster with a custom image using the dataproc clusters create command with the --image flag.
- Advanced usage: If you use your own process to create a custom Managed Service for Apache Spark image, you must add the goog-dataproc-version label manually to your custom image, as follows: Extract the goog-dataproc-version label from the base Managed Service for Apache Spark image used to create the custom image. gcloud compute images describe ${BASE DATAPROC IMAGE} \ --project cloud-dataproc \ --format="value(labels.goog-dataproc-version)" Set the label on the custom image. gcloud compute images add-labels IMAGE NAME --labels= [KEY=VALUE,...] Use a custom image You specify the custom image when you create a Managed Service for Apache Spark cluster.
- Full URI: https://www.googleapis.com/compute/beta/projects/ PROJECT ID /global/images/family/ CUSTOM IMAGE FAMILY NAME/var> Partial URI: projects/ PROJECT ID /global/images/family/ CUSTOM IMAGE FAMILY NAME Find the custom image URI Google Cloud CLI Run the following command to list the names of your custom images. gcloud compute images list Pass the name of your custom image to the following command to list the URI ( selfLink ) of your custom image. gcloud compute images describe custom-image-name Output snippet: ... name: CUSTOM IMAGE NAME selfLink: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME ...
- Sample dataproc.custom.properties file: dataproc.conscrypt.provider.enable= VALUE dataproc.logging.stackdriver.enable= VALUE Sample customization script file-creation snippet to override two cluster properties: cat <<EOF >/etc/google-dataproc/dataproc.custom.properties dataproc.conscrypt.provider.enable=true dataproc.logging.stackdriver.enable=false EOF Create a cluster with an expired custom image Managed Service for Apache Spark cannot guarantee support of issues that arise with clusters created with expired custom images.

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- September 20, 2019 Feature Added support for specifying images by image family URI when creating Dataproc clusters.
- Change Blocklisted the following Dataproc on Compute Engine Images due to issue with increase in startup time: 2.0.86-debian10, 2.0.86-rocky8, 2.0.86-ubuntu18 2.1.34-debian11, 2.1.34-rocky8, 2.1.34-ubuntu20, 2.1.34-ubuntu20-arm December 06, 2023 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.41 2.0.49 2.1.28 2.2.0-RC1 Announcement Announcing the Preview release of Dataproc Serverless for Spark 2.2 runtime : Spark 3.5.0 BigQuery Spark Connector 0.34.0 Cloud Storage Connector 3.0.0-RC1 Conda 23.10 Java 17 Python 3.12 R 4.3 Scala 2.13 December 04, 2023 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.85-debian10, 2.0.85-rocky8, 2.0.85-ubuntu18 2.1.33-debian11, 2.1.33-rocky8, 2.1.33-ubuntu20, 2.1.33-ubuntu20-arm Feature Added the Confidential Computing option on the "Manage Security" panel on the "Create a Dataproc cluster on Compute Engine" page in the Google Cloud console.
- The cluster creation API will continue to accept relative names, such as projects/foo-project/global/images/foo-image or foo-image (see Dataproc API doesn't return imageUri in a consistent format ).
- Change New sub-minor versions of Cloud Dataproc images - 1.0.89, 1.1.80, 1.2.44, 1.3.4 In HA clusters, hadoop.security.token.service.use ip is now set to false.

### "Create a Google Kubernetes Engine custom container image \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: The spark: file prefix is needed when creating a cluster, but omitted when submitting a job (see Cluster properties ). gcloud CLI cluster creation example: gcloud dataproc clusters gke create "${DP CLUSTER}" \ --properties=spark:spark.kubernetes.container.image= custom-image \ ... other args ... gcloud CLI job submit example: gcloud dataproc jobs submit spark \ --properties=spark.kubernetes.container.image= custom-image \ ... other args ...
- Base Spark images Managed Service for Apache Spark supports the following base Spark container images: Spark 3.5 : ${REGION}-docker.pkg.dev/cloud-dataproc/spark/dataproc 2.2 Sample custom container image build Sample Dockerfile FROM us - central1 - docker . pkg . dev / cloud - dataproc / spark / dataproc 2 .0 : latest Change to root temporarily so that it has permissions to create dirs and copy files.
- Use a custom container image To use a Managed Service for Apache Spark on GKE custom container image, set the spark.kubernetes.container.image property when you create a Managed Service for Apache Spark on GKE virtual cluster or submit a Spark job to the cluster.
- Custom container image requirements and settings Base images You can use docker tools for building customized docker based upon one of the published Managed Service for Apache Spark on GKE base Spark images .

