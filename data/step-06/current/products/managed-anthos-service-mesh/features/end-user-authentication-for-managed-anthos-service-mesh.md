---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:49.456Z"
product_name: "Managed Anthos Service Mesh"
product_slug: "managed-anthos-service-mesh"
feature_name: "End-user authentication for managed Anthos Service Mesh"
feature_slug: "end-user-authentication-for-managed-anthos-service-mesh"
latest_feature_date: "2022-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/supported-features-managed"
  - "https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed"
  - "https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run"
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls"
keywords:
  - "end"
  - "user"
  - "authentication"
  - "for"
  - "managed"
  - "anthos"
  - "mesh"
  - "is"
---

# End-user authentication for managed Anthos Service Mesh

Product: Managed Anthos Service Mesh
Coverage: MEDIUM

## Step 02 Summary

End-user authentication is available for managed Anthos Service Mesh; End-user authentication is available for managed Anthos Service Mesh.

## Extended Definition

End-user authentication is available for managed Anthos Service Mesh; End-user authentication is available for managed Anthos Service Mesh.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed)
- [https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run](https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls](https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls)

## Supporting Pages

### "Supported features using Istio APIs (managed control plane) \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
- Source ID: `site-docs-reference`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Region Location africa-south1 Johannesburg asia-east1 Taiwan asia-east2 Hong Kong asia-northeast1 Tokyo, Japan asia-northeast2 Osaka, Japan asia-northeast3 South Korea asia-south1 Mumbai, India asia-south2 Delhi, India asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney, Australia australia-southeast2 Melbourne, Australia europe-central2 Poland europe-north1 Finland europe-north2 Stockholm europe-southwest1 Spain europe-west1 Belgium europe-west2 England europe-west3 Frankfurt, Germany europe-west4 Netherlands europe-west6 Switzerland europe-west8 Milan, Italy europe-west9 France europe-west10 Berlin, Germany europe-west12 Turin, Italy me-central1 Doha me-central2 Dammam, Saudi Arabia me-west1 Tel Aviv northamerica-northeast1 Montreal, Canada northamerica-northeast2 Toronto, Canada northamerica-south1 Mexico southamerica-east1 Brazil southamerica-west1 Chile us-central1 Iowa us-east1 South Carolina us-east4 Northern Virginia us-east5 Ohio us-south1 Dallas us-west1 Oregon us-west2 Los Angeles us-west3 Salt Lake City us-west4 Las Vegas User interface Feature Managed (TD) Managed (istiod) Cloud Service Mesh dashboards in the Google Cloud console Cloud Monitoring Cloud Logging Tooling Feature Managed (TD) Managed (istiod) gcloud beta container fleet mesh debug tool Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Envoy deployments Feature Managed (TD) Managed (istiod) Sidecars Ingress gateway Egress directly out from sidecars Egress using egress gateways CRD support Feature Managed (TD) Managed (istiod) Sidecar resource Service entry resource Percentage, fault injection, path matching, redirects, retries, rewriting, timeout, retry, mirroring, header manipulation, and CORS routing rules WasmPlugin API Istio Operator Load balancer for the Istio ingress gateway Feature Managed (TD) Managed (istiod) Third-party external load balancer Google Cloud Internal load balancer Service mesh cloud gateway Feature Managed (TD) Managed (istiod) Service mesh cloud gateway Kubernetes Gateway API Feature Managed (TD) Managed (istiod) Kubernetes Gateway API Load balancing policies Feature Managed (TD) Managed (istiod) Round robin Least connections Random Passthrough Consistent hash Locality GCPTrafficDistributionPolicy GCPBackendPolicy Load balancing modes Feature Managed (TD) Managed (istiod) RATE UTILIZATION CUSTOM METRICS IN-FLIGHT (Preview) For more information about balancing modes, see the Backend services overview .
- Feature Managed (TD) Managed (istiod) IAP integration End-user authentication Dry-run mode Denial logging Audit policies (not supported) Authorization policy Feature Managed (TD) Managed (istiod) Authorization v1beta1 policy CUSTOM Authorization Policy § Peer authentication Feature Managed (TD) Managed (istiod) Auto-mTLS mTLS PERMISSIVE mode mTLS STRICT mode mTLS DISABLE mode Request authentication Feature Managed (TD) Managed (istiod) JWT authentication (Note 1) JWT Claim Based Routing JWT Copy Claim to Headers Notes: Third-party JWT is enabled by default.
- Telemetry Metrics Feature Managed (TD) Managed (istiod) Cloud Monitoring (HTTP in-proxy metrics) Cloud Monitoring (TCP in-proxy metrics) Prometheus metrics export to Grafana (Envoy metrics only) Prometheus metrics export to Kiali Google Cloud Managed Service for Prometheus, not including the Cloud Service Mesh dashboard Istio Telemetry API † Custom adapters/backends, in or out of process Arbitrary telemetry and logging backends † The TRAFFIC DIRECTOR control plane supports a subset of Istio telemetry API used to configure access logs and trace .

