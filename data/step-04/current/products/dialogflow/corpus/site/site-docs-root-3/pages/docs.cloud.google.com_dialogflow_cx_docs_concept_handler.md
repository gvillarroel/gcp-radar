---
title: "State handlers \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/handler
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/handler
  title: "State handlers \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
Send feedback
State handlers
Stay organized with collections
Save and categorize content based on your preferences.
State handlers ,
also simply called handlers ,
are used to control the conversation by creating responses for end-users
and/or by transitioning the current page.
For each conversational turn,
handlers are evaluated and may affect the session.
Handlers have three general types of data:
Term
Definition
Handler requirements
These are the requirements that must be satisfied
for the handler to have
any effect on the session.
A handler is said to be called
when it satisfies its requirements
and affects the session in some way.
Handler fulfillment
If a handler is called,
an optional
fulfillment
is used to create responses for end-users.
These responses are either
defined in static agent data
or retrieved dynamically from your
webhook service .
Handler transition target
If a handler is called,
an optional transition target is used
to change the current page.
The next page can only be a
flow start page
or a page within the currently active flow.
There are two types of state handlers
with differing handler requirements:
Term
Definition
Routes
Routes
are called when an end-user input matches an
intent
and/or some
condition
on the session status is met.
A route with an intent requirement is also called an
intent route . A route with only a condition requirement
is also called a condition route .
Event handlers
Event handlers
are called when an event is invoked.
Some
built-in events
are triggered when unexpected end-user input is received,
or when a webhook error occurs.
You can also define
custom events
that you invoke when something happens outside the conversation.
There are three steps to processing a state handler:
Term
Definition
1. Scope
A handler must be in scope to have any effect on the session. The scope is determined by whether a handler is applied to a flow, a page, or a form parameter; and by whether the associated flow is active, the associated page is active, or the agent is currently attempting to fill the associated form parameter.
2. Evaluation
Each handler in scope is evaluated in order . If a handler's requirements are met, it passes evaluation.
3. Call
If a handler is in scope and passes evaluation, it is called. Any associated fulfillment is called, and any associated transition target is applied to the session.
Scope
In order for a handler to be evaluated,
it must be in scope .
Handler scope is an important and powerful tool
that helps you control the conversation.
By controlling the scope of a handler, you can control:
X
Item
double_arrow
When an intent can be matched
double_arrow
When a condition should be checked
double_arrow
When a certain event can be handled
double_arrow
When a page transition can occur
double_arrow
When a static fulfillment response is provided
double_arrow
When a webhook-enabled fulfillment is called for dynamic responses
The scope is determined by whether a handler is applied to
a flow, a page, or a form parameter;
and by whether the associated flow is active, the associated page is active,
or the agent is currently attempting to fill the associated form parameter.
The detailed scoping rules are as follows:
Routes applied to the active flow:
If the current page is the
flow start page ,
they are in scope.
If the current page is not the flow start page,
they are only in scope if they have an intent requirement.
Routes applied to the current page are in scope.
Event handlers applied to the active flow are in scope.
Event handlers applied to the current page are in scope.
Event handlers applied to a form parameter
that the agent is currently attempting to fill are in scope.
Routes
Routes have two requirements, and one or both must be provided.
If both requirements are provided,
they both must be satisfied in order to call the route:
Term
Definition
Intent requirement
An
intent
which must be matched to end-user input
for the current conversational turn.
When a route has an intent requirement,
it is called an intent route .
Condition requirement
A
condition
which must be met.
When a route has a condition requirement,
it is called a condition route .
You can apply routes to flows ( flow-level routes )
and pages ( page-level routes ).
For example, you might use routes in the following situations:
X
Item
double_arrow
When end-user input matches an intent,
the match should trigger a
static fulfillment
response.
double_arrow
When end-user input matches an intent,
the match should trigger a
webhook-enabled fulfillment
for a dynamic response.
double_arrow
When end-user input has provided the final required
form parameter
a condition check triggers a session transition
to another page.
double_arrow
When end-user input has provided a specific
form parameter
a condition check triggers a
static fulfillment
response.
double_arrow
A condition check set to true
that forces a page transition.
Intent propagation
Normally, when a route is called due to a matched intent,
the intent is consumed .
A consumed intent cannot be matched again,
unless new end-user input triggers a new intent match.
However, it is possible to propagate an intent match
from one flow to another in the following scenario:
A route in flow F1 has intent I1 as a requirement
and flow F2 as a transition target.
Flow F2 has a route that also has intent I1 as a requirement.
In this case, when the route in flow F1 is called,
intent I1 is matched twice for a single end-user input,
and both routes are called.
Propagating intents is useful to:
X
Item
double_arrow
Change the current page to a specific page
in another flow
(transition target flow's route
has a specific transition target page).
double_arrow
Create an entry message for a flow's start page
(transition target flow's route has a fulfillment).
Route groups
When building an agent,
you may find that many pages have a common set of routes.
To make routes reusable, you can define route groups .
You can create these group resources reusable either within the flow or
the entire agent.
For example, you may want your flow to handle end-user input
like "I want to add a topping to my pizza" and "I want to change my drink size".
These inputs should be handled
when any one of multiple pages of the flow are active.
You could define two routes with intents to handle these inputs
for all relevant pages, but this is a lot of duplicated work.
Instead, you can define the route group once,
and add a reference to the group on all relevant pages.
Flow-level route groups
Flow-level route groups are route group resources that are created with a
flow as parent. They are reusable within the flow.
Agent-level route groups
Agent-level route groups are route group resources that are created with an
agent as parent. They are reusable within the entire agent, but disallow routes
that transition to a non symbolic page as target.
Flow-level routes
Flow-level routes are routes that are applied to a flow
by adding them to the flow start page.
These types of handlers have the following use cases:
X
Item
double_arrow
Handlers with an intent or condition requirement
in scope for the
flow start page .
double_arrow
Handlers with an intent requirement in scope for
all pages within the flow.
To create flow-level routes from the console:
Open the flow start page.
Click the add add button
in the Routes heading.
The route editing panel opens.
Provide route fields.
Click Save .
To reorder flow-level routes from the console:
Open the flow start page.
Click the Routes heading.
The route list panel opens.
Drag routes in the desired order.
Alternatively, click the option
more_vert menu,
then select Move To .
To delete flow-level routes from the console:
Open the flow start page.
Click the Routes heading.
The route list panel opens.
Click the option more_vert menu.
Select Delete .
Page-level routes
Page-level routes are routes that are applied to a page.
These types of handlers have the following use cases:
X
Item
double_arrow
Handlers with an intent or condition requirement
in scope when specific pages are active.
To create page-level routes from the console:
Open the page (not the flow start page).
Click the add add button
in the Routes heading.
The route editing panel opens.
Provide route fields.
Click Save .
To reorder page-level routes from the console:
Open the page (not the flow start page).
Click the Routes heading.
The route list panel opens.
Drag routes in the desired order.
Alternatively, click the option
more_vert menu,
then select Move To .
To delete page-level routes from the console:
Open the page (not the flow start page).
Click the Routes heading.
The route list panel opens.
Click the option more_vert menu.
Select Delete .
Event handlers
Event handlers have one requirement in order to be called:
Term
Definition
Event requirement
An event which must be invoked.
Events are identified by their name.
Some built-in events are invoked
when unexpected end-user input is received,
or when a webhook error occurs.
You can also define custom events that you invoke
when something happens outside of the conversation.
You can apply event handlers to flows ( flow-level event handlers ),
pages ( page-level event handlers ),
and parameters ( parameter-level event handlers ).
For example, you might use event handlers in the following situations:
X
Item
double_arrow
When end-user input does not match any intents,
a no-match event handler provides a specific
static fulfillment
response.
double_arrow
A timer expires in your system,
and you want to provide reminder information
to the end-user with a specific
static fulfillment
response.
Flow-level event handlers
Flow-level event handlers are event handlers that are applied to a flow.
These types of handlers have the following use cases:
X
Item
double_arrow
Handlers with an event requirement
in scope for the
flow start page .
double_arrow
Handlers with an event requirement in scope for
all pages within the flow.
double_arrow
Handling unexpected end-user input,
shared by all pages in a flow.
double_arrow
Handling webhook errors,
shared by all pages in a flow.
double_arrow
Handling custom events invoked by your system,
shared by all pages in a flow.
Every flow has event handlers for the no-match and no-input
built-in events .
These event handlers are automatically created when you create a flow,
and they cannot be deleted.
To create flow-level event handlers from the console:
Open the flow start page.
Click the add add button
in the Event handlers heading.
The event handler panel opens.
Provide event handler fields.
Click Save .
To delete flow-level event handlers from the console:
Open the flow start page.
Click the Event handlers heading.
The event handler list panel opens.
Hover your mouse over an event handler,
then click the delete
delete button.
Page-level event handlers
Page-level event handlers are event handlers that are applied to a page.
These types of handlers have the following use cases:
X
Item
double_arrow
Handlers with an event requirement in scope when
specific pages are active.
double_arrow
Handling unexpected end-user input,
specific to a page.
double_arrow
Handling webhook errors, specific to a page.
double_arrow
Handling custom events invoked by your system,
specific to a page.
To create page-level event handlers from the console:
Open a page (not the flow start page).
If there is no Event handlers heading,
click Add state handler ,
select Event handlers ,
then click Apply .
Click the add add button
in the Event handlers heading.
The event handler panel opens.
Provide event handler fields.
Click Save .
To delete page-level event handlers from the console:
Open a page (not the flow start page).
Click the Event handlers heading.
The event handler list panel opens.
Hover your mouse over an event handler,
then click the delete
delete button.
Parameter-level event handlers
Parameter-level event handlers are event handlers
that are applied to a form parameter.
They are also known as
reprompt handlers .
These event handlers do not allow custom events,
as they are specifically intended to handle invalid end-user input
during form filling.
These types of handlers have the following use cases:
X
Item
double_arrow
The end-user did not provide valid input
when asked to fill a form parameter.
To create parameter-level event handlers from the console:
Open a page that contains form parameters.
Click a parameter.
The parameter panel opens.
Scroll down to the Reprompt event handlers section,
then click Add event handler .
The event handler panel opens.
Provide event handler fields.
Click Save .
To delete parameter-level event handlers from the console:
Open a page that contains form parameters.
Click a parameter.
The parameter panel opens.
Scroll down to the Reprompt event handlers section.
Hover your mouse over an event handler,
then click the delete
delete button.
Built-in events
Note: There are important best practices
for built-in error events described in the
agent design best practices guide .
The following events are built-in and are invoked by Dialogflow CX.
Some events are restricted to certain levels.
Event name
Flow-level
Page-level
Parameter-level
Invoked when
sys.no-match-default
✔
✔
✔
For flow or page level: end-user input does not match any intents for handlers that are in scope.
For parameter level: end-user input does not satisfy the form parameter.
sys.no-match-[1-6]
✔
✔
✔
If you provide handlers for any of these numerically ordered events, they are invoked instead of sys.no-match-default and in order: sys.no-match-1 , sys.no-match-2 , ...
sys.no-input-default
✔
✔
✔
End-user input was not received. This can be invoked when: Dialogflow CX receives empty end-user text input.
Dialogflow CX receives empty end-user audio input or the input does not contain any recognized speech.
A no speech timeout occurs before end-user audio input contains any recognized speech.
sys.no-input-[1-6]
✔
✔
✔
If you provide handlers for any of these numerically ordered events, they are invoked instead of sys.no-input-default and in order: sys.no-input-1 , sys.no-input-2 , ...
sys.invalid-parameter
✔
Invoked when a webhook response invalidates the parameter by setting WebhookResponse.pageInfo.formInfo.parameterInfo.state to INVALID .
sys.long-utterance
✔
✔
✔
End-user input exceeds the maximum allowed length (256 characters) matched by non-generative intents or parameters . If not provided, Dialogflow CX treats long user utterance as no-match . For streaming audio inputs, this event is triggered only after the client closes the audio stream.
webhook.error
✔
✔
The webhook call returned an error. This event is only invoked: 1) if there is no fine-grained webhook event handler (e.g. webhook.error.timeout) that matches the webhook error code, 2) if there is no transition target set in the original route that called the fulfillment with the failing webhook. See the evaluation order section for details.
webhook.error.timeout
✔
✔
The webhook call timed out. A webhook event will only be invoked if there is no transition target set in the original route that called the fulfillment with the failing webhook. See the evaluation order section for details.
webhook.error.bad-request
✔
✔
The webhook returned 400 Bad Request . A webhook event will only be invoked if there is no transition target set in the original route that called the fulfillment with the failing webhook. See the evaluation order section for details.
webhook.error.rejected
✔
✔
The webhook returned 401 Unauthorized or 403 Forbidden . A webhook event will only be invoked if there is no transition target set in the original route that called the fulfillment with the failing webhook. See the evaluation order section for details.
webhook.error.unavailable
✔
✔
The webhook returned 503 Service Unavailable . A webhook event will only be invoked if there is no transition target set in the original route that called the fulfillment with the failing webhook. See the evaluation order section for details.
webhook.error.not-found
✔
✔
The webhook call failed because the webhook URL was unreachable. A webhook event will only be invoked if there is no transition target set in the original route that called the fulfillment with the failing webhook. See the evaluation order section for details.
flow-cancelled
✔
✔
End-user requested cancellation of flow. This event is triggered by the End Flow With Cancellation page, see the END_FLOW_WITH_CANCELLATION symbolic transition target .
flow-failed
✔
✔
This flow wasn't able to complete the given task. This event is triggered by the End Flow With Failure page, see the END_FLOW_WITH_FAILURE symbolic transition target .
flow-failed-human-escalation
✔
✔
End-user requested to talk to human agents. This event is triggered by the End Flow With Human Escalation page, see the END_FLOW_WITH_HUMAN_ESCALATION symbolic transition target .
Custom events
You can create custom events and event handlers.
Custom events are used to handle things that happen
outside the conversation with the end-user.
For example,
the end-user clicked a button,
a certain amount of time has passed,
available inventory has changed during the conversation,
and so on.
Events are simply identified by name.
You should avoid using event names that start with sys. or webhook.
to avoid conflict with built-in events.
To invoke an event with the API,
see the queryInput.event field of the detectIntent method
for the Session type.
Go to the Session API reference
Select a protocol and version for the Session reference:
Protocol
V3
V3beta1
REST
Session resource
Session resource
RPC
Session interface
Session interface
C++
SessionsClient
Not available
C#
SessionsClient
Not available
Go
SessionsClient
Not available
Java
SessionsClient
SessionsClient
Node.js
SessionsClient
SessionsClient
PHP
Not available
Not available
Python
SessionsClient
SessionsClient
Ruby
Not available
Not available
Close
Evaluation order
Handlers are evaluated in a specific order.
The following general rules apply:
Only handlers in scope are evaluated.
Only handlers whose requirements are satisfied
can be called.
If a handler without a transition target is called,
evaluation of the list of handlers continues.
Due to this rule, multiple fulfillments can add multiple messages
to the
response queue .
If a handler with a transition target is called,
evaluation of the list of handlers ends.
If a handler with fulfillment is called,
and the fulfillment results in a webhook error:
If the handler has a transition target defined,
the webhook silently fails.
If an event handler is in scope for the event,
it handles the event
and evaluation of the list of handlers ends.
If no event handler is in scope for the event,
the webhook silently fails.
When an intent requirement is satisfied,
the intent is consumed,
so only the first route handler found for the intent
can be called (See intent propagation for the exceptions).
When a condition requirement is satisfied,
the condition is not consumed, so multiple routes
with the condition can be called.
When an event requirement is satisfied,
the event is consumed,
so only the first event handler found for the event
can be called.
The handler call stack
can affect evaluation order.
There are three phases to the evaluation:
Routes that have an intent requirement
are evaluated in this order:
Page-level :
Individual routes applied to the current page,
in the order supplied.
Page-level groups :
Route groups applied to the current page,
in the order supplied.
Flow-level :
Routes applied to the active flow,
in the order supplied.
Flow-level groups :
Route groups applied to the active flow,
in the order supplied.
Routes with only a condition requirement
are evaluated in this order:
Page-level :
Individual routes applied to the current page,
in the order supplied.
Page-level groups :
Route groups applied to the current page,
in the order supplied.
Flow-level (Only if the current page is the
flow start page ) :
Routes applied to the active flow,
in the order supplied.
Flow-level groups (Only if the current page is the
flow start page ) :
Route groups applied to the active flow,
in the order supplied.
Event handlers are evaluated in this order:
Parameter-level :
Event handlers applied to the current page's form parameter
that the agent is currently attempting to fill (reprompt handlers),
in the order supplied.
Page-level :
Event handlers applied to the current page,
in the order supplied.
Flow-level :
Event handlers applied to the active flow,
in the order supplied.
Symbolic transition targets
When entering a transition target for a handler,
you can enter specific flows or pages,
but you can also enter symbolic transition targets:
Symbolic transition target
Description
START_PAGE
Transition to the like-named active flow's start page .
END_FLOW
End the currently active flow and transition back to the page that caused a transition to the current flow. Also see Handler call stack and flow stack limit .
END_FLOW_WITH_CANCELLATION
End the currently active flow and transition back to the page that caused a transition to the current flow. The calling page can handle this transition with the flow-cancelled built-in event . Also see Handler call stack and flow stack limit .
END_FLOW_WITH_FAILURE
End the currently active flow and transition back to the page that caused a transition to the current flow. The calling page can handle this transition with the flow-failed built-in event . Also see Handler call stack and flow stack limit .
END_FLOW_WITH_HUMAN_ESCALATION
End the currently active flow and transition back to the page that caused a transition to the current flow. The calling page can handle this transition with the flow-failed-human-escalation built-in event . Also see Handler call stack and flow stack limit .
END_SESSION
Clear current session and transition to the special page named END_SESSION . The next user input will restart the session at the start page of the Default Start Flow .
PREVIOUS_PAGE
Transition to the previous page that caused a transition to the current page. The page state from the previous page will be restored after transition.
CURRENT_PAGE
Re-transition to the current page. This can be useful if you want the agent to repeat something.
Handler call stack and flow stack limit
When a session transitions from flow to flow with specific transition targets,
each flow is pushed onto the flow
stack .
Handler call stack
When a session transitions to END_FLOW ,
it returns back to the calling page
that caused a transition to the completed flow.
In this situation,
the handler call stack is preserved.
All handlers that were previously evaluated
from the calling page will be skipped,
and the remaining handlers will be evaluated in order.
For example:
Page P has three handlers in this order: H1 , H2 , H3 .
H1 is evaluated, but it does not cause a transition.
H2 is evaluated, and it causes a transition to flow F .
A page in flow F transitions to END_FLOW .
The session returns to Page P ,
which becomes active again with a preserved state.
The handler evaluation in page P continues
from the status it preserved,
thus H3 is evaluated.
Flow stack limit
Maximum flow stack limit is 25. Exceeding the maximum stack limit may
cause flows to be popped from the stack, leading to unexpected behavior
when using the END_FLOW transition.
To avoid these potential issues, minimize the number of flow-to-flow transitions
preceding the END_FLOW transition.
If the flow stack is empty, the END_FLOW transition ends the session.
Set conditions
To set conditions with the console,
you supply condition rules with one of three logical options:
Match AT LEAST ONE rule (OR)
Match EVERY rule (AND)
Customize expression
As a convenience, you can use the AND/OR options to create simple or compound
conditions for parameter values.
You can use the free form Customize expression option for all
types of conditions, including
system functions
and boolean constants .
For example,
to set a condition that has a 10% chance of passing evaluation,
select the Customize expression option
and enter $sys.func.rand() < 0.1 in the Condition field:
Previous
arrow_back
Pages
Next
Intents
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
