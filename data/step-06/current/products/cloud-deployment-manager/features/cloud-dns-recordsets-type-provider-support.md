---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:05.957Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "Cloud DNS RecordSets type provider support"
feature_slug: "cloud-dns-recordsets-type-provider-support"
latest_feature_date: "2018-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types"
keywords:
  - "dns"
  - "recordsets"
  - "type"
  - "provider"
  - "deployment"
  - "manager"
  - "supports"
  - "through"
---

# Cloud DNS RecordSets type provider support

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager supports Cloud DNS RecordSets through the gcp-types/dns-v1:resourceRecordSets type provider.

## Extended Definition

Deployment Manager supports Cloud DNS RecordSets through the gcp-types/dns-v1:resourceRecordSets type provider.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types)

## Supporting Pages

### "Supported Google Cloud type providers \_|\_ Cloud Deployment Manager \_\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types)
- Source ID: `site-api-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a full list of resource types, including resources that are in alpha, run the following command: gcloud beta deployment - manager types list -- project gcp - types You can also create your own type providers, such as for third-party APIs.
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Supported Google Cloud type providers Stay organized with collections Save and categorize content based on your preferences.
- For an overview of creating a type provider, see Integrating with Deployment Manager .
- Resource snippets Cloud Key Management Service gcp-types/cloudkms-v1 Resource snippets Resource Manager (v1) gcp-types/cloudresourcemanager-v1 Resource snippets Resource Manager (v2) gcp-types/cloudresourcemanager-v2 Resource snippets Compute Engine (Alpha) gcp-types/compute-alpha Resource snippets Compute Engine (Beta) gcp-types/compute-beta Resource snippets Compute Engine gcp-types/compute-v1 Resource snippets Google Kubernetes Engine gcp-types/container-v1 Note : If you want to create and manage private GKE clusters with Deployment Manager, see the best practices for setting up options for private clusters .

### Supported resource types | Cloud Deployment Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types)
- Source ID: `feature-recovery-direct-http`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported resource types | Cloud Deployment Manager | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Cloud Deployment Manager Start free Overview Guides Reference Support Resources Technology areas More Overview Guides Reference Support Resources Cross-product tools More Console Cloud Deployment Manager All APIs & references Syntax reference Configurations and templates Supported resource types Resource snippets for Google Cloud type providers Example resource templates gcloud reference Managing long-running operations with the API v2 API Overview Deployments Overview cancelPreview delete get getIamPolicy insert list patch setIamPolicy stop testIamPermissions update Manifests Overview get list Operations Overview get list Resources Overview get list Types Overview list v2beta API Overview CompositeTypes Overview delete get insert list patch update Deployments Overview cancelPreview delete get getIamPolicy insert list patch setIamPolicy stop testIamPermissions update Manifests Overview get list Operations Overview get list Resources Overview get list TypeProviders Overview delete get getType insert list listTypes patch update Types Overview list Runtime Configurator API v1beta1 Overview REST Resources projects.configs Overview create delete get getIamPolicy list setIamPolicy testIamPermissions update projects.configs.operations Overview get testIamPermissions projects.configs.variables Overview create delete get list testIamPermissions update watch projects.configs.waiters Overview create delete get list testIamPermissions Types Policy TestIamPermissionsResponse REST Resources operations Overview cancel delete list Types Operation WaitOperationRequest Deprecated APIs v2beta2 Overview Deployments Overview delete get insert list patch update Manifests Overview get list Operations Overview get list Resources Overview get list Types Overview list v2beta1 Overview Deployments Overview delete get insert list Manifests Overview get list Operations Overview get list Resources Overview get list Types Overview list Templates Authorization Standard query parameters Improve performance Batch requests Libraries AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Cloud Deployment Manager will reach end of support on March 31, 2026 .
- For a full list of supported resource types, including resources that are in alpha, run the types list command in gcloud : gcloud deployment - manager types list Resource Type Reference appengine.v1.version Documentation bigquery.v2.dataset Documentation bigquery.v2.table Documentation bigtableadmin.v2.instance Documentation bigtableadmin.v2.instance.table Documentation cloudresourcemanager.v1.project Documentation compute.beta.address Documentation compute.beta.autoscaler Documentation compute.beta.backendBucket Documentation compute.beta.backendService Documentation compute.beta.disk Documentation compute.beta.firewall Documentation compute.beta.forwardingRule Documentation compute.beta.globalAddress Documentation compute.beta.globalForwardingRule Documentation compute.beta.healthCheck Documentation compute.beta.httpHealthCheck Documentation compute.beta.httpsHealthCheck Documentation compute.beta.image Documentation compute.beta.instance Documentation compute.beta.instanceGroup Documentation compute.beta.instanceGroupManager Documentation compute.beta.instanceTemplate Documentation compute.beta.network Documentation compute.beta.regionAutoscaler Documentation compute.beta.regionBackendService Documentation compute.beta.regionInstanceGroup Documentation compute.beta.regionInstanceGroupManager Documentation compute.beta.route Documentation compute.beta.router Documentation compute.beta.sslCertificate Documentation compute.beta.subnetwork Documentation compute.beta.targetHttpProxy Documentation compute.beta.targetHttpsProxy Documentation compute.beta.targetInstance Documentation compute.beta.targetPool Documentation compute.beta.targetSslProxy Documentation compute.beta.targetVpnGateway Documentation compute.beta.urlMap Documentation compute.beta.vpnTunnel Documentation compute.beta.xpnHost Documentation compute.beta.xpnResource Documentation compute.v1.address Documentation compute.v1.autoscaler Documentation compute.v1.backendService Documentation compute.v1.disk Documentation compute.v1.firewall Documentation compute.v1.forwardingRule Documentation compute.v1.globalAddress Documentation compute.v1.globalForwardingRule Documentation compute.v1.healthCheck Documentation compute.v1.httpHealthCheck Documentation compute.v1.httpsHealthCheck Documentation compute.v1.image Documentation compute.v1.instance Documentation compute.v1.instanceGroup Documentation compute.v1.instanceGroupManager Documentation compute.v1.instanceTemplate Documentation compute.v1.network Documentation compute.v1.regionAutoscaler Documentation compute.v1.regionBackendService Documentation compute.v1.regionInstanceGroup Documentation compute.v1.regionInstanceGroupManager Documentation compute.v1.route Documentation compute.v1.router Documentation compute.v1.sslCertificate Documentation compute.v1.subnetwork Documentation compute.v1.targetHttpProxy Documentation compute.v1.targetHttpsProxy Documentation compute.v1.targetInstance Documentation compute.v1.targetPool Documentation compute.v1.targetSslProxy Documentation compute.v1.targetVpnGateway Documentation compute.v1.urlMap Documentation compute.v1.vpnTunnel Documentation container.v1.cluster Documentation container.v1.nodePool Documentation dataproc.v1.cluster Documentation dns.v1.managedZone Documentation iam.v1.serviceAccount Documentation iam.v1.serviceAccounts.key Documentation logging.v2.metric Documentation logging.v2.sink Documentation pubsub.v1.subscription Documentation pubsub.v1.topic Documentation runtimeconfig.v1beta1.config Documentation runtimeconfig.v1beta1.variable Documentation runtimeconfig.v1beta1.waiter Documentation spanner.v1.instance Documentation sqladmin.v1beta4.database Documentation sqladmin.v1beta4.instance Documentation sqladmin.v1beta4.user Documentation storage.v1.bucket Documentation storage.v1.bucketAccessControl Documentation storage.v1.defaultObjectAccessControl Documentation storage.v1.object Documentation storage.v1.objectAccessControl Documentation What's next Create a configuration .
- If you use the API collection name instead of the type name provided by Deployment Manager (for example, compute.v1.addresses instead of compute.v1.address ), you might encounter unexpected behavior from your deployments, so be careful to ensure that you use type names as defined by Deployment Manager.
- Resources for project creation If you are creating projects using Deployment Manager, you can use the following virtual resource types to enable APIs in your project, or change the billing information for your project.

### "Describing, listing, and deleting types \_|\_ Cloud Deployment Manager \_\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can get a list of base types provided by a type provider. gcloud To get a list of base types provided by a type provider: gcloud beta deployment - manager types list --provider [TYPE PROVIDER] --project [PROJECT ID] For example, to get a list of base types in the Compute Engine type provider, run this command: gcloud beta deployment-manager types list --provider compute-v1 --project gcp-types API Make a GET request to the following URI: GET https : // www . googleapis . com / deploymentmanager / v2beta / projects / [ PROJECT ID ] / global / typeProviders / [ PROVIDER NAME ] / types For example, for a list of types in the Compute Engine type provider, use this URI: GET https://www.googleapis.com/deploymentmanager/v2beta/projects/gcp-types/global/typeProviders/compute-v1/types Listing type providers You can get a list of your type providers using the gcloud CLI, or the API. gcloud To list your type providers, make a type-providers list request: gcloud beta deployment - manager type - providers list API In the API, make a GET request to the global type providers list: GET https : // www . googleapis . com / deploymentmanager / v2 / projects /[ PROJECT ID ]/ global / typeProviders For more information, see the documentation for the list method.
- Describing a single composite type You can describe a single composite type to get information about the type. gcloud Run the types describe command to describe a type: gcloud beta deployment - manager types describe [ COMPOSITE TYPE NAME ] --provider composite API Make a GET request to the following URI: https : // www . googleapis . com / deploymentmanager / v2beta / projects /[ PROJECT ID ]/ global / compositeTypes /[ COMPOSITE TYPE NAME ] Listing composite types You can get a list of your composite types using the gcloud CLI, or the API. gcloud To list your composite types, make a types list request: gcloud beta deployment - manager types list -- provider composite API In the API, make a GET request to the global types list: GET https : // www . googleapis . com / deploymentmanager / v2 / projects /[ PROJECT ID ]/ global / types For more information, see the documentation for the list method.
- See the list of default Google Cloud type providers . gcloud Run the type-providers describe command to describe a type provider. gcloud beta deployment-manager type-providers describe PROVIDER NAME --project PROJECT ID For example, use this command to describe the Pub/Sub type provider: gcloud beta deployment - manager type - providers describe pubsub - v1 -- project gcp - types API Make a GET request to the following URI: https://www.googleapis.com/deploymentmanager/v2beta/projects/ [PROJECT ID] /global/typeProviders/ [PROVIDER NAME] For example, use this URI for the Pub/Sub type provider: https://www.googleapis.com/deploymentmanager/v2beta/projects/gcp-types/global/typeProviders/pubsub-v1 Getting a list of types provided by a type provider A type provider exposes all resources of the underlying API as base types.
- For example: gcloud beta deployment - manager type - providers delete [ TYPE PROVIDER ] API In the API, make a DELETE request to the type provider you want to delete: DELETE https : // www . googleapis . com / deploymentmanager / v2beta / projects /[ PROJECT ID ]/ global / typeProviders /[ TYPE PROVIDER ] For more information, see the documentation for the delete method.

