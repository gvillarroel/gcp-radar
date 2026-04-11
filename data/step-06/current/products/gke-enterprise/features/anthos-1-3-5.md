---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:22.780Z"
product_name: "GKE Enterprise"
product_slug: "gke-enterprise"
feature_name: "Anthos 1.3.5"
feature_slug: "anthos-1-3-5"
latest_feature_date: "2020-11-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/anthos-connectivity"
  - "https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/roles-tasks"
  - "https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/deployment-options"
keywords:
  - "anthos"
  - "is"
  - "gke"
  - "enterprise"
  - "release"
  - "that"
  - "updated"
  - "on"
---

# Anthos 1.3.5

Product: GKE Enterprise
Coverage: MEDIUM

## Step 02 Summary

Anthos 1.3.5 is a GKE Enterprise release that updated Anthos GKE on-prem and Anthos Config Management.

## Extended Definition

Anthos 1.3.5 is a GKE Enterprise release that updated Anthos GKE on-prem and Anthos Config Management.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/anthos-connectivity](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/anthos-connectivity)
- [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/roles-tasks](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/roles-tasks)
- [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/deployment-options](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/deployment-options)

## Supporting Pages

### "Impact of temporary disconnection from Google Cloud \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/anthos-connectivity](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/anthos-connectivity)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For workloads that require additional resiliency through a temporary disconnection, you can use GKE Identity Service to integrate with an LDAP or OIDC provider (including ADFS ) to configure end-user authentication.
- Zero None Support This section covers the scenarios that you might have to go through while interacting with Google Cloud support or your operating partner for a case related to your GKE on GDC clusters.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- This table lists the behavior of features related to licensing and metering in case of temporary disconnection from Google Cloud: Feature Connected behavior Temporary disconnection behavior Maximum disconnection tolerance Loss of connectivity workaround License validation The metering controller generates and refreshes the license entitlement custom resource periodically, as long as anthos.googleapis.com is enabled in the Google Cloud project.

### "Common GKE user roles and tasks \_|\_ Google Kubernetes Engine (GKE) \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/roles-tasks](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/roles-tasks)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Autopilot Standard In the GKE documentation, each document is often written for a specific need or to help solve a business problem that you might have.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- The following common user roles are part of the high-level Data and AI specialists area: Data engineers Data administrators Data scientists Machine learning (ML) engineers This section explains the common user roles that are part of the Data and AI specialists area.
- The following common user roles are part of the high-level Storage specialists area: Storage administrators Backup and disaster recovery (DR) administrators On-site ops This section explains the common user roles that are part of the Storage specialists area.

### "GKE deployment options \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/deployment-options](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/deployment-options)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) Network plugin Container storage interface (CSI) & hybrid storage Bundled L4 load balancer Platform-native load balancers N/A N/A N/A Operations and management Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) GKE dashboard in the Google Cloud console Connect Gateway Cloud Logging and Cloud Monitoring Prometheus/Grafana Security and Identity Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) GKE Identity Service Fleet workload identity Cloud Audit Logs Binary Authorization Service management Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) Cloud Service Mesh in-cluster Managed Cloud Service Mesh Service dashboards in the Google Cloud console Cloud Service Mesh certificate authority Cloud Service Mesh integration with Certificate Authority Service For the list of attached clusters that Cloud Service Mesh supports, see Supported platforms .
- This page shows the Google Cloud features that are available on each of the following environments: Google Kubernetes Engine (GKE) on Google Cloud Google Distributed Cloud (GKE on-premises): On VMware On bare metal Google Distributed Cloud connected deployments GKE Multi-Cloud: GKE on AWS GKE on Azure GKE attached clusters , which are third-party Kubernetes clusters registered to your fleet .
- Enable GKE and related features This section describes how to enable the features that are described on this page.
- Application deployment Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) Knative serving Google Cloud Marketplace Application migration Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) Migrate to Containers VM management Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) VM Runtime on Google Distributed Cloud What's next Version and upgrade support Managed Cloud Service Mesh supported features In-cluster Cloud Service Mesh supported features Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

