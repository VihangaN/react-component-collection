import CounterComponent from "./contribute/components/Counter";
import TagComponent from "./contribute/components/Tag";
import ToggleSwitch from "./contribute/components/ToggleSwitch";
import TreeSelectInput from "./contribute/components/TreeSelect";

export const config = [
  {
    title: "Toggle switch",
    component: <ToggleSwitch/>,
    slug:"toggleswitch",
    github_handle:"VihangaN"
  },
  {
    title: "Tree Select",
    component: <TreeSelectInput/>,
    slug:"treeSelect",
    github_handle:"VihangaN"
  },
  {
    title: "React Tag",
    component: <TagComponent/>,
    slug: "tag",
    github_handle: "Dilshan97"
  },
  {
    title: "React Counter",
    component: <CounterComponent/>,
    slug: "counter",
    github_handle: "Dilshan97"
  }
  
];
