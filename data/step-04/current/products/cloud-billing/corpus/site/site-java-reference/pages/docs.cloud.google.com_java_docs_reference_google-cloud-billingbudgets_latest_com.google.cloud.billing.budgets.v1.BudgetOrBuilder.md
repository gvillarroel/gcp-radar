---
title: "Interface BudgetOrBuilder (2.88.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetOrBuilder
  title: "Interface BudgetOrBuilder (2.88.0) \_|\_ Java client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Interface BudgetOrBuilder (2.88.0)
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
public interface BudgetOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getAmount()
public abstract BudgetAmount getAmount ()
Required. Budgeted amount.
.google.cloud.billing.budgets.v1.BudgetAmount amount = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
BudgetAmount
The amount.
getAmountOrBuilder()
public abstract BudgetAmountOrBuilder getAmountOrBuilder ()
Required. Budgeted amount.
.google.cloud.billing.budgets.v1.BudgetAmount amount = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
BudgetAmountOrBuilder
getBudgetFilter()
public abstract Filter getBudgetFilter ()
Optional. Filters that define which resources are used to compute the
actual spend against the budget amount, such as projects, services, and the
budget's time period, as well as other filters.
.google.cloud.billing.budgets.v1.Filter budget_filter = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Filter
The budgetFilter.
getBudgetFilterOrBuilder()
public abstract FilterOrBuilder getBudgetFilterOrBuilder ()
Optional. Filters that define which resources are used to compute the
actual spend against the budget amount, such as projects, services, and the
budget's time period, as well as other filters.
.google.cloud.billing.budgets.v1.Filter budget_filter = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
FilterOrBuilder
getDisplayName()
public abstract String getDisplayName ()
User data for display name in UI. The name must be less than or equal to 60
characters.
string display_name = 2;
Returns
Type
Description
String
The displayName.
getDisplayNameBytes()
public abstract ByteString getDisplayNameBytes ()
User data for display name in UI. The name must be less than or equal to 60
characters.
string display_name = 2;
Returns
Type
Description
ByteString
The bytes for displayName.
getEtag()
public abstract String getEtag ()
Optional. Etag to validate that the object is unchanged for a
read-modify-write operation.
An empty etag causes an update to overwrite other changes.
string etag = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The etag.
getEtagBytes()
public abstract ByteString getEtagBytes ()
Optional. Etag to validate that the object is unchanged for a
read-modify-write operation.
An empty etag causes an update to overwrite other changes.
string etag = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for etag.
getName()
public abstract String getName ()
Output only. Resource name of the budget.
The resource name implies the scope of a budget. Values are of the form
billingAccounts/{billingAccountId}/budgets/{budgetId} .
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The name.
getNameBytes()
public abstract ByteString getNameBytes ()
Output only. Resource name of the budget.
The resource name implies the scope of a budget. Values are of the form
billingAccounts/{billingAccountId}/budgets/{budgetId} .
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for name.
getNotificationsRule()
public abstract NotificationsRule getNotificationsRule ()
Optional. Rules to apply to notifications sent based on budget spend and
thresholds.
.google.cloud.billing.budgets.v1.NotificationsRule notifications_rule = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
NotificationsRule
The notificationsRule.
getNotificationsRuleOrBuilder()
public abstract NotificationsRuleOrBuilder getNotificationsRuleOrBuilder ()
Optional. Rules to apply to notifications sent based on budget spend and
thresholds.
.google.cloud.billing.budgets.v1.NotificationsRule notifications_rule = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
NotificationsRuleOrBuilder
getThresholdRules(int index)
public abstract ThresholdRule getThresholdRules ( int index )
Optional. Rules that trigger alerts (notifications of thresholds
being crossed) when spend exceeds the specified percentages of the budget.
Optional for pubsubTopic notifications.
Required if using email notifications.
repeated .google.cloud.billing.budgets.v1.ThresholdRule threshold_rules = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int
Returns
Type
Description
ThresholdRule
getThresholdRulesCount()
public abstract int getThresholdRulesCount ()
Optional. Rules that trigger alerts (notifications of thresholds
being crossed) when spend exceeds the specified percentages of the budget.
Optional for pubsubTopic notifications.
Required if using email notifications.
repeated .google.cloud.billing.budgets.v1.ThresholdRule threshold_rules = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getThresholdRulesList()
public abstract List<ThresholdRule> getThresholdRulesList ()
Optional. Rules that trigger alerts (notifications of thresholds
being crossed) when spend exceeds the specified percentages of the budget.
Optional for pubsubTopic notifications.
Required if using email notifications.
repeated .google.cloud.billing.budgets.v1.ThresholdRule threshold_rules = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
List < ThresholdRule >
getThresholdRulesOrBuilder(int index)
public abstract ThresholdRuleOrBuilder getThresholdRulesOrBuilder ( int index )
Optional. Rules that trigger alerts (notifications of thresholds
being crossed) when spend exceeds the specified percentages of the budget.
Optional for pubsubTopic notifications.
Required if using email notifications.
repeated .google.cloud.billing.budgets.v1.ThresholdRule threshold_rules = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int
Returns
Type
Description
ThresholdRuleOrBuilder
getThresholdRulesOrBuilderList()
public abstract List < ? extends ThresholdRuleOrBuilder > getThresholdRulesOrBuilderList ()
Optional. Rules that trigger alerts (notifications of thresholds
being crossed) when spend exceeds the specified percentages of the budget.
Optional for pubsubTopic notifications.
Required if using email notifications.
repeated .google.cloud.billing.budgets.v1.ThresholdRule threshold_rules = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
List < ? extends com.google.cloud.billing.budgets.v1.ThresholdRuleOrBuilder >
hasAmount()
public abstract boolean hasAmount ()
Required. Budgeted amount.
.google.cloud.billing.budgets.v1.BudgetAmount amount = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
boolean
Whether the amount field is set.
hasBudgetFilter()
public abstract boolean hasBudgetFilter ()
Optional. Filters that define which resources are used to compute the
actual spend against the budget amount, such as projects, services, and the
budget's time period, as well as other filters.
.google.cloud.billing.budgets.v1.Filter budget_filter = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
Whether the budgetFilter field is set.
hasNotificationsRule()
public abstract boolean hasNotificationsRule ()
Optional. Rules to apply to notifications sent based on budget spend and
thresholds.
.google.cloud.billing.budgets.v1.NotificationsRule notifications_rule = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
Whether the notificationsRule field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
