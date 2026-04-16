---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.343Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "GKE Identity Service v2"
feature_slug: "gke-identity-service-v2"
latest_feature_date: "2024-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/anthos-ui"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
keywords:
  - "gke"
  - "identity"
  - "v2"
  - "improves"
  - "security"
  - "flow"
  - "when"
  - "authenticating"
---

# GKE Identity Service v2

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

GKE Identity Service v2 improves the security flow when authenticating with third-party identity solutions; Provides an improved authentication flow with third-party identity solutions.

## Extended Definition

GKE Identity Service v2 improves the security flow when authenticating with third-party identity solutions; Provides an improved authentication flow with third-party identity solutions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/anthos-ui](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/anthos-ui)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)

## Supporting Pages

### "Manage identity with GKE Identity Service \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage)
- Source ID: `site-iam-reference`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Troubleshoot the login flow To troubleshoot login flows that authenticate directly on the GKE Identity Service server with a fully qualified domain name (FQDN) , you can use the GKE Identity Service diagnostic utility.
- Access clusters After GKE Identity Service has been set up, users can sign in to configured clusters using either the command line or the Google Cloud console. (Recommended) Learn how to sign in to registered clusters with your OIDC or LDAP ID in Accessing clusters using GKE Identity Service .
- Google Distributed Cloud supports OpenID Connect (OIDC) and Lightweight Directory Access Protocol (LDAP) as authentication mechanisms for interacting with a cluster's Kubernetes API server, using GKE Identity Service.
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Manage identity with GKE Identity Service Stay organized with collections Save and categorize content based on your preferences.

### "Manage clusters from the Google Cloud console \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/anthos-ui](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/anthos-ui)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Be sure to include your Google Account in the command because the command overwrites the grant list with the users that you specify in the command. gcloud container bare-metal clusters update USER CLUSTER NAME \ --admin-users YOUR GOOGLE ACCOUNT \ --admin-users ADMIN GOOGLE ACCOUNT 1 \ In addition to granting the Kubernetes clusterrole/cluster-admin role, the command grants the RBAC policies the users need to access the cluster through the Connect gateway . bmctl To apply the RBAC policies to users, do the following steps on your admin workstation: Add the clusterSecurity.authorization section to your cluster configuration file.
- Set up Google identity authentication To let users log in to the cluster using their Google identity, you need to configure the following: Users need specific Identity and Access Management (IAM) roles to be able to see and interact with clusters in the console on the GKE clusters page.
- You can find out how to set up third-party OIDC authentication for your clusters in the following guides: Configure clusters for GKE Identity Service with OIDC : This guide shows you how to set up OIDC authentication on a cluster by cluster basis.
- To do this, you need to do the following steps: Set up an authentication method Grant users specific Identity and Access Management roles Set up authentication As described previously, all clusters appear in the GKE clusters page in the console.

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- When using Prometheus as a persistent history provider for vertical Pod autoscaling, use the following fully qualified domain name (FQDN): http://prometheus.prometheus.svc.cluster.local:9090 The FQDN follows standard Kubernetes naming conventions for internal DNS names : prometheus : the name of the Kubernetes Service (the Prometheus application service itself). prometheus : the name of the Kubernetes Namespace where the service is running. svc : Indicates that this is a Service resource type within the cluster. cluster.local : the default domain suffix for the Kubernetes cluster internal network.
- In this case, when using Prometheus as a custom metrics provider for horizontal Pod autoscaling, use the following fully qualified domain name (FQDN): http://prometheus.k8s.svc.cluster.local:9090 The FQDN follows standard Kubernetes naming conventions for internal DNS names : prometheus : The name of the Kubernetes Service (the Prometheus application service itself). k8s : The name of the Kubernetes Namespace where the service is running. svc : Indicates that this is a Service resource type within the cluster. cluster.local : The default domain suffix for the Kubernetes cluster internal network.
- The following list shows the launch stage per version for configuring a node-level private registry: 1.30 and later: GA 1.29: Preview Cluster resource Optional Mutable nodeConfig.privateRegistries.caCertSecretRef When applicable, use this section to specify the name and namespace of the Secret that was created to store the CA certificate (server root CA) for the private registry.
- The following list shows the launch stage per version for configuring a node-level private registry: 1.30 and later: GA 1.29: Preview Cluster resource Optional Mutable nodeConfig.privateRegistries.pullCredentialSecretRef When applicable, use this section to specify the name and namespace of the Secret that was created to store the private registry credentials.

