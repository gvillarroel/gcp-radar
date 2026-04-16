---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.496Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Aggregate tables publish_as_db_view parameter"
feature_slug: "aggregate-tables-publish-as-db-view-parameter"
latest_feature_date: "2025-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-jobs"
  - "https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer"
keywords:
  - "aggregate"
  - "tables"
  - "publish"
  - "db"
  - "view"
  - "parameter"
  - "allows"
  - "stable"
---

# Aggregate tables publish_as_db_view parameter

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Allows aggregate tables to publish a stable database view for supported database dialects.

## Extended Definition

Allows aggregate tables to publish a stable database view for supported database dialects.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-jobs](https://docs.cloud.google.com/bigquery/docs/information-schema-jobs)
- [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer)

## Supporting Pages

### "Admin settings - Persistent Derived Tables \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)
- Source ID: `site-docs-reference-required-4`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Published as Stable View : A Boolean that filters the Persistent Derived Tables page for persisted tables and displays Yes for persisted tables that were published as a stable view, and No for persisted tables that were not published as a stable view, as determined by their publish as db view parameter value.
- You can publish a persisted table as a stable view on your database by adding the publish as db view: yes statement to the PDT or aggregate table, or by using the materialized view: yes statement to make the derived table a materialized view.
- Stable Name : The name of the persisted table's stable database view on your database, if the persisted table has been published as a stable view.
- The Persistent Derived Tables page shows only the connections that are enabled for PDTs and only the persisted tables that meet the following criteria: The persisted table is defined in a view file that is in production, unless you are in Development Mode , in which case you can use the Development tab to see the development version of persisted tables.

### JOBS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-jobs](https://docs.cloud.google.com/bigquery/docs/information-schema-jobs)
- Source ID: `site-docs-reference-required-6`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Only the JOBS BY PROJECT view has this column. transferred bytes INTEGER Total bytes transferred for cross-cloud queries, such as BigQuery Omni cross-cloud transfer jobs. materialized view statistics RECORD Statistics of materialized views considered in a query job. ( Preview ) metadata cache statistics RECORD Statistics for metadata column index usage for tables referenced in a query job. search statistics RECORD Statistics for a search query. query dialect STRING This field will be available sometime in May, 2025.
- JOBS WHERE -- Filter by the partition column first to limit the amount of data scanned. -- Eight days allows for jobs created before the 7 day end time filter. creation time BETWEEN TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 8 DAY ) AND CURRENT TIMESTAMP () AND job type = 'QUERY' AND statement type != 'SCRIPT' AND end time BETWEEN TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ) AND CURRENT TIMESTAMP (); Note: INFORMATION SCHEMA view names are case-sensitive.
- The result looks similar to the following: +---------------------+---------------+--------------------+-----------------+ user email total queries total bytes billed total slot ms +---------------------+---------------+--------------------+-----------------+ alice@example.com 152 12000000000 3500000 bob@example.com 45 8500000000 2100000 charles@example.com 210 1100000000 1800000 +---------------------+---------------+--------------------+-----------------+ Find job logs of Connected Sheets queries at the project-level If you don't have organization-level permissions or only need to monitor a specific project, run the following query to see a detailed log of all Connected Sheets queries for the current project: SELECT job id , creation time , user email , total bytes billed , total slot ms , query FROM -- This view queries the project you are currently running the query in. region- REGION NAME .INFORMATION SCHEMA.JOBS BY PROJECT WHERE creation time > = TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 30 DAY ) AND job id LIKE 'sheets dataconnector%' AND state = 'DONE' AND ( statement type IS NULL OR statement type <> 'SCRIPT' ) ORDER BY creation time DESC ; Replace REGION NAME with the region for your project.
- JOBS BY PROJECT WHERE DATE ( creation time ) >= CURRENT DATE - 30 -- scan 30 days of query history AND job type = 'QUERY' AND state = 'DONE' AND error result IS NULL AND statement type != 'SCRIPT' AND EXISTS ( -- Only include queries which had performance insights SELECT 1 FROM UNNEST ( query info . performance insights . stage performance standalone insights ) WHERE slot contention OR insufficient shuffle quota OR bi engine reasons IS NOT NULL OR high cardinality joins IS NOT NULL OR partition skew IS NOT NULL UNION ALL SELECT 1 FROM UNNEST ( query info . performance insights . stage performance change insights ) WHERE input data change . records read diff percentage IS NOT NULL ); View metadata refresh jobs The following example lists the metadata refresh jobs in last six hours: SELECT FROM region- REGION NAME .

### Load Facebook Ads data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer)
- Source ID: `site-docs-reference-required-6`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following command creates a Facebook Ads data transfer in the default project with all the required parameters: bq mk --transfer config --target dataset = mydataset --data source = facebook ads --display name = 'My Transfer' --params = '{"connector.authentication.oauth.clientId": "1650000000", "connector.authentication.oauth.clientSecret":"TBA99550", "connector.authentication.oauth.refreshToken":"abcdef", "connector.authorizedAdAccountsOnly":true, "connector.actionCollections":["Actions", "Conversions"], "connector.genericBreakdowns":["PublisherPlatform", "PlatformPosition"], "connector.actionBreakdowns":["ActionDevice", "ActionType"]}' API Use the projects.locations.transferConfigs.create method and supply an instance of the TransferConfig resource.
- Data transfer options Support Supported reports The BigQuery Data Transfer Service for Facebook Ads supports the transfer of the following Facebook Ads reports: AdAccounts AdInsights AdInsightsActions For information about how Facebook Ads reports are transformed into BigQuery tables and views, see Facebook Ads report transformation .
- The following is a list of action collections supported in a Facebook Ads data transfer: ActionValues Actions AdClickActions AdImpressionActions CatalogSegmentActions CatalogSegmentValue CatalogSegmentValueMobilePurchaseRoas CatalogSegmentValueOmniPurchaseRoas CatalogSegmentValueWebsitePurchaseRoas ConversionValues Conversions ConvertedProductQuantity ConvertedProductValue CostPer15 secVideoView CostPer2SecContinuousVideoView CostPerActionType CostPerAdClick CostPerConversion CostPerOneThousandAdImpression CostPerOutboundClick CostPerThruplay CostPerUniqueActionType CostPerUniqueConversion CostPerUniqueOutboundClick InteractiveComponentTap MobileAppPurchaseRoas OutboundClicks OutboundClicksCtr PurchaseRoas UniqueActions UniqueConversions UniqueOutboundClicks UniqueOutboundClicksCtr UniqueVideoView15 sec Video15 secWatchedActions Video30 secWatchedActions VideoAvgTimeWatchedActions VideoContinuous2SecWatchedActions VideoP100 watchedActions VideoP25WatchedActions VideoP50WatchedActions VideoP75WatchedActions VideoP95WatchedActions VideoPlayActions VideoPlayCurveActions VideoPlayRetentionGraphActions VideoTimeWatchedActions WebsiteCtr WebsitePurchaseRoas Combining breakdowns Facebook Ads has restrictions on what columns can be selected together.
- The following are the parameters for a Facebook Ads transfer: connector.authentication.oauth.clientId : The app ID name for the OAuth 2.0 client. connector.authentication.oauth.clientSecret : The app secret for the OAuth 2.0 client. connector.authentication.oauth.refreshToken : The long-lived token ID. connector.authorizedAdAccountsOnly : If set to true , the connector only retrieves data from advertising accounts that are authorized to your Facebook App.

