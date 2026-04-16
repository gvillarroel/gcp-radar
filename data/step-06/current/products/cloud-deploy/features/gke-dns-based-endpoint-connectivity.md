---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.662Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "GKE DNS-based endpoint connectivity"
feature_slug: "gke-dns-based-endpoint-connectivity"
latest_feature_date: "2025-01-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/gke-targets"
  - "https://docs.cloud.google.com/deploy/docs/config-files"
  - "https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient"
keywords:
  - "gke"
  - "dns"
  - "based"
  - "endpoint"
  - "connectivity"
  - "deploy"
  - "can"
  - "connect"
---

# GKE DNS-based endpoint connectivity

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy can connect to a GKE cluster through its DNS-based endpoint to simplify private-cluster networking.

## Extended Definition

Cloud Deploy can connect to a GKE cluster through its DNS-based endpoint to simplify private-cluster networking.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/gke-targets](https://docs.cloud.google.com/deploy/docs/gke-targets)
- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)

## Supporting Pages

### Deploy to a Google Kubernetes Engine cluster \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/gke-targets](https://docs.cloud.google.com/deploy/docs/gke-targets)
- Source ID: `site-docs-reference-2`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deploy to a private cluster You can deploy your application to a private GKE cluster, using one of three options: Using a DNS-based endpoint Using a Virtual Private Cloud network Using GKE attached clusters and connect gateway Use a DNS endpoint This is the simplest way to connect to a private cluster.
- If your cluster doesn't have an IP-based endpoint configured, you can skip this step; Cloud Deploy will connect to the DNS endpoint by default since it is the control plane's only endpoint.
- Use a Virtual Private Cloud network You can configure a target to deploy to a private GKE cluster connected to a Virtual Private Cloud network: Create your private cluster A private cluster is a VPC-native cluster whose nodes and Pods are isolated by default from the public internet.
- Home Documentation Application development Cloud Deploy Guides Send feedback Deploy to a Google Kubernetes Engine cluster Stay organized with collections Save and categorize content based on your preferences.

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- For GKE attached clusters targets Target configuration for deploying to GKE attached clusters is similar to configuring a target for a GKE target , except that the property is anthosCluster.membership , instead of gke.cluster , the resource path is different, and specific connection methods ( dnsEndpoint or internalIp ) are not applicable. anthosCluster : membership : projects/[project name]/locations/global/memberships/[membership name] project name The Google Cloud project in which the cluster lives. /location/global/ The location where the cluster is registered. global , in all cases. membership name The name of the cluster membership.
- This option cannot be used at the same time as the internalIp option. internalIp When set to true , Cloud Deploy will connect to the GKE cluster using the private IP address instead of the default endpoint, which may be a public IP, private IP, or the DNS endpoint, depending on the cluster configuration.
- Learn more . dnsEndpoint When set to true , Cloud Deploy will connect to the GKE cluster using the DNS endpoint instead of the default endpoint, which may be a public IP, private IP, or the DNS endpoint, depending on the cluster configuration.
- For GKE and GKE attached clusters targets The following YAML shows how to configure a deployment strategy for a target that deploys to GKE or GKE attached clusters, using service-based networking : canary : runtimeConfig : kubernetes : serviceNetworking : service : " SERVICE NAME " deployment : " DEPLOYMENT NAME " disablePodOverprovisioning : true false canaryDeployment : percentages : [ PERCENTAGES ] verify : tasks : [] The following YAML shows how to configure a deployment strategy for a target that deploys to GKE or GKE attached clusters, using Gateway API : canary : runtimeConfig : kubernetes : gatewayServiceMesh : httpRoute : " HTTP ROUTE NAME " service : " SERVICE NAME " deployment : " DEPLOYMENT NAME " routeUpdateWaitTime : " WAIT TIME " routeDestinations : destinationIds : [ "KEY" ] propagateService : [ true false ] canaryDeployment : percentages : [ " PERCENTAGES " ] verify : tasks : [] Notice in this example routeUpdateWaitTime .

### "Class CloudDeployAsyncClient (2.10.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.CloudDeployAsyncClient)
- Source ID: `site-python-reference`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 async def sample create custom target type(): Create a client client = deploy v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 async def sample delete custom target type(): Create a client client = deploy v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 async def sample update custom target type(): Create a client client = deploy v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import deploy v1 async def sample create delivery pipeline(): Create a client client = deploy v1 .

