---
title: "Respond to Google Chat app commands \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/commands
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/authenticate-authorize
source_metadata:
  url: https://developers.google.com/workspace/chat/commands
  title: "Respond to Google Chat app commands \_|\_ Google for Developers"
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
Respond to Google Chat app commands
Stay organized with collections
Save and categorize content based on your preferences.
Note: This guide explains how to build an interactive Chat app
using Chat API interaction events . You can also build your
Chat app as a Google Workspace add-on. To learn about which framework
to use, see Build an interactive
Google Chat app .
This page explains how to set up and respond to commands as a
Google Chat app.
Commands help users discover and use key features of a
Chat app. Only Chat apps can see the
content of a command. For example, if a user sends a message with a slash
command, the message is only visible to the user and the
Chat app.
To decide whether you should build commands, and to understand how to design
user interactions, see Define all user
journeys .
Types of Chat app commands
You can build Chat app commands as slash commands or quick commands. To
discover commands, users can type a slash / in the reply area, or click Google Workspace tools
from the reply area of a Chat message. To use each type of command, users can do the
following:
Slash commands: Users can select a slash command from the menu or type a slash
( / ) and then a predefined text, such as /about .
Chat apps typically require argument text for the slash command.
Create a slash command if your Chat app requires additional input
from the user. For example, you can create a slash command called
/search that runs after the user enters a phrase to
search for, like /search receipts .
Quick commands: Users use commands by opening the menu from the reply
area of a Chat message. To use a command, they click Add
and
select a command from the menu.
Create a quick command if your Chat app can respond to the user
immediately, without waiting for additional input. For
example, you can create a quick command called Random image that
responds immediately with an image.
The following image shows how users discover a menu of slash commands and quick commands:
Users discover a menu of slash commands and quick commands.
Prerequisites
Note: The code samples in this guide are written to run as a
Google Cloud Run function
for Node.js, Python and Java.
Node.js
A Google Chat app that receives and responds to interaction events . To create an
interactive Chat app using an HTTP service, complete this quickstart .
Apps Script
A Google Chat app that receives and responds to interaction events . To create an
interactive Chat app in Apps Script, complete this quickstart .
Python
A Google Chat app that receives and responds to interaction events . To create an
interactive Chat app using an HTTP service, complete this quickstart .
Java
A Google Chat app that receives and responds to interaction events . To create an
interactive Chat app using an HTTP service, complete this quickstart .
Set up the command
This section explains how to complete the following steps to set up the
command:
Create a name and description for the command.
Configure the command in the Google Cloud console.
Name and describe the command
The name of a command is what users type or select to invoke the
Chat app. A short description also appears below the name, to prompt
users further about how to use the command:
The name and description for a slash command.
When choosing a name and description for your command, consider the following recommendations:
To name a command:
Use short, descriptive, and actionable words or phrases to make the commands clear to the
user. For example, instead of the name Create a reminder , use
Remind me .
Consider using a unique or common name for your command. If your command describes a
typical interaction or feature, you can use a common name that users recognize and expect,
such as Settings or Feedback . Otherwise, try to use unique command
names, because if your command name is the same for other Chat apps, the user
must filter through similar commands to find and use yours.
To describe a command:
Keep the description short and clear so that users know what to expect when they use the command.
Let users know if there are any formatting requirements for the command. For example, if you
create a slash command that requires argument text, set the description to something like
Remind me to do [something] at [time] .
Let users know if the Chat app replies to everyone in the space, or
privately to the user who invokes the command. For example, for the quick command
About , you could describe it as
Learn about this app (Only visible to you) .
Configure the command in the Google Cloud console
To create a slash or quick command, you specify information about the command in
your Chat app's configuration for the Google Chat API.
To configure a command in the Google Chat API, complete the following steps:
In the Google Cloud console, click Menu
menu
> APIs & Services
> Enabled APIs & Services
> Google Chat API
Go to the Google Chat API page
Click Configuration .
Under Commands , click Add a command .
Enter a command ID, description, command type, and name for the command:
Command ID: a number from 1 to 1000 that your
Chat app uses to recognize the command and
return a response.
Description: the text that describes what the command does.
Descriptions can be up to 50 characters and can include special
characters.
Command type: select either Quick command or Slash command .
Specify a name for the quick command or slash command:
Quick command name: The display name that users select from the
menu to invoke the command. Can be up to 50 characters and include
special characters. For example, Remind me .
Slash command name: The text that users type to invoke the
command in a message. Must start with a slash, contain only text, and
can be up to 50 characters. For example, /remindMe .
Optional: If you want your Chat app to respond to
the command with a dialog , select the
Open a dialog checkbox.
Click Save .
The command is now configured for the Chat app.
Respond to a command
For more examples, see Google Chat app samples .
When users use a command, your Chat app
receives an interaction event .
The event payload contains metadata with details about the command that was
invoked (including the command ID and the command type), so that you can return
an appropriate response.
A Chat app responds privately to the
slash command /help to explain how to get support.
To respond to each type of command, you must handle different event types
and metadata objects in the event payload:
Command type
Event type
Command metadata
Slash command
MESSAGE
message.slashCommand
or message.annotation.slashCommand
Quick command
APP_COMMAND
appCommandMetadata
To learn how to respond to a command with a message, see the following sections.
Respond to a slash command
The following code shows an example of a Chat app that
replies to the slash command /about . The Chat app
handles MESSAGE interaction events, detects whether the interaction event
contains the matching command ID, and returns a private message:
Node.js
node/avatar-app/index.js
View on GitHub
/**
* Handles slash and quick commands.
*
* @param {Object} event - The Google Chat event.
* @param {Object} res - The HTTP response object.
*/
function handleAppCommands ( event , res ) {
const { appCommandId , appCommandType } = event . appCommandMetadata ;
switch ( appCommandId ) {
case ABOUT_COMMAND_ID :
return res . send ({
privateMessageViewer : event . user ,
text : 'The Avatar app replies to Google Chat messages.'
});
case HELP_COMMAND_ID :
return res . send ({
privateMessageViewer : event . user ,
text : 'The Avatar app replies to Google Chat messages.'
});
}
}
Apps Script
apps-script/avatar-app/avatar-app.gs
View on GitHub
// Checks for the presence of a slash command in the message.
if ( event . message . slashCommand ) {
// Executes the slash command logic based on its ID.
// Slash command IDs are set in the Google Chat API configuration.
switch ( event . message . slashCommand . commandId ) {
case ABOUT_COMMAND_ID :
return {
privateMessageViewer : event . user ,
text : 'The Avatar app replies to Google Chat messages.'
};
}
}
Python
python/avatar-app/main.py
View on GitHub
def handle_app_commands ( event : Mapping [ str , Any ]) - > Mapping [ str , Any ]:
"""Handles slash and quick commands.
Args:
Mapping[str, Any] event: The Google Chat event.
Returns:
Mapping[str, Any]: the response
"""
app_command_id = event [ "appCommandMetadata" ][ "appCommandId" ]
if app_command_id == ABOUT_COMMAND_ID :
return {
"privateMessageViewer" : event [ "user" ],
"text" : "The Avatar app replies to Google Chat messages." ,
}
elif app_command_id == HELP_COMMAND_ID :
return {
"privateMessageViewer" : event [ "user" ],
"text" : "The Avatar app replies to Google Chat messages." ,
}
return {}
Java
java/avatar-app/src/main/java/AvatarApp.java
View on GitHub
/**
* Handles slash and quick commands.
*
* @param event The Google Chat event.
* @param response The HTTP response object.
*/
private void handleAppCommands ( JsonObject event , HttpResponse response ) throws Exception {
int appCommandId = event . getAsJsonObject ( "appCommandMetadata" ). get ( "appCommandId" ). getAsInt ();
switch ( appCommandId ) {
case ABOUT_COMMAND_ID :
Message aboutMessage = new Message ();
aboutMessage . setText ( "The Avatar app replies to Google Chat messages." );
aboutMessage . setPrivateMessageViewer ( new User ()
. setName ( event . getAsJsonObject ( "user" ). get ( "name" ). getAsString ()));
response . getWriter (). write ( gson . toJson ( aboutMessage ));
return ;
case HELP_COMMAND_ID :
Message helpMessage = new Message ();
helpMessage . setText ( "The Avatar app replies to Google Chat messages." );
helpMessage . setPrivateMessageViewer ( new User ()
. setName ( event . getAsJsonObject ( "user" ). get ( "name" ). getAsString ()));
response . getWriter (). write ( gson . toJson ( helpMessage ));
return ;
}
}
Replace ABOUT_COMMAND_ID with the command ID that you
specified when you configured the command in the Google Cloud console.
Respond to a quick command
The following code shows an example of a Chat app that
replies to the quick command Help . The Chat app
handles APP_COMMAND interaction events, detects whether the interaction event
contains the matching command ID, and returns a private message:
Node.js
node/avatar-app/index.js
View on GitHub
/**
* Handles slash and quick commands.
*
* @param {Object} event - The Google Chat event.
* @param {Object} res - The HTTP response object.
*/
function handleAppCommands ( event , res ) {
const { appCommandId , appCommandType } = event . appCommandMetadata ;
switch ( appCommandId ) {
case ABOUT_COMMAND_ID :
return res . send ({
privateMessageViewer : event . user ,
text : 'The Avatar app replies to Google Chat messages.'
});
case HELP_COMMAND_ID :
return res . send ({
privateMessageViewer : event . user ,
text : 'The Avatar app replies to Google Chat messages.'
});
}
}
Apps Script
apps-script/avatar-app/avatar-app.gs
View on GitHub
/**
* Handles the APP_COMMAND event type. This function is triggered when a user
* interacts with a quick command within the Google Chat app. It responds
* based on the command ID.
*
* @param {Object} event The event object from Google Chat, containing details
* about the app command interaction. It includes information like the
* command ID and the user who triggered it.
*/
function onAppCommand ( event ) {
// Executes the quick command logic based on its ID.
// Command IDs are set in the Google Chat API configuration.
switch ( event . appCommandMetadata . appCommandId ) {
case HELP_COMMAND_ID :
return {
privateMessageViewer : event . user ,
text : 'The Avatar app replies to Google Chat messages.'
};
}
}
Python
python/avatar-app/main.py
View on GitHub
def handle_app_commands ( event : Mapping [ str , Any ]) - > Mapping [ str , Any ]:
"""Handles slash and quick commands.
Args:
Mapping[str, Any] event: The Google Chat event.
Returns:
Mapping[str, Any]: the response
"""
app_command_id = event [ "appCommandMetadata" ][ "appCommandId" ]
if app_command_id == ABOUT_COMMAND_ID :
return {
"privateMessageViewer" : event [ "user" ],
"text" : "The Avatar app replies to Google Chat messages." ,
}
elif app_command_id == HELP_COMMAND_ID :
return {
"privateMessageViewer" : event [ "user" ],
"text" : "The Avatar app replies to Google Chat messages." ,
}
return {}
Java
java/avatar-app/src/main/java/AvatarApp.java
View on GitHub
/**
* Handles slash and quick commands.
*
* @param event The Google Chat event.
* @param response The HTTP response object.
*/
private void handleAppCommands ( JsonObject event , HttpResponse response ) throws Exception {
int appCommandId = event . getAsJsonObject ( "appCommandMetadata" ). get ( "appCommandId" ). getAsInt ();
switch ( appCommandId ) {
case ABOUT_COMMAND_ID :
Message aboutMessage = new Message ();
aboutMessage . setText ( "The Avatar app replies to Google Chat messages." );
aboutMessage . setPrivateMessageViewer ( new User ()
. setName ( event . getAsJsonObject ( "user" ). get ( "name" ). getAsString ()));
response . getWriter (). write ( gson . toJson ( aboutMessage ));
return ;
case HELP_COMMAND_ID :
Message helpMessage = new Message ();
helpMessage . setText ( "The Avatar app replies to Google Chat messages." );
helpMessage . setPrivateMessageViewer ( new User ()
. setName ( event . getAsJsonObject ( "user" ). get ( "name" ). getAsString ()));
response . getWriter (). write ( gson . toJson ( helpMessage ));
return ;
}
}
Replace HELP_COMMAND_ID with the command ID that you
specified when you configured the command in the Google Cloud console.
Test the command
To test the command and code, see
Test interactive features for Google Chat apps .
To learn how to test and use the command in the Chat UI,
see Use apps in Google Chat
in the Google Chat Help documentation.
Related topics
View Chat app samples
that use commands
Send a message
Open interactive dialogs
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
