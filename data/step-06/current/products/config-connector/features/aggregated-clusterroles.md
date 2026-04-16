---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.224Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "Aggregated ClusterRoles"
feature_slug: "aggregated-clusterroles"
latest_feature_date: "2021-07-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions"
keywords:
  - "clusterroles"
  - "aggregated"
  - "aggregates"
  - "admin"
  - "viewer"
  - "cnrm"
---

# Aggregated ClusterRoles

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector aggregates cnrm-admin and cnrm-viewer ClusterRoles into standard Kubernetes admin, edit, and view roles.

## Extended Definition

Config Connector aggregates cnrm-admin and cnrm-viewer ClusterRoles into standard Kubernetes admin, edit, and view roles.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy)
- [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)

## Supporting Pages

### Monitoring Config Connector with Prometheus \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Name Type Labels Description configconnector reconcile requests total Counter Namespace group version kind status The total number of reconcile requests. configconnector reconcile request duration seconds Histogram Namespace group version kind status Distributions of the time to complete reconcile requests. configconnector applied resources total Gauge Namespace group version kind status The total number of resources under management. configconnector build info Gauge version Current version of Config Connector. configconnector reconcile workers total Gauge group version kind The total number of reconcile workers aggregated by resource kind. configconnector reconcile occupied workers total Gauge group version kind The total number of occupied reconcile workers aggregated by resource kind.
- By default, metrics are aggregated on resource kind (for example, PubSubTopic).
- You can enable metrics to be aggregated by individual resources.
- Edit the cnrm-controller-manager StatefulSet object kubectl edit statefulset cnrm-controller-manager -n cnrm-system If you are using Namespaced mode , replace NAMESPACE NAME with your Namespace. kubectl edit statefulset cnrm-controller-manager -n NAMESPACE NAME Find the array spec.args and add --resource-name-label=true . apiVersion : apps/v1 kind : StatefulSet name : cnrm-controller-manager spec : template : spec : containers : - name : manager args : - --resource-name-label=true What's next For more information on writing queries, see the Prometheus Query language documentation and Examples Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Access control with IAM \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Organization owner permission To expand Config Connector's permissions so it can manage all projects and folders for a given organization, complete the following steps: Create the following YAML manifest: apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPolicyMember metadata : name : iampolicymember-orglevel-permission namespace : NAMESPACE spec : member : serviceAccount: SERVICE ACCOUNT NAME @ HOST PROJECT ID . iam.gserviceaccount.com role : roles/owner resourceRef : kind : Organization external : ORGANIZATION ID Replace the following: NAMESPACE with the name of your namespace SERVICE ACCOUNT NAME with your service account name HOST PROJECT ID with the host project ID of your service account roles/owner with the appropriate role ORGANIZATION ID with your organization ID Apply the YAML manifest to your cluster using kubectl or any config management tools of your choice.
- Folder owner permission To expand Config Connector's permissions so it can manage all projects and folders in a given folder, complete the following steps: Create the following YAML manifest: apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPolicyMember metadata : name : iampolicymember-orglevel-permission namespace : NAMESPACE spec : member : serviceAccount: SERVICE ACCOUNT NAME @ HOST PROJECT ID . iam.gserviceaccount.com role : roles/owner resourceRef : kind : Folder external : folders/ FOLDER ID Replace the following: NAMESPACE with the name of your namespace SERVICE ACCOUNT NAME with your service account name HOST PROJECT ID with the host project ID of your service account roles/owner with the appropriate role FOLDER ID with your folder ID Apply the YAML manifest to your cluster using kubectl or any config management tools of your choice.
- Project owner permissions To allow Config Connector to manage a specific project's resources, complete the following steps: Create the following YAML manifest: apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPolicyMember metadata : name : iampolicymember-orglevel-permission namespace : NAMESPACE spec : member : serviceAccount: SERVICE ACCOUNT NAME @ HOST PROJECT ID . iam.gserviceaccount.com role : roles/owner resourceRef : kind : Project external : projects/ PROJECT ID Replace the following: NAMESPACE with the name of your namespace SERVICE ACCOUNT NAME with your service account name HOST PROJECT ID with the host project ID of your service account roles/owner with the appropriate role PROJECT ID with your target project ID Apply the YAML manifest to your cluster using kubectl or any config management tools of your choice.
- There is a dedicated Config Connector cnrm-controller-manager pod for each namespace which impersonates the IAM service account associated with the namespace.

### IAMPartialPolicy \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy)
- Source ID: `site-docs-root-2`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- It will merge with the existing bindings on the project. apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPartialPolicy metadata : name : iampartialpolicy-sample-project spec : resourceRef : kind : Project name : iampartialpolicy-dep-project bindings : - role : roles/storage.admin members : - member : serviceAccount:iampartialpolicy-dep-project@iampartialpolicy-dep-project.iam.gserviceaccount.com - role : roles/editor members : - memberFrom : serviceAccountRef : name : iampartialpolicy-dep-project --- apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMServiceAccount metadata : annotations : cnrm.cloud.google.com/project-id : iampartialpolicy-dep-project name : iampartialpolicy-dep-project --- apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1 kind : Project metadata : annotations : cnrm.cloud.google.com/auto-create-network : "false" name : iampartialpolicy-dep-project spec : name : Config Connector Sample organizationRef : Replace "${ORG ID?}" with the numeric ID for your organization external : "${ORG ID?}" PubSub Admin IAMPartialPolicy Copyright 2020 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- Replace ${PROJECT ID?} below with your desired project ID. apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPartialPolicy metadata : name : iampartialpolicy-sample-pubsubadmin spec : resourceRef : kind : PubSubTopic name : iampartialpolicy-dep-pubsubadmin bindings : - role : roles/editor members : - member : serviceAccount:partialpolicy-dep-pubsubadmin@${PROJECT ID?}.iam.gserviceaccount.com --- Replace ${PROJECT ID?} below with your desired project ID. apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMServiceAccount metadata : annotations : cnrm.cloud.google.com/project-id : ${PROJECT ID?} name : partialpolicy-dep-pubsubadmin --- apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : name : iampartialpolicy-dep-pubsubadmin Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
- Property Value Google Cloud Service Name IAM Google Cloud Service Documentation /iam/docs/ Google Cloud REST Resource Name v1.iamPolicies Google Cloud REST Resource Documentation /iam/reference/rest/v1/iamPolicies Config Connector Resource Short Names gcpiampartialpolicy gcpiampartialpolicies iampartialpolicy Config Connector Service Name iam.googleapis.com Config Connector Resource Fully Qualified Name iampartialpolicies.iam.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Supported Resources You can use IAMPartialPolicy to configure IAM for the following resources.

