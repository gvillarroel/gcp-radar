---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.459Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Looker connector private IP support"
feature_slug: "looker-connector-private-ip-support"
latest_feature_date: "2025-06-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/bi-connectors"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition"
keywords:
  - "looker"
  - "connector"
  - "private"
  - "ip"
  - "can"
  - "connect"
  - "core"
  - "instances"
---

# Looker connector private IP support

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Looker connector can connect to private IP Looker (Google Cloud core) instances using the Looker instance ID.

## Extended Definition

The Looker connector can connect to private IP Looker (Google Cloud core) instances using the Looker instance ID.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/bi-connectors](https://docs.cloud.google.com/looker/docs/bi-connectors)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition)

## Supporting Pages

### Admin settings - BI Connectors \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/bi-connectors](https://docs.cloud.google.com/looker/docs/bi-connectors)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Microsoft Excel connector is supported for all configurations of Looker and Looker (Google Cloud core) instances, including customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections .
- The Tableau Desktop connector is supported for all configurations of Looker and Looker (Google Cloud core) instances, including customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections .
- The Power BI connector is supported for all configurations of Looker and Looker (Google Cloud core) instances, including customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections .
- For customer-hosted Looker instances and Looker (Google Cloud core) instances that are configured for private connections, your network administrator must configure your network so that traffic from Microsoft Excel can reach your Looker instance.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- These roles won't appear on a Looker (Google Cloud core) instance if the instance uses private connections (private services access or Private Service Connect) networking or hybrid connections networking .
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Note: Looker (Google Cloud core) instances don't contain the sudo permission. manage groups see users Instance Wide CM Users can create, edit, and delete groups on the Groups page in the Users section of the Admin menu, with the exception of any groups that are associated with the Admin role. manage roles manage groups Instance Wide CM Users can create, edit, and delete roles, except for the Admin role, on the Roles page in the Users section of the Admin menu.
- Users must have download with limit and/or download without limit permissions to download the content. create public looks save looks Model Specific Users can mark a saved Look as public , which will then generate URLs that grant access to that Look without authentication. download with limit see looks Model Specific This permission applies to Looks and dashboards in Looker and to reports in Looker Studio that use the Looker connector.

### "Quickstart: Create a Looker (Google Cloud core) public secure connection\

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition)
- Source ID: `site-docs-reference-required-4`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- For more information about creating and configuring an instance, see the Looker (Google Cloud core) documentation: Create a Looker (Google Cloud core) instance Set up a custom domain for a Looker (Google Cloud core) instance that uses public connections Configure an IP allowlist for Looker (Google Cloud core) Prepare a Looker (Google Cloud core) instance for users Connect to your database Use the sample LookML project on a Looker (Google Cloud core) instance Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- What's next This Quickstart covered how to create a Standard Looker (Google Cloud core) instance that uses a public secure network connection and Google-managed encryption and that requires no deferred or denied maintenance windows and no additional users beyond the default number that is provided for a Standard edition.
- When you click the button, depending on what Looker instances already exist in this project, you'll see one of the following: If a Looker (Google Cloud core) instance already exists within this project, the Instances page will open.
- Create a Looker (Google Cloud core) public secure connection standard edition instance Learn how to create a Looker (Google Cloud core) instance that uses default configuration settings.

