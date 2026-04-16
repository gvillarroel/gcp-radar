---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.408Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Git branch unlock"
feature_slug: "git-branch-unlock"
latest_feature_date: "2026-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/action-hub"
  - "https://docs.cloud.google.com/looker/docs/accessing-project-files"
  - "https://docs.cloud.google.com/looker/docs/additional-lookml-basics"
keywords:
  - "git"
  - "branch"
  - "unlock"
  - "lookml"
  - "developers"
  - "can"
  - "locked"
  - "looker"
---

# Git branch unlock

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

LookML developers can unlock a locked Git branch from the Looker IDE when Git operations fail or are still in progress.

## Extended Definition

LookML developers can unlock a locked Git branch from the Looker IDE when Git operations fail or are still in progress.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- [https://docs.cloud.google.com/looker/docs/accessing-project-files](https://docs.cloud.google.com/looker/docs/accessing-project-files)
- [https://docs.cloud.google.com/looker/docs/additional-lookml-basics](https://docs.cloud.google.com/looker/docs/additional-lookml-basics)

## Supporting Pages

### Sharing data through an action hub \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- Source ID: `site-docs-reference-required-4`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- On the action settings/enablement page, a Looker admin must configure the action's form fields to pull information from the user attribute by clicking the user attribute icon to the right of the appropriate field and selecting the desired user attribute. requiredField parameters in cell-level actions For cell-level actions, you can configure your model's LookML fields to deliver data to that action destination by specifying which tags your action supports in the requiredFields parameter of your action file.
- You can create a custom action by: Setting up a development repo Writing your action Testing your action Publishing and enabling your action, either in the Looker Action Hub or on your own private action hub server As with any action, you may need to configure your LookML models with specific parameters before you can use the action to deliver your data.
- Configuring a LookML model for use with an action For both custom actions and actions that are available from the Looker Action Hub, you must identify the relevant data fields by using the tags parameter in your LookML model.
- Setting up a local action hub server In this example, we will take the action we developed in the looker-open-source/actions/src/actions GitHub repo and will be committing the code to a new Git branch.

### Accessing LookML project files \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/accessing-project-files](https://docs.cloud.google.com/looker/docs/accessing-project-files)
- Source ID: `site-docs-reference-required-4`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you open a LookML project from the Develop panel, the Looker IDE opens the project to one of the LookML files in that project: If the project contains a document file named readme.md , the IDE will open that file.
- Home Documentation Data analytics Looker Guides Send feedback Accessing LookML project files Stay organized with collections Save and categorize content based on your preferences.
- Searching for and jumping to LookML objects or project files In the Looker IDE, you can do a quick search to navigate directly to LookML objects and project files.
- LookML developers can customize the file organization to match your project, as described on the Working with the IDE file browser documentation page.

### Common LookML patterns \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/additional-lookml-basics](https://docs.cloud.google.com/looker/docs/additional-lookml-basics)
- Source ID: `site-docs-reference-required-4`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- This page describes the following common patterns in LookML: Labeling fields (and names in the UI) Filtering counts by a dimension Percentages Using sets for drill-down details Filtering result sets Labeling fields (and names in the UI) Looker converts LookML field names into the strings that the UI displays by combining the view name in regular-weight font with the field's short name in bold.
- Home Documentation Data analytics Looker Guides Send feedback Common LookML patterns Stay organized with collections Save and categorize content based on your preferences.
- If you wanted a field that counted users from the EU, you could use something like this: measure: eu count { type: count # COUNT(CASE WHEN users.countrycode IN 'UK','FR','ES' THEN 1 ELSE NULL END) drill fields: [detail] filters: [users.countrycode: "UK,FR,ES"] } If you want to filter with a mathematical expression , be sure to enclose it in double quotes: measure: total orders above 100 dollars { type: sum # SUM(CASE WHEN order.value > 100 THEN order.value ELSE NULL END) sql: ${order.value} ;; drill fields: [detail] filters: [order.value: ">100"] } Percentages Many key performance indicators are expressed in the form of percentages, such as "the percent of items returned," "the percent of emails that resulted in a sale," or other instances of "the percent of X that Y." In LookML, the design pattern is to create counts for the two conditions and create a third field that computes the percentage between the two. dimension: returned { type: yesno } measure: count { # total count of items type: count distinct sql: ${TABLE}.id ;; drill fields: [detail] } measure: returned count { # count of returned items type: count distinct sql: ${TABLE}.id ;; drill fields: [detail] filters: [returned: "Yes"] } measure: percent returned { type: number sql: 100.0 ${returned count} / NULLIF(${count}, 0) ;; value format: "0.00" } Use the following format to compute percentages.
- Looker would generate the following declaration: view: airports { dimension: cntrl twr { # full name: airports.cntrl twr type: yesno # default name: AIRPORT Cntrl Twr (Yes/No) sql: ${TABLE}.cntrl twr ;; # the sql expression for this field } } You can rename the cntrl twr dimension to be human-readable: view: airports { dimension: has control tower { # full name: airports.has control tower type: yesno # aliased name: AIRPORTS Has Control Tower (Yes/No) sql: ${TABLE}.cntrl twr ;; # the sql expression for this field } } Filtering counts by a dimension You can group by a dimension and count entities — grouping by USERS Country , ORDERS Count will tell you where your orders are coming from by country.

