---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.197Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cluster creation from YAML"
feature_slug: "cluster-creation-from-yaml"
latest_feature_date: "2018-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/create-cluster"
  - "https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster"
  - "https://docs.cloud.google.com/dataproc/docs/guides/create-partial-cluster"
keywords:
  - "command"
  - "yaml"
  - "create"
  - "creation"
  - "gcloud"
  - "cluster"
---

# Cluster creation from YAML

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The gcloud command can create Dataproc clusters directly from a YAML file.

## Extended Definition

The gcloud command can create Dataproc clusters directly from a YAML file.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster)
- [https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster)
- [https://docs.cloud.google.com/dataproc/docs/guides/create-partial-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-partial-cluster)

## Supporting Pages

### "Create a cluster \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a cluster with a YAML file Run the following gcloud command to export the configuration of an existing Managed Service for Apache Spark cluster into a cluster.yaml file. gcloud dataproc clusters export EXISTING CLUSTER NAME \ --region= REGION \ --destination= cluster.yaml Create a new cluster by importing the YAML file configuration. gcloud dataproc clusters import NEW CLUSTER NAME \ --region= REGION \ --source= cluster.yaml Note: During the export operation, cluster-specific fields, such as cluster name, output-only fields, and automatically applied labels are filtered.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT /regions/ REGION /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT /regions/ REGION /operations/b5706e31......", "metadata": { "@type": "type.googleapis.com/google.cloud.dataproc.v1.ClusterOperationMetadata", "clusterName": " CLUSTER NAME ", "clusterUuid": "5fe882b2-...", "status": { "state": "PENDING", "innerState": "PENDING", "stateStartTime": "2019-11-21T00:37:56.220Z" }, "operationType": "CREATE", "description": "Create cluster with 2 workers", "warnings": [ "For PD-Standard without local SSDs, we strongly recommend provisioning 1TB ..."" ] } } Note: You can click the Equivalent REST or command line links at the bottom of the left panel of the Managed Service for Apache Spark Google Cloud console Create a cluster page to have the Console construct an equivalent API REST request or gcloud tool command to use in your code or from the command line to create a cluster.
- Create a cluster with an ARM machine type . gcloud To create a Managed Service for Apache Spark cluster on the command line, run the gcloud dataproc clusters create command locally in a terminal window or in Cloud Shell . gcloud dataproc clusters create CLUSTER NAME \ --region= REGION The command creates a cluster with default Managed Service for Apache Spark service settings for your master and worker virtual machine instances, disk sizes and types, network type, region and zone where your cluster is deployed, and other cluster settings.
- Note: You can click the Equivalent REST or command line links at the bottom of the left panel on the Managed Service for Apache Spark Google Cloud console Create a cluster page to have the Console construct an equivalent API REST request or gcloud tool command to use in your code or from the command line to create a cluster.

### "Recreate and update a cluster \_|\_ Managed Service for Apache Spark \_\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example uses sed to update the image version. sed -E "s (^[[:blank:]]+)imageVersion: .+ \1imageVersion: ${NEW IMAGE VERSION} g" "${OLD CLUSTER}-config.yaml" sed -E '/^[[:blank:]]+imageUri: /d' > "${NEW CLUSTER}-config-updated.yaml" Create a new cluster with a new name and the updated configuration. gcloud dataproc clusters import $NEW CLUSTER \ --project=$PROJECT \ --region=$REGION \ --source="${NEW CLUSTER}-config-updated.yaml" After confirming your workloads run in the new cluster without issues, delete the existing (old) cluster.
- Recreate and update a cluster You can use the gcloud command-line tool or the Managed Service for Apache Spark API to copy configuration from an existing cluster, update the copied configuration, and then create a new cluster with the updated configuration. gcloud CLI The example instructions show updating the image version setting in a cluster configuration.
- The following example uses jq to update the cluster name and the image version. jq ".clusterName = \"${NEW CLUSTER}\" .config.softwareConfig.imageVersion=\"${NEW IMAGE VERSION}\" del(.config.workerConfig.imageUri) del(.config.masterConfig.imageUri)" "${OLD CLUSTER}-config.json" > "${NEW CLUSTER}-config-updated.json" Import the updated cluster configuration to create a new cluster with the updated configuration. curl -i -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json; charset=utf-8" -d "@${NEW CLUSTER}-config-updated.json" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters?alt=json" After confirming your workloads run in the new cluster without issues, delete the existing (old) cluster.
- Set variables. export PROJECT= project-id export REGION= region export OLD CLUSTER= old-cluster-name export NEW CLUSTER= new-cluster-name export NEW IMAGE VERSION= image-version (for example, '2.2-debian12') Export the existing (old) cluster configuration to a YAML file. gcloud dataproc clusters export $OLD CLUSTER \ --project=$PROJECT \ --region=$REGION > "${OLD CLUSTER}-config.yaml" Update the configuration.

### "Create a Managed Service for Apache Spark partial cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/create-partial-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-partial-cluster)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: Managed Service for Apache Spark partial cluster creation is not available in the Google Cloud console. gcloud To create a Managed Service for Apache Spark partial cluster on the command line, run the following gcloud dataproc clusters create command locally in a terminal window or in Cloud Shell . gcloud dataproc clusters create CLUSTER NAME \ --project= PROJECT \ --region= REGION \ --num-workers= NUM WORKERS \ --min-num-workers= MIN NUM WORKERS \ other args ...
- Note: You can click the Equivalent REST or command line links at the bottom of the left panel of the Managed Service for Apache Spark Google Cloud console Create a cluster page to have the Console construct an equivalent API REST request or gcloud CLI command to use in your code or from the command line to create a cluster.
- Display the number of provisioned workers After creating a cluster, you can run the following gcloud CLI command to list the number of workers, including any secondary workers, provisioned in your cluster. gcloud dataproc clusters list \ --project= PROJECT \ --region= REGION \ --filter=clusterName= CLUSTER NAME Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The policy's minInstances and maxInstances match the minimum and total number of primary workers specified at cluster creation time (see Create a partial cluster ).

