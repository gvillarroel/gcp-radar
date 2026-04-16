---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.671Z"
product_name: "Service Extensions"
product_slug: "service-extensions"
feature_name: "GKE Gateway extensions"
feature_slug: "gke-gateway-extensions"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services"
  - "https://docs.cloud.google.com/service-extensions/docs/overview"
  - "https://docs.cloud.google.com/service-extensions/docs/custom-constraints"
  - "https://docs.cloud.google.com/service-extensions/docs/callouts-overview"
keywords:
  - "gke"
  - "gateway"
  - "extensions"
  - "now"
  - "supports"
  - "using"
  - "to"
  - "insert"
---

# GKE Gateway extensions

Product: Service Extensions
Coverage: MEDIUM

## Step 02 Summary

GKE Gateway now supports using extensions to insert custom logic into the load balancing processing path.

## Extended Definition

GKE Gateway now supports using extensions to insert custom logic into the load balancing processing path.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services)
- [https://docs.cloud.google.com/service-extensions/docs/overview](https://docs.cloud.google.com/service-extensions/docs/overview)
- [https://docs.cloud.google.com/service-extensions/docs/custom-constraints](https://docs.cloud.google.com/service-extensions/docs/custom-constraints)
- [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview)

## Supporting Pages

### "Configure an extension to call a Google service \_|\_ Service Extensions\

- URL: [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services)
- Source ID: `site-docs-reference`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the sample values provided. cat >traffic callout service.yaml <<EOF apiVersion : networking.gke.io/v1 kind : GCPTrafficExtension metadata : name : traffic-ext spec : targetRefs : - group : "gateway.networking.k8s.io" kind : Gateway name : inference-gateway extensionChains : - name : "chain1-model-armor" matchCondition : celExpressions : - celMatcher : 'request.path == "/v1/chat/completions"' extensions : - name : extension-chain-1-model-armor googleAPIServiceName : modelarmor.us-central1.rep.googleapis.com failOpen : true supportedEvents : - RequestHeaders - RequestBody - RequestTrailers - ResponseHeaders - ResponseBody - ResponseTrailers timeout : 1s metadata : model armor settings : '[ { "model": " MODEL NAME ", "model response template id": "projects/ TEMPLATE PROJECT ID /locations/ LOCATION /templates/ RESPONSE TEMPLATE ", "user prompt template id": "projects/ TEMPLATE PROJECT ID /locations/ LOCATION /templates/ PROMPT TEMPLATE " } ]' EOF Replace the following: MODEL NAME : the name of the model as configured with the InferenceModel resource —for example, meta-llama/Llama-3.1-8B-Instruct TEMPLATE PROJECT ID : the project ID of the Model Armor templates LOCATION : the location of the Model Armor template—for example, us-central1 RESPONSE TEMPLATE : the response template for the model to use PROMPT TEMPLATE : the prompt template for the model to use In the metadata field, specify the Model Armor settings and templates to be used while screening prompts and responses corresponding to specific models.
- Use the gcloud service-extensions lb-traffic-extensions import command with the following sample values. gcloud service-extensions lb-traffic-extensions import traffic-ext \ --source=traffic callout service.yaml \ --location=us-central1 kubectl If you are using a GKE version earlier than v1.32.2-gke.1182001, install the traffic extension CRD: kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/gke-gateway-api/refs/heads/main/config/crd/networking.gke.io gcptrafficextensions.yaml Define the extension in a YAML file.
- Configure a traffic extension to call the Model Armor service You can configure a traffic extension to call Model Armor to uniformly enforce security policies on generative AI inference traffic to application load balancers, including GKE Inference Gateway .
- This command creates the GCPTrafficExtension resource, which links your Inference Gateway to the Model Armor service. kubectl apply -f traffic callout service.yaml Grant the required roles to the Service Extensions service account.

### Service Extensions overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/overview](https://docs.cloud.google.com/service-extensions/docs/overview)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- GKE extensions The Google Kubernetes Engine (GKE) Gateway supports using extensions to add custom code into the load balancing processing path.
- For more information, see Customize GKE Gateway traffic routing using Service Extensions .
- You can configure an extension to call Model Armor to uniformly enforce security policies on inference traffic on application load balancers, including GKE Inference Gateway .
- Service Extensions enables the users of Google Cloud products, such as Cloud Load Balancing and Media CDN, to insert custom code directly into the data path.

### "Manage resources by using custom constraints \_|\_ Service Extensions \_\

- URL: [https://docs.cloud.google.com/service-extensions/docs/custom-constraints](https://docs.cloud.google.com/service-extensions/docs/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Benefits You can use custom organization policies with Service Extensions to do the following: Allow only one type of the load balancing scheme Disallow certain supported events types Restrict the number of extension chains and extensions Before you begin Ensure that you know your organization ID .
- Home Documentation Networking Service Extensions Guides Send feedback Manage resources by using custom constraints Stay organized with collections Save and categorize content based on your preferences.
- Test the policy Test the policy by creating a Cloud Load Balancing traffic extension with the supportedEvents field set to REQUEST BODY : gcloud service-extensions lb-traffic-extensions import TRAFFIC EXTENSION NAME \ --source = PATH TO EXTENSION FILE \ --location = LOCATION ID Replace the following: TRAFFIC EXTENSION NAME : a unique name for the traffic extension PATH TO EXTENSION FILE : the path of the extension file LOCATION ID : the location of the project The output is similar to the following: ERROR: (gcloud.service-extensions.lb-traffic-extensions.import) FAILED PRECONDITION: Operation denied by org policy on resource 'projects/123456/locations/global/lbTrafficExtensions/trafficExtension1': ["customConstraints/custom.prohibitBodyModifyingEvents": "Deny traffic extensions that are called for REQUEST BODY or RESPONSE BODY."].
- Create the constraint To define the constraint, create a file named constraint-deny-body-events.yaml with the following contents: name : organizations/ ORGANIZATION ID /customConstraints/custom.LbTrafficExtensionDenyBodyEvents resourceTypes : - networkservices.googleapis.com/LbTrafficExtension methodTypes : - CREATE - UPDATE condition : resource.extensionChains.exists(chain, chain.extensions.exists(extension, extension.supportedEvents.exists(event, event.contains("BODY")))) actionType : DENY displayName : Deny body modifications by traffic extensions. description : Deny traffic extensions that are called for REQUEST BODY or RESPONSE BODY.

### "Cloud Load Balancing callouts overview \_|\_ Service Extensions \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-extensions/docs/callouts-overview](https://docs.cloud.google.com/service-extensions/docs/callouts-overview)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- What's next Configure a user-managed callout backend service A callout backend service is a prerequisite to configuring route, authorization, and user-managed traffic extensions by using callouts.
- Supported backends for user-managed callout backend services You can host user-managed callout extensions on a backend service that uses one of the following types of backends that run Envoy gRPC services: All managed and unmanaged instance group backends All zonal NEGs All hybrid connectivity NEGs Private Service Connect NEGs pointing to VPC services Serverless NEGs pointing to Cloud Run services Note: When hosting the extension on Cloud Run, the Cloud Run service must listen on a plaintext gRPC port.
- The following diagram shows how you can deploy the callout backend service with a gRPC server on a user-managed compute resource, such as a VM instance or Google Kubernetes Engine (GKE) cluster, and represent it to the load balancer as a regular backend service.
- When using a global external Application Load Balancer, place the callout service backends in the geographic regions where the regular load balancer's destination VMs, GKE workloads, and Cloud Run functions are located.

