import React from 'react';
import { DocumentationLayoutGrid, SidebarGridItem, ContentGridItem } from './DocumentationLayoutGrid';
import { Navigation } from '../navigation';
import { SiteTitle } from './SiteTitle';
import { FixedNavigation } from './FixedNavigation';
import { jsx as ___EmotionJSX } from "@emotion/core";

var DocumentationLayoutWide = function DocumentationLayoutWide(_ref) {
  var children = _ref.children,
      location = _ref.location,
      data = _ref.data,
      onStateChanged = _ref.onStateChanged,
      deltas = _ref.deltas,
      rhythm = _ref.rhythm;
  var _data$site$siteMetada = data.site.siteMetadata,
      title = _data$site$siteMetada.title,
      navigationGroups = _data$site$siteMetada.navigationGroups,
      docs = data.navigation.docs;
  return ___EmotionJSX(DocumentationLayoutGrid, {
    rhythm: rhythm
  }, ___EmotionJSX(SidebarGridItem, null, ___EmotionJSX(FixedNavigation, {
    rhythm: rhythm
  }, ___EmotionJSX(SiteTitle, {
    title: title
  }), ___EmotionJSX(Navigation, {
    docs: docs,
    location: location,
    navigationGroups: navigationGroups,
    onStateChanged: onStateChanged,
    deltas: deltas
  }))), ___EmotionJSX(ContentGridItem, null, children));
};

export { DocumentationLayoutWide };
//# sourceMappingURL=DocumentationLayoutWide.js.map