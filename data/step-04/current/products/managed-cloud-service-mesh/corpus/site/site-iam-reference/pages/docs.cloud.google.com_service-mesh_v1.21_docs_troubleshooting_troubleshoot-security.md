---
title: "Resolving security issues in Cloud Service Mesh \_|\_ Cloud Service Mesh v1.21\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-security
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-security
  title: "Resolving security issues in Cloud Service Mesh \_|\_ Cloud Service Mesh\
    \ v1.21 \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

You are viewing archived v1.21 Service Mesh documentation.
Available versions
Cloud Service Mesh latest Cloud Service Mesh 1.26 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.23 archive Cloud Service Mesh 1.22 archive Cloud Service Mesh 1.21 archive Cloud Service Mesh 1.20 archive Anthos Service Mesh 1.19 archive
Home
Documentation
Networking
Cloud Service Mesh
v1.21
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Resolving security issues in Cloud Service Mesh
Note: This guide only supports Cloud Service Mesh with Istio APIs and does
not support Google Cloud APIs. For more information see,
Cloud Service Mesh overview .
This section explains common Cloud Service Mesh with Istio APIs problems and
how to resolve them. If you need additional assistance, see
Getting support .
In Cloud Service Mesh, Cloud Service Mesh certificate authority or Istiod issues certificates to
workloads across all clusters in the mesh. Authentication (mTLS for example) and
Authorization policies (allow/deny for example) are pushed to each cluster.
These policies determine which workloads can communicate and how.
TLS Issues
The following sections explain how to resolve TLS-related problems in
Cloud Service Mesh.
The examples in this section use the variable ${CTX} , which is the context
name in the
default Kubernetes configuration file
that you use to access the cluster. Set the ${CTX} variable like the following example:
export CTX=gke_ PROJECT_ID _ CLUSTER_LOCATION _ CLUSTER_NAME
Verify TLS enforcement
Verify that plain-text requests are disallowed for a service, when the service
requires TLS connections:
kubectl exec SOURCE_POD -n SOURCE_NAMESPACE -c \
SOURCE_CONTAINER -- curl -v DESTINATION_URL
Assuming the service requires TLS connections, the preceding plain-text request
should fail, resulting in output similar to the following:
curl: (56) Recv failure: Connection reset by peer command terminated with exit code 56
Check mTLS certificates
When mTLS is enabled, check the workload's mTLS certificate by viewing
the X-Forwarded-Client-Cert header. To do this, use the following steps:
Deploy the httpbin sample service, which can display the headers that it
receives.
Use curl to view the X-Forwarded-Client-Cert header:
kubectl exec --context=${CTX} SOURCE_POD -n SOURCE_NAMESPACE -c \
SOURCE_CONTAINER -- curl http://httpbin.sample:8000/headers -s | \
grep X-Forwarded-Client-Cert
The X-Forwarded-Client-Cert header shows the mTLS certificates information, like the following example:
X-Forwarded-Client-Cert": "By=spiffe://lt-multicluster-t2-5-15-2020.svc.id.goog/ns/sample/sa/httpbin;Hash=0781d68adfdab85b08b6758ed502f352464e81166f065cc6acde9433337b4494;Subject=\"OU=istio_v1_cloud_workload,O=Google LLC,L=Mountain View,ST=California,C=US\";URI=spiffe://lt-multicluster-t2-5-15-2020.svc.id.goog/ns/sample/sa/sleep
Alternatively, use openssl on the sidecar to view the entire certificate chain:
kubectl debug --image istio/base --target istio-proxy -it --context=${CTX} SOURCE_POD \
-n SOURCE_NAMESPACE -- openssl s_client -alpn istio -showcerts -connect httpbin.sample:8000
The output will display the certificate chain. If you are using Mesh CA, verify
the root certificate CN contains istio_v1_cloud_workload_root-signer-... . If
you are using Istiod as the certificate authority, verify that the root
certificate is set with O = <var>YOUR_TRUST_DOMAIN</var> .
TLS bad certificate errors in the Istiod logs
If you see TLS handshake bad certificate errors in the logs, it might indicate
that Istiod is failing to establish a TLS connection to a service.
You can use the regular expression string TLS handshake error.*bad certificate
to find these errors in the logs.
These errors are usually informational and transient. However, if they persist,
they might indicate a problem in your system.
Verify that your istio-sidecar-injector MutatingWebhookConfiguration has a CA bundle.
The sidecar injector webhook (which is used for automatic sidecar injection)
requires a CA bundle to establish secure connections with the API server and
Istiod. This CA bundle is patched into the configuration by istiod, but can
sometimes be overwritten (for example, if you reapply the webhook
configuration).
Verify the presence of the CA bundle:
Note: If you have installed more than one control plane, then specify a
specific revision.
kubectl get mutatingwebhookconfiguration -l app=sidecar-injector -o=jsonpath='{.items[0].webhooks[0].clientConfig.caBundle}'
If the output is not empty, the CA bundle is configured. If the CA bundle is
missing, restart istiod to cause it to rescan the webhook and reinstall
the CA bundle.
Authorization policy denial logging
For information about authorization policy denial logging, see
Denial logging .
Authorization policies are not enforced
If you observe symptoms of authorization policies not being enforced, use the
following command to verify them:
kubectl exec --context=${CTX} -it SOURCE_POD -n SOURCE_NAMESPACE \
-c SOURCE_CONTAINER -- curl DESTINATION_URL
In the output, access denied messages indicate that authorization policies are
properly enforced, like the following:
RBAC: access denied
If you confirm that authorization policies are not enforced, deny access to the
namespace. The following example denies access to the namespace named authz-ns :
kubectl apply --context=${CTX} -f - <<EOF
apiVersion: security.istio.io/v1beta1
kind: AuthorizationPolicy
metadata:
name: deny-authz-ns
namespace: authz-ns
spec:
{}
EOF
'customresourcedefinitions.apiextensions.k8s.io is forbidden' error in Istiod logs
You might see errors similar to the following:
error failed to list CRDs: customresourcedefinitions.apiextensions.k8s.io is forbidden: User "system:serviceaccount:istio-system:istiod-service-account" cannot list resource "customresourcedefinitions" in API group "apiextensions.k8s.io" at the cluster scope
You can use the regular expression string /error.*cannot list resource/ to
find these errors in the logs.
This error can occur when your Istiod deployment lacks the correct IAM binding
or has insufficient RBAC permissions to read a custom resource.
Check if you are missing an IAM binding in your account. First, ensure you
have correctly
set credentials and permissions .
Then, check that the IAM binding is present using the following command. In
this example, PROJECT_ID is the output of gcloud config get-value project and
PROJECT_NUMBER is the output of gcloud projects list --filter="project_id=${PROJECT_ID}" --format="value(project_number)" :
gcloud projects add-iam-policy-binding ${PROJECT_ID} --member "serviceAccount:service-${PROJECT_NUMBER}@gcp-sa-meshdataplane.iam.gserviceaccount.com" --role "roles/meshdataplane.serviceAgent"
Check that your RBAC rules are installed correctly.
If the RBAC rules are missing, rerun
asmcli install
to recreate them.
If the RBAC rules are present and the errors persist, check that the
ClusterRoleBindings and RoleBindings are attaching the RBAC rules to the
correct kubernetes Service Account. Also, verify that your istiod deployment is
using the specified service account.
serverca process errors in Istiod logs
You might see errors similar to the following:
Authentication failed: Authenticator ClientCertAuthenticator at index 0 got error
You can use the regular expression string /serverca.*Authentication failed:.*JWT/ to
find these errors in the logs.
This error can occur when the JWT issuer is misconfigured, a client is using an
expired token, or some other security issue is preventing a connection from
authenticating to istiod correctly.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
