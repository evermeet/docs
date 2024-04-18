---
title: Identifier (DID)
---

We use [Decentralized Identifiers](https://en.wikipedia.org/wiki/Decentralized_identifier) (DIDs) as persistent, long-term and portable account identifiers for Users, but also for public Calendars and Events.

These identifiers guarantee greater security and easy portability of accounts from one instance to another.

## DID Methods

Currently, evermeet supports two DID methods:

* `did:web` - a W3C standard based on HTTPS (and DNS) ([specs](https://w3c-ccg.github.io/did-method-web/))
* `did:plc` - a modern method developed for AT Protocol ([specs](https://github.com/did-method-plc/did-method-plc))

## `did:plc` Method

[DID PLC](https://github.com/did-method-plc/did-method-plc) is a self-authenticating DID which is strongly-consistent, recoverable, and allows for key rotation.

An example DID is: `did:plc:ewvi7nxzyoun6zhxrhs64oiz` ([lookup](https://web.plc.directory/did/did:plc:ewvi7nxzyoun6zhxrhs64oiz))