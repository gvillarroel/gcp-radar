---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.672Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Custom Images"
feature_slug: "custom-images"
latest_feature_date: "2018-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn"
keywords:
  - "custom"
  - "images"
  - "let"
  - "users"
  - "create"
  - "save"
  - "preconfigured"
  - "packages"
---

# Custom Images

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Custom Images let users create and save preconfigured images with packages pre-installed for Dataproc cluster creation; Custom Images let users create reusable Dataproc images with packages pre-installed for cluster creation.

## Extended Definition

Custom Images let users create and save preconfigured images with packages pre-installed for Dataproc cluster creation; Custom Images let users create reusable Dataproc images with packages pre-installed for cluster creation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)

## Supporting Pages

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A custom image is saved in Cloud Compute Images , and is valid to create a Managed Service for Apache Spark cluster for 365 days from its creation date (see Create a cluster with an expired custom image to use a custom image after its 365-day expiration date).
- Advanced usage: If you use your own process to create a custom Managed Service for Apache Spark image, you must add the goog-dataproc-version label manually to your custom image, as follows: Extract the goog-dataproc-version label from the base Managed Service for Apache Spark image used to create the custom image. gcloud compute images describe ${BASE DATAPROC IMAGE} \ --project cloud-dataproc \ --format="value(labels.goog-dataproc-version)" Set the label on the custom image. gcloud compute images add-labels IMAGE NAME --labels= [KEY=VALUE,...] Use a custom image You specify the custom image when you create a Managed Service for Apache Spark cluster.
- The REST response lists additional information about the image, including the selfLink , which is the image URI. { ... "name": "my-custom-image", "selfLink": "projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME " , "sourceDisk": ..., ... } Create a cluster with a custom image create a cluster with using the gcloud CLI, the Managed Service for Apache Spark API, or the Google Cloud console. gcloud CLI Create a Managed Service for Apache Spark cluster with a custom image using the dataproc clusters create command with the --image flag.
- Sample dataproc.custom.properties file: dataproc.conscrypt.provider.enable= VALUE dataproc.logging.stackdriver.enable= VALUE Sample customization script file-creation snippet to override two cluster properties: cat <<EOF >/etc/google-dataproc/dataproc.custom.properties dataproc.conscrypt.provider.enable=true dataproc.logging.stackdriver.enable=false EOF Create a cluster with an expired custom image Managed Service for Apache Spark cannot guarantee support of issues that arise with clusters created with expired custom images.

### "Create a Google Kubernetes Engine custom container image \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Base Spark images Managed Service for Apache Spark supports the following base Spark container images: Spark 3.5 : ${REGION}-docker.pkg.dev/cloud-dataproc/spark/dataproc 2.2 Sample custom container image build Sample Dockerfile FROM us - central1 - docker . pkg . dev / cloud - dataproc / spark / dataproc 2 .0 : latest Change to root temporarily so that it has permissions to create dirs and copy files.
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Create a Google Kubernetes Engine custom container image Stay organized with collections Save and categorize content based on your preferences.
- Note: The spark: file prefix is needed when creating a cluster, but omitted when submitting a job (see Cluster properties ). gcloud CLI cluster creation example: gcloud dataproc clusters gke create "${DP CLUSTER}" \ --properties=spark:spark.kubernetes.container.image= custom-image \ ... other args ... gcloud CLI job submit example: gcloud dataproc jobs submit spark \ --properties=spark.kubernetes.container.image= custom-image \ ... other args ...
- Use a custom container image To use a Managed Service for Apache Spark on GKE custom container image, set the spark.kubernetes.container.image property when you create a Managed Service for Apache Spark on GKE virtual cluster or submit a Spark job to the cluster.

### "Customize your Spark job runtime environment with Docker on YARN \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Download the Miniconda3 installer. wget https://repo.anaconda.com/miniconda/Miniconda3-py39 4.10.3-Linux-x86 64.sh Python module example: cat >test util.py <<EOF def hello ( name ) : print ( "hello {}" .format ( name )) def read lines ( path ) : with open ( path ) as f: return f.readlines () EOF Build and push the image. docker build -t " ${ IMAGE } " . docker push " ${ IMAGE } " Create a Managed Service for Apache Spark cluster After creating a Docker image that customizes your Spark environment, create a Managed Service for Apache Spark cluster that will use your Docker image when running Spark jobs. gcloud gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --image-version= DP IMAGE \ --optional-components=DOCKER \ --properties=dataproc:yarn.docker.enable=true,dataproc:yarn.docker.image= DOCKER IMAGE \ other flags Replace the following; CLUSTER NAME : The cluster name.
- Limitations Feature availability or support is not available with: Managed Service for Apache Spark image versions prior to 2.0.49 (not available in 1.5 images) MapReduce jobs (only supported for Spark jobs ) Spark client mode (only supported with Spark cluster mode) Kerberos clusters : cluster creation fails if you create a cluster with Docker on YARN and Kerberos enabled.
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Customize your Spark job runtime environment with Docker on YARN Stay organized with collections Save and categorize content based on your preferences.
- ENV PYTHONPATH = /opt/python/packages RUN mkdir -p " ${ PYTHONPATH } " COPY test util.py " ${ PYTHONPATH } " Required: Create the 'yarn docker user' group/user.

