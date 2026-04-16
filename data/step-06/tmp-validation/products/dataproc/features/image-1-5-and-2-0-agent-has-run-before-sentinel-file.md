---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.145Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Image 1.5 and 2.0 agent /has_run_before sentinel file"
feature_slug: "image-1-5-and-2-0-agent-has-run-before-sentinel-file"
latest_feature_date: "2021-06-01"
deprecation_date: "2021-06-01"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images"
keywords:
  - "sentinel"
  - "agent"
  - "before"
  - "file"
  - "image"
---

# Image 1.5 and 2.0 agent /has_run_before sentinel file

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc image 1.5 and 2.0 agents no longer publish the /has_run_before sentinel file; deprecated on 2021-06-01.

## Extended Definition

Dataproc image 1.5 and 2.0 agents no longer publish the /has_run_before sentinel file; deprecated on 2021-06-01.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images)

## Supporting Pages

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Sample dataproc.custom.properties file: dataproc.conscrypt.provider.enable= VALUE dataproc.logging.stackdriver.enable= VALUE Sample customization script file-creation snippet to override two cluster properties: cat <<EOF >/etc/google-dataproc/dataproc.custom.properties dataproc.conscrypt.provider.enable=true dataproc.logging.stackdriver.enable=false EOF Create a cluster with an expired custom image Managed Service for Apache Spark cannot guarantee support of issues that arise with clusters created with expired custom images.
- You can avoid this issue by including the following command in your customization script to clear cached credentials. rm -r /root/.gsutil /root/.config/gcloud --zone : the Compute Engine zone where generate custom image.py will create a temporary VM to use to create your custom image. --gcs-bucket : a URI, in the format gs:// BUCKET NAME , that points to your Cloud Storage bucket . generate custom image.py writes log files to this bucket.
- Using hosted custom images: If you use a custom image hosted in another project, the Managed Service for Apache Spark Service Agent service account in your project must have compute.images.get permission on the image in the host project.
- You can grant this permission by granting the roles/compute.imageUser role on the hosted image to your project's Managed Service for Apache Spark Service Agent service account (see Sharing custom images within an organization ).

### Managed Service for Apache Spark driver node groups \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- Source ID: `site-iam-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "projectId": " PROJECT ID ", "clusterName": " CLUSTER NAME ", "config": { ... "auxiliaryNodeGroups": [ { "nodeGroup": { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": SIZE , "instanceNames": [ " CLUSTER NAME -np-q1gp", " CLUSTER NAME -np-xfc0" ], "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-2a8224d2-...", "instanceGroupManagerName": "dataproc-2a8224d2-..." }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } }, "nodeGroupId": " NODE GROUP ID " } ] }, } Get driver node group cluster metadata You can use the gcloud dataproc node-groups describe command or the Managed Service for Apache Spark API to get driver node group metadata. gcloud gcloud dataproc node-groups describe NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- Spark job to estimate value of pi : gcloud dataproc jobs submit spark \ --cluster= CLUSTER NAME \ --region= REGION \ --driver-required-memory-mb=2048 \ --driver-required-vcores=2 \ --class=org.apache.spark.examples.SparkPi \ --jars=file:///usr/lib/spark/examples/jars/spark-examples.jar \ -- 1000 Spark wordcount job: gcloud dataproc jobs submit spark \ --cluster= CLUSTER NAME \ --region= REGION \ --driver-required-memory-mb=2048 \ --driver-required-vcores=2 \ --class=org.apache.spark.examples.JavaWordCount \ --jars=file:///usr/lib/spark/examples/jars/spark-examples.jar \ -- 'gs://apache-beam-samples/shakespeare/macbeth.txt' PySpark job to estimate value of pi : gcloud dataproc jobs submit pyspark \ file:///usr/lib/spark/examples/src/main/python/pi.py \ --cluster= CLUSTER NAME \ --region= REGION \ --driver-required-memory-mb=2048 \ --driver-required-vcores=2 \ -- 1000 Hadoop TeraGen MapReduce job: gcloud dataproc jobs submit hadoop \ --cluster= CLUSTER NAME \ --region= REGION \ --driver-required-memory-mb=2048 \ --driver-required-vcores=2 \ --jar file:///usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar \ -- teragen 1000 \ hdfs:///gen1/test REST Before using any of the request data, make the following replacements: PROJECT ID : Required.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME nodeGroups/ Node GROUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": 5, "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-driver-pool-mcia3j656h2fy", "instanceGroupManagerName": "dataproc-driver-pool-mcia3j656h2fy" }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } } Resize a driver node group You can use the gcloud dataproc node-groups resize command or the Managed Service for Apache Spark API to add or remove driver nodes from a cluster driver node group. gcloud gcloud dataproc node-groups resize NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION \ --size= SIZE Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ Node GROUP ID :resize" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /regions/ REGION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.dataproc.v1.NodeGroupOperationMetadata", "nodeGroupId": " NODE GROUP ID ", "clusterUuid": " CLUSTER UUID ", "status": { "state": "PENDING", "innerState": "PENDING", "stateStartTime": "2022-12-01T23:34:53.064308Z" }, "operationType": "RESIZE", "description": "Scale "up or "down" a GCE node pool to SIZE nodes." } } Delete a driver node group cluster When you delete a Managed Service for Apache Spark cluster , node groups associated with the cluster are deleted.

### "Create a Google Kubernetes Engine custom container image \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a Python example file. cat >test util.py <<'EOF' def hello(name): print("hello {}".format(name)) def read lines(path): with open(path) as f: return f.readlines() EOF Create an example init script. cat >init-script.sh <<EOF echo "hello world" >/tmp/init-script.out EOF Build and push the image. docker build -t "${IMAGE}" . && docker push "${IMAGE}" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Note: The spark: file prefix is needed when creating a cluster, but omitted when submitting a job (see Cluster properties ). gcloud CLI cluster creation example: gcloud dataproc clusters gke create "${DP CLUSTER}" \ --properties=spark:spark.kubernetes.container.image= custom-image \ ... other args ... gcloud CLI job submit example: gcloud dataproc jobs submit spark \ --properties=spark.kubernetes.container.image= custom-image \ ... other args ...
- Base Spark images Managed Service for Apache Spark supports the following base Spark container images: Spark 3.5 : ${REGION}-docker.pkg.dev/cloud-dataproc/spark/dataproc 2.2 Sample custom container image build Sample Dockerfile FROM us - central1 - docker . pkg . dev / cloud - dataproc / spark / dataproc 2 .0 : latest Change to root temporarily so that it has permissions to create dirs and copy files.
- USER spark Build the container image Run the following commands in the Dockerfile directory Set image (example: us-central1-docker.pkg.dev/my-project/spark/spark-test-image:latest ) and change to build directory.

