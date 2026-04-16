---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.217Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cluster image version selection"
feature_slug: "cluster-image-version-selection"
latest_feature_date: "2015-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster"
keywords:
  - "choosing"
  - "selection"
  - "specific"
  - "version"
  - "creation"
  - "supports"
  - "cluster"
  - "image"
---

# Cluster image version selection

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Cluster creation supports choosing a specific Dataproc image version.

## Extended Definition

Cluster creation supports choosing a specific Dataproc image version.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster)

## Supporting Pages

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It cannot be activated on clusters created with supported Dataproc on Compute Engine image versions.
- It is set to true by default in clusters created with image versions 2.2.x.
- Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period.
- JSON representation { "imageVersion" : string , "properties" : { string : string , ... } , "optionalComponents" : [ enum ( Component ) ] } Fields imageVersion string Optional.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Advanced usage: If you use your own process to create a custom Managed Service for Apache Spark image, you must add the goog-dataproc-version label manually to your custom image, as follows: Extract the goog-dataproc-version label from the base Managed Service for Apache Spark image used to create the custom image. gcloud compute images describe ${BASE DATAPROC IMAGE} \ --project cloud-dataproc \ --format="value(labels.goog-dataproc-version)" Set the label on the custom image. gcloud compute images add-labels IMAGE NAME --labels= [KEY=VALUE,...] Use a custom image You specify the custom image when you create a Managed Service for Apache Spark cluster.
- Sample dataproc.custom.properties file: dataproc.conscrypt.provider.enable= VALUE dataproc.logging.stackdriver.enable= VALUE Sample customization script file-creation snippet to override two cluster properties: cat <<EOF >/etc/google-dataproc/dataproc.custom.properties dataproc.conscrypt.provider.enable=true dataproc.logging.stackdriver.enable=false EOF Create a cluster with an expired custom image Managed Service for Apache Spark cannot guarantee support of issues that arise with clusters created with expired custom images.
- Use the gcloud CLI to create the Managed Service for Apache Spark cluster again, adding the copied TOKEN VALUE as a cluster property. gcloud dataproc clusters create CLUSTER-NAME \ --image= CUSTOM-IMAGE-NAME \ --properties=dataproc:dataproc.custom.image.expiration.token= TOKEN VALUE \ --region= REGION \ ... other flags Cluster creation with the custom image should succeed.
- Example: Google Cloud CLI cluster creation command : gcloud dataproc clusters create CLUSTER NAME --image= CUSTOM IMAGE URI \ --optional-components= COMPONENT NAME \ ... other flags If the component name is not specified when you create the cluster, the optional component, including any custom OS packages and configs, will be deleted.

### "Recreate and update a cluster \_|\_ Managed Service for Apache Spark \_\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster)
- Source ID: `site-iam-reference`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Managed Service for Apache Spark prevents the creation of clusters with image versions prior to 1.3.95, 1.4.77, 1.5.53, and 2.0.27, which were affected by Apache Log4j security vulnerabilities .
- Managed Service for Apache Spark also prevents cluster creation for Managed Service for Apache Spark image versions 0.x, 1.0.x, 1.1.x, and 1.2.x.
- The following example uses jq to update the cluster name and the image version. jq ".clusterName = \"${NEW CLUSTER}\" .config.softwareConfig.imageVersion=\"${NEW IMAGE VERSION}\" del(.config.workerConfig.imageUri) del(.config.masterConfig.imageUri)" "${OLD CLUSTER}-config.json" > "${NEW CLUSTER}-config-updated.json" Import the updated cluster configuration to create a new cluster with the updated configuration. curl -i -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json; charset=utf-8" -d "@${NEW CLUSTER}-config-updated.json" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters?alt=json" After confirming your workloads run in the new cluster without issues, delete the existing (old) cluster.
- The following example uses sed to update the image version. sed -E "s (^[[:blank:]]+)imageVersion: .+ \1imageVersion: ${NEW IMAGE VERSION} g" "${OLD CLUSTER}-config.yaml" sed -E '/^[[:blank:]]+imageUri: /d' > "${NEW CLUSTER}-config-updated.yaml" Create a new cluster with a new name and the updated configuration. gcloud dataproc clusters import $NEW CLUSTER \ --project=$PROJECT \ --region=$REGION \ --source="${NEW CLUSTER}-config-updated.yaml" After confirming your workloads run in the new cluster without issues, delete the existing (old) cluster.

