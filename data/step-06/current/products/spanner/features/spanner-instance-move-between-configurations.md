---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.292Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner instance move between configurations"
feature_slug: "spanner-instance-move-between-configurations"
latest_feature_date: "2022-12-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/free-trial-quickstart"
  - "https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
keywords:
  - "move"
  - "moving"
  - "other"
  - "configurations"
  - "between"
  - "instance"
  - "supports"
---

# Spanner instance move between configurations

Product: Spanner
Coverage: LOW

## Step 02 Summary

Cloud Spanner supports moving an instance to any other instance configuration, including between regional and multi-region configurations.

## Extended Definition

Cloud Spanner supports moving an instance to any other instance configuration, including between regional and multi-region configurations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)

## Supporting Pages

### Autoscaler tool overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- To help you to balance cost control with performance needs, the Autoscaler tool monitors your instances and automatically adds or removes nodes or processing units to help ensure that they stay within the following parameters: The recommended maximums for CPU utilization .
- So, when the Autoscaler tool adds or removes nodes or processing units, it needs to allow the Spanner backend sufficient time to reassign and reorganize the splits as new capacity is added or removed from instances.
- The Autoscaler tool uses cooldown periods on both scale-up and scale-down events to control how quickly it can add or remove nodes or processing units from an instance.
- This method allows the instance the necessary time to reorganize the relationships between compute notes or processing units and data splits.

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Split Spanner divides your data into chunks called splits , where individual splits can move independently from each other and get assigned to different servers.
- To help mitigate this complexity, one common strategy is to run completely separate game regions with no way to move data between them.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Similar to other relational databases, an inventory table in Spanner has a primary key that is a globally unique identifier for the item, as illustrated in the following table. itemID type playerID 7c14887e-8d45 1 6f1ede3b-25e2 8ca83609-bb93 40 6f1ede3b-25e2 33fedada-3400 1 5fa0aa7d-16da e4714487-075e 23 5fa0aa7d-16da d4fbfb92-a8bd 14 5fa0aa7d-16da 31b7067b-42ec 3 26a38c2c-123a In the example inventory table, itemID and playerID are truncated for readability.

### "Create a Spanner free trial instance and sample application \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- Source ID: `site-docs-root`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Click Save to upgrade your free trial instance. gcloud To upgrade your free trial instance to a paid Enterprise edition instance with the same instance configuration, run the following gcloud spanner instances update command: gcloud spanner instances update INSTANCE ID -- instance - type = provisioned Delete the instance Warning: Deleting an instance permanently removes the instance and all its databases.
- Run the gcloud spanner samples run command to download the sample application and start the backend gRPC service and workload generator for the given sample application: gcloud spanner samples run APPNAME --instance-id INSTANCE ID For more information and a list of other available commands for the sample application, see the gcloud CLI documentation .
- Note: A Spanner free trial instance supports Standard edition features, and Enterprise edition features, such as KNN vector distance functions , full-text search , and Spanner Graph .
- You can create a free trial instance in any of the Spanner regional instance configurations : INSTANCE DESCRIPTION : the name to display for the instance in the Google Cloud console.

