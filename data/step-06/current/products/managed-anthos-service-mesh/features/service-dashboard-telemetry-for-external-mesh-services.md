---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.454Z"
product_name: "Managed Anthos Service Mesh"
product_slug: "managed-anthos-service-mesh"
feature_name: "Service dashboard telemetry for external mesh services"
feature_slug: "service-dashboard-telemetry-for-external-mesh-services"
latest_feature_date: "2023-04-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies"
  - "https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial"
  - "https://docs.cloud.google.com/service-mesh/docs/canonical-service"
  - "https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices"
keywords:
  - "dashboard"
  - "telemetry"
  - "for"
  - "external"
  - "mesh"
  - "services"
  - "the"
  - "can"
---

# Service dashboard telemetry for external mesh services

Product: Managed Anthos Service Mesh
Coverage: MEDIUM

## Step 02 Summary

The Service dashboard can display telemetry from external mesh services that have a canonical service label; The Service dashboard can display telemetry from external mesh services that have a canonical service label.

## Extended Definition

The Service dashboard can display telemetry from external mesh services that have a canonical service label; The Service dashboard can display telemetry from external mesh services that have a canonical service label.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies)
- [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)
- [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service)
- [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices)

## Supporting Pages

### "Configuring audit policies for your services \_|\_ Cloud Service Mesh \_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Turn on RBAC debug logging with the following command: kubectl exec POD NAME -n NAMESPACE -c istio-proxy -- pilot-agent request POST 'logging?rbac=debug' Send some requests, and then check logs for the Pod with the kubectl logs command: kubectl logs POD NAME -n NAMESPACE -c istio-proxy What's next Learn about security in Cloud Service Mesh Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The audit log now logs all requests: If you want to restrict the audit policy back down to ProductPage and Ratings, you can delete the audit-all policy: kubectl delete authorizationpolicy audit-all -n default Troubleshooting If you don't see any audit logs after enabling an audit policy, here are a few things you can check: Make sure there is traffic for the time period specified in Logs Explorer.
- When you run asmcli install , include the following option: --option audit-authorizationpolicy For example: ./asmcli install \ --project id PROJECT ID \ --cluster name CLUSTER NAME \ --cluster location CLUSTER LOCATION \ --ca mesh ca \ --output dir DIR PATH \ --enable all \ --option audit-authorizationpolicy Be sure to specify any other overlay files that you need to configure Cloud Service Mesh.
- When you run asmcli install , include the following option: --option audit-authorizationpolicy For example: ./asmcli install \ --project id PROJECT ID \ --cluster name CLUSTER NAME \ --cluster location CLUSTER LOCATION \ --ca mesh ca \ --output dir DIR PATH \ --enable all \ --option audit-authorizationpolicy Be sure to specify any other overlay files that you need to configure Cloud Service Mesh.

