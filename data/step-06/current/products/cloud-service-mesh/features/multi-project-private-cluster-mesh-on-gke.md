---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.813Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Multi-project private cluster mesh on GKE"
feature_slug: "multi-project-private-cluster-mesh-on-gke"
latest_feature_date: "2021-04-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane"
  - "https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial"
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster"
  - "https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster"
keywords:
  - "multi"
  - "project"
  - "private"
  - "cluster"
  - "mesh"
  - "on"
  - "gke"
  - "lets"
---

# Multi-project private cluster mesh on GKE

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Multi-project private cluster mesh on GKE lets multiple private clusters from different projects join a single mesh; Multi-project private cluster mesh on GKE lets multiple private clusters from different projects join a single mesh.

## Extended Definition

Multi-project private cluster mesh on GKE lets multiple private clusters from different projects join a single mesh; Multi-project private cluster mesh on GKE lets multiple private clusters from different projects join a single mesh.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster)

## Supporting Pages

### "Provision a managed Cloud Service Mesh control plane on GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- Source ID: `site-docs-root`
- Final score: 327
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note that if you plan to register multiple clusters, enabling the Cloud Service Mesh fleet feature happens at the fleet-level so you only have to run this command once. gcloud container fleet mesh enable --project FLEET PROJECT ID Register clusters to a fleet Register a GKE cluster using fleet workload identity.
- Cloud Service Mesh can use multiple GKE clusters in a single-project single-network environment or a multi-project single-network environment.
- Enable automatic management Run the following command to enable automatic management: Note: You can apply this change to multiple clusters at a time by passing a comma-separated list of membership names as the --memberships parameter. gcloud container fleet mesh update \ --management automatic \ --memberships MEMBERSHIP NAME \ --project FLEET PROJECT ID \ --location MEMBERSHIP LOCATION where: MEMBERSHIP NAME is the membership name listed when you verified that your cluster was registered to the fleet.
- You can opt out of maintenance window notifications by editing your user preferences: https://console.cloud.google.com/user-preferences/communication?project=${project id} Configure endpoint discovery (only for multi-cluster installations) If your mesh has only one cluster, skip these multi-cluster steps and proceed to Deploy applications or Migrate applications .

