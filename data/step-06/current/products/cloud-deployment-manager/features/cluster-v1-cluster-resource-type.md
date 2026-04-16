---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:05.992Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "cluster.v1.cluster resource type"
feature_slug: "cluster-v1-cluster-resource-type"
latest_feature_date: "2015-11-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types"
  - "https://docs.cloud.google.com/deployment-manager/docs/reference/cloud-foundation-toolkit"
keywords:
  - "cluster"
  - "v1"
  - "resource"
  - "type"
  - "deployment"
  - "manager"
  - "supports"
---

# cluster.v1.cluster resource type

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager supports the cluster.v1.cluster resource type.

## Extended Definition

Deployment Manager supports the cluster.v1.cluster resource type.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/cloud-foundation-toolkit](https://docs.cloud.google.com/deployment-manager/docs/reference/cloud-foundation-toolkit)

## Supporting Pages

### "Supported resource types \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types)
- Source ID: `site-api-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a full list of supported resource types, including resources that are in alpha, run the types list command in gcloud : gcloud deployment - manager types list Resource Type Reference appengine.v1.version Documentation bigquery.v2.dataset Documentation bigquery.v2.table Documentation bigtableadmin.v2.instance Documentation bigtableadmin.v2.instance.table Documentation cloudresourcemanager.v1.project Documentation compute.beta.address Documentation compute.beta.autoscaler Documentation compute.beta.backendBucket Documentation compute.beta.backendService Documentation compute.beta.disk Documentation compute.beta.firewall Documentation compute.beta.forwardingRule Documentation compute.beta.globalAddress Documentation compute.beta.globalForwardingRule Documentation compute.beta.healthCheck Documentation compute.beta.httpHealthCheck Documentation compute.beta.httpsHealthCheck Documentation compute.beta.image Documentation compute.beta.instance Documentation compute.beta.instanceGroup Documentation compute.beta.instanceGroupManager Documentation compute.beta.instanceTemplate Documentation compute.beta.network Documentation compute.beta.regionAutoscaler Documentation compute.beta.regionBackendService Documentation compute.beta.regionInstanceGroup Documentation compute.beta.regionInstanceGroupManager Documentation compute.beta.route Documentation compute.beta.router Documentation compute.beta.sslCertificate Documentation compute.beta.subnetwork Documentation compute.beta.targetHttpProxy Documentation compute.beta.targetHttpsProxy Documentation compute.beta.targetInstance Documentation compute.beta.targetPool Documentation compute.beta.targetSslProxy Documentation compute.beta.targetVpnGateway Documentation compute.beta.urlMap Documentation compute.beta.vpnTunnel Documentation compute.beta.xpnHost Documentation compute.beta.xpnResource Documentation compute.v1.address Documentation compute.v1.autoscaler Documentation compute.v1.backendService Documentation compute.v1.disk Documentation compute.v1.firewall Documentation compute.v1.forwardingRule Documentation compute.v1.globalAddress Documentation compute.v1.globalForwardingRule Documentation compute.v1.healthCheck Documentation compute.v1.httpHealthCheck Documentation compute.v1.httpsHealthCheck Documentation compute.v1.image Documentation compute.v1.instance Documentation compute.v1.instanceGroup Documentation compute.v1.instanceGroupManager Documentation compute.v1.instanceTemplate Documentation compute.v1.network Documentation compute.v1.regionAutoscaler Documentation compute.v1.regionBackendService Documentation compute.v1.regionInstanceGroup Documentation compute.v1.regionInstanceGroupManager Documentation compute.v1.route Documentation compute.v1.router Documentation compute.v1.sslCertificate Documentation compute.v1.subnetwork Documentation compute.v1.targetHttpProxy Documentation compute.v1.targetHttpsProxy Documentation compute.v1.targetInstance Documentation compute.v1.targetPool Documentation compute.v1.targetSslProxy Documentation compute.v1.targetVpnGateway Documentation compute.v1.urlMap Documentation compute.v1.vpnTunnel Documentation container.v1.cluster Documentation container.v1.nodePool Documentation dataproc.v1.cluster Documentation dns.v1.managedZone Documentation iam.v1.serviceAccount Documentation iam.v1.serviceAccounts.key Documentation logging.v2.metric Documentation logging.v2.sink Documentation pubsub.v1.subscription Documentation pubsub.v1.topic Documentation runtimeconfig.v1beta1.config Documentation runtimeconfig.v1beta1.variable Documentation runtimeconfig.v1beta1.waiter Documentation spanner.v1.instance Documentation sqladmin.v1beta4.database Documentation sqladmin.v1beta4.instance Documentation sqladmin.v1beta4.user Documentation storage.v1.bucket Documentation storage.v1.bucketAccessControl Documentation storage.v1.defaultObjectAccessControl Documentation storage.v1.object Documentation storage.v1.objectAccessControl Documentation What's next Create a configuration .
- Resources for project creation If you are creating projects using Deployment Manager, you can use the following virtual resource types to enable APIs in your project, or change the billing information for your project.
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Supported resource types Stay organized with collections Save and categorize content based on your preferences.
- Resource Type Description Example Reference deploymentmanager.v2.virtual.enableService Enable a service API.

### "Supported Google Cloud type providers \_|\_ Cloud Deployment Manager \_\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types)
- Source ID: `site-api-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource snippets Cloud Key Management Service gcp-types/cloudkms-v1 Resource snippets Resource Manager (v1) gcp-types/cloudresourcemanager-v1 Resource snippets Resource Manager (v2) gcp-types/cloudresourcemanager-v2 Resource snippets Compute Engine (Alpha) gcp-types/compute-alpha Resource snippets Compute Engine (Beta) gcp-types/compute-beta Resource snippets Compute Engine gcp-types/compute-v1 Resource snippets Google Kubernetes Engine gcp-types/container-v1 Note : If you want to create and manage private GKE clusters with Deployment Manager, see the best practices for setting up options for private clusters .
- For a full list of resource types, including resources that are in alpha, run the following command: gcloud beta deployment - manager types list -- project gcp - types You can also create your own type providers, such as for third-party APIs.
- Service Type provider App Engine gcp-types/appengine-v1 Resource snippets Access Context Manager gcp-types/accesscontextmanager-v1beta Resource snippets BigQuery gcp-types/bigquery-v2 Resource snippets Bigtable gcp-types/bigtableadmin-v2 Resource snippets Cloud Run functions gcp-types/cloudfunctions-v1 Note : As of November 1, 2019, new Functions are private by default, and require appropriate IAM permissions to invoke.
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Supported Google Cloud type providers Stay organized with collections Save and categorize content based on your preferences.

### "Example templates from the Cloud Foundation Toolkit \_|\_ Cloud Deployment\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/reference/cloud-foundation-toolkit](https://docs.cloud.google.com/deployment-manager/docs/reference/cloud-foundation-toolkit)
- Source ID: `site-api-reference`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Kubernetes Engine cluster Create a GKE cluster.
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Example templates from the Cloud Foundation Toolkit Stay organized with collections Save and categorize content based on your preferences.
- If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
- The Cloud Foundation Toolkit provides reference templates for Deployment Manager that follow Google Cloud's best practices.

