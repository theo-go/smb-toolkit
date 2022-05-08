// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vZXZgeU1YqYWghemcQX2Q1
// Component: VbkWmUKrYAc
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import FooterLinks from "../../FooterLinks"; // plasmic-import: UMbYnRguAf/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_the_smb_toolkit.module.css"; // plasmic-import: vZXZgeU1YqYWghemcQX2Q1/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: VbkWmUKrYAc/css

export const PlasmicFooter__VariantProps = new Array();

export const PlasmicFooter__ArgProps = new Array();

function PlasmicFooter__RenderFunc(props) {
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
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        className={classNames(projectcss.all, sty.columns)}
      >
        <div className={classNames(projectcss.all, sty.column__xr3Yi)}>
          {true ? (
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img___9Xkiq)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"160px"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: "/plasmic/the_smb_toolkit/images/image.svg",
                fullWidth: 150,
                fullHeight: 150,
                aspectRatio: 1
              }}
            />
          ) : null}

          <p.PlasmicLink
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(projectcss.all, projectcss.a, sty.link)}
            component={Link}
            href={"https://www.plasmic.app/"}
            platform={"nextjs"}
          >
            {true ? (
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__n0Mt4)}
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
                sty.text___0Tadp
              )}
            >
              {"The SMB Growth Toolkit"}
            </div>
          </p.PlasmicLink>

          <div className={classNames(projectcss.all, sty.freeBox__uzv0W)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__wdvem
              )}
            >
              <React.Fragment>
                <React.Fragment>
                  {"We're on a mission to empower businesses with "}
                </React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#3B94FF" }}
                >
                  {"no-nonsense, real world advice."}
                </span>
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>
          </div>

          <div
            data-plasmic-name={"copyright"}
            data-plasmic-override={overrides.copyright}
            className={classNames(projectcss.all, sty.copyright)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kSpaI
              )}
            >
              {"© All rights reserved"}
            </div>
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.column__dht0N)}>
          <div className={classNames(projectcss.all, sty.freeBox___1GtTa)}>
            <FooterLinks
              className={classNames("__wab_instance", sty.footerLinks__vYslc)}
              link={"/checklist-explainer"}
            >
              {"The SMB Checklist"}
            </FooterLinks>

            <FooterLinks
              className={classNames("__wab_instance", sty.footerLinks__wcwFc)}
              link={"/resources-for-businesses"}
            >
              {"101 Resources"}
            </FooterLinks>

            <FooterLinks
              className={classNames("__wab_instance", sty.footerLinks__gp0Tv)}
              link={"/cities-and-investors"}
            >
              {"For Cities & Investors"}
            </FooterLinks>

            <FooterLinks
              className={classNames("__wab_instance", sty.footerLinks__cFnym)}
              link={"/contact"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "columns", "link", "copyright"],
  columns: ["columns", "link", "copyright"],
  link: ["link"],
  copyright: ["copyright"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    link: makeNodeComponent("link"),
    copyright: makeNodeComponent("copyright"),
    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
