# Smart Cities

# Developing locally
## First time
Download and install Node, the version used by this site is listed in `package.json`
or if you use `nvm` on macOS, just type `nvm use`.

Clone this repository with `git clone https://github.com/govau/smart-cities`

Change into that directory `cd smart-cities` and run `npm install` (or `npm i`) to install all the dependencies.

## Each time
Type `npm start` to run the site in 'development mode'. This will
reload the page as you make changes to the code.

## Testing
To run tests, type `npm test` (or `npm t`).

On macOS you will want to install [Watchman](https://facebook.github.io/watchman/) first.

## Building the static files for deployment
To build the files for deployment, type `npm run build`.

# Code Structure
Components are self-contained units, each in their own directory.
Most Component directories will have the component (e.g. `Button.js`),
the styles, (e.g. `Button.scss`) and a test suit (e.g. `Button.test.js`).

Many will also have a `__snapshots__` directory created automatically by `jest`.

Component files should be named the same as the component they export, and should
only ever contain one component.

CSS classes should only ever be used with the component to which they belong.

If you need to share a style between two components, it should either be its own component
(for example, a 'card' with a shadow would be its own component)
or a mixin (for example a typography style that is used in many different CSS classes).

Components that should connect to a data source should do so using the Redux `connect`
function in a parent container component.

## Container components
Each page type has its own container to connect it to the store and
provide data. The city and category nav components each also have their own container

# CSS
## CSS modules
This project uses CSS modules, which enforce scoping of classes to a particular component.
So, when writing a CSS class for, say, the text in a `<Header>` component, you
can name the class relative to that component. That is, `.title` rather than `.header-title`.

In the generated HTML, the `class` will be a concatenation of the component name and the class
name you defined, followed by a hash. E.g. `Header-title--2yh4t`.

This means there is no way to use that `.title` class from the `<Header>` component in
another component. This is a very good thing :)

## Naming conventions
Class names should be camelCase for the base class. E.g. `subTitle`. "modifiers" should be proceeded by
two underscores. E.g. `sideBar__open`, `sideBar__closed`.

Sass variables and mixins should be kebab case, with dashes for modifiers. E.g `indicator-card-number--small`.

## Typography
We have a complete set of typography mixins in `_typography.scss`,
which means you will never need to set `font-size`, `font-weight`, `letter-spacing` etc.
directly in a CSS class. Instead, use the appropriate mixin. Note that the typography styles do *not* contain
color information, so if you want something other than the current color, you need to define this, e.g.
```scss

.nav-item {
  @include type-nav-vertical;

  &--selected {
    background: $color-background;
    color: $color-navigation;
  }
}
```

You can view all of the styles in the style guide (see below).

If a design contains text that doesn't appear to be covered by any of the mixins, speak to the designer and adjust
the design, adjust the mixin, or add another mixin.

## Breakpoints
We have a set of mixins for media query ranges defined in `_breakpoints.scss`. Use them like so:

```scss
.my-box {
  padding: 10px;

  @include for-tablet-landscape-up {
    padding: 20px;
  }
}
```

## Linting
[Stylelint](https://github.com/stylelint/stylelint) is used to lint the CSS, we're using the
default settings from [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard).
Lint errors will display in the console as you work.

# Style Guide
We have a style guide, visible at `/style-guide`. This displays each of the color variables and
typography mixins.

# Data
The data received from the API is not in the exact format required for the front end.
So, at the point when we fetch the data, we parse it so that it *is* in the correct format,
and then avoid manipulating the data any further (except for sorting and filtering) elsewhere
in the app.

# Branch/Commit workflow
All work should be carried out on branches, which are then reviewed before
being merged back into `master`. Branch names should contain the issues number
and start with either `fix/` or `feature/`. E.g. a branch name for adding
the navigation menu might be `feature/324-nav-menu`.

# Deployment ## Manual deployment
For deployment to a CloudFoundry server simply [install the CLI](https://github.com/cloudfoundry/cli), log in and then `cf push`. The `manifest.yml` file
can be tweaked if needed. Currently we are using a 'static file' buildpack. Note that
only the `build` directory is deployed, so you should `npm build` before deploying.

## CI/CD
CircleCI will test all commits pushed to the repo. As soon as a branch is merged
to the `master` branch, it will (assuming tests pass) additionally deploy to the
`smart-cities-dev` instance. To deploy to the `smart-cities-staging` instance,
simply push to the `staging` branch.
