---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.798Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Managed Cloud Service Mesh with shared VPC across multiple projects"
feature_slug: "managed-cloud-service-mesh-with-shared-vpc-across-multiple-projects"
latest_feature_date: "2021-11-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane"
  - "https://docs.cloud.google.com/service-mesh/docs/managed/vpc-sc"
  - "https://docs.cloud.google.com/service-mesh/docs/service-routing/features"
  - "https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial"
keywords:
  - "managed"
  - "mesh"
  - "with"
  - "shared"
  - "vpc"
  - "across"
  - "multiple"
  - "projects"
---

# Managed Cloud Service Mesh with shared VPC across multiple projects

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Managed Cloud Service Mesh supports multi-project deployments with a shared VPC; Managed Cloud Service Mesh supports multi-project deployments with a shared VPC.

## Extended Definition

Managed Cloud Service Mesh supports multi-project deployments with a shared VPC; Managed Cloud Service Mesh supports multi-project deployments with a shared VPC.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/managed/vpc-sc](https://docs.cloud.google.com/service-mesh/docs/managed/vpc-sc)
- [https://docs.cloud.google.com/service-mesh/docs/service-routing/features](https://docs.cloud.google.com/service-mesh/docs/service-routing/features)
- [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)

## Supporting Pages

### "Provision a managed Cloud Service Mesh control plane on GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- Verify the control plane has been provisioned After a few minutes, verify that the control plane status is ACTIVE : gcloud container fleet mesh describe --project FLEET PROJECT ID The output is similar to: ... membershipSpecs : projects / 746296320118 / locations / us - central1 / memberships / demo - cluster - 1 : mesh : management : MANAGEMENT AUTOMATIC membershipStates : projects / 746296320118 / locations / us - central1 / memberships / demo - cluster - 1 : servicemesh : controlPlaneManagement : details : - code : REVISION READY details : ' Ready : asm - managed ' state : ACTIVE implementation : ISTIOD TRAFFIC DIRECTOR dataPlaneManagement : details : - code : OK details : Service is running . state : ACTIVE state : code : OK description : ' Revision ( s ) ready for use : asm - managed . ' ...
- Grant service accounts in the fleet project permission to access the cluster project: gcloud projects add-iam-policy-binding " CLUSTER PROJECT ID " \ --member "serviceAccount:service- FLEET PROJECT NUMBER @gcp-sa-servicemesh.iam.gserviceaccount.com" \ --role roles/anthosservicemesh.serviceAgent Enable the Mesh API on the cluster's project: gcloud services enable mesh.googleapis.com \ --project = CLUSTER PROJECT ID Configure Certificate Authority Service (Optional) If your service mesh deployment requires Certificate Authority Service (CA Service), then follow Configure Certificate Authority Service for managed Cloud Service Mesh to enable it for your fleet.
- To disable the managed data plane for a namespace: kubectl annotate --overwrite namespace NAMESPACE \ mesh.cloud.google.com/proxy='{"managed":"false"}' To disable the managed data plane for a pod: kubectl annotate --overwrite pod POD NAME \ mesh.cloud.google.com/proxy='{"managed":"false"}' Enable maintenance windows for the managed data plane If you have a GKE maintenance window configured, active upgrades will commence at the start of the next available maintenance window and continue without pause until all managed pods have been updated (usually 12 hours).
- Grant service accounts in the fleet project permission to access the cluster project: gcloud projects add-iam-policy-binding " CLUSTER PROJECT ID " \ --member "serviceAccount:service- FLEET PROJECT NUMBER @gcp-sa-servicemesh.iam.gserviceaccount.com" \ --role roles/anthosservicemesh.serviceAgent Enable the Mesh API on the cluster's project: gcloud services enable mesh.googleapis.com \ --project = CLUSTER PROJECT ID Replace CLUSTER PROJECT ID with the unique identifier of your cluster project.

### "VPC Service Controls for Cloud Service Mesh (Managed) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/managed/vpc-sc](https://docs.cloud.google.com/service-mesh/docs/managed/vpc-sc)
- Source ID: `site-docs-root-2`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To check whether your control plane supports VPC Service Controls GA, check the mesh feature state of your membership for the VPCSC GA SUPPORTED condition. gcloud container fleet mesh describe --project FLEET PROJECT ID The output is similar to: ( ... ) membershipStates: projects/FLEET PROJECT NUMBER/locations/MEMBERSHIP LOCATION/memberships/MEMBERSHIP ID: servicemesh: conditions: - code: VPCSC GA SUPPORTED details: This control plane supports VPC Service Controls GA. documentationLink: http://cloud.google.com/service-mesh/docs/managed/VPC Service Controls severity: INFO ( ... ) If you have an existing control plane that does not report the VPCSC GA SUPPORTED condition and want to rely on VPC Service Controls, contact support.
- VPC Service Controls for Cloud Service Mesh (Managed) Note: This guide only supports Cloud Service Mesh with Istio APIs and does not support Google Cloud APIs.
- Having a service mesh spread across multiple VPC Service Controls perimeters is not supported.
- Install the managed Cloud Service Mesh in a VPC Service Controls perimeter Follow the steps in Configure managed Cloud Service Mesh page.

### "Cloud Service Mesh with Google Cloud APIs supported features \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/service-routing/features](https://docs.cloud.google.com/service-mesh/docs/service-routing/features)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Supported Single network in a Google Cloud project ✔ Multiple meshes in a Google Cloud project ✔ Multiple gateways in a Google Cloud project ✔ Shared VPC (single network shared across multiple Google Cloud projects) ✔ For a detailed explanation of how Shared VPC is supported with Cloud Service Mesh, see Limitations .
- Feature Supported Sidecar proxies running alongside applications ✔ Proxyless gRPC applications ✔ Middle proxies between two applications in a mesh ✔ Edge proxies at the boundary of your mesh ✔ Mesh spanning multiple GKE clusters and/or Compute Engine VMs in multiple regions ✔ Programmatic, API-driven configuration All configuration is exposed through our REST API and dashboard out-of-the-box, letting you automate changes across large teams and manage changes programmatically.
- Feature Supported with Envoy proxy configured to handle HTTP(s), TCP, or gRPC traffic Supported with proxyless gRPC Service selection based on weight-based traffic splits ✔ ✔ Circuit breaking ✔ ✔ Only maxRequests Service and backend capacity management Cloud Service Mesh takes service and backend capacity into account to promote optimal distribution of traffic across your services' backends.
- In the following table, applications described as being in the mesh are those applications that use the Cloud Service Mesh-managed data plane to communicate with other services.

### "Using Cloud Service Mesh egress gateways on GKE clusters: Tutorial \_|\_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Create a default (low priority) firewall rule to deny all egress from the VPC network: gcloud compute firewall-rules create global-deny-egress-all \ --action DENY \ --direction EGRESS \ --rules all \ --destination-ranges 0 .0.0.0/0 \ --network vpc-network \ --priority 65535 \ --description "Default rule to deny all egress from the network." Create a rule to allow only those nodes with the gateway service account to reach the internet: gcloud compute firewall-rules create gateway-allow-egress-web \ --action ALLOW \ --direction EGRESS \ --rules tcp:80,tcp:443 \ --target-service-accounts sa-gateway-nodes@ ${ PROJECT ID } .iam.gserviceaccount.com \ --network vpc-network \ --priority 1000 \ --description "Allow the nodes running the egress gateways to connect to the web" Allow nodes to the reach the Kubernetes control plane: gcloud compute firewall-rules create allow-egress-to-api-server \ --action ALLOW \ --direction EGRESS \ --rules tcp:443,tcp:10250 \ --target-service-accounts sa-application-nodes@ ${ PROJECT ID } .iam.gserviceaccount.com,sa-gateway-nodes@ ${ PROJECT ID } .iam.gserviceaccount.com \ --destination-ranges 10 .5.0.0/28 \ --network vpc-network \ --priority 1000 \ --description "Allow nodes to reach the Kubernetes API server." Optional: This firewall rule is not needed if you use Managed Cloud Service Mesh.
- Download credentials so that you can connect to the cluster with kubectl: gcloud container clusters get-credentials cluster1 Verify that the gateway nodes have the correct taint: kubectl get nodes -l cloud.google.com/gke-nodepool = gateway -o yaml \ -o = custom-columns = 'name:metadata.name,taints:spec.taints[?(@.key=="dedicated")]' The output is similar to the following: name taints gke-cluster1-gateway-9d65b410-cffs map[effect:NoSchedule key:dedicated value:gateway] Installing and setting up Cloud Service Mesh Follow one of the installation guides for Cloud Service Mesh: Managed Cloud Service Mesh In-cluster Cloud Service Mesh Once you have installed Cloud Service Mesh, stop and return to this tutorial without installing ingress or egress gateways.
- Objectives Set up the infrastructure for running Cloud Service Mesh: Custom VPC network and private subnet Cloud NAT for internet access Private GKE cluster with an extra node pool for egress gateway pods Restrictive egress VPC firewall rules ; only gateway nodes can reach external hosts Private Google Access for connecting to Container Registry and Google APIs Install Cloud Service Mesh.
- Enable the Cloud DNS API: gcloud services enable dns.googleapis.com Create a private DNS zone, a CNAME , and A records so that nodes and workloads can connect to Google APIs and services using Private Google Access and the private.googleapis.com hostname: gcloud dns managed-zones create private-google-apis \ --description "Private DNS zone for Google APIs" \ --dns-name googleapis.com \ --visibility private \ --networks vpc-network gcloud dns record-sets transaction start --zone private-google-apis gcloud dns record-sets transaction add private.googleapis.com. \ --name " .googleapis.com" \ --ttl 300 \ --type CNAME \ --zone private-google-apis gcloud dns record-sets transaction add "199.36.153.8" \ "199.36.153.9" "199.36.153.10" "199.36.153.11" \ --name private.googleapis.com \ --ttl 300 \ --type A \ --zone private-google-apis gcloud dns record-sets transaction execute --zone private-google-apis Configuring private access to Container Registry Create a private DNS zone, a CNAME and an A record so that nodes can connect to Container Registry using Private Google Access and the gcr.io hostname: gcloud dns managed-zones create private-gcr-io \ --description "private zone for Container Registry" \ --dns-name gcr.io \ --visibility private \ --networks vpc-network gcloud dns record-sets transaction start --zone private-gcr-io gcloud dns record-sets transaction add gcr.io. \ --name " .gcr.io" \ --ttl 300 \ --type CNAME \ --zone private-gcr-io gcloud dns record-sets transaction add "199.36.153.8" "199.36.153.9" "199.36.153.10" "199.36.153.11" \ --name gcr.io \ --ttl 300 \ --type A \ --zone private-gcr-io gcloud dns record-sets transaction execute --zone private-gcr-io Create a private GKE cluster Find the external IP address of your Cloud Shell so that you can add it to the list of networks that are allowed to access your cluster's API server: SHELL IP = $( dig TXT -4 +short @ns1.google.com o-o.myaddr.l.google.com ) After a period of inactivity, the external IP address of your Cloud Shell VM can change.

