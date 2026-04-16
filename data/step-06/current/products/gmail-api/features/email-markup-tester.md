---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.977Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "Email Markup Tester"
feature_slug: "email-markup-tester"
latest_feature_date: "2013-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/markup/testing-your-schema"
  - "https://developers.google.com/workspace/gmail/markup/reference/bus-reservation"
  - "https://developers.google.com/workspace/gmail/markup/reference/event-reservation"
keywords:
  - "testing"
  - "validator"
  - "replaced"
  - "markup"
  - "tester"
  - "tool"
  - "schema"
  - "email"
---

# Email Markup Tester

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

The Email Markup Tester replaced the Schema Validator tool for testing email schemas.

## Extended Definition

The Email Markup Tester replaced the Schema Validator tool for testing email schemas.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/markup/testing-your-schema](https://developers.google.com/workspace/gmail/markup/testing-your-schema)
- [https://developers.google.com/workspace/gmail/markup/reference/bus-reservation](https://developers.google.com/workspace/gmail/markup/reference/bus-reservation)
- [https://developers.google.com/workspace/gmail/markup/reference/event-reservation](https://developers.google.com/workspace/gmail/markup/reference/event-reservation)

## Supporting Pages

### Test Your Schemas \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/markup/testing-your-schema](https://developers.google.com/workspace/gmail/markup/testing-your-schema)
- Source ID: `site-docs-reference-required-10`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Email Markup Tester The Email Markup Tester tool lets you test your markup and verify the structured data that is extracted from your documents.
- Self testing You can easily test if your markup is working correctly end-to-end by sending emails to yourself.
- Structured Data Markup Helper The Structured Data Markup Helper can show you how to mark up emails that contain any of the following data types: Event Reservation , Flight Reservation , Lodging Reservation , Restaurant Reservation .
- All emails where the sender and the recipient are the same account ignore the registration requirements and can be used for self-testing.

### Bus Reservation \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/markup/reference/bus-reservation](https://developers.google.com/workspace/gmail/markup/reference/bus-reservation)
- Source ID: `site-docs-reference-required-11`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Allow additional time if you need help with baggage or tickets." / > < / div > < / div > Example with all supported fields For reference, here is an example with all supported fields populated: JSON-LD < scrip t t ype= "application/ld+json" > { "@context" : "http://schema.org" , "@type" : "BusReservation" , "reservationNumber" : "123456" , "url" : "http://boltbus.com/view/123456" , "underName" : { "@type" : "Person" , "name" : "John Smith" , "email" : "john@mail.com" }, "programMembership" : { "@type" : "ProgramMembership" , "memberNumber" : "12345" , "program" : "STA" }, "bookingAgent" : { "@type" : "Organization" , "name" : "Bolt Bus NYC" , "url" : "http://boltbus.com/" }, "bookingTime" : "2013-01-14T13:05:00-05:00" , "modifiedTime" : "2013-03-14T13:05:00-05:00" , "confirmReservationUrl" : "http://boltbus.com/confirm?id=123456" , "cancelReservationUrl" : "http://boltbus.com/cancel?id=123456" , "modifyReservationUrl" : "http://boltbus.com/edit?id=123456" , "checkinUrl" : "http://boltbus.com/checkin?id=AB3XY2" , "reservationStatus" : "http://schema.org/ReservationConfirmed" , "reservationFor" : { "@type" : "BusTrip" , "name" : "?" , "busNumber" : "63" , "busName" : "Bolt Bus NY:Boston" , "busCompany" : { "@type" : "Organization" , "name" : "Bolt NYC" }, "departureBusStop" : { "@type" : "BusStop" , "name" : "Port Authority, NYC" , "address" : { "@type" : "PostalAddress" , "streetAddress" : "625 8th Avenue" , "addressLocality" : "New York" , "addressRegion" : "NY" , "postalCode" : "10018" , "addressCountry" : "USA" }, "directions" : "Bus terminals are at floors 2-4 of the Port Authority building" }, "departureTime" : "2017-01-04T12:30:00-05:00" , "arrivalBusStop" : { "@type" : "BusStop" , "name" : "Boston South Station" , "address" : { "@type" : "PostalAddress" , "streetAddress" : "Summer St." , "addressLocality" : "Boston" , "addressRegion" : "MA" , "postalCode" : "02111" , "addressCountry" : "USA" }, "directions" : "Bus stops are at thewest side of the train station." }, "arrivalTime" : "2017-01-04T17:10:00-05:00" }, "reservedTicket" : { "@type" : "Ticket" , "ticketNumber" : "123XYZ" , "downloadUrl" : "?" , "printUrl" : "?" , "ticketToken" : "qrCode:123456789" , "additionalTicketText" : "?" , "price" : "45.00" , "priceCurrency" : "USD" , "underName" : { "@type" : "Person" , "name" : "Mary Smith" }, "ticketedSeat" : { "@type" : "Seat" , "seatingType" : "Coach" , "seatNumber" : "27" , "seatRow" : "A" } } } < /scrip t > Microdata < div itemscope itemtype = "http://schema.org/BusReservation" > < meta itemprop = "reservationNumber" content = "123456" / > < link itemprop = "url" href = "http://boltbus.com/view/123456" / > < div itemprop = "underName" itemscope itemtype = "http://schema.org/Person" > < meta itemprop = "name" content = "John Smith" / > < meta itemprop = "email" content = "john@mail.com" / > < / div > < div itemprop = "programMembership" itemscope itemtype = "http://schema.org/ProgramMembership" > < meta itemprop = "memberNumber" content = "12345" / > < meta itemprop = "program" content = "STA" / > < / div > < div itemprop = "bookingAgent" itemscope itemtype = "http://schema.org/Organization" > < meta itemprop = "name" content = "Bolt Bus NYC" / > < link itemprop = "url" href = "http://boltbus.com/" / > < / div > < meta itemprop = "bookingTime" content = "2013-01-14T13:05:00-05:00" / > < meta itemprop = "modifiedTime" content = "2013-03-14T13:05:00-05:00" / > < link itemprop = "confirmReservationUrl" href = "http://boltbus.com/confirm?id=123456" / > < link itemprop = "cancelReservationUrl" href = "http://boltbus.com/cancel?id=123456" / > < link itemprop = "modifyReservationUrl" href = "http://boltbus.com/edit?id=123456" / > < link itemprop = "checkinUrl" href = "http://boltbus.com/checkin?id=AB3XY2" / > < link itemprop = "reservationStatus" href = "http://schema.org/ReservationConfirmed" / > < div itemprop = "reservationFor" itemscope itemtype = "http://schema.org/BusTrip" > < meta itemprop = "name" content = "?" / > < meta itemprop = "busNumber" content = "63" / > < meta itemprop = "busName" content = "Bolt Bus NY:Boston" / > < div itemprop = "busCompany" itemscope itemtype = "http://schema.org/Organization" > < meta itemprop = "name" content = "Bolt NYC" / > < / div > < div itemprop = "departureBusStop" itemscope itemtype = "http://schema.org/BusStop" > < meta itemprop = "name" content = "Port Authority, NYC" / > < div itemprop = "address" itemscope itemtype = "http://schema.org/PostalAddress" > < meta itemprop = "streetAddress" content = "625 8th Avenue" / > < meta itemprop = "addressLocality" content = "New York" / > < meta itemprop = "addressRegion" content = "NY" / > < meta itemprop = "postalCode" content = "10018" / > < meta itemprop = "addressCountry" content = "USA" / > < / div > < meta itemprop = "directions" content = "Bus terminals are at floors 2-4 of the Port Authority building" / > < / div > < meta itemprop = "departureTime" content = "2017-01-04T12:30:00-05:00" / > < div itemprop = "arrivalBusStop" itemscope itemtype = "http://schema.org/BusStop" > < meta itemprop = "name" content = "Boston South Station" / > < div itemprop = "address" itemscope itemtype = "http://schema.org/PostalAddress" > < meta itemprop = "streetAddress" content = "Summer St." / > < meta itemprop = "addressLocality" content = "Boston" / > < meta itemprop = "addressRegion" content = "MA" / > < meta itemprop = "postalCode" content = "02111" / > < meta itemprop = "addressCountry" content = "USA" / > < / div > < meta itemprop = "directions" content = "Bus stops are at thewest side of the train station." / > < / div > < meta itemprop = "arrivalTime" content = "2017-01-04T17:10:00-05:00" / > < / div > < div itemprop = "reservedTicket" itemscope itemtype = "http://schema.org/Ticket" > < meta itemprop = "ticketNumber" content = "123XYZ" / > < meta itemprop = "downloadUrl" content = "?" / > < meta itemprop = "printUrl" content = "?" / > < meta itemprop = "ticketToken" content = "qrCode:123456789" / > < meta itemprop = "additionalTicketText" content = "?" / > < meta itemprop = "price" content = "45.00" / > < meta itemprop = "priceCurrency" content = "USD" / > < div itemprop = "underName" itemscope itemtype = "http://schema.org/Person" > < meta itemprop = "name" content = "Mary Smith" / > < / div > < div itemprop = "ticketedSeat" itemscope itemtype = "http://schema.org/Seat" > < meta itemprop = "seatingType" content = "Coach" / > < meta itemprop = "seatNumber" content = "27" / > < meta itemprop = "seatRow" content = "A" / > < / div > < / div > < / div > Test your markup You can validate your markup using the Email Markup Tester Tool .
- Note: Before you start, make sure you understand how to embed schemas in emails and you are familiar with testing schemas .
- JSON-LD < scrip t t ype= "application/ld+json" > { "@context" : "http://schema.org" , "@type" : "BusReservation" , "reservationNumber" : "123456" , "underName" : { "@type" : "Person" , "name" : "John Smith" }, "reservationStatus" : "http://schema.org/ReservationConfirmed" , "reservationFor" : { "@type" : "BusTrip" , "busCompany" : { "@type" : "Organization" , "name" : "Bolt NYC" }, "departureBusStop" : { "@type" : "BusStop" , "name" : "Port Authority, NYC" }, "departureTime" : "2017-01-04T12:30:00-05:00" , "arrivalBusStop" : { "@type" : "BusStop" , "name" : "Boston South Station" }, "arrivalTime" : "2017-01-04T17:10:00-05:00" } } < /scrip t > Microdata < div itemscope itemtype = "http://schema.org/BusReservation" > < meta itemprop = "reservationNumber" content = "123456" / > < div itemprop = "underName" itemscope itemtype = "http://schema.org/Person" > < meta itemprop = "name" content = "John Smith" / > < / div > < link itemprop = "reservationStatus" href = "http://schema.org/ReservationConfirmed" / > < div itemprop = "reservationFor" itemscope itemtype = "http://schema.org/BusTrip" > < div itemprop = "busCompany" itemscope itemtype = "http://schema.org/Organization" > < meta itemprop = "name" content = "Bolt NYC" / > < / div > < div itemprop = "departureBusStop" itemscope itemtype = "http://schema.org/BusStop" > < meta itemprop = "name" content = "Port Authority, NYC" / > < / div > < meta itemprop = "departureTime" content = "2017-01-04T12:30:00-05:00" / > < div itemprop = "arrivalBusStop" itemscope itemtype = "http://schema.org/BusStop" > < meta itemprop = "name" content = "Boston South Station" / > < / div > < meta itemprop = "arrivalTime" content = "2017-01-04T17:10:00-05:00" / > < / div > < / div > Boarding pass and ticket In addition to a reservation confirmation you may trigger a Confirmation Card boarding pass in a separate email.
- Basic reservation confirmation Embed the following markup in your email when you send a reservation confirmation.

### Event Reservation \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/markup/reference/event-reservation](https://developers.google.com/workspace/gmail/markup/reference/event-reservation)
- Source ID: `site-docs-reference-required-11`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON-LD < scrip t t ype= "application/ld+json" > [ { "@context" : "http://schema.org" , "@type" : "EventReservation" , "reservationNumber" : "E123456789" , "reservationStatus" : "http://schema.org/Confirmed" , "underName" : { "@type" : "Person" , "name" : "John Smith" }, "reservationFor" : { "@type" : "Event" , "name" : "Foo Fighters Concert" , "performer" : { "@type" : "Person" , "name" : "The Foo Fighters" , "image" : "http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg" }, "startDate" : "2027-03-06T19:30:00-08:00" , "location" : { "@type" : "Place" , "name" : "AT&T Park" , "address" : { "@type" : "PostalAddress" , "streetAddress" : "24 Willie Mays Plaza" , "addressLocality" : "San Francisco" , "addressRegion" : "CA" , "postalCode" : "94107" , "addressCountry" : "US" } } }, "venueSeat" : "12" , "venueRow" : "A" , "venueSection" : "101" , "ticketToken" : "qrCode:AB34" , "ticketNumber" : "abc123" }, { "@context" : "http://schema.org" , "@type" : "EventReservation" , "reservationNumber" : "E123456789" , "reservationStatus" : "http://schema.org/Confirmed" , "underName" : { "@type" : "Person" , "name" : "Eva Green" }, "reservationFor" : { "@type" : "Event" , "name" : "Foo Fighters Concert" , "performer" : { "@type" : "Organization" , "name" : "The Foo Fighters" , "image" : "http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg" }, "startDate" : "2027-03-06T19:30:00-08:00" , "location" : { "@type" : "Place" , "name" : "AT&T Park" , "address" : { "@type" : "PostalAddress" , "streetAddress" : "24 Willie Mays Plaza" , "addressLocality" : "San Francisco" , "addressRegion" : "CA" , "postalCode" : "94107" , "addressCountry" : "US" } } }, "venueSeat" : "13" , "venueRow" : "A" , "venueSection" : "101" , "ticketToken" : "qrCode:AB34" , "ticketNumber" : "abc456" } ] < /scrip t > Microdata < div itemscope itemtype = "http://schema.org/EventReservation" > < meta itemprop = "reservationNumber" content = "E123456789" / > < link itemprop = "reservationStatus" href = "http://schema.org/Confirmed" / > < div itemprop = "underName" itemscope itemtype = "http://schema.org/Person" > < meta itemprop = "name" content = "John Smith" / > < / div > < div itemprop = "reservationFor" itemscope itemtype = "http://schema.org/Event" > < meta itemprop = "name" content = "Foo Fighters Concert" / > < div itemprop = "performer" itemscope itemtype = "http://schema.org/Person" > < meta itemprop = "name" content = "The Foo Fighters" / > < link itemprop = "image" href = "http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg" / > < / div > < meta itemprop = "startDate" content = "2027-03-06T19:30:00-08:00" / > < div itemprop = "location" itemscope itemtype = "http://schema.org/Place" > < meta itemprop = "name" content = "AT&T Park" / > < div itemprop = "address" itemscope itemtype = "http://schema.org/PostalAddress" > < meta itemprop = "streetAddress" content = "24 Willie Mays Plaza" / > < meta itemprop = "addressLocality" content = "San Francisco" / > < meta itemprop = "addressRegion" content = "CA" / > < meta itemprop = "postalCode" content = "94107" / > < meta itemprop = "addressCountry" content = "US" / > < / div > < / div > < / div > < meta itemprop = "venueSeat" content = "12" / > < meta itemprop = "venueRow" content = "A" / > < meta itemprop = "venueSection" content = "101" / > < meta itemprop = "ticketToken" content = "qrCode:AB34" / > < meta itemprop = "ticketNumber" content = "abc123" / > < / div > < div itemscope itemtype = "http://schema.org/EventReservation" > < meta itemprop = "reservationNumber" content = "E123456789" / > < link itemprop = "reservationStatus" href = "http://schema.org/Confirmed" / > < div itemprop = "underName" itemscope itemtype = "http://schema.org/Person" > < meta itemprop = "name" content = "Eva Green" / > < / div > < div itemprop = "reservationFor" itemscope itemtype = "http://schema.org/Event" > < meta itemprop = "name" content = "Foo Fighters Concert" / > < div itemprop = "performer" itemscope itemtype = "http://schema.org/Organization" > < meta itemprop = "name" content = "The Foo Fighters" / > < link itemprop = "image" href = "http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg" / > < / div > < meta itemprop = "startDate" content = "2027-03-06T19:30:00-08:00" / > < div itemprop = "location" itemscope itemtype = "http://schema.org/Place" > < meta itemprop = "name" content = "AT&T Park" / > < div itemprop = "address" itemscope itemtype = "http://schema.org/PostalAddress" > < meta itemprop = "streetAddress" content = "24 Willie Mays Plaza" / > < meta itemprop = "addressLocality" content = "San Francisco" / > < meta itemprop = "addressRegion" content = "CA" / > < meta itemprop = "postalCode" content = "94107" / > < meta itemprop = "addressCountry" content = "US" / > < / div > < / div > < / div > < meta itemprop = "venueSeat" content = "13" / > < meta itemprop = "venueRow" content = "A" / > < meta itemprop = "venueSection" content = "101" / > < meta itemprop = "ticketToken" content = "qrCode:AB34" / > < meta itemprop = "ticketNumber" content = "abc456" / > < / div > Test your markup You can validate your markup using the Email Markup Tester Tool .
- Note: Before you start, make sure you understand how to embed schemas in emails and you are familiar with testing schemas .
- Basic event reminder without a ticket If you are sending out an email confirming a user’s attendance to an event, include the following markup.
- This is an example of the minimal amount of markup that will qualify your email as an EventReservation .

