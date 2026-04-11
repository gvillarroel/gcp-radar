---
title: "Interface AgentCoachingInstructionOrBuilder (4.94.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.AgentCoachingInstructionOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.AgentCoachingInstructionOrBuilder
  title: "Interface AgentCoachingInstructionOrBuilder (4.94.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
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
Interface AgentCoachingInstructionOrBuilder (4.94.0)
Stay organized with collections
Save and categorize content based on your preferences.
4.94.0 (latest)
4.93.0
4.91.0
4.89.0
4.88.0
4.87.0
4.86.0
4.84.0
4.82.0
4.81.0
4.80.0
4.79.0
4.78.0
4.76.0
4.74.0
4.73.0
4.70.0
4.69.0
4.68.0
4.66.0
4.65.0
4.64.0
4.63.0
4.62.0
4.61.0
4.60.0
4.59.0
4.58.0
4.57.0
4.55.0
4.54.0
4.53.0
4.52.0
4.51.0
4.50.0
4.49.0
4.48.0
4.47.0
4.46.0
4.45.0
4.43.0
4.42.0
4.41.0
4.40.0
4.39.0
4.38.0
4.37.0
4.36.0
4.35.0
4.34.0
4.33.0
4.30.0
4.29.0
4.28.0
4.27.0
4.26.0
4.25.0
4.24.0
4.23.0
4.22.0
4.21.0
4.20.0
4.19.0
4.18.0
4.17.0
4.15.0
4.14.0
4.13.0
4.12.0
4.11.0
4.10.0
4.9.1
4.8.6
4.7.5
4.6.0
4.5.11
4.4.0
4.3.1
public interface AgentCoachingInstructionOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getAgentAction()
public abstract String getAgentAction ()
Optional. The action that human agent should take. For example, "apologize
for the slow shipping". If the users only want to use agent coaching for
intent detection, agent_action can be empty
string agent_action = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The agentAction.
getAgentActionBytes()
public abstract ByteString getAgentActionBytes ()
Optional. The action that human agent should take. For example, "apologize
for the slow shipping". If the users only want to use agent coaching for
intent detection, agent_action can be empty
string agent_action = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for agentAction.
getCondition()
public abstract String getCondition ()
Optional. The condition of the instruction. For example, "the customer
wants to cancel an order". If the users want the instruction to be
triggered unconditionally, the condition can be empty.
string condition = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The condition.
getConditionBytes()
public abstract ByteString getConditionBytes ()
Optional. The condition of the instruction. For example, "the customer
wants to cancel an order". If the users want the instruction to be
triggered unconditionally, the condition can be empty.
string condition = 3 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for condition.
getDisplayDetails()
public abstract String getDisplayDetails ()
Optional. The detailed description of this instruction.
string display_details = 2 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The displayDetails.
getDisplayDetailsBytes()
public abstract ByteString getDisplayDetailsBytes ()
Optional. The detailed description of this instruction.
string display_details = 2 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for displayDetails.
getDisplayName()
public abstract String getDisplayName ()
Optional. Display name for the instruction.
string display_name = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The displayName.
getDisplayNameBytes()
public abstract ByteString getDisplayNameBytes ()
Optional. Display name for the instruction.
string display_name = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for displayName.
getDuplicateCheckResult()
public abstract AgentCoachingInstruction . DuplicateCheckResult getDuplicateCheckResult ()
Output only. Duplication check for the AgentCoachingInstruction.
.google.cloud.dialogflow.v2.AgentCoachingInstruction.DuplicateCheckResult duplicate_check_result = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
AgentCoachingInstruction.DuplicateCheckResult
The duplicateCheckResult.
getDuplicateCheckResultOrBuilder()
public abstract AgentCoachingInstruction . DuplicateCheckResultOrBuilder getDuplicateCheckResultOrBuilder ()
Output only. Duplication check for the AgentCoachingInstruction.
.google.cloud.dialogflow.v2.AgentCoachingInstruction.DuplicateCheckResult duplicate_check_result = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
AgentCoachingInstruction.DuplicateCheckResultOrBuilder
getSystemAction()
public abstract String getSystemAction ()
Optional. The action that system should take. For example,
"call GetOrderTime with order_number={order number provided by the
customer}". If the users don't have plugins or don't want to trigger
plugins, the system_action can be empty
string system_action = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The systemAction.
getSystemActionBytes()
public abstract ByteString getSystemActionBytes ()
Optional. The action that system should take. For example,
"call GetOrderTime with order_number={order number provided by the
customer}". If the users don't have plugins or don't want to trigger
plugins, the system_action can be empty
string system_action = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for systemAction.
getTriggeringEvent()
public abstract AgentCoachingInstruction . TriggerEvent getTriggeringEvent ()
Optional. The event that should trigger this instruction.
If UNSPECIFIED, the instruction triggering will be same as the generator's
trigger_event.
.google.cloud.dialogflow.v2.AgentCoachingInstruction.TriggerEvent triggering_event = 10 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AgentCoachingInstruction.TriggerEvent
The triggeringEvent.
getTriggeringEventValue()
public abstract int getTriggeringEventValue ()
Optional. The event that should trigger this instruction.
If UNSPECIFIED, the instruction triggering will be same as the generator's
trigger_event.
.google.cloud.dialogflow.v2.AgentCoachingInstruction.TriggerEvent triggering_event = 10 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
The enum numeric value on the wire for triggeringEvent.
hasDuplicateCheckResult()
public abstract boolean hasDuplicateCheckResult ()
Output only. Duplication check for the AgentCoachingInstruction.
.google.cloud.dialogflow.v2.AgentCoachingInstruction.DuplicateCheckResult duplicate_check_result = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the duplicateCheckResult field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
