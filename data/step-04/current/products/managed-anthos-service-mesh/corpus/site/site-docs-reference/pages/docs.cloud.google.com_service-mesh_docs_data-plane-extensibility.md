---
title: "Data plane extensibility with EnvoyFilter \_|\_ Cloud Service Mesh \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/docs/supported-features-managed
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility
  title: "Data plane extensibility with EnvoyFilter \_|\_ Cloud Service Mesh \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Anthos Service Mesh and Traffic Director are now Cloud Service Mesh. For more information, see the Cloud Service Mesh overview .
Home
Documentation
Networking
Cloud Service Mesh
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Data plane extensibility with EnvoyFilter
You can use the EnvoyFilter API to extend data plane capabilities in
Cloud Service Mesh that are otherwise not achievable by using other
Istio APIs. With the EnvoyFilter API, you can customize the Envoy
configuration generated from other policies applied to the workloads,
like adding filters to the HTTP filter chain.
Important considerations
Note that the API surface is tied to internal implementation details and so
special care must be taken when using this feature since incorrect
configurations could destabilize the mesh. Only use the EnvoyFilter API if
other Istio APIs don't suit your needs.
The EnvoyFilter API is supported with specific restrictions on which fields
and extensions may be used for reliability and supportability purposes. For an
exhaustive list of supported features in the EnvoyFilter API, refer to
Supported features using Istio APIs (managed control plane) .
The scope of support Google offers is limited to propagating the
user-provided config to the workloads with Envoy sidecars and does not extend
to the correctness of the config specified using per-extension APIs.
Supported API Fields
The EnvoyFilter API is supported with the TRAFFIC_DIRECTOR control plane implementation only with limited support as follows:
targetRefs : Not supported
configPatches[].applyTo : only HTTP_FILTER is supported
configPatches[].patch.operation : only INSERT_FIRST and INSERT_BEFORE when used with the route filter are supported.
configPatches[].patch.value.type_url : refer to Supported Extensions
configPatches[].patch.filterClass : Not supported
configPatches[].match.proxy : Not supported
configPatches[].match.routeConfiguration : Not supported
configPatches[].match.cluster : Not supported
The following fields are supported for the INSERT_BEFORE operation only:
configPatches[].match.listener : only filter is supported.
configPatches[].match.listener.filter.name : only envoy.filters.network.http_connection_manager is supported.
configPatches[].match.listener.filter.subFilter.name : only envoy.filters.http.router is supported.
Supported Extensions
Following is the list of supported extensions along with their supported API
fields across various release channels .
The API definition and their semantics can be found at the
official Envoy documentation .
type.googleapis.com/envoy.extensions.filters.http.local_ratelimit.v3.LocalRateLimit
Field
Rapid
Regular
Stable
stat_prefix
status
token_bucket
filter_enabled
filter_enforced
response_headers_to_add
request_headers_to_add_when_not_enforced
local_rate_limit_per_downstream_connection
enable_x_ratelimit_headers
type.googleapis.com/envoy.extensions.filters.http.grpc_web.v3.GrpcWeb
Field
Rapid
Regular
Stable
(No fields)
Sample Usage
In this tutorial, you'll learn how to use Envoy's built-in local rate limiting
to dynamically limit the traffic to a service using the EnvoyFilter API.
Costs
This tutorial uses the following billable components of Google Cloud:
GKE
Cloud Service Mesh
When you finish this tutorial, you can avoid ongoing costs by deleting the resources you created. For more information, see Clean up .
Before you begin
Ensure billing is enabled for your project.
Provision Cloud Service Mesh on a GKE cluster .
Clone the repository:
git clone https://github.com/GoogleCloudPlatform/anthos-service-mesh-samples
cd anthos-service-mesh-samples
Deploy an ingress gateway
Set the current context for kubectl to the cluster:
Note: Use --region instead of --zone , if the cluster is a regional
cluster.
gcloud container clusters get-credentials CLUSTER_NAME \
--project= PROJECT_ID \
--zone= CLUSTER_LOCATION
Create a namespace for your ingress gateway:
kubectl create namespace asm-ingress
Enable the namespace for injection. The steps depend on your control plane implementation .
Apply the default injection label to the namespace:
kubectl label namespace asm-ingress \
istio.io/rev- istio-injection = enabled --overwrite
Deploy the example gateway in the anthos-service-mesh-samples repository:
kubectl apply -n asm-ingress \
-f docs/shared/asm-ingress-gateway
Expected output:
serviceaccount/asm-ingressgateway configured
service/asm-ingressgateway configured
deployment.apps/asm-ingressgateway configured
gateway.networking.istio.io/asm-ingressgateway configured
Deploy the Online Boutique sample application
If you haven't, set the current context for kubectl to the cluster:
gcloud container clusters get-credentials CLUSTER_NAME \
--project= PROJECT_ID \
--zone= CLUSTER_LOCATION
Create the namespace for the sample application:
kubectl create namespace onlineboutique
Label the onlineboutique namespace to automatically inject Envoy proxies:
kubectl label namespace onlineboutique \
istio.io/rev- istio-injection=enabled --overwrite
Deploy the sample app, the VirtualService for the frontend, and service accounts for the workloads. For this tutorial, you will deploy Online Boutique , a microservice demo app.
kubectl apply \
-n onlineboutique \
-f docs/shared/online-boutique/virtual-service.yaml
kubectl apply \
-n onlineboutique \
-f docs/shared/online-boutique/service-accounts
View your services
View the pods in the onlineboutique namespace:
kubectl get pods -n onlineboutique
Expected output:
NAME READY STATUS RESTARTS AGE
adservice-85598d856b-m84m6 2/2 Running 0 2m7s
cartservice-c77f6b866-m67vd 2/2 Running 0 2m8s
checkoutservice-654c47f4b6-hqtqr 2/2 Running 0 2m10s
currencyservice-59bc889674-jhk8z 2/2 Running 0 2m8s
emailservice-5b9fff7cb8-8nqwz 2/2 Running 0 2m10s
frontend-77b88cc7cb-mr4rp 2/2 Running 0 2m9s
loadgenerator-6958f5bc8b-55q7w 2/2 Running 0 2m8s
paymentservice-68dd9755bb-2jmb7 2/2 Running 0 2m9s
productcatalogservice-84f95c95ff-c5kl6 2/2 Running 0 114s
recommendationservice-64dc9dfbc8-xfs2t 2/2 Running 0 2m9s
redis-cart-5b569cd47-cc2qd 2/2 Running 0 2m7s
shippingservice-5488d5b6cb-lfhtt 2/2 Running 0 2m7s
All of the pods for your application should be up and running, with a 2/2 in the READY column. This indicates that the pods have an Envoy sidecar proxy injected successfully. If it does not show 2/2 after a couple of minutes, visit the Troubleshooting guide .
Get the external IP, and set it to a variable:
kubectl get services -n asm-ingress
export FRONTEND_IP=$(kubectl --namespace asm-ingress \
get service --output jsonpath='{.items[0].status.loadBalancer.ingress[0].ip}' \
)
You see output similar to the following:
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
asm-ingressgateway LoadBalancer 10.19.247.233 35.239.7.64 80:31380/TCP,443:31390/TCP,31400:31400/TCP 27m
Visit the EXTERNAL-IP address in your web browser. You should expect to see
the Online Boutique shop in your browser.
Apply Rate Limit Config
This section applies an EnvoyFilter resource to limit all traffic to the
frontend service to 5 req/min.
Apply the CR to the frontend service:
kubectl apply -f - <<EOF
apiVersion: networking.istio.io/v1alpha3
kind: EnvoyFilter
metadata:
name: frontend-local-ratelimit
namespace: onlineboutique
spec:
workloadSelector:
labels:
app: frontend
configPatches:
- applyTo: HTTP_FILTER
match:
context: SIDECAR_INBOUND
listener:
filterChain:
filter:
name: "envoy.filters.network.http_connection_manager"
subFilter:
name: "envoy.filters.http.router"
patch:
operation: INSERT_BEFORE
value:
name: envoy.filters.http.local_ratelimit
typed_config:
"@type" : type.googleapis.com/udpa.type.v1.TypedStruct
type_url: type.googleapis.com/envoy.extensions.filters.http.local_ratelimit.v3.LocalRateLimit
value:
stat_prefix: http_local_rate_limiter
token_bucket:
max_tokens: 5
tokens_per_fill: 5
fill_interval: 60s
filter_enabled:
runtime_key: local_rate_limit_enabled
default_value:
numerator: 100
denominator: HUNDRED
filter_enforced:
runtime_key: local_rate_limit_enforced
default_value:
numerator: 100
denominator: HUNDRED
EOF
Expected output:
envoyfilter.networking.istio.io/frontend-local-ratelimit created
Verify that the CR status doesn't report any errors:
kubectl get envoyfilter -n onlineboutique frontend-local-ratelimit -o yaml
Expected output:
...
status :
conditions :
- lastTransitionTime : "2025-06-30T14:29:25.467017594Z"
message : This resource has been accepted. This does not mean it has been propagated
to all proxies yet
reason : Accepted
status : "True"
type : Accepted
Remove the loadgenerator deployment as it calls the service multiple times which consumes tokens:
kubectl delete -n onlineboutique deployment loadgenerator
Expected output:
deployment.apps/loadgenerator deleted
Using curl , verify that no more than 5 requests are allowed in 60 sec. The
429 code indicates that the rate limiting is being enforced.
for i in { 1 ..10 } ; do curl -s http:// ${ FRONTEND_IP } -o /dev/null -w "%{http_code}\n" ; sleep 1 ; done
Expected output:
200
200
200
200
200
429
429
429
429
429
Clean up
To avoid incurring continuing charges to your Google Cloud account for
the resources used in this tutorial, you can either
delete the project or delete
the individual resources .
Delete the project
Caution: Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project
for this tutorial, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost. When you created this project, you might
have created a custom project ID that you want to use in the future.
To preserve the URLs that use the project ID, such as an appspot.com URL,
delete selected resources inside the project instead of deleting the whole
project.
In Cloud Shell, delete the project:
gcloud projects delete PROJECT_ID
Delete the resources
If you want to keep your cluster and remove the Online Boutique sample:
Delete the application namespaces:
kubectl delete namespace onlineboutique
Expected output:
namespace "onlineboutique" deleted
Delete the Ingress Gateway namespace:
kubectl delete namespace asm-ingress
Expected output:
namespace "asm-ingress" deleted
If you want to prevent additional charges, delete the cluster:
gcloud container clusters delete CLUSTER_NAME \
--project= PROJECT_ID \
--zone= CLUSTER_LOCATION
Troubleshooting
See Resolving data plane extensibility issues .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
