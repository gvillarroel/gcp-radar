---
title: "Cloud Asset API \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/asset-inventory/docs/reference/rpc
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/asset-inventory/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/asset-inventory/docs/reference/rpc
  title: "Cloud Asset API \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud Asset Inventory
Reference
Send feedback
Cloud Asset API
Stay organized with collections
Save and categorize content based on your preferences.
The Cloud Asset API manages the history and inventory of Google Cloud resources.
Service: cloudasset.googleapis.com
The Service name cloudasset.googleapis.com is needed to create RPC client stubs.
google.cloud.asset.v1.AssetService
Methods
AnalyzeIamPolicy
Analyzes IAM policies to answer which identities have what accesses on which resources.
AnalyzeIamPolicyLongrunning
Analyzes IAM policies asynchronously to answer which identities have what accesses on which resources, and writes the analysis results to a Google Cloud Storage or a BigQuery destination.
AnalyzeMove
Analyze moving a resource to a specified destination without kicking off the actual move.
AnalyzeOrgPolicies
Analyzes organization policies under a scope.
AnalyzeOrgPolicyGovernedAssets
Analyzes organization policies governed assets (Google Cloud resources or policies) under a scope.
AnalyzeOrgPolicyGovernedContainers
Analyzes organization policies governed containers (projects, folders or organization) under a scope.
BatchGetAssetsHistory
Batch gets the update history of assets that overlap a time window.
BatchGetEffectiveIamPolicies
Gets effective IAM policies for a batch of resources.
CreateFeed
Creates a feed in a parent project/folder/organization to listen to its asset updates.
CreateSavedQuery
Creates a saved query in a parent project/folder/organization.
DeleteFeed
Deletes an asset feed.
DeleteSavedQuery
Deletes a saved query.
ExportAssets
Exports assets with time and resource types to a given Cloud Storage location/BigQuery table.
GetFeed
Gets details about an asset feed.
GetSavedQuery
Gets details about a saved query.
ListAssets
Lists assets with time and resource types and returns paged results in response.
ListFeeds
Lists all asset feeds in a parent project/folder/organization.
ListSavedQueries
Lists all saved queries in a parent project/folder/organization.
QueryAssets
Issue a job that queries assets using a SQL statement compatible with BigQuery SQL .
SearchAllIamPolicies
Searches all IAM policies within the specified scope, such as a project, folder, or organization.
SearchAllResources
Searches all Google Cloud resources within the specified scope, such as a project, folder, or organization.
UpdateFeed
Updates an asset feed configuration.
UpdateSavedQuery
Updates a saved query.
google.cloud.asset.v1p1beta1.AssetService
Methods
SearchAllIamPolicies
Searches all the IAM policies within a given accessible Resource Manager scope (project/folder/organization).
SearchAllResources
Searches all the resources within a given accessible Resource Manager scope (project/folder/organization).
google.cloud.asset.v1p2beta1.AssetService
Methods
CreateFeed
Creates a feed in a parent project/folder/organization to listen to its asset updates.
DeleteFeed
Deletes an asset feed.
GetFeed
Gets details about an asset feed.
ListFeeds
Lists all asset feeds in a parent project/folder/organization.
UpdateFeed
Updates an asset feed configuration.
google.cloud.asset.v1p7beta1.AssetService
Methods
ExportAssets
Exports assets with time and resource types to a given Cloud Storage location/BigQuery table.
google.longrunning.Operations
Methods
GetOperation
Gets the latest state of a long-running operation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-08 UTC."],[],[]]
