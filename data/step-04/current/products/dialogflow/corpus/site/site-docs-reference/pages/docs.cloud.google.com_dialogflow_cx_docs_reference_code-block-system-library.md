---
title: "Code block system library \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library
  title: "Code block system library \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Reference
Send feedback
Code block system library
Stay organized with collections
Save and categorize content based on your preferences.
This reference documentation describes the classes,
variables, and functions that you can use for
code blocks .
Resource naming
Playbooks, flows, tools, and tool actions need to be translated
to valid Python names.
This means you should avoid spaces, periods, hyphens,
and other illegal python characters for names.
Importing libraries
You can import the following popular libraries globally or inside functions:
grpcio==1.64.1
grpcio-tools==1.64.1
protobuf==5.27.1
Constants
PRECEDING_CONVERSATION_SUMMARY
The preceding conversation history playbook input parameter key.
Also see
PlaybookInput .
Sample:
add_override (
playbooks . troubleshooting ,
{ PRECEDING_CONVERSATION_SUMMARY : "users mentioned broken internet" },
)
EXECUTION_SUMMARY
The execution summary playbook output parameter key.
Also see
PlaybookOutput .
Sample:
done ({ EXECUTION_SUMMARY : "Order was placed" })
Decorators
@Action
@Action decorators mark a function as an inline action.
Inline actions behave similar to
tool actions .
They have a defined input and output schema,
which is determined by the Python function signature,
including type annotations and docstring.
Similar to tool calls, the LLM is unaware of the code that implements the action.
The function signature can only use primitive types
( int , float , str , bool )
and dict of primitive types.
Sample:
@Action
def is_prime ( n : int ): bool
"""Returns true if n is prime."""
import math
return ( all ([ False for i in range ( 2 , math . sqrt ( n )
if n % i == 0 ]) and not n < 2 )
For this function, the following will be sent to the LLM:
# Actions
is_prime:
description: Returns true if n is prime.
input: is_prime_input
output: bool
# Schemas
is_prime_input:
type: object
properties:
- n:
type: integer
@BeforeActionTrigger
@BeforeActionTrigger decorator triggers the function
every time before the large language model executes an action.
Deterministically triggered functions are not visible or callable by the
LLM, and must start with an underscore (private/protected access) to indicate
this.
Sample:
@BeforeActionTrigger
def _my_trigger () - > None :
respond ( "..." )
Sample with condition and
special variable $next-action that contains the next action to be executed:
@BeforeActionTrigger ( '$next-action.name = "search"' )
def _my_trigger () - > None :
respond ( "..." )
@BeforeModelTrigger
@BeforeModelTrigger decorator triggers the function
before the LLM predicts the next action.
Deterministically triggered functions are not visible or callable by the
LLM, and must start with an underscore (private/protected access) to indicate
this.
Sample:
@BeforeModelTrigger
def _my_trigger () - > None :
respond ( "..." )
Sample with condition:
@BeforeModelTrigger ( '$session.params.is_foo = true' )
def _my_trigger () - > None :
respond ( "..." )
Sample with condition and
special variable $last-action that contains the previous action:
@BeforeModelTrigger ( '$last-action.name = "query_order" AND $last-action.output.orders = null' )
def _my_trigger () - > None :
respond ( "..." )
@BeforePlaybookTrigger
@BeforePlaybookTrigger decorator triggers the function
the first time a playbook has started.
Deterministically triggered functions are not visible or callable by the
LLM, and must start with an underscore (private/protected access) to indicate
this.
Sample:
@BeforePlaybookTrigger
def _my_trigger () - > None :
respond ( "..." )
Sample with condition:
@BeforePlaybookTrigger ( '$session.params.is_foo = true' )
def _my_trigger () - > None :
respond ( "..." )
@EventTrigger
@EventTrigger decorators trigger the function on an
event .
Deterministically triggered functions are not visible or callable by the
LLM, and should start with an underscore (private/protected access) to indicate
this.
You can use the following decorator parameters:
event : Required event as a string
condition : Optional
condition
as a string
Sample:
@EventTrigger ( event = 'my_event' )
def _my_trigger () - > None :
respond ( "..." )
Sample with condition:
@EventTrigger ( event = 'my_event' , condition = '$session.params.is_foo = true' )
def _my_trigger () - > None :
respond ( "..." )
Type variables
InlineAction
A reference to a function decorated with @Action .
Classes
AgentAction
An action the agent took,
found in conversation history.
Properties:
name: Name as string.
input: Input data as Any.
output: Output data as Any.
AgentUtterance
An agent utterance,
found in the conversation history.
Attributes:
text: The agent utterance as a string.
ConversationHistory
History of interactions between the user and the agent split into turns.
Attributes:
playbook_input: The input of the current playbook as a
PlaybookInput , or None if this is the root playbook.
actions: The list of Interactions in the conversation history.
For the members of this object, see
Action .
Properties:
user_utterances: List of all user utterances in the history
as a list of strings.
last_user_utterance: The last user utterance in history
as a string or None.
agent_utterances: The list of all agent utterances in the history
as a list of strings.
last_agent_utterance: The last agent utterance in the history
as a string or None.
Event
An event,
found in conversation history.
Attributes:
event: The event name as a string.
Flow
A reference to a flow.
Flow.match_intent
Flow function that statelessly matches an intent with parameters
on the flow's start page.
Stateless means there are no side effects to the active session.
Parameters and/or current page/flow/playbook are unaffected.
Args:
text: The text input to match an intent for.
Returns:
A MatchIntentResult object.
Sample:
matches = flows . flow1 . match_intent ( history . last_user_utterance ) . matches
if matches and matches [ 0 ] . intent == "some_intent" :
to_country = matches [ 0 ] . parameters . get ( "to_country" )
if to_country :
respond ( f "To confirm, you're going to { to_country } , right?" )
FlowInvocation
A flow invocation,
found in the conversation history.
Attributes:
flow: The flow name as a string.
input_action_parameters: The input of the flow as a
dictionary from string to Any.
output_action_parameters: The output of the flow as a
dictionary from string to Any.
Flows
Contains references to all flows for the agent.
Intent
A matched intent.
Attributes:
display_name: The intent name.
Interaction
An interaction step between the user and the agent,
found in conversation history.
Superclass for all of: event, agent utterance, tool use,
flow invocation, or playbook invocation.
Also see
Action .
Match
A matched intent with parameters (stored as dictionary if any).
Attributes:
intent: Instance of Intent .
parameters: Parameters as a dictionary from string to Any.
confidence: Match confidence score as a float.
MatchIntentResult
The result of a flow match intent call.
Attributes:
matches: A list of Match objects.
OutputState
The output state,
found in conversation history.
Also see
OutputState
OUTPUT_STATE_UNSPECIFIED = 0
OUTPUT_STATE_OK = 1
OUTPUT_STATE_CANCELLED = 2
OUTPUT_STATE_FAILED = 3
OUTPUT_STATE_ESCALATED = 4
OUTPUT_STATE_PENDING = 5
PlaybookInput
The input of a playbook invocation,
found in conversation history.
Attributes:
preceding_conversation_summary: The summary of the preceding conversation as a
string.
action_parameters: The input parameters of the playbook as a
dictionary from string to Any.
PlaybookInvocation
A child playbook invocation or exit action,
found in conversation history.
Attributes:
playbook: The playbook display name as a string.
playbook_state: The output state of the playbook as a OutputState .
playbook_input: The input of the playbook as a PlaybookInput .
playbook_output: The output of the playbook as a PlaybookOutput .
PlaybookOutput
The output of a playbook invocation,
found in conversation history.
Attributes:
execution_summary: The summary of playbook execution
string.
action_parameters: The output parameters of the playbook as a
dictionary from string to Any.
PlaybookStep
Represents a
playbook step
and all of its child steps.
You can access a specific child step in the hierarchy
using zero-based bracket notation.
For example, you can access "Step 1.1.2" with
playbooks.my_playbook.steps[0].steps[0].steps[1].text .
Attributes:
text: Step description as a string.
steps: List of child steps of this step.
Sample:
@PlaybookStartHandler
def start ():
add_override ( update_step , { "rationale" : "The session just started, so I'm on Step 1" , "step_index" : "1" })
@Action
def update_step ( rationale : str , step_index : str ) - > str :
"""Set the current step.
Args:
rationale: Your rationale for why the step should be updated
step_index: The new step formatted as a string, e.g. "1.2.1"
Returns: A status message message indicating if the update was successful or not.
"""
indices = step_index . split ( "." )
if not indices :
return f "Bad index: { step_index } !"
step = playbooks . PLAYBOOK_NAME
try :
for index in step_index . split ( "." ):
step = step . steps [ int ( index ) - 1 ]
except ( IndexError , ValueError ):
return f "Bad index: { step_index } !"
return f "You're now on Step { step_index } ! Remember: { steps . text } "
Playbook
Represents a playbook reference.
Playbook.steps
Playbook function that returns a list of steps for the playbook.
Args:
none
Returns:
PlaybookStep list for the playbook.
Playbooks
Contains references to all playbooks of the agent.
Playbooks.current
Returns the current playbook.
Args:
none
Returns:
Playbook
SessionState
Read-only map that performs lazy retrieval for all state variables available at the time of the code block's execution. Dialogflow parameters are a type of state variable.
Playbook
Tool
A tool reference.
ToolError
A tool error raised when a called tool action respond with a non-2xx response.
Sample:
try :
tools . weather_api . get_weather ({ "location" : "San Francisco" })
except ToolError :
respond ( "I'm sorry, the weather is currently unavailable." )
ToolAction
A tool action function object.
Tools
Contains references to all tools for the agent.
ToolUse
A tool action,
found in the conversation history.
Attributes:
action: The action name as a string.
input_action_parameters: The input of the action as a
dictionary from string to Any.
output_action_parameters: The output of the action as a
dictionary from string to Any.
UserUtterance
A user utterance,
found in conversation history.
Attributes:
text: The user utterance text as string.
Global variables
flows
An instance of Flows .
This instance has a member for each Flow available to the agent.
Sample:
flows . my_flow
history
An instance of ConversationHistory
which contains the conversation history for the current playbook
up to the current action.
Sample:
if "hi" in history . last_user_utterance :
respond ( "hello" )
next_action
An instance of AgentAction or None.
This variable is only set to a value when a
@BeforeActionTrigger trigger is being executed.
When set, it is set to the same value as the $next-action
value used in conditions.
playbooks
An instance of Playbooks .
This instance has a member for each Playbook
available to the agent.
Sample:
playbooks . MyPlaybook
state
An instance of SessionState which contains a read-only mapping of all session variables available at the time of the code block's execution to their associated values. Dialogflow parameters are a type of state variable.
Sample:
state [ "$session.params.my-param" ]
state [ "$request.session-id" ]
tools
An instance of Tools .
This instance has a member for each Tool available to the agent.
Sample:
tools . weather_api
Each of these Tool members has a member for each ToolAction
available for the tool.
Sample:
tools . weather_api . get_weather
The Tools instance also has a generators member,
which has a member for each
generator
defined for the agent.
Sample:
def call_generator ():
# generator_output is a dict containing "response", "resolved_prompt"
# and "diagnostic_info" if execution was successful.
# If failed, only "diagnostic_info".
generator_output = tools . generators . my_test_generator ({ "param1" : "value1" ,
"param2" : "$session.params.foo" })
return generator_output . get ( "response" )
Global functions
add_override
Override the next action to be selected.
This adds the given action to the queue of actions to be force selected.
"Force selecting" an action refers to bypassing the standard operation where
the LLM selects the next action and its inputs. This override forces the
system to use the queued action(s) instead. Once the queue is empty, operation
returns to the LLM for action and input selection, unless an override finishes
the turn (most commonly respond ).
Overrides are queued in order (first added is first to be executed), and can
be added at any point inside handlers and actions, but only take effect once
the current action/handler has returned, like so:
@BeforeActionTrigger : Queued overrides are executed in order,
before the triggering next action (the one that triggered the handler) is
executed.
@PlaybookStart / BeforeModelTrigger : Queued overrides are
executed in order, before operation shifts back to the LLM selecting the
next action.
@Action : The action itself reports its output, then after that the
queued overrides are executed in order.
Note: The functions respond , done ,
cancel , fail , and
escalate are all special cases of adding a next action
override to the queue.
Args:
action: The action, for example playbooks.<playbook_name> .
inputs: The input action parameters. If None, the next action is fixed, but
the inputs are still derived by the LLM. If empty, the next action will be
called with empty parameters.
Sample:
# Playbook with provided inputs.
add_override ( playbooks . troubleshooting ,
{ PRECEDING_CONVERSATION_SUMMARY : "phone is broken" , "device" : "phone" })
# Playbook with provided empty inputs.
add_override ( playbooks . troubleshooting , {})
# Flow with generated inputs.
add_override ( flows . billing )
# Tool use.
add_override ( tools . weather_api . get_weather , { "location" : "San Francisco" })
# Just like add_override, this stacks on top of previously added overrides.
respond ( "Hello" )
cancel
Override the next action to have this playbook return a cancelled state.
Args:
inputs: A dict representing the playbook output parameters (cancel action
inputs). May contain a EXECUTION_SUMMARY
key in addition to other parameters. If empty, the playbook will be
finished with an empty execution summary and no parameters. If None, the
LLM will generate the playbook output parameters and the execution
summary.
done
Override the next action to have this playbook return a success state.
Args:
inputs: A dict representing the playbook output parameters (done action
inputs). May contain a EXECUTION_SUMMARY
key in addition to other parameters. If empty, the playbook will be
finished with an empty execution summary and no parameters. If None, the
LLM will generate the playbook output parameters and the execution
summary.
Sample usage:
@Action
def place_order ():
if art . submit ()[ "status" ] == "OK" :
# Exit playbook with provided execution summary.
done ({ EXECUTION_SUMMARY : "Order was placed" })
else :
# Exit playbook with generated execution summary.
done ()
escalate
Override the next action to have this playbook return an escalated state.
Args:
inputs: A dict representing the playbook output parameters (escalate action
inputs). If nonempty, must contain a single
EXECUTION_SUMMARY key and no other
parameters. If empty, the playbook will be finished with an empty
execution summary. If None, the LLM will generate the execution summary.
fail
Override the next action to have this playbook return a failed state.
Args:
inputs: A dict representing the playbook output parameters (fail action
inputs). If nonempty, must contain a single
EXECUTION_SUMMARY key and no other
parameters. If empty, the playbook will be finished with an empty
execution summary. If None, the LLM will generate the execution summary.
respond
Override the next action to respond to the user with the given text.
If this is a @BeforeActionTrigger , or if it's followed by more
action overrides (via add_override ), execution
continues (notify action), otherwise the turn ends (respond action) and the
agent waits for user input.
Args:
utterance_text: The text to respond to the user with. May be empty. If None,
the LLM will generate the utterance.
Sample usage:
@BeforeActionTrigger
def _one_moment_please ():
respond ( "One moment please..." ) ```
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
