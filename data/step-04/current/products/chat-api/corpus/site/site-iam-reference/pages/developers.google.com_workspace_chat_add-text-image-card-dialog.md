---
title: "Add text and images to cards \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/add-text-image-card-dialog
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/authenticate-authorize
source_metadata:
  url: https://developers.google.com/workspace/chat/add-text-image-card-dialog
  title: "Add text and images to cards \_|\_ Google Chat \_|\_ Google for Developers"
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
Add text and images to cards
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This page guides you on adding and formatting text and images within Google Chat cards to enhance their visual appeal and interactivity.
You can incorporate images, icons, and formatted text paragraphs using various widgets and HTML formatting options.
Learn how to use Image , imageComponent , Icon , TextParagraph , and DecoratedText widgets to build engaging cards.
Leverage built-in or custom icons, apply cropping and border styles to images, and add interactive elements like buttons or hyperlinks.
Refer to the troubleshooting section for assistance if you encounter any errors while implementing these features.
This page explains how to add and format text and images to cards.
To learn more about building cards, see
Build cards for Google Chat apps .
Use the Card Builder to design and preview messaging and user interfaces for Chat apps:
Open the Card Builder
Prerequisites
A Google Chat app that's configured to receive and respond to interaction events . To create an
interactive Chat app, complete one of the following quickstarts based
on the app architecture that you want to use:
HTTP service with Google Cloud Functions
Google Apps Script
Google Cloud Dialogflow CX
Google Cloud Pub/Sub
Add images or icons
This section explains how to add visual elements to cards such as images,
image components, and icons.
Add an image
Image widget
displays a PNG or JPG image hosted on an HTTPS URL.
The displayed image's width fills the entire width of the displayed card, and
its height adjusts to maintain the image's aspect ratio. The Image widget
supports
onclick actions
that occur when users click the image. Example of onclick actions include:
Open a hyperlink with
OpenLink ,
such as a hyperlink to the Google Chat developer documentation,
https://developers.google.com/chat .
Run an
action
that runs a custom function, like calling an API.
The Image widget has the following limitations:
Only PNG and JPG images are supported.
The host URL must be HTTPS .
To ensure performant cards, maximum recommended image size is 2MB.
The following is a card consisting of an Image widget. It displays the
Google Chat developer documentation landing page image. When users click the
image, the Google Chat developer documentation opens in a new tab.
Add an image component
The Image widget is an image with limited styling. An
imageCompent widget
lets you apply cropStyle and borderStyle to an image.
The following example shows two images in a grid where one of the images is
cropped:
You can adjust the shape of an image component by applying a
cropStyle .
There are several shapes to apply to an image:
Use SQUARE to apply a square crop.
Use CIRCLE to apply a circular crop.
Use RECTANGLE_CUSTOM to apply a rectangular crop with a custom aspect
ratio. For example, you can use RECTANGLE_4_3 to apply a rectangular crop
with a 4:3 aspect ratio.
The following example shows five images in a grid with a different cropStyle
applied to each image:
Add an icon
The
Icon widget
represents either a
built-in
icon or
custom
icon. You add icons to cards to do any of the following:
Display a standalone icon.
Display an icon in front of related text, as part of a
DecoratedText widget.
Display an icon as an interactive button, as part of a
ButtonList widget.
The following is a card consisting of an Icon component with a built-in icon:
The following table lists the built-in icons that are available for card messages:
flight
AIRPLANE
bookmark
BOOKMARK
directions_bus
BUS
directions_car
CAR
schedule
CLOCK
confirmation_number
CONFIRMATION_NUMBER_ICON
subject
DESCRIPTION
attach_money
DOLLAR
mail
EMAIL
event_seat
EVENT_SEAT
flight_land
FLIGHT_ARRIVAL
flight_takeoff
FLIGHT_DEPARTURE
hotel
HOTEL
grade
HOTEL_ROOM_TYPE
insert_invitation
INVITE
location_on
MAP_PIN
card_membership
MEMBERSHIP
people
MULTIPLE_PEOPLE
person
PERSON
local_phone
PHONE
restaurant
RESTAURANT_ICON
shopping_cart
SHOPPING_CART
grade
STAR
store
STORE
local_play
TICKET
train
TRAIN
videocam
VIDEO_CAMERA
play_circle_filled
VIDEO_PLAY
Add text to a card
This section explains how to add and format text in a card.
Add a paragraph of formatted text
The
TextParagraph widget
displays a paragraph of text with optional HTML formatting. When setting
the text content of these widgets, just include the corresponding HTML tags.
For more information about which HTML tags are supported, see
Format text that appears in cards .
For example, the following formatting is available for paragraph text:
Display bold, underlined, or italicized text with HTML <b> , <u> , <i>
tags.
Link to websites with HTML <a href="https://www.google.com">hyperlinks</a> .
Add some color with HTML <font color="#ea9999">font tags</font> .
Each TextParagraph widget renders as a new paragraph, and can be thought of
as similar to an HTML <p> tag.
The following is a card consisting of two TextParagraph widgets used to
display two paragraphs with simple HTML formatting:
Add a collapsible text paragraph
The collapsible text paragraphs let users reveal more information on demand.
This widget is perfect for presenting lengthy content or additional details that
can be explored when selected, creating a dynamic and interactive user
experience.
Display text with decorative elements
The
DecoratedText widget
displays text with optional layout and capabilities. For example:
Display an icon in front of the text with startIcon .
Show a title before the text with topLabel .
Add a clickable button with button or switchable toggle with switchControl .
Use the DecoratedText widget when you need to present information in an
easy-to-consume and interactive way. The widget is perfect for use cases such as
contact cards, order status updates, and work ticket notifications.
The DecoratedText widget supports simple text HTML formatting. When setting
the text content of these widgets, just include the corresponding HTML tags. For
more information about which HTML tags are supported, see
Card text formatting .
The following is a card consisting of a DecoratedText widget used to display
contact details, such as email address, online status, phone number, and
website:
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
Related topics
View Chat app samples that use cards.
Image
imageCompent
cropStyle
Icon
TextParagraph
DecoratedText
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
