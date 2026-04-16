---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.215Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer Domain Restricted Sharing compatibility controls"
feature_slug: "cloud-composer-domain-restricted-sharing-compatibility-controls"
latest_feature_date: "2020-10-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc"
  - "https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
keywords:
  - "composer"
  - "domain"
  - "restricted"
  - "sharing"
  - "compatibility"
  - "controls"
  - "upgrading"
  - "to"
---

# Cloud Composer Domain Restricted Sharing compatibility controls

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Upgrading to the newest Composer version can enable or disable Domain Restricted Sharing compatibility based on organization policy settings.

## Extended Definition

Upgrading to the newest Composer version can enable or disable Domain Restricted Sharing compatibility based on organization policy settings.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)

## Supporting Pages

### Configure VPC Service Controls \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- Source ID: `site-iam-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Composer environments use the following domains: .googleapis.com is used to access other Google services. .pkg.dev is used to get environment images, such as when creating or updating an environment. .gcr.io GKE requires connectivity to Container Registry domain regardless of Cloud Composer version.
- Description Direction Action Source or Destination Protocols Ports DNS Configure as described in VPC Service Controls support for Cloud DNS - - - - - Google APIs and services Egress Allow IPv4 addresses of restricted.googleapis.com that you use for Google APIs and services .
- Install PyPI packages in VPC Service Controls In the default VPC Service Controls configuration, Cloud Composer only supports installing PyPI packages from private repositories that are reachable from the internal IP address space of the VPC network.
- Configure connectivity to Google APIs and services In a VPC Service Controls configuration, to control network traffic, configure access to Google APIs and services through the restricted.googleapis.com .

### Cloud Composer security overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Composer supports Domain Restricted Sharing organizational policy .
- All underlying resources used by Cloud Composer are configured to support VPC Service Controls architecture and follow its rules.
- Domain Restricted Sharing (DRS) .
- Compliance to standards See the pages linked below to check Cloud Composer's compliance with various standards: HIPAA Compliance Access Transparency PCI DSS ISO/IEC: 27001 , 27017 , 27018 SOC: SOC 1 , SOC 2 , SOC 3 NIST: NIST800-53 , NIST800-171 DRZ FedRamp Moderate Data Residency/Location Restrictions ( configuration guide for Cloud Composer) See also Some of the security features mentioned in this article are discussed in the the Airflow Summit 2020 presentation: Run Airflow DAGs in a secure way .

### "Configure encryption with customer-managed encryption keys \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Grant roles to service agents Important: If your project has a Domain restricted sharing policy that excludes addresses from the google.com domain.
- Important: If your project has a Domain restricted sharing policy that excludes addresses from the google.com domain.
- Example: gcloud beta services identity create \ --service = composer.googleapis.com Grant permissions to service agents: Grant the role to Cloud Composer Service Agent: gcloud kms keys add-iam-policy-binding KEY NAME \ --location KEY LOCATION \ --keyring KEY RING NAME \ --member = serviceAccount:service- PROJECT NUMBER @cloudcomposer-accounts.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter \ --project KEY PROJECT ID Grant the role to Artifact Registry Service Agent: gcloud kms keys add-iam-policy-binding KEY NAME \ --location KEY LOCATION \ --keyring KEY RING NAME \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-artifactregistry.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter \ --project KEY PROJECT ID Grant the role to GKE Service Agent: gcloud kms keys add-iam-policy-binding KEY NAME \ --location KEY LOCATION \ --keyring KEY RING NAME \ --member = serviceAccount:service- PROJECT NUMBER @container-engine-robot.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter \ --project KEY PROJECT ID Grant the role to Pub/Sub Service Agent: gcloud kms keys add-iam-policy-binding KEY NAME \ --location KEY LOCATION \ --keyring KEY RING NAME \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter \ --project KEY PROJECT ID Grant the role to Compute Engine Service Agent: gcloud kms keys add-iam-policy-binding KEY NAME \ --location KEY LOCATION \ --keyring KEY RING NAME \ --member = serviceAccount:service- PROJECT NUMBER @compute-system.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter \ --project KEY PROJECT ID Grant encrypt/decrypt permissions to Cloud Storage Service Agent. gcloud storage service-agent \ --authorize-cmek = projects/ KEY PROJECT ID /locations/ KEY LOCATION /keyRings/ KEY RING NAME /cryptoKeys/ KEY NAME Replace: PROJECT ID with your project's ID .
- Service agent name Service account email API service name Cloud Composer Service Agent service- PROJECT NUMBER @cloudcomposer-accounts.iam.gserviceaccount.com composer.googleapis.com Artifact Registry Service Agent service- PROJECT NUMBER @gcp-sa-artifactregistry.iam.gserviceaccount.com artifactregistry.googleapis.com Kubernetes Engine Service Agent service- PROJECT NUMBER @container-engine-robot.iam.gserviceaccount.com container.googleapis.com Pub/Sub Service Agent service- PROJECT NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com pubsub.googleapis.com Compute Engine Service Agent service- PROJECT NUMBER @compute-system.iam.gserviceaccount.com compute.googleapis.com Cloud Storage Service Agent service- PROJECT NUMBER @gs-project-accounts.iam.gserviceaccount.com Grant encrypt/decrypt permissions with gcloud storage service-agent --authorize-cmek (If required) If some of these service accounts are not present in your project, it means that an identity for this service is not yet created.

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- If you use Private Google Access and send traffic over private.googleapis.com Virtual IPs, or VPC Service Controls and send traffic over restricted.googleapis.com Virtual IPs, make sure that your Cloud DNS is configured also for .composer.cloud.google.com domain names.
- Usage of Deployment Manager to manage Google Cloud resources protected by VPC Service Controls Cloud Composer 1 and Cloud Composer 2 versions 2.0.x use Deployment Manager to create components of Cloud Composer environments.
- Environment creation fails in projects with Identity-Aware Proxy APIs added to the VPC Service Controls perimeter Note: This issue affects all versions of Cloud Composer 1.
- Cloud Composer environments weren't tested with the Enterprise Edition and you might incur additional charges after upgrading to it.

