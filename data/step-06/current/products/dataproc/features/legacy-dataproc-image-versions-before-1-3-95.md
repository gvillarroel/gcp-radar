---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.614Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Legacy Dataproc image versions before 1.3.95"
feature_slug: "legacy-dataproc-image-versions-before-1-3-95"
latest_feature_date: "2022-02-15"
deprecation_date: "2022-02-28"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions"
keywords:
  - "legacy"
  - "dataproc"
  - "image"
  - "versions"
  - "before"
  - "95"
  - "earlier"
  - "than"
---

# Legacy Dataproc image versions before 1.3.95

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc image versions earlier than 1.3.95, 1.4.77, 1.5.53, and 2.0.27 were deprecated for cluster creation; deprecated on 2022-02-28.

## Extended Definition

Dataproc image versions earlier than 1.3.95, 1.4.77, 1.5.53, and 2.0.27 were deprecated for cluster creation; deprecated on 2022-02-28.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- [https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions](https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions)

## Supporting Pages

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Note: The image name must match the regular expression a-z with no underscores or spaces, and less than 64 characters. --dataproc-version : the Managed Service for Apache Spark image version to use in your custom image.
- Advanced usage: If you use your own process to create a custom Managed Service for Apache Spark image, you must add the goog-dataproc-version label manually to your custom image, as follows: Extract the goog-dataproc-version label from the base Managed Service for Apache Spark image used to create the custom image. gcloud compute images describe ${BASE DATAPROC IMAGE} \ --project cloud-dataproc \ --format="value(labels.goog-dataproc-version)" Set the label on the custom image. gcloud compute images add-labels IMAGE NAME --labels= [KEY=VALUE,...] Use a custom image You specify the custom image when you create a Managed Service for Apache Spark cluster.
- The REST response lists additional information about the image, including the selfLink , which is the image URI. { ... "name": "my-custom-image", "selfLink": "projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME " , "sourceDisk": ..., ... } Create a cluster with a custom image create a cluster with using the gcloud CLI, the Managed Service for Apache Spark API, or the Google Cloud console. gcloud CLI Create a Managed Service for Apache Spark cluster with a custom image using the dataproc clusters create command with the --image flag.
- Sample dataproc.custom.properties file: dataproc.conscrypt.provider.enable= VALUE dataproc.logging.stackdriver.enable= VALUE Sample customization script file-creation snippet to override two cluster properties: cat <<EOF >/etc/google-dataproc/dataproc.custom.properties dataproc.conscrypt.provider.enable=true dataproc.logging.stackdriver.enable=false EOF Create a cluster with an expired custom image Managed Service for Apache Spark cannot guarantee support of issues that arise with clusters created with expired custom images.

### Auxiliary versions \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions](https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions)
- Source ID: `site-docs-root-2`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Enable Dataproc Metastore Required Roles To get the permission that you need to create a Dataproc Metastore that uses auxiliary versions, ask your administrator to grant you the following IAM roles on your project, based on the principle of least privilege: Grant full control of Dataproc Metastore resources ( roles/metastore.editor ) Grant full access to all Dataproc Metastore resources, including IAM policy administration ( roles/metastore.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- You can check the active account by running gcloud auth list . curl -X POST -s -i \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -d '{"network":"projects/ PROJECT ID /global/networks/default", "port": 9083, "hive metastore config": {"auxiliary versions": {"aux-version1": {"version": " AUX VERSION "} } } }' \ -H "Content-Type:application/json" \ https://metastore.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /services?service id= SERVICE ID Replace the following: SERVICE ID : the name of your new Dataproc Metastore service.
- You can check the active account by running gcloud auth list . curl -X PATCH -s -i \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -d '{"hive metastore config": {"auxiliary versions": {"aux-version1": {"version": " AUX VERSION } } } }' \ -H "Content-Type:application/json" \ https://metastore.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /services/ SERVICE ID ?update mask=hive metastore config.auxiliary versions Replace the following: SERVICE ID : the name of your Dataproc Metastore service.
- Click Submit . gcloud CLI To update a Dataproc Metastore service that uses an auxiliary version, run one of the following gcloud metastore services update commands: gcloud metastore services update SERVICE \ --location= LOCATION \ --add-auxiliary-versions= AUXILIARY VERSIONS , ... or gcloud metastore services update SERVICE \ --location= LOCATION \ --update-auxiliary-versions-from-file= AUXILIARY VERSIONS FROM FILE Replace the following: SERVICE : the name of your Dataproc Metastore service.

### Managed Service for Apache Spark driver node groups \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- Source ID: `site-iam-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Note: Managed Service for Apache Spark driver node groups are supported in clusters created with 2.0.52 and later image versions . gcloud gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --driver-pool-size= SIZE \ --driver-pool-id= NODE GROUP ID Required flags: CLUSTER NAME : The cluster name, which must be unique within a project.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "projectId": " PROJECT ID ", "clusterName": " CLUSTER NAME ", "config": { ... "auxiliaryNodeGroups": [ { "nodeGroup": { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": SIZE , "instanceNames": [ " CLUSTER NAME -np-q1gp", " CLUSTER NAME -np-xfc0" ], "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-2a8224d2-...", "instanceGroupManagerName": "dataproc-2a8224d2-..." }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } }, "nodeGroupId": " NODE GROUP ID " } ] }, } Get driver node group cluster metadata You can use the gcloud dataproc node-groups describe command or the Managed Service for Apache Spark API to get driver node group metadata. gcloud gcloud dataproc node-groups describe NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME nodeGroups/ Node GROUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": 5, "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-driver-pool-mcia3j656h2fy", "instanceGroupManagerName": "dataproc-driver-pool-mcia3j656h2fy" }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } } Resize a driver node group You can use the gcloud dataproc node-groups resize command or the Managed Service for Apache Spark API to add or remove driver nodes from a cluster driver node group. gcloud gcloud dataproc node-groups resize NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION \ --size= SIZE Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- Spark job to estimate value of pi : gcloud dataproc jobs submit spark \ --cluster= CLUSTER NAME \ --region= REGION \ --driver-required-memory-mb=2048 \ --driver-required-vcores=2 \ --class=org.apache.spark.examples.SparkPi \ --jars=file:///usr/lib/spark/examples/jars/spark-examples.jar \ -- 1000 Spark wordcount job: gcloud dataproc jobs submit spark \ --cluster= CLUSTER NAME \ --region= REGION \ --driver-required-memory-mb=2048 \ --driver-required-vcores=2 \ --class=org.apache.spark.examples.JavaWordCount \ --jars=file:///usr/lib/spark/examples/jars/spark-examples.jar \ -- 'gs://apache-beam-samples/shakespeare/macbeth.txt' PySpark job to estimate value of pi : gcloud dataproc jobs submit pyspark \ file:///usr/lib/spark/examples/src/main/python/pi.py \ --cluster= CLUSTER NAME \ --region= REGION \ --driver-required-memory-mb=2048 \ --driver-required-vcores=2 \ -- 1000 Hadoop TeraGen MapReduce job: gcloud dataproc jobs submit hadoop \ --cluster= CLUSTER NAME \ --region= REGION \ --driver-required-memory-mb=2048 \ --driver-required-vcores=2 \ --jar file:///usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar \ -- teragen 1000 \ hdfs:///gen1/test REST Before using any of the request data, make the following replacements: PROJECT ID : Required.

