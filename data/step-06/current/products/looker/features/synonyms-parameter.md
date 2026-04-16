---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.457Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "synonyms parameter"
feature_slug: "synonyms-parameter"
latest_feature_date: "2025-08-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/additional-lookml-basics"
  - "https://docs.cloud.google.com/looker/docs/action-hub"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts"
keywords:
  - "synonyms"
  - "parameter"
  - "lookml"
  - "developers"
  - "can"
  - "use"
  - "provide"
  - "additional"
---

# synonyms parameter

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

LookML developers can use the synonyms parameter to provide additional context for Conversational Analytics and other features.

## Extended Definition

LookML developers can use the synonyms parameter to provide additional context for Conversational Analytics and other features.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/additional-lookml-basics](https://docs.cloud.google.com/looker/docs/additional-lookml-basics)
- [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)

## Supporting Pages

### Common LookML patterns \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/additional-lookml-basics](https://docs.cloud.google.com/looker/docs/additional-lookml-basics)
- Source ID: `site-docs-reference-required-4`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Filtering result sets LookML provides a set of filter operations that can be applied to fields and Explores to filter result sets before they are returned to the user. always filter on the Explore Use always filter to always apply a set of filters to any query that is run within an Explore.
- LookML provides a way to address this in the form of conditionally filter .
- If you wanted a field that counted users from the EU, you could use something like this: measure: eu count { type: count # COUNT(CASE WHEN users.countrycode IN 'UK','FR','ES' THEN 1 ELSE NULL END) drill fields: [detail] filters: [users.countrycode: "UK,FR,ES"] } If you want to filter with a mathematical expression , be sure to enclose it in double quotes: measure: total orders above 100 dollars { type: sum # SUM(CASE WHEN order.value > 100 THEN order.value ELSE NULL END) sql: ${order.value} ;; drill fields: [detail] filters: [order.value: ">100"] } Percentages Many key performance indicators are expressed in the form of percentages, such as "the percent of items returned," "the percent of emails that resulted in a sale," or other instances of "the percent of X that Y." In LookML, the design pattern is to create counts for the two conditions and create a third field that computes the percentage between the two. dimension: returned { type: yesno } measure: count { # total count of items type: count distinct sql: ${TABLE}.id ;; drill fields: [detail] } measure: returned count { # count of returned items type: count distinct sql: ${TABLE}.id ;; drill fields: [detail] filters: [returned: "Yes"] } measure: percent returned { type: number sql: 100.0 ${returned count} / NULLIF(${count}, 0) ;; value format: "0.00" } Use the following format to compute percentages.
- The following code creates a set customers.detail and points both counts to the same set of fields. view: customers { set: detail { fields: [id, name, city] # creates named set customers.detail } measure: count { type: count drill fields: [detail ] # show fields in the set "customers.detail" } measure: in california count { type: count filters: [state: "California"] drill fields: [detail ] # show fields in the set "customers.detail" } } LookML sets are powerful in the following ways: Redeclaration of sets is additive.

### Sharing data through an action hub \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- Source ID: `site-docs-reference-required-4`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- On the action settings/enablement page, a Looker admin must configure the action's form fields to pull information from the user attribute by clicking the user attribute icon to the right of the appropriate field and selecting the desired user attribute. requiredField parameters in cell-level actions For cell-level actions, you can configure your model's LookML fields to deliver data to that action destination by specifying which tags your action supports in the requiredFields parameter of your action file.
- Parameter Required Description Data Type tag No If present, matches a field that has this tag. string any tag No If present, supersedes tag and matches a field that has any of the provided tags. string all tags No If present, supersedes tag and matches a field that has all the provided tags. string Supported data formats The DataActionRequest class defines what data delivery format is available for the action to work with.
- You can create a custom action by: Setting up a development repo Writing your action Testing your action Publishing and enabling your action, either in the Looker Action Hub or on your own private action hub server As with any action, you may need to configure your LookML models with specific parameters before you can use the action to deliver your data.
- Configuring a LookML model for use with an action For both custom actions and actions that are available from the Looker Action Hub, you must identify the relevant data fields by using the tags parameter in your LookML model.

### "Admin settings - Persistent Derived Tables \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)
- Source ID: `site-docs-reference-required-4`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- PDT Name The PDT Name column displays the name of the persisted table as defined in the view parameter of the persisted table's LookML view file.
- For failed builds, provides a SQL error message and a link to the model's LookML if the user has the appropriate permissions to see LookML .
- These are the persisted tables that have been deployed to production on your instance; these persisted tables provide the data for your users' Explore queries. (If you are in Production Mode or if you don't have develop permissions, the Persistent Derived Tables page will not display any tabs, and the page will show information for production persisted tables only.) The Development tab shows the development persisted tables .
- The PDT Activity dashboard includes tiles that show the following information: A summary of the persisted table that includes the name of the LookML model and view that define the persisted table, the name of the database connection that the persisted table uses, the total number of the persisted table's successful and failed build attempts, and the percentage of total build attempts that were failures.

