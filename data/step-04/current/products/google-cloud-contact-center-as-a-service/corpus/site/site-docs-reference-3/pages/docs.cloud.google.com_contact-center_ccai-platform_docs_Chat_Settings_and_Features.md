---
title: "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs/web-sdk-api
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features
  title: "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\
    \ \_|\_ Google Cloud Documentation"
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
Chat Settings and Features
Stay organized with collections
Save and categorize content based on your preferences.
About External Deflection Links
The aim of External Deflection Links is to provide another channel where
information is readily available for consumers, like an FAQ page, and
where they may be able to get an answer faster. It will also help
contact centers reduce inbound requests to Agents.
When a consumer clicks on an external deflection link:
Consumers will also be able to return to the support experience after
visiting a redirection link, so they can easily get more help from an
agent if the redirect didn't resolve their request or question.
Mobile Experience
In the Mobile SDK, external deflection links will be displayed
underneath the available call chat and email options. The icon, name,
and call to action, are displayed as configured on the Deflection Links
overview page.
Visiting an External Deflection Link
When the consumer clicks on the external deflection link, the configured
mobile deep link launches the associated app.
Returning to Support Session
When returning to the support session after having visited an external
deflection link, the consumer is presented with a pop-up asking Did
that resolve your issue?
The option buttons available are No or Yes .
If a consumer clicks No : The pop-up is closed and the respective
queue's contact options are displayed again.
If a consumer clicks Yes : The pop-up is closed and the support
session is ended. The consumer is returned to the originating app's
screen where they initiated the support session.
External Deflection Links Time Limit
When returning to the support experience after 5 minutes of visiting
an external deflection link, the pop-up is not presented, and the help
session is terminated.
The user is returned to the originating screen where they initiated the
support session.
Web Experience
The icon and name displayed here will be retrieved from your admin
configuration on the Deflection Links overview page in the CCAI Platform portal.
When there are less than five alternatives , the Web SDK displays
external deflection links as follows:
When there are more than five alternatives , the Web SDK displays
external deflection links as follows:
Visiting an External Deflection Link
When the consumer clicks on the external deflection link, the configured
URL opens within a new tab in the user's active browser window.
Returning to the support session after visiting an external deflection link
When the consumer returns to the support session, within 5 minutes,
after having visited an external deflection link, they're presented with
a pop-up asking Did that resolve your issue?
The option buttons available are No or Yes .
When a consumer clicks No : The pop-up is closed and the
respective queue's contact options are displayed again.
When the consumer clicks Yes : The pop-up is closed and the
support session is ended.
The user is returned to the originating screen where they initiated the
support session.
External Deflection Links Time Limit
When returning to the support experience after 5 minutes of visiting an
external deflection link, the pop-up is not presented, and the help
session is terminated.
The user is returned to the originating screen where they initiated the
support session.
External Deflection Links: Admin Configuration
Overview
External Deflection Links give you the ability to offer additional
support options in addition to our standard chat, call and email
options. For example, add a Billing FAQ link to your Billing queue or
link to your social media channels. External Deflection lInks can be
configured as the only support options.
The external deflection link appears in the UI based on how it is
created in the Add Deflection Links configuration panel (for example:
the name, a call to action, and the icon upload).
Prerequisites
For Web: Web SDK version 2.2 or later
For Mobile: Mobile SDK version 0.41.0 or later
Admin Configuration
Go to Settings > Chat > Mobile & Web > External
Deflection Links .
Click on View Links.
The Deflection Links Overview Page will load.
If Deflection Links are configured a list of links will appear.
This list will be empty if no Deflection Links are set.
Deflection Links Overview Page
The Deflection Links overview page lists all currently configured
external deflection links.
Further information displayed includes: if the link is enabled (On/Off),
configuration details (display name, url, icon) as well as assigned
queues.
Adding a Deflection Link
To add a deflection link, click Add Deflection Link .
A new window, the Add Deflection Links configuration panel will
open.
Add Deflection Links Configuration Panel
The identification, name, and url are all required to be entered in
this panel to add the deflection link. This is where you may add a call
to action (optional and just for mobile). Icons will also be uploaded
here.
The following fields are required:
Identifier : Enter the name used within the Portal only (internal
reference). For example, Spanish version FAQ.
Displayed Name : Enter the name to be displayed to the consumer.
If using another language you will need to add the name here in that
language.
URL : Enter the URL to where the deflection link will direct.
[ optional ] Call to Action (only applicable to Mobile): Enter a
call to action which will appear like help text below the name of the
Link. For example, Join our community support members here!
Upload Icons
Note: If icon upload fields are left blank, the default deflection
icon will show for
Mobile and Web.
Mobile Icons
Enter the Mobile Icon name:
The icon name must match the icon's file name in the iOS asset
catalog and/or the Android drawable folder. Please check the iOS and
Android README file for more details.
Web Icon
By default, the default deflection link web icon is displayed.
If a web icon has been previously uploaded that icon will display.
To upload a web icon:
Click on the web icon {height="22"} to
select a file from your file explorer.
Recommendation : For the best display experience, upload a . svg
file .
The uploaded icon will now display.
Click Save .
The Add Deflection Links panel will close.
The external deflection link you just set is now available as a new
support option at the bottom of the Deflection Links overview
page.
This new deflection link will start off without being assigned to
any queues and will start in the On state.
Assigning an External Deflection link to a queue
Go to Settings > Queue >Mobile or Web .
Click on a leaf-queue. A panel on the side shows the queue Settings.
Check the External Deflection Links checkbox.If that queue does
not have an assigned external deflection link, then No deflection
links selected is displayed.
Click Set Deflection Links to open the dropdown menu.
Select which external deflection links you would like to assign to
the queue so that is appears to consumers in the UI.
Click Add .
Check the External Deflection Links checkbox.
A success message Updated Channel setting will display.
Setting External Deflection Links as an option
Set an external deflection link as an after-hours deflection and/or
an overcapacity deflection.
After Hour Deflection Option (Mobile and Web only)
Go to Settings > Chat go to Mobile > Web Chats > After Hour
Deflection Options .
Under After Hours Deflection Options , click Set Deflection
Links to open the dropdown menu. The dropdown component displays
the list of options that are turned On in the Deflection Links
overview page. By default, no custom deflection links are selected.
Select which external deflection links you would like to assign as
an After Hours Deflection option.
Click Add .
Click Set Deflection .
Overcapacity Deflection Option
Go to Settings > Chat .
Go to Mobile > Web Chats >Overcapacity Deflection Options .
Click Set Deflection Links to open the dropdown menu. The
dropdown component displays the list of options that are turned On
in the Deflection Links overview page. By default, no custom
deflection links are selected.
Select which external deflection links you would like to assign as
an Overcapacity Deflection option.
Click Add .
Click Set Deflection .
This globally applies the selected deflection links as After Hour /
Overcapacity deflection options.
Mobile Queue-specific Custom After Hour Deflection
External deflection links can be set for a custom after hour deflection.
This is currently only available Mobile as custom After Hours is not
supported for Web.
Go to Settings > Queue > Mobile > Custom After Hour Deflection
> Deflection Options .
Under Deflection Options , check the External Deflection
Links checkbox. The number beside External Deflection Links
indicates how many deflection links are available.
Select which external deflection link to apply.
Click Add .
Click Set Custom After Hours Options .
This applies the selected deflection link to the respective queues After
Hour deflection options.
Consumer Management
Consumer Privacy
You can remove call, chat, or email data to ensure consumer privacy. When a new
session starts between a consumer and an agent, a Contact Center AI Platform (CCAI Platform) ID is
created. Use this ID to remove the data.
Go to Settings > Consumer Management > Consumer
Privacy .
Enter each CCAI Platform ID and separate the IDs with a comma or a space.
Click Delete to confirm the consumer data is made private, and
click Clear to reset the list of IDs entered.
Phone Number Blocklist
Adding a number here will prevent this Call or SMS from being handled.
The phone number entered will be applied for Calls (IVR) and SMS
Channels.
Add Phone Number
::: warning
Add the Country Code to ensure the phone number will be blocked.
:::
Go to Settings > Consumer Management > Phone Number Blocklist .
Click + Add Phone Number .
Duplicate numbers present an error message.
Enter the Phone Number (include the country code).
Click Save .
To remove a phone number from the list, click the X .
Developer Settings
API Credential Management
::: warning
::: title
Deprecation Notice for API Company Key and Secret Value
:::
API Credential Management
The Company Key and Secret Value is being deprecated as of September 30,
2022.
A new Credential Management interface is available at Settings >
Developer Settings > API .
IMPORTANT:
The token replaces the password value on the API requests. This was
previously the Company Secret.
Use your subdomain (without the https://) as the username. For
example, if the URL you visit is https:// foobar .domain.co then the
subdomain value for your username is foobar . This was previously
the Company Key.
Create as many API credentials as you need for internal use.
Please be aware that some third-party integrations require the creation
of API credentials.
As a result, depending on the integrations you have, you may already see
API credentials configured for Advanced Reporting, or others.
If you lose or forget your token, you can regenerate the
token .
Be sure to store this in a secure location.
:::
The API Credential Management Settings allow you to:
add new API credentials
disable / enable credentials
regenerate the secret token
or edit the name of an existing credential
Add an API credential
Go to Settings > Developer Settings > API Credential
management .
Click the + Add API Credential button. An Add API Credential
message will open.
Enter the desired Name .
Click Create .
Edit the name of an API credential
Go to Settings > Developer Settings > API Credential
management .
Click the Edit icon to update the
name.
Generate a new token
::: warning
When creating a new credential or regenerating a token, the secret token
will only be displayed once. Please be sure to store this in a secure
location.
:::
Click the Refresh icon to generate a
new token.
A warning message appears.
Warning : Regenerating a new token will immediately invalidate the
previous token.
Anything using the previous token will generate authentication errors.
Are you sure?
Cancel: there is no new token generated.
Regenerate: a new token is regenerated. Copy the new token and
store in a secure place.
Chat Routing - Auto Answer
Overview
Auto Answer connects chats automatically to agents, decreasing wait time
and maximizing agent productivity. Auto Answer applies to both inbound
chats and transfers. A red indicator flashes to alert the agent before
the chat connects. Auto Answer is a global setting and therefore applies
to all queues.
Feature specifics
Configuration notes
Auto Answer is only available when
Deltacast routing is
enabled.
Auto Answer is enabled at the global level on the Chat
Settings page. If
enabled, all Web and Mobile chat queues will use Auto Answer for
routing.
Existing queues are set to Auto Answer as soon as the feature is
nabled.
Queues added after the feature is enabled are set to Auto Answer by
default.
Agent status and availability
To prevent agents from receiving Auto Answer chats before they're
ready, Admins can set an unavailable default status for agents who
have just logged in. The setting is found in Settings >
Operation Management > Agent Statuses .
Multiple chats can be routed to agents based on Settings > Chat
> Chat Details | Maximum number of chats.
Routing Details
A chat is routed and assigned via Deltacast to the longest idle
agent in the assigned group for the queue.
Please see Chat Routing: Multicast and
Deltacast for all
routing logic details
Agent experience
When the chat is assigned to an agent, and is approximately three
seconds from being connected, the agent receives a browser
notification, New Chat Picked Up.
When the agent clicks on the notification, they are taken to the
Chat Adapter.
The newest chat is always at the top of the chat list.
CCAI Platform portal configuration
Enable Deltacast
From the CCAI Platform portal, go to Settings > Operation Management
> Deltacast > Chat .
Set Deltacast to On.
Click Set Deltacast to save.
Enable Auto Answer
From the CCAI Platform portal, go to Settings > Chat.
Set Auto Answer to On. The setting is auto-saved and all chat
queues will now use Auto Answer.
Setting the default Agent Status
To prevent agents from being assigned chats before they're ready,
Admins can set an unavailable default status for agents who have just
logged in. All default and custom statuses other than "Available" are
considered unavailable, allowing the agent to self-select when they are
ready to take chats by changing their status to Available.
From the CCAI Platform portal, go to Settings > Operation Management
> Agent Status.
Select to use the status the agent was in before log out or set a
specific default status.
For more information, see Agent Statuses .
Auto Answer behavior combined with other features
Deltacast
Deltacast for Cascade / % Allocation
Multicast
Transferred chats
Monitoring and reporting
Monitoring
Auto Answer can be monitored on the chat page, where admins see in
real-time which chats are:
Auto Answered
Manually picked up
Reporting
The following reports identify which chats were Auto Answered and which
chats were manually picked up:
Agent Performance Report
Agent Timeline Report
Agent Summary Report
Individual Chat History Report
Please see Report Builder for more information about
pulling reports.
API
Developers can use the CCAI Platform portal API to retrieve the chat answer type (auto
or manual) from the /chats endpoint.
Field: answer_type
Type: string
Required: Yes
Values:
auto
manual
Chat check-in
Chat check-in ensures that end-users are present and ready to engage before
the system connects them to a human agent. This decreases the average agent
handle time by eliminating the time lost when agents wait for end-users who have
abandoned a chat.
With chat check-in, end-users are required to check in before connecting with an
agent. A check-in dialog displays to the end-user based on criteria you
configure, such as wait time and queue position. If the end-user doesn't check
in after the time you specify, the system removes them from the queue. Chat
check-in is available for the web channel.
Configure chat check-in at the global level
To configure chat check-in at the global level, follow these steps:
In the CCAI Platform portal, click Settings > Chat . If you don't
see the Settings menu, click menu
Menu .
Go to the Web & Mobile Chat Settings pane.
In the Check In section, click the Web toggle to the on position.
In the Require consumers to check in after waiting __ seconds field,
enter the number of seconds after which the check-in dialog appears. The
check-in dialog requires an end-user to confirm that they're ready to chat.
In the Check In modal appears once consumer reaches queue position __
field, enter the queue position that an end-user must reach before the
check-in dialog appears. The check-in dialog requires an end-user to confirm
that they're ready to chat.
Note: Queue position is based on both the number of active agents assigned
to the queue and the number of end-users waiting in a queue. For example, if
there are 50 end-users in the queue and 10 active agents assigned to the
queue, 10 end-users are in position 1 in the queue.
In the Check In modal will time out after __ seconds field, enter the
number of seconds after which the check-in dialog times out, the time-out
dialog appears, and the end-user is removed from the queue.
Configure whether to reconnect timed-out end-users at the beginning or the
end of the queue.
Click Save Chat Settings .
Configure chat check-in at the queue level
To configure chat check-in at the queue level, follow these steps:
In the CCAI Platform portal, click Settings > Queue . If you don't
see the Settings menu, click menu
Menu .
In the Web pane, click Edit / View .
Click the queue that you want to edit.
Go to the Custom Chat Configuration section, and then click
Configure . The Custom Chat Configuration pane appears.
In the Check In section, click the Web toggle to the on position.
In the Require consumers to check in after waiting __ seconds field,
enter the number of seconds after which the check-in dialog appears. The
check-in dialog requires an end-user to confirm that they're ready to chat.
In the Check In modal appears once consumer reaches queue position __
field, enter the queue position that an end-user must reach before the
check-in dialog appears. The check-in dialog requires an end-user to confirm
that they're ready to chat.
Note: Queue position is based on both the number of active agents assigned
to the queue and the number of end-users waiting in a queue. For example,
if there are 50 end-users in the queue and 10 active agents assigned to
the queue, 10 end-users are in position 1 in the queue.
In the Check In modal will time out after __ seconds field, enter the
number of seconds after which the check-in dialog times out, the time-out
dialog appears, and the end-user is removed from the queue.
Configure whether to reconnect timed-out end-users at the beginning or the
end of the queue.
Click Save .
End-user experience
The following describes the end-user experience after you configure chat check
in. For more information, see Configure chat check-in at the global
level and Configure chat check-in at the
queue level .
When the check-in criteria are met, the system displays a check-in dialog to
the end-user before connecting with an agent. Check-in criteria are based on
a combination of the end-user's current wait time and queue position. A
notification sound plays every 10 seconds until the end-user confirms or the
check-in dialog times out.
The check-in dialog
If the end-user minimizes the browser for a web SDK chat session or switches
to a different browser tab, the system requires them to check in. This
occurs regardless of their wait time in the queue.
If the end-user checks in within the timeout period you specify, the system
connects them to an agent when one is available.
If the end-user doesn't check in within the timeout period that you specify,
the system removes them from the queue and displays a timeout dialog. The
end-user can choose to rejoin the queue or exit the chat. You can decide if
the system adds the end-user to the beginning or end of the queue if they
decide to rejoin.
The timeout dialog
Troubleshoot
If chat check-in is not configured
correctly, support bottlenecks can occur due to agents being idle while waiting
to be connected with an end-user. This can occur for the following reasons.
End-users check in too slowly
Solution : Decrease the time that an end-user has to check in after the check
in dialog appears. When the check-in dialog times out, the system removes the
end-user from the queue. If feasible, Google recommends this as a first step.
See step 6 of Configure chat check-in at the global
level and step 8 of Configure chat check
in at the queue level to edit the Check
In modal will time out after __ seconds field.
End-users aren't prompted to check in soon enough
Solution : Increase the queue position threshold. This displays the check-in
dialog to more end-users at once. Google recommends this as a second step
because it increases the likelihood of abandoned chats connecting to an agent.
If this value is too high, end-users might experience extended wait times after
checking in. See step 5 of Configure chat check-in at the global
level and step 7 of Configure chat check
in at the queue level to edit the Check
In modal appears once consumer reaches queue position __ field.
The percentage of abandoned chats is too high
This is often caused by excessive wait times.
Solution : Turn on or reconfigure overcapacity deflection to reduce wait
times. Do one or both of the following:
Deflect end-users to a different queue or channel.
Decrease the threshold for overcapacity deflection.
For more information, see Overcapacity Deflection .
Chat check-in events
For information about configuring the web SDK to listen for chat check-in
events, see Chat check-in .
Sensitive data redaction
You can configure Contact Center AI Platform (CCAI Platform) to redact sensitive data from chat
sessions in real time in the agent adapter, in the web SDK widget, and in chat
transcripts. This helps prevent unauthorized people from accessing sensitive
data. This capability is available for the web channel.
Before you begin
Before you begin, do the following:
Integrate your CCAI Platform instance with Sensitive Data
Protection (DLP API) .
Prepare a service account key file (JSON format) from your Google Cloud
account to upload to the CCAI Platform portal.
Create Sensitive Data Protection inspection
and de-identification templates.
Caution: Follow Google's best practices for managing service account keys .
Add a redaction platform
To add a redaction platform, follow these steps:
In the CCAI Platform portal, click Settings > Developer Settings .
If you don't see the Settings menu, click menu Menu .
In the Redaction Platform pane, click Add platform . The Add
Redaction Platform dialog appears.
In the Name field, enter a name for your platform.
In the Service list, click Google Cloud DLP API .
Click Add .
Click Upload key , and navigate to your service account key file. A valid
key is required to activate the redaction platform.
When the key is verified, click Save . Your new platform is added to the
Redaction Platform pane with a Valid status and the toggle in the on
position.
The system fetches and syncs all available inspection and de-identification
templates from your Google Cloud account. For more information, see Before
you begin .
Redaction platform statuses
Here are the redaction platform statuses:
Valid : The platform is active and all of its templates are valid and
accessible.
Invalid : All of the templates in the platform are invalid or missing.
Redactions linked to this platform aren't functional.
Needs attention : One or more templates in the platform are invalid.
Redactions linked to this platform might not be functional until the
platform is fixed.
When a platform's status changes to Needs attention or Invalid , the
system sends an email notification to the administrator.
Configure automatic redaction settings at the global level
To configure automatic redaction settings at the global level, follow these
steps:
In the CCAI Platform portal, click Settings > Chat . If you don't
see the Settings menu, click menu
Menu .
Go to the Automatic Redaction pane and click the toggle to the on
position.
To configure the default template, do the following:
In the Platform list, select a platform.
In the Inspect list, select the type of information that you want to
redact. Examples are SSN, CC, Phone number, Drivers license number,
Passport ID number, Street address, Custom numbers (for example, bank
account information).
In the De-identify list, select a de-identifier for the system to
use to redact sensitive information. For example, ### , or *** .
To configure the redaction settings, do the following:
To redact sensitive data from all incoming messages, select the
Automatically redact all incoming messages to agents checkbox.
Configure whether you want sensitive data redaction to virtual agents,
human agents, or both.
To redact sensitive data from all outgoing messages to end-users, select
the
Automatically redact all outgoing messages to agents checkbox.
Configure whether you want sensitive data redaction from virtual agents,
human agents, or both.
To redact all sensitive data from agents' session notes, select the
Automatically redact all session notes from agents checkbox.
To let human agents view and hide redacted sensitive data in messages,
select the Allow human agents to view unredacted messages during
session checkbox.
To configure the operation settings, do the following:
To upload unredacted transcripts, select the Store unredacted
transcripts in records checkbox. Configure whether you want to upload
to linked CRM tickets, to external storage, or both.
Note: When you select this option, both redacted and unredacted
transcripts are stored. Unredacted transcripts are stored in a folder
called chat-transcripts-unredacted .
To upload unredacted wrap-up notes, select the Upload unredacted notes
in the linked CRM tickets and session metadata checkbox.
Note: When you select this option, both redacted and unredacted wrap-up
notes are stored.
To send unredacted transcripts to end-users, select the Send
unredacted transcripts to consumers checkbox.
Click Save .
Configure automatic redaction settings at the queue level
To configure automatic redaction settings at the queue level, follow these
steps:
In the CCAI Platform portal, click Settings > Queue . If you don't
see the Settings menu, click menu
Menu . The Queue Menu Settings page appears.
In the Web pane, click Edit / View .
Click the queue that you want to edit.
For Automatic Redaction , click Configure .
Click the Chat Redaction toggle to the on position.
To configure the default template, do the following:
In the Platform list, select a platform.
In the Inspect list, select the type of information that you want to
redact. Examples are SSN, CC, Phone number, Drivers license number,
Passport ID number, Street address, Custom numbers (for example, bank
account information).
In the De-identify list, select a de-identifier for the system to
use to redact sensitive information. For example, ### , or *** .
To configure the redaction settings, do the following:
To redact sensitive data from all incoming messages, select the
Automatically redact all incoming messages to agents checkbox.
Configure whether you want sensitive data redaction to virtual agents,
human agents, or both.
To redact sensitive data from all outgoing messages to end-users, select
the
Automatically redact all outgoing messages to agents checkbox.
Configure whether you want sensitive data redaction from virtual agents,
human agents, or both.
To redact all sensitive data from agents' session notes, select the
Automatically redact all session notes from agents checkbox.
To let human agents view and hide redacted sensitive data in messages,
select the Allow human agents to view unredacted messages during
session checkbox.
To configure the operation settings, do the following:
To upload unredacted transcripts, select the Store unredacted
transcripts in records checkbox. Configure whether you want to upload
to linked CRM tickets, to external storage, or both.
Note: When you select this option, both redacted and unredacted
transcripts are stored. Unredacted transcripts are stored in a folder
called chat-transcripts-unredacted .
To upload unredacted wrap-up notes, select the Upload unredacted notes
in the linked CRM tickets and session metadata checkbox.
Note: When you select this option, both redacted and unredacted wrap-up
notes are stored.
To send unredacted transcripts to end-users, select the Send
unredacted transcripts to consumers checkbox.
Click Save .
Agent experience
When you configure sensitive data to be redacted for human agents, you can
select the Allow human agents to view unredacted messages during session
checkbox. This displays a Show redacted button in the chat adapter. When an
agent clicks Show redacted , the button changes to Hide redacted and the
redacted data displays. When an agent clicks Hide redacted , the button
changes to Show redacted and the redacted data is hidden. For more
information, see Configure automatic redaction settings at the global
level and Configure automatic
redaction settings at the queue
level .
Agent chat response time
Overview
When an agent is in an active chat session and receives a message from
the consumer, a timer will begin and a series of UI cues to prompt the
agent to respond within a response threshold. Admins can set the
threshold that the agent has to reply to messages and also report on the
number of instances when the threshold is exceeded.
Feature benefits
For Managers and Admins
Automatically remind agents to respond promptly to conversations
For Agents
Visually shows which chat needs their attention first
For end-users
Less waiting time and quicker resolution time
Feature details
The response timer starts when the agent is assigned and the
consumer has sent a message and applies even if an agent has not yet
sent a message
If the agent responds, the counter will not begin again until the
consumer replies.
When the target response time is met, chats will not end
Chats end when:
Agent manually clicks end chat
The consumer:
Closes the active tab
Navigates away from the page the chat session started on
Clicks x on the chat session
When the chat timeout threshold is reached
CCAI Platform portal configuration
Enabling global target response time
Go to Settings > Chat .
Mark the checkbox next to Agent target chat response time , and
set the response target duration.
Mark the checkbox next to Apply target chat response setting to
every chat queue .
Click Set global chat settings .
Enabling queue-level target response time
From the CCAI Platform portal, go to Settings > Chat .
Mark the checkbox next to Agent target Chat Response time, and set
the response target duration.
Do not mark the checkbox next to Apply target chat response
setting to every chat queue .
Navigate to Settings > Queue > Mobile OR Web ,
depending on where you are using chat.
Click on a queue that has chat enabled.
On the right, scroll to the Agent Target Chat Response Time
setting.
Click to toggle the setting to On .
Enter the chat response target time in minutes.
Click Set customer chat configuration to save.
Agent experience
When you configure target response times, the behavior of the agent chat adapter
changes in the following ways:
Active chat indicators display a target response timer. The timer indicates
how much time has elapsed since the end-user's last message.
The timer display one of the following colors to indicate how much of the
target response time remains:
Yellow : more than 45 seconds remain until the target response time
expires
Orange : between 45 and 15 seconds remain until the target response
time expires
Red : less than 15 seconds remain until the target response time
expires
If the target response time expires, the active chat indicator continues to
display red until the agent responds. At that time, the response timer resets.
For more information, see Answer the chat request .
Reporting details
When the timer hits 00 seconds, an event is logged that notes that
the agent exceeded the target chat response time and can be seen in
the 2 Agent Activity reports.
Example of how to select Agent Activity reports in Reports >
Users & Teams:
Available in Agent Activity Summary report ( Reports >
Users & Teams > Agent Activity - Summary Report) as
"Agent exceeded target chat response time."
Available in Agent Timeline report ( Reports > Users &
Teams > Agent Activity - Timeline Report) as "Agent
exceeded target chat response time."
When chats are dismissed, chat status will show as Dismissed -
inactive end-user .
Dismiss Inactive Chats
Overview
Agents can spend more spend time on active chats, with the option to
dismiss inactive chats automatically or manually after a set threshold.
When a chat is dismissed, the chat will be removed from the agent's
Adapter but the chat session will not end. The chat session will be
placed back in the queue and if the consumer responds, the chat will be
assigned to an agent again with the previous chat content included.
Agents no longer need to manually review the chats and remove inactive
discussions, which is can be time-consuming.
This means that when consumers are ready to respond after a long pause,
they will not have to go through the queue structure again.
Enabling dismissal : presents agents with the new option to
dismiss a chat in addition to end the chat.
Auto-dismissal : agents will not have to take manual action to
dismiss an inactive chat. It will be automatically sent back to the
queue while waiting for the consumer to respond.
Dismissed chat details
Dismissal settings can be set globally or per-queue
When chats have been dismissed, they do not accrue wait time
For a chat to be dismissed, both the consumer and agent have to have
sent at least one message
The dismiss eligibility timer starts from the latest message from an
agent
Only inbound chats can be dismissed
When chats are dismissed and later reactivated, a consumer has to
send at least one message afterward before the chat is eligible to
be dismissed again
Dismissed chats are ultimately ended when the chat timeout duration
is met
When chats are dismissed, activities are added to the chat
transcript
Chat Flow
CCAI Platform portal configuration
Dismissing chats - global setting
A global configuration for all chat channels can be configured in Chat
Settings. To customize this setting per queue.
Go to Settings > Chat .
In the Dismiss Inactive Chat section, check the box to allow
chats to be dismissed and set the minute value for inactivity.
Note: This value needs to be less than the Chat Timeout
value, as long as the value is not 0. Chat Timeout is set on the
same settings page.
Mark the checkbox to auto-dismiss chats that are inactive.
To send a message to the consumer before the chat is dismissed, mark
the checkbox Notify consumer [x] minutes prior to dismissal .
If enabled, see the duration, in minutes, for the system to wait
before sending the message. The default notification timer will
be set to 5 min and this default timer can be overridden in the
queue-level settings described below. To set the message for
this notification, see Mobile and Web SDK
Messages .
Click Set Global Chat Settings to save.
Per-queue settings
The setting to dismiss chats must first be enabled in Chat Settings, but
then can be specifically configured per queue. This allows you to
increase or decrease dismissal threshold times or disable/enable
auto-dismissal per queue.
Go to Settings > Chat .
In the Dismiss Inactive Chat section, check the box to allow chats
to be dismissed and set the minute value for inactivity.
Note: This needs to be less than the Chat Timeout value, as
long as the value is not 0. Chat Timeout is set on the same settings
page.
Mark the box to auto-dismiss chats that are inactive.
Click Set Global Chat Settings .
Navigate to Settings > Queue > Mobile OR Web ,
depending on where you are using chat.
Click on a queue that has chat enabled.
Inactive Chats
Enable Inactive Chats to define the maximum end time an end user
can be unresponsive before a chat is dismissed.
Set the Dismissal Timing value in minutes. This value must be
less than or equal to the Chat Timeout duration. An error will
appear if you try to enter this value as longer than the Chat
Timeout. For details on how to set chat timeout see Chat
Settings .
If chats should be auto-dismissed based on the duration set above,
enable Auto Dismissal for Chats .
(Web Only) Click to enable the consumer notification message which
warns the consumer when the chat will be dismissed soon.
Set the duration for when the message is to be displayed to the
consumer.
The notification message from the global setting will be used. To
configure this message see Customizing mobile and web SDK channel
messages .
Click Set Custom Chat Configuration to save.
Agent Experience
Based on the configuration in chat settings, an Agent can manually
dismiss a chat or a chat is automatically dismissed without an Agent
taking action. When a chat is ready to be dismissed the chat session
will grey out.
Auto dismiss
When a consumer is unresponsive for the set inactivity threshold, the
chat will be dismissed automatically. As long as the chat is not the
active chat on the Adapter, the chat session will grey out, then be
removed from the agent's Adapter.
Manually dismissing chats
When a consumer is unresponsive for the set inactivity threshold, the chat is
eligible to be dismissed and will grey out but not fade away. The Dismiss
chat button (a down arrow within a bubble) becomes available in the agent chat
adapter.
Consumer experience
Example timeline
Below is a high-level timeline of an example chat session:
Chat starts and both the Agent and the consumer send at least one
message.
The consumer is inactive.
(Web only) When the consumer notification timer is reached, a
message is sent to the consumer warning that the chat will be
dismissed soon.
When the inactive chat dismissal timer is reached, a message is
displayed in the chat UI to the consumer letting them know the Agent
has left the chat and offers them ways to restart the chat.
When the Chat Timeout timer is reached, the chat is ended.
Consumer notification message (web only)
Enabled in Chat Settings.
Can be configured at the queue level.
Inactive chat dismissed message
When the consumer doesn't reply within the set dismissal threshold, but
within the chat timeout threshold, the UI will prompt a choice to
continue with the same issue or start a new conversation.
Default text displayed:
We have not heard from you in a while. This chat session is closed,
Reply back to this message to begin a new chat.
[agent name] just left the conversation
Welcome back!
Do you have the same issue or a new issue?
Consumer UI examples after chat is dismissed but not timed-out
Web:
Mobile:
When Same is selected, the consumer is placed back in the same
chat window waiting for the chat to be re-assigned to the next
available agent:
If the consumer selects New , they are brought back to the start
of the queue menu selection screen.
Real-time and Standard Reporting
Real-time reports
Dismissed chats are moved from Chats > Ongoing to Chats
> Previous
The status for dismissed chats on the Previous Chats page is
Dismissed - Inactive End user
If that chat is restarted by the consumer sending a response, the
chat is placed back in queue and will show in Chats >
Future
When an agent picks up a restarted chat, that chat will be moved to
the Ongoing chat page
Reporting
The chat duration timer stops as soon as a chat has been placed into
dismissed status.
When a chat changes from Active to Dismissed:
The chat handle time is paused
The chat's handle time is based on only the active chat time
The chat ID remains the same
In the chat transcript, 2 activities are logged
Timestamp when the User/Agent left the chat
Ex. "[13:30:39 System] Admin U. left the chat."
Chat dismissed
Ex. "[13:30:39 System] Chat dismissed"
When a chat changes from Dismissed to Active:
The chat's handle time timer starts from where it left off
The chat's handle time is based on the total active chat time
The chat ID remains the same
Customizing strings/prompts
Web SDK
To update messaging for your consumers, strings for the Web SDK can be
customized by your web developers installing and configuring the Web
SDK.
The string file names for customizing this UI are broken down below:
"ujet_chat_dismissed": "We have not heard from you in a while.
This chat session is closed. Reply back to this message to begin a
new chat."
OR
"ujet_message_chat_dismissed": "Welcome Back!<br>Do you have
the same issue or a new issue?"
"ujet_chat_new": "New"
"ujet_chat_same": "Same"
Mobile SDKs
The string file names for customizing this UI are broken down below:
ujet_chat_footer_view_message_dismissed: "Welcome back!\nWe have
not heard from you in a while.\nDo you have the same issue or a new
issue?"
OR
ujet_chat_footer_view_message_timeout: "Your previous chat has
ended, please click to start a new chat."
ujet_common_same: "Same"
ujet_common_new: "New"
Configure rich messaging and file attachments
You can configure
CCAI Platform so that agents can use rich messaging, emojis, and file
attachments in the chat adapter. Rich formatting and emojis are available in
chat shortcuts and in web SDK and mobile SDKs
messages without any special configuration. Rich
formatting is not available for SMS chats.
Configure rich messaging and file attachments for the chat adapter
To configure rich messaging and file attachments for the chat adapter, follow
these steps:
In the CCAI Platform portal, click Settings > Chat . If you don't
see the Settings menu, click menu
Menu , and then click Settings > Chat .
In the Global Chat Settings pane, for Rich Messaging , select the
required options from the following:
Allow agents to attach files
Allow agents to format messages (e.g. bold, italicize, create lists)
Allow agents to use emojis .
Click Save Global Chat Settings .
File attachment limitations
This section describes file attachment limitations.
Allowed file types
The following table shows the file types that agents can attach to messages in the chat adapter.
Image
Video
Audio
Document
JPEG, JPG, PNG, GIF, WebP
MP4, MOV, AVI, WMV, WebM
MP3, WAV, M4A, WEBA
PDF, DOC, XLS, PPT, CSV, TXT
File size limits
The following table shows size limits for files that agents can attach to
messages in the chat adapter.
Image
Video
Audio
Document
Chat adapter
100 MB
100 MB
100 MB
100 MB
Web SDK
20 MB
20 MB
N/A
N/A
Mobile SDKs
2 MB
20 MB
N/A
N/A
For the mobile SDKs, if you attach an image or video file larger than the limit
shown in this table, the file is compressed to within the limit. This could
reduce the quality of the image or video.
Chat Settings - Web and Mobile
Overview
The chat settings page covers the experience for chats initiated via
Mobile and Web SDK. The chat channel can be customized in many different
ways to improve the consumer experience, agent experience, and to
achieve a variety of business goals. Overcapacity gives alternative
contact options in times of high volume, chat dismissal and timeout
settings help fine-tune how chats are handled by the system, and
shortcuts help agents access quick responses. You will find all the
general settings for the chat channel on this settings page.
Global Chat Settings
New chats while on a call : If an agent is assigned to both call
and chat queues, enabling this setting will allow the agent to be
assigned new chats when they are on a call. When disabled, agents
will no longer receive new chats when on a call.
New calls while on a chat : If an agent is assigned to both call
and chat queues, enabling this setting will allow the agent to be
assigned new calls when they are on a chat. When disabled, agents
will no longer receive new calls when on a chat.
For more information, see Add, view, and edit users .
Inactive Chats
Switch the toggle to On to enable the option to dismiss inactive
chats automatically or manually after a set threshold.
Dismissal Timing: These settings indicate the number of minutes of
consumer inactivity that will change the chat status to "Inactive" for
both Human Agent chats and Virtual Agent chats. This value can be set
between 1 and 10080 minutes, and cannot exceed the Chat Timeout setting.
See Dismiss Inactive Chats
for more details.
Dismissal Method: These settings indicate how an inactive chat with
a Human Agent is dismissed. Inactive chats can be dismissed manually by
the Human Agent or automatically dismissed by the system. Also used to
set how much notice (in minutes) the consumer is given before the chat
is dismissed.
Note: The Dismissal Method settings only apply to chats with
human agents.
Agent target chat response time
Set the threshold the agent has to reply to messages. Once the time
entered is reached, the agent will see UI cues prompting them to
respond. Admins can also report on the number of occurrences when the
threshold is exceeded. See Agent Chat Response
Time for details.
Chat Shortcuts
Click View all shortcuts to view existing and create new shortcuts.
For details about creating and using chat shortcuts, see Chat
Shortcuts.
Configure transfer limits for chats
You can configure the maximum number times that a chat can be transferred. When
the limit is reached for a session, you can configure whether no additional
transfers are allowed, or whether one final transfer to a specified queue is
allowed.
To configure transfer limits for chats, follow these steps:
In the CCAI Platform portal, click Settings > Chat . If you don't
see the Settings menu, click menu
Menu .
Go to Web & Mobile .
Click the Use Web & Mobile Chat toggle to the on position.
In the Web & Mobile Chat Settings pane, for Transfer Limits , do the
following for Web or Mobile , or both, depending on your
requirements:
Select the Limit the total count of transfers in a single chat session
to [number field] checkbox.
In the number field, enter the maximum number of transfers allowed.
For When the transfer count exceeds the limit , select one of the
following:
Disable all transfer options : when the limit is reached, this
prevents an agent from making additional transfers
Allow one final transfer to the queue : when the limit is
reached, this lets an agent do a final transfer to a queue that you
specify. The languages that are enabled in your instance appear. Do
the following:
Click the Search queue field next to the first language in
the list. A list of queues that are available for that language
appears.
Click the queue that you want to receive the final transfer. You
can type a queue name to narrow your search.
Repeat for every language in the list.
To complete your configuration, do the following:
Select the Include transfer by virtual agent in total transfer
count checkbox if you want transfers by virtual agents to be
counted.
Select the Include transfer by human agent in total transfer
count checkbox if you want transfers by human agents to be
counted.
Select the Reset transfer counts to "0" when the chat is
dismissed checkbox if you want transfers to reset after the chat.
Click Save Chat Details .
Session metadata
The session metadata file contains the transfer_limit field, which provides
information about the transfer limit for the session. For more information, see
Session metadata file .
Here's an example of a transfer_limit field:
"transfer_limit" : {
"enabled" : true ,
"limit_count" : 10 ,
"limit_reached" : "true"
},
Agent experience
If you select Disable all transfer options when configuring the transfer
limit, the Chat Transfer button in the agent adapter is inactive when the
transfer limit is reached for a chat session. If you select Allow one final
transfer to a queue , the Chat Transfer button is active but only the queue
that you specified is available for transfer. After transferring the chat, the
Chat Transfer button is inactive.
Auto Answer
See Chat Routing- Auto Answer for more information.
Chat History
Select the check box to include a transcript of the chat in the record.
Click Set Chat History to save.
Agent Chat Notifications
These settings are used to set the notification sound that will play
when the agent receives a new chat or a new message.
New Chat Notification
Select the tone that you want to use as to a notification when receiving
a new chat. Select a tone to play a preview of what the alert sounds
like.
Use the Notification Frequency to indicate if the notification
should only play once or if it should be repeated until the agent picks
up the chat. If the notification is set to repeat, use the drop-down
below to select the frequency (in seconds) with which the notification
will be repeated.
New Message Notification
Select the tone that you want to use as to a notification when receiving
a new message. Select a tone to play a preview of what the alert sounds
like.
Click Set Notification to save.
Mobile & Web
The following settings are only used in the Mobile and Web SDK versions
of the platform.
Use Mobile & Web Chat
Switch the toggle to On to enable the chat functionality in both the
mobile and browser-based versions of the platform.
Mobile & Web Chat Settings
Unanswered Chat Expiration
Set the timeout for chats that are queued but not assigned or connected.
Chat Timeout
Set the duration (in minutes) of time a customer has to respond to the
last chat message sent before the chat is ended automatically.
CCAI Platform recommends a high timeout limit when used in conjunction
with the Inactive Chat features, no longer than one working day, to give the
consumer a longer chance to come back to the chat without having to start a new
conversation.
Chat timeout timer restarts when:
Chat is assigned to an agent
After each message sent by the consumer
If a reply isn't made to the chat within the set time frame, the chat
will time out and end with one of the following chat statuses:
Timeout Agent No Message
Timeout End User No Message
Timeout Agent Stopped
End User Stopped
Click Set Chat Details to save.
Web Proactive Chat Triggers
Proactive triggers help increase product sales and customer retention
while minimizing customer churn by sending a relevant, targeted message
from any web page. Click View triggers to view existing and create
new triggers.
For more details about creating and using web proactive chat triggers
with the web SDK, see Proactive trigger .
Mobile & Web Deflection: After Hours and Overcapacity
Enable After Hour deflection : Enable to deflect chat requests
during non-operating hours. See Support Center Details - Hours of
Operations Settings for how to set hours.
If After Hour Deflection is disabled, mark the checkbox Allow
transfers to queues outside of operation for the following
behavior:
Agents will be able to see the following queues as options to
transfer to in the Agent Adapter
All queues within operating hours
All queues that are outside of hours of operation with no deflection
enabled and active, logged-in agents
All queues that are after hours with an assigned virtual agent in
24-hour availability mode
Agents will not be able to see the following types of queues:
All queues that are after hours with after hour deflection enabled
All queues that are outside of operating hours with an assigned
virtual agent limited to queue hours of operation
Enable over capacity deflection : Specify the estimated wait time
threshold for the consumer to be deflected to the options set below.
The time threshold set here is also used to set how frequently the
consumer will see the overcapacity message.
See Estimated Wait Time Calculator for more information.
After hour deflection options : Select Email to deflect a
consumer to email if chatting in after hours. The customer will be
presented with the email address set in Settings > Support
Center Details from within the body of the chat interaction.
Overcapacity deflection options
Email
Mobile : With email deflection enabled and the estimated wait
time threshold met, when the consumer taps on the Chat option, they
are directed to their default email app. App version and iOS/Android
version are automatically inserted into the email body and the
subject is "Support for [selected menu path]".
Alternatively, the email form may be enabled.
Web : Presents an Email option to consumers. When clicked, an
email form will appear. See Integrated Email Form for Mobile and
Web .
See Setting up and Assigning Agents to Channels and Queues: IVR,
Mobile,
Web
for email form configuration options.
Keep Waiting (Web only): Allows the consumer to click an option
to keep waiting.
Example Web SDK with Email and Keep Waiting options enabled:
Click Set Deflection to save the above settings.
Chat Settings - Live Translation
Live translation provides real-time language translation between customers (end
users) and agents. This enables agents to communicate with customers in their
preferred language. Live translation is only available for chats with human
agents.
Before you begin
Before you can set up live translation, you need to enable the
Cloud Translation API, create a service account, grant the cloudtranslate.admin
role to the service account, and create a service account key.
Caution: Follow Google's best practices for managing service account keys .
Enable the Cloud Translation API
To enable the Cloud Translation API for your Google Cloud project, follow these
steps:
Go to the Google Cloud console.
Select your project.
In the navigation menu, go to API & Services > Library .
Search for Cloud Translation API and then click Cloud Translation
API .
Click Enable .
Create a service account
To create a service account and grant the cloudtranslate.admin role to the
service account, follow these steps:
Go to the Google Cloud console.
Select your project.
In the navigation menu, go to IAM & Admin > Service Accounts .
Click Create service account .
In the Service account name field, enter a name. The Google Cloud console
fills in the Service account ID field based on this name.
In the Service account description field, enter a description. For
example, Service account for Cloud Translation API .
Click Create and continue .
Grant the roles/cloudtranslate.admin role to the service account.
To grant the role, in the Role box, search for and select Cloud
Translation API Admin .
Note: The Role field affects which resources the service account can access
in your project. You can revoke these roles or grant additional roles
later. In production environments, do not grant the Owner, Editor, or
Viewer roles. Instead, grant a predefined role or custom role that meets
your needs.
Click Continue .
Click Done to finish creating the service account.
Do not close your browser window. You will use it in the next step.
Create a service account key
To create a service account key, follow these steps:
In the Google Cloud console, click the email address for the service account that
you created.
Click Keys .
Click Add key , and then click Create new key .
Click Create . A JSON key file is downloaded to your computer.
Click Close .
Set up live translation
Before setting up live translation, see Before you begin .
Create a translation platform
To use live translation, you need to create a translation platform and turn it
on. This includes uploading and validating your service account keys.
To create a translation platform, follow these steps:
In the CCAI Platform portal, click menu
Menu , and then click Settings > Developer Settings .
On the Developer Settings page, go to Translation Platform .
Click Add platform .
In the Name field, enter a name for your translation platform, and then
click Add . The Status column displays Invalid .
Click edit Edit icon to edit your
translation platform.
In the Edit Translation Platform dialog, click Upload key .
Navigate to the key that you created in Create a service account
key , and then click Open .
Click Save .
In the Translation Platform pane, click Validate Keys . The
Status column should display Valid .
In the row for your translation platform, click the toggle to the on
position.
You can now turn on live translation globally.
Turn on live translation globally
Before you can turn on live translation globally, you must create a translation
platform .
Turning on live translation globally enables you to turn on live translation
for your queues .
To turn on live translation globally, follow these steps:
In the CCAI Platform portal, click menu
Menu , and then click Settings > Operation Management .
On the Operation Management page, go to Live Translation .
Click the toggle to the on position.
In the Platform field, select a translation platform.
In the Model field, select a model from your translation platform, if
available.
In the Glossaries field, select a glossary from your translation
platform, if available.
Click Save .
Turn on live translation for a queue
After you turn on live translation globally, you can turn on live translation
for a queue.
To turn on live translation for a queue, follow these steps:
In the CCAI Platform portal, click menu
Menu , and then click Settings > Queue .
In the Web pane, click Edit/View .
Click the queue that you want to turn on live translation for.
In the Settings pane, click the Live Translation toggle to the on
position.
Manage live translation
You can turn off live translation at the global and queue levels. You can edit
existing translation platforms and delete them when you no longer need them.
Turn off live translation globally
You can turn off live translation globally to immediately disable live
translation for all queues.
To turn off live translation globally, follow these steps:
In the CCAI Platform portal, click menu
Menu , and then click Settings > Operation Management .
On the Operation Management page, go to Live Translation .
Click the toggle to the Off position.
Edit a translation platform
You can edit an existing translation platform to make changes such as renaming
the translation platform or uploading new service account keys.
To edit an existing translation platform, follow these steps:
In the CCAI Platform portal, click menu
Menu , and then click Settings > Developer Settings .
On the Developer Settings page, go to Translation Platform .
Click edit for the translation platform
that you want to edit.
Make your changes to the translation platform.
Click Save .
Delete a translation platform
You can delete translation platforms that you no longer need.
To delete a translation platform, follow these steps:
In the CCAI Platform portal, click menu
Menu , and then click Settings > Developer Settings .
On the Developer Settings page, go to Translation Platform .
Click close for the translation platform
that you want to delete.
In the Delete translation platform window, click Delete .
Turn off live translation for a queue
To turn off live translation for a queue, follow these steps:
In the CCAI Platform portal, click menu
Menu , and then click Settings > Queue .
In the Web pane, click Edit/View .
Click the queue that you want to turn on live translation for.
In the Settings pane, click the Live Translation toggle to the
Off position.
Chat translation storage
Translated messages are stored the chat transcript, either alongside or below
the original messages. Messages are limited to 916 characters.
Chat Shortcuts
Overview
When chatting with consumers and prospects, agents need to get to the
resolution as quickly as possible, and chat shortcuts can be used to
add repeatable phrases, steps, and solutions to chat conversations. Once
added via the portal, the created shortcuts are accessible in the Agent
Adapter. New shortcuts cannot be created by individual Agents and all
shortcuts will be visible to all Agents.
Shortcut Categories allow groups of shortcuts to be accessed via a
category. Categories are optional, can be customized, and there is no
limit to the number of categories or shortcuts you can create. Category
examples include separating languages, product sets, or types of
shortcuts.
Viewing existing shortcuts
Go to Settings > Chat.
Click View all shortcuts in the Chat Shortcuts section.
Download shortcuts list as csv file
Click the Download button
Optionally, select a category from the existing category list, or
type in a new category and click Create[category name] to
save.
Enter the Shortcut Keyword . Agents will enter this keyword to
access the associated message in the Agent Adapter.
Enter the Message as you would like it to appear in the chat
conversation.
To add content with line breaks, use SHIFT+Enter in the Shortcut
Message body.
Emojis and other symbols can be used. The below example shows how to
enter bullet points as a shortcut and also how that shortcut will
show in the chat window.
Optionally, click Add Attributes to add variable data to the
message.
Important Note : if the consumer does not need to login to chat
with your agents, the first. last, and full name variables will not
be available. If a variable is included in an existing shortcut and
used, "Customer" will replace the value.
First Name : Populates the first name of specified party.
Last Name : Populates the last name of specified party.
Full Name : Populates the first and last name of specified party.
Queue : Populates the name of the queue selected by the consumer.
Alias : Populates the agent alias.
To add hyperlinks to the message body, use the following link
structure:
Text format structure to open link in the same tab:
{www.yourcompany.co | Click on this link | same_tab}
Text format structure to open link in a new tab:
{www.google.com | Click on this link | new_tab}
Click Save .
Add a chat shortcut
To add a chat shortcut, follow these steps:
In the CCAI Platform portal, click Settings > Chat . If you don't
see the Settings menu, click menu
Menu .
Go to the Chat Shortcuts pane, and then click View all shortcuts . The
Chat Shortcuts page appears.
Click Add Shortcut .
Optional: In the Category field, select or create a category for the
shortcut.
In the Shortcut Keyword field, enter the shortcut keyword.
In the Message field, enter the message for your chat shortcut. Use the
formatting toolbar to format your message or add links and emojis. To add
line breaks, use SHIFT+Enter in the shortcut message body.
Optional: To add attributes to your message, do the following:
Click Add Attributes , and then click an attribute that you want to
include in your message. If the end-user doesn't need to
log in to chat with your agents, the first, last, and full name variables
aren't available. If a variable is included in an existing shortcut
and is used, "Customer" will replace the value. The following variables are
available:
Customer Attributes :
First Name : the end-user's first name
Last Name : the end-user's last name
Full Name : the end-user's full name
Agent Attributes :
First Name : the agent's first name
Last Name : the agent's last name
Full Name : the agent's full name
Alias : the agent's alias
ID : the agent's ID
Session Attributes :
Queue : the assigned queue
Repeat this step to add more attributes.
Click Save Shortcut .
Agent Experience
From the Chat Adapter, press # to access a specific category of
shortcuts, or / to access a specific shortcut.
Enter the keyword or some phrases from the desired shortcut.
Search for the shortcut requires entering the same word order - if 2
words in a shortcut are searched out of order, the search will not
narrow down.
Select the shortcut with a click of your mouse or press nter on
your keyboard.
View all available shortcuts by clicking Chat Shortcuts .
Proactive Web SDK Triggers
Overview
When triggers are configured, and the trigger conditions are met, the
Web SDK window will appear expanded on the page, prompting the consumer
to make a selection from choices dictated by the trigger configuration.
Ex. "Can we help you?" "Want to learn more?"
Proactive triggers help increase product sales and customer retention
while minimizing customer churn by sending a relevant, targeted message
from any web page.
Feature details
Web SDK Icon options:
Before the trigger conditions are met on a page, the Web SDK icon
will still appear on the page by default. The trigger expands the
Web SDK window, but the icon is not hidden before the trigger
conditions are met.
When configuring the Web SDK, you can hide the Web SDK icon, and
have the proactive trigger show the icon and launch the Consumer UI.
See hiding the launcher ine the Web SDK Guide.
Triggers conditions can only be met once per day, per consumer/prospect.
Triggers can be set for:
Time spent on a page
Keywords are/are not in the URL
Returning or new visitor to the page
Visited page _ number of times
Setting up Proactive Triggers
There are four steps to follow when setting up a new Proactive Trigger.
Step 1: Name the trigger
From the CCAI Platform portal, select Settings > Chat.
Click View Triggers in the Web Proactive Triggers section.
Click Add Trigger .
Name the trigger for internal identification - if you plan on having
multiple, we suggest coming up with a naming convention that will
make it easier to find later on. The Next button will turn blue
when the trigger has a name.
Click Next .
You can click Save for Later to stop here and save your progress
to resume at a later date.
Step 2: Set the trigger conditions
You can set multiple trigger conditions using ADD statements. The criteria for
all ADD statements must be met before a session is initiated.
To set the trigger conditions, follow these steps:
To set the first trigger condition, do the following:
In the first field, select whether the keyword is or isn't included in
the URL for the page.
In the second field, enter the keyword.
Optional: Click Add OR condition and enter another keyword.
Repeat this step to add more keywords.
Optional: To add an AND condition, do the following:
Click And condition , and then click a condition.
Repeat this step to add more AND conditions.
Click Next .
Step 3: Define actions
After the end-user meets the trigger requirements, the web SDK widget launches.
Defining the actions determines what the user sees when the widget appears,
letting you direct the end-user to a specific queue and display a specific
message.
Example: Trigger is set to launch when there is a consumer who has been
on the page before, is on the page for longer than 60 seconds and is on
a page that has "help" and "Product1" in the URL. In this case, you
would want to direct the consumer straight to the queue that has support
agents ready to help with Product 1. The message would say "Looks like
you are trying to figure out the specifics of Product 1, would you like
to connect with an agent who can help?"
Select the Queue Language associated with the trigger. This will
determine the queues presented in the following step, and will allow you to
create chat messages in the language for that queue.
Search for the queue to direct the consumer to once the trigger
conditions are met. The available queues will be pulled from the
Settings > Queues > Web page. Once the setup is
complete, a popup will appear, asking you to confirm or cancel the
queue selection.
Enter a proactive message in the form of a question, like, "Looking
for help?". The answers will always be YES/NO, and the following
screen is dictated by the sub-queues which are set up in the Queue
Settings. The default message after they select "Yes" is "How can
we help?"
To enter hyperlinked text:
Text format structure: {​{https://www.yourcompany.co \| Visit our
website}​}
Click Finish to save the trigger and be directed back to the
trigger page.
Step 4: Launching and editing your trigger
Click Go Live to launch the trigger and you'll see a
confirmation once enabled.
Status : Shows the status of your trigger (Live, Draft).
Conditions Dropdown : Shows current conditions and actions that
trigger a session.
Take Offline : Disables the proactive trigger.
Edit : Returns you to the conditions/actions section of the
trigger setup.
Delete : Deletes the trigger.
Message Preview
With Message Preview , agents can see what the consumer is typing
before the message is sent. Allowing agents to proactively prepare for
the consumer's incoming queries by performing actions such as retrieving
information from the customer's account or checking on the status of an
order before the message is sent. By being better prepared for consumer
inquiries, agents will be able to significantly decrease the Average
Hold Time and improve the consumer's overall experience.
Note: For implementation information contact Support.
Enable Message Preview
Go to Settings > Chat .
Scroll down to the Web & Mobile section.
In the Web & Mobile Chat Settings section, toggle the Message
Preview switch to On.
Click the Set Chat Details button. The Message Preview feature
is enabled and available to agents in all Mobile and Web queues.
Note: Message Preview will only be available in chats initiated after this
feature was enabled and will not be applied to currently active
chats.
Agent Experience - Message Preview
In the Agent Adapter, the appearance of a Message Preview is very
similar to chat messages that have already been sent, but with a few
small differences. To differentiate between a Message Preview and a
message that was previously sent by the consumer, the Message Preview is
displayed with the following changes while the consumer is typing:
The background of the chat bubble is white/transparent
The chat bubble has a dashed-line border
The chat font is italicized
The chat displays Message Preview below the bubble instead of
the timestamp
Once the consumer sends their message, the Message Preview is updated to display
as a typical message with the colored background, standard font, and timestamp.
The preview message is only displayed when the web SDK calls the start typing
message. The duration of the display of the Message Preview is controlled by the
web SDK client sending the stop typing request.
Chat transcripts and chat history
You can configure CCAI Platform to upload a chat transcript to your CRM
or external storage after the chat has ended. You can also configure
CCAI Platform so that your agents, your end-users, or both, can view
chat history during a chat.
Upload chat transcripts to your CRM
To upload chat transcripts to your CRM, follow these steps:
In the CCAI Platform portal, click Settings > Chat . If you don't
see the Settings menu, click menu
Menu .
Go to the Chat Transcript pane.
Select one or both of the following checkboxes, depending on your use case:
Post the chat transcript as a comment in the record .
Add the chat transcript as an attachment to the record .
Click Save Chat Transcript .
View chat history
You can configure your instance so that your agents, your end-users, or both,
can view chat history during a chat.
To view chat history, follow these steps:
In the CCAI Platform portal, click Settings > Chat . If you don't
see the Settings menu, click menu
Menu .
Go to the Chat Transcript pane.
Click the Display previous chat interactions toggle to the on position.
Select one of the following:
To agent and consumer : chat history appears in the agent adapter for
agents. For end-users, chat history appears in the chat widgets for the
web SDK and the mobile SDKs.
To agent only : chat history appears in the agent adapter for
agents.
To consumer only : chat history appears in the chat widgets for the
web SDK and the mobile SDKs for end-users.
Click Save Chat Transcript .
About transcripts
This section explains the format of a chat transcript and its location after
it's uploaded.
Transcript format
A chat transcript contains a header and a body separated by a dashed line. The
header contains the chat ID and a date stamp with the time zone. The body
contains message segments separated by dashed lines. Each message segment
contains a time stamp, an indicator saying who sent the message, and a message.
Here are some characteristics of a chat transcript:
Message segments are in chronological order.
Consecutive messages sent by the same participant are grouped in the same
message segment.
If a participant's full name is available, only the initial of the last name
is displayed.
If a participant's name isn't available, Agent or End User is
displayed instead.
If images or videos were included in the chat, then URLs to those files are
included in the chat transcript. These URLs expire seven days after the chat
ends.
Transcript upload locations in a CRM or external storage
After the chat is complete, transcripts are uploaded to the CRM or external storage
as a TXT file. Transcripts can be found in the same location that the chat ID and
other chat information is stored.
Zendesk : Added in plain text and, optionally, attached as a file to a
private comment in the ticket.
Salesforce : Added in plain text and, optionally, attached as a file to a
private comment in the ticket.
Kustomer : Added as both a file attachment and as a comment.
MS Dynamics : Added as an attachment under the timeline for the ticket.
Custom CRM : Depends on configuration. For a completely custom CRM, the
chat transcript is stored in external storage, if configured. For a custom
CRM with a generic API, the chat transcript can be added as a file
attachment if the Upload a file endpoint is configured, or posted as a
comment if the Comment endpoint has been configured. For integrated CRMs,
chat transcripts are sent to external storage using SFTP. For more
information, see Set up external storage for CRMs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
