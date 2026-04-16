---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:17.040Z"
product_name: "Secure Source Manager"
product_slug: "secure-source-manager"
feature_name: "Organization Policy custom constraints"
feature_slug: "organization-policy-custom-constraints"
latest_feature_date: "2024-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secure-source-manager/docs/cmek"
  - "https://docs.cloud.google.com/secure-source-manager/docs/connect-jenkins"
  - "https://docs.cloud.google.com/secure-source-manager/docs/create-private-service-connect-instance"
  - "https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code"
keywords:
  - "organization"
  - "policy"
  - "custom"
  - "constraints"
  - "can"
  - "now"
  - "be"
  - "used"
---

# Organization Policy custom constraints

Product: Secure Source Manager
Coverage: MEDIUM

## Step 02 Summary

Custom constraints can now be used with Organization Policy to control specific fields on some Secure Source Manager resources.

## Extended Definition

Custom constraints can now be used with Organization Policy to control specific fields on some Secure Source Manager resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secure-source-manager/docs/cmek](https://docs.cloud.google.com/secure-source-manager/docs/cmek)
- [https://docs.cloud.google.com/secure-source-manager/docs/connect-jenkins](https://docs.cloud.google.com/secure-source-manager/docs/connect-jenkins)
- [https://docs.cloud.google.com/secure-source-manager/docs/create-private-service-connect-instance](https://docs.cloud.google.com/secure-source-manager/docs/create-private-service-connect-instance)
- [https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code](https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code)

## Supporting Pages

### "Encrypt data with customer-managed encryption keys \_|\_ Secure Source Manager\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/cmek](https://docs.cloud.google.com/secure-source-manager/docs/cmek)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CMEK organization policies Secure Source Manager supports organization policy constraints that can require CMEK protection.
- Policies can limit which Cloud KMS CryptoKeys can be used for CMEK protection.
- You should see roles on the Role/Member column. gcloud Run the following command to grant access to the Secure Source Manager service account: gcloud kms keys add-iam-policy-binding [ --project = PROJECT ] \ KEY NAME --location LOCATION --keyring = KEY RING \ --member serviceAccount:service- PROJECT NUMBER @gcp-sa-sourcemanager.iam.gserviceaccount.com \ --role roles/cloudkms.cryptoKeyEncrypterDecrypter Replace the following: PROJECT : the ID of the project that contains the key KEY NAME : the key name LOCATION : the key location.
- When Secure Source Manager API is in the Deny policy list of services of constraint constraints/gcp.restrictNonCmekServices , Secure Source Manager refuses to create new instances that aren't CMEK-protected.

### Connect to Jenkins \_|\_ Secure Source Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/connect-jenkins](https://docs.cloud.google.com/secure-source-manager/docs/connect-jenkins)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To grant the Secure Source Manager service agent the Service Account Token Creator ( roles/iam.ServiceAccountTokenCreator ) role, modify the policy.json to add the following: { "role" : "roles/iam.serviceAccountTokenCreator" , "members" : [ "serviceAccount:service- INSTANCE PROJECT NUMBER @gcp-sa-sourcemanager.iam.gserviceaccount.com" ] } Where INSTANCE PROJECT NUMBER is the project number of your Secure Source Manager instance.
- Assign the service account the securesourcemanager.instanceAccessor role by running the following command: gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: SA EMAIL \ --role = roles/securesourcemanager.instanceAccessor Replace the following: PROJECT ID with the Secure Source Manager instance project ID.
- Add the Secure Source Manager instance domain to the Jenkins server SSH known hosts file by running the following command: ssh -t git@ INSTANCE ID - INSTANCE PROJECT NUMBER -ssh.us-central1.sourcemanager.dev Where: INSTANCE ID is the name of your Secure Source Manager instance.
- For example, the following command adds the instance domain for an instance named prod-test-instance with a project number of 123456789 . ssh -t git@prod-test-instance-123456789-ssh.us-central1.sourcemanager.dev Reply yes to add the instance domain to the list of known hosts.

### "Create a Private Service Connect instance \_|\_ Secure Source Manager \_\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/create-private-service-connect-instance](https://docs.cloud.google.com/secure-source-manager/docs/create-private-service-connect-instance)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To initialize the gcloud CLI, run the following command: gcloud init Required roles To get the permissions that you need to create a Private Service Connect Secure Source Manager instance, ask your administrator to grant you the following IAM roles: Access Context Manager Admin role ( roles/accesscontextmanager.policyAdmin ) on the organization Instance Owner role ( roles/securesourcemanager.instanceOwner ) on the instance To create a service identity and Certificate Authority pool: CA Service Operation Manager ( roles/privateca.caManager ) on the organization Create a service identity and Certificate Authority pool This section describes how to use your own CA certificate.
- API Create a Private Service Connect instance with the following command: curl \ -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ https://securesourcemanager.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /instances?instance id = INSTANCE ID \ -H "Content-Type: application/json" \ -d '{"private config":{"is private":true,"ca pool":"projects/ CA PROJECT /locations/ CA LOCATION /caPools/ CA POOL NAME ","custom host config":{"api":" API CUSTOM DOMAIN ", "html":" HTML CUSTOM DOMAIN ", "git ssh":" GIT SSH CUSTOM DOMAIN ", "git http":" GIT HTTP CUSTOM DOMAIN "}}}' Replace the following: INSTANCE ID with the name you want to give the instance.
- Grant the Secure Source Manager API service identity permissions to request new certificates in the CA pool: gcloud privateca pools add-iam-policy-binding CA POOL NAME \ --location = CA LOCATION \ --member = 'serviceAccount:service- PROJECT NUMBER @gcp-sa-sourcemanager.iam.gserviceaccount.com' \ --role = 'roles/privateca.certificateRequester' \ --project = CA PROJECT ID Replace the following: CA POOL NAME with the name you gave your CA pool.
- Roles required to select or create a project Select a project : Selecting a project doesn't require a specific IAM role—you can select any project that you've been granted a role on.

### "Configure CI/CD to store terraform config-as-code \_|\_ Secure Source Manager\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code](https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Grant the required access to your Cloud Build service account: gcloud projects add-iam-policy-binding PROJECT ID \ --member serviceAccount: CLOUDBUILD SA --role roles/editor Replace the following: PROJECT ID with your project ID.
- With this infrastructure, you can always reference the repository to know what configuration is expected in each environment and to propose new changes by first merging them into the dev environment.
- Note: When you add or edit a webhook, the length of the Sensitive Query String might be inconsistent with the entered one, which is expected as placeholder strings are used to ensure security.
- Roles required to select or create a project Select a project : Selecting a project doesn't require a specific IAM role—you can select any project that you've been granted a role on.

