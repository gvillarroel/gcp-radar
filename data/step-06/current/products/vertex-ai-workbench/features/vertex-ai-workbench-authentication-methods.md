---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.253Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench authentication methods"
feature_slug: "vertex-ai-workbench-authentication-methods"
latest_feature_date: "2023-07-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication"
  - "https://docs.cloud.google.com/vertex-ai/docs/authentication"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "authentication"
  - "methods"
  - "instances"
  - "both"
  - "end"
---

# Vertex AI Workbench authentication methods

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Workbench instances support both end-user and service account authentication.

## Extended Definition

Vertex AI Workbench instances support both end-user and service account authentication.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication)
- [https://docs.cloud.google.com/vertex-ai/docs/authentication](https://docs.cloud.google.com/vertex-ai/docs/authentication)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access)

## Supporting Pages

### Authenticate to Vertex AI Workbench \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication)
- Source ID: `site-docs-reference-2`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Learn more about access control for Vertex AI Workbench instances: Vertex AI Workbench instances access control Manage access to a Vertex AI Workbench instance Manage access to JupyterLab in Vertex AI Workbench instances Learn more about access control for Vertex AI Workbench user-managed notebooks instances: User-managed notebooks access control Manage access to a Vertex AI Workbench user-managed notebooks instance Manage access to JupyterLab in user-managed notebooks Learn more about access control for Vertex AI Workbench managed notebooks instances: Managed notebooks access control Manage access to a managed notebooks instance Manage access to JupyterLab in managed notebooks Learn about Google Cloud authentication methods .
- Set the --service-account flag to the email address for the service account that you created. gcloud compute instances create INSTANCE NAME --zone = ZONE --service-account = SERVICE ACCOUNT EMAIL For more information about authenticating to Google APIs, see Authentication methods .
- Set up authentication for Vertex AI Workbench How you set up authentication depends on the environment where your code is running.
- You can access the API in the following ways: Client libraries Google Cloud CLI REST Client libraries The Vertex AI Workbench client libraries provide high-level language support for authenticating to Vertex AI Workbench programmatically.

### Authenticate to Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/authentication](https://docs.cloud.google.com/vertex-ai/docs/authentication)
- Source ID: `site-api-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set the --service-account flag to the email address for the service account that you created. gcloud compute instances create INSTANCE NAME --zone = ZONE --service-account = SERVICE ACCOUNT EMAIL For more information about authenticating to Google APIs, see Authentication methods .
- Set up authentication for Vertex AI How you set up authentication depends on the environment where your code is running.
- If you're trying to authenticate to Vertex AI Workbench, see Authenticate to Vertex AI Workbench .
- For more information about Google Cloud authentication, see the Authentication methods .

### Manage access to a Vertex AI Workbench instance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access)
- Source ID: `site-docs-reference-2`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the command data below, make the following replacements: INSTANCE NAME : the name of your instance PROJECT ID : your Google Cloud project ID LOCATION : the zone where your instance is located Save the following content in a file called request.json : { "policy" : { "bindings" : [ { "role" : "roles/notebooks.viewer" , "members" : [ "user:email@example.com" ] }, { "role" : "roles/notebooks.admin" , "members" : [ "user:eve@example.com" ] } ], "etag" : "BwWWja0YfJA=" , "version" : 3 } } Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances set-iam-policy INSTANCE NAME \ --project = PROJECT ID \ --location = LOCATION \ request.json --format = json Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances set-iam-policy INSTANCE NAME --project = PROJECT ID --location = LOCATION request.json --format = json Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances set-iam-policy INSTANCE NAME ^ --project = PROJECT ID ^ --location = LOCATION ^ request.json --format = json Grant access to the JupyterLab interface Granting a principal access to a Vertex AI Workbench instance doesn't grant the ability to use the instance's JupyterLab interface.
- Retrieve the current policy Before using any of the command data below, make the following replacements: INSTANCE NAME : the name of your instance PROJECT ID : your Google Cloud project ID LOCATION : the zone where your instance is located Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances get-iam-policy INSTANCE NAME \ --project = PROJECT ID \ --location = LOCATION Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances get-iam-policy INSTANCE NAME --project = PROJECT ID --location = LOCATION Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances get-iam-policy INSTANCE NAME ^ --project = PROJECT ID ^ --location = LOCATION The response is the text of your instance's IAM policy.
- Grant access to Vertex AI Workbench instances To grant users permission to access a specific Vertex AI Workbench instance, set an IAM policy on the instance. gcloud To grant a role to a principal on a Vertex AI Workbench instance, use the get-iam-policy command to retrieve the current policy, edit the current policy's access, and then use the set-iam-policy command to update the policy on the instance.
- For general information about how to grant, change, and revoke access to resources unrelated to Vertex AI Workbench, for example, to grant access to a Google Cloud project, see the IAM documentation for managing access to projects, folders, and organizations .

