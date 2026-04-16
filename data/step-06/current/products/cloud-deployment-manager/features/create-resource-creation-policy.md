---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:05.962Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "CREATE resource creation policy"
feature_slug: "create-resource-creation-policy"
latest_feature_date: "2018-07-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types"
  - "https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch"
  - "https://docs.cloud.google.com/deployment-manager/docs/best-practices"
keywords:
  - "create"
  - "resource"
  - "creation"
  - "policy"
  - "deployment"
  - "manager"
  - "supports"
  - "fails"
---

# CREATE resource creation policy

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager supports a CREATE policy that fails a deployment if a new resource already exists.

## Extended Definition

Deployment Manager supports a CREATE policy that fails a deployment if a new resource already exists.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch)
- [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices)

## Supporting Pages

### Supported resource types | Cloud Deployment Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types)
- Source ID: `feature-recovery-direct-http`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported resource types | Cloud Deployment Manager | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Cloud Deployment Manager Start free Overview Guides Reference Support Resources Technology areas More Overview Guides Reference Support Resources Cross-product tools More Console Cloud Deployment Manager All APIs & references Syntax reference Configurations and templates Supported resource types Resource snippets for Google Cloud type providers Example resource templates gcloud reference Managing long-running operations with the API v2 API Overview Deployments Overview cancelPreview delete get getIamPolicy insert list patch setIamPolicy stop testIamPermissions update Manifests Overview get list Operations Overview get list Resources Overview get list Types Overview list v2beta API Overview CompositeTypes Overview delete get insert list patch update Deployments Overview cancelPreview delete get getIamPolicy insert list patch setIamPolicy stop testIamPermissions update Manifests Overview get list Operations Overview get list Resources Overview get list TypeProviders Overview delete get getType insert list listTypes patch update Types Overview list Runtime Configurator API v1beta1 Overview REST Resources projects.configs Overview create delete get getIamPolicy list setIamPolicy testIamPermissions update projects.configs.operations Overview get testIamPermissions projects.configs.variables Overview create delete get list testIamPermissions update watch projects.configs.waiters Overview create delete get list testIamPermissions Types Policy TestIamPermissionsResponse REST Resources operations Overview cancel delete list Types Operation WaitOperationRequest Deprecated APIs v2beta2 Overview Deployments Overview delete get insert list patch update Manifests Overview get list Operations Overview get list Resources Overview get list Types Overview list v2beta1 Overview Deployments Overview delete get insert list Manifests Overview get list Operations Overview get list Resources Overview get list Types Overview list Templates Authorization Standard query parameters Improve performance Batch requests Libraries AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Cloud Deployment Manager will reach end of support on March 31, 2026 .
- For a full list of supported resource types, including resources that are in alpha, run the types list command in gcloud : gcloud deployment - manager types list Resource Type Reference appengine.v1.version Documentation bigquery.v2.dataset Documentation bigquery.v2.table Documentation bigtableadmin.v2.instance Documentation bigtableadmin.v2.instance.table Documentation cloudresourcemanager.v1.project Documentation compute.beta.address Documentation compute.beta.autoscaler Documentation compute.beta.backendBucket Documentation compute.beta.backendService Documentation compute.beta.disk Documentation compute.beta.firewall Documentation compute.beta.forwardingRule Documentation compute.beta.globalAddress Documentation compute.beta.globalForwardingRule Documentation compute.beta.healthCheck Documentation compute.beta.httpHealthCheck Documentation compute.beta.httpsHealthCheck Documentation compute.beta.image Documentation compute.beta.instance Documentation compute.beta.instanceGroup Documentation compute.beta.instanceGroupManager Documentation compute.beta.instanceTemplate Documentation compute.beta.network Documentation compute.beta.regionAutoscaler Documentation compute.beta.regionBackendService Documentation compute.beta.regionInstanceGroup Documentation compute.beta.regionInstanceGroupManager Documentation compute.beta.route Documentation compute.beta.router Documentation compute.beta.sslCertificate Documentation compute.beta.subnetwork Documentation compute.beta.targetHttpProxy Documentation compute.beta.targetHttpsProxy Documentation compute.beta.targetInstance Documentation compute.beta.targetPool Documentation compute.beta.targetSslProxy Documentation compute.beta.targetVpnGateway Documentation compute.beta.urlMap Documentation compute.beta.vpnTunnel Documentation compute.beta.xpnHost Documentation compute.beta.xpnResource Documentation compute.v1.address Documentation compute.v1.autoscaler Documentation compute.v1.backendService Documentation compute.v1.disk Documentation compute.v1.firewall Documentation compute.v1.forwardingRule Documentation compute.v1.globalAddress Documentation compute.v1.globalForwardingRule Documentation compute.v1.healthCheck Documentation compute.v1.httpHealthCheck Documentation compute.v1.httpsHealthCheck Documentation compute.v1.image Documentation compute.v1.instance Documentation compute.v1.instanceGroup Documentation compute.v1.instanceGroupManager Documentation compute.v1.instanceTemplate Documentation compute.v1.network Documentation compute.v1.regionAutoscaler Documentation compute.v1.regionBackendService Documentation compute.v1.regionInstanceGroup Documentation compute.v1.regionInstanceGroupManager Documentation compute.v1.route Documentation compute.v1.router Documentation compute.v1.sslCertificate Documentation compute.v1.subnetwork Documentation compute.v1.targetHttpProxy Documentation compute.v1.targetHttpsProxy Documentation compute.v1.targetInstance Documentation compute.v1.targetPool Documentation compute.v1.targetSslProxy Documentation compute.v1.targetVpnGateway Documentation compute.v1.urlMap Documentation compute.v1.vpnTunnel Documentation container.v1.cluster Documentation container.v1.nodePool Documentation dataproc.v1.cluster Documentation dns.v1.managedZone Documentation iam.v1.serviceAccount Documentation iam.v1.serviceAccounts.key Documentation logging.v2.metric Documentation logging.v2.sink Documentation pubsub.v1.subscription Documentation pubsub.v1.topic Documentation runtimeconfig.v1beta1.config Documentation runtimeconfig.v1beta1.variable Documentation runtimeconfig.v1beta1.waiter Documentation spanner.v1.instance Documentation sqladmin.v1beta4.database Documentation sqladmin.v1beta4.instance Documentation sqladmin.v1beta4.user Documentation storage.v1.bucket Documentation storage.v1.bucketAccessControl Documentation storage.v1.defaultObjectAccessControl Documentation storage.v1.object Documentation storage.v1.objectAccessControl Documentation What's next Create a configuration .
- Resources for project creation If you are creating projects using Deployment Manager, you can use the following virtual resource types to enable APIs in your project, or change the billing information for your project.
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Supported resource types Stay organized with collections Save and categorize content based on your preferences.

