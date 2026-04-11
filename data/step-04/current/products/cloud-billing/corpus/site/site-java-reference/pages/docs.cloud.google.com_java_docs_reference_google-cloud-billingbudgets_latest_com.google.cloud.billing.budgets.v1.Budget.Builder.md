---
title: "Class Budget.Builder (2.88.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.Budget.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.Budget.Builder
  title: "Class Budget.Builder (2.88.0) \_|\_ Java client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class Budget.Builder (2.88.0)
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
public static final class Budget . Builder extends GeneratedMessage . Builder<Budget . Builder > implements BudgetOrBuilder
A budget is a plan that describes what you expect to spend on Cloud
projects, plus the rules to execute as spend is tracked against that plan,
(for example, send an alert when 90% of the target spend is met).
The budget time period is configurable, with options such as month (default),
quarter, year, or custom time period.
Protobuf type google.cloud.billing.budgets.v1.Budget
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
Budget.Builder
Implements
BudgetOrBuilder
Inherited Members
AbstractMessage.Builder.findInitializationErrors()
AbstractMessage.Builder.getInitializationErrorString()
AbstractMessage.Builder.internalMergeFrom(AbstractMessageLite)
AbstractMessage.Builder.mergeFrom(byte[])
AbstractMessage.Builder.mergeFrom(byte[],ExtensionRegistryLite)
AbstractMessage.Builder.mergeFrom(byte[],int,int)
AbstractMessage.Builder.mergeFrom(byte[],int,int,ExtensionRegistryLite)
AbstractMessage.Builder.mergeFrom(ByteString)
AbstractMessage.Builder.mergeFrom(ByteString,ExtensionRegistryLite)
AbstractMessage.Builder.mergeFrom(CodedInputStream)
AbstractMessage.Builder.mergeFrom(CodedInputStream,ExtensionRegistryLite)
AbstractMessage.Builder.mergeFrom(Message)
AbstractMessage.Builder.mergeFrom(InputStream)
AbstractMessage.Builder.mergeFrom(InputStream,ExtensionRegistryLite)
AbstractMessage.Builder.newUninitializedMessageException(Message)
AbstractMessage.Builder.toString()
AbstractMessageLite.Builder.<T>addAll(Iterable<T>,Collection<? super T>)
AbstractMessageLite.Builder.<T>addAll(Iterable<T>,List<? super T>)
AbstractMessageLite.Builder.internalMergeFrom(MessageType)
AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream)
AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream,ExtensionRegistryLite)
AbstractMessageLite.Builder.mergeFrom(MessageLite)
AbstractMessageLite.Builder.newUninitializedMessageException(MessageLite)
GeneratedMessage.Builder.addRepeatedField(Descriptors.FieldDescriptor,Object)
GeneratedMessage.Builder.clear()
GeneratedMessage.Builder.clearField(Descriptors.FieldDescriptor)
GeneratedMessage.Builder.clearOneof(Descriptors.OneofDescriptor)
GeneratedMessage.Builder.clone()
GeneratedMessage.Builder.getAllFields()
GeneratedMessage.Builder.getDescriptorForType()
GeneratedMessage.Builder.getField(Descriptors.FieldDescriptor)
GeneratedMessage.Builder.getFieldBuilder(Descriptors.FieldDescriptor)
GeneratedMessage.Builder.getOneofFieldDescriptor(Descriptors.OneofDescriptor)
GeneratedMessage.Builder.getParentForChildren()
GeneratedMessage.Builder.getRepeatedField(Descriptors.FieldDescriptor,int)
GeneratedMessage.Builder.getRepeatedFieldBuilder(Descriptors.FieldDescriptor,int)
GeneratedMessage.Builder.getRepeatedFieldCount(Descriptors.FieldDescriptor)
com.google.protobuf.GeneratedMessage.Builder.getUnknownFieldSetBuilder()
GeneratedMessage.Builder.getUnknownFields()
GeneratedMessage.Builder.hasField(Descriptors.FieldDescriptor)
GeneratedMessage.Builder.hasOneof(Descriptors.OneofDescriptor)
GeneratedMessage.Builder.internalGetFieldAccessorTable()
GeneratedMessage.Builder.internalGetMapField(int)
com.google.protobuf.GeneratedMessage.Builder.internalGetMapFieldReflection(int)
GeneratedMessage.Builder.internalGetMutableMapField(int)
com.google.protobuf.GeneratedMessage.Builder.internalGetMutableMapFieldReflection(int)
GeneratedMessage.Builder.isClean()
GeneratedMessage.Builder.isInitialized()
GeneratedMessage.Builder.markClean()
GeneratedMessage.Builder.mergeUnknownFields(UnknownFieldSet)
com.google.protobuf.GeneratedMessage.Builder.mergeUnknownLengthDelimitedField(int,com.google.protobuf.ByteString)
com.google.protobuf.GeneratedMessage.Builder.mergeUnknownVarintField(int,int)
GeneratedMessage.Builder.newBuilderForField(Descriptors.FieldDescriptor)
GeneratedMessage.Builder.onBuilt()
GeneratedMessage.Builder.onChanged()
com.google.protobuf.GeneratedMessage.Builder.parseUnknownField(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite,int)
GeneratedMessage.Builder.setField(Descriptors.FieldDescriptor,Object)
GeneratedMessage.Builder.setRepeatedField(Descriptors.FieldDescriptor,int,Object)
com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldSetBuilder(com.google.protobuf.UnknownFieldSet.Builder)
GeneratedMessage.Builder.setUnknownFields(UnknownFieldSet)
com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldsProto3(com.google.protobuf.UnknownFieldSet)
Object.equals(Object)
Object.finalize()
Object.getClass()
Object.hashCode()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Static Methods
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
Methods
addAllThresholdRules(Iterable<? extends ThresholdRule> values)
public Budget . Builder addAllThresholdRules ( Iterable < ? extends ThresholdRule > values )
Optional. Rules that trigger alerts (notifications of thresholds
being crossed) when spend exceeds the specified percentages of the budget.
Optional for pubsubTopic notifications.
Required if using email notifications.
repeated .google.cloud.billing.budgets.v1.ThresholdRule threshold_rules = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
values
Iterable < ? extends com.google.cloud.billing.budgets.v1.ThresholdRule >
Returns
Type
Description
Budget.Builder
addThresholdRules(ThresholdRule value)
public Budget . Builder addThresholdRules ( ThresholdRule value )
Optional. Rules that trigger alerts (notifications of thresholds
being crossed) when spend exceeds the specified percentages of the budget.
Optional for pubsubTopic notifications.
Required if using email notifications.
repeated .google.cloud.billing.budgets.v1.ThresholdRule threshold_rules = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ThresholdRule
Returns
Type
Description
Budget.Builder
addThresholdRules(ThresholdRule.Builder builderForValue)
public Budget . Builder addThresholdRules ( ThresholdRule . Builder builderForValue )
Optional. Rules that trigger alerts (notifications of thresholds
being crossed) when spend exceeds the specified percentages of the budget.
Optional for pubsubTopic notifications.
Required if using email notifications.
repeated .google.cloud.billing.budgets.v1.ThresholdRule threshold_rules = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
builderForValue
ThresholdRule.Builder
Returns
Type
Description
Budget.Builder
addThresholdRules(int index, ThresholdRule value)
public Budget . Builder addThresholdRules ( int index , ThresholdRule value )
Optional. Rules that trigger alerts (notifications of thresholds
being crossed) when spend exceeds the specified percentages of the budget.
Optional for pubsubTopic notifications.
Required if using email notifications.
repeated .google.cloud.billing.budgets.v1.ThresholdRule threshold_rules = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int
value
ThresholdRule
Returns
Type
Description
Budget.Builder
addThresholdRules(int index, ThresholdRule.Builder builderForValue)
public Budget . Builder addThresholdRules ( int index , ThresholdRule . Builder builderForValue )
Optional. Rules that trigger alerts (notifications of thresholds
being crossed) when spend exceeds the specified percentages of the budget.
Optional for pubsubTopic notifications.
Required if using email notifications.
repeated .google.cloud.billing.budgets.v1.ThresholdRule threshold_rules = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int
builderForValue
ThresholdRule.Builder
Returns
Type
Description
Budget.Builder
addThresholdRulesBuilder()
public ThresholdRule . Builder addThresholdRulesBuilder ()
Optional. Rules that trigger alerts (notifications of thresholds
being crossed) when spend exceeds the specified percentages of the budget.
Optional for pubsubTopic notifications.
Required if using email notifications.
repeated .google.cloud.billing.budgets.v1.ThresholdRule threshold_rules = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ThresholdRule.Builder
addThresholdRulesBuilder(int index)
public ThresholdRule . Builder addThresholdRulesBuilder ( int index )
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
ThresholdRule.Builder
build()
public Budget build ()
Returns
Type
Description
Budget
buildPartial()
public Budget buildPartial ()
Returns
Type
Description
Budget
clear()
public Budget . Builder clear ()
Returns
Type
Description
Budget.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearAmount()
public Budget . Builder clearAmount ()
Required. Budgeted amount.
.google.cloud.billing.budgets.v1.BudgetAmount amount = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
Budget.Builder
clearBudgetFilter()
public Budget . Builder clearBudgetFilter ()
Optional. Filters that define which resources are used to compute the
actual spend against the budget amount, such as projects, services, and the
budget's time period, as well as other filters.
.google.cloud.billing.budgets.v1.Filter budget_filter = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Budget.Builder
clearDisplayName()
public Budget . Builder clearDisplayName ()
User data for display name in UI. The name must be less than or equal to 60
characters.
string display_name = 2;
Returns
Type
Description
Budget.Builder
This builder for chaining.
clearEtag()
public Budget . Builder clearEtag ()
Optional. Etag to validate that the object is unchanged for a
read-modify-write operation.
An empty etag causes an update to overwrite other changes.
string etag = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Budget.Builder
This builder for chaining.
clearName()
public Budget . Builder clearName ()
Output only. Resource name of the budget.
The resource name implies the scope of a budget. Values are of the form
billingAccounts/{billingAccountId}/budgets/{budgetId} .
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Budget.Builder
This builder for chaining.
clearNotificationsRule()
public Budget . Builder clearNotificationsRule ()
Optional. Rules to apply to notifications sent based on budget spend and
thresholds.
.google.cloud.billing.budgets.v1.NotificationsRule notifications_rule = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Budget.Builder
clearThresholdRules()
public Budget . Builder clearThresholdRules ()
Optional. Rules that trigger alerts (notifications of thresholds
being crossed) when spend exceeds the specified percentages of the budget.
Optional for pubsubTopic notifications.
Required if using email notifications.
repeated .google.cloud.billing.budgets.v1.ThresholdRule threshold_rules = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Budget.Builder
getAmount()
public BudgetAmount getAmount ()
Required. Budgeted amount.
.google.cloud.billing.budgets.v1.BudgetAmount amount = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
BudgetAmount
The amount.
getAmountBuilder()
public BudgetAmount . Builder getAmountBuilder ()
Required. Budgeted amount.
.google.cloud.billing.budgets.v1.BudgetAmount amount = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
BudgetAmount.Builder
getAmountOrBuilder()
public BudgetAmountOrBuilder getAmountOrBuilder ()
Required. Budgeted amount.
.google.cloud.billing.budgets.v1.BudgetAmount amount = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
BudgetAmountOrBuilder
getBudgetFilter()
public Filter getBudgetFilter ()
Optional. Filters that define which resources are used to compute the
actual spend against the budget amount, such as projects, services, and the
budget's time period, as well as other filters.
.google.cloud.billing.budgets.v1.Filter budget_filter = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Filter
The budgetFilter.
getBudgetFilterBuilder()
public Filter . Builder getBudgetFilterBuilder ()
Optional. Filters that define which resources are used to compute the
actual spend against the budget amount, such as projects, services, and the
budget's time period, as well as other filters.
.google.cloud.billing.budgets.v1.Filter budget_filter = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Filter.Builder
getBudgetFilterOrBuilder()
public FilterOrBuilder getBudgetFilterOrBuilder ()
Optional. Filters that define which resources are used to compute the
actual spend against the budget amount, such as projects, services, and the
budget's time period, as well as other filters.
.google.cloud.billing.budgets.v1.Filter budget_filter = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
FilterOrBuilder
getDefaultInstanceForType()
public Budget getDefaultInstanceForType ()
Returns
Type
Description
Budget
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getDisplayName()
public String getDisplayName ()
User data for display name in UI. The name must be less than or equal to 60
characters.
string display_name = 2;
Returns
Type
Description
String
The displayName.
getDisplayNameBytes()
public ByteString getDisplayNameBytes ()
User data for display name in UI. The name must be less than or equal to 60
characters.
string display_name = 2;
Returns
Type
Description
ByteString
The bytes for displayName.
getEtag()
public String getEtag ()
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
public ByteString getEtagBytes ()
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
public String getName ()
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
public ByteString getNameBytes ()
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
public NotificationsRule getNotificationsRule ()
Optional. Rules to apply to notifications sent based on budget spend and
thresholds.
.google.cloud.billing.budgets.v1.NotificationsRule notifications_rule = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
NotificationsRule
The notificationsRule.
getNotificationsRuleBuilder()
public NotificationsRule . Builder getNotificationsRuleBuilder ()
Optional. Rules to apply to notifications sent based on budget spend and
thresholds.
.google.cloud.billing.budgets.v1.NotificationsRule notifications_rule = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
NotificationsRule.Builder
getNotificationsRuleOrBuilder()
public NotificationsRuleOrBuilder getNotificationsRuleOrBuilder ()
Optional. Rules to apply to notifications sent based on budget spend and
thresholds.
.google.cloud.billing.budgets.v1.NotificationsRule notifications_rule = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
NotificationsRuleOrBuilder
getThresholdRules(int index)
public ThresholdRule getThresholdRules ( int index )
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
getThresholdRulesBuilder(int index)
public ThresholdRule . Builder getThresholdRulesBuilder ( int index )
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
ThresholdRule.Builder
getThresholdRulesBuilderList()
public List<ThresholdRule . Builder > getThresholdRulesBuilderList ()
Optional. Rules that trigger alerts (notifications of thresholds
being crossed) when spend exceeds the specified percentages of the budget.
Optional for pubsubTopic notifications.
Required if using email notifications.
repeated .google.cloud.billing.budgets.v1.ThresholdRule threshold_rules = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
List < Builder >
getThresholdRulesCount()
public int getThresholdRulesCount ()
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
public List<ThresholdRule> getThresholdRulesList ()
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
public ThresholdRuleOrBuilder getThresholdRulesOrBuilder ( int index )
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
public List < ? extends ThresholdRuleOrBuilder > getThresholdRulesOrBuilderList ()
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
public boolean hasAmount ()
Required. Budgeted amount.
.google.cloud.billing.budgets.v1.BudgetAmount amount = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
boolean
Whether the amount field is set.
hasBudgetFilter()
public boolean hasBudgetFilter ()
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
public boolean hasNotificationsRule ()
Optional. Rules to apply to notifications sent based on budget spend and
thresholds.
.google.cloud.billing.budgets.v1.NotificationsRule notifications_rule = 6 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
Whether the notificationsRule field is set.
internalGetFieldAccessorTable()
protected GeneratedMessage . FieldAccessorTable internalGetFieldAccessorTable ()
Returns
Type
Description
FieldAccessorTable
Overrides
GeneratedMessage.Builder<BuilderType>.internalGetFieldAccessorTable()
isInitialized()
public final boolean isInitialized ()
Returns
Type
Description
boolean
Overrides
GeneratedMessage.Builder<BuilderType>.isInitialized()
mergeAmount(BudgetAmount value)
public Budget . Builder mergeAmount ( BudgetAmount value )
Required. Budgeted amount.
.google.cloud.billing.budgets.v1.BudgetAmount amount = 4 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
BudgetAmount
Returns
Type
Description
Budget.Builder
mergeBudgetFilter(Filter value)
public Budget . Builder mergeBudgetFilter ( Filter value )
Optional. Filters that define which resources are used to compute the
actual spend against the budget amount, such as projects, services, and the
budget's time period, as well as other filters.
.google.cloud.billing.budgets.v1.Filter budget_filter = 3 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
Filter
Returns
Type
Description
Budget.Builder
mergeFrom(Budget other)
public Budget . Builder mergeFrom ( Budget other )
Parameter
Name
Description
other
Budget
Returns
Type
Description
Budget.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public Budget . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
input
CodedInputStream
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
Budget.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public Budget . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
Budget.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
mergeNotificationsRule(NotificationsRule value)
public Budget . Builder mergeNotificationsRule ( NotificationsRule value )
Optional. Rules to apply to notifications sent based on budget spend and
thresholds.
.google.cloud.billing.budgets.v1.NotificationsRule notifications_rule = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
NotificationsRule
Returns
Type
Description
Budget.Builder
removeThresholdRules(int index)
public Budget . Builder removeThresholdRules ( int index )
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
Budget.Builder
setAmount(BudgetAmount value)
public Budget . Builder setAmount ( BudgetAmount value )
Required. Budgeted amount.
.google.cloud.billing.budgets.v1.BudgetAmount amount = 4 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
BudgetAmount
Returns
Type
Description
Budget.Builder
setAmount(BudgetAmount.Builder builderForValue)
public Budget . Builder setAmount ( BudgetAmount . Builder builderForValue )
Required. Budgeted amount.
.google.cloud.billing.budgets.v1.BudgetAmount amount = 4 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
builderForValue
BudgetAmount.Builder
Returns
Type
Description
Budget.Builder
setBudgetFilter(Filter value)
public Budget . Builder setBudgetFilter ( Filter value )
Optional. Filters that define which resources are used to compute the
actual spend against the budget amount, such as projects, services, and the
budget's time period, as well as other filters.
.google.cloud.billing.budgets.v1.Filter budget_filter = 3 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
Filter
Returns
Type
Description
Budget.Builder
setBudgetFilter(Filter.Builder builderForValue)
public Budget . Builder setBudgetFilter ( Filter . Builder builderForValue )
Optional. Filters that define which resources are used to compute the
actual spend against the budget amount, such as projects, services, and the
budget's time period, as well as other filters.
.google.cloud.billing.budgets.v1.Filter budget_filter = 3 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
builderForValue
Filter.Builder
Returns
Type
Description
Budget.Builder
setDisplayName(String value)
public Budget . Builder setDisplayName ( String value )
User data for display name in UI. The name must be less than or equal to 60
characters.
string display_name = 2;
Parameter
Name
Description
value
String The displayName to set.
Returns
Type
Description
Budget.Builder
This builder for chaining.
setDisplayNameBytes(ByteString value)
public Budget . Builder setDisplayNameBytes ( ByteString value )
User data for display name in UI. The name must be less than or equal to 60
characters.
string display_name = 2;
Parameter
Name
Description
value
ByteString The bytes for displayName to set.
Returns
Type
Description
Budget.Builder
This builder for chaining.
setEtag(String value)
public Budget . Builder setEtag ( String value )
Optional. Etag to validate that the object is unchanged for a
read-modify-write operation.
An empty etag causes an update to overwrite other changes.
string etag = 7 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
String The etag to set.
Returns
Type
Description
Budget.Builder
This builder for chaining.
setEtagBytes(ByteString value)
public Budget . Builder setEtagBytes ( ByteString value )
Optional. Etag to validate that the object is unchanged for a
read-modify-write operation.
An empty etag causes an update to overwrite other changes.
string etag = 7 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ByteString The bytes for etag to set.
Returns
Type
Description
Budget.Builder
This builder for chaining.
setName(String value)
public Budget . Builder setName ( String value )
Output only. Resource name of the budget.
The resource name implies the scope of a budget. Values are of the form
billingAccounts/{billingAccountId}/budgets/{budgetId} .
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
String The name to set.
Returns
Type
Description
Budget.Builder
This builder for chaining.
setNameBytes(ByteString value)
public Budget . Builder setNameBytes ( ByteString value )
Output only. Resource name of the budget.
The resource name implies the scope of a budget. Values are of the form
billingAccounts/{billingAccountId}/budgets/{budgetId} .
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
ByteString The bytes for name to set.
Returns
Type
Description
Budget.Builder
This builder for chaining.
setNotificationsRule(NotificationsRule value)
public Budget . Builder setNotificationsRule ( NotificationsRule value )
Optional. Rules to apply to notifications sent based on budget spend and
thresholds.
.google.cloud.billing.budgets.v1.NotificationsRule notifications_rule = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
NotificationsRule
Returns
Type
Description
Budget.Builder
setNotificationsRule(NotificationsRule.Builder builderForValue)
public Budget . Builder setNotificationsRule ( NotificationsRule . Builder builderForValue )
Optional. Rules to apply to notifications sent based on budget spend and
thresholds.
.google.cloud.billing.budgets.v1.NotificationsRule notifications_rule = 6 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
builderForValue
NotificationsRule.Builder
Returns
Type
Description
Budget.Builder
setThresholdRules(int index, ThresholdRule value)
public Budget . Builder setThresholdRules ( int index , ThresholdRule value )
Optional. Rules that trigger alerts (notifications of thresholds
being crossed) when spend exceeds the specified percentages of the budget.
Optional for pubsubTopic notifications.
Required if using email notifications.
repeated .google.cloud.billing.budgets.v1.ThresholdRule threshold_rules = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int
value
ThresholdRule
Returns
Type
Description
Budget.Builder
setThresholdRules(int index, ThresholdRule.Builder builderForValue)
public Budget . Builder setThresholdRules ( int index , ThresholdRule . Builder builderForValue )
Optional. Rules that trigger alerts (notifications of thresholds
being crossed) when spend exceeds the specified percentages of the budget.
Optional for pubsubTopic notifications.
Required if using email notifications.
repeated .google.cloud.billing.budgets.v1.ThresholdRule threshold_rules = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int
builderForValue
ThresholdRule.Builder
Returns
Type
Description
Budget.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
