// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PlasmicTopButton } from "./plasmic/the_smb_toolkit/PlasmicTopButton";

function TopButton_(props, ref) {
  // Use PlasmicTopButton to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicTopButton are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all TopButtonProps here, but feel free
  // to do whatever works for you.
  return <PlasmicTopButton root={{ ref }} {...props} />;
}

const TopButton = React.forwardRef(TopButton_);

export default TopButton;
