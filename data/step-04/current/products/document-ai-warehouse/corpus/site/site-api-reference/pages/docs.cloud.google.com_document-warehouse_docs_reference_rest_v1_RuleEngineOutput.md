---
title: "RuleEngineOutput \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/RuleEngineOutput
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/document-warehouse/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/RuleEngineOutput
  title: "RuleEngineOutput \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI Warehouse
Reference
Send feedback
RuleEngineOutput
Stay organized with collections
Save and categorize content based on your preferences.
Records the output of Rule Engine including rule evaluation and actions result.
JSON representation
{
"documentName" : string ,
"ruleEvaluatorOutput" : {
object ( RuleEvaluatorOutput )
} ,
"actionExecutorOutput" : {
object ( ActionExecutorOutput )
}
}
Fields
documentName
string
name of the document against which the rules and actions were evaluated.
ruleEvaluatorOutput
object ( RuleEvaluatorOutput )
Output from Rule Evaluator containing matched, unmatched and invalid rules.
actionExecutorOutput
object ( ActionExecutorOutput )
Output from Action Executor containing rule and corresponding actions execution result.
RuleEvaluatorOutput
Represents the output of the Rule Evaluator.
JSON representation
{
"triggeredRules" : [
{
object ( Rule )
}
] ,
"matchedRules" : [
{
object ( Rule )
}
] ,
"invalidRules" : [
{
object ( InvalidRule )
}
]
}
Fields
triggeredRules[]
object ( Rule )
List of rules fetched from database for the given request trigger type.
matchedRules[]
object ( Rule )
A subset of triggered rules that are evaluated true for a given request.
invalidRules[]
object ( InvalidRule )
A subset of triggered rules that failed the validation check(s) after parsing.
InvalidRule
A triggered rule that failed the validation check(s) after parsing.
JSON representation
{
"rule" : {
object ( Rule )
} ,
"error" : string
}
Fields
rule
object ( Rule )
Triggered rule.
error
string
Validation error on a parsed expression.
ActionExecutorOutput
Represents the output of the Action Executor.
JSON representation
{
"ruleActionsPairs" : [
{
object ( RuleActionsPair )
}
]
}
Fields
ruleActionsPairs[]
object ( RuleActionsPair )
List of rule and corresponding actions result.
RuleActionsPair
Represents a rule and outputs of associated actions.
JSON representation
{
"rule" : {
object ( Rule )
} ,
"actionOutputs" : [
{
object ( ActionOutput )
}
]
}
Fields
rule
object ( Rule )
Represents the rule.
actionOutputs[]
object ( ActionOutput )
Outputs of executing the actions associated with the above rule.
ActionOutput
Represents the result of executing an action.
JSON representation
{
"actionId" : string ,
"actionState" : enum ( State ) ,
"outputMessage" : string
}
Fields
actionId
string
id of the action.
actionState
enum ( State )
state of an action.
outputMessage
string
Action execution output message.
State
Represents execution state of the action.
Enums
UNKNOWN
The unknown state.
ACTION_SUCCEEDED
state indicating action executed successfully.
ACTION_FAILED
state indicating action failed.
ACTION_TIMED_OUT
state indicating action timed out.
ACTION_PENDING
state indicating action is pending.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-08 UTC."],[],[]]
