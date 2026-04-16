---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.641Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Granular Budget Alert Scoping"
feature_slug: "granular-budget-alert-scoping"
latest_feature_date: "2019-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/budgets"
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.Budget.Builder"
keywords:
  - "granular"
  - "budget"
  - "alert"
  - "scoping"
  - "adds"
  - "more"
  - "filters"
  - "so"
---

# Granular Budget Alert Scoping

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Adds more granular budget filters so budgets and budget alerts can target groups of projects and services.

## Extended Definition

Adds more granular budget filters so budgets and budget alerts can target groups of projects and services.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.Budget.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.Budget.Builder)

## Supporting Pages

### "Create, edit, or delete budgets and budget alerts \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Subaccounts : (Only available to billing-account-level budgets.) If you're a reseller and your Cloud Billing account has subaccounts, in the Subaccounts field, select one or more subaccounts that you want to apply the budget alert to.
- For more information about the budget settings, see: About cost trend chart About budget scope About budget amount Set alert threshold rules Manage notifications Delete a budget : Caution: Deleted budgets cannot be recovered.
- Folders & organizations : If your Google Cloud is configured to use organizations and folders , in the Folders & organizations field, select one or more organizations or folders that you want to apply the budget alert to.
- For example, if you set a 110% forecasted cost alert on a $100 budget, then you receive an alert notification when you are forecasted to spend more than $110 by the end of the budget calendar period.

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Note that the report's default settings are different if you access the report from the Budget and alerts page—the report's timeframe and filters are configured using the budget's scope settings.
- Credits setting: You can select or clear the Credits filters to change the view of your cost calculations to include or exclude credits, helping you see how credits impact the cost calculations compared to your budget target amount.
- Review the following examples for more information: Projects: budget scope versus cost report filter For the Cloud Billing account, assume the following regarding projects: 20 currently active projects incurring costs.
- View a budget in your cost report showing costs for the previous 12 months To view a budget in your cost report for the previous 12 months, take the following steps: Go to the Budgets and alerts list page .

### "Class Budget.Builder (2.88.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.Budget.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.Budget.Builder)
- Source ID: `site-java-reference`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Filters that define which resources are used to compute the actual spend against the budget amount, such as projects, services, and the budget's time period, as well as other filters. .google.cloud.billing.budgets.v1.Filter budget filter = 3 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description FilterOrBuilder getDefaultInstanceForType() public Budget getDefaultInstanceForType () Returns Type Description Budget getDescriptorForType() public Descriptors .
- Filters that define which resources are used to compute the actual spend against the budget amount, such as projects, services, and the budget's time period, as well as other filters. .google.cloud.billing.budgets.v1.Filter budget filter = 3 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description boolean Whether the budgetFilter field is set. hasNotificationsRule() public boolean hasNotificationsRule () Optional.
- Filters that define which resources are used to compute the actual spend against the budget amount, such as projects, services, and the budget's time period, as well as other filters. .google.cloud.billing.budgets.v1.Filter budget filter = 3 [(.google.api.field behavior) = OPTIONAL]; Parameter Name Description value Filter Returns Type Description Budget.Builder setBudgetFilter(Filter.Builder builderForValue) public Budget .
- Filters that define which resources are used to compute the actual spend against the budget amount, such as projects, services, and the budget's time period, as well as other filters. .google.cloud.billing.budgets.v1.Filter budget filter = 3 [(.google.api.field behavior) = OPTIONAL]; Parameter Name Description builderForValue Filter.Builder Returns Type Description Budget.Builder setDisplayName(String value) public Budget .

