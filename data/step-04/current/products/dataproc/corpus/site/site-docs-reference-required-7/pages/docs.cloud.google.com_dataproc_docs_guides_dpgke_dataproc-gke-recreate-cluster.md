---
title: "Recreate and update a Google Kubernetes Engine virtual cluster \_|\_ Managed\
  \ Service for Apache Spark \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster
knowledge_key: corpus
source_id: site-docs-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster
  title: "Recreate and update a Google Kubernetes Engine virtual cluster \_|\_ Managed\
    \ Service for Apache Spark \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

"Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
Home
Documentation
Data analytics
Managed Service for Apache Spark
Guides
Send feedback
Recreate and update a Google Kubernetes Engine virtual cluster
Stay organized with collections
Save and categorize content based on your preferences.
You can copy an existing Managed Service for Apache Spark on GKE virtual cluster's configuration,
update the copied configuration, and then create a new Managed Service for Apache Spark on GKE
cluster using the updated configuration.
Recreate and update a Managed Service for Apache Spark on GKE cluster
gcloud
Set environment variables:
CLUSTER= existing Managed Service for Apache Spark on GKE cluster name \
REGION= region
Export the existing Managed Service for Apache Spark on GKE cluster configuration to a YAML file.
gcloud dataproc clusters export $CLUSTER \
--region=$REGION > "${CLUSTER}-config.yaml"
Update the configuration.
Remove the
kubernetesNamespace
field. Removing this field is necessary to avoid a namespace conflict
when you create the updated cluster.
Sample sed command to remove the kubernetesNamespace field:
sed -E "s/kubernetesNamespace: .+$//g" ${CLUSTER}-config.yaml
Make additional changes to update Managed Service for Apache Spark on GKE virtual cluster
configuration settings, such as changing the Spark
componentVersion .
Delete the existing Managed Service for Apache Spark on GKE virtual cluster if you will create a cluster that
has the same name as the cluster it is updating (if you are replacing the
original cluster).
Wait for the previous delete operation to finish, and then import the
updated cluster configuration to create a new Managed Service for Apache Spark on GKE
virtual cluster with the updated config settings.
gcloud dataproc clusters import $CLUSTER \
--region=$REGION \
--source="${CLUSTER}-config.yaml"
API
Set environment variables:
CLUSTER= existing Managed Service for Apache Spark on GKE cluster name \
REGION= region
Export the existing Managed Service for Apache Spark on GKE cluster configuration to a YAML file.
curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters/${CLUSTER}?alt=json" > "${CLUSTER}-config.json"
Update the configuration.
Remove the
kubernetesNamespace
field. Removal of this field is necessary to avoid a namespace conflict
when you create the updated cluster.
Sample jq command to remove kubernetesNamespace field:
jq 'del(.virtualClusterConfig.kubernetesClusterConfig.kubernetesNamespace)'
Make additional changes to update Managed Service for Apache Spark on GKE virtual cluster
configuration settings, such as changing the Spark
componentVersion .
Delete the existing Managed Service for Apache Spark on GKE virtual cluster if you will create a cluster
that has the same name as the cluster it is updating (if you are replacing the
original cluster).
curl -X DELETE -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters/${CLUSTER}"
Wait for the previous delete operation to finish, and
then import the updated cluster configuration to create a new Managed Service for Apache Spark on GKE
virtual cluster with the updated settings.
curl -i -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json; charset=utf-8" -d "@${CLUSTER}-config.json" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters?alt=json"
Console
The Google Cloud console does not support recreating a Managed Service for Apache Spark on GKE
virtual cluster by importing an existing cluster's configuration.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
