import React from 'react';
import Media from 'react-media';
import { useUnusualReloader } from './useUnusualReloader';
import { DocumentationLayoutSmall } from './DocumentationLayoutSmall';
import { DocumentationLayoutMedium } from './DocumentationLayoutMedium';
import { DocumentationLayoutWide } from './DocumentationLayoutWide';
import { jsx as ___EmotionJSX } from "@emotion/core";

var DocumentationLayout = function DocumentationLayout(_ref) {
  var children = _ref.children,
      location = _ref.location,
      data = _ref.data;
  var pageReady = useUnusualReloader(location);

  if (!pageReady) {
    return null;
  }

  return ___EmotionJSX(Media, {
    query: "(min-width: 1100px)"
  }, function (matches) {
    return matches ? ___EmotionJSX(DocumentationLayoutWide, {
      location: location,
      data: data
    }, children) : ___EmotionJSX(Media, {
      query: "(min-width: 800px)"
    }, function (matches) {
      return matches ? ___EmotionJSX(DocumentationLayoutMedium, {
        location: location,
        data: data
      }, children) : ___EmotionJSX(DocumentationLayoutSmall, {
        location: location,
        data: data
      }, children);
    });
  });
};

export { DocumentationLayout };
//# sourceMappingURL=DocumentationLayout.js.map