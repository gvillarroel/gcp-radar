---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.797Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Managed Cloud Service Mesh on private GKE clusters with private control plane"
feature_slug: "managed-cloud-service-mesh-on-private-gke-clusters-with-private-control-plane"
latest_feature_date: "2021-11-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane"
  - "https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial"
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview"
keywords:
  - "managed"
  - "mesh"
  - "on"
  - "private"
  - "gke"
  - "clusters"
  - "with"
  - "control"
---

# Managed Cloud Service Mesh on private GKE clusters with private control plane

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Managed Cloud Service Mesh supports private GKE clusters with a private control plane; Managed Cloud Service Mesh supports private GKE clusters with a private control plane.

## Extended Definition

Managed Cloud Service Mesh supports private GKE clusters with a private control plane; Managed Cloud Service Mesh supports private GKE clusters with a private control plane.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview](https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview)

## Supporting Pages

### "Provision a managed Cloud Service Mesh control plane on GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- Source ID: `site-docs-root`
- Final score: 380
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Provision a managed Cloud Service Mesh control plane on GKE Note: This guide only supports Cloud Service Mesh with Istio APIs and does not support Google Cloud APIs.
- Therefore, managed Cloud Service Mesh with the TRAFFIC DIRECTOR implementation does not support clusters with GKE Sandbox enabled.
- To disable the managed data plane for a namespace: kubectl annotate --overwrite namespace NAMESPACE \ mesh.cloud.google.com/proxy='{"managed":"false"}' To disable the managed data plane for a pod: kubectl annotate --overwrite pod POD NAME \ mesh.cloud.google.com/proxy='{"managed":"false"}' Enable maintenance windows for the managed data plane If you have a GKE maintenance window configured, active upgrades will commence at the start of the next available maintenance window and continue without pause until all managed pods have been updated (usually 12 hours).
- Note: You can still enable optional features without using the IstioOperator API, see Enabling optional features on managed Cloud Service Mesh . - Using Certificate Authority Service (CA Service) requires configuring Cloud Service Mesh per cluster , and is not supported when using the fleet-default configuration in GKE Enterprise.

### "Using Cloud Service Mesh egress gateways on GKE clusters: Tutorial \_|\_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)
- Source ID: `site-docs-reference`
- Final score: 312
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Download credentials so that you can connect to the cluster with kubectl: gcloud container clusters get-credentials cluster1 Verify that the gateway nodes have the correct taint: kubectl get nodes -l cloud.google.com/gke-nodepool = gateway -o yaml \ -o = custom-columns = 'name:metadata.name,taints:spec.taints[?(@.key=="dedicated")]' The output is similar to the following: name taints gke-cluster1-gateway-9d65b410-cffs map[effect:NoSchedule key:dedicated value:gateway] Installing and setting up Cloud Service Mesh Follow one of the installation guides for Cloud Service Mesh: Managed Cloud Service Mesh In-cluster Cloud Service Mesh Once you have installed Cloud Service Mesh, stop and return to this tutorial without installing ingress or egress gateways.
- Create a default (low priority) firewall rule to deny all egress from the VPC network: gcloud compute firewall-rules create global-deny-egress-all \ --action DENY \ --direction EGRESS \ --rules all \ --destination-ranges 0 .0.0.0/0 \ --network vpc-network \ --priority 65535 \ --description "Default rule to deny all egress from the network." Create a rule to allow only those nodes with the gateway service account to reach the internet: gcloud compute firewall-rules create gateway-allow-egress-web \ --action ALLOW \ --direction EGRESS \ --rules tcp:80,tcp:443 \ --target-service-accounts sa-gateway-nodes@ ${ PROJECT ID } .iam.gserviceaccount.com \ --network vpc-network \ --priority 1000 \ --description "Allow the nodes running the egress gateways to connect to the web" Allow nodes to the reach the Kubernetes control plane: gcloud compute firewall-rules create allow-egress-to-api-server \ --action ALLOW \ --direction EGRESS \ --rules tcp:443,tcp:10250 \ --target-service-accounts sa-application-nodes@ ${ PROJECT ID } .iam.gserviceaccount.com,sa-gateway-nodes@ ${ PROJECT ID } .iam.gserviceaccount.com \ --destination-ranges 10 .5.0.0/28 \ --network vpc-network \ --priority 1000 \ --description "Allow nodes to reach the Kubernetes API server." Optional: This firewall rule is not needed if you use Managed Cloud Service Mesh.
- Objectives Set up the infrastructure for running Cloud Service Mesh: Custom VPC network and private subnet Cloud NAT for internet access Private GKE cluster with an extra node pool for egress gateway pods Restrictive egress VPC firewall rules ; only gateway nodes can reach external hosts Private Google Access for connecting to Container Registry and Google APIs Install Cloud Service Mesh.
- Home Documentation Networking Cloud Service Mesh Guides Send feedback Using Cloud Service Mesh egress gateways on GKE clusters: Tutorial Stay organized with collections Save and categorize content based on your preferences.

