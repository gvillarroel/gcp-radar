---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.588Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Hadoop Google Secret Manager Credential Provider for Compute Engine 2.1 images"
feature_slug: "hadoop-google-secret-manager-credential-provider-for-compute-engine-2-1-images"
latest_feature_date: "2024-02-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/hadoop-google-secret-manager-credential-provider"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources"
keywords:
  - "hadoop"
  - "secret"
  - "manager"
  - "credential"
  - "provider"
  - "compute"
  - "engine"
  - "images"
---

# Hadoop Google Secret Manager Credential Provider for Compute Engine 2.1 images

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc on Compute Engine 2.1 image versions support the Hadoop Google Secret Manager Credential Provider.

## Extended Definition

Dataproc on Compute Engine 2.1 image versions support the Hadoop Google Secret Manager Credential Provider.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/hadoop-google-secret-manager-credential-provider](https://docs.cloud.google.com/dataproc/docs/guides/hadoop-google-secret-manager-credential-provider)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources](https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources)

## Supporting Pages

### "Use Secret Manager credential provider \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/hadoop-google-secret-manager-credential-provider](https://docs.cloud.google.com/dataproc/docs/guides/hadoop-google-secret-manager-credential-provider)
- Source ID: `site-iam-reference`
- Final score: 310
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This behavior is consistent with the Hadoop CredentialProvider API. hadoop credential create SECRET ID -provider gsm://projects/ PROJECT ID -v VALUE List secrets stored in a project. hadoop credential list -provider gsm://projects/ PROJECT ID Check if a secret exists in a project with a specified value. hadoop credential check SECRET ID -provider gsm://projects/ PROJECT ID -v VALUE Check for a specific secret version in a config file. hadoop credential conf CONFIG FILE check SECRET ID -provider gsm://projects/ PROJECT ID -v VALUE CONFIG FILE : The XML file that sets hadoop.security.credstore.google-secret-manager.secret-version .
- Submit a Managed Service for Apache Spark with Secret Manager credential provider Run the following command locally or in Cloud Shell to submit a Managed Service for Apache Spark job with the required properties. gcloud dataproc jobs submit CLUSTER NAME \ --region= REGION \ --properties="hadoop.security.credential.provider.path=gsm://projects/ PROJECT ID ,hadoop.security.credstore.google-secret-manager.secret-id.substitute-dot-operator=true" \ ...other flags as needed... \ -- job-args Notes: CLUSTER NAME : the name of the cluster that will run the job.
- Create a Managed Service for Apache Spark cluster with Secret Manager credential provider Run the following command locally or in Cloud Shell to create a Managed Service for Apache Spark cluster with the required properties. gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --properties="hadoop:hadoop.security.credential.provider.path=gsm://projects/ PROJECT ID ,hadoop:hadoop.security.credstore.google-secret-manager.secret-id.substitute-dot-operator=true" \ ...other flags as needed...
- Use this cluster to run Hive jobs that connect to the external metastore on another Managed Service for Apache Spark cluster. gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --properties="hive:javax.jdo.option.ConnectionURL=jdbc:mysql:// METASTORE CLUSTER NAME -m/metastore,hive:hadoop.security.credential.provider.path=gsm://projects/ PROJECT ID ,hive:hadoop.security.credstore.google-secret-manager.secret-id.substitute-dot-operator=true" \ ...other flags as needed...

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can avoid this issue by including the following command in your customization script to clear cached credentials. rm -r /root/.gsutil /root/.config/gcloud --zone : the Compute Engine zone where generate custom image.py will create a temporary VM to use to create your custom image. --gcs-bucket : a URI, in the format gs:// BUCKET NAME , that points to your Cloud Storage bucket . generate custom image.py writes log files to this bucket.
- Console Open the Compute Engine→Images page in the Google Cloud console, and then click the image name.
- Advanced usage: If you use your own process to create a custom Managed Service for Apache Spark image, you must add the goog-dataproc-version label manually to your custom image, as follows: Extract the goog-dataproc-version label from the base Managed Service for Apache Spark image used to create the custom image. gcloud compute images describe ${BASE DATAPROC IMAGE} \ --project cloud-dataproc \ --format="value(labels.goog-dataproc-version)" Set the label on the custom image. gcloud compute images add-labels IMAGE NAME --labels= [KEY=VALUE,...] Use a custom image You specify the custom image when you create a Managed Service for Apache Spark cluster.
- Full URI: https://www.googleapis.com/compute/beta/projects/ PROJECT ID /global/images/family/ CUSTOM IMAGE FAMILY NAME/var> Partial URI: projects/ PROJECT ID /global/images/family/ CUSTOM IMAGE FAMILY NAME Find the custom image URI Google Cloud CLI Run the following command to list the names of your custom images. gcloud compute images list Pass the name of your custom image to the following command to list the URI ( selfLink ) of your custom image. gcloud compute images describe custom-image-name Output snippet: ... name: CUSTOM IMAGE NAME selfLink: https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME ...

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources](https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use a service like Secret Manager to handle sensitive credentials. db properties = { "user" : " USERNAME " , "password" : " PASSWORD " , "driver" : "org.postgresql.Driver" } jdbc url = "jdbc:postgresql:// DB HOST : DB PORT / DATABASE " spark = SparkSession . builder . appName ( "Postgres JDBC Example" ) . getOrCreate () Read data from a PostgreSQL table df = spark . read . jdbc ( url = jdbc url , table = "public.my table" , properties = db properties ) df . printSchema () df . show () Write data to a new PostgreSQL table ( df . write . jdbc ( url = jdbc url , table = "public.new table" , mode = "overwrite" , properties = db properties )) if name == " main " : main () Connect to external databases using ODBC To connect to data sources where a JDBC driver is unavailable, use an Open Database Connectivity (ODBC) driver.
- Use Secret Manager to store credentials securely and access them from your Managed Service for Apache Spark jobs.
- User roles To get the permissions that you need to create a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account role To ensure that the Compute Engine default service account has the necessary permissions to create a Managed Service for Apache Spark cluster, ask your administrator to grant the Dataproc Worker ( roles/dataproc.worker ) IAM role to the Compute Engine default service account on the project.
- Use Secret Manager. server = ' SERVER.database.windows.net ' database = ' DATABASE ' username = ' USERNAME ' password = ' PASSWORD ' driver = '{ODBC Driver 18 for SQL Server}' # The driver name must match the installed driver.

