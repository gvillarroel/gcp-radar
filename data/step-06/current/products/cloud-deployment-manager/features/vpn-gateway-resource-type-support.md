---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:05.951Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "VPN Gateway resource type support"
feature_slug: "vpn-gateway-resource-type-support"
latest_feature_date: "2019-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types"
keywords:
  - "vpn"
  - "gateway"
  - "resource"
  - "type"
  - "deployment"
  - "manager"
  - "supports"
  - "creating"
---

# VPN Gateway resource type support

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager supports creating Compute Engine VpnGateway resources with the gcp-types/compute-v1:vpnGateways type.

## Extended Definition

Deployment Manager supports creating Compute Engine VpnGateway resources with the gcp-types/compute-v1:vpnGateways type.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types)

## Supporting Pages

### "Supported resource types \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types)
- Source ID: `site-api-reference`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a full list of supported resource types, including resources that are in alpha, run the types list command in gcloud : gcloud deployment - manager types list Resource Type Reference appengine.v1.version Documentation bigquery.v2.dataset Documentation bigquery.v2.table Documentation bigtableadmin.v2.instance Documentation bigtableadmin.v2.instance.table Documentation cloudresourcemanager.v1.project Documentation compute.beta.address Documentation compute.beta.autoscaler Documentation compute.beta.backendBucket Documentation compute.beta.backendService Documentation compute.beta.disk Documentation compute.beta.firewall Documentation compute.beta.forwardingRule Documentation compute.beta.globalAddress Documentation compute.beta.globalForwardingRule Documentation compute.beta.healthCheck Documentation compute.beta.httpHealthCheck Documentation compute.beta.httpsHealthCheck Documentation compute.beta.image Documentation compute.beta.instance Documentation compute.beta.instanceGroup Documentation compute.beta.instanceGroupManager Documentation compute.beta.instanceTemplate Documentation compute.beta.network Documentation compute.beta.regionAutoscaler Documentation compute.beta.regionBackendService Documentation compute.beta.regionInstanceGroup Documentation compute.beta.regionInstanceGroupManager Documentation compute.beta.route Documentation compute.beta.router Documentation compute.beta.sslCertificate Documentation compute.beta.subnetwork Documentation compute.beta.targetHttpProxy Documentation compute.beta.targetHttpsProxy Documentation compute.beta.targetInstance Documentation compute.beta.targetPool Documentation compute.beta.targetSslProxy Documentation compute.beta.targetVpnGateway Documentation compute.beta.urlMap Documentation compute.beta.vpnTunnel Documentation compute.beta.xpnHost Documentation compute.beta.xpnResource Documentation compute.v1.address Documentation compute.v1.autoscaler Documentation compute.v1.backendService Documentation compute.v1.disk Documentation compute.v1.firewall Documentation compute.v1.forwardingRule Documentation compute.v1.globalAddress Documentation compute.v1.globalForwardingRule Documentation compute.v1.healthCheck Documentation compute.v1.httpHealthCheck Documentation compute.v1.httpsHealthCheck Documentation compute.v1.image Documentation compute.v1.instance Documentation compute.v1.instanceGroup Documentation compute.v1.instanceGroupManager Documentation compute.v1.instanceTemplate Documentation compute.v1.network Documentation compute.v1.regionAutoscaler Documentation compute.v1.regionBackendService Documentation compute.v1.regionInstanceGroup Documentation compute.v1.regionInstanceGroupManager Documentation compute.v1.route Documentation compute.v1.router Documentation compute.v1.sslCertificate Documentation compute.v1.subnetwork Documentation compute.v1.targetHttpProxy Documentation compute.v1.targetHttpsProxy Documentation compute.v1.targetInstance Documentation compute.v1.targetPool Documentation compute.v1.targetSslProxy Documentation compute.v1.targetVpnGateway Documentation compute.v1.urlMap Documentation compute.v1.vpnTunnel Documentation container.v1.cluster Documentation container.v1.nodePool Documentation dataproc.v1.cluster Documentation dns.v1.managedZone Documentation iam.v1.serviceAccount Documentation iam.v1.serviceAccounts.key Documentation logging.v2.metric Documentation logging.v2.sink Documentation pubsub.v1.subscription Documentation pubsub.v1.topic Documentation runtimeconfig.v1beta1.config Documentation runtimeconfig.v1beta1.variable Documentation runtimeconfig.v1beta1.waiter Documentation spanner.v1.instance Documentation sqladmin.v1beta4.database Documentation sqladmin.v1beta4.instance Documentation sqladmin.v1beta4.user Documentation storage.v1.bucket Documentation storage.v1.bucketAccessControl Documentation storage.v1.defaultObjectAccessControl Documentation storage.v1.object Documentation storage.v1.objectAccessControl Documentation What's next Create a configuration .
- Resources for project creation If you are creating projects using Deployment Manager, you can use the following virtual resource types to enable APIs in your project, or change the billing information for your project.
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Supported resource types Stay organized with collections Save and categorize content based on your preferences.
- Resource Type Description Example Reference deploymentmanager.v2.virtual.enableService Enable a service API.

