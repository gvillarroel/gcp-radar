---
title: "Interface BudgetAmountOrBuilder (2.88.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetAmountOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetAmountOrBuilder
  title: "Interface BudgetAmountOrBuilder (2.88.0) \_|\_ Java client libraries \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Interface BudgetAmountOrBuilder (2.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.88.0 (latest)
2.87.0
2.85.0
2.83.0
2.82.0
2.81.0
2.80.0
2.78.0
2.76.0
2.75.0
2.74.0
2.73.0
2.72.0
2.70.0
2.68.0
2.67.0
2.64.0
2.63.0
2.62.0
2.60.0
2.59.0
2.58.0
2.57.0
2.56.0
2.55.0
2.54.0
2.53.0
2.52.0
2.51.0
2.49.0
2.48.0
2.47.0
2.46.0
2.45.0
2.44.0
2.43.0
2.42.0
2.41.0
2.40.0
2.39.0
2.37.0
2.36.0
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.0
2.28.0
2.27.0
2.24.0
2.23.0
2.22.0
2.21.0
2.20.0
2.19.0
2.18.0
2.17.0
2.16.0
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.10.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.6
2.2.0
2.1.7
public interface BudgetAmountOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getBudgetAmountCase()
public abstract BudgetAmount . BudgetAmountCase getBudgetAmountCase ()
Returns
Type
Description
BudgetAmount.BudgetAmountCase
getLastPeriodAmount()
public abstract LastPeriodAmount getLastPeriodAmount ()
Use the last period's actual spend as the budget for the present period.
LastPeriodAmount can only be set when the budget's time period is a
Filter.calendar_period .
It cannot be set in combination with
Filter.custom_period .
.google.cloud.billing.budgets.v1.LastPeriodAmount last_period_amount = 2;
Returns
Type
Description
LastPeriodAmount
The lastPeriodAmount.
getLastPeriodAmountOrBuilder()
public abstract LastPeriodAmountOrBuilder getLastPeriodAmountOrBuilder ()
Use the last period's actual spend as the budget for the present period.
LastPeriodAmount can only be set when the budget's time period is a
Filter.calendar_period .
It cannot be set in combination with
Filter.custom_period .
.google.cloud.billing.budgets.v1.LastPeriodAmount last_period_amount = 2;
Returns
Type
Description
LastPeriodAmountOrBuilder
getSpecifiedAmount()
public abstract Money getSpecifiedAmount ()
A specified amount to use as the budget.
currency_code is optional. If specified when creating a budget, it must
match the currency of the billing account. If specified when updating a
budget, it must match the currency_code of the existing budget.
The currency_code is provided on output.
.google.type.Money specified_amount = 1;
Returns
Type
Description
com.google.type.Money
The specifiedAmount.
getSpecifiedAmountOrBuilder()
public abstract MoneyOrBuilder getSpecifiedAmountOrBuilder ()
A specified amount to use as the budget.
currency_code is optional. If specified when creating a budget, it must
match the currency of the billing account. If specified when updating a
budget, it must match the currency_code of the existing budget.
The currency_code is provided on output.
.google.type.Money specified_amount = 1;
Returns
Type
Description
com.google.type.MoneyOrBuilder
hasLastPeriodAmount()
public abstract boolean hasLastPeriodAmount ()
Use the last period's actual spend as the budget for the present period.
LastPeriodAmount can only be set when the budget's time period is a
Filter.calendar_period .
It cannot be set in combination with
Filter.custom_period .
.google.cloud.billing.budgets.v1.LastPeriodAmount last_period_amount = 2;
Returns
Type
Description
boolean
Whether the lastPeriodAmount field is set.
hasSpecifiedAmount()
public abstract boolean hasSpecifiedAmount ()
A specified amount to use as the budget.
currency_code is optional. If specified when creating a budget, it must
match the currency of the billing account. If specified when updating a
budget, it must match the currency_code of the existing budget.
The currency_code is provided on output.
.google.type.Money specified_amount = 1;
Returns
Type
Description
boolean
Whether the specifiedAmount field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