### Best practices for using Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To attach the disk, the configuration has a reference to the disk: resources : instance - name : example-instance type : compute.v1.instance properties : disks : - type : PERSISTENT source:$(ref.example-disk.selfLink) disk - name : example-disk type : compute.v1.disk properties : zone : us-central1-a sizeGb : 10 type : ... ❑ If you want to create and manage private Google Kubernetes Engine (GKE) clusters with Deployment Manager, set the following privateClusterConfig and ipAllocationPolicy options in your deployment. privateClusterConfig : enablePrivateNodes : true enablePrivateEndpoint : true Configure the IP range for the hosted master network masterIpv4CidrBlock : IP RANGE ipAllocationPolicy : useIpAliases : true createSubnetwork : true For requirements and additional considerations when you are creating a private cluster with GKE, read Setting up a private cluster .
- There are a number of predefined IAM roles you can use to determine how much access a user has to call Deployment Manager. ❑ Use IAM roles to restrict what permissions are granted to users to use Deployment Manager. ❑ If you want users to be able to access resources created by Deployment Manager, grant users the roles they require to use resources, but do not grant them permissions to deploy resources directly. ❑ Granting the owner role to a principal will allow them to modify the IAM policy.
- Not a valid instance configuration, used solely for demonstration resources : - name : example-resource type : gcp-types/compute-v1:instances properties : zone : us-central1-a disks : - autoDelete : true boot : true Will not be redacted password : hunter2 Building templates ❑ To speed up defining your templates, consider starting with the production-ready sample templates from the Cloud Foundation Toolkit Project . ❑ If you have complex infrastructure requirements, such as the need to create multiple environments, read the tutorial and samples for using Deployment Manager at scale . ❑ Use Python to build your templates .
- Using Deployment Manager allows you to easily delete resources from a project so that you do not hit your resource quotas. ❑ Use Deployment Manager to create the stateful parts of the project and network configuration and deploy these outside of the CI/CD process as part of the initial setup.

### Deployments: patch \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch)
- Source ID: `site-api-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Response If successful, this method returns a response body with the following structure: { "kind" : "deploymentmanager#operation" , "id" : unsigned long , "creationTimestamp" : string , "name" : string , "zone" : string , "clientOperationId" : string , "operationType" : string , "targetLink" : string , "targetId" : unsigned long , "status" : string , "statusMessage" : string , "user" : string , "progress" : integer , "insertTime" : string , "startTime" : string , "endTime" : string , "error" : { "errors" : [ { "code" : string , "location" : string , "message" : string } ] } , "warnings" : [ { "code" : string , "message" : string , "data" : [ { "key" : string , "value" : string } ] } ], "httpErrorStatusCode" : integer , "httpErrorMessage" : string , "selfLink" : string , "region" : string , "description" : string } Property name Value Description Notes kind string [Output Only] Type of the resource.
- Acceptable values are: " ABANDON ": Removes the resource from Deployment Manager but does not delete the underlying resource. " DELETE ": Removes the resource from Deployment Manager and deletes the underlying resource. (default) preview boolean If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources.
- If the resource does not exist, the deployment will fail. " CREATE OR ACQUIRE ": Acquire the resource if it exists, create the resource if it does not. (default) deletePolicy string Sets the policy to use for deleting resources.
- Optional query parameters createPolicy string Sets the policy to use for creating new resources.

