---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.058Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "GKE Identity Service v2"
feature_slug: "gke-identity-service-v2"
latest_feature_date: "2024-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console"
keywords:
  - "gke"
  - "identity"
  - "v2"
  - "improves"
  - "authentication"
  - "third"
  - "party"
  - "solutions"
---

# GKE Identity Service v2

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

GKE Identity Service v2 improves authentication with third-party identity solutions.

## Extended Definition

GKE Identity Service v2 in Google Distributed Cloud (software only) for VMware enables cluster-console authentication through external identity providers by configuring OpenID Connect (OIDC) for clusters. The service documentation states this configuration is done per cluster and supports third-party OIDC identity providers (for example, Okta or Microsoft AD FS) for console login. The provided excerpts do not explicitly document behavior specific to a “v2” label, so evidence is limited to documented OIDC-based identity integration.

## Evidence Summary

The cited Google Distributed Cloud console documentation provides direct evidence of GKE Identity Service setup workflows for third-party OIDC authentication at cluster level.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console)

## Supporting Pages

### "Manage clusters from the Google Cloud console \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- You can find out how to set up third-party OIDC authentication for your clusters in the following guides: Configure clusters for GKE Identity Service with OIDC : This guide shows you how to set up OIDC authentication on a cluster by cluster basis.
- OpenID Connect (OIDC) : This option lets users log in to clusters from the console using their identity from a third-party OIDC identity provider such as Okta or Microsoft AD FS.
- Set up Google identity authentication To let users log in to the cluster using their Google identity, you need to configure the following: Users need specific Identity and Access Management (IAM) roles to be able to see and interact with clusters in the console on the GKE Clusters list .
- Login with Google identity is the simplest approach to authentication in the console, particularly if you are trying out Google Distributed Cloud with a minimal installation, and so we have described how to set this up in more detail below in Set up Google identity authentication .

### "Logging and monitoring \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- For more information about using third-party solutions with Google Distributed Cloud, see the following: Collect logs on Google Distributed Cloud with Splunk Connect Stretching Elastic's capabilities with historical analysis, backups, and cross-cloud monitoring on Google Cloud Platform How logging and monitoring for Google Distributed Cloud works Logging and monitoring agents are installed and activated in each cluster when you create a new admin or user cluster.
- Options for Google Distributed Cloud You have several logging and monitoring options for your Google Distributed Cloud: Cloud Logging and Cloud Monitoring Google Cloud Managed Service for Prometheus ( Preview ) Validated configurations with third-party solutions.
- Google Distributed Cloud (software only) for VMware includes multiple options for cluster logging and monitoring, including cloud-based managed services, open source tools, and validated compatibility with third-party commercial solutions.
- Third-party solutions Google has worked with several third-party logging and monitoring solution providers to help their products work well with Google Distributed Cloud.

### "Logging and monitoring \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)
- Source ID: `site-docs-reference-3`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- For more information about using third-party solutions with Google Distributed Cloud, see the following: Collect logs on Google Distributed Cloud with Splunk Connect Stretching Elastic's capabilities with historical analysis, backups, and cross-cloud monitoring on Google Cloud Platform How logging and monitoring for Google Distributed Cloud works Logging and monitoring agents are installed and activated in each cluster when you create a new admin or user cluster.
- Options for Google Distributed Cloud You have several logging and monitoring options for your Google Distributed Cloud: Cloud Logging and Cloud Monitoring Google Cloud Managed Service for Prometheus ( Preview ) Validated configurations with third-party solutions.
- Google Distributed Cloud (software only) for VMware includes multiple options for cluster logging and monitoring, including cloud-based managed services, open source tools, and validated compatibility with third-party commercial solutions.
- Third-party solutions Google has worked with several third-party logging and monitoring solution providers to help their products work well with Google Distributed Cloud.

