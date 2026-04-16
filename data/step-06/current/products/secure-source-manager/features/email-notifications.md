---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:17.040Z"
product_name: "Secure Source Manager"
product_slug: "secure-source-manager"
feature_name: "Email notifications"
feature_slug: "email-notifications"
latest_feature_date: "2024-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secure-source-manager/docs/use-git"
  - "https://docs.cloud.google.com/secure-source-manager/docs/connect-jenkins"
  - "https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code"
  - "https://docs.cloud.google.com/secure-source-manager/docs/overview"
keywords:
  - "email"
  - "notifications"
  - "secure"
  - "source"
  - "manager"
  - "now"
  - "supports"
---

# Email notifications

Product: Secure Source Manager
Coverage: MEDIUM

## Step 02 Summary

Secure Source Manager now supports email notifications.

## Extended Definition

Secure Source Manager now supports email notifications.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secure-source-manager/docs/use-git](https://docs.cloud.google.com/secure-source-manager/docs/use-git)
- [https://docs.cloud.google.com/secure-source-manager/docs/connect-jenkins](https://docs.cloud.google.com/secure-source-manager/docs/connect-jenkins)
- [https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code](https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code)
- [https://docs.cloud.google.com/secure-source-manager/docs/overview](https://docs.cloud.google.com/secure-source-manager/docs/overview)

## Supporting Pages

### "Use Git source code management \_|\_ Secure Source Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/use-git](https://docs.cloud.google.com/secure-source-manager/docs/use-git)
- Source ID: `site-docs-root`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create the VM: gcloud compute instances create VM NAME \ --project = PROJECT ID \ --zone = ZONE \ --scopes = openid,https://www.googleapis.com/auth/userinfo.profile,https://www.googleapis.com/auth/userinfo.email,https://www.googleapis.com/auth/cloud-platform \ --service-account = SA NAME @ PROJECT ID .iam.gserviceaccount.com Grant IAM roles to the service account Grant the service account access to the Secure Source Manager instance and repository: Grant instance access: SA EMAIL = $( gcloud compute instances describe VM NAME --project = PROJECT ID --zone = ZONE --format = "get(serviceAccounts[0].email)" ) gcloud projects add-iam-policy-binding PROJECT ID \ --member = "serviceAccount: $SA EMAIL " \ --role = roles/securesourcemanager.instanceAccessor Grant repository read access.
- To grant read access to a specific repository, run the following command: gcloud ssm repos add-iam-policy-binding REPOSITORY ID \ --instance = INSTANCE ID \ --location = LOCATION \ --member = "serviceAccount: $SA EMAIL " \ --role = roles/securesourcemanager.repoReader Replace the following: REPOSITORY ID : The repository ID.
- Secure Source Manager supports all Git SCM client commands and has built in pull requests and issue tracking.
- Required roles To get the permissions that you need to use Git to interact with a Secure Source Manager repository, ask your administrator to grant you the following IAM roles: Secure Source Manager Instance Accessor ( roles/securesourcemanager.instanceAccessor ) on the Secure Source Manager instance To clone a repository: Secure Source Manager Repo Reader ( roles/securesourcemanager.repoReader ) on the repository To push to a repository: Secure Source Manager Repo Writer ( roles/securesourcemanager.repoWriter ) on the repository For more information about granting roles, see Manage access to projects, folders, and organizations .

### Connect to Jenkins \_|\_ Secure Source Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/connect-jenkins](https://docs.cloud.google.com/secure-source-manager/docs/connect-jenkins)
- Source ID: `site-docs-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Assign the service account the securesourcemanager.instanceAccessor role by running the following command: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: SA EMAIL \ --role = roles/securesourcemanager.instanceAccessor Replace the following: PROJECT ID with the Secure Source Manager instance project ID.
- Add the Secure Source Manager instance domain to the Jenkins server SSH known hosts file by running the following command: ssh -t git@ INSTANCE ID - INSTANCE PROJECT NUMBER -ssh.us-central1.sourcemanager.dev Where: INSTANCE ID is the name of your Secure Source Manager instance.
- Secure Source Manager only supports RSA type keys.
- Required roles To get the permissions that you need to create Jenkins build triggers, ask your administrator to grant you the following IAM roles: Secure Source Manager Repo Admin ( roles/securesourcemanager.repoAdmin ) on your repository Secure Source Manager Instance Accessor ( roles/securesourcemanager.instanceAccessor ) on the Secure Source Manager instance For more information about granting roles, see Manage access to projects, folders, and organizations .

### "Configure CI/CD to store terraform config-as-code \_|\_ Secure Source Manager\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code](https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To re-authenticate after the initial credential setup, run the following gcloud CLI command: gcloud auth login Clone the solutions-terraform-cloudbuild-gitops repository to your local shell or working environment: git clone https://github.com/GoogleCloudPlatform/solutions-terraform-cloudbuild-gitops.git Add your Secure Source Manager repository as an upstream. git remote add google HTTPS REPO URL Where HTTPS REP URL is the HTTPS URL for your Secure Source Manager repository.
- Add the Secure Source Manager authentication helper to your global git config by running the following command: git config --global credential. 'https:// . .sourcemanager.dev' .helper gcloud.sh The authentication helper uses the gcloud CLI to fetch your Google Cloud credentials when using Git commands with Secure Source Manager.
- Replace PROJECT ID with your project ID. gcloud config set project PROJECT ID Enable the required APIs: gcloud services enable cloudbuild.googleapis.com compute.googleapis.com securesourcemanager.googleapis.com This step might take a few minutes to finish.
- Home Documentation Application development Secure Source Manager Guides Send feedback Configure CI/CD to store terraform config-as-code Stay organized with collections Save and categorize content based on your preferences.

### Secure Source Manager overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/overview](https://docs.cloud.google.com/secure-source-manager/docs/overview)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Notifications Secure Source Manager can send you notifications for events in pull requests and issues in which you're participating or for repositories you're watching.
- Security compliance Secure Source Manager is in compliance with the following certifications: FedRAMP High compliant HIPAA compliant Configure a private Secure Source Manager instance in a VPC Service Controls perimeter You can use Secure Source Manager in a VPC Service Controls perimeter in order to guard against data exfiltration.
- Home Documentation Application development Secure Source Manager Guides Send feedback Secure Source Manager overview Stay organized with collections Save and categorize content based on your preferences.
- If you have specific compliance or regulatory requirements related to the keys that protect your data, you can use customer-managed encryption keys (CMEK) for creating a Secure Source Manager instance.

