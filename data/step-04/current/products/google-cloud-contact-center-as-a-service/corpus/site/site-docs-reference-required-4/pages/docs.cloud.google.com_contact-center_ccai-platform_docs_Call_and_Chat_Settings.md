---
title: "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings
  title: "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\
    |\_ Google Cloud Documentation"
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
Call and Chat Settings
Stay organized with collections
Save and categorize content based on your preferences.
Monitoring Live Calls and Chats
Overview
Supervisors and Agents in training benefit from listening in on live
calls and viewing live chats, without joining the session or
interrupting the consumer and Agent on the call or chat.
Monitoring allows users to listen in on or view a live session. The
Agent in the session does not know that the session is being monitored,
and multiple users can monitor an individual session at one time.
In order to monitor calls and chats, users must be assigned a role with
the monitoring permissions enabled.
Call and Chat Details pop-up
Call Details
The Call Details pop-up is available from the Agents page and from
the Calls > Connected page. The pop-up shows relevant information
about the current session including call metrics, transfer, and call
participant information. Users will have access to Monitor and
Barge calls from this pop-up, depending on their assigned Role and
associated permissions.
Chat Details
The Chat Details pop-up is available from the Chats > Connected
page. The pop-up shows relevant data about the current session.
Monitoring calls
From the Connected Calls page
Go to Calls > Connected .
Find the call by searching or scroll on the page.
Click the actions button and select Monitor .
When finished, click Stop Monitoring.
From the Agent Monitoring Page
Go to Agents .
Find the Agent using filtering, searching, or scrolling on the page.
Click the Actions button and select Monitor .
OR select Call Details, then click the Monitor button.
When finished, click Stop Monitoring .
Monitoring Chats
Monitor chats from the Connected Chats page.
Go to Chats > Connected .
Find the chat by searching or scrolling on the page.
Click the Actions button and select View Live Chat .
When finished, click the X in the upper right corner.
Viewing live chat UI
Agent : Name of Agent as entered on the Users and Teams page
End User : Consumer name or unique ID if available
Issue : Queue menu path
View Case / Ticket : If your CRM is integrated with
Contact Center AI Platform (CCAI Platform), click the link to view the CRM record associated with
the chat session
After Hour Deflection for Calls and Chats
Overview
Customize your consumer's experience by configuring specific deflection
paths for when consumers try to contact you outside of your Hours of
Operation are first configured, then deflection is enabled and
configured at the global level in the Call Settings and Chat Settings
pages. Deflection after hours of operation can be further customized for
each leaf-queue in Settings > Queue .
The global Languages and Messages settings includes the setup for the
voice recordings or Text-to-speech prompts needed once certain settings
are enabled.
Add the appropriate messages once announcements or deflections are
enabled.
Details
When After Hour deflection is enabled, calls and chats will be deflected
based on the specific operation hours for the queue, language, or
channel the consumer has selected or has been routed to. While
deflection options and configuration is done on the Call settings and
Queue Settings pages, the actual hours are set on the Support Center
Details settings page. There are multiple options you can offer
callers once this setting is enabled.
Steps to fully enable and configure After Hour deflection
Configure hours of operation for your environment - global and
custom hours for each queue, channel, and/or language as needed.
Enable and configure After Hour deflection for calls.
Enable and configure After Hour deflection for chats.
Configure per-queue deflection options (optional).
Configure and upload appropriate greetings at Settings >
Languages and Messages .
CCAI Platform configuration
Enable and configure After Hour deflection for calls
Go to Settings > Call .
Toggle Enable After Hour Deflection to On to deflect callers
when dialing in after scheduled hours of operation (set at
Settings > Support Center Details ).
Mark the checkbox Allow transfers to queues outside of operation
hours for the following behavior:
Agents will be able to see the following queues as options to
transfer to in the Agent Adapter:
All queues within operating hours
All queues that are outside of operation hours with after hour
deflection enabled
All queues that are outside of hours of operation with no deflection
enabled and active, logged-in agents
All queues that are after hours with an assigned virtual agent in
24-hour availability mode
Agents will not be able to see the following types of queues:
All queues that are outside of operating hours with an assigned
virtual agent limited to queue hours of operation
Select Mobile and Web SDK call deflection options
When selected, visual options will be displayed when outside of hours of
operation. The regular call/chat options will not appear in the UI and
the options you select below will be the only options available.
After Hours Deflection : Deflects consumers by presenting
alternative options.
Scheduled Call : Shows a set of available times within the
hours of operation for the queue to request a call.
Email : If after-hour deflection is enabled for email, a message
is presented to end-users after hours asking them to contact the email
address listed. The email address listed is always the email listed in
support center details.
Web: gives the customer the email address to contact.
Mobile: default email app is launched with an email address
in the "To" field, and data like app version and device
type can be added to the email body by default.
Email address is set in Settings > Support Center
Details:
Phone Number : Only for Mobile SDK. Deflects consumers to
another phone number. Shows as "Call now" and displays the
number the phone will be dialing.
Voicemail : Only for Mobile SDK. Allows customers to leave
a voicemail. Shows as "Leave a callback message." Voicemails
will be delivered to agents assigned to the selected queue for
calls.
Example deflection UI
Example Mobile SDK that is set to deflect to all options After Hours.
Select IVR call deflection options
After Hours Deflection : During the set hours in the Support Center
Details, calls will deflect to the selected option below.
Queue: If you have a 24-hour queue or just one with longer hours
set, all calls will be sent to this queue.
Phone Number : Deflects caller to another phone number.
Voicemail : Allows caller to leave a voicemail.
Agents assigned to the queue that was called when operating hours were
reached will be alerted of voicemails left as a result of this
deflection setting. If this is applied to a top-level queue with no
assignments, voicemails will be available in your CRM.
The message can be customized in Settings > Languages &
Messages > Voicemail message.
Additional Voicemail message options are available under Custom
Callbacks .
Voicemail - Phone Number Blocked
Voicemail - Request Phone Number
Voicemail - Phone Number Input Success
Message Only: "After Hour Deflection" message plays and the call
ends. The message can be customized in Settings > Languages &
Messages > After Hour Deflection message.
Click Set Deflection to Save the above settings.
Enable and configure After Hour deflection for chats
Go to Settings > Chat.
Enable After Hour deflection : Enable to deflect chat requests
outside of operating hours.
If After Hour Deflection is disabled, mark the checkbox Allow
transfers to queues outside of operation when After Hours Deflection
is disabled for the following behavior:
Agents will be able to see the following queues as options to
transfer to in the Agent Adapter:
All queues within operating hours
All queues that are outside of hours of operation with no
deflection enabled and active, logged-in agents
All queues that are after hours with after hour deflection
enabled
All queues that are after hours with an assigned virtual agent
in 24-hour availability mode
Agents will not be able to see the following types of queues:
All queues that are outside of operating hours with an assigned
virtual agent limited to queue hours of operation
After hour deflection options : Select Email to deflect an end-user
to email if chatting in after hours. If after-hour deflection is enabled for
email, a message will be presented to consumers after hours asking them to
contact the email address listed. The email address listed will always be
the email listed in support center details. Otherwise, the customer will be
presented with the email address set in Settings > Support Center
Details from within the body of the chat interaction.
Click Set Deflection to save.
Configure queue-specific settings
Available for IVR, Mobile, and SMS channels. Not available for Web.
IVR
Go to Settings > Queue > IVR .
Click on the queue you want to edit.
Scroll to Custom After Hours Deflection and toggle switch to ON.
Message : A message will play, then end the call. Default message
set in Settings > Call or a Custom Greeting can be used.
Queue : Deflects the caller to another queue.
Phone number : Redirect callers after hours to a phone number.
Additional charges for call time apply.
Voicemail : directs the caller to voicemail with an option to
customize the voicemail greeting.
Click Set After Hour Deflection to save.
Mobile
Mobile configuration allows for either deflecting to a queue, or a
combination of other deflection options. If you are deflecting to a
queue, the consumer cannot also have another option like leaving a
voicemail.
Go to Settings > Queue > Mobile .
Click on the queue you want to edit.
Go Custom After Hours Deflection and toggle switch to ON.
Deflect to Queue: deflects the consumer to another queue
OR
Deflection Options (select one or more):
Scheduled Call : When scheduled calls are enabled in the Channel
Settings for this queue, you can select this option to present
consumers with timeslots for a scheduled call during operating
hours.
Email : If after-hour deflection is enabled for email, a message will be
presented to end-users after hours asking them to contact the email address
listed. The email address listed will always be the email listed in support
center details. Default email app is launched with an email address in the
"To" field, and data like app version and device type call be added to the
email body by default. Email address is set in Settings > Support
Center Details .
Phone Number : Deflects consumers to another phone number. Shows
"Call now" and displays the number the phone will be dialing.
Voicemail : Allows consumers to leave a voicemail. Shows as
"Leave a callback message." Voicemails will be delivered to agents
assigned to the selected queue for calls.
Click Set After Hour Deflection to save.
SMS
Go to Settings > Queue >SMS.
Click on the queue you want to edit.
Scroll to SMS Chat System Messages section and mark the checkbox
next to Enable after hour message .
Enter the text message to send to consumers.
Click Save .
Call Recording - Data Storage
Overview
Once a call is completed, the call recording is uploaded to your CRM.
Call recordings are then deleted from the original server as soon the
recording is successfully upload to your CRM. Successful uploads usually
occur >99% of the time.
There are only three (3) scenarios when a call recording deletion would
be delayed after call completion:
Customer CRM has not sent an acknowledgment of successful data
upload,
The CRM API limit has been reached, or
The call recording file is too large for the CRM system to upload.
The CCAI Platform service utilizes a retry mechanism with an exponential back off
to upload the call recording to the customer CRM system in these
scenarios.
As soon as the recording is successfully submitted, it is deleted from
the carrier platform. In all cases, the call recording is retained for
no more than seven (7) days. During the delayed retention of the
recording, the carrier cannot access the recording at any time. The
recording is only accessible via MFA handshakes and only the
authenticated CRM keys can access that.
Maximum file size
If the call recording size exceeds 50MB, CCAI Platform will split the file into
smaller size files then attach them to CRM ticket in order.
Example: if the file size is 70MB, CCAI Platform will divide it into 50MB and
20MB files then attach them as separate recordings to the CRM ticket.
Agent messages & notifications
You can customize agent notifications for calls and chats, both globally and at
the queue level. Options include:
Setting the frequency and tone for alerts.
Uploading custom tones.
Configuring whisper announcement settings that provide context before a call
starts.
With these settings you can customize your notifications and messages to help
improve your agents' responsiveness and efficiency.
Configure call messages and notifications globally
To configure call messages and notifications globally, follow these steps:
Go to Settings > Call .
Scroll to the Agent Call Messages & Notifications section.
Under General , configure the following settings:
Use whisper for calls : Once a call is assigned to the Agent,
they will hear an audible message stating the call type and
queue: "{Call Type} from {Queue Name}."
Whisper read speed : Increase or decrease the speed at which
the whisper message is read. Duration of call whisper message is
included in Wait Time metrics.
Use countdown for calls : Plays an audible message to the
agent counting down seconds until the caller is live on the
phone: "You're up - call starting in 3,2,1."
Incoming call notification : Click on each option to hear the
tone. Select the tone for agents to hear for incoming calls. You can also
upload a custom tone. See Custom notification tones .
Call notification frequency : Choose for the agent to only hear
the notification tone one time, or repeated after a specified number
of seconds have passed. If you select
Notify agent until call is picked up or no calls are available , you can
select or change the number of seconds between notifications.
Activate the Enable SMS Notification slider to allow SMS notifications to
the agent for any incoming calls to the phone number specified in the
agent's CCAI Platform user profile.
Click Set Notifications to save your changes.
Configure chat notifications globally
To configure chat notifications globally, follow these steps:
Go to Settings > Chat .
Scroll down to Agent Chat Notifications .
Under New Chat Notification , click on each option to hear the tone.
Select the tone that agents will hear for incoming chats. You can also
upload a custom tone .
Under Notification Frequency , you can choose for the agent to only hear
the notification tone once, or repeatedly after a specified number of
seconds have passed.
If you select
Notify agent until chat is picked up or no chats are available , you can
select or change the number of seconds between notifications.
Under New Message Notification , click on each option to hear the tone.
Select the tone that agents will hear for new messages in an existing chat.
You can also upload a custom tone .
Click Save Notification to save your changes.
Configure whisper announcements at the queue level
By configuring whisper announcements at the queue level, you can provide
information to agents that is specific to a queue prior to a call starting.
Note: When you configure whisper settings for a queue, all child queues of that
queue inherit the settings.
To configure whisper announcements at the queue level, follow these steps:
In the CCAI Platform portal, click Settings > Queue . If you don't
see the Settings menu, click menu
Menu , and then click Settings > Queue .
Depending on the type of queue you are editing, click either IVR
(Interactive Voice Response) , Mobile , or Web .
Click the queue that you want to edit.
In the Settings pane for your queue, go to the Whisper Announcement
section, and then click Configure .
Click the Whisper Announcement toggle to the on position.
Select one of the following whisper announcement types:
Queue name : CCAI Platform reads the queue name before the
call starts.
Text-to-speech : enter text for CCAI Platform to read before
the call starts.
Upload Audio Recording : upload an audio file for
CCAI Platform to play before the call starts.
Optional: In the Whisper read speed box, select a playback speed.
Optional: Click the Use countdown for calls toggle to the on or off
position. If you turn on this setting, CCAI Platform plays a
message to the agent that counts down the seconds until the call
starts—for example, "You're up - call starts in 3, 2, 1."
Click Save .
Custom notification tones
You can upload custom tones for the following notification types:
Agent call messages & notifications :
Incoming call notification
Agent chat notifications :
New message notification
New chat notification
Under Settings > Chat > Agent Chat Notifications , you will see
Select the tone you would like to use under each notification type.
Clicking Custom tone allows you to upload a .mp3 audio file and preview
it. The .mp3 file can be deleted or replaced with other custom tones. The
uploaded tone remains available even if you choose a default tone.
Settings recommendations
Use a longer ringtone and/or more frequent notification if:
Agents are often multitasking and not always waiting to take a
call
In an open office or louder environment
Agents might listen to music from their computer
Use a shorter ringtone if:
Agents are always alert and waiting for calls
Higher call frequency
Call whisper:
Use this when the queue selection and type of call highly impact
the first communication from the agent
Increase speed of whisper for decreased wait time impact
For very low second count SLAs:
Only use whisper and countdown if necessary as the duration of
these messages contributes to the wait time for calls
Send reserved data properties
With reserved data properties, you can send information about an end-user to
CCAI Platform when a chat or call session begins, or even after a session
has begun. CCAI Platform displays this end-user information in the
agent adapter in the form of user profile flags. These flags can help an agent
or supervisor determine how to handle a session. There are user profile flags
for unverified or verified customer, bad actor, and repeat customer.
Here are the reserved data properties that you can send to
CCAI Platform:
reserved_verified_customer : indicates that you consider this end-user
to be a legitimate customer.
reserved_bad_actor : indicates that you consider this end-user to
potentially be a bad actor. This might be due to observing fraudulent
behavior or determining that the contact is from a spam campaign.
reserved_repeat_customer : indicates that you have determined that this
end-user has contacted your contact center before.
You determine which reserved data parameters apply to an end-user based on your
own systems and processes.
You can send reserved data properties to CCAI Platform in the following
ways:
Send reserved data properties using the SDKs
Send reserved data properties using the Apps API
Send reserved data properties using SIP headers
Send reserved data properties using the SDKs
You can send reserved data properties to CCAI Platform using the
following SDKs:
Web SDK
Android SDK
iOS SDK
Send reserved data properties using the Apps API
You can send reserved data properties to CCAI Platform using the Apps
API, even after a session has begun. To send reserved data attributes during a
chat or call session, see the following:
Update reserved data attributes during a call
Update reserved data attributes during a chat
You can also get reserved data properties during a call. See the following:
Get reserved data attributes during a call
Get reserved data attributes during a chat
Send reserved data properties using SIP headers
You can send reserved data properties to CCAI Platform using SIP
headers.
Here is an example reserved data properties in a SIP header:
se tt i n g : {
redirec t io n : {
op t io n : "sip" ,
sip : {
uri : "Destination SIP URI" ,
da ta _parame ters _e na bled : true | false ,
da ta _parame ters : [
{
f ield : "verified_customer" ,
t ype : "dynamic" ,
source : "ujet_metadata" ,
source_ f ield : "Incoming Field"
},
{
f ield : "bad_actor" ,
t ype : "dynamic" ,
source : "ujet_metadata" ,
source_ f ield : "Incoming Field"
},
{
f ield : "repeat_customer" ,
t ype : "dynamic" ,
source : "ujet_metadata" ,
source_ f ield : "Incoming Field"
}
],
da ta _records : {
i n _me ta da ta : true | false ,
i n _crm_record : true | false
}
}
}
}
Support for virtual agents
If you have a virtual agent (a support agent or a virtual task assistant) that
performs end-user verification, the virtual agent can pass the end-user
verification information to CCAI Platform. This indicates that the
end-user is a legitimate customer. To enable this, you need to configure your
virtual agent.
Configure a support agent to pass the Verified Customer parameter
To configure a support agent to pass the Verified Customer parameter,
follow these steps:
In the CCAI Platform portal, click Settings > Queue . If you don't
see the Settings menu, click menu
Menu , and then click Settings > Queue .
In the IVR (Interactive Voice Response) pane, click Edit / View .
Click a queue that has a virtual agent assigned to it. For more information,
see Assign virtual agents to queues .
In the Settings for Test pane, go to Channel Settings .
Click Edit Virtual Agent Assignments .
Under Data Parameters , click Add Parameter . The Add Parameter
dialog appears.
To define the parameter, do the following:
Click the Type field, and then select Dynamic .
Click the Source field, and then select Session Metadata .
Click the Incoming Field field, and then select Verified
Customer .
In the Destination Field , enter a field name that your CRM will
recognize, and that Dialogflow CX will use as a parameter. A
preview of the parameter appears in the Preview field.
Click Save , and then click Save again.
Configure a virtual task assistant to pass the Verified Customer parameter
To configure a virtual task assistant to pass the Verified Customer parameter,
follow these steps:
In the CCAI Platform portal, click Settings > Virtual Agent . If
you don't see the Settings menu, click menu Menu , and then click Settings
> Virtual Agent .
Go to the Virtual Agents pane and find the virtual task assistant that
you want to configure. This should be a virtual agent with a Call label
and an Assistant label. For more information, see Create a virtual task
assistant .
Click edit Edit for the virtual
agent that you are configuring. The Edit a Virtual Task Assistant dialog
appears.
Under Data Parameters , click Add Parameter . The Add Parameter
dialog appears.
To define the parameter, do the following:
Click the Type field, and then select Dynamic .
Click the Source field, and then select Session Metadata .
Click the Incoming Field field, and then select Verified
Customer .
In the Destination Field , enter a field name that your CRM will
recognize, and that Dialogflow CX will use as a parameter. A
preview of the parameter appears in the Preview field.
Click Save , and then click Save again.
User profile flags
When reserved data properties are sent to CCAI Platform during a call
or chat session, this information is displayed in the agent adapter in the form
of user profile flags. There are user profile flags for unverified or verified
customer, bad actor, and repeat customer. For information about how these flags
are displayed in the agent adapter, see User profile flags for
chat and User profile flags for
calls .
Ending a Call or Chat
On the Calls/Chats Queued and Connected Monitoring pages, you
can end calls and chats by selecting the End Call/Chat option from
the Actions column.
This is useful for clearing a stuck call or chat. The following are
examples of best practices:
View the call or chat details before ending.
End the call or chat if it exceeds a company defined queue wait time
threshold. For example, anything over 5+ hours is defined as a
stuck call or chat and can be ended.
Permission to end Call/Chat
The following permission is required. It is included by default for
Admin and Managers ( restricted to assigned teams only ) and can be
added to any custom role.
Monitor-Chats-Edit permission.
Ending a Call or Chat
Go to the Monitoring Page. Available Monitoring Pages to end a Call
or Chat:
Call Monitoring Page ( Calls > Connected , Calls > Queued )
Chat Monitoring Page ( Chats > Connected , Chat > Queued )
Go to call or chat row that you want to end and click on the dots
under the Actions column.
The Action menu options appear.
Click End Call/Chat .
A confirmation window displays.
Click Confirm .
Handling Unauthenticated Consumers
Overview
When using the Web SDK and Mobile SDK, some user flows allow for your
customers or prospects (referred to as consumer) to contact support
before logging into the website or app. Since the user didn't enter any
login credentials, there is no way to tie the user back to your exiting
database right away. CCAI Platform will track the anonymous user when possible
with a new temporary unique ID and merge to your existing user record/ID
once the user has logged in.
Unauthenticated consumers may include:
Prospects contacting your support or sales team via your webpage
Current customers who are logged out of your app and contacting
support to get help with their login
New users in the critical first stage of onboarding before a login
has been created
Since no identifying information is passed to your CRM without the
user logging in, they will be recognized anonymously as a Web
User .
Note: Web SDK must be installed on your website to receive
chats.
A ticket/case is created in your CRM with the following information
for the consumer, and an internal process should dictate how the
agent should edit the data so that the name of the contact is either
updated to be correct or merged with an existing contact in your
CRM.
- First Name: Web User - {Month/Day Hour:Minute} (ex: Web User
10/05 10:15)
- Unique Visitor Identifier
If the same user comes back to the web SDK and then is able to log
in, the prior tickets while unauthenticated can be merged with ID
they have now logged in with.
Note: If the end user clears their local storage, their unique
visitor ID will not be recognized and a new contact will be created
for this ticket
Mobile: Unauthenticated Consumers
Since no identifying information is passed to your CRM without the
user logging in, they will be recognized anonymously as a Mobile
User .
Note: Mobile SDK must be installed on your website to receive
calls and chats.
A ticket/case is created in your CRM with the following information
for the consumer, and an internal process should dictate how the
agent should edit the data so that the name of the contact is either
updated to be correct or merged with an existing contact in your
CRM.
- First Name: Mobile User - {Month/Day Hour:Minute} (ex: Mobile
User 10/05 10:15)
- Mobile SDK Identifier
If the same user comes back to the Web SDK or Mobile SDK and then is
able to log in, the prior tickets while unauthenticated can be
merged with ID they have now logged in with.
Note for Android Devices : If the user uninstalls and reinstalls
your app, their unique mobile SDK ID will not be recognized, and a
new contact will be created.
SmartActions
Overview
Consumers calling or initiating a chat can share photos, videos, and
screenshots with agents to get on the same page fast. By prompting the
consumer to send the requested media, there's no more need for walking
them through each step just to send the media, and the media is
captured, then immediately available to the agent.
Using SmartActions with Mobile SDK calls
Actions menu : Click to bring up smart action options
Get Verification : Asks the consumer to verify via fingerprint or
PIN code they use to unlock their mobile device. This can be used as
a security measure to verify ownership of the product/device in
question.
Request Photos : Prompts caller to take or select up to 4 photos.
They will need to grant camera/photo access for your app.
Example use case : Product arrived broken, the consumer can send
photos of the damaged item.
Request Screenshots : Prompts caller to take a screenshot of the
current page in the app.
Process Note : Since this prompts the consumer to take and send a
screenshot of the current page, guide them to the part of the app
that you would want to view a screenshot of before initiating the
screenshot request.
Example use case : Consumer receiving an error on a certain page
Request Videos : Prompts caller to select an existing video or to
take a new video.
Example use case : Consumer sends a video showing their current
product setup that would be hard to describe.
Get Text Input : Prompts consumers to type in information using
their mobile device keyboard.
Example use case: Consumer can correctly send their tracking #,
email, or a correct spelling of their last name.
Redact : When enabled, agents can initiate call redaction to
pause recording a call. See Call Redaction.
Example use case: Consumer is sharing sensitive information such
as credit card details or social security information.
Note: If using call redaction, click the red bar when call
recording should resume.
SmartActions for Mobile SDK chat
Actions menu : Click to bring up smart action options
Get Verification : Asks the consumer to verify via fingerprint or
PIN code they use to unlock their mobile device. This can be used as
a security measure to verify ownership of the product/device in
question.
Request Photos : Prompts caller to take or select up to 4 photos.
They will need to grant camera/photo access for your app.
Example use case : Product arrived broken, the consumer can send
photos of the damaged item.
Request Screenshots : Prompts caller to take a screenshot of the
current page in the app.
Process Note : Since this prompts the caller to take and send a
screenshot of the current page, guide them to the part of the app
that you would want to view a screenshot of before initiating the
screenshot request.
Example use case : Consumer receiving an error on a certain page
Request Videos : Prompts caller to select an existing video or to
take a new video.
Example use case : Consumer sends a video showing their current
product setup that would be hard to describe.
Using SmartActions for Web SDK Chats
While the same flow of prompting the consumer to take an action like
send a photo or video is not available for Web SDK chat, consumers can
still add image attachments.
While chatting, direct the chat participant to click on the paperclip
icon and they will be prompted to select and attach a file. Accepted
file types are .png, .jpg, and mp4.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
