---
title: "REST Resource: billingAccounts.budgets \_|\_ Cloud Billing \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/reference/budget/rest/v1/billingAccounts.budgets
  title: "REST Resource: billingAccounts.budgets \_|\_ Cloud Billing \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Costs and usage management
Cloud Billing
APIs & Reference
Send feedback
REST Resource: billingAccounts.budgets
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Budget
JSON representation
Filter
JSON representation
CreditTypesTreatment
CalendarPeriod
CustomPeriod
JSON representation
BudgetAmount
JSON representation
LastPeriodAmount
ThresholdRule
JSON representation
Basis
NotificationsRule
JSON representation
OwnershipScope
Methods
Resource: Budget
A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
JSON representation
{
"name" : string ,
"displayName" : string ,
"budgetFilter" : {
object ( Filter )
} ,
"amount" : {
object ( BudgetAmount )
} ,
"thresholdRules" : [
{
object ( ThresholdRule )
}
] ,
"notificationsRule" : {
object ( NotificationsRule )
} ,
"etag" : string ,
"ownershipScope" : enum ( OwnershipScope )
}
Fields
name
string
Output only. Resource name of the budget. The resource name implies the scope of a budget. Values are of the form billingAccounts/{billingAccountId}/budgets/{budgetId} .
displayName
string
User data for display name in UI. The name must be less than or equal to 60 characters.
budgetFilter
object ( Filter )
Optional. Filters that define which resources are used to compute the actual spend against the budget amount, such as projects, services, and the budget's time period, as well as other filters.
amount
object ( BudgetAmount )
Required. Budgeted amount.
thresholdRules[]
object ( ThresholdRule )
Optional. Rules that trigger alerts (notifications of thresholds being crossed) when spend exceeds the specified percentages of the budget.
Optional for pubsubTopic notifications.
Required if using email notifications.
notificationsRule
object ( NotificationsRule )
Optional. Rules to apply to notifications sent based on budget spend and thresholds.
etag
string
Optional. Etag to validate that the object is unchanged for a read-modify-write operation. An empty etag causes an update to overwrite other changes.
ownershipScope
enum ( OwnershipScope )
Filter
A filter for a budget, limiting the scope of the cost to calculate.
JSON representation
{
"projects" : [
string
] ,
"resourceAncestors" : [
string
] ,
"creditTypes" : [
string
] ,
"creditTypesTreatment" : enum ( CreditTypesTreatment ) ,
"services" : [
string
] ,
"subaccounts" : [
string
] ,
"labels" : {
string : array ,
...
} ,
// Union field usage_period can be only one of the following:
"calendarPeriod" : enum ( CalendarPeriod ) ,
"customPeriod" : {
object ( CustomPeriod )
}
// End of list of possible types for union field usage_period .
}
Fields
projects[]
string
Optional. A set of projects of the form projects/{project} , specifying that usage from only this set of projects should be included in the budget. If omitted, the report includes all usage for the billing account, regardless of which project the usage occurred on.
resourceAncestors[]
string
Optional. A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId} , specifying that usage from only this set of folders and organizations should be included in the budget. If omitted, the budget includes all usage that the billing account pays for. If the folder or organization contains projects that are paid for by a different Cloud Billing account, the budget doesn't apply to those projects.
creditTypes[]
string
Optional. If Filter.credit_types_treatment is INCLUDE_SPECIFIED_CREDITS, this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See a list of acceptable credit type values .
If Filter.credit_types_treatment is not INCLUDE_SPECIFIED_CREDITS, this field must be empty.
creditTypesTreatment
enum ( CreditTypesTreatment )
Optional. If not set, default behavior is INCLUDE_ALL_CREDITS .
services[]
string
Optional. A set of services of the form services/{service_id} , specifying that usage from only this set of services should be included in the budget. If omitted, the report includes usage for all the services. The service names are available through the Catalog API: https://cloud.google.com/billing/v1/how-tos/catalog-api .
subaccounts[]
string
Optional. A set of subaccounts of the form billingAccounts/{account_id} , specifying that usage from only this set of subaccounts should be included in the budget. If a subaccount is set to the name of the parent account, usage from the parent account is included. If the field is omitted, the report includes usage from the parent account and all subaccounts, if they exist.
labels
map (key: string, value: array ( ListValue format))
Optional. A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget. If omitted, the report includes all labeled and unlabeled usage.
An object containing a single "key": value pair. Example: { "name":
"wrench" } .
Currently, multiple entries or multiple values per entry are not allowed.
Union field usage_period . Multiple options to choose the budget's time period, specifying that only usage that occurs during this time period should be included in the budget. If not set, the usage_period defaults to CalendarPeriod.MONTH. usage_period can be only one of the following:
calendarPeriod
enum ( CalendarPeriod )
Optional. Specifies to track usage for recurring calendar period. For example, assume that CalendarPeriod.QUARTER is set. The budget tracks usage from April 1 to June 30, when the current calendar month is April, May, June. After that, it tracks usage from July 1 to September 30 when the current calendar month is July, August, September, so on.
customPeriod
object ( CustomPeriod )
Optional. Specifies to track usage from any start date (required) to any end date (optional). This time period is static, it does not recur.
CreditTypesTreatment
Specifies how credits are applied when determining the spend for threshold calculations. Budgets track the total cost minus any applicable selected credits. See the documentation for a list of credit types .
Enums
CREDIT_TYPES_TREATMENT_UNSPECIFIED
INCLUDE_ALL_CREDITS
All types of credit are subtracted from the gross cost to determine the spend for threshold calculations.
EXCLUDE_ALL_CREDITS
All types of credit are added to the net cost to determine the spend for threshold calculations.
INCLUDE_SPECIFIED_CREDITS
Credit types specified in the creditTypes field are subtracted from the gross cost to determine the spend for threshold calculations.
CalendarPeriod
A CalendarPeriod represents the abstract concept of a time period that has a canonical start. Grammatically, "the start of the current CalendarPeriod ". All calendar times begin at 12 AM US and Canadian Pacific Time (UTC-8).
Enums
CALENDAR_PERIOD_UNSPECIFIED
Calendar period is unset. This is the default if the budget is for a custom time period (CustomPeriod).
MONTH
A month. Month starts on the first day of each month, such as January 1, February 1, March 1, and so on.
QUARTER
A quarter. Quarters start on dates January 1, April 1, July 1, and October 1 of each year.
YEAR
A year. Year starts on January 1.
CustomPeriod
All date times begin at 12 AM US and Canadian Pacific Time (UTC-8).
JSON representation
{
"startDate" : {
object ( Date )
} ,
"endDate" : {
object ( Date )
}
}
Fields
startDate
object ( Date )
Required. The start date must be after January 1, 2017.
endDate
object ( Date )
Optional. The end date of the time period. Budgets with elapsed end date won't be processed. If unset, specifies to track all usage incurred since the startDate.
BudgetAmount
The budgeted amount for each usage period.
JSON representation
{
// Union field budget_amount can be only one of the following:
"specifiedAmount" : {
object ( Money )
} ,
"lastPeriodAmount" : {
object ( LastPeriodAmount )
}
// End of list of possible types for union field budget_amount .
}
Fields
Union field budget_amount . Specification for what amount to use as the budget. budget_amount can be only one of the following:
specifiedAmount
object ( Money )
A specified amount to use as the budget. currencyCode is optional. If specified when creating a budget, it must match the currency of the billing account. If specified when updating a budget, it must match the currencyCode of the existing budget. The currencyCode is provided on output.
lastPeriodAmount
object ( LastPeriodAmount )
Use the last period's actual spend as the budget for the present period. LastPeriodAmount can only be set when the budget's time period is a Filter.calendar_period . It cannot be set in combination with Filter.custom_period .
LastPeriodAmount
This type has no fields.
Describes a budget amount targeted to the last Filter.calendar_period spend. At this time, the amount is automatically 100% of the last calendar period's spend; that is, there are no other options yet. LastPeriodAmount cannot be set for a budget configured with a Filter.custom_period .
ThresholdRule
ThresholdRule contains the definition of a threshold. Threshold rules define the triggering events used to generate a budget notification email. When a threshold is crossed (spend exceeds the specified percentages of the budget), budget alert emails are sent to the email recipients you specify in the NotificationsRule .
Threshold rules also affect the fields included in the JSON data object sent to a Pub/Sub topic.
Threshold rules are required if using email notifications.
Threshold rules are optional if only setting a pubsubTopic NotificationsRule , unless you want your JSON data object to include data about the thresholds you set.
For more information, see set budget threshold rules and actions .
JSON representation
{
"thresholdPercent" : number ,
"spendBasis" : enum ( Basis )
}
Fields
thresholdPercent
number
Required. Send an alert when this threshold is exceeded. This is a 1.0-based percentage, so 0.5 = 50%. Validation: non-negative number.
spendBasis
enum ( Basis )
Optional. The type of basis used to determine if spend has passed the threshold. Behavior defaults to CURRENT_SPEND if not set.
Basis
The type of basis used to determine if spend has passed the threshold.
Enums
BASIS_UNSPECIFIED
Unspecified threshold basis.
CURRENT_SPEND
Use current spend as the basis for comparison against the threshold.
FORECASTED_SPEND
Use forecasted spend for the period as the basis for comparison against the threshold. FORECASTED_SPEND can only be set when the budget's time period is a Filter.calendar_period . It cannot be set in combination with Filter.custom_period .
NotificationsRule
NotificationsRule defines notifications that are sent based on budget spend and thresholds.
JSON representation
{
"pubsubTopic" : string ,
"schemaVersion" : string ,
"monitoringNotificationChannels" : [
string
] ,
"disableDefaultIamRecipients" : boolean ,
"enableProjectLevelRecipients" : boolean
}
Fields
pubsubTopic
string
Optional. The name of the Pub/Sub topic where budget-related messages are published, in the form projects/{projectId}/topics/{topic_id} . Updates are sent to the topic at regular intervals; the timing of the updates is not dependent on the threshold rules you've set.
Note that if you want your Pub/Sub JSON object to contain data for alertThresholdExceeded , you need at least one alert threshold rule . When you set threshold rules, you must also enable at least one of the email notification options, either using the default IAM recipients or Cloud Monitoring email notification channels.
To use Pub/Sub topics with budgets, you must do the following:
Create the Pub/Sub topic before connecting it to your budget. For guidance, see Manage programmatic budget alert notifications .
Grant the API caller the pubsub.topics.setIamPolicy permission on the Pub/Sub topic. If not set, the API call fails with PERMISSION_DENIED. For additional details on Pub/Sub roles and permissions, see Permissions required for this task .
schemaVersion
string
Optional. Required when NotificationsRule.pubsub_topic is set. The schema version of the notification sent to NotificationsRule.pubsub_topic . Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format .
monitoringNotificationChannels[]
string
Optional. Email targets to send notifications to when a threshold is exceeded. This is in addition to the DefaultIamRecipients who receive alert emails based on their billing account IAM role. The value is the full REST resource name of a Cloud Monitoring email notification channel with the form projects/{projectId}/notificationChannels/{channel_id} . A maximum of 5 email notifications are allowed.
To customize budget alert email recipients with monitoring notification channels, you must create the monitoring notification channels before you link them to a budget . For guidance on setting up notification channels to use with budgets, see Customize budget alert email recipients .
For Cloud Billing budget alerts, you must use email notification channels . The other types of notification channels are not supported, such as Slack, SMS, or PagerDuty. If you want to send budget notifications to Slack , use a pubsubTopic and configure programmatic notifications .
disableDefaultIamRecipients
boolean
Optional. When set to true, disables default notifications sent when a threshold is exceeded. Default notifications are sent to those with Billing Account Administrator and Billing Account User IAM roles for the target account.
enableProjectLevelRecipients
boolean
Optional. When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project. This field will be ignored if the budget has multiple or no project configured.
Currently, project level recipients are the users with Owner role on a cloud project.
OwnershipScope
The ownership scope of the budget. The ownership scope and users' IAM permissions determine who has full access to the budget's data.
Enums
OWNERSHIP_SCOPE_UNSPECIFIED
Unspecified ownership scope, same as ALL_USERS.
ALL_USERS
Both billing account-level users and project-level users have full access to the budget, if the users have the required IAM permissions.
BILLING_ACCOUNT
Only billing account-level users have full access to the budget. Project-level users have read-only access, even if they have the required IAM permissions.
Methods
create
Creates a new budget.
delete
Deletes a budget.
get
Returns a budget.
list
Returns a list of budgets for a billing account.
patch
Updates a budget and returns the updated budget.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-10 UTC."],[],[]]
