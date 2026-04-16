---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.399Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Project spending limits creation"
feature_slug: "project-spending-limits-creation"
latest_feature_date: "2020-02-06"
deprecation_date: "2020-02-06"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc"
  - "https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts"
keywords:
  - "project"
  - "spending"
  - "limits"
  - "creation"
  - "creating"
  - "projects"
  - "no"
  - "longer"
---

# Project spending limits creation

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Creating new spending limits for projects is no longer supported; deprecated on 2020-02-06.

## Extended Definition

Creating new spending limits for projects is no longer supported; deprecated on 2020-02-06.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc)
- [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-root-2`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- To configure the egress behavior of your App Engine service: Add the egress setting attribute to the vpc access connector field of your service's app.yaml file: vpc access connector : name : projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME egress setting : EGRESS SETTING Replace: PROJECT ID with your Google Cloud project ID REGION with the region your connector is in CONNECTOR NAME with the name of your connector EGRESS SETTING with one of the following: private-ranges-only Default.
- After you verify that the organization policy in dry-run mode works as intended, set the live policy by clicking Set policy . gcloud To create an organization policy with boolean rules, create a policy YAML file that references the constraint: name : projects/ PROJECT ID /policies/ CONSTRAINT NAME spec : rules : - enforce : true dryRunSpec : rules : - enforce : true Replace the following: PROJECT ID : the project that you want to enforce your constraint on.
- Use the following gcloud command to delete a connector: gcloud compute networks vpc-access connectors delete CONNECTOR NAME --region= REGION Replace the following: CONNECTOR NAME with the name of the connector you want to delete REGION with the region where the connector is located Manage custom constraints for projects This section describes how to create custom constraints for Serverless VPC Access connectors and enforce them at the project level.
- To specify a connector for a service in your app: Add the vpc access connector field to your service's app.yaml file: vpc access connector: name: projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME Where PROJECT ID is your Google Cloud project ID, REGION is the region your connector is in, and CONNECTOR NAME is the name of your connector.

### "Connecting to a Shared VPC network \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc)
- Source ID: `site-docs-root-2`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service projects Advantages of creating connectors in the service projects: Isolation: Each connector has dedicated bandwidth and is unaffected by bandwidth use of connectors in other service projects.
- Host project Advantages of creating connectors in the host project: Centralized network management: Aligns with the Shared VPC model of centralizing network configuration resources in the host project.
- This is good if you have a service that experiences spikes in traffic, or if you need to ensure that each service project is unaffected by connector use of other service projects.
- By creating a connector in the service project, you can limit what the services in the project can access by using firewall rules.

### "Configure App Engine service accounts \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specify an app-level default service account during app creation During the initial App Engine application creation process, you can choose to assign a service account that you created or use the auto-created PROJECT ID @appspot.gserviceaccount.com service account to act as the default.
- After May 15, 2024, Artifact Registry hosts images for the gcr.io domain in Google Cloud projects without previous Container Registry usage.
- After May 15, 2024, Artifact Registry hosts images for the gcr.io domain in Google Cloud projects without previous Container Registry usage.
- To learn how to grant roles to service accounts and other principals, see Manage access to projects, folders, and organizations .

