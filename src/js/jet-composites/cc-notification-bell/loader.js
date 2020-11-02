/**
  Copyright (c) 2015, 2020, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./cc-notification-bell-view.html', './cc-notification-bell-viewModel', 'text!./component.json', 'css!./cc-notification-bell-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('cc-notification-bell', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);