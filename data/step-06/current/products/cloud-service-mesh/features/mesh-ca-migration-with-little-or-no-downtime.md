---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:04.808Z"
product_name: "Cloud Service Mesh"
product_slug: "cloud-service-mesh"
feature_name: "Mesh CA migration with little or no downtime"
feature_slug: "mesh-ca-migration-with-little-or-no-downtime"
latest_feature_date: "2021-06-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices"
  - "https://docs.cloud.google.com/service-mesh/docs/canonical-service"
  - "https://docs.cloud.google.com/service-mesh/docs/canonical-service-controller-enable-and-disable"
  - "https://docs.cloud.google.com/service-mesh/docs/define-canonical-service"
keywords:
  - "mesh"
  - "ca"
  - "migration"
  - "with"
  - "little"
  - "or"
  - "no"
  - "downtime"
---

# Mesh CA migration with little or no downtime

Product: Cloud Service Mesh
Coverage: MEDIUM

## Step 02 Summary

Mesh CA migration with little or no downtime lets workloads transition from Istio CA to Mesh CA using multiple roots of trust to avoid mTLS interruption; Mesh CA migration with little or no downtime lets workloads transition from Istio CA to Mesh CA using multiple roots of trust to avoid mTLS interruption.

## Extended Definition

Mesh CA migration with little or no downtime lets workloads transition from Istio CA to Mesh CA using multiple roots of trust to avoid mTLS interruption; Mesh CA migration with little or no downtime lets workloads transition from Istio CA to Mesh CA using multiple roots of trust to avoid mTLS interruption.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices)
- [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service)
- [https://docs.cloud.google.com/service-mesh/docs/canonical-service-controller-enable-and-disable](https://docs.cloud.google.com/service-mesh/docs/canonical-service-controller-enable-and-disable)
- [https://docs.cloud.google.com/service-mesh/docs/define-canonical-service](https://docs.cloud.google.com/service-mesh/docs/define-canonical-service)

## Supporting Pages

### "Canonical Service Best Practices \_|\_ Cloud Service Mesh \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices)
- Source ID: `site-docs-reference`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Reserve a unique service [namespace, name] across the whole mesh If a Canonical Service deployed in one cluster or region has the same Kubernetes namespace and Canonical Service name as one deployed in another cluster or region, Cloud Service Mesh assumes that it is the same logical service.
- Your ability to see the historical performance of your service, plan, and project capacity all depend on maintaining a single notion of that service in Cloud Service Mesh for the duration of its life.
- The following are not necessarily bad practices, but your Canonical Service may be too big if: There is network traffic between different workloads within a single Canonical Service.
- Home Documentation Networking Cloud Service Mesh Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### Canonical Service \_|\_ Cloud Service Mesh \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service)
- Source ID: `site-docs-reference`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Service Mesh 1.6.8 introduces support for Canonical Services, a conceptual and architectural model for representing your production workloads as a singular service that is easier to observe and manage.
- Canonical Services exist within a single Mesh, which in Cloud Service Mesh means that they are also unique within a fleet and a Google Cloud Project (all of which are one-to-one with Mesh).
- Differentiate between revisions of a Canonical Service by labeling an individual workload with its "canonical revision." This label is an arbitrary string that you can define.
- Home Documentation Networking Cloud Service Mesh Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Enabling and disabling the Canonical Service controller \_|\_ Cloud Service\

- URL: [https://docs.cloud.google.com/service-mesh/docs/canonical-service-controller-enable-and-disable](https://docs.cloud.google.com/service-mesh/docs/canonical-service-controller-enable-and-disable)
- Source ID: `site-docs-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All Canonical Services have been reconciled successfully. servicemeshFeatureState: {} updateTime: '2021-11-16T21:10:36.289467777Z' If the description states that Managed Canonical Service Controller is yielding to the in-cluster controller, follow the migration guide . projects/<your project number>/locations/<location>/memberships/<membership-name>: code: OK description: - Revision(s) ready for use: istiod-asm-173-6.
- See https://cloud.google.com/service-mesh/docs/canonical-service-controller-enable-and-disable#disable-in-cluster-service-controller for instructions on removing the in-cluster controller. servicemeshFeatureState: {} updateTime: '2021-11-16T21:05:43.286828851Z' lifecycleState: ENABLED For any other issues, refer to Resolve Managed Canonical Service Controller issues for troubleshooting guidance.
- While existing deployments of in-cluster controller will continue to operate, we strongly recommend migrating to the managed Canonical Service Controller to ensure compatibility with future releases, access to the latest features, and continued support.
- All managed Cloud Service Mesh installations and in-cluster installations with asmcli from version 1.25 provisioned with the managed Canonical Service controller.

### "Defining a Canonical Service \_|\_ Cloud Service Mesh \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/docs/define-canonical-service](https://docs.cloud.google.com/service-mesh/docs/define-canonical-service)
- Source ID: `site-docs-reference`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The currently supported workload instance types are: Kubernetes Pods (including via Kubernetes Deployments, Kube Run Services, etc.) Virtual Machine instances Mesh-external services (specifically, ServiceEntry resources with a location of MESH EXTERNAL ) What defines Canonical Services Cloud Service Mesh determines the Canonical Service membership by reading the service.istio.io/canonical-name label on the Kubernetes configuration resource associated with each workload instance: For Pods, the label is in the Kubernetes Pod resource For VMs, the label in the Istio WorkloadEntry resource For external services, the label is in the Istio ServiceEntry resource Canonical Services have the same Kubernetes namespace as their associated workload instances and cannot span namespaces.
- Automatic labeling rules Cloud Service Mesh automatically groups your Pod- and VM-based workloads into Canonical Services with no action on your part.
- Label external services manually To label the Canonical Service of a single external service/ServiceEntry, add the service.istio.io/canonical-name label to the "labels" section of your ServiceEntry configuration: apiVersion : networking.istio.io/v1alpha3 kind : ServiceEntry metadata : name : example-com namespace : my-namespace labels : service.istio.io/canonical-name : an-external-service spec : location : MESH EXTERNAL ...
- Automatic labeling in Virtual Machines To build Canonical Services on your VMs, you must add your VMs to a service mesh by configuring a WorkloadEntry resource in your Kubernetes API server.

