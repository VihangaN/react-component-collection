import CounterComponent from "./contribute/components/Counter";
import TagComponent from "./contribute/components/Tag";
import ToggleSwitch from "./contribute/components/ToggleSwitch";
import TreeSelectInput from "./contribute/components/TreeSelect";
import CountDown from "./contribute/components/CountDown";
import GradientButton from "./contribute/components/GradientButton";
import ShadowText from "./contribute/components/ShadowText";

export const config = [
  {
    title: "Toggle switch",
    component: <ToggleSwitch />,
    slug: "toggleswitch",
    github_handle: "VihangaN",
  },
  {
    title: "Tree Select",
    component: <TreeSelectInput />,
    slug: "treeSelect",
    github_handle: "VihangaN",
  },
  {
    title: "React Tag",
    component: <TagComponent />,
    slug: "tag",
    github_handle: "Dilshan97",
  },
  {
    title: "React Counter",
    component: <CounterComponent />,
    slug: "counter",
    github_handle: "Dilshan97",
  },
  {
    title: "React CountDown",
    component: <CountDown />,
    slug: "countdown",
    github_handle: "engineer-aslam-hossain",
  },
  {
    title: "React Gradient Button",
    component: <GradientButton />,
    slug: "gradient_button",
    github_handle: "engineer-aslam-hossain",
  },
  {
    title: "React Shadow Text",
    component: <ShadowText />,
    slug: "shadow_text",
    github_handle: "engineer-aslam-hossain",
  },
];
