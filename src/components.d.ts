/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/redux';


declare global {

  namespace StencilComponents {
    interface AppCounter {
      'changeCount': any;
      'count': number;
    }
  }

  interface HTMLAppCounterElement extends StencilComponents.AppCounter, HTMLStencilElement {}

  var HTMLAppCounterElement: {
    prototype: HTMLAppCounterElement;
    new (): HTMLAppCounterElement;
  };
  interface HTMLElementTagNameMap {
    'app-counter': HTMLAppCounterElement;
  }
  interface ElementTagNameMap {
    'app-counter': HTMLAppCounterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-counter': JSXElements.AppCounterAttributes;
    }
  }
  namespace JSXElements {
    export interface AppCounterAttributes extends HTMLAttributes {
      'changeCount'?: any;
      'count'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppDetail {

    }
  }

  interface HTMLAppDetailElement extends StencilComponents.AppDetail, HTMLStencilElement {}

  var HTMLAppDetailElement: {
    prototype: HTMLAppDetailElement;
    new (): HTMLAppDetailElement;
  };
  interface HTMLElementTagNameMap {
    'app-detail': HTMLAppDetailElement;
  }
  interface ElementTagNameMap {
    'app-detail': HTMLAppDetailElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-detail': JSXElements.AppDetailAttributes;
    }
  }
  namespace JSXElements {
    export interface AppDetailAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppRoot {

    }
  }

  interface HTMLAppRootElement extends StencilComponents.AppRoot, HTMLStencilElement {}

  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
  }
  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-root': JSXElements.AppRootAttributes;
    }
  }
  namespace JSXElements {
    export interface AppRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface RefugeFilter {

    }
  }

  interface HTMLRefugeFilterElement extends StencilComponents.RefugeFilter, HTMLStencilElement {}

  var HTMLRefugeFilterElement: {
    prototype: HTMLRefugeFilterElement;
    new (): HTMLRefugeFilterElement;
  };
  interface HTMLElementTagNameMap {
    'refuge-filter': HTMLRefugeFilterElement;
  }
  interface ElementTagNameMap {
    'refuge-filter': HTMLRefugeFilterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'refuge-filter': JSXElements.RefugeFilterAttributes;
    }
  }
  namespace JSXElements {
    export interface RefugeFilterAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface RefugeHeader {
      'backLink': boolean;
      'handleSearch': Function;
      'searchBar': boolean;
    }
  }

  interface HTMLRefugeHeaderElement extends StencilComponents.RefugeHeader, HTMLStencilElement {}

  var HTMLRefugeHeaderElement: {
    prototype: HTMLRefugeHeaderElement;
    new (): HTMLRefugeHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'refuge-header': HTMLRefugeHeaderElement;
  }
  interface ElementTagNameMap {
    'refuge-header': HTMLRefugeHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'refuge-header': JSXElements.RefugeHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface RefugeHeaderAttributes extends HTMLAttributes {
      'backLink'?: boolean;
      'handleSearch'?: Function;
      'searchBar'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface RefugeMap {

    }
  }

  interface HTMLRefugeMapElement extends StencilComponents.RefugeMap, HTMLStencilElement {}

  var HTMLRefugeMapElement: {
    prototype: HTMLRefugeMapElement;
    new (): HTMLRefugeMapElement;
  };
  interface HTMLElementTagNameMap {
    'refuge-map': HTMLRefugeMapElement;
  }
  interface ElementTagNameMap {
    'refuge-map': HTMLRefugeMapElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'refuge-map': JSXElements.RefugeMapAttributes;
    }
  }
  namespace JSXElements {
    export interface RefugeMapAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface RefugePrediction {
      'item': any;
    }
  }

  interface HTMLRefugePredictionElement extends StencilComponents.RefugePrediction, HTMLStencilElement {}

  var HTMLRefugePredictionElement: {
    prototype: HTMLRefugePredictionElement;
    new (): HTMLRefugePredictionElement;
  };
  interface HTMLElementTagNameMap {
    'refuge-prediction': HTMLRefugePredictionElement;
  }
  interface ElementTagNameMap {
    'refuge-prediction': HTMLRefugePredictionElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'refuge-prediction': JSXElements.RefugePredictionAttributes;
    }
  }
  namespace JSXElements {
    export interface RefugePredictionAttributes extends HTMLAttributes {
      'item'?: any;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface RefugePredictions {

    }
  }

  interface HTMLRefugePredictionsElement extends StencilComponents.RefugePredictions, HTMLStencilElement {}

  var HTMLRefugePredictionsElement: {
    prototype: HTMLRefugePredictionsElement;
    new (): HTMLRefugePredictionsElement;
  };
  interface HTMLElementTagNameMap {
    'refuge-predictions': HTMLRefugePredictionsElement;
  }
  interface ElementTagNameMap {
    'refuge-predictions': HTMLRefugePredictionsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'refuge-predictions': JSXElements.RefugePredictionsAttributes;
    }
  }
  namespace JSXElements {
    export interface RefugePredictionsAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface RefugeResult {
      'focused': boolean;
      'result': any;
    }
  }

  interface HTMLRefugeResultElement extends StencilComponents.RefugeResult, HTMLStencilElement {}

  var HTMLRefugeResultElement: {
    prototype: HTMLRefugeResultElement;
    new (): HTMLRefugeResultElement;
  };
  interface HTMLElementTagNameMap {
    'refuge-result': HTMLRefugeResultElement;
  }
  interface ElementTagNameMap {
    'refuge-result': HTMLRefugeResultElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'refuge-result': JSXElements.RefugeResultAttributes;
    }
  }
  namespace JSXElements {
    export interface RefugeResultAttributes extends HTMLAttributes {
      'focused'?: boolean;
      'result'?: any;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface RefugeResults {
      'results': any;
    }
  }

  interface HTMLRefugeResultsElement extends StencilComponents.RefugeResults, HTMLStencilElement {}

  var HTMLRefugeResultsElement: {
    prototype: HTMLRefugeResultsElement;
    new (): HTMLRefugeResultsElement;
  };
  interface HTMLElementTagNameMap {
    'refuge-results': HTMLRefugeResultsElement;
  }
  interface ElementTagNameMap {
    'refuge-results': HTMLRefugeResultsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'refuge-results': JSXElements.RefugeResultsAttributes;
    }
  }
  namespace JSXElements {
    export interface RefugeResultsAttributes extends HTMLAttributes {
      'results'?: any;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }