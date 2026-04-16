---
title: "Hotel Reservation \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/markup/reference/hotel-reservation
knowledge_key: corpus
source_id: site-docs-reference-required-11
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/markup/reference/order
source_metadata:
  url: https://developers.google.com/workspace/gmail/markup/reference/hotel-reservation
  title: "Hotel Reservation \_|\_ Gmail \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Gmail
Reference
Send feedback
Hotel Reservation
Stay organized with collections
Save and categorize content based on your preferences.
Use this type to declare a reservation for one or more guests at a hotel or place of lodging.
Use cases
The following use cases show common examples of how the LodgingReservation schema is used. Use these examples to ensure that your markup is properly structured.
Note: Before you start, make sure you understand how to embed schemas in emails and you are familiar with testing schemas .
Basic Hotel Reservation
This is an example of the minimal amount of markup that will qualify your email as an LodgingReservation.
JSON-LD
< scrip t t ype= "application/ld+json" >
{
"@context" : "http://schema.org" ,
"@type" : "LodgingReservation" ,
"reservationNumber" : "abc456" ,
"reservationStatus" : "http://schema.org/Confirmed" ,
"underName" : {
"@type" : "Person" ,
"name" : "John Smith"
},
"reservationFor" : {
"@type" : "LodgingBusiness" ,
"name" : "Hilton San Francisco Union Square" ,
"address" : {
"@type" : "PostalAddress" ,
"streetAddress" : "333 O'Farrell St" ,
"addressLocality" : "San Francisco" ,
"addressRegion" : "CA" ,
"postalCode" : "94102" ,
"addressCountry" : "US"
},
"telephone" : "415-771-1400"
},
"checkinDate" : "2027-04-11T16:00:00-08:00" ,
"checkoutDate" : "2027-04-13T11:00:00-08:00"
}
< /scrip t >
Microdata
< div itemscope itemtype = "http://schema.org/LodgingReservation" >
< meta itemprop = "reservationNumber" content = "abc456" / >
< link itemprop = "reservationStatus" href = "http://schema.org/Confirmed" / >
< div itemprop = "underName" itemscope itemtype = "http://schema.org/Person" >
< meta itemprop = "name" content = "John Smith" / >
< / div >
< div itemprop = "reservationFor" itemscope itemtype = "http://schema.org/LodgingBusiness" >
< meta itemprop = "name" content = "Hilton San Francisco Union Square" / >
< div itemprop = "address" itemscope itemtype = "http://schema.org/PostalAddress" >
< meta itemprop = "streetAddress" content = "333 O'Farrell St" / >
< meta itemprop = "addressLocality" content = "San Francisco" / >
< meta itemprop = "addressRegion" content = "CA" / >
< meta itemprop = "postalCode" content = "94102" / >
< meta itemprop = "addressCountry" content = "US" / >
< / div >
< meta itemprop = "telephone" content = "415-771-1400" / >
< / div >
< meta itemprop = "checkinDate" content = "2027-04-11T16:00:00-08:00" / >
< meta itemprop = "checkoutDate" content = "2027-04-13T11:00:00-08:00" / >
< / div >
Test your markup
You can validate your markup using the Email Markup Tester Tool . Paste in your markup code and click the Validate button to scan the content and receive a report on any errors present.
Specification
Review the details of your email to see if any of these additional properties apply to your reservation. By marking up these additional properties you allow Google to display a much richer description of the lodging reservation to the user.
LodgingReservation
Type name: LodgingReservation
Extends Reservation
Name
Type
Description
bookingAgent
Person or Organization
Booking agent or agency. Also accepts a string (e.g. "").
bookingAgent. name
Text
Name of the agent/service.
bookingAgent. url
URL
Website of the agent/service.
bookingTime
DateTime
Date the reservation was made.
cancelReservationUrl
URL
Web page where reservation can be cancelled.
checkinDate (Required)
DateTime
Checkin time.
checkoutDate (Required)
DateTime
Checkout time.
checkinUrl
URL
Web page where the lodger can check in.
confirmReservationUrl
URL
Web page where reservation can be confirmed.
lodgingUnitDescription
Text
Textual description of the unit type (including suite vs. room, size of bed, etc.).
modifiedTime
DateTime
(recommended for Confirmation Cards/Search Answers) Time the reservation was last modified.
modifyReservationUrl
URL
(recommended for Confirmation Cards/Search Answers) Web page where reservation can be modified.
numAdults
Number
Number of adults who will be staying in the lodging unit.
numChildren
Number
Number of children who will be staying in the lodging unit.
price
Text
Total price of the LodgingReservation.
priceCurrency
Text
The currency (in 3-letter ISO 4217 format) of the LodgingReservation's price.
programMembership
ProgramMembership
Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation.
programMembership. memberNumber
Text
The identifier of the membership.
programMembership. program
Text
The name of the program.
reservationFor (Required)
LodgingBusiness
The lodging the reservation is at.
reservationFor. address (Required)
PostalAddress
Address of the Address of lodging.
reservationFor.address. addressCountry (Required)
Text or Country
Country of Address of lodging.
reservationFor.address. addressLocality (Required)
Text
Locality (e.g. city) of Address of lodging.
reservationFor.address. addressRegion (Required)
Text
Region (e.g. State) of Address of lodging.
reservationFor.address. postalCode (Required)
Text
Postal code of Address of lodging.
reservationFor.address. streetAddress (Required)
Text
Street address of Address of lodging.
reservationFor. image
URL
Photo of the lodging business.
reservationFor. name (Required)
Text
Name of the Address of lodging.
reservationFor. telephone (Required)
Text
Telephone number of the LodgingBusiness.
reservationFor. url
URL
Website of the lodging business.
reservationNumber (Required)
Text
The number or id of the reservation.
reservationStatus (Required)
ReservationStatus
Current status of the reservation.
underName (Required)
Person or Organization
The guest.
underName. email
Text
Email address.
underName. name (Required)
Text
Name of the Person.
url
URL
Web page where reservation can be viewed.
Note: Some of the schemas used by Google are still going through the standardization process of schema.org , and therefore, may change in the future. Learn More .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-12 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-12 UTC."],[],[]]
