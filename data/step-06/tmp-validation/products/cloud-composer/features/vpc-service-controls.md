---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.763Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "VPC Service Controls"
feature_slug: "vpc-service-controls"
latest_feature_date: "2020-12-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc"
  - "https://docs.cloud.google.com/composer/docs/composer-1/composer-overview"
keywords:
  - "perimeter"
  - "protection"
  - "controls"
  - "supports"
---

# VPC Service Controls

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports VPC Service Controls for service perimeter protection.

## Extended Definition

Cloud Composer supports VPC Service Controls for service perimeter protection.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc](https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc)
- [https://docs.cloud.google.com/composer/docs/composer-1/composer-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-overview)

## Supporting Pages

### Configure VPC Service Controls \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- Source ID: `site-iam-reference`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- Install PyPI packages in VPC Service Controls In the default VPC Service Controls configuration, Cloud Composer only supports installing PyPI packages from private repositories that are reachable from the internal IP address space of the VPC network.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 VPC Service Controls enable organizations to define a perimeter around Google Cloud resources to mitigate data exfiltration risks.
- VPC Service Controls support for Cloud Composer means that: Cloud Composer can now be selected as a secured service inside a VPC Service Controls perimeter.
- Protection against data exposure due to misconfigured access controls.

### "Configure Shared VPC networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc](https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc)
- Source ID: `site-iam-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- If your Shared VPC configuration uses VPC Service Controls, use instructions for environments with VPC Service Controls instead: Configure connectivity to Google APIs and services .
- If your Shared VPC configuration uses VPC Service Controls, then route traffic through restricted.googleapis.com instead.

### Cloud Composer overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/composer-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-overview)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- For more information about networking in Cloud Composer, see pages for individual networking features: Public IP and Private IP environments Shared VPC environments Configuring VPC Service Controls Authorized networks IP Masquerade agent Privately used public IP ranges Frequently Asked Questions What version of Apache Airflow does Cloud Composer use?
- Environment networking Cloud Composer supports several networking configurations for environments, with many configuration options.
- When you create an environment, you can select an image with a specific Airflow version: Cloud Composer 3 supports Airflow 2.
- Each Cloud Composer release supports several Apache Airflow versions.

