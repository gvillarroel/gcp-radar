---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.137Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cluster image version selection"
feature_slug: "cluster-image-version-selection"
latest_feature_date: "2015-12-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
keywords:
  - "cluster"
  - "image"
  - "version"
  - "selection"
  - "creation"
  - "supports"
  - "choosing"
  - "specific"
---

# Cluster image version selection

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Cluster creation supports choosing a specific Dataproc image version.

## Extended Definition

Cluster creation supports choosing a specific Dataproc image version.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- March 28, 2023 Announcement New sub-minor versions of Dataproc images: 1.5.87-debian10, 1.5.87-rocky8, 1.5.87-ubuntu18 2.0.61-debian10, 2.0.61-rocky8, 2.0.61-ubuntu18 2.1.9-debian11, 2.1.9-rocky8, 2.1.9-ubuntu20 Feature Dataproc cluster creation now supports the pd-extreme disk type.
- August 19, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.146-debian10, 2.0.146-ubuntu18, 2.0.146-rocky8 2.1.95-debian11, 2.1.95-ubuntu20, 2.1.95-ubuntu20-arm, 2.1.95-rocky8 2.2.63-debian12, 2.2.63-ubuntu22, 2.2.63-ubuntu22-arm, 2.2.63-rocky9 2.3.9-debian12, 2.3.9-ubuntu22, 2.3.9-ubuntu22-arm, 2.3.9-ml-ubuntu22, 2.3.9-rocky9 August 14, 2025 Announcement New Dataproc Serverless for Spark runtime versions : 1.2.57 2.2.57 2.3.8 August 12, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.145-debian10, 2.0.145-ubuntu18, 2.0.145-rocky8 2.1.94-debian11, 2.1.94-ubuntu20, 2.1.94-ubuntu20-arm, 2.1.94-rocky8 2.2.62-debian12, 2.2.62-ubuntu22, 2.2.62-ubuntu22-arm, 2.2.62-rocky9 2.3.8-debian12, 2.3.8-ubuntu22, 2.3.8-ubuntu22-arm, 2.3.8-ml-ubuntu22, 2.3.8-rocky9 Feature Dataproc on Compute Engine : Sharing checkpoint diagnostic data: Setting the dataproc:diagnostic.capture.access=GOOGLE DATAPROC DIAGNOSE property during cluster creation shares all of the temp bucket contents with Google Cloud support if uniform bucket-level access is enabled on temp bucket.
- December 16, 2015 Feature Cloud Dataproc clusters now have vim , git , and bash-completion installed by default The Cloud Dataproc API now has an official Maven artifact , Javadocs , and a downloadable .zip file GCP Console Properties can now be specified when submitting a job, and can be seen in the Configuration tab of a job A Clone button has been added that allows you to easily copy all information about a job to a new job submission form The left-side icons for Clusters and Jobs are now custom icons rather than generic ones An Image version field has been added to the bottom of the create cluster form that allows you to select a specific Cloud Dataproc image version when creating a cluster A VM Instances tab has been added on the cluster detail page, which you can use to display a list of all VMs in a cluster and easily SSH into the master node An Initialization Actions field has been added to the bottom of the create cluster form, which allows you to specify initialization actions when creating a cluster Paths to Cloud Storage buckets that are displayed in error messages are now clickable links.
- Announcement New Dataproc on Compute Engine subminor image versions : 2.0.68-debian10, 2.0.68-rocky8, 2.0.68-ubuntu18 2.1.16-debian11, 2.1.16-rocky8, 2.1.16-ubuntu20 June 26, 2023 Announcement Added Dataproc Serverless Templates for batch creation: Cloud Storage to BigQuery Cloud Storage to Cloud Spanner Hive to Cloud Storage JDBC to BigQuery JDBC to Cloud Storage June 22, 2023 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.20 2.0.28 2.1.7 June 16, 2023 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.67-debian10, 2.0.67-rocky8, 2.0.67-ubuntu18 2.1.15-debian11, 2.1.15-rocky8, 2.1.15-ubuntu20 Fixed Fixed a bug that caused cluster creation to fail when ATSv2 is enabled for tables that have a garbage collection policy setup other than maxversions .

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- It cannot be activated on clusters created with supported Dataproc on Compute Engine image versions.
- It is set to true by default in clusters created with image versions 2.2.x.
- Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period.
- JSON representation { "imageVersion" : string , "properties" : { string : string , ... } , "optionalComponents" : [ enum ( Component ) ] } Fields imageVersion string Optional.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Advanced usage: If you use your own process to create a custom Managed Service for Apache Spark image, you must add the goog-dataproc-version label manually to your custom image, as follows: Extract the goog-dataproc-version label from the base Managed Service for Apache Spark image used to create the custom image. gcloud compute images describe ${BASE DATAPROC IMAGE} \ --project cloud-dataproc \ --format="value(labels.goog-dataproc-version)" Set the label on the custom image. gcloud compute images add-labels IMAGE NAME --labels= [KEY=VALUE,...] Use a custom image You specify the custom image when you create a Managed Service for Apache Spark cluster.
- Sample dataproc.custom.properties file: dataproc.conscrypt.provider.enable= VALUE dataproc.logging.stackdriver.enable= VALUE Sample customization script file-creation snippet to override two cluster properties: cat <<EOF >/etc/google-dataproc/dataproc.custom.properties dataproc.conscrypt.provider.enable=true dataproc.logging.stackdriver.enable=false EOF Create a cluster with an expired custom image Managed Service for Apache Spark cannot guarantee support of issues that arise with clusters created with expired custom images.
- Use the gcloud CLI to create the Managed Service for Apache Spark cluster again, adding the copied TOKEN VALUE as a cluster property. gcloud dataproc clusters create CLUSTER-NAME \ --image= CUSTOM-IMAGE-NAME \ --properties=dataproc:dataproc.custom.image.expiration.token= TOKEN VALUE \ --region= REGION \ ... other flags Cluster creation with the custom image should succeed.
- Example: Google Cloud CLI cluster creation command : gcloud dataproc clusters create CLUSTER NAME --image= CUSTOM IMAGE URI \ --optional-components= COMPONENT NAME \ ... other flags If the component name is not specified when you create the cluster, the optional component, including any custom OS packages and configs, will be deleted.

