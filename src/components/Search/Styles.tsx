import React from "react"
import { Global, css } from "@emotion/react"

const styles = css`
  /* Search field on desktop nav bar */
  .DocSearch-Button {
    border-radius: var(--eth-radii-base);
    border: var(--eth-borders-1px);
    border-color: var(--eth-colors-bodyLight);
    height: 30px;
    background: none;
    margin: 0;
    padding-inline: var(--eth-space-1);
    gap: var(--eth-space-4);
    align-items: center;
    --docsearch-searchbox-shadow: inset 0 0 0 1px
      var(--eth-colors-primaryHighlight);
  }

  .DocSearch-Button-Container {
  }

  .DocSearch-Button-Keys {
    min-width: 44px;
    gap: var(--eth-space-1);
    display: flex;
    align-items: center !important;
    margin: 0;
    margin-top: 2px;
    padding: 0;
    height: 100%;
  }

  .DocSearch-Button-Container svg {
    --icon-size: 0.875rem;
    width: var(--icon-size);
    height: var(--icon-size);
  }
  .DocSearch-Button:active,
  .DocSearch-Button:focus,
  .DocSearch-Button:hover {
    box-shadow: none;
    outline: 2px solid var(--eth-colors-primary);
  }

  .DocSearch-Button:hover svg path,
  .DocSearch-Button:hover kbd,
  .DocSearch-Button:hover span {
    color: var(--eth-colors-bg);
    border-color: var(--eth-colors-bg);
  }

  .DocSearch-Button-Keys kbd {
    background: none;
    border: 1px solid;
    border-color: var(--eth-colors-disabled);
    color: var(--eth-colors-disabled);
    box-shadow: none;
    padding: var(--eth-space-0-5);
    margin: 0;
    height: var(--eth-space-5);
    width: var(--eth-space-5);
    font-size: var(--eth-fontSizes-sm);
    text-transform: lowercase;
  }
  .DocSearch-Button-Keys kbd:first-of-type {
    font-size: var(--eth-fontSizes-md);
    padding-top: var(--eth-space-1);
  }

  .DocSearch-Button-Placeholder {
    text-align: start;
    text-transform: lowercase;
    font-style: italic;
    color: var(--eth-colors-body);
    font-weight: 400;
    width: 100%;
    flex: 1;
  }

  /* Algolia search modal styling */
  .DocSearch-Modal {
    --docsearch-modal-background: var(--eth-colors-background);
    --docsearch-searchbox-height: fit-content;
    --docsearch-highlight-color: var(--eth-colors-primaryHover);
    --docsearch-modal-width: 650px;
  }

  .DocSearch-SearchBar {
    padding: var(--eth-space-8);
    padding-bottom: var(--eth-space-4);
  }
  .DocSearch-SearchBar form {
    padding-block: var(--eth-space-3);
    --docsearch-searchbox-shadow: inset 0 0 0 1px
      var(--eth-colors-primaryHighlight);
    background: var(--eth-colors-neutral);
  }
  .DocSearch-SearchBar label {
    --size: var(--eth-space-4);
    height: var(--size);
    width: var(--size);
    color: var(--eth-colors-primaryHighlight);
  }
  .DocSearch-SearchBar input {
    font-size: var(--eth-fontSizes-lg);
    color: var(--eth-colors-primaryHighlight);
  }
  .DocSearch-SearchBar button {
    color: var(--eth-colors-primaryHighlight);
  }
  .DocSearch-SearchBar button:hover {
    color: var(--eth-colors-primary);
  }

  .DocSearch-Container--Stalled .DocSearch-MagnifierLabel,
  .DocSearch-Container--Stalled .DocSearch-LoadingIndicator {
    color: var(--chakra-colors-primaryHighlight);
  }

  .DocSearch-Dropdown {
    padding-inline: var(--eth-space-8);
    max-height: calc(100vh - var(--eth-space-64));
    overflow-y: scroll;
  }
  .DocSearch-Hit-source {
    color: var(--eth-colors-body);
  }
  .DocSearch-Hit a {
    border-radius: 0;
    --docsearch-hit-shadow: none;
    border-bottom: 1px solid var(--eth-colors-disabled);
    background: none;
  }
  .DocSearch-Hit[aria-selected="true"] a {
    background: var(--eth-colors-primaryHover);
    box-shadow: 4px 4px 0 0 var(--eth-colors-primaryLight);
    --docsearch-hit-active-color: var(--eth-colors-background);
  }
  .DocSearch-Hit-action-button:focus path,
  .DocSearch-Hit-action-button:hover path {
    fill: var(--eth-colors-switchBackground);
  }
  .DocSearch-Hit-icon {
    /* --docsearch-muted-color:  */
    color: var(--eth-colors-body);
  }

  .DocSearch-Footer {
    --docsearch-footer-height: var(--eth-space-10);
  }

  /* Modal footer */
  .DocSearch-Commands kbd {
    background: var(--eth-colors-button-background);
    border: 1px solid var(--eth-colors-primary);
    color: var(--eth-colors-primary);
    box-shadow: none;
    --size: 1rem;
    height: var(--size);
    width: var(--size);
    padding: 0;
    display: grid;
    place-items: center;
    border-radius: var(--eth-radii-base);
  }

  .DocSearch-Footer {
    background: var(--eth-colors-primaryBackground);
    --docsearch-logo-colors: var(--eth-colors-bodyLight);
    --docsearch-footer-shadow: none;
    border-top: 2px solid var(--eth-colors-primary);
  }
  .DocSearch-Footer ul {
    gap: var(--eth-space-4);
  }
  .DocSearch-Footer ul li {
    margin: 0 !important;
  }
  .DocSearch-Footer span {
    color: var(--eth-colors-body);
    text-transform: lowercase;
  }

  .DocSearch-Logo a span {
    color: var(--eth-colors-bodyLight);
    text-transform: uppercase;
  }
  svg[aria-label="Algolia"] * {
    fill: var(--eth-colors-bodyLight);
  }

  /* Mobile modal styling */
  @media (max-width: 768px) {
    .DocSearch-Container {
      position: fixed;
      inset: 0;
      z-index: 1100;
    }

    .DocSearch-Modal {
      position: fixed;
      --inset: 1rem;
      inset: var(--inset);
      max-width: calc(100vw - 2 * var(--inset));
      max-height: calc(100vh - 2 * var(--inset));
      border-radius: var(--eth-radii-base);
      overflow: hidden;
    }

    .DocSearch-Cancel {
      color: var(--chakra-colors-primary);
    }

    .DocSearch-Dropdown {
      padding-inline: var(--eth-space-8);
      max-height: 100%;
      overflow-y: scroll;
    }
  }
`

const DocSearchStyles = () => <Global styles={styles} />

export default DocSearchStyles
