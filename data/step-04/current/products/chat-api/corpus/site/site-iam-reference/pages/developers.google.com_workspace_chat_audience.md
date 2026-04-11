---
title: "Identify your users' needs \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/audience
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/authenticate-authorize
source_metadata:
  url: https://developers.google.com/workspace/chat/audience
  title: "Identify your users' needs \_|\_ Google Chat \_|\_ Google for Developers"
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
Identify your users' needs
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
When designing your Google Chat app, prioritize user needs by considering factors like app discoverability and user familiarity with Chat app features.
Account for global users by considering time zones and offering multi-language support to enhance user experience.
Optimize your Chat app for both web and mobile platforms, ensuring clear and concise messaging while adapting to screen size limitations.
Maintain a professional, authentic, and considerate tone in your Chat app's communication, prioritizing user efficiency and providing clear error handling.
Be mindful of user permissions and data access, ensuring sensitive information is shared appropriately and avoiding unintended data exposure in shared spaces.
This page describes how to account for your users' needs when designing a
Google Chat app. Whether your Chat app
supports a globally distributed team of thousands or just one person, ensure
your Chat app helps everyone who messages it by
including the intended user in your design process.
Discover your Chat app
Consider where your intended users can discover your
Chat app for the first time. When you
publish your Chat app ,
think about where users can find it.
For example, don't assume that users know what your
Chat app does. Make sure your
Chat app's name reflects what it actually does, or the
service that it integrates with.
Familiarity with Chat apps
Your Chat app might be the first interaction a user has
had with Chat apps. Don't assume that users know how a
Chat app works. Features like
Chat app commands
and
dialogs
might confuse some users, so give them instructions.
For example, when prompting the user to issue a slash command, we recommend the
following format:
This prompt is helpful for the following reasons:
Tells the user exactly what they need to type.
Uses special formatting to make the /createContact slash command stand out
from the surrounding text.
States the goal of the slash command.
To learn more about how to help users with other interactive
Chat app features, see
Design user interactions .
Geography
Identify where in the world your users use your
Chat app. Oftentimes, people in a Chat
space are located all over the world, which means that they're working in
different time zones. If your Chat app sends
notifications to users or spaces, be mindful of the time of day.
For example, the following Chat app notifies whomever
is the on-call reviewer for the week. But, if part of the team is in New York,
and part of the team is in California, we recommend configuring the
Chat app to send a message at a time that is convenient
for all users.
If your Chat app
mentions a user directly ,
consider checking that user's timezone in the
Calendar API
before sending the notification. If it's outside that user's working hours,
consider sending the message without a mention, or waiting until their work day
begins.
Language
Your Chat app can respond to users in multiple
languages. To support more than one language, your
Chat app must check for a user's preferred language
and localize its content accordingly.
For Chat spaces, add a language option to the
Chat app's configuration settings. After users set a
language in the space, your Chat app can respond to
messages using the space's preferred language.
To check a user's preferred language:
Get User.name from the
User type in the Google Chat API.
Map User.name to
user.id
in the Directory API.
Get user.languages[] for the given user.id in the
Directory API.
Platform: web versus mobile
Google Chat is available on computers and mobile devices. Computers offer lots
of screen space where users might be more accepting of information-dense
messages with lots of buttons and options. On mobile devices, users appreciate
succinct messages due to the limited screen size.
Try to show three or fewer buttons per card. If you need more, consider
launching a
dialog instead. Dialogs can present a series of cards
that make gathering lots of user input a friendlier experience than trying to
collect all of the information in a single card message.
Test your Chat app on multiple devices of varying sizes
to make sure its presentation of information is digestible.
Voice and tone
Because Chat apps are text-based interfaces, writing clear,
concise, and actionable messages ensures user success. When writing messages for
your Chat app, consult the
Google Material Design writing guidelines .
Each Chat app is different, but to communicate
effectively with Chat users, your
Chat app's voice and tone should convey the following
characteristics:
Professional . Your Chat app might be helping
people at work. Make sure its personality fits into a professional setting,
or it might feel jarring and inappropriate.
Authentic . Chat apps can speak colloquially, but
shouldn't pretend to be human. Avoid giving your
Chat app a gender, or a name that could be confused
with a person. Including a little character is good, but your
Chat app should focus on its utility.
Considerate . Be thoughtful and noninvasive. Your
Chat app shouldn't bother users unnecessarily or
repeatedly. Strive to anticipate user needs and offer solutions.
Efficient . Recognize that most users aren't looking for a long
conversation. Help people complete tasks by keeping the
Chat app experience focused. Avoid saying
everything in favor of saying the most important things. If you do need to
convey a large amount of information, break long messages into multiple
short messages. Try to limit each message to one call to action, and make
the information presented as relevant as possible.
Encouraging . Be optimistic and friendly with users as they explore your
Chat app. Users should always know how to move
ahead towards their goal, especially if they encounter an error, like asking
your Chat app to do something that it can't.
Honestly tell users that they've encountered an error or limitation, and
tell them how to proceed.
Users with different permissions, roles, and data access
People in Chat have different permissions and data access in
Google Workspace and other systems. A single Chat space could
include administrators, managers, sales people, and customers. These are some of
the permission-related scenarios to consider while building your
Chat app:
Limited access to Chat apps
Google Workspace administrators can limit who has access to
Chat apps in Google Chat. For more information, see
Determine the audience for your app
in the Google Workspace Marketplace documentation.
Authentication
Prompting a customer to authenticate to a customer's Google Workspace
domain might not work, and might confuse and frustrate the user. Account for
this possibility by writing an actionable error message .
Share sensitive information in Chat spaces
If a user authenticates a Chat app to share sensitive
information, like financial or health data, it might be best to limit that
Chat app to 1:1 direct messages so that the
Chat app doesn't accidentally reveal sensitive
information in a Chat space where others might see it. When
configuring this type of Chat app in the
Google Cloud console, on the
Configuration page ,
make sure that the Join spaces and group conversations checkbox is cleared
and unselected.
Share information in Chat spaces that include customers
It's common for employees of a company to share a Chat space with
customers. Your Chat app can be a real boon to
employee-customer interactions, but if your Chat app
shares a space with customers, it's important to consider what data your
Chat app might reveal.
For example, say your Chat app shares customer case
details. If your Chat app shares a customer case in a
Chat space shared with other customers, it might accidentally
reveal customer information to people who shouldn't see it.
Related topics
Write actionable error messages
Define all user journeys
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["When designing a Google Chat app, prioritize user needs by considering their discovery, familiarity with Chat apps, geography, and preferred language. Ensure clear, concise communication with a professional, authentic, considerate, efficient, and encouraging voice. Optimize for both web and mobile platforms, and be mindful of varying user permissions and data access. Protect sensitive data and avoid accidental information leaks in shared spaces. Tailor messages based on user preferences and test across different devices.\n"]]
