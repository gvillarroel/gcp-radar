---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:29.455Z"
product_name: "Anthos Attached Clusters"
product_slug: "anthos-attached-clusters"
feature_name: "Improved cluster attachment workflow"
feature_slug: "improved-cluster-attachment-workflow"
latest_feature_date: "2022-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster"
keywords:
  - "improved"
  - "workflow"
  - "process"
  - "attachment"
  - "simplified"
  - "attaching"
  - "cluster"
---

# Improved cluster attachment workflow

Product: Anthos Attached Clusters
Coverage: MEDIUM

## Step 02 Summary

Simplified the process for attaching clusters to Google Cloud infrastructure in the current Anthos Attached Clusters generation.

## Extended Definition

Simplified the process for attaching clusters to Google Cloud infrastructure in the current Anthos Attached Clusters generation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster)

## Supporting Pages

### "Attach your CNCF conformant cluster \_|\_ GKE attached clusters \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When attaching your cluster, you must specify the following: A supported Google Cloud administrative region A platform version The administrative region is a Google Cloud region to administer your attached cluster from.
- When attaching or updating your cluster, you must choose a platform version whose minor version is the same as or one level below the Kubernetes version of your cluster.
- Note: If you're attaching an Amazon EKS or Azure AKS cluster, see Attach your EKS cluster or Attach your AKS cluster .
- GOOGLE CLOUD REGION : the Google Cloud region to administer your cluster PROJECT NUMBER : the fleet host project where the cluster will be registered PLATFORM VERSION : the GKE attached clusters version to use for the cluster ISSUER URL : the issuer URL retrieved earlier KUBECONFIG CONTEXT : context in the kubeconfig for accessing your cluster, as extracted earlier KUBECONFIG PATH : path to your kubeconfig Authorize Cloud Logging / Cloud Monitoring Note: Starting with Kubernetes version 1.28, manual policy binding to authorize the gke-system/gke-telemetry-agent service account for log and metric collection is no longer necessary.

### Attach your AKS cluster \_|\_ GKE attached clusters \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GOOGLE CLOUD REGION : the Google Cloud region to administer your cluster PROJECT NUMBER : the Fleet host project where the cluster will be registered PLATFORM VERSION : the GKE attached clusters version to use for the cluster ISSUER URL : the issuer URL retrieved earlier KUBECONFIG CONTEXT : context in the kubeconfig for accessing your cluster, as extracted earlier KUBECONFIG PATH : path to your kubeconfig Note: If attaching your cluster fails, the system automatically rolls back any changes made to Google Cloud resources related to the cluster, such as workload identity pool.
- When attaching your cluster, you must specify the following: A supported Google Cloud administrative region A platform version The administrative region is a Google Cloud region to administer your attached cluster from.
- When attaching or updating your cluster, you must choose a platform version whose minor version is the same as or one level below the Kubernetes version of your cluster.
- Run this command to extract your cluster's kubeconfig context and store it in the KUBECONFIG CONTEXT environment variable: KUBECONFIG CONTEXT = $( kubectl config current-context ) Use the gcloud container attached clusters register command to register the cluster: gcloud container attached clusters register CLUSTER NAME \ --location = GOOGLE CLOUD REGION \ --fleet-project = PROJECT NUMBER \ --platform-version = PLATFORM VERSION \ --distribution = aks \ --issuer-url = ISSUER URL \ --context = KUBECONFIG CONTEXT \ --kubeconfig = KUBECONFIG PATH Replace the following: CLUSTER NAME : the name of your cluster.

### Attach your EKS cluster \_|\_ GKE attached clusters \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GOOGLE CLOUD REGION : the Google Cloud region to administer your cluster PLATFORM VERSION : the GKE attached clusters version to use for the cluster PROJECT NUMBER : the fleet host project where the cluster will be registered ISSUER URL : the issuer URL retrieved earlier KUBECONFIG CONTEXT : context in the kubeconfig for accessing the EKS cluster, as extracted earlier KUBECONFIG PATH : path to your kubeconfig Note: If attaching your cluster fails, the system automatically rolls back any changes made to Google Cloud resources related to the cluster, such as workload identity pool.
- When attaching or updating your cluster, you must choose a platform version whose minor version is the same as or one level below the Kubernetes version of your cluster.
- When attaching your cluster, you must specify: a supported Google Cloud administrative region and a platform version.
- Run this command to extract your cluster's kubeconfig context and store it in the KUBECONFIG CONTEXT environment variable: KUBECONFIG CONTEXT = $( kubectl config current-context ) Use the gcloud container attached clusters register command to register the cluster: gcloud container attached clusters register CLUSTER NAME \ --location = GOOGLE CLOUD REGION \ --fleet-project = PROJECT NUMBER \ --platform-version = PLATFORM VERSION \ --distribution = eks \ --issuer-url = ISSUER URL \ --context = KUBECONFIG CONTEXT \ --kubeconfig = KUBECONFIG PATH Replace: AWS REGION : the AWS region where your EKS cluster is located CLUSTER NAME : the name of your cluster.

