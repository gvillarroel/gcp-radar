---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.914Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer VPC Service Controls support"
feature_slug: "cloud-composer-vpc-service-controls-support"
latest_feature_date: "2020-12-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc"
keywords:
  - "composer"
  - "vpc"
  - "controls"
  - "now"
  - "supports"
  - "added"
  - "in"
  - "beta"
---

# Cloud Composer VPC Service Controls support

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer now supports VPC Service Controls; Cloud Composer added VPC Service Controls support in Beta.

## Extended Definition

Cloud Composer now supports VPC Service Controls; Cloud Composer added VPC Service Controls support in Beta.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Added new health metrics in Stackdriver to monitor your environment: composer.googleapis.com/environment/healthy and composer.googleapis.com/environment/database health VPC Native support is now in beta.
- June 30, 2020 Feature Cloud Composer support for VPC Service Controls is now in Beta.
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.5-build.13 (default) composer-3-airflow-2.9.3-build.33 Change New images are available in Cloud Composer 2: composer-2.14.1-airflow-2.10.5 (default) composer-2.14.1-airflow-2.9.3 Feature (Available without upgrading) Cloud Composer 3 now supports DNS resolution for regional service endpoints .
- Change New images are available in Cloud Composer 2: composer-2.10.1-airflow-2.10.2 (default) composer-2.10.1-airflow-2.9.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.2-build.4 (default) composer-3-airflow-2.9.3-build.11 December 05, 2024 Feature New Cloud Composer 3 environments can now be created in VPC SC .

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Environment creation fails in projects with Identity-Aware Proxy APIs added to the VPC Service Controls perimeter Note: This issue affects all versions of Cloud Composer 1.
- If you use Private Google Access and send traffic over private.googleapis.com Virtual IPs, or VPC Service Controls and send traffic over restricted.googleapis.com Virtual IPs, make sure that your Cloud DNS is configured also for .composer.cloud.google.com domain names.
- Cloud Composer 1 environment creation fails when the compute.vmCanIpForward policy is disabled Cloud Composer 1 environments created in the non-VPC-Native (using alias IP) mode require this policy to allow the creation of VMs with the enabled IP Forwarding feature.
- Usage of Deployment Manager to manage Google Cloud resources protected by VPC Service Controls Cloud Composer 1 and Cloud Composer 2 versions 2.0.x use Deployment Manager to create components of Cloud Composer environments.

### Configure VPC Service Controls \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- Source ID: `site-iam-reference`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Install PyPI packages in VPC Service Controls In the default VPC Service Controls configuration, Cloud Composer only supports installing PyPI packages from private repositories that are reachable from the internal IP address space of the VPC network.
- VPC Service Controls support for Cloud Composer means that: Cloud Composer can now be selected as a secured service inside a VPC Service Controls perimeter.
- By configuring your environment with VPC Service Controls, you can keep sensitive data private while taking advantage of the fully-managed workflow orchestration capabilities of Cloud Composer.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 VPC Service Controls enable organizations to define a perimeter around Google Cloud resources to mitigate data exfiltration risks.

