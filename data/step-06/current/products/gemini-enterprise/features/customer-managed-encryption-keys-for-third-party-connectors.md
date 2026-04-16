---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.724Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Customer-managed encryption keys for third-party connectors"
feature_slug: "customer-managed-encryption-keys-for-third-party-connectors"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/cmek"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "for"
  - "third"
  - "party"
  - "connectors"
---

# Customer-managed encryption keys for third-party connectors

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Third-party data connectors can use customer-managed encryption keys to protect data at rest.

## Extended Definition

Third-party data connectors can use customer-managed encryption keys to protect data at rest.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store)

## Supporting Pages

### "Customer-managed encryption keys \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Register single-region Cloud KMS keys for third-party connectors REST To register your own key for Gemini Enterprise, follow these steps: Call the UpdateCmekConfig method with the key that you want to register. curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d '{"kmsKey":"projects/ KMS PROJECT ID /locations/ KMS LOCATION /keyRings/ KEY RING /cryptoKeys/ KEY NAME "}' \ "https:// LOCATION -discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cmekConfigs/ CMEK CONFIG ID ?set default= SET DEFAULT " Replace the following: KMS PROJECT ID : the ID of your project that contains the key.
- You need to have all three keys with you when you Register your Cloud KMS keys for third-party connectors . us single-regions europe single-regions us-east1 europe-west1 us-central1 europe-west4 us-west1 europe-north1 The CryptoKey Encrypter/Decrypter IAM role ( roles/cloudkms.cryptoKeyEncrypterDecrypter ) on the key has been granted to the Discovery Engine service agent.
- Important: Do not rotate keys on data stores associated with recommendations apps or with any apps that need analytics, and don't rotate the single-region keys used for third-party connectors.
- Optionally, if your data needs single-region keys, for example, when using third-party connectors, you need to register your single-region keys.

### "Connect a third-party data source \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source](https://docs.cloud.google.com/gemini/enterprise/docs/connect-third-party-data-source)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- If you are using customer-managed encryption keys, see Register single-region keys for third-party connectors .
- When you connect a third-party data source, Gemini Enterprise creates a data store and associates entity data stores with it for each specified entity.
- Connect a third-party data source Visit a source-specific page for information on how to connect that source to Gemini Enterprise.
- Home Documentation AI and ML Gemini Enterprise Send feedback Connect a third-party data source Stay organized with collections Save and categorize content based on your preferences.

### "Set up a Confluence Data Center data store \_|\_ Gemini Enterprise \_|\_\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Customer-managed encryption keys .
- For more information, see Register a single-region key for third-party connectors .
- To enable alerts for the data store, see Configure alerts for third-party data stores .
- Data handling When using third-party federated search, the following data handling rules apply: Your query string is sent to the third-party search backend (Confluence Data Center API).

### "Set up a Confluence Cloud data store \_|\_ Gemini Enterprise \_|\_ Google\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/set-up-data-store)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Customer-managed encryption keys .
- For more information, see Register a single-region key for third-party connectors .
- To enable alerts for the data store, see Configure alerts for third-party data stores .
- Data handling When using third-party federated search, the following data handling rules apply: Your query string is sent to the third-party search backend (Atlassian API).

