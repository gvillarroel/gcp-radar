---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.127Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cloud Dataproc image versions 0.1 and 0.2"
feature_slug: "cloud-dataproc-image-versions-0-1-and-0-2"
latest_feature_date: "2016-08-16"
deprecation_date: "2016-08-16"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups"
keywords:
  - "dataproc"
  - "image"
  - "versions"
  - "and"
  - "were"
  - "deprecated"
  - "no"
  - "longer"
---

# Cloud Dataproc image versions 0.1 and 0.2

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Cloud Dataproc image versions 0.1 and 0.2 were deprecated and no longer receive updates; deprecated on 2016-08-16.

## Extended Definition

Cloud Dataproc image versions 0.1 and 0.2 were deprecated and no longer receive updates; deprecated on 2016-08-16.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Deprecated The two Cloud Dataproc image versions released during the Cloud Dataproc beta, 0.1 and 0.2 , will no longer receive updates.
- December 22, 2025 Announcement New Serverless for Apache Spark runtime versions : 1.2.65 2.2.65 2.3.18 December 20, 2025 Breaking The following Dataproc on Compute Engine subminor image versions, released on December 05, 2025 , are now blocklisted : 2.2.72-debian12, 2.2.72-ubuntu22, 2.2.72-ubuntu22-arm, 2.2.72-rocky9 2.3.19-debian12, 2.3.19-ubuntu22, 2.3.19-ubuntu22-arm, 2.3.19-ml-ubuntu22, 2.3.19-rocky9 December 05, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.155-debian10, 2.0.155-ubuntu18, 2.0.155-rocky8 2.1.104-debian11, 2.1.104-ubuntu20, 2.1.104-ubuntu20-arm, 2.1.104-rocky8 2.2.72-debian12, 2.2.72-ubuntu22, 2.2.72-ubuntu22-arm, 2.2.72-rocky9 2.3.19-debian12, 2.3.19-ubuntu22, 2.3.19-ubuntu22-arm, 2.3.19-ml-ubuntu22, 2.3.19-rocky9 Blocklist update: The 2.2.72 and 2.3.19 subminor image versions were blocklisted on December 20, 2025 .
- August 26, 2024 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.115-debian10, 2.0.115-rocky8, 2.0.115-ubuntu18 2.1.63-debian11, 2.1.63-rocky8, 2.1.63-ubuntu20, 2.1.63-ubuntu20-arm 2.2.29-debian12, 2.2.29-rocky9, 2.2.29-ubuntu22 August 22, 2024 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.77 1.2.21 2.0.85 2.2.21 Announcement Dataproc Serverless for Spark: Subminor version 2.0.85 is the last release of runtime version 2.0 , which will no longer be supported and will not receive new releases.
- August 11, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.1.93-debian11, 2.1.93-rocky8, 2.1.93-ubuntu20, 2.1.93-ubuntu20-arm 2.2.61-debian12, 2.2.61-rocky9, 2.2.61-ubuntu22, 2.2.61-ubuntu22-arm July 31, 2025 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.111 1.2.55 2.2.55 2.3.6 Announcement Dataproc Serverless for Spark: Subminor version 1.1.111 is the last release of runtime version 1.1 , which will no longer be supported and will not receive new releases.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Then, run the generate custom image.py script to have Managed Service for Apache Spark generate and save your custom image. python3 generate custom image.py \ --image-name= CUSTOM IMAGE NAME \ [--family= CUSTOM IMAGE FAMILY NAME ] \ --dataproc-version= IMAGE VERSION \ --customization-script= LOCAL PATH \ --zone= ZONE \ --gcs-bucket= gs:// BUCKET NAME \ [--no-smoke-test] Required flags --image-name : the output name for your custom image.
- Example: Google Cloud CLI cluster creation command : gcloud dataproc clusters create CLUSTER NAME --image= CUSTOM IMAGE URI \ --optional-components= COMPONENT NAME \ ... other flags If the component name is not specified when you create the cluster, the optional component, including any custom OS packages and configs, will be deleted.
- A list of optional components , such as SOLR, RANGER, TRINO, DOCKER, FLINK, HIVE WEBHCAT, ZEPPELIN, HUDI, ICEBERG, and PIG (PIG is available as an optional component in image versions 2.3 and later), to install in the image.
- Note: The image name must match the regular expression a-z with no underscores or spaces, and less than 64 characters. --dataproc-version : the Managed Service for Apache Spark image version to use in your custom image.

### Managed Service for Apache Spark driver node groups \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Note: Managed Service for Apache Spark driver node groups are supported in clusters created with 2.0.52 and later image versions . gcloud gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --driver-pool-size= SIZE \ --driver-pool-id= NODE GROUP ID Required flags: CLUSTER NAME : The cluster name, which must be unique within a project.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "projectId": " PROJECT ID ", "clusterName": " CLUSTER NAME ", "config": { ... "auxiliaryNodeGroups": [ { "nodeGroup": { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": SIZE , "instanceNames": [ " CLUSTER NAME -np-q1gp", " CLUSTER NAME -np-xfc0" ], "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-2a8224d2-...", "instanceGroupManagerName": "dataproc-2a8224d2-..." }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } }, "nodeGroupId": " NODE GROUP ID " } ] }, } Get driver node group cluster metadata You can use the gcloud dataproc node-groups describe command or the Managed Service for Apache Spark API to get driver node group metadata. gcloud gcloud dataproc node-groups describe NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME nodeGroups/ Node GROUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": 5, "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-driver-pool-mcia3j656h2fy", "instanceGroupManagerName": "dataproc-driver-pool-mcia3j656h2fy" }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } } Resize a driver node group You can use the gcloud dataproc node-groups resize command or the Managed Service for Apache Spark API to add or remove driver nodes from a cluster driver node group. gcloud gcloud dataproc node-groups resize NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION \ --size= SIZE Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters Request JSON body: { "clusterName":" CLUSTER NAME ", "config": { "softwareConfig": { "imageVersion":"" }, "endpointConfig": { "enableHttpPortAccess": true }, "auxiliaryNodeGroups": [{ "nodeGroup":{ "roles":["DRIVER"], "nodeGroupConfig": { "numInstances": SIZE } }, "nodeGroupId": " NODE GROUP ID " }] } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

