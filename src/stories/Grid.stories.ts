import { UiGridCol } from "../components/UiLayout";
import LayoutStory from "./LayoutStory.vue";

import "./main.css";

export default {
  title: "Layout",
  component: UiGridCol,
};

export const Grid = () => ({
  components: { LayoutStory },
  template: `<layout-story />`,
});
