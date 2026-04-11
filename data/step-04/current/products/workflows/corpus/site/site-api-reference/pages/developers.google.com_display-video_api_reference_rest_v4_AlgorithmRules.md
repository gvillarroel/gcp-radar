---
title: "AlgorithmRules \_|\_ DV360 API \_|\_ Google for Developers"
url: https://developers.google.com/display-video/api/reference/rest/v4/AlgorithmRules
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/display-video/api/reference/rest
source_metadata:
  url: https://developers.google.com/display-video/api/reference/rest/v4/AlgorithmRules
  title: "AlgorithmRules \_|\_ DV360 API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Display & Video 360 API and Structured Data Files Discord channel in the Google Advertising and Measurement Community server.
Home
Products
DV360 API
Display & Video 360 API
Reference
Send feedback
AlgorithmRules
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Algorithm Rules define a rule-based algorithm for scoring impressions and post-impression signals.
A Ruleset consists of a list of Rules and defines how their evaluated values are aggregated.
A Rule is a set of conditions (SignalComparisons) that determine a return value.
A RuleCondition is a set of SignalComparisons that are combined with AND logical operators to form an "if" statement.
A SignalComparison compares a specific Signal to a ComparisonValue using a ComparisonOperator.
JSON representation
Ruleset
JSON representation
Rule
JSON representation
RuleCondition
JSON representation
SignalComparison
JSON representation
Signal
JSON representation
ComparisonValue
JSON representation
DayAndTime
JSON representation
SignalValue
JSON representation
FloodlightActivityConversionSignal
JSON representation
Rule-based algorithm.
JSON representation
{
"impressionSignalRuleset" : {
object ( Ruleset )
} ,
"postImpressionSignalRuleset" : {
object ( Ruleset )
} ,
"attributionModelId" : string
}
Fields
impressionSignalRuleset
object ( Ruleset )
Rules for the impression signals.
postImpressionSignalRuleset
object ( Ruleset )
Rules for the post-impression signals.
This field is only supported for allowlisted partners.
attributionModelId
string ( int64 format)
Attribution model for the algorithm.
This field is only supported for allowlisted partners.
Ruleset
A ruleset consisting of a list of rules and how to aggregate the resulting values.
JSON representation
{
"rules" : [
{
object ( Rule )
}
] ,
"aggregationType" : enum ( RuleAggregationType ) ,
"maxValue" : number
}
Fields
rules[]
object ( Rule )
List of rules to generate the impression value.
aggregationType
enum ( RuleAggregationType )
How to aggregate values of evaluated rules.
maxValue
number
Maximum value the ruleset can evaluate to.
Rule
Set of conditions.
The return value of the rule is either:
The return value for single met condition or
The defined default return value if no conditions are met.
JSON representation
{
"conditions" : [
{
object ( RuleCondition )
}
] ,
"defaultReturnValue" : {
object ( SignalValue )
}
}
Fields
conditions[]
object ( RuleCondition )
List of conditions in this rule. The criteria among conditions should be mutually exclusive.
defaultReturnValue
object ( SignalValue )
The default return value applied when none of the conditions are met.
RuleCondition
Set of signal comparisons. Equivalent of an if statement.
JSON representation
{
"signalComparisons" : [
{
object ( SignalComparison )
}
] ,
"returnValue" : {
object ( SignalValue )
}
}
Fields
signalComparisons[]
object ( SignalComparison )
List of comparisons that build if statement condition. The comparisons are combined into a single condition with AND logical operators.
returnValue
object ( SignalValue )
The value returned if the signalComparisons condition evaluates to TRUE .
SignalComparison
A single comparison. The comparison compares the signal to the comparisonValue .
The comparison of siteId==123 is represented with the following field values:
signal has an impressionSignal of SITE_ID .
comparisonOperator is set to EQUAL .
comparisonValue is set to 123.
JSON representation
{
"signal" : {
object ( Signal )
} ,
"comparisonOperator" : enum ( ComparisonOperator ) ,
"comparisonValue" : {
object ( ComparisonValue )
}
}
Fields
signal
object ( Signal )
Signal to compare.
comparisonOperator
enum ( ComparisonOperator )
Operator used to compare the two values.
In the resulting experession, the signal will be the first value and the `comparisonValue will be the second.
comparisonValue
object ( ComparisonValue )
Value to compare signal to.
Signal
Signal used to evaluate rules.
JSON representation
{
// Union field signal can be only one of the following:
"impressionSignal" : enum ( ImpressionSignal ) ,
"clickSignal" : enum ( ClickSignal ) ,
"activeViewSignal" : enum ( ActiveViewSignal )
// End of list of possible types for union field signal .
}
Fields
Union field signal . The signal used to evaluate rules. signal can be only one of the following:
impressionSignal
enum ( ImpressionSignal )
Signal based on impressions.
clickSignal
enum ( ClickSignal )
Signal based on clicks.
This field is only supported for allowlisted partners.
activeViewSignal
enum ( ActiveViewSignal )
Signal based on active views.
This field is only supported for allowlisted partners.
ComparisonValue
A value to compare the signal to.
JSON representation
{
// Union field value can be only one of the following:
"int64Value" : string ,
"doubleValue" : number ,
"stringValue" : string ,
"boolValue" : boolean ,
"creativeDimensionValue" : {
object ( Dimensions )
} ,
"dayAndTimeValue" : {
object ( DayAndTime )
} ,
"deviceTypeValue" : enum ( RuleDeviceType ) ,
"onScreenPositionValue" : enum ( OnScreenPosition ) ,
"environmentValue" : enum ( Environment ) ,
"exchangeValue" : enum ( Exchange ) ,
"contentDurationValue" : enum ( ContentDuration ) ,
"contentStreamTypeValue" : enum ( ContentStreamType ) ,
"contentGenreIdValue" : string ,
"videoPlayerSizeValue" : enum ( VideoPlayerSize )
// End of list of possible types for union field value .
}
Fields
Union field value . The value to compare the signal to. value can be only one of the following:
int64Value
string ( int64 format)
Integer value.
doubleValue
number
Double value.
stringValue
string
String value.
boolValue
boolean
Boolean value.
creativeDimensionValue
object ( Dimensions )
Creative dimension value.
dayAndTimeValue
object ( DayAndTime )
Day and time value. Only TIME_ZONE_RESOLUTION_END_USER is supported.
deviceTypeValue
enum ( RuleDeviceType )
Device type value.
onScreenPositionValue
enum ( OnScreenPosition )
Ad position value.
environmentValue
enum ( Environment )
Environment value.
exchangeValue
enum ( Exchange )
Exchange value.
contentDurationValue
enum ( ContentDuration )
Video content duration value.
contentStreamTypeValue
enum ( ContentStreamType )
Video delivery type value.
contentGenreIdValue
string ( int64 format)
Video genre id value.
videoPlayerSizeValue
enum ( VideoPlayerSize )
Video player size value.
This field is only supported for allowlisted partners.
DayAndTime
Representation of time defined by day of the week and hour of the day.
JSON representation
{
"dayOfWeek" : enum ( DayOfWeek ) ,
"hourOfDay" : integer ,
"timeZoneResolution" : enum ( TimeZoneResolution )
}
Fields
dayOfWeek
enum ( DayOfWeek )
Required. Day of the week.
hourOfDay
integer
Required. Hour of the day.
timeZoneResolution
enum ( TimeZoneResolution )
Required. The mechanism used to determine the relevant timezone.
SignalValue
Adjusted value of the signal used for rule evaluation.
JSON representation
{
// Union field signal can be only one of the following:
"activeViewSignal" : enum ( ActiveViewSignal ) ,
"floodlightActivityConversionSignal" : {
object ( FloodlightActivityConversionSignal )
}
// End of list of possible types for union field signal .
"number" : number
}
Fields
Union field signal . The base signal used to generate the value. signal can be only one of the following:
activeViewSignal
enum ( ActiveViewSignal )
Signal based on active views. Only TIME_ON_SCREEN is supported.
This field is only supported for allowlisted partners.
floodlightActivityConversionSignal
object ( FloodlightActivityConversionSignal )
Signal based on floodlight conversion events.
This field is only supported for allowlisted partners.
number
number
Value to use as result.
FloodlightActivityConversionSignal
The rule to score impressions based on Floodlight conversion events.
JSON representation
{
"floodlightActivityId" : string ,
"countingMethod" : enum ( CountingMethod ) ,
"conversionCounting" : enum ( ConversionCounting )
}
Fields
floodlightActivityId
string ( int64 format)
Required. Id of the floodlight activity.
countingMethod
enum ( CountingMethod )
Required. The way to acquire value from the floodlight activity, for example, count of the conversion.
conversionCounting
enum ( ConversionCounting )
Required. The type of conversions to be used in impression value computation, for example, post-click conversions.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-27 UTC."],[],[]]