### "Adding a template as a composite type \_|\_ Cloud Deployment Manager \_\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types)
- Source ID: `site-docs-root-2`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the composite field, define: The top-level schema The contents of your imported templates The contents of your top-level template The API request body has the following structure: POST https : // www . googleapis . com / deploymentmanager / v2beta / projects /[ PROJECT ID ]/ global / compositeTypes { "composite" : { "files" : { "schema" : "[CONTENTS OF SCHEMA]" , "imports" : [ { "name": "[TEMPLATE FILE ] ", " content ": " [ CONTENTS OF TEMPLATE FILE ] " }, { " name ": " [ ANOTHER TEMPLATE IF NECESSARY ] ", " content ": " [ CONTENTS OF TEMPLATES ] " } ], " template ": " [ TOP-LEVEL TEMPLATE CONTENTS ] ", " templateFileType ": " [ FILE TYPE ] " } }, " name ": " [ TYPE NAME ] " } For an example on how to construct these requests, see Creating an autoscaled managed instance group composite type .
- Replace [PROJECT ID] with your project ID: resources : - name : ha - service - example type : [ PROJECT ID ]/ composite : ha - service - example properties : dockerImage : gcr . io / deployment - manager - examples / nodejsservicestatic zones : - us - central1 - b - us - central1 - a Save the configuration as example-config.yaml .
- Deploy your new composite type: gcloud deployment-manager deployments create ha-service-deployment --config example-config.yaml The API returns with a list of resources created from the type: Waiting for create [operation-1488254932422-5498f5a950d71-2bd3b8c8-b13ddab5]...done.
- Example: Creating a composite type Deployment Manager offers many example configurations from the Deployment Manager GitHub repository that you could use as composite types.

### "Adding a template as a composite type \_|\_ Cloud Deployment Manager \_\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types)
- Source ID: `site-docs-root-2`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the composite field, define: The top-level schema The contents of your imported templates The contents of your top-level template The API request body has the following structure: POST https : // www . googleapis . com / deploymentmanager / v2beta / projects /[ PROJECT ID ]/ global / compositeTypes { "composite" : { "files" : { "schema" : "[CONTENTS OF SCHEMA]" , "imports" : [ { "name": "[TEMPLATE FILE ] ", " content ": " [ CONTENTS OF TEMPLATE FILE ] " }, { " name ": " [ ANOTHER TEMPLATE IF NECESSARY ] ", " content ": " [ CONTENTS OF TEMPLATES ] " } ], " template ": " [ TOP-LEVEL TEMPLATE CONTENTS ] ", " templateFileType ": " [ FILE TYPE ] " } }, " name ": " [ TYPE NAME ] " } For an example on how to construct these requests, see Creating an autoscaled managed instance group composite type .
- Replace [PROJECT ID] with your project ID: resources : - name : ha - service - example type : [ PROJECT ID ]/ composite : ha - service - example properties : dockerImage : gcr . io / deployment - manager - examples / nodejsservicestatic zones : - us - central1 - b - us - central1 - a Save the configuration as example-config.yaml .
- Deploy your new composite type: gcloud deployment-manager deployments create ha-service-deployment --config example-config.yaml The API returns with a list of resources created from the type: Waiting for create [operation-1488254932422-5498f5a950d71-2bd3b8c8-b13ddab5]...done.
- Example: Creating a composite type Deployment Manager offers many example configurations from the Deployment Manager GitHub repository that you could use as composite types.

