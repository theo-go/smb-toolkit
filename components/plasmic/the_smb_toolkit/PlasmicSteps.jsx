// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vZXZgeU1YqYWghemcQX2Q1
// Component: ay6Z814B6W
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_the_smb_toolkit.module.css"; // plasmic-import: vZXZgeU1YqYWghemcQX2Q1/projectcss
import sty from "./PlasmicSteps.module.css"; // plasmic-import: ay6Z814B6W/css

export const PlasmicSteps__VariantProps = new Array();

export const PlasmicSteps__ArgProps = new Array();

function PlasmicSteps__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text___8PeZx
        )}
      >
        {"Enter some text"}
      </div>

      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"100px"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"100px"}
        loading={"lazy"}
        src={{
          src: "/plasmic/the_smb_toolkit/images/image.svg",
          fullWidth: 150,
          fullHeight: 150,
          aspectRatio: 1
        }}
      />

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__wEpe
        )}
      >
        {"Enter some text"}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSteps__ArgProps,
      internalVariantPropNames: PlasmicSteps__VariantProps
    });

    return PlasmicSteps__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSteps";
  } else {
    func.displayName = `PlasmicSteps.${nodeName}`;
  }
  return func;
}

export const PlasmicSteps = Object.assign(
  // Top-level PlasmicSteps renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicSteps
    internalVariantProps: PlasmicSteps__VariantProps,
    internalArgProps: PlasmicSteps__ArgProps
  }
);

export default PlasmicSteps;
/* prettier-ignore-end */