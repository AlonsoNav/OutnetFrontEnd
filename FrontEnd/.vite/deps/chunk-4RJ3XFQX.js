import {
  require_react
} from "./chunk-O6O4HUXW.js";
import {
  __toESM
} from "./chunk-LQ2VYIYD.js";

// node_modules/@restart/ui/esm/SelectableContext.js
var React = __toESM(require_react());
var SelectableContext = React.createContext(null);
var makeEventKey = (eventKey, href = null) => {
  if (eventKey != null)
    return String(eventKey);
  return href || null;
};
var SelectableContext_default = SelectableContext;

// node_modules/react-bootstrap/esm/NavbarContext.js
var React2 = __toESM(require_react());
var context = React2.createContext(null);
context.displayName = "NavbarContext";
var NavbarContext_default = context;

export {
  makeEventKey,
  SelectableContext_default,
  NavbarContext_default
};
//# sourceMappingURL=chunk-4RJ3XFQX.js.map