### "Migrate in-cluster to managed control plane on a new cluster \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- Source ID: `site-docs-reference`
- Final score: 294
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The output is similar to: createTime: '2022-07-06T01:05:39.110120474Z' membershipSpecs: projects/123456789123/locations/global/memberships/cluster-with-csm-membership: mesh: management: MANAGEMENT AUTOMATIC membershipStates: projects/123456789123/locations/global/memberships/cluster-with-csm-membership: servicemesh: controlPlaneManagement: details: - code: REVISION READY details: 'Ready: asm-managed' state: ACTIVE dataPlaneManagement: details: - code: OK details: Service is running. state: ACTIVE state: code: OK description: 'Revision(s) ready for use: asm-managed.' updateTime: '2022-07-06T01:19:24.243993678Z' name: projects/your-project-id/locations/global/features/servicemesh resourceState: state: ACTIVE spec: {} state: state: {} updateTime: '2022-07-06T01:19:27.475885687Z' Deploy Cloud Service Mesh's ingress gateway You will deploy the Cloud Service Mesh's ingress gateway into a separate namespace called asm-ingress .
- Migrate in-cluster to managed control plane on a new cluster This tutorial shows you how to migrate an application from a Google Kubernetes Engine (GKE) cluster using in-cluster Cloud Service Mesh to a new cluster using managed Cloud Service Mesh — Google's fully managed, Istio-compliant service mesh.
- Delete the resources Delete the cluster with managed Cloud Service Mesh: gcloud container clusters delete cluster-with-managed-asm \ --zone = us-central1-a \ --project = PROJECT ID What's next Learn about Managed Cloud Service Mesh .
- Create the namespace: kubectl \ --context cluster-with-csm \ create namespace onlineboutique Use the istio.io/rev=asm-managed label to add the onlineboutique namespace to the service mesh and enable automatic sidecar proxy injection. kubectl \ --context cluster-with-csm \ label namespace onlineboutique 'istio.io/rev=asm-managed' Deploy Online Boutique's 12 services, including the load generator that imitates user traffic: kubectl \ --context cluster-with-csm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/kubernetes-manifests.yaml kubectl \ --context cluster-with-csm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/virtual-service.yaml Get the external IP address of the Cloud Service Mesh ingress gateway: kubectl \ --context cluster-with-csm \ --namespace asm-ingress \ get service --output jsonpath = '{.items[0].status.loadBalancer.ingress[0].ip}' Copy the external IP address of the asm-ingressgateway Service, and access it through your web browser.

### "Managed control plane for continuing customers \_|\_ Cloud Service Mesh\

- URL: [https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview](https://docs.cloud.google.com/service-mesh/docs/managed-control-plane-overview)
- Source ID: `site-docs-root-2`
- Final score: 290
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Control plane for new meshes Starting on July 1, 2024, most existing users of the managed istiod control plane implementation began to receive the updated managed control plane with Google's globally available implementation - the Traffic Director (TD) control plane, in new fleets.
- If you onboard a new fleet to managed Cloud Service Mesh, and this fleet is not in a Google Cloud Organization or it is in a new Google Cloud Organization, then you will get the new managed control plane with the TD implementation from the Cloud Service Mesh launch date.
- Users whose existing usage of managed Cloud Service Mesh with the istiod control plane implementation was not compatible with the Traffic Director implementation without changes continued to get the istiod implementation until September 8, 2024.
- If you use the managed control plane, with some exceptions your existing fleets will be migrated to the new control plane, referred to in the Cloud Service Mesh as managed control plane (Traffic Director, or TD, implementation).

