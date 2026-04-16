---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:57:37.610Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Budget-linked Billing Reports target amount display"
feature_slug: "budget-linked-billing-reports-target-amount-display"
latest_feature_date: "2021-05-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/budgets"
  - "https://docs.cloud.google.com/billing/docs/how-to/reports"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetAmount.BudgetAmountCase"
keywords:
  - "budget"
  - "linked"
  - "billing"
  - "reports"
  - "target"
  - "amount"
  - "display"
  - "adds"
---

# Budget-linked Billing Reports target amount display

Product: Cloud Billing
Coverage: MEDIUM

## Step 02 Summary

Adds display of the selected budget's target amount as a visual marker when opening Billing Reports directly from a budget.

## Extended Definition

Adds display of the selected budget's target amount as a visual marker when opening Billing Reports directly from a budget.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetAmount.BudgetAmountCase](https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetAmount.BudgetAmountCase)

## Supporting Pages

### "Create, edit, or delete budgets and budget alerts \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To create budgets for a project, you need a role that includes the following permissions on the project: resourcemanager.projects.get billing.resourceCosts.get (optional) billing.resourcebudgets.read billing.resourcebudgets.write To gain these permissions using a predefined role, ask your administrator to grant you one of the following IAM roles on your project: Project Owner Project Editor Optional project permission: A user with the billing.resourceCosts.get permission on the project can view the costs for the project, including reports and the cost trend chart that displays on the budget create or edit pages.
- To manage budgets for a project, you need a role that includes the following permissions on the project: resourcemanager.projects.get billing.resourceCosts.get (optional) billing.resourcebudgets.read billing.resourcebudgets.write To gain these permissions using a predefined role, ask your administrator to grant you one of the following IAM roles on your project: Project Owner Project Editor Optional project permission: A user with the billing.resourceCosts.get permission on the project can view the costs for the project, including reports and the cost trend chart that displays on the budget create or edit pages.
- To view a list of budgets for your project, you need a role that includes the following permissions on the project: resourcemanager.projects.get billing.resourceCosts.get (optional) billing.resourcebudgets.read To gain these permissions using a predefined role, ask your administrator to grant you one of the following IAM roles on your project: Project Owner Project Editor Project Viewer Optional project permission: A user with the billing.resourceCosts.get permission on the project can view the costs for the project, including reports and the cost trend chart that displays on the budget create or edit pages.
- If you are editing an existing budget , when you open the report from the budget's cost trend chart , the cost report chart displays the previously-saved targeted budget amount as a red, dashed, horizontal line.

### "Analyze billing data and cost trends with Reports \_|\_ Cloud Billing \_\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/reports](https://docs.cloud.google.com/billing/docs/how-to/reports)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- The Reports page displays a chart that plots usage costs for a Cloud Billing account, including costs in all projects linked to the billing account.
- To view the cost reports for your Cloud Billing account, including viewing the cost information for all of the Google Cloud projects that are linked to the billing account, you need a role on your Cloud Billing account that includes the following permissions : billing.accounts.get billing.accounts.getSpendingInformation To gain these permissions using a predefined role , ask your administrator to grant you one of the following Cloud Billing IAM roles on your Cloud Billing account: Billing Account Viewer Billing Account Costs Manager Billing Account Administrator For more information about Cloud Billing permissions, see: Overview of Cloud Billing access control Create custom roles for Cloud Billing Understanding predefined Identity and Access Management roles for Cloud Billing To view all costs for an individual Google Cloud project, you need billing-specific permissions on the Google Cloud project .
- When you open the cost report from the budget, the value in the report's Projects filter displays "All projects (31)" — where "31" indicates that you have 31 projects that have incurred costs in the Cloud Billing account you're viewing, including active and inactive projects, and [Charges not specific to a project].
- Permissions required to access reports Depending on your level of Cloud Billing access, you can view cost reports for a Cloud Billing account (including viewing the costs for more than one project linked to the billing account), or you can view cost reports for individual projects.

### "Enum BudgetAmount.BudgetAmountCase (2.88.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetAmount.BudgetAmountCase](https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetAmount.BudgetAmountCase)
- Source ID: `site-java-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- InternalOneOfEnum Implements Internal.EnumLite , AbstractMessageLite.InternalOneOfEnum Inherited Members Enum.<T>valueOf(Class<T>,String) Enum.clone() Enum.compareTo(E) Enum.equals(Object) Enum.finalize() Enum.getDeclaringClass() Enum.hashCode() Enum.name() Enum.ordinal() Enum.toString() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields Name Description BUDGETAMOUNT NOT SET LAST PERIOD AMOUNT SPECIFIED AMOUNT Static Methods Name Description forNumber(int value) valueOf(int value) Deprecated.
- 2.88.0 (latest) 2.87.0 2.85.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.6 2.2.0 2.1.7 public enum BudgetAmount .
- Home Documentation Developer tools Java Client libraries Send feedback Enum BudgetAmount.BudgetAmountCase (2.88.0) Stay organized with collections Save and categorize content based on your preferences.
- BudgetAmountCase extends Enum<BudgetAmount .

