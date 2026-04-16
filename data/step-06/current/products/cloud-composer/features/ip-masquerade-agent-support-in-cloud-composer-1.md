---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.040Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "IP Masquerade agent support in Cloud Composer 1"
feature_slug: "ip-masquerade-agent-support-in-cloud-composer-1"
latest_feature_date: "2021-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip"
  - "https://docs.cloud.google.com/composer/docs/composer-1/composer-overview"
keywords:
  - "ip"
  - "masquerade"
  - "agent"
  - "in"
  - "composer"
  - "supports"
  - "the"
  - "preview"
---

# IP Masquerade agent support in Cloud Composer 1

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer 1 supports the IP Masquerade agent in Preview for new environments.

## Extended Definition

Cloud Composer 1 supports the IP Masquerade agent in Preview for new environments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent](https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)
- [https://docs.cloud.google.com/composer/docs/composer-1/composer-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-overview)

## Supporting Pages

### "Enable the IP Masquerade agent in Cloud Composer environments \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent](https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent)
- Source ID: `site-iam-reference`
- Final score: 329
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- About the IP Masquerade agent in Cloud Composer Cloud Composer supports the IP Masquerade agent for your environments.
- Example: resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { software config { image version = "composer-1.20.12-airflow-1.10.15" } node config { ip allocation policy = [{ use ip aliases = true // Other networking configuration }] enable ip masq agent = true } } } Configure the IP Masquerade agent Caution: Cloud Composer enables intranode visibility on GKE clusters.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Enable the IP Masquerade agent in Cloud Composer environments Stay organized with collections Save and categorize content based on your preferences.
- For more information about using and configuring the IP Masquerade agent in Cloud Composer 1, see Configuring an IP masquerade agent in Standard clusters .

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 243
- Re-rank relevance: N/A

Evidence snippets:
- This prevents all internet access to the control plane. --enable-master-authorized-networks and --master-authorized-networks arguments configure authorized networks for your environment. --enable-privately-used-public-ips configures privately used public IP addresses for your environment. --enable-ip-masq-agent enables the IP Masquerade agent .
- By using environments with the IP Masquerade agent, you can use many-to-one IP address translations in your environment's networking configurations.
- For more information about creating environments with IP Masquerade agent, see Enable the IP Masquerade agent .
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "office net 1" }, { "value" : "192.0.4.0/24" , "description" : "office net 3" } ] }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform When you create an environment, the allowed ip range block in the web server network access control block contains IP ranges that can access web server.

### "Configure private IP networking \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip](https://docs.cloud.google.com/composer/docs/composer-1/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 227
- Re-rank relevance: N/A

Evidence snippets:
- To get IP ranges for a subnetwork, go to VPC Networks page and click on the network's name to see details: Go to VPC Networks VPC-native cluster configuration Cloud Composer supports VPC-native GKE clusters in your environment.
- If your VPC network and its established VPC peers have overlapping IP blocks with the VPC network in the Google-managed tenant project , Cloud Composer cannot create your environment.
- For Private IP environments, Cloud Composer assigns only private IP ( RFC 1918 ) addresses to the managed Google Kubernetes Engine and Cloud SQL VMs in your environment.
- As an option, you can also use privately used public IP addresses and the IP Masquerade agent to save the IP address space and to use non-RFC 1918 addresses.

### Cloud Composer overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/composer-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-overview)
- Source ID: `site-docs-reference`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- For more information about networking in Cloud Composer, see pages for individual networking features: Public IP and Private IP environments Shared VPC environments Configuring VPC Service Controls Authorized networks IP Masquerade agent Privately used public IP ranges Frequently Asked Questions What version of Apache Airflow does Cloud Composer use?
- The cluster also hosts other Cloud Composer components like Composer Agent and Airflow Monitoring, which help manage the Cloud Composer environment, gather logs to store in Cloud Logging, and gather metrics to upload to Cloud Monitoring.
- Each task in a DAG can represent almost anything—for example, one task might perform any of the following functions: Preparing data for ingestion Monitoring an API Sending an email Running a pipeline In addition to running a DAG on a schedule, you can trigger DAGs manually or in response to events, such as changes in a Cloud Storage bucket.
- Airflow features in Cloud Composer When using Cloud Composer, you can manage and use Airflow features such as: Airflow DAGs : You can add, update, remove, or trigger Airflow DAGs in Google Cloud console or using the native Airflow UI.

