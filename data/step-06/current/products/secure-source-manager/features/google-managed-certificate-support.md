---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:17.039Z"
product_name: "Secure Source Manager"
product_slug: "secure-source-manager"
feature_name: "Google-managed certificate support"
feature_slug: "google-managed-certificate-support"
latest_feature_date: "2025-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secure-source-manager/docs/create-private-service-connect-instance"
  - "https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build-private-service-connect"
  - "https://docs.cloud.google.com/secure-source-manager/docs/cmek"
  - "https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code"
keywords:
  - "managed"
  - "certificate"
  - "can"
  - "now"
  - "be"
  - "used"
  - "when"
  - "creating"
---

# Google-managed certificate support

Product: Secure Source Manager
Coverage: MEDIUM

## Step 02 Summary

A Google-managed certificate can now be used when creating a Private Service Connect Secure Source Manager instance.

## Extended Definition

A Google-managed certificate can now be used when creating a Private Service Connect Secure Source Manager instance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secure-source-manager/docs/create-private-service-connect-instance](https://docs.cloud.google.com/secure-source-manager/docs/create-private-service-connect-instance)
- [https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build-private-service-connect](https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build-private-service-connect)
- [https://docs.cloud.google.com/secure-source-manager/docs/cmek](https://docs.cloud.google.com/secure-source-manager/docs/cmek)
- [https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code](https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code)

## Supporting Pages

### "Create a Private Service Connect instance \_|\_ Secure Source Manager \_\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/create-private-service-connect-instance](https://docs.cloud.google.com/secure-source-manager/docs/create-private-service-connect-instance)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To use a Google-managed certificate without custom domains, you don't need to do anything other than run the gcloud source-manager instances create command without creating a service identity and CA pool.
- Note: You can omit the --ca-pool flag if you use a Google-managed certificate and not using custom domains.
- To initialize the gcloud CLI, run the following command: gcloud init Required roles To get the permissions that you need to create a Private Service Connect Secure Source Manager instance, ask your administrator to grant you the following IAM roles: Access Context Manager Admin role ( roles/accesscontextmanager.policyAdmin ) on the organization Instance Owner role ( roles/securesourcemanager.instanceOwner ) on the instance To create a service identity and Certificate Authority pool: CA Service Operation Manager ( roles/privateca.caManager ) on the organization Create a service identity and Certificate Authority pool This section describes how to use your own CA certificate.
- For example, the following command passes the CA certificate root-cert.pem to the Secure Source Manager API to list repositories in the private instance my-instance in location us-central1 . curl \ --cacert root-cert.pem \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ https://my-instance-01234567890-api.us-central1.sourcemanager.dev/v1/projects/01234567890/locations/us-central1/repositories What's next Connect Cloud Build to a Private Service Connect Secure Source Manager instance .

### "Connect Cloud Build to a Private Service Connect instance \_|\_ Secure Source\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build-private-service-connect](https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build-private-service-connect)
- Source ID: `site-docs-reference`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you use the following YAML file, replace the following: CA POOL NAME : with the CA pool name you used when you created your Private Service Connect instance.
- To grant the service account permissions to access the Secure Source Manager instance, run the following command. gcloud projects add-iam-policy-binding INSTANCE PROJECT ID \ --member = serviceAccount: SA EMAIL \ --role = roles/securesourcemanager.instanceAccessor \ --condition = None To grant the service account permissions to read from Secure Source Manager repositories, run the following command. gcloud projects add-iam-policy-binding INSTANCE PROJECT ID \ --member = serviceAccount: SA EMAIL \ --role = roles/securesourcemanager.repoReader \ --condition = None Set up build logs When you specify your own service account for builds, you must store your build logs either in Cloud Logging or in a user-created Cloud Storage bucket.
- Create forwarding rules to route traffic to the ILBs To create a forwarding rule for routing traffic to the HTTP ILB, run the following command. gcloud compute forwarding-rules create HTTP PROXY FORWARD \ --project = INSTANCE PROJECT ID \ --ports 443 \ --target-tcp-proxy = ILB HTTP TCP TARGET PROXY \ --target-tcp-proxy-region = INSTANCE LOCATION \ --network-tier PREMIUM \ --load-balancing-scheme = INTERNAL MANAGED \ --network = NETWORK \ --subnet = SUBNET \ --subnet-region = INSTANCE LOCATION Where HTTP PROXY FORWARD is the name of the forwarding rule you are creating.
- To create a forwarding rule for routing traffic to the SSH ILB, run the following command. gcloud compute forwarding-rules create SSH PROXY FORWARD \ --project = INSTANCE PROJECT ID \ --ports 22 \ --target-tcp-proxy = ILB SSH TCP TARGET PROXY \ --target-tcp-proxy-region = INSTANCE LOCATION \ --network-tier PREMIUM \ --load-balancing-scheme = INTERNAL MANAGED \ --network = NETWORK \ --subnet = SUBNET \ --subnet-region = INSTANCE LOCATION Where SSH PROXY FORWARD is the name of the forwarding rule you are creating.

### "Encrypt data with customer-managed encryption keys \_|\_ Secure Source Manager\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/cmek](https://docs.cloud.google.com/secure-source-manager/docs/cmek)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Policies can limit which Cloud KMS CryptoKeys can be used for CMEK protection.
- If you are creating your first Secure Source Manager instance in your project, you will need to manually create the Secure Source Manager service agent by running the following command: gcloud beta services identity create \ --service = securesourcemanager.googleapis.com \ --project = PROJECT Where PROJECT is the project ID of the project where you will create your Secure Source Manager instance.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Secure Source Manager.
- Cloud KMS quotas and Secure Source Manager When you use CMEK in Secure Source Manager, your projects can consume Cloud KMS cryptographic requests quotas.

### "Configure CI/CD to store terraform config-as-code \_|\_ Secure Source Manager\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code](https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: When you add or edit a webhook, the length of the Sensitive Query String might be inconsistent with the entered one, which is expected as placeholder strings are used to ensure security.
- When you finish the tasks that are described in this document, you can avoid continued billing by deleting the resources that you created.
- They must include only lower case letters, numbers, or dashes, must begin with a letter, and cannot be changed after creating the webhook.
- This default configuration can make Terraform usage difficult for teams, especially when many users run Terraform at the same time and each machine has its own understanding of the current infrastructure.

