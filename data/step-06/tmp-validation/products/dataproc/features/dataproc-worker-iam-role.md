---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.202Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Worker IAM role"
feature_slug: "dataproc-worker-iam-role"
latest_feature_date: "2017-04-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-iam"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient"
keywords:
  - "intended"
  - "accounts"
  - "role"
  - "dedicated"
  - "provides"
  - "worker"
---

# Dataproc Worker IAM role

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The Dataproc Worker IAM role provides a dedicated IAM role intended for service accounts used by Dataproc workers.

## Extended Definition

The Dataproc Worker IAM role provides a dedicated IAM role intended for service accounts used by Dataproc workers.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-iam](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-iam)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient)

## Supporting Pages

### "Class ClusterControllerAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . get mtls endpoint and cert source get mtls endpoint and cert source ( client options : typing .
- For example, to change the number of workers in a cluster to 5, the update mask parameter would be specified as config.worker config.num instances , and the PATCH request body would specify the new value, as follows: :: { "config":{ "workerConfig":{ "numInstances":"5" } } } Similarly, to change the number of preemptible workers in a cluster to 5, the update mask parameter would be config.secondary worker config.num instances , and the PATCH request body would be set as follows: :: { "config":{ "secondaryWorkerConfig":{ "numInstances":"5" } } } Note: Currently, only the following fields can be updated: .. raw:: html Mask Purpose labels Update labels config.worker config.num instances Resize primary worker group config.secondary worker config.num instances Resize secondary worker group config.autoscaling config.policy uri Use, stop using, or change autoscaling policies This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . start cluster start cluster ( request : typing .
- A binding can optionally specify a condition , which is a logic expression that further constrains the role binding based on attributes about the request and/or target resource.

### "Class ClusterControllerClient (5.26.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient)
- Source ID: `site-python-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . get mtls endpoint and cert source get mtls endpoint and cert source ( client options : typing .
- For example, to change the number of workers in a cluster to 5, the update mask parameter would be specified as config.worker config.num instances , and the PATCH request body would specify the new value, as follows: :: { "config":{ "workerConfig":{ "numInstances":"5" } } } Similarly, to change the number of preemptible workers in a cluster to 5, the update mask parameter would be config.secondary worker config.num instances , and the PATCH request body would be set as follows: :: { "config":{ "secondaryWorkerConfig":{ "numInstances":"5" } } } Note: Currently, only the following fields can be updated: .. raw:: html Mask Purpose labels Update labels config.worker config.num instances Resize primary worker group config.secondary worker config.num instances Resize secondary worker group config.autoscaling config.policy uri Use, stop using, or change autoscaling policies This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . start cluster start cluster ( request : typing .
- A binding can optionally specify a condition , which is a logic expression that further constrains the role binding based on attributes about the request and/or target resource.

### "Google Kubernetes Engine Identity and Access Management roles and identity\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-iam](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-iam)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you create the Managed Service for Apache Spark on GKE cluster, add the following properties for Managed Service for Apache Spark to use your GSA instead of the default GSA: --properties "dataproc:dataproc.gke.agent.google-service-account=${DPGKE GSA}" \ --properties "dataproc:dataproc.gke.spark.driver.google-service-account=${DPGKE GSA}" \ --properties "dataproc:dataproc.gke.spark.executor.google-service-account=${DPGKE GSA}" \ Run the following commands to assign necessary Workload Identity permissions to the service accounts: Assign your GSA the dataproc.worker role to allow it to act as agent: gcloud projects add-iam-policy-binding \ --role=roles/dataproc.worker \ --member="serviceAccount:${DPGKE GSA}" \ "${PROJECT}" Assign the agent KSA the iam.workloadIdentityUser role to allow it to act as your GSA: gcloud iam service-accounts add-iam-policy-binding \ --role=roles/iam.workloadIdentityUser \ --member="serviceAccount:${PROJECT}.svc.id.goog[${DPGKE NAMESPACE}/agent]" \ "${DPGKE GSA}" Grant the spark-driver KSA the iam.workloadIdentityUser role to allow it to act as your GSA: gcloud iam service-accounts add-iam-policy-binding \ --role=roles/iam.workloadIdentityUser \ --member="serviceAccount:${PROJECT}.svc.id.goog[${DPGKE NAMESPACE}/spark-driver]" \ "${DPGKE GSA}" Grant the spark-executor KSA the iam.workloadIdentityUser role to allow it to act as your GSA: gcloud iam service-accounts add-iam-policy-binding \ --role=roles/iam.workloadIdentityUser \ --member="serviceAccount:${PROJECT}.svc.id.goog[${DPGKE NAMESPACE}/spark-executor]" \ "${DPGKE GSA}" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example: The following command assigns roles to the default Managed Service for Apache Spark VM service account to allow Spark workloads running on Managed Service for Apache Spark on GKE cluster VMs to access Cloud Storage buckets and BigQuery data sets in the project. gcloud projects add-iam-policy-binding \ --role=roles/storage.objectAdmin \ --role=roles/bigquery.dataEditor \ --member=" project-number -compute@developer.gserviceaccount.com" \ "${PROJECT}" Custom IAM configuration Managed Service for Apache Spark on GKE uses GKE workload identity to link the default Managed Service for Apache Spark VM service account (data plane identity) to the three GKE service accounts (KSAs) .
- GKE workload identity links the following GKE Service Accounts (KSAs) to the Managed Service for Apache Spark VM Service Account: agent KSA (interacts with Managed Service for Apache Spark control plane): serviceAccount:${PROJECT}.svc.id.goog[${DPGKE NAMESPACE}/agent] spark-driver KSA (runs Spark drivers): serviceAccount:${PROJECT}.svc.id.goog[${DPGKE NAMESPACE}/spark-driver] spark-executor KSA (runs Spark executors): serviceAccount:${PROJECT}.svc.id.goog[${DPGKE NAMESPACE}/spark-executor] Use the gcloud dataproc clusters gke create --setup-workload-identity flag when you create a Managed Service for Apache Spark on GKE cluster to create the workload identity bindings required for the cluster.
- To create and use a different Google service account (GSA) to link to the KSAs: Create the GSA (see Creating and managing service accounts ). gcloud CLI example: gcloud iam service-accounts create "dataproc-${USER}" \ --description "Used by Managed Service for Apache Spark on GKE workloads." Notes: The example sets the GSA name as "dataproc-${USER}", but you can use a different name.

