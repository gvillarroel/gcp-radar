---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.338Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Identity Service token session duration"
feature_slug: "identity-service-token-session-duration"
latest_feature_date: "2024-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-edge-profile"
keywords:
  - "identity"
  - "token"
  - "session"
  - "duration"
  - "you"
  - "can"
  - "set"
  - "issued"
---

# Identity Service token session duration

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

You can set the session duration for Identity Service-issued tokens between 15 and 1440 minutes.

## Extended Definition

You can set the session duration for Identity Service-issued tokens between 15 and 1440 minutes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-edge-profile](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-edge-profile)

## Supporting Pages

### "Manage identity with GKE Identity Service \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage)
- Source ID: `site-iam-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Identity provider certificates may be issued by either a well-known public certificate authority (CA), or by a private CA.
- Access clusters After GKE Identity Service has been set up, users can sign in to configured clusters using either the command line or the Google Cloud console. (Recommended) Learn how to sign in to registered clusters with your OIDC or LDAP ID in Accessing clusters using GKE Identity Service .
- Troubleshoot the login flow To troubleshoot login flows that authenticate directly on the GKE Identity Service server with a fully qualified domain name (FQDN) , you can use the GKE Identity Service diagnostic utility.
- Google Distributed Cloud supports OpenID Connect (OIDC) and Lightweight Directory Access Protocol (LDAP) as authentication mechanisms for interacting with a cluster's Kubernetes API server, using GKE Identity Service.

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- These RBAC policies also let users sign in to the Google Cloud console using their Google identity, if they have the required Identity and Access Management roles to access the console .
- Specifies whether a reverse proxy is deployed in the cluster to connect Google Cloud console to an on-premises identity provider that is not publicly accessible over the internet.
- Cluster resource Optional Mutable verticalPodAutoscaling.prometheus.auth.bearerTokenAuth.name Required when specifying bearer token authentication.
- Cluster resource Required Mutable verticalPodAutoscaling.prometheus.auth.bearerTokenAuth.key Required when specifying bearer token authentication.

### "Deploy clusters on the edge \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-edge-profile](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-edge-profile)
- Source ID: `site-iam-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Notice that the lines that were updated are highlighted: GSA Key used for provisioning (result of running ./scripts/create-primary-gsa.sh) LOCAL GSA FILE =$ ( pwd ) / build - artifacts / consumer - edge - gsa . json export LOCAL GSA FILE GCP Project ID export PROJECT ID = "abm-edge-project" Bucket to store cluster snapshot information export SNAPSHOT GCS = "abm-edge-project-cluster-snapshots" GCP Project Region (Adjust as desired) export REGION = "us-central1" GCP Project Zone (Adjust as desired) export ZONE = "us-central1-a" Gitlab Personal Access Token credentials (generated in Quick Start step 2) export SCM TOKEN USER = "LarryPage" export SCM TOKEN TOKEN = "oo901Sp-FHuzmz dgl0393atkf69c8L" Default Root Repo setup for multiple locations export ROOT REPO URL = "https://github.com/LarryPage/anthos-samples" export ROOT REPO BRANCH = "main" export ROOT REPO DIR = "/anthos-bm-edge-deployment/acm-config-sink" OIDC Configuration (off by default) export OIDC CLIENT ID = "" # Optional, requires GCP API setup work export OIDC CLIENT SECRET = "" # Optional export OIDC USER = "" # Optional export OIDC ENABLED = "false" # Flip to true IF implementing OIDC on cluster Create Compute Engine instances: ./scripts/cloud/create-cloud-gce-baseline.sh -c " $GCE COUNT " \ tee ./build-artifacts/gce-info Install a bare metal cluster with Ansible The script used in this guide creates clusters in groups of three Compute Engine instances.
- You will need to run the following 2 commands ( cut-copy-paste ) ============================== 1 : ./scripts/health-check.sh 2 : ansible-playbook all-full-install.yaml -i inventory 3 : Type 'exit' to exit the Docker shell after installation ============================== Thank you for using the quick helper script! ( you are now inside the Docker shell ) From inside the Docker container, verify access to the Compute Engine instances: ./scripts/health-check.sh When the script runs successfully, it produces an output like the following: ... cnuc-2 SUCCESS = > { "ansible facts" : { "discovered interpreter python" : "/usr/bin/python3" } , "changed" : false, "ping" : "pong" } cnuc-3 SUCCESS = > { "ansible facts" : { "discovered interpreter python" : "/usr/bin/python3" } , "changed" : false, "ping" : "pong" } cnuc-1 SUCCESS = > { "ansible facts" : { "discovered interpreter python" : "/usr/bin/python3" } , "changed" : false, "ping" : "pong" } From inside the Docker container, run the Ansible playbook for installing a bare metal cluster on Compute Engine instances: Upon completion you will see the Login Token for the cluster printed on screen. ansible-playbook all-full-install.yaml -i inventory tee ./build-artifacts/ansible-run.log When the install runs successfully, it produces an output like the following: ...
- This image has all the tools required for the installation process, such as Ansible, Python, and Google Cloud CLI. gcloud builds submit --config docker-build/cloudbuild.yaml docker-build/ When the build runs successfully, it produces an output like the following: ... latest: digest: sha256:99ded20d221a0b2bcd8edf3372c8b1f85d6c1737988b240dd28ea1291f8b151a size: 4498 DONE ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ID CREATE TIME DURATION SOURCE IMAGES STATUS 2238baa2-1f41-440e-a157-c65900b7666b 2022-08-17T19:28:57+00:00 6M53S gs://my project cloudbuild/source/1660764535.808019-69238d8c870044f0b4b2bde77a16111d.tgz gcr.io/my project/consumer-edge-install (+1 more) SUCCESS Generate the Ansible inventory file from template: envsubst < templates/inventory-cloud-example.yaml > inventory/gcp.yaml Run the installation script that starts a Docker container from the image built previously.
- On your workstation, initialize the environment variables in a new shell instance: export PROJECT ID = " PROJECT ID " export REGION = "us-central1" export ZONE = "us-central1-a" port on the admin Compute Engine instance you use to set up an nginx proxy this allows to reach the workloads inside the cluster via the VM IP export PROXY PORT = "8082" should be a multiple of 3 since N/3 clusters are created with each having 3 nodes export GCE COUNT = "3" url to the fork of: https://github.com/GoogleCloudPlatform/anthos-samples export ROOT REPO URL = "https://github.com/ GITHUB USERNAME /anthos-samples" this is the username used to authenticate to your fork of this repository export SCM TOKEN USER = " GITHUB USERNAME " access token created in the earlier step export SCM TOKEN TOKEN = " ACCESS TOKEN " Replace the following values: PROJECT ID : your Google Cloud project ID.

