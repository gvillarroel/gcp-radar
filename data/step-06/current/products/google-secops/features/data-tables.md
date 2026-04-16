---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.822Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Data tables"
feature_slug: "data-tables"
latest_feature_date: "2025-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-data-tables"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
keywords:
  - "tables"
  - "multicolumn"
  - "lookup"
  - "structures"
  - "users"
  - "can"
  - "create"
  - "import"
---

# Data tables

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Data tables are multicolumn lookup structures that users can create or import into Google SecOps and use in rules.

## Extended Definition

Data tables are multicolumn lookup structures that users can create or import into Google SecOps and use in rules.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-data-tables](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-data-tables)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)

## Supporting Pages

### "Configure data RBAC for data tables \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-data-tables](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-data-tables)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure data RBAC for data tables Supported in: Google secops SIEM This page describes how data role-based access control ( data RBAC ) administrators and users can assign scopes to data tables.
- Another way of looking at this is from the perspective of a data table: Scoped data tables with selected can be accessed by specific users or rules that have matching scopes.
- Access permissions vary by user type (scoped versus global): Scoped users can create a scoped data table using all or a subset of the scopes that are assigned to them.
- Global users can create either an unscoped data table (a data table that all the users can use) or a scoped data table.

### "Impact of data RBAC on Google SecOps features \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access control : While feature RBAC determines who can create or edit a dashboard, data RBAC determines what specific data is visible within the charts and tables.
- Access permissions for users in data tables The scopes that are associated with a data table determine how global and scoped users can interact with it.
- Data tables Data tables are multicolumn data constructs that let you input your own data into Google SecOps.
- To maintain security and control, only users with global scope can view and create global rules.

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create and manage scopes You can create and manage data scopes within the Google SecOps user interface, and then assign those scopes to users or groups through IAM.
- Important: Before data RBAC is enabled, all users, regardless of assigned scopes, have global access and can view all data.
- You can use the Suspicious DHCP Activity label to create a scope and assign the scope to the relevant users.
- In the New principals field, do the following: If you're using Workforce Identity Federation or any other third party authentication, add your principal identifier as follows: principal://iam.googleapis.com/locations/global/workforcePools/ POOL ID /subject/ USER EMAIL ADDRESS Replace the following: POOL ID : the identifier for the pool created for your identity provider.

