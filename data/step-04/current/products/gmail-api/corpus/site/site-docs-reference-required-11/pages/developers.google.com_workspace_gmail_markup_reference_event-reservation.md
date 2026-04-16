---
title: "Event Reservation \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/markup/reference/event-reservation
knowledge_key: corpus
source_id: site-docs-reference-required-11
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/markup/reference/order
source_metadata:
  url: https://developers.google.com/workspace/gmail/markup/reference/event-reservation
  title: "Event Reservation \_|\_ Gmail \_|\_ Google for Developers"
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
Event Reservation
Stay organized with collections
Save and categorize content based on your preferences.
Use this type to declare a reservation for one or more guests at an event. Tickets may be declared as well.
Use cases
The following use cases show common examples of how the EventReservation schema is used. Use these examples to ensure that your markup is properly structured.
Note: Before you start, make sure you understand how to embed schemas in emails and you are familiar with testing schemas .
Basic event reminder without a ticket
If you are sending out an email confirming a user’s attendance to an event, include the following markup. This is an example of the minimal amount of markup that will qualify your email as an EventReservation .
JSON-LD
< scrip t t ype= "application/ld+json" >
{
"@context" : "http://schema.org" ,
"@type" : "EventReservation" ,
"reservationNumber" : "E123456789" ,
"reservationStatus" : "http://schema.org/Confirmed" ,
"underName" : {
"@type" : "Person" ,
"name" : "John Smith"
},
"reservationFor" : {
"@type" : "Event" ,
"name" : "Foo Fighters Concert" ,
"startDate" : "2027-03-06T19:30:00-08:00" ,
"location" : {
"@type" : "Place" ,
"name" : "AT&T Park" ,
"address" : {
"@type" : "PostalAddress" ,
"streetAddress" : "24 Willie Mays Plaza" ,
"addressLocality" : "San Francisco" ,
"addressRegion" : "CA" ,
"postalCode" : "94107" ,
"addressCountry" : "US"
}
}
}
}
< /scrip t >
Microdata
< div itemscope itemtype = "http://schema.org/EventReservation" >
< meta itemprop = "reservationNumber" content = "E123456789" / >
< link itemprop = "reservationStatus" href = "http://schema.org/Confirmed" / >
< div itemprop = "underName" itemscope itemtype = "http://schema.org/Person" >
< meta itemprop = "name" content = "John Smith" / >
< / div >
< div itemprop = "reservationFor" itemscope itemtype = "http://schema.org/Event" >
< meta itemprop = "name" content = "Foo Fighters Concert" / >
< meta itemprop = "startDate" content = "2027-03-06T19:30:00-08:00" / >
< div itemprop = "location" itemscope itemtype = "http://schema.org/Place" >
< meta itemprop = "name" content = "AT&T Park" / >
< div itemprop = "address" itemscope itemtype = "http://schema.org/PostalAddress" >
< meta itemprop = "streetAddress" content = "24 Willie Mays Plaza" / >
< meta itemprop = "addressLocality" content = "San Francisco" / >
< meta itemprop = "addressRegion" content = "CA" / >
< meta itemprop = "postalCode" content = "94107" / >
< meta itemprop = "addressCountry" content = "US" / >
< / div >
< / div >
< / div >
< / div >
Event with ticket & no reserved seating
Include the ticketToken , ticketNumber and numSeats fields to add information about the tickets.
JSON-LD
< scrip t t ype= "application/ld+json" >
{
"@context" : "http://schema.org" ,
"@type" : "EventReservation" ,
"reservationNumber" : "E123456789" ,
"reservationStatus" : "http://schema.org/Confirmed" ,
"underName" : {
"@type" : "Person" ,
"name" : "John Smith"
},
"reservationFor" : {
"@type" : "Event" ,
"name" : "Foo Fighters Concert" ,
"performer" : {
"@type" : "Organization" ,
"name" : "The Foo Fighters" ,
"image" : "http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg"
},
"startDate" : "2027-03-06T19:30:00-08:00" ,
"location" : {
"@type" : "Place" ,
"name" : "AT&T Park" ,
"address" : {
"@type" : "PostalAddress" ,
"streetAddress" : "24 Willie Mays Plaza" ,
"addressLocality" : "San Francisco" ,
"addressRegion" : "CA" ,
"postalCode" : "94107" ,
"addressCountry" : "US"
}
}
},
"ticketToken" : "qrCode:AB34" ,
"ticketNumber" : "abc123" ,
"numSeats" : "1"
}
< /scrip t >
Microdata
< div itemscope itemtype = "http://schema.org/EventReservation" >
< meta itemprop = "reservationNumber" content = "E123456789" / >
< link itemprop = "reservationStatus" href = "http://schema.org/Confirmed" / >
< div itemprop = "underName" itemscope itemtype = "http://schema.org/Person" >
< meta itemprop = "name" content = "John Smith" / >
< / div >
< div itemprop = "reservationFor" itemscope itemtype = "http://schema.org/Event" >
< meta itemprop = "name" content = "Foo Fighters Concert" / >
< div itemprop = "performer" itemscope itemtype = "http://schema.org/Organization" >
< meta itemprop = "name" content = "The Foo Fighters" / >
< link itemprop = "image" href = "http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg" / >
< / div >
< meta itemprop = "startDate" content = "2027-03-06T19:30:00-08:00" / >
< div itemprop = "location" itemscope itemtype = "http://schema.org/Place" >
< meta itemprop = "name" content = "AT&T Park" / >
< div itemprop = "address" itemscope itemtype = "http://schema.org/PostalAddress" >
< meta itemprop = "streetAddress" content = "24 Willie Mays Plaza" / >
< meta itemprop = "addressLocality" content = "San Francisco" / >
< meta itemprop = "addressRegion" content = "CA" / >
< meta itemprop = "postalCode" content = "94107" / >
< meta itemprop = "addressCountry" content = "US" / >
< / div >
< / div >
< / div >
< meta itemprop = "ticketToken" content = "qrCode:AB34" / >
< meta itemprop = "ticketNumber" content = "abc123" / >
< meta itemprop = "numSeats" content = "1" / >
< / div >
Sports or Music Event with ticket
Set the reservationFor type to either MusicEvent or SportsEvent .
If the event is a MusicEvent (e.g. a concert) you should include performer.name and performer.image . If the event is a SportsEvent (e.g. a basket ball game) where there are two competing teams or players include the two teams as performers.
JSON-LD
< scrip t t ype= "application/ld+json" >
{
"@context" : "http://schema.org" ,
"@type" : "EventReservation" ,
"reservationNumber" : "E123456789" ,
"reservationStatus" : "http://schema.org/Confirmed" ,
"underName" : {
"@type" : "Person" ,
"name" : "John Smith"
},
"reservationFor" : {
"@type" : "MusicEvent" ,
"name" : "Foo Fighters Concert" ,
"url" : "http://foofighterstour.com/SFO" ,
"performer" : {
"@type" : "Organization" ,
"name" : "The Foo Fighters" ,
"image" : "http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg"
},
"startDate" : "2027-03-06T19:30:00-08:00" ,
"endDate" : "2027-03-06T23:00:00-08:00" ,
"doorTime" : "2027-03-06T16:30:00-08:00" ,
"location" : {
"@type" : "Place" ,
"name" : "AT&T Park" ,
"address" : {
"@type" : "PostalAddress" ,
"streetAddress" : "AT&T Park" ,
"addressLocality" : "San Francisco" ,
"addressRegion" : "CA" ,
"postalCode" : "94107" ,
"addressCountry" : "US"
}
}
},
"ticketToken" : "qrCode:AB34" ,
"ticketNumber" : "abc123" ,
"numSeats" : "1"
}
< /scrip t >
Microdata
< div itemscope itemtype = "http://schema.org/EventReservation" >
< meta itemprop = "reservationNumber" content = "E123456789" / >
< link itemprop = "reservationStatus" href = "http://schema.org/Confirmed" / >
< div itemprop = "underName" itemscope itemtype = "http://schema.org/Person" >
< meta itemprop = "name" content = "John Smith" / >
< / div >
< div itemprop = "reservationFor" itemscope itemtype = "http://schema.org/MusicEvent" >
< meta itemprop = "name" content = "Foo Fighters Concert" / >
< link itemprop = "url" href = "http://foofighterstour.com/SFO" / >
< div itemprop = "performer" itemscope itemtype = "http://schema.org/Organization" >
< meta itemprop = "name" content = "The Foo Fighters" / >
< link itemprop = "image" href = "http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg" / >
< / div >
< meta itemprop = "startDate" content = "2027-03-06T19:30:00-08:00" / >
< meta itemprop = "endDate" content = "2027-03-06T23:00:00-08:00" / >
< meta itemprop = "doorTime" content = "2027-03-06T16:30:00-08:00" / >
< div itemprop = "location" itemscope itemtype = "http://schema.org/Place" >
< meta itemprop = "name" content = "AT&T Park" / >
< div itemprop = "address" itemscope itemtype = "http://schema.org/PostalAddress" >
< meta itemprop = "streetAddress" content = "AT&T Park" / >
< meta itemprop = "addressLocality" content = "San Francisco" / >
< meta itemprop = "addressRegion" content = "CA" / >
< meta itemprop = "postalCode" content = "94107" / >
< meta itemprop = "addressCountry" content = "US" / >
< / div >
< / div >
< / div >
< meta itemprop = "ticketToken" content = "qrCode:AB34" / >
< meta itemprop = "ticketNumber" content = "abc123" / >
< meta itemprop = "numSeats" content = "1" / >
< / div >
Event with ticket & reserved seating
For a single ticket with reserved seating, include ticketToken , ticketNumber , venueSeat , venueRow and venueSection .
You only need to include whichever of venueSeat , venueRow , and venueSection is needed to describe the location of the seat.
Do not include numSeats .
JSON-LD
< scrip t t ype= "application/ld+json" >
{
"@context" : "http://schema.org" ,
"@type" : "EventReservation" ,
"reservationNumber" : "E123456789" ,
"reservationStatus" : "http://schema.org/Confirmed" ,
"underName" : {
"@type" : "Person" ,
"name" : "John Smith"
},
"reservationFor" : {
"@type" : "Event" ,
"name" : "Foo Fighters Concert" ,
"performer" : {
"@type" : "Organization" ,
"name" : "The Foo Fighters" ,
"image" : "http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg"
},
"startDate" : "2027-03-06T19:30:00-08:00" ,
"location" : {
"@type" : "Place" ,
"name" : "AT&T Park" ,
"address" : {
"@type" : "PostalAddress" ,
"streetAddress" : "24 Willie Mays Plaza" ,
"addressLocality" : "San Francisco" ,
"addressRegion" : "CA" ,
"postalCode" : "94107" ,
"addressCountry" : "US"
}
}
},
"venueSeat" : "12" ,
"venueRow" : "A" ,
"venueSection" : "101" ,
"ticketToken" : "qrCode:AB34" ,
"ticketNumber" : "abc123"
}
< /scrip t >
Microdata
< div itemscope itemtype = "http://schema.org/EventReservation" >
< meta itemprop = "reservationNumber" content = "E123456789" / >
< link itemprop = "reservationStatus" href = "http://schema.org/Confirmed" / >
< div itemprop = "underName" itemscope itemtype = "http://schema.org/Person" >
< meta itemprop = "name" content = "John Smith" / >
< / div >
< div itemprop = "reservationFor" itemscope itemtype = "http://schema.org/Event" >
< meta itemprop = "name" content = "Foo Fighters Concert" / >
< div itemprop = "performer" itemscope itemtype = "http://schema.org/Organization" >
< meta itemprop = "name" content = "The Foo Fighters" / >
< link itemprop = "image" href = "http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg" / >
< / div >
< meta itemprop = "startDate" content = "2027-03-06T19:30:00-08:00" / >
< div itemprop = "location" itemscope itemtype = "http://schema.org/Place" >
< meta itemprop = "name" content = "AT&T Park" / >
< div itemprop = "address" itemscope itemtype = "http://schema.org/PostalAddress" >
< meta itemprop = "streetAddress" content = "24 Willie Mays Plaza" / >
< meta itemprop = "addressLocality" content = "San Francisco" / >
< meta itemprop = "addressRegion" content = "CA" / >
< meta itemprop = "postalCode" content = "94107" / >
< meta itemprop = "addressCountry" content = "US" / >
< / div >
< / div >
< / div >
< meta itemprop = "venueSeat" content = "12" / >
< meta itemprop = "venueRow" content = "A" / >
< meta itemprop = "venueSection" content = "101" / >
< meta itemprop = "ticketToken" content = "qrCode:AB34" / >
< meta itemprop = "ticketNumber" content = "abc123" / >
< / div >
Multiple tickets
There are two options to do multiple tickets:
The first is the change numSeats . This means a single reservation will represent tickets for numSeats number of individuals.
If you want to have one ticket (i.e. barcode) per individual and have names for each individual on the ticket, create multiple EventReservations (one per individual) with numSeats set to 1. The example below shows what this looks like.
JSON-LD
< scrip t t ype= "application/ld+json" >
[
{
"@context" : "http://schema.org" ,
"@type" : "EventReservation" ,
"reservationNumber" : "E123456789" ,
"reservationStatus" : "http://schema.org/Confirmed" ,
"underName" : {
"@type" : "Person" ,
"name" : "John Smith"
},
"reservationFor" : {
"@type" : "Event" ,
"name" : "Foo Fighters Concert" ,
"performer" : {
"@type" : "Person" ,
"name" : "The Foo Fighters" ,
"image" : "http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg"
},
"startDate" : "2027-03-06T19:30:00-08:00" ,
"location" : {
"@type" : "Place" ,
"name" : "AT&T Park" ,
"address" : {
"@type" : "PostalAddress" ,
"streetAddress" : "24 Willie Mays Plaza" ,
"addressLocality" : "San Francisco" ,
"addressRegion" : "CA" ,
"postalCode" : "94107" ,
"addressCountry" : "US"
}
}
},
"venueSeat" : "12" ,
"venueRow" : "A" ,
"venueSection" : "101" ,
"ticketToken" : "qrCode:AB34" ,
"ticketNumber" : "abc123"
},
{
"@context" : "http://schema.org" ,
"@type" : "EventReservation" ,
"reservationNumber" : "E123456789" ,
"reservationStatus" : "http://schema.org/Confirmed" ,
"underName" : {
"@type" : "Person" ,
"name" : "Eva Green"
},
"reservationFor" : {
"@type" : "Event" ,
"name" : "Foo Fighters Concert" ,
"performer" : {
"@type" : "Organization" ,
"name" : "The Foo Fighters" ,
"image" : "http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg"
},
"startDate" : "2027-03-06T19:30:00-08:00" ,
"location" : {
"@type" : "Place" ,
"name" : "AT&T Park" ,
"address" : {
"@type" : "PostalAddress" ,
"streetAddress" : "24 Willie Mays Plaza" ,
"addressLocality" : "San Francisco" ,
"addressRegion" : "CA" ,
"postalCode" : "94107" ,
"addressCountry" : "US"
}
}
},
"venueSeat" : "13" ,
"venueRow" : "A" ,
"venueSection" : "101" ,
"ticketToken" : "qrCode:AB34" ,
"ticketNumber" : "abc456"
}
]
< /scrip t >
Microdata
< div itemscope itemtype = "http://schema.org/EventReservation" >
< meta itemprop = "reservationNumber" content = "E123456789" / >
< link itemprop = "reservationStatus" href = "http://schema.org/Confirmed" / >
< div itemprop = "underName" itemscope itemtype = "http://schema.org/Person" >
< meta itemprop = "name" content = "John Smith" / >
< / div >
< div itemprop = "reservationFor" itemscope itemtype = "http://schema.org/Event" >
< meta itemprop = "name" content = "Foo Fighters Concert" / >
< div itemprop = "performer" itemscope itemtype = "http://schema.org/Person" >
< meta itemprop = "name" content = "The Foo Fighters" / >
< link itemprop = "image" href = "http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg" / >
< / div >
< meta itemprop = "startDate" content = "2027-03-06T19:30:00-08:00" / >
< div itemprop = "location" itemscope itemtype = "http://schema.org/Place" >
< meta itemprop = "name" content = "AT&T Park" / >
< div itemprop = "address" itemscope itemtype = "http://schema.org/PostalAddress" >
< meta itemprop = "streetAddress" content = "24 Willie Mays Plaza" / >
< meta itemprop = "addressLocality" content = "San Francisco" / >
< meta itemprop = "addressRegion" content = "CA" / >
< meta itemprop = "postalCode" content = "94107" / >
< meta itemprop = "addressCountry" content = "US" / >
< / div >
< / div >
< / div >
< meta itemprop = "venueSeat" content = "12" / >
< meta itemprop = "venueRow" content = "A" / >
< meta itemprop = "venueSection" content = "101" / >
< meta itemprop = "ticketToken" content = "qrCode:AB34" / >
< meta itemprop = "ticketNumber" content = "abc123" / >
< / div >
< div itemscope itemtype = "http://schema.org/EventReservation" >
< meta itemprop = "reservationNumber" content = "E123456789" / >
< link itemprop = "reservationStatus" href = "http://schema.org/Confirmed" / >
< div itemprop = "underName" itemscope itemtype = "http://schema.org/Person" >
< meta itemprop = "name" content = "Eva Green" / >
< / div >
< div itemprop = "reservationFor" itemscope itemtype = "http://schema.org/Event" >
< meta itemprop = "name" content = "Foo Fighters Concert" / >
< div itemprop = "performer" itemscope itemtype = "http://schema.org/Organization" >
< meta itemprop = "name" content = "The Foo Fighters" / >
< link itemprop = "image" href = "http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg" / >
< / div >
< meta itemprop = "startDate" content = "2027-03-06T19:30:00-08:00" / >
< div itemprop = "location" itemscope itemtype = "http://schema.org/Place" >
< meta itemprop = "name" content = "AT&T Park" / >
< div itemprop = "address" itemscope itemtype = "http://schema.org/PostalAddress" >
< meta itemprop = "streetAddress" content = "24 Willie Mays Plaza" / >
< meta itemprop = "addressLocality" content = "San Francisco" / >
< meta itemprop = "addressRegion" content = "CA" / >
< meta itemprop = "postalCode" content = "94107" / >
< meta itemprop = "addressCountry" content = "US" / >
< / div >
< / div >
< / div >
< meta itemprop = "venueSeat" content = "13" / >
< meta itemprop = "venueRow" content = "A" / >
< meta itemprop = "venueSection" content = "101" / >
< meta itemprop = "ticketToken" content = "qrCode:AB34" / >
< meta itemprop = "ticketNumber" content = "abc456" / >
< / div >
Test your markup
You can validate your markup using the Email Markup Tester Tool . Paste in your markup code and click the Validate button to scan the content and receive a report on any errors present.
Specification
Review the details of your email to see if any of these properties apply to your event reservation. By marking up these additional properties you allow Google to display a much richer description of the event reservation to the user.
EventReservation
Type name: EventReservation
Extends Reservation
Name
Type
Description
action
Action
An action that can be taken upon this thing.
action. name
Text
The string shown to the user on the UI element tied to the action.
action. url
URL
Target url for the action. If no explicit handler field is provided the action handler is expanded into a WebActionHandler with this url as the WebActionHandler url.
additionalTicketText
Text
Additional information about the ticket.
bookingAgent
Organization or Person
Booking agent or agency. Also accepts a string (e.g. "").
bookingAgent. image
URL
URL of an image of the Organization.
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
numSeats
Number
The number of seats.
price
Text
Total price of the EventReservation.
priceCurrency
Text
The currency (in 3-letter ISO 4217 format) of the EventReservation's price.
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
Event
Can use Event, or any of the event subtypes, including BusinessEvent, ChildrenEvent, ComedyEvent, DanceEvent, EducationEvent, Festival, FoodEvent, LiteraryEvent, MovieShowing, MusicEvent, SaleEvent, SocialEvent, SportsEvent, TheaterEvent, VisualArtsEvent.
reservationFor. description
Text
A short description of the Event.
reservationFor. doorTime
DateTime
The time admission will commence.
reservationFor. endDate
DateTime
The end date and time of the event.
reservationFor. image
URL
URL of an image of the Event.
reservationFor. location (Required)
Place
The event's location.
reservationFor.location. address (Required)
PostalAddress
Address of the the event's location.
reservationFor.location.address. addressCountry (Required)
Text or Country
Country of the event's location.
reservationFor.location.address. addressLocality (Required)
Text
Locality (e.g. city) of the event's location.
reservationFor.location.address. addressRegion (Required)
Text
Region (e.g. State) of the event's location.
reservationFor.location.address. postalCode (Required)
Text
Postal code of the event's location.
reservationFor.location.address. streetAddress (Required)
Text
Street address of the event's location.
reservationFor.location. name (Required)
Text
Name of the the event's location.
reservationFor. name (Required)
Text
Event's name.
reservationFor. performer
Person or Organization
(recommended for Confirmation Cards/Search Answers) The event's performer. Also accepts an array of objects.
reservationFor.performer. image
URL
(recommended for Confirmation Cards/Search Answers) URL of an image of the Person.
reservationFor.performer. name
Text
(recommended for Confirmation Cards/Search Answers) Name of the Person.
reservationFor.performer. url
URL
URL of the Person.
reservationFor. startDate (Required)
DateTime
The start date and time of the event.
reservationFor. url
URL
URL of the Event.
reservationNumber (Required)
Text
The number or id of the reservation.
reservationStatus (Required)
ReservationStatus
Current status of the reservation.
ticketDownloadUrl
URL
Where the ticket can be downloaded.
ticketNumber
Text
The number or id of the ticket.
ticketPrintUrl
URL
Where the ticket can be printed.
ticketToken
Text or URL
If the barcode image is hosted on your site, the value of the field is URL of the image, or a barcode or QR URI, such as "barcode128:AB34" (ISO-15417 barcodes), "qrCode:AB34" (QR codes), "aztecCode:AB34" (Aztec codes), "barcodeEAN:1234" (EAN codes) and "barcodeUPCA:1234" (UPCA codes).
underName (Required)
Person or Organization
The ticket holder.
underName. email
Text
Email address.
underName. name (Required)
Text
Name of the Person.
url
URL
Web page where reservation can be viewed.
venueRow
Text
The seat's row.
venueSeat
Text
The seat number.
venueSection
Text
The seat's section.
Note: Some of the schemas used by Google are still going through the standardization process of schema.org , and therefore, may change in the future. Learn More .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-24 UTC."],[],[]]
