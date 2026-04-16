---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.750Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Beta-level Admin API and gcloud domain/SSL management"
feature_slug: "beta-level-admin-api-and-gcloud-domain-ssl-management"
latest_feature_date: "2017-06-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl"
keywords:
  - "beta"
  - "level"
  - "admin"
  - "gcloud"
  - "domain"
  - "ssl"
  - "management"
  - "command"
---

# Beta-level Admin API and gcloud domain/SSL management

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

The Admin API and gcloud command-line tool added beta-level features for creating and managing custom domains and SSL certificates.

## Extended Definition

The Admin API and gcloud command-line tool added beta-level features for creating and managing custom domains and SSL certificates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/go/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/go/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the following gcloud command to delete a connector: gcloud compute networks vpc-access connectors delete CONNECTOR NAME --region= REGION Replace the following: CONNECTOR NAME with the name of the connector you want to delete REGION with the region where the connector is located Manage custom constraints for projects This section describes how to create custom constraints for Serverless VPC Access connectors and enforce them at the project level.
- To increase the minimum or maximum number of instances for the connector, run the following command in your terminal: gcloud beta compute networks vpc-access connectors update CONNECTOR NAME --region = REGION --min-instances = MIN INSTANCES --max-instances = MAX INSTANCES Replace the following: CONNECTOR NAME : the name of your connector REGION : the name of your connector's region MIN INSTANCES : your preferred minimum number of instances.
- To update the connector machine type, run the following command in your terminal: gcloud beta compute networks vpc-access connectors update CONNECTOR NAME --region = REGION --machine-type = MACHINE TYPE Replace the following: CONNECTOR NAME : the name of your connector REGION : the name of your connector's region MACHINE TYPE : your preferred machine type.
- To perform these steps, you must have one of the following roles on the host project: Owner role ( roles/owner ) Compute Security Admin role ( roles/compute.securityAdmin ) Custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled For a basic configuration, apply the rules to allow serverless resources in any service project connected to the Shared VPC network to send requests to any resource in the network.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/go/connecting-vpc)
- Source ID: `site-docs-reference-2`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the following gcloud command to delete a connector: gcloud compute networks vpc-access connectors delete CONNECTOR NAME --region= REGION Replace the following: CONNECTOR NAME with the name of the connector you want to delete REGION with the region where the connector is located Manage custom constraints for projects This section describes how to create custom constraints for Serverless VPC Access connectors and enforce them at the project level.
- To increase the minimum or maximum number of instances for the connector, run the following command in your terminal: gcloud beta compute networks vpc-access connectors update CONNECTOR NAME --region = REGION --min-instances = MIN INSTANCES --max-instances = MAX INSTANCES Replace the following: CONNECTOR NAME : the name of your connector REGION : the name of your connector's region MIN INSTANCES : your preferred minimum number of instances.
- To update the connector machine type, run the following command in your terminal: gcloud beta compute networks vpc-access connectors update CONNECTOR NAME --region = REGION --machine-type = MACHINE TYPE Replace the following: CONNECTOR NAME : the name of your connector REGION : the name of your connector's region MACHINE TYPE : your preferred machine type.
- To perform these steps, you must have one of the following roles on the host project: Owner role ( roles/owner ) Compute Security Admin role ( roles/compute.securityAdmin ) Custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled For a basic configuration, apply the rules to allow serverless resources in any service project connected to the Shared VPC network to send requests to any resource in the network.

### "Securing custom domains with SSL \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you prefer, you can use gcloud commands or the Admin API .
- Example: myserver.key.pem Example: openssl rsa -in myserver.key -out myserver.key.pem Concatenate all of the .crt files from your CA into one file, using the following command: cat [ MY DOMAIN CERT ] . crt [ MY SecureServerCA ] . crt [ MY TrustCA ] . crt [ MY TrustExternalCARoot ] . crt > [ MY CONCAT CERT ] . crt where [MY DOMAIN CERT].crt is the certificate for your domain.
- Example: concat.crt Example: cat www example com.crt AddTrustExternalCARoot.crt RSADomainValidationSecureServerCA.crt RSAAddTrustCA.crt > concat.crt Verify your SSL certificate and private key: To verify that the private key and certificate match , you can use the openssl x509 and openssl rsa commands.
- You will need to configure an email address in your domain account, for example admin@example.com , so that you can receive and respond to the CA's approval request.

