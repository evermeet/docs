---
title: Identifier (DID)
---

We use [Decentralized Identifiers](https://en.wikipedia.org/wiki/Decentralized_identifier) (DIDs) as persistent, long-term and portable account identifiers for Users, but also for public Calendars and Events.

These identifiers guarantee greater security and easy portability of accounts from one instance to another.

## DID Methods

Currently, evermeet supports two DID methods:

* `did:web` - a W3C standard based on HTTPS (and DNS) ([specs](https://w3c-ccg.github.io/did-method-web/))
* `did:plc` - a method developed for AT Protocol ([specs](https://github.com/did-method-plc/did-method-plc))
* `did:dht` - a method based on [Pkarr](https://github.com/nuhvi/pkarr) and [Mainline DHT](https://en.wikipedia.org/wiki/Mainline_DHT) ([specs](https://did-dht.com/))

---

## `did:plc` Method

[DID PLC](https://github.com/did-method-plc/did-method-plc) is a self-authenticating DID which is strongly-consistent, recoverable, and allows for key rotation.

An example DID is: `did:plc:ewvi7nxzyoun6zhxrhs64oiz` ([lookup](https://web.plc.directory/did/did:plc:ewvi7nxzyoun6zhxrhs64oiz))

Currently used PLC directories:
* [dev-plc.evermeet.app](https://dev-plc.evermeet.app) - local development sandbox
* [plc.directory](https://plc.directory) - for production use (planned)

### Libraries

* [@did-plc/lib](https://github.com/did-method-plc/did-method-plc/tree/main/packages/lib) (TypeScript)
* [@did-plc/server](https://github.com/did-method-plc/did-method-plc/tree/main/packages/server) (TypeScript)

---

## `did:dht` Method

[DID DHT](https://did-dht.com/) is a method based on [Mainline DHT](https://en.wikipedia.org/wiki/Mainline_DHT) used in BitTorrent which operates over 15+ years and have millions of nodes. This implementation using [Pkarr](https://github.com/nuhvi/pkarr) (Public-Key Addressable Resource Records) protocol.

### Libraries

#### Web5 SDK

[Web5 SDK](https://developer.tbd.website/docs/web5/) libraries can also work with `did:jwk` and [Verifiable Credentials](https://developer.tbd.website/docs/web5/learn/verifiable-credentials).
* [@web5-js](https://github.com/TBD54566975/web5-js) (TypeScript)
* [web5-go](https://github.com/TBD54566975/web5-go) (Go) (WIP)
* [web5-rs](https://github.com/TBD54566975/web5-rs) (Rust) (WIP)

#### Pkarr
* [pkarr](https://github.com/Nuhvi/pkarr) (Rust)
* [pkarr-ffi](https://github.com/Nuhvi/pkarr-ffi/tree/main/js) (JavaScript)