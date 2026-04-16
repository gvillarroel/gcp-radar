---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:33.436Z"
product_name: "Earth"
product_slug: "earth"
feature_name: "Import your own data layers"
feature_slug: "import-your-own-data-layers"
latest_feature_date: "2025-12-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/federated-identity-supported-services"
  - "https://developers.google.com/earth-engine/guides/playground"
  - "https://developers.google.com/earth-engine/guides/getstarted"
  - "https://docs.cloud.google.com/iam/docs/overview"
keywords:
  - "import"
  - "your"
  - "own"
  - "layers"
  - "users"
  - "can"
  - "their"
  - "large"
---

# Import your own data layers

Product: Earth
Coverage: MEDIUM

## Step 02 Summary

Users can import their own large-scale KML and GeoJSON datasets into Google Earth projects as data layers.

## Extended Definition

Users can import their own large-scale KML and GeoJSON datasets into Google Earth projects as data layers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)

## Supporting Pages

### "Identity federation: products and limitations \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- Source ID: `site-iam-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud API: No known limitations Other: No known limitations Network Service Tiers GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Organization Policy Service GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Parallelstore GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Personalized Service Health GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Policy Intelligence GA Console (federated): The following Policy Intelligence features have limitations for Workforce Identity Federation users who use the Google Cloud Workforce Identity Federation console: Policy Troubleshooter : Workforce Identity Federation users can't troubleshoot access in the console (federated).
- Google Cloud API: The following methods don't support identity federtation: UpdateCatalog ImportCompletionData TuneModel ImportProducts PurgeProducts ImportUserEvents ImportUserEvents PurgeUserEvents RejoinUserEvents Other: No known limitations Secret Manager GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Secure Source Manager GA Console (federated): No known limitations Google Cloud API: Identity federation users must sign in through the Secure Source Manager instance web interface before running any of the following commands: Git CLI commands API calls to data plane endpoints Identity federation users must sign in through the Secure Source Manager instance web interface after every session expiry to continue using Git SSH CLI commands with user SSH keys.
- Other: No known limitations Storage Transfer Service GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Text-to-Speech GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Transcoder API GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Transfer Appliance GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Translation Hub Unsupported Alternatives: No alternatives available Vertex AI GA Console (federated): When Workforce Identity Federation users create a new model monitoring job, Vertex AI doesn't prefill the alert email input with their email address.
- Other: No known limitations Document AI GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Endpoint Verification Unsupported Alternatives: No alternatives available Enterprise Knowledge Graph Unsupported Alternatives: No alternatives available Error Reporting GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Eventarc GA Console (federated): Although you can use an existing workflow as an Eventarc trigger destination, Workforce Identity Federation users can't create new workflows.

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Code Editor allows importing and managing your own image assets in the Asset Manager, and you can control script execution and appearance when sharing links.
- You can use the URL parameter ?scriptPath={repo}:{script} to share a reference to a file in your repo, e.g. https://code.earthengine.google.com/?scriptPath=users/username/utils:utils .
- The repositories are arranged by access level, with your private scripts stored in a repository you own in the Owner folder: users/username/default .
- You can add new scripts to, modify existing scripts in, or change access to (you may not remove their owner) the repositories in the Writer folder.

### "Get Started with Earth Engine \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Users can access public and private datasets, perform operations on Image, Feature, and their Collection data types, leveraging server-side objects.
- Learn more about importing your own vector datasets here .
- You can find images, image collections, and feature collections by searching the Earth Engine Data Catalog or by copying and pasting collection IDs into your code.
- Click the Import button to automatically create an Imports section at the top of your script with a variable for this collection.

### "IAM overview \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)
- Source ID: `site-iam-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Log buckets don't have their own allow policies, so to give someone this permission, you can instead grant them the Logs Bucket Writer role ( roles/logging.bucketWriter ) on the project that contains the log bucket.
- You can grant access to resources that don't have their own allow policies.
- However, they have a higher maintenance burden than predefined roles and there's a limit to the number of custom roles that you can have in your project and in your organization.
- There are various types of principals in IAM, but they can be divided into two broad categories: Human users : Some IAM principal types represent human users.

