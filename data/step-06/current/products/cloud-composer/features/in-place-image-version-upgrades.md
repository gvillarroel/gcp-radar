---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.857Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "In-place image version upgrades"
feature_slug: "in-place-image-version-upgrades"
latest_feature_date: "2019-04-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip"
  - "https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade"
keywords:
  - "place"
  - "image"
  - "version"
  - "upgrades"
  - "composer"
  - "supports"
  - "airflow"
  - "running"
---

# In-place image version upgrades

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports in-place upgrades of the Airflow version or Cloud Composer version running in an environment.

## Extended Definition

Cloud Composer supports in-place upgrades of the Airflow version or Cloud Composer version running in an environment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip)
- [https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent](https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade)

## Supporting Pages

### "Configure privately used public IP ranges \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-privately-used-public-ip)
- Source ID: `site-iam-reference`
- Final score: 37
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --enable-ip-alias \ --enable-private-environment \ --enable-privately-used-public-ips \ --cluster-ipv4-cidr 10 .3.192.0/20 \ --services-ipv4-cidr 172 .16.194.0/23 User-managed subnet ranges To create user-managed ranges : gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --enable-ip-alias \ --enable-private-environment \ --enable-privately-used-public-ips \ --cluster-secondary-range-name POD IP RANGE NAME \ --services-secondary-range-name SERVICES IP RANGE NAME Replace: ENVIRONMENT NAME with the name of the environment.
- Subnet ranges managed by GKE To create subnet ranges managed by GKE : gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --enable-ip-alias \ --enable-private-environment \ --enable-privately-used-public-ips \ --cluster-ipv4-cidr POD IP RANGE \ --services-ipv4-cidr SERVICES IP RANGE Replace: ENVIRONMENT NAME with the name of the environment.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --enable-ip-alias \ --enable-private-environment \ --enable-privately-used-public-ips \ --cluster-secondary-range-name "public-1" \ --services-secondary-range-name "public-2" API Construct an environments.create API request.
- Example: resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { node config { // Specify your network and subnetwork network = google compute network.example network.id subnetwork = google compute subnetwork.example subnet.id ip allocation policy = [{ use ip aliases = true // Specify PUPI addresses cluster ipv4 cidr block = "10.3.192.0/20" services ipv4 cidr block = "172.16.194.0/23" cluster secondary range name = null services secondary range name = null }] } private environment config { enable privately used public ips = true // Other private environment parameters } } } User-managed subnet ranges To create user-managed ranges : resource "google composer environment" "example environment" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { node config { ip allocation policy = [{ use ip aliases = true cluster ipv4 cidr block = null services ipv4 cidr block = null cluster secondary range name = POD IP RANGE NAME services secondary range name = SERVICES IP RANGE NAME }] } private environment config { enable privately used public ips = true // Other private ip environment parameters } } Replace: ENVIRONMENT NAME with the name of the environment.

### "Enable the IP Masquerade agent in Cloud Composer environments \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent](https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent)
- Source ID: `site-iam-reference`
- Final score: 37
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You must also enable IP alias with the use ip aliases field in the ip allocation policy block. resource "google composer environment" "example environment" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { image version = "composer-1.20.12-airflow-1.10.15" } node config { ip allocation policy = [{ use ip aliases = true // Other networking configuration }] enable ip masq agent = true } } Replace: ENVIRONMENT NAME with the name of the environment.
- Specify the configuration in the Environment resource. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "softwareConfig" : { "imageVersion" : "composer-1.20.12-airflow-1.10.15" }, "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , }, "enableIpMasqAgent" : true } } } Replace: PROJECT ID with the Project ID .
- You must also enable IP alias with the --enable-ip-alias argument. gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --enable-ip-alias \ --enable-ip-masq-agent Replace: ENVIRONMENT NAME with the name of the environment.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "softwareConfig" : { "imageVersion" : "composer-1.20.12-airflow-1.10.15" }, "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , }, "enableIpMasqAgent" : true } } } Terraform When you create an environment, the enable ip masq agent field in the node config block enables the IP Masqerade agent.

### "Method: projects.locations.environments.checkUpgrade \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/checkUpgrade)
- Source ID: `site-docs-reference`
- Final score: 37
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When an alias is provided, the server replaces it with the latest Apache Airflow version that satisfies the alias and is supported in the given Cloud Composer version.
- The resource name of the environment to check upgrade for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" Authorization requires the following IAM permission on the specified resource environment : composer.environments.update Request body The request body contains data with the following structure: JSON representation { "imageVersion" : string } Fields imageVersion string Optional.
- The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified.
- The Cloud Composer portion of the image version is a full semantic version , or an alias in the form of major version number or latest .