### "Enable optional features on managed control plane \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-managed)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- End user authentication You can configure managed Cloud Service Mesh user authentication for browser-based end-user authentication and access control to your deployed workloads.
- The following example shows a ConfigMap setting the minimum TLS version for workloads to 1.3: apiVersion : v1 kind : ConfigMap metadata : name : istio- release-channel namespace : istio-system data : mesh : - meshMTLS: minProtocolVersion: TLSV1 3 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Configure the minimum TLS version for your workloads If you directly onboarded to Cloud Service Mesh with a managed TRAFFIC DIRECTOR control plane implementation , then you cannot change this setting.
- For more information, see Configuring Cloud Service Mesh user authentication .

### Configure Cloud Service Mesh for Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run](https://docs.cloud.google.com/service-mesh/docs/configure-cloud-service-mesh-for-cloud-run)
- Source ID: `site-docs-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Next steps Explore common Cloud Run networking configurations for public and private networking Configure private networking for Cloud Run Set up Envoy proxies with HTTP services Route traffic from Cloud Run Services to Cloud Service Mesh workloads on GKE Route traffic from Cloud Service Mesh workloads to Cloud Run Services Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To create a Cloud DNS record in an exclusive zone, run the following commands: Create a private managed DNS zone in Cloud DNS for a service mesh. gcloud dns managed-zones create MESH NAME \ --description = "Domain for DOMAIN NAME service mesh routes" \ --dns-name = DOMAIN NAME . \ --networks = VPC NETWORK NAME \ --visibility = private Create a DNS record within the newly created private managed zone.
- Required roles To get the permissions that you need to configure and deploy Cloud Run services, ask your administrator to grant you the following IAM roles: Cloud Run Developer ( roles/run.developer ) on the Cloud Run service Service Account User ( roles/iam.serviceAccountUser ) on the service identity The Cloud Run client's service account must also have the following roles: Traffic Director Client ( roles/trafficdirector.client ) to access the service routing APIs Cloud Trace Agent ( roles/cloudtrace.agent ) to enable tracing For a list of IAM roles and permissions that are associated with Cloud Run, see Cloud Run IAM roles and Cloud Run IAM permissions .
- Call Compute Engine backend from Cloud Run To deploy a Compute Engine and Cloud Service Mesh service route using managed instance groups as backends, configure the Compute Engine-based HTTP server in Cloud Service Mesh .

### Cloud Service Mesh by example: mTLS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls](https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls)
- Source ID: `site-docs-reference`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Find and delete authentication policies For a list of all the PeerAuthentication policies in the service mesh: kubectl get peerauthentication --all-namespaces The output is similar to the following: NAMESPACE NAME MODE AGE ad namespace-policy STRICT 17m cart namespace-policy STRICT 17m checkout namespace-policy STRICT 17m currency namespace-policy STRICT 17m email namespace-policy STRICT 17m frontend namespace-policy STRICT 17m loadgenerator namespace-policy STRICT 17m payment namespace-policy STRICT 17m product-catalog namespace-policy STRICT 17m recommendation namespace-policy STRICT 17m shipping namespace-policy STRICT 17m Delete the authentication policy from all of the Online Boutique namespaces: for ns in ad cart checkout currency email frontend loadgenerator payment \ product - catalog recommendation shipping ; do kubectl delete peerauthentication - n $ ns namespace - policy done ; Expected output: peerauthentication.security.istio.io "namespace-policy" deleted peerauthentication.security.istio.io "namespace-policy" deleted peerauthentication.security.istio.io "namespace-policy" deleted peerauthentication.security.istio.io "namespace-policy" deleted peerauthentication.security.istio.io "namespace-policy" deleted peerauthentication.security.istio.io "namespace-policy" deleted peerauthentication.security.istio.io "namespace-policy" deleted peerauthentication.security.istio.io "namespace-policy" deleted peerauthentication.security.istio.io "namespace-policy" deleted peerauthentication.security.istio.io "namespace-policy" deleted peerauthentication.security.istio.io "namespace-policy" deleted Access the Online Boutique using the external IP address of the frontend-external service, and refresh the page.
- There are various supported setup methods: Fleet API and a managed control plane on Google Cloud asmcli and an unmanaged, in-cluster control plane off Google Cloud Clone the repository: git clone https://github.com/GoogleCloudPlatform/anthos-service-mesh-samples cd anthos-service-mesh-samples Deploy an ingress gateway Set the current context for kubectl to the cluster: Note: Use --region instead of --zone , if the cluster is a regional cluster. gcloud container clusters get-credentials CLUSTER NAME \ --project= PROJECT ID \ --zone= CLUSTER LOCATION Create a namespace for your ingress gateway: kubectl create namespace asm-ingress Enable the namespace for injection.
- Delete the authentication policy: kubectl delete peerauthentication -n frontend frontend Expected output: peerauthentication.security.istio.io "frontend" deleted Delete the destination rule: kubectl delete destinationrule -n frontend frontend Expected output: destinationrule.networking.istio.io "frontend" deleted Enforcing mesh-wide mTLS To prevent all your services in the mesh from accepting plaintext traffic, set a mesh-wide PeerAuthentication policy with the mTLS mode set to STRICT .
- Enforce mesh-wide mTLS: kubectl apply -f - <<EOF apiVersion: "security.istio.io/v1beta1" kind: "PeerAuthentication" metadata: name: "mesh-wide" namespace: "istio-system" spec: mtls: mode: STRICT EOF Expected output: peerauthentication.security.istio.io/mesh-wide created Access the Online Boutique using the external IP address of the frontend-external service, and refresh the page.

