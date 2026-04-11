---
title: "Deploying the Bookinfo sample \_|\_ Cloud Service Mesh \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/service-mesh/docs/deploy-bookinfo
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/docs/deploy-bookinfo
  title: "Deploying the Bookinfo sample \_|\_ Cloud Service Mesh \_|\_ Google Cloud\
    \ Documentation"
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
Deploying the Bookinfo sample
This page explains how to deploy a sample application to demonstrate
Cloud Service Mesh. If you haven't onboarded to Cloud Service Mesh, see the
Onboarding guide .
Several sample applications come with the Cloud Service Mesh installation. This
guide walks you through deploying the
BookInfo
sample. This is a simple mock bookstore application made up of four services
that provide a web product page, book details, reviews (with several versions of
the review service), and ratings—all managed using Cloud Service Mesh. You can
find the source code and all the other files used in this example in your
Cloud Service Mesh installation's directory in samples/bookinfo .
Enabling sidecar auto-injection
Enable the namespace for injection. The steps depend on your control plane implementation .
Managed (TD)
Apply the default injection label to the namespace:
kubectl label namespace default \
istio.io/rev- istio-injection = enabled --overwrite
Managed (Istiod)
Recommended: Run the following command to apply the default injection label to the namespace:
kubectl label namespace default \
istio.io/rev- istio-injection = enabled --overwrite
If you are an existing user with the Managed Istiod control plane:
We recommend that you use default injection, but revision-based injection is
supported. Use the following instructions:
Run the following command to locate the available release channels:
kubectl -n istio-system get controlplanerevision
The output is similar to the following:
NAME AGE
asm-managed-rapid 6d7h
NOTE: If two control plane revisions appear in the list above, remove one. Having multiple control plane channels in the cluster is not supported.
In the output, the value under the NAME column is the revision label that corresponds to the available release channel for the Cloud Service Mesh version.
Apply the revision label to the namespace:
kubectl label namespace default \
istio-injection- istio.io/rev = REVISION_LABEL --overwrite
In-cluster
Recommended: Run the following command to apply the default injection label to the namespace:
kubectl label namespace default \
istio.io/rev- istio-injection = enabled --overwrite
We recommend that you use default injection, but revision-based injection is supported:
Use the following instructions:
Use the following command to locate the revision label on istiod :
kubectl get deploy -n istio-system -l app = istiod -o \
jsonpath ={ .items [ * ] .metadata.labels. 'istio\.io\/rev' } '{"\n"}'
Apply the revision label to the namespace. In the following command,
REVISION_LABEL is the value of the istiod revision
label that you noted in the previous step.
kubectl label namespace default \
istio-injection- istio.io/rev = REVISION_LABEL --overwrite
Deploying the application
Now that auto-injection is enabled on the default namespace, when you deploy
the BookInfo application's services, sidecar proxies are injected alongside each
service.
On the command line on the computer where you installed Cloud Service Mesh, go to
the root of the Cloud Service Mesh installation directory. If you need to,
download the In-cluster installation file ,
which includes the bookinfo sample application, and extract it.
Deploy your application to the default namespace using kubectl :
kubectl apply -f samples/bookinfo/platform/kube/bookinfo.yaml
Confirm that the application has been deployed correctly by running the
following commands:
kubectl get services
Output:
NAME CLUSTER-IP EXTERNAL-IP PORT(S) AGE
details 10.0.0.31 <none> 9080/TCP 6m
kubernetes 10.0.0.1 <none> 443/TCP 7d
productpage 10.0.0.120 <none> 9080/TCP 6m
ratings 10.0.0.15 <none> 9080/TCP 6m
reviews 10.0.0.170 <none> 9080/TCP 6m
and
kubectl get pod
Output:
NAME READY STATUS RESTARTS AGE
details-v1-1520924117-48z17 2/2 Running 0 6m
productpage-v1-560495357-jk1lz 2/2 Running 0 6m
ratings-v1-734492171-rnr5l 2/2 Running 0 6m
reviews-v1-874083890-f0qf0 2/2 Running 0 6m
reviews-v2-1343845940-b34q5 2/2 Running 0 6m
reviews-v3-1813607990-8ch52 2/2 Running 0 6m
Finally, define the ingress gateway routing for the application:
kubectl apply -f samples/bookinfo/networking/bookinfo-gateway.yaml
Output:
gateway.networking.istio.io/bookinfo-gateway created
virtualservice.networking.istio.io/bookinfo created
Validating the application deployment
To see if the BookInfo application is working, you need to send traffic to
the ingress gateway.
If you installed Cloud Service Mesh on Google Distributed Cloud (software only) for VMware, get the external
IP address for the ingress gateway that you
configured
after installing Cloud Service Mesh
If you installed Cloud Service Mesh on GKE, get the external IP
address of the ingress gateway as follows:
kubectl get service istio-ingressgateway -n istio-system
Output:
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
istio-ingressgateway LoadBalancer 10.19.247.233 35.239.7.64 80:31380/TCP,443:31390/TCP,31400:31400/TCP 27m
In this example, the IP address of the ingress service is 35.239.7.64 .
Trying the application
Check that the BookInfo app is running with curl :
curl -I http:// EXTERNAL_IP /productpage
If the response shows 200 , it means the application is working properly
with Cloud Service Mesh.
To view the BookInfo web page, enter the following address in your browser:
http:// EXTERNAL_IP /productpage
If you refresh the page several times, you should see different versions of
reviews shown in the product page, presented in a round robin style
(red stars, black stars, no stars).
Now that you have an application that is generating traffic, you can
explore the Cloud Service Mesh pages
in the Google Cloud console to see metrics and the other observability
features.
Cleaning up
When you are finished experimenting with the Bookinfo sample, remove it from
your cluster.
Uninstall Bookinfo using the following script:
samples/bookinfo/platform/kube/cleanup.sh
Confirm shutdown:
kubectl get virtualservices #-- there should be no virtual services
kubectl get destinationrules #-- there should be no destination rules
kubectl get gateway #-- there should be no gateway
kubectl get pods #-- the Bookinfo pods should be deleted
What's next
Learn more about the Bookinfo sample .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
