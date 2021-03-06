// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vZXZgeU1YqYWghemcQX2Q1
// Component: MfRpGDkJ8b4
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: bpJXnYRgPLH/component
import { useScreenVariants as useScreenVariantsgXe7KpKqBjNjl } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: gXe7KpKqBjNJL/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_the_smb_toolkit.module.css"; // plasmic-import: vZXZgeU1YqYWghemcQX2Q1/projectcss
import sty from "./PlasmicNavbar.module.css"; // plasmic-import: MfRpGDkJ8b4/css

export const PlasmicNavbar__VariantProps = new Array();

export const PlasmicNavbar__ArgProps = new Array();

function PlasmicNavbar__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsgXe7KpKqBjNjl()
  });

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
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___22ADg)}
      >
        <p.PlasmicLink
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(projectcss.all, projectcss.a, sty.link)}
          component={Link}
          href={"/"}
          platform={"nextjs"}
        >
          {true ? (
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"40px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"40px"}
              src={{
                src: "/plasmic/the_smb_toolkit/images/group1349Png.png",
                fullWidth: 412,
                fullHeight: 511,
                aspectRatio: undefined
              }}
            />
          ) : null}

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__cLgpe
            )}
          >
            {"The SMB Growth Toolkit"}
          </div>
        </p.PlasmicLink>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__gsWdm)}
        >
          <Button
            className={classNames("__wab_instance", sty.button__jxvF4)}
            color={"clear"}
            link={"/cities-and-investors"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__wtSq4
              )}
            >
              {"For Cities & Investors"}
            </div>
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__uyZPw)}
            color={"clear"}
            link={"/checklist-explainer"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___8K6Hk
              )}
            >
              {"The SMB Checklist"}
            </div>
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button___9Poq9)}
            color={"clear"}
            link={"/resources-for-businesses"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__n9Vv
              )}
            >
              {"More Resources"}
            </div>
          </Button>
        </p.Stack>

        {false ? (
          <div className={classNames(projectcss.all, sty.freeBox___5D7Uz)}>
            <button
              className={classNames(
                projectcss.all,
                projectcss.button,
                projectcss.__wab_text,
                sty.button__h7Mvv
              )}
            >
              {"Sign up"}
            </button>

            {true ? (
              <Button
                className={classNames("__wab_instance", sty.button__t47Z2)}
                color={"clear"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__aYtQ5
                  )}
                >
                  {"Log in"}
                </div>
              </Button>
            ) : null}
          </div>
        ) : null}
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "link", "img"],
  link: ["link", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbar__ArgProps,
      internalVariantPropNames: PlasmicNavbar__VariantProps
    });

    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */
