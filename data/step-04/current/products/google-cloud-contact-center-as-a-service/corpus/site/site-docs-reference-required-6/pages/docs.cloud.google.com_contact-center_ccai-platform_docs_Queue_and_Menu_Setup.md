---
title: "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-end-user
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup
  title: "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\
    \ Google Cloud Documentation"
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
Queue and menu setup
Stay organized with collections
Save and categorize content based on your preferences.
Queue level target metrics
Overview
In addition to the global settings for target metrics, for further
granularity, you can set queue-specific target metrics. Depending on the
specific settings, each queue can also have specific targets for
different channels.
Global target metrics
Target metrics set at the global level on the Settings >
Operation Management page will continue to be inherited by all
queues by default.
To learn how to set up a global target metric, see Target
metrics .
Target metric priority order
When a queue-specific target is set for a Top-level queue, all
sub-queues will inherit the set target metric.
When a queue-specific target metric is set for a sub-queue, it will
override both the global target metric and the Top-level queue target
metric for the queue.
Priority order = Sub-queue Target > Top-level Queue Target > Global
Target
Examples:
Targets Set
Resulting Targets
Global Target = 70% , Top-level Queue 1 = None , Queue 1a = None, Queue 1b = None, Queue 2a = None, Queue 2b = None, Top-level Queue 2 = None
Global Target = 70% , Top-level Queue 1 = 70% (inherited from global) , Queue 1a = 70% (inherited from global), Queue 1b = 70% (inherited from global), Queue 2a = 70% (inherited from global), Queue 2b = 70% (inherited from global), Top-level Queue 2 = 70% (inherited from global)
Global Target = 70% , Top-level Queue 1 = 65% , Queue 1a = None, Queue 1b = 75%, Queue 2a = 65%, Queue 2b = None, Top-level Queue 2 = None
Global Target = 70% , Top-level Queue 1 = 65% , Queue 1a = 65% (inherited from Top-level), Queue 1b = 75%, Queue 2a = 65%, Queue 2b = 70% (inherited from global), Top-level Queue 2 = None
Global Target = None , Top-level Queue 1 = 65% , Queue 1a = None, Queue 1b = None, Queue 2a = 60%, Queue 2b = 40%, Top-level Queue 2 = None
Global Target = None , Top-level Queue 1 = 65% , Queue 1a = 65% (inherited from Top-level), Queue 1b = 65% (inherited from Top-level), Top-level Queue 2 = None , Queue 2a = 60%, Queue 2b = 40%
Utilize set targets
Call and chat dashboards
When viewing the default view of the Call or Chat dashboard, the
target displayed will be the globally configured target metric
When viewing multiple queues (or a queue group), no target will be
displayed
Queue reports dashboard
Available for interaction-based data model enabled environments
The SL Target and Concurrency Target column will display
each queue's target
If a queue group consists of multiple queues with varying targets,
then no value will be displayed in the Totals row
Performance metrics dashboard
Available for interaction-based data model enabled environments
The SL Target column will display each queue's service level target.
Metric details
Service level
Among other benefits, this setting provides more flexibility in staffing
options available to your operation. For example, if Generico has a line
just for people who have urgent issues, they want to have an SLA of
80/20 for that queue. With only global SLA settings, Generico has to
either staff the entire org to answer 80/20 (thus increasing headcount
costs), perform manual analysis for reporting, or move the urgent issue
team's SLA to match the rest of the company uses - which can have an
impact on customer satisfaction and trust. Instead, Generico can use
this feature to set the SLA per-queue.
Chat concurrency
Average number of chats handled by individual agents at the same time.
Contact Center AI Platform (CCAI Platform) configuration
Go to Settings > Queue .
Click Edit / View on the channel/entry point you're interested
in.
Select any queue on the left-hand side.
Click the ON/OFF switch for the metric you're interested in
configuring for the queue.
Enter the value you would like to set as the target.
Click Set target metrics.
SMS messaging and queue settings
Overview
Once SMS Messaging is enabled and you have configured chat settings, you
can begin setting up SMS messaging queues.
SMS menu structure
SMS chat queues can have a single queue structure or a set of nested
queues.
For multi-language queues, set up a top-level queue for each language so
that consumers are first prompted to select a language.
Example:
Please text a number to select a menu.
Text 1 for English
Text 2 for French
Text 3 for Korean
1
You have selected English support. Please text a number to select a
menu.
Text 1 for Payments
Text 2 for Billing
Text 3 for All other enquiries
When naming your queues, keep in mind that you cannot use protected SMS
command words in queue names, including:
STOP, STOPALL, UNSUBSCRIBE, CANCEL, END, QUIT
START, YES, UNSTOP
HELP, INFO
Command words for EXIT (configurable on Chat settings page)
Command words for BACK (configurable on Chat settings page)
If you try to name the queue using a protected word, an error message is
displayed.
Add and edit SMS queues
To add and edit SMS queues:
Go to Settings > Queue > SMS Messaging .
Click Edit .
If you have queues set up in another channel (IVR, Mobile, or Web),
you can copy their structure by clicking Copy Queue From . This
replaces any existing queues in the SMS channel.
To create a new queue, click into the New Item line and type the
first queue name.
To create additional queues:
Press enter to create a new queue below.
Press enter + tab to create a branch or leaf queue.
Press shift + tab to go back.
To delete a queue, click X next to the queue name.
To move queues up or down, click on the grid icon next to a queue
name and drag to the new location.
Click Done to save your new queue structure.
Configure queue-level settings
SMS settings can be applied at the top, sub-queue, or leaf queue level.
Top-level queue settings are inherited by sub queues unless they are
overridden by their own settings.
Hide SMS queues
There is an option to hide an SMS queue so that end-users are not
presented with the menu option for that queue. If the queue has an
incoming number assigned, messages sent to that number are delivered,
even if the queue is hidden.
Timeout and expiration settings
Global timeout settings for SMS chats are configured on the Settings
> Chat page but you can override them at the queue level.
SMS system messages
Two types of system messages can be configured for SMS chats,
Greeting and After Hour .
Greeting message: The greeting message is sent as soon as an
incoming SMS message is received. If the queue has multiple
sub-queues, the greeting message is sent before the sub queue
selection message.
The greeting message is especially important because your first
contact with the end-user via SMS needs to include standard opt-in
text. For more information, see SMS messaging and privacy .
To provide consumers with an estimated wait time as part of your
greeting message, use the dynamic variable, @{EWT_minutes}. This
variable can be used only at the leaf queue level.
After hour message : The after hours message is sent when an
incoming SMS message is received outside of the Operation Hours, as
set on the Settings > Support Center Details page.
Every queue can have its own hours of operation. To set these hours, go
to Settings > Support Center Details > Add Custom Operation Hours.
The concept of overcapacity and after hour deflection does not apply to
SMS chat.
Queue keywords
When an end-user texts a Top-level queue, the system automatically
prompts the end-user to enter a number associated with a sub queue(based
on the order in which you have listed your queues on the Queue Menu
Setting page.)
You can also add keywords to queues. When the keyword is entered by the
end-user, they are taken directly to that queue. In this example, the
keyword "pay" has been assigned to the Payments queue.
Assign SMS numbers to queues
If you have not yet added and verified SMS phone numbers on the Phone
Number Management page, see Adding SMS
numbers .
You can assign incoming and outbound SMS numbers to top-level,
sub-queue, and leaf queues. Keep the following in mind:
Incoming SMS phone numbers can be assigned to only one queue (a
queue can have multiple incoming numbers as long as they are not
used for any other queue.)
Outbound SMS phone numbers can be assigned to any number of queues
and a queue can have any number of outbound phone numbers. Agents
are prompted to pick one when initiating an outbound chat.
Any agents assigned to the queue can use any of the outbound phone
numbers; therefore, If you want an agent to have their own number,
they must have their own leaf queue.
If a end-use sends a text to a phone number that is not assigned to
a queue, they will not receive a response.
Every SMS queue settings page has an option to assign incoming and
outbound numbers. The drop-down list displays any SMS number that is
verified and available to be used.
When adding outbound numbers, be sure to toggle Outbound SMS to
On .
Assign agents and teams to SMS queues
As with any call and chat queue, agents and teams are assigned at the
leaf queue level.
For more information, see Setting Up and Assigning Agents to Channels
and Queues .
Prevent agents from selecting a queue for an outbound call
You can hide a queue in the agent adapter so that agents can't select it for an
outbound call. For more information, see Configure global call
settings .
To prevent agents from selecting a queue for an outbound call, do the following:
In the CCAI Platform portal, click Settings > Queue . If you don't
see the Settings menu, click menu
Menu .
In the IVR (Interactive Voice Response) pane, click Edit / View .
Click the queue that you want to edit.
In the Settings pane, click the Hide From Selection For Outbound
Calls toggle to the on position.
Queue-level wrap-up settings
Queue-level wrap-up settings allow you to customize the communication of wrap-up
times for different queues within a contact center. This ensures that agents
have adequate time to complete their tasks without compromising service level
agreements or taking another call/chat before they are ready. This is
particularly useful for queues that handle different types of issues, such as
escalations or complex issues, which might require more time to handle.
You can define queue wrap-up settings either explicitly for a single leaf-queue
or at a parent level, to share settings with all child leaf-queues.
Define wrap-up queue level settings
Wrap-up settings are inherited by all queues globally by default, unless they
are overridden (redefined) at the queue level or at the parent queue level.
Global settings are defined in Operations Management.
To adjust the wrap-up settings for a queue you must go to that queue:
On the Settings panel for that queue, go to Wrap-up Settings .
Beside Wrap-up , click on Settings . The Wrap-up Settings panel for
that queue will open.
Inherited settings
This indicates whether settings are inherited or redefined at the queue level,
meaning they are explicitly defined at that queue level. Redefined indicates
that the wrap-up settings for that specific queue have been customized and are
different from the default settings inherited from the global or parent queue
level.
Reset to the Global
The button Reset to the Global is available when the queue wrap-up settings
are redefined at the queue level and are not inherited from a parent queue.
By clicking this button, the Admin can undo any changes made to the queue's
settings and return to the settings inherited from the global level.
Wrap-up settings
Wrap-up exceeded
This setting allows you to transition agents into a Wrap-up Exceeded status
after they have gone beyond a wrap-up threshold time and have cleared all
ongoing sessions. When an agents transitions to Wrap-up Exceeded status, an
agent-level notification appears. This status can only be used when notes and
disposition codes are enabled.
For more information see Agent Statuses .
Automatic wrap-up for calls
You can set automatic wrap-up for both inbound and outbound calls. This
automatically ends a call session after a set period of time. This feature is
typically used to help agents manage their time more efficiently and to help
ensure that all sessions are properly documented and brought to a close.
To set automatic wrap-up for calls, follow these steps:
In the CCAI Platform portal, click Settings > Queue . If you don't
see the Settings menu, click menu
Menu .
In the IVR (Interactive Voice Response) pane, click Edit / View .
Click the queue that you want to edit.
In the Settings pane, go to Wrap-up settings , and then click
Configure . The Wrap-up pane appears.
Do one of the following, or both, depending on your requirements:
To set automatic wrap-up for inbound calls, do the following:
Click the Automatic wrap-up for inbound calls toggle to the on
position.
Set the number of seconds after which the agent's status switches to
Available .
To set automatic wrap-up for outbound calls, do the following:
Click the Automatic wrap-up for outbound calls toggle to the on
position.
Set the number of seconds after which the agent's status switches to
Available .
Click Save .
Manual wrap-up
If an agent manually changes their status to Wrap-up in the agent adapter,
wrap-up activities are automatically assigned to the agent's last completed call
or chat session.
Disposition Codes and Notes
After Automatic wrap-up for calls is toggled On , the settings for
disposition notes and codes become available. Disposition codes and notes are
tools that allow agents to document the final outcome of a customer interaction.
The codes are used to classify and label inbound and outbound sessions,
while the notes provide additional context about the session outcome. This
feature helps to inform the team of the context of the session and streamline
the follow-up process for efficiency.
For more information, see
Disposition Codes and Notes .
Integrated email form for mobile and web SDKs
For pricing and implementation contact your Account Team or Support.
Overview
This feature provides an improved end-user user experience and Admin
controls for email communications. Instead of launching the end-user
default email application, the email form is presented to the end-user
within the CCAI Platform portal support experience flow.
Key features
End-user entry fields: name, email address, and message box
Apply text formatting to the message
Attach media files
Display message content instructions for users
Admin Configuration Options
Customizable destination email address per queue
Customizable instruction message per queue
Security option to include a hidden reCAPTCHA for the Web SDK
Configuration
considerations
When email enhancement is enabled, the email will go out from
no-reply@company.com email.
Emails will have the end-user's entered email address in the
Reply-to Header field
All emails will use this subject format: {Queue Name} [from:
{email} ]
Your CRM team should set up a rule that identifies the email
address in the subject or body of the email and use the email
address to identify the contact for the best experience
Once enabled, the email form with the custom email per-queue shows
at all times for the email channel, including: during operation
hours, after operation hours, and for email deflection options
CCAI Platform portal sends to the email address specified and then inbound emails
are handled by your email provider. Any pre-existing auto-responses
should apply, based on your email provider's settings
Example email
Email Form Submitted by:
Sarah Johnson <sarah@company.com> // Name Field Input, Email Field
Input
Reply-to Header:
<sarah@company.com>
Menu Path:
Order Cancellation/ Issue with my order/ Refund
Custom Instructional Message:
Enter order number, merchant name and date of transaction.
Message Body
Hello Support,
GenShips charged me twice for the same order. Order #123-4567890-XYZ
Order placed on 01.02.2020 for item AcmeProduct. Can you please help me
with a refund?
Apply the email channel to a queue
Please see Setting up and Assigning Agents to Channels and Queue Menus:
IVR, Mobile, Web for steps
in both the Web and App SDK sections.
End-user experience
When there are multiple options, the end-user can select the Email
option.
Web SDK
Once the Email option is selected, consumers have the ability to
enable a simple rich text editor and bold, underline, or italicize
their message, or add ordered and unordered lists.
There is a 10,000 character limit
Format can be applied from the toolbar, or from common hotkeys
such as CMD+B to bold
Consumers can also upload up to 5 separate attachments. The total
maximum size of all attachments combined cannot exceed 18MB
A confirmation screen appears once the message is sent.
Mobile SDK
All Mobile SDK functionality is the same as the Web SDK with these
notable exceptions:
Mobile SDK supports Picture and Video attachments up to 18MB
Mobile SDK allows for multiple file types to be uploaded to the
same message
Mobile SDK supports uploading all file types (Text, Picture,
Video)
No rich text editor functionality
Does not support reCAPTCHA
Setting up and assigning agents to channels and queues: IVR, mobile, web
Overview
Channels are configurable and should be enabled and set up individually.
IVR (Interactive Voice Response) is your standard phone line channel
or entry point. You can assign multiple languages, numbers, and many
other configurations once enabled.
Mobile is used once the CCAI Platform SDK is installed in your
customer-facing Android and/or iOS app.
Web channel requires the configuration of the Web SDK on one or more
of your webpages.
Once channels are enabled, and call or chat channels have been assigned
agents, you are ready to handle end-user questions and requests.
Details
At least one agent must be assigned to a call/chat queue for the
queue to be enabled
Agents can only be assigned to a leaf queue, so if there is a
sub-queue associated, agents must be assigned to one of the
sub-queues
Queue menus are set up and ready to use when the color turns from
red to white
If enabling multiple languages, see Enabling Multiple
Languages
Assign agents to the IVR channel
Go to Settings > Queue.
Toggle the switch to On .
Click Edit / View .
Queue menu names are listed in the left panel. Select a queue to
edit by clicking anywhere next to the name of the queue.
Check the box next to Instant Voice Call .
Click Assign agents to go to the agent assignment page.
Enter the agent names or team names, then click Save .
Follow the steps for either Cascade
Groups
or Percent Allocation
Groups
to use an advanced routing configuration.
Assign agents and configuring the mobile channel
Go to Settings > Queuex .
Click Edit / View in the Mobile panel.
Queue menu names are listed in the left panel. Select a queue to
edit by clicking anywhere next to the name of the queue.
Mark the checkbox for Email to show an email option to
customers. Set the email address and instructions for the message
field, then click Save Email .
Enter an Email address that will appear as the 'Sender', and check
the 'Email' box. This will automatically save the email address
that you entered.
(optional) Enter any Instructions for the Message field to appear
just above the Message field.
If you enabled either of the optional settings then make sure to
click Save Email .
Mark the checkbox for Chat to show chat as an option for this
queue.
Mark the checkbox for Scheduled Voice Call to show an option for
customers to select from a list of available times to receive a
call. See
Mark the checkbox for Instant Voice Call to show an option in
the SDK for customers to place a call via the app.
Click Assign agents next to each of the options enabled for the
queue.
Follow the steps for either Cascade
Groups
or Percent Allocation
Groups
to use an advanced routing configuration.
If using Mobile calls, set up the fallback to IVR setting for each
queue. Step-by-step instructions see Mobile: PSTN
Fallback .
To hide the menu option so that it is not shown as an option in the
SDK, toggle Hide Selection from Menu to Hide.
To direct consumers to a message, phone number, or voicemail, use
Automatic Redirection. More information here: Automatic
Redirection .
For Custom After Hour Message Deflection Options Mobile and Display
After Hour Deflection Message details, see Mobile and SDK
Messages .
Enable and add agents to the web channel
Go to Settings > Queue .
Toggle the switch to On .
Click Edit / View to access the editing section for queues
within that channel.
Queue names are listed in the left panel. Select a queue to edit
by clicking anywhere next to the name of the queue.
Mark the checkbox for Email to show an email option to
customers.
Enter an Email address that will appear as the 'Sender', and check
the 'Email' box. This will automatically save the email address
that you entered.
(optional) Enter any Instructions for the Message field to appear
just above the Message field.
(optional) Check the Enable reCAPTCHA box to help prevent spam
emails.
If you enabled either of the optional settings then make sure to
click Save Email .
Mark the checkbox for Chat to show chat as an option for this
queue.
Mark the checkbox for Scheduled Voice Call to show an option for
customers to select from a list of available times to receive a
call.
Mark the checkbox for Instant Voice Call to show an option for
customers to receive a call-back call to the phone number they
enter.
Click Assign agents next to each of the options enabled for the
queue.
Enter the agent names or team names, then click Save .
Follow the steps for either Cascade
Groups
or Percent Allocation
Groups
to use an advanced routing configuration.
To hide the menu option so that it is not shown as an option in the
SDK, toggle Hide Selection from Menu to Hide.
To other options than directing consumers straight to an agent, use
Automatic Redirection. More information here: Automatic
Redirection .
To direct an end-user directly to this queue, use a Direct Access Point. See
Direct Access Points (DAPs) .
For Display After Hour Deflection Message settings , see Mobile and Web
SDK messages .
IVR: Add and edit queue menus
Setting up the queue menus for the IVR channel shapes your customer's
journey, your agent's assignments, and has hundreds of configuration
possibilities. The first step of the configuration is to build out the
structure of the queues or sub-queues and name each. Queue menus can be
set to route to a specific group of agents, deflect to messages, other
queues, phone numbers, or voicemail, and many features can be applied at
the queue level for specific customization.
Once you complete the below steps, move forward to enable agents.
Details
and tips
Due to the number of digits on a keypad, there's a 9 top-level
queue menu limit
If you need to more than 9 queues, nest more queues within a
top-level queue
All numbers assigned to your environment will default to the top of
the queue unless otherwise assigned as Direct Access points (DAPs)
If you are using multiple languages, numbers will default to the
language selection message, then when the language is selected, will
route to the top of the menu structure for the selected language
If you want to hide a queue from a caller who dials into a number
that goes to the top of the queue, toggle the Hide Selection From
Menu option to Hide in the menu settings
For internal transfers to teams or groups not available to callers,
create one queue, hide the option from callers, and create all the
necessary sub-queues for agents to pick from for transfers
Once your queues are set up, you can see the numbers that the caller
needs to select. If there are no numbers next to the option, the
queue has been hidden.
In the example below, the first option can be selected by pressing
3, and the "Hidden VIP" menu would not be available as an option
to press. Hidden queues can be accessed using Direct Access Points
(DAPs) .
Admin configuration
Enable the IVR channel
Go to Settings > Queue.
Toggle to On to enable the IVR channel. If toggled off while
customers call your support number, callers will hear: "Sorry this
number is not available right now" and be disconnected.
Add and edit queue menus
You can build and edit the structure of your menu just like using a text
editor by using your keyboard.
Click Edit / View to goto the editing section for queue menus
within that channel.
Click Edit to add and edit queues on the IVR Menu Structure
page.
Click into the New Item line to type in the first queue menu
name. The queue name will only play to the customer if
text-to-speech is used for reading queue options.
Press return/enter to create a new queue menu below.
Press return/enter + tab to create a sub-queue.
Press shift + tab to move back if you pressed tab and want to go
back a level.
If Mobile or Web queues are set up, you can copy them over by
clicking Copy Queue From in the top of the edit screen.
Click the x next to the queue name to delete a queue option.
Click on the grid to move queue options up or down in the list.
Click Done to save your new queue menus.
Allow transfers to queue
This setting allows you to enable or disable transfers to go into queue
(at the queue level configuration). By default, this is turned ON.
The specific Queue will be hidden from the Queue Transfer menu in the
Agent Adapter, if the Allow transfers to Queue is turned OFF.
Queue menu names are listed in the left panel. Select a queue to
edit by clicking anywhere next to the name of the queue.
In the setting panel, toggle the Allow transfers to Queue to
On .
Queue transfers permissions will be saved.
Mobile: Add and Edit queue menus
Overview
Setting up the queues for your Mobile SDK shapes your customer's
experience, dictates agent assignments, and has hundreds of
configuration possibilities. The first step to the configuration is to
build out the structure of the queues or sub-queues and naming each. The
queue names will be displayed to customers within the Mobile SDK.
Queues can be configured to enable specific channels (email, call,
chat), the assignment of Agents and Teams to each channel, and many
features can be applied at the queue level for specific customization.
If you are using the multiple mobile app configuration, you will need to
have a specific setup so that each mobile app has a top-level queue and
is assigned a DAP. See Multiple Mobile Apps Technical
Guide
for details.
Once you complete the below steps, move forward to Enabling and
Assigning Agents to Channels: IVR, Mobile,
Web .
CCAI Platform configuration
Enable the mobile channel
Go to Settings > Queue .
Toggle On to enable the Mobile Channel.
Note: If turned off while customers contact support through your
app, end-users will see the following message:
"Sorry, customer support is not available now."
Add and edit queues
You can build and edit the structure of your queues just like using a
text editor by using your keyboard.
Go to Settings > Queue .
Click Edit / View to go to the editing section for queue menus
within this channel.
Click Edit to view the Mobile Menu Structure page.
Click into the New Item line to type in the first queue menu
name. These queue names will be displayed to customers in the Mobile
SDK.
Press return/enter to create a new queue menu below.
Press return/enter + tab to create a sub-queue.
Press shift + tab to move back if you pressed tab and want to go
back a level.
If IVR or Web queues are set up, you can copy them over by clicking
Copy Queue From in the top of the edit screen.
Click the X to delete a queue option.
Click and drag the icon to move queue options up or down on the
list.
Click Done to save.
Restrict queue transfers
CCAI Platform lets you restrict the queues and teams that can transfer
a session, and the queues and teams that can receive a transferred session. This
lets you control the ability of agents to transfer sessions and receive
transferred sessions based on the queues or teams that they belong to. You can
configure transfer restrictions for IVR sessions, mobile call and chat sessions,
and web chat sessions.
Configure queue transfer restrictions
You can configure transfer restrictions based on the queues that agents belong
to.
To configure queue transfer restrictions, follow these steps:
In the CCAI Platform portal, click Settings > Queue . If you don't
see the Settings menu, click menu
Menu .
Depending on the channel that you want, do one of the following:
In the IVR (Interactive Voice Response) pane, click Edit / View .
In the Mobile pane, click Edit / View .
In the Web pane, click Edit / View .
Click the queue that you want to edit.
In the Settings pane, next to Transfer Restrictions , click
Configure .
Click the Transfer Restrictions toggle to the on position.
To configure incoming transfers, click one of the following:
All queues : this allows transfers into this queue from any other
queue. Agents can receive transfers from any queue.
No queues : this prevents transfers into this queue from any other
queue. Agents won't receive transfers from other queues.
To configure outgoing transfers, click Allow transfers from this
queue to , and then click one of the following:
All queues : this allows transfers from this queue into any other
queue. Agents can transfer calls into any other queue.
No queues : this prevents transfers from this queue into any other
queue. Agents can't transfer into other queues.
Selected queues : this allows transfers from this queue into only the
queues that you specify. Agents can transfer only to specified queues.
After clicking this, do the following:
Click the Search or select queue field. A list of queues
appears. To narrow your search, type the first few letters of the
queue that you want.
Click a queue that you want to allow transfers into.
Optional: Select the Link selected queues from other languages
checkbox to include queues for associated languages (for queues
with multiple languages). For more information, see Enabling
multiple languages for IVR, mobile, and web
channels .
Click Add Queue . A queue appears in the Transfer allowed to
list for each agent type that is associated with the queue that you
specified. If you selected the Link selected queues from other
languages checkbox, a queue also appears for each language that is
associated with the queue.
Optional: Deselect any queues that you don't want to allow transfers
to.
To select additional queues to transfer into, repeat these steps.
To prevent transfers within this queue, click the Do not allow transfers
within the same queue toggle to the on position.
Click Save .
Configure team transfer restrictions
You can configure transfer restrictions based on the teams that agents belong
to.
To configure team transfer restrictions, follow these steps:
In the CCAI Platform portal, click Settings > Users and Teams . If
you don't see the Settings menu, click menu Menu .
Do one of the following:
To create a new team, do the following:
For Teams , click Add a Team . The Add Team dialog
appears.
Configure the settings in the dialog as shown in Add, view, and
edit teams .
To edit an existing team, do the following:
For Teams , next to the team that you want to edit, click edit Edit . The Edit Team
dialog appears.
Go to Transfer restriction .
To configure incoming transfers, click one of the following:
All teams : this allows transfers to this team from any other team.
Agents can receive transfers from any team.
No teams : this prevents transfers to this team from any other team.
Agents won't receive transfers from other teams.
To configure outgoing transfers, click Allow transfers from this team
to , and then click one of the following:
All teams : this allows transfers from this team to any other team.
Agents can transfer calls to any other team.
No teams : this prevents transfers from this team to any other team.
Agents can't transfer to other teams.
Selected teams : this allows transfers from this team to only the
teams that you specify. Agents can transfer only to specified teams.
After clicking this, do the following:
Click the Search or select team field. A list of teams appears.
To narrow your search, type the first few letters of the team that
you want.
Click a team that you want to allow transfers to.
Click Add Team . A team appears in the Transfer allowed to
list for each role that is associated with the team that you
specified.
Optional: Deselect any teams that you don't want to allow transfers
to.
To select additional teams to transfer into, repeat these steps.
To prevent transfers within this team, click the Do not allow transfers
within the same team toggle to the on position.
Click Save .
Configuration
inheritance
When you configure transfer restrictions for a queue, all subordinate queues
inherit the configuration. You can click any subordinate queue and change its
configuration so it no longer matches its parent. You can reset the
configuration of a subordinate queue to match its parent at any time.
To reset the transfer configuration of a subordinate queue to match its parent,
follow these steps:
In the CCAI Platform portal, click Settings > Queue . If you don't
see the Settings menu, click menu
Menu .
Depending on the channel that you want, do one of the following:
In the IVR (Interactive Voice Response) pane, click Edit / View .
In the Mobile pane, click Edit / View .
In the Web pane, click Edit / View .
Click the subordinate queue that you want to reset.
Click Reset to parent , and then click Save .
Web: Add and edit queues
Overview
Setting up the queues for your Web SDK channel shapes your customer's
experience, dictates agent assignments, and has hundreds of
configuration possibilities. The first step to the configuration is to
build out the structure of the queues or sub-queues and naming each. The
queue names will be displayed to customers within the Web SDK.
Queues can be configured to enable specific channels (email, call,
chat), the assignment of Agents and Teams to each channel, and many
features can be applied at the queue level for specific customization.
Once you complete the below steps, move forward to Enabling and
Assigning Agents to Channels: IVR, Mobile,
Web .
CCAI Platform configuration
Enable the Web channel
Go to Settings > Queue .
Toggle to On to enable setup of the IVR channel.
If toggled off while customers initiate W feb support, there
will never be an established connection between an agent and
end-user. Turning off does not disable the web SDK if it is already
integrated into your website.
Add and edit queue menus
Go to Settings > Queue.
Click Edit / View to goto the editing section for queue menus
within that channel.
Click Edit to add and edit queues on the IVR Menu Structure
page.
Click into the New Item line to type in the first queue menu
name. This name will be displayed to customers in the Web SDK.
Press return/enter to create a new queue menu below.
Press return/enter + tab to create a sub-queue.
Press shift + tab to move back if you pressed tab.
If Mobile or IVR queues are set up, you can copy them over by
clicking Copy Queue From in the top of the edit screen.
Note: This will replace any existing queues.
Click the x next to the queue name to delete a queue option.
Click on the grid to move queue options up or down in the list.
Click Done to save your new queue menus.
Overcapacity deflection per-queue
Overview
Overcapacity deflection is triggered when a session is initiated, but
the estimated wait time is larger than the set threshold in Settings
> Call or Settings > Chat . The global overcapacity
selection will be used as the default, but this setting can also be set
at the queue level. For more details on the default overcapacity option,
please see this article: Call Settings: Overcapacity deflection and caller announcements .
When there's a need to force a selection for overcapacity for a
particular call flow, setting the overcapacity deflection per-queue will
direct callers where they need to go. This setting allows for only
one option, so the caller is not prompted to choose an option like they
are when using the default overcapacity option.
Overcapacity per-queue setup
Go to Settings > Queue.
Click Edit / View to go to the editing section for queue menus
within that channel.
Select the menu you want to enable overcapacity deflection for.
ToggleCustom Over Capacity deflection to Show to enable and view
overcapacity options.
Message : Plays the message typed (i.e. "We are experiencing
high volume") and then ends the call.
Queue: Select from available queue menu options to redirect the
call to.
Phone Number : Redirects to the number entered.
Voicemail : Redirects caller to leave a voicemail.
Callback : Keeps the callers place in queue and ends the call.
The caller will receive a callback when they are at the top of the
queue. Please see Call Settings: Overcapacity deflection and caller announcements
and also Custom Callback
Number
for more information.
This setting uses the Over Capacity Deflection Callback Option" message
will play. This should be configured in Settings > Languages &
Messages . For more information, see Configure IVR
messages .
Click Set Overcapacity Deflection to save.
Estimated wait time prediction calculation
Estimated wait time (EWT) is used in determining when to launch overcapacity
deflection and for In-Web and In-App
UIs, which show wait time to end-users.
EWT for calls
For calls, EWT is calculated based on the following formula:
EWT = ((average duration in channel / active agents in channel) * (agents in
common / active agents in current queue) * (queued calls - available agents)) +
{EWT for callbacks, campaign calls, and scheduled calls}
EWT for chats
For chats, EWT is calculated based on the following formula:
EWT = (average duration in channel / active agents in channel) * (agents in
common / active agents in current queue) * (queued chats - available agents)
Note: In chat channels, the value for active agents includes a multiplier
based on the chat concurrency if the chat concurrency is >1. This is because
chat concurrency increases the amount of available chats a single agent can
handle.
Calculation considerations
The following are considered when calculating EWT:
Priority settings are considered when calculating the
number of calls or chats in queue. Only calls or chats with higher
priority than the end-user are counted.
Multiple assignments of agents are considered when calculating
available agents. For example, if the agent is assigned to only one
queue, the count is 1 . But if the agent is assigned to two queues,
the count is 0.5 . If the agent is assigned to three queues, the
count is 0.3 .
Offline agents are excluded when calculating active and available agents.
The average duration value is based on the previous hour.
10 seconds of wait time is added to the EWT for all sessions. This is to
account for channel-specific messages to the end-user.
Call recording configuration
Overview
Calls can be recorded in mono and in stereo to and from your contact
center. For more information on recording in stereo, contact support.
If Call Recording is enabled, there are various messages that can be
played by default for inbound and outbound calls.
In most cases, call recordings are stored in the CRM, and playback is
available in the CRM record where the recording is stored.
Configuration details
Calls transferred to a third party are recorded; however, once the
agent leaves the call, the remainder of the call between the
end-user and the 3rd party is redacted.
Call recording can be paused for sensitive information using call
redaction.
With Secure Payments, callers are taken through a payment flow and
call recording is automatically paused
Call recordings are saved as .mp3 files unless otherwise requested.
Global call recording settings
Note: Depending on the overall settings you have enabled, some of the following
options might not be available. To verify which options you have available
please contact Support.
Go to Settings >Call >Call Details .
Use call recording
Enable inbound call or agent initiated outbound recording for the
environment by default.
Outbound call recording configuration options will show when this is
enabled.
Record callback outbound calls
When the Callback overcapacity option is enabled, this setting will
enable Callback and scheduled call recordings.
Enable Call Recording Redaction for agents : Enables Call
Redaction.
Play Call Recording Messages : Plays a message to the caller
receiving the outbound call from an agent. Message name is Record
an Outbound Call Message and can be set up in Settings >
Languages & Messages .
Record agent-initiated outbound calls
Enables calls recording for Agent initiated calls:
Dialed outbound calls
Short call callbacks - For more information see Call recovery features .
Hang Up And Callbacks - For more information see Call recovery features .
Add a third party calls (while the agent remains on the call)
Enable Call Recording Redaction for agents : Enables Call Redaction
to be used on outbound calls.
Play Call Recording Message : Plays a message to the caller receiving
the outbound call from an agent. Message name is Record an Outbound Call
Message can be set up in Settings > Languages & Messages .
Ask permission to record
Use this setting to choose whether or not to record an outbound call
started by an agent.
To enable this option go to Calls > Call Recording and check
the checkbox Record Agent Initiated Outbound Calls.
To use this option for outbound calls, the Ask Permission to
Record option must be activated.
Record message sequence
The Ask Permission to Record Message recording is configurable at
Settings > Languages and Messages > Ask to Record .
This section allows you to specify the order in which your User
permission and Call Recording messages are played for the end-user.
For example, since outbound calls do not have an introduction message,
you can have the call recording play for consumers before the consent to
record (user permission) so they know who is calling (call recording).
Play Ask Permission to Record Message before Call Recording
Message
Play Call Recording Message before Ask Permission to Record
Message
Note: Recording message and Ask Permission to Record messages are
played in the configured order for:
Callback outbound calls - if the queue is configured for asking to
record.
Agent initiated outbound calls - if the Ask permission to record is
enabled.
Recording separation
Recording separation enables you to choose to receive separate call recordings
for each call segment rather than all of them in a single file. The ability to
keep separate call records for each conversation segment allows for more
flexible call analysis and, potentially, more efficient issue resolution. Better
record analysis allows you to identify specific portions of the conversation
where issues might have occurred, allowing you to provide more targeted training
and coaching.
To enable this feature, select the Recording Separation checkbox and select
Per segment . If you choose None , you will still receive call recordings
as a single file.
Use dual channel recording settings
Enable dual channel recording to record your call using two separate
channels, for example an end-user channel and an agent channel.
With each party's audio separated into its own track, it's easier to
use transcription and keyword analysis to examine the content of a
recording. There is also an advantage in the quality of the voice
recording when played back. When analyzing calls, dual-channel
recordings allow your call centre managers and quality supervisors to
concentrate on a single channel (only the end-user or only the agent).
Note: Configuration will affect calls from all channels, for example, IVR, Web
(Callbacks), Mobile.
This can be enabled at Settings > Call > Call Details > Call
Recording > Use Dual Channel Recording .
Selecting the checkbox will record all calls as dual channel audio
recordings.
Unchecking the checkbox will record all calls as single channel
audio recording.
Record settings at the queue level
Go to Settings > Queue.
Click Edit / View for the channel you want to set up .
Select the menu option that you want to set recording options for.
Note: If you have sub-queues, you'll need to set the recording
option in the sub-queue.
Choose a recording option for the particular queue selected.
Record : Records all calls
Do Not Record : Does not record any calls for the queue
Ask Permission to Record : Asks the caller for permission to
record
Channel
Note: This setting behaves different based on channel
IVR
When using the Ask Permission to Record option, you will need to add
the Ask to Record message found on the IVR Message Setup page.
The caller will need to press 1 to not be recorded - any other entries
or a lack of pressing one will result in the call being recorded.
Mobile SDK
Click Set Call Recording Option to save your recording choice
for the queue.
Note: These recording options only work if your call center settings
support recording calls.
Listen to call recordings
Once the call has been recorded, the recording will most likely be saved
in your CRM, depending on your configuration. The following are examples
of where it could show up in your CRM.
Zendesk
The recording shows in an audio player as part of the private comment.
Salesforce
The call recording shows as an attachment to the case or in the
CCAI Platform Session object.
Kustomer
The recording will show in-line within the Kustomer conversation.
Call redaction
Overview
Call redaction allows agents to stop recording when sensitive customer
information is being shared during a call. The time in which the agent
has initiated call redaction will not be included in the call recording.
This feature is ideal when asking customers to share PII.
To enable this feature, contact Support.
Feature details
Only agents assigned to calls from or to queues that have been
specifically enabled will see the option to redact calls
Calls initiated from an enabled queue that are transferred to a
queue without call redaction enabled will not have the call
redaction feature available
Agents need to manually initiate and end the redaction
Agents will still be able to hear during the redacted section of the
call while on the live call
Admin portal configuration
Enable call redaction for inbound calls
Go to Settings > Queue .
Click Edit / View for the channels requiring call redaction (IVR
/ Mobile / Web).
Select the menu option/s to enable call redaction. The setting is
only available for end-nodes, or child-menu options.
Toggle Enable Call Recording Redaction to the On position.
Repeat these steps for each queue menu.
Enable call redaction for outbound calls
From the Admin Portal, go to Settings > Call .
Call recording needs to first be enabled for Callback outbound calls
and/or Agent Initiated outbound calls. For more information on these
call recording types, see Recording Calls - Configuration
Options .
Mark the checkbox to enable call redaction for either or both
outbound call types.
Agent experience
From the Agent Adapter, while an active call from an enabled queue,
click on the Actions button, then click Redact .
A timer will begin and count the seconds in which call redaction is
active.
When ready, click Stop Redacting .
Click the X in the Actions menu to return to the standard call
adapter options.
CRM logging
When an agent uses the call redaction feature, the timestamps when the
call redaction started and ended will be saved on the call record.
Mobile: PSTN fallback
Overview
With the Mobile SDKs, by default, calls are made via VoIP and require a data
connection. When the mobile app detects that the data connectivity does not meet
the configured performance threshold, CCAI Platform doesn't place a
VoIP call. Instead, a fallback option to a PSTN call which does not require a
data connection. This option allows for a seamless experience for the end-user,
while still providing rich data within the CRM record.
Configuration
iOS/Android Developer : With Multiple Mobile Apps in use, the
threshold for PSTN Callback calls will be configured from within the
Admin Portal in Settings > Developer Settings > Edit
Mobile App > Fallback phone number/threshold .
CCAI Platform portal : The below configuration setting needs to be
configured per-queue.
PSTN fallback details
Routing
The PSTN fallback option will be presented after the end-user navigates
the Mobile queues. When the end-user selects to make a call and the app
determines it is in PSTN fallback mode, the PSTN call will be mapped to
a pre-configured, corresponding destination menu in the IVR queue. Since
IVR and Mobile menus are often not identical, each Mobile menu selection
needs to be paired with a corresponding IVR menu to use for fallback.
PSTN fallback to IVR set up in the CCAI Platform portal uses a queue
search that offers IVR menus. If multiple languages are used, only
the IVR menu options for that language will be available.
Example : If the Mobile menu 'Existing Customer Help' is mapped
to the IVR menu 'Customer' for PSTN fallback, and an end-user
selects 'Existing Customer Help' when PSTN fallback is active, the
call would automatically be directed to IVR queue menu 'Customer.'
If no PSTN fallback to IVR option is enabled and configured, the
PSTN fallback call will be directed to the top of the IVR structure
for that language.
If an IVR queue menu is mapped as an Mobile PSTN fallback, the queue
cannot be deleted without removing this association
Rich data
The following data is passed to the CRM ticket for the IVR fallback
call:
End-user's phone number
To gather the phone number data, the end-user is required to
input their phone number
Example phone number gathering screen in Mobile:
Selected queue menu
When the end-user makes a call via PSTN, the system retrieves
the queue name and custom data package via phone number lookup
Custom data package (as configured by your mobile development
team)
The custom data package is mapped to the correct ticket based on
the active call session with the phone number entered by the
end-user in the app
CCAI Platform portal configuration
Go to Settings > Queue > Mobile .
Select a sub-queue (Top level queues will not have this setting
available).
Scroll to the PSTN Fallback to IVR Menu section and click to
toggle the setting to ON .
Use the search field to select from IVR queues to route a PSTN
fallback call to.
Click Save PSTN Fallback to save.
Repeat this step for all Mobile sub queue menus for all languages
used.
Insert a dynamic user ID
Overview
This feature enables the CCAI Platform portal to work with your mobile or web
SDKs User ID/unique ID as a session variable for tracking or content
personalization. When the variable is included in the Automatic Redirect
to website option, the User ID value is dynamically inserted into the
URL.
Example use cases:
Show order details for a specific user via Mobile or Web queues
Present your users with product offerings based on their locations
by directing to a specialized web page based on user ID
Mobile FAQ page landing can be personalized to show the right page
for the user's membership tier based on the User ID
Feature details
If mobile or Web SDK passes User ID/identifier to CCAI Platform portal, it can be
inserted as a session variable into your manual deflection webpage
or FAQ link
From the Admin Portal, an admin can add "@@USER_ID@@" into the URL
in Manual Deflection to Webpage field under Mobile or Web queues to
dynamically retrieve and insert User ID
From the Admin Portal, an admin can add "@@USER_ID@@" into the URL
for Mobile FAQ to dynamically retrieve and insert UID
CCAI Platform portal configuration
Automatic redirect
Go to Settings > Queue > Mobile OR Web .
Click on the queue you want to redirect to a URL.
Click to show Automatic Redirect options, then click
Website .
Enter the mobile-friendly website and add the User ID identifier
as a session variable to the URL by including " @@USER_ID@@ " in
the URL for tracking or content personalization purposes.
Example: https://www.domain.com?uid=@@USER_ID@@
Note: Mobile-friendly webpages are always highly recommended
even if the end user is accessing the web SDK, they could be on
mobile.
Mobile FAQ
When enabled, Mobile FAQ allows you to show a webpage while remaining in
the app, with an option of showing a phone number as well on the screen.
To enable contact support,
Go to Settings > Operation Management .
Scroll to the Mobile: Display FAQ section and insert
@@USER_ID@@ into the URL where needed.
Ex : https://www.domain.com?uid=@@USER_ID@@
Click Set FAQ .
Session variable output
The User ID variable format inserts the user ID value only.
For the example "https://www.domain.com?uid=@@USER_ID@@," If user_ID
value is '12345' for a given session, the rendered URL would be:
https://www.domain.com?uid=12345.
Custom fallback IVR at the queue level
For top-level queues, custom IVR fallback selection options are available in the
queue level menu settings. You can specify a fallback destination for when an
end-user fails to select a queue during IVR navigation.
Enable custom fallback IVR navigation for top-level queues
Navigate to Settings > Queue > IVR and select your desired top-level
queue.
In the side menu queue settings, navigate to
Custom Fallback IVR Navigation and select Configure .
Toggle Custom Fallback IVR Navigation to On .
Set the number of times the IVR menu will repeat.
Select the first available menu : If the caller does not make a
selection after the specified number of repetitions, this option
automatically places them in the first menu option available to
them.
Select the last available menu : If the caller does not make a
selection after the specified number of repetitions, this option
automatically places them in the previous menu.
Direct to voicemail : The caller will be redirected to voicemail.
End call : The caller will be disconnected.
Select a specific menu : The caller will be routed to the menu of
your choosing. Select your menu language, then choose from the
available options.
Click Save.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
