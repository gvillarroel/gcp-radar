---
title: "BillingBudgetsBudget \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/billingbudgets/billingbudgetsbudget
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/billingbudgets/billingbudgetsbudget
  title: "BillingBudgetsBudget \_|\_ Config Connector \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
API and reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
BillingBudgetsBudget
Property
Value
Google Cloud Service Name
Billing Budgets
Google Cloud Service Documentation
/billing/docs/
Google Cloud REST Resource Name
billingAccounts.budgets
Google Cloud REST Resource Documentation
/billing/docs/reference/budget/rest/v1beta1/billingAccounts.budgets
Config Connector Resource Short Names
gcpbillingbudgetsbudget gcpbillingbudgetsbudgets billingbudgetsbudget
Config Connector Service Name
billingbudgets.googleapis.com
Config Connector Resource Fully Qualified Name
billingbudgetsbudgets.billingbudgets.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
allUpdatesRule :
disableDefaultIamRecipients : boolean
monitoringNotificationChannels :
- external : string
name : string
namespace : string
pubsubTopicRef :
external : string
name : string
namespace : string
schemaVersion : string
amount :
lastPeriodAmount : {}
specifiedAmount :
currencyCode : string
nanos : integer
units : integer
billingAccountRef :
external : string
name : string
namespace : string
budgetFilter :
calendarPeriod : string
creditTypes :
- string
creditTypesTreatment : string
customPeriod :
endDate :
day : integer
month : integer
year : integer
startDate :
day : integer
month : integer
year : integer
labels :
string : object
projects :
- external : string
name : string
namespace : string
services :
- string
subaccounts :
- external : string
name : string
namespace : string
displayName : string
resourceID : string
thresholdRules :
- spendBasis : string
thresholdPercent : float
Fields
allUpdatesRule
Optional
object
Optional. Rules to apply to notifications sent based on budget spend and thresholds.
allUpdatesRule.disableDefaultIamRecipients
Optional
boolean
Optional. When set to true, disables default notifications sent when a threshold is exceeded. Default notifications are sent to those with Billing Account Administrator and Billing Account User IAM roles for the target account.
allUpdatesRule.monitoringNotificationChannels
Optional
list (object)
allUpdatesRule.monitoringNotificationChannels[]
Optional
object
allUpdatesRule.monitoringNotificationChannels[].external
Optional
string
Allowed value: The Google Cloud resource name of a `MonitoringNotificationChannel` resource (format: `projects/{{project}}/notificationChannels/{{name}}`).
allUpdatesRule.monitoringNotificationChannels[].name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
allUpdatesRule.monitoringNotificationChannels[].namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
allUpdatesRule.pubsubTopicRef
Optional
object
allUpdatesRule.pubsubTopicRef.external
Optional
string
Optional. The name of the Pub/Sub topic where budget related messages will be published, in the form `projects/{project_id}/topics/{topic_id}`. Updates are sent at regular intervals to the topic. The topic needs to be created before the budget is created; see https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications for more details. Caller is expected to have `pubsub.topics.setIamPolicy` permission on the topic when it's set for a budget, otherwise, the API call will fail with PERMISSION_DENIED. See https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#permissions_required_for_this_task for more details on Pub/Sub roles and permissions.
Allowed value: The Google Cloud resource name of a `PubSubTopic` resource (format: `projects/{{project}}/topics/{{name}}`).
allUpdatesRule.pubsubTopicRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
allUpdatesRule.pubsubTopicRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
allUpdatesRule.schemaVersion
Optional
string
Optional. Required when NotificationsRule.pubsub_topic is set. The schema version of the notification sent to NotificationsRule.pubsub_topic. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format.
amount
Required
object
Required. Budgeted amount.
amount.lastPeriodAmount
Optional
object
Use the last period's actual spend as the budget for the present period. LastPeriodAmount can only be set when the budget's time period is a .
amount.specifiedAmount
Optional
object
A specified amount to use as the budget. `currency_code` is optional. If specified when creating a budget, it must match the currency of the billing account. If specified when updating a budget, it must match the currency_code of the existing budget. The `currency_code` is provided on output.
amount.specifiedAmount.currencyCode
Optional
string
Immutable. The three-letter currency code defined in ISO 4217.
amount.specifiedAmount.nanos
Optional
integer
Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
amount.specifiedAmount.units
Optional
integer
The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
billingAccountRef
Required
object
Immutable.
billingAccountRef.external
Optional
string
The billing account of the resource
Allowed value: The Google Cloud resource name of a Google Cloud Billing Account (format: `billingAccounts/{{name}}`).
billingAccountRef.name
Optional
string
[WARNING] BillingAccount not yet supported in Config Connector, use 'external' field to reference existing resources.
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
billingAccountRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
budgetFilter
Optional
object
Optional. Filters that define which resources are used to compute the actual spend against the budget amount, such as projects, services, and the budget's time period, as well as other filters.
budgetFilter.calendarPeriod
Optional
string
Optional. Specifies to track usage for recurring calendar period. For example, assume that CalendarPeriod.QUARTER is set. The budget will track usage from April 1 to June 30, when the current calendar month is April, May, June. After that, it will track usage from July 1 to September 30 when the current calendar month is July, August, September, so on. Possible values: CALENDAR_PERIOD_UNSPECIFIED, MONTH, QUARTER, YEAR
budgetFilter.creditTypes
Optional
list (string)
Optional. If Filter.credit_types_treatment is INCLUDE_SPECIFIED_CREDITS, this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See a list of acceptable credit type values. If Filter.credit_types_treatment is not INCLUDE_SPECIFIED_CREDITS, this field must be empty.
budgetFilter.creditTypes[]
Optional
string
budgetFilter.creditTypesTreatment
Optional
string
Optional. If not set, default behavior is `INCLUDE_ALL_CREDITS`.
budgetFilter.customPeriod
Optional
object
Optional. Specifies to track usage from any start date (required) to any end date (optional). This time period is static, it does not recur.
budgetFilter.customPeriod.endDate
Optional
object
Immutable. Optional. The end date of the time period. Budgets with elapsed end date won't be processed. If unset, specifies to track all usage incurred since the start_date.
budgetFilter.customPeriod.endDate.day
Optional
integer
Immutable. Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
budgetFilter.customPeriod.endDate.month
Optional
integer
Immutable. Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
budgetFilter.customPeriod.endDate.year
Optional
integer
Immutable. Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
budgetFilter.customPeriod.startDate
Required*
object
Immutable. Required. The start date must be after January 1, 2017.
budgetFilter.customPeriod.startDate.day
Optional
integer
Immutable. Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
budgetFilter.customPeriod.startDate.month
Optional
integer
Immutable. Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
budgetFilter.customPeriod.startDate.year
Optional
integer
Immutable. Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
budgetFilter.labels
Optional
map (key: string, value: object)
Optional. A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget. Currently, multiple entries or multiple values per entry are not allowed. If omitted, the report will include all labeled and unlabeled usage.
budgetFilter.projects
Optional
list (object)
budgetFilter.projects[]
Optional
object
budgetFilter.projects[].external
Optional
string
Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
budgetFilter.projects[].name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
budgetFilter.projects[].namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
budgetFilter.services
Optional
list (string)
Optional. A set of services of the form `services/{service_id}`, specifying that usage from only this set of services should be included in the budget. If omitted, the report will include usage for all the services. The service names are available through the Catalog API: https://cloud.google.com/billing/v1/how-tos/catalog-api.
budgetFilter.services[]
Optional
string
budgetFilter.subaccounts
Optional
list (object)
budgetFilter.subaccounts[]
Optional
object
budgetFilter.subaccounts[].external
Optional
string
budgetFilter.subaccounts[].name
Optional
string
[WARNING] CloudBillingBillingAccount not yet supported in Config Connector, use 'external' field to reference existing resources.
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
budgetFilter.subaccounts[].namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
displayName
Optional
string
User data for display name in UI. The name must be less than or equal to 60 characters.
resourceID
Optional
string
Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
thresholdRules
Optional
list (object)
Optional. Rules that trigger alerts (notifications of thresholds being crossed) when spend exceeds the specified percentages of the budget.
thresholdRules[]
Optional
object
thresholdRules[].spendBasis
Optional
string
Optional. The type of basis used to determine if spend has passed the threshold. Behavior defaults to CURRENT_SPEND if not set. Possible values: BASIS_UNSPECIFIED, CURRENT_SPEND, FORECASTED_SPEND
thresholdRules[].thresholdPercent
Required*
float
Required. Send an alert when this threshold is exceeded. This is a 1.0-based percentage, so 0.5 = 50%. Validation: non-negative number.
* Field is required when parent field is specified
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
etag : string
observedGeneration : integer
Fields
conditions
list (object)
Conditions represent the latest available observation of the resource's current state.
conditions[]
object
conditions[].lastTransitionTime
string
Last time the condition transitioned from one status to another.
conditions[].message
string
Human-readable message indicating details about last transition.
conditions[].reason
string
Unique, one-word, CamelCase reason for the condition's last transition.
conditions[].status
string
Status is the status of the condition. Can be True, False, Unknown.
conditions[].type
string
Type is the type of the condition.
etag
string
Optional. Etag to validate that the object is unchanged for a read-modify-write operation. An empty etag will cause an update to overwrite other changes.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
Sample YAML(s)
Calendar Budget
# Copyright 2021 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : billingbudgets.cnrm.cloud.google.com/v1beta1
kind : BillingBudgetsBudget
metadata :
name : billingbudgetsbudget-sample-calendarbudget
spec :
billingAccountRef :
# Replace "${BILLING_ACCOUNT_ID_FOR_BILLING_RESOURCES?}" with the numeric ID for your billing account
external : "${BILLING_ACCOUNT_ID_FOR_BILLING_RESOURCES?}"
displayName : "sample-budget"
budgetFilter :
projects :
- name : "billingbudgetsbudget-dep-calb"
creditTypes :
- "DISCOUNT"
creditTypesTreatment : "INCLUDE_SPECIFIED_CREDITS"
services :
# This is the service name for the Geolocation API.
- "services/0245-C3C9-3864"
labels :
label-one :
values :
- "value-one"
calendarPeriod : "MONTH"
amount :
specifiedAmount :
currencyCode : "USD"
units : 9000000
nanos : 0
thresholdRules :
- thresholdPercent : 0.5
spendBasis : "CURRENT_SPEND"
allUpdatesRule :
pubsubTopicRef :
name : "billingbudgetsbudget-dep-calendarbudget"
schemaVersion : "1.0"
monitoringNotificationChannels :
- name : "billingbudgetsbudget-dep-calendarbudget"
disableDefaultIamRecipients : false
---
apiVersion : monitoring.cnrm.cloud.google.com/v1beta1
kind : MonitoringNotificationChannel
metadata :
name : billingbudgetsbudget-dep-calendarbudget
spec :
labels :
email_address : test@example.com
type : "email"
---
apiVersion : pubsub.cnrm.cloud.google.com/v1beta1
kind : PubSubTopic
metadata :
name : billingbudgetsbudget-dep-calendarbudget
---
apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1
kind : Project
metadata :
name : billingbudgetsbudget-dep-calb
spec :
organizationRef :
# Replace "${ORG_ID?}" with the numeric ID for your organization
external : "${ORG_ID?}"
name : "billingbudgetsbudget-dep-calb"
billingAccountRef :
# Replace "${BILLING_ACCOUNT_ID_FOR_BILLING_RESOURCES?}" with the numeric ID for your billing account
external : "${BILLING_ACCOUNT_ID_FOR_BILLING_RESOURCES?}"
Custom Budget
# Copyright 2021 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : billingbudgets.cnrm.cloud.google.com/v1beta1
kind : BillingBudgetsBudget
metadata :
name : billingbudgetsbudget-sample-custombudget
spec :
billingAccountRef :
# Replace "${BILLING_ACCOUNT_ID_FOR_BILLING_RESOURCES?}" with the numeric ID for your billing account
external : "${BILLING_ACCOUNT_ID_FOR_BILLING_RESOURCES?}"
budgetFilter :
creditTypes :
- "DISCOUNT"
creditTypesTreatment : "INCLUDE_SPECIFIED_CREDITS"
customPeriod :
startDate :
year : 2140
month : 1
day : 1
endDate :
year : 2312
month : 3
day : 14
amount :
specifiedAmount :
currencyCode : "USD"
units : 9000000
nanos : 0
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
