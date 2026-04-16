---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.973Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Ingress HTTP access logging"
feature_slug: "ingress-http-access-logging"
latest_feature_date: "2020-04-10"
deprecation_date: "2020-05-12"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/elk-stack"
keywords:
  - "ingress"
  - "http"
  - "access"
  - "logging"
  - "newly"
  - "created"
  - "gke"
  - "resources"
---

# Ingress HTTP access logging

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

HTTP access logging for newly created GKE Ingress resources is being deprecated; Ingress access logging became a configurable feature named logging and can be toggled through BackendConfig; deprecated on 2020-05-12.

## Extended Definition

HTTP access logging for newly created GKE Ingress resources is being deprecated; Ingress access logging became a configurable feature named logging and can be toggled through BackendConfig; deprecated on 2020-05-12.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/elk-stack](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/elk-stack)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use the following tools to check inbound traffic to your resources running in Google Cloud: VPC Flow Logs for visibility into network throughput and performance Cloud Logging to search and analyze logging data and events from Google Cloud services and applications configured to send logs Firewall Rules Logging to audit, verify, and analyze the effects of your firewall rules Security Command Center for visibility into security findings indicating suspicious network activity Your application logs High GDC (VMware) Description Severity A security issue was discovered that impacts Multi-Cluster Gateway (MCG), a GKE feature that allows customers to load balance traffic across multiple clusters.
- Check if your GKE clusters are using ingress-nginx by using one of the following commands: Check an individual cluster: kubectl get pods --all-namespaces --selector app.kubernetes.io/name = ingress-nginx Check multiple clusters at once using a Cloud Asset Inventory resource search query : gcloud asset search-all-resources \ --scope = 'organizations/ ORGANIZATION ID ' \ --asset-types = 'k8s.io/Pod' \ --query = 'labels."app.kubernetes.io/name"="ingress-nginx"' Replace ORGANIZATION ID with your organization resource ID.
- This issue affects the following GKE versions: 1.18.19-gke.1400 to 1.18.20-gke.5100 (exclusive) 1.19.10-gke.700 to 1.19.14-gke.300 (exclusive) 1.20.6-gke.700 to 1.20.9-gke.900 (exclusive) 1.21 to 1.21.1-gke.2700 (exclusive) If you do not configure Google Cloud Armor on your Ingress resources via the BackendConfig , then this issue does not affect your clusters.
- None GCP-2023-047 Published: 2023-12-14 GKE Description Severity An attacker who has compromised the Fluent Bit logging container could combine that access with high privileges required by Cloud Service Mesh (on clusters that have enabled it) to escalate privileges in the cluster.

### "Set up an external Application Load Balancer with Ingress \_|\_ GKE networking\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Inspect the Ingress resource to find an event with an error message similar to the following: Error during GC: error running load balancer garbage collection routine: googleapi: Error 400: The url map resource 'projects/ project-id /global/urlMaps/k8s2-um-tlw9rhgp-default-my-ingress-9ifnni82' is already being used by 'projects/ project-id /global/targetHttpsProxies/k8s2-um-tlw9rhgp-default-my82-target-proxy', resourceInUseByAnotherResource In the preceding error message, k8s2-um-tlw9rhgp-default-my82-target-proxy is a manually created target https proxy that is still referencing the URL map k8s2-um-tlw9rhgp-default-my-ingress-9ifnni82 which was created and managed by an Ingress controller.
- Version: 1.0.0 Hostname: web-6498765b79-fq5q5 You can visit Load Balancing on the Google Cloud console and inspect the networking resources created by the GKE Ingress controller. (Optional) Configuring a static IP address When you expose a web server on a domain name, you need the external IP address of an application to be a static IP that does not change.
- These manually created frontend resources (both forwarding rule and target proxy) must be deleted before proceeding with the deletion of the Ingress.
- To make your HTTP(S) web server application publicly accessible, you must create an Ingress resource.

