// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vZXZgeU1YqYWghemcQX2Q1
// Component: zSCV1taeld
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_the_smb_toolkit.module.css"; // plasmic-import: vZXZgeU1YqYWghemcQX2Q1/projectcss
import sty from "./PlasmicTeamBox.module.css"; // plasmic-import: zSCV1taeld/css

export const PlasmicTeamBox__VariantProps = new Array();

export const PlasmicTeamBox__ArgProps = new Array(
  "teamImg",
  "name",
  "description"
);

function PlasmicTeamBox__RenderFunc(props) {
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
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"auto"}
        displayMaxHeight={"none"}
        displayMaxWidth={"90%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"100%"}
        loading={"lazy"}
        src={
          args.teamImg !== undefined
            ? args.teamImg
            : {
                src: "/plasmic/the_smb_toolkit/images/photo202204301431312Png.png",
                fullWidth: 510,
                fullHeight: 512,
                aspectRatio: undefined
              }
        }
      />

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Our team is loading :)",
          value: args.name,
          className: classNames(sty.slotTargetName)
        })}
      </div>

      <div
        data-plasmic-name={"description"}
        data-plasmic-override={overrides.description}
        className={classNames(projectcss.all, sty.description)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Loading...",
          value: args.description,
          className: classNames(sty.slotTargetDescription)
        })}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "freeBox", "description"],
  img: ["img"],
  freeBox: ["freeBox"],
  description: ["description"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTeamBox__ArgProps,
      internalVariantPropNames: PlasmicTeamBox__VariantProps
    });

    return PlasmicTeamBox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTeamBox";
  } else {
    func.displayName = `PlasmicTeamBox.${nodeName}`;
  }
  return func;
}

export const PlasmicTeamBox = Object.assign(
  // Top-level PlasmicTeamBox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    freeBox: makeNodeComponent("freeBox"),
    description: makeNodeComponent("description"),
    // Metadata about props expected for PlasmicTeamBox
    internalVariantProps: PlasmicTeamBox__VariantProps,
    internalArgProps: PlasmicTeamBox__ArgProps
  }
);

export default PlasmicTeamBox;
/* prettier-ignore-end */
