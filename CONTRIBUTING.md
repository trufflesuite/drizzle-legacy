Contributing to Drizzle
=======================

_Thanks for taking the time to help out and improve Drizzle! :tada:_

The following is a set of guidelines for Drizzle contributions and may change
over time. Feel free to suggest improvements to this document in a pull request!


Contents
--------

[How Can I Contribute?](#how-can-i-contribute)

[Development](#development)
  - [Overview](#overview)
  - [Development Requirements](#development-requirements)
  - [Getting Started](#getting-started)
  - [Forks, Branches, and Pull Requests](#forks-branches-and-pull-requests)
    - [Branching Model](#branching-model)
    - [Working on a Branch](#working-on-a-branch)
    - [The dist/ Directory](#the-dist-directory)

[Additional Notes](#additional-notes)


How Can I Contribute?
---------------------

All contributions are welcome!

If you run into an issue, the first step is to reach out in [our community
Gitter channel](https://gitter.im/ConsenSys/truffle), in case others have run
into the problem or know how to help.

To report a problem or to suggest a new feature, [open a GitHub
Issue](https://github.com/trufflesuite/drizzle/issues/new).  This will help the
Drizzle maintainers become aware of the problem and prioritize a fix.

For code contributions, for either new features or bug fixes, see
[Development](#development).

If you're looking to make a substantial change, you may want to reach out first
to give us a heads up.


Development
-----------

### Overview

Drizzle has two companion libraries
([`drizzle-react`](https://github.com/trufflesuite/drizzle-react) and
[`drizzle-react-components`](https://github.com/trufflesuite/drizzle-react-components)),
each with their own NPM packages.

The content of this guide applies to those companion libraries as well.

This repository
([trufflesuite/drizzle](https://github.com/trufflesuite/drizzle)) contains the
core logic for storing and updating chaindata in a
[Redux](https://github.com/reduxjs/redux) store.

### Development Requirements

In order to develop Drizzle, you'll need:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org)

### Getting Started

First clone this repository and install NPM dependencies:

    $ git clone git@github.com:trufflesuite/drizzle.git
    $ cd drizzle
    $ npm install
    $ npm test

If all is good, then run the build command :

    $ npm run build

Your local Drizzle copy is contained in the `dist/` directory.

To use this in a project, use `npm link`:

    $ cd dist
    $ npm link // may require sudo
    $ cd my-project-root
    $ npm link drizzle

You're ready to use your local developement version of Drizzle in your project.

### Forks, Branches, and Pull Requests

Community contributions to Drizzle require that you first fork each
repository you wish to modify. After your modifications, push changes to
your fork(s) and submit a pull request upstream to `trufflesuite`'s fork(s).

See GitHub documentation about [Collaborating with issues and pull
requests](https://help.github.com/categories/collaborating-with-issues-and-pull-requests/)
for more information.

> :exclamation: **Note:** _Drizzle development uses a long-lived `develop` branch for new (non-hotfix)
> development. Pull Requests should be opened against `develop` in all
> repositories._

#### Branching Model

Drizzle projects maintain two stable branches:

  - **`master`**, for latest full releases and work targeting a patch release
  - **`develop`**, for latest unstable releases and work targeting the next major
      or minor release.

#### Working on a Branch

Use a branch for your modifications, tracking it on your fork:

    $ git checkout -b sweet-feature
    $ git push -u ChocolateLover sweet-feature

Then, make changes and commit as usual.

#### The `dist/` Directory

In the interim before moving toward a more traditional release structure (akin to canary -> beta -> release -> lts) we're using the `dist/` folder as a quick nightly. In practice you won't need to worry about this folder as it relates to the repo, we'll be running our own build before pushes to the `develop` and `master` branches.


Additional Notes
----------------

Join the chat in [our community Gitter channel](https://gitter.im/ConsenSys/truffle). If anything about this
process is unclear, or for helpful feedback of any kind, we'd love to hear from you!

**Thanks again for all your support, encouragement, and effort! Drizzle would not
be possible without contributors like you. :bow:**
