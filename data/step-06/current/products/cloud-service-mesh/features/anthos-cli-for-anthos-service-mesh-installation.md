---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.862Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Anthos CLI for Anthos Service Mesh installation"
feature_slug: "anthos-cli-for-anthos-service-mesh-installation"
latest_feature_date: "2020-05-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies"
  - "https://docs.cloud.google.com/service-mesh/docs/migrate-istio-to-anthos-service-mesh"
  - "https://docs.cloud.google.com/service-mesh/docs/downloading-istioctl"
  - "https://docs.cloud.google.com/service-mesh/docs/managed/vpc-sc"
keywords:
  - "anthos"
  - "cli"
  - "for"
  - "mesh"
  - "installation"
  - "the"
  - "simplifies"
  - "installing"
---

# Anthos CLI for Anthos Service Mesh installation

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

The Anthos CLI simplifies installing Anthos Service Mesh on new or existing clusters in beta; The Anthos CLI simplifies installing Anthos Service Mesh on new or existing clusters in beta.

## Extended Definition

The Anthos CLI simplifies installing Anthos Service Mesh on new or existing clusters in beta; The Anthos CLI simplifies installing Anthos Service Mesh on new or existing clusters in beta.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies)
- [https://docs.cloud.google.com/service-mesh/docs/migrate-istio-to-anthos-service-mesh](https://docs.cloud.google.com/service-mesh/docs/migrate-istio-to-anthos-service-mesh)
- [https://docs.cloud.google.com/service-mesh/docs/downloading-istioctl](https://docs.cloud.google.com/service-mesh/docs/downloading-istioctl)
- [https://docs.cloud.google.com/service-mesh/docs/managed/vpc-sc](https://docs.cloud.google.com/service-mesh/docs/managed/vpc-sc)

## Supporting Pages

### "Configuring audit policies for your services \_|\_ Cloud Service Mesh \_\

- URL: [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies)
- Source ID: `site-docs-reference`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you run asmcli install , include the following option: --option audit-authorizationpolicy For example: ./asmcli install \ --project id PROJECT ID \ --cluster name CLUSTER NAME \ --cluster location CLUSTER LOCATION \ --ca mesh ca \ --output dir DIR PATH \ --enable all \ --option audit-authorizationpolicy Be sure to specify any other overlay files that you need to configure Cloud Service Mesh.
- When you run asmcli install , include the following option: --option audit-authorizationpolicy For example: ./asmcli install \ --project id PROJECT ID \ --cluster name CLUSTER NAME \ --cluster location CLUSTER LOCATION \ --ca mesh ca \ --output dir DIR PATH \ --enable all \ --option audit-authorizationpolicy Be sure to specify any other overlay files that you need to configure Cloud Service Mesh.
- Before you begin Follow the steps in Install dependent tools and validate cluster to: Install required tools Download asmcli Grant cluster admin permissions Validate your project and cluster Prepare gateway configuration Cloud Service Mesh gives you the option to deploy and manage gateways as part of your service mesh.
- Turn on RBAC debug logging with the following command: kubectl exec POD NAME -n NAMESPACE -c istio-proxy -- pilot-agent request POST 'logging?rbac=debug' Send some requests, and then check logs for the Pod with the kubectl logs command: kubectl logs POD NAME -n NAMESPACE -c istio-proxy What's next Learn about security in Cloud Service Mesh Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Migrate from Istio 1.11 or later to Cloud Service Mesh \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/migrate-istio-to-anthos-service-mesh](https://docs.cloud.google.com/service-mesh/docs/migrate-istio-to-anthos-service-mesh)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- Download sample code Clone the git repositories containing the Kubernetes and Istio resources you will use: git clone https://github.com/GoogleCloudPlatform/anthos-service-mesh-samples.git git clone https://github.com/GoogleCloudPlatform/microservices-demo.git Set up the cluster with Istio Create the cluster and install Istio In the section, you create your cluster that uses Istio.
- Create the namespace: kubectl \ --context cluster-with-csm \ create namespace onlineboutique Use the istio.io/rev=asm-managed label to add the onlineboutique namespace to the service mesh and enable automatic sidecar proxy injection. kubectl \ --context cluster-with-csm \ label namespace onlineboutique 'istio.io/rev=asm-managed' Deploy Online Boutique's 12 services, including the load generator that imitates user traffic: kubectl \ --context cluster-with-csm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/kubernetes-manifests.yaml kubectl \ --context cluster-with-csm \ --namespace = onlineboutique \ apply -f anthos-service-mesh-samples/docs/shared/online-boutique/virtual-service.yaml Get the external IP address of the Cloud Service Mesh ingress gateway: kubectl \ --context cluster-with-csm \ --namespace asm-ingress \ get service --output jsonpath = '{.items[0].status.loadBalancer.ingress[0].ip}' Copy the external IP address of the asm-ingressgateway Service, and access it through your web browser.
- Create the namespace: kubectl \ --context cluster-with-csm \ create namespace asm-ingress Use the istio.io/rev=asm-managed label to add the asm-ingress namespace to the service mesh and enable automatic sidecar proxy injection. kubectl \ --context cluster-with-csm \ label namespace asm-ingress 'istio.io/rev=asm-managed' Deploy the Cloud Service Mesh ingress gateway : kubectl \ --context cluster-with-csm \ --namespace = asm-ingress \ apply -f anthos-service-mesh-samples/docs/shared/asm-ingress-gateway/asm-gateway-deployment-svc.yaml kubectl \ --context cluster-with-csm \ --namespace = asm-ingress \ apply -f anthos-service-mesh-samples/docs/shared/asm-ingress-gateway/gateway.yaml The output is similar to: namespace/asm-ingress configured serviceaccount/asm-ingressgateway configured service/asm-ingressgateway configured deployment.apps/asm-ingressgateway configured gateway.networking.istio.io/asm-ingressgateway configured Note: You can browse the resources in the official Cloud Service Mesh samples GitHub repository .
- Set the IP address of the managed Cloud Service Mesh cluster's ingress gateway inside the ServiceEntry resource: sed -i "s/1.2.3.4/ ${ INGRESS IP OF CLUSTER WITH MANAGED ASM } /" anthos-service-mesh-samples/docs/migrate-to-managed-asm/service-entry.yaml Deploy the ServiceEntry to the cluster with Istio: kubectl \ --context cluster-with-istio \ --namespace onlineboutique \ apply -f anthos-service-mesh-samples/docs/migrate-to-managed-asm/service-entry.yaml Deploy the VirtualService to the cluster with Istio: kubectl \ --context cluster-with-istio \ --namespace onlineboutique \ apply -f anthos-service-mesh-samples/docs/migrate-to-managed-asm/virtual-service.yaml Visit the IP address of the ingress gateway of the cluster with Istio, in your web browser: kubectl \ --context cluster-with-istio \ --namespace istio-system \ get service Refresh the Online Boutique homepage multiple times, and check the footer of the page each time.

### "Downloading the troubleshooting tool \_|\_ Cloud Service Mesh \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-mesh/docs/downloading-istioctl](https://docs.cloud.google.com/service-mesh/docs/downloading-istioctl)
- Source ID: `site-docs-reference`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Download istioctl Managed control plane Update Google Cloud CLI: gcloud components update Download the embedded Cloud Service Mesh troubleshooting tool: gcloud components install istioctl If you receive error message You cannot perform this action because the Google Cloud CLI component manager is disabled for this installation , you have previously installed Google Cloud CLI through Debian/Ubuntu .
- Use the following commands instead: Update Google Cloud CLI sudo apt-get update Download the embedded Cloud Service Mesh troubleshooting tool: sudo apt-get install google-cloud-sdk-istioctl In-cluster control plane Linux Download the Cloud Service Mesh installation file to your current working directory: curl -LO https://storage.googleapis.com/gke-release/asm/istio-1.28.5-asm.9-linux-amd64.tar.gz Download the signature file and use openssl to verify the signature: curl -LO https://storage.googleapis.com/gke-release/asm/istio-1.28.5-asm.9-linux-amd64.tar.gz.1.sig openssl dgst -verify /dev/stdin -signature istio-1.28.5-asm.9-linux-amd64.tar.gz.1.sig istio-1.28.5-asm.9-linux-amd64.tar.gz The expected output is: Verified OK .
- For example, to extract the contents to the current working directory: tar xzf istio-1.28.5-asm.9-linux-amd64.tar.gz The command creates an installation directory in your current working directory named istio-1.28.5-asm.9 that contains: - Sample applications in the samples directory . - The istioctl command - line tool that you use to install Cloud Service Mesh is in the < code>bin < / code > directory . - The Cloud Service Mesh configuration profiles are in the manifests/profiles directory .
- For example, to extract the contents to the current working directory: tar xzf istio-1.28.5-asm.9-osx.tar.gz The command creates an installation directory in your current working directory named istio-1.28.5-asm.9 that contains: - Sample applications in the samples directory . - The istioctl command - line tool that you use to install Cloud Service Mesh is in the < code>bin < / code > directory . - The Cloud Service Mesh configuration profiles are in the manifests/profiles directory .

### "VPC Service Controls for Cloud Service Mesh (Managed) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/managed/vpc-sc](https://docs.cloud.google.com/service-mesh/docs/managed/vpc-sc)
- Source ID: `site-docs-root-2`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you don't add the Mesh Configuration API to the service perimeter, the installation will fail and the workloads won't receive their Envoy configuration from the managed control plane.
- Unless you are installing Cloud Service Mesh from an in-perimeter network, add an ingress rule to allow the identity running the asmcli command access to the service perimeter.
- Repeat steps c - f, to add: Cloud Service Mesh Certificate Authority API GKE Hub API Cloud IAM API Cloud Monitoring API Cloud Trace API Cloud Monitoring API Google Cloud Resource Manager API Google Compute Engine API Google Container Registry API Artifact Registry API Google Cloud Storage API Cloud Logging API Security Token Service API Click Save . gcloud To update the list of restricted services, use the update command and specify the services to add as a comma-delimited list: gcloud access-context-manager perimeters update PERIMETER NAME \ --add-restricted-services = meshconfig.googleapis.com,meshca.googleapis.com,gkehub.googleapis.com,iam.googleapis.com,monitoring.googleapis.com,cloudtrace.googleapis.com,monitoring.googleapis.com,cloudresourcemanager.googleapis.com,compute.googleapis.com,containerregistry.googleapis.com,artifactregistry.googleapis.com,storage.googleapis.com,logging.googleapis.com,sts.googleapis.com \ --policy = POLICY NAME Where: PERIMETER NAME is the name of the service perimeter that you want to update.
- To check whether your control plane supports VPC Service Controls GA, check the mesh feature state of your membership for the VPCSC GA SUPPORTED condition. gcloud container fleet mesh describe --project FLEET PROJECT ID The output is similar to: ( ... ) membershipStates: projects/FLEET PROJECT NUMBER/locations/MEMBERSHIP LOCATION/memberships/MEMBERSHIP ID: servicemesh: conditions: - code: VPCSC GA SUPPORTED details: This control plane supports VPC Service Controls GA. documentationLink: http://cloud.google.com/service-mesh/docs/managed/VPC Service Controls severity: INFO ( ... ) If you have an existing control plane that does not report the VPCSC GA SUPPORTED condition and want to rely on VPC Service Controls, contact support.

