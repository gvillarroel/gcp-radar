---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.279Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "Sensitive data from GKE Secrets"
feature_slug: "sensitive-data-from-gke-secrets"
latest_feature_date: "2020-01-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/secrets"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions"
keywords:
  - "sensitive"
  - "configure"
  - "secrets"
  - "resources"
---

# Sensitive data from GKE Secrets

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector can configure Google Cloud resources using sensitive data stored in GKE Secrets.

## Extended Definition

Config Connector can configure Google Cloud resources using sensitive data stored in GKE Secrets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/secrets](https://docs.cloud.google.com/config-connector/docs/how-to/secrets)
- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)

## Supporting Pages

### "Using Secrets to store sensitive data \_|\_ Config Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/secrets](https://docs.cloud.google.com/config-connector/docs/how-to/secrets)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using Secrets to store sensitive data You can use a Secret to store sensitive configuration information, such as passwords and access keys, in your GKE cluster.
- Secrets and Kubernetes namespaces Because Kubernetes does not allow access to secrets across Namespaces, if you are using the same secret value for resources from different Namespaces, you must apply secrets in every Namespace.
- Copy the following YAML into a file named enable-sql.yaml apiVersion : serviceusage.cnrm.cloud.google.com/v1beta1 kind : Service metadata : name : sqladmin.googleapis.com Apply enable-sql.yaml to your cluster with kubectl : kubectl apply -f enable-sql.yaml --namespace CC NAMESPACE Replace CC NAMESPACE with the namespace Config Connector manages resources from. gcloud To enable the SQL Admin API with the Google Cloud CLI, run the following command: gcloud services enable sqladmin.googleapis.com Creating a Cloud SQL Server Copy the YAML below into a file named sql-server-example.yaml .
- This declares secret-1 , referenced in the prior section. apiVersion : v1 kind : Secret metadata : name : secret-1 stringData : password : PASSWORD Apply the configurations to your cluster. kubectl apply -n CC NAMESPACE -f example-secret.yaml kubectl apply -n CC NAMESPACE -f sql-server-example.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.

### "Configure container resources and replicas \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a file named configure-webhook-manager.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : replicas : 3 containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use kubectl apply to apply the modified configuration to your cluster: kubectl apply -f configure-webhook-manager.yaml Verify the successful configuration by running the following command. kubectl get controllerresource cnrm-webhook-manager -o jsonpath='{.status.healthy}' It should display status.healthy field set to true .
- For example, to configure the memory request and limit of the webhook container of the cnrm-webhook-manager controller, create and apply the following YAML file: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use NamespacedControllerResource for the namespaced controller manager Use the NamespacedControllerResource custom resource only to configure resources for the cnrm-controller-manager when Config Connector is running in namespaced mode.
- After deletion, the Config Connector operator recreates the controllers with the default container resources and replicas. kubectl delete -f configure-webhook-manager.yaml Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can configure the following controllers: cnrm-webhook-manager cnrm-controller-manager cnrm-deletiondefender cnrm-resource-stats-recorder cnrm-unmanaged-detector (Config Connector version 1.108 and later) There are two types of custom resources used for configuration: ControllerResource and NamespacedControllerResource .

### Access control with IAM \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use the IAMPolicyMember or IAMPartialPolicy resources in Config Connector to configure IAM permissions.
- Project owner permissions To allow Config Connector to manage a specific project's resources, complete the following steps: Create the following YAML manifest: apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPolicyMember metadata : name : iampolicymember-orglevel-permission namespace : NAMESPACE spec : member : serviceAccount: SERVICE ACCOUNT NAME @ HOST PROJECT ID . iam.gserviceaccount.com role : roles/owner resourceRef : kind : Project external : projects/ PROJECT ID Replace the following: NAMESPACE with the name of your namespace SERVICE ACCOUNT NAME with your service account name HOST PROJECT ID with the host project ID of your service account roles/owner with the appropriate role PROJECT ID with your target project ID Apply the YAML manifest to your cluster using kubectl or any config management tools of your choice.
- Predefined roles If you prefer to grant more limited permissions to Config Connector, you can assign one or more IAM roles to your Config Connector installation by creating a few IAMPolicyMember resources or a combined IAMPartialPolicy resource.
- As an example, you create one IAM service account for each project, organize resources from each project in the same Kubernetes namespace, and then bind the corresponding IAM service account to the Kubernetes namespace.

