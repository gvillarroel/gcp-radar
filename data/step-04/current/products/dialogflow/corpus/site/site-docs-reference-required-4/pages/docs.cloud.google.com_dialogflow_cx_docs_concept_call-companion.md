---
title: "Call companion \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/concept/conversation-history
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion
  title: "Call companion \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
Call companion
Stay organized with collections
Save and categorize content based on your preferences.
Call companion provides an interactive visual interface
that end-users can access on their mobile phone
during a voice call with your agent.
This visual interface is meant to supplement the call,
not replace it.
With this interface,
a user can provide text input,
be shown images,
and view the call transcript in real time.
The user can choose to interact with your agent
via the voice call or call companion;
either can be used at any point during the call.
This feature includes a built-in SMS gateway.
To initiate the mobile interface,
Dialogflow sends an SMS message to the user's phone.
This message is sent once during a conversation.
The user is prompted to click a link in the message,
which takes them to a Dialogflow hosted web page.
Note: You are required to obtain consent to send SMS messages to end-users. This can be achieved by incorporating a consent related question in the agent design before sending the SMS. Here's an example of appropriate opt-in consent verbiage: "Do you consent to receiving an SMS containing a link to your call transcript? Respond YES or press 1."
Sample use cases:
Input complex information such as name,
address, email address, pin numbers, credit card numbers, bank account
numbers, and so on.
Troubleshooting where sharing an indicative image can help the
customer with following the remediation steps.
Showing clickable menu options.
Limitations
The following limitations apply:
Call companion's built-in SMS functionality currently only works with
Dialogflow CX Phone Gateway .
Dialogflow CX Phone Gateway limitations apply.
To use call companion with a different telephony
system or to use a custom setup for SMS gateway, please reach
out to your Google account team.
There is only a single phone number provisioned
for the built-in SMS feature. This will be shared across all Dialogflow
users for this feature, but you can add your company name to the SMS. To reserve your own phone number, please reach out to your Google account team.
The built-in SMS phone number can send SMS only to the US phone numbers.
Call companion only supports text input, clickable chips and
image output as interactive and rich content .
The number of concurrent calls using call companion cannot exceed 1000
for a single project.
Call companion does not work with VPC-SC by default. To enable it, contact
support.
Use call companion
To use call companion:
Go to the Dialogflow CX console .
Choose your Google Cloud project.
Select your agent.
Go to Agent Settings > Multimodal and enable Conversation History .
Select the Manage tab.
Click Integrations in the left sidebar menu.
Enable call companion:
For a new telephony integration:
Follow the steps to enable
Dialogflow CX Phone Gateway ,
and check the Enable call companion option
for a new
conversation profile.
For an existing telephony integration:
On the Manage tab, click Integrations ,
then click Manage for CX Phone Gateway.
Click the phone number you want to enable call companion for.
Check the Enable call companion option
in the conversation profile settings.
Configure call companion:
To add your company name to the built-in SMS,
go to the agent settings,
enter your company name on the Multimodal tab,
and click Save .
To trigger call companion at the beginning of a call,
check Automatically trigger call companion at the start of the conversation
on the Multimodal tab.
Alternatively,
you can enable the Send Call Companion SMS option
under Call companion settings in the Default Welcome Intent route
in the Default Start Flow.
Checking or unchecking the former automatically enables or disables the latter.
To trigger call companion at a later conversation turn,
enable the Send Call Companion SMS option under
Call companion settings for any fulfillment within your agent.
If enabled in multiple fulfillments,
the SMS is sent for whichever fulfillment is triggered first.
To add an introductory message to let the
user know about call companion and the SMS sent, add a response
fulfillment
for the same fulfillment or page where you have enabled the call companion SMS.
If you are using the automatic trigger option, you add this introductory
message to the Default welcome intent route on the Default Start Page. This
introductory message can be something like "Hi there. To interact with the
call visually, click on the link I have sent you via SMS".
(Optional) Add rich content .
Test call companion by calling the Dialogflow CX Phone Gateway
number for which you have enabled call companion.
Rich content
You can add custom payloads that are specific to call companion in
fulfillments where you want to
display rich elements in the call companion web page.
To do this:
Click Add dialogue option .
Select Custom payload .
Click Select template . You will see a list of predefined templates for
call companion rich elements.
Select the required template and update it as per your use case. Note that
only the fields present in the predefined templates are supported.
Agent design recommendations
The following recommendations apply to call companion:
For turns requiring interactive end-user input
(text input, chip tapping, and so on), adjust the
no speech timeout
on the page, flow, or agent level to allow
the user enough time to input the required content.
You may want to create special pages with page-level timeouts
where the end-user may need more time to interact with call companion.
If you want to provide different agent responses for voice and call
companion text (for example, the virtual agent may speak a short introductory
sentence, but you want the corresponding call companion text to show a more
verbose text), you can set the voice response as
output audio text
and the call companion response as the Text response.
When you are using the Dialogflow CX Phone Gateway,
it will only use the output audio text for voice output
and will only use the text response for the call companion transcript.
The link sent to the end-user's phone
includes your Cloud project ID.
Make sure that this ID does not contain any sensitive
information that you do not want to be made public.
Call companion logs
You can view call companion logs in
Cloud logging
and
Conversation history .
Parameter redaction
Call companion respects the
parameter redaction
settings.
While the call companion web page is open,
an end-user can see these parameter values in the call transcript
as they are provided.
If the page is initially loaded or reloaded after parameters are provided,
the values are shown as redacted.
Settings
You can customize the following fields for the Dialogflow CX Messenger UI or
call companion UI:
Company name or title
Font
Logo (must be stored in a Google Cloud bucket, format: gs://<bucket name>/<object name> )
Text color (select the color or enter hex code)
Background color (select the color or enter hex code)
User input background color (select the color or enter hex code)
Agent response background color (select the color or enter hex code)
Customize the UI
Select an agent with call companion enabled and click Agent Settings ,
then the Multimodal tab.
On the Multimodal page, select the UI settings tab. Options for UI
settings should be visible. Make your selections, then click Save to
save your changes.
If you are using Dialogflow CX Messenger , go to the left-hand navigation
menu and click Manage > Integrations > Dialogflow CX Messenger > Manage .
The code that appears includes your new UI changes. Copy this code to add
the agent to your website.
Previous
arrow_back
Multilingual agents
Next
Service use best practices
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
