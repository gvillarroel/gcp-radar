---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.361Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Generic Kubernetes resource sync"
feature_slug: "generic-kubernetes-resource-sync"
latest_feature_date: "2019-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync"
keywords:
  - "generic"
  - "kubernetes"
  - "resource"
  - "sync"
  - "allows"
  - "anthos"
  - "config"
  - "management"
---

# Generic Kubernetes resource sync

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Generic Kubernetes resource sync allows Anthos Config Management to sync Kubernetes resources without resource-specific handling.

## Extended Definition

Generic Kubernetes resource sync allows Anthos Config Management to sync Kubernetes resources without resource-specific handling.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)

## Supporting Pages

### Grant Config Sync access to your Git repository \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add the GitHub App configuration to a new Secret in the cluster by using either the client or application ID: client ID kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace = config-management-system \ --from-literal = github-app-client-id = CLIENT ID \ --from-literal = github-app-installation-id = INSTALLATION ID \ --from-file = github-app-private-key = /path/to/GITHUB PRIVATE KEY \ --from-literal = github-app-base-url = BASE URL Replace CLIENT ID with the client ID for the GitHub App.
- The argument can otherwise be omitted and defaults to https://api.github.com/ . application ID kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace = config-management-system \ --from-literal = github-app-application-id = APPLICATION ID \ --from-literal = github-app-installation-id = INSTALLATION ID \ --from-file = github-app-private-key = /path/to/GITHUB PRIVATE KEY \ --from-literal = github-app-base-url = BASE URL Replace APPLICATION ID with the application ID for the GitHub App.
- To create the binding that lets the Kubernetes service account act as the Google service account, run the following command: gcloud iam service-accounts add-iam-policy-binding \ GSA NAME @ PROJECT ID .iam.gserviceaccount.com \ --role = roles/iam.workloadIdentityUser \ --member = "serviceAccount: FLEET HOST PROJECT ID .svc.id.goog[config-management-system/ KSA NAME ]" \ --project = PROJECT ID Replace the following: FLEET HOST PROJECT ID : if you use Workload Identity Federation for GKE, the value is the same as PROJECT ID .
- You can find instructions for some common Git hosting providers in the following list: Secure Source Manager Bitbucket GitHub GitLab Create the git-creds Secret with the private key: kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace = config-management-system \ --from-file = ssh = /path/to/KEYPAIR PRIVATE KEY FILENAME Note: If you need to use a proxy, pass the --from-literal=https proxy= HTTPS PROXY URL flag.

### "Monitor RootSync and RepoSync objects \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- To get the ResourceGroup object for a RootSync object: kubectl get resourcegroup ROOT SYNC NAME -n config-management-system -o yaml To get the ResourceGroup object for a RepoSync object: kubectl get resourcegroup REPO SYNC NAME -n REPO SYNC NAMESPACE -o yaml Replace the following: ROOT SYNC NAME : the name of the ResourceGroup object that you want to look up.
- To view the reconciliation status for the RootSync object, run the following command: kubectl get resourcegroup.kpt.dev ROOT SYNC NAME -n config-management-system -o yaml Replace the ROOT SYNC NAME with the name of the RootSync object.
- For example, for the RootSync object with the name root-sync in the namespace config-management-system , the corresponding ResourceGroup object is also root-sync in the namespace config-management-system .
- To change log verbosity, use the .spec.override.logLevels field as shown in the following example: apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : override : logLevels : - containerName : "reconciler" logLevel : 0 - containerName : "git-sync" logLevel : 10 The value in the containerName field must be one of the following: reconciler , git-sync , hydration-controller , oci-sync , or helm-sync .

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- It must be disabled before migrating." echo "This can be done by unsetting the spec.hierarchyController field on ConfigManagement." exit 1 fi kubectl delete deployment -n config-management-system config-management-operator --ignore-not-found --cascade = foreground if kubectl get configmanagement config-management &> /dev/null ; then kubectl patch configmanagement config-management --type = "merge" -p '{"metadata":{"finalizers":[]}}' kubectl delete configmanagement config-management --cascade = orphan --ignore-not-found fi kubectl delete clusterrolebinding config-management-operator --ignore-not-found kubectl delete clusterrole config-management-operator --ignore-not-found kubectl delete serviceaccount -n config-management-system config-management-operator --ignore-not-found kubectl delete customresourcedefinition configmanagements.configmanagement.gke.io --ignore-not-found Install the new Config Sync version To upgrade Config Sync, complete the following steps for each enrolled cluster: Download the Config Sync manifest and nomos commands for the new version.
- This binding lets the Config Sync Kubernetes service account act as the Google service account: gcloud iam service-accounts add-iam-policy-binding \ GSA NAME @ PROJECT ID .iam.gserviceaccount.com \ --role = roles/iam.workloadIdentityUser \ --member = "serviceAccount: FLEET HOST PROJECT ID .svc.id.goog[config-management-system/ KSA NAME ]" \ --project = PROJECT ID Replace the following: PROJECT ID : the organization's project ID.
- For example: kubectl create ns config-management-system && kubectl create secret generic ROOT CA CERT SECRET NAME --namespace=config-management-system --from-file=cert= /path/to/CA CERT FILE When you configure Config Sync , set the value of the caCertSecretRef.name field in the RootSync object to ROOT CA CERT SECRET NAME .
- If you don't use an HTTPS proxy, create the Secret with the following command: kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace=config-management-system \ --from-file=cookie file= /path/to/COOKIEFILE If you need to use an HTTPS proxy, add it to the Secret together with cookiefile by running the following command: kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace=config-management-system \ --from-file=cookie file= /path/to/COOKIEFILE \ --from-literal=https proxy= HTTPS PROXY URL Replace the following: /path/to/COOKIEFILE : the appropriate path and filename HTTPS PROXY URL : the URL for the HTTPS proxy that you use when communicating with the Git repository Note: We don't recommend using an HTTP proxy for security reasons.

