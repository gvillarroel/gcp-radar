---
title: "Cloud Service Mesh by example: mTLS \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/v1.20/docs/by-example/mtls
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/v1.20/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/v1.20/docs/by-example/mtls
  title: "Cloud Service Mesh by example: mTLS \_|\_ Google Cloud Documentation"
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
Send feedback
Cloud Service Mesh by example: mTLS
Stay organized with collections
Save and categorize content based on your preferences.
In Cloud Service Mesh 1.5 and later, auto mutual TLS (auto mTLS) is enabled by
default. With auto mTLS, a client sidecar proxy automatically detects if the
server has a sidecar. The client sidecar sends mTLS to workloads with sidecars
and sends plaintext to workloads without sidecars. Note, however, services
accept both plaintext and mTLS traffic. As you
inject sidecar proxies to your Pods, we
recommend that you also configure your services to only accept mTLS traffic.
With Cloud Service Mesh, you can enforce mTLS, outside of your application code, by
applying a single YAML file. Cloud Service Mesh gives you the flexibility to apply an
authentication policy to the entire service mesh, to a namespace, or to an
individual workload.
Costs
In this document, you use the following billable components of Google Cloud:
GKE
Cloud Service Mesh
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish this tutorial, you can avoid ongoing costs by deleting the
resources you created. For more information, see Clean up .
Before you begin
Make sure that billing is enabled for your Cloud project. Learn how to
confirm that billing is enabled for your project .
Install Cloud Service Mesh on a GKE cluster and deploy an ingress
gateway. If you need to set up a cluster for this tutorial, see the
Cloud Service Mesh quickstart ,
which walks you through:
Creating a GKE cluster.
Provisions managed Cloud Service Mesh.
Deploying an ingress gateway.
Deploying the Online Boutique sample application from the
anthos-service-mesh-packages
repo, which is modified from the original set of manifests in the
microservices-demo
repo. Following best practices, each service is deployed in a separate namespace
with a unique service account.
Access Online Boutique
Set the current context for kubectl to the cluster where you deployed
Online Boutique:
gcloud container clusters get-credentials CLUSTER_NAME \
--project= PROJECT_ID \
--zone= CLUSTER_LOCATION
List the services in the frontend namespace:
kubectl get services -n frontend
Notice that frontend-external is a LoadBalancer , and it has an
external IP address. The sample application includes a service that is a
load balancer so that it can be deployed on GKE without
Cloud Service Mesh.
Visit the application in your browser using the external IP address of the
frontend-external service:
http : // FRONTEND_EXTERNAL_IP /
Cloud Service Mesh provides you the ability to deploy an ingress gateway. You can
also access the Online Boutique using the external IP address of the ingress
gateway. Get the external IP of the gateway. Replace the placeholders with
the following information:
GATEWAY_SERVICE_NAME : The name of the ingress gateway
service. If you deployed the sample gateway without modification, or if
you deployed the
default ingress gateway ,
the name is istio-ingressgateway .
GATEWAY_NAMESPACE : The namespace in which you deployed
the ingress gateway. If you deployed the default ingress gateway, the
namespace is istio-system .
kubectl get service GATEWAY_NAME -n GATEWAY_NAMESPACE
Open another tab in your browser and visit the application using the
external IP address of the ingress gateway:
http:// INGRESS_GATEWAY_EXTERNAL_IP /
Run the following command to curl the frontend service with plain HTTP
from another Pod. Because the services are in different namespaces, you
need to curl the DNS name
of the frontend service.
kubectl exec \
$(kubectl get pod -l app=productcatalogservice -n product-catalog -o jsonpath={.items..metadata.name}) \
-c istio-proxy -n product-catalog -- \
curl http://frontend.frontend.svc.cluster.local:80/ -o /dev/null -s -w '%{http_code}\n'
Your request succeeds with status 200 , because by default, both TLS and
plaintext traffic are accepted.
Enable mutual TLS per namespace
You enforce mTLS by applying a PeerAuthentication policy with kubectl .
Save the following authentication policy as mtls-namespace.yaml .
cat <<EOF > mtls-namespace.yaml
apiVersion: "security.istio.io/v1beta1"
kind: "PeerAuthentication"
metadata:
name: "namespace-policy"
spec:
mtls:
mode: STRICT
EOF
The line mode: STRICT in the YAML configures the services to only
accept mTLS. By default, the mode is PERMISSIVE , which configures
services to accept both plaintext and mTLS.
Apply the authentication policy to configure all Online Boutique
services to only accept mTLS:
for ns in ad cart checkout currency email frontend loadgenerator \
payment product - catalog recommendation shipping ; do
kubectl apply - n $ ns - f mtls - namespace . yaml
done
Expected output:
peerauthentication.security.istio.io/namespace-policy created
peerauthentication.security.istio.io/namespace-policy created
peerauthentication.security.istio.io/namespace-policy created
peerauthentication.security.istio.io/namespace-policy created
peerauthentication.security.istio.io/namespace-policy created
peerauthentication.security.istio.io/namespace-policy created
peerauthentication.security.istio.io/namespace-policy created
peerauthentication.security.istio.io/namespace-policy created
peerauthentication.security.istio.io/namespace-policy created
peerauthentication.security.istio.io/namespace-policy created
peerauthentication.security.istio.io/namespace-policy created
Go to the tab in your browser that accesses the Online Boutique using the
external IP address of the frontend-external service:
http : // FRONTEND_EXTERNAL_IP /
Refresh the page. The browser displays the following error:
Refreshing the page causes plaintext to be sent to the frontend service.
Because of the STRICT authentication policy, the sidecar proxy blocks the
request to the service.
Go to the tab in your browser that accesses the Online Boutique using the
external IP address of the istio-ingressgateway , and refresh the page,
which displays successfully. When you access Online Boutique using the
ingress gateway, the request takes the following path:
mTLS authentication flow:
The browser sends a plaintext HTTP request to the server.
The ingress gateway proxy container intercepts the request.
The ingress gateway proxy performs a TLS handshake with the
server-side proxy (the frontend service in this example). This handshake
includes an exchange of certificates. These certs are pre-loaded into
the proxy containers by Cloud Service Mesh.
The ingress gateway proxy performs a secure naming check on the
server's certificate, verifying that an authorized identity is running
the server.
The ingress gateway and server proxies establish a mutual TLS
connection, and the server proxy forwards the request to the server
application container (the frontend service).
Run the following command to curl the frontend service with plain HTTP
from another Pod.
kubectl exec \
$(kubectl get pod -l app=productcatalogservice -n product-catalog -o jsonpath={.items..metadata.name}) \
-c istio-proxy -n product-catalog -- \
curl http://frontend.frontend.svc.cluster.local:80/ -o /dev/null -s -w '%{http_code}\n'
Your request fails because because all Online Boutique services
are set to STRICT mTLS, and the sidecar proxy blocks the request to
the service.
Expected output:
000
command terminated with exit code 56
View mTLS status
You can view the status of GKE Enterprise security features, including
authentication policies, in the Google Cloud console.
In the Google Cloud console, go to the GKE Enterprise Overview
page.
Go to Overview
Select the Google Cloud project from the project list on the menu bar.
From the Policy status card, depending on your configuration, click
View Policy or Enable Policy . The Policy Controller dashboard opens.
Click the Violations tab.
Under Resource Kind , select the Pod checkbox. This shows a list of
Pods which are in violation of a policy.
Find and delete authentication policies
For a list of all the PeerAuthentication policies in the service mesh:
kubectl get peerauthentication --all-namespaces
The output is similar to the following:
NAMESPACE NAME MODE AGE
ad namespace-policy STRICT 17m
cart namespace-policy STRICT 17m
checkout namespace-policy STRICT 17m
currency namespace-policy STRICT 17m
email namespace-policy STRICT 17m
frontend namespace-policy STRICT 17m
loadgenerator namespace-policy STRICT 17m
payment namespace-policy STRICT 17m
product-catalog namespace-policy STRICT 17m
recommendation namespace-policy STRICT 17m
shipping namespace-policy STRICT 17m
Delete the authentication policy from all of the Online Boutique
namespaces:
for ns in ad cart checkout currency email frontend loadgenerator payment \
product - catalog recommendation shipping ; do
kubectl delete peerauthentication - n $ ns namespace - policy
done ;
Expected output:
peerauthentication.security.istio.io "namespace-policy" deleted
peerauthentication.security.istio.io "namespace-policy" deleted
peerauthentication.security.istio.io "namespace-policy" deleted
peerauthentication.security.istio.io "namespace-policy" deleted
peerauthentication.security.istio.io "namespace-policy" deleted
peerauthentication.security.istio.io "namespace-policy" deleted
peerauthentication.security.istio.io "namespace-policy" deleted
peerauthentication.security.istio.io "namespace-policy" deleted
peerauthentication.security.istio.io "namespace-policy" deleted
peerauthentication.security.istio.io "namespace-policy" deleted
peerauthentication.security.istio.io "namespace-policy" deleted
Access the Online Boutique using the external IP address of the
frontend-external service, and refresh the page. The page displays as
expected.
Run the following command to curl the frontend service with plain HTTP
from another Pod.
kubectl exec \
$(kubectl get pod -l app=productcatalogservice -n product-catalog -o jsonpath={.items..metadata.name}) \
-c istio-proxy -n product-catalog -- \
curl http://frontend.frontend.svc.cluster.local:80/ -o /dev/null -s -w '%{http_code}\n'
Your request succeeds with status 200 , because by default, both TLS and
plaintext traffic are accepted.
If you refresh the page in the Google Cloud console that displays the
Workloads list, it now shows that the mTLS status is Permissive .
Enable mutual TLS per workload
To set a PeerAuthentication policy for a specific workload, you must configure
the selector section and specify the labels that match the desired workload.
However, Cloud Service Mesh can't aggregate workload-level policies for outbound
mTLS traffic to a service. You need to configure a destination rule to manage
that behavior.
Apply an authentication policy to a specific workload. Notice how the
following policy uses labels and selectors to target the specific frontend
deployment.
cat <<EOF | kubectl apply -n frontend -f -
apiVersion: "security.istio.io/v1beta1"
kind: "PeerAuthentication"
metadata:
name: "frontend"
namespace: "frontend"
spec:
selector:
matchLabels:
app: frontend
mtls:
mode: STRICT
EOF
Expected output:
peerauthentication.security.istio.io/frontend created
Configure a matching destination rule.
cat <<EOF | kubectl apply -n frontend -f -
apiVersion: "networking.istio.io/v1alpha3"
kind: "DestinationRule"
metadata:
name: "frontend"
spec:
host: "frontend.demo.svc.cluster.local"
trafficPolicy:
tls:
mode: ISTIO_MUTUAL
EOF
Expected output:
destinationrule.networking.istio.io/frontend created
Access the Online Boutique using the external IP address of the
frontend-external service, and refresh the page. The page doesn't
display because because the frontend service is set to
STRICT mTLS, and the sidecar proxy blocks the request.
Run the following command to curl the frontend service with plain HTTP
from another Pod.
kubectl exec \
$(kubectl get pod -l app=productcatalogservice -n product-catalog -o jsonpath={.items..metadata.name}) \
-c istio-proxy -n product-catalog -- \
curl http://frontend.frontend.svc.cluster.local:80/ -o /dev/null -s -w '%{http_code}\n'
Your request fails with status code 56 .
If you refresh the page in the Google Cloud console that displays the
Workloads list, it now shows that the mTLS status for the
frontend service is Strict and all the other services are set to
Permissive .
Delete the authentication policy:
kubectl delete peerauthentication -n frontend frontend
Expected output:
peerauthentication.security.istio.io "frontend" deleted
Delete the destination rule:
kubectl delete destinationrule -n frontend frontend
Expected output:
destinationrule.networking.istio.io "frontend" deleted
Enforcing mesh-wide mTLS
To prevent all your services in the mesh from accepting plaintext traffic, set
a mesh-wide PeerAuthentication policy with the mTLS mode set to STRICT .
The mesh-wide PeerAuthentication policy shouldn't have a selector and must be
applied in the root namespace, istio-system . When you deploy the policy, the
control plane automatically provisions TLS certificates so that workloads can
authenticate with each other.
Enforce mesh-wide mTLS:
kubectl apply -f - <<EOF
apiVersion: "security.istio.io/v1beta1"
kind: "PeerAuthentication"
metadata:
name: "mesh-wide"
namespace: "istio-system"
spec:
mtls:
mode: STRICT
EOF
Expected output:
peerauthentication.security.istio.io/mesh-wide created
Access the Online Boutique using the external IP address of the
frontend-external service, and refresh the page. The page doesn't
display.
Run the following command to curl the frontend service with plain HTTP
from another Pod.
kubectl exec \
$(kubectl get pod -l app=productcatalogservice -n product-catalog -o jsonpath={.items..metadata.name}) \
-c istio-proxy -n product-catalog -- \
curl http://frontend.frontend.svc.cluster.local:80/ -o /dev/null -s -w '%{http_code}\n'
Your request fails with status code 56 .
Delete the mesh-wide policy:
kubectl delete peerauthentication -n istio-system mesh-wide
Expected output:
peerauthentication.security.istio.io "mesh-wide" deleted
If you refresh the page in the Google Cloud console, you see that that the
mTLS details for all services now display Permissive .
Note: For more information on authorization policies, see
Cloud Service Mesh by example: Authorization .
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
If you want to prevent additional charges, delete the cluster:
gcloud container clusters delete CLUSTER_NAME \
--project= PROJECT_ID \
--zone= CLUSTER_LOCATION
If you want to keep your cluster and remove the Online Boutique sample:
Delete the application namespaces:
kubectl delete -f online-boutique/kubernetes-manifests/namespaces
Expected output:
namespace "ad" deleted
namespace "cart" deleted
namespace "checkout" deleted
namespace "currency" deleted
namespace "email" deleted
namespace "frontend" deleted
namespace "loadgenerator" deleted
namespace "payment" deleted
namespace "product-catalog" deleted
namespace "recommendation" deleted
namespace "shipping" deleted
Delete the service entries:
kubectl delete -f online-boutique/istio-manifests/allow-egress-googleapis.yaml
Expected output:
serviceentry.networking.istio.io "allow-egress-googleapis" deleted
serviceentry.networking.istio.io "allow-egress-google-metadata" deleted
What's next
For a general guide on configuring PeerAuthentication policies, see
Configuring transport security .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
