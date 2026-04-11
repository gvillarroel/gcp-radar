---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:22.786Z"
product_name: "GKE Enterprise"
product_slug: "gke-enterprise"
feature_name: "Google Kubernetes Engine"
feature_slug: "google-kubernetes-engine"
latest_feature_date: "2019-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/enterprise/docs"
  - "https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/architecture/hybrid-environment"
  - "https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/deployment-options"
keywords:
  - "kubernetes"
  - "engine"
  - "provides"
  - "managed"
  - "clusters"
  - "on"
---

# Google Kubernetes Engine

Product: GKE Enterprise
Coverage: MEDIUM

## Step 02 Summary

Google Kubernetes Engine provides managed Kubernetes clusters on Google Cloud.

## Extended Definition

Google Kubernetes Engine provides managed Kubernetes clusters on Google Cloud.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs)
- [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/architecture/hybrid-environment](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/architecture/hybrid-environment)
- [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/deployment-options](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/deployment-options)

## Supporting Pages

### "Google Kubernetes Engine documentation \_|\_ Google Kubernetes Engine (GKE)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Training Training and tutorials Architecting with Kubernetes Engine This course features a combination of lectures, demos, and hands-on labs to help you explore and deploy solution elements—including infrastructure components like pods, containers, deployments, and services—along with networks and application services.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Google Kubernetes Engine documentation Read product documentation Deploy, manage, and scale containerized applications on Kubernetes, powered by Google Cloud.
- Use case Use cases Best practices for continuous integration and delivery to Google Kubernetes Engine Learn best practices for continuous integration and continuous delivery to GKE, from source control to deployment strategies.
- CI/CD GitOps Use case Use cases Configuring privately used public IPs for GKE Apply privately used public IP addresses for Google Kubernetes Engine pod address blocks.

### "Reference architecture: Hybrid environment for Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/architecture/hybrid-environment](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/architecture/hybrid-environment)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Send feedback Reference architecture: Hybrid environment for Google Kubernetes Engine clusters Stay organized with collections Save and categorize content based on your preferences.
- This page is for Cloud architects who want to design and build a a hybrid environment for Google Kubernetes Engine clusters.
- For more information, see Kubernetes basics , and the Google Kubernetes Engine (GKE) documentation .
- The following architecture diagram provides an overview of a complete GKE deployment in a hybrid environment that's explained in detail in the reference architecture: In the previous diagram, Google Cloud-based services help you manage logging and monitoring data, store container images, and provide configuration management.

### "GKE deployment options \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/deployment-options](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/deployment-options)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page shows the Google Cloud features that are available on each of the following environments: Google Kubernetes Engine (GKE) on Google Cloud Google Distributed Cloud (GKE on-premises): On VMware On bare metal Google Distributed Cloud connected deployments GKE Multi-Cloud: GKE on AWS GKE on Azure GKE attached clusters , which are third-party Kubernetes clusters registered to your fleet .
- Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) Network plugin Container storage interface (CSI) & hybrid storage Bundled L4 load balancer Platform-native load balancers N/A N/A N/A Operations and management Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) GKE dashboard in the Google Cloud console Connect Gateway Cloud Logging and Cloud Monitoring Prometheus/Grafana Security and Identity Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) GKE Identity Service Fleet workload identity Cloud Audit Logs Binary Authorization Service management Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) Cloud Service Mesh in-cluster Managed Cloud Service Mesh Service dashboards in the Google Cloud console Cloud Service Mesh certificate authority Cloud Service Mesh integration with Certificate Authority Service For the list of attached clusters that Cloud Service Mesh supports, see Supported platforms .
- Application deployment Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) Knative serving Google Cloud Marketplace Application migration Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) Migrate to Containers VM management Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) VM Runtime on Google Distributed Cloud What's next Version and upgrade support Managed Cloud Service Mesh supported features In-cluster Cloud Service Mesh supported features Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Feature Available on GKE standard clusters Available on Autopilot clusters Available without fleet membership Config Sync Policy Controller Config Controller Cloud Service Mesh in-cluster Managed Cloud Service Mesh Knative serving Migrate to Containers GKE Identity Service Binary Authorization Multi Cluster Ingress Cloud Logging and Cloud Monitoring for GKE system components Advanced security posture and compliance monitoring Node to node encryption FQDN network policies Features available on clusters outside of Google Cloud The following tables show which key Google Cloud and GKE features are available on clusters outside of Google Cloud.

