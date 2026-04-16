---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.526Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Open SQL Interface parameters and filter-only fields"
feature_slug: "open-sql-interface-parameters-and-filter-only-fields"
latest_feature_date: "2024-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect"
  - "https://docs.cloud.google.com/bigquery/docs/google-ads-transfer"
  - "https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery"
keywords:
  - "open"
  - "sql"
  - "interface"
  - "parameters"
  - "filter"
  - "only"
  - "fields"
  - "supports"
---

# Open SQL Interface parameters and filter-only fields

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Open SQL Interface supports parameters and filter-only fields.

## Extended Definition

Open SQL Interface supports parameters and filter-only fields.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- [https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery](https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery)

## Supporting Pages

### "Admin settings - OpenID Connect authentication \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Looker only supports OpenID Connect authentication using OpenID Connect's Authorization Code Flow .
- Enabling mirror OpenID Connect groups If you are using a Looker (Google Cloud core) instance, we recommend that you enable group mirroring for only the primary authentication method and don't enable group mirroring for the backup OAuth authentication .
- However, it is only possible when one of the following two conditions is met: Condition 1 : Users are authenticating into Looker (Google Cloud core) using their Google identities through the OpenID Connect protocol.
- Then, enter the group information to configure the specific OpenID Connect groups you want to mirror into Looker in the Preferred Group Name / Roles / OpenID Connect Group Name fields.

### Load Google Ads data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- Source ID: `site-docs-reference-required-6`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you trigger a manual transfer, Match Table snapshots for the following tables are not updated: Ad AdGroup AdGroupAudience AdGroupBidModifier AdGroupAdLabel AdGroupCriterion AdGroupCriterionLabel AdGroupLabel AgeRange Asset AssetGroup AssetGroupAsset AssetGroupListingGroupFilter AssetGroupSignal Audience BidGoal Budget Campaign CampaignAudience CampaignCriterion CampaignLabel Customer Gender Keyword LocationBasedCampaignCriterion ParentalStatus Placement Video Custom reports The BigQuery Data Transfer Service for Google Ads connector also supports the use of custom reports using Google Ads Query Language (GAQL) queries in the Google Ads transfer configuration.
- The default value is 7 . --service account name : Specifies a service account to use for the Google Ads transfer authentication instead of your user account. bq mk \ --transfer config \ --project id = PROJECT ID \ --target dataset = DATASET \ --display name = NAME \ --params = ' PARAMETERS ' \ --data source = DATA SOURCE \ --table filter = TABLES \ --schedule = SCHEDULE --refresh window days = REFRESH DAYS --service account name = SERVICE ACCOUNT NAME Where: PROJECT ID is your project ID.
- You cannot include ad group fields because the Google Ads API filters the PMax data.
- Transfer configuration for Customer ID 1234567890 A transfer configuration for the root manager account (Customer ID 1234567890) would generate data transfer runs that include the following Customer IDs: 1111 (via sub-manager account 1234) 2222 (via sub-manager account 1234) 3333 (via sub-manager account 1234) 4444 (via sub-manager account 1234) 5555 (via sub-manager account 567 and sub-manager account 1234) 6666 (via sub-manager account 567 and sub-manager account 1234) 7777 (via sub-manager account 567 and sub-manager account 1234) 8888 (via sub-manager account 89) 9999 (via sub-manager account 89) 0000 (individual Customer ID) Transfer configuration for Customer ID 1234 A transfer configuration for sub-manager account 123 (Customer ID 1234) would generate data transfer runs that include the following Customer IDs: 1111 2222 3333 4444 5555 (via sub-manager account 567) 6666 (via sub-manager account 567) 7777 (via sub-manager account 567) Transfer configuration for Customer ID 567 A transfer configuration for sub-manager account 567 (Customer ID 567) would generate data transfer runs that include the following Customer IDs: 5555 6666 7777 Transfer configuration for Customer ID 89 A transfer configuration for sub-manager account 89 (Customer ID 89) would generate data transfer runs that include the following Customer IDs: 8888 9999 Transfer configuration for Customer ID 0000 A transfer configuration for Customer ID 0000 would generate data transfer runs that include only the individual Customer ID: 0000 Migrate Google Ads data to MCCs To migrate your existing Google Ads data in BigQuery Data Transfer Service to the MCC structure, you can set up a backfill to add your existing data to the tables created by the transfer configuration linked to the manager account.

### Connect to Google BigQuery \_|\_ Data Studio \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery](https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery)
- Source ID: `site-docs-reference-required-5`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SELECT FROM ( SELECT Criteria ID, Parent ID, Name FROM 'table 1' ) As table 1 LEFT JOIN ( SELECT Criteria ID, Parent ID, Name FROM 'table 2' ) As table 2 ON table 1.Criteria ID = table 2.Criteria ID This query includes the following duplicate column names: Criteria ID Parent ID Name To avoid the Field is ambiguous error, you can explicitly rename the duplicated fields using the AS keyword: SELECT FROM ( SELECT Criteria ID AS Criteria ID 1, Parent ID AS Parent ID 1, Name AS NAME 1 FROM 'table 1' ) AS table 1 LEFT JOIN ( SELECT Criteria ID AS Criteria ID 2, Parent ID AS Parent ID 2, Name AS NAME 2 FROM 'table 2' ) AS table 2 ON table 1.Criteria ID 1 = table 2.Criteria ID 2; If you need to rename only a few fields, you can select everything except the ones that you want to rename, for example: SELECT EXCEPT (city), city AS city 1 FROM 'table 1' Query timeout Custom queries in Data Studio might time out after three to five minutes.
- Because of this, custom queries in Data Studio are subject to the following restrictions: Custom SQL queries may only have a single statement For example, the following won't work because it has multiple SQL statements: DECLARE cost per tb in dollar FLOAT64 DEFAULT 4.2; SELECT total bytes billed / (1024 1024) cost per tb in dollar)/(1024 1024))) FROM billing-table; Use unambiguous field names in joins Custom join queries can't handle duplicate column names.
- Charts using a data source that is based on a custom query that includes duplicate fields will return a user configuration error similar to the following: To avoid this issue, be sure to use unambiguous field names in your custom queries.
- To use one project for billing and a different project for your data, select or enter the billing project in the user interface, and then include the data project in the SELECT...FROM clause of the custom query.

