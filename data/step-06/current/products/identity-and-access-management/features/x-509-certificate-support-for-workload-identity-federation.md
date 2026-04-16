---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.392Z"
product_name: "Identity and Access Management"
product_slug: "identity-and-access-management"
feature_name: "X.509 certificate support for Workload Identity Federation"
feature_slug: "x-509-certificate-support-for-workload-identity-federation"
latest_feature_date: "2025-05-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity"
  - "https://docs.cloud.google.com/iam/docs/create-managed-workload-identities-gke"
  - "https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation"
  - "https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation"
keywords:
  - "509"
  - "certificate"
  - "for"
  - "workload"
  - "identity"
  - "federation"
  - "supports"
  - "certificates"
---

# X.509 certificate support for Workload Identity Federation

Product: Identity and Access Management
Coverage: MEDIUM

## Step 02 Summary

Workload Identity Federation supports X.509 certificates.

## Extended Definition

Workload Identity Federation supports X.509 certificates.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity)
- [https://docs.cloud.google.com/iam/docs/create-managed-workload-identities-gke](https://docs.cloud.google.com/iam/docs/create-managed-workload-identities-gke)
- [https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation](https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation)
- [https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation](https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation)

## Supporting Pages

### "Example logs for Workload Identity Federation \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity](https://docs.cloud.google.com/iam/docs/audit-logging/examples-workload-identity)
- Source ID: `site-docs-root-2`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Workload Identity Federation, the pertinent log entry looks similar to the following: "keyInfo": [ { "certificateType": "trust anchor" "timeUntilExpiration": 3333405600s "fingerprintSha256": "e33f612a0e426692f29db2c7b17b9e3810ce13f09ad117c67e7227a84fd25ea5" "use": "verify" } This output includes the following values: certificateType : the type of certificate involved in the client certificate verification, which can be either trust anchor or intermediate ca timeUntilExpiration : the remaining time in seconds until certificate expiration when it's used in the certificate chain verification fingerprintSha256 : the hexadecimal representation of the SHA-256 hash of the X.509 certificate Logs for creating short-lived credentials for a service account After you exchange the IdP token for a federated token, you can use the federated token to create short-lived credentials for a service account.
- For Workload Identity Federation, the pertinent log entry looks similar to the following: "keyInfo": [ { "use": "verify" "fingerprint": "3C:B2:47:F8:A5:9A:8A:52:BD:1C:BC:96:B5:45:C1:8D:A7:F1:73:2D" }, { "use": "decrypt" "resourceName": "//iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ WORKLOAD POOL NAME /providers/ PROVIDER NAME /keys/ KEY NAME " } ] This output includes the following values: fingerprint : the hexadecimal representation of the SHA-256 hash of the X.509 certificate that was used to verify the signature on the SAML credential.
- The X.509 certificate is extracted from the SAML XML metadata that is attached to the workload identity pool provider. resourceName : the resource name of the workload identity pool provider key that was used to decrypt the encrypted SAML assertion.
- Logs for X.509 federation Preview — X.509 certificate-based federation This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### "Configure managed workload identity authentication for GKE \_|\_ Identity\

- URL: [https://docs.cloud.google.com/iam/docs/create-managed-workload-identities-gke](https://docs.cloud.google.com/iam/docs/create-managed-workload-identities-gke)
- Source ID: `site-docs-root-2`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It can take a few minutes to create the credentials. kubectl exec -it example-pod -n KUBERNETES NAMESPACE -- ls /var/run/secrets/workload-spiffe-credentials You should see the following output: ca certificates.pem certificates.pem private key.pem trust bundles.json View the certificate To view the certificate, do the following: Export the certificate to a certificate file. kubectl exec -it example-pod --namespace = KUBERNETES NAMESPACE -- cat /var/run/secrets/workload-spiffe-credentials/certificates.pem openssl x509 -noout -text > certfile View the certificate file. cat certfile In the certificate, in the X509v3 Subject Alternative Name attribute, you see the SPIFFE ID, with the following format: spiffe:// PROJECT ID .svc.id.goog/ns/ KUBERNETES NAMESPACE /sa/default default refers to the default Kubernetes ServiceAccount.
- Required roles To get the permissions that you need to create managed workload identities and provision managed workload identity certificates, ask your administrator to grant you the following IAM roles on the project: To create and configure managed workload identities: IAM Workload Identity Pool Admin ( roles/iam.workloadIdentityPoolAdmin ) To create and configure CA pools: CA Service Admin ( roles/privateca.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To set up and use managed workload identities for GKE, complete the following steps: Choose a certificate authority (CA) option Configure your certificate authority Deploy workloads with managed workload identities Optional: Enable trust federation between workload identity pools Google-managed workload identity pool When you add clusters to GKE fleets, GKE automatically creates a Google-managed workload identity pool, which serves as the root of trust, also known as the SPIFFE trust domain for your workloads.
- Doing so authorizes the managed workload identity to get the signed X.509 certificates from the CA's certificate chains. gcloud privateca pools add-iam-policy-binding SUBORDINATE CA POOL ID \ --location= REGION \ --role=roles/privateca.poolReader \ --member="principal://iam.googleapis.com/projects/ PROJECT NUMBER /name/locations/global/workloadIdentityPools/ PROJECT ID .svc.id.goog" \ --project= CA PROJECT ID Replace the following: SUBORDINATE CA POOL ID : The ID of the subordinate CA pool.

### "Integrate Cloud Run and Workload Identity Federation \_|\_ Identity and\

- URL: [https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation](https://docs.cloud.google.com/iam/docs/tutorial-cloud-run-workload-id-federation)
- Source ID: `site-docs-root-2`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This tutorial is intended for administrators who want to integrate Workload Identity Federation with their existing identity provider (IdP).
- Before Workload Identity Federation was launched, this value was the service account key.
- To create a pool using gcloud CLI , run the following: gcloud iam workload-identity-pools create cloudrun-oidc-pool \ --location = "global" \ —-description = "cloudrun-oidc" \ —-display-name = "cloudrun-oidc" Create a workload identity pool provider for OpenID Connect: gcloud iam workload-identity-pools providers create-oidc cloud-run-provider \ --workload-identity-pool = "cloudrun-oidc-pool" \ --issuer-uri = " VAR LINK TO ENDPOINT " \ --location = "global" \ --attribute-mapping = "google.subject=assertion.sub,attribute.isadmin-assertion.isadmin,attribute.aud=assertion.aud" \ --attribute-condition = "attribute.isadmin=='true'" Replace VAR LINK TO ENDPOINT with a variable that contains the link to the Keycloak OIDC endpoint.
- Create a role binding for the user to impersonate the service account: gcloud iam service-accounts add-iam-policy-binding SERVICE ACCOUNT \ --role roles/iam.workloadIdentityUser \ --member "principal://iam.googleapis.com/projects/ $PROJECT NUMBER /locations/global/workloadIdentityPools/cloudrun-oidc-pool/subject/ USER EMAIL Replace the following: SERVICE ACCOUNT with the email address of the service account that you created in Configure your Google Cloud environment .

### "Configure Workforce Identity Federation \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation](https://docs.cloud.google.com/iam/docs/configuring-workforce-identity-federation)
- Source ID: `site-docs-root-2`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- Delete workforce identity federation encryption keys To delete SAML encryption keys run the following command: gcloud iam workforce-pools providers keys delete KEY ID \ --workforce-pool WORKFORCE POOL ID \ --provider WORKFORCE PROVIDER ID \ --location global Replace the following: KEY ID : the key name WORKFORCE POOL ID : the pool ID WORKFORCE PROVIDER ID : the workforce identity pool provider ID Supported SAML encryption algorithms Workforce identity federation supports the following key transport algorithms: http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p http://www.w3.org/2009/xmlenc11#rsa-oaep" http://www.w3.org/2001/04/xmlenc#rsa-1 5" Workforce identity federation supports the following block encryption algorithms: http://www.w3.org/2001/04/xmlenc#aes128-cbc http://www.w3.org/2001/04/xmlenc#aes192-cbc http://www.w3.org/2001/04/xmlenc#aes256-cbc http://www.w3.org/2009/xmlenc11#aes128-gcm http://www.w3.org/2009/xmlenc11#aes256-gcm SAML X.509 signing key requirements The following key specifications apply to SAML X.509 signing keys: An RSA public key that is wrapped in an X.509 v3 certificate .
- Only workforce identity federation has access to the private key. gcloud iam workforce-pools providers keys describe KEY ID \ --workforce-pool WORKFORCE POOL ID \ --provider WORKFORCE PROVIDER ID \ --location global \ --format "value(keyData.key)" \ CERTIFICATE PATH Replace the following: KEY ID : the key name WORKFORCE POOL ID : the pool ID WORKFORCE PROVIDER ID : the workforce identity pool provider ID CERTIFICATE PATH : the path to write the certificate to—for example, saml-certificate.cer or saml-certificate.pem Configure your SAML 2.0-compliant IdP to issue encrypted SAML assertions Configure your SAML IdP to use the public certificate downloaded from the last step to encrypt the SAML assertions that it issues.
- This guide describes how to configure Workforce Identity Federation with an identity provider (IdP) that supports OIDC or SAML 2.0 .
- What's next Configure SCIM in OIDC or SAML IdP Obtain short-lived credentials for Workforce Identity Federation Manage workforce identity pool providers Delete Workforce Identity Federation users and their data Learn which Google Cloud products support Workforce Identity Federation Set up user access to console (federated) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

