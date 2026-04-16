---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.174Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner free trial instances"
feature_slug: "spanner-free-trial-instances"
latest_feature_date: "2025-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/free-trial-quickstart"
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
  - "https://docs.cloud.google.com/spanner/docs/vector-search-tutorial"
keywords:
  - "preload"
  - "trial"
  - "free"
  - "automatically"
  - "create"
  - "instances"
---

# Spanner free trial instances

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner free trial instances now automatically create and preload a sample ecommerce database when launched from the Google Cloud Console, enabling users to run preloaded queries and explore Spanner capabilities; Adds a simplified workflow to create Spanner free trial instances for 90-day exploration, including support for relational databases in GoogleSQL/PostgreSQL and NoSQL models.

## Extended Definition

Spanner free trial instances now automatically create and preload a sample ecommerce database when launched from the Google Cloud Console, enabling users to run preloaded queries and explore Spanner capabilities; Adds a simplified workflow to create Spanner free trial instances for 90-day exploration, including support for relational databases in GoogleSQL/PostgreSQL and NoSQL models.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)

## Supporting Pages

### "Create a Spanner free trial instance and sample application \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- Source ID: `site-docs-root`
- Final score: 243
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, to create a free trial instance named trial-instance with the display name Trial Instance using the regional instance configuration regional-us-east5 , run the following: gcloud spanner instances create trial - instance -- config = regional - us - east5 \ -- instance - type = free - instance -- description = "Trial Instance" Note: Use the instance ID, not the display name, when referring to an instance in gcloud CLI commands.
- For more information, see Free trial instances overview . gcloud To create a free trial instance, use the gcloud spanner instances create command. gcloud spanner instances create INSTANCE ID \ -- instance - type = free - instance -- config = INSTANCE CONFIG \ -- description = INSTANCE DESCRIPTION Replace the following: INSTANCE ID : a permanent identifier that is unique within your Google Cloud project.
- Note: You can only create one free trial instance per project lifecycle, and a maximum of five free trial instances per Cloud Billing account.
- Click Save to upgrade your free trial instance. gcloud To upgrade your free trial instance to a paid Enterprise edition instance with the same instance configuration, run the following gcloud spanner instances update command: gcloud spanner instances update INSTANCE ID -- instance - type = provisioned Delete the instance Warning: Deleting an instance permanently removes the instance and all its databases.

### "Create and query a database in the Google Cloud console \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Note: To explore Spanner using a 90-day free trial instance, see Create a Spanner free trial instance .
- If not, enable it manually: Enable Spanner API To get the permissions that you need to create instances and databases, ask your administrator to grant you the Cloud Spanner Admin (roles/spanner.admin) IAM role on your project.
- Go to Spanner instances Click the instance you created, for example Test Instance .
- Create a database In the Google Cloud console, go to the Spanner Instances page.

### "Get started using Spanner for generative AI applications \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Also, if you're using a free trial instance, you can't create another free trial instance after you delete your first free trial instance.
- Note: To explore Spanner using a 90-day free trial instance, see Create a Spanner free trial instance .
- You can create one free trial instance per project lifecycle.
- If not, enable it manually: Enable Vertex AI API To get the permissions that you need to create instances and databases, ask your administrator to grant you the Cloud Spanner Admin ( roles/spanner.admin ) IAM role on your project.

