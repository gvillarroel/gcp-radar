---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.551Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "Vertex AI extensions in API hub"
feature_slug: "vertex-ai-extensions-in-api-hub"
latest_feature_date: "2024-06-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/release/known-issues"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
keywords:
  - "extensions"
  - "creating"
  - "registered"
  - "vertex"
  - "supports"
---

# Vertex AI extensions in API hub

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

API hub now supports creating Vertex AI extensions for registered APIs, including integration with LLMs for real-time data processing.

## Extended Definition

API hub now supports creating Vertex AI extensions for registered APIs, including integration with LLMs for real-time data processing.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)

## Supporting Pages

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-required-3`
- Final score: 80
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create the traffic extension using the following command to call the Extension Processor provisioning API: curl -X POST -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions?apimServiceExtensionId = TRAFFIC EXT NAME \ -H "Content-Type:application/json" -d \ '{ "extensionProcessor": " TARGET PROXY NAME " "lbForwardingRule": " LB FORWARDING RULE ", "network" : " NETWORK ", "networkConfigs": [ { "region": "$REGION", "subnet": "project/my-project/regions/$REGION/subnetworks/$SUBNET" } ], "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " CEL EXPRESSION ", "failOpen": FAIL OPEN , "hostname": " ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is is the name of the traffic extension you are creating.
- Go to the VPC Networks page in the Google Cloud console: Go to VPC Networks Required roles To get the permissions that you need to install the Apigee Extension Processor, ask your administrator to grant you the following IAM roles: Create and manage service accounts: Service Account Admin ( roles/iam.serviceAccountAdmin ) on organization Create and manage service extensions: Service Extensions Admin ( roles/networkservices.serviceExtensionsAdmin ) on organization Create and manage network endpoint groups (NEGs): Compute Instance Admin ( roles/compute.instanceAdmin ) on organization Create and manage networking resources: Compute Network Admin ( roles/compute.networkAdmin ) on organization Create and manage backend services: Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) on organization Create and manage Apigee resources: Apigee Org Admin ( roles/apigee.admin ) on organization Create and manage traffic extensions: Apigee APIM Service Extension Admin ( roles/apigee.apimServiceExtensionAdmin ) on organization View traffic extensions: Apigee APIM Service Extension Viewer ( roles/apigee.apimServiceExtensionViewer ) on organization Manage long-running operations: Apigee APIM Service Extension Service Agent ( roles/apigee.apimServiceExtensionServiceAgent ) on the service agent in the Google Cloud project For more information about granting roles, see Manage access to projects, folders, and organizations .
- The response appears similar to the following: { "name" : "my-traffic-extension" , "extensionProcessor" : "my-extension-processor" , "lbForwardingRule" : "https://www.googleapis.com/compute/v1/projects/my-project/global/forwardingRules/my-forwarding-rule" , "network" : "projects/my-project/global/networks/my-network" , "networkConfigs" : [ { "region" : "us-west1" , "subnet" : "projects/my-project/regions/us-west1/subnetworks/my-subnet" } ] , "extensions" : [ { "name" : "organizations/my-org/apis/my-api-proxy" , "matchCondition" : "request.url.contains('1234567890')" , "failOpen" : true, "hostname" : "my-hostname.apigee.net" , "supportedEvents" : [ "REQUEST HEADERS" , "RESPONSE HEADERS" ] } ] } Update a traffic extension You can update the traffic extension using the updateMask parameter.
- Update Multiple Attributes (Global LB) To update the extensions and extensionProcessor attributes simultaneously, use the following command: curl -X PATCH -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME ?updateMask = extensions,extensionProcessor \ -H "Content-Type:application/json" -d \ '{ "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " NEW CEL EXPRESSION ", "failOpen": NEW FAIL OPEN , "hostname": " NEW ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ], "extensionProcessor": " NEW TARGET PROXY NAME " }' Where: TRAFFIC EXT NAME is the name of the Extension Processor traffic extension to update.

### Apigee known issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Execute: kubectl delete crd $(cat istio-crd.csv) Update clusterrole Get the current apigee-ingressgateway-manager clusterrole: kubectl get clusterrole apigee-ingressgateway-manager-apigee -o yaml > apigee-ingressgateway-manager-apigee-clusterrole.yaml Copy the clusterrole to a new location: cp apigee-ingressgateway-manager-apigee-clusterrole.yaml apigee-ingressgateway-manager-apigee-clusterrole-added-istio-permissions.yaml Add the following additional permissions to the end of the file: - apiGroups: - gateway.networking.k8s.io resources: - gatewayclasses - gateways - grpcroutes - httproutes - referencegrants verbs: - get - list - watch - apiGroups: - networking.istio.io resources: - sidecars - destinationrules - gateways - virtualservices - envoyfilters - workloadentries - serviceentries - workloadgroups - proxyconfigs verbs: - get - list - watch - apiGroups: - security.istio.io resources: - peerauthentications - authorizationpolicies - requestauthentications verbs: - get - list - watch - apiGroups: - telemetry.istio.io resources: - telemetries verbs: - get - list - watch - apiGroups: - extensions.istio.io resources: - wasmplugins verbs: - get - list - watch Apply the role: kubectl -n APIGEE NAMESPACE apply -f apigee-ingressgateway-manager-apigee-clusterrole-added-istio-permissions.yaml After you have completed the above options, you will need to restart your apigee-ingressgateway-manager pods.
- List the ingress-manager pods to reinstall or recreate: kubectl get deployments -n APIGEE NAMESPACE Example output: NAME READY UP-TO-DATE AVAILABLE AGE apigee-controller-manager 1/1 1 1 32d apigee-ingressgateway-manager 2/2 2 2 32d Restart the ingress-manager pods: kubectl rollout restart deployment -n APIGEE NAMESPACE apigee-ingressgateway-manager After a few minutes, monitor the apigee-ingressgateway-manager pods: watch -n 10 kubectl -n APIGEE NAMESPACE get pods -l app=apigee-ingressgateway-manager Example output: NAME READY STATUS RESTARTS AGE apigee-ingressgateway-manager-12345abcde-678wx 3/3 Running 0 10m apigee-ingressgateway-manager-12345abcde-901yz 3/3 Running 0 10m 414499328 hybrid 1.14.1 FIXED in hybrid 1.14.3 and hybrid 1.15.0 ApigeeTelemetry can become stuck in creating state.
- 432315283 Apigee OPEN When updating a keystore or truststore without creating a new keystore or truststore, runtime updates may fail and cause the following intermittent error: {"fault":{"faultstring":"SSL Handshake failed sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target","detail":{"errorcode":"messaging.adaptors.http.flow.SslHandshakeFailed"}}} The error is intermittent because the keystore or truststore update may fail on one runtime pod but succeed on other pods.
- The workaround is to run the following commands for every virtual host when creating: kubectl annotate ar apigee-ingressgateway-internal-chaining- PROJECT ID SUFFIX -n APIGEE NAMESPACE meta.helm.sh/release-name= NEW ENV GROUP NAME --overwrite kubectl annotate cert apigee-ingressgateway-internal-chaining- PROJECT ID SUFFIX -n APIGEE NAMESPACE meta.helm.sh/release-name= NEW ENV GROUP NAME --overwrite where: PROJECT ID SUFFIX is a unique suffix for internal chaining for your project in Kubernetes.

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference-required-3`
- Final score: 53
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When this operation completes, you should see a response similar to the following: { "name" : "projects/976063410430/locations/us-west1/indexes/5695338290484346880/operations/9084564741162008576" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.aiplatform.v1.CreateIndexOperationMetadata" , "genericMetadata" : { "createTime" : "2025-04-25T18:45:27.996136Z" , "updateTime" : "2025-04-25T18:45:27.996136Z" } } } For more information on creating Vector Search indexes, see Create an index .
- Before creating the API proxy, set the following environment variable: export PUBLIC DOMAIN NAME = $( gcloud ai index-endpoints describe $INDEX ENDPOINT ID --region = $REGION --project = $PROJECT ID grep "publicEndpointDomainName" awk '{print $2}' ) To create a proxy for use with semantic caching: Go to the API proxies page in the Google Cloud console.
- For this tutorial, set this URL to the following: REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /publishers/google/models/text-embedding-004:predict Query Nearest Neighbor URL : This Vertex AI service searches for similar text input from previous requests in the Vector Search index to avoid reprocessing.
- To obtain these values, use the following commands: echo $PUBLIC DOMAIN NAME echo $INDEX ENDPOINT ID Upsert index URL : This Vertex AI service updates the index with new or modified entries.

