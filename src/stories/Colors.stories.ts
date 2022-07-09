import ColorsStory from "./ColorsStory.vue";

export default {
  title: "Colors",
  component: ColorsStory,
};

export const Colors = () => ({
  components: { ColorsStory },
  template: "<colors-story />",
});
