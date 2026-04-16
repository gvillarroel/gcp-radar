---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.946Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Cloud SQL Auth proxy v2 service account impersonation"
feature_slug: "cloud-sql-auth-proxy-v2-service-account-impersonation"
latest_feature_date: "2023-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator"
  - "https://docs.cloud.google.com/sql/docs/mysql/authentication"
  - "https://docs.cloud.google.com/sql/docs/mysql/authorize-networks"
keywords:
  - "sql"
  - "auth"
  - "proxy"
  - "v2"
  - "account"
  - "impersonation"
  - "adds"
---

# Cloud SQL Auth proxy v2 service account impersonation

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL Auth proxy v2 adds support for service account impersonation.

## Extended Definition

Cloud SQL Auth proxy v2 adds support for service account impersonation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator](https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator)
- [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication)
- [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks)

## Supporting Pages

### "Connect using the Cloud SQL Proxy Operator \_|\_ Cloud SQL for MySQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator](https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator)
- Source ID: `site-docs-reference-3`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You will need to use the version and cli arguments specified here to use cert-manager on your GKE cluster. helm repo add jetstack https://charts.jetstack.io helm repo update helm install \ cert-manager jetstack/cert-manager \ --namespace cert-manager \ --version "v1.9.1" \ --create-namespace \ --set global.leaderElection.namespace = cert-manager \ --set installCRDs = true Install the Cloud SQL Proxy Operator to your kubernetes cluster: kubectl apply -f https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy-operator/v1.7.6/cloud-sql-proxy-operator.yaml Wait for the Cloud SQL Proxy Operator to start. kubectl rollout status deployment -n cloud-sql-proxy-operator-system cloud-sql-proxy-operator-controller-manager --timeout = 90s Confirm that the Cloud SQL Proxy Operator is installed and running: kubectl get pods -n cloud-sql-proxy-operator-system What's next Learn more about the Cloud SQL Auth Proxy .
- Overview The Cloud SQL Proxy Operator configures applications deployed on Google Kubernetes Engine (GKE) to connect to Cloud SQL database instances using the Cloud SQL Auth Proxy.
- Using the Cloud SQL Auth Proxy is the recommended method for connecting to a Cloud SQL instance.
- To learn more about the Cloud SQL Auth Proxy, see About the Cloud SQL Auth Proxy .

### "Authorize with authorized networks \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks)
- Source ID: `site-docs-reference-required-5`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID network range 1 An authorized ip address or range network range 2 Another authorized ip address or range HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "ipConfiguration": { "authorizedNetworks": [{"value": " network range 1 "}, {"value": " network range 2 "}] } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID network range 1 An authorized ip address or range network range 2 Another authorized ip address or range HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "ipConfiguration": { "authorizedNetworks": [{"value": " network range 1 "}, {"value": " network range 2 "}] } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id " PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Save the request body in a file named request.json , and execute the following command: curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id " PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### IAM authentication \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication)
- Source ID: `site-docs-reference-3`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If a Cloud SQL instance already has an IAM user ( CLOUD IAM USER ) or service account ( CLOUD IAM SERVICE ACCOUNT ) and you want to switch the account to use IAM group authentication ( CLOUD IAM GROUP USER or CLOUD IAM GROUP SERVICE ACCOUNT ), then you must remove the existing IAM user or service account from the instance first.
- Context-aware access and IAM database authentication If you're using context-aware access in your IAM configuration, then you can't use a Cloud SQL connector such as the Cloud SQL Auth Proxy or one of the Cloud SQL Language Connectors with IAM database authentication.
- Automatic IAM database authentication Automatic IAM database authentication lets you hand off requesting and managing access tokens to an intermediary Cloud SQL connector , such as the Cloud SQL Auth Proxy or one of the Cloud SQL Language Connectors.
- User and service account administration To provide users and service accounts access to databases on an instance using IAM database authentication, you need to add them to the instance or add them to a group that has access to the instance.

