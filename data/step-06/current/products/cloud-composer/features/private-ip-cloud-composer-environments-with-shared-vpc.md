---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.301Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Private IP Cloud Composer environments with Shared VPC"
feature_slug: "private-ip-cloud-composer-environments-with-shared-vpc"
latest_feature_date: "2020-02-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc"
keywords:
  - "private"
  - "ip"
  - "composer"
  - "environments"
  - "with"
  - "shared"
  - "vpc"
  - "gained"
---

# Private IP Cloud Composer environments with Shared VPC

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer gained beta support for creating private IP environments configured with Shared VPC.

## Extended Definition

Cloud Composer gained beta support for creating private IP environments configured with Shared VPC.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc](https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)

## Supporting Pages

### "Configure Shared VPC networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc](https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc)
- Source ID: `site-iam-reference`
- Final score: 294
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This allows the GKE Service Account of the service project to use the GKE Service Account of the host project to configure shared network resources. (Private IP, optional) Configure firewall rules and connectivity to Google domains In a Shared VPC configuration with Private IP environments, as an option, you might want to route all traffic to Google APIs and services through several IP addresses that belong to the private.googleapis.com domain and configure corresponding firewall rules.
- In the host project: Edit permissions for the Composer Service Agent account, service- SERVICE PROJECT NUMBER @cloudcomposer-accounts.iam.gserviceaccount.com ) For this account, add another role on the project level: For Private IP environments, add the Composer Shared VPC Agent role.
- If your Shared VPC configuration uses Private IP environments: (Optional) Configure connectivity to Google APIs and services . (Optional) Configure firewall rules .
- Shared VPC enables organizations to establish budgeting and access control boundaries at the project level while allowing for secure and efficient communication using private IPs across those boundaries.

### "Configure private IP networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your Private IP environment also uses VPC Service Controls, use instructions for environments with VPC Service Controls instead.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure private IP networking Stay organized with collections Save and categorize content based on your preferences.
- Because a VPC native cluster is required for Airflow tasks to communicate with other VMs that are reachable through private IPs, you must also enable VPC Native to configure a private IP environment.
- If your VPC network and its established VPC peers have overlapping IP blocks with the VPC network in the Google-managed tenant project , Cloud Composer cannot create your environment.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example (Private IP environment ) gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " SERVICE ACCOUNT " \ --enable-private-environment \ --enable-ip-alias \ --network NETWORK ID \ --subnetwork SUBNETWORK ID \ --cluster-ipv4-cidr PODS RANGE \ --services-ipv4-cidr SERVICES RANGE \ --master-ipv4-cidr CONTROL PLANE RANGE \ --web-server-ipv4-cidr WEB SERVER RANGE \ --cloud-sql-ipv4-cidr SQL RANGE Replace: NETWORK ID with your VPC network ID.
- Note: Cloud Composer 1 supports only private IP environments with VPC peerings.
- Cloud Composer 2 environments can use both VPC peerings and Private Service Connect for connectivity in Private IP.
- Note: The Airflow web server of your environment is always protected by IAM, regardless of the IP ranges that are allowed to access it. gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --web-server-allow-ip ip range = WS IP RANGE ,description = WS RANGE DESCRIPTION Replace: WS IP RANGE with the IP range, in the CIDR notation, that can access Airflow UI.

### Configure VPC Service Controls \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc](https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc)
- Source ID: `site-iam-reference`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Install PyPI packages in VPC Service Controls In the default VPC Service Controls configuration, Cloud Composer only supports installing PyPI packages from private repositories that are reachable from the internal IP address space of the VPC network.
- If your environment uses Private IP networking , all internal traffic is routed to your VPC network , except the traffic to Google APIs, services, and domains that are available to Private IP environments through Private Google Access.
- External connections To install PyPI packages from repositories outside the private IP space, follow these steps: Configure Cloud NAT to allow Cloud Composer running in the private IP space to connect with external PyPI repositories.
- By configuring your environment with VPC Service Controls, you can keep sensitive data private while taking advantage of the fully-managed workflow orchestration capabilities of Cloud Composer.

