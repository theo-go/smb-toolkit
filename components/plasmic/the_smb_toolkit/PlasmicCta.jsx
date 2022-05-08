// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vZXZgeU1YqYWghemcQX2Q1
// Component: TsikC-dst8p
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: yOWAHW-Bl7v/component
import ContactButton from "../../ContactButton"; // plasmic-import: _PI7_BduYq/component
import { useScreenVariants as useScreenVariantsgXe7KpKqBjNjl } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: gXe7KpKqBjNJL/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_the_smb_toolkit.module.css"; // plasmic-import: vZXZgeU1YqYWghemcQX2Q1/projectcss
import sty from "./PlasmicCta.module.css"; // plasmic-import: TsikC-dst8p/css

export const PlasmicCta__VariantProps = new Array();

export const PlasmicCta__ArgProps = new Array();

function PlasmicCta__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsgXe7KpKqBjNjl()
  });

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
        <div className={classNames(projectcss.all, sty.column___4Zv7)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__m9WnC
            )}
          >
            {"Want to learn more?"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__wF05R
            )}
          >
            {
              "We love to hear about new ideas, projects and businesses that you're passionate about.\n\nReach out to our team for questions, inquiries and more and we'll get back to you as soon as possible."
            }
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.column__gijmH)}>
          <div className={classNames(projectcss.all, sty.freeBox__aCZh)}>
            <div className={classNames(projectcss.all, sty.freeBox__lcsfo)}>
              <div className={classNames(projectcss.all, sty.freeBox__odxnq)}>
                <TextInput
                  data-plasmic-name={"firstName"}
                  data-plasmic-override={overrides.firstName}
                  className={classNames("__wab_instance", sty.firstName)}
                  placeholder={"First Name"}
                />
              </div>

              <div className={classNames(projectcss.all, sty.freeBox___8BiqU)}>
                <TextInput
                  data-plasmic-name={"lastName"}
                  data-plasmic-override={overrides.lastName}
                  className={classNames("__wab_instance", sty.lastName)}
                  placeholder={"Last Name"}
                />
              </div>
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__tum1G)}>
              <div className={classNames(projectcss.all, sty.freeBox__ouk6H)}>
                <TextInput
                  data-plasmic-name={"email"}
                  data-plasmic-override={overrides.email}
                  className={classNames("__wab_instance", sty.email)}
                  placeholder={"Email"}
                />
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__jjAmW)}>
                <TextInput
                  data-plasmic-name={"companyName"}
                  data-plasmic-override={overrides.companyName}
                  className={classNames("__wab_instance", sty.companyName)}
                  placeholder={"Company Name"}
                />
              </div>
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__cn5Uo)}>
              <div className={classNames(projectcss.all, sty.freeBox__d7SLv)}>
                <TextInput
                  data-plasmic-name={"message"}
                  data-plasmic-override={overrides.message}
                  aria-labelledby={""}
                  className={classNames("__wab_instance", sty.message)}
                  placeholder={"Message"}
                />
              </div>
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__jMqv)}>
              <ContactButton
                data-plasmic-name={"contactButton"}
                data-plasmic-override={overrides.contactButton}
                className={classNames("__wab_instance", sty.contactButton)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "columns",
    "firstName",
    "lastName",
    "email",
    "companyName",
    "message",
    "contactButton"
  ],

  columns: [
    "columns",
    "firstName",
    "lastName",
    "email",
    "companyName",
    "message",
    "contactButton"
  ],

  firstName: ["firstName"],
  lastName: ["lastName"],
  email: ["email"],
  companyName: ["companyName"],
  message: ["message"],
  contactButton: ["contactButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCta__ArgProps,
      internalVariantPropNames: PlasmicCta__VariantProps
    });

    return PlasmicCta__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCta";
  } else {
    func.displayName = `PlasmicCta.${nodeName}`;
  }
  return func;
}

export const PlasmicCta = Object.assign(
  // Top-level PlasmicCta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    firstName: makeNodeComponent("firstName"),
    lastName: makeNodeComponent("lastName"),
    email: makeNodeComponent("email"),
    companyName: makeNodeComponent("companyName"),
    message: makeNodeComponent("message"),
    contactButton: makeNodeComponent("contactButton"),
    // Metadata about props expected for PlasmicCta
    internalVariantProps: PlasmicCta__VariantProps,
    internalArgProps: PlasmicCta__ArgProps
  }
);

export default PlasmicCta;
/* prettier-ignore-end */