### "Using Cloud Service Mesh egress gateways on GKE clusters: Tutorial \_|\_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)
- Source ID: `site-docs-reference`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Sidecar resource for the team-y namespace: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : Sidecar metadata : name : default namespace : team-y spec : outboundTrafficPolicy : mode : REGISTRY ONLY egress : - hosts : - 'istio-egress/ ' - 'team-y/ ' EOF Deploy the test application to the team-y namespace: kubectl -n team-y create -f ./test.yaml Register a second external host and export it to the team-x and the team-y namespace: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : ServiceEntry metadata : name : httpbin-org-ext namespace : istio-egress labels : Show this service and its telemetry in the Cloud Service Mesh page of the Google Cloud console service.istio.io/canonical-name : httpbin.org spec : hosts : - httpbin.org ports : - number : 80 name : http protocol : HTTP - number : 443 name : tls protocol : TLS resolution : DNS location : MESH EXTERNAL exportTo : - 'istio-egress' - 'team-x' - 'team-y' EOF Create a virtual service to route traffic to httpbin.org through the egress gateway: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : VirtualService metadata : name : httpbin-org-through-egress-gateway namespace : istio-egress spec : hosts : - httpbin.org gateways : - istio-egress/egress-gateway - mesh http : - match : - gateways : - mesh port : 80 route : - destination : host : istio-egressgateway.istio-egress.svc.cluster.local subset : target-egress-gateway-mTLS port : number : 80 weight : 100 - match : - gateways : - istio-egress/egress-gateway port : 80 route : - destination : host : httpbin.org port : number : 80 weight : 100 exportTo : - 'istio-egress' - 'team-x' - 'team-y' EOF Run istioctl analyze to check for configuration errors: ${ ISTIOCTL } analyze -n istio-egress --revision REVISION You see: ✔ No validation issues found when analyzing namespace: istio-egress.
- Create a service entry for the GKE metadata server: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : ServiceEntry metadata : name : metadata-google-internal namespace : istio-egress labels : Show this service and its telemetry in the Cloud Service Mesh page of the Google Cloud console service.istio.io/canonical-name : metadata.google.internal spec : hosts : - metadata.google.internal ports : - number : 80 name : http protocol : HTTP - number : 443 name : tls protocol : TLS resolution : DNS location : MESH EXTERNAL exportTo : - 'istio-egress' - 'team-x' EOF Also create a service entry for private.googleapis.com and storage.googleapis.com: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : ServiceEntry metadata : name : private-googleapis-com namespace : istio-egress labels : Show this service and its telemetry in the Cloud Service Mesh page of the Google Cloud console service.istio.io/canonical-name : googleapis.com spec : hosts : - private.googleapis.com - storage.googleapis.com ports : - number : 80 name : http protocol : HTTP - number : 443 name : tls protocol : TLS resolution : DNS location : MESH EXTERNAL exportTo : - 'istio-egress' - 'team-x' EOF Verify that the Kubernetes service account is correctly configured to act as the Google service account: kubectl -n team-x exec -it $( kubectl -n team-x get pod -l app = test \ -o jsonpath ={ .items..metadata.name } ) -c test -- gcloud auth list You see the Google service account listed as the active and only identity.
- Use a single shared destination rule for all external hosts. cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : DestinationRule metadata : name : target-egress-gateway namespace : istio-egress spec : host : istio-egressgateway.istio-egress.svc.cluster.local subsets : - name : target-egress-gateway-mTLS trafficPolicy : tls : mode : ISTIO MUTUAL EOF Create a ServiceEntry in the egress namespace to explicitly register example.com in the mesh's service registry for the team-x namespace: cat <<EOF kubectl apply -f - apiVersion : networking.istio.io/v1beta1 kind : ServiceEntry metadata : name : example-com-ext namespace : istio-egress labels : Show this service and its telemetry in the Cloud Service Mesh page of the Google Cloud console service.istio.io/canonical-name : example.com spec : hosts : - example.com ports : - number : 80 name : http protocol : HTTP - number : 443 name : tls protocol : TLS resolution : DNS location : MESH EXTERNAL exportTo : - 'team-x' - 'istio-egress' EOF Configuring different egress routing for each namespace The exportTo property controls which namespaces can use the service entry.
- Enable the Cloud DNS API: gcloud services enable dns.googleapis.com Create a private DNS zone, a CNAME , and A records so that nodes and workloads can connect to Google APIs and services using Private Google Access and the private.googleapis.com hostname: gcloud dns managed-zones create private-google-apis \ --description "Private DNS zone for Google APIs" \ --dns-name googleapis.com \ --visibility private \ --networks vpc-network gcloud dns record-sets transaction start --zone private-google-apis gcloud dns record-sets transaction add private.googleapis.com. \ --name " .googleapis.com" \ --ttl 300 \ --type CNAME \ --zone private-google-apis gcloud dns record-sets transaction add "199.36.153.8" \ "199.36.153.9" "199.36.153.10" "199.36.153.11" \ --name private.googleapis.com \ --ttl 300 \ --type A \ --zone private-google-apis gcloud dns record-sets transaction execute --zone private-google-apis Configuring private access to Container Registry Create a private DNS zone, a CNAME and an A record so that nodes can connect to Container Registry using Private Google Access and the gcr.io hostname: gcloud dns managed-zones create private-gcr-io \ --description "private zone for Container Registry" \ --dns-name gcr.io \ --visibility private \ --networks vpc-network gcloud dns record-sets transaction start --zone private-gcr-io gcloud dns record-sets transaction add gcr.io. \ --name " .gcr.io" \ --ttl 300 \ --type CNAME \ --zone private-gcr-io gcloud dns record-sets transaction add "199.36.153.8" "199.36.153.9" "199.36.153.10" "199.36.153.11" \ --name gcr.io \ --ttl 300 \ --type A \ --zone private-gcr-io gcloud dns record-sets transaction execute --zone private-gcr-io Create a private GKE cluster Find the external IP address of your Cloud Shell so that you can add it to the list of networks that are allowed to access your cluster's API server: SHELL IP = $( dig TXT -4 +short @ns1.google.com o-o.myaddr.l.google.com ) After a period of inactivity, the external IP address of your Cloud Shell VM can change.

### Canonical Service \_|\_ Cloud Service Mesh \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- You can determine the full scope of a Canonical Service from the group of workloads that define it including: Hostnames and IP addresses Network(s) Network and security policies Routing and load balancing VM and container images Physical or virtual infrastructure Geographic region(s) CI/CD system Source code Telemetry Service level objectives and alerts You can view dashboards that display these operational details for each service on the Services page .
- Cloud Service Mesh 1.6.8 introduces support for Canonical Services, a conceptual and architectural model for representing your production workloads as a singular service that is easier to observe and manage.
- Canonical Services exist within a single Mesh, which in Cloud Service Mesh means that they are also unique within a fleet and a Google Cloud Project (all of which are one-to-one with Mesh).
- Therefore, the unique identity of a Canonical Service is determined by: mesh id + namespace + canonical name.

### "Canonical Service Best Practices \_|\_ Cloud Service Mesh \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- While you could define a Canonical Service to group several conceptually different microservices together, the Service Dashboards wouldn't provide their full value.The Service Dashboards would display an aggregation of dissimilar components which may individually be performing and configured very differently.
- Prefer Cloud Monitoring custom dashboards for arbitrary aggregations Rather than artificially bloating Canonical Services into larger scopes for aggregate data, use Cloud Monitoring dashboards to create higher-level views of multiple logical services at once.
- For the best experience with Cloud Service Mesh Service Dashboards, consider the following standard practices when setting up your services: Reserve a unique service [namespace, name] across the whole mesh.
- Important: Make sure that logically different services (for example, payment accounting API and payment transaction API) don't use the same [namespace, name] pair (e.g., "payments/api") because they inadvertently join into one Service Dashboard.

