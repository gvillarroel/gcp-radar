---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:13:34.953Z"
product_name: "Certificate Authority Service"
product_slug: "certificate-authority-service"
feature_name: "Workforce Identity Federation support"
feature_slug: "workforce-identity-federation-support"
latest_feature_date: "2023-07-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/certificate-authority-service/docs/creating-certificate-template"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings"
keywords:
  - "integration"
  - "federation"
  - "workforce"
  - "identity"
  - "supports"
  - "now"
  - "certificate"
  - "authority"
---

# Workforce Identity Federation support

Product: Certificate Authority Service
Coverage: LOW

## Step 02 Summary

Certificate Authority Service now supports integration with Workforce Identity Federation.

## Extended Definition

Certificate Authority Service now supports integration with Workforce Identity Federation.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/certificate-authority-service/docs/creating-certificate-template](https://docs.cloud.google.com/certificate-authority-service/docs/creating-certificate-template)
- [https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection](https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection)
- [https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings](https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings)

## Supporting Pages

### "Create a certificate template \_|\_ Certificate Authority Service \_|\_\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/creating-certificate-template](https://docs.cloud.google.com/certificate-authority-service/docs/creating-certificate-template)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click Next , and then click, Done . gcloud gcloud privateca templates create TEMPLATE ID \ --copy-subject \ --copy-sans \ --identity-cel-expression <expr> \ --predefined-values-file FILE PATH \ --copy-all-requested-extensions \ --copy-extensions-by-oid <1.2.3.4,5.6.7.8> \ --copy-known-extensions <ext1,ext2> Replace the following: TEMPLATE ID : the unique identifier of the certificate template.
- Workload identity certificates To create a certificate template for issuing mutual TLS (mTLS) certificates, use the following instructions: Create a file with the name leaf mtls values.yaml and add the following end-entity mutual TLS configuration to it. leaf mtls values.yaml keyUsage : baseKeyUsage : digitalSignature : true keyEncipherment : true extendedKeyUsage : serverAuth : true clientAuth : true caOptions : isCa : false To only allow certificates with SPIFFE URI SANs, use the following gcloud command: gcloud gcloud privateca templates create workload - spiffe \ -- predefined - values - file leaf mtls values . yaml \ -- copy - sans -- no - copy - subject \ -- identity - cel - expression "subject alt names.all(san, san.type == URI && san.value.startsWith('spiffe://'))" For more information about the gcloud privateca templates create command, see gcloud privateca templates create .
- DNS server TLS certificates for any domain To create a certificate template for issuing server TLS certificates that allow any domain, use the following instructions: Create a file with the name leaf server tls values.yaml and add the following end-entity server TLS configuration to it: leaf server tls values.yaml keyUsage : baseKeyUsage : digitalSignature : true keyEncipherment : true extendedKeyUsage : serverAuth : true caOptions : isCa : false To only allow certificates with DNS -type SANs, execute following gcloud command: gcloud gcloud privateca templates create server - tls \ -- predefined - values - file leaf server tls values . yaml \ -- copy - sans -- no - copy - subject \ -- identity - cel - expression "subject alt names.all(san, san.type == DNS)" For more information about the gcloud privateca templates create command, see gcloud privateca templates create .
- DNS server TLS certificates with only test domains To create a certificate template for issuing server TLS certificates with DNS SANs limited to test domains, use the following gcloud command: gcloud gcloud privateca templates create server - tls \ -- predefined - values - file leaf server tls values . yaml \ -- copy - sans -- no - copy - subject \ -- identity - cel - expression "subject alt names.all(san, san.type == DNS && san.value.endsWith('.test.example.com'))" The contents of the leaf server tls values.yaml file must be the same as the previous example.

### "Issue certificates that attest to third-party identity \_|\_ Certificate\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection](https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Exchange your third-party token for a federated OAuth token using the STS token endpoint: curl export STS TOKEN=curl -L -X POST 'https://sts.googleapis.com/v1/token' -H 'Content-Type: application/json' \ -d '{ "grant type": "urn:ietf:params:oauth:grant-type:token-exchange", "audience": "//iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ IDENTITY POOL ID /providers/ PROVIDER ID ", "requested token type": "urn:ietf:params:oauth:token-type:access token", "scope": "https://www.googleapis.com/auth/cloud-platform", "subject token": "'$ID TOKEN'", "subject token type": "urn:ietf:params:oauth:token-type:jwt" }' python3 -c "import sys;import json; print(json.load(sys.stdin)['access token'])" Client libraries Create a credential configuration file named oidc token.txt that the certificate requesting code can read to perform a token exchange. gcloud iam workload - identity - pools create - cred - config projects / PROJECT NUMBER / locations / global / workloadIdentityPools / IDENTITY POOL ID -- output - file =/ tmp / cred config . json -- credential - source - file =/ tmp / oidc token . txt Read the oidc token.txt file to set the authorization mechanism in the client library: python import json from google.auth import identity pool with open ( '/tmp/cred config.json' , 'r' ) as f : json config info = json . loads ( f . read ()) credentials = identity pool .
- To obtain a certificate that attests to a third-party identity, do the following: Obtain a third-party identity token from your third-party identity provider. curl Note: To perform this command, you need the python3 CLI. export ID TOKEN=curl -d '{"audience":"//iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ IDENTITY POOL ID /providers/ PROVIDER ID "}' -H 'Content-Type: application/json' -H "Authorization: Bearer $(gcloud auth print-access-token)" https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/ SERVICE ACCOUNT @ PROJECT ID .iam.gserviceaccount.com:generateIdToken python3 -c "import sys;import json;print(json.load(sys.stdin)['token'])" Replace the following: PROJECT ID - The Google Cloud project id for the project you want to create resources in.
- CA Service will add a subject that reflects the certificate requester's identity. export TUTORIAL CSR=$(openssl req -newkey rsa:2048 -nodes -subj / -keyout tutorial do not use.key) Request a certificate with the CSR, a lifetime, and a reflected subject request mode: curl -H "Authorization: Bearer $(echo $STS TOKEN)" https://privateca.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /caPools/ CA POOL ID /certificates\?alt\=json -X POST -H "Content-Type: application/json" -H 'Accept: application/json' --data '{"lifetime": "100s", "pemCsr": "'$TUTORIAL CSR'", "subjectMode": "REFLECTED SPIFFE"}' Client libraries To forward the first-party token to CA Service, you must create a credentialed client.
- Load your credential into a path readable by your certificate requester: curl - d '{"audience":"//iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ IDENTITY POOL ID /providers/ PROVIDER ID "}' - H 'Content-Type: application/json' - H "Authorization: Bearer $(gcloud auth print-access-token)" https : // iamcredentials . googleapis . com / v1 / projects /-/ serviceAccounts / SERVICE ACCOUNT @ PROJECT ID . iam.gserviceaccount.com : generateIdToken python3 - c "import sys;import json; print(json.load(sys.stdin)['token']) > /tmp/oidc token.txt Replace the following: PROJECT ID : The project ID of the project you want to create resources in.

### "Determine certificate authority settings \_|\_ Certificate Authority Service\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings](https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings)
- Source ID: `site-iam-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Security Certificate Authority Service Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- A relying party that only knows about a root CA can also implicitly trust a subordinate CA that chains to the explicitly trusted root CA certificate.
- Determine certificate authority settings This page provides information about the various settings of a certificate authority (CA).
- Parties that need to authenticate certificates created from a root CA (a relying party ) must know its CA certificate in advance.

