// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vZXZgeU1YqYWghemcQX2Q1
// Component: OHHOce9asx
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Navbar from "../../Navbar"; // plasmic-import: MfRpGDkJ8b4/component
import TopicBox from "../../TopicBox"; // plasmic-import: 4mErNniXH-/component
import Steps from "../../Steps"; // plasmic-import: ay6Z814B6W/component
import DataOnBox from "../../DataOnBox"; // plasmic-import: NIyfODJbPf/component
import HeroButton from "../../HeroButton"; // plasmic-import: IW0QnFgF_g4/component
import Cta from "../../Cta"; // plasmic-import: TsikC-dst8p/component
import Footer from "../../Footer"; // plasmic-import: VbkWmUKrYAc/component
import { useScreenVariants as useScreenVariantsgXe7KpKqBjNjl } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: gXe7KpKqBjNJL/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_the_smb_toolkit.module.css"; // plasmic-import: vZXZgeU1YqYWghemcQX2Q1/projectcss
import sty from "./PlasmicInvestorsCity.module.css"; // plasmic-import: OHHOce9asx/css

export const PlasmicInvestorsCity__VariantProps = new Array();

export const PlasmicInvestorsCity__ArgProps = new Array("children");

function PlasmicInvestorsCity__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsgXe7KpKqBjNjl()
  });

  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <div
            data-plasmic-name={"hero"}
            data-plasmic-override={overrides.hero}
            className={classNames(projectcss.all, sty.hero)}
          >
            <div className={classNames(projectcss.all, sty.freeBox___5ZSgy)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__llRM
                )}
              >
                {"Never miss a beat"}
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__lD63W)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bhDaz
                  )}
                >
                  {"Simplifying  how local businesses can scale and "}
                </div>
              </div>
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__qJkPs)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__nrFzk)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"900px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/the_smb_toolkit/images/_17759Jpg.jpeg",
                  fullWidth: 4133,
                  fullHeight: 3158,
                  aspectRatio: undefined
                }}
              />
            </div>
          </div>

          {true ? (
            <div
              data-plasmic-name={"quickFacts"}
              data-plasmic-override={overrides.quickFacts}
              className={classNames(projectcss.all, sty.quickFacts)}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <TopicBox
                    className={classNames(
                      "__wab_instance",
                      sty.topicBox__gOeV2
                    )}
                  />
                ),

                value: args.children
              })}

              <TopicBox
                className={classNames("__wab_instance", sty.topicBox__w9K72)}
              />

              <TopicBox
                className={classNames("__wab_instance", sty.topicBox__n2YYh)}
              />
            </div>
          ) : null}

          <div
            data-plasmic-name={"aNewWorld"}
            data-plasmic-override={overrides.aNewWorld}
            className={classNames(projectcss.all, sty.aNewWorld)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__rw5To)}
            >
              <div className={classNames(projectcss.all, sty.column__pT46T)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___6OppE)}
                  displayHeight={"auto"}
                  displayMaxHeight={"600px"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/the_smb_toolkit/images/_9142Jpg.jpeg",
                    fullWidth: 4676,
                    fullHeight: 3750,
                    aspectRatio: undefined
                  }}
                />
              </div>

              <div className={classNames(projectcss.all, sty.column__deXvI)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___0Irva
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "facts"
                    : "facts"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rdyAx
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "we're on a misssion"
                    : "we're on a misssion"}
                </div>
              </div>
            </p.Stack>
          </div>

          <div className={classNames(projectcss.all, sty.columns__jefIs)}>
            <div className={classNames(projectcss.all, sty.column__u7Ilb)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__u8D6F
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "facts"
                  : "facts"}
              </div>
            </div>

            <div className={classNames(projectcss.all, sty.column__dLsLv)}>
              <div className={classNames(projectcss.all, sty.freeBox___6Yr5B)}>
                <Steps
                  className={classNames("__wab_instance", sty.steps___8ZPc5)}
                />
              </div>

              <Steps
                className={classNames("__wab_instance", sty.steps__jHgGz)}
              />

              <Steps
                className={classNames("__wab_instance", sty.steps__v9Ag)}
              />
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.freeBox___3Zyx5)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__v1Hui
              )}
            >
              <React.Fragment>
                <React.Fragment>{""}</React.Fragment>
                <h2
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2__g0Afl
                  )}
                >
                  {"We have data on"}
                </h2>
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>

            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__teyKb)}
              displayHeight={"450px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"lazy"}
              src={{
                src: "/plasmic/the_smb_toolkit/images/globepng.png",
                fullWidth: 4096,
                fullHeight: 2040,
                aspectRatio: undefined
              }}
            />

            <div className={classNames(projectcss.all, sty.freeBox__ja1Dw)}>
              <DataOnBox
                className={classNames("__wab_instance", sty.dataOnBox__o6Ztm)}
              />

              <DataOnBox
                className={classNames("__wab_instance", sty.dataOnBox__orjNu)}
              />

              <DataOnBox
                className={classNames("__wab_instance", sty.dataOnBox__sJj0B)}
              />

              <DataOnBox
                className={classNames("__wab_instance", sty.dataOnBox__woSW)}
              />
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.freeBox___5RZnw)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___0Dprc
              )}
            >
              <React.Fragment>
                <React.Fragment>{""}</React.Fragment>
                <h2
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2__afIpa
                  )}
                >
                  {"Who we are"}
                </h2>
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>

            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__aZmHu)}
              displayHeight={"200px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"200px"}
              loading={"lazy"}
              src={{
                src: "/plasmic/the_smb_toolkit/images/image.svg",
                fullWidth: 150,
                fullHeight: 150,
                aspectRatio: 1
              }}
            />
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__jhzYe)}>
            <div className={classNames(projectcss.all, sty.columns__rWYnD)}>
              <div className={classNames(projectcss.all, sty.column___5QDsV)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___79EwX
                  )}
                >
                  {"Level up your insights"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__znrp5
                  )}
                >
                  {
                    "Join a community of insiders from across the world working to crack the code on inspiring, strengthening and scaling SMBs in your cities."
                  }
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.column__zMu0G)}>
                <div className={classNames(projectcss.all, sty.freeBox__oAdFn)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns__pqP5)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__af6I6)}
                    >
                      <HeroButton
                        boxTitle={"For Small Businesses"}
                        className={classNames(
                          "__wab_instance",
                          sty.heroButton___11VA
                        )}
                        hundredWidth={true}
                        slot={"Open source resources "}
                        slot2={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__wCHpb
                            )}
                          >
                            {"Get access to resources on pitching"}
                          </div>
                        }
                        slot3={"A free toolkit forever"}
                        slot4={
                          "Our SMB toolkit gives you free access to the know-hows of growing your business, particularly in the digital age we live in."
                        }
                        slot5={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__qQSbE
                            )}
                          >
                            {"Access our free toolkit"}
                          </div>
                        }
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__jgoOh
                          )}
                        >
                          {"Learn how to scale your business"}
                        </div>
                      </HeroButton>
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column__mc4Nh)}
                    >
                      <HeroButton
                        boxTitle={"For Small Businesses"}
                        className={classNames(
                          "__wab_instance",
                          sty.heroButton__rRoFn
                        )}
                        hundredWidth={true}
                        slot={"Open source resources "}
                        slot2={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__fvVip
                            )}
                          >
                            {"Get access to resources on pitching"}
                          </div>
                        }
                        slot3={"A free toolkit forever"}
                        slot4={
                          "Our SMB toolkit gives you free access to the know-hows of growing your business, particularly in the digital age we live in."
                        }
                        slot5={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__gHoH5
                            )}
                          >
                            {"Access our free toolkit"}
                          </div>
                        }
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__cbulS
                          )}
                        >
                          {"Learn how to scale your business"}
                        </div>
                      </HeroButton>
                    </div>
                  </p.Stack>
                </div>

                <div
                  className={classNames(projectcss.all, sty.freeBox___52Py2)}
                >
                  <HeroButton
                    boxTitle={"For Small Businesses"}
                    className={classNames(
                      "__wab_instance",
                      sty.heroButton__eqhq
                    )}
                    hundredWidth={true}
                    slot={"Open source resources "}
                    slot2={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__mHDiX
                        )}
                      >
                        {"Get access to resources on pitching"}
                      </div>
                    }
                    slot3={"A free toolkit forever"}
                    slot4={
                      "Our SMB toolkit gives you free access to the know-hows of growing your business, particularly in the digital age we live in."
                    }
                    slot5={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__tiNf
                        )}
                      >
                        {"Access our free toolkit"}
                      </div>
                    }
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__f3Q3P
                      )}
                    >
                      {"Learn how to scale your business"}
                    </div>
                  </HeroButton>
                </div>
              </div>
            </div>
          </div>

          <Cta
            data-plasmic-name={"cta"}
            data-plasmic-override={overrides.cta}
            className={classNames("__wab_instance", sty.cta)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "navbar", "hero", "quickFacts", "aNewWorld", "cta", "footer"],
  navbar: ["navbar"],
  hero: ["hero"],
  quickFacts: ["quickFacts"],
  aNewWorld: ["aNewWorld"],
  cta: ["cta"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicInvestorsCity__ArgProps,
      internalVariantPropNames: PlasmicInvestorsCity__VariantProps
    });

    return PlasmicInvestorsCity__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInvestorsCity";
  } else {
    func.displayName = `PlasmicInvestorsCity.${nodeName}`;
  }
  return func;
}

export const PlasmicInvestorsCity = Object.assign(
  // Top-level PlasmicInvestorsCity renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    hero: makeNodeComponent("hero"),
    quickFacts: makeNodeComponent("quickFacts"),
    aNewWorld: makeNodeComponent("aNewWorld"),
    cta: makeNodeComponent("cta"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicInvestorsCity
    internalVariantProps: PlasmicInvestorsCity__VariantProps,
    internalArgProps: PlasmicInvestorsCity__ArgProps
  }
);

export default PlasmicInvestorsCity;
/* prettier-ignore-end */