### Set up Elastic Stack on GKE \_|\_ Kubernetes Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/elk-stack](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/elk-stack)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Apply this manifest to your cluster: kubectl apply -f max-map-count-setter-ds.yaml Review the following manifest: apiVersion : elasticsearch.k8s.elastic.co/v1 kind : Elasticsearch metadata : name : elasticsearch namespace : elastic-system spec : version : "8.9.0" volumeClaimDeletePolicy : DeleteOnScaledownOnly podDisruptionBudget : spec : minAvailable : 2 selector : matchLabels : elasticsearch.k8s.elastic.co/cluster-name : elasticsearch nodeSets : - name : default config : node.roles : [ "master" , "data" , "ingest" , "ml" , "remote cluster client" ] podTemplate : metadata : labels : app.kubernetes.io/name : elasticsearch app.kubernetes.io/version : "8.9.0" app.kubernetes.io/component : "elasticsearch" app.kubernetes.io/part-of : "elk" spec : nodeSelector : cloud.google.com/compute-class : "Balanced" initContainers : - name : max-map-count-check command : - sh - -c - while true; do mmc=$(cat /proc/sys/vm/max map count); if test ${mmc} -eq 262144; then exit 0; fi; sleep 1; done resources : requests : cpu : 10m memory : 16Mi ephemeral-storage : 16Mi limits : cpu : 10m memory : 16Mi ephemeral-storage : 16Mi containers : - name : elasticsearch resources : requests : cpu : 990m memory : 4080Mi ephemeral-storage : 1008Mi limits : cpu : 1000m memory : 4080Mi ephemeral-storage : 1008Mi env : - name : ES JAVA OPTS value : "-Xms2g -Xmx2g" count : 3 volumeClaimTemplates : - metadata : name : elasticsearch-data # Do not change this name unless you set up a volume mount for the data path. spec : accessModes : - ReadWriteOnce resources : requests : storage : 2Gi storageClassName : standard-rwo This manifest defines an Elasticsearch cluster with the following fields: initContainers : waits for the virtual memory host's kernel settings to change. podDisruptionBudget : specifies that the cluster won't be destroyed during the Pods' defragmentation process. config.node.roles : Elasticsearch node roles configuration.
- Review the following manifest: apiVersion : kibana.k8s.elastic.co/v1 kind : Kibana metadata : name : kibana namespace : elastic-system spec : version : "8.9.0" count : 1 elasticsearchRef : name : elasticsearch namespace : elastic-system http : tls : selfSignedCertificate : disabled : true config : server.publicBaseUrl : https://elk.BASE DOMAIN xpack.reporting.kibanaServer.port : 5601 xpack.reporting.kibanaServer.protocol : http xpack.reporting.kibanaServer.hostname : kibana-kb-http.elastic-system.svc xpack.fleet.agents.elasticsearch.hosts : [ "https://elasticsearch-es-http.elastic-system.svc:9200" ] xpack.fleet.agents.fleet server.hosts : [ "https://fleet-server-agent-http.elastic-system.svc:8220" ] xpack.fleet.packages : - name : system version : latest - name : elastic agent version : latest - name : fleet server version : latest - name : kubernetes version : latest xpack.fleet.agentPolicies : - name : Fleet Server on ECK policy id : eck-fleet-server namespace : default monitoring enabled : - logs - metrics unenroll timeout : 900 package policies : - name : fleet server-1 id : fleet server-1 package : name : fleet server - name : Elastic Agent on ECK policy id : eck-agent namespace : default monitoring enabled : - logs - metrics unenroll timeout : 900 package policies : - package : name : system name : system-1 - package : name : kubernetes name : kubernetes-1 podTemplate : metadata : labels : app.kubernetes.io/name : kibana app.kubernetes.io/version : "8.9.0" app.kubernetes.io/component : "ui" app.kubernetes.io/part-of : "elk" spec : containers : - name : kibana resources : requests : memory : 1Gi cpu : 500m ephemeral-storage : 1Gi limits : memory : 1Gi cpu : 500m ephemeral-storage : 1Gi This manifest describes a Kibana custom resource that configures agent policies for the fleet server and agents.
- Review the following manifest: apiVersion : agent.k8s.elastic.co/v1alpha1 kind : Agent metadata : name : fleet-server namespace : elastic-system spec : version : 8.9.0 kibanaRef : name : kibana namespace : elastic-system elasticsearchRefs : - name : elasticsearch namespace : elastic-system mode : fleet fleetServerEnabled : true policyID : eck-fleet-server deployment : replicas : 1 podTemplate : metadata : labels : app.kubernetes.io/name : fleet-server app.kubernetes.io/version : "8.9.0" app.kubernetes.io/component : "agent" app.kubernetes.io/part-of : "elk" spec : containers : - name : agent resources : requests : memory : 512Mi cpu : 250m ephemeral-storage : 10Gi limits : memory : 512Mi cpu : 250m ephemeral-storage : 10Gi volumes : - name : "agent-data" ephemeral : volumeClaimTemplate : spec : accessModes : [ "ReadWriteOnce" ] storageClassName : "standard-rwo" resources : requests : storage : 10Gi serviceAccountName : fleet-server automountServiceAccountToken : true securityContext : runAsUser : 0 This manifest describes an Elastic Agent that configures a fleet server with ECK.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : networking.gke.io/v1beta1 kind : FrontendConfig metadata : name : elastic-stack namespace : elastic-system spec : redirectToHttps : enabled : true responseCodeName : MOVED PERMANENTLY DEFAULT --- apiVersion : networking.gke.io/v1 kind : ManagedCertificate metadata : name : elastic-stack namespace : elastic-system spec : domains : - elk.BASE DOMAIN --- apiVersion : networking.k8s.io/v1 kind : Ingress metadata : name : kibana namespace : elastic-system annotations : networking.gke.io/managed-certificates : elastic-stack networking.gke.io/v1beta1.FrontendConfig : elastic-stack kubernetes.io/ingress.global-static-ip-name : elastic-stack kubernetes.io/ingress.class : gce spec : defaultBackend : service : name : kibana-kb-http port : number : 5601 This manifest describes a ManagedCertificate that provisions an SSL certificate to establish the TLS connection.

