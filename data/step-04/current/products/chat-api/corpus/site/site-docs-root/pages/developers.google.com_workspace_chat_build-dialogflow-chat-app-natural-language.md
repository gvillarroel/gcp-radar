---
title: "Build a Dialogflow CX Google Chat app that understands and responds with natural\
  \ language \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/chat/overview
source_metadata:
  url: https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language
  title: "Build a Dialogflow CX Google Chat app that understands and responds with\
    \ natural language \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Chat
Guides
Send feedback
Build a Dialogflow CX Google Chat app that understands and responds with natural language
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide demonstrates how to build a Google Chat app that leverages Dialogflow CX for natural language understanding and generating responses within Google Chat.
The integration involves creating a Dialogflow CX agent, connecting it to a Google Chat app, and defining conversation flows to handle user interactions.
Dialogflow CX agents can utilize prebuilt agents or be customized with intents, parameters, and fulfillment logic to address specific conversational needs.
Users interact with the Chat app by sending messages, which Dialogflow CX processes, potentially interacting with external services via webhooks before delivering a response back to the user.
Debugging and troubleshooting are supported through detailed error logs, while project cleanup instructions are provided to manage resources and avoid unnecessary costs.
This page explains how to build a Google Chat app that can both
understand and respond with natural language using
Dialogflow . This guide uses
Dialogflow CX , which has
a direct integration with Google Chat. You can also use
Dialogflow ES to build a
Dialogflow ES Google Chat app by following
the
Dialogflow ES Google Chat
guide.
For example, consider a Chat app that helps people rent
cars. A user might write, "I'd like to rent a car". The
Chat app might respond with a question like
"Where would you like to pick up the vehicle?" which starts a human-like
conversation with the user in which the Chat app both
understands and responds with human speech while booking the car rental.
This is just one example. Dialogflow Chat apps are useful in all
kinds of interactions. If it requires natural human speech, it calls for a
Dialogflow Chat app. The
prebuilt agents
help you get started fast, and showcase what Dialogflow can do, like:
Book flights
Schedule doctor appointments
Order food delivery
Answer questions about a retail product catalog, like whether items
are available in other colors
Figure 1. Selecting a prebuilt agent for a Dialogflow Chat app.
Figure 2. Testing the agent in Dialogflow CX to make sure the agent's logic and configuration work as intended. The diagram shows a sequential set of topical pages that concern specific steps in the conversation, like setting a pickup and return location for a rental car, and configures the logic that connects them. The conversation is tested in a simulator.
Figure 3. Configuring a Chat app to process responses using the Dialogflow CX agent on the Chat API configuration page in Google Cloud console.
Figure 4. Having a conversation about booking a rental car with the Dialogflow Chat app in Google Chat.
Objectives
Set up your environment.
Create and deploy a Dialogflow CX agent.
Create and deploy a Chat app powered by the
Dialogflow CX agent.
Test the Chat app.
Prerequisites
A Business or Enterprise
Google Workspace account with access to
Google Chat .
A Google Cloud project with billing enabled. To check that an existing project has billing enabled,
see Verify the
billing status of your projects . To create a project and set up billing, see
Create a Google Cloud project .
Architecture
The following diagram shows the architecture of a
Chat app built with Dialogflow:
In the preceding diagram, a user interacting with a Dialogflow
Chat app has the following flow of information:
A user sends a message in Chat to a
Chat app, either in a direct message or in a
Chat space.
A Dialogflow virtual agent, which resides in Google Cloud, receives
and processes the message to produce a response.
Optionally, using a
Dialogflow webhook ,
the Dialogflow agent can interact with external third-party services, such
as a project management system or a ticketing tool.
The Dialogflow agent sends a response back to the
Chat app service in Chat.
The response is delivered to the Chat space.
Set up the environment
Before using Google APIs, you need to turn them on in a Google Cloud project.
You can turn on one or more APIs in a single Google Cloud project.
In the Google Cloud console, enable the Google Chat API and the Dialogflow API.
Enable the APIs
Confirm that you're enabling the APIs in the correct
Cloud project, then click Next .
Confirm that you're enabling the correct APIs, then click Enable .
Create a Dialogflow CX agent
A
Dialogflow CX agent
is a virtual agent that handles concurrent conversations
with your end-users. It's a natural language comprehension module that
understands the nuances of human language. Dialogflow translates end-user text
during a conversation to structured data that your apps and services
can understand. You design and build a Dialogflow agent to handle the types of
conversations required for your system.
A Dialogflow agent is like a human call center agent. You train them both
to handle expected conversation scenarios, and your training doesn't need to be
overly explicit.
Here's how to create the Dialogflow CX agent:
In the Dialogflow CX console, open the Dialogflow CX Console. Click
Menu menu
> Dialogflow CX .
Go to the Dialogflow CX console
Choose a Google Cloud project. To find your project, you might need to
click All and then search for it.
Now you have the option to choose a prebuilt agent or
create your own. If you prefer to explore agent
customization in detail later, choose one of the
prebuilt agents ,
which are also helpful to learn about what agents can do.
To choose a prebuilt agent, follow these steps:
Click Use prebuilt agents .
Select a prebuilt agent. For this guide, select
Travel: car rental .
Agents are rated as beginner,
intermediate, or advanced based on how many features the agent uses
and upon the sophistication of its conversation logic. Choosing an
intermediate or advanced agent might require agent-specific
customizations and settings, including enabling features and APIs in
Google Cloud console.
Click Import as agent .
To create your own agent, follow these steps:
Click Create agent .
Select Auto-generate to create a
data store agent
or select Build your own to create other kinds of agents.
For a detailed walkthrough of the agent building process, see
Create a Dialogflow CX agent .
Configure basic agent settings:
In Display name , enter a display name.
Select your preferred
location .
If you want to change advanced
location settings ,
click Edit .
Select your preferred time zone.
Select the default language for your agent.
You can't change the default language for an agent after creation.
Click Create . Dialogflow CX begins creating the agent, and then
displays the agent's default start flow.
Optionally, customize the agent. For a detailed walkthrough the agent
customization process, see
Create a Dialogflow CX agent .
As a best practice, test the agent:
Click Test agent .
Select Test agent in environment .
In Environment, select Draft .
In Flow, select Default Start Flow .
In Page, select Start Page .
In the Talk to agent compose bar, type Hello and press Enter .
The agent responds by introducing itself.
Complete the test by having the sample test conversation .
The Dialogflow CX agent is created. Return to the Dialogflow CX console.
Click Menu menu
> Dialogflow CX .
Go to the Dialogflow CX console
Under Agents , click more_vert
> Copy name . Save this name, as
you use it when configuring the Chat app.
Create a Chat app and connect it with the Dialogflow agent
After creating a Dialogflow CX agent, follow these steps to turn it into a
Chat app:
In the Google Cloud console, go to Google Chat API. Search for "Google Chat API" and
click Google Chat API , then click Manage .
Go to Chat API
Click Configuration and set up the Chat app:
In App name , enter Dialogflow App .
In Avatar URL , enter
https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png .
In Description , enter Responds to real human conversation .
Under Functionality , select Join spaces and group conversations .
Under Connection settings , select Dialogflow .
Under Dialogflow settings , select Dialogflow CX .
In Agent or Environment resource name , paste the Dialogflow CX agent
name you copied at the end of
Create a Dialogflow CX agent .
Make this Chat app available to specific people and groups
in your domain and enter your email address.
Under Logs , select Log errors to Logging .
Click Save .
The Chat app is ready to receive and respond to
messages on Chat.
Test the Chat app
Test the Dialogflow CX Chat app by messaging it in
Google Chat.
Open Google Chat using the Google Workspace account that you
provided when you added yourself as a trusted tester.
Go to Google Chat
Click add New chat .
In the Add 1 or more people field, type the name of your
Chat app.
Select your Chat app from the results. A direct
message opens.
Note: If you don't see your Chat app in the list of
results, ensure that you've included your Google Workspace account in the
Visibility settings of the Chat API Configuration
page in the Google Cloud console.
In the new direct message with the app, type Hello and
press enter .
The Dialogflow Chat app responds by introducing
itself.
Complete the test by having the
sample test conversation .
Sample test conversation
To test the Dialogflow CX Chat app in either the
Dialogflow CX console or in Google Chat, have the following conversation.
The explanation helps you understand how the Dialogflow CX agent interprets the
user's natural language and produces its own natural language response at
each step in the conversation. This sample conversation is based on the
prebuilt agent
called Travel: car rental .
Dialog
Explanation
End-user: Hello
Agent: Hi! I'm the virtual car rental agent. I can
help you start a new car rental reservation. How can I assist
you today?
The Default Welcome Intent route
in the Default Start Flow is called.
The fulfillment for this state handler ("Hi! I'm...")
is added to the response queue.
The agent sends the response queue to the end-user.
End-user: I'd like to rent a car.
Agent: Where would you like to pick up the vehicle?
The car_rental.reservation_create intent route
in the Start Page is matched.
The session transitions to the Pickup Location page.
The Pickup Location page form isn't complete, so the
agent uses the pickup_location parameter to prompt the user
("Where would you like to pick up..."),
which is added to the response queue.
The agent sends the response queue to the end-user.
End-user: Las Vegas
Agent: Ok, your pickup will be in Las Vegas.
Agent: Is your drop off location different from your
pickup location?
The end-user input fills the pickup_location
parameter requested by the agent in the previous
conversation turn.
The car_rental.return_different_location intent
route in the Default Start Flow is matched.
The form completion route in the Pickup Location page
is evaluated and called.
It has a fulfillment ("Ok, your pickup..."), which is added
to the response queue with its parameter references resolved to
actual values supplied by the end-user.
The session transitions to the Confirm Location page.
The Confirm Location page has an entry fulfillment
("Is your drop off location different..."),
which is added to the response queue.
The agent sends the response queue to the end-user.
End-user: Yes. I'll drop the car off in Los Angeles.
Agent: Ok, your drop off will be in Los Angeles.
Agent: What date and time would you like to pick up the vehicle?
The car_rental.return_different_location intent
route in the Default Start Flow is matched.
The session transitions to the Drop Off Location page.
The end-user input fills the drop_off_location
parameter requested by the agent in the previous
conversation turn.
The form completion route in the Drop Off Location page
is evaluated and called.
It has a fulfillment ("Ok, your drop off..."), which is added
to the response queue.
The session transitions to the Rental Duration page.
The Rental Duration page has incomplete form values, so it
prompts the user for the pickup_date_time parameter
("What date and time would you like to pick up..."),
which is added to the response queue.
The agent sends the response queue to the end-user.
End-user: I'd like to pick up the car on March 5 at noon.
Agent: What date and time would you like to drop off the vehicle?
The end-user input fills the pickup_date_time
parameter requested by the agent in the previous
conversation turn.
The Rental Duration page has another missing form value,
so it prompts the user for the drop_off_date_time parameter
("What date and time would you like to drop off..."),
which is added to the response queue.
The agent sends the response queue to the end-user.
End-user: March 15 at noon.
Agent: So to confirm:
You will be picking the vehicle up in
Las Vegas
2024-03-05 12:00:00 and dropping it off
in Los Angeles
2024-03-15 12:00:00
Does that sound right?
The end-user input fills the drop_off_date_time
parameter requested by the agent in the previous
conversation turn.
The session transitions to the Confirm Rental Duration page.
The Confirm Rental Duration page has an entry fulfillment
("So to confirm..."),
which is added to the response queue.
The agent sends the response queue to the end-user.
End-user: Yes, thank you.
Agent: Great! Now let's choose a vehicle.
Agent: Would you like an economy or luxury
vehicle?
The small_talk.confirmation.yes intent
route in the Confirm Rental Duration page is matched.
The agent confirms the user's choice with a message
("Great! Now let's choose..."),
which is added to the response queue.
The session transitions to the Vehicle Disambiguation page.
The Vehicle Disambiguation page form is not complete, so the
agent uses the vehicle_type parameter to prompt the user
("Would you like an economy or luxury..."),
which is added to the response queue.
The agent sends the response queue to the end-user.
End-user: Economy, please.
Agent: Would you like the Cymbal Car or the Cymbal Truck?
The $session.params.vehicle_type="economy_vehicle" intent
route is matched.
The session transitions to the Economy Options page.
The Economy Options page has an entry fulfillment
("Would you like the..."),
which is added to the response queue.
The agent sends the response queue to the end-user.
End-user: Cymbal Truck.
Agent: The Cymbal Truck is $50.33 per day.
It fits 4 people and comes with an AM/FM radio.
Would you like to proceed to payment?
End-user: Yes, please.
The $session.params.vehicle_type="Cymbal Truck" intent
route is matched and the vehicle_model parameter is filled.
The session transitions to the Confirm Cymbal Truck page.
The Confirm Cymbal Truck page has an entry fulfillment
("The Cymbal Truck is $50.33 per day..."),
which is added to the response queue.
The agent sends the response queue to the end-user.
The user's response matches the small_talk.confirmation.yes
route.
Agent: What card type will you be using?
End-user: Altostrat
Agent: Please enter the card number.
End-user: 1234 1234 1234 1234
Agent: What is the name on the card?
End-user: Charlie
Agent: What is the billing street address?
End-user: 1800 Amphibious Blvd. Mountain View, CA
Agent: What is the billing ZIP code?
End-user: 94045
Agent: You will be picking the Cymbal Car
up in Las Vegas, 2024-03-05 12:00:00 and dropping it off,
2024-03-15 12:00:00. The total for this trip will be
$175.38.
Agent: Thank you for renting with us and have a wonderful day!
The session transitions to the Payment page.
The Payment form is not complete so the agent prompts
the user for the card_type , card_number ,
billing_name , billing_street_address ,
and billing_zip_code parameters
("What card type will..."),
which are sequentially added to the response queue and sent as the
user responds. The user's responses set each parameter value.
The session transitions to the Rental Confirmation page.
The Rental Confirmation page has an entry fulfillment
("Ok, your pickup will be..."),
which is added to the response queue.
The agent sends the response queue to the end-user.
The session transitions to the End Session page.
Send card messages from Dialogflow
code
Codelab: For an applied example of sending card messages
from Dialogflow, see
Display sources in knowledge Chat app answers in the codelab Build apps for Google Chat with Gemini.
Dialogflow can respond with
text or
card messages. To respond with a card
message, specify it as a
custom payload
in
fulfillment .
The following JSON shows how to send a card message as a custom payload in
fulfillment:
json
{
'cardsV 2 ' : [{
'cardId' : 'crea te CardMessage' ,
'card' : {
'header' : {
' t i tle ' : 'A card message!' ,
'sub t i tle ' : 'Se nt fr om Dialog fl ow' ,
'imageUrl' : 'h tt ps : //developers.google.com/chat/images/chat-product-icon.png',
'imageType' : 'CIRCLE'
},
'sec t io ns ' : [
{
'widge ts ' : [
{
'bu tt o n Lis t ' : {
'bu tt o ns ' : [
{
' te x t ' : 'Read t he docs!' ,
'o n Click' : {
'ope n Li n k' : {
'url' : 'h tt ps : //developers.google.com/workspace/chat'
}
}
}
]
}
}
]
}
]
}
}]
}
Limits and considerations
Chat interaction events
have limited support and some considerations:
The following
interaction events types
are supported:
MESSAGE
ADDED_TO_SPACE
CARD_CLICKED
For MESSAGE or ADDED_TO_SPACE events, the query input sent to the
Dialogflow agent corresponds to the value of the argumentText field in
the Chat message. If the message includes a
slash command , the value of
the text field is used instead.
For CARD_CLICKED events, the query input sent to the Dialogflow agent
is formatted as CARD_CLICKED.functionName , where functionName
corresponds to the value of the function field of the
Action object
attached to the interactive card element (like a button).
The full JSON payload of each Chat interaction event
is sent to Dialogflow as a custom payload in the query parameter, and
can be accessed with a
Dialogflow webhook
by querying the value of the WebhookRequest.payload field.
Considerations for responding to
slash commands and
receiving data from cards or dialogs :
When Dialogflow Chat apps receive a message with a slash
command, the query input contains only the value of the text field.
The text field begins with the name of the slash command (for example,
/command ), which you can use to configure a Dialogflow agent's intent
to detect a slash command.
If the Dialogflow agent needs to process the
Chat interaction event JSON payload ,
it can do so by using a
Dialogflow webhook
to inspect the custom payload in the query parameter.
To display a dialog from the
Dialogflow Agent, respond with a single custom JSON payload that
includes a message containing a DIALOG
action response .
To process data inputted from cards, the Dialogflow agent can detect
intents that begin with the text CARD_CLICKED and respond with a
single custom JSON payload containing the appropriate
action .
Link previews aren't supported.
If the Dialogflow agent responds with just one message, then the message
is sent to Google Chat synchronously. If the Dialogflow agent responds
with multiple messages, then all messages are sent to Chat
asynchronously by calling the
create
method on the spaces.messages resource in Chat API once for each
message.
When using the Dialogflow CX integration with Chat,
the Dialogflow agent and the Chat app must be set
up in the same Google Cloud project. If you need to set up the Dialogflow
and Chat in different Cloud projects, then you can
set up an intermediate server to facilitate the connection. To learn how,
see this
Chat integration for Dialogflow CX example
on GitHub.
Troubleshoot
When a Google Chat app or
card returns an error, the
Chat interface surfaces a message saying "Something went wrong."
or "Unable to process your request." Sometimes the Chat UI
doesn't display any error message, but the Chat app or
card produces an unexpected result; for example, a card message might not
appear.
Although an error message might not display in the Chat UI,
descriptive error messages and log data are available to help you fix errors
when error logging for Chat apps is turned on. For help viewing,
debugging, and fixing errors, see
Troubleshoot and fix Google Chat errors .
Clean up
To avoid incurring charges to your Google Cloud account for the
resources used in this tutorial, we recommend that you delete the
Cloud project.
Caution: Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for this tutorial, when you delete it, you also delete any other work you've done in the project.
Custom project IDs are lost. When you created this project, you might have created a custom project ID that you want to use in the future. To preserve the URLs that use the project ID, such as a URL on appspot.com, delete the selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple tutorials and quickstarts, reusing projects can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page. Click
Menu menu
> IAM & Admin
> Manage Resources .
Go to Resource Manager
In the project list, select the project you want to delete and then click
Delete delete .
In the dialog, type the project ID and then click Shut down to delete
the project.
Related topics
Dialogflow CX takes a
state machine
approach to Dialogflow agent design, which gives you clear and explicit
control over a conversation, a better end-user experience, and a better
development workflow. When building a Dialogflow
Chat app, we recommend using Dialogflow CX.
To learn more about building and configuring agents, see
Dialogflow CX Agents .
For a detailed walkthrough instructing you how to build and configure
agents, see
Create a Dialogflow CX agent .
code
Codelab: For an example of how to build a Dialogflow CX data
store agent, see the knowledge Chat app from
the codelab
Build apps for Google Chat with Gemini .
code
Codelab: For an example of how to build a Dialogflow CX
conversational agent, see the feedback Chat app
from the codelab
Build apps for Google Chat with Gemini .
Dialogflow ES
is another way to use Dialogflow with a Chat app.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["To build a Google Chat app integrated with Dialogflow CX, first enable the necessary APIs and set up a Google Cloud project. Then, create a Dialogflow CX agent (custom or prebuilt), configure its settings, and test it. Next, create a Chat app, connect it to the Dialogflow agent by pasting the agent name, and configure user access. Finally, test the Chat app within Google Chat, sending messages to interact with the agent. The app uses natural language processing to understand intents, extract parameters, and generate responses.\n"]]
