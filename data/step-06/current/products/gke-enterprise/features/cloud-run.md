---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.959Z"
product_name: "GKE Enterprise"
product_slug: "gke-enterprise"
feature_name: "Cloud Run"
feature_slug: "cloud-run"
latest_feature_date: "2019-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/anthos-connectivity"
  - "https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/deployment-options"
  - "https://docs.cloud.google.com/kubernetes-engine/enterprise/knative-serving/docs"
  - "https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/roles-tasks"
keywords:
  - "run"
  - "runs"
  - "stateless"
  - "containers"
  - "on"
  - "fully"
  - "managed"
  - "serverless"
---

# Cloud Run

Product: GKE Enterprise
Coverage: MEDIUM

## Step 02 Summary

Cloud Run runs stateless containers on a fully managed serverless platform.

## Extended Definition

Cloud Run runs stateless containers on a fully managed serverless platform.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/anthos-connectivity](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/anthos-connectivity)
- [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/deployment-options](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/deployment-options)
- [https://docs.cloud.google.com/kubernetes-engine/enterprise/knative-serving/docs](https://docs.cloud.google.com/kubernetes-engine/enterprise/knative-serving/docs)
- [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/roles-tasks](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/roles-tasks)

## Supporting Pages

### "Impact of temporary disconnection from Google Cloud \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/anthos-connectivity](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/anthos-connectivity)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- No impact Unlimited - Other network services Feature Connected behavior Temporary disconnection behavior Maximum disconnection tolerance Loss of connectivity workaround DNS The Kubernetes DNS server runs inside the cluster.
- If Hashicorp Vault runs on your on-premises cluster and the disconnection also impacts it, then secret storage and key management aren't available during the disconnection.
- Although Distributed Cloud runs on-premises, we design it to have a permanent connection to Google Cloud for a number of reasons, including monitoring and management.
- If your proxy runs on-premises, the cluster is still able to use it during a temporary disconnection.

### "GKE deployment options \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/deployment-options](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/deployment-options)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Application deployment Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) Knative serving Google Cloud Marketplace Application migration Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) Migrate to Containers VM management Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) VM Runtime on Google Distributed Cloud What's next Version and upgrade support Managed Cloud Service Mesh supported features In-cluster Cloud Service Mesh supported features Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Feature Available on GKE standard clusters Available on Autopilot clusters Available without fleet membership Config Sync Policy Controller Config Controller Cloud Service Mesh in-cluster Managed Cloud Service Mesh Knative serving Migrate to Containers GKE Identity Service Binary Authorization Multi Cluster Ingress Cloud Logging and Cloud Monitoring for GKE system components Advanced security posture and compliance monitoring Node to node encryption FQDN network policies Features available on clusters outside of Google Cloud The following tables show which key Google Cloud and GKE features are available on clusters outside of Google Cloud.
- Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) Network plugin Container storage interface (CSI) & hybrid storage Bundled L4 load balancer Platform-native load balancers N/A N/A N/A Operations and management Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) GKE dashboard in the Google Cloud console Connect Gateway Cloud Logging and Cloud Monitoring Prometheus/Grafana Security and Identity Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) GKE Identity Service Fleet workload identity Cloud Audit Logs Binary Authorization Service management Feature GDC (VMware) GDC (bare metal) GKE on AWS GKE on Azure Attached clusters GDC (connected) Cloud Service Mesh in-cluster Managed Cloud Service Mesh Service dashboards in the Google Cloud console Cloud Service Mesh certificate authority Cloud Service Mesh integration with Certificate Authority Service For the list of attached clusters that Cloud Service Mesh supports, see Supported platforms .
- Enable GKE API Enabling this API gives you access to the GKE, which includes the following features: Config Sync Policy Controller Config Controller Migrate to Containers GKE Identity Service Cloud Logging and Cloud Monitoring for GKE system components Security posture dashboard Node to node encryption FQDN network policies Enable related products and features To use the following products and features with GKE, you must enable each of these features individually.

### Knative serving documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/enterprise/knative-serving/docs](https://docs.cloud.google.com/kubernetes-engine/enterprise/knative-serving/docs)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. format list numbered Guides Deploy an application to Knative serving Set up Knative serving Map custom domains Use managed TLS certificates and HTTPS find in page Reference gcloud commands Container runtime contract Supported cluster versions Quotas and limits info Resources Pricing Release notes Troubleshooting Support Related resources Training and tutorials Use cases Code samples Explore self-paced training, use cases, reference architectures, and code samples with examples of how to use and connect Google Cloud services.
- Home Technology areas Google Kubernetes Engine (GKE) GKE Enterprise Knative serving Documentation Knative serving documentation Read product documentation Knative serving is Google's managed and fully supported Knative offering.
- Knative serving abstracts away the complexity of Kubernetes, making it easy to build and deploy your serverless workloads across hybrid and multi-cloud environments .
- Code sample Code Samples C# HelloWorld Knative sample that can be run on Knative serving.

### "Common GKE user roles and tasks \_|\_ Google Kubernetes Engine (GKE) \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/roles-tasks](https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/concepts/roles-tasks)
- Source ID: `site-iam-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Ensure all resources running within the cloud platform meet organizational compliance requirements by providing and maintaining automation to enforce compliance, such as backup policies.
- They play a crucial role in ensuring that an organization's network is running smoothly and efficiently, allowing employees to access the resources they need to do their jobs.
- Application developers Application developers write the code for applications that eventually run on a cloud platform like Google Cloud.
- Power up, connect, and set up the devices or appliances on site so that teams can move data successfully.

