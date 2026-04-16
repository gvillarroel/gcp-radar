---
title: "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings
  title: "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Google Cloud CCaaS
User Guides
Send feedback
Call settings
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to configure voice calls.
Turn calling on or off
You can turn calling on or off globally for your Contact Center AI Platform (CCAI Platform)
instance.
To turn calling on or off, follow these steps:
In the CCAI Platform portal, click Settings > Call . If you don't
see the Settings menu, click menu
Menu .
In the Use Calls pane, click the toggle to the on or off position.
Note: When you turn off calling, a notification email is sent to administrators.
Phone numbers
Each call center can have many phone numbers for inbound and outbound calls. We
will guide you through adding and configuring the phone numbers which are
provisioned for your contact center.
Inbound default and specific routing options
Default behavior
If CCAI Platform has configured a number for your contact center
environment the number will default routing to the top of the queues. If you
have multiple languages, numbers will default to the language selection message.
Specific Interactive Voice Response (IVR) inbound routing
If you have a line that is specific to a particular customer type or marketing
promotion, Direct Access Points can be used to direct phone calls to that
specific point in the queue. Direct Access Points can also be used for languages
so that one number can be published for Spanish and that phone number will
direct specifically to the top of the Spanish queue.
Outbound default and specific assignment options
Default outbound caller ID
By default, your contact center has one outbound number, which can be configured
using the following instructions.
Outbound caller ID configuration options
When operating different brands or locations from your CCAI Platform
environment, use multiple outbound numbers so that agent outbound calls show the
appropriate outbound number when calls are placed. There are two places for an
Admin to make these configurations:
Setting up phone numbers to the phone number settings.
Configuring outbound numbers for each queue in the queue settings.
Agents have options for specific outbound numbers based on their queue
assignments, or can be configured to not have options at all and will always
dial outbound from the phone number which is set by the administrator. For more
information, see Phone number management .
Requesting new phone numbers
Contact Support and include the following information about your preferences:
Number type: Toll-free, National, Mobile, Local
Location of number
Number preference details about number structure or patterns
Set up emergency and special services calling (US and Canada only)
With CCAI Platform, agents in the US and Canada can make calls to
emergency and special services using phone numbers that you dedicate to these
types of calls. In the US, agents can call emergency services. In Canada, agents
can call emergency services and special services. Agents can add an emergency or
special services call to an ongoing call with an end-user. If a call to
emergency or special services is dropped, the emergency or special services
operator can call the agent back and the call is routed to a dedicated queue.
For more information about the agent experience, see Emergency and special
services calling .
CCAI Platform supports the following emergency and special services
phone numbers:
US emergency numbers
Canada emergency numbers
Canada special service numbers
911 - Emergency
911 - Emergency
211 - Public information and referral services
933 - Emergency test
311 - Non-emergency municipal government services
411 - Local directory assistance
511 - Weather and traveler information services
611 - Repair service
711 - Message relay service (MRS)
811 - Non-urgent health care telephone triage service
988 - Suicide and crisis lifeline
Turn emergency calling on or off
Turn on emergency calling to let authorized agents make and manage emergency and
special services calls in the call adapter. Turn off emergency calling to
disable emergency and special services capabilities in the call adapter.
To turn emergency calling on or off, follow these steps:
In the CCAI Platform portal, click Settings > Call . If you don't
see the Settings menu, click menu
Menu .
Go to the Emergency Calling pane, and click the toggle to the on or the
off position.
Note: When you turn off emergency calling, a warning dialog appears
indicating that turning off emergency calling restricts agents from placing
911 calls at times of emergency. To continue, click Yes .
Provision a phone number for emergency or special services calling
For emergency or special services calling, you need at least one phone number
dedicated to this type of call. You can have multiple phone numbers dedicated to
emergency and special services calling per language and instance.
To provision a phone number for emergency or special services calling, contact
your Google account team.
Add a phone number for emergency or special services calling
To set up emergency or special services calling, you add a phone number and
specify whether it's an emergency or special services number. You can also set
usage restrictions by agent and location.
To add a phone number for emergency or special services calling, follow these
steps:
In the CCAI Platform portal, click Settings > Call . If you don't
see the Settings menu, click menu
Menu .
In the Phone Numbers pane, click Phone Number Management .
Click Add Number . The Add Number dialog appears.
Under Phone Number , enter the phone number that you provisioned for
emergency or special services.
Do one of the following;
Make this an emergency service number. To do this, follow these steps:
Select the This is an emergency service number checkbox.
In the Assigned Service field, select the three-digit phone number
for the emergency service that you want.
Optional: To restrict agents from using emergency calls, do one of the
following:
- Allow agents to use emergency calls only in specified locations .
To do this , follow these steps :
1. Select the ** This number is access restricted to certain
locations only ** checkbox .
1. Select ** Allow ** .
1. Under ** Locations affected by this rule ** , select
** Selected ** .
1. In the ** Locations ** field , type a location that you have
added to your CCAI Platform instance . When a field
appears that contains your location , click the field . Repeat
to add more locations . For more information about adding
locations , see [ Admin configuration ][ admin_configuration_4 ].
- Restrict agents from using emergency calls in specified
locations . To do this , follow these steps :
1. Select the ** This number is access restricted to certain
agents only ** checkbox .
1. Select ** Deny ** .
1. Under ** Agents affected by this rule ** , select
** Selected ** .
1. In the ** Agents ** field , type an agent that you have added
to your CCAI Platform instance . When a field
appears that contains your agent , click the field . Repeat to
add more agents . For more information about adding agents ,
see [ Add , view , and edit users ][ add_and_view_users ].
Make this a special service number. To do this, follow these steps:
Select the This is a special service number checkbox.
In the Assigned Service field, select the special service that you
want.
In the Label field, enter a label name to help you identify this phone
number, and then click Save . Your new phone number appears in the
Phone Number Management page.
Click Verify Numbers to verify your added phone number and any other
unverified phone numbers on the page. The Status column should indicate
that your new phone number is verified.
After you add a phone number for emergency or special services, you cannot edit
or delete it.
Restrict outbound calling for special service numbers
Admins can configure dedicated restrictions for special service phone numbers so
that only agents, teams, or locations allowed for the special service number can
make calls to that number.
These restrictions are disabled by default. Restrictions can be set for
specific agents, teams, and specific locations. Regardless of whether the
restrictions are set at the agent, team, or location level, if the agent is
included in any level of restriction, they will be unable to dial these numbers.
Restrict outbound calling for agents (new number)
To restrict outbound calling for agents, follow these steps:
Go to Settings > Call > Phone Number Management > Add Number and
configure the number as a special service number.
Check the box next to This number is restricted to certain agents only .
Set the rule (select the Allow/Deny radio button) to enable or disable
special service number dialing for selected agents or teams.
Set the rule (select All/Selected radio button) to specify whether all
agents or only certain agents should be restricted from calling the special
service number.
Add the specific agents or teams by selecting them from the drop-down.
Select Add to add the new restriction, or Cancel to cancel the
restriction configuration.
Restrict outbound calling for locations (new number)
To restrict outbound calling for locations, follow these steps
Go to Settings > Call > Phone Number Management > Add/Edit Number and
configure the number as a special service number.
Check the box next to This number is restricted to certain locations
only .
Set the rule (select the Allow/Deny radio button) to enable or disable
special service number dialing for selected locations.
Set the rule (select All/Selected radio button) to specify whether all
locations or only certain locations should be restricted from calling the
special service number.
Add the specific locations by selecting them from the drop-down.
Select Add to add the new restriction, or Cancel to cancel the
restriction configuration.
Configure an emergency service callback queue
An emergency services callback queue is a queue dedicated to receiving inbound
calls from emergency services. If a call to emergency services is dropped, for
example, the emergency service provider can call back and the call goes to the
emergency queue. Emergency queues should be staffed by human agents at all times
so that calls from emergency services are answered promptly. Virtual agents
cannot be assigned to an emergency queue.
An emergency queue requires a leaf queue to accept calls from emergency
services; parent queues can't accept emergency calls. Emergency queues are
hidden from agents, and calls can't be transferred to an emergency queue.
Here are some of the characteristics of an emergency services callback queue:
You can't assign an emergency phone number to more than one emergency queue,
but you can assign multiple emergency phone numbers to the same emergency
queue.
Emergency queues don't support the following:
Virtual agents
Overcapacity deflections
Automatic redirections
Target metrics
Blended SMS
Presession SMS deflections
Call redaction
Surveys
CSAT ratings
IVR payments
Custom URLs
Before you begin
To configure an emergency service callback queue, you'll need a phone number
that is dedicated to emergency or special services
calls .
To create an emergency service callback queue, follow these steps:
In the CCAI Platform portal, click Settings > Queue . If you don't
see the Settings menu, click menu
Menu .
In the IVR (Interactive Voice Response) pane, click Edit / View .
Click the queue that you want to edit.
In the Settings pane, next to Emergency Number , click Configure .
Click the Emergency Number toggle to the on position.
Under Assigned numbers , select a phone number that you have dedicated
to emergency or special services
calls , and then
click Add Number .
Repeat the previous step to add more phone numbers to the queue.
Click Save .
CRM records
CCAI Platform includes dialing data for emergency and special services
calls in reports. The number of dialed, failed, and completed calls are reported
for the following types of calls:
Calls to emergency services
Conference calls with emergency services
Calls to special services
Conference calls with special services
Configure global call settings
You can configure global call settings on the Settings > Call
page of CCAI Platform. Some of these settings can also be configured at
the queue level, but they must first be configured globally.
To configure global call settings, follow these steps:
In the CCAI Platform portal, click Settings > Call . If you don't
see the Settings menu, click menu
Menu .
Go to the Call Details pane, and select the settings that you want. For
information about the available settings, see Call details .
Click Save Call Details .
Call details
Option
Description
Call Recording
Use Call Recording.
Record Callback Outbound Calls.
Enable Call Recording Redaction for agents.
Play Call Recording Messages.
Record Agent Initiated Outbound Calls.
Enable Call Recording Redaction for agents.
Play Call Recording Message.
Ask User Permission To Record.
Recording Message Sequence : Select one of two
options:
Play Ask Permission to Record message before Call Recording
message.
Play Call Recording message before Ask Permission to Record
message.
Leave Ongoing Calls with 3rd Parties
Select this option to enable agents to leave a call with a 3rd
party without disconnecting the call.
Notes :
This option must be enabled if over capacity or Automatic
redirection is to be followed for call transfers.
If call recording is enabled, the recording will continue for the
duration of the call with the 3rd party; however, once the agent leaves
the call, the remainder of the call between the consumer and the 3rd
party is redacted.
Scheduled Calls
Specify the minutes that an agent will be pulled out of the queue
and assigned to a scheduled call before it takes place. See Scheduled
calls .
Scheduled Call Expiration
Expires a scheduled call if the assigned agent does not take the
call. See Scheduled
calls .
Unanswered Call Expiration
Call is ended (fail reason "Failed (Expired)") when an inbound
call remains unanswered in queue for a set duration from 30 to 1440
minutes.
Note : This setting is used for incoming calls and
overcapacity callback calls.
Unanswered Transferred Call Expiration
Expires all unanswered transferred calls and unanswered deflected
callbacks in queues when the wait duration in the queue reaches the time
configured. The timer starts when the call is transferred to the
destination queue.
Call History
Select this option to enable this feature for all agents. This option is
disabled by default. If selected, agents will see a list of the calls completed
in the last 30 days and associated metadata such as time stamps, call duration,
and disposition notes in the Call Adapter. Agents will also be able to choose to
call the end-user back. For more information, see the
Agent Call Adapter user guide .
Hold Time Counter
Select the option to show the hold time counter on adapter while
the call is on hold to the agent. Hold time is not carried
over for transferred calls.
Fallback IVR navigation (No IVR selection from end-user)
If a customer reaches your queue and does not select any options,
you can choose the path they are directed to. Set the number of times
the IVR menu will repeat, then the action after the menu is
repeated.
Select the first available menu : Of the options
given to the caller, this option automatically places them in the first
menu option available to them.
Select the last available menu : If the caller does not
make a selection after the selected number of repetitions, this option
automatically places them in the previous menu.
Direct to voicemail : The customer will be
redirected to voicemail.
End call : The caller will be
disconnected.
Select a specific menu : The caller will be routed to the
menu of your choosing. Select your menu language, then choose from the available
options.
IVR - End User Dial '0' Behavior
Choose routing when 0 is dialed:
Dialing '0' moves user back up one level in IVR :
If there are multiple menu levels, the caller will be routed to the
queue one level back.
Dialing '0' transfers user to another queue : The
caller will be transferred to the queue selected in the search field.
Setting can be done globally per-language by using the language
drop-down.
Dialing '0' results in no action by the IVR : The
IVR won't respond when a caller presses 0.
Enable queue level Dial '0' override behavior : When
enabled, dial '0' behavior can be set per-queue, from
Settings > Queue .
Custom Callback Number Option
When the callback option is enabled in Call settings: Overcapacity
deflection and caller announcements , the caller may
want to be called back on another number than the one they have dialed
in from, or may not have a caller ID. Enabled this feature to allow the
caller to enter their preferred phone number to receive the callback
call.
Queue selection for outbound calls
To let agents select the queue that they want to use to make an outbound
call, select the Allow agents to select a queue for Agent initiated outbound
call checkbox. Queue selection is limited by the following restrictions:
Agents can only select queues that they are assigned to.
Agents can't select queues for global outbound phone numbers or
direct-to-agent phone numbers.
To restrict the queue selection to the queues that are available to the
outbound phone number, select the Allow only queues to those available for
the selected outbound number checkbox. This checkbox appears when you select
the previous checkbox.
You can
prevent agents from selecting a queue for an outbound call if you need to.
Skip the connecting message playback
A connecting message is the message that an end-user hears while the system is connecting their call to an agent—for example, "Please wait while we connect your call to the next available agent." For more information about connecting messages, see Configuring IVR messages .
You can configure your instance to skip playback of the connecting message to shorten the time it takes to connect a call. To do this, for Connecting Message playback , select the Skip the Connecting Message playback checkbox.
Pre-session SMS Deflection
Pre-session SMS Deflection allows for more effective channel use and a speedier
support experience for callers. Pre-session SMS Deflection lets you to offer SMS
chat support as an alternative option for IVR callers before the call is
connected to an agent. This feature is configured at the IVR queue level and can
be offered to callers conditionally based on the estimated wait times.
Callers who opt-in for the SMS deflection will respond to an incoming SMS to
continue their support session over an established SMS. Once the SMS is
successfully delivered, the call will be terminated automatically.
Note: This product will support SMS in English (US) language only and available
for the IVR channel only. Prerequisites
In order to enable the Pre-session Deflection, you must have the following:
A valid CCAI Platform account with Admin role assigned
A valid Legacy, Pro, Enterprise, or Digital License Package
A valid subscription for CCAI Platform IVR Support with IVR enabled
A valid subscription for CCAI Platform SMS Support enabled with a
valid queue structure
The SMS must be functional (agent assigned)
Basic configuration
Do the following procedures, in order:
Enable pre-session SMS deflection
Enable and save the pre-session SMS deflection offer and opted-in messages
Enable and save the pre-session SMS deflection greeting message
Configure pre-session SMS deflection for a specific queue
Enable pre-session SMS deflection
Go Settings > Call.
Go to the Pre-session SMS Deflection section and click the toggle to the
on position.
Enable and save the pre-session SMS deflection offer and opted-in messages
Go to Settings > Languages & Messages.
Go to Audible Messages > Pre-session SMS Deflection .
In the Pre-session SMS Deflection Offer Announcement message box, enter
or upload the global audio message that will announce the availability of
the SMS Deflection as an option for IVR callers.
Message Example: Thank you for calling us. Your estimated wait time is
@{ESTIMATED_WAIT_TIME_IN_MINUTES}. An agent will be happy to help you over
SMS. To continue this help session over SMS message, press 1. To speak to an
agent, press 2.
In the Pre-session SMS Deflection Opted-in Announcement message box,
enter or upload the global audio message that will acknowledge the
consumer's choice to opt for the SMS Deflection as an alternative to the
current IVR call.
Message Example: You've chosen to continue this session over SMS. An SMS
message with the next steps is sent to the phone number you are calling from.
Stay on the line and when the session is successfully converted to SMS, this
call will be automatically terminated.
2. Click Apply to save the messages.
Enable and save the pre-session SMS deflection greeting message
Go to Settings > Languages & Messages.
Go to SMS Messages > Pre-session SMS Deflection .
In the Pre-session SMS Deflection Greeting message box, enter the global
SMS message that will be sent to the consumer after they have opted for the
SMS deflection.
Message example: Hi @{END_USER},
Thank you for opting to continue your help session over SMS. A representative
will be joining this conversation shortly. Meanwhile, let us know how can we
help you today
4. Click Apply at the bottom of the SMS Messages section to save the
message.
Configure pre-session SMS deflection for a specific queue
Note: This setting is only available for a leaf queue.
Go to Queue Settings > IVR .
Click the leaf-queue that you want to configure. For this step, you
must use a leaf-queue (the lowest level queue) so that Pre-session SMS
Deflection is available as a settings option on the right-side panel.
On the Queue Settings side panel, go to the Pre-session SMS Deflection
section.
Click the Expand button to view the Pre-session SMS deflection section.
The Pre-session SMS Deflection section is displayed.
Click the Configure SMS Queue Settings link.
In the SMS Queue selection field, search and select the destination SMS
queue where the consumers will be deflected when they opt-in for SMS
deflection.
Click Save to save the SMS queue selection.
Click the Back to Settings link. The Pre-session SMS deflection section
is displayed with the updated SMS queue selection.
Switch the Enable session deflections to SMS channel toggle to ON.
Click the Set Pre-session SMS Deflection button. The Pre-session SMS
Deflection feature is now enabled for the specific IVR queue.
Optional configurations
Scenario 1 : Trigger the pre-session SMS deflection only when the estimated
wait time is over a certain time limit for a specific IVR queue.
Navigate to the Pre-session SMS Deflection configuration page of the IVR
queue where you want to set up the Estimated Wait Time limit.
Under the Conditional Settings section, select the Estimated Wait Time
limit over which the Pre-session SMS Deflection must be triggered.
Select the Enable Pre-session SMS Deflection checkbox.
Click Save .
The Pre-session SMS deflection will now be triggered in the specific IVR queue
only when the queue estimated wait time exceeds the set threshold when enabled.
Scenario 2 : Announce custom, queue-specific \ audible messages.
Navigate to the Pre-session SMS Deflection configuration page for the IVR
queue where you want to set up custom audible messages.
Go to Messages and Announcements > Audible Messages .
Select the checkbox of the audible message that you want to customize for
the specific IVR queue. The message configurations are displayed.
In the message configurations, enter or upload the audio message that will
be announced to the IVR callers for that specific queue.
Click Save . The Pre-session SMS Deflection feature will now announce
queue-specific custom audible messages for the specific IVR queue when
enabled.
Scenario 3 : Announce custom, queue-specific pre-session SMS deflection SMS
message when a caller opts in for SMS deflection.
Navigate to the Pre-session SMS deflection configuration page of the IVR
queue where you want to set up the custom SMS message.
Go to Messages and Announcements > SMS Messages .
Select the checkbox for Customize Pre-session SMS Deflection greeting
message
In the message configurations, enter the SMS message that will be triggered
for consumers of that specific IVR queue when they opt-in to using SMS
messages instead of IVR support.
Click Save .
Flexible inbound call handling
The flexible inbound call handling feature gives Agents the flexibility to
manage inbound call sessions using the Agent Adapter. Agents can select the CRM
account and CRM record the session should be associated with during the call or
during wrap-up.
Account or record selection
CCAI Platform temporarily stores all events/info/data that happen
during the call until an Account or Record is assigned either by an Agent or by
the system. The system automatically makes a selection following the standard
rules for Account or Record choice if the Agent doesn't assign a selection.
Then, once the Account or Record is assigned (either automatically or by an
Agent), the data is pushed to the selected CRM record.
More details:
Users can map specific fields of matching results to display in the Agent
Adapter UI.
The agent's selection of account or record is preserved in the drop-downs
when moving from call screen to wrap-up screen. If the agent has not
assigned an account or record but has made the selection in the drop-downs,
that selection will be assigned once the call or wrap-up ends (based on the
configuration).
The system will always create a new account and record for Anonymous calls
(hidden Caller ID).
When a call is escalated from Voice Virtual Agent to a Human Agent, the UI
is presented to the Human Agent.
This feature is NOT available when an agent listens to a voicemail.
Transfers
When a call is transferred from Agent 1 to Agent 2, Agent 2 can select the
account or record unless Agent 1 has already made the selection. In this case,
Agent 2 will see but not edit the assignments made.
Recovery calls
If an agent assigns an account or record and then uses the Hang up and
Callback option, the adapter will show the previous account or record
selection.
Mobile and web SDK calls
If the caller's phone number is not available, but User email or User ID is
passed using the SDK, then the record drop-down is available.
Available session types
This flexible inbound call handling UI will show when the call session is one of
the following types: Voice Inbound (IVR), Voice Callback (Web), Voice Scheduled
(Web), Voice Inbound (Mobile), Voice Inbound (IVR using Mobile), Voice Scheduled
(Mobile), & Voice Inbound (API).
CRM integration behavior
Since this feature allows agents to select the record or account for the
sessions to be associated with during the call and during wrap-up, the CRM
integration behavior is impacted.
When data is sent:
The CRM record creation will be delayed until the Account or Record
assignment is made by the Agent or by the system.
Once the assignment is made, CCAI Platform will push any data to
the record in the CRM.
Agent UI
CCAI Platform uses the caller's phone number or UID to lookup the
matching Account and Record, presenting the Agent with any matching options.
Default selection and options
If there are one or more matching accounts, the account drop-down will be
preloaded with the most recently created account.
The agent can also select another account OR Create a new account option
if enabled.
If there are no matching accounts, Create a new account is the only
option. This cannot be disabled.
Salesforce-specific configuration options that impact available options
If Attach CCAI Platform Sessions directly to the account lookup
object option is enabled in Settings > Developer, then the record
drop-down is hidden.
If the Leads lookup object is selected, then the record drop-down is hidden.
Default selection and available options
If Append call or chat session to the latest open case in the same leaf
queue option in Case Creation Details is enabled, the latest open record
in the same leaf queue is preloaded.
When Also append to closed records in the same leaf queue, when closed with
the last _ days is enabled, the latest record in the same leaf queue is
preloaded.
The agent can also select Create a new record OR the agent can select
another record.
If there are no open records for the selected account, the record drop-down is
prepopulated with the Create a new record option . This cannot be disabled.
If Append call or chat session to the latest open case in the same leaf
queue option in Case Creation Details is disenabled, the default selection
is New Record .
Assign button
The Agent must apply the account or record selection by clicking the
Assign button.
Until Assigned is clicked, the Agent can freely select different accounts
and records.
Once clicked, CCAI Platform associates the account or record with the
session and starts pushing data to the record. This assignment cannot be changed
in the Agent Adapter, but can likely be changed manually in the CRM depending on
your CRM settings.
Configure flexible inbound call handling
Go to Settings > OperationManagement .
Go to the Inbound call section and mark the checkbox next to
Prompt agents to select account and record (when applicable) to enable
this feature.
Click Allow agent to select "Create a new account" option even when
matching accounts are detected if this option suits your organization's
needs. The "Create a new account" option is always available if there are
no matching accounts.
Mark the checkbox to allow Agent to have access to Not Create a Record.
Recommendation: Restricted access to this option as
CCAI Platform is unable to retroactively retrieve information lost
if a record is not created in your CRM (due to an agent selecting this
option resulting in the agent not creating a record).
For the Automatically select account and record option, select if you
want the system to automatically assign the account or record when the call
ends, or after the call wrap-up ends.
If auto wrap-up for calls is disabled, "when call ends" is the only
available option.
Agent experience
The Agent's available options rely heavily on the CCAI Platform portal
configuration as well as which records and accounts match the incoming call
session. Review the Feature Details and Agent UI sections for variables.
When a call comes in, the agent will be presented with options to:
look up and select from matching account(s) to create a new account
select an existing matching record(s), or create a new record.
Once selections are made, click Assign .
If disposition codes or notes are also enabled, the agent will see the flexible
inbound screen first, then the Disposition & Note selection UI.
Click-to-call
With click-to-call, agents using supported CRMs click a phone number in their
CRM to start a call. You can use click-to-call with the following CRMs:
Salesforce, Kustomer, ServiceNow, Zendesk, and Microsoft Dynamics. For more
information, see the following:
Salesforce : Outbound click to call
Kustomer : Kustomer click to call
ServiceNow :
Add Click to Call to the top of the form
Show the dial pad screen
If you have a CRM configured for click-to-call, you can configure your instance
to display the dial pad screen after an agent clicks a phone number in the CRM
but before a call starts. This lets the agent make changes on the dial pad
screen. For example, agents can add or change the country code, edit the phone
number, or change the outbound number, language, or queue. Giving agents the
opportunity to add an area code to a phone number is particularly important in
cases when the area code isn't included in the CRM record.
To show the dial pad screen for click-to-call, follow these steps:
In the CCAI Platform portal, click Settings > Operation
Management . If you don't see the Settings menu, click menu Menu .
In the General pane, go to the CRM Operations section.
Select the Show dialpad before starting the call checkbox.
Note: If your CRM is configured for flexible outbound
dialing , the Show dialpad before starting the
call checkbox is selected and can't be cleared.
Click Save General .
Flexible outbound dialing
If you're using Salesforce or Zendesk, you can configure your CRM for flexible
outbound dialing. With flexible outbound dialing, the dial pad always displays
before a call starts. For more information about setting up flexible outbound
dialing, see:
Flexible outbound dialing (for
Salesforce)
Flexible outbound dialing (for Zendesk)
For more information about using flexible outbound dialing, see Make an
outbound call using flexible outbound
dialing .
Custom UID support for IVR
By default, CCAI Platform uses the ANI (incoming phone number) to look
up the contact object in your CRM. Once there's a match, CCAI Platform
then displays an existing CRM ticket or opens a new ticket based on your
environment settings. In the case that you don't have phone numbers stored in
your CRM, or prefer to use a Unique ID (UID) for this contact lookup instead,
CCAI Platform can deliver the same seamless experience.
Example use cases:
Phone numbers are not stored in your CRM.
Your system's UID is more accurate than the incoming phone number within
your specific system configuration.
Steps to configure
Contact Support to start the setup process and provide API details.
Support will work with you to configure this experience and test the
configuration is returning the correct UID.
Call Settings: Overcapacity deflection and caller announcements
When there are no agents available and wait times are high, Admins can configure
various experiences for consumers.
The Call Settings page enables the following settings, and the
Languages and Messages page offers the configuration for voice recordings or
Text-to-Speech prompts that are required after certain settings are
enabled. Be sure to add the appropriate messages once announcements or
deflections are enabled.
After hour deflection
When After Hour deflection is enabled, calls will be deflected based on the
specific operation hours for the queue or language the caller has selected or
has been routed to. There are multiple options you can offer callers once this
setting is enabled.
Overcapacity deflection
Overcapacity deflection occurs when a call enters a queue and is not answered
within amount of time that you set ("Deflect calls in a particular queue if wait
time in the queue is > set duration") AND the
estimated wait time (EWT) is
greater than the amount of time that you set. The system then deflects the call
based on the deflection options that you configure.
Caller messages: the Overcapacity message will play, then the Overcapacity
Options message plays one time. If nothing is selected, "keep waiting" will be
auto-selected, If the Keep Waiting option is selected, the options will repeat
at the set interval.
Agent call messages and notifications
You have flexibility based on your individual contact center environment to
change how often the agent hears call alerts, what the alert sounds like, and
also options for more detailed audible call announcements.
Order of caller announcements
CCAI Platform has many options that might or might not be enabled for
your environment. If you are using all of the following features, all
announcements will be played. If you aren't using overcapacity, or CSAT, or call
recording, those specific messages will be skipped.
Overcapacity deflection message (if enabled)
Estimated wait time announcement (if enabled)
Connecting Message
Record a Call Message (if enabled)
Pre-Call Notification of CSAT survey (if enabled)
Any other messages (if applicable)
Wait Time SMS consent voice readout (if enabled and "keep waiting" is
selected)
Configure call settings
This section explains configuration options in CCAI Platform.
Universal caller announcement intervals
Announcements such as Overcapacity, CSAT, and Estimated Wait time are set with
one global setting.
Go to Settings > Call.
Go to Caller Announcements.
Set the duration in minutes and click Set Caller Announcements to save.
Enable overcapacity deflection globally
Toggle IVR - Enable Overcapacity Deflection to On to deflect
customers calling in using IVR when the wait time in queue is greater than
the specified duration set in the next step.
Set the duration a caller should wait in queue before hearing overcapacity
options. The duration is set by the Universal Caller Announcement
Intervals timer.
Click the Mobile and Web SDK - Enable Overcapacity Deflection toggle to
the on position to deflect customers reaching out using Mobile and Web
channels when the wait time in queue is greater than the specified duration.
The overcapacity deflection threshold is reached when a call is placed in a
queue and is not answered within the set amount of time. When the estimated wait
time is greater than the set amount of time, the call is deflected instead of
being placed in the queue.
Enable overcapacity deflection at the queue level
To enable overcapacity deflection at the queue level, follow these steps:
In the CCAI Platform portal, click Settings > Queue . If you don't
see the Settings menu, click menu
Menu .
In the IVR (Interactive Voice Response) pane, click Edit / View .
Click the queue that you want to edit.
For Overcapacity Deflection , click Configure . The Overcapacity
Deflection pane appears.
Click Overcapacity Deflection to the on position and choose from the
following settings:
Message: Plays the message typed (for example, "We are experiencing
high volume") and then ends the call. You will see a banner advising you to
configure a message if this option is selected. You can click the
Overcapacity Deflection Messages link to go to the right section in the
menu.
Queue: Select from available queue menu options to redirect the call
to.
Phone Number: Redirects to the number entered.
Voicemail: Redirects the caller to leave a voicemail.
Callback: Keeps the caller's place in the queue and ends the call.
The caller receives a callback when they are at the top of the queue.
This setting uses the Overcapacity Deflection Callback Option
message. This should be configured in Settings > Languages &
Messages . For more information, see
Configure IVR messages .
Keep Waiting: The end-user remains in the queue until an agent is
available.
You can also change the wait time in the Overcapacity Deflection
Criteria setting. Use the drop-down to change the amount of wait time.
Click Save .
Enable conditional overcapacity deflection globally
To turn on overcapacity deflections globally, follow these steps:
In the CCAI Platform portal, click Settings > Call . If you don't
see the Settings menu, click menu
Menu .
Go to the Caller Announcements pane, and then do one or both of the
following:
Click IVR - Enable Overcapacity Deflection to the on position.
Click Web & Mobile - Enable Overcapacity Deflection to the on
position.
For Enable conditional overcapacity deflection , select either
Estimated Wait Time or Time of the Day , depending on the deflection
criteria that you want.
For Estimated Wait Time , configure your wait time options. For each
wait time option, click Configure to configure deflection actions and
set up deflection messages. Configure messages for each available
language.
For Time of the Day , configure your hours of deflection by time
interval. You can configure up to five deflection options for both
weekday and weekends. For each deflection option, click Configure to
configure deflection actions and set up deflection messages. Configure
messages for each available language.
Click Save Caller Announcements.
Select mobile and web SDK call deflection options
When selected, visual options will be displayed when either outside of operating
hours or when the estimated wait time is higher than the set Overcapacity
threshold. The regular Call or Chat options won't appear in the UI and the
options you select in this section will be the only options available.
After Hours Deflection : Deflects customers by presenting alternative
options. See After Hour Deflection for Calls and
Chats
for details.
Overcapacity Deflection : When the estimated wait time is greater than
the overcapacity threshold, the selected options will be presented.
Scheduled Call : Option for the consumers to schedule a time to
request a callback. See Scheduled calls .
Email
Web SDK: gives the customer the email address to contact.
Mobile SDK: default email app is launched with:
- Email address in the \" To \" field .
- Data like app version and device type call be added to the email
body .
- Subject \" Support for \ [ queue path \ ] \" .
Email address is set in Settings > Support Center Details.
Phone Number : Only for mobile. Deflects consumers to another phone
number. Shows as "Call now" and displays the number the phone will be
dialing.
Voicemail : Only for mobile. Allows customers to leave a voicemail.
Shows as "Leave a callback message." Voicemails will be delivered to
agents assigned to the selected queue menu for calls.
IVR call deflection options
After-Hours Deflection : During the set hours in Support Center Details,
calls will deflect to the selected option. See After Hour Deflection for
Calls and
Chats .
Overcapacity Deflection When enabled, the "Overcapacity Deflection" and
"Overcapacity Deflection Options" messages will play, as well as specific
recordings for options like "Overcapacity Deflection Callback Option."
When you add or remove options, be sure to update the message that lists the
options callers have, otherwise, callers won't know the new options exist.
These messages can be configured in Settings > Languages &
Messages .
Queue: Deflects callers to another queue when the Overcapacity
threshold is reached.
Phone Number : Deflects caller to another phone number.
Voicemail : Allows caller to leave a voicemail. Agents assigned to
the queue that was called will be alerted of new voicemails.
Optional setting to limit the number of voicemails left by a consumer.
CCAI Platform looks to see if a voicemail is already left from
the incoming number and can block new voicemails from being recorded. When
enabled, configure the TSS or upload a custom greeting in Settings
> Languages & Messages |
Deflection to Voicemail option - Request Already Placed Message.
- Limit consumer to 1 voicemail per queue: a consumer could leave
a separate voicemail request on a separate queue.
- Limit consumer to 1 voicemail request across all queues:
voicemail option not available if an unattended voicemail is
already left form the phone number.
Callback : The customer can choose to receive a callback retaining
their place and priority in queue. The system will call the phone number
they used to dial in when they are next in queue and the call will be routed
to an agent the same as a standard incoming call. For more information, see
the Custom callback number section of this
document.
Timeout behavior : If the caller selects the callback option and the queue
goes into after hours before the call is answered, the caller waits until
the call times out based on the Unanswered Call Expiration set on the
same Call Settings page. For more information, see the Call
details section of this document.
Optional setting to limit the number of callback requests placed by a
consumer. If a callback request was already placed from the incoming
number, new callback requests will be blocked. When enabled, configure
the TSS or upload a custom greeting in Settings > Languages &
Messages | Overcapacity deflection callback option - Request
Already Placed message.
- Limit consumer to 1 callback request per queue: a consumer could
leave a separate callback request on a different queue than the
first request.
- Limit consumer to 1 callback request across all queues.
Keep Waiting : Allows caller to continue waiting in the queue.
Note: When multiple options are selected in settings, the caller will be
prompted with the selected options and able to choose one selection.
Click Set Deflection to save the settings.
Custom callback number
When a caller leaves a voicemail or selects the overcapacity callback option,
CCAI Platform will use the phone number from which they dialed.
However, sometimes a caller wants to be called back on another number. For
example:
The consumer called at work and would like to be called on their personal
phone number.
The consumer is calling from a blocked number.
The consumer is calling from an office, where the outgoing number does not
reflect their extension.
CCAI Platform will prompt the caller to enter their phone number,
communicate the number with your CRM, and facilitate the callback as usual.
Feature specifics and expected behavior
This section describes the expected behavior for each available feature.
Blocked or unknown caller behavior
CCAI Platform checks for blocked numbers and automatically triggers the
custom callback flow.
Overcapacity callback
The consumer is prompted to leave a phone number to receive the callback
call.
If the caller leaves a valid number, they will receive a callback call when
they are next in the queue.
If the caller does not leave a valid number, they won't receive a callback
call since there isn't a number to dial to reach them.
Voicemail
The caller is prompted to leave a phone number to be called back on before
leaving a voicemail.
If the caller enters a valid number, they will be prompted to leave a
voicemail.
If the caller does not enter a valid number, the call will end as there is
no number to dial to reach them after the voicemail is received.
CRM behavior for non-blocked callers
When a call comes in, the new number is recorded in the CRM record. After
CCAI Platform looks for the contact based on the incoming phone number,
3 possible actions will take place.
No contact with a matching phone number is found.
CRM will create a new contact.
Incoming phone number is added as the primary number on the contact.
Post comment in the CRM record.
Incoming Phone Number: <Phone Number>.
Callback Number: <Phone Number>.
Existing contact with a matching phone number is found.
Existing contact is updated.
Incoming phone number is added as the primary number on the contact.
A comment is posted in the CRM record.
Incoming Phone Number: <Phone Number>.
Callback Number: <Phone Number>.
Multiple existing contacts matching the phone number.
The CRM and CCAI Platform will find the most recently created
contact.
The incoming phone number is added as the primary.
Post comment in the CRM record.
Incoming Phone Number: <Phone Number>.
Callback Number: <Phone Number>.
Custom callback call
Overcapacity Callback: Checks for the number entered and uses the custom
callback number if entered.
Voicemail: Once the agent has listened to the voicemail, they will be given
the option to call the consumer back, and the entered custom callback number
will be used
What happens when a consumer hangs up before completing the flow?
Consumer hangs up without leaving or confirming a phone number and the
incoming phone number is not blocked.
The system will call the consumer back with the incoming phone number.
Consumer hangs up without leaving or confirming a phone number and the
incoming phone number is blocked.
Consumer won't receive a callback call.
International callers
When entering the callback number, the consumer does not enter the country code.
CCAI Platform will gather the country code:
Based on the phone number the consumer is calling from.
The call-back number is interpreted as [the country code (extracted) +
the consumer entered number].
If the phone number is blocked and therefore the country code not available,
the country code is taken from the IVR number the consumer called into.
Examples:
If a consumer dials a UK number from a UK phone and does not enter UK
country code [44], the number will be stored with +44 and the callback
call will take place as usual since the correct number is stored.
If the number is blocked, and the caller is calling into a UK number from a
phone number with a US country code, the callback won't take place since
there will be an incorrect number stored for the caller [UK +44 (extracted
from inbound IVR number + consumer entered number].
Valid and invalid numbers
Once the caller enters the phone number, CCAI Platform checks for the
validity of the number. If it's not valid the consumer will be asked to enter
the number again.
For US numbers : number must be 10 digits.
International numbers : after the country code is determined, phone number
validation is run based on the number format of that country.
Configuration for valid or invalid numbers
This section explains configuration options in CCAI Platform.
Default messages
There are 2 messages that are not customizable and will be played during the
custom callback flow. The messages will be translated into all languages and use
the Text-to-Speech voice specific to each language.
Phone Number Confirmation Message
If the phone number <Phone Number> is correct, press 1 to confirm. If that
number is not correct, press 2 to try again.
Phone number invalid
Sorry, that number won't work, please try again.
Upload custom messages
Go to Settings > Languages & Messages .
Go to the Custom Callback Messages section.
If you are using Voicemail, record the 3 voicemail greetings.
Record the following 3 greetings for callback calls.
Repeat for any other languages you have enabled.
Click Apply after updating each language.
Configure Custom Callback
All blocked or unknown numbers will automatically be prompted to enter a custom
callback number.
Enable for all callers and set retry threshold
Follow these steps to enable the feature when any caller selects overcapacity
callback or leaves a voicemail.
Go to Settings > Call .
In the Custom Callback section, check to enable "Allow consumer to
leave a custom call back phone number" if you would like every caller to
get the option to leave a different number than the number from which they
are calling when:
-Leaving a voicemail.
-Selecting the callback option for overcapacity.
Set the number of times a consumer can try to leave a phone number before
the system times out and ends the call. If the number entered is invalid,
the consumer will be asked to try again.
Click Set Call Details to save.
Callback fulfillment hours
You can define callback fulfillment hours at the global and queue level. Use
callback fulfillment hours to automatically reschedule callbacks to the next
business day when they fall outside of a configured window, rather than
cancelling them when queue expiration is reached. This section explains how to
set global and queue-specific callback hours and how to enable the next-day
rollover capability.
Important: Callback fulfillment hours aren't available by default. To use this
capability, ask your Google contact to turn it on for your instance.
Before you begin
Before you begin, turn on IVR OverCapacity deflection.
Add callback hours
To add callback hours, follow these steps:
Go to Support Center Details > Hours of Operation .
Click Add Callback Hours .
Fill out the following information:
Name
Time zone
Days and hours of operation
Holidays to observe
Click Save .
Note: Configure the callback fulfillment hours in the same timezone as the
operating hours of the queue that they're assigned to.
Enable callback fulfillment hours globally
To enable callback fulfillment hours globally, follow these steps:
Go to Settings > Calls > Callback Settings .
In the Define Callback Fulfillment Hours field, select the hours of
operation.
Toggle Enable Callback Rollover to Next Day to the on position if you
want callbacks outside of these hours to be rescheduled.
Click Save Callback Settings .
Enable callback fulfillment hours at the queue Level
You can specify different fulfillment hours for individual queues. Queue-level
settings override global settings.
To enable fulfillment hours at the queue level, follow these steps:
Go to Settings > Queue > IVR > [select queue] > Callback Settings .
In the Callback Settings pane, go to the Callback Fulfillment Hours
section.
In the Define Callback Fulfillment Hours field, select the hours of
operation.
Toggle Enable Callback Rollover to Next Day to the on position.
Click Save .
If callback hours are deleted or unspecified, the system defaults to regular
hours of operation.
Callback behavior
This section explains how the system handles callbacks, based on your
configuration:
Within callback hours : Callbacks are offered and performed normally.
Outside callback hours (rollover disabled) : Callbacks are still offered
to customers but are cancelled immediately if they fall outside of the
fulfillment window.
Outside callback hours (rollover enabled) : Callbacks are offered,
scheduled, and automatically rolled over to the next business day at the
start time of that day's fulfillment window.
Prioritization : Regular hours of operation are always checked before
callback fulfillment hours. Execution only occurs when both windows overlap.
Automatic cancellation : Rolled-over callbacks are cancelled if the
queue is deleted, human agents are no longer assigned to the queue on the
next business day, or the fulfillment hours are deleted.
Unanswered call expiration : The default value is 120 minutes. If a call
is queued before the callback hours end time and stays as a deflected
callback call for over 120 minutes, the call expires and isn't re-scheduled.
When traffic is expected to be very high, set the Unanswered Call Expiration
duration accordingly.
User experience and reporting
CRM integration : The original CRM ticket updated during the inbound call
is reused to record the rescheduled callback activity.
Agent interface : Agents receive these as a new session type on the
following business day.
Data privacy : Callback phone numbers are automatically deleted from
schedules after the call is created.
Read out a phone number in a voicemail or callback message
You can use the @{END_USER_NUMBER} variable to read out the end-user's phone
number in a message to leave a voicemail or request a callback. Reading out the
end-user's phone number helps them confirm whether they want to use it or input
a different number.
Before you begin
Be sure that your instance is configured for overcapacity deflection. For more
information, see [Overcapacity deflection][overcapacity-deflection] and
[Overcapacity deflection per-queue][overcapacity-deflection-per-queue].
Read out the end-user's phone number at the global level
To read out the end-user's phone number at the global level, follow these steps:
In the CCAI Platform portal, click Settings > Languages &
Messages . If you don't see the Settings menu, click menu Menu .
Go to the Custom Callback Messages section.
For Voicemail - Request Phone Number or Callback - Request Phone
Number , include the @{END_USER_NUMBER} variable in the
text-to-speech field. Here's an example: "I see you're calling from
@{END_USER_NUMBER}. To receive a callback to this number, press 1. If you'd
like to receive a callback from a different number, enter the number and
then press the pound key."
Click Save .
Read out the end-user's phone number at the queue level
To read out the end-user's phone number at the queue level, follow these steps:
In the CCAI Platform portal, click Settings > Queue . If you don't
see the Settings menu, click menu
Menu .
In the IVR (Interactive Voice Response) pane, click Edit / View .
Click the queue that you want to edit.
In the Settings pane, go to the Caller Announcements section.
For Overcapacity Deflection , click Configure .
Go to the Overcapacity Deflection Messages section.
For Voicemail Option - Request Phone Number Message or Callback Option
- Request Phone Number Message , include the @{END_USER_NUMBER} variable
in the text-to-speech field. Here's an example: "I see you're calling
from @{END_USER_NUMBER}. To receive a callback to this number, press 1. If
you'd like to receive a callback from a different number, enter the number
and then press the pound key."
Click Save .
Phone number management
Phone number management settings offer you the ability to configure outbound
calling preferences. The following list outlines available options:
Store and label numbers for easier recognition.
Give agents the ability to set a favorite outbound number or choose from a
list of other assigned numbers when making calls.
Allow end-users to reach specific agents or sales representatives through
their individual assigned numbers.
Automatically include the outbound phone number used for a call in the
default comment that is sent to the CRM system.
Specify which countries or area codes are allowed or blocked for each phone
number.
Locate an entry in the list by Phone Number , Label , or Assigned Queue .
Browse entries page by page with a maximum of 100 per page.
Add a phone number
To add a phone number, follow these steps:
In the CCAI Platform portal, click Settings > Call . If you don't
see the Settings menu, click menu
Menu .
In the Phone Numbers pane, click Phone Number Management . Your phone
numbers appear, with information about each number. The Assigned Queues /
Agents column only displays queues or agents for the following types of
numbers:
IVR (outbound)
SMS (inbound)
SMS (outbound)
WhatsApp
Assigned queue (only for direct numbers)
Assigned agent (only for direct numbers)
Click Add Number . The Add Number dialog appears.
In the Phone Number field, enter the phone number to add.
Select the phone number options that you want. If you want to create a
direct phone number, select Set as a direct number .
In the Label field, enter a label to help you identify this phone
number, and then click Save .
Click Verify Numbers to verify any unverified phone numbers. This checks
whether phone numbers are configured for your CCAI Platform
environment.
Allow or deny international calls
By default, all countries are allowed for international calling. The following
settings allow you to specify which countries are allowed or denied for each
phone number. You can also restrict specific area codes and phone numbers.
After this international calling configuration is set at the phone number level,
you can manage user-level access. See Add and view
users for more information.
Go to Settings > Call > Phone Numbers > Phone Number Management >
+ Add Number . You can also modify an existing number by clicking the
pencil icon on the right-hand side of the screen.
Select This number is restricted to call certain country codes only .
You can specify whether your agents are allowed to call all countries, area
codes, and phone numbers by default. This is a global setting and will
affects all agents. Clicke either Allowed or Denied . If allowed, all
agents will be able to make all international calls unless they are affected
by a rule (set in the following step). If denied, no agents will be able
to make international calls unless they are affected by a rule.
Click Add a rule . You can choose from the following:
Country code : Select the country from the menu.
(Optional) Area code and phone : Enter area codes and phone numbers.
Rule : To apply to this rule, select Allow or Deny .
Agents affected by this rule : Select which agents will be affected.
All selects all agents, otherwise you can search for individual agents by
name.
Save : Saves the rule to the rules table.
Cancel : Discards the rule.
After rules are added, you can click the three dots menu to the right of the
rule to edit or delete it.
Assign numbers to queue menus
Go to Settings > Queue and select IVR or Web.
Select a queue, then go to the bottom of the settings on the right until you
see the Outbound Phone Numbers Settings.
Note: If the outbound numbers are set for a Top-level queue, all sub-queues
will acquire the same number setting unless specific settings for the
sub-queue are made.
Select and set the number you would like to show when outbound calls are
placed from this queue or from agents assigned to this queue.
Select a phone number from the list of numbers you have set up in the
previous steps.
Click Add Number.
Click Set Outbound Numbers.
The phone number is now saved and will be used as the outbound number for
calls from this queue and will show in the queue set up page next to each
assigned queue. In this case, since the setting was for a parent queue, the
sub-queues also have the same outbound number setting.
If multiple numbers are added to the queue, a default number must be
set.
Repeat steps 1-4 for any other queues which will have specific outbound
numbers.
Phone number selection in the Agent Adapter
When an agent clicks on the dial option of the adapter, they will now see a
drop-down of the default Global Outbound number as well as any other outbound
numbers which are associated with the queues to which they are assigned.
Agents can also favorite one number so that it shows by default when dialing
outbound.
From the agent adapter, click Dial .
From the number drop-down, select a number from the available options.
Click star icon to favorite an outbound number option.
Search by phone number or label
You can locate an entry on the Phone Number Management page using the
Search Phone Number box at the top of the page. You can search by phone
number, label, or assigned queue.
Type your entry into the Search Phone Number box.
Click the drop-down menu next to the search bar to designate which field you
want to search.
Click back into the search box and hit Enter .
Multi-language support
When using multiple languages, the languages must be marked as Live on the
Languages and Messages page to appear in the language drop-down for agents.
If the language is not Live, the number will still appear but will show in
reporting as the default language, English.
Direct phone numbers
A direct phone number is a unique phone number that you can assign to an agent
or an IVR leaf queue. End-users can use a direct phone number to directly dial
an agent or an IVR leaf queue, bypassing the IVR queue tree structure. Direct
phone numbers honor queue-level deflection settings, and they can be used both
for inbound and outbound dialing. A direct phone number cannot be used for a
global outbound number. For more information, see Phone
numbers .
Direct phone numbers differ from direct access points (DAPs) in the
following ways:
Uniqueness . A DAP is unique only within a queue, while a direct phone
number is unique across your entire CCAI Platform instance. This
means that each direct phone number can be assigned only once, to a single
agent or queue, resulting in unambiguous phone number assignments.
Session type . A call to a direct phone number generates a Voice Inbound
(Direct) session type, while a call to a DAP generates a Voice Inbound
(IVR) session type. This makes is possible to distinguish between the two
types of calls in reporting.
Create a direct phone number
You can create a direct phone number when you add a phone number, or you can
edit an existing phone number to make it a direct phone number.
Create a new direct phone number
To create a new direct phone number, follow the instructions in Add a phone
number . Make sure that you select Set as a direct
number in the phone number options.
Make an existing phone number a direct phone number
To make an existing phone number a direct phone number, follow these steps:
In the CCAI Platform portal, click Settings > Call . If you don't
see the Settings menu, click menu
Menu .
In the Phone Numbers pane, click Phone Number Management .
Click edit Edit for the phone number
that you want to edit. The Edit a Number dialog appears.
Select Set as a direct number , and then click Save . A Direct
label appears next to the phone number. If this phone number is used as an
outbound phone number for an agent or queue, that assignment is removed.
Assign a direct phone number
You can assign a direct phone number to an IVR leaf queue or to an agent.
Limitations
When you assign a direct phone number, you must stay within these limitations:
Each direct phone number can be assigned to only one IVR leaf queue or
agent.
An agent can have no more than five direct phone numbers assigned to them.
An IVR leaf queue can have an unlimited number of direct phone numbers assigned
to it.
Assign a direct phone number to a queue
To assign a direct phone number to an IVR leaf queue, follow these steps:
In the CCAI Platform portal, click Settings > Queue . If you don't
see the Settings menu, click menu
Menu .
In the IVR (Interactive Voice Response) pane, click Edit / View .
Click the queue that you want to edit.
In the Settings pane, go to Inbound Phone Numbers , and then click
Configure . The Inbound Phone Numbers pane appears.
Click Assign Number .
In the Assign Number field, select the direct phone number that you want
to assign to the queue, and then click Assign . The phone number should
appear under Assigned inbound phone number .
Inbound calls to the assigned direct phone number should go directly to the
queue.
Assign a direct phone number to an agent
To assign a direct phone number to an agent, follow these steps:
In the CCAI Platform portal, click Settings > Users & Teams . If
you don't see the Settings menu, click menu Menu .
For the agent that you want to edit, click more_horiz More , and then click Edit
user . The Edit a User dialog appears.
Next to Direct Inbound , click expand_more Expand more .
Click Assign Number .
In the Assign Number field, select the direct phone number that you want
to assign to the agent, and then click Assign . The phone number should
appear under Assigned inbound phone number .
Inbound calls to the assigned direct phone number should go directly to the
agent.
Assign direct phone numbers using the bulk user management template
You can assign multiple direct phone numbers to an agent in bulk using the bulk
user management template . You can make this
assignment while adding a new user or updating an existing user.
To assign multiple direct phone numbers to an agent, follow the instructions in
Bulk user management: Upload new or updated users
while following these guidelines:
Stay within the limitations for assigning direct phone
numbers.
Ensure that the phone numbers that you include in the template have been
added to CCAI Platform and verified. For more information, see Add
a phone number .
If your attempts to assign direct phone numbers fall outside of these
guidelines, the assignment fails and an error message is added to the error log.
For more information, see
Bulk user management: Upload new or updated
users .
Remove a direct phone number
You can remove the direct phone number designation from a phone number. After
doing this, any assignments to an agent or queue for that direct phone number
are removed.
To remove the direct phone number designation from a phone number, follow these
steps:
In the CCAI Platform portal, click Settings > Call . If you don't
see the Settings menu, click menu
Menu .
In the Phone Numbers pane, click Phone Number Management .
Click edit Edit for the phone number
that you want to edit. The Edit a Number dialog appears.
Clear Set as a direct number , and then click Save . The Direct
label no longer appears next to the phone number.
Configure a direct phone number
You can configure some CCAI Platform behaviors related to direct
inbound calls. Keep the following in mind when configuring inbound phone
numbers:
The only type of queue where an agent can decline a direct inbound call is a
queue configured for deltacast.
If you enable agents to decline direct inbound calls, and an agent in a
deltacast queue declines a direct inbound call, the call goes to the next
agent. If all agents decline the call, the call switches to a multicast
projection, where agents cannot decline calls.
To configure a direct phone number, follow these steps:
In the CCAI Platform portal, click Settings > Call . If you don't
see the Settings menu, click menu
Menu .
Go to the Direct Inbound pane.
Under Direct Inbound Calls , select the options that you want, and then
click Save Direct Inbound .
Record direct inbound calls
You can configure CCAI Platform to record inbound calls on direct phone
numbers.
To record direct inbound calls, follow these steps:
In the CCAI Platform portal, click Settings > Call . If you don't
see the Settings menu, click menu
Menu .
Go to the Call Details pane.
Under Call Recording , click Record Direct Inbound Calls , and then
click Save Call Details .
Agent experience
The agent adapter indicates when an inbound call is to a direct phone number.
Session types for reporting
For reporting, calls to or from direct phone numbers generate the following
session types:
Voice Inbound (Direct) : an inbound call to a direct phone number
Voice Outbound (Direct) : an outbound call from a direct phone number
Voice Internal : an internal call to or from a direct phone number
Estimated wait time announcement for calls
Estimated Wait Time (EWT) Announcements use a calculation to predict the wait
time until a caller is connected with an agent. The announcement plays for IVR
calls.
Feature details
When enabled, Estimated Wait Time is announced when the caller enters the
queue using a custom audio file and Text to Speech voice.
Option to have the announcement repeat or only play one time at the start of
the call.
The Estimated Wait duration is capped at 300 minutes. If the actual wait
time is longer than 300 minutes, the announcement won't go higher than 300
minutes.
TIP: If you'd like callers to hear deflection options immediately
after the wait time notice, enable both Estimated Wait Time and Overcapacity
Deflection. Callers will hear the estimated wait time, then hear
overcapacity options, as long as Overcapacity Deflection is enabled with at
least one option.
Configure estimated wait time
This section explains how to configure this feature in CCAI Platform.
Enable EWT announcement
Go to Settings > Call .
Enable Estimated Wait Time by toggling to On .
Select if the announcement should repeat or only play once. The interval at
which it will repeat is set by the Universal Timer at the top of the
section.
Customize announcement
By default the estimated wait announcement will be announced using a TTS voice:
"Thank you for calling, your estimated wait time is
@{ESTIMATED_WAIT_TIME_IN_MINUTES}." To customize the message follow these
steps:
Record a custom audio file that leaves room at the end for the system to
fill in the variable for what the estimated wait time will be announced as.
Go to Settings > Languages & Messages .
Click Upload in the Estimated Wait Time section.
Click Apply to save.
Call experience flows
Call Flow experience for different call types
Overcapacity Deflection
IVR
Mobile
Afterhours Deflection
IVR
Mobile
Recording Per Queue Option
Temporary Redirect per IVR Queue
Credit Card Over IVR
Scheduled calls
Rather than waiting in queue for an agent, give consumers the option to select a
time that works for them to receive a call from an agent. Scheduled calls can
also be enabled for after hour or overcapacity deflection and are available when
using the Mobile or Web SDK.
Details
With the CCAI Platform Web, or Mobile SDKs, a consumer selects the
scheduled call option and is presented with a list of open time slots in
15-minute increments.
Before the scheduled time (duration is configurable), an agent will be
assigned to the call to ensure the call takes place at the scheduled time.
If no agents are available to be assigned, the call will wait in queue and
be assigned as soon as an agent is available.
When scheduled calls are enabled for queues with Cascade
groups :
If available, an agent from the highest level group will be assigned the
calls first, then the next group in the standard routing order.
If no agents are available to be assigned, the call will wait in queue
and the first available agent from any cascade group will be assigned.
Mobile SDK
Once the time selected is reached, the consumer receives a call using VoIP in
the app and
SmartActions
will be available. If the consumer doesn't pick up the Mobile call,
CCAI Platform will then place another call out to the consumer using a
standard outbound (PSTN) call. During the PSTN fallback call, SmartActions won't
be available. If the consumer doesn't pick up, the call is marked as finished.
Web SDK
Once the time selected is reached, the consumer receives a PSTN call to the
phone number provided when the scheduled call was initiated.
SmartActions
are not available for Web SDK Scheduled calls. If the consumer doesn't pick up,
the call is marked as finished.
For UI and details about the agent and consumer experience, see Scheduled
calls .
Schedule call timeslot logic
The scheduling model is static and calculates how many calls can be scheduled
for a specified period of time, using the following logic:
Agent availability calculation.
Total Slots Available per 15 min interval = .5 x Total Number of Agents
assigned to the Queue.
Operation hours.
Time slots must be in the operation hours of the queue.
If out of operation hours, time slots for the following day will be
offered.
Estimated wait time (EWT).
Based on the current Estimated Wait Time calculation, consumers will
only see time slots that start after the duration of the EWT.
Since time slots are in 15-minute increments, the next slot will be 15
minutes after the EWT duration.
For example, if it's 1 pm and EWT is 35 minutes, the first time slot
will be 1:45 pm.
Configure scheduled calls
This section explains how to configure this feature in CCAI Platform.
Global settings
Go to Settings > Call .
Set the Scheduled calls which controls the duration of a countdown timer
an agent will see before getting assigned to a scheduled call. If the value
is set to 0 minutes, the agent gets assigned the call at the time of the
call and won't see a countdown timer.
Set the Scheduled Call Expiration: sets the threshold for a scheduled
call if no agents are available at or after the selected scheduled call time
or if the assigned Agent does not pick up the call.
Example : Consumer's scheduled call time is 12:00 and all agents are on
calls. If the expiration is set to 15 mins, the scheduled call will be in
queue to be assigned to an agent until 12:15. If no agents are available
during the 15 minutes, the call will expire and the consumer who scheduled
the call won't receive a call.
Click Set Call Details to save.
Enable scheduled calls for after hour deflection
When your hours of operation dictate that live calls cannot be delivered, you
can enable the option for the consumer to be able to select a time slot to
receive a call when your operation is open the next day. See Support Center
Details - Hours of Operation
Settings
for details.
Go to Settings > Calls .
Go to the Caller Announcements section.
Toggle to On to enable after hours deflection.
Mark the checkbox next to Scheduled Call .
Click Set caller announcements to save.
Enable scheduled calls for overcapacity deflection
Overcapacity is active when the wait time threshold is met. You can enable the
option for scheduled calls to show as an overcapacity option so that consumer
can request a call back at a time in which the agents should be available. See
Call Settings: Overcapacity deflection and caller announcements
for more details.
Go to Settings > Calls .
Go to the Caller Announcements section.
Toggle to On to enable Overcapacity deflection.
Mark the checkbox next to Scheduled Call .
Click Set caller announcements to save.
Call recovery features
Once a call is connected to an agent, if that call fails or is unexpectedly
ended from the agent's side, then the call will go into a call recovery flow.
Depending on the type and duration of a failed call, the call recovery can
either be automatic or manually initiated by an agent.
Why calls are unexpectedly ended or dropped
Agent closes active tab or browser in the middle of the call.
Network issues on the Agent's side, for example, Wi-Fi drops, or bandwidth
maxes out.
Network issues on the caller's side.
Mobile SDK: Automatic call recovery
If the agent's connection is interrupted or unexpectedly ended from their voice
provider, CCAI Platform will wait for the agent to be reconnected for
up to one minute. If the agent reconnects, the call will be automatically
recovered and both the agent and caller can resume the same call.
If the agent does not reconnect within one minute, or if the caller hangs up,
the call will be ended and the status will be set to 'Finished'.
Hangup and callback
When an agent is on a call, they have an option to Hang up and call back .
This is useful if there is a bad connection or difficulty hearing the caller.
Clicking Hang up and call back will end the current call and place a new
Outbound call to the caller with a new Call ID. If this call originated as a
VoIP call from the Mobile SDK, VoIP will be used to call the consumer back. If
this was an IVR call or a Mobile SDK PSTN call, the call will be placed back to
the consumer using PSTN.
Short call recovery
If Automatic Wrap up is enabled and the call connects but is ended within 10
seconds of connecting, the call adapter appears with a message "The call was
too short" and provides an option to either Call back , or go Back to
Available , placing them back in Available status.
Clicking the Call back button will place a new Outbound call to the
caller with a new Call ID.
Clicking the Back to Available button will set the Agent's status to
Available.
A Timer also counts down to Automatically set the Agent's status back to
Available. The timer is set for 15 seconds by default.
For more information, see Wrap-up settings .
Voicemail callback
When an Agent listens to a Voicemail they have an option to press the
Call back button. This will place a new Outbound Call and set the status of
the original Voicemail call to 'Voicemail Read.'
Scheduled call recovery
If a consumer scheduled a call using the Web or Mobile SDK, then doesn't pick up
the call at the scheduled time, a Callback option presented to Agent which will
create a new Outbound call. The original call ID will have the fail reason "End
User No Answer."
Because of the unique call type that scheduled calls present, if the Agent
clicks 'Hang up and Callback', this will create a new Inbound call.
Voicemail
Navigate to Settings > Call in the CCAI Platform Console to
enable voicemail. Voicemail settings are global settings and will activate these
features for all agents if enabled.
The voicemail tab in the Agent Call Adapter splits voicemails into mailboxes
based on queues. Each mailbox displays the queue name, queue priority, and the
number of voicemails in each mailbox. Each agent will also have a personal
mailbox for voicemails that have been forwarded directly to them (if the
Voicemail Forwarding feature is enabled). See the Agent Call Adapter user
guide for more
information about the agent experience.
There are three voicemail features that you can enable. Details about each are
outlined in the following table. All are disabled by default.
Feature name
Description
Voicemail Timeout
A specified time value time out the voicemail for the agent after they've listened to it. The default value is 5 minutes. When the threshold time is met, the voicemail is automatically dismissed and the agent is returned to the voicemail queue page.
Voicemail Forwarding
Allows agents to forward voicemails to other agents or queues. You can also optionally allow agents to forward voicemails back to the same queue by checking the box that appears when voicemail forwarding is enabled.
Voicemail History
Allows agents to see a list of voicemails that they have already listened to.
Clear voicemails from queues
If your agents listen to voicemails using your CRM instead of the agent adapter,
voicemails can accumulate in queues. You can clear accumulated voicemails from a
specific queue, or from all queues.
To clear voicemails from a specific queue, follow these steps:
In the CCAI Platform portal, click Settings > Call . If you don't
see the Settings menu, click menu
Menu .
Go to the Voicemail pane.
Under Queued voicemails , click the Search queue field. A list of
your queues appears. You can narrow your search by typing the first few
letters of your queue name.
Click the queue that you want. The number of voicemails that have
accumulated in your queue appears in the Queued voicemails field.
Click Clear Voicemails .
To clear voicemails from all of your queues, follow these steps:
In the CCAI Platform portal, click Settings > Call . If you don't
see the Settings menu, click menu
Menu .
Go to the Voicemail pane.
Under Queued voicemails , the number of voicemails that have accumulated
in all of your queues appears in the All queued voicemails field.
Click Clear Voicemails .
Turn on and configure agent extensions
Before you configure agent to agent calling and
end-user to agent calling , turn on and configure
agent extensions.
To turn on and configure agent extensions, follow these steps:
In the CCAI Platform portal, click Settings > Call . If you don't
see the Settings menu, click menu
Menu .
Go to the Agent Extensions pane.
To turn on agent extensions, click the Agent Extensions toggle to the on
position.
To configure agent extensions, do the following:
In the Extensions length list, select a length for the phone
extensions for your agents.
To assign extension numbers to your agents, do one of the following:
To automatically generate phone extensions for your agents, select the
Enable Auto-generated extension checkbox. The system then automatically
generates phone extensions of the length you specified and assigns them to
your agents.
To assign your own extension numbers to your agents, do the following:
1. Clear the ** Enable Auto - generated extension ** checkbox .
1. [ Assign extension numbers to
agents ] ( # assign - extension - to - a - user ) .
You must assign extension numbers to agents for both agent to agent
calling and end-user to
agent calling.
Click Save Agent Extensions .
Assign extension numbers to agents
You can assign your own extension numbers to agents. For information about
configuring the length of extension numbers, see Turn on and configure agent
extensions .
To assign an extension number to an agent, do the following:
In the CCAI Platform portal, click Settings > Users & Teams . If
you don't see the Settings menu, click menu Menu .
In the All Users pane, for the user that you want to edit, click more_horiz , and then click Edit user . The
Edit User pane appears.
Expand the Agent Extensions section.
Do one of the following:
In the Extension Number field, enter an extension number.
Click Auto Generate . The Extension Number field displays a
generated extension number.
Click Update .
Note: You can download a CSV file that contains a list of users, including their
extension numbers. For more information, see
Bulk user management .
Agent to agent calling
Configure agent to agent calling. Agent to agent calling lets agents call other
agents using their agent extension. Because agent to agent calls are internal,
wrap-up is skipped.
Google recommends configuring deflections for handling calls when agents are not
available. For more information, see Deflections for agent to agent, end-user
to agent, and direct calls .
Before you begin
Before you configure agent to agent calling, turn on and configure agent
extensions .
Turn on and configure agent to agent calling
To turn on and configure agent to agent calling, follow these steps:
In the CCAI Platform portal, click Settings > Call . If you don't
see the Settings menu, click menu
Menu .
Go to the Agent Extensions pane.
To turn on agent to agent calling, click the Agent to Agent Calls toggle
to the on position.
To turn on auto-answer, select the Enable Auto-Answer checkbox. This
connects agent to agent calls without requiring agents to click Answer .
Auto-answer doesn't connect calls to agents that are on active calls.
To let agents decline agent to agent calls, select the Enable declining
call checkbox. A Decline button then appears on incoming agent to
agent call notifications.
For Missed Call Threshold ,
set the number of consecutive calls that an agent can miss (that is, not pick up within the timeout
threshold) before they are placed in missed
call status .
For Unresponsive Threshold ,
set the number of times that a call is unable to reach an agent's agent adapter before the agent is
placed in Unresponsive status.
Optional: Select the Apply unresponsive thresholds when agent is in anactive call
session checkbox to apply the unresponsive threshold count to agents that become unresponsive
during an active session.
Configure call recording
You can configure whether agent to agent calls are recorded. To record calls,
you must configure external storage to store the recordings.
To configure call recording, follow these steps:
In the CCAI Platform portal, click Settings > Call . If you don't
see the Settings menu, click menu
Menu .
Go to the Call Details pane.
For Call Recording , select the Record Agent-to-Agent Calls checkbox.
Click Save Call Details .
Configure call concurrency
You can set the maximum number of agent to agent ,
end-user to agent or direct
inbound calls an agent can handle simultaneously. If you
don't configure call concurrency, agents on a call don't receive these types of
calls.
To configure call concurrency:
In the CCAI Platform portal, click Settings > Call . If you don't
see the Settings menu, click menu
Menu .
Go to the Agent Queue pane.
For Call Concurrency , select the checkbox and set the maximum number of
calls that an agent can handle simultaneously.
Click Save Agent Queue .
Reporting
For reporting, the call type of an agent to agent call is Voice Internal .
End-user to agent calling
You can configure CCAI Platform to let end-users directly call specific
agents. Depending on how you configure your instance, an end-user can directly
call an agent in one of two ways: enter the agent's extension number at the
beginning of a call, or call the agent from the agent directory. This section
explains how to configure your instance for end-user to agent calling.
Google recommends configuring deflections for handling calls when agents aren't
available. For more information, see Deflections for agent to agent, end-user
to agent, and direct calls
Before you begin
Before you configure end-user to agent calling, turn on and configure agent
extensions .
Turn on and configure end-user (consumer) to agent calling
To turn on and configure end-user to agent calling, follow these steps:
In the CCAI Platform portal, click Settings > Call . If you don't
see the Settings menu, click menu
Menu .
Go to the Agent Extensions pane.
To turn on end-user to agent calling, click the Consumer to Agent Calls
toggle to the on position.
To turn on auto-answer, select the Enable Auto-Answer checkbox. This
connects end-user to agent calls without requiring the agent to click
Answer . Auto-answer doesn't connect calls to agents that are on active
calls.
To let agents decline end-user to agent calls, select the Enable declining
call checkbox. A Decline button appears on end-user to agent call
notifications.
To let end-users input an agent's extension number at the beginning of a
call, do the following. For more information, see Entering the agent's
extension number at the beginning of a
call .
Select the Enable extension input at the beginning of a call
checkbox.
In the number field, enter the number of seconds after the menu readout
begins that the end-user can enter an agent's extension number. After this
time expires, extension numbers are no longer accepted.
To configure a prompt for the end-user, do the following:
Select the Extension input announcement message checkbox.
(Optional): Edit the text-to-speech message or upload an audio recording
that contains your prompt.
For Missed Call Threshold ,
set the number of consecutive calls that an agent can miss (that is, not pick up within the timeout
threshold) before they are placed in missed
call status .
For Unresponsive Threshold ,
set the number of times that a call is unable to reach an agent's agent adapter before the agent is
placed in Unresponsive status.
Optional: Select the Apply unresponsive thresholds when agent is in anactive call
session checkbox to apply the unresponsive threshold count to agents that become unresponsive
during an active session.
Click Save Agent Extensions .
Create an extension directory
You can create an extension directory that lets end-users call
agents . End-users can navigate to the
extension directory during a call using the IVR menu.
An extension directory has the following characteristics:
An extension directory can only be a leaf node. That is, it can have no
child nodes.
An extension directory doesn't provide queue-related settings. It's only for
searching for and connecting to agents.
There can be no more than one extension directory in an IVR menu structure.
However, it can be placed anywhere in the structure.
To create an extension directory, follow these steps:
In the CCAI Platform portal, click Settings > Queue . If you don't
see the Settings menu, click menu
Menu .
In the IVR (Interactive Voice Response) pane, click Edit / View .
For Menu Structure , click edit
Edit .
Click a menu, and press Enter . The Add new menu dialog appears.
In the Name field, enter a name for your extension directory.
Click the Extension Directory toggle to the on position, and then click
Add .
Customize audible messages for the extension directory
You can customize the audible messages that play when an end-user accesses the
extension directory.
To customize audible messages for the extension directory, follow these steps:
In the CCAI Platform portal, click Settings > Languages &
Messages . If you don't see the Settings menu, click menu Menu .
Go to the Extension Directory Messages section of the Audible
Messages pane. This section contains the extension directory
messages .
Edit the text-to-speech message or upload an audio file for any extension
directory message that you want to configure.
Click Save .
Extension directory messages
The following extension directory messages are available:
Directory Greeting : the initial message that plays when the end-user
accesses the extension directory.
Example: Thank you for accessing the directory. To proceed, please input
the initial up to four letters of your party's last name through your
keypad. For example, use the 3 key for F and the 4 key for G. Or press the
star key followed by the extension number. Press 0 to go back to the
previous menu.
No Match : a message played when there is no match for the extension
number that the end-user entered.
Example: We're sorry, but we couldn't find any directory entries that match
your search.
Agent Found : a message played when there is a match for the extension
number that the end-user entered.
Example: To reach @{AGENT_FULL_NAME} at extension @{EXTENSION_NUMBER},
please press 1. Press the star key if you need to search for someone else.
No more matched agents : a message played when there are no additional
matches in the extension directory.
Example: Were sorry, but we could not find any additional matching entries
in the directory.
New Search : a message to explain how to start a new search.
Example: To start a new search, please press 1. Press the star key to go
back to the previous menu.
Incorrect confirmation option : a message played when the end-user enters
an option that doesn't exist.
Example: Sorry, you have entered the wrong option.
No confirmation input : a message played when the system expects a
response from the end-user.
Example: You have not responded.
Invalid search input : a message played when the end-user enters an
invalid search input. This is followed by the directory greeting.
Example: We're sorry, but you have entered an invalid input.
Extension number doesn't exist : a message played when the end-user
presses the star key and then enters an extension number that doesn't exist.
Example: We're sorry, but the extension number you entered does not exist.
Invalid extension number : a message played when the end-user presses the
star key and then enters an invalid extension number.
Example: We're sorry, but the extension number you entered is not valid.
No extension number dialed : a message played when the end-user presses
the star key and doesn't enter an extension number.
Example: We're sorry, we didn't receive an extension number.
Multiple agents found : a message played when the end-user inputs an
agent extension number and there are multiple agent matches.
Example: Multiple agents found. Please select an agent or to go back to the
previous menu press 0.
After your message plays, the system reads a list of up to eight agents with
agent extension numbers.
Search results next page : a message played when there are additional
agent matches.
Example: To hear the rest of the results, please press 9. To go back to the
previous menu, please press 0.
End of search results : a message played when there are no more agent
matches.
Example: You have reached the end of the search results. To hear the
results again, please press 9. Otherwise, please press the star key to
start a new search or press 0 to go back to the previous menu.
Configure call recording
You can configure whether end-user to agent calls are recorded. To record calls,
you must configure external storage to store the recordings.
To configure call recording, follow these steps:
In the CCAI Platform portal, click Settings > Call . If you don't
see the Settings menu, click menu
Menu .
Go to the Call Details pane.
For Call Recording , select the Record Consumer-to-Agent Calls
checkbox to enable recording end-user to agent calls.
Click Save Call Details .
Configure call concurrency
You can set the maximum number of agent to agent ,
end-user to agent or direct
inbound calls an agent can handle simultaneously. If you
don't configure call concurrency, agents on a call don't receive these types of
calls.
To configure call concurrency, follow these steps:
In the CCAI Platform portal, click Settings > Call . If you don't
see the Settings menu, click menu
Menu .
Go to the Agent Queue pane.
For Call Concurrency , select the checkbox and set the maximum number of
calls that an agent can handle simultaneously.
Click Save Agent Queue .
End-user experience
An end-user can directly call an agent in one of two ways: enter the agent's
extension number at the beginning of a call, or call the agent from the agent
directory.
Entering the agent's extension number at the beginning of a call
You can control whether an end-user can enter an agent's extension at the
beginning of a call. Do this by configuring the Enable extension input at the
beginning of a call checkbox when you turn on and configure end-user to agent
calling .
Extension input at the beginning of a call is on
When extension input at the beginning of a call is on, the end-user experience
is as follows:
The end-user calls the contact center's global number. If you configured an
extension input announcement message, that message plays. For more
information, see Turn on and configure end-user to agent
calling .
The end-user does one of the following:
The end-user enters an agent extension number before the specified
number of seconds of wait time elapses (wait time is specified in Turn
on and configure end-user to agent
calling ). If the
end-user enters a valid extension number, the system dials the agent and
attempts to connect the call. Otherwise, the system reads out the greeting
message and the end-user navigates the menu system.
The end-user doesn't enter an agent extension number before the
specified number of seconds of wait time elapses. The system reads out
the greeting message and the end-user navigates the menu system.
Extension input at the beginning of a call is off
When extension input at the beginning of a call is off, the system doesn't give
the end-user an opportunity to enter an extension number at the beginning of a
call. The system reads out the greeting message and the end-user navigates the
menu system.
Calling an agent from the extension directory
If an end-user wants to call an agent, they can use the extension
directory .
To use the extension directory, the end-user does the following:
The end-user calls the contact center's global number and waits for the IVR
greeting message to play.
The end-user navigates the IVR menu to the extension directory.
The system reads out the directory greeting, which explains how to input the
first few letters of an agent's name using the keypad or enter the agent's
extension number.
The end-user does one of the following:
Enters the agent's extension number. The system dials the agent and
attempts to connect the call.
Enters the initial letters of the agent's name (up to four characters)
and then follows the prompts to attempt to call the agent.
Agent experience
When an end-user starts an end-user to agent call, an agent can expect the
following:
The call is directed to the agent's device.
The call auto-answers if auto-answer is enabled and the agent is not on
another call.
A Decline button appears on incoming call notifications if the following
are true:
Auto-answer is turned off.
Declining calls is turned on.
For information about configuring auto-answer and declining calls, see Turn on
and configure end-user (consumer) to agent
calling .
Reporting
For reporting, the call type of an end-user to agent call is Voice Inbound
(Extension) .
Deflections for agent to agent, end-user to agent, and direct calls
When you set up agent to agent calling , end-user to
agent calling or direct inbound
calling , Google recommends configuring deflections or
redirects for times when agents aren't available. You can configure these
globally or at the
agent level.
Configure deflections at the global level
For agent to agent , end-user to
agent or direct inbound
call types, you can configure the following deflection types at the global
level: after hours and overcapacity.
Configure after hours deflections at the global level
To configure after hours deflections at the global level, follow these steps:
In the CCAI Platform portal, click Settings > Call . If you don't
see the Settings menu, click menu
Menu .
Go to the Agent Queue pane.
Click the After Hours Deflection toggle to the on position. This turns
on call deflection for calls that arrive outside of the hours of operation.
In the Hours of operations list, select your hours of operation.
Deflections occur outside of these hours.
In the After hours deflection section, select one of the following:
Message . Deflect to a message. The Message greeting message is played to
callers.
Queue . Deflect to a queue. In the Search field, search for the queue that you want
calls deflected to. The Queue greeting message is played to callers.
Phone number or Outbound SIP transfer . Deflect to a phone number or SIP URI. Select one
of the following options:
Enter phone number . Enter the phone number that you want
calls deflected to.
Enter extension number . Enter the agent extension number that you want calls deflected
to.
Enter SIP URI . Enter the SIP URI that you want calls deflected to.
Select from a contact list . Do the following:
In the Select from contact list list, select a contact list.
In the Select destination list, select the contact that you want calls deflected
to.
Voicemail . Calls are deflected to voicemail. The Voicemail greeting Message is
played to callers.
In the After Hours Deflection Messages section, customize your
deflection messages. For each message, you can enter text to be read to
callers or you can upload an audio recording to play to callers.
Click Save Agent Queue .
Configure overcapacity deflections at the global level
To configure overcapacity deflections at the global level, follow these steps:
In the CCAI Platform portal, click Settings > Call . If you don't
see the Settings menu, click menu
Menu .
Go to the Agent Queue pane.
Click the Overcapacity Deflection toggle to the on position. This turns
on call deflection for calls that arrive when agents are at overcapacity.
In the Overcapacity Deflection section, select one of the following:
Message . Deflect to a message. The Message greeting message is played to
callers.
Queue . Deflect to a queue. In the Search field, search for the queue that you want
calls deflected to. The Queue greeting message is played to callers.
Phone number or Outbound SIP transfer . Deflect to a phone number or SIP URI. Select one
of the following options:
Enter phone number . Enter the phone number that you want
calls deflected to.
Enter extension number . Enter the agent extension number that you want calls deflected
to.
Enter SIP URI . Enter the SIP URI that you want calls deflected to.
Select from a contact list . Do the following:
In the Select from contact list list, select a contact list.
In the Select destination list, select the contact that you want calls deflected
to.
Voicemail . Calls are deflected to voicemail. The Voicemail greeting Message is
played to callers.
Keep Waiting . Calls continue to ring until the caller hangs
up.
For Overcapacity Deflection Criteria , select the amount of wait time
until deflections take place.
In the Overcapacity Deflection Messages section, customize your
deflection messages. For each message, you can enter text to be read to
callers or you can upload an audio recording to play to callers.
Click Save Agent Queue .
Configure deflections at the agent level
For agent to agent , end-user to
agent or direct inbound
call types, you can configure the following deflection types at the agent level:
after hours, overcapacity, and automatic redirection.
Configure general deflection settings at the agent level
To configure general deflection settings at the agent level, follow these steps:
In the CCAI Platform portal, click Settings > Users & Teams . If
you don't see the Settings menu, click menu Menu .
In the All Users pane, next to the agent that you want to edit, click
more_horiz , and then click Edit
user . The Edit User pane appears.
Expand the Agent Call Deflections section.
Optional: Click the Agent permissions toggle to the on position. This
lets the agent configure their own extension deflection options in the agent
adapter. For more information, see
Set deflections for extension calls .
For Caller announcement intervals , set the time interval for announcing
wait time deflection messages.
Click Update .
Configure after hours deflections at the agent level
To configure after hours deflections at the agent level, follow these steps:
In the CCAI Platform portal, click Settings > Users & Teams . If
you don't see the Settings menu, click menu Menu .
In the All Users pane, next to the agent that you want to edit, click
more_horiz , and then click Edit
user . The Edit User pane appears.
Expand the Agent Call Deflections section.
Configure the general deflection
settings if you haven't done so
already.
Click the After Hours Deflection toggle to the on position.
In the Hours of operation list, select your hours of operation.
Deflections occur outside of these hours.
For After hours deflection , select one of the following:
Message . Deflect to a message. For Message greeting message , enter a
message to play or upload an audio file to play.
Queue . Deflect to a queue. Do the following:
In the Search field, search for the queue that you want to deflect calls to.
For Queue greeting message , enter a message to play or upload an audio file to
play.
Phone number or Outbound SIP transfer . Deflect to a phone number or a SIP URI. Select
one of the following options:
Enter phone number. Enter the phone number that you want calls deflected to.
Enter extension number . Enter the extension that you want calls deflected to.
Enter SIP URI . Enter the SIP URI that you want calls deflected to.
Select from contact list . Do the following:
In the Select from contact list list, select a contact list.
In the Select destination list, select the contact that you want calls deflected
to.
Voicemail . Deflect to voicemail. For Voicemail greeting message , enter a
message to play or upload an audio file to play.
Click Update .
Configure overcapacity deflections at the agent level
To configure overcapacity deflections at the agent level, follow these steps:
In the CCAI Platform portal, click Settings > Users & Teams . If
you don't see the Settings menu, click menu Menu .
In the All Users pane, next to the agent that you want to edit, click
more_horiz , and then click Edit
user . The Edit User pane appears.
Expand the Agent Call Deflections section.
Configure the general deflection
settings if you haven't done so
already.
Click the Overcapacity Deflection toggle to the on position.
For Overcapacity Deflection , select one of the following:
Message . Deflect to a message. For Message greeting message , enter a
message to play or upload an audio file to play.
Queue . Deflect to a queue. Do the following:
In the Search field, search for the queue that you want to deflect calls to.
For Queue greeting message , enter a message to play or upload an audio file to
play.
Phone number or Outbound SIP transfer . Deflect to a phone number or a SIP URI. Select
one of the following options:
Enter phone number. Enter the phone number that you want calls deflected to.
Enter extension number . Enter the extension that you want calls deflected to.
Enter SIP URI . Enter the SIP URI that you want calls deflected to.
Select from contact list . Do the following:
In the Select from contact list list, select a contact list.
In the Select destination list, select the contact that you want calls deflected
to.
Voicemail . Deflect to voicemail. For Voicemail greeting message , enter a
message to play or upload an audio file to play.
Keep Waiting . Calls continue to ring until the caller hangs
up.
For Overcapacity Deflection Criteria , set the amount of time that calls
wait in a queue before being deflected.
Click Update .
Configure automatic redirection at the agent level
With automatic redirection turned on for an agent, the system immediately
redirects inbound calls to the agent.
To configure automatic redirection at the agent level, follow these steps:
In the CCAI Platform portal, click Settings > Users & Teams . If
you don't see the Settings menu, click menu Menu .
In the All Users pane, next to the agent that you want to edit, click
more_horiz , and then click Edit
user . The Edit User pane appears.
Expand the Agent Call Deflections section.
Configure the general deflection
settings if you haven't done so
already.
Click the Automatic redirection toggle to the on position.
For Automatic redirection , select one of the following:
Message . Deflect to a message. For Message greeting message , enter a
message to play or upload an audio file to play.
Queue . Deflect to a queue. Do the following:
In the Search field, search for the queue that you want to deflect calls to.
For Queue greeting message , enter a message to play or upload an audio file to
play.
Phone number or Outbound SIP transfer . Deflect to a phone number or a SIP URI. Select
one of the following options:
Enter phone number. Enter the phone number that you want calls deflected to.
Enter extension number . Enter the extension that you want calls deflected to.
Enter SIP URI . Enter the SIP URI that you want calls deflected to.
Select from contact list . Do the following:
In the Select from contact list list, select a contact list.
In the Select destination list, select the contact that you want calls deflected
to.
Voicemail . Deflect to voicemail. For Voicemail greeting message , enter a
message to play or upload an audio file to play.
Click Update .
Revert to an agent's deflection settings
If an agent
configured their own deflection settings
using the agent adapter, their settings appear on that user's Edit User page
at Settings > Users & Teams > Manage Users & Teams .
You can edit the agent's deflection settings on the Edit User page,
overriding the agent's settings. When you do that, the agent can no longer
configure their own settings. However, you can revert an agent's deflection
settings back to the configuration that they originally set. Then the agent can
configure their own deflection settings again.
To revert to an agent's deflection settings, follow these steps:
In the CCAI Platform portal, click Settings > Users & Teams . If
you don't see the Settings menu, click menu Menu .
In the All Users pane, next to the agent that you want to edit, click
more_horiz , and then click Edit
user . The Edit User pane appears.
Expand the Agent Call Deflections section.
Click Revert to agent settings . This button appears only if an agent has
configured their own deflection settings. An agent can configure their own
deflection settings only if you configure your instance to let them. For
more information, see Configure general deflection settings at the agent
level .
Important: If you override an agent's self-configured deflection settings, you
can't directly revert to the default or global deflection settings. To do that,
you must first revert to the agent's deflection settings.
Configure estimated wait time announcements
Estimated Wait Time (EWT) caller announcements are used in voice systems to
inform callers about their expected wait times and manage their expectations.
You can enable these announcements both globally and at the queue level. When
activated, the EWT is announced to callers as they enter the queue using a
custom audio file and Text-to-Speech voice. You can choose whether the
announcement repeats at set intervals or plays only once at the beginning of the
call.
If you'd like callers to hear deflection options immediately after the wait time
notice, enable both Estimated Wait Time and Overcapacity Deflection .
Callers will hear the estimated wait time, then hear overcapacity options.
Note: The maximum wait time announced is 300 minutes. If the actual wait exceeds
300 minutes, the announcement will still be limited to 300 minutes.
Configure a global EWT announcement
Go to Settings > Call > Caller Announcements > General .
Toggle Estimated Wait Time to On .
Choose the number of times you want the EWT to be announced. You can choose
a set number of times, or choose Announce at every cycle to have the EWT
repeated at set intervals as long as the caller is on hold.
If you chose to have the EWT announced more than once, choose the time
interval between announcements in the Universal Caller Announcement
Intervals section.
Click Save Caller Announcements .
Customize your global EWT announcement message
By default, the estimated wait announcement is: "Thank you for calling, your
estimated wait time is @{ESTIMATED_WAIT_TIME_IN_MINUTES} ." You have the option
of changing either the content of the message or the voice used (or both). To
change the voice used, you need to record a custom audio file that leaves room
for the system to fill in the EWT variable.
Go to Settings > IVR-specific Messages .
Under Estimated Wait Time , enter the text of the message you would like
to be read to callers. This message will be read by the default
Text-to-Speech voice. To change the voice in addition to the text,
select Upload Audio Recording for Estimated Wait Time and upload your
file.
Click Apply to save.
Configure queue-level EWT caller announcements
Queue-level announcements allow for more personalized interactions with
end-users while they wait in different queues.
Permissions
In order to enable queue-level announcements, you must have a role with
All other permissions enabled under Settings - queue .
Go to Settings > Users & Teams > Roles & Permissions .
Select + Add Role , scroll to Settings - Queue , and click the carrot
expander to view the drop-down menu.
Select All other permissions , enter a name for the role, and click
Save .
Enable and customize the queue EWT announcement
The queue settings page indicates whether each setting is inherited globally or
at the queue level. The settings are inherited by all queues globally by
default, unless they are overridden (redefined) at the queue level or at the
parent queue level. Global settings are defined in
Call Settings > Caller Announcement .
Go to Settings > Queue and select the IVR channel.
Choose a queue, scroll to Caller Announcements , and click Configure .
Toggle the Estimated Wait Time button to ON.
Choose whether you want the EWT to be announced only once, a set number of
times, or continually at regular intervals until the caller is taken off
hold. If the message repeats, you can set the time interval between
announcements in the Caller Announcement Intervals section.
Under Estimated Wait Time Message , enter the text of the message you
would like to be read to callers. This message will be read by the default
Text-to-Speech voice. To change the voice in addition to the text,
select Upload Audio Recording for Estimated Wait Time and upload your
file. The maximum file size allowed is 15MB.
Click Save .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
