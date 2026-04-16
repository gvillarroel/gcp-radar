---
title: "Restaurant Reservation \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/markup/reference/restaurant-reservation
knowledge_key: corpus
source_id: site-docs-reference-required-12
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/markup/reference/parcel-delivery
source_metadata:
  url: https://developers.google.com/workspace/gmail/markup/reference/restaurant-reservation
  title: "Restaurant Reservation \_|\_ Gmail \_|\_ Google for Developers"
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
Restaurant Reservation
Stay organized with collections
Save and categorize content based on your preferences.
Use this type to declare a reservation for one or more guests at a restaurant or other food establishment.
Use cases
The following use cases show common examples of how the FoodEstablishmentReservation schema is used. Use these examples to ensure that your markup is properly structured.
Note: Before you start, make sure you understand how to embed schemas in emails and you are familiar with testing schemas .
Basic restaurant reservation
This is an example of the minimal amount of markup that will qualify your email as a FoodEstablishmentReservation .
JSON-LD
< scrip t t ype= "application/ld+json" >
{
"@context" : "http://schema.org" ,
"@type" : "FoodEstablishmentReservation" ,
"reservationNumber" : "OT12345" ,
"reservationStatus" : "http://schema.org/Confirmed" ,
"underName" : {
"@type" : "Person" ,
"name" : "John Smith"
},
"reservationFor" : {
"@type" : "FoodEstablishment" ,
"name" : "Wagamama" ,
"address" : {
"@type" : "PostalAddress" ,
"streetAddress" : "1 Tavistock Street" ,
"addressLocality" : "London" ,
"addressRegion" : "Greater London" ,
"postalCode" : "WC2E 7PG" ,
"addressCountry" : "United Kingdom"
}
},
"startTime" : "2027-04-10T08:00:00+00:00" ,
"partySize" : "2"
}
< /scrip t >
Microdata
< div itemscope itemtype = "http://schema.org/FoodEstablishmentReservation" >
< meta itemprop = "reservationNumber" content = "OT12345" / >
< link itemprop = "reservationStatus" href = "http://schema.org/Confirmed" / >
< div itemprop = "underName" itemscope itemtype = "http://schema.org/Person" >
< meta itemprop = "name" content = "John Smith" / >
< / div >
< div itemprop = "reservationFor" itemscope itemtype = "http://schema.org/FoodEstablishment" >
< meta itemprop = "name" content = "Wagamama" / >
< div itemprop = "address" itemscope itemtype = "http://schema.org/PostalAddress" >
< meta itemprop = "streetAddress" content = "1 Tavistock Street" / >
< meta itemprop = "addressLocality" content = "London" / >
< meta itemprop = "addressRegion" content = "Greater London" / >
< meta itemprop = "postalCode" content = "WC2E 7PG" / >
< meta itemprop = "addressCountry" content = "United Kingdom" / >
< / div >
< / div >
< meta itemprop = "startTime" content = "2027-04-10T08:00:00+00:00" / >
< meta itemprop = "partySize" content = "2" / >
< / div >
Test your markup
You can validate your markup using the Email Markup Tester Tool . Paste in your markup code and click the Validate button to scan the content and receive a report on any errors present.
Specification
Review the details of your email to see if any of these additional properties apply to your reservation. By marking up these additional properties you allow Google to display a much richer description of the reservation to the user.
FoodEstablishmentReservation
Type name: FoodEstablishmentReservation
Extends Reservation
Name
Type
Description
bookingAgent
Organization or Person
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
confirmReservationUrl
URL
Web page where reservation can be confirmed.
modifiedTime
DateTime
(recommended for Confirmation Cards/Search Answers) Time the reservation was last modified.
modifyReservationUrl
URL
(recommended for Confirmation Cards/Search Answers) Web page where reservation can be modified.
partySize (Required)
Number
Number of people in the party.
price
Text
Total price of the FoodEstablishmentReservation.
priceCurrency
Text
The currency (in 3-letter ISO 4217 format) of the FoodEstablishmentReservation's price.''
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
FoodEstablishment
The food establishment the reservation is for.
reservationFor. address (Required)
PostalAddress
Address of the restaurant.
reservationFor.address. addressCountry (Required)
Country or Text
Country of restaurant.
reservationFor.address. addressLocality (Required)
Text
Locality (e.g. city) of restaurant.
reservationFor.address. addressRegion (Required)
Text
Region (e.g. State) of restaurant.
reservationFor.address. postalCode (Required)
Text
Postal code of restaurant.
reservationFor.address. streetAddress (Required)
Text
Street address of restaurant.
reservationFor. image
URL
Image of the restaurant.
reservationFor. name (Required)
Text
Name of the restaurant.
reservationFor. telephone
Text
Telephone number of the FoodEstablishment.
reservationFor. url
URL
Restaurant's website.
reservationNumber (Required)
Text
The number or id of the reservation.
reservationStatus (Required)
ReservationStatus
Current status of the reservation.
startTime (Required)
DateTime
Reservation date and time.
underName (Required)
Organization or Person
The person the table is for.
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
