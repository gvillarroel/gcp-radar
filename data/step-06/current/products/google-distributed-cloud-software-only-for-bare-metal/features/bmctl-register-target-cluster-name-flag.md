---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.349Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "bmctl register target-cluster-name flag"
feature_slug: "bmctl-register-target-cluster-name-flag"
latest_feature_date: "2023-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-admin-cluster-api"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/hybrid-cluster-creation"
keywords:
  - "bmctl"
  - "register"
  - "target"
  - "cluster"
  - "name"
  - "flag"
  - "adds"
  - "specifying"
---

# bmctl register target-cluster-name flag

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Adds a target-cluster-name flag to bmctl register for specifying the target cluster.

## Extended Definition

Adds a target-cluster-name flag to bmctl register for specifying the target cluster.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-admin-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-admin-cluster-api)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/hybrid-cluster-creation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/hybrid-cluster-creation)

## Supporting Pages

### "Create a user cluster using GKE On-Prem API clients \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)
- Source ID: `site-docs-reference-2`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After you have the necessary credentials, you can run commands using kubectl as you normally would for any Kubernetes cluster, and you don't need to specify the name of the kubeconfig file, for example: kubectl get namespaces Admin workstation Use the bmctl get credentials command to retrieve a kubeconfig file for the newly created user cluster. bmctl get credentials --cluster CLUSTER NAME --admin-kubeconfig ADMIN KUBECONFIG PATH Replace the following: CLUSTER NAME : the name of the target user cluster.
- Be sure to scroll over if needed to fill in the ADMIN CLUSTER NAME placeholder for the --admin-cluster-membership flag. gcloud container bare-metal clusters create USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION \ --version= VERSION \ --admin-users= YOUR EMAIL ADDRESS \ --admin-users= ANOTHER EMAIL ADDRESS \ --enable-manual-lb \ --control-plane-node-configs='node-ip= CP IP ADDRESS 1 ,labels= CP KEY 1.1 = CP VALUE 1.1 ; CP KEY 1.2 = CP VALUE 1.2 ;...' \ --control-plane-vip= CONTROL PLANE VIP \ --control-plane-load-balancer-port= CONTROL PLANE LB PORT \ --ingress-vip= INGRESS VIP \ --island-mode-service-address-cidr-blocks= SERVICE CIDR BLOCK \ --island-mode-pod-address-cidr-blocks= POD CIDR BLOCK \ --lvp-share-path=/mnt/localpv-share \ --lvp-share-storage-class=local-shared \ --lvp-node-mounts-config-path=/mnt/localpv-disk \ --lvp-node-mounts-config-storage-class=local-disks Replace the following: USER CLUSTER NAME : A name of your choice for your user cluster.
- In the --admin-cluster-membership flag, you can use the fully-specified cluster name, which has the following format: projects/ FLEET HOST PROJECT ID /locations/ ADMIN CLUSTER REGION /memberships/ ADMIN CLUSTER NAME Alternativly, you can set --admin-cluster-membership to the admin cluster's name, as in the example command.
- In the --admin-cluster-membership flag, you can use the fully-specified cluster name, which has the following format: projects/ FLEET HOST PROJECT ID /locations/ ADMIN CLUSTER REGION /memberships/ ADMIN CLUSTER NAME Alternativly, you can set --admin-cluster-membership to the admin cluster's name, as in the example command.

### "Create an admin cluster using GKE On-Prem API clients \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-admin-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-admin-cluster-api)
- Source ID: `site-docs-reference-2`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This flag replaces the --name flag, which required you to specify the bootstrap cluster name derived from the admin cluster name. ./bmctl register bootstrap \ --ssh-key= YOUR PRIVATE KEY \ --target-cluster-name= ADMIN CLUSTER NAME \ --project-id= FLEET HOST PROJECT ID \ --gcr-service-account-key=anthos-baremetal-gcr.json \ --gke-agent-service-account-key=connect-agent.json \ --gke-register-service-account-key=connect-register.json \ --cloud-operation-service-account-key=anthos-baremetal-cloud-ops.json Replace the following: YOUR PRIVATE KEY : The path to your private SSH key.
- This command assumes that bmctl is in the current working directory. ./bmctl register bootstrap \ --ssh-key= YOUR PRIVATE KEY \ --target-cluster-name= ADMIN CLUSTER NAME \ --project-id= FLEET HOST PROJECT ID Replace the following: YOUR PRIVATE KEY : The path to your private SSH key.
- If the connection isn't established, check the arguments that you specified to the bmctl register bootstrap command: Make sure that the value for --target-cluster-name matches the Admin cluster name displayed in the Bootstrap environment basics section.
- If there is a problem with the configuration, the console displays an error message that should be clear enough for you to fix the configuration issue and try again to create the cluster. gcloud CLI Before creating the admin cluster, confirm that the bootstrap cluster has been registered as a member of the fleet: gcloud container fleet memberships list \ --project= FLEET HOST PROJECT ID If the bootstrap cluster isn't listed, check the bootstrap cluster name and project ID that you specified to bmctl register bootstrap .

### "Create hybrid clusters \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/hybrid-cluster-creation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/hybrid-cluster-creation)
- Source ID: `site-docs-reference-2`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Afterwards, when creating user clusters by directly applying the cluster and node pool resources to the existing cluster, you must remove this section. gcrKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-gcr.json sshPrivateKeyPath : /path/to/your/ssh private key gkeConnectAgentServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-connect.json gkeConnectRegisterServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-register.json cloudOperationsServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-cloud-ops.json Register your clusters to a fleet .
- To create a cluster configuration file: Run the following command creates the cluster configuration file, creates all needed service accounts, and enables all required APIs: bmctl create config -c CLUSTER NAME </var> --enable-apis \ --create-service-accounts --project-id = CLOUD PROJECT ID Replace the following: CLUSTER NAME : the name of the cluster you're creating.
- Create the hybrid cluster with the cluster configuration Use the bmctl command to create the cluster: bmctl create cluster -c CLUSTER NAME Replace CLUSTER NAME with the name you used when you created the cluster configuration file the previous section.
- The following shows an example of the command to create a cluster named hybrid1 : bmctl create cluster -c hybrid1 Sample hybrid cluster configurations For example hybrid cluster configurations, see Hybrid clusters in the Cluster configuration samples.

