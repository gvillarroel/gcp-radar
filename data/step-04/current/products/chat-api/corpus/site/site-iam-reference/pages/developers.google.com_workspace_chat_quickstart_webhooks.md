---
title: "Build a Google Chat app as a webhook \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/quickstart/webhooks
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/authenticate-authorize
source_metadata:
  url: https://developers.google.com/workspace/chat/quickstart/webhooks
  title: "Build a Google Chat app as a webhook \_|\_ Google for Developers"
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
Build a Google Chat app as a webhook
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Webhooks provide a way for external services to send asynchronous, one-way notifications to Google Chat spaces.
To set up a webhook, you need a Google Workspace account, a Chat space, and a script that sends messages to the webhook URL.
Webhooks can be used to start new threads or reply to existing ones in Chat spaces using threadKey .
Implement error handling in your script to manage potential issues like invalid requests or network problems.
Be mindful of limitations, such as per-space message rate limits and restricted response data.
This page describes how to set up a webhook to send asynchronous messages into a
Chat space using external triggers. For example, you can
configure a monitoring application to notify on-call personnel on
Chat when a server goes down. To send a synchronous message
with a Chat app, see
Send a message .
With this type of architecture
design, users can't interact with the webhook or the connected external
application because communication is one-way. Webhooks aren't conversational.
They can't respond to or receive messages from users or
Chat app interaction events .
To respond to messages,
build a Chat app
instead of a webhook.
While a webhook isn't technically
a Chat app—webhooks connect applications using standard
HTTP requests—this page refers to it as a Chat app for
simplification. Each webhook only works in the Chat space in
which it's registered. Incoming webhooks work in direct messages, but only when
all users have
Chat apps enabled .
You can't publish webhooks to the Google Workspace Marketplace.
The following diagram shows the architecture of a webhook connected to
Chat:
In the preceding diagram, a Chat app has the following
flow of information:
The Chat app logic receives information from
external third-party services, such as a project management system or a
ticketing tool.
The Chat app logic is hosted in either a cloud or
on-premises system that can send messages by using a webhook URL to a
specific Chat space.
Users can receive messages from the Chat app in
that specific Chat space, but are unable to interact with the
Chat app.
Prerequisites
Node.js
A Business or Enterprise
Google Workspace account with access to
Google Chat .
Your Google Workspace organization must let users
add and use incoming webhooks .
Node.js 14 or greater
The npm
package management tool
A Google Chat space. To create one using the Google Chat API, see
Create a space . To create one in Chat,
visit the
Help Center documentation .
Python
A Business or Enterprise
Google Workspace account with access to
Google Chat .
Your Google Workspace organization must let users
add and use incoming webhooks .
Python 3.6 or greater
The pip package management tool
The httplib2 library. To install the library, run the following command in your command-line interface:
pip install httplib2
A Google Chat space. To create one using the Google Chat API, see
Create a space . To create one in Chat,
visit the
Help Center documentation .
Java
A Business or Enterprise
Google Workspace account with access to
Google Chat .
Your Google Workspace organization must let users
add and use incoming webhooks .
Java 11 or greater
The Maven package management tool
A Google Chat space. To create one using the Google Chat API, see
Create a space . To create one in Chat,
visit the
Help Center documentation .
Apps Script
A Business or Enterprise
Google Workspace account with access to
Google Chat .
Your Google Workspace organization must let users
add and use incoming webhooks .
Create a standalone Apps Script project ,
and turn on the Advanced Chat Service .
A Google Chat space. To create one using the Google Chat API, see
Create a space . To create one in Chat,
visit the
Help Center documentation .
Create a webhook
To create a webhook, register it in the Chat space where you want
to receive messages, and then write a script that sends messages.
Register the incoming webhook
In a browser, open
Chat .
Webhooks aren't configurable from the Chat mobile app.
Go to the space where you want to add a webhook.
Next to the space title, click the
expand_more
expand more arrow, and then click Apps & integrations .
Click add Add webhooks .
Note: If you can't click the button, your Google Workspace
organization doesn't let users add or use webhooks. For details, see
Allow users to install Chat apps
in the Google Workspace Admin Help documentation.
In the Name field, enter Quickstart Webhook .
In the Avatar URL field, enter
https://developers.google.com/chat/images/chat-product-icon.png .
Click Save .
To copy the webhook URL, click
more_vert More , and then click
content_copy Copy link .
The webhook URL contains two parameters: key , a common value shared
between webhooks, and token which is a unique value that must be kept
secret to preserve the security of your webhook.
Warning: Don't share your webhook URL online, such as in a public code
repository, as this compromises its security.
Write the webhook script
The example webhook script sends a message to the space in which the webhook is
registered by sending a POST request to the webhook URL. The
Chat API responds with an instance of
Message .
Select a language to learn how to create a webhook script:
Node.js
In your working directory, create a file named index.js .
In index.js , paste the following code:
solutions/webhook-chat-app/index.js
View on GitHub
/**
* Sends asynchronous message to Google Chat
* @return {Object} response
*/
async function webhook () {
const url = "https://chat.googleapis.com/v1/spaces/SPACE_ID/messages?key=KEY&token=TOKEN"
const res = await fetch ( url , {
method : "POST" ,
headers : { "Content-Type" : "application/json; charset=UTF-8" },
body : JSON . stringify ({
text : "Hello from a Node script!"
})
});
return await res . json ();
}
webhook (). then ( res = > console . log ( res ));
Replace the value for the url variable with the webhook URL that
you copied when you registered the webhook.
Python
In your working directory, create a file named quickstart.py .
In quickstart.py , paste the following code:
solutions/webhook-chat-app/quickstart.py
View on GitHub
from json import dumps
from httplib2 import Http
# Copy the webhook URL from the Chat space where the webhook is registered.
# The values for SPACE_ID, KEY, and TOKEN are set by Chat, and are included
# when you copy the webhook URL.
def main ():
"""Google Chat incoming webhook quickstart."""
url = "https://chat.googleapis.com/v1/spaces/SPACE_ID/messages?key=KEY&token=TOKEN"
app_message = {
"text" : "Hello from a Python script!"
}
message_headers = { "Content-Type" : "application/json; charset=UTF-8" }
http_obj = Http ()
response = http_obj . request (
uri = url ,
method = "POST" ,
headers = message_headers ,
body = dumps ( app_message ),
)
print ( response )
if __name__ == "__main__" :
main ()
Replace the value for the url variable with the webhook URL that
you copied when you registered the webhook.
Java
In your working directory, create a file named pom.xml .
In pom.xml , copy and paste the following:
solutions/webhook-chat-app/pom.xml
View on GitHub
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
<modelVersion>4.0.0</modelVersion>
<groupId>com.google.chat.webhook</groupId>
<artifactId>webhook-app</artifactId>
<version>0.1.0</version>
<name>webhook-app</name>
<properties>
<maven.compiler.target>11</maven.compiler.target>
<maven.compiler.source>11</maven.compiler.source>
</properties>
<dependencies>
<dependency>
<groupId>com.google.code.gson</groupId>
<artifactId>gson</artifactId>
<version>2.9.1</version>
</dependency>
</dependencies>
<build>
<pluginManagement>
<plugins>
<plugin>
<artifactId>maven-compiler-plugin</artifactId>
<version>3.8.0</version>
</plugin>
</plugins>
</pluginManagement>
</build>
</project>
In your working directory, create the following directory structure
src/main/java .
In the src/main/java directory, create a file named App.java .
In App.java , paste the following code:
solutions/webhook-chat-app/src/main/java/com/google/chat/webhook/App.java
View on GitHub
import com.google.gson.Gson ;
import java.net.http.HttpClient ;
import java.net.http.HttpRequest ;
import java.net.http.HttpResponse ;
import java.util.Map ;
import java.net.URI ;
public class App {
private static final String URL = "https://chat.googleapis.com/v1/spaces/SPACE_ID/messages?key=KEY&token=TOKEN" ;
private static final Gson gson = new Gson ();
private static final HttpClient client = HttpClient . newHttpClient ();
public static void main ( String [] args ) throws Exception {
String message = gson . toJson ( Map . of (
"text" , "Hello from Java!"
));
HttpRequest request = HttpRequest . newBuilder ( URI . create ( URL ))
. header ( "accept" , "application/json; charset=UTF-8" )
. POST ( HttpRequest . BodyPublishers . ofString ( message )). build ();
HttpResponse<String> response = client . send ( request , HttpResponse . BodyHandlers . ofString ());
System . out . println ( response . body ());
}
}
Replace the value for the URL variable with the webhook URL that you
copied when you registered the webhook.
Apps Script
In a browser, go to
Apps Script .
Click New Project
Paste the following code:
solutions/webhook-chat-app/webhook.gs
View on GitHub
function webhook () {
const url = "https://chat.googleapis.com/v1/spaces/SPACE_ID/messages?key=KEY&token=TOKEN"
const options = {
"method" : "post" ,
"headers" : { "Content-Type" : "application/json; charset=UTF-8" },
"payload" : JSON . stringify ({
"text" : "Hello from Apps Script!"
})
};
const response = UrlFetchApp . fetch ( url , options );
console . log ( response );
}
Replace the value for the url variable with the webhook URL that you
copied when you registered the webhook.
Run the webhook script
In a CLI, run the script:
Node.js
node index.js
Python
python3 quickstart.py
Java
mvn compile exec:java -Dexec.mainClass = App
Apps Script
Click Run .
When you run the code, the webhook sends a message to the space in which you
registered it.
Start or reply to a message thread
Specify
spaces.messages.thread.threadKey
as part of the message request body. Depending on whether you're starting or
replying to a thread, use the following values for threadKey :
If starting a thread, set the threadKey to an arbitrary string, but
make a note of this value to post a reply to the thread.
If replying to a thread, specify the threadKey that was set when the
thread was started. For example, to post a reply to the thread where the
initial message used MY-THREAD , set MY-THREAD .
Define the thread behavior if the specified threadKey isn't found:
Reply to a thread or start a new thread. Add the
messageReplyOption=REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD parameter to
the webhook URL. Passing this URL parameter causes Chat
to look for an existing thread using the specified threadKey . If one
is found, then the message posts as a reply to that thread. If none is
found, then the message starts a new thread corresponding to that
threadKey .
Reply to a thread or do nothing. Add the
messageReplyOption=REPLY_MESSAGE_OR_FAIL parameter to the webhook URL.
Passing this URL parameter causes Chat
to look for an existing thread using the specified threadKey . If one
is found, then the message posts as a reply to that thread. If none is
found, then the message isn't sent.
To learn more, see messageReplyOption .
The following code sample starts or replies to a message thread:
Node.js
solutions/webhook-chat-app/thread-reply.js
View on GitHub
/**
* Sends asynchronous message to Google Chat
* @return {Object} response
*/
async function webhook () {
const url = "https://chat.googleapis.com/v1/spaces/SPACE_ID/messages?key=KEY&token=TOKEN&messageReplyOption=REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD"
const res = await fetch ( url , {
method : "POST" ,
headers : { "Content-Type" : "application/json; charset=UTF-8" },
body : JSON . stringify ({
text : "Hello from a Node script!" ,
thread : {
threadKey : "THREAD_KEY_VALUE"
}
})
});
return await res . json ();
}
webhook (). then ( res = > console . log ( res ));
Python
solutions/webhook-chat-app/thread-reply.py
View on GitHub
from json import dumps
from httplib2 import Http
# Copy the webhook URL from the Chat space where the webhook is registered.
# The values for SPACE_ID, KEY, and TOKEN are set by Chat, and are included
# when you copy the webhook URL.
#
# Then, append messageReplyOption=REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD to the
# webhook URL.
def main ():
"""Google Chat incoming webhook that starts or replies to a message thread."""
url = "https://chat.googleapis.com/v1/spaces/SPACE_ID/messages?key=KEY&token=TOKEN&messageReplyOption=REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD"
app_message = {
"text" : "Hello from a Python script!" ,
# To start a thread, set threadKey to an arbitratry string.
# To reply to a thread, specify that thread's threadKey value.
"thread" : {
"threadKey" : "THREAD_KEY_VALUE"
},
}
message_headers = { "Content-Type" : "application/json; charset=UTF-8" }
http_obj = Http ()
response = http_obj . request (
uri = url ,
method = "POST" ,
headers = message_headers ,
body = dumps ( app_message ),
)
print ( response )
if __name__ == "__main__" :
main ()
Java
solutions/webhook-chat-app/src/main/java/com/google/chat/webhook/AppThread.java
View on GitHub
import com.google.gson.Gson ;
import java.net.http.HttpClient ;
import java.net.http.HttpRequest ;
import java.net.http.HttpResponse ;
import java.util.Map ;
import java.net.URI ;
public class App {
private static final String URL = "https://chat.googleapis.com/v1/spaces/SPACE_ID/messages?key=KEY&token=TOKEN&messageReplyOption=REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD" ;
private static final Gson gson = new Gson ();
private static final HttpClient client = HttpClient . newHttpClient ();
public static void main ( String [] args ) throws Exception {
String message = gson . toJson ( Map . of (
"text" , "Hello from Java!" ,
"thread" , Map . of (
"threadKey" , "THREAD_KEY_VALUE"
)
));
HttpRequest request = HttpRequest . newBuilder ( URI . create ( URL ))
. header ( "accept" , "application/json; charset=UTF-8" )
. POST ( HttpRequest . BodyPublishers . ofString ( message )). build ();
HttpResponse<String> response = client . send ( request , HttpResponse . BodyHandlers . ofString ());
System . out . println ( response . body ());
}
}
Apps Script
solutions/webhook-chat-app/thread-reply.gs
View on GitHub
function webhook () {
const url = "https://chat.googleapis.com/v1/spaces/SPACE_ID/messages?key=KEY&token=TOKEN&messageReplyOption=REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD"
const options = {
"method" : "post" ,
"headers" : { "Content-Type" : "application/json; charset=UTF-8" },
"payload" : JSON . stringify ({
"text" : "Hello from Apps Script!" ,
"thread" : {
"threadKey" : "THREAD_KEY_VALUE"
}
})
};
const response = UrlFetchApp . fetch ( url , options );
console . log ( response );
}
Handle errors
Webhook requests can fail for a variety of reasons, including:
Invalid request.
Webhook or space hosting the webhook is deleted.
Intermittent issues like network connectivity or quota limits.
When building your webhook, you should appropriately handle errors by:
Logging the failure.
For time-based, quota, or network connectivity errors,
retrying the request with exponential backoff .
Doing nothing, which is appropriate if sending the webhook message isn't
important.
The Google Chat API returns errors as a
google.rpc.Status ,
which includes an HTTP error code that indicates the type of error that was
encountered: a client error (400 series) or a server error (500 series). To
review all HTTP mappings, see
google.rpc.Code .
{
"code" : 503 ,
"message" : "The service is currently unavailable." ,
"status" : "UNAVAILABLE"
}
Warning: Error message text is not part of the API surface. Message text is
subject to change without notice. Application code must not depend on error
message text and should instead use the error code when programmatically
handling errors.
To learn how to interpret HTTP status codes and handle errors, see
Errors .
Limitations and considerations
When creating a message
with a webhook in Google Chat API, the response doesn't contain the full message.
The response only populates the name and thread.name fields.
Webhooks are subject to the per-space quota for spaces.messages.create : 1
request per second, shared among all webhooks in the space.
Chat might also reject webhook requests that exceed 1 query
per second in the same space. For more information on Chat API
quotas, see Usage limits .
Related topics
Choose a Chat app architecture
Send card messages
Format messages
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["Webhooks enable one-way, asynchronous messaging from external apps to Google Chat spaces. They send notifications triggered by external events, without user interaction. Webhooks are space-specific and require a Google Workspace account. To create one, register it within a Chat space, then write a script (Python, Node.js, Java, or Apps Script) that sends a `POST` request with a JSON message payload to the webhook URL. Webhooks can start or reply to threads using a unique thread key. Error handling involves logging and retries.\n"]]
