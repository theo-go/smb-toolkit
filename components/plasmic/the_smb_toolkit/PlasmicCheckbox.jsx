// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vZXZgeU1YqYWghemcQX2Q1
// Component: nbjVFIWQ4wv
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_the_smb_toolkit.module.css"; // plasmic-import: vZXZgeU1YqYWghemcQX2Q1/projectcss
import sty from "./PlasmicCheckbox.module.css"; // plasmic-import: nbjVFIWQ4wv/css
import SquaresvgIcon from "./icons/PlasmicIcon__Squaresvg"; // plasmic-import: r0VIWCXgXea/icon
import SquareCheckFilledsvgIcon from "./icons/PlasmicIcon__SquareCheckFilledsvg"; // plasmic-import: 8zif84K6DYd/icon
import SquareMinussvgIcon from "./icons/PlasmicIcon__SquareMinussvg"; // plasmic-import: VIj65QLgOQz/icon

export const PlasmicCheckbox__VariantProps = new Array(
  "noLabel",
  "isDisabled",
  "isChecked",
  "isIndeterminate"
);

export const PlasmicCheckbox__ArgProps = new Array(
  "children",
  "name",
  "value",
  "aria-label",
  "aria-labelledby"
);

function PlasmicCheckbox__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root,
        {
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.rootisChecked]: hasVariant(variants, "isChecked", "isChecked"),
          [sty.rootisDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),

          [sty.rootisIndeterminate]: hasVariant(
            variants,
            "isIndeterminate",
            "isIndeterminate"
          ),

          [sty.rootnoLabel]: hasVariant(variants, "noLabel", "noLabel")
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBox___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.freeBoxisChecked]: hasVariant(
            variants,
            "isChecked",
            "isChecked"
          ),

          [sty.freeBoxisDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),

          [sty.freeBoxisIndeterminate]: hasVariant(
            variants,
            "isIndeterminate",
            "isIndeterminate"
          ),

          [sty.freeBoxnoLabel]: hasVariant(variants, "noLabel", "noLabel")
        })}
      >
        {(
          hasVariant(variants, "isIndeterminate", "isIndeterminate")
            ? true
            : hasVariant(variants, "isChecked", "isChecked")
            ? true
            : true
        ) ? (
          <p.PlasmicIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            PlasmicIconType={
              hasVariant(variants, "isIndeterminate", "isIndeterminate")
                ? SquareMinussvgIcon
                : hasVariant(variants, "isChecked", "isChecked")
                ? SquareCheckFilledsvgIcon
                : SquaresvgIcon
            }
            className={classNames(projectcss.all, sty.svg, {
              [sty.svg___focusVisibleWithin]: triggers.focusVisibleWithin_root,
              [sty.svgisChecked]: hasVariant(
                variants,
                "isChecked",
                "isChecked"
              ),

              [sty.svgisDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),

              [sty.svgisIndeterminate]: hasVariant(
                variants,
                "isIndeterminate",
                "isIndeterminate"
              ),

              [sty.svgnoLabel]: hasVariant(variants, "noLabel", "noLabel")
            })}
            role={"img"}
          />
        ) : null}
      </div>

      {(hasVariant(variants, "noLabel", "noLabel") ? false : true) ? (
        <div
          data-plasmic-name={"labelContainer"}
          data-plasmic-override={overrides.labelContainer}
          className={classNames(projectcss.all, sty.labelContainer, {
            [sty.labelContainer___focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.labelContainerisDisabled]: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            ),

            [sty.labelContainernoLabel]: hasVariant(
              variants,
              "noLabel",
              "noLabel"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Enter some text",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildren___focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.slotTargetChildrenisChecked]: hasVariant(
                variants,
                "isChecked",
                "isChecked"
              ),

              [sty.slotTargetChildrenisDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),

              [sty.slotTargetChildrenisIndeterminate]: hasVariant(
                variants,
                "isIndeterminate",
                "isIndeterminate"
              ),

              [sty.slotTargetChildrennoLabel]: hasVariant(
                variants,
                "noLabel",
                "noLabel"
              )
            })
          })}
        </div>
      ) : null}
    </p.Stack>
  );
}

function useBehavior(props, ref) {
  if (!("children" in props)) {
    props = {
      ...props,
      children: "Enter some text"
    };
  }
  return pp.useCheckbox(
    PlasmicCheckbox,
    props,
    {
      isCheckedVariant: { group: "isChecked", variant: "isChecked" },
      isIndeterminateVariant: {
        group: "isIndeterminate",
        variant: "isIndeterminate"
      },

      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      noLabelVariant: { group: "noLabel", variant: "noLabel" },
      labelSlot: "children",
      root: "root"
    },

    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "svg", "labelContainer"],
  freeBox: ["freeBox", "svg"],
  svg: ["svg"],
  labelContainer: ["labelContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCheckbox__ArgProps,
      internalVariantPropNames: PlasmicCheckbox__VariantProps
    });

    return PlasmicCheckbox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCheckbox";
  } else {
    func.displayName = `PlasmicCheckbox.${nodeName}`;
  }
  return func;
}

export const PlasmicCheckbox = Object.assign(
  // Top-level PlasmicCheckbox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    svg: makeNodeComponent("svg"),
    labelContainer: makeNodeComponent("labelContainer"),
    // Metadata about props expected for PlasmicCheckbox
    internalVariantProps: PlasmicCheckbox__VariantProps,
    internalArgProps: PlasmicCheckbox__ArgProps,
    useBehavior
  }
);

export default PlasmicCheckbox;
/* prettier-ignore-end */