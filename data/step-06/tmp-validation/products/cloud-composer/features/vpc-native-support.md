---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.860Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "VPC Native support"
feature_slug: "vpc-native-support"
latest_feature_date: "2019-05-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc"
keywords:
  - "native"
  - "networking"
  - "supports"
  - "beta"
---

# VPC Native support

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports VPC Native networking in beta.

## Extended Definition

Cloud Composer supports VPC Native networking in beta.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc](https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)

## Supporting Pages

### "Configure Shared VPC networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc](https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc)
- Source ID: `site-iam-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Configure the service project If Cloud Composer environments were never created in the service project, then provision the Composer Service Agent Account in the service project : gcloud beta services identity create --service = composer.googleapis.com Configure the host project Configure the host project as described further.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure Shared VPC networking Stay organized with collections Save and categorize content based on your preferences.
- Configure networking resources Choose one of the following options to allocate and configure networking resources.
- You can do so on the next step, when you configure networking resources for a new or an already existing subnet.

### "Configure private IP networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- To get IP ranges for a subnetwork, go to VPC Networks page and click on the network's name to see details: Go to VPC Networks VPC-native cluster configuration Cloud Composer supports VPC-native GKE clusters in your environment.
- During environment creation , you can enable VPC Native (using alias IP) and configure networking, such as IP allocation, without enabling private IP .
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure private IP networking Stay organized with collections Save and categorize content based on your preferences.
- Because a VPC native cluster is required for Airflow tasks to communicate with other VMs that are reachable through private IPs, you must also enable VPC Native to configure a private IP environment.

### Configure VPC Service Controls \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- Source ID: `site-iam-reference`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- Install PyPI packages in VPC Service Controls In the default VPC Service Controls configuration, Cloud Composer only supports installing PyPI packages from private repositories that are reachable from the internal IP address space of the VPC network.
- If your environment uses Private IP networking , all internal traffic is routed to your VPC network , except the traffic to Google APIs, services, and domains that are available to Private IP environments through Private Google Access.
- You can use networking tags to further limit access.

