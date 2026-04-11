---
title: "Customizing languages, recordings, & messages \_|\_ Google Cloud Contact Center\
  \ as a Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages
  title: "Customizing languages, recordings, & messages \_|\_ Google Cloud Contact\
    \ Center as a Service \_|\_ Google Cloud Documentation"
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
Customizing languages, recordings, & messages
Stay organized with collections
Save and categorize content based on your preferences.
In order to support multiple markets, multiple languages can be activated and
used in the channels you make available.
Enabling multiple languages for IVR, mobile, and web channels
Adding languages creates a new queue structure for each channel, enabling all
queue settings and assignments, messages, and all queue-specific settings to be
set per language.
The English US menu is used as the template for all queues during the
setup process.
To add new queues you will need to add via the English US language then
configure each new language queue configuration.
If you don't want a queue to be active for a specific language, you can skip
assigning agents.
After you add a language, it's available for Interactive Voice Response (IVR),
Mobile, and Web channels.
Adding a language creates a new queue structure, allowing you to:
Customize the names of the queues.
Upload language-specific messages played or displayed.
Adds language as a new dimension to reporting.
Select from a list of languages when making an outbound call.
Note: See Supported Languages
for the full list of languages supported by CCAI Platform.
Steps to set up a language
Adding the language
Customizing messages
Customizing queues for the language
Adding the language
Go to Settings > Languages & Messages .
Click Add Language and select a language of choice from the dropdown.
Customizing language messages
Go to Settings > Languages & Messages .
Select the language from the drop-down.
If you are using Multiple Mobile apps, you can select the app from the
channel menu on the right to toggle between configured mobile apps.
Once the language is selected, the page contains all messages callers hear.
These messages should be configured for the new language.
Note: We recommend completing this step even if the feature associated with
the message is not being utilized so that the system is ready if it's ever
enabled.
(Example of TTS typed in the new language)
Click Apply to save.
Customize queue settings for the language
All languages other than English depend on the setup of the English
queues, so as you create new languages you will be editing the English
queue structure as a template. To make changes to the queue structure,
please use the English settings.
Click Customize Queues to edit each live queue channel for your
new language. This will need to be repeated for all channels: IVR, mobile and
web.
You can edit the queue names in the new language.
Click on the name of the queue and type in the new/translated queue
name. The queue name will be heard if using text-to-speech for IVR
announcements and will be seen if you are using Mobile or Web SDKs.
Mark the checkbox next to Instant Voice Call to enable calls to
this queue.
Click Assign agents to assign Agents to this queue for incoming calls.
Repeat steps 2-4 for each menu : Queues will turn from red to white when
fully set up and ready to go live.
Go Live : Languages can go live before all messages and queues
have been configured, but, be aware that once a language is live, it
is available for your consumers to access. Only set a language to
live if you have configured all the necessary messages and queues.
Once live, make sure to test by calling an assigned number or
accessing the queues via SDK.
Troubleshooting
If the Go live button is not working, try following these steps:
Make sure ALL menu options for all channels have been edited. Some may appear
to have been named but it is only the carry-over from the English US queue
upon creation and needs to be edited.
Make sure all prompts in the Languages & Messages have something either
uploaded or written in the text-to-speech field.
Even if you aren't using a channel, you may need to assign one agent to a
queue in each channel to make sure it's active.
Supported languages
Agent facing languages
Admins can configure locations and those locations have default assigned
languages. See Localized Languages in the Agent
Adapter .
The following agent facing languages are supported:
Arabic
Chinese
English
French (France)
French (Canada)
Japanese
German
Italian
Korean
Portuguese
Spanish (Mexico)
Spanish (Spain)
Thai
Turkish
Vietnamese
Consumer facing languages
For consumer-facing languages, once a language is added:
You can customize queue names.
Any uploaded language-specific messages are played or displayed.
The language is added to Reporting as a new dimension.
Agents can select from a list of languages when making an outbound call.
Customer-facing languages currently include:
Arabic
Czech
Chinese, Simplified
Chinese, Traditional
Danish
Dutch
English (Australian)
English (Canada)
English (UK)
English (US)
Finnish
French (France)
French (Canada)
German
Hungarian
Italian
Japanese
Korean
Norwegian
Polish
Portuguese (Brazil)
Portuguese (Portugal)
Spanish (Spain)
Spanish (Mexico)
Swedish
Thai
Turkish
Vietnamese
Note: Text-to-Speech (TTS) is not yet available for these languages. These
languages require custom audio files for consumers to hear appropriate
messaging throughout their support session experience. For additional
information on these restrictions, contact support.
Customize mobile and web SDK channel messages
When mobile and web SDKs have been installed, you can customize timely
messages displayed to consumers.
Messages can be configured in the global settings and at the queue
level.
Setting mobile messages in global settings
Mobile messages are available for the Android and iOS SDKs, and they can
be configured by language and app if you use multiple apps.
Global messages are located in Settings > Languages & Messages .
To update Mobile messages, select Original App as the channel.
To update Web SDK messages, select the Web SDK channel.
Once the Display an After Hours Message Mobile option is enabled in
Settings > Support Center Details , the After Hour messages can also be
configured by queue in Settings > Queue > Mobile > Selected queue menu
settings .
Default Greeting Message : Used as the first message sent to the consumer
when starting a chat conversation.
Sample Mobile default message: Thanks for reaching out Kat Jones. Please send
us any details you can while we connect you to an agent.
After Hour Messaging : When the call or chat option is selected for a queue
that is outside of operating hours, this message will be displayed in the app.
Call : Shows once the call option is selected.
Sample Mobile call after hours message: We're gone home for the day! Call
back between 9am PST and 6pm PST Monday to Friday. If you still need help,
email support@yourcompany.com
Chat : Shows once the chat option is selected with the option to restart
the Mobile menu flow.
Sample Mobile chat After Hours message: We're gone home for the day! Call
back between 9am PST and 6pm PST Monday to Friday.
Web SDK channel messages
The web SDK channel messages are for use with the Web SDKs installed on your web
pages and can be configured by language.
Default Greeting Message : Used as the first message sent to the consumer
once the agent has been assigned to a chat session.
After Hour Messaging : When the call or chat option is selected for a queue
that is outside of operating hours, and after hour deflection and overcapacity
deflection are both disabled, this message will be displayed in the app.
Call : Shows once the call option is selected with the option to start a
new conversation in another channel
Sample After Hours call message: We're gone home for the day! Call back
between 9am PST and 6pm PST Monday to Friday. If you still need help, email
support@yourcompany.com
Chat : Shows once the chat option is selected with other queues available
for selection below
Example after hours chat screen:
Sample variable attributes for customizing web and mobile messages
The following variables can be inserted into Mobile and Web SDK messages
and reference either information passed from the SDK or wait
information.
For a full list see Using variables for dynamic consumer
messages .
@{END_USER}
Description: inserts the name of the consumer.
Important: This variable is limited by the amount of information CCAI Platform can
pass from your Web or Mobile SDK.
If you have the Web SDK configured on an unauthenticated page (no login required
by the consumer) Contact Center AI Platform (CCAI Platform) will not be able to pass individual
information about the consumer.
When authenticated, the Full name is shown.
When unauthenticated, the term Customer is shown.
@{AGENT}
Description: inserts the name of the Agent.
@{NEXT_REOPEN_HOUR}
Description: include this variable to automatically display opening time
based on operation hours.
For example:
We are closed for today, please try again tomorrow. We open {NEXT_REOPEN_HOUR} .
@{ESTIMATED_WAIT_TIME_IN_MINUTES}
Description: The numerical value for minutes or hours for the
current estimated queue wait time is inserted. This can be used in the greeting
and deflection messages.
After the numerical value, the word Minutes will be appended and will
be translated to the associated language.
Sample Inputs
German : Jemand wird so schnell wie möglich bei Ihnen sein. Die derzeitige
geschätzte Wartezeit beträgt @{ESTIMATED_WAIT_TIME_IN_MINUTES}.
English : A representative will be with you ASAP. The current estimated wait
is @{ESTIMATED_WAIT_TIME_IN_MINUTES}.
Output to consumer
German : Jemand wird so schnell wie möglich bei Ihnen sein. Die
derzeitige geschätzte Wartezeit beträgt 5 Minuten.
English : A representative will be with you ASAP. The current
estimated wait is 5 minutes.
@{QUEUE_SIZE}
Description: The numerical value representing the current total number
of consumers waiting in queue including the consumer seeing the number
is inserted. This is specific to the chat greeting message.
When configuring the message, add the supporting label to the end of
the variable in the associated language. For the example below, we added
in line .
Sample input
A representative will be with you ASAP. You are number @{QUEUE_SIZE} in line.
Output to consumer
A representative will be with you ASAP. You are number 3 in line.
@{TIME_UNTIL_DISMISSAL}
Description: this variable contains the remaining time until the chat is
dismissed.
For example, when the Chat dismissal timer = 3min, the dismissal
notification timer = 1min TIME_UNTIL_DISMISSAL will insert 2.
When configuring this message, add the supporting label to the end of
the variable in the associated language (minute(s)).
Configuring global default greeting and after-hours messages
Go to Settings > Support Center Details .
Scroll to Display an After Hours Message Mobile and toggle to On .
Go to Settings > Languages & Messages .
Scroll to the Mobile and Web SDK section.
Select the language and Channel you want to set the messages for.
When selecting a Mobile App, the Channel drop-down automatically
regulates all message configurations listed in both "Mobile & Web SDK" and
"Audible Messages" sections for the selected mobile app, with the following
exceptions:
IVR Purchase Flow Messages
All IVR messages customized for use within a mobile app can currently only
be configured for English US.
Messages to enter with examples
Default Greeting Message: Message sent via chat when the chat is initiated.
Hi, @{END_USER}. We are sorry to hear that you are having a problem. Please
stand by while we connect you to an agent.
After Hour Messaging Title
Sorry, we are closed.
After Hour Messaging Message
We are closed for today, please try again tomorrow after 9am Pacific Time.
Waiting for Agent Assignment Message: Message sent to the consumer right
after queue selection. If a DAP is being used, this message is sent right
away since the queue is auto-selected.
We're assigning a representative to help you with @{QUEUE}.
Agent Assigned Message: Message sent to the consumer once an agent
has been assigned to the session. @{AGENT} will chat with you
about @{QUEUE}
Dismissal Warning Notification (Web Only): When inactive chats are set to
auto-dismiss messages, this message is sent to the consumer based on the
timer set in Settings > Chat . Are you still there? Please respond in the
next @{TIME_UNTIL_DISMISSAL} minute(s) or the chat session will be closed.
Enter the message.
Include Variable attributes
if needed.
To add hyperlinks to the message, follow the below structure. The output in
the SDK will depend on the version of the Mobile or Web SDK your company has
installed:
Text format structure: {​{https://www.yourcompany.co | Visit our website}​}
Web SDK and Mobile SDK versions >= 0.34.1
Text displayed: Visit our website
Mobile SDK versions < 0.34.1
Text displayed: Visit our website https://www.yourcompany.co
Click Apply .
Repeat by changing the Channel setting and set the messages for other
SDKs if applicable.
Configuring Mobile After Hour Messages by queue
Go to Settings > Queue > Mobile Edit/View .
Select a queue .
Toggle Display After Hour Deflection Message to On .
Select Use custom After Hours message .
Enter the custom message for this queue.
To add hyperlinks to the message, follow the below structure. The output
in the SDK will depend on the version of the Mobile or Web SDK your
company has installed:
Text format structure: {​{https://www.yourcompany.co | Visit our website}​}
For Web SDK versions >= 1.15 and Mobile SDK versions >= 0.34.
Text displayed: Visit our website
For Web SDK versions < 1.15 and Mobile SDK versions < 0.34
Text displayed: Visit our website https://www.yourcompany.co
Click Set Custom After Hours Options to save.
Custom Audio Files & Hold Music Details
Overview
Almost all messages that are played to callers can be customized with
your audio recordings. Below are recommendations and best practices when
using custom audio messages.
File types
Supports WAV and MP3 audio formats.
Please note that changing the extension of the audio file does not
change the format of the file, so one can not simply rename the file. A
converter must be used to do so and can be either downloaded or found
online.
Best practices
The telephony standard is 8-bit PCM mono with a sampling rate of 8 Khz. That
means a 64 kbit/s bitrate (8 kHz sampling frequency × 8 bits per sample).
Voice files can have file size reduced, which also affects quality. The
minimum recommended levels are 32 kb/s or 16 kb/s.
That standard is bandwidth-limited to the 300 Hz - 8Khz audio range and is
designed for voice and provides acceptable voice-quality results.
CCAI Platform utilizes the OPUS codec where applicable and supports a
constant or variable bitrate of 6 kb/s to 510 kb/s, but it is still
recommended to keep to the 64 kb/s bitrate for telephony purposes.
Note: your audio will sound different on a landline versus a mobile device. It's
best to check your audio once uploaded to the platform.
Recording
For any audio prompts, it's best to start with the highest-quality
possible source recording. This means a voice in a room with good
acoustics, recorded carefully with a professional quality microphone and
preamp.
You can achieve the best results with careful mic placement. For voice,
place the mic below or to the side of the speaker's mouth in order to
avoid distortion due to plosives (like "P" and "T" sounds). You can also
use a pop filter or shield on your microphone to avoid this distortion.
Record your source at a 48Khz sample rate to a 16-bit or 24-bit mono
uncompressed WAV file. Instead of mono, you can record in stereo. If you
convert in stereo, you'll need to convert the file to mono before
uploading to CCAI Platform.
Post-processing
After recording, archive your recordings in that source format. This can
be done either by compressing it into a ZIP or RAR file and storing it
to an external drive or by uploading it to a cloud service. Keep in mind
that uncompressed audio files will be large. Transcoding to audio that
is telephony standard will degrade the quality to a large degree.
It's a good idea to keep an archive copy of the initial high-quality
audio so that you have the option of reusing the source material or
correcting any sound artifacts from post-processing.
Use an audio software editing program such as
Audacity (a free, multi-platform
audio editing application) to:
Trim leading and trailing silence from the recording.
Normalize the volume.
Remove background noise.
Apply equalization to a copy of the source file if desired.
When exporting from Audacity or another program, make sure the export
settings are correct.
You may need to download the LAME MP3 encoder for exporting to the MP3
format. Please follow the directions in your audio editor for more
information.
If you have stereo sources, convert these to mono prior to your upload.
This ensures that you will not encounter any stereo-to-mono phase
artifacts.
Make sure your files do not exceed 15 MB in size.
Customizing Wait and Hold Music
You can assign distinct Hold Music and Wait Music in order to
differentiate between different stages within the support process.
Using separate music for each step indicates to consumers that they have
progressed to a different stage as opposed to always hearing the same
music.
Setting the hold and wait music globally and at the queue level
Note: Queue level settings override global settings. When the queue level
setting is not set, the global settings are used.
Locate the global settings
Go to Settings > Languages and Messages > Audible Messages .
Go to the Call Music section.
Follow the steps below in adding audio files
to set the music.
Locate the queue level setting
Go to Settings > Queue .
Select the desired channel queue menu by clicking on it.
The menu of configured queues will be displayed, along with the side
settings panel.
Click on the queue where you want to set the hold and wait music.
Go to Call Music in the settings panel.
Follow the steps below in adding audio files
to set the music.
Add, modify playback speed, and download audio files
You can add any .mp3 or .wav file to use as the hold or wait music by
uploading a file from your computer or using the drag-and-drop method to
add the file.
Once the file has been uploaded, you can preview the music, adjust the
volume, or modify the playback speed.
Note: There is a 15 MB maximum for the music file uploads.
There are separate settings for Wait Music and Hold Music, allowing you
to assign a different audio file for each.
In the Call music section, click the Replace file icon to upload a
new file.
Note: The default audio files cannot be deleted, only replaced.
Use the file window that opens to select the audio file to upload
and click Open . Alternatively, click Cancel to close the
file window and use the drag-and-drop method to add the audio file.
Once the file has been uploaded, the name of the new file will replace the
current file name.
Click the play button to preview the audio.
Click the volume icon ( ) to adjust the volume used during playback by using the
slider to increase or decrease the volume.
Click the options icon ( ) to download or modify playback speed.
Click Download to download a copy of the audio file.
Click Playback Speed to select a speed anywhere between 0.25 times and 2
times the normal speed.
1 represents normal speed, 0.25 is equal to a quarter of the
original speed (slowing playback down), and 2 is twice as fast as
normal.
Repeat these steps for the other type of music (Hold or Wait).
Click Save .
The audio files will now be used as the Wait and Hold Music across all
queues.
Configure IVR messages
This section explains how to configure messages for the IVR channel. You can
configure IVR messages globally and at the queue level. You can enter
text-to-speech messages or upload your own custom audio files.
Note: Text-to-speech isn't available for Turkish, Arabic, Thai, and
Vietnamese. For these languages, upload custom audio files for
your IVR-specific messages.
Configure global IVR messages
This section explains how to configure IVR messages globally.
Configure the language selection message
You can configure a language selection message to play at the start of all IVR
calls. You can also choose to skip this message.
To configure the language selection message, follow these steps:
In the CCAI Platform portal, click Settings > Languages &
Messages . If you don't see the Settings menu, click menu Menu .
For Language Selection Message , do one of the following:
To configure a text-to-speech message, do the following:
Select Text-to-speech .
In the text field, enter the language selection text that you want to
play at the beginning of an IVR call—for example, For
English, press 1. For Spanish, press 2. For French, press 3. For
German, press 4. For Japanese, press 5. .
To upload an audio recording for language selection, do the following:
Select Upload Audio Recording for Language Selection .
Navigate to an audio recording, and then click Open .
To skip the language selection message, do the following:
Select Skip language selection .
In the Default language list, select your default routing language.
Click Save Languages .
Customize IVR-specific messages
You can customize the messages that play in the IVR workflow.
To customize IVR-specific messages, follow these steps:
In the CCAI Platform portal, click Settings > Languages &
Messages . If you don't see the Settings menu, click menu Menu .
Go to the IVR-specific Messages pane. This pane contains a number of
message types .
Edit the text-to-speech message or upload an audio file for any message type
that you want to configure.
Click Save .
IVR message types
The following message types are available:
IVR Greeting : the initial message played before the queue menu
readout . If you configure a DAP greeting
message on a child queue or leaf queue, the DAP greeting message overrides
the IVR greeting message on that queue.
Example: Thank you for calling us.
Dial 0 - Back to Previous Menu : plays after sub-queue options
are played.
Example: and press 0 to go back to the previous menu.
Invalid queue selection : plays when the end-user selects an
option that doesn't exist.
Example: You have selected an invalid menu option.
Ask Permission to Record : plays if Ask User Permission To Record is
selected in the Call Recording Settings pane for a queue. For more
information, see Record settings at the queue
level .
Example: If you would like to not be recorded for monitoring purposes please
press 1.
After Hour Deflection : plays when an end-user calls after business hours.
Example: Our offices are currently closed.
Overcapacity Deflection : plays when the overcapacity call deflection
threshold has been reached.
Example: Thank you for waiting, we will be with you shortly.
Overcapacity Deflection Message Options : lists the overcapacity
deflection options that are configured in the Settings > Calls
> Overcapacity Deflection pane and indicates which number to
press to select each option. Options are listed in the order that they
appear in the Overcapacity Deflection pane. This message plays directly
after the overcapacity deflection message. If the end-user doesn't select an
option, keep waiting is automatically selected. The overcapacity messages
repeat every four minutes.
Example: To receive a callback and keep your place in the queue, press 1. To
remain on the line and keep waiting, press 2.
Overcapacity Deflection Phone Option : plays when the end-user selects the
option to deflect to a different phone number.
Example: Please wait, your call is being redirected.
Overcapacity Deflection Callback Option : plays when the end-user selects
the callback option.
Example: We keep your place in queue and will call you back as soon as a
representative is available.
Overcapacity Deflection Wait Option : plays when the end-user is waiting
on hold.
Example: Thank you for continuing to hold.
Configure queue-level IVR messages
This section explains how to configure IVR messages at the queue level. For more
information, see IVR: Add and edit queue menus .
Configure the IVR menu readout
You can configure an IVR menu readout to play when an end-user arrives in a
queue. You can also choose to skip this message.
To configure the IVR menu readout, follow these steps:
In the CCAI Platform portal, click Settings > Queue . If you don't
see the Settings menu, click menu
Menu .
In the IVR (Interactive Voice Response) pane, click Edit / View .
Click Menu Structure .
In the Settings pane, for IVR Queue Menu Readout , do one of the
following:
To configure a text-to-speech message, do the following:
Select Text-to-speech .
In the text field, enter the IVR queue menu readout message—for
example, Press one for product issues, press two for order status,
press three for billing information. .
To upload an audio recording for the IVR queue menu readout, do the
following:
Select Customized record file .
Navigate to an audio recording, and then click Open .
Click Save .
To skip the IVR queue menu readout, do the following. This routes callers
directly to the default queue that you specify. Google recommends this for
single-destination call flows to speed up connections.
Click Skip IVR Menu readout .
In the Default queue field, enter a search keyword to find a queue.
A list of queues appears.
Click the queue that you want to be the default, and then click
Save .
Configure a parent queue message
You can configure a readout of child queues when an end-user arrives in a parent
queue. Parent queues contain child queues and can't have agents assigned to
them.
To configure a parent queue message, follow these steps:
In the CCAI Platform portal, click Settings > Queue . If you don't
see the Settings menu, click menu
Menu .
In the IVR (Interactive Voice Response) pane, click Edit / View .
Click a parent queue.
In the Settings pane, for IVR Voice Settings , do one of the
following:
Select Text-to-speech . This plays a message announcing child queue
options when the caller selects this queue. You can't edit this message.
Example: For NAME_OF_CHILD_QUEUE_1, press 1, for NAME_OF_CHILD_QUEUE_2,
press 2.
To upload an audio recording for the parent queue message, do the
following. Your audio recording should announce the child queue
options—for example, For NAME_OF_CHILD_QUEUE_1, press 1, for
NAME_OF_CHILD_QUEUE_2, press 2. .
Select Customized record file .
Navigate to an audio recording, and then click Open .
Click Save IVR .
Configure a leaf queue message
You can configure a readout that announces that the end-user has arrived at a
leaf queue. Leaf queues can have agents assigned to them. They can't contain
child queues.
To configure a leaf queue message, follow these steps:
In the CCAI Platform portal, click Settings > Queue . If you don't
see the Settings menu, click menu
Menu .
In the IVR (Interactive Voice Response) pane, click Edit / View .
Click a leaf queue.
In the Settings pane, for IVR Voice Settings , do one of the
following:
Select Text-to-speech . This plays a message that announces that the
queue has been selected. You can't edit this message.
Example: You have selected NAME_OF_LEAF QUEUE.
To upload an audio recording for the leaf queue message, do the following.
Your audio recording should announce that the leaf queue has been
selected—for example, You have selected NAME_OF_LEAF QUEUE. .
Select Customized record file .
Navigate to an audio recording, and then click Open .
Click Save IVR .
IVR Purchase Flow Messages
While the caller is in the payment process, a series of messages are
played. You can leave these messages or update the text-to-speech
script.
These messages can be customized at Settings > Languages & Messages >
IVR Purchase Flow Messages .
Dynamic content variables are available specifically for Secure
Payments. See Using Variables for Dynamic Consumer
Messages .
Payment Confirmation
The total purchase amount including taxes and shipping is @{TOTAL_AMOUNT}.
Please press 1 to confirm, press 2 if it is the incorrect product or price. If
you would like to return to the agent at any time please press the star key.
Request Credit Card
Please input your credit card using the dial pad and press pound when you're
done.
Invalid Credit Card
Sorry, that credit card number was invalid, please try again! If you would like
to return to the agent, press the star key.
Confirm Credit Card
Your credit card number is @{CREDIT_CARD}. Please press 1 to confirm, press 2
to try again.
Request Expiry Date
Please input your 4 digit expiry date using the dial pad and press pound when
you're done.
Invalid Expiry Date
Sorry, that expiry date was invalid, please try again! If you would like to
return to the agent, press the star key.
Confirm Expiry Date
Your expiry date is @{EXPIRY_DATE}. Please press 1 to confirm, press 2 to try
again.
Request CVC
Please input your CVC code using the dial pad and press pound when you're done.
Invalid CVC
Sorry, that CVC code was invalid, please try again! If you would like to return
to the agent, press the star key.
Confirm CVC
Your CVC code is @{CVC}. Please press 1 to confirm, press 2 to try again.
Request ZIP Code
Please input your zip code using the dial pad and press pound when you're
done.
Invalid ZIP Code
Sorry, that zip code was invalid, please try again! If you would like to return
to the agent, press the star key.
Confirm ZIP Code
Your Zip Code is @{ZIP_CODE}. Please press 1 to confirm, press 2 to try again.
Success
Thank you for providing your payment information. It has been sent and you will
now be connected back to the agent.
Variables for dynamic consumer messages
Variables are dynamic content tags that allow you to personalize messaging
configuration in order to manage secure payments, configure greeting and
after-hours messaging, and inform customers of their wait time and place in
queue.
Important: Variables can only be used for specific channels and message
configuration. The CVC variable, for example, can only be used when creating IVR
payment flow messaging.
IVR
The following variables can be used in IVR specific messages.
Messages can be created at Settings > Languages and Messages > IVR-specific
Messages .
@{ESTIMATED_WAIT_TIME_IN_MINUTES}
Description: the numerical value for minutes and / or hours for the current
estimated queue wait time is inserted. This message can be used in the greeting
and deflection messages.
After the numerical value, the word Minutes will be appended and will be
translated to the associated language.
Sample Input
English : A representative will be with you ASAP. The current estimated wait
is @{ESTIMATED_WAIT_TIME_IN_MINUTES}.
@{QUEUE}
Description: this is the name of queue the consumer selected. This message can
be used in the IVR menu as well as in overcapacity and voicemail.
Sample input
We're assigning a representative to help you with @{QUEUE}
Secure Payments
The following variables can be used for secure payments messaging.
Messages can be created at Settings > Languages and Messages > IVR
Purchase Flow Messages .
To create a complete purchase flow messaging using variables see IVR
Purchase Flow Messages .
@{CREDIT_CARD}
Description: inserts the credit card number entered by the customer.
Sample input
Your credit card number is @{CREDIT_CARD}. Please press 1 to confirm, press 2
to try again.
@{CVC}
Description: inserts the CVC code as entered by the consumer.
Sample input
Your CVC code is @{CVC}. Please press 1 to confirm, press 2 to try again.
@{EXPIRY_DATE}
Description: inserts the expiry date as entered by the consumer.
Sample Input
Your expiry date is @{EXPIRY_DATE}. Please press 1 to confirm, press 2 to try
again.
@{TOTAL_AMOUNT}
Description: inserts the total purchase amount including taxes and shipping.
Sample Input
The total purchase amount including taxes and shipping is @{TOTAL_AMOUNT}.
Please press 1 to confirm, press 2 if it is the incorrect product or price. If
you would like to return to the agent at any time please press the star key.
@{ZIP_CODE}
Description: inserts the zip code as entered by the consumer.
Sample Input
Your Zip Code is @{ZIP_CODE}. Please press 1 to confirm, press 2 to try again.
Chat
Variables can be used to customize the default greeting and after-hours
messaging for the Chat channel. For more information, see Customizing Mobile
and Web SDK Messages .
The following variables are available for Chat.
@{END_USER}
Description: inserts the full name of the consumer.
Important: This variable is limited by the amount of information
CCAI Platform can pass from your Web or Mobile SDK.
If you have the Web SDK configured on an unauthenticated page (no login required
by the consumer) CCAI Platform will not be able to pass individual
information about the consumer.
When authenticated, the consumer's first and last name is shown.
When unauthenticated, the term Customer is shown.
Sample input
Hi @{END_USER}, thank you for contacting us.
@{AGENT}
Description: inserts the first name of the Agent.
@{QUEUE_SIZE}
Description: this is the position in queue; the numerical value representing the
current total number of consumers waiting in queue including the consumer
seeing the number is inserted.
When configuring the message, add the supporting label to the end of the
variable in the associated language. For the example below, we added in line .
Sample input
A representative will be with you ASAP. You are number @{QUEUE_SIZE} in line.
@{TIME_UNTIL_DISMISSAL}
Description: this variable contains the remaining time until the chat is
dismissed.
For example, when the Chat dismissal timer = 3min, the dismissal
notification timer = 1min TIME_UNTIL_DISMISSAL will insert 2.
When configuring this message, add the supporting label to the end of
the variable in the associated language (minute(s)).
Sample Input
Are you still there? Please respond in the next @{TIME_UNTIL_DISMISSAL}
minute(s) or the chat session will be closed.
SMS, Social
The following variables are available for SMS, Social (currently only
WhatsApp is available).
Pre-defined SMS messages can be created at Settings > Languages and
Messages > Pre-session SMS Deflection
Global messages for WhatsApp can be created at Settings > Languages
and Messages > WhatsApp
@{COMPANY_NAME}
Description: inserts the company name as defined in Support Center
Details > Display Name . This is part of the SMS preset message.
Sample input
Thank you for contacting @{COMPANY_NAME}. We're assigning a representative to
help you.
@{END_USER}
Description: inserts the full name of the consumer.
Important: This variable is limited by the amount of information
CCAI Platform can pass from your Web or Mobile SDK.
If you have the Web SDK configured on an unauthenticated page (no login
required by the consumer) CCAI Platform will not be able to pass
individual information about the consumer.
When authenticated, the consumer's first and last name is shown.
When unauthenticated, the term Customer is shown.
Sample input
Hi @{END_USER}, thank you for contacting us.
@{QUEUE_NAME}
Description: this is the name of queue the consumer selected.
Note: This if for SMS and Social only , for IVR and Chat use
@{QUEUE}
Sample input
We're assigning a representative to help you with @{QUEUE_NAME}
@{TIME_UNTIL_DISMISSAL}
Description: this variable contains the remaining time until the chat is
dismissed.
For example, when the Chat dismissal timer = 3min, the dismissal
notification timer = 1min TIME_UNTIL_DISMISSAL will insert 2.
When configuring this message, add the supporting label to the end of
the variable in the associated language (minute(s)).
Sample Input
Are you still there? Please respond in the next @{TIME_UNTIL_DISMISSAL}
minute(s) or the chat session will be closed.
Operation Hours
The following variable can be used to automatically display opening time
based on operation hours.
@{NEXT_REOPEN_HOUR}
Description: include this variable to automatically display opening time
based on operation hours. display opening time based on operation hours
set globally or per-queue (operation hours that apply to the queue
the message is sent in). This is part of the SMS preset message.
Note: If there's a queue level override, operation hours for the queue will
display.
Sample Input
Please try again tomorrow as we are closed today. We will open at @{NEXT_REOPEN_HOUR}. .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
