import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


Fancybox.bind('[data-fancybox = gallery]', {
  fullScreen : {
		requestOnStart : true
	},
  hideScrollbar: true,
  Thumbs: {
    showOnStart: false,
  },
  dragToClose:false,
  Toolbar: {
    display: {
      left: [],
      middle: [],
      right: ["slideshow", "close"],
    },
  }
  });    





  /**
   * Fancybox.bind('[data-fancybox="gallery"]', {
  Images: {
    content: (_ref, slide) => {
      let rez = "<picture>";

      const media = slide.media.split(";");

      slide.sources.split(";").map((source, index) => {
        rez += `<source
          media="${media[index] || ""}"
          srcset="${source}"
        />`;
      });

      rez += `<img src="${slide.src}" alt="" />`;

      rez += "</picture>";

      return rez;
    },
  },
});
   */