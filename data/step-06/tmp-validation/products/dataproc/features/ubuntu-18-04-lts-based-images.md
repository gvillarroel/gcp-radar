---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.184Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Ubuntu 18.04 LTS-based images"
feature_slug: "ubuntu-18-04-lts-based-images"
latest_feature_date: "2019-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
keywords:
  - "ubuntu"
  - "based"
  - "provides"
  - "images"
---

# Ubuntu 18.04 LTS-based images

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc provides Ubuntu 18.04 LTS-based images for the 1.3 and 1.4 image lines; Dataproc provides Ubuntu 18.04 LTS-based images for the 1.3 and 1.4 image lines in preview.

## Extended Definition

Dataproc provides Ubuntu 18.04 LTS-based images for the 1.3 and 1.4 image lines; Dataproc provides Ubuntu 18.04 LTS-based images for the 1.3 and 1.4 image lines in preview.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)

## Supporting Pages

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- The following base images are supported: Debian, Rocky Linux, and Ubuntu .
- Advanced usage: If you use your own process to create a custom Managed Service for Apache Spark image, you must add the goog-dataproc-version label manually to your custom image, as follows: Extract the goog-dataproc-version label from the base Managed Service for Apache Spark image used to create the custom image. gcloud compute images describe ${BASE DATAPROC IMAGE} \ --project cloud-dataproc \ --format="value(labels.goog-dataproc-version)" Set the label on the custom image. gcloud compute images add-labels IMAGE NAME --labels= [KEY=VALUE,...] Use a custom image You specify the custom image when you create a Managed Service for Apache Spark cluster.
- Full URI: https://www.googleapis.com/compute/beta/projects/ PROJECT ID /global/images/family/ CUSTOM IMAGE FAMILY NAME/var> Partial URI: projects/ PROJECT ID /global/images/family/ CUSTOM IMAGE FAMILY NAME Find the custom image URI Google Cloud CLI Run the following command to list the names of your custom images. gcloud compute images list Pass the name of your custom image to the following command to list the URI ( selfLink ) of your custom image. gcloud compute images describe custom-image-name Output snippet: ... name: CUSTOM IMAGE NAME selfLink: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME ...
- The REST response lists additional information about the image, including the selfLink , which is the image URI. { ... "name": "my-custom-image", "selfLink": "projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME " , "sourceDisk": ..., ... } Create a cluster with a custom image create a cluster with using the gcloud CLI, the Managed Service for Apache Spark API, or the Google Cloud console. gcloud CLI Create a Managed Service for Apache Spark cluster with a custom image using the dataproc clusters create command with the --image flag.

### "Create a Google Kubernetes Engine custom container image \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Custom container image requirements and settings Base images You can use docker tools for building customized docker based upon one of the published Managed Service for Apache Spark on GKE base Spark images .
- Base Spark images Managed Service for Apache Spark supports the following base Spark container images: Spark 3.5 : ${REGION}-docker.pkg.dev/cloud-dataproc/spark/dataproc 2.2 Sample custom container image build Sample Dockerfile FROM us - central1 - docker . pkg . dev / cloud - dataproc / spark / dataproc 2 .0 : latest Change to root temporarily so that it has permissions to create dirs and copy files.
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Create a Google Kubernetes Engine custom container image Stay organized with collections Save and categorize content based on your preferences.
- The initialization script can select the type of Spark process based on the first arg ( $1 ): possible values include spark-submit for driver containers, and executor for executor containers.

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Java Client libraries Send feedback Package com.google.cloud.dataproc.v1 (4.85.0) Stay organized with collections Save and categorize content based on your preferences.
- Node Group Controller Grpc The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances. com. google. cloud. dataproc. v1.
- Node Group Controller Client Service Description: The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances.
- Async Service The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances. com. google. cloud. dataproc. v1.

