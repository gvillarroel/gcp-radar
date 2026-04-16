---
title: "Get Started \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/markup/getting-started
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/markup/getting-started
source_metadata:
  url: https://developers.google.com/workspace/gmail/markup/getting-started
  title: "Get Started \_|\_ Gmail \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Gmail
Guides
Send feedback
Get Started
Stay organized with collections
Save and categorize content based on your preferences.
Email markup uses structured data in emails to work. Gmail supports both JSON-LD and Microdata and you can use either of them to markup information in email. This lets Google understand the fields and provide the user with relevant search results, actions, and cards. For example, if the email is about an event reservation, you might want to annotate the start time, venue, number of tickets, and all other information that defines the reservation.
Your first markup
Let's say you are responsible for sending out Google I/O 2013 tickets to participants and you want to use markup semantic information in these emails. At the very least, your ticket confirmation email will contain HTML like the following:
<html>
<body>
<p>
Dear John, thanks for booking your Google I/O ticket with us.
</p>
<p>
BOOKING DETAILS<br/>
Order for: John Smith<br/>
Event: Google I/O 2013<br/>
When: May 15th 2013 8:30am PST<br/>
Venue: Moscone Center, 800 Howard St., San Francisco, CA 94103<br/>
Reservation number: IO12345<br/>
</p>
</body>
</html>
Marking up this email is very easy. Relevant pieces of information in the email body can be added anywhere inside the body of the email's HTML in a structured form corresponding to one of the supported formats. The following code block shows what the marked-up email looks like:
JSON-LD
< h t ml >
< body >
< scrip t t ype= "application/ld+json" >
{
"@context" : "http://schema.org" ,
"@type" : "EventReservation" ,
"reservationNumber" : "IO12345" ,
"underName" : {
"@type" : "Person" ,
"name" : "John Smith"
},
"reservationFor" : {
"@type" : "Event" ,
"name" : "Google I/O 2013" ,
"startDate" : "2013-05-15T08:30:00-08:00" ,
"location" : {
"@type" : "Place" ,
"name" : "Moscone Center" ,
"address" : {
"@type" : "PostalAddress" ,
"streetAddress" : "800 Howard St." ,
"addressLocality" : "San Francisco" ,
"addressRegion" : "CA" ,
"postalCode" : "94103" ,
"addressCountry" : "US"
}
}
}
}
< /scrip t >
< p >
Dear Joh n , t ha n ks f or booki n g your Google I/O t icke t wi t h us.
< /p >
< p >
BOOKING DETAILS<br/>
Reserva t io n nu mber : IO 12345 < br/ >
Order f or : Joh n Smi t h<br/>
Eve nt : Google I/O 2013 < br/ >
S tart t ime : May 15 t h 2013 8 : 00 am PST<br/>
Ve nue : Mosco ne Ce nter , 800 Howard S t . , Sa n Fra n cisco , CA 94103 < br/ >
< /p >
< /body >
< /h t ml >
Microdata
< html >
< body >
< div itemscope itemtype = "http://schema.org/EventReservation" >
< meta itemprop = "reservationNumber" content = "IO12345" / >
< div itemprop = "underName" itemscope itemtype = "http://schema.org/Person" >
< meta itemprop = "name" content = "John Smith" / >
< / div >
< div itemprop = "reservationFor" itemscope itemtype = "http://schema.org/Event" >
< meta itemprop = "name" content = "Google I/O 2013" / >
< time itemprop = "startDate" datetime = "2013-05-15T08:30:00-08:00" / >
< div itemprop = "location" itemscope itemtype = "http://schema.org/Place" >
< meta itemprop = "name" content = "Moscone Center" / >
< div itemprop = "address" itemscope itemtype = "http://schema.org/PostalAddress" >
< meta itemprop = "streetAddress" content = "800 Howard St." / >
< meta itemprop = "addressLocality" content = "San Francisco" / >
< meta itemprop = "addressRegion" content = "CA" / >
< meta itemprop = "postalCode" content = "94103" / >
< meta itemprop = "addressCountry" content = "US" / >
< / div >
< / div >
< / div >
< / div >
< p >
Dear John , thanks for booking your Google I / O ticket with us .
< / p >
< p >
BOOKING DETAILS<br / >
Reservation number : IO12345<br / >
Order for : John Smith<br / >
Event : Google I / O 2013 < br / >
Start time : May 15 th 2013 8 : 00 am PST<br / >
Venue : Moscone Center , 800 Howard St ., San Francisco , CA 94103 < br / >
< / p >
< / body >
< / html >
Microdata (inline)
< html >
< body >
< p >
Dear John , thanks for booking your Google I / O ticket with us .
< / p >
< p itemscope itemtype = "http://schema.org/EventReservation" >
BOOKING DETAILS<br / >
Reservation number : < span itemprop = "reservationNumber" > IO12345 < / span><br / >
Order for : < span itemprop = "underName" itemscope itemtype = "http://schema.org/Person" >
< span itemprop = "name" > John Smith < / span >
< / span><br / >
< div itemprop = "reservationFor" itemscope itemtype = "http://schema.org/Event" >
Event : < span itemprop = "name" > Google I / O 2013 < / span><br / >
< time itemprop = "startDate" datetime = "2013-05-15T08:30:00-08:00" > Start time : May 15 th 2013 8 : 00 am PST < / time><br / >
Venue : < span itemprop = "location" itemscope itemtype = "http://schema.org/Place" >
< span itemprop = "name" > Moscone Center < / span >
< span itemprop = "address" itemscope itemtype = "http://schema.org/PostalAddress" >
< span itemprop = "streetAddress" > 800 Howard St . < / span > ,
< span itemprop = "addressLocality" > San Francisco < / span > ,
< span itemprop = "addressRegion" > CA < / span > ,
< span itemprop = "postalCode" > 94103 < / span > ,
< span itemprop = "addressCountry" > US < / span >
< / span >
< / span >
< / div >
< / p >
< / body >
< / html >
The above email contains the minimal set of information to define an event reservation. You can markup other pieces of information in your emails to improve the user experience. For instance, the ticketToken property of the FlightReservation object lets you add a barcode image, such as a QR code, that can be included in a boarding pass card.
To learn about all of the supported types and their properties, see the Reference guide .
Note: Some of the schemas used by Google are still going through the standardization process of schema.org , and therefore, may change in the future. Learn More .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
