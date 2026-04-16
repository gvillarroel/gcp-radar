---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.314Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "OIDC and AD FS authentication"
feature_slug: "oidc-and-ad-fs-authentication"
latest_feature_date: "2019-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console"
keywords:
  - "oidc"
  - "ad"
  - "fs"
  - "authentication"
  - "clusters"
  - "can"
  - "configured"
  - "use"
---

# OIDC and AD FS authentication

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Clusters can be configured to use OIDC and AD FS for authentication.

## Extended Definition

Google Distributed Cloud for VMware supports configuring clusters to use OpenID Connect (OIDC) for cluster authentication through the in-cluster GKE Identity Service, which is wired as the Kubernetes API server authentication webhook during cluster lifecycle configuration. Users can use this OIDC-based setup to sign in from the command line or the Google Cloud console (console specifically for OIDC), using their existing identity provider. The provided excerpts do not explicitly mention AD FS, so AD FS support cannot be confirmed from these sources.

## Evidence Summary

The cited pages confirm OIDC-based cluster authentication via GKE Identity Service and indicate supported provider workflows, but only OIDC (with mention of LDAP) is explicitly named.

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console)

## Supporting Pages

### "Manage identity with GKE Identity Service \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication)
- Source ID: `site-docs-reference-2`
- Final score: 133
- Re-rank relevance: STRONG
- Re-rank rationale: The page states GKE Identity Service uses OIDC and explicitly cites ADFS as a usable OpenID provider.

Evidence snippets:
- If you already use or want to use Google IDs to log in to your GKE clusters instead of an OIDC or LDAP provider, we recommend using the Connect gateway for authentication.
- Google Distributed Cloud supports OpenID Connect (OIDC) and Lightweight Directory Access Protocol (LDAP) as authentication mechanisms for interacting with a cluster's Kubernetes API server, using GKE Identity Service.
- During cluster lifecycle phases, the API Server is dynamically configured to use the in-cluster GKE Identity Service as the authentication webhook for all incoming requests.
- Users can log in to and use your clusters from the command line (all providers) or from the Google Cloud console (OIDC only), all using your existing identity provider.

### "Manage identity with GKE Identity Service \_|\_ Google Distributed Cloud\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/authentication)
- Source ID: `site-docs-reference-3`
- Final score: 133
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly says Google Distributed Cloud supports OIDC and gives ADFS as an example OpenID provider, directly confirming OIDC/AD FS authentication scenarios.

Evidence snippets:
- If you already use or want to use Google IDs to log in to your GKE clusters instead of an OIDC or LDAP provider, we recommend using the Connect gateway for authentication.
- Google Distributed Cloud supports OpenID Connect (OIDC) and Lightweight Directory Access Protocol (LDAP) as authentication mechanisms for interacting with a cluster's Kubernetes API server, using GKE Identity Service.
- During cluster lifecycle phases, the API Server is dynamically configured to use the in-cluster GKE Identity Service as the authentication webhook for all incoming requests.
- Users can log in to and use your clusters from the command line (all providers) or from the Google Cloud console (OIDC only), all using your existing identity provider.

### "Manage clusters from the Google Cloud console \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- You can find out how to set up third-party OIDC authentication for your clusters in the following guides: Configure clusters for GKE Identity Service with OIDC : This guide shows you how to set up OIDC authentication on a cluster by cluster basis.
- Set up Google identity authentication To let users log in to the cluster using their Google identity, you need to configure the following: Users need specific Identity and Access Management (IAM) roles to be able to see and interact with clusters in the console on the GKE Clusters list .
- To do this, your registered clusters must be set up with one of the following authentication methods: Google identity : This option lets users log in using their Google Cloud identity, which is the email address associated with your Google Cloud account.
- To do this, you need to: Set up an authentication method Grant users specific Identity and Access Management roles Set up authentication As described previously, all fleet clusters appear in the GKE clusters lists in the console.

