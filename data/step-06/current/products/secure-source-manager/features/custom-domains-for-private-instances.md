---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:17.038Z"
product_name: "Secure Source Manager"
product_slug: "secure-source-manager"
feature_name: "Custom domains for private instances"
feature_slug: "custom-domains-for-private-instances"
latest_feature_date: "2026-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secure-source-manager/docs/create-private-service-connect-instance"
  - "https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code"
  - "https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build-private-service-connect"
  - "https://docs.cloud.google.com/secure-source-manager/docs/cmek"
keywords:
  - "custom"
  - "domains"
  - "for"
  - "private"
  - "instances"
  - "secure"
  - "source"
  - "manager"
---

# Custom domains for private instances

Product: Secure Source Manager
Coverage: MEDIUM

## Step 02 Summary

Private Secure Source Manager instances can use custom domains for their HTML, API, Git HTTP, and Git SSH endpoints.

## Extended Definition

Private Secure Source Manager instances can use custom domains for their HTML, API, Git HTTP, and Git SSH endpoints.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secure-source-manager/docs/create-private-service-connect-instance](https://docs.cloud.google.com/secure-source-manager/docs/create-private-service-connect-instance)
- [https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code](https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code)
- [https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build-private-service-connect](https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build-private-service-connect)
- [https://docs.cloud.google.com/secure-source-manager/docs/cmek](https://docs.cloud.google.com/secure-source-manager/docs/cmek)

## Supporting Pages

### "Create a Private Service Connect instance \_|\_ Secure Source Manager \_\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/create-private-service-connect-instance](https://docs.cloud.google.com/secure-source-manager/docs/create-private-service-connect-instance)
- Source ID: `site-docs-reference`
- Final score: 323
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Private Service Connect Secure Source Manager instance You can assign custom domains to your private instance for the HTML, API, Git HTTP, and Git SSH endpoints.
- API Create a Private Service Connect instance with the following command: curl \ -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ https://securesourcemanager.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /instances?instance id = INSTANCE ID \ -H "Content-Type: application/json" \ -d '{"private config":{"is private":true,"ca pool":"projects/ CA PROJECT /locations/ CA LOCATION /caPools/ CA POOL NAME ","custom host config":{"api":" API CUSTOM DOMAIN ", "html":" HTML CUSTOM DOMAIN ", "git ssh":" GIT SSH CUSTOM DOMAIN ", "git http":" GIT HTTP CUSTOM DOMAIN "}}}' Replace the following: INSTANCE ID with the name you want to give the instance.
- The output is similar to the following: Create request issued for [ my-instance ] . done : false metadata: '@type' : type.googleapis.com/google.cloud.securesourcemanager.v1.OperationMetadata apiVersion: v1 createTime: '2023-02-27T20:57:52.315609549Z' requestedCancellation: false target: projects/my-project/locations/us-central1/instances/my-instance verb: create name: projects/my-project/locations/us-central1/operations/operation-1234567894561-5ec69948c0f2b-60dd727f-a9b97a2e where projects/my-project/locations/us-central1/operations/operation-1234567894561-5ec69948c0f2b-60dd727f-a9b97a2e is the OPERATION NAME.
- For example, the following command passes the CA certificate root-cert.pem to the Secure Source Manager API to list repositories in the private instance my-instance in location us-central1 . curl \ --cacert root-cert.pem \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ https://my-instance-01234567890-api.us-central1.sourcemanager.dev/v1/projects/01234567890/locations/us-central1/repositories What's next Connect Cloud Build to a Private Service Connect Secure Source Manager instance .

### "Configure CI/CD to store terraform config-as-code \_|\_ Secure Source Manager\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code](https://docs.cloud.google.com/secure-source-manager/docs/configure-cicd-terraform-config-as-code)
- Source ID: `site-docs-reference`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To re-authenticate after the initial credential setup, run the following gcloud CLI command: gcloud auth login Clone the solutions-terraform-cloudbuild-gitops repository to your local shell or working environment: git clone https://github.com/GoogleCloudPlatform/solutions-terraform-cloudbuild-gitops.git Add your Secure Source Manager repository as an upstream. git remote add google HTTPS REPO URL Where HTTPS REP URL is the HTTPS URL for your Secure Source Manager repository.
- Home Documentation Application development Secure Source Manager Guides Send feedback Configure CI/CD to store terraform config-as-code Stay organized with collections Save and categorize content based on your preferences.
- In the Secure Source Manager web interface, navigate to the repository you want to create a webhook for.
- Add the Secure Source Manager authentication helper to your global git config by running the following command: git config --global credential. 'https:// . .sourcemanager.dev' .helper gcloud.sh The authentication helper uses the gcloud CLI to fetch your Google Cloud credentials when using Git commands with Secure Source Manager.

### "Connect Cloud Build to a Private Service Connect instance \_|\_ Secure Source\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build-private-service-connect](https://docs.cloud.google.com/secure-source-manager/docs/connect-cloud-build-private-service-connect)
- Source ID: `site-docs-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure your Virtual Private Cloud (VPC) network Reserve an IP range that you want to use to peer the Secure Source Manager VPC with the Cloud Build private pool. gcloud compute addresses create CB PEER RANGE \ --global \ --purpose = VPC PEERING \ --prefix-length = 24 \ --description = "IP range for peering with Cloud Build private pool" \ --network = NETWORK \ --project = INSTANCE PROJECT ID Replace the following: CB PEER RANGE : with the name of the address to create.
- Before you begin Create a Private Service Connect Secure Source Manager instance .
- To grant the service account permissions to access the Secure Source Manager instance, run the following command. gcloud projects add-iam-policy-binding INSTANCE PROJECT ID \ --member = serviceAccount: SA EMAIL \ --role = roles/securesourcemanager.instanceAccessor \ --condition = None To grant the service account permissions to read from Secure Source Manager repositories, run the following command. gcloud projects add-iam-policy-binding INSTANCE PROJECT ID \ --member = serviceAccount: SA EMAIL \ --role = roles/securesourcemanager.repoReader \ --condition = None Set up build logs When you specify your own service account for builds, you must store your build logs either in Cloud Logging or in a user-created Cloud Storage bucket.
- Enable the APIs Required roles To get the permissions that you need to connect Cloud Build to a Private Service Connect Secure Source Manager instance, ask your administrator to grant you the Access Context Manager Admin role ( roles/accesscontextmanager.policyAdmin ) IAM role on the organization.

### "Encrypt data with customer-managed encryption keys \_|\_ Secure Source Manager\

- URL: [https://docs.cloud.google.com/secure-source-manager/docs/cmek](https://docs.cloud.google.com/secure-source-manager/docs/cmek)
- Source ID: `site-docs-reference`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It must match the location where you want to deploy a Secure Source Manager instance OPERATION : The identifier of the key handle request operation from the output of the previous step The output is similar to the following: { "name" : "projects/ PROJECT /locations/ LOCATION /operations/ OPERATION " , "done" : true , "response" : { "@type" : "type.googleapis.com/google.cloud.kms.v1.KeyHandle" , "name" : "projects/ PROJECT /locations/ LOCATION /keyHandles/ KEY HANDLE " , "kmsKey" : "projects/ PROJECT /locations/ LOCATION /keyRings/autokey/cryptoKeys/ KEY NAME " , "resourceTypeSelector" : "securesourcemanager.googleapis.com/Instance" } } The value of the kmsKey element in the output is the full resource ID of the key created by Cloud KMS Autokey for this resource.
- Home Documentation Application development Secure Source Manager Guides Send feedback Encrypt data with customer-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.
- When Secure Source Manager API is in the Deny policy list of services of constraint constraints/gcp.restrictNonCmekServices , Secure Source Manager refuses to create new instances that aren't CMEK-protected.
- When constraints/gcp.restrictCmekCryptoKeyProjects is configured, Secure Source Manager creates CMEK-protected instances that are protected by a CryptoKey from an allowed project, folder, or organization.