### "Using Cloud Service Mesh egress gateways on GKE clusters: Tutorial \_|\_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)
- Source ID: `site-docs-reference`
- Final score: 291
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add the following command to your initialization script: cat << 'EOF' >> ./init-egress-tutorial.sh SHELL IP = $( dig TXT -4 +short @ns1.google.com o-o.myaddr.l.google.com ) gcloud container clusters update cluster1 \ --enable-master-authorized-networks \ --master-authorized-networks ${ SHELL IP // \" } /32 EOF Enable the Google Kubernetes Engine API: gcloud services enable container.googleapis.com Create a private GKE cluster: gcloud container clusters create cluster1 \ --enable-ip-alias \ --enable-private-nodes \ --release-channel "regular" \ --enable-master-authorized-networks \ --master-authorized-networks ${ SHELL IP // \" } /32 \ --master-ipv4-cidr 10 .5.0.0/28 \ --enable-dataplane-v2 \ --service-account "sa-application-nodes@ ${ PROJECT ID } .iam.gserviceaccount.com" \ --machine-type "e2-standard-4" \ --network "vpc-network" \ --subnetwork "subnet-gke" \ --cluster-secondary-range-name "pods" \ --services-secondary-range-name "services" \ --workload-pool " ${ PROJECT ID } .svc.id.goog" \ --zone ${ ZONE } It takes a few minutes for the cluster to be created.
- These roles are required for logging, monitoring, and pulling private container images from Container Registry. project roles =( roles/logging.logWriter roles/monitoring.metricWriter roles/monitoring.viewer roles/storage.objectViewer ) for role in " ${ project roles [@] } " do gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount:sa-application-nodes@ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = " $role " gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member = "serviceAccount:sa-gateway-nodes@ ${ PROJECT ID } .iam.gserviceaccount.com" \ --role = " $role " done Note: If workloads on your GKE cluster need access to other Google Cloud services, create workload-specific service accounts with the least privileges possible.
- Allow the GKE API server to call the webhooks exposed by the service mesh control plane running on the nodes: gcloud compute firewall-rules create allow-ingress-api-server-to-webhook \ --action ALLOW \ --direction INGRESS \ --rules tcp:15017 \ --target-service-accounts sa-application-nodes@ ${ PROJECT ID } .iam.gserviceaccount.com,sa-gateway-nodes@ ${ PROJECT ID } .iam.gserviceaccount.com \ --source-ranges 10 .5.0.0/28 \ --network vpc-network \ --priority 1000 \ --description "Allow the API server to call the webhooks exposed by istiod discovery" Allow egress connectivity between Nodes and Pods running on the cluster.
- Objectives Set up the infrastructure for running Cloud Service Mesh: Custom VPC network and private subnet Cloud NAT for internet access Private GKE cluster with an extra node pool for egress gateway pods Restrictive egress VPC firewall rules ; only gateway nodes can reach external hosts Private Google Access for connecting to Container Registry and Google APIs Install Cloud Service Mesh.

### "Migrate in-cluster to managed control plane on a new cluster \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster](https://docs.cloud.google.com/service-mesh/docs/tutorials/migrate-in-cluster-to-managed-on-new-cluster)
- Source ID: `site-docs-reference`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Rename the cluster context so that the cluster is easier to work with: kubectl config rename-context \ gke PROJECT ID us-central1-a cluster-with-in-cluster-asm \ cluster-with-in-cluster-asm Check that the cluster context has been renamed: kubectl config get-contexts --output = "name" Download the version that installs Cloud Service Mesh 1.28.5 to the current working directory: curl https://storage.googleapis.com/csm-artifacts/asm/asmcli 1.28 > asmcli You will be asked to type "y" and then press Enter.
- Rename the cluster context so that the cluster is easier to work with: kubectl config rename-context \ gke PROJECT ID us-central1-a cluster-with-csm \ cluster-with-csm Check that the cluster context has been renamed: kubectl config get-contexts --output = "name" Enable Cloud Service Mesh on your project's fleet.
- Set the IP address of the managed Cloud Service Mesh cluster's ingress gateway inside the ServiceEntry resource: sed -i "s/1.2.3.4/ ${ INGRESS IP OF CLUSTER WITH MANAGED ASM } /" anthos-service-mesh-samples/docs/migrate-to-managed-asm/service-entry.yaml Deploy the ServiceEntry to the cluster with in-cluster Cloud Service Mesh: kubectl \ --context cluster-with-in-cluster-asm \ --namespace onlineboutique \ apply -f anthos-service-mesh-samples/docs/migrate-to-managed-asm/service-entry.yaml Deploy the VirtualService to the cluster with in-cluster Cloud Service Mesh: kubectl \ --context cluster-with-in-cluster-asm \ --namespace onlineboutique \ apply -f anthos-service-mesh-samples/docs/migrate-to-managed-asm/virtual-service-in-cluster-asm.yaml Visit the IP address of the ingress gateway of the cluster with in-cluster Cloud Service Mesh, in your web browser: kubectl \ --context cluster-with-in-cluster-asm \ --namespace asm-ingress \ get service Refresh the Online Boutique homepage multiple times, and check the footer of the page each time.
- The output is similar to: createTime: '2022-07-06T01:05:39.110120474Z' membershipSpecs: projects/123456789123/locations/global/memberships/cluster-with-csm-membership: mesh: management: MANAGEMENT AUTOMATIC membershipStates: projects/123456789123/locations/global/memberships/cluster-with-csm-membership: servicemesh: controlPlaneManagement: details: - code: REVISION READY details: 'Ready: asm-managed' state: ACTIVE dataPlaneManagement: details: - code: OK details: Service is running. state: ACTIVE state: code: OK description: 'Revision(s) ready for use: asm-managed.' updateTime: '2022-07-06T01:19:24.243993678Z' name: projects/your-project-id/locations/global/features/servicemesh resourceState: state: ACTIVE spec: {} state: state: {} updateTime: '2022-07-06T01:19:27.475885687Z' Deploy Cloud Service Mesh's ingress gateway You will deploy the Cloud Service Mesh's ingress gateway into a separate namespace called asm-ingress .

### "Enable optional features on an in-cluster control plane \_|\_ Cloud Service\

- URL: [https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/enable-optional-features-in-cluster)
- Source ID: `site-docs-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Pull the Cloud Service Mesh canonical service images: docker pull gcr.io/kubebuilder/kube-rbac-proxy:v0.13.1 docker pull gke.gcr.io/asm/canonical-service-controller:1.10.3-asm.16 Tag the images with your private registry URL: docker tag gcr.io/kubebuilder/kube-rbac-proxy:v0.13.1 \ ${PRIVATE REGISTRY URL}/gcr.io/kubebuilder/kube-rbac-proxy:v0.13.1 docker tag gke.gcr.io/asm/canonical-service-controller:1.10.3-asm.16 \ ${PRIVATE REGISTRY URL}/gke.gcr.io/asm/canonical-service-controller:1.10.3-asm.16 Push the tagged images to your private registry: docker push ${PRIVATE REGISTRY URL}/gcr.io/kubebuilder/kube-rbac-proxy:v0.13.1 docker push ${PRIVATE REGISTRY URL}/gke.gcr.io/asm/canonical-service-controller:1.10.3-asm.16 If you can pull the tagged images from your private registry, then the procedure was successful.
- For example: apiVersion: install . istio . io / v1alpha1 kind: IstioOperator spec: hub: { private registry url } The following is a list of images for Cloud Service Mesh that you need to mirror to the custom container registry: Install-cni - gke.gcr.io/asm/install-cni:1.28.5-asm.9 Managed Data Plane - gke.gcr.io/asm/mdp:1.28.5-asm.9 Pilot - gke.gcr.io/asm/pilot:1.28.5-asm.9 Proxyv2 - gke.gcr.io/asm/proxyv2:1.28.5-asm.9 Note: If you use a Canonical Service , then you also need to mirror the custom container registries gcr.io/kubebuilder/kube-rbac-proxy:v0.13.1 and gke.gcr.io/asm/canonical-service-controller:1.10.3-asm.16 .
- Cloud Trace Cloud Trace is available with Cloud Service Mesh installations on the following platforms: GKE on Google Cloud GKE Enterprise clusters on-premises if you install with Cloud Service Mesh certificate authority --- apiVersion : install.istio.io/v1alpha1 kind : IstioOperator spec : meshConfig : enableTracing : true values : global : proxy : tracer : stackdriver For more information, see Accessing traces .
- Tag the images with your private registry URL: docker tag gke.gcr.io/asm/install-cni:1.28.5-asm.9 \ ${PRIVATE REGISTRY URL}/gke.gcr.io/asm/install-cni:1.28.5-asm.9 docker tag gke.gcr.io/asm/mdp:1.28.5-asm.9 \ ${PRIVATE REGISTRY URL}/gke.gcr.io/asm/pilot:1.28.5-asm.9 docker tag gke.gcr.io/asm/proxyv2:1.28.5-asm.9 \ ${PRIVATE REGISTRY URL}/gke.gcr.io/asm/proxyv2:1.28.5-asm.9 Push the tagged images to your private registry: docker push ${PRIVATE REGISTRY URL}/gke.gcr.io/asm/install-cni:1.28.5-asm.9 docker push ${PRIVATE REGISTRY URL}/gke.gcr.io/asm/pilot:1.28.5-asm.9 docker push ${PRIVATE REGISTRY URL}/gke.gcr.io/asm/proxyv2:1.28.5-asm.9 (Optional) If you use a canonical service , then add the canonical service images to your private registry.

