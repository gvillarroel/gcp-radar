---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.632Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "oauth2l tool in Dataproc images"
feature_slug: "oauth2l-tool-in-dataproc-images"
latest_feature_date: "2020-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/authentication"
keywords:
  - "oauth2l"
  - "tool"
  - "dataproc"
  - "images"
  - "include"
  - "command"
  - "line"
  - "all"
---

# oauth2l tool in Dataproc images

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc images include the oauth2l command-line tool for all VM users.

## Extended Definition

Dataproc images include the oauth2l command-line tool for all VM users.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc-metastore/docs/authentication](https://docs.cloud.google.com/dataproc-metastore/docs/authentication)

## Supporting Pages

### "Create a Google Kubernetes Engine custom container image \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Base Spark images Managed Service for Apache Spark supports the following base Spark container images: Spark 3.5 : ${REGION}-docker.pkg.dev/cloud-dataproc/spark/dataproc 2.2 Sample custom container image build Sample Dockerfile FROM us - central1 - docker . pkg . dev / cloud - dataproc / spark / dataproc 2 .0 : latest Change to root temporarily so that it has permissions to create dirs and copy files.
- Custom container image requirements and settings Base images You can use docker tools for building customized docker based upon one of the published Managed Service for Apache Spark on GKE base Spark images .
- The entrypoint script calls the initialization script with all command line args ( $@ ) before starting the Spark driver, Spark executor, and other processes.
- These utilities are included in the base Spark images , so custom images do not need to re-install them.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- The REST response lists additional information about the image, including the selfLink , which is the image URI. { ... "name": "my-custom-image", "selfLink": "projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME " , "sourceDisk": ..., ... } Create a cluster with a custom image create a cluster with using the gcloud CLI, the Managed Service for Apache Spark API, or the Google Cloud console. gcloud CLI Create a Managed Service for Apache Spark cluster with a custom image using the dataproc clusters create command with the --image flag.
- Advanced usage: If you use your own process to create a custom Managed Service for Apache Spark image, you must add the goog-dataproc-version label manually to your custom image, as follows: Extract the goog-dataproc-version label from the base Managed Service for Apache Spark image used to create the custom image. gcloud compute images describe ${BASE DATAPROC IMAGE} \ --project cloud-dataproc \ --format="value(labels.goog-dataproc-version)" Set the label on the custom image. gcloud compute images add-labels IMAGE NAME --labels= [KEY=VALUE,...] Use a custom image You specify the custom image when you create a Managed Service for Apache Spark cluster.
- Full URI: https://www.googleapis.com/compute/beta/projects/ PROJECT ID /global/images/family/ CUSTOM IMAGE FAMILY NAME/var> Partial URI: projects/ PROJECT ID /global/images/family/ CUSTOM IMAGE FAMILY NAME Find the custom image URI Google Cloud CLI Run the following command to list the names of your custom images. gcloud compute images list Pass the name of your custom image to the following command to list the URI ( selfLink ) of your custom image. gcloud compute images describe custom-image-name Output snippet: ... name: CUSTOM IMAGE NAME selfLink: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME ...
- Sample dataproc.custom.properties file: dataproc.conscrypt.provider.enable= VALUE dataproc.logging.stackdriver.enable= VALUE Sample customization script file-creation snippet to override two cluster properties: cat <<EOF >/etc/google-dataproc/dataproc.custom.properties dataproc.conscrypt.provider.enable=true dataproc.logging.stackdriver.enable=false EOF Create a cluster with an expired custom image Managed Service for Apache Spark cannot guarantee support of issues that arise with clusters created with expired custom images.

### Authenticate to Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/authentication](https://docs.cloud.google.com/dataproc-metastore/docs/authentication)
- Source ID: `site-docs-root-2`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a local development environment You can set up credentials for a local development environment in the following ways: User credentials for client libraries or third-party tools User credentials for REST requests from the command line Service account impersonation Client libraries or third-party tools Set up Application Default Credentials (ADC) in your local environment: Install the Google Cloud CLI.
- REST requests from the command line When you make a REST request from the command line, you can use your gcloud CLI credentials by including gcloud auth print-access-token as part of the command that sends the request.
- Google Cloud CLI When you use the gcloud CLI to access Dataproc Metastore, you log in to the gcloud CLI with a user account, which provides the credentials used by the gcloud CLI commands.
- To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" PowerShell (Windows) Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" Select-Object -Expand Content For more information about authenticating using REST and gRPC, see Authenticate for using REST .

